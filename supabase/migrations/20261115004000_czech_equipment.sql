-- Rulebook (2026-11-15): Czech for weapons, armour, crafting, hazards, item-scars.
-- The English half stays; the Czech half is replaced.

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$::image{src="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/7ef66265-5e49-4917-a337-4d7b4e179ed0.webp" alt="" width="250" align="left"}

Níže najdeš tabulku zbraní, kterými můžeš bojovat.

- **Zranění** je kostka, kterou hodíš, abys zjistil, kolik zranění dáš.
- **Druh** je kategorie zranění. Některé zbroje dávají částečnou odolnost nebo úplnou imunitu vůči druhu zranění, tak dávej pozor. Imunitu můžou mít i některé nestvůry.
- **Vlastnosti** určují, jak se zbraň používá, a můžou ti dát nějaké bonusy navíc; podívej se do oddílu pod tabulkou.
- **Manévr zdarma:** zbraně žádný nedávají; za [manévry](manoeuvres) platíš, nebo je máš zdarma z perků. Jediný, kdo nějaký dává, je **štít**: Obranu zdarma jednou za kolo.

::weapons

### Vlastnosti {#properties}
Níže najdeš popis jednotlivých vlastností zbraní:

#### Střelivo {#ammunition}
Zbraně se střelivem se počítají do dovedností *útoků na dálku*. Zbraň můžeš použít, jen když máš střelivo, které z ní vystřelíš.

Při každém útoku zbraní spotřebuješ jeden kus střeliva. Vytáhnout střelivo z toulce, pouzdra nebo jiné schránky je součástí útoku (na nabití jednoruční zbraně potřebuješ volnou ruku). **Některé perky ti můžou dovolit vystřelit dva kusy naráz.**

Na konci bitvy můžeš získat zpátky polovinu vystříleného střeliva, když strávíš minutu prohledáváním bojiště. Když zbraní se střelivem útočíš na blízko, bereš ji jako improvizovanou zbraň, pokud to pravidlo nemění perk.

#### Finesa {#finesse}
Když útočíš zbraní s finesou, můžeš jako bonus k hodu i ke zranění použít Bojovníka, nebo Kejklíře. Pro obojí ale musíš použít stejný.

#### Těžká {#heavy}
Půlčíci jsou s touhle zbraní nemotorní, pokud perk neříká jinak. Každý jejich útok touhle zbraní je proto [Chabě](conditions). (Manévr zdarma z perku to nezruší.)

#### Lehká {#light}
Krollové jsou s touhle zbraní nemotorní, pokud perk neříká jinak. Každý jejich útok touhle zbraní je proto [Nepřesně](conditions). (Manévr zdarma z perku to nezruší.)

#### Nabíjení {#loading}
Téhle zbrani chvíli trvá, než se nabije k dalšímu útoku. Nabití je proto akce.

#### Dostřel {#range}
Zbraně na dálku se počítají do dovedností *útoků na dálku* nebo *vrhů*. Zbraně na dálku mají v závorce dvě čísla.

První číslo je **běžný dostřel**. Druhé je **dlouhý dostřel**. Když útočíš na cíl za běžným dostřelem, máš u hodu na útok nevýhodu. Na cíl za dlouhým dostřelem zbraně zaútočit nemůžeš.

#### Dosah {#reach}
Když s touhle zbraní útočíš, přidá ti k dosahu 1 m.

#### Vrhací {#thrown}
Když má zbraň vlastnost vrhací, můžeš ji hodit a zaútočit na dálku a počítá se do dovedností *vrhů*.

#### Obouruční {#two-handed}
Na útok s touhle zbraní potřebuješ obě ruce. Kdo by to byl řekl...

#### Univerzální {#versatile}
Tahle zbraň se dá používat jednou rukou i oběma. U vlastnosti je v závorce hodnota zranění: zranění, když zbraní útočíš na blízko oběma rukama.

### Improvizované zbraně {#improvised-weapons}
Improvizovaná zbraň je jakýkoli předmět, který udržíš v jedné nebo dvou rukou a můžeš s ním někoho praštit. Třeba rozbité sklo, noha od stolu, pánev, kolo od vozu nebo mrtvý goblin.

Nesprávné použití zbraně, jako praštit někoho lukem, se taky počítá jako útok improvizovanou zbraní.

