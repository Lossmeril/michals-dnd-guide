// Vůně perníku: dobrodružství v Šerodolu, verze pro vypravěče k tisku.
// Překlad: typst compile --root adventures adventures/šerodol.typ adventures/šerodol.pdf
// Kapitoly jsou ve složce adventures/šerodol/.

#import "šerodol/sablona.typ": *

#set document(title: "Vůně perníku", author: "Michal Špitálský")
#set text(font: body-font, size: 8.6pt, fill: ink, lang: "cs")
#set par(justify: true, leading: 0.58em, spacing: 0.75em)
#set list(marker: text(fill: red)[•], indent: 0.2em, body-indent: 0.45em, spacing: 0.55em)
#set enum(indent: 0.2em, body-indent: 0.45em, spacing: 0.55em)
#show strong: set text(fill: reddark)

#show heading.where(level: 1): it => {
  pagebreak(weak: true)
  block(width: 100%, below: 1em, above: 0pt)[
    #text(font: heading-font, size: 20pt, fill: reddark, weight: "bold", upper(it.body))
    #v(-0.9em)
    #line(length: 100%, stroke: 1.6pt + gold)
  ]
}
#show heading.where(level: 2): it => {
  v(0.9em, weak: true)
  block(sticky: true, below: 0.5em)[
    #text(font: heading-font, size: 12.5pt, fill: reddark, weight: "bold", it.body)
    #v(-0.75em)
    #line(length: 100%, stroke: 0.9pt + gold)
  ]
}
#show heading.where(level: 3): it => {
  v(0.8em, weak: true)
  block(sticky: true, below: 0.45em, text(font: heading-font, size: 10pt, fill: red, weight: "bold", it.body))
}
#show heading.where(level: 4): it => {
  v(0.6em, weak: true)
  block(sticky: true, below: 0.4em, text(font: heading-font, size: 8.8pt, fill: ink, weight: "bold", style: "italic", it.body))
}

// ---------- Titulní strana ----------
#page(margin: 2cm)[
  #set align(center)
  #v(2.5cm)
  #box(height: 7.5cm, image("šerodol-img/Šerodol coat of arms.png"))
  #v(1cm)
  #text(font: heading-font, size: 34pt, fill: reddark, weight: "bold", upper[Vůně perníku])
  #v(-0.6em)
  #line(length: 60%, stroke: 1.6pt + gold)
  #text(font: heading-font, size: 13pt, style: "italic")[Dobrodružství v údolí Šerodol]
  #v(0.6cm)
  #text(size: 10pt)[Pro začínající družinu (úroveň 3) \ Dvě až tři sezení]
  #v(1fr)
  // Jak číst tento text
  #set align(left)
  #set text(size: 8pt)
  #grid(columns: (1fr, 1fr), column-gutter: 10pt,
    [
      #cti[Text v zeleném pruhu čtěte nahlas nebo převyprávějte.]
      #vsim[Čeho si postavy mohou všimnout, když se dívají, nebo když mají vhodné povolání.]
      #vi[postava][Co postava řekne, když se jí zeptají. Odpovědi jsou návod, ne scénář.]
    ],
    [
      #pv[Tajné informace jen pro vás.]
      #pravidla[Hody, Ohrožení a následky scény.]
      Statbloky stojí u scény, kde se postava nebo nestvůra poprvé objeví. Rejstřík statbloků je na poslední straně.
    ],
  )
  #v(0.4cm)
  #align(center, text(size: 8pt, fill: ink.lighten(25%))[Verze pro vypravěče])
]

#set page(
  paper: "a4",
  columns: 2,
  margin: (x: 1.5cm, top: 1.6cm, bottom: 1.5cm),
  footer: context {
    set text(size: 7pt, fill: ink.lighten(30%), font: heading-font)
    grid(columns: (1fr, 1fr, 1fr),
      align(left, upper[Vůně perníku]),
      align(center)[— #counter(page).display() —],
      align(right, smallcaps[pro vypravěče]))
  },
)
#set columns(gutter: 16pt)
#counter(page).update(1)

#include "šerodol/00-uvod.typ"
#include "šerodol/01-prolog.typ"
#include "šerodol/02-pani.typ"
#include "šerodol/03-noc.typ"
#include "šerodol/04-pravda.typ"
#include "šerodol/05-konec.typ"
#include "šerodol/05a-stavby.typ"
#include "šerodol/06-prilohy.typ"
