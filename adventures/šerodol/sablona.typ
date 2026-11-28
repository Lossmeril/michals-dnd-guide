// Šablona pro dobrodružství Vůně perníku: barvy, boxy, statbloky.
// Kapitoly ji načítají přes #import "sablona.typ": *

#let ink = rgb("#4a4138")
#let red = rgb("#8e2a1e")
#let reddark = rgb("#68211b")
#let gold = rgb("#cdb37a")
#let parch = rgb("#f5ebd1")
#let green = rgb("#e3eecf")
#let greenline = rgb("#7d8f5c")
#let lightred = rgb("#f8e1dc")
#let c-body = rgb("#c25a7c")
#let c-soul = rgb("#6a5acd")
#let c-cha = rgb("#b8860b")

#let heading-font = ("Libre Baskerville", "Baskerville", "Libertinus Serif")
#let body-font = ("Merriweather", "Libertinus Serif")

// Zdroje
#let T = text(fill: c-body, weight: "bold")[Tělo]
#let D = text(fill: c-soul, weight: "bold")[Duše]
#let V = text(fill: c-cha, weight: "bold")[Vliv]

// Malé štítky v textu (manévry, stavy)
#let man(n) = text(weight: "bold", fill: reddark, n)
#let stav(n) = text(style: "italic", weight: "bold", n)

// Hlavička boxu: drobné kapitálky
#let label(n, col: reddark) = text(font: heading-font, size: 7pt, weight: "bold", fill: col, tracking: 0.08em, upper(n))

// Text k přečtení nahlas: zelený pruh s inkoustovými linkami nahoře a dole.
#let cti(body) = block(
  width: 100%, breakable: false, above: 0.9em, below: 0.9em,
  fill: green, inset: (x: 8pt, top: 6pt, bottom: 7pt),
  stroke: (top: 1.4pt + ink, bottom: 1.4pt + ink),
)[
  #label([▶ Přečtěte nahlas], col: greenline.darken(30%))
  #v(-0.3em)
  #set text(font: heading-font, style: "italic", size: 8.4pt)
  #set par(leading: 0.62em, spacing: 0.75em)
  #body
]

// Co ví postava
#let vi(kdo, body) = block(
  width: 100%, breakable: true, above: 0.8em, below: 0.8em,
  inset: (x: 7pt, y: 6pt), radius: 2pt, stroke: 0.9pt + gold,
)[
  #label([Co ví: #kdo])
  #v(-0.2em)
  #body
]

// Čeho si lze všimnout
#let vsim(body) = block(
  width: 100%, breakable: true, above: 0.8em, below: 0.8em,
  fill: parch, inset: (x: 7pt, y: 6pt), radius: 2pt,
)[
  #label([◉ Čeho si lze všimnout])
  #v(-0.2em)
  #body
]

// Pro vypravěče: tajné informace, červený pruh vlevo
#let pv(body) = block(
  width: 100%, breakable: true, above: 0.8em, below: 0.8em,
  inset: (left: 7pt, y: 2pt), stroke: (left: 2pt + red),
)[
  #label([Pro vypravěče])
  #v(-0.2em)
  #body
]

// Pravidla scény: hody, Ohrožení, následky
#let pravidla(body) = block(
  width: 100%, breakable: false, above: 0.8em, below: 0.8em,
  inset: (x: 7pt, y: 5pt), stroke: (top: 0.6pt + ink, bottom: 0.6pt + ink),
)[
  #label([◆ Pravidla], col: ink)
  #v(-0.2em)
  #set text(size: 8pt)
  #body
]

// Otevřená otázka / nesrovnalost k rozhodnutí
#let otazka(body) = block(
  width: 100%, breakable: true, above: 0.8em, below: 0.8em,
  fill: lightred, inset: (x: 7pt, y: 5pt), radius: 2pt,
  stroke: (paint: red, thickness: 0.8pt, dash: "dashed"),
)[
  #label([✎ K rozhodnutí], col: red)
  #v(-0.2em)
  #set text(size: 8pt)
  #body
]

