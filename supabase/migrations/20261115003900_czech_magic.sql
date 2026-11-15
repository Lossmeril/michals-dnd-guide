-- Rulebook (2026-11-15): Czech for magic, spell-durations, sigils, control, countering-magic, substances.
-- The English half stays; the Czech half is replaced.

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Magie je dovednost jako každá jiná. Sesilatel na ni hází, platí za ni a může v ní selhat jako v čemkoli jiném; odlišuje ji to, co dokáže.

## Kdo může kouzlit {#who-can-cast}

Každé povolání má jeden ze tří druhů magie, který se ukazuje jako odznak vedle jeho jména.

**Spící.** Povolání nemá kouzla. Magické dovednosti jsou jedinečné, takže čistý Bojovník se o kouzlo ani nepokusí.

**Probuzená.** Zaříkávač a všechna povolání na něm postavená mají magii probuzenou: Druid, Alchymista, Čaroděj a Mág a všechna mocná povolání kromě Vojevůdce a Ničitele. Základní kouzla dostanou s povoláním a kouzlit můžou, kdykoli mají akci a dokážou zaplatit cenu kouzla.

**Skrytá.** Vědmák a Šaman vycházejí z Mastičkáře, ne ze Zaříkávače, a Ničitel je postavený na Vědmákovi. Jejich magie leží skrytá, dokud ji neprobudí bolestí. Před prvním kouzlem si vezmou **Jizvu 1. stupně** v libovolném zdroji a vstoupí do **magického stavu**. Od té chvíle kouzlí jako probuzený sesilatel a platí cenu každého kouzla. Magický stav trvá do konce konfliktu. Mimo boj trvá jeden souvislý úsek práce, třeba prohledání jedné zříceniny, a kdy skončí, řekne PJ.

:::example[Probuzení znamení]
Ulrich (Vědmák 2) je zahnaný utopencem do zatopeného sklepa. V tomhle boji ještě znamení nepoužil, takže nejdřív vypije svůj hořký elixír: Jizva :body[Těla] 1. stupně, která mu zablokuje jeden bod :body[Těla] a nic mu nevrátí. Teď je v magickém stavu. Jako akci sešle Znamení Isa, které nemá cenu, a hodí k20 + 2 proti utopencovu obrannému hodu. Další kolo může znamení použít znovu bez další Jizvy a tak to platí až do konce boje.
:::

:::note[Platba naprázdno]
Jizva, která magii probudí, nedává **žádné** dočasné body, na rozdíl od Jizvy vzaté na odvrácení neúspěchu. Její příběh je na hráči: jedovatý elixír Vědmáka, Šaman, který si rituální dýkou rozřízne dlaň.
:::

Kromě základních kouzel je každé kouzlo **perk**: zabere jedno místo na perk povolání jako kterýkoli jiný perk, takže sesilatel nikdy nemá víc schopností než ostatní, jen jiné.

## Co kouzlo potřebuje {#what-a-spell-needs}

Aby sesilatel kouzlo seslal, potřebuje tři věci. První je **magická dovednost**. Většina magických dovedností je jedinečná, takže bez povolání se postava ani nepokusí; výjimkou jsou základní dovednosti Mastičkáře a Zaříkávače, a uvařit lektvar, požehnat nebo proklít může zkusit kdokoli, jen bez bonusu povolání.

Druhá jsou **složky** kouzla. Sesilatel, který je nedokáže provést, nekouzlí vůbec, a proto se zajatým čarodějům dávají roubíky a svazují se jim ruce.

| Složka | Co to je | Zablokuje ji |
|---|---|---|
| **Slovní** | Slova, zvuky, píseň | Roubík, magické ticho |
| **Gestická** | Gesta | Svázané ruce |
| **Materiální** | Kouzlo utratí :material a řekne, co to je. Tohle je cena kouzla v Materiálu. | Žádný Materiál |
| **Rituální** | Dlouhý obřad, minuty a víc: obrazce, nabíjení rituálního předmětu, vaření látek | Boj, nebo spěch |

Třetí je **kontakt s cílem**. Každé kouzlo potřebuje jeden ze čtyř druhů a jeho dosah v metrech jen omezuje vzdálenost v rámci toho kontaktu.

