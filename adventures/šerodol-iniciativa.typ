// Iniciativní stříšky pro Vůni perníku: vystřihnout, přeložit v půlce do tvaru A a postavit na zástěnu.
// Překlad: typst compile --root adventures adventures/šerodol-iniciativa.typ adventures/šerodol-iniciativa.pdf
#import "šerodol/sablona.typ": *

#set page(paper: "a4", margin: (x: 7mm, y: 8mm))
#set text(font: body-font, size: 8pt, fill: ink, lang: "cs")

// (jméno, obrázek nebo none, podtitul)
#let kdo = (
  ("Carmen", "PC - Carmen.png", "hráčská postava"),
  ("Kapitán Železné Srdce", "PC - Kapitán Železné Srdce.png", "hráčská postava"),
  ("Tamara", "PC - Tamara.png", "hráčská postava"),
  ("Perníčkář", "Perníčkář.png", none),
  ("Krajemír", "Krajemír.png", none),
  ("Lidovid", "Lidovid.png", none),
  ("Miloslav", "Miloslav.png", none),
  ("Půlknír", "Půlknír.png", none),
  ("Stará", "Stará.png", "Královna lesa"),
  ("Kovář Bořek", "Kovář Bořek.png", none),
  ("Stínový zvěd", "Stínový zvěd.png", none),
  ("Farář Vojtěch", none, none),
  ("Hradní stráž", none, none),
  ("Krajemírovi psi", none, none),
  ("Toulaví psi", none, none),
  ("Vlci", none, none),
  ("Probuzený medvěd", none, none),
  ("Utopení havíři", none, none),
  ("Rarášek", none, "pomocník"),
)

#let w = 64mm      // šířka stříšky
#let h = 43mm      // výška jedné strany

#let strana(jmeno, obr, pod) = box(
  width: w, height: h, fill: parch, inset: 2.5mm, clip: true,
  stroke: (paint: gold, thickness: 1pt),
)[
  #if obr != none {
    align(center, box(height: h - 16mm, image("šerodol-img/" + obr, height: 100%, fit: "contain")))
    v(-0.3em)
    align(center + bottom)[
      #text(font: heading-font, size: if jmeno.len() > 18 { 10pt } else { 12.5pt }, weight: "bold", fill: reddark, jmeno)
      #if pod != none [ \ #text(size: 7pt, style: "italic", pod) ]
    ]
  } else {
    // bez obrázku: jen jméno, velké, uprostřed
    align(center + horizon)[
      #text(font: heading-font, size: 17pt, weight: "bold", fill: reddark, jmeno)
      #if pod != none [ \ #text(size: 8pt, style: "italic", pod) ]
    ]
  }
]

#let stříška(jmeno, obr, pod) = box(
  stroke: (paint: ink.lighten(50%), thickness: 0.5pt, dash: "dashed"),
)[
  #stack(
    // horní polovina je vzhůru nohama, aby po přeložení stála rovně
    rotate(180deg, strana(jmeno, obr, pod)),
    line(length: w, stroke: (paint: ink.lighten(40%), thickness: 0.5pt, dash: "dotted")),
    strana(jmeno, obr, pod),
  )
]

#align(center, text(size: 7pt, style: "italic")[Vystřihněte podél čárkované čáry, přeložte podél tečkované a postavte na zástěnu.])
#v(2mm)
#align(center, grid(
  columns: 3, column-gutter: 1mm, row-gutter: 1mm,
  ..kdo.map(((j, o, p)) => stříška(j, o, p)),
))
