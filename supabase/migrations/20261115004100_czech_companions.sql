-- Rulebook (2026-11-15): Czech for companions, organizations, networks, units, battles.
-- The English half stays; the Czech half is replaced.

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Pomocník je NPC, které slouží hráčské postavě a které hráč řídí: vycvičený sokol, najatý žoldák, věrný panoš, vyvolaná kostra, spoutaný démon, golem.

Pomocník je obyčejný blok statistik [NPC](npcs), s hodnotami :body, :soul a :charisma, bonusem k dovednostem, zvláštními schopnostmi a zbraní, takže se dají půjčit a převést statistiky z 5E. Nepřátelské zásahy dopadají na jeho hodnoty jako u kteréhokoli NPC a na 0 padne, zlomí se nebo uteče. Nemá ale Sudbu. Místo ní má **Pouto**.

Michalova vlčice Sněhurka zapsaná jako pomocník:

```companion
name: Sněhurka
image: /img/classes/ranger.webp
subtitle: Vlčice, Michalova zvířecí společnice
role: animal
armour: Žádná (0)
speed: 8 m
threat: k6
bond: 3
payment: Denní příděl jídla
body: 11
soul: 3
charisma: 2
skills: Lov +2, Pohyb v divočině +2
manoeuvres: Lstivě (kousnutí)
senses: Bystrý sluch a čich

## Rysy
***Smečka.*** **Přesně** zdarma u útoků, když Michal nebo jiný spojenec stojí do 1 m od cíle.

## Akce
***Kousnutí.*** Dosah 1 m. Zásah: 2k4 + 2 bodné. **Lstivě** zdarma: srazí cíl k zemi.
```

## Druhy a pořadí tahů {#kinds-and-turn-order}

| Druh | Příklady | Jedná |
|---|---|---|
| **Familiár** | Duch v podobě havrana | Hned po svém pánovi, na pánovu iniciativu |
| **Vyvolaný** | Vyvolaný duch, oživlý strom | Hned po svém pánovi |
| **Zvířecí pomocník** | Vycvičený vlk, sokol, válečný pes | Na vlastní iniciativu |
| **Najatý** | Žoldák, panoš, průvodce | Na vlastní iniciativu |

Familiáři pocházejí ze Zaříkávačova kouzla *Familiár*. Tvor, kterého převezme magie, se místo toho řídí pravidlem [ovládání](control).

## Pouto {#bond}

Pouto je vztah pomocníka k jeho pánovi a zdroj, ze kterého hráč za pomocníka platí. Odvrácení jeho neúspěchu stojí tolik Pouta, kolik je Ohrožení, a manévr stojí 1 Pouto. V nouzi může hráč **zjizvit Pouto**, což dá 2 dočasné body, jako Jizva, kterou si postava vezme na odvrácení neúspěchu.

Ohrožení, kterému pomocník čelí, je **pánovo**, takže není co sledovat navíc. Jiné určí PJ jen tehdy, když se situace pomocníka jasně liší, třeba když jde na průzkum napřed nebo hlídá tábor.

Pouto nikdy nemůže být vyšší než pánův zdroj :charisma[Vlivu]. Když klesne pod 0, hráč pomocníka ztratí: převezme ho PJ a rozhodne, jestli zemře, odejde, nebo se obrátí proti svému pánovi.

:::example[Vlčice u brodu]
Sněhurka, Michalova vlčice (Pouto 3), při přechodu brodu prohraje zápas s proudem. Michal je na stejném brodu při Ohrožení 3, takže odvrácení neúspěchu stojí všechna 3 Pouta. Sněhurka se vyškrábe ven, ale Michal jí bude muset zaplatit, než se dokáže zachránit znovu.
:::

:::note[Dva druhy újmy]
Meč zasáhne hodnoty pomocníka; zrada zasáhne Pouto. Jizvy na Poutu jsou újma vztahu: špatné zacházení, porušená dohoda, nebo hráč, který Pouto zjizví kvůli bodům.
:::

## Jak získat pomocníka {#getting-a-companion}

Získání pomocníka má tři kroky a každý může být automatický, jeden hod, nebo celé dobrodružství, podle toho, co příběh potřebuje.

