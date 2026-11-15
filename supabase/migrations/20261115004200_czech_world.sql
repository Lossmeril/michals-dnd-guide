-- Rulebook (2026-11-15): Czech for travel, sieges, battles, hazards, npcs.
-- The English half stays; the Czech half is replaced.

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Cesta po zemi se počítá den po dni: 8 hodin na cestě. Tempo pro všechny určuje **nejpomalejší cestovatel** a [Užitečné tabulky](travel-days) říkají, kam až se družina dostane, co udělá počasí a co cestou potká. Tahle stránka popisuje pravidla, jak je použít.

Den na cestě vypadá takhle. Ráno se hodí na [počasí](weather). Pak si družina zvolí **tempo** a každá postava si na den vybere jeden **úkol**. Během pochodu se hodí na [náhodné setkání](encounters) a v noci znovu, a pak se uvidí, jaký to bude [odpočinek](healing).

## Tempo {#pace}

Tempo rozhoduje, jak daleko se družina dostane a co dalšího cestou zvládne. Pomalá družina se rozhlíží; rychlá kouká jen dopředu.

| Tempo | Vzdálenost | Všimnout si přepadu nebo stopy | Hledání cesty, stopování, sběr | Plížení |
|---|---|---|---|---|
| **Pomalé** | Řádek *Pomalé* | **Výhoda** | **Výhoda** | Ano |
| **Normální** | Řádek *Normální* | Obyčejný hod | Obyčejný hod | S nevýhodou |
| **Rychlé** | Řádek *Rychlé* | **Nevýhoda** | **Nevýhoda**; žádný sběr | Ne |

Výhoda je tu Přesně zdarma a jako vždycky [vyhrává nevýhoda](advantage). Přetížená družina klesne o jedno tempo a ztratí s ním i jeho výhody.

## Úkoly {#tasks}

Každá postava dělá za den **jeden** úkol a tempo omezuje, které jsou možné. Hody na cestě se házejí při Ohrožení kraje: **2** na hlídané cestě, **3** v divočině, **4** v nebezpečných zemích.

