#import "sablona.typ": *

= Stavby Šerodolu

Hodnoty všeho, co se dá v údolí rozbít, vypálit nebo vyhodit do povětří. Hlavně pro alchymistu, ale hodí se i pro sekeru a beranidlo.

#pv[
  *Zákon pohostinství platí i pro zdi.* Vyhodit do povětří dům hostitele je ublížení hostiteli. Kdo poničí hrad (dokud je hostem pánů), hospodu (hostinského) nebo babčinu chalupu, toho stihne kletba. Fara a kostel ne: farář chléb a sůl nepodal. Svatokrádež je to ovšem tak jako tak a ves to faráři nezapomene.
]

== Jak se ničí stavby

#pravidla[
  - *Každý úsek* (asi 3 m zdi, jedny dveře, jedna brána, plocha střechy 3 × 3 m) má své *Tělo* a *Pevnost*.
  - *Pevnost:* zásah, který dá *méně* než Pevnost, nic neudělá. Zásah, který ji dosáhne, ubere celé zranění.
  - *Na 0 Těla* je zeď *prolomená* (3 m mezera plná sutin), dveře nebo brána *vylomené*, střecha *propadlá*.
  - *Hoření:* hořící úsek ztrácí uvedené Tělo *každé kolo*, dokud se neuhasí. Řetěz lidí s vědry uhasí jeden úsek za kolo.
  - *Rozebrat ručně:* bez spěchu a bez střelby se nehází; sloupec _Rozebrat_ říká, jak dlouho to trvá čtyřem lidem se sekerami, krumpáči a páčidly.
  - *Malé věci* mají jen Pevnost, žádné Tělo: zásah, který ji dosáhne, je rozbije. Provaz 0; dřevěná závora, truhla 5; železný zámek, řetěz, okovy, pant 10; ocelová pokladnice 15.
]

== Alchymistovy nálože

#pravidla[
  - *Výbušnina* stojí *2 Materiál za sílu*. Síla nesmí být vyšší než alchymistova #D. Ve spěchu se do ní vkládá 1 Materiál za kolo.
  - *Proti stavbám* hodí nálož *síla × k6*. *Upěchovaná* (zavěšená na bránu, nacpaná pod zeď, na konci štoly) hází o *2 kostky víc*.
  - *Proti lidem:* v místě výbuchu plná síla, o 1 méně za každý metr. Dosah podle síly: 1 jen vlastní pole, 2 → 1 m, 3 → 2 m, 5 → 4 m, 7 → 6 m. Odskočit se dá záchranným hodem (*Akrobacie*) na Ohrožení rovné síle. Proti NPC síla k6, proti hráčským postavám kostka hrozby podle síly (1–2 k4, 3–4 k6, 5–6 k8, 7+ k10). Zbroj chrání proti střepinám a kamení.
  - *Hod náloží:* dostřel 4/12 m, s perkem _Granátník_ 8/24 m. Hozená nálož není upěchovaná.
  - *Žíravina* prožere stavbu zhruba za minutu. *Plyn* stavbám nic neudělá.
  - *Doutnák* bez vlastnosti hoří pár kol, jak řekne vypravěč. Přesné načasování dává jen vlastnost _Na slovo_ nebo perk _Ženijní doutnák_.
]

#tab(
  columns: (1fr, auto, auto, auto),
  align: (left, center, center, center),
  head: ([Průměrný hod nálože], [Síla 3], [Síla 5], [Síla 7]),
  [Volně (síla × k6)], [10], [17], [24],
  [Upěchovaná (+2 k6)], [17], [24], [31],
  [Cena v Materiálu], [6], [10], [14],
)

#pv[
  Proti Pevnosti 20 a víc dělá volně hozená nálož skoro vždycky nic. Hradby padají jen upěchovaným náložím silným jako alchymistova Duše, nebo dole ve štole.
]

== Hrad Šerodol

#cti[
  Hrad stojí na skalnatém ostrohu nad vsí. Kamenná zeď, brána z tmavých trámů pobitých železem, nad ní hranatá věž o třech patrech a za ní nízký palác se šindelovou střechou. Nádvoří je dlážděné a na několika místech mírně propadlé.
]

