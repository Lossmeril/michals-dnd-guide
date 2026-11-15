-- Rulebook (2026-11-15): Czech for speeds, travel-days, ground, weather, encounters, digging, walls-and-gates, roofs, siege-engines.
-- The English half stays; the Czech half is replaced.

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Jak daleko se dostanou lidé, zvířata a povozy: za tah, za hodinu a za den.

| Kdo | Za tah | Běh (celý tah) | km/h | km za den (cesta, normální tempo) |
|---|---|---|---|---|
| Trpaslík, hobit | 5 m | 10 m | 4 | 30 |
| Člověk, elf | 6 m | 12 m | 5 | 40 |
| Kroll | 7 m | 14 m | 5,5 | 45 |
| Volský povoz, těžký vůz | 4 m | — | 3 | 25 |
| Pony, mula, tažný kůň, válečný pes, vlk | 8 m | 16 m | 6,5 | 50 |
| Jezdecký kůň, válečný kůň | 12 m | 24 m | 10 | 75 |

## Poloviční a čtvrtinová rychlost {#half-and-quarter-speed}

Bláto, sníh, bažiny a další jsou v [Terénu](ground).

| Rychlost | Plná | Poloviční | Čtvrtinová |
|---|---|---|---|
| 4 m | 4 m | 2 m | 1 m |
| 5 m | 5 m | 2,5 m | 1 m |
| 6 m | 6 m | 3 m | 1,5 m |
| 7 m | 7 m | 3,5 m | 2 m |
| 8 m | 8 m | 4 m | 2 m |
| 12 m | 12 m | 6 m | 3 m |

:::note[Návrh]
Čísla ještě čekají na potvrzení.
:::$cs$
where slug = 'speeds';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Kilometry za den, ve kterém se jde 8 hodin. Řádek určuje **nejpomalejší cestovatel**. Další rychlosti jsou v [Rychlostech](speeds).

| Rychlost | Tempo | Cesta, rovina | Kopce, les | Hory, bažina | Krajní |
|---|---|---|---|---|---|
| 4 m | Pomalé | 17 | 13 | 8 | 4 |
| | Normální | 25 | 19 | 13 | 6 |
| | Rychlé | 33 | 25 | 17 | 8 |
| 5 m | Pomalé | 20 | 15 | 10 | 5 |
| | Normální | 30 | 23 | 15 | 8 |
| | Rychlé | 40 | 30 | 20 | 10 |
| 6 m | Pomalé | 27 | 20 | 13 | 7 |
| | Normální | 40 | 30 | 20 | 10 |
| | Rychlé | 53 | 40 | 27 | 13 |
| 7 m | Pomalé | 30 | 23 | 15 | 8 |
| | Normální | 45 | 34 | 23 | 11 |
| | Rychlé | 60 | 45 | 30 | 15 |
| 8 m | Pomalé | 33 | 25 | 17 | 8 |
| | Normální | 50 | 38 | 25 | 13 |
| | Rychlé | 67 | 50 | 33 | 17 |
| 12 m | Pomalé | 50 | 38 | 25 | 13 |
| | Normální | 75 | 56 | 38 | 19 |
| | Rychlé | 100 | 75 | 50 | 25 |

