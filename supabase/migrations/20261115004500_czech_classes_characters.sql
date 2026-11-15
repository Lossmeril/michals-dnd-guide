-- Rulebook (2026-11-15): Czech for classes, basic-classes, advanced-classes, mighty-classes, creating-a-character, races, backgrounds, languages, traits, leveling.
-- The English half stays; the Czech half is replaced.

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$::image{src="/img/rulebook/classes.webp" alt="Skupina dobrodruhů" layout="header"}

V 5E si vybereš povolání a zůstaneš v něm až do 20. úrovně, pokud nemáš odvahu naučit se pravidla pro multiclassing. Tady jsou **povolání balíčky dovedností**, ne celá identita, a od postav se čeká, že je budou kombinovat.

## Dovednosti {#skills}

- Každé povolání má **dovednosti** a každá je vázaná na jeden zdroj. Hod na dovednost přičítá úroveň toho povolání. Čistý Kejklíř dělající akrobacii hází 2k6 + úroveň Kejklíře.
- Dovednost povolání, které nemáš, může zkusit kdokoli, jen bez bonusu. Čistý Mastičkář dělající akrobacii hází holé 2k6.
- Výjimkou je **jedinečná** dovednost: zkusit ji můžou jen postavy s daným povoláním. Čistý Bojovník se třeba o seslání kouzla ani nepokusí.
- Nejvyšší úroveň povolání je **5**.

:::note[Jedno číslo pro celý balíček]
Chceš být dobrý v boji, znalosti zbraní a zastrašování? Už nemusíš žonglovat se Sílou, Odolností, Inteligencí a zdatností v Zastrašování. Vezmi si Bojovníka: spojí ozbrojený boj, hrubou sílu, znalost zbraní a strašení lidí do jednoho čísla.
:::

## Tři stupně povolání {#three-tiers-of-classes}
Tahle verze Dungeons and Dragons používá tři stupně povolání. Znovu: od postavy se čeká, že si jich vezme víc a cestou bude odemykat další. Systém tak postavě vždycky dává možnost zaplnit díru ve schopnostech družiny, když je potřeba.

::::cards{cols="3"}
:::card[Základní]{image="/img/classes/fighter.webp"}
**[5 základních povolání](basic-classes)**, která jsou vždycky otevřená. Tvoří malé balíčky základních dovedností.
:::
:::card[Pokročilá]{image="/img/classes/warrior.webp"}
**[10 pokročilých povolání](advanced-classes)**, která se odemknou, jakmile jejich dva rodiče dají dohromady 6 úrovní. Dávají postavám specializovanější dovednosti.
:::
:::card[Mocná]{image="/img/classes/ravager.webp"}
**[6 mocných povolání](mighty-classes)** se odemkne, jakmile jejich pokročilá povolání dají dohromady 6 úrovní. Dělají z postav vůdce v jejich oboru.
:::
::::

## Magie {#magic}
Magie a magické schopnosti jsou svázané s povoláním a jím omezené. Jediné pravé magické povolání je [Zaříkávač](classes/incantor). Všechna povolání, která z něj vycházejí, jsou **probuzená**: magie v nich bdí.

