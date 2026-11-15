-- Rulebook (2026-11-15): Czech for combat, manoeuvres, defending, conditions, npcs, ritual-items.
-- The English half stays; the Czech half is replaced.

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Boj je způsob, jak stůl vyřeší rvačku, ve které se střetne víc postav a výsledek není jistý. Probíhá v **kolech**, v pořadí podle [hodu na iniciativu](dice#initiative).

## Tvůj tah {#your-turn}

- Během svého tahu máš běžně **jednu akci** a **jeden pohyb**.
- Některé schopnosti k tomu přidají bonusovou akci nebo reakci.

### Akce {#actions}
Akce je ta část tahu, kdy opravdu něco děláš.

| Akce | Co dělá |
|---|---|
| Útok | Zaútoč na jeden cíl v dosahu zbraní, kterou držíš. Na víc cílů potřebuješ [manévr Rozsáhle](manoeuvres). |
| Seslání kouzla | Viz [Magie](magic). |
| Obrana | Odpověz na útok [střetem](defending). Stojí tě to akci, pokud nepoužiješ manévr Obrana. |
| Odpoutání | Tento tah se vzdálíš, aniž by kdokoli dostal volný útok. |
| Cokoli jiného | Použij předmět, pomoz kamarádovi, zatáhni za páku. Co je hod a co se prostě stane, rozhodne PJ. |

### Reakce {#reactions}
Reakce jsou situace, kdy můžeš jednat mimo svůj tah. Obvykle je něco spustí. Základně je jen jedna, kterou se sám rozhodneš použít: obrana. Volný útok je jiný, ten ti dá spouštěč. Perky povolání ti můžou přidat další. Bránit se můžeš za kolo tolikrát, kolikrát to zaplatíš: každý [manévr Obrana](manoeuvres) stojí bod a štít ti jednu Obranu za kolo dá zdarma.

| Reakce | Co dělá | Spouštěč |
|---|---|---|
| Obrana | Odpověz na útok [střetem](defending). Tohle je [manévr Obrana](manoeuvres). | Někdo na tebe útočí |
| Volný útok | Jeden útok na blízko proti němu, jednou za kolo. | Nepřítel opouští tvůj dosah |

### Bonusová akce {#bonus-action}
Bonusová akce je něco navíc, co můžeš během tahu udělat. Dávají ji perky povolání a často ti dovolí dát cíli ještě nějaké zranění navíc.

### Pohyb {#movement}
Pohyb znamená, že se tvoje postava může před akcí a/nebo po ní přesunout po bojišti. Pohyb můžeš kolem akce rozdělit: přiskoč, bodni, ustup.

V praxi to může znamenat, že běžíš zatáhnout za páku, dostaneš se k nepříteli nebo se schováš do krytu.

Moje pravidla používají **metry**, protože McDonaldsky nemluvím, že jo. Staré hodnoty z 5E se převádějí jednoduše: 5 stop = 1 m.

| 5E | Moje pravidla |
|---|---|
| 5 stop (vedle, „do 5 stop“) | 1 m |
| Rychlost chůze 30 stop | 6 m |
| Vrh 20/60 stop | 4/12 m |
| Vrh 30/120 stop (oštěp) | 6/24 m |

## Hráči nemají životy {#no-hit-points-for-players}

Hráčské postavy nemají životy. Utrácejí zdroje, aby se vyhnuly špatným výsledkům, a čemu se nevyhnou, z toho je [Jizva](exhaustion#scars). [NPC](npcs) mají místo toho hodnoty :body, :soul a :charisma a přicházejí o ně [hody na zranění](dice#damage).$cs$
where slug = 'combat';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Manévry jsou jediná věc v pravidlech, která se napoprvé zdá neintuitivní, ale rychle se stane přirozenou součástí hraní, když je hráči používají.

Manévry jsou triky, které nakloní akci ve tvůj prospěch.
**Důležité je, že se dají koupit a hráč by si je měl koupit, kdykoli chce**. Použití stojí **1 bod řídícího zdroje**, ale spoustu jich samozřejmě dávají perky zdarma a štít dává jednou za kolo Obranu zdarma.

Máme 5 útočných manévrů a 1 obranný.

::::cards{cols="3"}
:::card[Přesně]{image="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/c7e8acea-a082-4818-bfca-316163c8c021.webp"}
Manévr Přesně znamená, že si tvoje postava dá extra pozor, aby akci provedla precizně.

**Akci provádíš s výhodou.**
:::
:::card[Mocně]{image="/img/rulebook/challenge.webp"}
Manévr Mocně znamená, že tvoje postava do útoku vloží velkou sílu.

**Když dáváš zranění, hodíš kostkou zranění navíc. Když cíl odvrací pomocí zdrojů, musí vyčerpat o jeden víc.**
:::
:::card[Lstivě]{image="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/dad9ab4a-0acf-42e4-875b-cfbf01964cc9.webp"}
Útok tvé postavy je proveden chytře a skrývá její pravý úmysl.

**Jakmile útok zasáhne, koupíš si tímhle manévrem bonusovou akci: cíl je sražen k zemi, chycen nebo odstrčen libovolným směrem.**
:::
::::

::::cards{cols="3"}
:::card[Rychle]{image="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/e6f3d75e-77dc-4e75-8dc2-47b1b94c2ce8.webp"}
Tvoje postava je připravená a ve střehu, takže jedná rychle a účinně.

**Na iniciativu házíš s výhodou.**
:::
:::card[Rozsáhle]{image="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/ed7c4926-c041-42c9-b2a0-6a4060abb769.webp"}
Běžně může každá tvoje akce zasáhnout jen jednoho tvora nebo jednu věc ve scéně. Manévr Rozsáhle ti dovolí rozšířit účinek akce na víc cílů ve scéně.
:::
:::card[Obrana]{image="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/9f372b78-25eb-4329-8de9-eaf4313447ca.webp"}
V boji máš za tah jen jednu akci. Může se stát, že se potřebuješ bránit, když už ji máš utracenou, nebo si ji chceš nechat na útok.

V tu chvíli ti manévr **Obrana** dovolí bránit se reakcí, místo abys utratil akci.
:::
::::

| Manévr | Účinek | Ohlašuje se |
|---|---|---|
| **Přesně** | Akci házíš s [výhodou](advantage). | Před hodem |
| **Mocně** | Hůř se odvrací, nebo víc zraní. Viz [Mocně](#mighty). | Před hodem |
| **Lstivě** | Cíl je sražen k zemi, nebo v boji zblízka chycen či odstrčen libovolným směrem. | Po zásahu |
| **Rychle** | Iniciativu házíš s výhodou. | Před hodem na iniciativu |
| **Obrana** | [Obranný hod](defending) bez utracení akce. | Když tě někdo zaměří a akci už nemáš |
| **Rozsáhle** | Akce zasáhne víc cílů místo jednoho. | Při popisu akce |


:::note[Jeden manévr na akci]

- Akce (nebo tah v boji) může mít jen **jeden manévr**.
- Manévry zdarma z perků, štítů a stavů se do tohoto limitu POČÍTAJÍ.
- **Rychle** se počítá, protože ovlivňuje akci tvého tahu: když ho použiješ, akce toho tahu žádný jiný manévr nedostane.
- **Obrana** se nepočítá: je to placená reakce, ne součást tvé akce.
- Mocně zdarma z [kritického zásahu](dice#damage) se nepočítá taky: přichází navíc.
:::

### Manévry zdarma {#free-manoeuvres}
Spousta perků ti dává manévr zdarma u určité akce: obvykle výhodu, tedy Přesně; někdy jiný, který jmenují (*Mám tě* dává Lstivě), nebo silný manévr u všech dovedností povolání. Je to bonus, který můžeš použít kdykoli, když děláš akci z oblasti, které se perk týká.

:::note[Výhoda je manévr]
Když perk říká *máš výhodu* u nějaké akce, znamená to Přesně zdarma, nic jiného. Perk, který pomáhá s iniciativou, říká Rychle.
:::

**Zbraně manévry zdarma nedávají.** I s mečem v ruce za Přesně platíš. Manévry zdarma se zbraní dávají perky.

Jedinou výjimkou je **štít**: dává **Obranu zdarma jednou za kolo**.

## Silné a kruté manévry {#strong-and-cruel-manoeuvres}
Všechny manévry mají i silnější verze, se kterými se potkáš u bossů nebo na vyšších úrovních povolání.

**Silné** manévry (poznáš je podle slova *velmi*, jako velmi přesně...) jsou vylepšení prvního stupně a značí mistrovskou zběhlost. Obvykle přicházejí z **perků povolání**, každý svázaný s dovednostmi toho povolání.

**Kruté** manévry (poznáš je podle slova *krutě*, jako krutě přesně...) jsou vylepšení druhého stupně a značí krutou zběhlost. Obvykle přicházejí z **perků mocných povolání**.

NPC dostávají obojí jako **zvláštní schopnosti** ve svých statistikách.

| Manévr | Základní | Silný | Krutý |
|---|---|---|---|
| **Přesně** | Výhoda u hodu na akci, placená před hodem | Kostku navíc z výhody můžeš hodit, až všichni hodili a vidíš, že ji potřebuješ | Výhoda u hodu na akci a soupeř přehodí svou nejvyšší kostku |
| **Mocně**, *tady zjednodušeně; viz [oddíl níže](#mighty)* | Zranění nebo vyčerpání vzroste o 1 | Zranění nebo vyčerpání vzroste o 2 | Zranění nebo vyčerpání vzroste o 2 a k tomu další zraňující účinky |
| **Lstivě** | Cíl je bonusovou akcí sražen k zemi, chycen nebo odstrčen libovolným směrem | Jako Lstivě, a ještě víc. **NPC:** bonusovou akcí mu můžeš dát i 1d4 zranění. **Hráčská postava:** její Ohrožení navíc vzroste o 2, dokud účinek trvá (dokud nevstane, nevyprostí se nebo nezkrátí vzdálenost) | — |
| **Rychle** | Výhoda u hodu na iniciativu, placená před hodem | Kostku navíc z výhody můžeš hodit, až všichni hodili a vidíš, že ji potřebuješ | — |
| **Rozsáhle** | Můžeš zasáhnout víc cílů nebo větší plochu | — | Můžeš zasáhnout velkou oblast až o velikosti vesnice |



## Seznam manévrů {#list-o-manoeuvres}

Když si nebudeš jistý, co který manévr dělá, podívej se do seznamu níže.

### Přesně {#precise}

Když si tvoje postava dá na čas s mířením, předvede klamný výpad před skutečnou ranou nebo zámek dvakrát zkontroluje, než otočí paklíčem, jedná **Přesně**: hod má [výhodu](advantage). U zkoušky hodíš 3k6 a necháš si dvě nejlepší; ve střetu 2k20 a necháš si vyšší. Ohlašuješ ho před hodem.

Jakákoli výhoda u akce už *je* Přesně, ať pochází z perku, z Požehnání, nebo z cíle ležícího na zemi. Zaplatit si druhé nic nezmění a to zdarma i tak zabírá jediný manévr akce.

:::note[Nevýhoda vyhrává]
Když má hod jakoukoli nevýhodu, Přesně nedělá nic, ať placené, nebo zdarma. Na hod s nevýhodou za něj neplať.
:::

:::example[Míření]{image="/img/rulebook/michal.webp"}
Michal (Bojovník 2) se šermuje s banditou, který ví, co dělá. Zaplatí 1 :body[Tělo] za Přesně a hodí :roll[d20 (4) 15]: 15 + 2 = 17 proti banditovým 12. Bez druhé kostky by to bylo 4 + 2 a odvracet by musel Michal.
:::

**Velmi přesně** ti dovolí hodit třetí kostkou, až všichni hodili, když vidíš, že ji potřebuješ. **Krutě přesně** navíc donutí soupeře přehodit jeho nejvyšší kostku.

### Mocně {#mighty}

**Mocně** do akce vloží celou tvou váhu. Proti NPC dá zásah **kostku zranění navíc**; u :soul[Duše] nebo :charisma[Vlivu] je v sázce o 1 víc. Proti hráčské postavě je zásah těžší setřást: odvrátit ho stojí **o 1 víc**, a když ho neodvrátí, vyčerpá k Jizvě ještě **k4 bodů** ze zdroje, který Jizva zasáhla.

Ohlašuješ ho před hodem. Netrefa tě nestojí nic víc než bod, který jsi zaplatil.

| Cíl | Mocně | Velmi mocně | Krutě mocně |
|---|---|---|---|
| **Hráčská postava odvrací neúspěch** | Vyčerpání stojí +1 | Vyčerpání stojí +2 | Nejdřív dostane Jizvu 1. stupně, pak zaplatí vyčerpání |
| **Hráčská postava neodvrací neúspěch** | K Jizvě vyčerpá ještě k4 bodů téhož zdroje (zastaví se na 0) | Stupeň Jizvy +1 | Stupeň Jizvy +2 |
| **NPC, :body** | +1 kostka zranění | +2 kostky zranění | Když se brání, dostane nejdřív jednu kostku zranění, než hodí; pak v každém případě +2 kostky zranění |
| **NPC, :soul nebo :charisma** | +1 v sázce | +2 v sázce | Když se brání, dostane nejdřív zranění ve výši úrovně povolání útočníka; pak v každém případě +2 v sázce |

- Zranění před obranou proti Krutě mocně je **jedna kostka** zranění útoku bez přičtené úrovně povolání, nebo **úroveň povolání útočníka** u :soul[Duše] a :charisma[Vlivu]. Sudba ho nezastaví.

:::note[Mocně zdarma]
[Kritický zásah](dice#damage) ti dá Mocně zdarma po hodu, navíc k jedinému manévru akce. Bod, který jsi za Mocně u toho hodu už zaplatil, zůstává utracený.
:::

:::example[Skrz plát]{image="/img/rulebook/michal.webp"}
Michalův dlouhý meč zasáhne rytíře v plátové zbroji (stupeň zbroje 3). Zaplatil 1 :body[Tělo] za Mocně, takže hází dvěma k8: :roll[d8 6] :roll[d8 3], + 2 za úroveň Bojovníka, je 11, a 8 projde zbrojí. S jednou kostkou by to bylo 8 a prošlo by jen 5.
:::

### Lstivě {#cunning}

**Lstivě** je ta špinavá část boje: háček za koleno, rameno do žeber. Jakmile tvůj útok **zasáhne**, zaplatíš 1 bod a dostaneš proti cíli bonusovou akci: **srazíš ho k zemi**, nebo ho v boji zblízka **chytíš** či **odstrčíš** libovolným směrem. Vržený nůž nebo šíp někoho porazit může, ale chytit ani strčit ho nedokáže.

Protože ho ohlašuješ až po zásahu, platíš jen tehdy, když víš, že se to vyplatí. Shodit strážného ze schodů nebo z mostu do řeky je často víc než zranění.

:::note[Prostoduchý]
Postava ve stavu Prostoduchý nemůže použít Lstivě a každý, kdo ji zasáhne, dostane Lstivě zdarma.
:::

**Velmi lstivě** udělá tohle všechno a ještě víc. Proti NPC v rámci bonusové akce dáš i 1d4 zranění; proti hráčské postavě jí vzroste Ohrožení o 2, dokud účinek trvá, tedy dokud nevstane, nevyprostí se nebo nezkrátí vzdálenost.

### Rychle {#quick}

**Rychle** znamená být připravený dřív než ostatní: ruka už na jílci, první si všimneš, že strážní sahají po kušách. Ohlašuješ ho před hodem na iniciativu a iniciativu házíš s výhodou (2k20, necháš si vyšší).

Rychle stojí vždycky **1 :soul[Duši]**. Když házíš na iniciativu, ještě sis nevybral akci, takže není řídící zdroj, ze kterého bys platil: chopit se okamžiku je věc mysli.

Na iniciativu se hází jednou za boj, takže Rychle se počítá jen na začátku a zabírá jediný manévr tvého **prvního tahu**: akce toho tahu už jiný nedostane.

:::note[Pomalý]
Cokoli, co ti dává nevýhodu na iniciativu (Oslepený, Ohlušený, Vystrašený, Omráčený nebo Pomalý), Rychle zablokuje.
:::

**Velmi rychle** ti dovolí hodit třetí kostkou, až všichni hodili, když vidíš, že ji potřebuješ.

### Obrana {#defense}

[Obranný hod](defending) tě vždycky stojí akci. Když na tebe někdo zaútočí před tvým tahem, obrana spotřebuje akci, kterou jsi chtěl udělat; jakmile je akce utracená, bránit se vůbec nemůžeš.

**Obrana** to obejde. Zaplatíš 1 bod, když tě někdo zaměří, ubráníš se reakcí a akci si necháš, nebo se ubráníš i poté, co jsi ji utratil. Můžeš ji použít za kolo tolikrát, kolikrát ji zaplatíš, a **štít** ti jednu za kolo dá zdarma. Do limitu jednoho manévru se nepočítá, protože není součástí tvé akce.

Obrana funguje jen proti tomu, co míří **na tebe**, ne na tvé spojence, a nemá silnou verzi. Platí ji i sesilatel, který drží kouzlo se [soustředěním](spell-durations), protože jeho akce už padla na soustředění.

:::example[Tři goblini, dva body]{image="/img/rulebook/michal.webp"}
Dva goblini se na Michala vrhnou naráz. Zaplatí 1 :body[Tělo] za Rozsáhle a máchne po obou.

Pak na něj zezadu skočí třetí, když už akci nemá, takže zaplatí další 1 :body[Tělo] za Obranu a stejně ho odrazí. Tři goblini, dva body, jeden velmi unavený Bojovník.
:::

### Rozsáhle {#widespread}

Bez **Rozsáhle** zasáhne akce **jeden cíl**. Každá akce proti víc cílům (máchnutí po dvou goblinech, výhrůžka zakřičená na celou hlídku) ho potřebuje.

- Stojí 1 bod bez ohledu na počet cílů a účinek je **pro všechny stejný**.
- Ohlašuješ ho při popisu akce.
- Nedá se použít v reakci.

**Magie** funguje dvojím způsobem. Kouzlo s neurčitým účinkem, třeba druidovo ovládání vody, působí na jednu věc do velikosti chaloupky; Rozsáhle ho posune o stupeň výš, na víc cílů nebo na velikost statku. Kouzlo s **určitým účinkem**, jako Ohnivá koule nebo Hořící ruce, má plochu zahrnutou v aktivační ceně a Rozsáhle ji nezmění: ohnivou kouli zvětšit nejde.

## NPC {#npcs}

NPC mají manévry ze svých statistik (a Obranu ze štítu) zdarma. Jakýkoli jiný manévr je stojí 1 bod hodnoty. Viz [NPC](npcs#manoeuvres).$cs$
where slug = 'manoeuvres';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$::image{src="/img/rulebook/defense.webp" alt="Bojovník zvedá štít" layout="side"}

Když se na tvou postavu zaměří útok, kouzlo nebo jakýkoli jiný nepřátelský účinek, může na něj odpovědět **obranným hodem**. Je to [střet](dice#challenge): hodíš k20 plus úroveň povolání, jehož dovednost odpovídá tomu, jak se bráníš (kryt mečem je Bojovník, uskočení Kejklíř), a útočník hodí k20 plus svou. Vyšší výsledek vyhrává a remíza patří tobě jako obránci.

::formula[tvoje k20 + úroveň povolání proti jeho k20 + úroveň povolání]

Obranný hod **tě vždycky stojí akci**. Když na tebe někdo zaútočí před tvým tahem a ty se bráníš, utratil jsi akci, kterou jsi chtěl udělat. Abys ji neztratil, zaplatíš [manévr Obrana](manoeuvres), díky kterému se bráníš bez utracení akce; štít ti jednu takovou dá každé kolo zdarma. Druhá možnost je nebránit se vůbec a nechat útok přijít bez obrany.

Prohraný obranný hod je neúspěch jako každý jiný. Odvrátíš ho tím, že vyčerpáš ze zdroje dovednosti tolik bodů, kolik je [Ohrožení](danger-level), nebo tím, že si vezmeš [Jizvu](exhaustion#scars).

:::example[Akce zůstane]{image="/img/rulebook/michal.webp"}
Bandita se na Michala (Bojovník 4) vrhne dřív, než Michal přijde na tah. Michal nemá štít a akci si chce nechat na vlastní útok, takže zaplatí 1 :body[Tělo] za manévr Obrana a kryje: :roll[d20 9] + 4 = 13 proti banditovým 15. Prohraje.

Michal nemá zbroj a Ohrožení je 3, takže vyčerpá ještě 3 :body[Těla], aby zásah odvrátil, a na poslední chvíli se vykroutí. Když přijde jeho tah, akci pořád má a zaútočí.
:::

## Útoky bez obrany {#undefended-attacks}

Když se cíl nebrání, nebo nemůže, nikdo proti útočníkovi nehází. Útočník si místo toho hodí [zkoušku](dice#skill-check): 2k6 plus svůj bonus, a útok zasáhne na 9 a víc. Zásah, který takhle projde, **se nedá odvrátit** vyčerpáním, protože cíl neházel žádný hod, který by se dal zachránit. Útočník hodí na zranění a cíl dostane Jizvu.

## Kryt {#cover}

Zeď, sud, kmen stromu nebo převrácený stůl mezi tebou a útočníkem tě dělá hůř zasažitelným. Kryt se počítá proti útokům a účinkům, které přicházejí z jeho druhé strany: šípům, šipkám, vrhacím zbraním a kouzlům, a taky útokům na blízko, třeba meči, kterým někdo máchne přes nízkou zídku. Funguje stejně pro hráčské postavy i NPC a nemusíš se bránit, abys ho měl. Zeď tam stojí, ať akci utratíš, nebo ne.

| Kryt | Jak vypadá | Útok | Proti zásahu |
|---|---|---|---|
| **Poloviční** | Půlka těla schovaná: nízká zídka, sud, vůz, jiný bojovník v cestě | S nevýhodou | — |
| **Tříčtvrteční** | Vykukuje jen kousek: střílna, roh, tlustý kmen | S nevýhodou | Stupeň zbroje +1 |
| **Úplný** | Nevykukuje nic: zavřené dveře, celá zeď | Nemůže tě zaměřit | — |

Nevýhoda vždycky vyhrává, takže útočník si nemůže zaplatit Přesně, aby kryt obešel. Stupeň zbroje +1 za tříčtvrtečním krytem funguje jako zbroj, kterou nosíš: snižuje stupeň Jizvy i cenu odvrácení zásahu a odečítá se od zranění NPC.

**Plošný účinek** se kolem krytu zamířit nedá, takže proti němu kryt funguje obráceně: ohnivá koule nebo bomba, která tě zastihne za polovičním nebo tříčtvrtečním krytem, ti dá obranný nebo záchranný hod **s výhodou**, abys unikl.

**Přenosný kryt** dávají velké štíty. **Pavéza** nesená na paži je štít jako každý jiný, s Obranou zdarma jednou za kolo; postavená na zem dává místo toho **poloviční kryt**. Postavit ji nebo zvednout stojí akci, s válečníkovou *Baštou* bonusovou akci. **Mantlet**, stěna z prken příliš velká na nošení, dává **tříčtvrteční kryt** jednomu nebo dvěma lidem za ní a pojízdný **obléhací mantlet** dává zepředu **úplný kryt** čtyřčlenné osádce.

**Úplný kryt** znamená, že útočník nemá na co mířit. Útoky na dálku jakéhokoli druhu tě nezasáhnou a ani kouzlo mířené na tebe, protože tě sesilatel nevidí. Zasáhnout tě můžou jen dvě věci. **Plošný účinek** tě zasáhne, když se jeho plocha dostane kolem krytu: ohnivá koule, která vybuchne na tvé straně zdi, ano, ale výbuch na druhé straně pevné zdi ne, a co kryt zadrží, rozhodne PJ. **Kouzlo mířené na tebe přes symbolický dotek** zrak vůbec nepotřebuje, takže ho kryt nezastaví.

:::example[Za sudy]{image="/img/rulebook/michal.webp"}
Bandita s kuší (+2) střílí na Michala přes dvůr. Michal skočil za hromadu sudů, která ho z půlky schovává, a akci si chce nechat, takže se nebrání. Výstřel je útok bez obrany, s nevýhodou kvůli krytu: bandita hodí :roll[d6 (6) 4 2] a nechá si dvě nejhorší, 4 + 2 + 2 = 8. Šipka se zaryje do sudu. Bez sudů by šestka se čtyřkou zasáhly.

Šipky létají dál, takže PJ nechá Michalovo Ohrožení, kde bylo. Michal se doplazí dál za studnu, kde z něj nic nevykukuje, a bandita na něj vůbec nemůže střílet, dokud neoběhne dvůr pro volný výhled.
:::

:::note[Kryt a Ohrožení]
Kryt tvoje Ohrožení sám od sebe nesníží: tuhle práci už dělá nevýhoda. Ohrožení je to, jak moc ti buší srdce. Když se v krytu situace opravdu uklidní (lučištníci tě ztratí z očí, máš chvilku vydechnout), PJ ho může snížit. Pod deštěm šípů zůstane stejné, nebo ještě vzroste.
:::

:::note[Střelba přes zeď]
Některé perky úplný kryt obejdou, třeba lovcův *Odstřelovač*: vysoký oblouk přes zeď na cíl, který není vidět. Bez takového perku se přes úplný kryt střílet nedá.
:::

## Jak zlý je zásah {#how-bad-a-hit-is}

NPC proti hráčským postavám nehází na zranění zbraní. Když zásah NPC projde a hráč ho neodvrátí, NPC hodí svou **kostkou hrozby**, která odpovídá tomu, jak je nebezpečné, a výsledek mínus stupeň zbroje cíle je stupeň Jizvy.

| Útočník | Kostka hrozby |
|---|---|
| Slabý: toulavý pes, opilec s lahví | k4 |
| Běžný: bandita, voják, vlk | k6 |
| Velký: zlobr, troll | k8 a víc |
| Obrovský: drak | Cokoli, co si podle PJ drak zaslouží |

::formula[stupeň Jizvy = kostka hrozby − stupeň zbroje]

Když zbroj stáhne stupeň na 0 nebo níž, zásah je **pohlcen** a žádnou Jizvu nezanechá. PJ, který chce, aby zásah i tak něco stál, může dát Jizvu zbroji, a jeden její kus se rozbije (viz [Jizvy předmětů](item-scars)).

Zbroj pomáhá ještě předtím, než dojde na Jizvu. Když vyčerpáváš :body[Tělo], abys zásah odvrátil, stupeň zbroje se odečte od ceny, i když odvrácení vždycky stojí aspoň 1.

| Při Ohrožení 3 | Bez zbroje | Lehká | Střední | Těžká |
|---|---|---|---|---|
| Odvrácení zásahu stojí | 3 :body | 2 :body | 1 :body | 1 :body |

:::example[Seknutí přes žebra]{image="/img/rulebook/michal.webp"}
Michal je v půlce žebříku a nemůže se bránit, takže bandita hodí zkoušku, zasáhne a hodí kostkou hrozby: :roll[d6 5]. Michal má prošívanici, kroužkovou košili a železný klobouk, stupeň zbroje 2, takže dostane Jizvu :body[Těla] 3. stupně, hlubokou ránu přes žebra. V těžké zbroji (stupeň 3) by to byla Jizva 2. stupně.
:::

Tvoje vlastní zásahy proti NPC fungují jinak: dávají zranění zbraní do hodnot NPC. Viz [NPC](npcs).

## Odolnosti a slabiny {#resistances-and-weaknesses}

Tvor může být vůči nějakému druhu zranění odolný nebo slabý. Proti NPC to mění zranění, které dostane. Hráčská postava zranění nedostává, takže u ní to mění cenu odvrácení.

| Modifikátor | Zranění | Cena odvrácení |
|---|---|---|
| Slabina | Dvojnásobné | Dvojnásobná |
| Bonus slabiny | — | Zvýšená o bonus |
| Odolnost | Poloviční | Poloviční |
| Bonus odolnosti | — | Snížená o bonus |
| Imunita | Žádné | Není co odvracet |

:::note[Zaokrouhlování]
Při půlení se vždycky zaokrouhluje dolů, takže újma je to menší číslo. Odvrácení stojí pořád aspoň 1.
:::

**Druhy zranění:** oheň, led, blesk, jed, psychické, nekrotické, zářivé, silové, hromové, kyselina, bodné, sečné a drtivé.

:::note[Staré texty z 5E]
Kde starý text z 5E mluví o „záchranném hodu“ proti útočníkovi nebo sesilateli, čti to jako obranný hod: „automaticky neuspěje v záchranných hodech“ znamená, že cíl automaticky prohrává obranné hody. Proti prostředí (past, jed, propadající se podlaha) to znamená náš [záchranný hod](dice#saving-throw), což je zkouška.
:::$cs$
where slug = 'defending';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Stavy mění, co postava může dělat. Přicházejí z kouzel, jedů, pádu do bláta nebo strčení do zad a většina z nich funguje přes [manévry](manoeuvres) a [nevýhodu](advantage): útoky na oslepený nebo zadržený cíl jsou Přesně, zatímco jeho vlastní hody mají nevýhodu.

Stav trvá **tak dlouho jako jeho příčina**: po dobu trvání kouzla, jedu, nebo dokud neskončí situace, která ho způsobila. Kdy to je, rozhodne PJ.

:::note[Přesně zdarma ti nikdo nevnucuje]
Když stav udělá útok Přesně, je to jediný manévr akce. Místo něj můžeš použít jiný manévr, ale musíš ho zaplatit, pokud ti ho něco jiného nedává zdarma (třeba Mocně zdarma z perku).
:::

:::note[Nevýhoda vždycky vyhrává]
Nevýhodu ze stavu nezruší žádná výhoda, placená ani zdarma. Viz [Výhoda](advantage).
:::

::::cards
:::card[Oslepený]{#blinded}
Nevidí a automaticky neuspěje v každé zkoušce, která potřebuje zrak. Útoky na něj jsou Přesně; jeho útoky a iniciativa mají nevýhodu.
:::

:::card[Okouzlený]{#charmed}
Nemůže na toho, kdo ho okouzlil, zaútočit ani ho zasáhnout škodlivou schopností nebo magií. Společenské zkoušky okouzlovatele proti němu jsou Přesně.
:::

:::card[Ohlušený]{#deafened}
Neslyší a automaticky neuspěje v každé zkoušce, která potřebuje sluch. Jeho útoky a iniciativa mají nevýhodu.
:::

:::card[Vystrašený]{#frightened}
Dokud vidí zdroj svého strachu: nevýhoda u zkoušek, útoků i iniciativy a nemůže se k němu dobrovolně přiblížit.
:::

:::card[Chycený]{#grappled}
Rychlost je 0. Na místě jednat může. Končí, když je ten, kdo ho drží, neschopný, pustí ho, nebo je cíl odsunut mimo dosah.
:::

:::card[Neschopný]{#incapacitated}
Nemůže dělat akce ani reakce. Hlavně stavební kámen stavů níže.
:::

:::card[Neviditelný]{#invisible}
Bez magie nebo zvláštního smyslu ho nejde vidět, ale prozradí ho hluk a stopy. Hody proti němu mají nevýhodu; jeho akce jsou Přesně a jeho iniciativa Rychle. Není to totéž co schovaný.
:::

:::card[Paralyzovaný]{#paralyzed}
Neschopný, nemůže se hýbat ani mluvit. Automaticky prohrává obranné hody :body[Těla]. Útoky na něj jsou Přesně a zásah do 1 m je [kritický zásah](dice#damage).
:::

:::card[Zkamenělý]{#petrified}
Proměněný v kámen se vším, co nese. Neschopný, nemůže se hýbat ani mluvit, nevnímá okolí. Útoky na něj jsou Přesně; automaticky prohrává obranné hody :body[Těla], má odolnost vůči všemu zranění a imunitu vůči jedům a nemocem (co už v těle má, se zastaví, ale nevyléčí).
:::

:::card[Ležící]{#prone}
Dokud nevstane, může se jen plazit. Jeho útoky mají nevýhodu. Útoky na něj do 1 m jsou Přesně; z větší dálky mají nevýhodu.
:::

:::card[Zadržený]{#restrained}
Rychlost je 0. Útoky na něj jsou Přesně; jeho útoky mají nevýhodu a jeho obranné hody :body[Těla] taky.
:::

:::card[Omráčený]{#stunned}
Neschopný, nemůže se hýbat, mluví jen zajíkavě. Automaticky prohrává obranné hody :body[Těla]. Útoky na něj jsou Přesně; jeho útoky a iniciativa mají nevýhodu.
:::

:::card[V bezvědomí]{#unconscious}
Neschopný, nemůže se hýbat ani mluvit, nevnímá okolí. Upustí, co drží, a padne k zemi. Automaticky prohrává obranné hody :body[Těla]. Útoky na něj jsou Přesně a zásah do 1 m je [kritický zásah](dice#damage).
:::
::::

## Postihy {#penalties}

Postihy jsou stavy, které zrcadlí [manévry](manoeuvres). Každý postavě jeden manévr vezme, i ten, který by dostala zdarma, a obrátí jeho účinek proti ní. Postih může platit pro jednu dovednost (kletba třesoucích se rukou tě udělá *Nepřesným* se zbraněmi na dálku), pro skupinu dovedností, nebo pro všechno, co postava dělá (otupující jed tě udělá *Pomalým*). Co z toho platí, řekne jeho zdroj.

::::cards
:::card[Nepřesný]{#imprecise}
Zrcadlo Přesně. Hody s danou dovedností mají nevýhodu a postava nemůže použít Přesně.
:::

:::card[Pomalý]{#slow}
Zrcadlo Rychle. Iniciativa má nevýhodu a postava nemůže použít Rychle.
:::

:::card[Slabý]{#feeble}
Zrcadlo Mocně. Zásahy postavy s danou dovedností dávají NPC o jednu kostku zranění méně (nejméně jednu kostku), nebo o 1 méně zranění :soul[Duše] či :charisma[Vlivu]. Hráčská postava je odvrací o 1 bod levněji (nejméně za 1). Postava nemůže použít Mocně.
:::

:::card[Prostoduchý]{#foolish}
Zrcadlo Lstivě. Postava nemůže srazit k zemi, chytit ani odstrčit a každý, kdo ji zasáhne, za to dostane **Lstivě** zdarma. To Lstivě zdarma je jediný manévr útočníkovy akce.
:::
::::

:::example[Půlčice s obouruční sekerou]
Půlčice Milka vezme do ruky obouruční sekeru, Těžkou zbraň, takže její útoky s ní jsou Slabé. Zasáhne banditu a hodí k12 + svou úroveň Bojovníka. Obouruční sekera má jen jednu kostku, takže zůstane u jedné kostky, ale Milka si nemůže zaplatit Mocně, aby přidala další. Proti hráčské postavě by stejné máchnutí stálo odvrátit o 1 bod méně.
:::$cs$
where slug = 'conditions';

update rulebook_pages set content = replace(replace(split_part(content, E'\n\n|cs|\n\n', 1), $f$ |cs| Městský strážný$f$, $f$$f$), $f$ |cs| Člověk, obyčejný$f$, $f$$f$) || E'\n\n|cs|\n\n' || $cs$Nehráčské postavy fungují jinak než hráčské. Nevyčerpávají, nedostávají Jizvy a nemají vlastní Ohrožení. Místo toho mají **hodnoty**, které klesají, když prohrávají, tak jako životy v 5E. PJ tak má málo počítání: NPC je jeden blok statistik, pár čísel na odškrtávání a mezi hody není co sledovat.

## Statistiky {#the-stat-block}

NPC se píše jako tvor z 5E, s pár záměnami. Místo životů má hodnoty :body, :soul a :charisma. Místo vlastností a zdatností má **bonusy k dovednostem**. Má **zvláštní schopnosti** (své rysy, akce a reakce), **kostku hrozby** pro újmu, kterou dává hráčským postavám, a když je pro příběh důležité, pár bodů **Sudby**.

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

NPC si k hodům s dovednostmi, ve kterých je dobré, přičítá pevný bonus a používá ho přesně jako úroveň povolání: k20 + bonus ve střetu, 2k6 + bonus proti 9 ve zkoušce. Bonus může pokrývat všechny dovednosti povolání (voják s +2 k dovednostem Bojovníka), malou část jednoho (+3 k *Boji zblízka pěšky*), nebo vlastní dovednost NPC. Bonusy jdou obvykle do +5, jako úroveň povolání; legendární NPC můžou dosáhnout +8.

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

**Zranění :body[Těla]** jsou kostky zbraně nebo kouzla plus úroveň povolání útočníka, mínus stupeň zbroje NPC. Když ho zbroj stáhne na 0 nebo níž, zásah je pohlcen. Zbroj funguje jako u hráčských postav, do stupně 3; přirozená zbroj velké nestvůry může dosáhnout 4 nebo 5, kde je to oprávněné, třeba u dračích šupin nebo kamenného golema.

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
NPC proti hráčským postavám nehází na zranění zbraní. Zásah, který projde a není odvrácen, se stane Jizvou o velikosti podle kostky hrozby NPC; viz [Obrana a zásahy](defending).
:::

## Vedle sebe {#side-by-side}

| | Hráčská postava | NPC |
|---|---|---|
| **Bonus k hodu** | Úroveň povolání (nejvýš 5) | Pevný bonus pro skupinu dovedností (obvykle nejvýš 5) |
| **Schopnosti** | Perky a kouzla | Zvláštní schopnosti |
| **Újma** | Odvrací vyčerpáním, jinak Jizvy | Ztrácí body hodnot |
| **Odvrácení neúspěchu** | Vyčerpá tolik bodů, kolik je Ohrožení | Nemůže; důležitá NPC utrácejí Sudbu |
| **Ohrožení** | Ano, pro každou postavu | Ne |
| **Zranění, které dává** | Kostky + úroveň povolání, do hodnot | Kostka hrozby, jako stupeň Jizvy |
| **Porážka** | Hody na umírání, když Jizva přeteče zdroj | Na 0 v kterékoli hodnotě |
| **Manévry** | 1 bod zdroje, nebo zdarma | Zdarma, když jsou dané, jinak 1 bod hodnoty |$cs$
where slug = 'npcs';

update rulebook_pages set content = replace(split_part(content, E'\n\n|cs|\n\n', 1), $f$ |cs| Hůl popelavého dubu$f$, $f$$f$) || E'\n\n|cs|\n\n' || $cs$Rituální předmět (hůl, amulet, svatý symbol, odznak řádu) uchovává magickou sílu, kterou do něj vložil Zaříkávač, aby ji později utratil za kouzla. Nabít ho nebo použít může jen Zaříkávač: *Rituální předměty* jsou jedinečná dovednost Zaříkávače.

Postava má **jeden** rituální předmět a ten musí obsahovat něco, co bylo součástí těla jeho majitele, třeba ustřižené vlasy nebo kapku krve. Majitel to pouto obnovuje při každém slunovratu nebo rovnodennosti. Právě proto je ztráta nebezpečná: kdo předmět drží, má na majitele až do příštího slunovratu nebo rovnodennosti **symbolický dotek**.

## Nabíjení {#charging}

Nabíjení je rituál při **východu nebo západu slunce** a každý uložený bod stojí 1 :material. Kolik bodů předmět po nabití pojme, záleží na příležitosti:

| Příležitost | Kolik bodů pojme |
|---|---|
| Východ nebo západ slunce | 1 |
| Večer slunovratu nebo rovnodennosti | Až 5 |
| U zřídla, místa moci | Síla zřídla (2–5) |
| Na zlém nebo prokletém místě | Žádný |

Když platí víc příležitostí, počítá se jen ta nejvyšší, takže předmět nikdy nepojme víc než 5. Body, které už v něm jsou, se při menší příležitosti neztratí; předmět jen nejde naplnit nad to, co ta příležitost dovolí.

:::example[Nabíjení o rovnodennosti]
Hůl zaříkávačky Kolvy drží 1 bod. Večer jarní rovnodennosti pálí svíce a rozsypává popel, utratí 4 :material a hůl teď drží 5. Při obyčejném západu slunce o týden později nemůže přidat nic, protože západ dovoluje jen 1 a hůl už drží víc.
:::

Rituální předmět má na deníku postavy vlastní kartu, která se vyplňuje ručně. Kolvina hůl:

```ritual-item
name: Hůl popelavého dubu
emblem: /img/emblems/order-of-ash.svg
allegiance: Řád Jasanu
subtitle: Kolvin rituální předmět
```

## Použití {#using-it}

Uložené body platí **aktivační ceny a manévry při sesílání**, u jakékoli magie, kterou Zaříkávač má, včetně škol pokročilých povolání, jako je magie Čaroděje nebo Mága.

:::note[Mocné amulety]
Zaříkávačův perk *Mocné amulety* udělá nabíjení bez Materiálu. Limity, kolik bodů která příležitost dovolí, platí dál.
:::$cs$
where slug = 'ritual-items';