| Úkol | Hod | Úspěch | Neúspěch, neodvrácený |
|---|---|---|---|
| **Hlídka** | *Přežití v divočině* (Lovec), nebo *Přežití ve městě* (Kejklíř) v ulicích; [skrytý hod](dice#hidden-roll) | Družina si setkání všimne první | Setkání si první všimne družiny |
| **Hledání cesty** (jen mimo cestu) | *Přežití v divočině* (Lovec) | Správný směr | Zabloudili: denní vzdálenost se nepočítá. Ranní hod další den cestu najde |
| **Stopování** | *Lov* (Lovec) | Na stopě | Stopa je ztracená, dokud se neobjeví nová známka |
| **Sběr** (ne v rychlém tempu) | *Lov* (Lovec) | Jídlo pro družinu na dnešek a **1 :material** bylin, dřeva nebo kůží | Nic nenašli |
| **Lov** (ne v rychlém tempu) | [Tabulka zvěře](#hunting), pak *Lov* (Lovec) | Drobná zvířata, malá nebo velká zvěř, podle hodu | Zvěř uteče |
| **Mapování** | *Válečnické znalosti*, *Hraničářské znalosti* nebo dovednost Zvěda | Výhoda na hledání cesty touhle trasou příště | — |
| **Zametání stop** (jen v pomalém tempu) | Bez hodu | Stopování družiny je s nevýhodou | — |
| **Plížení** (v pomalém nebo normálním tempu) | *Akrobacie* (Kejklíř) nebo *Pohyb v divočině* (Lovec); **hází každý** | Družina se pohybuje nepozorovaně: setkání si jí všimne jen výhrou ve střetu | Viděni |

Když se družina plíží, platí [cena za pokus](danger-level#cost-to-attempt) za zbroj pro každého, kdo ji nosí, a jeden řinčící rytíř prozradí celou družinu.

:::example[Zkratka]
Družina jde Černým lesem pomalým tempem a divočina dává hodům na cestě Ohrožení 3. Michal hledá cestu: *Přežití v divočině* s výhodou z pomalého tempa, 3k6 a nechá si dvě nejlepší, plus jeho úroveň Lovce. Neuspěje a nechce na odvrácení vyčerpat 3 :soul[Duše], takže družina celý den chodí v kruhu kolem stejného padlého dubu a denní vzdálenost se nepočítá. Zara drží hlídku a její skrytý hod uspěje, takže když večer přijdou vlci, družina je uvidí první.
:::

## Lov {#hunting}

Sběr bere, co roste; lov jde po mase. Postava, která loví, napřed hodí k10 na řádku pro kraj, kde družina je, aby zjistila, co je kolem, a pak hodí na *Lov* při Ohrožení kraje, aby to ulovila. Velká zvěř je samostatný boj: kanec nebo medvěd se může na lovce obrátit a PJ to může odehrát jako boj.

| Kraj | Například | Nic | Drobná zvířata | Malá zvěř | Velká zvěř |
|---|---|---|---|---|---|
| **Bohatý** | Starý les, říční louky, panská obora | 1 | 2–3 | 4–7 | 8–10 |
| **Osídlený** | Pole a pastviny, obhospodařované lesy | 1–2 | 3–5 | 6–9 | 10 |
| **Zpustošený** | Válečná zóna, spálený nebo vylovený kraj | 1–4 | 5–7 | 8–9 | 10 |
| **Pustý** | Holé hory, vřesoviště, zimní pustiny | 1–5 | 6–8 | 9 | 10 |

| Zvěř | Například | Úspěšný lov dá |
|---|---|---|
| **Drobná zvířata** | Myši, žáby, šneci, ptačí vejce | Jídlo pro jednoho na dnešek |
| **Malá zvěř** | Zajíci, králíci, bažanti, kachny, ryby | Jídlo pro družinu na dnešek |
| **Velká zvěř** | Jelen, kanec, medvěd | Jídlo pro družinu na tři dny a **2 :material** kůží a rohoviny |

:::example[Hladový týden]
Družina přechází údolí, kterým prošla válka: zpustošený kraj. Michal loví, na k10 hodí 6 a najde jen drobná zvířata. Hod na *Lov* mu vyjde a sní hrst žab, zatímco ostatní hladoví. Druhý den Zara, která má *Čerstvou stopu*, zaplatí 1 :soul[Duši] a rozhodne, že u potoka ryl kanec. Přeskočí k10, jde po stopách a hodí na *Lov*; družina má jídlo na tři dny.
:::

:::note[Čí je zvěř]
V osídleném kraji a v panské oboře patří zvěř pánovi a lovit ji je pytláctví.
:::

:::note[Čerstvá stopa]
Lovcova *Čerstvá stopa* přeskočí k10: za 1 :soul[Duši] lovec rozhodne, které zvíře, jež by kraj mohl mít, je poblíž, a najde jeho stopy. Ulovit ho pořád chce hod na *Lov*.
:::

## Počasí {#weather}

Špatné počasí družinu zpomalí tím, že ji v [Denním pochodu](travel-days) posune doprava, a může dát nevýhodu na všímání si, hledání cesty a útoky na dálku; co dělá který druh, říká [tabulka počasí](weather).

Zdroje stojí to, že je družina venku. Noc venku bez ohně, stanu nebo teplého oblečení v chladném počasí je [záchranný hod](dice#saving-throw) na *Výdrž* (Mastičkář) při **Ohrožení 3**, nebo **5** v krutém mrazu, a neúspěch bez odvrácení znamená Jizvu :body[Těla] 1. stupně: omrzliny, horečku. Denní pochod ve vedru je cena za pokus **1 :body[Tělo]** (2 ve střední nebo těžké zbroji), ledaže družina pochoduje v noci. A každá noc venku bez přístřeší v dešti, sněhu, zimě nebo horku je **špatný odpočinek**.

## Náhodná setkání {#encounters}

Hoď k6 **dvakrát denně**, jednou na pochod a jednou na noc. Jak pravděpodobné setkání je, záleží na kraji, a [tabulky setkání](encounters) říkají, co přijde a na jakou vzdálenost je to vidět.

Kdo si všimne první, rozhodne hod hlídky, nebo střet, pokud se druhá strana plíží nebo číhá v záloze. **Strana, která si všimla**, volí, co se stane: promluvit, schovat se, přepadnout, nebo to obejít. **Strana, která si nevšimla**, je zaskočená a má v prvním kole **iniciativu s nevýhodou**. Setkání v noci přeruší odpočinek, ze kterého se stane špatný.

:::note[Na PJ]
PJ může hod vynechat, když by setkání jen ztrácelo čas, nebo ho umístit, když ho příběh potřebuje.
:::

## Kalkulačka {#calculator}

::travel-calculator

:::note[Pořád používá násobky]
Kalkulačka pracuje se starými násobky. [Denní pochod](travel-days) má stejná čísla spočítaná.
:::$cs$
where slug = 'travel';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Hrad padne jedním z pěti způsobů: **ostřelováním**, **útokem**, **podkopem**, **vyhladověním** nebo **magií**. Hradby, brány a stroje jsou v [Hradbách a branách](walls-and-gates) a v [Obléhacích strojích](siege-engines); tahle stránka se týká lidí uvnitř a těch, kteří se snaží vylézt dovnitř.

## Zásoby {#stores}

Obléhané místo vydrží, dokud mu vystačí jídlo a voda. Zásoby se počítají v **týdnech**, pro posádku, pro kterou bylo místo postavené:

| Místo | Posádka | Jídlo | Voda |
|---|---|---|---|
| Opevněná tvrz | 20 | 4 týdny | Studna |
| Malý hrad | 60 | 12 týdnů | Studna, nebo 1 týden z cisterny |
| Opevněné město | Měšťané a 200 vojáků | 8 týdnů | Studny |

Dvakrát víc lidí a zásoby vydrží poloviční počet týdnů, takže každý uprchlík vpuštěný branou obléhání zkrátí. Každý týden bez jídla dostane posádka zranění :charisma[Vlivu] při Ohrožení 3 a bránící [jednotka](units) se zmenší o velikost, jak muži dezertují a umírají.

## Útok {#the-storm}

Obránci za cimbuřím mají **tříčtvrteční [kryt](defending#cover)**: útoky na ně jsou s nevýhodou a proti zásahu mají úroveň zbroje +1. Lezení po žebříku je [cena za pokus](danger-level#cost-to-attempt) **1 :body[Tělo]** a lezec se nemůže bránit, takže útoky na něj jsou bez obrany. Obránce může žebřík odstrčit manévrem **Lstivě** a všichni, kdo na něm jsou, spadnou; pád je [nástraha](hazards#falling), jejíž sílu určí výška. Obléhací věž dosáhne na vrchol hradby bez ceny za lezení a bez žebříku, který by šel odstrčit.

**Průlom** je suť: [terén](ground) s poloviční rychlostí a žádný kryt pro obránce. Proto jakmile nějaký je, boj se přesune do průlomu.

:::example[Žebřík]
Michal je v půlce žebříku, když obránce opře o žebřík tyč a zaplatí za Lstivě. Žebřík se převrátí a Michal spadne z 6 m: nástraha síly 4. Neuspěje v záchranném hodu na *Akrobacii* a vyčerpá 4 :body[Těla], místo aby si vzal Jizvu z k6. Proti pádu mu zbroj nepomůže.
:::$cs$
where slug = 'sieges';

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
| :charisma | **Rozprášená:** odhodila zbraně a utekla | Dá se znovu shromáždit: den a zkouška *Vedení v boji* (Válečník) nebo *Vedení lidí mimo boj* (Zvěd). Vrátí se **o velikost menší**, protože opozdilci se nikdy nevrátí |
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

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$**Nástraha** je cokoli, co jedná samo, jakmile je vyrobené nebo nastražené: jed ve víně, propadlo, šipky v zámku, bomba, lahvička kyseliny, oblak plynu, oko v lese. Všechny fungují podle jednoho pravidla, takže PJ potřebuje pro každou jen jeden řádek statistik.

## Řádek nástrahy {#the-hazard-line}

| Položka | Říká | Například |
|---|---|---|
| **Dosah** | Koho zasáhne a jak | Toho, kdo pije; kdo otevře víko; každého u výbuchu |
| **Zdroj** | :body, :soul nebo :charisma | :body na šipky a kyselinu; :soul na odvar nočních můr |
| **Síla** | Jak je zlá, 1–8 | 3 u pasti se šipkami |
| **Účinek** | Jeden účinek: zranění, [stav](conditions), Jizva, něco v příběhu, nebo kombinace | 3k6 z :body[Těla]; Paralyzovaný; dveře cely se zabouchnou |
| **Prozrazení** | Jak se dá odhalit | Hořká chuť; drát přes chodbu; syčení, když lahvička praskne |

Každá nástraha **musí mít prozrazení**, které dá hráčům skutečnou šanci si jí všimnout. Bez něj to není past, ale rozmar PJ.

:::note[Zkratka]
Ve statistikách a poznámkách k dobrodružství se nástraha vejde do jedné závorky: *Pavoučí jed (kousnutí; rychlý jed na :body[Tělo], síla 5; Paralyzovaný).*
:::

## Síla {#strength}

Síla je jedno číslo, které dělá tři věci. Je to Ohrožení pro odvrácení nástrahy, určuje zranění a určuje cenu výroby (viz [Druhy](#kinds)).

| Síla | Ohrožení na odvrácení | Zranění NPC | Kostka pro hrozbu proti hráčské postavě |
|---|---|---|---|
| 1 | 1 | 1k6 (3) | k4 |
| 2 | 2 | 2k6 (7) | k4 |
| 3 | 3 | 3k6 (10) | k6 |
| 4 | 4 | 4k6 (14) | k6 |
| 5 | 5 | 5k6 (17) | k8 |
| 6 | 6 | 6k6 (21) | k8 |
| 7 | 7 | 7k6 (24) | k10 |
| 8 | 8 | 8k6 (28) | k10 |

Pro ten jeden hod nahradí síla nástrahy Ohrožení scény. Hráčská postava nemůže vyrobit nástrahu silnější, než je její zdroj :soul[Duše]; nástrahy NPC jsou prostě zapsané v jeho statistikách a žádný výrobce se nekontroluje.

## Setkání s nástrahou {#meeting-a-hazard}

Postava, která by mohla prozrazení včas zachytit, nejdřív hází, jestli si nástrahy **všimne**: [záchranný hod](dice#saving-throw) na :soul[Duši] s *Mechanismy* (Lupič) u pasti v zámku, s *Přežitím ve městě* nebo *v divočině* u přepadení, s *Lektvary a jedy* (Mastičkář) u otráveného jídla. Je to [skrytý hod](dice#hidden-roll), protože jestli tam něco bylo, je přesně to, co se hráč z kostek nesmí dozvědět, takže proti němu nikdo nevyčerpává. Odhalené nástraze se postava vyhne, nebo ji aspoň omylem nespustí.

Nalezenou past jde **zneškodnit** zkouškou s *Mechanismy*, nebo s *Lovem* u oka na zvěř. Neúspěch ji spustí, pokud ho postava neodvrátí vyčerpáním tolika bodů :soul[Duše], kolik je síla.

Nástraze, která se spustí, se **odolává** otevřeným záchranným hodem s tím, co sedí: *Akrobacie* na uhnutí šipkám, *Výdrž* proti jedu, *Síla vůle* proti odvaru. Každá oběť hází sama za sebe. Hráčská postava, která neuspěje, odvrací jako obvykle, vyčerpáním zdroje ve výši síly nebo Jizvou, a pak se nestane nic. Obyčejné NPC, které neuspěje, účinek utrpí; důležité může utratit 1 Sudbu. Vyhraný nebo odvrácený hod znamená, že se **nestane vůbec nic**; za těsnou netrefu není žádný menší účinek.

:::example[Šipky v zámku]
Michal (Kejklíř 2, Lupič 1) klečí u kupcovy truhly. PJ za něj skrytě hodí *Mechanismy* na odhalení pasti (2k6 + 1) a neuspěje, takže Michal otevře víko a šipky vyletí: síla 3. Hodí záchranný hod na *Akrobacii*, 2k6 + 2, a padne 7. Má koženou kazajku, úroveň zbroje 1, takže odvrácení ho stojí 3 − 1 = 2 :body[Těla] místo 3. Zaplatí a šipky se zabodnou do zdi za ním.
:::

:::note[Zbroj proti nástrahám]
Zbroj se počítá proti tomu, co by zastavily kroužky nebo štít: šipkám, čepelím, padajícímu kamení, kamenům, které rozmetá výbuch. Její úroveň se odečte od stupně Jizvy i od ceny odvrácení v :body[Těle], jako u každého zásahu. Proti jedu, plynu, kyselině, ohni ani pádu nedělá nic.
:::

## Druhy {#kinds}

| Druh | Povolání | Dovednost | Zdroj | Dostane se dovnitř | Působí | :material za sílu |
|---|---|---|---|---|---|---|
| **Mechanická past**: jáma, šipky, čepel, síť, poplach | **Lupič** | *Mechanismy* | :body; :soul u té, která chytá nebo mate | Destička, drát, víko | Hned | 1 |
| **Past v divočině**: oko, sklopec, jáma s kůly | **Lovec** | *Lov* | :body | Natažený provázek, návnada | Hned | 1 |
| **Polykaný jed** | **Mastičkář** (zkusit může kdokoli) | *Lektvary a jedy* | :body | Spolknutím | Při příštím východu nebo západu slunce | 1 |
| **Kontaktní jed** | **Lupič** | *Kontaktní jedy* (jedinečná) | :body | Rána, ústa, oči | Při příštím východu nebo západu slunce | 1 |
| **Narkotikum** | **Šaman** | *Omamné látky* (jedinečná) | :soul nebo :charisma | Spolknutím | Při příštím východu nebo západu slunce | 1 |
| **Výbušnina**: černý prach, ohnivá hlína | **Alchymista** | *Výbušniny, žíraviny a plyny* (jedinečná) | :body | Zapálená zápalnice, nebo náraz | Hned | 2 |
| **Žíravina**: kyselina | **Alchymista** | *Výbušniny, žíraviny a plyny* (jedinečná) | :body | Postříkáním nebo politím | Hned | 2 |
| **Plyn** | **Alchymista** | *Výbušniny, žíraviny a plyny* (jedinečná) | :body | Vdechnutím, když lahvička praskne | Hned | 2 |

Mechanická past, která má chytit víc lidí (síť přes chodbu, propadající se strop), stojí o 1 :material víc, ať jich chytí kolik chce.

### Jedy a narkotika {#poisons}

Při výrobě jedu si výrobce zvolí jeho **jeden účinek**: stav (V bezvědomí, Paralyzovaný, nebo Nepřesně, Pomalu, Chabě či Hloupě s jmenovanou dovedností), zranění, Jizvu :body[Těla], nebo kombinaci. Narkotikum dělá totéž s myslí: Okouzlený, Vystrašený, Jizva :soul[Duše] nebo :charisma[Vlivu], nebo něco v příběhu, třeba vidění nebo štěkání na měsíc. Obojí se vyrábí **po dávkách**: jedna dávka, jedna oběť. Obojí působí jen na lidi, humanoidy a zvířata.

Polykaný jed nebo narkotikum začne působit při **příštím východu nebo západu slunce** poté, co ho oběť požila, a odezní při tom dalším; stav z něj trvá stejně dlouho. Mrtví zůstávají mrtví. Aby působil hned, potřebuje vlastnost *Rychlý* níže.

**Kontaktní jed** působí, jen když se setká s tělesnými tekutinami: otevřenou ranou, ústy, očima. Na holé, neporušené kůži nedělá nic. Potah na čepeli nebo hrotu šípu je taky kontaktní jed, který se dostane dovnitř ranou, ale v boji je k užitku, jen když je Rychlý.

:::note[Mastičkářovy perky na všechny látky]
Mastičkářovy perky na látky, jako *Neobvyklý jed*, fungují na látky všech povolání: Lupičovy kontaktní jedy, Alchymistovy plyny, Šamanova narkotika. Postava ale potřebuje samotný Mastičkářův perk.
:::

### Výbuchy {#blasts}

Výbušniny, kyseliny a plyny stojí dvojnásob, protože působí **hned** a zasáhnou **všechno kolem**. Výbuch zasáhne plnou silou tam, kde vybuchne, a o 1 méně za každý metr dál; odskočit je záchranný hod (*Akrobacie*). Plocha je součástí ceny, takže [Rozsáhle](manoeuvres) ji zvětšit nemůže. Plyn uvnitř si drží plnou sílu v celé zavřené místnosti, která není širší než jeho dosah. Prozrazením je často samotný okamžik: záblesk, rána, smrad, barevný dým.

| Síla | Dosah | Síla v 1 m / 2 m / 3 m | :material |
|---|---|---|---|
| 1 | Jen vlastní políčko | — | 2 |
| 2 | 1 m | 1 / — / — | 4 |
| 3 | 2 m | 2 / 1 / — | 6 |
| 4 | 3 m | 3 / 2 / 1 | 8 |
| 5 | 4 m | 4 / 3 / 2 | 10 |
| 6 | 5 m | 5 / 4 / 3 | 12 |
| 7 | 6 m | 6 / 5 / 4 | 14 |

### Vlastnosti {#properties}

Každá vlastnost stojí **+1 :material za sílu** a potřebuje perk, který ji naučí.

| Vlastnost | Dělá | Pro | Perk |
|---|---|---|---|
| **Rychlý** | Působí hned, ne při východu nebo západu slunce | Jedy, narkotika | *Neobvyklý jed* (Mastičkář) |
| **Dvousložkový** | Spí, dokud ho něco neprobudí: víno, kouř z dýmky | Jedy, narkotika, plyny | *Neobvyklý jed* (Mastičkář) |
| **Těžko odhalitelný** | Žádná chuť, vůně ani barva; najít se dá jen hledáním a ten hod má nevýhodu | Jedy, narkotika, plyny | *Neobvyklý jed* (Mastičkář) |
| **Holá kůže** (+2, když je výrobce imunní) | Kontaktní jed, který působí skrz neporušenou kůži | Kontaktní jedy | *Tvé rty jsou jed* (Lupič) |
| **Na slovo** | Vybuchne na zvuk nebo vyslovené slovo | Výbušniny, plyny | *Na slovo* (Alchymista) |
| **První potkaný** | Jakmile začne působit, oběť se k prvnímu člověku, kterého potká, zachová určitým způsobem: zamiluje se, pokusí se ho zabít | Narkotika | *Čarovné nápoje* (Šaman) |

:::example[Tichá večeře]
Uspávací jed síly 3, který působí hned a nemá chuť, je Rychlý a Těžko odhalitelný: 3 + 3 + 3 = 9 :material za dávku.
:::

## Pád {#falling}

Pád je nástraha sama o sobě. Jeho síla vychází z výšky, záchranný hod je *Akrobacie* a zbroj nepomáhá.

| Výška | 3 m | 6 m | 9 m | 12 m |
|---|---|---|---|---|
| Síla | 2 | 4 | 6 | 8 |

## Proti zdem, dveřím a zámkům {#against-walls-doors-and-locks}

Zdi, brány, střechy a malé věci mají **pevnost** (viz [Zdi a brány](walls-and-gates)). Nástraha proti nim hází svou sílu v k6: hod pod pevností nedělá nic, a který ji dosáhne, odečte se od :body[Těla] úseku. Malá věc, jako zámek nebo řetěz, se prostě rozbije. Kyselina se prožírá asi minutu; plyn a jed věcem nic neudělají.

Nálož **upěchovaná** k cíli nebo pod něj (pověšená na bráně, natlačená na konci podkopu) hází o 2 kostky víc. To je umístění, ne lepší směs, takže může přesáhnout výrobcův limit :soul[Duše]. Kolik náloží vydrží brána nebo zeď, je v [Obléhacích strojích](siege-engines).

:::example[Dveře trezoru]
Bomba síly 3 pověšená na železem pobitých dveřích (pevnost 10, :body 40) hází 5k6, asi 17 na nálož, takže na vyražení dveří potřebuje tři nálože. Volně hozená na městskou hradbu (pevnost 20) hodí stejná bomba jen 3k6 a skoro nikdy neprojde.
:::$cs$
where slug = 'hazards';

update rulebook_pages set content = replace(replace(split_part(content, E'\n\n|cs|\n\n', 1), $f$ |cs| Městský strážný$f$, $f$$f$), $f$ |cs| Člověk, obyčejný$f$, $f$$f$) || E'\n\n|cs|\n\n' || $cs$Nehráčské postavy fungují jinak než hráčské. Nevyčerpávají, nedostávají Jizvy a nemají vlastní Ohrožení. Místo toho mají **hodnoty**, které klesají, když prohrávají, tak jako životy v 5E. PJ tak má málo počítání: NPC je jeden blok statistik, pár čísel na odškrtávání a mezi hody není co sledovat.

## Statistiky {#the-stat-block}

NPC se píše jako tvor z 5E, s pár záměnami. Místo životů má hodnoty :body, :soul a :charisma. Místo vlastností a zdatností má **bonusy k dovednostem**. Má **zvláštní schopnosti** (své rysy, akce a reakce), **kostku pro hrozbu** pro újmu, kterou dává hráčským postavám, a když je pro příběh důležité, pár bodů **Sudby**.

Městský strážný, to nejobyčejnější NPC, jaké existuje, vypadá takhle:

```npc
name: Městský strážný
image: /img/classes/fighter.webp
subtitle: Člověk, obyčejný
emblem: /img/emblems/watch-kruta-hora.svg
allegiance: Hlídka Kruté Hory
armour: Střední (2)
speed: 6 m
threat: k6
body: 11
soul: 4
charisma: 6
skills: Dovednosti Bojovníka +2
manoeuvres: Obrana jednou za kolo (štít)
languages: Obecná řeč

## Akce
***Kopí.*** Boj zblízka pěšky, dosah 1 m. Zásah: 1k6 + 2 bodné.

## Reakce
***Štít.*** Jednou za kolo se brání bez utracení akce.
```

## Bonusy k dovednostem {#skill-bonuses}

NPC si k hodům s dovednostmi, ve kterých je dobré, přičítá pevný bonus a používá ho přesně jako úroveň povolání: k20 + bonus ve střetu, 2k6 + bonus proti 9 ve zkoušce. Bonus může pokrývat všechny dovednosti povolání (voják s +2 k dovednostem Bojovníka), malou část jednoho (+3 k *Pěšímu boji zblízka*), nebo vlastní dovednost NPC. Bonusy jdou obvykle do +5, jako úroveň povolání; legendární NPC můžou dosáhnout +8.

## Hodnoty {#tracks}

Každá hodnota měří jeden způsob, jak NPC porazit, a na 0 je NPC tímhle způsobem přemoženo.

| Hodnota | Snižují ji | Na 0 NPC |
|---|---|---|
| :body | Zbraně, zraňující kouzla, jed | Padne nebo zemře |
| :soul | Strach, iluze, magie mysli | Zlomí se, zpanikaří nebo je ovládnuto |
| :charisma | Zastrašování, klam, ponížení | Vzdá se, uteče nebo ustoupí |

:body je největší hodnota a funguje jako životy v 5E: životy tvora z 5E jsou jeho hodnota :body[Těla]. :soul a :charisma jsou mnohem menší, takže porazit NPC slovy nebo hrůzou je často rychlejší než ocelí.

:::note[Dvě různá Těla]
Hodnota :body[Těla] u NPC a zdroj :body[Těla] hráčské postavy jsou různá měřítka. Zdroj je to, jak daleko se postava dokáže vybičovat, a utrácí se po Ohrožení; hodnota jsou životy z 5E. Ta dvě čísla nesrovnávej.
:::

## Zraňování NPC {#damaging-an-npc}

**Zranění :body[Těla]** jsou kostky zbraně nebo kouzla plus úroveň povolání útočníka, mínus úroveň zbroje NPC. Když ho zbroj stáhne na 0 nebo níž, zásah je pohlcen. Zbroj funguje jako u hráčských postav, do stupně 3; přirozená zbroj velké nestvůry může dosáhnout 4 nebo 5, kde je to oprávněné, třeba u dračích šupin nebo kamenného golema.

**Zranění :soul[Duše] a :charisma[Vlivu]** přichází z vyhraného hodu proti NPC: výhrůžky, lži, děsivé iluze. PJ určí, kolik má NPC v té chvíli v sázce, na stejné stupnici jako Ohrožení, a hodnota klesne o tolik plus úroveň povolání vítěze. Hráči sázku zvyšují přípravou (vyhrabou špínu, přivedou armádu); situace NPC ji může snížit (stráže poblíž, mocný ochránce). Číslo se potom neuchovává.

| Co je v sázce | Body |
|---|---|
| Planá výhrůžka | 1–2 |
| Čepel u krku | 4 |
| Rodina jako rukojmí | 5+ |

:::example[Čepel u krku]
Michal (Kejklíř 3) chytí strážného samotného v uličce, přiloží mu nůž ke krku a chce klíč. Vyhraje střet :charisma[Vlivu]. Čepel u krku má hodnotu 4 a Michal přičte svou úroveň Kejklíře: strážného :charisma[Vliv] 6 klesne o 7 na 0 a klíč mu vydá.
:::

## Neúspěch a Sudba {#failing-and-fate}

Obyčejná NPC neúspěchy odvracet nemůžou: když strážný prohraje hod, výsledek platí. Důležitá NPC (kapitán, purkmistr, drak) mají **1–3 body Sudby** a 1 bod Sudby promění prohraný hod ve výhru. Utracená Sudba se vrací při dalším východu slunce a nikdy během boje, takže ji hráči můžou vyčerpat.

## Manévry {#manoeuvres}

Manévry uvedené ve statistikách má NPC zdarma: vlčí Lstivě u každého kousnutí, vojákova Obrana štítem. Jakýkoli jiný manévr stojí NPC 1 bod hodnoty, obvykle :soul[Duše] nebo :charisma[Vlivu], podle toho, co sedí. Silné a kruté manévry má jen jako zvláštní schopnosti.

:::note[Zraňování hráčských postav]
NPC proti hráčským postavám nehází na zranění zbraní. Zásah, který projde a není odvrácen, se stane Jizvou o velikosti podle kostky pro hrozbu NPC; viz [Obrana a zásahy](defending).
:::

## Vedle sebe {#side-by-side}

| | Hráčská postava | NPC |
|---|---|---|
| **Bonus k hodu** | Úroveň povolání (nejvýš 5) | Pevný bonus pro skupinu dovedností (obvykle nejvýš 5) |
| **Schopnosti** | Perky a kouzla | Zvláštní schopnosti |
| **Újma** | Odvrací vyčerpáním, jinak Jizvy | Ztrácí body hodnot |
| **Odvrácení neúspěchu** | Vyčerpá tolik bodů, kolik je Ohrožení | Nemůže; důležitá NPC utrácejí Sudbu |
| **Ohrožení** | Ano, pro každou postavu | Ne |
| **Zranění, které dává** | Kostky + úroveň povolání, do hodnot | Kostka pro hrozbu, jako stupeň Jizvy |
| **Porážka** | Hody na umírání, když Jizva přeteče zdroj | Na 0 v kterékoli hodnotě |
| **Manévry** | 1 bod zdroje, nebo zdarma | Zdarma, když jsou dané, jinak 1 bod hodnoty |$cs$
where slug = 'npcs';