Výjimky jsou dvě, a to [Šaman](classes/shaman) a [Vědmák](classes/witcher), kteří oba vycházejí z [Mastičkáře](classes/medic), ale ovládají vlastní formy magie. Aby ale mohli kouzlit, musí si nejdřív uštědřit [Jizvu](exhaustion#scars). Těmto povoláním říkáme **skrytá**: jejich magie spí, dokud ji neprobudí. Povolání bez magie jsou **spící**.

| Druh | Jak funguje |
|---|---|
| Spící | Žádná kouzla. |
| Probuzená | Základní kouzla od začátku; další se odemykají jako perky. |
| Skrytá | Taky základní kouzla, ale sesilatel si nejdřív vezme Jizvu, aby vstoupil do magického stavu. Viz [Sesílání magie](magic#who-can-cast). |$cs$
where slug = 'classes';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Základní povolání jsou základní stavební kameny každé postavy. Jsou otevřená od začátku, takže si kterékoli z nich může kterákoli postava vzít kdykoli.

Místo jedinečné specializace dávají základní povolání úhledný balíček dovedností, které by nejspíš měl dobrodruh oddaný jednomu způsobu života.

Povolání Bojovník třeba postavě dá zdatnost v boji zblízka, ale taky hrubou sílu, chvástání, zastrašování a znalost zbraní.

:::note[Můžu si vzít víc základních povolání?]
Ano! Měl bys a vezmeš si. Obyčejná postava začíná se dvěma z nich a jedním [pokročilým povoláním](advanced-classes).

Než z tebe ale bude zkušený dobrodruh, můžeš mít aspoň tři, nebo dokonce všechna.
:::

::classes{rank="basic"}$cs$
where slug = 'basic-classes';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Kde jsou základní povolání jen balíčky základních dovedností, tam jsou pokročilá povolání mnohem specializovanější a dávají dovednostem postavy profil. Tím mají mnohem blíž ke klasickým povoláním z D&D.

Je jich deset, jedno pro každou dvojici základních. Povolání se otevře, jakmile **jeho dva rodiče dají dohromady 6 úrovní**, v jakémkoli poměru. To je jediná brána: potom se zvyšuje až do 5 jako každé jiné povolání.

::classes{rank="advanced"}

Rodiče můžou dát 6 v jakémkoli poměru a ten poměr postavu formuje. Když se podíváš na tři Válečníky níže, uvidíš tři velmi odlišné lidi:

::::cards{cols=3}
:::card[Hakon, berserk z medvědího klanu]{image="/img/classes/fighter.webp" subtitle="Bojovník 5 · Kejklíř 1 · Válečník 1"}
Hakon je obrovitý válečník, který drtí nepřátele hrubou silou a pak je překvapí vrženou sekerou. S převahou Bojovníka hraje jako klasický barbar.
:::

:::card[Sir Ulrich z Velgraadu]{image="/img/classes/warrior.webp" subtitle="Bojovník 3 · Kejklíř 3 · Válečník 1"}
Sir Ulrich je charismatický rytíř, stejně dobrý v sedle a na turnaji jako v souboji s mečem. Vyrovnané úrovně dávají všestrannou postavu, která je stejně hbitá jako silná.
:::

:::card[Zara Samotářka]{image="/img/rulebook/warrior-monk.webp" subtitle="Bojovník 1 · Kejklíř 5 · Válečník 1"}
Zara strávila roky v samotě, aby se stala válečnou mniškou, která se pohybuje jako stín. Její styl boje je samá akrobacie, vrhací čepele a přesné údery. S převahou Kejklíře má blízko k Mnichovi z 5E.
:::
::::

## Aspekty {#aspects}
Myšlenka rozdělení podle toho, kterou stránku stylu a povahy postavy chceš zdůraznit, nás přirozeně přivádí k aspektům.

Aby byla rozdělení ještě zajímavější, má každé pokročilé povolání **tři aspekty**: kořeny svého stromu perků. Aspekt je perk, který dostaneš automaticky, jakmile tvoje rodičovská povolání dosáhnou správných úrovní.

Systém perků ti dovolí odemknout zajímavější perky tím, že dosáhneš potřebného rozdělení úrovní.

- Musíš mít samotné pokročilé povolání. Bojovník 4 / Kejklíř 2 bez Válečníka ti Žoldnéře nedá.
- Aspekt sám o sobě nic nedělá. Jen otevírá perky, které ho vyžadují.
- Aspekty se nepočítají do tvého levelu.
- Aspekty se sčítají. Časem můžeš mít všechny tři.

Každé povolání má stejný vzorec: první aspekt chce **4 úrovně v prvním rodiči a 1 ve druhém**, druhý **3 + 3**, třetí **1 + 4**. Každé rozdělení, které povolání odemkne, dá aspoň jeden aspekt, a rozdělení rozhodne, který přijde první. Mít všechny tři chce aspoň 4 + 4.

::aspects$cs$
where slug = 'advanced-classes';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Sweet dreams are made of this, a legendy taky! Všichni víme, že dobrodruh nemůže věčně hledat ztracené rodiče nebo co. V životě hrdiny přijde chvíle, kdy se z obyčejného válečníka stane velitel vlastní družiny a zloděj překročí hranice vlastního těla.

Mocná povolání jsou ve svých světech přílivové vlny: zdatní politici, bájní bojovníci, vládci prapůvodní magie. Přicházejí s vlastními armádami, spravují svá panství a dobývají.

:::note[Na co se můžeš těšit?]
- **Kruté manévry**, skrz jejich perky. Viz [Manévry](manoeuvres).
- **Postavení 3–5** v organizaci, skrz jejich perky. Viz [Organizace](organizations).
- **Jednotky**, které můžeš vytvářet a kterým můžeš velet. Viz [Jednotky](units).
- **Obléhací stroje**, babeeeee…!
- **Jízda na dracích** a další pozoruhodné věci z hitových seriálů HBO.
- …a mnohem víc…
:::

Každé mocné povolání vyrůstá ze tří nebo čtyř pokročilých povolání a odemkne se, jakmile **ta pokročilá povolání dají dohromady 6 úrovní**, rozložených jakkoli. Jediné povolání to samo nezvládne, protože povolání končí na 5. Potom se zvyšuje až do 5 jako každé jiné povolání.

**Mocná povolání nemají dovednosti, jen perky.** Každý perk staví na dovednosti nižšího povolání a hází se s úrovní toho povolání: Vojevůdce, který velí armádě, pořád hází *Vedení v boji* se svou úrovní Válečníka.

:::note[Cesty k Vojevůdci]
Možné je jakékoli rozdělení. Na Vojevůdce stačí Válečník 5 / Lupič 1, Válečník 3 / Lupič 3 i Válečník 2 / Lupič 2 / Zvěd 2.

Jediné, co stojí za zmínku, je, že některé perky můžou být schované za povinnou úrovní.
:::

| Mocné povolání | Pokročilá povolání | Magie |
|---|---|---|
| **Vojevůdce** | Válečník, Lupič, Zvěd | Spící |
| **Ničitel** | Válečník, Hraničář, Vědmák | Skrytá |
| **Stín** | Lupič, Zvěd, Mág, Alchymista | Probuzená |
| **Inkvizitor** | Válečník, Čaroděj, Vědmák, Mág | Probuzená |
| **Žrec** | Hraničář, Druid, Šaman | Probuzená |
| **Černokněžník** | Čaroděj, Alchymista, Šaman, Druid | Probuzená |

Každé pokročilé povolání vede ke dvěma mocným povoláním; Válečník ke třem. Stěžujte si. Ideálně na michal@lossmeril.art.

::classes{rank="mighty"}$cs$
where slug = 'mighty-classes';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$[Editor postavy](/characters/new) tě tím vším provede a čísla za tebe zkontroluje.

1. **Vyber počáteční level** se svým PJ; viz tabulku níže.
2. **Vyber [rasu](races)** a jeden z jejích rasových perků.
3. **Utrať levely za [povolání](classes).** Každý počáteční level jde do úrovně povolání; pokročilá povolání se odemykají ze základních.
4. **Vyber perky povolání:** jeden za každou úroveň v každém povolání.
5. **Rozděl 15 bodů** mezi :body, :soul a :charisma. Přesně 15: počáteční levely víc nekoupí.
6. **Vyber [zázemí](backgrounds)**: počáteční vybavení, mince, Materiál, jazyky navíc a prostředí, které znáš.
7. **Vyber si [rysy](traits)**, jaké chceš. Jsou volitelné.
8. **Napiš krátkou povahu**: pár slov, ze kterých se dá hrát. Jak mluví, co chce, co nesnáší. Když ji budeš hrát dobře, můžeš si vysloužit [bonusy](bonuses).

| Začátek | Level | Typická postava |
|---|---|---|
| Z hadrů do zlata | 3 | Body rozložené mezi dvě povolání |
| Ostřílený | 7 | Dvě základní povolání a jedno pokročilé |
| Veterán | 9 | Dvě základní povolání a jedno pokročilé, výš |$cs$
where slug = 'creating-a-character';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Rasa u stolu moc neznamená (jeden rasový perk a rychlost chůze), ale v příběhu znamená hodně: kde jsi vyrostl, jak se na tebe NPC dívají, které vtipy zaberou. Žádné víly, upíři ani duchové. Ne, Garethe.

- **Rasový perk:** vyber jeden z perků své rasy.
- **Rychlost:** jak daleko se tvoje postava ve svém tahu posune jedním pohybem. Nejpomalejší cestovatel taky určuje tempo [cestování](travel).
- **Jazyky:** každá postava mluví Obecnou řečí. Rasy s vlastním [jazykem](languages) mluví i jím; ostatní si místo toho vyberou jeden jazyk navíc.

::races$cs$
where slug = 'races';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Zázemí je to, co tvoje postava dělala před dobrodružstvím. Jako v 5E, ale **bez zdatností v dovednostech**: ty pocházejí z povolání. Zázemí dává:

- **Počáteční vybavení**, **mince** a **Materiál**.
- **[Jazyky](languages) navíc**.
- **Známá prostředí**: místa, kde se postava vyzná, a lidi, se kterými umí jednat.

## Známá prostředí {#known-settings}

- Hod uvnitř známého prostředí dostane **+1**.
- Platí jen pro hody na :soul[Duši] a :charisma[Vliv]: vyznat se, najít toho správného člověka, smlouvat, dostat slyšení.
- Platí pro každý druh hodu: zkoušky, střety i obranné hody.
- Funguje i bez vhodného povolání: holé 2k6 + 1.
- O tom, jestli hod do prostředí spadá, rozhoduje PJ.

:::example[Smlouvání s překupníkem]{image="/img/rulebook/michal.webp"}
Michal, bývalý Zločinec, smlouvá s překupníkem o ukradený náhrdelník. To je zločinecké podsvětí, jeho známé prostředí: +1 navíc k úrovni Kejklíře.

Překupník ho stejně ošidí, jen míň.
:::

## Zázemí {#backgrounds}

::backgrounds

:::note[Měřítko]
1 zlatý je pro obyčejného člověka hodně. 1 stříbrný = 10 měďáků a 1 Materiál má hodnotu 1 stříbrného.
:::

:::note[Meče se neprodávají]
Meč má cenu malého jmění, ale kolik stojí, zaplatí jen rytíř, šlechtic nebo zbrojíř. Obyčejní řemeslníci ho k ničemu nepotřebují: dají ti za jeho železo zhruba desetinu ceny, v Materiálu nebo v mincích. Meče Vojáka a Šlechtice a postříbřená čepel Lovce netvorů se proto nechávají, ne proměňují v peníze.
:::$cs$
where slug = 'backgrounds';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$- Každý mluví **Obecnou řečí**.
- [Rasy](races) s vlastním jazykem mluví i jím. Ostatní si vyberou **jeden jazyk navíc** podle svého.
- [Zázemí](backgrounds) přidá jazyky navíc, které uvádí.

::languages

## Příbuzné jazyky {#related}

Některé jazyky vyrostly z jiných a tabulka je uvádí jako příbuzné. Jazyku, který neznáš, se můžeš pokusit porozumět, pokud je příbuzný s nějakým, kterým mluvíš. Hoď zkoušku, která sedí k tomu, čemu se snažíš porozumět, s **nevýhodou**. Neúspěch se dá odvrátit jako obvykle. Rozumět neznamená mluvit: můžeš sledovat, co se říká nebo píše, ale odpovědět v tom jazyce nemůžeš.

:::note[Ne pro hráčské postavy]
**Řeč králů** a **První elfštinu** se hráčské postavy naučit nemůžou: nikdo živý je neučí, nebo nechce. Pravidlo o příbuzných jazycích ale pořád dovolí tomu, kdo mluví Liturgickou řečí nebo Druhou elfštinou, vyluštit z nich nějaký řádek.
:::

:::example[Modré kopce, zelené kopce]
Lianne mluví Druhou elfštinou a na milníku najde vytesaný řádek v První elfštině. Ty dva jazyky jsou příbuzné, takže to zkusit může. PJ řekne Učenost a Lianne (Zaříkávač 2) hodí 3k6 a nechá si dvě nejhorší: 2 a 4, plus 2 je 8. O jedna méně než 9. Při Ohrožení 2 vyčerpá 2 :soul[Duše] a přijde na to: vzdálené kopce vypadají modře, takže ať leží dál po cestě cokoli, nečekej, že to bude lepší.
:::$cs$
where slug = 'languages';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Rys je výzva, kterou si pro svou postavu vybereš: **výhoda** a **nevýhoda**, jako negativní perky v hardcore režimu Kingdom Come: Deliverance II. Jsou volitelné a můžeš si jich vzít, kolik chceš.

- Rysy jsou barva a výzva; do tvého levelu se nepočítají.
- PJ může rysy rozdávat jako událost v příběhu a o rys můžeš přijít, když ho v příběhu překonáš.

:::example[Výbušný]{image="/img/rulebook/michal.webp"}
Michal si vezme *Výbušný*. Když se naštve, bije silněji, a družina se naučila stoupnout si mezi něj a každého, kdo zmíní jeho matku.
:::

## Rysy {#traits}

::traits$cs$
where slug = 'traits';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Levely uděluje tvůj PJ. Každý dá **jeden bod**, který můžeš investovat jedním ze čtyř způsobů:

1. **Zvýšit úroveň povolání**, až do 5. Přijde s jedním perkem toho povolání, jehož požadavky splňuješ.
2. **Vzít si nové povolání na 1. úrovni.** Základní povolání jsou vždycky otevřená; [pokročilá](advanced-classes) a [mocná](mighty-classes) potřebují nejdřív své rodiče.
3. **Vzít si perk navíc** v povolání, které už je na 5. úrovni.
4. **Přidat +1** k :body[Tělu], :soul[Duši] nebo :charisma[Vlivu].

:::note[Počáteční levely jdou do povolání]
Možnosti 3 a 4 jsou jen pro levely získané ve hře. Levely, se kterými postava začíná, jdou všechny do povolání.
:::

:::example[O jednu omluvu víc]{image="/img/rulebook/michal.webp"}
Po aféře s purkmistrem dá PJ Michalovi 8. level. Jeho :charisma 3 ho pořád zrazuje, takže si místo úrovně povolání vezme +1 :charisma[Vliv].

Není to moc, ale je to o jednu omluvu víc.
:::

## Kontrola postavy {#checking-a-character}

Každý bod někam jde, takže deník se dá vždycky zkontrolovat:

::formula[level = perky povolání + (Tělo + Duše + Vliv − 15)]

Počítej jen perky, které sis *vybral*: ne rasový perk, ne základní kouzla (ta jsou s povoláním zdarma) a ne aspekty (ty se odemknou samy). Zdroje počítej bez bonusů z perků.$cs$
where slug = 'leveling';

update languages set name = 'Second elvish |cs| Druhá elfština' where name = 'Second Elvish |cs| Druhá Elfština';
