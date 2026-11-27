// Pricelist: a printable DM reference.
// Compile with: typst compile docs/pricelist.typ
// Fonts: Libre Baskerville and Merriweather if installed, otherwise Baskerville or the
// Libertinus Serif that ships with Typst.

// ---------- Colours (from docs/visual-language.md) ----------
#let ink = rgb("#4a4138")
#let red = rgb("#8e2a1e")
#let reddark = rgb("#68211b")
#let gold = rgb("#cdb37a")
#let parch = rgb("#fbf5e4")

#let heading-font = ("Libre Baskerville", "Baskerville", "Libertinus Serif", "Linux Libertine")
#let body-font = ("Merriweather", "Libertinus Serif", "Linux Libertine")

// ---------- Page and text ----------
#set document(title: "Pricelist", author: "Michal Špitálský")
#set page(
  paper: "a4",
  margin: (x: 1.5cm, top: 1.6cm, bottom: 1.6cm),
  header: context {
    if counter(page).get().first() > 1 {
      set text(size: 7.5pt, fill: ink.lighten(30%), font: heading-font)
      grid(
        columns: (1fr, 1fr),
        align(left, upper[Pricelist]),
        align(right, smallcaps[DM reference]),
      )
      v(-0.6em)
      line(length: 100%, stroke: 0.4pt + gold)
    }
  },
  footer: context {
    set text(size: 7.5pt, fill: ink.lighten(30%), font: heading-font)
    align(center)[— #counter(page).display() —]
  },
)
#set text(font: body-font, size: 8.5pt, fill: ink, lang: "en")
#set par(justify: true, leading: 0.55em, spacing: 0.75em)
#set list(marker: text(fill: red)[•], indent: 0.4em, body-indent: 0.5em, spacing: 0.5em)
#set enum(indent: 0.4em, body-indent: 0.5em, spacing: 0.5em)
#show strong: set text(fill: reddark)

// ---------- Headings ----------
#show heading.where(level: 1): it => {
  v(0.8em, weak: true)
  block(sticky: true, below: 0.5em, width: 100%)[
    #text(font: heading-font, size: 11pt, fill: reddark, weight: "bold", upper(it.body))
    #v(-0.55em)
    #line(length: 100%, stroke: 1.2pt + gold)
  ]
}
#show heading.where(level: 2): it => {
  v(0.6em, weak: true)
  block(sticky: true, below: 0.5em,
    text(font: heading-font, size: 9.5pt, fill: red, weight: "bold", it.body))
}
#show heading.where(level: 3): it => {
  v(0.5em, weak: true)
  block(sticky: true, below: 0.35em,
    text(font: heading-font, size: 8.5pt, fill: red, weight: "bold", smallcaps(it.body)))
}

// ---------- Helpers ----------
#let note(body) = text(size: 7.5pt, style: "italic", fill: ink.lighten(15%), body)
// A note right under a heading: stays with the table that follows.
#let lead(body) = block(sticky: true, below: 0.6em, note(body))

// A price table: gold rule under the header, light zebra rows.
#let pt(columns: auto, align: left, stroke: none, head: (), ..rows) = {
  set text(size: 8pt)
  set par(justify: false, leading: 0.45em)
  table(
    columns: columns,
    align: align,
    stroke: stroke,
    inset: (x: 5pt, y: 3.2pt),
    fill: (x, y) => if y > 0 and calc.even(y) { parch },
    table.header(..head.map(h => text(font: heading-font, fill: reddark, weight: "bold", h))),
    table.hline(stroke: 0.9pt + gold),
    ..rows.pos(),
    table.hline(stroke: 0.5pt + gold),
  )
}

// Name–price pairs laid out column by column, n pairs across the page.
#let pairs(n: 2, head: ([Item], [Price]), items) = {
  let rows = calc.ceil(items.len() / n)
  let cells = ()
  for r in range(rows) {
    for c in range(n) {
      let i = c * rows + r
      if i < items.len() {
        cells.push(items.at(i).at(0))
        cells.push(items.at(i).at(1))
      } else {
        cells.push([])
        cells.push([])
      }
    }
  }
  let heads = ()
  let cols = ()
  for c in range(n) {
    heads += head
    cols += (1fr, auto)
  }
  pt(
    columns: cols,
    stroke: (x, y) => if x > 0 and calc.even(x) { (left: 0.5pt + gold) },
    head: heads,
    ..cells,
  )
}

// ---------- Title ----------
#block(width: 100%, below: 0.8em)[
  #text(font: heading-font, size: 20pt, fill: reddark, weight: "bold", upper[Pricelist])
  #v(-0.9em)
  #line(length: 100%, stroke: 1.5pt + gold)
  #v(-0.5em)
  #text(font: heading-font, size: 8pt, style: "italic")[List prices: a shop in a big town, in peacetime. Prices move with season, region and events (section 12).]
]

= 1. Coins