| Kontakt | Význam |
|---|---|
| **Dotek** | Tělo sesilatele se cíle dotkne. |
| **Symbolický dotek** | Sesilatel drží něco, co bylo součástí cíle (vlas, tříska), nebo co cíl vlastnil a miluje. Pouto vyprchá při příštím slunovratu nebo rovnodennosti. |
| **Zrak** | Sesilatel vidí cíl vlastníma očima. Žádná zrcadla, dalekohledy ani křišťálové koule. |
| **Kontakt** | Cíl se dotkne toho, co sesilatel vytvořil: šlápne na obrazec, vypije látku, stojí moc blízko výbuchu. |

:::note[Předměty k soustředění]
Hůl nebo svatý symbol nejsou složka. To jsou [rituální předměty](ritual-items).
:::

:::example[Není vidět]
Čaroděj na městské hradbě chce shodit Ohnivou kouli na nádvoří za strážní věží. Nádvoří nevidí, takže na něj nedosáhne, ať je v metrech jakkoli blízko. Napřed vyleze na věž.
:::

## Hod na seslání {#the-casting-roll}

Když se kouzlu nikdo nebrání (zmrazit potok, zapálit oheň, zvednout zeď z hlíny), sesilatel hodí [zkoušku](dice#skill-check): 2k6 plus úroveň magického povolání, proti 9. Když se cíl brání (okouzlit strážného, číst vězňovy myšlenky), je to [střet](dice#challenge): k20 plus úroveň magického povolání proti obrannému hodu cíle.

Nepovedené seslání se odvrací jako každý neúspěch: vyčerpáním tolika bodů ze zdroje dovednosti (obvykle :soul[Duše]), kolik je [Ohrožení](danger-level), nebo Jizvou. V boji seslání zabere akci tahu.

## Cena {#price}

Cena kouzla funguje jako u každého perku. Buď žádnou nemá, nebo má **aktivační cenu**, placenou vyčerpáním zdroje nebo utracením :material[Materiálu] při každém seslání. Základní kouzla jsou s povoláním zdarma jen v tom smyslu, že za ně neutratíš perk; každé má i tak vlastní cenu, nebo žádnou. Kouzlo bez ceny se dá seslat tak často, kolik má sesilatel akcí a dokáže provést jeho složky.

V těžkých podmínkách (dělat led v horkém letním dni) PJ přidá [cenu za pokus](danger-level#cost-to-attempt), placenou před hodem.

## Měřítko základní magie {#scale-of-basic-magic}

Základní kouzla a ostatní základní magie fungují v lidském měřítku. Působí na **jeden cíl**. Pohnou asi tolik, kolik je **chaloupka**. A jejich **síla** je to, co by člověk zvládl přirozenými prostředky: poryv větru tlačí jako chlap, šlahouny drží jako ruce a dají se strhnout. Perky, které jdou dál, to řeknou.

Kouzla s neurčitou velikostí (ohýbání země, vody nebo ohně, pohyb rostlin, iluze) se měří v hrubých jednotkách. Každý krok nahoru po žebříčku stojí jedno [Rozsáhle](manoeuvres), a stejně tak působení na víc věcí v rámci jednoho kroku (tři louče, čtyři louže).

| Jednotka | Zhruba | Na mřížce | Například |
|---|---|---|---|
| **Dlaň** | Hrnek, svíčka, hrst hlíny | Část políčka | Zapálit dýmku, zchladit pití, nechat zvadnout květinu |
| **Chaloupka** (základ) | Malé stavení, asi 5 m napříč | Jedno [bitevní políčko](battles#the-map), hrstka | Vlna, která převrhne vor, ale loď jen rozhoupe; mělký potok zmrzlý ke dnu v délce 5 m; jeden strom; jedna iluze něčeho velkého jako chaloupka |
| **Statek** (Rozsáhle) | Dvůr se stavením, asi 10 m napříč | 2 × 2 bitevní políčka, tlupa | Mlha nad malým přístavem; břeh, který se sesune do vody; celý háj, který se rozhoupe |
| **Vesnice** (Velmi rozsáhle) | Pevnost, náves, městská čtvrť | Jedno polní políčko, horda | Jen mistrovské schopnosti, které to jmenují |

Magie hýbe jen tím, co už tam je, a v přirozené podobě. Druid neudělá vodu z ničeho ani z ní neudělá pivo; chaloupku vody zmrazit jde, jezero ne. Kouzla, u kterých záleží na určité ploše, jako Ohnivá koule, se místo toho měří v metrech.

:::example[Tři louče]
Čaroděj Ondra chce naráz zapálit tři louče podél zdi krypty. Jedna louč je dlaň, základ Ohýbání ohně, ale tři jsou víc věcí, takže zaplatí 1 :soul[Duši] za Rozsáhle.
:::

Základní kouzla můžou být zdarma a dají se používat každé kolo, a to schválně. Drží je zpátky všechno ostatní: každé seslání zabere akci, každé potřebuje hod, jehož neúspěchy stojí vyčerpání a sčítají se, měřítko výše je drží malá a silnější NPC můžou mít vůči jednoduché kletbě prostě imunitu.

## Zranění {#damage}

Základní magie **sama od sebe nezabije ani neomráčí živého tvora**. Nanejvýš dává drobné zranění (1k6 z Ohýbání ohně, 1k6 ze Znamení Isa). Škodí tím, že cíli věci zhorší, nebo využije okolnosti: jiskra je neškodná, dokud cíl není polit olejem. Kouzla získaná jako perky můžou nést skutečné kostky zranění, stejně jako v 5E. Látky (jedy, výbušniny, žíraviny) zabíjet můžou už v základní podobě, ale potřebují kontakt.

Proti hráčské postavě se zranění kouzla stane kostkou pro hrozbu, jako zásah kteréhokoli NPC (viz [Obrana a zásahy](defending)):

| Kouzlo | Kostka pro hrozbu |
|---|---|
| Drobné zranění ze základních kouzel | k4 |
| Malá kouzla z perků | k6 |
| Velká plošná kouzla | k8 |
| Legendární magie | k10 a víc |

## Plošná kouzla {#area-spells}

Kouzlo z perku s pevnou plochou, jako Ohnivá koule, už za tu plochu platí svou aktivační cenou, takže nepotřebuje Rozsáhle a Rozsáhle ho zvětšit nemůže. Každý cíl v ploše hází [obranný hod](defending). NPC, které vyhraje, dostane polovinu zranění zaokrouhlenou dolů, a které prohraje, dostane všechno. Hráčská postava, která vyhraje, nedostane vůbec nic; která prohraje, odvrací vyčerpáním jako obvykle, nebo dostane Jizvu z kostky pro hrozbu.

## Účinky podle školy {#effects-by-school}

V rámci své školy rozhoduje hráč sesilatele, co kouzlo udělá. Magické dovednosti (*Magie ohně*, *Magie iluzí* a další) jsou školy; *Odhalení magie* řekne, ze které dovednosti kouzlo pochází.

| Oblast | Povolání |
|---|---|
| Tělo a duše živých bytostí | Zaříkávač, Mastičkář, Šaman, Vědmák, Alchymista |
| Živly a rostliny | Čaroděj, Druid |
| Ovládání lidí a zvířat, získávání informací | Mág, Šaman |
| Oživování umělých bytostí | Alchymista |
| Vázání nadpřirozených sil k místu nebo předmětu | Většina magických povolání, přes [obrazce](sigils) |$cs$
where slug = 'magic';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Každé kouzlo říká, jak dlouho trvá. Většina trvá okamžik; cokoli delšího obvykle přichází z perku.

| Trvání | Končí | Sesilatel mezitím |
|---|---|---|
| **Okamžité** | Hned | Volný |
| **Do západu nebo východu slunce** | Při nejbližším z nich | Volný |
| **Do slunovratu nebo rovnodennosti** | Při nejbližším z nich | Volný |
| **Soustředění** | Když se sesilatel přestane soustředit | Každý tah na kouzlo utrácí **akci** a nemůže dělat nic jiného |
| **Do konce boje** | Když boj skončí | Volný |
| **Do zrušení** | Když ho sesilatel nebo cíl ukončí | Nepotřebuje akci a může dělat jiné věci |

Soustředění a „do zrušení“ jsou schválně rozdílné. Kouzlo se soustředěním sesilatele váže: držet mlhu nad přístavem je celý jeho tah. Kouzlo do zrušení běží samo, zatímco sesilatel dělá něco jiného.

## Soustředění {#concentration}

Sesilatel se může soustředit na jedno kouzlo naráz, takže začít druhé kouzlo se soustředěním ukončí to první. Ukončí ho i to, když je [neschopný](conditions#incapacitated), a všechno, co ho neschopným udělá: paralýza, zkamenění, omráčení nebo bezvědomí.

Každý útok na soustředěného sesilatele vynutí **hod na soustředění**, ať zasáhne, nebo mine. Je to [obranný hod](defending) proti útočníkovi s úrovní magického povolání sesilatele jako bonusem, a protože akce sesilatele už padla na soustředění, stojí manévr Obrana. Tenhle hod je oddělený od obrany proti samotnému útoku: sesilatel hází, ať útok zasáhl, minul, byl odvrácen, nebo ho pohltila zbroj.

Prudké vyrušení (vlna přes palubu, propadající se podlaha) taky přeruší soustředění, pokud sesilatel neuspěje ve [zkoušce](dice#skill-check) s úrovní magického povolání. Nic neútočí, takže manévr Obrana není potřeba, a Ohrožení určí PJ podle toho, jak prudké je.

Prohraný hod kteréhokoli druhu kouzlo ukončí, pokud sesilatel neúspěch neodvrátí jako kterýkoli jiný: vyčerpáním tolika bodů, kolik je Ohrožení, nebo Jizvou.

:::example[Udržet mlhu]
Druidka Vesna (Druid 3, Zaříkávač 3) drží mlhu nad přístavem, zatímco její přátelé odveslují. Kušiník na molu na ni vystřelí a mine. I tak musí hodit na soustředění: zaplatí 1 :soul[Duši] za manévr Obrana a hodí k20 + 3 proti jeho k20 + 2. Prohraje a při Ohrožení 3 vyčerpá 3 :soul[Duše], aby mlhu udržela.
:::

:::note[Pevná mysl]
Zaříkávačův perk *Pevná mysl* dovolí sesilateli házet na soustředění bez placení manévru Obrana.
:::$cs$
where slug = 'spell-durations';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Obrazec váže sílu sesilatelovy školy k místu nebo předmětu. Hlídá to místo, spustí poplach, když někdo přijde, a dovolí sesilateli kouzlit skrz něj, jako by tam stál.

**Zaříkávač** dostává *Znak oka* jako základní kouzlo; je to jediný obrazec, který je zdarma. **Každé jiné magické povolání** si kupuje perk s obrazcem pro vlastní školu, jako kterýkoli jiný perk: *Znak salamandra* pro Čarodějův oheň, *Znak lešije* pro Druidovy rostliny. Bez perku *Strážce obrazce* obrazec reaguje na každého, kdo do něj vstoupí nebo se ho dotkne; s ním sesilatel nastaví spouštěč, třeba heslo nebo jednu konkrétní osobu.

## Kreslení {#drawing-one}

Nakreslit obrazec je rituál s přísadami a :material, který do něj vložíš, se stane jeho vlastní **zásobou**: nejméně 1 a ne víc, než je zdroj :soul[Duše] sesilatele. Zásoba se utrácí, jak obrazec pracuje, a nikdy se nevrací. Musí to být pořádný, koupený Materiál; přísady nasbírané v terénu můžou někoho vystrašit, ale v pravidlech nic nedělají.

Sesilatel drží **jeden obrazec naráz** a nakreslení nového přetrhne pouto ke starému. Sesilatel s víc školami a perkem s obrazcem pro každou je může všechny svázat do jednoho obrazce a jeho zásobu používat pro kteroukoli z nich.

Hlídací obrazce se kreslí jako uzavřené tvary (kruh kolem tábora, řada run kolem místnosti), protože sesilatel dosáhne na kterékoli místo uvnitř tvaru.

## Co dělá {#what-it-does}

Když někdo do obrazce vstoupí nebo se dotkne označeného předmětu, sesilatel to ví, i když ne, kdo to je. Sesilatel, který drží stráž, si toho všimne hned; ten, kdo je zaneprázdněný nebo spí, hodí zkoušku, jestli si všimne.

Sesilatel pak může jednat **skrz obrazec**. Zabere to jeho iniciativu i akci na kolo, i když stojí hned vedle. Může použít jen magii svázané školy, i když jeho perky fungují dál. Nevidí, ale zhruba cítí, jestli se cíl brání a jak. Každá akce skrz obrazec stojí **1 bod jeho zásoby** jako [cena za pokus](danger-level#cost-to-attempt) a na odvrácení nepovedené akce sesilatel vyčerpává zásobu obrazce, nikdy svou vlastní.

| Cíl | Jak |
|---|---|
| **Vetřelec** | Jako symbolický dotek, jen jedním směrem |
| **Označený předmět** | Přímo |
| **Kterékoli místo uvnitř obrazce** | Přímo |

:::example[Vrzající strom]
Vesna nakreslí *Znak lešije* kolem svého tábora za 3 :material. O půlnoci kruh překročí cizinec a obrazec ji probudí. Nechá starý dub zavrzat a shodit cizinci k nohám větev: 1 bod ze zásoby na pokus, pak zkouška s její úrovní Druida. Uspěje a cizinec uteče. V obrazci zbývají 2 body.
:::

## Kdy končí {#when-it-ends}

Obrazec trvá do příštího **západu nebo východu slunce**. Skončí dřív, když ho někdo spustí a sesilatel se rozhodne nejednat, když akce skrz něj selže a sesilatel ji ze zásoby neodvrátí, nebo když zásoba dojde.$cs$
where slug = 'sigils';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Některá magie nikomu neubližuje; přebírá vůli nebo čte, co má kdo v hlavě. Magie Mága to dělá lidem, Šamanova magie zvířat zvířatům.

:::note[Okouzlený neznamená ovládnutý]
Jsou to dvě různé věci. **[Okouzlený](conditions#charmed)** je stav: cíl si drží vlastní vůli, bere sesilatele jako přítele a jedná sám za sebe. **Ovládání** je aktivní čin: sesilatel cíl řídí jako loutku a cíl dělá, co sesilatel chce.
:::

## Ovládání {#control}

Proti cíli, který se nebrání, třeba vedlejšímu NPC, je převzetí kontroly zkouška s dovedností ovládání. Proti tomu, kdo se brání, je to střet, který se může protáhnout v delší zápas, kde obě strany odvracejí neúspěchy.

Jakmile sesilatel vyhraje, tvor jedná jako jeho [pomocník](companions). Sesilatel používá jeho dovednosti, ale jeho vyčerpání, manévry a ceny perků platí ze **svého vlastního :charisma[Vlivu]**. Ovládání si bere veškerou sesilatelovu pozornost: nedělá žádné vlastní akce a na iniciativu hází jen za ovládaného tvora. Manévr Obrana použít může a může pomalu následovat. Když sesilatel neřídí tvorovy reakce, tvor reaguje sám a platí vlastními zdroji. Pustit ho znamená ovládání ukončit.

:::example[Vypůjčený strážný]
Mágyně Dobromila (Mág 3) převezme kontrolu nad strážným u brány, který se brání: vyhraje střet, k20 + 3 proti jeho k20 + 2. Strážný dojde k rumpálu a začne zvedat mříž. Když na něj zakřičí seržant, Dobromila nechá strážného lhát; ten hod prohraje a ona při Ohrožení 3 vyčerpá 3 body svého :charisma[Vlivu], aby to odvrátila. Dobromila sama zatím stojí strnule v uličce a nedělá nic jiného.
:::

## Získávání informací {#learning-information}

Magie mysli (Mág), magie zvířat a *Věštění* (Šaman) a rozhovor s rostlinami (Druid) dokážou věci zjistit. S ochotným cílem jeden úspěšný hod otevře spojení a můžou si povídat, jak dlouho chtějí. Cíl, který se brání, dá za každý úspěšný hod jen jednu jednoduchou pravdivou odpověď, obvykle ano, nebo ne.$cs$
where slug = 'control';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Když se kouzlo zastaví, všechny zdroje, které do něj šly, jsou ztracené. Zastavit ho jde třemi způsoby: rukama, protikouzlem při sesílání, nebo zlomením poté, co bylo sesláno.

## Rukama {#by-hand}

Nejjednodušší způsob, jak kouzlo zastavit, je znemožnit jeho seslání. Srazit sesilatele k zemi, chytit mu ruce, dát mu roubík: sesilatel, který nedokáže provést složky, kouzlit nemůže. Kouzlo, které potřebuje zrak, se dá zablokovat schováním; sesilatel zaměří převrácený stůl, ne člověka za ním.

Krátkým kouzlům se dá prostě vyhnout, uskočit před plameny nebo utéct před oživlým stromem. Trvalá často skončí přirozenou cestou: ohnivá stěna uhašená vodou už nevzplane a uklidnit magicky rozzuřeného muže laskavým slovem ukončí magii mysli, stejně jako když se cíl ovládne sám. Většina magie navíc skončí sama při příštím východu nebo západu slunce, takže počkat je skutečná možnost.

## Protikouzla {#counterspells}

Protikouzlo zastaví kouzlo ve chvíli, kdy se sesílá, a potřebuje **vyhraný střet** proti sesilateli. Může jít po rituálu a udělat magií to, co by šlo udělat rukama: svázat sesilateli jazyk kletbou, srazit ho poryvem. Nebo může jít po samotném kouzle, stejnou školou nebo jinou, kdekoli to dává stolu smysl: Druidovu mlhu může zastavit jiný Druid, který se zmocní vody, nebo napřed zvedne vodní stěnu, nebo Čaroděj, který ji odfoukne.

## Zlomení kouzla {#breaking-a-spell}

Zlomení odstraní trvalý účinek poté, co bylo kouzlo sesláno. Zlomit jdou jen **nadpřirozené účinky**: kletbu lze sejmout a narkotikum potlačit, ale popáleniny z magického ohně magie nevrátí. Aby kouzlo zlomil, potřebuje lamač čtyři věci:

1. **Dovednost**, kterou bylo sesláno: stejnou školu, nebo výrobu té látky. Použité perky nehrají roli.
2. **Kontakt** s obětí: dotek nebo symbolický dotek.
3. **Stejné zdroje**, které šly do kouzla. Protijed potřebuje tolik přísad jako jed.
4. **Vědět, co je to za kouzlo**: protože byl u toho, z přesného popisu (znění kletby, recept), nebo z prozkoumání účinků vhodnou dovedností.

Zlomení ukončí kouzlo, ne to, co už napáchalo. Spáč se probudí a ohnivá stěna zhasne, ale Jizvy, které mezitím padly, zůstanou. Okamžité kouzlo se dá zastavit jen ve chvíli, kdy se děje.

:::example[Sejmutí kletby]
Mlynářův syn je prokletý, že bude koktat až do slunovratu. Zaříkávačka Kolva (Zaříkávač 3) slyšela kořenářku vyslovit kletbu na trhu, takže ví, co to je. Položí chlapci ruku na hlavu, vyčerpá 2 :soul[Duše] (to, co zaplatila čarodějnice) a hodí zkoušku Zaříkávače: 2k6 + 3. Na 9 a víc chlapec zase mluví jasně.
:::

:::note[Znamení Berkano]
Vědmákovo *Znamení Berkano* je výjimka ze zlomení. Za 1 :soul[Duši] Vědmák zlomí jedno kouzlo nebo magický účinek **mířený na něj**, bez odpovídající dovednosti, zdrojů i znalosti kouzla, a může ho použít s manévrem Obrana. Funguje jen na samotného Vědmáka a nevrátí, co se už stalo.
:::$cs$
where slug = 'countering-magic';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Látky se vaří z :material[Materiálu] a působí na toho, kdo je vypije, dotkne se jich nebo je vdechne. Svět tomu může říkat bylinkaření, ale řídí je pravidla magie. Dělí se na dvě rodiny. **Škodlivé** (jedy, narkotika, výbušniny, kyseliny, plyny) jsou [nástrahy](hazards) a pravidla pro jejich výrobu, odhalení a odolávání najdeš tam. **Užitečné** (lektvary a elixíry) jsou na této stránce.

## Kdo co vyrábí {#overview}

| Látka | Povolání | Dovednost | Působí na | Například |
|---|---|---|---|---|
| **[Polykaný jed](hazards#poisons)** | **Mastičkář** (zkusit může kdokoli, bez bonusu) | *Lektvary a jedy* | Lidi, humanoidy, zvířata | Makový odvar, po kterém žalářník usne |
| **[Kontaktní jed](hazards#poisons)**, i potahy na zbraně | **Lupič** | *Kontaktní jedy* (jedinečná) | Lidi, humanoidy, zvířata | Natřená dýka; otrávená rukavice |
| **[Narkotikum](hazards#poisons)** | **Šaman** | *Omamné látky* (jedinečná) | Lidi, humanoidy, zvířata | Houby, které přinášejí vidění; nápoj lásky |
| **[Výbušnina, kyselina nebo plyn](hazards#blasts)** | **Alchymista** | *Výbušniny, žíraviny a plyny* (jedinečná) | Cokoli s tělem; výbušniny a kyselina i věci | Bomba na dveře trezoru; dusivé výpary ve strážnici |
| **[Lektvar](#potions)** | **Mastičkář** (zkusit může kdokoli, bez bonusu) | *Lektvary a jedy* | Toho, kdo se léčí | Mast na popáleniny za 5 bodů |
| **[Elixír](#elixirs)** | **Alchymista** | *Elixíry* (jedinečná) | Lidi, humanoidy, zvířata | Přejít po jezeře |

**Jedinečná** dovednost znamená, že látku vůbec umí vyrobit jen to povolání. Ostatní může zkusit kdokoli, s čistým hodem. Jak dlouho vaření trvá a kdy potřebuje hod, najdeš ve [Výrobě](crafting).

## Lektvary {#potions}

Lektvary jsou kapky, masti, balzámy a odvary, které pomáhají léčit. Každý drží body zdrojů, za **1 :material za bod**, a když se léčí Jizva jeho druhu, pacient platí z lektvaru místo ze svých zdrojů. Zkouška, kterou [léčení](healing) potřebuje, se hází pořád. Lektvar s víc body se dá rozdělit mezi pacienty, dokud se nespotřebuje, a vydrží prakticky navždy.

Při výrobě výrobce určí **jeden druh Jizvy**, který lektvar léčí: popáleniny, řezné rány a modřiny, horečku, hadí jed. Lektvary léčí Jizvy :body[Těla], i když Jizva :soul[Duše] (uklidňující čaj proti nočním můrám) je povolená, kde to příběhu sedí. Mastičkářův perk *Všelék* vyrobí lektvar, který léčí jakoukoli Jizvu :body[Těla].

:::example[Mast na popáleniny]
Vesna utratí 5 :material za mast na popáleniny. Michal má od louče Jizvu :body[Těla] 1. stupně, jejíž léčení stojí 5 bodů: všech 5 zaplatí z masti, hodí zkoušku na ošetření popáleniny a vlastní zdroje nechá netknuté.
:::

## Elixíry {#elixirs}

Elixír propůjčí tomu, kdo ho vypije, něco, co nemá, a to na **jeho další akci**, ať vyhraje, nebo prohraje. Když je ta akce odvrácena nebo přerušena, elixír je stejně spotřebovaný. Uvařit ho umí jen Alchymista a vypít ho můžou jen lidé, humanoidi a zvířata, celou dávku naráz.

| Elixír | Na další akci pijáka | :material |
|---|---|---|
| **Elixír zběhlosti** | Jedna jmenovaná dovednost dostane Přesně, Mocně nebo Lstivě zdarma, určené při vaření | 2 |
| **Mistrovský elixír** | Jedna jmenovaná dovednost dostane silný manévr: Velmi přesně, Velmi mocně nebo Velmi lstivě | 3 |
| **Zázračný elixír** | Schopnost, kterou žádný člověk nemá: létání, chůze po klidné vodě, chrlení ohně, vidění ve tmě | 5 |

Víc účinků v jedné lahvičce sčítá své ceny. Manévr zdarma z elixíru zběhlosti nebo mistrovského elixíru je [jediný manévr](manoeuvres) akce a s nevýhodou je Přesně jako vždycky k ničemu.

Schopnost ze zázračného elixíru se hází čistými 2k6, protože nikdo nevěří síle, která není jeho. Alchymista si přičte úroveň Alchymisty a stejně tak každý, kdo tu dovednost už má. Chrlení ohně funguje jako Čarodějovo Ohýbání ohně bez perků. Zbytek pořád omezuje tělo: bez křídel se letec spíš vznáší, než kormidluje, a obří síla zvedne vůz, ne útes.

:::example[Vodoměrka]
Michal vypije zázračný elixír a vyrazí přes jezero. V půlce ho za kotník chytí utopenec. Zápas prohraje a neodvrátí ho, takže elixír je spotřebovaný a zbytek cesty plave.
:::

:::note[Trvalé magické předměty]
Elixíry, lektvary a bomby dojdou. Magický předmět, který vydrží, umí svými perky vyrobit jen **Černokněžník**, mocné povolání. Kdokoli jiný ho dostane jako kořist nebo odměnu.
:::$cs$
where slug = 'substances';

-- The Black Priest was renamed Necromancer (Černokněžník) in the class editor
update rulebook_pages set content = replace(replace(content, 'Black Priest', 'Necromancer'), 'Černý kněz', 'Černokněžník')
where slug in ('mighty-classes', 'substances');