Nejdřív musí postava nějakého **najít**. Koupit válečného psa od chovatele je snadné; vlka je potřeba chytit v divočině a s obojím pomůžou vhodné dovednosti.

Pak si ho **připoutá**, obvykle střetem: tvor se brání svým bonusem a postava hází s dovedností na nábor nebo výcvik. Výhra vytvoří Pouto, obvykle 3, které PJ upraví podle okolností. Prohra znamená, že tvor zaútočí, uteče nebo postavou pohrdne. Tvor už připoutaný k někomu jinému se brání celým tím Poutem a staré Pouto musí skončit, než vznikne nové. Ten, komu postava zachránila život, se může prostě přidat z vděčnosti, bez hodu.

Nakonec se při připoutání domluví **platba**.

## Platba {#payment}

Jedna platba doplní jeden utracený bod Pouta, takže pomocník, který nic neutrácí, nepotřebuje nic. Platba má obvykle hodnotu bonusu pomocníka (nejméně 1):

| Forma | Jedna platba |
|---|---|
| Peníze | 1 stříbrný za bod bonusu |
| Jídlo | Denní příděl |
| Krev | Jizva :body[Těla] 1. stupně |
| Vzpomínky | Jizva :soul[Duše] 1. stupně |

To, co je součástí postavy, jako krev, vzpomínky nebo tvář, se platí Jizvou. Body zdrojů postavy platbou být nemůžou; jsou to vlastní síly postavy, ne něco, co se dá předat.

## Zvyšování a léčení Pouta {#raising-and-healing-bond}

Vyléčit Jizvu na Poutu chce úspěšný hod s dovedností, kterou postava na pomocníka používá (obvykle tou, kterou ho připoutala), a **5 plateb za stupeň Jizvy**. Zvýšit Pouto o 1 chce stejný hod a 5 plateb a nikdy nepřesáhne pánův současný zdroj :charisma[Vlivu]. Když Jizvy na :charisma[Vlivu] stáhnou zdroj pod Pouto, Pouto zůstane, kde je, ale jakmile utrpí škodu, dá se obnovit jen do výše současného zdroje. PJ může Pouto zvýšit i za dobré hraní vztahu.$cs$
where slug = 'companions';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Organizace je jakákoli skupina s mocí: cech, zločinecké bratrstvo, církev, kult, kmen, městská hlídka, armáda, vévodský dvůr. Organizace nedělá vlastní akce; jedná skrz své členy a to, co člen může, vychází z jeho místa v ní.

## Dosah a Postavení {#reach-and-standing}

To místo popisují dvě čísla. **Dosah** (1–5) je to, jak důležitá je organizace ve světě. **Postavení** (0 až do výše Dosahu) je hodnost postavy v ní a Postavení vůdce se rovná Dosahu. Královský voják má Postavení 0 v armádě s Dosahem 5; zakladatel malé sítě špehů má Postavení 1 v síti s Dosahem 1.

| Hodnota | Dosah rozhodnutí | Příklady | Kolik jich v zemi je |
|---|---|---|---|
| **5** | Rozhoduje v celé zemi; vede celé organizace | Silný král, hlava kupeckého spolku, arcibiskup, arcimág | Pár |
| **4** | Ovlivňuje rozhodnutí v celé zemi, nebo rozhoduje ve velkém kraji | Důvěrný vévodův rádce, purkmistr hlavního města, hlava podsvětí velkého města, velekněz | Desítky |
| **3** | Rozhoduje klíčové otázky malého kraje, nebo radí u větších | Opat, důstojník nad stovkami, královský majordomus | Stovky |
| **2** | Ovlivňuje malý kraj | Cechmistr v městečku, profesor alchymie, loupeživý rytíř | Běžně |
| **1** | Pár podřízených a nějaké slovo v jedné obci | Kupec s pár vozy, čaroděj s učedníky, náčelník banditů | Mnoho |
| **0** | Žádná hodnost | Řadový člen | — |

Postavení není vázané na titul: slabý král může mít Postavení 2 a farář s desítkami tisíc věřících Postavení 4. Postava může mít Postavení v několika organizacích naráz.