#grid(
  columns: (1fr, 1.2fr),
  column-gutter: 12pt,
  pt(
    columns: (auto, auto, 1fr),
    head: ([Coin], [Worth], [Roughly]),
    [*Copper (cp)*], [—], [A mug of cheap beer],
    [*Silver (sp)*], [10 cp], [A day's unskilled wage],
    [*Gold (gp)*], [100 sp], [3–4 months' labour],
    [Kopa (counting unit)], [60 sp], [—],
    [Florin (trade coin)], [16 sp], [Merchants and nobles],
    [*Material*], [1 sp], [Abstract stock],
  ),
  [
    === What money buys
    #pt(
      columns: (auto, 1fr),
      head: ([Amount], [Buys]),
      [1 cp], [A mug of beer, a bread roll, a torch, a foot toll],
      [1 sp], [A day's wage, a chicken, a day's rations, a modest day's living],
      [10 sp], [A shortbow, a shield, a calf, a plough],
      [1 gp], [Two cows, a longsword with change, a year's rent on a peasant holding],
      [10 gp], [A simple house in a big town, a cheap warhorse],
      [100 gp], [A showpiece burgher house, a small village],
    )
  ],
)

= 2. Rules of thumb

#grid(
  columns: (1.4fr, 1fr),
  column-gutter: 12pt,
  pt(
    columns: (1fr, auto),
    head: ([Situation], [Price]),
    [Selling to a pawnbroker or casual buyer], [half of list],
    [Selling a sword to anyone but a knight, noble or armourer], [a tenth of list],
    [Making plain gear], [two thirds of list, in Material],
    [Repairing a broken item], [5 Material + skill check],
    [Silvering a weapon, or 10 pieces of ammunition], [50 sp],
    [Refitting second-hand plate], [30 sp + a week],
    [Armour upkeep on the road (mail, plate)], [1 sp a week],
    [Substance from a shop], [Material × 1.5],
    [Local remedy from a village herb-wife], [5 cp per Material],
    [Imported ingredients], [Material +25% (town), +50% (country)],
    [Coins against a Scar (DM allows)], [1 sp per point],
    [Workshop or smithy, a day], [2–3 sp],
  ),
  [
    === Haggling (2d6)
    #pt(
      columns: (1fr, 1fr),
      align: (center, center),
      head: ([2d6], [Price]),
      [2], [−30%],
      [3–4], [−15%],
      [5–9], [List],
      [10–11], [+15%],
      [12], [+30%],
    )
    #note[A won haggling roll moves the result one step towards the buyer.]
  ],
)

= 3. Weapons

=== Simple weapons

#pt(
  columns: (auto, auto, auto, 1fr),
  head: ([Weapon], [Price], [Damage], [Properties]),
  [Sling], [1 cp], [1d4 bludgeoning], [Ammunition (6/24 m)],
  [Club], [2 cp], [1d4 bludgeoning], [Light],
  [Quarterstaff], [2 cp], [1d6 bludgeoning], [Versatile (1d8)],
  [Greatclub], [5 cp], [1d8 bludgeoning], [Two-handed],
  [Pitchfork], [5 cp], [1d6 piercing], [Two-handed],
  [Dagger], [3 sp], [1d4 piercing], [Finesse, Light, Thrown (4/12 m)],
  [Javelin], [3 sp], [1d6 piercing], [Thrown (6/24 m)],
  [Light hammer], [3 sp], [1d4 bludgeoning], [Light, Thrown (4/12 m)],
  [Sickle], [3 sp], [1d4 slashing], [Light],
  [Spear], [4 sp], [1d6 piercing], [Thrown (4/12 m), Versatile (1d8)],
  [Handaxe], [5 sp], [1d6 slashing], [Light, Thrown (4/12 m)],
  [Shortbow], [10 sp], [1d6 piercing], [Ammunition (16/64 m), Two-handed],
  [Mace], [15 sp], [1d6 bludgeoning], [—],
  [Light crossbow], [40 sp], [1d8 piercing], [Ammunition (16/64 m), Loading, Two-handed],
)

=== Martial weapons

#pt(
  columns: (auto, auto, auto, 1fr),
  head: ([Weapon], [Price], [Damage], [Properties]),
  [Lance], [6 sp], [1d12 piercing], [Reach; disadvantaged within 1 m; two-handed unless mounted],
  [Pick], [8 sp], [1d8 piercing], [Also digs],
  [Maul], [10 sp], [2d6 bludgeoning], [Heavy, Two-handed],
  [Billhook], [12 sp], [1d8 slashing], [Reach, Two-handed],
  [Longbow], [15 sp], [1d8 piercing], [Ammunition (30/120 m), Heavy, Two-handed],
  [Morgenstern], [15 sp], [1d8 piercing], [—],
  [Voulge], [15 sp], [1d10 slashing], [Heavy, Reach, Two-handed],
  [Warhammer], [15 sp], [1d8 bludgeoning], [Versatile (1d10)],
  [Battleaxe], [20 sp], [1d8 slashing], [Versatile (1d10)],
  [Bardiche], [20 sp], [1d10 slashing], [Heavy, Two-handed],
  [Flail], [20 sp], [1d8 bludgeoning], [—],
  [Glaive], [25 sp], [1d10 slashing], [Heavy, Reach, Two-handed],
  [Halberd], [25 sp], [1d10 slashing], [Heavy, Reach, Two-handed],
  [Greataxe], [30 sp], [1d12 slashing], [Heavy, Two-handed],
  [Hunting sword (_tesák_)], [30 sp], [1d6 slashing], [Finesse, Light. Counts as a knife],
  [Shortsword (messer, falchion)], [60 sp], [1d6 piercing], [Finesse, Light. _Fortunate_],
  [Heavy crossbow], [80 sp], [1d10 piercing], [Ammunition (20/80 m), Heavy, Loading, Two-handed],
  [Longsword], [120 sp], [1d8 slashing], [Versatile (1d10). _Fortunate_],
  [Scimitar (sabre)], [120 sp], [1d6 slashing], [Finesse, Light. _Fortunate_],
  [Greatsword], [200 sp], [2d6 slashing], [Heavy, Two-handed. _Fortunate_],
  [Rapier (a luxury sword)], [200 sp], [1d8 piercing], [Finesse. _Fortunate_],
)