#tab(
  columns: (2.2fr, auto, auto, auto, 1fr),
  align: (left, center, center, center, left),
  head: ([Část], [Tělo], [Pevnost], [Hoří], [Rozebrat]),
  [*Brána* (dub pobitý železem)], [100], [15], [2/kolo], [1 den],
  [Závora brány (zevnitř)], [—], [5], [—], [—],
  [Branka pro služebnictvo], [40], [10], [2/kolo], [30 minut],
  [*Hradba*, úsek 3 m (kámen, 2 m)], [400], [20], [ne], [4 dny],
  [*Hranatá věž*, jedno patro (3 patra)], [600], [25], [ne], [1 týden],
  [Dveře věže (pobité železem)], [40], [10], [2/kolo], [30 minut],
  [Palác, kamenná zeď], [80], [15], [ne], [1 den],
  [Palác, šindelová střecha], [15], [0], [5/kolo], [—],
  [Palác, dveře (kuchyně, síň, komnaty)], [20], [5], [5/kolo], [5 minut],
  [Dveře pokladnice (pobité železem)], [40], [10], [2/kolo], [30 minut],
  [Pokladnice (ocelová truhla)], [—], [15], [ne], [—],
  [Stáje a přístavky, roubená stěna], [40], [10], [2/kolo], [1 hodina],
  [Střecha stájí, došky], [10], [0], [10/kolo], [—],
  [*Propadlá dlažba nádvoří* (nad štolou)], [60], [10], [ne], [3 hodiny kopání],
)

#pravidla[
  - *Patro věže na 0* se zřítí do patra pod ním. Kdo je uvnitř, hází záchranný hod (*Akrobacie*) na Ohrožení 4, jinak Jizva na #T s kostkou hrozby k8.
  - *Propadlá střecha* padá na ty pod ní: šindel k4. Záchranný hod (*Akrobacie*) uskočí.
  - *Hrad nemá padací mříž.* Brána je jen dřevo a železo: zapálit ji jde, i když pomalu.
]

=== Pod nádvořím: štola jako hotová mina

Nepřátelská štola z doby obléhání končí přímo pod propadlou dlažbou nádvoří. Je to *hotová mina*: nepřítel ji před čtyřiceti lety dokopal a jen ji nestihl odpálit.

#pravidla[
  - *Odpálení:* upěchovaná nálož na konci štoly, jejíž hod dosáhne Pevnosti dlažby (10), propadne úsek nádvoří nad sebou okamžitě (asi 3 × 3 m) a sousední úsek ztratí polovinu Těla.
  - *Kdo stojí na dlažbě,* spadne 4 m do vody štoly a kamení: nástraha síly 3 (záchranný hod *Akrobacie*, jinak Jizva na #T s kostkou hrozby k6) a je #stav[Zadržený] pod sutinami, dokud ho někdo nevyhrabe.
  - *Láhev* pod sutinami pořád leží pod nádvořím. Pro smlouvu se nic nemění.
  - *Krajemír* výbuch ucítí dřív, než dozní.
]

#pv[
  *Stará a propadlé nádvoří.* Natrvalo se ven dostane, jen když páni přijdou o vládu. Otvorem z propadlého nádvoří může *na chvíli proklouznout*, ale bratři ji umějí znovu zapečetit. Kdyby se ale do hradu zřítila *celá chodba* štoly, ne jen úsek nádvoří, Stará je venku a zůstane venku, dokud se hrad neopraví: na měsíce.
]
=== Štola

#pravidla[
  - Štola je ražená ve skále, napůl zaplavená a čtyřicet let neudržovaná. *Každý výbuch uvnitř* otřese zemí: hoďte k6, na *1–2* se chodba v okruhu síly nálože zavalí.
  - *Kdo je v závalu:* záchranný hod (*Akrobacie*) na Ohrožení 4, jinak Jizva na #T s kostkou hrozby k6 a #stav[Zadržený], dokud ho někdo nevyhrabe (asi 1 m³ kopání na člověka).
  - *Zavalená chodba* jde prokopat rychlostí 0,5 m za směnu (čtyři lidé, měkká hornina) nebo odstřelit další náloží.
  - *Výbuch u studánky* zasáhne i kořeny Staré: síla k6 jako proti NPC, ale proti jejímu Tělu. Stará to vezme jako útok.
]

== Vesnice Šerodol