Do organizace jakéhokoli Dosahu se může na nízké hodnosti přidat kdokoli a kdokoli může vybudovat a vést malou [síť](networks) s Dosahem 1–2, s Postavením rovným jejímu Dosahu. Postavení 3 až 5 dávají jen perky mocných povolání.

## Co Postavení dává {#what-standing-gives}

Postavení umožní, co by jinak nešlo. Velitel hlídky může zadržet měšťana, vybrat, které případy se budou vyšetřovat, a zasedat v radě; postava pořád hází s dovednostmi svého povolání a Postavení jen udělá akci dovolenou. Postavení taky dovolí postavě najít **pomocníky** v jeho dosahu (panoš sezve chlapy z vesnice, šéf zločinu zloděje) a **velet síti**: té části organizace, kterou vede. Člen s Postavením 0 organizaci vůbec rozkazovat nemůže, jen prosit o laskavost.

Nic není zaručené. Postava může o místo přijít, nebo si nechat titul, zatímco skutečná moc se přesune jinam, a ubránit ho je samostatné dobrodružství.

## Statistiky {#the-stat-block}

Statistiky organizace uvádějí její Dosah, kdo ji vede a co která hodnost dovoluje. Městská hlídka Kruté Hory:

```organization
name: Hlídka Kruté Hory
image: /img/classes/warlord.webp
subtitle: Městská hlídka, napůl nezávislá na královské správě
emblem: /img/emblems/watch-kruta-hora.svg
reach: 3
seat: Lucernová věž u starého trhu
leader: Velitel Jorgen Veit
structure: Přísná hierarchie; strážný může pomalu stoupat hodnostmi
rank 0: Strážný: obchůzky, zatýkání při činu
rank 1: Seržant: vede hlídku; vybírá si pomocníky z jejích mužů
rank 2: Poručík: spravuje čtvrť; vybírá, které případy se budou vyšetřovat
rank 3: Velitel: vydává městská nařízení, zadrží kteréhokoli měšťana, účastní se rady jako host
companions: Strážní, informátoři, žalářník a jeho klíče
rivals: Rodiny z podsvětí, královský rychtář

## Tajemství
Velitelské křeslo je koupené, ne zasloužené. Polovina seržantů je na něčí výplatní listině.
```$cs$
where slug = 'organizations';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Síť je ta část [organizace](organizations), které postava velí. Jedná **místo postavy**, zatímco je postava jinde: sbírá informace, krade, unáší, šíří fámy. Její neúspěchy se platí z jejího vlastního Pouta, ne ze zdrojů postavy, a postava si nezašpiní ruce.

## Statistiky {#the-stat-block}

Síť je [pomocník](companions) postavený takhle:

| Část | Pravidlo |
|---|---|
| **Bonus** | Volí ho postava, nejvýš její **Postavení + 2** |
| **Specializace** | Jedna, jako bonus k dovednostem u NPC: pašování a překupnictví, ovlivňování šlechty, okultní nauky. Mimo ni může síť zkusit cokoli, jen bez bonusu |
| **Zvláštní schopnosti** | Jako u NPC, třeba manévr zdarma v rámci specializace |
| **Hodnoty** | **12 bodů** rozdělených mezi :body, :soul a :charisma |

Hodnoty ukazují, co síť má a co z ní nepřítel může vyřadit: :body jsou její svaly (rváči a stráže, na krádeže, přepadení a únosy), :soul její informace (informátoři a učenci, na zjišťování věcí) a :charisma její vliv (lháři, diplomati a kupci, na přesvědčování a úplatky). Razie, která pozatýká svaly, zasáhne :body[Tělo].

Pašerácká síť z příkladu níže, rozepsaná:

```network
name: Přístavní krysy
image: /img/classes/rogue.webp
subtitle: Pašerácká síť, Dosah 1
emblem: /img/emblems/harbour-rats.svg
master: Zvěd 3, Postavení 1
bonus: +3
specialisation: Pašování a překupnictví
bond: 2
payment: 3 stříbrné
body: 3
soul: 5
charisma: 4

## Schopnosti
***Překupníci všude.*** **Přesně** zdarma při prodeji kradeného zboží v kterémkoli přístavním městě.

## Velitelé
- **Starý Mareček**, písař přístavního mistra: zná náklad každé lodi.
- **Kuna**, překupník: koupí cokoli, na nic se neptá.
```