=== More weapons

#pt(
  columns: (auto, auto, auto, 1fr),
  head: ([Weapon], [Price], [Damage], [Properties]),
  [Dart], [1 cp], [1d4 piercing], [Finesse, Thrown (4/12 m)],
  [Whip], [3 sp], [1d4 slashing], [Finesse, Reach],
  [War flail, threshing flail], [3 sp], [1d8 bludgeoning], [Two-handed],
  [Net], [5 sp], [—], [Thrown (1/3 m); a hit Restrains a Medium or smaller target],
  [Blowgun], [5 sp], [1 piercing], [Ammunition (5/20 m), Loading],
  [Pike], [8 sp], [1d10 piercing], [Heavy, Reach, Two-handed],
  [Trident, fishing spear], [8 sp], [1d6 piercing], [Thrown (4/12 m), Versatile (1d8)],
  [Morningstar], [15 sp], [1d8 piercing], [—],
  [War pick], [15 sp], [1d8 piercing], [—],
  [Khopesh], [120 sp], [1d6 slashing], [Finesse, Light. _Fortunate_],
  [Hand crossbow (a rare curiosity)], [150 sp], [1d6 piercing], [Ammunition (6/24 m), Light, Loading],
)

=== Ammunition and accessories

#pairs(n: 2, (
  ([Sling bullets (20)], [2 cp]),
  ([Spare bowstring], [5 cp]),
  ([Quiver], [1 sp]),
  ([Sword belt], [1 sp]),
  ([Bolt case], [1 sp]),
  ([Bolts (20), iron], [2 sp]),
  ([Blowgun needles (50)], [2 sp]),
  ([Fire arrows (10)], [2 sp]),
  ([Ballista bolt, one], [2 sp]),
  ([Scabbard], [2 sp]),
  ([Arrows (20)], [3 sp]),
  ([Bolts (20), steel-tipped], [4 sp]),
  ([Cranequin (heavy crossbow winder)], [20 sp]),
  ([Silvering (a weapon or 10 pieces)], [50 sp]),
))

= 4. Armour and shields

#lead[Protection and Burden tiers: 1–3 light, 4–6 medium, 7+ heavy. A fitted plate harness (pieces marked _harness_) gives −3 Burden.]

#pt(
  columns: (1fr, auto, auto, auto, auto),
  align: (left, left, center, center, left),
  head: ([Piece], [Slot], [Prot.], [Burden], [Price]),
  [Padded hood], [Head], [1], [1], [4 sp],
  [Padded coif], [Head], [1], [1], [6 sp],
  [Iron cap], [Head], [1], [1], [30 sp],
  [Kettle hat], [Head], [1], [1], [30 sp],
  [Mail coif], [Head], [1], [1], [40 sp],
  [Bascinet with mail aventail _(harness)_], [Head], [2], [2], [48 sp],
  [Mask helmet], [Head], [2], [2], [50 sp],
  [Closed bascinet, visored _(harness)_], [Head], [3], [3], [80 sp],
  [Gambeson], [Under], [1], [1], [30 sp],
  [Hide jerkin], [Body], [1], [1], [15 sp],
  [Leather jerkin], [Body], [1], [1], [30 sp],
  [Mail shirt (haubergeon)], [Body], [2], [2], [150 sp],
  [Scale shirt], [Body], [2], [2], [150 sp],
  [Brigandine], [Body], [3], [3], [160 sp],
  [Coat of plates _(harness)_], [Body], [3], [3], [200 sp],
  [Breastplate _(harness)_], [Body], [3], [3], [200 sp],
  [Mail hauberk, long and sleeved], [Body + arms], [3], [3], [240 sp],
  [Plate arms with gauntlets _(harness)_], [Arms], [1], [1], [90 sp],
  [Mail chausses], [Legs], [1], [1], [60 sp],
  [Plate legs _(harness)_], [Legs], [1], [1], [110 sp],
)

#grid(
  columns: (1.3fr, 1fr),
  column-gutter: 12pt,
  [
    === Example sets
    #pt(
      columns: (1fr, auto, auto, auto),
      align: (left, center, left, left),
      head: ([Set], [Rating], [Enc.], [Price]),
      [Gambeson + kettle hat], [1], [—], [60 sp],
      [Militia: gambeson + mail shirt + kettle hat], [2], [1 Body], [210 sp],
      [Gambeson + coat of plates + kettle hat], [2], [1 Body], [260 sp],
      [Man-at-arms: gambeson + hauberk + bascinet + chausses], [3], [2 Body], [378 sp],
      [Full fitted plate], [3], [1 Body], [478 sp],
      [Bespoke knightly harness (prestige only)], [3], [1 Body], [45 gp],
      [Second-hand plate (+30 sp and a week to refit)], [3], [1 Body], [about 300 sp],
    )
  ],
  [
    === Shields
    #pt(
      columns: (1fr, auto),
      head: ([Shield], [Price]),
      [Buckler (light)], [5 sp],
      [Targe (light)], [8 sp],
      [Round shield], [10 sp],
      [Heater shield], [15 sp],
      [Kite shield], [15 sp],
      [Mantlet (¾ cover, 1–2 people)], [15 sp],
      [Pavise (heavy; planted: ½ cover)], [40 sp],
      [Siege mantlet (total cover, 4)], [60 sp],
    )
  ],
)

= 5. Gear, tools and kits

=== Adventuring gear