#tab(
  columns: (2.2fr, auto, auto, auto, 1fr),
  align: (left, center, center, center, left),
  head: ([Stavba], [Tělo], [Pevnost], [Hoří], [Rozebrat]),
  table.cell(colspan: 5, text(weight: "bold", fill: reddark)[Chalupy, hospoda Rozcestí, mlýn]),
  [Roubená stěna], [40], [10], [2/kolo], [1 hodina],
  [Dveře], [20], [5], [5/kolo], [5 minut],
  [Došková střecha], [10], [0], [10/kolo, i od šípu], [—],
  [Šindelová střecha (hospoda, rychtář)], [15], [0], [5/kolo], [—],
  table.cell(colspan: 5, text(weight: "bold", fill: reddark)[Rychtářův dům]),
  [Kamenná podezdívka], [80], [15], [ne], [1 den],
  [Roubené patro], [40], [10], [2/kolo], [1 hodina],
  [Dveře pobité železem], [40], [10], [2/kolo], [30 minut],
  table.cell(colspan: 5, text(weight: "bold", fill: reddark)[Kovárna]),
  [Kamenná zeď], [80], [15], [ne], [1 den],
  [Vrata], [20], [5], [5/kolo], [5 minut],
  [Kovadlina, výheň], [—], [20], [ne], [—],
  table.cell(colspan: 5, text(weight: "bold", fill: reddark)[Kostel a fara]),
  [Kamenná zeď], [80], [15], [ne], [1 den],
  [Dveře kostela (pobité železem)], [40], [10], [2/kolo], [30 minut],
  [Dřevěná zvonice, patro], [40], [10], [2/kolo], [1 hodina],
  [Dveře fary], [20], [5], [5/kolo], [5 minut],
  [Klenutá komora fary (už popraskaná)], [50 ze 100], [15], [ne], [—],
  [Dveře tajné komory za oltářem], [40], [10], [2/kolo], [30 minut],
  [Zámek tajné komory], [—], [10], [ne], [—],
  table.cell(colspan: 5, text(weight: "bold", fill: reddark)[Babčina chalupa]),
  [Stěna napůl v zemi (hlína a trámy)], [60], [15], [ne], [3 hodiny kopání],
  [Drnová střecha], [30], [5], [ne], [—],
  [Dveře, práh pobitý hřeby], [40], [10], [2/kolo], [30 minut],
  table.cell(colspan: 5, text(weight: "bold", fill: reddark)[Věž na hřebeni]),
  [Patro věže (kámen, 2 m; 3 patra)], [400], [20], [ne], [4 dny],
  [Zamčené dveře (pobité železem)], [40], [10], [2/kolo], [30 minut],
  [Rozpadlý ochoz], [20], [5], [ne], [—],
)

#pravidla[
  - *Oheň ve vsi* _(pravidlo od oka)_: chalupy stojí blízko u sebe. Hořící došková střecha každé kolo zapálí sousední na k6 = 1–2; v bezvětří na 1. Ves se probudí a vytvoří řetěz s vědry do dvou kol.
  - *Klenutá komora fary* už je popraskaná nekonečnou nocí a závalem (viz kapitola 2). Na 0 Těla se zřítí celá a s ní knihovna nad ní.
  - *Věž na hřebeni:* patro na 0 se zřítí do patra pod ním (záchranný hod *Akrobacie*, Ohrožení 4, jinak kostka hrozby k8). Nahoře je Svatava.
]

== Hraniční kameny

#tab(
  columns: (2.2fr, auto, auto, auto, 1fr),
  align: (left, center, center, center, left),
  head: ([Stavba], [Tělo], [Pevnost], [Hoří], [Rozebrat]),
  [Hraniční kámen (ohlazený žulový balvan)], [120], [20], [ne], [nejde, viz níže],
)

#pravidla[
  - *Kámen se dá rozbít,* nebo se dá *magií přerušit spojení* mezi oběma kameny (_Zlomení kouzla_, obrácené _Zaštítění_, _Protikouzlo_ proti Perníčkářově +5).
  - *Do minuty se zacelí:* rozbitý kámen sroste a přerušené spojení se obnoví.
  - *Během té minuty je v prahu mezera.* Kohout, který jí projde, nepadne do umírání. Kdo chce kohouta dostat do údolí touhle cestou, musí ho mít připraveného hned za kameny.
  - *Krajemír i Perníčkář to ucítí okamžitě.*
]