Improvizovaným zbraním se nedají dávat [Jizvy](exhaustion#scars) a útočí se s nimi jen za k4 (obojí, pokud perk neříká jinak).

### Útoky beze zbraně {#unarmed-strikes}
Rána pěstí, kopnutí nebo hlavička. Je to boj zblízka pěšky, takže používá tvou úroveň Bojovníka.

::formula[1 + úroveň Bojovníka]

- **Žádná kostka:** útok beze zbraně dá pevně 1 + tvoje úroveň Bojovníka drtivého zranění.
- **Žádný manévr zdarma:** pěsti nejsou zbraň.
- Bojovníkův perk *Kamenná pěst* to zvedne na **k4 + úroveň Bojovníka**.

### Postříbřené zbraně {#silvered-weapons}

:::note[]
„Věřím v meč. Jak vidíš, nosím dva. Každý zaklínač je nosí. Říká se, zlomyslně, že stříbrný je na nestvůry a železný na lidi. Ale to není pravda. Tak jako jsou nestvůry, které skolí jen stříbrná čepel, jsou i takové, pro které je smrtelné železo...“

&mdash; Geralt z Rivie, *Poslední přání*
:::

Některé nestvůry, které mají imunitu nebo odolnost vůči nemagickým zbraním, jsou zranitelné stříbrem, a tak opatrní dobrodruzi a profesionální lovci nestvůr investují peníze navíc a dávají si zbraně postříbřit.

Postříbřit jednu zbraň nebo deset kusů střeliva stojí 50 :coins[stříbrných]. Cena zahrnuje nejen stříbro, ale i čas a um, aby se stříbro na zbraň dostalo, aniž by byla méně účinná.$cs$
where slug = 'weapons';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Zbroj se skládá z **kusů**: něco pod, něco na trup, přilba, paže a nohy. Na každém místě nosíš **jeden kus** a každý kus přidává ke dvěma součtům. **Ochrana** určuje úroveň zbroje, díky které zásahy méně bolí. **Zátěž** určuje omezení, kvůli kterému se hůř hýbeš. Oba součty používají stejné stupně:

| Součet | Stupeň | Úroveň (z Ochrany) | Omezení (ze Zátěže) |
|---|---|---|---|
| 0 | Žádná | 0 | — |
| 1–3 | Lehká | 1 | — |
| 4–6 | Střední | 2 | 1 :body |
| 7+ | Těžká | 3 | 2 :body |

::armour

Většina sestav vyjde v obou součtech na stejný stupeň. Výjimkou je **padnoucí plátová zbroj**: pláty na trupu, bacinet, plátové paže a plátové nohy, vše upravené zbrojířem, což sníží Zátěž o 3. Takhle rytíř dostane těžkou ochranu se střední zátěží. Plátová zbroj z druhé ruky nedostane nic, dokud ji zbrojíř znovu neupraví, a to trvá týden.

:::example[Oblékání zbrojnoše]
Ulrich má prošívanici (Ochrana 1, Zátěž 1), dlouhou kroužkovou košili (3 a 3), bacinet (2 a 2) a kroužkové nohavice (1 a 1). Oba součty dají 7, takže jeho zbroj je těžká: úroveň 3 a omezení 2 :body[Těla]. Kdyby vyměnil kroužkovou košili za celou padnoucí plátovou zbroj, Ochrana by zůstala těžká, ale Zátěž by klesla na střední.
:::

:::note[V boji]
Úroveň zbroje snižuje stupeň každé Jizvy ze zásahu a :body[Tělo], které vyčerpáváš na odvrácení zásahu. Jak to funguje, je na stránce [Obrana a zásahy](defending).
:::

## Omezení {#encumbrance}

Omezení je [cena za pokus](danger-level#cost-to-attempt). Než postava zkusí cokoli, čemu zbroj překáží (plížení, akrobacii, plavání, běh, cokoli dalšího, co uzná PJ), napřed vyčerpá omezení v :body[Těle], ať hod potom uspěje, nebo ne.

:::note[Rozbité kusy]
Když zbroj dostane Jizvu, jeden kus se rozbije (PJ vybere ten, do kterého zásah věrohodně šel) a přestane se počítat do Ochrany i Zátěže, dokud se neopraví. Zbroj tím může klesnout o stupeň. Viz [Jizvy předmětů](item-scars).
:::$cs$
where slug = 'armour';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Všechno, co se vyrábí rukama, má jedno pravidlo: sekera, léčivá mast, elixír, bomba, oko na zvěř.

Výroba potřebuje **místo, nástroje a čas** (kovárnu a odpoledne na sekeru; hrnec a táborák na odvar) a **:material**, abstraktní zásoby, u kterých řekneš, co přesně to je, až je utratíš: byliny, drát, černý prach, dřevo. Lektvary, elixíry a [nástrahy](hazards) říkají, kolik ho potřebují. Obyčejné vybavení zabere zhruba dvě třetiny své ceny v obchodě.

## Povede se to? {#does-it-work}

S časem, nástroji a odpočinkem potom se to prostě povede. Hod by jen stál body, které odpočinek vrátí.

Ve spěchu, nebo když odpočinek nepřijde, je to [zkouška](dice#skill-check) s výrobní dovedností: *Lektvary a jedy* na odvar, *Mechanismy* na past, *Elixíry* na elixír. Neúspěch se odvrací :soul[Duší] podle Ohrožení scény; jinak je :material ztracený, tolik, kolik řekne PJ.

Práce ve spěchu jde po **1 :material za kolo**, takže bomba síly 4 (8 :material) zabere 8 kol. Jámu je pořád potřeba vykopat (viz [Kopání a těžba](digging)). Kdo výrobce porazí ve střetu, zkazí :material toho kola (vařečka vyšplíchne); kdo se rozhodne práci zničit (kopne do hrnce), zkazí všechen.

:::example[Dnes v noci, ne zítra]
Michal (Mastičkář 2) musí žalářníka uspat ještě dnes v noci a předtím, než se vplíží dovnitř, si neodpočine, takže PJ chce hod. Uvaří uspávací odvar síly 3 za 3 :material a hodí zkoušku při Ohrožení 3. Neuspěje, vyčerpá 3 :soul[Duše], aby to odvrátil, a jde k žaláři s odvarem a bolavou hlavou.
:::

## Improvizované přísady {#improvised-materials}

Cokoli je po ruce a nasbírá se na místě, nestojí nic. Jako improvizovaná zbraň udělá svou práci, ale bez výhod:

| Vyrobeno z improvizovaných přísad | V pravidlech |
|---|---|
| Nástraha: past, jed, bomba | Nejvýš síla **1** a přestane fungovat při příštím východu nebo západu slunce |
| Lektvar, elixír, obrazec | **Žádný účinek.** Mast konejší; nic neléčí |
| Zbraň nebo nástroj | Improvizovaný: zbraň dává k4 |

:::note[Perky, které to mění]
Lovcův *MacGyver* postaví improvizovanou past až do výše tvého zdroje :soul[Duše]. Mastičkářova *Rajská zahrada* sklízí pořádný :material, ne improvizovaný.
:::

## Skladování {#keeping}

Látky vydrží, dokud se nepoužijí; lektvar prakticky navždy, i když po pár měsících může páchnout. Nastražená past zůstane natažená, dokud ji někdo nespustí nebo nenajde. Výjimkou jsou obrazce, které končí při příštím východu nebo západu slunce (viz [Obrazce](sigils)).$cs$
where slug = 'crafting';

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

Nástraze, která se spustí, se **odolává** otevřeným záchranným hodem s tím, co sedí: *Akrobacie* na uhnutí šipkám, *Výdrž* proti jedu, *Vůle* proti odvaru. Každá oběť hází sama za sebe. Hráčská postava, která neuspěje, odvrací jako obvykle, vyčerpáním zdroje ve výši síly nebo Jizvou, a pak se nestane nic. Obyčejné NPC, které neuspěje, účinek utrpí; důležité může utratit 1 Sudbu. Vyhraný nebo odvrácený hod znamená, že se **nestane vůbec nic**; za těsnou netrefu není žádný menší účinek.

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
| **Holá kůže** (+2, když je výrobce imunní) | Kontaktní jed, který působí skrz neporušenou kůži | Kontaktní jedy | *Tvé rty jsou jedovatý jed* (Lupič) |
| **Na slovo** | Vybuchne na zvuk nebo vyslovené slovo | Výbušniny, plyny | *Na slovo* (Alchymista) |
| **První potkaný** | Jakmile začne působit, oběť se k prvnímu člověku, kterého potká, zachová určitým způsobem: zamiluje se, pokusí se ho zabít | Narkotika | *Filtry* (Šaman) |

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

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Jizvy můžou dostat i tvoje věci a někdy můžeš chtít zjizvit některou svoji věc místo sebe. Věc se **rozbije** a stejně jako Jizva, kterou si vezmeš, dá **2 body** k okamžitému utracení.

Věc můžeš zjizvit jen u činnosti, ve které by **rozumně hrála roli**: paklíč u zámku, meč v boji. Tvořivé nápady jsou vítané, pokud je PJ skousne.

Ty 2 body se počítají do **kteréhokoli zdroje**, který nepovedený hod potřeboval, a zbylé body propadnou jako u obyčejné Jizvy.

Počítají se jen **pořádné věci**. Noha od židle použitá jako kyj se za body zjizvit nedá, protože je to improvizovaná zbraň. Některé perky ti můžou dovolit opak.

### Zbraně {#weapons}
Když se zbraň rozbije, počítá se jako improvizovaná zbraň s kostkou zranění k4, dokud ji někdo pořádně neopraví.

### Zbroj {#armour}

Když PJ zjizví zbroj, jeden její kus se rozbije a nepočítá se do Ochrany ani Zátěže, dokud ho někdo neopraví. Viz [Zbroj](armour).

:::example[Papírová růže]{image="/img/rulebook/michal.webp"}
Žárlivá „přítelkyně“ zahnala Michala do kouta a Michal potřebuje ještě jeden bod :charisma[Vlivu], aby se z toho vykecal.

Vytáhne jedinou mapu družiny do jeskyně, s grácií z ní složí papírovou růži a zapálí ji. Dívka je okouzlena. Družina ne.
:::

## Opravy {#repairs}

Oprava funguje jako [léčení Jizvy](healing): 5 bodů zdrojů, obvykle Materiálu, a úspěšná zkouška povolání, které tu oblast ovládá (Válečník na kování meče, Hraničář na výrobu luku...).

:::note[Musí to být uvěřitelné]
Jedinečnou mapu nebo starožitný meč do původní slávy nevrátíš. Prasklý štít ano.
:::$cs$
where slug = 'item-scars';