#pairs(n: 3, (
  ([Torch], [1 cp]),
  ([Dice], [1 cp]),
  ([Quill], [1 cp]),
  ([Candle, tallow], [1 cp]),
  ([Chalk], [1 cp]),
  ([String (15 m)], [1 cp]),
  ([Whistle], [1 cp]),
  ([Paper (sheet)], [2 cp]),
  ([Clay jug, clay lamp], [2 cp]),
  ([Soap], [2 cp]),
  ([Loaded dice], [5 cp]),
  ([Candle, wax], [5 cp]),
  ([Sack], [5 cp]),
  ([Bucket], [5 cp]),
  ([Basket], [5 cp]),
  ([Ladder (3 m)], [5 cp]),
  ([Pole (3 m)], [5 cp]),
  ([Fishing tackle], [5 cp]),
  ([Prayer beads], [5 cp]),
  ([Pouch], [1 sp]),
  ([Rations (1 day)], [1 sp]),
  ([Oil (flask)], [1 sp]),
  ([Ink (bottle)], [1 sp]),
  ([Parchment (sheet)], [1 sp]),
  ([Sealing wax], [1 sp]),
  ([Hammer], [1 sp]),
  ([Iron spikes (10)], [1 sp]),
  ([Caltrops (bag of 20)], [1 sp]),
  ([Scroll or map case], [1 sp]),
  ([Wax tablet and stylus], [1 sp]),
  ([Glass jar], [1 sp 5 cp]),
  ([Tinderbox], [2 sp]),
  ([Rank insignia], [2 sp]),
  ([Glass bottle], [2 sp]),
  ([Abacus], [2 sp]),
  ([Barrel], [2 sp]),
  ([Waterskin], [3 sp]),
  ([Blanket], [3 sp]),
  ([Holy symbol, pewter], [3 sp]),
  ([Backpack], [4 sp]),
  ([Rope (15 m)], [4 sp]),
  ([Shovel], [4 sp]),
  ([Bedroll], [5 sp]),
  ([Crowbar], [5 sp]),
  ([Hunting trap], [5 sp]),
  ([Playing cards], [5 sp]),
  ([Grappling hook], [5 sp]),
  ([Rope ladder (5 m)], [5 sp]),
  ([Bell, brass], [5 sp]),
  ([Perfume (vial)], [5 sp]),
  ([Iron pot], [8 sp]),
  ([Lantern], [8 sp]),
  ([Manacles], [8 sp]),
  ([Block and tackle], [10 sp]),
  ([Chain (3 m)], [10 sp]),
  ([Chest, plain], [10 sp]),
  ([Component pouch], [10 sp]),
  ([Hourglass (a luxury)], [10 sp]),
  ([Steel mirror], [15 sp]),
  ([Lock], [15 sp]),
  ([Lantern, bullseye], [15 sp]),
  ([Tent (two-person)], [20 sp]),
  ([Ledger], [20 sp]),
  ([Signet ring (silver)], [50 sp]),
  ([Silk rope (15 m)], [50 sp]),
  ([Holy symbol, silver], [60 sp]),
  ([Chest with a lock], [60–120 sp]),
  ([Book (any subject)], [150 sp]),
  ([Spellbook (blank)], [200 sp]),
  ([Reading stone (lens)], [10 gp]),
  ([Holy book, illuminated], [1,440 sp]),
))

=== Kits