## Pouto a platby {#bond-and-payments}

Platba síti má hodnotu **jejího bonusu ve stříbře** a jedna platba doplní jeden utracený bod Pouta. Kolik Pouta má na začátku, záleží na tom, jak ji postava získala: síť, kterou si postava vybuduje sama, začíná na **0**, přidání ke stávající je připoutání, které dá kolem 2–3, a síť získaná přes Postavení začíná na 3. Vybudovaná síť zvýší Pouto o 1 za každých 5 plateb. Jako u každého pomocníka nemůže Pouto přesáhnout pánův zdroj :charisma[Vlivu].

Síť, která začíná s Poutem 0, zatím nemůže odvrátit nic. Napřed se do ní musí investovat.

## Jednání {#acting}

Síť hází se svým bonusem. Jedná někde jinde, takže Ohrožení úkolu určí PJ a neúspěch se odvrací tolika body Pouta. Neúspěch, který se neodvrátí, se stane Jizvou na Poutu: chycený člen, kontakt, který zmlkl.

:::example[Překupování stříbra]
Zvědka 3 založí pašeráckou síť (Dosah 1, Postavení 1). Vybere bonus +3, nejvíc, co může, se specializací *pašování a překupnictví*, a hodnoty rozdělí na :body 3, :soul 5 a :charisma 4. Platba stojí 3 stříbrné, takže zvýšit Pouto na 2 chce 10 plateb, 30 stříbrných. Zatímco se plíží do hradu, síť v přístavu překupuje ukradené stříbrné nádobí a hází 2k6 + 3. Při Ohrožení 2 neuspěje a síť utratí 2 Pouta, aby to odvrátila.
:::

## Údržba {#upkeep}

Jednou za herní týden, obvykle jednou za sezení, potřebuje síť **pozornost v hodnotě jedné platby**, v jakékoli podobě, která sedí: stříbro, zboží, laskavost pro její členy, osobní návštěva, ochrana před hlídkou. Když se údržba dodrží, síť sama od sebe pošle jeden tip nebo zprávu ze své specializace. Když se vynechá, její Pouto dostane Jizvu 1. stupně; vyléčit ji stojí 5 plateb a hod jako u každé Jizvy na Poutu. Údržba je oddělená od doplňování utraceného Pouta.$cs$
where slug = 'networks';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Jednotka je skupina, která se vyhodnocuje jako **jedno NPC**: vycvičený oddíl, vlčí smečka, tlupa strážných. Hrát tucet strážných jednoho po druhém je otrava; jako jednotka mají jedny statistiky, jednu iniciativu a jednu akci.

Jednotky patří **mocným povoláním**, nebo chvílím, kdy jednu příběhu zapůjčí PJ. Vytváření jednotek a perky na velení jim patří mocným povoláním, vojenské hlavně **Vojevůdci**.

## Velikost a statistiky {#size-and-stat-block}

| Velikost | Členové | Hodnota :body[Těla] |
|---|---|---|
| **Hrstka** | Víc než jeden, míň než tucet | Průměrný člen × 2 |
| **Tlupa** | Od tuctu zhruba do 60 | × 4 |
| **Horda** | Zhruba 60 až 300 | × 8 |

Bonus jednotky a její hodnoty :soul[Duše] a :charisma[Vlivu] jsou ty jejího průměrného člena. Počet jednotku ztíží zabít, ale neudělá ji statečnější, takže dobrá řeč dokáže rozprášit i hordu. Schopnosti a vybavení se počítají, jen když je má většina členů: pár mužů v těžké zbroji z jednotky těžkou neudělá. Jednotka může mít i schopnosti ze své podoby (dril, tlačenice těl) nebo od zvláštního člena, jako je vůdce smečky nebo praporečník. Nemá Sudbu ani Ohrožení.

