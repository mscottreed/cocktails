const FACETS = [
  // keepOrder: categories read in book order (Spritz, then Negroni), not alphabetically
  { key: "category", label: "Category", get: c => [c.category], keepOrder: true },
  { key: "base",     label: "Base",     get: c => [c.base] },
  { key: "bitter",   label: "Bitter",   get: c => c.bitters || [] },
  { key: "liqueur",  label: "Liqueur",  get: c => c.liqueurs || [] },
  { key: "method",   label: "Method",   get: c => [c.method] }
];

const active = {};   // facet key -> Set of selected values
FACETS.forEach(f => active[f.key] = new Set());
let query = "";

const $filters = document.getElementById("filters");
const $grid = document.getElementById("grid");
const $count = document.getElementById("count");
const $empty = document.getElementById("empty");
const $search = document.getElementById("search");
const $dialog = document.getElementById("recipe");
const $body = document.getElementById("recipe-body");

function buildFilters() {
  FACETS.forEach(facet => {
    const found = [...new Set(COCKTAILS.flatMap(facet.get))];
    const values = facet.keepOrder ? found : found.sort();
    if (values.length < 2) return;   // a filter with one option filters nothing

    const group = document.createElement("div");
    group.className = "filter-group";
    const legend = document.createElement("span");
    legend.textContent = facet.label;
    group.append(legend);

    values.forEach(value => {
      const chip = document.createElement("button");
      chip.className = "chip";
      chip.textContent = value;
      chip.setAttribute("aria-pressed", "false");
      chip.onclick = () => {
        const set = active[facet.key];
        set.has(value) ? set.delete(value) : set.add(value);
        chip.setAttribute("aria-pressed", String(set.has(value)));
        render();
      };
      group.append(chip);
    });
    $filters.append(group);
  });

  const reset = document.createElement("button");
  reset.className = "reset";
  reset.textContent = "Clear filters";
  reset.onclick = () => {
    FACETS.forEach(f => active[f.key].clear());
    query = "";
    $search.value = "";
    $filters.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", "false"));
    render();
  };
  $filters.append(reset);
}

function matches(cocktail) {
  const facetsPass = FACETS.every(facet => {
    const set = active[facet.key];
    return set.size === 0 || facet.get(cocktail).some(v => set.has(v));
  });
  if (!facetsPass) return false;
  if (!query) return true;

  const haystack = [
    cocktail.name,
    cocktail.blurb,
    ...cocktail.ingredients.map(i => i.name),
    ...(cocktail.bitters || []),
    ...(cocktail.liqueurs || [])
  ].join(" ").toLowerCase();
  return haystack.includes(query);
}

function render() {
  const shown = COCKTAILS.filter(matches);
  $grid.innerHTML = "";

  shown.forEach(c => {
    const li = document.createElement("li");
    const card = document.createElement("button");
    card.className = "card";
    card.innerHTML = [
      "<h2>" + c.name + "</h2>",
      "<p>" + c.blurb + "</p>",
      '<div class="tags">',
      [c.category].concat(c.bitters || [], c.liqueurs || [])
        .map(t => '<span class="tag">' + t + "</span>").join(""),
      "</div>"
    ].join("");
    card.onclick = () => openRecipe(c);
    li.append(card);
    $grid.append(li);
  });

  $count.textContent = shown.length + " of " + COCKTAILS.length +
    (COCKTAILS.length === 1 ? " drink" : " drinks");
  $empty.hidden = shown.length > 0;
}

function openRecipe(c) {
  const ingredients = c.ingredients.map(i =>
    "<li><span class=\"amt\">" + i.amount + "</span><span>" + i.name +
    (i.note ? ' <span class="note">(' + i.note + ")</span>" : "") +
    "</span></li>"
  ).join("");

  const sources = (c.sources || []).map(s =>
    '<a href="' + s.url + '" target="_blank" rel="noopener">' + s.label + "</a>"
  ).join(" &middot; ");

  $body.innerHTML = [
    "<h2>" + c.name + "</h2>",
    '<p class="serve">' + [c.yield, c.glass, c.ice, c.method]
      .filter(Boolean).join(" &middot; ") + "</p>",
    "<h3>Ingredients</h3>",
    '<ul class="ingredients">' + ingredients + "</ul>",
    "<h3>Method</h3>",
    '<ol class="steps">' + c.steps.map(s => "<li>" + s + "</li>").join("") + "</ol>",
    "<h3>Garnish</h3>",
    '<p class="garnish">' + c.garnish + "</p>",
    c.notes ? '<h3>Notes</h3><p class="notes">' + c.notes + "</p>" : "",
    sources ? '<p class="sources">Source: ' + sources + "</p>" : ""
  ].join("");

  $dialog.showModal();
}

document.getElementById("close").onclick = () => $dialog.close();
$dialog.onclick = e => { if (e.target === $dialog) $dialog.close(); };
$search.oninput = e => { query = e.target.value.trim().toLowerCase(); render(); };

buildFilters();
render();