#pt(
  columns: (auto, 1fr, auto),
  head: ([Kit], [Contents], [Price]),
  [Potter's tools], [Ribs and scrapers, cutting wire], [2 sp 5 cp],
  [Brewer's supplies (for the road)], [Mash paddle, funnel and sieve, ladle], [3 sp],
  [Bowyer's tools], [Drawknife, bowstring wax, fletching feathers], [4 sp 5 cp],
  [Surveyor's tools], [Knotted measuring cord, plumb line, water level], [5 sp],
  [Tailor's tools], [Shears, needle and thread, fabric scraps], [6 sp],
  [Healer's kit], [Splints, needle and thread, a lancet, linen bandages], [10 sp],
  [Herbalism kit], [Leather gloves, clippers, mortar and pestle, 3 glass jars, 2 pouches], [10 sp],
  [Leatherworker's tools], [Leather knife, awl, needle and thread, cobbler's last], [10 sp],
  [Smith's tools (for the road)], [Smith's hammer, tongs, file], [12 sp],
  [Cartographer's tools], [Drawing compasses, ruler, quill, ink, 5 sheets of parchment], [12 sp 1 cp],
  [Cook's utensils], [Kitchen knives, iron pot, ladle, spice box], [16 sp 5 cp],
  [Writing things], [10 quills, ink, coloured inks, a penknife, 5 sheets of parchment], [20 sp],
  [Mason's tools], [Mason's hammer, chisels, trowel, mason's square], [20 sp],
  [Navigator's tools], [Lodestone compass, sounding line, ruler], [24 sp],
  [Carpenter's tools], [Saw, plane, chisels, auger, claw hammer], [25 sp],
  [Disguise kit], [Face paints and powders, hair dye, false beard and wig, small mirror on a handle], [30 sp],
  [Thieves' tools], [File, lockpicks, small mirror on a handle, scissors, pliers], [30 sp],
  [Forgery kit], [Blank seals, wax-carving tools, sealing wax, 10 quills, ink, 5 sheets of parchment], [40 sp],
  [Merchant's kit], [Balance scales and weights, counting cloth and tokens, ledger], [40 sp],
  [Tinker's tools], [Small hammer, snips, solder, a few rivets], [40 sp],
  [Poisoner's kit], [Vials, gloves, a small mortar, a dropper, a scale], [60 sp],
  [Goldsmith's tools], [Jeweller's files, jeweller's saw, tweezers, touchstone], [80 sp],
)

#grid(
  columns: (1fr, 1fr, 1fr),
  column-gutter: 10pt,
  [
    === Workshops
    #pairs(n: 1, head: ([Workshop], [Price]), (
      ([Weaver's loom], [60 sp]),
      ([Brewer's set with copper kettle], [60 sp]),
      ([Smithy: anvil and full kit], [100 sp]),
      ([Alchemist's supplies], [100 sp]),
      ([Renting one, a day], [2–3 sp]),
      ([Renting one, a month], [20–40 sp]),
    ))
  ],
  [
    === Instruments
    #pairs(n: 1, (
      ([Flute], [2 sp]),
      ([Drum], [5 sp]),
      ([Hunting horn], [5 sp]),
      ([Shawm], [10 sp]),
      ([Bagpipes], [30 sp]),
      ([Lyre], [40 sp]),
      ([Dulcimer], [40 sp]),
      ([Fiddle], [50 sp]),
      ([Hurdy-gurdy], [50 sp]),
      ([Lute], [60 sp]),
    ))
  ],
  [
    === Clothes
    #pairs(n: 1, head: ([Clothing], [Price]), (
      ([Belt], [1 sp]),
      ([Hat, cap, hood], [2 sp]),
      ([Gloves], [2 sp]),
      ([Shoes], [3 sp]),
      ([Linen shirt or shift], [3 sp]),
      ([Hose], [4 sp]),
      ([Tunic or kirtle], [6 sp]),
      ([Hooded cape], [8 sp]),
      ([Leather boots], [10 sp]),
      ([Woollen cloak], [15 sp]),
      ([Common clothes], [40 sp]),
      ([Costume], [40 sp]),
      ([Traveller's clothes], [60 sp]),
      ([Fur-lined winter coat], [60 sp]),
      ([Fine clothes], [300 sp]),
    ))
  ],
)

= 6. Mounts, animals and vehicles

#grid(
  columns: (1.15fr, 1fr),
  column-gutter: 12pt,
  [
    === Mounts
    #pt(
      columns: (1fr, auto, auto),
      head: ([Animal], [Price], [Speed]),
      [Donkey], [30 sp], [8 m],
      [Mule, pony], [50 sp], [8 m],
      [Draught horse], [80 sp], [8 m],
      [Riding horse (rouncey)], [150 sp], [12 m],
      [Palfrey (a smooth ride)], [300–500 sp], [12 m],
      [Courser (hunting and war)], [360–600 sp], [12 m],
      [Warhorse (destrier)], [12–24 gp], [12 m],
      [Royal destrier], [50–150 gp], [12 m],
    )
    === Livestock and other animals
    #pairs(n: 1, head: ([Animal], [Price]), (
      ([Chicken], [1 sp]),
      ([Goose], [2 sp]),
      ([Goat], [6 sp]),
      ([Sheep], [8 sp]),
      ([Calf], [12 sp]),
      ([Pig], [20 sp]),
      ([Mastiff], [20 sp]),
      ([Hunting hound], [20–60 sp]),
      ([Cow], [50 sp]),
      ([Ox], [60 sp]),
      ([War dog (trained to fight)], [60–100 sp]),
      ([Trained hawk or falcon], [1–3 gp]),
      ([Gyrfalcon], [10+ gp]),
    ))
  ],
  [
    === Tack, feed and stabling
    #pt(
      columns: (1fr, auto),
      head: ([Item], [Price]),
      [Feed (a day)], [4 cp],
      [Horseshoes, or shoeing], [1 sp],
      [Stabling (a day, in town)], [1 sp],
      [Horse blanket], [3 sp],
      [Bit and bridle], [5 sp],
      [Saddlebags], [5 sp],
      [Pack saddle], [8 sp],
      [Riding saddle], [20 sp],
      [Military saddle], [40 sp],
      [Padded caparison (Prot. 1)], [60 sp],
      [Mail trapper (Prot. 3)], [480 sp],
      [Other barding], [2 × the same armour],
    )
    === Vehicles and boats
    #pt(
      columns: (1fr, auto),
      head: ([Vehicle], [Price]),
      [Raft], [10 sp or 10 Material],
      [Dugout canoe], [15 sp],
      [Sled], [15 sp],
      [Cart], [30 sp],
      [Rowing boat, river punt], [30 sp],
      [Wagon], [80 sp],
      [Carriage (covered, noble)], [5 gp],
      [River barge], [10–20 gp],
      [Longship], [100 gp],
      [Trading cog], [600–1,000 gp],
      [Warship], [1,200 gp],
      [Galley], [1,500 gp],
    )
  ],
)

=== Siege engines

#pt(
  columns: (1fr, auto, auto),
  head: ([Engine], [Price], [Build time, crew of 10]),
  [Siege ladder (6 m)], [5 sp], [An hour],
  [Ram, roofed], [10 gp], [3 days],
  [Ballista], [10 gp], [5 days],
  [Mangonel], [25 gp], [10 days],
  [Siege tower], [40 gp], [2 weeks],
  [Trebuchet], [60 gp], [3 weeks],
)

= 7. Living

=== Lifestyle

#pt(
  columns: (auto, auto, auto, auto, 1fr, auto),
  head: ([Lifestyle], [A day], [Meals], [Inn night], [Who lives like this], [Rest]),
  [Squalid], [3 cp], [2 cp], [1 cp], [Cottagers, the urban poor], [Poor],
  [Poor], [6 cp], [3 cp], [2 cp], [A labourer's household], [Poor],
  [Modest], [1 sp], [6 cp], [5 cp], [Most burghers and craftsmen], [Poor, unless safe and calm],
  [Comfortable], [2 sp], [1 sp], [1 sp], [A master craftsman, minor gentry], [Quality],
  [Wealthy], [5 sp], [3 sp], [3 sp], [The top of the gentry], [Quality],
  [Aristocratic], [20 sp+], [10 sp], [10 sp], [Barons and prelates], [Quality],
)

#note[An inn's common-room bed 2 cp, a private room 1 sp.]

=== Food and drink

#pairs(n: 2, (
  ([Beer, a mug], [1 cp]),
  ([White roll], [1 cp]),
  ([Rye loaf], [2 cp]),
  ([Butter, 1 lb], [2 cp]),
  ([Dried fish or herring, 1 lb], [2 cp]),
  ([Smoked sausage], [2 cp]),
  ([Pickled cabbage, a pot], [2 cp]),
  ([Hot tavern meal], [2–5 cp]),
  ([Beer, a gallon (about 4 l)], [3 cp]),
  ([Cheese, a hunk], [3 cp]),
  ([Eggs, a dozen], [3 cp]),
  ([Local wine, a pitcher], [4 cp]),
  ([Meat, a chunk], [5 cp]),
  ([Mead, a pitcher], [6 cp]),
  ([Honey, 1 lb], [1 sp]),
  ([Smoked ham], [3 sp]),
  ([A banquet, per person], [3 sp]),
  ([Fine wine, a bottle], [3–5 sp]),
  ([Sugar, 1 lb (imported)], [5 sp]),
  ([A barrel of herring], [5 gp]),
))

=== Services

#pairs(n: 2, head: ([Service], [Price]), (
  ([Laundry, a bundle], [1 cp]),
  ([Bathhouse], [1–2 cp]),
  ([Shave or haircut], [1 cp]),
  ([A cab in town], [1 cp]),
  ([Scribe writes or reads a letter], [1–3 cp]),
  ([Messenger on foot, per 1.5 km (min. 5 cp)], [1 cp]),
  ([Carter's wagon, per 1.5 km], [1 cp]),
  ([Passage by river, per 1.5 km], [1 cp]),
  ([Passage by sea, per 1.5 km], [2 cp]),
  ([Ferry: person / horse / cart], [1 cp / 3 cp / 1 sp]),
  ([Smith: sharpen / small repair / shoe], [1 cp / 2–5 cp / 1 sp]),
  ([Barber: bloodletting / minor surgery], [2–5 cp / 1–3 sp]),
  ([Physician: consultation / house call], [1–3 sp / 5 sp]),
  ([Low mass for a soul], [1 sp]),
  ([Blessing or prayer said for you], [1 sp]),
  ([Holy water (an offering)], [5 sp]),
  ([Baptism or marriage], [1–3 sp]),
  ([Local guide, a day], [2–3 sp]),
  ([Mounted courier, a day + feed], [3 sp]),
  ([Wagon with a driver, a day], [3 sp]),
  ([Burial rites], [4–6 sp]),
  ([Lord's letter of safe conduct], [5 sp]),
  ([Notary's deed], [5–10 sp]),
  ([Advocate, per case], [30+ sp]),
  ([Emptying a town cesspit], [120 sp]),
  ([Copying a book], [150 sp]),
  ([University study, 4 years], [1,440 sp]),
  ([Ransom of a captured knight], [30–100 gp]),
  ([Company: a quick visit, cheap house or bathhouse], [2–5 cp]),
  ([Company: a whole night, ordinary house], [1 sp]),
  ([Company: a bathhouse evening (bath, wine)], [2–3 sp]),
  ([Company: a courtesan, a night + gifts], [10–30 sp]),
))

= 8. Hirelings and companions

#grid(
  columns: (1fr, 1fr),
  column-gutter: 12pt,
  [
    === Hirelings (no Bond)
    #pt(
      columns: (1fr, auto),
      head: ([Hireling], [A day]),
      [Untrained (porter, torchbearer)], [1 sp],
      [Skilled (mason, scribe, guide)], [3 sp],
      [Crossbowman, archer], [3 sp],
      [Mounted man-at-arms], [5 sp],
      [Knight leading a troop], [10–20 sp],
    )
  ],
  [
    === Bound companions
    #pt(
      columns: (1fr, auto),
      head: ([What], [Cost]),
      [One payment (people)], [Bonus in sp (min. 1)],
      [One payment (animals)], [A day's ration per bonus],
      [Refill 1 Bond], [1 payment],
      [Heal a Bond scar level], [5 payments + check],
      [Raise Bond by 1], [5 payments + check],
      [Unit payment], [×5 per size step],
      [Artificial life], [5 Material per Bond],
    )
  ],
)

#note[Unit sizes: handful ×5, band ×25, horde ×125. A bonus-3 band: 75 sp a payment.]

= 9. Substances

#pt(
  columns: (1fr, auto, auto),
  head: ([Substance], [Material], [Shop price, for example]),
  [*Healing potion*], [1 per stored point], [5-point burn ointment: 8 sp],
  [*Antidote* to one poison], [Its strength], [Strength 3: 5 sp],
  [*Swallowed poison* (Medic)], [1 per strength, per dose], [Strength 3 sleeping draught: 5 sp a dose],
  [*Contact poison* (Rogue)], [1 per strength, per dose], [Strength 1, Fast: 3 sp],
  [*Narcotic* (Shaman)], [1 per strength, per dose], [Strength 2: 3 sp],
  [*Explosive* (Alchemist)], [2 per strength], [Strength 3 bomb: 9 sp; strength 7 powder keg: 21 sp],
  [*Corrosive* (Alchemist)], [2 per strength], [Strength 2 vial of acid: 6 sp; burning fire oil: 6 sp],
  [*Gas* (Alchemist)], [2 per strength], [Strength 3: 9 sp],
  [*Mechanical or wild trap*], [1 per strength (+1 for several)], [Strength 3 dart trap: 5 sp of parts],
  [*Property* (Fast, Two-part, Hard to detect…)], [+1 per strength each], [—],
  [*Skill elixir*], [2], [3 sp],
  [*Master elixir*], [3], [5 sp],
  [*Wonder elixir*], [5], [8 sp],
  [*Sigil* pool, *ritual item* charge], [1 per point], [Not sold],
)

#note[Bombs, acids and elixirs come only from a willing Alchemist. Selling poison to strangers is a hanging offence in most towns.]

= 10. Wages and pay

#pt(
  columns: (1fr, auto, auto),
  head: ([Profession], [A day], [A month or a year]),
  [Farmhand, live-in servant, maid], [3–5 cp + board], [25–50 sp a year + food and clothing],
  [Journeyman craftsman], [5–7 cp + board], [3–4 sp a week],
  [Minstrel, per show], [5 cp–2 sp + food], [—],
  [Bathhouse maid, harlot (ordinary house)], [2–5 cp a visit, 1 sp a night, less the house's cut], [—],
  [Courtesan], [10–30 sp a night + gifts], [—],
  [Unskilled day labourer (town)], [1 sp], [about 25 sp a month],
  [Silver miner], [1–1.5 sp], [7–8 sp a week],
  [Town guard, watchman], [1–1.5 sp], [30–40 sp a month],
  [Barber-surgeon], [1–2 sp], [—],
  [Foot soldier, militia], [1.5–2 sp], [50 sp a month],
  [Village smith], [2 sp], [—],
  [Carpenter], [2–3 sp], [16–20 sp a week],
  [Mason], [2.5–3 sp], [about 15 sp a week],
  [Scribe, town clerk], [2–3 sp], [500–800 sp a year],
  [Mint worker], [2–4 sp], [—],
  [Crossbowman, archer (mercenary)], [3 sp], [90 sp a month],
  [Town master smith], [3–4 sp], [—],
  [Apothecary (master)], [3–4 sp], [about 1,000 sp a year],
  [Master craftsman], [3–5 sp], [600–1,800 sp a year],
  [Mounted man-at-arms], [5 sp], [about 150 sp a month],
  [Physician (court retainer)], [5–10 sp a visit-day], [20–60 gp a year],
  [Knight leading a troop], [10–20 sp], [3–6 gp a month],
  [Estate hunter or forester], [—], [90 sp a year + food],
  [Mine foreman / mine administrator], [—], [84 / 1,248 sp a year],
  [Public notary], [—], [800–1,500 sp a year],
  [Parish priest], [—], [600–1,500 sp a year],
)

=== Adventurers' pay, per character

#pt(
  columns: (1fr, auto),
  head: ([Job], [Pay]),
  [A day of real danger], [10–15 sp],
  [Escort or guard duty, a few days], [10–20 sp],
  [Clearing out bandits (a 1–2 gp bounty split four ways)], [30–60 sp],
  [A dangerous monster, or a lord's errand], [50–100 sp],
  [Loot, per job], [5–30 sp],
)

= 11. Starting money

#pt(
  columns: (1fr, auto, auto),
  head: ([Background fortune], [Coins], [Material]),
  [*Poor*], [1–5 sp], [0–3],
  [*Commoner*], [5–15 sp], [1–5],
  [*Fortunate*], [15–60 sp], [1–8],
)

= 12. Prices move

#lead[Apply one step from each table that fits, then round to clean coins. In a hurry, take only the one that matters most.]

=== Season and events

#pt(
  columns: (1fr, auto, auto, auto, auto, auto, auto),
  align: (left, center, center, center, center, center, center),
  head: ([Event], [Food], [Livestock], [Arms, horses], [Cloth], [Labour], [Luxuries]),
  [After the harvest], [×0.8], [×0.9], [—], [—], [×0.9], [—],
  [Late spring], [×1.3], [×1.2], [×1.1], [—], [×1.2], [—],
  [Bad harvest], [×2], [×1.3], [—], [—], [×0.9], [×1.2],
  [Famine], [×3–4], [×1.5], [—], [—], [×0.8], [×1.5],
  [War nearby], [×1.5], [×1.5], [×1.5 (horses ×2)], [×1.2], [×1.3], [×1.3],
  [Siege (inside the walls)], [×5 or more], [×3], [×2], [×1.5], [—], [×2],
  [Plague year], [×1.2], [×0.9], [—], [—], [×1.3], [×1.2],
)

=== Region

#pt(
  columns: (auto, 1fr),
  head: ([Region], [Change]),
  [A big town], [Baseline for goods; food and lodging +10–20%; imported luxuries cheapest here],
  [A mining town], [Food, lodging and labour +25–50%],
  [A market town], [Baseline food; manufactured goods +10–20%],
  [A village], [Food and livestock −20%; manufactured goods +25–50% or not available; imports +100% or not available],
  [Near the salt mines], [Salt −60%],
)

= 13. Trade goods

#pairs(n: 2, head: ([Good], [Price]), (
  ([Oats, 1 lb], [¼ cp]),
  ([Rye, 1 lb], [½ cp]),
  ([Wheat, 1 lb], [1 cp]),
  ([Salt, 1 lb (near the mines / elsewhere)], [1 cp / 3 cp]),
  ([Flour, 1 lb], [2 cp]),
  ([Iron, 1 lb], [2 cp]),
  ([Copper, 1 lb], [5 cp]),
  ([Coarse linen or canvas, 1 m²], [1 sp]),
  ([Fine linen, 1 m²], [2 sp]),
  ([Fustian, 1 m²], [3 sp]),
  ([Wool, 1 lb (fine or dyed)], [3 sp]),
  ([Cloves, ginger, 1 lb], [4 sp]),
  ([Pepper, cinnamon, 1 lb], [6 sp]),
  ([Fine imported cloth, an ell (60 cm)], [20–40 sp]),
  ([Silk, 1 m²], [30 sp]),
  ([Saffron, 1 lb], [1 gp]),
  ([Silver, 1 lb], [1 gp]),
  ([Gold, 1 lb], [20 gp]),
))

= 14. Property and domains

#grid(
  columns: (1fr, 1fr),
  column-gutter: 12pt,
  [
    === Property
    #pt(
      columns: (1fr, auto),
      head: ([Property], [Price]),
      [Peasant cottage], [1–3 gp],
      [Wooden town house], [3.6 gp],
      [Simple three-room house], [4–7 gp],
      [House in a big town], [9 gp (larger 18–30)],
      [Two-storey town house], [10–13 gp],
      [Two-storey house with a workshop], [18–33 gp],
      [Permanent market stall], [10 gp],
      [Showpiece burgher house, main square], [67–210 gp],
      [A lán of good land (16–18 ha)], [9–15 gp],
      [Respectable gentry seat], [30–36 gp],
      [Village (10–15 lány)], [100–250 gp],
      [Small fortified manor (_tvrz_)], [150–300 gp],
      [Small castle with a domain], [1,000–3,000 gp],
    )
    #note[A small town's house: 50–70% of the big-town price.]
  ],
  [
    === Rent and upkeep
    #pt(
      columns: (1fr, auto),
      head: ([What], [Cost]),
      [Town house rent, a year], [8–10% of its value],
      [Workshop rent, a month], [20–40 sp],
      [Farm lease, a year], [60–120 sp],
      [Fortified manor upkeep, a season], [100 sp],
      [Small castle upkeep, a season], [1,000 sp],
      [Feast or alms (upkeep action)], [a tenth of the full income],
    )
  ],
)