Obrovští jednotlivci, jako kraken nebo drak, se počítají zároveň jako jeden jedinec i jako hrstka.

Tlupa strážných z příkladu níže, jako jednotka. Její :body[Tělo] je za čtyři strážné, její :soul[Duše] a :charisma[Vliv] za jednoho:

```unit
name: Tlupa strážných
subtitle: Lidští vojáci, nepřátelská jednotka
emblem: /img/emblems/watch-kruta-hora.svg
allegiance: Hlídka Kruté Hory
size: band
members: Zhruba 30 městských strážných
armour: Střední (2)
speed: 6 m
threat: k8
body: 44
soul: 4
charisma: 6
skills: Dovednosti Bojovníka +2
manoeuvres: Rozsáhle u každé akce

## Rysy
***Štítová hradba.*** Většina nese štíty: jedna Obrana zdarma za kolo.

***Seržant.*** Zvláštní člen. Dokud stojí, :charisma[Vliv] tlupy nemůže klesnout pod 1.

## Akce
***Kopí.*** Každý cíl, na který tlupa dosáhne zblízka. Zásah: 2k6 + 2 bodné.
```

## V boji {#in-a-fight}

Jednotka hází na iniciativu a má jednu akci za kolo a u každé akce má Rozsáhle zdarma, takže může přidat ještě jiný manévr. Větší jednotka má proti menším libovolně mnoho Obran zdarma a jednotka může manévrem Obrana odpovědět na cokoli ve svém dosahu, i když už jednala. Když menší jednotka vyhraje protiakci proti větší, zachrání sebe, ale akce větší jednotky pořád zasáhne její ostatní cíle. Hráčská postava, která vyčerpává proti větší jednotce, platí **dvojnásobek** Ohrožení; proti srovnatelně velké normální cenu.

## Zraňování jednotky {#damaging-a-unit}

Hodnotám jednotky ublíží jen akce, která zasáhne **dost členů**: víc než jednoho člověka u hrstky, víc než hrstku u tlupy, víc než tlupu u hordy. Jeden padlý strážný se počítá jen v příběhu. Jeden člověk zasáhne zblízka nanejvýš hrstku, střelbou nebo magií sevřenou tlupu (nebo rozptýlenou hrstku) a rozkazy, výhrůžkami nebo řečí celou hordu, která ho slyší. Obvykle na to potřebuje [Rozsáhle](manoeuvres).

Akce, která se počítá, hodí zranění **jednou** proti hodnotě :body[Těla]. Jak :body[Tělo] klesá, jednotka se **zmenšuje**: když klesne na maximum menší velikosti, stane se tou velikostí (z hordy tlupa, z tlupy hrstka, z hrstky jeden přeživší). :soul[Duše] a :charisma[Vliv] dostávají zranění jako u kteréhokoli [NPC](npcs). Na 0 v kterékoli hodnotě je jednotka přemožena: mrtvá, rozprášená, vzdaná nebo zlomená.

:::example[Oheň na hlídku]
Tlupa strážných má :body 44 (podle strážného z 5E, každý 11). Ohnivá koule zasáhne většinu z nich a udělí 28, takže zbude 16: pod maximem hrstky, které je 22, a tlupa se zmenší na hrstku. Pak na přeživší zařve Vojevůdce 3 se 4 v sázce, tolik jako čepel na krku, a vyhraje: 7 z :charisma[Vlivu] hlídky, který je 6, a dají se na útěk.
:::

## Pomocné jednotky {#companion-units}

Pomocná jednotka odvrací neúspěchy Poutem jako každý [pomocník](companions), při Ohrožení svého pána; části poslané jinam určí Ohrožení PJ. Platby rostou s velikostí: ×5 u hrstky, ×25 u tlupy, ×125 u hordy. Trvalé ztráty jsou Jizvy na Poutu a obnovit Pouto znamená naverbovat nové členy. Jednotka, které dojde Pouto, je pořád silná; jen přestane poslouchat a může se stáhnout, vzdát nebo přejít na druhou stranu.

