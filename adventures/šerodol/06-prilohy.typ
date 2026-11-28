#import "sablona.typ": *

#set page(columns: 1)

= Přílohy pro hráče

Texty, které hráči najdou. Vytiskněte je, vystřihněte a podávejte, až je postavy najdou.

#let listina(nazev, kde, body) = block(
  width: 100%, breakable: false, above: 1.2em, below: 1.2em,
  fill: parch, inset: (x: 18pt, y: 14pt), radius: 3pt,
  stroke: (paint: gold, thickness: 1.2pt),
)[
  #text(size: 7pt, fill: ink.lighten(25%), style: "italic", kde)
  #v(0.2em)
  #align(center, text(font: heading-font, size: 13pt, weight: "bold", fill: reddark, nazev))
  #v(0.3em)
  #set text(font: heading-font, size: 9.5pt)
  #set par(justify: true, leading: 0.7em, spacing: 0.9em)
  #body
]

#listina([O pověstech domácích, jak je lid v horách drží], [Fara, knihovna. Snadné. Psáno starou češtinou.])[
  *O prahu a o hostech.* Práh domu jest místo svaté. Co stojí za ním, jest pod ochranou hospodářovou, a co stojí před ním, nemá k ní práva, leč bylo-li pozváno. Pozváním jest chléb a sůl. Kdo požije chléb a sůl domu na jeho prahu, jest jeho hostem po tři dni a tři noci. Host hospodáři neublíží a hospodář hostu též ne, neboť smlouva ta jest oboustranná. Na cestách postačí chléb se špetkou soli, jak staří pocestní činívali. Kdo zákon hostinný zruší, toho stihne kletba na duši i na jméně.

  Takéž mezné kameny na hranicích kraje mají moc prahu, neboť jsou prahem celé země.

  Učení se přou, co jest pozváním. Jsouť bytosti, jako můry a noční duchové, jež žijí právě z toho, že vcházejí nezvány. Kdo vejde nezván, tomu prý se pod cizí střechou nedaří a mysl se mu mate. Někteří učenci z východu to mají za pověru a praví, že vyšší mocnosti zákon hostinný drží jen z jakési zvrácené rytířskosti, podle pravidel smrtelníkům neznámých.

  *O jménu třikrát řečeném.* Po setmění neotvírej nikomu, leč se ho třikrát otážeš na jméno. Noční duch dovede jednou zalhat i podruhé, ale potřetí lhát nemůže: buď řekne jméno pravé, nebo odejde. Proto lid praví, že kdo se ptá třikrát, nepustí pod střechu nic zlého.

  *O rozbřesku.* Lid horský nepočítá den od slunce, nýbrž od kohouta. Rozbřesk není, když vyjde slunce, ale když poprvé zakokrhá kohout, a tomu se říká kuropění. Do kuropění patří noc všemu, co v ní chodí. S prvním kohoutím hlasem musí ustoupit, i kdyby slunce ještě nevyšlo. Kde kohout nezakokrhá, tam, praví staří, noc neskončí.
]

#listina([Krátká historie údolí Šerodolského], [Fara, knihovna. Snadné.])[
  Údolí toto bylo pusté a divoké, dokud do něho nepřišel urozený pán *Vok* s kněžími Hvězdného boha. Lid zdejší se tehdy klaněl jakési paní lesa. Pán Vok ji s pomocí víry zahnal a…

  #align(center, text(style: "italic", size: 8.5pt)[(Několik listů je vytrženo.)])

  …nechal rozvalit, a na místě, kde byla nejsilnější, postavil hrad.

  Po něm vládl syn jeho, pán *Bohuslav*, pán dobrý a lidu milý, však proti nepřátelům měkký. Za jeho dnů kraj slábl, až nakonec nepřítel přitáhl s velkou armádou a dlouho jej svíral.

  V nejtěžší chvíli obležení pán Bohuslav zemřel ve spánku. Synové jeho, Krajemír, Lidovid a Miloslav, se chopili vlády a nepřítele z údolí vyhnali. Bylo to vítězství veliké.

  #align(center, text(style: "italic", size: 8.5pt)[(Jinou rukou, novějším inkoustem:)])

  Však sladké nezůstalo. Páni nestárnou. Píši tyto řádky po třiceti letech jejich vlády a vypadají, jako by bitva byla včera. Lid se jich bojí, a přece je podivně miluje.
]

#listina([Staré zápisy fary], [Fara, stará klenutá komora, ve skříni. Střední, viz Zával.])[
  _Léta prvního po příchodu víry._ Lid z horních samot opět vynesl dítě do lesa, k paní. Zakázal jsem to. Neposlechli. Praví, že jinak by zima nepřestala.

  _Léta třetího, v zimě._ Zima krutá. Dítě nevynesli, neboť jsem je hlídal. Vlci sešli až ke vsi a na horních samotách zmrzlo pět lidí.

  _Léta téhož, v létě._ Les je klidný. Lid praví, že paní spí, jako každé léto, a že v zimě zase procitne hladová.

  _Léta pátého._ Pán Vok postavil hrad nad studánkou paní. Té zimy poprvé nikdo nevynesl dítě do lesa, a zima přesto přešla. Chvála Hvězdě.
]

