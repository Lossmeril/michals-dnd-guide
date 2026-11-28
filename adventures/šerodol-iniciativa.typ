// Iniciativní stříšky pro Vůni perníku: vystřihnout, přeložit v půlce do tvaru A a postavit na zástěnu.
// Překlad: typst compile --root adventures adventures/šerodol-iniciativa.typ adventures/šerodol-iniciativa.pdf
#import "šerodol/sablona.typ": *

#set page(paper: "a4", margin: (x: 7mm, y: 8mm))
#set text(font: body-font, size: 8pt, fill: ink, lang: "cs")

// (jméno, obrázek nebo none, podtitul)
#let n(jmeno, pocet, obr, pod) = range(1, pocet + 1).map(i => (jmeno + " " + str(i), obr, pod))

#let kdo = ((
  ("Carmen", "PC - Carmen.png", none),
  ("Kapitán Železné Srdce", "PC - Kapitán Železné Srdce.png", none),
  ("Tamara", "PC - Tamara.png", none),
  ("Karl von Wettersdorf", "PC - Karl von Wettersdorf.png", none),
  ("Rondus", "PC - Rondus.png", none),
  ("Perníčkář", "Perníčkář.png", none),
  ("Krajemír", "Krajemír.png", none),
  ("Lidovid", "Lidovid.png", none),
  ("Miloslav", "Miloslav.png", none),
  ("Půlknír", "Půlknír.png", none),
  ("Stará", "Stará.png", "Královna lesa"),
  ("Kovář Bořek", "Kovář Bořek.png", none),
  ("Farář Vojtěch", "Farář.png", none),
  ("Probuzený medvěd", "Bear.png", none),
  ("Rarášek", "Rarášek.png", "pomocník"),
)
  + n("Stínový zvěd", 3, "Stínový zvěd.png", none)   // dva ve vsi a jeden, kterého přivolá Lidovid
  + n("Toulavý pes", 2, "Dog.png", none)
  + n("Krajemírův pes", 2, "Krajemírův pes.webp", none)
  + range(1, 5).map(i => ("Strážný " + str(i), "Strážný " + str(calc.rem(i - 1, 2) + 1) + ".png", none))
  + n("Vlk", 5, "Wolf.jpg", none)
  + range(1, 7).map(i => ("Havíř " + str(i), "Horník " + str(calc.rem(i - 1, 3) + 1) + ".png", none)))

// obrázky na šířku: celé, neořezávat
#let na-sirku = ("Rarášek.png", "Wolf.jpg")

#let w = 47mm      // šířka stříšky
#let h = 64mm      // výška jedné strany
#let pas = 13mm    // pás se jménem pod portrétem

#let jmeno-text(jmeno, pod, velke) = align(center + horizon)[
  #text(font: heading-font, size: if velke { 15pt } else if jmeno.len() > 16 { 9pt } else { 11.5pt }, weight: "bold", fill: reddark, jmeno)
  #if pod != none [ \ #text(size: 7pt, style: "italic", pod) ]
]

// erb v pravém horním rohu: Karlův a páni Šerodolu se svými lidmi
#let serodolsti = ("Krajemír", "Lidovid", "Miloslav", "Půlknír", "Strážný", "Krajemírův pes", "Stínový zvěd")
#let erb(jmeno) = {
  if jmeno == "Karl von Wettersdorf" { "Karl von Wettersdorf coat of arms.png" } else if serodolsti.any(x => jmeno.starts-with(x)) { "Šerodol coat of arms.png" } else { none }
}

#let strana(jmeno, obr, pod) = box(
  width: w, height: h, fill: white, clip: true,
  stroke: (paint: gold, thickness: 1pt),
)[
  #if obr != none {
    stack(
      box(width: w, height: h - pas, clip: true)[
        #image("šerodol-img/" + obr, width: 100%, height: 100%, fit: if obr in na-sirku { "contain" } else { "cover" })
        #let e = erb(jmeno)
        #if e != none { place(top + right, dx: -1.5mm, dy: 1.5mm, image("šerodol-img/" + e, width: 9mm)) }
      ],
      line(length: w, stroke: (paint: gold, thickness: 1pt)),
      box(width: w, height: pas, inset: (x: 1.5mm), jmeno-text(jmeno, pod, false)),
    )
  } else {
    box(width: w, height: h, inset: 2mm, jmeno-text(jmeno, pod, true))
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
  columns: 4, column-gutter: 1mm, row-gutter: 1mm,
  ..kdo.map(((j, o, p)) => stříška(j, o, p)),
))