:::note[Dělení a spojování]
Jednotka rozptýlená po velkém území kvůli jednomu úkolu (hlídky po celém městě) pořád hází jako jedna. Rozdělená na různé úkoly v jedné scéně jedná každá část jako menší jednotka a sdílejí Pouto. Kilometry nebo dny od sebe se z částí stanou dvě jednotky a každá si ponechá Pouto, jak zrovna bylo. Jednotky spojené na jednu scénu dostanou hodnoty a bonus odhadem, každá si ponechá své Pouto a schopnosti se počítají, jen když je má většina členů.
:::$cs$
where slug = 'units';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Bitvu svádějí [jednotky](units) na mapě. Tahle stránka popisuje měřítka mapy a pravidla, která rozhodnou, kdy už má dost jednotka a pak celé vojsko.

## Mapa {#the-map}

Bitevní mapa má tři měřítka. **Kolo trvá 6 sekund v měřítku šarvátky i bitvy**, takže hrdinové a jednotky bojují ve stejných kolech a PJ může přiblížit, kdy je potřeba: jedno bitevní pole je 5 × 5 polí šarvátky a jedno pole bojiště je 10 × 10 bitevních polí.

| Měřítko | Jedno pole | Pole pojme | Kolo | Na co |
|---|---|---|---|---|
| **Šarvátka** | 1 m | Jednoho člověka | 6 s | Boje pár lidí. Obvyklá mapa: pole 5 stop z 5E |
| **Bitva** | 5 m | Hrstku | 6 s | Boje s jednotkami: přepadení karavany, útok na bránu |
| **Bojiště** | 50 m | Hordu | 1 minuta | Polní bitvy. Hrdinové se přidávají k jednotkám |
| **Tažení** | 5 km | — | Hodina | Pochody; vzdálenosti podle [Denního pochodu](travel-days) |

V měřítku šarvátky zabere velký tvor víc polí: Velký (kůň, zlobr, troll) 2 × 2, Obrovský (obr, wyverna) 3 × 3 a Gigantický (drak) 4 × 4 nebo víc.

### Jednotky na mapě {#units-on-the-map}

| Velikost | Bitva (pole 5 m) | Bojiště (pole 50 m) |
|---|---|---|
| Hrstka | 1 pole | Část pole |
| Tlupa | 4 pole: blok 2 × 2 nebo řada 1 × 4 | Až 4 tlupy na jednom poli |
| Horda | 16 polí: blok 4 × 4, 2 × 8 nebo řada 1 × 16 | 1 pole |
| Hrdina | Stojí sám na poli, nebo se přidá na pole spřátelené jednotky | Vždy se přidá k jednotce |

Jednotka je čelem k jedné straně, kterou určí, když se pohne, a **útoky do jejího boku nebo týlu jsou Přesně**. Řada má širší čelo a víc členů v kontaktu, ale otočit ji stojí celý její pohyb; blok se otáčí volně. Jednotky na dotýkajících se polích (hranou nebo rohem) jsou **v boji** zblízka a jednotka v boji se může odpojit jen tak, že utratí svou akci na ústup. Když se jednotka zmenší o velikost, ubírají se pole až na novou velikost ze strany, odkud přišel zásah.

Jednotka se pohybuje rychlostí svého nejpomalejšího člena. Na terénu s poloviční rychlostí stojí každé pole 2 a na terénu se čtvrtinovou 4 (viz [Terén](ground)).

| Kdo | Šarvátka chůze / běh | Bitva chůze / běh | Bojiště chůze / běh |
|---|---|---|---|
| Trpaslík, hobit | 5 / 10 | 1 / 2 | 1 / 2 |
| Člověk, elf | 6 / 12 | 1 / 2 | 1 / 2 |
| Kroll | 7 / 14 | 1 / 2 | 1 / 2 |
| Pony, mula, válečný pes, vlk | 8 / 16 | 1 / 3 | 1 / 3 |
| Jezdecký kůň, válečný kůň | 12 / 24 | 2 / 5 | 2 / 5 |
| Volský povoz | 4 / — | 1 / — | 1 / — |

### Kam dosáhne jedna akce {#what-one-action-reaches}

