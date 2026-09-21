# Cocktail Book

A small static cocktail site. No build step, no dependencies — open `index.html` in a browser,
or push the folder to GitHub Pages.

```
index.html          markup
styles.css          styling (light + dark)
app.js              filtering, search, recipe dialog
data/cocktails.js   the recipes
```

## Adding a cocktail

Everything lives in `data/cocktails.js`. Add an object to the array:

```js
{
  id: "negroni",                    // unique, kebab-case
  name: "Negroni",
  category: "Classic",              // becomes a Category filter chip
  base: "Gin",                      // becomes a Base filter chip
  bitters: ["Campari"],             // bitter aperitivi and amari — Bitter chips
  liqueurs: ["Maraschino"],         // everything else sweet — Liqueur chips
  method: "Stir",                   // Build / Stir / Shake / Blend …
  glass: "Rocks glass",
  yield: "Pitcher, serves 6",          // optional — omit for single-serve drinks
  ice: "Large cube",
  blurb: "One line for the card.",
  ingredients: [
    { amount: "1 oz", name: "Gin" },
    { amount: "1 oz", name: "Sweet vermouth", note: "Carpano Antica" }  // note is optional
  ],
  steps: ["Stir with ice.", "Strain over a large cube."],
  garnish: "Orange peel",
  notes: "Optional — ratio choices, history, substitutions.",
  sources: [{ label: "Difford's Guide", url: "https://…" }]            // optional
}
```

Filter chips build themselves from the data, so a new base spirit or liqueur shows up on its
own. A facet with only one distinct value is hidden, since it would filter nothing.

`bitters` and `liqueurs` are both optional and both feed the card tags and the search index.
The split keeps either row from getting long: bitter aperitivi and amari (Campari, Aperol,
Suze, Cynar, Gran Classico, Select, Luxardo Bitter Bianco) go in `bitters`, and sweet liqueurs
and aromatized wines (limoncello, elderflower, Lillet) go in `liqueurs`.

Category is the top-level organizer: the book is grouped by drink family (Spritz, Negroni, …)
rather than by season or occasion.

## Current contents

58 drinks in eight categories.

**Spritz** — Aperol, Hugo, Limoncello, Select, Lillet Rosé, Lillet Blanc, Kir Royale, Italicus, Gentian.
**Negroni** — Negroni, Boulevardier, Sbagliato, White (Luxardo Bitter Bianco), Blonde (Suze),
Pink (Sweet Gwendoline), Amber (Cynar), Orange (Gran Classico + Campari), Italicus.

**Equal Parts** — Naked and Famous, Blood and Sand, Paper Plane, Last Word, Corpse Reviver #2,
Final Ward.
All 0.75 oz × 4, shaken and served up.
**Spirit-Forward** — Manhattan, Old Fashioned, Mint Julep, Sazerac, Vieux Carré, El Presidente,
Black Ship, Monte Carlo, Black Manhattan, Kentucky Godfather. Spirit-led, no citrus in the glass.
**Martini** — Espresso, Lychee, Vesper, Grapefruit, Dirty, French. Grouped by how you'd order them
rather than by composition — most have no gin or vermouth in them at all.
**Sours** — Daiquiri, Margarita, Whiskey Sour, Pisco Sour, French 75, Gimlet, Sidecar, Bramble, Amaretto Sour,
Brandy Crusta, Champs-Élysées, Jungle Bird.
**Highballs** — Gin & Tonic, Greyhound, Paloma, Jameson and Ginger, Bourbon and Ginger.
**Hot Drinks** — Irish Coffee.

Categories are drink families, deliberately not base spirits — the Base filter already covers
that ground.

The colored Negronis are house recipes with no published source, so their `sources` are empty
and the reasoning lives in `notes`. Where a drink departs from the canonical version — a
substituted spirit, an adjusted ratio — `notes` records what changed and why.

Ratios were cross-checked against the producers' own recipes and Difford's Guide; where sites
disagreed, the chosen version and the alternative are recorded in each recipe's `notes`. The
Hugo is a house ratio, not a published one.
