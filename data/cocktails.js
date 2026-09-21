// Cocktail data. Plain JS (not JSON) so the site works from file:// as well as a web server.
window.COCKTAILS = [
  {
    id: "aperol-spritz",
    name: "Aperol Spritz",
    category: "Spritz",
    base: "Sparkling Wine",
    bitters: ["Aperol"],
    method: "Build",
    glass: "Wine glass",
    ice: "Filled with ice",
    blurb: "The one everyone knows. Bittersweet orange, low proof, endlessly drinkable.",
    ingredients: [
      { amount: "3 oz", name: "Prosecco DOC" },
      { amount: "2 oz", name: "Aperol" },
      { amount: "1 oz", name: "Soda water" }
    ],
    steps: [
      "Fill a large wine glass generously with ice.",
      "Pour in the Prosecco first — it keeps the bubbles lively.",
      "Add the Aperol, then top with soda water.",
      "Stir once, gently."
    ],
    garnish: "Orange slice",
    notes: "The classic 3–2–1 ratio, as published by Aperol and recognized by the IBA. For a drier drink, pull the Aperol back to 1.5 oz.",
    sources: [
      { label: "Aperol (official)", url: "https://www.aperol.com/en-us/aperol-spritz-cocktail/" }
    ]
  },
  {
    id: "hugo-spritz",
    name: "Hugo Spritz",
    category: "Spritz",
    base: "Sparkling Wine",
    liqueurs: ["Elderflower Liqueur"],
    method: "Build",
    glass: "Wine glass",
    ice: "Filled with ice",
    blurb: "Floral and long, with mint and lime. Lighter than it sounds.",
    ingredients: [
      { amount: "1.5 oz", name: "Elderflower liqueur", note: "St-Germain or similar" },
      { amount: "3 oz", name: "Prosecco", note: "dry" },
      { amount: "2 oz", name: "Soda water" },
      { amount: "8–10", name: "Mint leaves", note: "optional" }
    ],
    steps: [
      "Clap the mint leaves between your palms to wake them up, then drop them in the glass.",
      "Fill the glass with ice.",
      "Add the elderflower liqueur, then the Prosecco, then the soda water.",
      "Stir gently — don't bruise the mint."
    ],
    garnish: "Mint sprig and a lime wedge",
    notes: "House ratio, longer and fizzier than the St-Germain and Difford's versions, which both run 1⅓ oz elderflower to 2 oz Prosecco and 2 oz soda. The original South Tyrolean Hugo was made with elderflower syrup instead of liqueur.",
    sources: [
      { label: "St-Germain (official)", url: "https://www.stgermainliqueur.com/cocktails/hugo-spritz/" },
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/5039/hugo-spritz" }
    ]
  },
  {
    id: "limoncello-spritz",
    name: "Limoncello Spritz",
    category: "Spritz",
    base: "Sparkling Wine",
    liqueurs: ["Limoncello"],
    method: "Build",
    glass: "Wine glass",
    ice: "Filled with ice",
    blurb: "Bright lemon with fizz, more tart than candied.",
    ingredients: [
      { amount: "1⅔ oz", name: "Limoncello" },
      { amount: "2½ oz", name: "Prosecco", note: "extra dry" },
      { amount: "1 oz", name: "Soda water" }
    ],
    steps: [
      "Fill a wine glass with ice.",
      "Add the limoncello, then the Prosecco, then the soda water.",
      "Stir briefly."
    ],
    garnish: "Lemon wheel and a mint sprig",
    notes: "Difford's ratio, chosen over the widely-posted 3–2–1 version (2 oz limoncello to 3 oz Prosecco), which runs sweet. Limoncello is roughly a third sugar. There is no official recipe for this one.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/4242/limoncello-spritz" }
    ]
  },
  {
    id: "select-spritz",
    name: "Select Spritz",
    category: "Spritz",
    base: "Sparkling Wine",
    bitters: ["Select Aperitivo"],
    method: "Build",
    glass: "Wine glass",
    ice: "Filled with ice",
    blurb: "The original Venetian spritz. More bitter and more herbal than Aperol.",
    ingredients: [
      { amount: "3 oz", name: "Prosecco" },
      { amount: "2 oz", name: "Select Aperitivo" },
      { amount: "1 oz", name: "Soda water" }
    ],
    steps: [
      "Fill a wine glass with ice.",
      "Add the Prosecco, the Select, and the soda.",
      "Stir gently."
    ],
    garnish: "One green olive, pit in (traditional) — or an orange slice",
    notes: "Select has been made in Venice since 1920 and predates the Aperol version. The salty olive is the Venetian signature and cuts the sweetness; orange plays up the citrus instead. In Venetian bàcari it's often built on still dry white wine rather than Prosecco.",
    sources: [
      { label: "Select Aperitivo (official)", url: "https://selectaperitivo.com/select-spritz/" }
    ]
  },
  {
    id: "lillet-rose-spritz",
    name: "Lillet Rosé Spritz",
    category: "Spritz",
    base: "Aperitif Wine",
    liqueurs: ["Lillet Rosé"],
    method: "Build",
    glass: "Wine glass",
    ice: "Filled with ice",
    blurb: "Equal parts Lillet and pink grapefruit. Low proof and easy to drink.",
    ingredients: [
      { amount: "2.5 oz", name: "Lillet Rosé" },
      { amount: "2.5 oz", name: "Grapefruit soda", note: "Fever-Tree Sparkling Pink Grapefruit, or Q from Vons" },
      { amount: "2 oz", name: "Prosecco", note: "optional" }
    ],
    steps: [
      "Fill a wine glass with ice.",
      "Add the Lillet Rosé, then top with the grapefruit soda.",
      "Add Prosecco if you want it longer and drier.",
      "Stir gently."
    ],
    garnish: "Grapefruit slice — a sage sprig is good alongside it",
    notes: "Lillet's own 1:1 ratio, so the Lillet leads: honeyed and candied-orange against the grapefruit. Fever-Tree's serve goes much longer at roughly 1 part Lillet to 3 parts soda, which reads mostly as grapefruit. Neither official version includes Prosecco; it's a two-ingredient highball unless you add it. At 17% ABV, Lillet keeps this light either way.",
    sources: [
      { label: "Lillet (official)", url: "https://www.lillet.com/en-us/cocktails/lillet-grapefruit-spritz/" },
      { label: "Fever-Tree", url: "https://fever-tree.com/en-us/products/sparkling-pink-grapefruit" }
    ]
  },
  {
    id: "lillet-blanc-spritz",
    name: "Lillet Blanc Spritz",
    category: "Spritz",
    base: "Sparkling Wine",
    liqueurs: ["Lillet Blanc"],
    method: "Build",
    glass: "Wine glass",
    ice: "Filled with ice",
    blurb: "Lillet lengthened with Prosecco. Citrus, honey, a little bitter.",
    ingredients: [
      { amount: "2 oz", name: "Lillet Blanc" },
      { amount: "3 oz", name: "Prosecco", note: "dry" },
      { amount: "1 oz", name: "Soda water", note: "pineapple flavored if you can get it" }
    ],
    steps: [
      "Fill a wine glass with ice.",
      "Add the Lillet Blanc, then the Prosecco poured slowly.",
      "Top with the soda water and stir gently."
    ],
    garnish: "Lemon wheel and a mint sprig",
    notes: "Pineapple soda water is worth hunting for: it picks up the tropical note already in Lillet Blanc and keeps the drink from reading as plain white wine. Plain club soda is fine otherwise. Not to be confused with the Lillet Vive, the German and Austrian standard, which is Lillet Blanc with tonic, cucumber, a strawberry and mint, and is drier and more botanical.",
    sources: [
      { label: "Feast + West", url: "https://feastandwest.com/lillet-spritz/" }
    ]
  },
  {
    id: "kir-royale",
    name: "Kir Royale",
    category: "Spritz",
    base: "Sparkling Wine",
    liqueurs: ["Chambord"],
    method: "Build",
    glass: "Flute",
    ice: "Served without ice",
    blurb: "Berry liqueur under champagne. Two ingredients and about ten seconds.",
    ingredients: [
      { amount: "0.5 oz", name: "Chambord" },
      { amount: "5 oz", name: "Champagne", note: "brut, well chilled" }
    ],
    steps: [
      "Pour the Chambord into a chilled flute.",
      "Top slowly with champagne. It mixes itself on the way in, so don't stir."
    ],
    garnish: "A raspberry",
    notes: "Named for Félix Kir, the mayor of Dijon who pushed white wine with cassis after the war; the Royale swaps the still wine for champagne. The classic calls for crème de cassis, and Chambord is the common modern substitution: black raspberry instead of blackcurrant, a little sweeter and more perfumed. Roughly 1:10, so the liqueur is seasoning rather than a component. Use a brut champagne, because anything sweeter has nothing to push against.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/1114/kir-royale" }
    ]
  },
  {
    id: "italicus-spritz",
    name: "Italicus Spritz",
    category: "Spritz",
    base: "Sparkling Wine",
    liqueurs: ["Italicus"],
    method: "Build",
    glass: "Wine glass",
    ice: "Filled with ice",
    blurb: "Bergamot and prosecco, cut with olives. Floral without being sweet.",
    ingredients: [
      { amount: "1.5 oz", name: "Italicus" },
      { amount: "3 oz", name: "Prosecco", note: "or champagne, chilled" }
    ],
    steps: [
      "Fill a wine glass with ice.",
      "Add the Italicus, then top with Prosecco.",
      "Stir once, gently."
    ],
    garnish: "Three green olives",
    notes: "Giuseppe Gallo built Italicus in 2016 and this two-ingredient serve alongside it, so it is the drink the bottle exists for rather than a riff. Rosolio is an old Italian style made from equal parts water, spirit and sugar, flavored here with bergamot peel. The olives are not decoration: the salt is what keeps the floral sweetness in check, the same job it does in a Select Spritz.",
    sources: [
      { label: "Italicus (official)", url: "https://rosolioitalicus.com/italicus-spritz/" },
      { label: "Italicus Rosolio", url: "https://en.wikipedia.org/wiki/Italicus_Rosolio_di_Bergamotto" }
    ]
  },
  {
    id: "gentian-spritz",
    name: "Gentian Spritz",
    category: "Spritz",
    base: "Sparkling Wine",
    bitters: ["Lo-Fi Gentian Amaro"],
    method: "Build",
    glass: "Wine glass",
    ice: "Filled with ice",
    blurb: "Bitter from gentian rather than orange. Lighter than it has any right to be.",
    ingredients: [
      { amount: "2 oz", name: "Lo-Fi Gentian Amaro" },
      { amount: "3 oz", name: "Prosecco" },
      { amount: "1 oz", name: "Soda water" }
    ],
    steps: [
      "Fill a wine glass with ice.",
      "Pour in the Prosecco, then the Lo-Fi.",
      "Top with soda water and stir once."
    ],
    garnish: "Grapefruit twist",
    notes: "No published recipe for this one. It is the standard 3-2-1 spritz frame applied to the bottle, which is what the bottle is built for. Lo-Fi Aperitifs is a Napa project between Gallo and Steven Grasse's Quaker City Mercantile; the Gentian Amaro runs 17.5% ABV on a white wine base, with gentian and cinchona under orange oil, hibiscus, grapefruit and ginger. Its bitterness is deliberately restrained, so this lands lighter and more floral than the Aperol or the Select, and the gentian reads as grapefruit pith rather than burnt orange. The twist picks up citrus already in the bottle.",
    sources: [
      { label: "Lo-Fi Aperitifs", url: "https://www.lofiaperitifs.com/000000000210060874.html" }
    ]
  },
  {
    id: "negroni",
    name: "Negroni",
    category: "Negroni",
    base: "Gin",
    bitters: ["Campari"],
    method: "Build",
    glass: "Old-fashioned glass",
    ice: "Filled with ice",
    blurb: "Equal parts gin, Campari and sweet vermouth. Bitter and direct.",
    ingredients: [
      { amount: "1 oz", name: "Gin" },
      { amount: "1 oz", name: "Campari" },
      { amount: "1 oz", name: "Sweet vermouth" }
    ],
    steps: [
      "Fill an old-fashioned glass with ice.",
      "Pour the gin, Campari and sweet vermouth directly into the glass.",
      "Stir gently."
    ],
    garnish: "Half an orange slice",
    notes: "The IBA recipe, built in the glass rather than stirred and strained. Equal parts is what made this a classic: easy to remember, hard to get wrong. Bars often stir in a mixing glass and strain over a fresh large cube for a colder drink with less dilution ahead of it, and swap the slice for an expressed orange peel. Pushing gin to 1.5 oz keeps the juniper from getting buried.",
    sources: [
      { label: "IBA / Negroni", url: "https://en.wikipedia.org/wiki/Negroni" }
    ]
  },
  {
    id: "boulevardier",
    name: "Boulevardier",
    category: "Negroni",
    base: "Bourbon",
    bitters: ["Campari"],
    method: "Stir",
    glass: "Old-fashioned glass",
    ice: "Large cube",
    blurb: "The whiskey Negroni. Rounder and warmer, with the bitterness still intact.",
    ingredients: [
      { amount: "1.5 oz", name: "Bourbon" },
      { amount: "1 oz", name: "Campari" },
      { amount: "1 oz", name: "Sweet vermouth" }
    ],
    steps: [
      "Combine all three in a mixing glass with ice.",
      "Stir about 20 seconds, until the outside of the glass frosts.",
      "Strain over a large cube in an old-fashioned glass."
    ],
    garnish: "Expressed orange peel",
    notes: "The modern 3:2:2 standard, from Ted Haigh's 2007 revival and now followed by the IBA and Difford's. Whiskey needs the extra volume to carry over Campari in a way gin doesn't. The 1927 original from Harry McElhone's Barflies and Cocktails, credited to Erskine Gwynne, was equal parts. Rye in place of bourbon is a common swap: its pepper cuts against the Campari instead of compounding the sweetness.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/2955/boulevardier-cocktail" },
      { label: "Punch", url: "https://punchdrink.com/articles/ultimate-best-boulevardier-cocktail-recipe/" }
    ]
  },
  {
    id: "negroni-sbagliato",
    name: "Negroni Sbagliato",
    category: "Negroni",
    base: "Sparkling Wine",
    bitters: ["Campari"],
    method: "Build",
    glass: "Old-fashioned glass",
    ice: "Filled with ice",
    blurb: "The mistaken Negroni, with prosecco where the gin should be. Lower proof, fizzy.",
    ingredients: [
      { amount: "1 oz", name: "Campari" },
      { amount: "1 oz", name: "Sweet vermouth" },
      { amount: "1 oz", name: "Prosecco" }
    ],
    steps: [
      "Fill an old-fashioned glass with ice.",
      "Add the Campari and sweet vermouth.",
      "Top with Prosecco and stir gently, once."
    ],
    garnish: "Orange half-moon",
    notes: "Sbagliato means mistaken: Mirko Stocchetto reached for Prosecco instead of gin at Bar Basso in Milan and kept the result. Same equal-parts frame as the Negroni at roughly half the alcohol, and the bubbles lift the Campari rather than letting it sit heavy. Pour the Prosecco last and stir only once, or you'll flatten it. Often served in a wine glass instead.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/1391/negroni-sbagliato" }
    ]
  },
  {
    id: "white-negroni",
    name: "White Negroni",
    category: "Negroni",
    base: "Gin",
    bitters: ["Luxardo Bitter Bianco"],
    method: "Stir",
    glass: "Old-fashioned glass",
    ice: "Filled with ice",
    blurb: "Equal parts, but clear. The bitterness is there without the Campari weight.",
    ingredients: [
      { amount: "1 oz", name: "Gin" },
      { amount: "1 oz", name: "Luxardo Bitter Bianco" },
      { amount: "1 oz", name: "Bianco vermouth", note: "Cinzano or Martini" }
    ],
    steps: [
      "Combine all three in a mixing glass with ice.",
      "Stir about 30 seconds.",
      "Strain over fresh ice in an old-fashioned glass."
    ],
    garnish: "Lemon twist",
    notes: "Equal parts, matching Luxardo's own Bianco Negroni. Bianco vermouth keeps it soft and grapey; dry vermouth in its place makes a sharper, more martini-like drink and is just as widely published. An orange twist works, but lemon suits it better as an aperitif. A few drops of orange bitters is a common addition.",
    sources: [
      { label: "Luxardo", url: "https://www.luxardousa.com/bianco-negroni" },
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/4083/negroni-bianco" }
    ]
  },
  {
    id: "blonde-negroni",
    name: "Blonde Negroni",
    category: "Negroni",
    base: "Gin",
    bitters: ["Suze"],
    method: "Stir",
    glass: "Old-fashioned glass",
    ice: "Large cube",
    blurb: "Suze's gentian instead of Campari. Yellow, dry, grapefruit-bitter.",
    ingredients: [
      { amount: "1.5 oz", name: "Gin" },
      { amount: "0.75 oz", name: "Bianco vermouth" },
      { amount: "0.5 oz", name: "Suze" }
    ],
    steps: [
      "Combine all three in a mixing glass with ice.",
      "Stir about 30 seconds.",
      "Strain over a large cube in an old-fashioned glass."
    ],
    garnish: "Grapefruit twist",
    notes: "Also called a Yellow Negroni. Wayne Collins invented the original in Bordeaux in 2001 as equal parts gin, Suze and Lillet Blanc, but Suze's gentian is far more aggressive than Campari and takes the drink over at a full third, so the Suze is pulled back here. Bianco vermouth stands in for the Lillet, keeping it in line with the White. Collins considered the grapefruit twist essential to the drink.",
    sources: [
      { label: "Punch", url: "https://punchdrink.com/recipes/white-negroni/" },
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/3420/white-negroni" }
    ]
  },
  {
    id: "pink-negroni",
    name: "Pink Negroni",
    category: "Negroni",
    base: "Gin",
    bitters: ["Luxardo Bitter Bianco"],
    method: "Stir",
    glass: "Old-fashioned glass",
    ice: "Filled with ice",
    blurb: "Fig-infused French gin makes it blush. Soft, citrusy, gently bitter.",
    ingredients: [
      { amount: "1 oz", name: "Sweet Gwendoline gin" },
      { amount: "1 oz", name: "Dolin Blanc" },
      { amount: "1 oz", name: "Luxardo Bitter Bianco" }
    ],
    steps: [
      "Combine all three in a mixing glass with ice.",
      "Stir about 30 seconds.",
      "Strain over fresh ice in an old-fashioned glass."
    ],
    garnish: "Grapefruit twist",
    notes: "House recipe, with no published version of this one. The color comes from the gin: Sweet Gwendoline is a French dry gin infused with Figue de Solliès and white wine over juniper, angelica, coriander, cardamom and citrus peel, and both the Dolin and the Luxardo are pale. Dolin Blanc is the right Chambéry here, medium-dry and fruity, with lemon thyme and citrus peel; the Dry would strip that out and the Rouge would turn the drink brown-red.",
    sources: []
  },
  {
    id: "amber-negroni",
    name: "Amber Negroni",
    category: "Negroni",
    base: "Gin",
    bitters: ["Cynar"],
    method: "Stir",
    glass: "Old-fashioned glass",
    ice: "Large cube",
    blurb: "Cynar in the bitter slot. Earthy and cocoa-dark instead of bright red.",
    ingredients: [
      { amount: "1 oz", name: "Gin" },
      { amount: "1 oz", name: "Cynar" },
      { amount: "1 oz", name: "Cocchi Storico Vermouth di Torino" }
    ],
    steps: [
      "Combine all three in a mixing glass with ice.",
      "Stir about 30 seconds.",
      "Strain over a large cube in an old-fashioned glass."
    ],
    garnish: "Orange twist",
    notes: "House recipe. Cynar's bittersweet artichoke runs vegetal and earthy where Campari runs sharp and citric, and Cocchi Storico brings cocoa, rhubarb and bitter orange over a Moscato d'Asti base with fire-caramelized sugar. Together they give the drink its amber color and a softer, rounder bitterness. Cynar is only 16.5% ABV against Campari's 24%, so this lands gentler than a classic Negroni.",
    sources: []
  },
  {
    id: "orange-negroni",
    name: "Orange Negroni",
    category: "Negroni",
    base: "Gin",
    bitters: ["Gran Classico", "Campari"],
    method: "Stir",
    glass: "Old-fashioned glass",
    ice: "Large cube",
    blurb: "The bitter split two ways, against a pale vermouth. Still equal parts.",
    ingredients: [
      { amount: "1 oz", name: "Gin" },
      { amount: "0.5 oz", name: "Gran Classico" },
      { amount: "0.5 oz", name: "Campari" },
      { amount: "1 oz", name: "Carpano Bianco" }
    ],
    steps: [
      "Combine everything in a mixing glass with ice.",
      "Stir about 30 seconds.",
      "Strain over a large cube in an old-fashioned glass."
    ],
    garnish: "Orange twist",
    notes: "House recipe. The two bitters split a single part between them, so this is still 1:1:1 by volume. Gran Classico is drier and stronger than Campari, at 28% ABV and 32 g/L sugar against 24% and roughly 300 g/L, so the blend gives more structure and less sweetness than Campari alone, plus a fuller run of wormwood, gentian and rhubarb. Its golden-amber and Campari's red land on orange against the pale Carpano Bianco, where a red vermouth would pull the drink back toward a standard Negroni.",
    sources: []
  },
  {
    id: "italicus-negroni",
    name: "Italicus Negroni",
    category: "Negroni",
    base: "Gin",
    liqueurs: ["Italicus"],
    method: "Stir",
    glass: "Old-fashioned glass",
    ice: "Large cube",
    blurb: "Bergamot in the bitter slot. Pale, citrus-led, barely bitter at all.",
    ingredients: [
      { amount: "1 oz", name: "Gin" },
      { amount: "1 oz", name: "Italicus" },
      { amount: "1 oz", name: "Dry vermouth" }
    ],
    steps: [
      "Combine all three in a mixing glass with ice.",
      "Stir about 30 seconds.",
      "Strain over a large cube in an old-fashioned glass."
    ],
    garnish: "Lemon twist",
    notes: "A bar riff rather than canon, and the loosest Negroni in the book: Italicus is a sweet rosolio with no real bitterness to it, so this leans on the dry vermouth and the gin's juniper for structure. Closer in spirit to the White than to the original. Bergamot is the citrus in Earl Grey, which is roughly what this tastes like.",
    sources: []
  },
  {
    id: "naked-and-famous",
    name: "Naked and Famous",
    category: "Equal Parts",
    base: "Tequila",
    bitters: ["Aperol"],
    liqueurs: ["Yellow Chartreuse"],
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "A Last Word crossed with a Paper Plane. Herbal, bitter, sharply citric.",
    ingredients: [
      { amount: "0.75 oz", name: "Blanco tequila" },
      { amount: "0.75 oz", name: "Yellow Chartreuse" },
      { amount: "0.75 oz", name: "Aperol" },
      { amount: "0.75 oz", name: "Lime juice", note: "fresh" }
    ],
    steps: [
      "Combine everything in a shaker with ice.",
      "Shake hard, about 12 seconds.",
      "Double-strain into a chilled coupe."
    ],
    garnish: "None — or a lime twist",
    notes: "Joaquín Simó created this at Death & Co in 2011 and called it \"the bastard child born out of an illicit Oaxacan love affair between the classic Last Word and the Paper Plane\": Chartreuse from one, Aperol from the other. His original used Del Maguey Chichicapa mezcal. Blanco tequila in its place drops the smoke that was the original's whole point, so the Yellow Chartreuse carries more of the drink; reposado would add oak and vanilla instead.",
    sources: [
      { label: "Punch", url: "https://punchdrink.com/recipes/naked-famous/" },
      { label: "Death & Co", url: "https://www.deathandcompanymarket.com/blogs/recipes/naked-famous" }
    ]
  },
  {
    id: "blood-and-sand",
    name: "Blood and Sand",
    category: "Equal Parts",
    base: "Bourbon",
    liqueurs: ["Cherry Heering"],
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "Cherry and citrus over whiskey. The rare equal-parts drink with juice in it.",
    ingredients: [
      { amount: "0.75 oz", name: "Bourbon" },
      { amount: "0.75 oz", name: "Cherry Heering" },
      { amount: "0.75 oz", name: "Sweet vermouth" },
      { amount: "0.75 oz", name: "Blood orange juice", note: "fresh" },
      { amount: "0.5 tsp", name: "Lemon juice" }
    ],
    steps: [
      "Combine everything in a shaker with ice.",
      "Shake well.",
      "Strain into a chilled coupe."
    ],
    garnish: "Orange twist",
    notes: "First in print in the 1930 Savoy Cocktail Book, built on blended Scotch. Bourbon is sweeter, and the Heering and vermouth already push this drink sweet, so blood orange in place of regular orange juice brings tartness and a half teaspoon of lemon cuts the rest. The lemon correction comes from Death & Co. Blood orange also earns the name, which otherwise refers to the 1922 Valentino bullfighting film.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/244/blood-and-sand-classic-formula" },
      { label: "Whisky Advocate", url: "https://whiskyadvocate.com/blood-and-sand-cocktail-recipe" }
    ]
  },
  {
    id: "paper-plane",
    name: "Paper Plane",
    category: "Equal Parts",
    base: "Bourbon",
    bitters: ["Aperol", "Amaro Nonino"],
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "Bittersweet and bright. The modern equal-parts benchmark.",
    ingredients: [
      { amount: "0.75 oz", name: "Bourbon" },
      { amount: "0.75 oz", name: "Aperol" },
      { amount: "0.75 oz", name: "Amaro Nonino" },
      { amount: "0.75 oz", name: "Lemon juice", note: "fresh" }
    ],
    steps: [
      "Combine everything in a shaker with ice.",
      "Shake hard, about 12 seconds.",
      "Double-strain into a chilled coupe."
    ],
    garnish: "Lemon twist",
    notes: "Sam Ross made this at Little Branch in 2008 as a Last Word riff: bourbon for the gin, lemon for the lime, and two bitter amari in place of Chartreuse and maraschino. The first version used Campari; he swapped in Aperol to soften it.",
    sources: [
      { label: "Paper Plane", url: "https://en.wikipedia.org/wiki/Paper_plane_(cocktail)" }
    ]
  },
  {
    id: "last-word",
    name: "Last Word",
    category: "Equal Parts",
    base: "Gin",
    liqueurs: ["Green Chartreuse", "Maraschino"],
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "The original of the form. Herbal liqueur held in check by lime.",
    ingredients: [
      { amount: "0.75 oz", name: "Gin", note: "London dry" },
      { amount: "0.75 oz", name: "Green Chartreuse" },
      { amount: "0.75 oz", name: "Maraschino liqueur", note: "Luxardo" },
      { amount: "0.75 oz", name: "Lime juice", note: "fresh" }
    ],
    steps: [
      "Combine everything in a shaker with ice.",
      "Shake hard, about 12 seconds.",
      "Double-strain into a chilled coupe."
    ],
    garnish: "Luxardo cherry",
    notes: "From the Detroit Athletic Club in the 1910s, just ahead of Prohibition, and the template every other drink in this category is built on. It sat forgotten for decades until Murray Stenson put it back on the menu at Seattle's Zig Zag Café in the mid-2000s and it spread from there.",
    sources: [
      { label: "Last Word", url: "https://en.wikipedia.org/wiki/Last_Word_(cocktail)" },
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/1133/last-word" }
    ]
  },
  {
    id: "corpse-reviver-2",
    name: "Corpse Reviver #2",
    category: "Equal Parts",
    base: "Gin",
    liqueurs: ["Cointreau", "Lillet Blanc"],
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "Crisp, citric and faintly anised. A breakfast drink, if you believe Craddock.",
    ingredients: [
      { amount: "0.75 oz", name: "Gin", note: "London dry" },
      { amount: "0.75 oz", name: "Cointreau" },
      { amount: "0.75 oz", name: "Lillet Blanc" },
      { amount: "0.75 oz", name: "Lemon juice", note: "fresh" },
      { amount: "rinse", name: "Absinthe" }
    ],
    steps: [
      "Rinse a chilled coupe with absinthe and discard the excess.",
      "Combine the rest in a shaker with ice.",
      "Shake hard, about 12 seconds.",
      "Double-strain into the prepared coupe."
    ],
    garnish: "Orange twist",
    notes: "From Harry Craddock's 1930 Savoy Cocktail Book, where the original calls for Kina Lillet and prescribes the drink \"before 11 a.m., or whenever steam and energy are needed\", followed by the warning that four in swift succession will unrevive the corpse again. Today's Lillet Blanc is less bitter than the discontinued Kina Lillet, so many bartenders reach for Cocchi Americano instead as the closer match. The Savoy lists a dash of absinthe rather than a rinse; the rinse keeps it from taking over.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/593/corpse-reviver-no2-savoy-recipe" },
      { label: "Cointreau", url: "https://www.cointreau.com/us/en/cocktails/corpse-reviver" }
    ]
  },
  {
    id: "final-ward",
    name: "Final Ward",
    category: "Equal Parts",
    base: "Rye",
    liqueurs: ["Green Chartreuse", "Maraschino"],
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "The Last Word in rye. Spicier, drier, and a harder drink to balance.",
    ingredients: [
      { amount: "0.75 oz", name: "Rye whiskey", note: "bonded, 100 proof" },
      { amount: "0.75 oz", name: "Green Chartreuse" },
      { amount: "0.75 oz", name: "Maraschino liqueur", note: "Luxardo" },
      { amount: "0.75 oz", name: "Lemon juice", note: "fresh" }
    ],
    steps: [
      "Combine everything in a shaker with ice.",
      "Shake hard, about 12 seconds.",
      "Double-strain into a chilled coupe.",
      "Express a lemon twist over the top and discard it."
    ],
    garnish: "A brandied cherry",
    notes: "Phil Ward built this at Death & Co in 2007 by swapping rye for the Last Word's gin, which forced the lime to lemon as well. The bonded rye at 100 proof is the spec rather than a preference: Chartreuse and maraschino together will bury a standard-proof whiskey, and the extra strength is what holds the drink up. Made alongside the Last Word it shows how much of that drink was the gin.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/2406/final-ward" },
      { label: "Whisky Advocate", url: "https://whiskyadvocate.com/the-final-ward-cocktail-recipe/" }
    ]
  },
  {
    id: "manhattan",
    name: "Manhattan",
    category: "Spirit-Forward",
    base: "Rye",
    method: "Stir",
    glass: "Coupe",
    ice: "Served up",
    blurb: "Rye against sweet vermouth, held together by bitters. The template.",
    ingredients: [
      { amount: "2 oz", name: "Rye whiskey" },
      { amount: "1 oz", name: "Sweet vermouth" },
      { amount: "2 dash", name: "Angostura bitters" }
    ],
    steps: [
      "Combine everything in a mixing glass with ice.",
      "Stir about 30 seconds, until well chilled.",
      "Strain into a chilled coupe."
    ],
    garnish: "Cocktail cherry — Luxardo or Amarena",
    notes: "The 2:1 standard. Rye is the traditional call and its pepper pushes back against the vermouth; bourbon in its place brings corn sweetness and vanilla for a rounder, sweeter drink. A Perfect Manhattan splits the vermouth half sweet and half dry, which strips out most of the sweetness and takes an orange twist instead of the cherry.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/1247/manhattan-sweet" }
    ]
  },
  {
    id: "old-fashioned",
    name: "Old Fashioned",
    category: "Spirit-Forward",
    base: "Bourbon",
    method: "Build",
    glass: "Old-fashioned glass",
    ice: "Large cube",
    blurb: "Spirit, sugar, water, bitters. The original definition of a cocktail.",
    ingredients: [
      { amount: "2 oz", name: "Bourbon" },
      { amount: "1", name: "Sugar cube" },
      { amount: "2 dash", name: "Angostura bitters" },
      { amount: "splash", name: "Water" }
    ],
    steps: [
      "Put the sugar cube in the glass, soak it with the bitters and a splash of water.",
      "Muddle until the sugar breaks down.",
      "Add the bourbon and a large cube.",
      "Stir until chilled and the sugar has dissolved."
    ],
    garnish: "Luxardo cherry",
    notes: "The sugar cube build is the older method and the one the drink is named for: patrons asking for a whiskey cocktail made the old-fashioned way, meaning spirit, sugar, water and bitters, which was the original 1806 definition of a cocktail. Simple syrup is the modern shortcut and dissolves faster but loses the texture. Rye in place of bourbon runs peppery and drier. An expressed orange peel alongside the cherry is the other common finish.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/1287/old-fashioned" }
    ]
  },
  {
    id: "mint-julep",
    name: "Mint Julep",
    category: "Spirit-Forward",
    base: "Bourbon",
    method: "Build",
    glass: "Julep cup",
    ice: "Packed crushed ice",
    blurb: "Bourbon, mint and sugar over crushed ice. Drink it as it melts.",
    ingredients: [
      { amount: "2.5 oz", name: "Bourbon" },
      { amount: "0.5 oz", name: "Simple syrup" },
      { amount: "8–10", name: "Mint leaves" }
    ],
    steps: [
      "Press the mint gently against the syrup in the cup — press, don't muddle.",
      "Add the bourbon and pack the cup with crushed ice.",
      "Churn with a spoon until the outside of the cup frosts.",
      "Top with more crushed ice to form a dome."
    ],
    garnish: "A large bouquet of mint, with a short straw",
    notes: "Press rather than muddle: tearing mint releases chlorophyll and turns it bitter, and all you want is the oil from the surface. The metal cup is functional. It frosts, and holding it by the rim keeps your hand from melting the ice. The dilution is by design; the drink opens up as the crushed ice melts. Cut the straw short so your nose sits in the mint while you drink.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/1320/mint-julep" }
    ]
  },
  {
    id: "sazerac",
    name: "Sazerac",
    category: "Spirit-Forward",
    base: "Rye",
    method: "Stir",
    glass: "Old-fashioned glass",
    ice: "Served without ice",
    blurb: "New Orleans in a glass. Anise on the nose, rye and Peychaud's underneath.",
    ingredients: [
      { amount: "2 oz", name: "Rye whiskey" },
      { amount: "1", name: "Sugar cube" },
      { amount: "3 dash", name: "Peychaud's bitters" },
      { amount: "rinse", name: "Absinthe" }
    ],
    steps: [
      "Rinse a chilled old-fashioned glass with absinthe and discard the excess.",
      "Muddle the sugar cube with the Peychaud's in a mixing glass.",
      "Add the rye and ice, and stir until chilled.",
      "Strain into the prepared glass — no ice."
    ],
    garnish: "Expressed lemon peel, discarded",
    notes: "Served with no ice at all, which is what separates it from an Old Fashioned built the same way; the dilution happens in the mixing glass and the drink arrives cold and undiluted. Use Peychaud's, not Angostura: its anise and cherry are what make the drink. The peel is expressed over the top and thrown away rather than dropped in. Older New Orleans versions split the base between rye and cognac, which is richer and closer to the 1800s original.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/1653/sazerac" }
    ]
  },
  {
    id: "vieux-carre",
    name: "Vieux Carré",
    category: "Spirit-Forward",
    base: "Rye",
    liqueurs: ["Bénédictine"],
    method: "Stir",
    glass: "Old-fashioned glass",
    ice: "Filled with ice",
    blurb: "A Manhattan split with cognac, sweetened with honeyed Bénédictine.",
    ingredients: [
      { amount: "0.75 oz", name: "Rye whiskey" },
      { amount: "0.75 oz", name: "Cognac" },
      { amount: "0.75 oz", name: "Sweet vermouth", note: "full-bodied" },
      { amount: "1 bar sp", name: "Bénédictine" },
      { amount: "2 dash", name: "Peychaud's bitters" },
      { amount: "2 dash", name: "Angostura bitters" }
    ],
    steps: [
      "Combine everything in a mixing glass with ice.",
      "Stir well.",
      "Strain into an ice-filled old-fashioned glass."
    ],
    garnish: "Wide strip of lemon zest",
    notes: "Walter Bergeron's drink from the Carousel Bar at the Hotel Monteleone in New Orleans, and now an IBA official. Structurally a Manhattan where cognac tempers the rye and the Bénédictine adds honey and baking spice; the two bitters working together are what keep it from going sweet. Often served up instead, if you'd rather skip the dilution.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/2048/vieux-carre-cocktail" },
      { label: "Imbibe", url: "https://imbibemagazine.com/recipe/vieux-carre-recipe/" }
    ]
  },
  {
    id: "el-presidente",
    name: "El Presidente",
    category: "Spirit-Forward",
    base: "Rum",
    liqueurs: ["Orange Curaçao"],
    method: "Stir",
    glass: "Coupe",
    ice: "Served up",
    blurb: "Havana's stirred rum aperitif. Soft, faintly floral, palest pink.",
    ingredients: [
      { amount: "1.5 oz", name: "White rum" },
      { amount: "0.75 oz", name: "Blanc vermouth" },
      { amount: "0.25 oz", name: "Orange curaçao" },
      { amount: "1 bar sp", name: "Grenadine" }
    ],
    steps: [
      "Combine everything in a mixing glass with ice.",
      "Stir well.",
      "Strain into a chilled coupe."
    ],
    garnish: "Orange twist",
    notes: "A Cuban drink from Prohibition-era Havana, and a rum Manhattan in structure: the blanc vermouth does the work sweet vermouth does there, with curaçao and grenadine standing in for bitters. Difford's now builds it on half dry and half bianco vermouth instead, on the grounds that the all-blanc version reads sugary; that swap adds a saline, herbal snap without changing the character.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/701/el-presidente" },
      { label: "El Presidente", url: "https://en.wikipedia.org/wiki/El_Presidente_(cocktail)" }
    ]
  },
  {
    id: "black-ship",
    name: "Black Ship",
    category: "Spirit-Forward",
    base: "Japanese Whiskey",
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "Japanese whiskey under pomegranate and port. Dark and fruit-forward.",
    ingredients: [
      { amount: "2 oz", name: "Japanese whiskey", note: "Kikori" },
      { amount: "1.75 oz", name: "Pomegranate juice" },
      { amount: "0.5 oz", name: "Ruby port" }
    ],
    steps: [
      "Combine everything in a shaker with ice.",
      "Shake hard, about 12 seconds.",
      "Double-strain into a chilled coupe."
    ],
    garnish: "A few pomegranate seeds, or an expressed lemon twist",
    notes: "Named for the kurofune, the Black Ships Commodore Perry sailed into Edo Bay in 1853 to end Japan's isolation. House ratio: published versions run lighter at 1.5 oz whiskey to 1 oz pomegranate, and all of them add a little lemon, a teaspoon up to 0.25 oz, to cut the pomegranate and port. Add it if this drinks sweet. Kikori is 100% Kumamoto rice aged three years across American oak, French oak and ex-sherry casks at 41% ABV, which leaves it floral and light on melon and lychee; the full 2 oz is what lets it stand up to the port.",
    sources: [
      { label: "DrinksWorld", url: "https://drinksworld.com/recipe/black-ship-cocktail/" },
      { label: "Kikori", url: "https://en.wikipedia.org/wiki/Kikori_whiskey" }
    ]
  },
  {
    id: "monte-carlo",
    name: "Monte Carlo",
    category: "Spirit-Forward",
    base: "Rye",
    liqueurs: ["Bénédictine"],
    method: "Stir",
    glass: "Coupe",
    ice: "Served up",
    blurb: "A Manhattan with Bénédictine where the vermouth goes. Honeyed and herbal.",
    ingredients: [
      { amount: "2 oz", name: "Rye whiskey" },
      { amount: "0.5 oz", name: "Bénédictine" },
      { amount: "2 dash", name: "Angostura bitters" }
    ],
    steps: [
      "Combine everything in a mixing glass with ice.",
      "Stir about 30 seconds, until well chilled.",
      "Strain into a chilled coupe."
    ],
    garnish: "Lemon twist",
    notes: "First in print in David Embury's 1948 The Fine Art of Mixing Drinks, at 2 parts rye to 1 part Bénédictine. That version runs sweet, and Embury said so himself, arguing the rye should go to 4 or 5 parts. This is the drier 4:1 he wanted. Bénédictine is doing the vermouth's job here, so the drink lands honeyed and spiced where a Manhattan lands wine-like. Often served over a large cube instead of up.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/2506/monte-carlo" }
    ]
  },
  {
    id: "black-manhattan",
    name: "Black Manhattan",
    category: "Spirit-Forward",
    base: "Rye",
    bitters: ["Averna"],
    method: "Stir",
    glass: "Coupe",
    ice: "Served up",
    blurb: "Averna where the vermouth goes. Darker, bitterer, a little cola-ish.",
    ingredients: [
      { amount: "2 oz", name: "Rye whiskey", note: "bonded, 100 proof" },
      { amount: "1 oz", name: "Averna" },
      { amount: "1 dash", name: "Angostura bitters" },
      { amount: "1 dash", name: "Orange bitters" }
    ],
    steps: [
      "Combine everything in a mixing glass with ice.",
      "Stir about 30 seconds, until well chilled.",
      "Fine-strain into a chilled coupe."
    ],
    garnish: "A cherry",
    notes: "Todd Smith made this at Bourbon & Branch in San Francisco in 2005. Averna carries enough sweetness to stand in for vermouth at the same 2:1, but it brings caramel, cola and bitter orange with it, which is where the name comes from. The third Manhattan variation in the book: sweet vermouth in the original, Bénédictine in the Monte Carlo, amaro here, all on the same frame.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/4345/black-manhattan" },
      { label: "Imbibe", url: "https://imbibemagazine.com/recipe/black-manhattan-recipe/" }
    ]
  },
  {
    id: "kentucky-godfather",
    name: "Kentucky Godfather",
    category: "Spirit-Forward",
    base: "Bourbon",
    liqueurs: ["Disaronno"],
    method: "Build",
    glass: "Old-fashioned glass",
    ice: "Large cube",
    blurb: "Bourbon and amaretto. Two ingredients, thirty seconds, no shaker.",
    ingredients: [
      { amount: "2 oz", name: "Bourbon" },
      { amount: "0.75 oz", name: "Disaronno" }
    ],
    steps: [
      "Put a large cube in an old-fashioned glass.",
      "Add the bourbon and the Disaronno.",
      "Stir until chilled."
    ],
    garnish: "Orange twist",
    notes: "The Godfather is built on Scotch, where the smoke plays against the almond. Bourbon in its place compounds the sweetness instead of cutting it, so the amaretto is held to three quarters of an ounce; push it to a full ounce and the drink turns into dessert. Stanley Jones printed the bourbon version in his 1977 Complete Barguide under the name The Boss. Cognac instead makes it a French Connection.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/864/godfather-cocktail" }
    ]
  },
  {
    id: "espresso-martini",
    name: "Espresso Martini",
    category: "Martini",
    base: "Vodka",
    liqueurs: ["Kahlúa"],
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "Cold, sharp and capped with crema. Shake it hard or it won't foam.",
    ingredients: [
      { amount: "1.5 oz", name: "Vodka", note: "Belvedere" },
      { amount: "1 oz", name: "Espresso", note: "hot, straight from the machine" },
      { amount: "0.75 oz", name: "Kahlúa" }
    ],
    steps: [
      "Pull the espresso and get it into the shaker immediately — the crema is what makes the foam.",
      "Add the vodka and Kahlúa and fill with ice.",
      "Shake hard, about 12 seconds.",
      "Double-strain into a chilled coupe."
    ],
    garnish: "Three espresso beans",
    notes: "No simple syrup with Kahlúa: it's rum-based and heavily sweetened, so it carries the drink on its own. With Mr Black instead, add 0.25 oz simple syrup. It's cold-brew based at roughly a third the sugar and much more roast-bitter, and without the sugar back it comes out thin. Dick Bradsell built the original at the Soho Brasserie in 1983.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/725/espresso-martini" },
      { label: "Punch", url: "https://punchdrink.com/recipes/espresso-martini-2/" }
    ]
  },
  {
    id: "lychee-martini",
    name: "Lychee Martini",
    category: "Martini",
    base: "Vodka",
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "Three ingredients, no liqueur. The can does the work.",
    ingredients: [
      { amount: "2 oz", name: "Vodka", note: "Belvedere" },
      { amount: "1 oz", name: "Lychee syrup", note: "from the can" },
      { amount: "0.5 oz", name: "Lime juice", note: "fresh" }
    ],
    steps: [
      "Combine everything in a shaker with ice.",
      "Shake well.",
      "Strain into a chilled coupe."
    ],
    garnish: "A whole lychee from the can",
    notes: "House ratio, 2:1:0.5. No lychee liqueur: the syrup from the can carries the flavor and costs nothing extra, and the lime is what keeps it from going cloying. Published versions typically add lychee liqueur on top of the syrup, or rinse the glass with dry vermouth.",
    sources: []
  },
  {
    id: "vesper",
    name: "Vesper",
    category: "Martini",
    base: "Gin",
    liqueurs: ["Lillet Blanc"],
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "Gin and vodka together, softened with Lillet. Strong and very cold.",
    ingredients: [
      { amount: "3 oz", name: "Gin" },
      { amount: "1 oz", name: "Vodka", note: "Belvedere" },
      { amount: "0.5 oz", name: "Lillet Blanc" }
    ],
    steps: [
      "Combine everything in a shaker with ice.",
      "Shake until very cold.",
      "Strain into a chilled coupe."
    ],
    garnish: "Large lemon peel",
    notes: "Bond orders this in Casino Royale and specifies shaken, which is why it's built that way here. Most bars stir it instead for a clearer, silkier drink, and either is defensible. Fleming's original called for Kina Lillet, which was more bitter than today's Lillet Blanc; Cocchi Americano is the closer modern match, the same substitution the Corpse Reviver #2 invites. At 4 oz of spirit with only a half ounce of aromatized wine, it's stronger than it reads.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/2045/vesper-martini" }
    ]
  },
  {
    id: "grapefruit-martini",
    name: "Grapefruit Martini",
    category: "Martini",
    base: "Vodka",
    liqueurs: ["Elderflower Liqueur"],
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "Ruby red grapefruit with a floral edge, sharpened by lime.",
    ingredients: [
      { amount: "2 oz", name: "Grapefruit vodka", note: "Deep Eddy Ruby Red" },
      { amount: "0.5 oz", name: "Elderflower liqueur", note: "St-Germain or similar" },
      { amount: "2 oz", name: "Grapefruit juice", note: "fresh" },
      { amount: "0.5 oz", name: "Lime juice", note: "fresh" }
    ],
    steps: [
      "Combine everything in a shaker with ice.",
      "Shake hard, about 12 seconds.",
      "Double-strain into a chilled coupe."
    ],
    garnish: "Grapefruit twist",
    notes: "The lime does the balancing here. Deep Eddy Ruby Red is 35% ABV and sweetened with cane sugar at about 3 g per ounce, and elderflower liqueur is sweeter still, so without the acid this lands sugary. Elderflower is held to a half ounce as an accent for the same reason. Two dashes of grapefruit bitters is the other way to balance it, adding pith and bitterness instead of acid.",
    sources: [
      { label: "Deep Eddy", url: "https://deepeddyvodka.com/deep-eddy-ruby-red-vodka" }
    ]
  },
  {
    id: "dirty-martini",
    name: "Dirty Martini",
    category: "Martini",
    base: "Gin",
    method: "Stir",
    glass: "Coupe",
    ice: "Served up",
    blurb: "Properly dirty. Briny and savory.",
    ingredients: [
      { amount: "3 oz", name: "Gin" },
      { amount: "1.5 oz", name: "Olive brine" },
      { amount: "0.5 oz", name: "Dry vermouth", note: "Dolin" }
    ],
    steps: [
      "Combine everything in a mixing glass with ice.",
      "Stir about 30 seconds, until well chilled.",
      "Strain into a chilled coupe."
    ],
    garnish: "Three olives on a pick",
    notes: "House ratio. At 1.5 oz the brine is a full third of the drink, where most published dirty martinis stop at a quarter to a half ounce. Dolin Dry specifically, not Martini & Rossi: it's the lighter, cleaner vermouth at 17 botanicals and 25 g/L sugar, which matters more than usual when brine is already crowding the glass.",
    sources: []
  },
  {
    id: "french-martini",
    name: "French Martini",
    category: "Martini",
    base: "Vodka",
    liqueurs: ["Chambord"],
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "Raspberry and pineapple, with a foam cap the pineapple makes by itself.",
    ingredients: [
      { amount: "1.5 oz", name: "Vodka", note: "Belvedere" },
      { amount: "1 oz", name: "Pineapple juice" },
      { amount: "0.5 oz", name: "Chambord" }
    ],
    steps: [
      "Combine everything in a shaker with ice.",
      "Shake hard for a full 20 seconds. This is what makes the foam.",
      "Double-strain into a chilled coupe and let the collar settle."
    ],
    garnish: "A raspberry, floated on the foam",
    notes: "New York in the late 1980s, and it stuck when Dale DeGroff put it on the menu at Pravda. The foam is pineapple juice rather than egg white, so the shake is the whole technique: under-shake it and you get a flat pink drink, and the collar should be firm enough to hold a raspberry. Some builds run 2 oz vodka to 0.75 oz Chambord, which comes out stronger and sweeter at once.",
    sources: [
      { label: "Punch", url: "https://punchdrink.com/recipes/french-martini/" },
      { label: "French martini", url: "https://en.wikipedia.org/wiki/French_martini" }
    ]
  },
  {
    id: "daiquiri",
    name: "Daiquiri",
    category: "Sours",
    base: "Rum",
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "Rum, lime, sugar. Nowhere to hide.",
    ingredients: [
      { amount: "2 oz", name: "White rum" },
      { amount: "0.75 oz", name: "Lime juice", note: "fresh" },
      { amount: "0.75 oz", name: "Simple syrup" }
    ],
    steps: [
      "Combine everything in a shaker with ice.",
      "Shake hard, about 12 seconds.",
      "Double-strain into a chilled coupe."
    ],
    garnish: "Lime wheel",
    notes: "The canonical sour ratio: spirit, citrus, sugar at 2 : ¾ : ¾. Some go 2:1:1, which is both tarter and sweeter at once; dropping the syrup to ½ oz makes it drier. Because rum carries its own sweetness, the balance point shifts with the bottle, so taste before you strain.",
    sources: [
      { label: "Daiquiri", url: "https://en.wikipedia.org/wiki/Daiquiri" }
    ]
  },
  {
    id: "margarita",
    name: "Margarita",
    category: "Sours",
    base: "Tequila",
    liqueurs: ["Cointreau"],
    method: "Shake",
    glass: "Rocks glass",
    ice: "Over fresh ice",
    yield: "Pitcher, serves 6",
    blurb: "Made by the pitcher, finished with sparkling limeade in the glass.",
    ingredients: [
      { amount: "12 oz", name: "Blanco tequila" },
      { amount: "6 oz", name: "Cointreau" },
      { amount: "4.5 oz", name: "Lime juice", note: "fresh" },
      { amount: "2 oz", name: "Sparkling limeade", note: "Trader Joe's — per glass, at serving" }
    ],
    steps: [
      "Stir the tequila, Cointreau and lime juice together in a pitcher and chill it.",
      "Fill each rocks glass with ice and pour the mix about two-thirds full.",
      "Top each glass with about 2 oz of sparkling limeade."
    ],
    garnish: "Lime wheel",
    notes: "House build. The pitcher holds the classic 2 : 1 : ¾ ratio scaled to six drinks; treat it as a starting point and adjust to taste. The sparkling limeade goes in per glass rather than into the pitcher: batched carbonation goes flat within the hour, and topping at the glass keeps the fizz and the second hit of lime. No salt on the rim. Skipping the Cointreau for ½ oz agave per drink makes it a Tommy's Margarita, which is cleaner and more agave-forward.",
    sources: []
  },
  {
    id: "whiskey-sour",
    name: "Whiskey Sour",
    category: "Sours",
    base: "Bourbon",
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "Foam cap, bitters on top. The sour everything else is measured against.",
    ingredients: [
      { amount: "2 oz", name: "Bourbon" },
      { amount: "0.75 oz", name: "Lemon juice", note: "fresh" },
      { amount: "0.75 oz", name: "Simple syrup" },
      { amount: "6–8 drops", name: "Miraculous Foamer", note: "Ms Better's" }
    ],
    steps: [
      "Combine everything in a shaker with no ice and dry shake 15 seconds to build the foam.",
      "Add ice and shake hard again until cold.",
      "Double-strain into a chilled coupe and let the foam settle."
    ],
    garnish: "Angostura dashed across the foam",
    notes: "Ms Better's Miraculous Foamer in place of egg white: three plants macerated in neutral alcohol, about 6–8 drops per drink, or a quarter pipette. It's vegan, keeps better than eggs, has no sulfur smell and comes out creamier. The dry shake still matters, because that's what builds the foam and the ice would break it. Rye in place of bourbon makes it drier and spicier.",
    sources: [
      { label: "Ms Better's", url: "https://msbetters.us/products/ms-betters-bitters-miraculous-foamer" }
    ]
  },
  {
    id: "pisco-sour",
    name: "Pisco Sour",
    category: "Sours",
    base: "Pisco",
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "Peru's national drink. Same shape as the Whiskey Sour, more lime.",
    ingredients: [
      { amount: "2 oz", name: "Pisco", note: "Peruvian" },
      { amount: "1 oz", name: "Lime juice", note: "fresh" },
      { amount: "0.75 oz", name: "Simple syrup" },
      { amount: "6–8 drops", name: "Miraculous Foamer", note: "Ms Better's" }
    ],
    steps: [
      "Combine everything in a shaker with no ice and dry shake 15 seconds to build the foam.",
      "Add ice and shake hard again until very cold.",
      "Double-strain into a chilled coupe and let the foam settle."
    ],
    garnish: "Three drops of Angostura on the foam",
    notes: "Structurally the Whiskey Sour with more citrus: a full ounce of lime against the bourbon version's ¾ of lemon, which the pisco's grapey brightness can carry. Amargo Chuncho is the Peruvian bitters traditionally dropped on top; Angostura is the usual stand-in. Peruvian pisco is unaged and undiluted by law, which is why the drink tastes cleaner than a brandy sour would.",
    sources: [
      { label: "Pisco sour", url: "https://en.wikipedia.org/wiki/Pisco_sour" }
    ]
  },
  {
    id: "gin-and-tonic",
    name: "Gin & Tonic",
    category: "Highballs",
    base: "Gin",
    method: "Build",
    glass: "Highball glass",
    ice: "Filled with ice",
    blurb: "Two ingredients, and the gin makes all the difference.",
    ingredients: [
      { amount: "2 oz", name: "Gin", note: "Tanqueray Rangpur" },
      { amount: "6 oz", name: "Tonic water" },
      { amount: "1", name: "Lime wedge" }
    ],
    steps: [
      "Fill a highball glass with ice.",
      "Add the gin, then top with tonic.",
      "Squeeze in the lime wedge, stir once, and drop it in."
    ],
    garnish: "The squeezed lime wedge",
    notes: "Tanqueray Rangpur is the call: Tanqueray's standard juniper, angelica, liquorice and coriander with rangpur limes, bay and ginger on top, at 41.3% ABV. The rangpur is a mandarin-citron hybrid rather than a true lime, so it brings tartness with a rounder, sweeter edge, and the gin arrives half-citrused already. Spanish style is the other way to build this: a balloon glass packed with ice and an expressed grapefruit peel instead of squeezed lime, which reads aromatic and stays cold far longer.",
    sources: [
      { label: "The Gin Guild", url: "https://www.theginguild.com/ginopedia/gin-brands/tanqueray-rangpur-gin/" }
    ]
  },
  {
    id: "french-75",
    name: "French 75",
    category: "Sours",
    base: "Gin",
    method: "Shake",
    glass: "Flute",
    ice: "Served without ice",
    blurb: "A gin sour lengthened with champagne. Dangerously easy.",
    ingredients: [
      { amount: "1.5 oz", name: "Gin" },
      { amount: "0.5 oz", name: "Lemon juice", note: "fresh" },
      { amount: "0.5 oz", name: "Simple syrup" },
      { amount: "3 oz", name: "Champagne", note: "or dry prosecco, chilled" }
    ],
    steps: [
      "Shake the gin, lemon and syrup hard with ice.",
      "Strain into a chilled flute.",
      "Top slowly with champagne."
    ],
    garnish: "Lemon twist",
    notes: "Named for the 75mm French field gun, on the grounds that it hits like one. It came out of Harry's New York Bar in Paris around the First World War. Structurally it's a Tom Collins with champagne standing in for the soda water, which is why it's filed with the sours rather than the spritzes. New Orleans makes it with cognac instead, which is richer and arguably the better drink.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/814/french-75" }
    ]
  },
  {
    id: "gimlet",
    name: "Gimlet",
    category: "Sours",
    base: "Gin",
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "The gin Daiquiri. Spare, sharp, and entirely dependent on fresh lime.",
    ingredients: [
      { amount: "2 oz", name: "Gin" },
      { amount: "0.75 oz", name: "Lime juice", note: "fresh" },
      { amount: "0.75 oz", name: "Simple syrup" }
    ],
    steps: [
      "Combine everything in a shaker with ice.",
      "Shake hard, about 12 seconds.",
      "Double-strain into a chilled coupe."
    ],
    garnish: "Lime wheel",
    notes: "Structurally identical to the Daiquiri at 2 : ¾ : ¾. Swap the rum for gin and that's the whole difference, which makes the pair a good way to taste what a base spirit contributes. The original used Rose's lime cordial in place of fresh lime and sugar, and some bartenders still insist on it; the cordial version is sweeter and tastes cooked.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/880/gimlet" }
    ]
  },
  {
    id: "sidecar",
    name: "Sidecar",
    category: "Sours",
    base: "Cognac",
    liqueurs: ["Cointreau"],
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "Cognac, orange and lemon. The richest drink in the category.",
    ingredients: [
      { amount: "2 oz", name: "Cognac" },
      { amount: "1 oz", name: "Cointreau" },
      { amount: "0.75 oz", name: "Lemon juice", note: "fresh" }
    ],
    steps: [
      "Sugar half the rim of a chilled coupe, if you want it.",
      "Combine everything in a shaker with ice.",
      "Shake hard, about 12 seconds.",
      "Double-strain into the coupe."
    ],
    garnish: "Orange twist",
    notes: "The same 2 : 1 : ¾ frame as the Margarita, with cognac and lemon in place of tequila and lime. Two drinks with identical proportions land a long way apart. Older recipes go equal parts, which is markedly sweeter. Sugar the rim on one side only so you can take it either way.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/1706/sidecar" }
    ]
  },
  {
    id: "bramble",
    name: "Bramble",
    category: "Sours",
    base: "Gin",
    liqueurs: ["Chambord"],
    method: "Shake",
    glass: "Old-fashioned glass",
    ice: "Packed crushed ice",
    blurb: "A gin sour over crushed ice with berry liqueur bleeding down through it.",
    ingredients: [
      { amount: "2 oz", name: "Gin" },
      { amount: "1 oz", name: "Lemon juice", note: "fresh" },
      { amount: "0.5 oz", name: "Simple syrup" },
      { amount: "0.5 oz", name: "Chambord", note: "drizzled last" }
    ],
    steps: [
      "Shake the gin, lemon and syrup with ice.",
      "Strain into an old-fashioned glass packed with crushed ice.",
      "Drizzle the Chambord over the top in a circle and leave it to bleed down."
    ],
    garnish: "A lemon slice and a few berries",
    notes: "Dick Bradsell made this at Fred's Club in Soho in 1984, wanting a cocktail that was recognisably British. He used crushed ice because that was what the machine produced, and it turned out to matter: the extra length is what keeps the drink from going cloying. The original calls for crème de mûre, made from blackberries. Chambord is black raspberry, sweeter and more perfumed, and is the substitution most bars make. Drizzle it rather than stirring it in, so it streaks down through the ice.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/encyclopedia/1655/cocktails/bramble-cocktail-its-inception-told-by-its-creator" },
      { label: "Punch", url: "https://punchdrink.com/recipes/bramble/" }
    ]
  },
  {
    id: "amaretto-sour",
    name: "Amaretto Sour",
    category: "Sours",
    base: "Bourbon",
    liqueurs: ["Disaronno"],
    method: "Shake",
    glass: "Old-fashioned glass",
    ice: "Over fresh ice",
    blurb: "Morgenthaler's rebuild. Tart, foamy, and nothing like the 1970s version.",
    ingredients: [
      { amount: "1.5 oz", name: "Disaronno" },
      { amount: "0.75 oz", name: "Bourbon", note: "cask strength, Booker's or Old Grand-Dad 114" },
      { amount: "1 oz", name: "Lemon juice", note: "fresh" },
      { amount: "1 tsp", name: "Rich simple syrup", note: "2:1" },
      { amount: "6–8 drops", name: "Miraculous Foamer", note: "Ms Better's" }
    ],
    steps: [
      "Combine everything in a shaker with no ice and dry shake to build the foam.",
      "Add ice and shake hard until cold.",
      "Strain over fresh ice in an old-fashioned glass."
    ],
    garnish: "Lemon twist and a brandied cherry",
    notes: "Jeffrey Morgenthaler published this in 2012 and it is the reason the drink is taken seriously again. The fix was cask-strength bourbon: amaretto alone has no backbone, and a quarter-strength hit of overproof whiskey gives the sweetness something to push against. The syrup is rich 2:1 and there is only a teaspoon of it. Foamer in place of the egg white, as elsewhere in the book.",
    sources: [
      { label: "Punch", url: "https://punchdrink.com/recipes/jeffrey-morgenthalers-amaretto-sour/" },
      { label: "Imbibe", url: "https://imbibemagazine.com/recipe/jeff-morgenthaler-amaretto-sour-recipe/" }
    ]
  },
  {
    id: "brandy-crusta",
    name: "Brandy Crusta",
    category: "Sours",
    base: "Cognac",
    liqueurs: ["Orange Curaçao", "Maraschino"],
    method: "Shake",
    glass: "Sugar-rimmed coupe",
    ice: "Served up",
    blurb: "The drink the Sidecar came from. Sugar crust, and a whole lemon peel inside.",
    ingredients: [
      { amount: "2 oz", name: "Cognac" },
      { amount: "0.5 oz", name: "Orange curaçao" },
      { amount: "1 tsp", name: "Maraschino liqueur" },
      { amount: "0.5 oz", name: "Lemon juice", note: "fresh" },
      { amount: "1 tsp", name: "Simple syrup" },
      { amount: "2 dash", name: "Angostura bitters" }
    ],
    steps: [
      "Cut one long peel from a lemon in a single strip and curl it inside a small coupe.",
      "Run a lemon wedge around the outside of the rim and dip it in sugar.",
      "Shake everything else hard with ice.",
      "Strain into the prepared glass."
    ],
    garnish: "The lemon peel is the garnish, and it goes in first",
    notes: "Joseph Santini made this in New Orleans in the 1850s, at the City Exchange or at his own Jewel of the South, and Jerry Thomas printed it in 1862. Crusta refers to the sugar rim. It is generally held to be the forerunner of the Sidecar and through it the Margarita, so this and the Sidecar are the same drink a century apart. It is also the first cocktail to write its garnish into the recipe: the peel lines the glass before anything is poured, rather than being dropped on top.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/310/brandy-crusta" },
      { label: "Punch", url: "https://punchdrink.com/recipes/brandy-crusta/" }
    ]
  },
  {
    id: "champs-elysees",
    name: "Champs-Élysées",
    category: "Sours",
    base: "Cognac",
    liqueurs: ["Green Chartreuse"],
    method: "Shake",
    glass: "Coupe",
    ice: "Served up",
    blurb: "A brandy sour with Chartreuse doing the aromatics. Herbal and bright.",
    ingredients: [
      { amount: "1.5 oz", name: "Cognac" },
      { amount: "0.5 oz", name: "Green Chartreuse" },
      { amount: "0.75 oz", name: "Lemon juice", note: "fresh" },
      { amount: "0.5 oz", name: "Simple syrup" },
      { amount: "1 dash", name: "Angostura bitters" }
    ],
    steps: [
      "Combine everything in a shaker with ice.",
      "Shake hard, about 12 seconds.",
      "Double-strain into a chilled coupe.",
      "Express a lemon peel over the top."
    ],
    garnish: "Lemon twist",
    notes: "Harry Craddock printed this in the 1930 Savoy Cocktail Book, named for the avenue. Structurally a brandy sour where Chartreuse supplies everything aromatic, which is a gentler use of the bottle than the Last Word gives it. Difford's pulls the syrup back to a quarter ounce on the grounds that Chartreuse is sweet enough already; try that if this reads sugary. The third green Chartreuse drink in the book, and the one where it plays support rather than lead.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/396/champs-elysees" }
    ]
  },
  {
    id: "jungle-bird",
    name: "Jungle Bird",
    category: "Sours",
    base: "Rum",
    bitters: ["Campari"],
    method: "Shake",
    glass: "Old-fashioned glass",
    ice: "Filled with ice",
    blurb: "Campari in a tiki drink. Bitter against pineapple, which shouldn't work but does.",
    ingredients: [
      { amount: "1.5 oz", name: "Dark rum", note: "blackstrap or aged Jamaican" },
      { amount: "0.75 oz", name: "Campari" },
      { amount: "1.5 oz", name: "Pineapple juice" },
      { amount: "0.5 oz", name: "Lime juice", note: "fresh" },
      { amount: "0.5 oz", name: "Simple syrup" }
    ],
    steps: [
      "Combine everything in a shaker with ice.",
      "Shake hard until the pineapple foams.",
      "Strain over fresh ice in an old-fashioned glass."
    ],
    garnish: "A pineapple wedge",
    notes: "Jeffrey Ong made this at the Aviary Bar in the Kuala Lumpur Hilton as the hotel's welcome drink, some time between 1973 and 1978 depending on the account; the first printed recipe is from 1989. It was served in a ceramic bird, which is where the name comes from. The original calls for a full 4 oz of pineapple, and modern bars pull it back to around 1.5 oz so the Campari still registers. The only tiki drink built on a bitter aperitivo, and the reason it outlasted the rest of that era.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/1082/jungle-bird" },
      { label: "Jungle Bird", url: "https://en.wikipedia.org/wiki/Jungle_Bird" }
    ]
  },
  {
    id: "greyhound",
    name: "Greyhound",
    category: "Highballs",
    base: "Vodka",
    method: "Build",
    glass: "Highball glass",
    ice: "Filled with ice",
    blurb: "Two ingredients, so squeeze the grapefruit yourself.",
    ingredients: [
      { amount: "1.5 oz", name: "Vodka", note: "Belvedere" },
      { amount: "6 oz", name: "Grapefruit juice", note: "fresh" }
    ],
    steps: [
      "Fill a highball glass with ice.",
      "Add the vodka, then top with grapefruit juice.",
      "Stir once."
    ],
    garnish: "Grapefruit wedge",
    notes: "Roughly 1:4, which is the standard. It first appears in the 1930 Savoy Cocktail Book made with gin, and gin is still the better drink if you want the botanicals; vodka lets the grapefruit read louder. Salt the rim and it becomes a Salty Dog. The salt was added in the 1920s for people who found the grapefruit too bitter.",
    sources: [
      { label: "Greyhound", url: "https://en.wikipedia.org/wiki/Greyhound_(cocktail)" }
    ]
  },
  {
    id: "irish-coffee",
    name: "Irish Coffee",
    category: "Hot Drinks",
    base: "Irish Whiskey",
    method: "Build",
    glass: "Warmed mug or footed glass",
    ice: "Served hot",
    blurb: "Hot coffee and whiskey under cold cream. Drink it through the float.",
    ingredients: [
      { amount: "1.5 oz", name: "Jameson Irish whiskey" },
      { amount: "4 oz", name: "Hot coffee", note: "freshly brewed" },
      { amount: "0.5 oz", name: "Demerara syrup" },
      { amount: "1 oz", name: "Heavy cream", note: "lightly whipped" }
    ],
    steps: [
      "Rinse the glass with hot water to warm it, then empty it.",
      "Add the whiskey, syrup and coffee, and stir to dissolve.",
      "Whip the cream just until it thickens but still pours.",
      "Float it over the back of a spoon so it sits on top."
    ],
    garnish: "Nothing — the cream is the garnish",
    notes: "Joe Sheridan made the first one for stranded passengers at the Foynes flying-boat terminal in 1943; Stanton Delaplane brought it to the Buena Vista in San Francisco in 1952 and it stuck. The cream has to be whipped just past pourable: too loose and it sinks, too stiff and you eat it with a spoon. Don't stir after the float, because the whole point is drinking hot coffee through cold cream. Demerara rather than white sugar gives it depth against the whiskey.",
    sources: [
      { label: "Difford's Guide", url: "https://www.diffordsguide.com/cocktails/recipe/1056/irish-coffee" }
    ]
  },
  {
    id: "paloma",
    name: "Paloma",
    category: "Highballs",
    base: "Tequila",
    method: "Build",
    glass: "Highball glass",
    ice: "Filled with ice",
    blurb: "Mexico's everyday tequila drink. The grapefruit soda carries it.",
    ingredients: [
      { amount: "2 oz", name: "Blanco tequila", note: "100% agave" },
      { amount: "0.5 oz", name: "Lime juice", note: "fresh" },
      { amount: "top", name: "Grapefruit soda", note: "Squirt or Jarritos Toronja" }
    ],
    steps: [
      "Fill a highball glass with ice.",
      "Add the tequila and lime juice.",
      "Top with grapefruit soda and stir once."
    ],
    garnish: "Grapefruit wedge",
    notes: "Built on soda rather than fresh juice, which is how it's actually served in Mexico. Squirt is the original bar pick, lighter and sweeter; Jarritos Toronja is easier to find in the US and runs darker and more bitter. The rim is usually salted or Tajín-dusted, and is skipped here. The craft version swaps the soda for fresh grapefruit juice with agave and a club soda top, which comes out tarter and less sweet.",
    sources: [
      { label: "Paloma", url: "https://en.wikipedia.org/wiki/Paloma_(cocktail)" }
    ]
  },
  {
    id: "jameson-and-ginger",
    name: "Jameson and Ginger",
    category: "Highballs",
    base: "Irish Whiskey",
    method: "Build",
    glass: "Highball glass",
    ice: "Filled with ice",
    blurb: "A Jamie and Ginger. Two ingredients, a lime, done.",
    ingredients: [
      { amount: "1.5 oz", name: "Jameson Irish whiskey" },
      { amount: "4.5 oz", name: "Ginger ale" },
      { amount: "1", name: "Lime wedge" }
    ],
    steps: [
      "Fill a tall glass with ice.",
      "Pour in the Jameson, then top with ginger ale.",
      "Squeeze in the lime wedge, stir once, and drop it in."
    ],
    garnish: "The squeezed lime wedge",
    notes: "Jameson's own 1:3 serve, lime included. The lime cuts the sweetness of the ginger ale and is the difference between this and a flat highball. Also turns up as an Irish Mule or Irish Buck, though those usually mean ginger beer.",
    sources: [
      { label: "Jameson (official)", url: "https://www.jamesonwhiskey.com/en-us/cocktail-recipes/jameson-ginger-lime/" }
    ]
  },
  {
    id: "bourbon-and-ginger",
    name: "Bourbon and Ginger",
    category: "Highballs",
    base: "Bourbon",
    method: "Build",
    glass: "Highball glass",
    ice: "Filled with ice",
    blurb: "The same idea with bourbon, rounder and a little sweeter.",
    ingredients: [
      { amount: "1.5 oz", name: "Bourbon" },
      { amount: "4.5 oz", name: "Ginger ale" },
      { amount: "1", name: "Lime wedge" }
    ],
    steps: [
      "Fill a tall glass with ice.",
      "Pour in the bourbon, then top with ginger ale.",
      "Squeeze in the lime wedge, stir once, and drop it in."
    ],
    garnish: "The squeezed lime wedge",
    notes: "Same 1:3 build as the Jameson. Ginger beer in place of the ale makes it drier and much spicier, closer to a Kentucky Mule. Two dashes of Angostura is the other common upgrade, which gets you into Horsefeather territory.",
    sources: []
  }
];