=== Domain holdings: a season's income by mood

#pt(
  columns: (1fr, auto, auto, auto, auto),
  head: ([Holding], [Full], [¾], [Half], [To build or buy]),
  [A lán of peasant land], [10 sp], [8 sp], [5 sp], [900–1,500 sp],
  [A mill (the lord's monopoly)], [40 sp], [30 sp], [20 sp], [800 sp],
  [A tavern licence], [15 sp], [11 sp], [8 sp], [300 sp],
  [A smithy], [10 sp], [8 sp], [5 sp], [200 sp],
  [A fishpond], [30 sp], [23 sp], [15 sp], [600 sp],
  [Woods (timber, game, pannage)], [15 sp], [11 sp], [8 sp], [Comes with the land],
  [A vineyard], [20 sp], [15 sp], [10 sp], [400 sp, 3 years to the first harvest],
  [A toll (bridge, ford, road)], [30–60 sp], [23–45 sp], [15–30 sp], [A bridge, or a royal grant],
  [A weekly market (a town right)], [400 sp], [300 sp], [200 sp], [A royal or ducal charter],
  [A town house's rent], [8 sp], [6 sp], [4 sp], [—],
  [A silver mine], [500+ sp], [—], [—], [A royal grant; a story of its own],
)

= 15. Taxes, tolls and fines

#pt(
  columns: (auto, 1fr),
  head: ([Tax or due], [Rate]),
  [Cash rent], [60–100 sp a year per full lán],
  [Parish tithe], [15–20 sp a year per peasant],
  [Labour dues (_robota_)], [4–8 days a year, or 1 sp a day to buy them off],
  [Royal tax (_berna_), for coronations and royal weddings], [16–32 sp per lán; 12 sp per farmstead; 4 sp per cottager, workshop or tavern],
  [A royal town's special _berna_], [130–200 gp per town per levy],
  [Head tax], [1 cp per head],
  [Burgher rights], [30 sp, + a 6 gp bond for 3 years' residence],
  [Guild entry], [about 60 sp],
)

#grid(
  columns: (1.3fr, 1fr),
  column-gutter: 12pt,
  [
    === Tolls and market fees
    #pt(
      columns: (1fr, auto),
      head: ([Toll], [Rate]),
      [City gate: foot / rider / pack horse / cart], [1 cp / 2 cp / 3 cp / 1 sp],
      [Great bridge: foot / horse / cart], [1 cp / 3 cp / 1 sp],
      [A lord's road toll (_mýto_)], [1 cp a person, 5 cp a cart],
      [River toll, each station], [2–5 sp + 1 sp per cart-load],
      [Market stall, a day], [1–3 cp (prime spot 5 cp)],
      [Public scales], [1 cp per 25 lb],
      [Staple right (merchant halts 2–3 days)], [1/30 of the goods],
      [Beer or wine import excise], [1 sp a barrel],
    )
  ],
  [
    === Fines
    #pt(
      columns: (1fr, auto),
      head: ([Offence], [Fine]),
      [Killing a noble], [29 gp],
      [Killing a peasant], [5 gp],
      [Cutting off a hand, foot or nose], [7 gp],
      [Cutting off a finger], [1.5 gp],
      [Calling a noble a "whore's son"], [29 gp],
      [A peasant striking a knight], [3 gp],
    )
  ],
)