#listina([Pohřební zápis], [Fara, stará klenutá komora, v matrice. Střední, viz Zával.])[
  _Léta obležení, v zimě._ Zesnul urozený pán Bohuslav ze Šerodolu, ve spánku, jak praví synové jeho. Pohřben v kryptě pod kostelem. Tělo umyla a k pohřbu připravila Kunhuta, kořenářka z lesa.

  #text(size: 8.5pt, style: "italic")[(Na okraji, drobným písmem:)] Rty modré jako od mrazu, ač v komnatě bylo topeno. Z úst vůně hořká. Nepřísluší mi soudit.
]

#listina([O muži, který prodává zázvor], [Fara, tajná komora za oltářem. Hotová rekvizita.])[
  #align(center, text(style: "italic", size: 8.5pt)[(Kniha je psaná východními jazyky, které nikdo neumí přečíst. Na okrajích jsou drobným rukopisem učené poznámky obecnou řečí. Kniha existuje jako rekvizita; tohle je výtah z poznámek.)])

  „…v každém národě má jiné jméno: cukrář, pekař, prodavač zázvoru, perníkář…“

  „…nevejde, kam není pozván. Proto zve on, chlebem svým…“

  „…nabízí sladké a splní přání. Slovo však obrátí, a těší se, když člověk trpí tím, co si sám přál…“

  „…pozbýti duše jemu jest osud horší nežli smrt… …pouze utrpení duše…“

  „…jediný muž, o němž se ví, mu unikl. Porazil jej v jeho vlastní hře se slovy…“

  „…praví se, že srdci vskutku neporušenému splní přání zadarmo. Já však soudím, že ta pověst jest nastražena jako past. Neporušeného srdce není…“
]

#pagebreak()

#listina([Úmluva], [Věž, na stěnách Svatavina pokoje. Plné znění.])[
  My, Krajemír, Lidovid a Miloslav, synové pána šerodolského, a já, Perníčkář, smlouváme takto:

  + Krajemírovi se dává, by mu země šerodolská odpovídala.
  + Lidovidovi se dává, by viděl vše, co se v kraji šerodolském děje.
  + Miloslavovi se dává nevěsta krásná, jež ho bude milovat.
  + Všem třem se dává, že nezestárnou ani nezemřou, dokud tato úmluva platí.
  + Za to propadnou duše jejich Perníčkáři, až se všichni sejdeme nad láhví martikovského vína.
  + Nesejdeme-li se do rozbřesku noci svaté Lucie léta čtyřicátého, budiž úmluva zrušena a dary vzaty zpět.
  + O této úmluvě nepromluví žádná ze stran k nikomu, kdo při ní nestál.

  Dáno na rozcestí pod Šerodolem. Stvrzeno krví a medovým chlebem.
]

#otazka[
  *Znění úmluvy je zatím návrh,* stejně jako noc svaté Lucie (13. prosince, sedí k „před nejhorší zimou“). Bod 7 dovoluje pánům mluvit se Svatavou, protože při úmluvě stála; to je dobrý důvod, proč ji páni drží blízko, a ne mrtvou.
]

#pagebreak()

= Rejstřík statbloků

#tab(
  columns: (1fr, auto, auto),
  head: ([Statblok], [Role], [Kde]),
  [Toulavý pes], [obyčejný], [Prolog, Kokešova chaloupka],
  [Perníčkář Janek], [obyčejný (zdánlivě)], [Prolog, Průsmyk],
  [Kovář Bořek], [obyčejný], [Kapitola 1, Hospoda Rozcestí],
  [Stínový zvěd], [obyčejný], [Kapitola 2, Rychtářův dům],
  [Farář Vojtěch], [obyčejný], [Kapitola 2, Fara],
  [Rarášek], [pomocník], [Kapitola 2, Babka kořenářka],
  [Vlk], [obyčejný], [Kapitola 2, Cesta k babce],
  [Probuzený medvěd], [tvrdý], [Kapitola 2, Cesta k babce],
  [Půlknír], [elitní], [Kapitola 3, Věž],
  [Utopený havíř], [obyčejný], [Kapitola 3, Štola],
  [Stará, Královna lesa], [boss], [Kapitola 3, Studánka],
  [Hradní strážný, sluha], [obyčejný], [Kapitola 3, Hrad v noci],
  [Krajemírův pes], [obyčejný], [Kapitola 3, Hrad v noci],
  [Krajemír, Lidovid, Miloslav], [elitní], [Kapitola 3, Páni v boji],
)

Čísla nových statbloků (Půlknír, havíři, Stará, páni, vlk, medvěd, stráž, farář, rarášek) jsou spočítaná podle rozpočtů rolí z pravidel pro stavbu NPC a zatím nevyzkoušená u stolu.