// Scéna, která v dobrodružství zatím chybí
#let chybi(nazev, body) = block(
  width: 100%, breakable: true, above: 0.8em, below: 0.8em,
  inset: (x: 7pt, y: 5pt), radius: 2pt,
  stroke: (paint: ink.lighten(30%), thickness: 0.8pt, dash: "dotted"),
)[
  #label([◌ Chybí scéna: #nazev], col: ink.lighten(10%))
  #v(-0.2em)
  #set text(size: 8pt)
  #body
]

// Tabulka: zlatá linka pod hlavičkou, střídavé řádky
#let tab(columns: auto, align: left, head: (), ..rows) = {
  set text(size: 7.8pt)
  set par(leading: 0.45em, justify: false)
  block(breakable: true, above: 0.7em, below: 0.8em, table(
    columns: columns, align: align, stroke: none,
    inset: (x: 4pt, y: 3pt),
    fill: (x, y) => if y > 0 and calc.even(y) { parch },
    ..if head.len() > 0 {
      (table.header(..head.map(h => text(font: heading-font, fill: reddark, weight: "bold", h))),
       table.hline(stroke: 0.9pt + gold))
    },
    ..rows.pos(),
    table.hline(stroke: 0.5pt + gold),
  ))
}

// Portrét postavy přes šířku sloupce, se jménem pod ním
#let portret(img, jmeno: none, vyska: 5.2cm) = block(width: 100%, breakable: false, above: 0.8em, below: 0.6em, {
  align(center, box(height: vyska, img))
  if jmeno != none {
    v(-0.4em)
    align(center, text(font: heading-font, size: 7.5pt, style: "italic", fill: ink.lighten(15%), jmeno))
  }
})

// ---------- Statblok ----------
// sb(jmeno, podtitul, telo, duse, vliv, ...)
#let sb(
  jmeno, podtitul,
  telo: none, duse: none, vliv: none, sudba: none,
  zbroj: none, rychlost: none, hrozba: none,
  dovednosti: none, imunity: none, slabiny: none, smysly: none,
  vlastnosti: (), akce: (), reakce: (),
  obrazek: none,
) = {
  let row(k, v) = if v != none [#text(weight: "bold", fill: reddark, k) #v \ ]
  let stat(n, col, val) = if val != none {
    box(inset: (x: 5pt, y: 2pt), stroke: 0.7pt + col, radius: 2pt)[
      #text(size: 6.5pt, fill: col, weight: "bold", upper(n)) #h(2pt) #text(size: 9pt, weight: "bold", str(val))
    ]
  }
  let polozky(nadpis, seznam) = if seznam.len() > 0 {
    block(above: 0.55em, below: 0.3em, width: 100%, stroke: (bottom: 0.5pt + red.lighten(40%)), inset: (bottom: 2pt),
      text(font: heading-font, size: 8.2pt, fill: red, weight: "bold", nadpis))
    for (n, t) in seznam {
      block(above: 0.45em, below: 0.45em)[#text(weight: "bold", style: "italic", n). #t]
    }
  }
  block(width: 100%, breakable: false, above: 1em, below: 1em, fill: rgb("#fdf8ea"),
    inset: (x: 7pt, y: 6pt), stroke: (top: 2.2pt + gold, bottom: 2.2pt + gold))[
    #set text(size: 7.7pt)
    #set par(leading: 0.48em, justify: false, spacing: 0.35em)
    #if obrazek != none { align(center, box(height: 4.2cm, obrazek)) }
    #text(font: heading-font, size: 11pt, fill: reddark, weight: "bold", upper(jmeno)) \
    #text(style: "italic", podtitul)
    #block(above: 0.4em, below: 0.4em, width: 100%, stroke: (top: 0.6pt + gold), inset: (top: 4pt))[
      #stat("Tělo", c-body, telo) #h(3pt) #stat("Duše", c-soul, duse) #h(3pt) #stat("Vliv", c-cha, vliv) #h(3pt) #if sudba != none { stat("Sudba", reddark, sudba) }
    ]
    #row("Zbroj", zbroj)
    #row("Rychlost", rychlost)
    #row("Kostka hrozby", hrozba)
    #row("Dovednosti", dovednosti)
    #row("Imunity", imunity)
    #row("Slabiny", slabiny)
    #row("Smysly", smysly)
    #polozky("Vlastnosti", vlastnosti)
    #polozky("Akce", akce)
    #polozky("Reakce", reakce)
  ]
}