| Akce | Bitva | Bojiště |
|---|---|---|
| Boj zblízka jednoho člověka | 1 pole (hrstka) | — (moc malé) |
| Útok na dálku nebo kouzlo | Sevřené 2 × 2 (tlupa) | — |
| Salva jednotky Rozsáhle | Každé pole v dostřelu | 1 pole |
| Rozkazy, výhrůžky, řeč | Všichni do 6 polí (na doslech) | 1 pole |

### Dostřel v polích {#ranges-in-squares}

| Zbraň | Šarvátka (m) | Bitva | Bojiště |
|---|---|---|---|
| Vržená dýka, sekerka | 4 / 12 | 1 / 2 | Sousední |
| Oštěp | 6 / 24 | 1 / 5 | Sousední |
| Krátký luk, lehká kuše | 16 / 64 | 3 / 13 | Sousední / 1 |
| Těžká kuše | 20 / 80 | 4 / 16 | Sousední / 1 |
| Dlouhý luk | 30 / 120 | 6 / 24 | 1 / 2 |
| Balista | 24 / 96 | 5 / 19 | Sousední / 2 |
| Mangonel | 40 / 160 | 8 / 32 | 1 / 3 |
| Trebuchet | 60 / 240 | 12 / 48 | 1 / 5 |

## Rozprášená, nebo zničená {#scattered-or-destroyed}

Jak jednotka z bitvy odejde, záleží na tom, která hodnota jí došla:

| Jednotka na 0 v | Co se stalo | Po bitvě |
|---|---|---|
| :charisma | **Rozprášená:** odhodila zbraně a utekla | Dá se znovu shromáždit: den a zkouška *Velení v boji* (Válečník) nebo *Vedení lidí mimo boj* (Zvěd). Vrátí se **o velikost menší**, protože opozdilci se nikdy nevrátí |
| :body | **Zničená** | Navždy pryč |
| :soul | **Zlomená:** v panice, ztuhlá, nebo pod cizí kontrolou | Jako rozprášená, pokud ji pořád nedrží magie |

Když se jednotka zlomí (kterákoli hodnota na 0), každá spřátelená jednotka, která se jí **dotýká**, propadne panice a dostane zranění :charisma[Vlivu] při Ohrožení 2.

## Vojsko se zlomí {#an-army-breaks}

Vojsko se zlomí, když se zlomí **čtvrtina jeho jednotek**. Jednotky, které ještě stojí, se stáhnou a bitva skončí útěkem, ledaže to velitel zastaví řečí: akcí :charisma[Vlivu] Rozsáhle při Ohrožení scény.

| Jednotek ve vojsku | 4 | 8 | 12 | 16 | 20 |
|---|---|---|---|---|---|
| Zlomí se po tolika | 1 | 2 | 3 | 4 | 5 |

## Souboj velitelů {#the-commander-s-duel}

Nepřátelského velitele na doslech může vyzvat kdokoli. Když velitel výzvu přijme, bitva kolem nich se zastaví, jednotky přihlížejí a ti dva to vybojují jako obyčejný boj, do první neodvrácené Jizvy, nebo dokud se jeden nevzdá. Jednotky vítěze dostanou **Přesně zdarma na 3 kola**; jednotky poraženého zranění :charisma[Vlivu] při Ohrožení 3. Velitel, který bez dobrého důvodu odmítne, ztratí důvěru svých jednotek: pomocné jednotky ztratí 1 Pouto a ostatní dostanou zranění :charisma[Vlivu] při Ohrožení 2.

:::example[Dneska ne]
Michal vyjede mezi šiky a vyzve loupeživého barona. Baron, který už Michala viděl bojovat, zjistí, že má naléhavé povinnosti vzadu. Jeho muži se dívají, jak odchází: PJ hodí zranění :charisma[Vlivu] při Ohrožení 2 proti každé jeho jednotce a tlupa na levém křídle, už tak zkrvavená, spadne na 0 a rozprchne se. Dvě tlupy, které se jí dotýkají, teď dostanou zranění z paniky.
:::

:::note[Návrh]
Měřítka mapy jsou návrh a zatím nejsou potvrzená.
:::$cs$
where slug = 'battles';