- **Co které tempo dovolí** (všímání si, plížení, sběr) je v [Cestování](travel#pace).

## Počasí a terén {#weather-and-ground}

Posouvají sloupec, ne číslo:

| Podmínky | Sloupec |
|---|---|
| Déšť | Beze změny |
| Liják, bláto na cestách, sníh po kotníky | O sloupec doprava |
| Vánice, sníh po kolena | O dva sloupce doprava |
| Za *Krajním* | Nejvýš 3 km, nebo zůstat na místě |

## Náklad, koně a dlouhé dny {#load-horses-and-long-days}

- **Přetížení:** o tempo pomaleji (z normálního je pomalé).
- **Těžce přetížení:** pomalé tempo a o sloupec doprava.
- **Cval:** družina, ve které jedou všichni na koni, může přidat hodinu cvalu, zhruba **+15 km** po cestě. Koně pak potřebují pomalý den nebo dlouhý odpočinek.
- **Náhradní koně:** s náhradním koněm pro každého jezdce a střídáním koní může družina cválat **druhou hodinu** (dalších +15 km) a koně pak pomalý den nepotřebují.
- **Nucený pochod:** každá hodina nad 8 je [cena za pokus](danger-level#cost-to-attempt) **1 :body[Tělo]**, vyčerpaná před začátkem hodiny. Komu :body[Tělo] dojde, zastaví, nebo si na pokračování vezme Jizvu.

:::note[Návrh]
Tohle zhruba nahrazuje násobky ze stránky [Cestování](travel). Kalkulačka násobky pořád používá.
:::$cs$
where slug = 'travel-days';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Co dělá terén v boji a jako který sloupec [Denního pochodu](travel-days) se počítá. Poloviční a čtvrtinové rychlosti jsou spočítané v [Rychlostech](speeds).

| Terén | V boji | Sloupec na cestě | Háček |
|---|---|---|---|
| Cesta, pevná louka, řídký les | Plná | Cesta | — |
| Zoraná pole, vysoká tráva, sníh po kotníky, brod po kolena | Poloviční | Kopce, les | — |
| Bláto, mokrá hlína | Poloviční | Kopce, les | Běh nebo boj: záchranný hod na Akrobacii, jinak pád k zemi |
| Led | Plná, jen chůzí | Cesta, jen pomalým tempem | Běh, boj nebo zásah: záchranný hod na Akrobacii, jinak pád k zemi |
| Sníh po kolena, písečné duny, sypká suť, prudký svah do kopce | Poloviční | Hory | Z kopce během: záchranný hod na Akrobacii, jinak pád |
| Hustý les, houští | Poloviční | Hory | Nedá se jet na koni |
| Prales, hora bez cesty | Poloviční | Krajní | Nedá se jet na koni ani s povozem |
| Hluboké bláto (po kolena a víc) | Čtvrtinová | Krajní | Povozy uváznou. Kdo skončí tah na místě: záchranný hod na Sílu, jinak uvízne (přijde o pohyb v příštím tahu) |
| Bažina, močál | Čtvrtinová | Krajní | Kdo skončí tah na místě: záchranný hod na Sílu, jinak zapadne hlouběji a je **Zadržený**. Kdo zapadne po hrudník, toho může vytáhnout jen někdo jiný |
| Voda po pás | Čtvrtinová | Krajní | Platí cena za pokus za zbroj |
| Plavání | Čtvrtinová | — | Platí cena za pokus za zbroj; v těžké zbroji jde člověk ke dnu |
| Lezení (lano, hrubá zeď) | Čtvrtinová | — | Záchranný hod (Akrobacie nebo Síla) při Ohrožení pádu |

:::note[Návrh]
Čísla ještě čekají na potvrzení.
:::$cs$
where slug = 'ground';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Každé ráno hoď **2k6** ve sloupci ročního období. **7** nechá včerejší počasí, takže mokrá a mrazivá období vydrží. Pravidla jsou v [Cestování](travel#weather).

| 2k6 | Jaro | Léto | Podzim | Zima |
|---|---|---|---|---|
| 2 | Pozdní mráz, plískanice | Bouřka | Vichřice | Vánice |
| 3–4 | Liják | Prudký liják | Liják | Sníh |
| 5–6 | Déšť | Zataženo, přeháňky | Mlha | Zataženo, mráz |
| 7 | Jako včera | Jako včera | Jako včera | Jako včera |
| 8–10 | Pěkně | Pěkně, teplo | Pěkně, ráno mlha | Jasno, tuhý mráz |
| 11 | Mírno, cesty osychají | Horko | Déšť | Obleva: bláto |
| 12 | Povodně z tání: brody nesjízdné | Vedro | První sníh | Krutý mráz |

## Co dělá {#what-it-does}

| Počasí | Sloupec na cestě | Vidění, všímání si, střelba | Pobyt venku |
|---|---|---|---|
| Pěkně, zataženo, přeháňky, déšť | — | — | — |
| Mlha | — | Za 20 m není nic vidět; hledání cesty **s nevýhodou** | — |
| Liják, plískanice | O jeden doprava | Všímání si zrakem nebo sluchem **s nevýhodou**; otevřený oheň zhasne | Venku špatný odpočinek |
| Bouřka, vichřice | O jeden doprava | Všímání si a útoky na dálku **s nevýhodou** | Venku špatný odpočinek; hledejte úkryt |
| Sníh | O jeden doprava od dalšího dne | — | Zima |
| Vánice | O dva doprava | Za 10 m není nic vidět; všímání si, hledání cesty a útoky na dálku **s nevýhodou** | Zima |
| Obleva, bláto | O jeden doprava | — | — |
| Povodně z tání | Brody na den nesjízdné | — | — |
| Horko | — | — | Těžká zbroj: pochod stojí 1 :body[Tělo] za pokus |
| Vedro | — | — | Pochod stojí 1 :body[Tělo] za pokus, 2 ve střední nebo těžké zbroji; v noci nic |
| Mráz, tuhý mráz | — | — | Zima |
| Krutý mráz | — | — | Zima, při Ohrožení 5 |

Co cestovatele stojí zima a horko, je v [Cestování](travel#weather).$cs$
where slug = 'weather';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Hoď **k6 dvakrát denně**: jednou na pochod, jednou na noc. Kdo si všimne první a co dělá překvapení, je v [Cestování](travel#encounters).

## Je tu nějaké? {#is-there-one}

| Kraj | Setkání na | Ohrožení hodů na cestě |
|---|---|---|
| **Hlídaná cesta**, osídlená krajina | 1, a jen v noci | 2 |
| **Divočina**: les, kopce, nehlídaná cesta | 1 | 3 |
| **Nebezpečné země**: válečná zóna, kraj netvorů, les psanců | 1–2 | 4 |

Tábořit ve vesnici nebo u hlídané cesty se počítá o řádek bezpečněji. Oheň v noci v divočině nebo horším kraji se počítá o řádek nebezpečněji, protože světlo je vidět daleko.

## Co to je? {#what-is-it}

| k6 | Setkání |
|---|---|
| 1 | **Znamení:** stopy, mrtvola, vypálený statek, čerstvý hrob. Háček, ne boj |
| 2 | **Pocestní:** kupci, poutníci, herold, uprchlíci |
| 3 | **Pánovi lidé:** hlídka, mýto, biřic, který někoho hledá |
| 4 | **Zvěř:** vlci, kanec, medvěd, cokoli tu žije |
| 5 | **Psanci:** lapkové, dezertéři, pytláci, kteří nechtějí svědky |
| 6 | **Něco horšího:** netvor nebo ďábel z toho kraje. V nebezpečných zemích hoď dvakrát a vezmi to horší |

## Jak daleko? {#how-far}

| Terén a světlo | Je vidět na |
|---|---|
| Otevřená krajina ve dne | 100 m |
| Les, kopce, déšť | 30 m |
| Hustý les, mlha, noc, vánice | 10 m |

## Jak se zachovají? {#how-do-they-react}

Volitelné, pro pocestné, pánovy lidi a psance, když nikdo neudeří první. Hoď 2k6; PJ může přičíst úroveň povolání vhodného mluvčího, nebo +1 za [známé prostředí](backgrounds), jakmile družina otevře pusu.

| 2k6 | Reakce |
|---|---|
| 2–4 | **Nepřátelská:** útok, oloupení nebo zatčení |
| 5–8 | **Opatrná:** mluví, ale ruce mají na zbraních |
| 9–12 | **Přátelská:** podělí se o novinky, obchodují, nabídnou místo u ohně |$cs$
where slug = 'encounters';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$## Ručně {#by-hand}

Jeden dělník, za hodinu, v m³. Hrob je zhruba 2 m³.

| Půda | Holýma rukama | Rýč a krumpáč | Štola, parta 4, za 8hodinovou směnu |
|---|---|---|---|
| Písek, sypká zemina | 0,1 | 1 | 4 m |
| Zahradní hlína, ornice | 0,1 | 0,75 | 3 m |
| Jíl, udusaná zemina | — | 0,5 | 2 m |
| Štěrk, kamenitá půda | — | 0,25 | 1 m |
| Zmrzlá půda | — | 0,1 (napřed ji rozmrazit ohněm) | 0,5 m |
| Měkká skála: křída, pískovec, tuf | — | 0,05 | 0,5 m |
| Tvrdá skála: žula, vápenec | — | — | 10 cm (30 cm s pálením ohněm) |

- **Štola** je 1 m široká a 2 m vysoká.
- **Přesčas:** každá hodina nad 8 je [cena za pokus](danger-level#cost-to-attempt) **1 :body[Tělo]**, vyčerpaná před začátkem hodiny. Komu :body[Tělo] dojde, přestane kopat, nebo si na pokračování vezme Jizvu.
- **Podkop pod hradbu:** viz [Obléhací stroje](siege-engines).

## Závaly {#cave-ins}

Hoď k6 **jednou za směnu** za každou štolu. Na uvedených číslech se zavalí.

| Půda | Bez výdřevy | S dřevěnou výdřevou |
|---|---|---|
| Písek, sypká zemina | 1–3 | 1 |
| Zahradní hlína, ornice, štěrk | 1–2 | — |
| Jíl, udusaná zemina, zmrzlá půda | 1 | — |
| Měkká skála | — | — |
| Tvrdá skála | — | — |

- **Výdřeva** chce dřevo: zhruba 1 Materiál na metr štoly.
- **Otřesy** (obléhací stroje bušící nahoře, protipodkop, oheň ve štole, zemětřesení): hoď hned a štola s výdřevou se zavalí na 1, ať je půda jakákoli.
- **Zasypaní uvnitř:** záchranný hod na Akrobacii při Ohrožení 4, aby se dostali ven. Neúspěch znamená Jizvu :body[Těla] z kostky pro hrozbu k6 a zasypání (**Zadržený**), dokud je někdo nevykope: zhruba 1 m³ kopání na osobu.

## Hrabající tvorové {#burrowing-creatures}

| Tvor | Hrabe za tah | Skrz skálu? | Nechá po sobě tunel? |
|---|---|---|---|
| Obří jezevec | 2 m | Ne | Ano, úzký |
| Zemní elementál | 6 m | Ano, i skrz opracovaný kámen | Ne |
| Hliněný nebo kamenný golem | 6 m | Ano, i skrz opracovaný kámen | Ne |

:::note[Návrh]
Čísla ještě čekají na potvrzení.
:::$cs$
where slug = 'digging';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Hradby a brány mají **hodnotu Těla** jako NPC, počítanou **po úsecích**: zhruba 3 m hradby, nebo jedna brána.

- **Pevnost:** zásah, který udělí **méně**, než je pevnost, neudělá nic; zásah, který jí dosáhne, udělí celé své zranění. Meč městskou hradbu nepromáčkne; trebuchet ano. Platí to stejně pro zbraně, obléhací stroje i [nástrahy](hazards).
- **Na 0** je úsek hradby **prolomený** (3 m mezera plná suti) a brána **rozbitá**.
- **Hoření:** hořící úsek ztrácí uvedené Tělo **každé kolo**, dokud někdo oheň neuhasí. Řetěz s vědry uhasí jeden úsek za kolo.
- **Rozebírání:** když je čas a nikdo nestřílí, dělníci nehází. Poslední sloupec říká, jak dlouho to trvá **partě 4** se sekerami, krumpáči a páčidly.

| Úsek | Tělo | Pevnost | Hoří | Parta 4 ho strhne za |
|---|---|---|---|---|
| Proutí a mazanice (chalupa) | 15 | 0 | 5 za kolo | 1 minutu |
| Prkenná stěna, obyčejné dveře | 20 | 5 | 5 za kolo | 5 minut |
| Železem kované dveře | 40 | 10 | 2 za kolo | 30 minut |
| Roubená stěna (srub, blokhauz) | 40 | 10 | 2 za kolo | 1 hodinu |
| Dřevěná palisáda | 50 | 10 | 5 za kolo (když je polita olejem) | 2 hodiny |
| Cihlová zeď | 60 | 10 | Ne | 4 hodiny |
| Kamenná zeď domu | 80 | 15 | Ne | 1 den |
| Městská brána (dub, kovaná) | 100 | 15 | 2 za kolo | 1 den |
| Padací mříž (železná) | 80 | 20 | Ne | 2 dny (nebo ji zvednout) |
| Zemní val | 300 | 20 | Ne | 3 dny kopání |
| Městská hradba (2 m kamene) | 400 | 20 | Ne | 4 dny |
| Hradní hradba, patro věže (3 m kamene) | 600 | 25 | Ne | 1 týden, nebo podkop |

- **Zemina pohltí kameny:** obléhací stroje a volně položené nálože dávají valu **poloviční** zranění. Berany, podkopy a upěchované nálože plné.
- **Patro věže na 0** se zřítí na patro pod ním. Každý uvnitř hází záchranný hod na Akrobacii při Ohrožení 4, jinak dostane Jizvu z kostky pro hrozbu k8.
- **Opravy:** noční práce party 10 lidí vrátí čtvrtinu Těla poškozeného úseku. Průlom je potřeba znovu postavit (dny a Materiál), ne opravit.

## Drobnosti {#small-things}

Mají pevnost a žádné Tělo: zásah, který jí dosáhne, je rozbije, jako [Jizva na věci](item-scars).

| Věc | Pevnost |
|---|---|
| Provaz, kožený řemen | 0 |
| Dřevěná závora, truhla | 5 |
| Železný zámek, řetěz, okovy, pant | 10 |
| Ocelová pokladnice | 15 |

:::note[Návrh]
Zbývá rozhodnout: Tělo po úsecích, nebo jedno Tělo pro celou hradbu či budovu.
:::$cs$
where slug = 'walls-and-gates';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Střecha má **hodnotu Těla** na kus zhruba 3 × 3 m. Pevnost a hoření fungují jako u [Hradeb a bran](walls-and-gates). Na 0 se kus **propadne**.

| Střecha | Tělo | Pevnost | Hoří | Na ty pod ní padá jako |
|---|---|---|---|---|
| Došky | 10 | 0 | 10 za kolo; zapálí ji zápalný šíp nebo pochodeň | k4 |
| Dřevěný šindel | 15 | 0 | 5 za kolo | k4 |
| Plochá hliněná střecha | 30 | 5 | Ne | k6 |
| Pálené tašky na trámech | 20 | 5 | 2 za kolo (trámy) | k6 |
| Břidlice na trámech | 25 | 5 | 2 za kolo (trámy) | k6 |
| Kamenná klenba | 100 | 15 | Ne | k10 |

- **Ti pod ní** házejí záchranný hod na Akrobacii, aby uskočili.
  - Hráčská postava, která neuspěje, dostane Jizvu z kostky pro hrozbu.
  - NPC si odečte hod × 3 ze své hodnoty Těla.

:::note[Návrh]
Zranění NPC ještě čeká na potvrzení.
:::$cs$
where slug = 'roofs';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Obléhací stroje bourají [hradby a brány](walls-and-gates) a [střechy](roofs). Dostřely jsou převedené z 5E v poměru 5 stop = 1 m.

| Stroj | Zranění (průměr) | Dostřel | Obsluha | Výstřely |
|---|---|---|---|---|
| Balista | 3k10 (16) | 24 / 96 m | 3 | 1 za kolo |
| Mangonel | 5k10 (27) | 40 / 160 m, ne blíž než 12 m | 5 | 1 za 3 kola; 10 za hodinu |
| Trebuchet | 8k10 (44) | 60 / 240 m, ne blíž než 12 m | 8 | 4 za hodinu |
| Beranidlo (zastřešené) | 8k8 (36) | Dotyk | 10 | 1 za kolo |
| Hrnce s ohněm, hořící otepi | Zapálí dřevo a došky | Jako stroj, který je hází | — | — |
| Výbušná nálož | Její síla v k6; upěchovaná o 2 kostky víc. Zapálí všechno, co hoří | Hozená 4 / 12 m, nebo položená | 1 | Jednou |
| Hotový podkop | Úsek nad ním klesne na 0; vedlejší přijde o polovinu | — | — | — |

- **Trefit hradbu** je zkouška: 2k6 + bonus obsluhy, 9 nebo víc. Netrefy jsou schválně časté: trebuchet, který trefí polovinu výstřelů, strhne úsek hradní hradby zhruba za 7 hodin.
- **Balista** je jediný stroj určený i na lidi. Proti NPC nebo jednotce použij její zranění jako u zbraně. Její šipky **ignorují zbroj**.
- **Podkopy** se kopou rychlostmi z [Kopání a těžby](digging). Odpálený postaru, spálením výztuh, se hradba zřítí do rána a kouř ho prozradí. Odpálený upěchovanou náloží, jejíž hod dosáhne pevnosti, se zřítí hned.

## Nálože {#charges}

Nálož je **upěchovaná**, když je natěsnaná ke svému cíli nebo pod něj: zavěšená na bráně, uložená na konci podkopu. Hází o 2 kostky víc. Viz [Pasti a nástrahy](hazards).

Upěchované nálože potřebné ke stržení úseku, při průměrných hodech. *Zřídka* znamená, že průměr na pevnost nestačí, takže projde jen šťastná nálož.

| Úsek (Tělo, pevnost) | Síla 3 (5k6 ≈ 17) | Síla 5 (7k6 ≈ 24) | Síla 7 (9k6 ≈ 31) |
|---|---|---|---|
| Železem kované dveře (40, 10) | 3 | 2 | 2 |
| Městská brána (100, 15) | 6 | 5 | 4 |
| Padací mříž (80, 20) | Zřídka | 4 | 3 |
| Městská hradba (400, 20) | Zřídka | 17 | 13 |
| Hradní hradba (600, 25) | Zřídka | Zřídka | 20 |

Alchymista otevírá dveře a brány. Hradby padají stroji a podkopy.

Útok na hrad a jeho vyhladovění jsou v [Obléhání](sieges).

:::note[Návrh]
Čísla ještě čekají na potvrzení.
:::$cs$
where slug = 'siege-engines';

update rulebook_pages set title = v.t from (values
  ('encounters', 'Random encounters |cs| Náhodná setkání'),
  ('speeds', 'Speeds |cs| Rychlosti'),
  ('ground', 'Ground |cs| Terén'),
  ('walls-and-gates', 'Walls and gates |cs| Hradby a brány'),
  ('siege-engines', 'Siege engines |cs| Obléhací stroje'),
  ('digging', 'Digging and mining |cs| Kopání a těžba'),
  ('travel-days', 'A day''s travel |cs| Denní pochod'),
  ('roofs', 'Roofs |cs| Střechy'),
  ('weather', 'Weather |cs| Počasí')
) as v(s, t) where slug = v.s;

update rulebook_chapters set title = 'Useful tables |cs| Užitečné tabulky' where title = 'Useful tables';
