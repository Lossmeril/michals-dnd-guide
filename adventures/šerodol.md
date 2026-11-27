# Vůně perníku


## 0: Prolog
Během prologu se hráči seznámí se základy boje, poznají **Starého Kokeše**, **Perníčkáře** a sestoupí do šerodolského údolí.

---
### Kokešova chaloupka
> Po dlouhém a líbezném podzimu jste se jako družina rozhodli opustit úrodné nížiny a ještě před tou nejhorší zimou přejít hory a nechat se zaměstnat na nějakém hradě. Doufáte, že tak přečkáte to nejnepříznivější období a zároveň si něco málo vyděláte.
> 
> Jdete už druhým dnem a hory, jakoby vás odmítaly pustit dál. Od časného rána stoupáte kamenitou stezkou a smrky kolem vás jsou s každým krokem nižší a pokroucenější. Nakonec je vystřídá už jen kleč, holé kamení a ostrý vítr, který se vám nemilosrdně prodírá pod pláště. Nad horským hřebenem se stahují těžká šedá mračna a z jejich temných útrob se začínají snášet první sněhové vločky. 
>
> Těsně pod sedlem stojí osamělá roubená chalupa. Její šindelovou střechu zatěžují kameny, z komína se líně vine kouř a kolem stavení se táhne nízký proutěný plot. Za ním se ještě před chvílí ozývalo spokojené kdákání slepic. Je to poslední obydlené stavení před průsmykem.
>
> Jakmile se však přiblížíte k vrátkům, poklidné kvokání vystřídá vyděšený křik. Dva vyhublí toulaví psi se protáhli dírou v plotě a právě teď prohánějí slepice po celém dvorku. Dveře chalupy se prudce rozletí a na zápraží se objeví stařík, který se s holí zdviženou nad hlavou nejistě žene na pomoc svým opeřeným svěřenkyním.
> 
> „Svatá Ludmilo! Svatá Anežko! Ne moje holky! Pomozte mi někdo!“

```npc
name: Stray dog |cs| Toulavý pes
subtitle: Medium animal, ordinary |cs| Střední zvíře, obyčejné
body: 9
soul: 3
charisma: 2
skills: Foot close combat +2, Wilderness movement +2, Wilderness survival +2 (smell)
armour: None (0)
speed: 8 m
threat: d4
senses: Keen smell and hearing
## Traits
***Pack.*** When the other dog is within 1 m of the same target, a free **Precise** on its attack.
***Coward.*** When the other dog goes down, it flees.
## Actions
***Bite.*** Reach 1 m. Hit: 1d6 + 2 piercing against NPCs; threat d4 against player characters.
```

#### Starý Kokeš
Místní "slepičí bača". Hubený stařík v ovčím kožichu, ve vousech peří. Mluví víc se slepicemi než s lidmi. Je laskavý, vděčný a trochu pomatený. Mluví pravdu, jen tak, že jí nikdo nerozumí.

> Stařík, kterému jste právě pomohli vypadá trochu unaveně, ale na svůj věk plný života. Na hlavě mu už moc nezbylo, zatímco bílý plnovous má stále úctyhodně hustý a plný slepičího chmýří. Na sobě má kožich z ovčí vlny a zbytek jeho šatníku je spíše praktický. Ve tváři má šibalský úsměv, který může být stejně radost ze života, tak šílenství.

**Po boji:**
- Kokeš děkuje, sbírá slepice a každou cestou počítá.
- Pozve družinu na práh a podá jim chléb a sůl: „Kdo mi zachránil holky, je u mě host." Hráči tak poznají zvyk dřív, než na něm začne záležet.
- Představí své slepice, všechny po svatých: **Ludmila, Anežka, Zdislava, Markéta, Barbora**. „Zdislava snáší nejvíc. Markéta kouše."
- Pak pyšně zvedne kohouta: „A tohle je **Půlknír**. Taky svatej, jenom o tom ještě neví."
    - Když se někdo zeptá na jméno: „Po rytíři. Ten taky nikdy nevěděl, kdy přestat kokrhat."

**Co ví:**
- Údolí za průsmykem se nazývá Šerodol, vládnou v něm už nejméně třicet let tři bratři: Krajemír, Lidovid a Miloslav. Že jste tam poznáte podle hraničních kamenů v průsmyku.
- V údolí žijou dobří lidé, co mu dělají dobré obchody.
- Máme tu pár zvláštních zvyklostí, ale na to si určitě zvyknete!
- Práce pro vás by mohla být na hradě.

**Hřbitůvek za chalupou:**
- Když se někdo porozhlédne, za chalupou najde asi dvacet křížků z klacíků, každý sotva na dlaň.
- „Koho tu pohřbíváte?" „Kluky."

**Odchod:** Kokeš ukáže holí k sedlu.
- „Jestli chcete přes sedlo, tak teď hned. Do setmění tam napadne po kolena."
- Zatímco odcházejí, mumlá si spíš pro sebe: „Holky tam dolů prodám, to jo. Kluky ne. Údolí nemá kluky rádo."
- Když se ptají dál, mávne rukou, nebo dodá jen: „Kameny je nemaj rády."

Družina se následně vydává na cestu do horského průsmyku.

> Odcházíte směr horský průsmyk. Vánice už mezitím stihla pořádně zesílit. Kokeš vám mává na cestu a pod paží drží Svatou Ludmilu. Nebo snad Markétu? Gestikuluje na vás, ať mu nemáváte a radši jedete/jdete co nejrychleji.

---
### Průsmyk

>Za Kokešovou chalupou se stezka zužuje a stoupá k sedlu. Sníh už nepadá, ale letí vodorovně, rovnou do tváří, a stopy, které za sebou necháváte, mizí dřív, než se stačíte ohlédnout.
>
>V nejvyšším místě sedla stojí po obou stranách cesty dva vysoké kameny, ohlazené větrem jako dva staří vrátní. Kdosi do nich kdysi vytesal znaky, ale čas je skoro smazal.
>
>Jakmile projdete mezi nimi, něco se změní. Vítr nepolevil a mraky jsou pořád stejně těžké, jen to málo světla, co jimi prosvítá, jako by ztratilo barvu. Slunce za nimi pořád tušíte, ale působí na vás, jako by to byla pouhá vzpomínka; jako popis člověka, co už dávno zapomněl, jak slunce vypadá, ale i přesto se ho pokusil popsat.
>
>Kousek pod kameny se nad stezkou sklání skalní převis. Pod ním je vyšlapaná plocha, staré ohniště po pocestných a pár suchých větví. Místo jako stvořené k tomu, abyste tu přečkali nejhorší vánici.

**Hraniční kameny:**
- Jsou to posvátné staré prahy, které ale jsou momentálně v Perníčkářově moci. Hráči to zatím nemají jak poznat.
- Krajemír cítí každého, kdo mezi nimi projde. Teď ví, že do údolí přišli cizinci, a hlavně, kdo jde kousek za nimi.

**Čeho si lze všimnout:**
- Kdo je zkoumá, pozná, že je mezi nimi magické spojení, které vymezuje údolí.

**Odpočívadlo pod převisem:** je to past, i když o tom nikdo neví. Nechte hráče, ať se usadí a začnou rozdělávat oheň.

#### Perníčkář Janek
>Zatímco se snažíte přečkat vánici, v mlze na cestě, odkud jste přišli, se začne ozývat zvuk. Nejdříve slyšíte pouze vrzání, ale brzo se k nim přidá i klapání kopyt a cinkání. Z vánice se vynoří koník s rolničkou na krku, za ním malý vozík zakrytý navoskovaným plátnem a vedle něj muž. Nevysoký, zavalitý, s tváří, na kterou byste zapomněli hned, jak se otočí. Jde o holi, kterou si pohazuje. Oči má ale veselé a usmívá se, jako by byl rád, že konečně vidí někoho živého. Z vozíku to hezky voní: nejspiše med a hřebíček.
>
> „Tady bych nesedal, přátelé," řekne vlídně a ani nezastaví. „Mám z toho kopce špatný pocit. Pojďte, pojďte, dole je teplo."

**Kdo to je:**

Perníčkář, kterému děti říkají Perníkový dědek. Žoviální, zdvořilý a štědrý. Nikdy nevypadá, že spěchá, a nikdy nepřijde pozdě.
- Na vozíku veze perníky, srdce na provázcích a další cukroví.
- Koník se jmenuje Pepř. Na nic nenaléhá.
- Když hráči nechtějí jít, pokrčí rameny a jde sám, pomalu, aby ho dohnali.
    - Chodím tudy už pár let, tady padají laviny každý pátek...

```npc
name: Janek the gingerbread seller |cs| Perníčkář Janek
subtitle: Medium human, ordinary (so it seems) |cs| Střední člověk, obyčejný (zdánlivě)
body: 11
soul: 6
charisma: 6
fate: 3
skills: Negotiation +4, Influence and deception +4, Foot close combat +1
armour: Travelling clothes (0) |cs| Cestovní šaty (0)
speed: 6 m
threat: d4
## Traits
***Lucky old fool.*** Fate 3: a lost roll becomes a win. Describe it as luck: the opponent slips on the ice, the punch misses by a hair. |cs| ***Šťastlivec.*** Osud 3: prohraný hod se mění ve výhru. Popište to jako náhodu: protivník uklouzne na ledu, rána mine o vlásek.
***Never ruffled.*** When his Soul or Charisma runs out, nothing happens. He laughs, concedes the point, and is as sure of himself as before. |cs| ***Nic ho nerozhodí.*** Když mu dojde Duše nebo Charisma, nestane se nic. Zasměje se, uzná bod a je si jistý jako předtím.
## Actions
***Walking stick.*** Reach 1 m. Hit: 1d6 + 1 bludgeoning against NPCs; threat d4 against player characters. |cs| ***Hůl.*** Dosah 1 m. Zásah: 1d6 + 1 drtivé proti NPC; proti hráčským postavám kostka hrozby d4.
```

- Na papíře je to obyčejný chlapík. Takhle ho hrajte při pošťuchování, přetahované o slovo nebo přátelském zápasu.
- Přátelské klání není ublížení podle zákona pohostinství. Útok, který mu má doopravdy ublížit, ano, a ten Janek zastaví zastavením času.
- Osud se obnovuje s východem slunce, takže v nekonečné noci se mu neobnoví. Jeho štěstí tedy jednou dojde.


**Lavina:**
>Sotva ujdete pár desítek kroků, nad vámi to zaburácí. Ze svahu se utrhne bílá stěna, převalí se přes převis a zasype ho i s ohništěm. Když se sníh usadí, cesta zpátky je pryč. Kde stála stezka ke Kokešovi, je teď jen hladký nával sněhu, vyšší než dva chlapi.
>
>Perníčkář si opráší rameno, kde se mu usadila hroudička sněhu, podívá se na zasypané odpočívadlo a pak na vás. „No vidíte. Teď byste tam trčeli zavalení..."

- Lavinu poslal Krajemír, a mířil na Janka, ne na družinu. Hráči to zatím nevědí.
- Když někdo zůstal pod převisem: Janek ho stihne strhnout stranou, nebo se ho pokusí vyhrabat.
- Lavina: záchranný hod na Ohrožení 4, jinak jizva na Tělo s kostkou hrozby d6 a Restrained, dokud ho někdo nevyhrabe.
- Průsmyk je zavřený. Zpátky ke Kokešovi se dá jen prokopat, obejít po kozí stezce přes hřeben, nebo sníh odstranit magií.

**Medový chléb na cestu:**

>Perníčkář sáhne pod plátno a každému z vás podá kousek perníku. „Na cestu. Se solí, jak se patří." Z malého váčku vám na každý kousek nasype špetku soli. Perník je ještě teplý; plátno na vozíku musí držet teplo hodně dobře.

Kdo sní perník se solí, je jeho host. Podle starého zvyku na cestě platí špetka soli s chlebem stejně jako chléb a sůl na prahu. Janek to nevysvětluje. Spolu se zachráněným životem je to první dluh.

**Co Perníčkář ví (v průsmyku):**

- Do Šerodolu jezdí často, prodávat perník. „Děti tam mají perník rády. Dospělí taky, jen to nepřiznají."
- Průsmyk teď bude zavřený. „Zpátky už nepůjdete, nanejvýš na jaře."
- Když se někdo ptá na lavinu: „Hory jsou náladové. A místní páni taky. Lidi je moc nemají rádi, i když mě nikdy nic zlého neudělali..." Víc neřekne. "To se musíte poptat sami..."

---

### Sestup do údolí

> Jak sestupujete ze sedla do údolí, vánice pomalu polevuje. Přechází do mírného sněžení, poté jenom pár vloček a nakonec i ty z ledové oblohy zmizí. Stezka klesá mezi smrky, které jsou tu zase vysoké a husté, a pak se les najednou rozestoupí a před vámi leží celé údolí.
>
> Je menší, než byste čekali. Úzká kotlina sevřená horami, dole potok, kolem něj roztroušená ves a nad ní, na skalnatém ostrohu, hrad s kamennou zdí a jednou hranatou věží. Dál na hřebeni, stranou od všeho, stojí osamělá věž. V jednom jejím okně svítí světlo.
> 
> Všechno tu má barvu odpoledne, které se nemůže rozhodnout, jestli už je večer, nebo ne. Nebe je skvrnité, zahalené mlžným oparem. Místy ležící sníh je šedý, střechy jsou šedé a i kouř z komínů jako by stoupal pomaleji, než by měl. Vypadá to tu ospale.
>
> "Za chvíli budeme ve vesnici. Ta se taky jmenuje Šerodol: moc vynalézaví tu nejsou. A pověrčiví habaděj..."

**Čeho si lze všimnout:**
- Lovec, šaman, nebo druid si všimne, že potkají-li nějaké zvíře, zůstane na ně zírat, místo útěku
- Válečník, hraničář a zvěd si mohou všimnout, že je na cestě není žádná hlídka

**Děti na kraji vsi:**
> Na kraji vsi si na zasněžené louce hraje hlouček dětí na vojáky. Kluci i holky mávají klacky jako meči a každé z nich má na tváři sazemi namalovanou půlku knírku, vždycky jen na pravé straně.
>
> Když vás uvidí, hra ustane. Děti ztichnou a zírají, jedno z nich couvne za ostatní. Pak si všimnou vozíku a koníka s rolničkou a louka vybuchne radostí.
> 
> „Perníkový dědek! Perníkový dědek přijel!"
> 
> Perníčkář se směje, sahá pod plátno a rozdává kousky perníku do natažených ručiček. „Pomalu, pomalu, medového chleba je dost pro všechny."

Je-li v družině někdo, kdo vypadá jako válečník, jeden z chlapců, nejstarší z nich, ho může vyzvat na souboj s klacky.

**Hra na Půlkníry:**
- děti si hrají na Půlknírův poslední boj.
- „Já jsem Půlknír!" „Ne, ty jsi byl Půlknír včera, dneska jsem Půlknír já!"
- Když se někdo zeptá, kdo je Půlknír: „Nejlepší rytíř na světě!" „Akorát umřel." „Neumřel, jenom odešel!"
- Víc o něm děti nevědí. Zbytek legendy přijde ve vsi.

**Čeho si lze všimnout:**
- Opodál stojí havran a vše sleduje. Když se kolem něj prožene dítě, neuletí, jenom lehce poposkočí, aby nebyl zašlapán.

### Vesnice Šerodol
> Ves je tichá. Okenice jsou přivřené, i když se ještě nesetmělo. Ve skoro každém okně stojí na parapetu vyřezávaná figurka nebo panenka z otepi slámy, obličejem ven. Žena, která vás míjí, nese v náručí slepici zabalenou do šátku jako mimino a pevně si ji tiskne k sobě.
>
> Lidé Perníčkáře zdraví, jeden mu podá ruku, jiný se zastaví na kus řeči. Vám se vyhýbají pohledem.

- Figurky a panenky jsou dary od pánů. Lidovid se jimi dívá. Hráči to zatím nevědí. Kdo se na figurku zadívá déle, má pocit, že se dívá i ona.
- Slepice jsou v údolí vzácné. Proto ta žena nese svou jako poklad.
- Lidé jsou ke družině zdvořile chladní. Kdo se na něco zeptá, dostane krátkou odpověď a rychlé rozloučení. Pánům se nic špatného neřekne, ale nikdo je ani nechválí.

**Rozcestí**

> Uprostřed vsi se cesta větví. Jedna odbočka vede k hospodě, z jejíchž oken se line teplé světlo, druhá stoupá serpentinami k hradu. Perníčkář zastaví koníka a otočí se k vám.

**Co Perníčkář říká (na rozcestí):**
- Tady se rozloučí: „Já tu mám ještě nějaké kšefty. Ale co si budem', v tak malém údolí se určitě ještě potkáme."
- Zákon pohostinství: „A ještě něco, ať nenarazíte. Tady v Šerodolu se drží starý zvyk. Kdo vás přivítá chlebem a solí, bere vás pod svou střechu, a kdo je přijme, je jeho host. Host hostiteli neublíží a hostitel hostu taky ne. Lidi si na tom hodně zakládají. Kdo to poruší, na toho čeká kletba."
- Pošle je na hrad: „Práci určitě najdete na hradě. Páni jsou pohostinní lidé. A koneckonců jste teď na jejich panství, je zdvořilé se alespoň představit." Usměje se.
- Když se někdo zeptá, jestli jsou teď jeho hosté: zasměje se. "Technicky ano..."

**Co Perníčkář ví (před setměním):**

Janek nikdy nelže, jen neříká všechno. O smlouvě, přáních ani o noci nepromluví. Od věže družinu odrazuje, protože tam je jediný člověk, který zná znění smlouvy.

- **Věž:** „Tamta se světlem? Tam bych nechodil. Nic dobrého tam není, jen staré kamení a staré trápení." Když naléhají: „Páni si ji hlídají. Zeptejte se jich, jestli chcete slyšet lež."
- **Půlknír:** „Ach, Půlknír. Takoví už se nerodí." Smutně se usměje. „Býval to dobrý člověk. Možná pořád je." Víc neřekne.
- **Páni:** „Znám je už dlouho. Kdysi jsem jim prodal něco sladkého a doteď mi to nezaplatili." Zasměje se, jako by to byl vtip. „Ale to je mezi námi."
- **On sám:** „Peču perník. Pro děti, a pro dospělé, když jsou hodní." Odkud je: „Odevšad trochu." Jméno: „Janek. Ale děti mi říkají jinak."
- **Vesnice:** „Dobří lidé. Pověrčiví, ale dobří. Je tu hostinec, kovárna, farnost... všechno, co tu má být. Když vám tu někdo poradí, ať počítáte stíny na zdi, tak je počítejte. Neuškodí to."
- **Kokeš:** „Starý Kokeš má víc rozumu, než se zdá. Jen ho nikdo neposlouchá."
- **Slepice:** „Slepice tu mají cenu zlata... protože se tu nedaří kohoutům..."


## 1: Pohostinní páni

V první kapitole se družina setká s pány Šerodolu, přijme jejich chléb a sůl a dostane podivný úkol.

### Cesta k hradu

> Cesta k hradu stoupá serpentinami po skalnatém ostrohu. Čím výš jdete, tím je ves pod vámi menší a tišší. Slunce, nebo to, co tu za slunce platí, se sklání k hřebenům, ale nebe nad nimi nezrudne. Jen ještě o kousek víc zešedne.
>
> Hrad není velký. Kamenná zeď, brána z tmavých trámů pobitých železem a nad ní hranatá věž. Na hradbách nikoho nevidíte. Teprve když se přiblížíte k bráně, ozve se zpoza ní hlas a otevře se malé okénko.
>
>„Kdo jste a co chcete?"

**U brány:**
- Strážný bránu neotevře, dokud se nepředstaví. Zeptá se na jméno třikrát, jak je tu zvykem, když se stmívá.
- Družina má požádat o uvítání v kraji. Když to neudělá sama, strážný se zeptá: „A vy žádáte o uvítání?"
- Pak je nechá chvíli čekat v chladu. Brána se otevře, až když přijdou páni.

### Nádvoří

> Brána se se skřípěním otevře. Nádvoří je prostorné, zasněžené a skoro prázdné. U zdi stojí dva strážní a jeden sluha s plátnem přes ruku, jinak nikde nikdo. Na hrad tohohle rozměru je to až nepříjemně málo lidí.
> 
> Uprostřed nádvoří na vás čekají tři muži. Všichni tři jsou mladí, nanejvýš ve věku vašich starších bratrů. U nohou nejstaršího z nich leží dva velcí psi a nehnou se.
>
> "Urození pánové, Krajemír, Lidovid a Miloslav ze Šerodolu," zahřímá strážný, což působí na prázdném nádvoří trochu komicky.

**Páni Šerodolu**

Bratři nejsou zlí v tom, co říkají, jen v tom, co zamlčí. Hrajte je jako unavené lidi, kteří nemají čas vysvětlovat.
- **Krajemír, nejstarší.** Vysoký, ošlehaný, ruce lovce. Stojí na mrazu bez pokrývky hlavy. Má dlouhé rovné havraní vlasy. Mluví málo a často se odmlčí, jako by poslouchal něco, co nikdo jiný neslyší.
- **Lidovid, prostřední.** Hubený a bledý, s tmavými kruhy pod očima, protože nikdy nespí. Má vlasy stejné jako jeho starší bratr, na tváři mírné strniště. Oči mu pořád těkají. Osloví hráče jménem dřív, než se mu představí.
- **Miloslav, nejmladší.** Hezký, vřelý a usměvavý, rozený hostitel. Středně dlouhé vlnité černé vlasy. Už od prvního pohledu je to člověk, kterému můžete věřit. Mluví rád, ale se zvláštně smutným tónem.

**Chléb a sůl**
> Nejmladší z bratrů vystoupí a sluha mu podá plátno, na kterém leží bochník chleba a mistička soli. Ulomí kus chleba, omočí ho v soli a podá ho každému z vás.
> 
> „Vítejte v Šerodolu," řekne Miloslav s úsměvem. „Pod naší střechou jste hosté."
> 
> Pak vám každému vtiskne do dlaně malou dřevěnou figurku, vyřezanou tak jemně, že má i řasy. „Malý dárek na uvítanou. U nás je zvykem, že každý host dostane jednu."

- Druhý dluh. Družina je teď hostem pánů. Bratři jí nesmějí ublížit a ona jim taky ne.
- Figurka je jedna z Lidovidových. Dívá se jí. Vyhodit ji je urážka hostitelů, nechat si ji znamená být sledován.
- Strážní a sluha jsou Miloslavem okouzlení. Mluví o něm s oddaností, která je trochu moc.
- Krajemír, ještě než o ní kdo promluví: „Ještě že vás ta lavina minula."
    - Když se ho někdo zeptá, jak to ví:
        - Krajemír: „Jsme páni tohohle kraje. Víme, co se v něm děje."
        - Lidovid: „Hlídky nám to řekly."
- Když hráči zmíní Perníčkáře, bratři ztuhnou. Lidovid odpoví jen: „My víme, s kým jste přišli." Miloslav to rychle zahladí.

**Čeho si lze všimnout:**

- Lovec, šaman, druid si mohou všimnout, že psi u Krajemírových nohou nezavrčí, ani když se k nim někdo přiblíží. Neštěknou vůbec, celou dobu.
- Lupič a zvěd si mohou všimnout, že dlažba nádvoří je na několika místech mírně propadlá, hrad působí zpustošeně.
- Lidovid ví věci, které vědět nemá: jména, odkud přišli, co jedli. Kdo si v údolí všiml, že na cestě žádná hlídka nebyla, ví, že lže.

**Úkol**

- „Hledáte práci."
- „My vám jednu nabídneme. Zní to zvláštně, ale nikdy jsme po nikom nechtěli nic důležitějšího."
- Krajemír se poprvé podívá přímo na vás. „Dnes večer bude v hospodě Rozcestí sedět v koutě muž nad lahví červeného vína. Zabijte ho."
- „Kdo nám s tím pomůže," dodá Miloslav, „má u nás práci a střechu nad hlavou na celou zimu, neutuchající vděčnost našeho rodu a můžete si vybrat cokoliv z naší skromné pokladnice."

**Co páni říkají (na hradě):**

- Kdo je ten muž: „Na tom nezáleží." Jméno neřeknou.
- Proč: nemohou to říct. Kdo z bratrů se o smlouvě pokusí promluvit, tomu slova uvíznou v krku.
- Proč to neudělají sami: vyhnou se odpovědi. „Máme na hradě dost starostí." a "Tohle není práce pro pány, jestli víte, co tím myslíme." Ve skutečnosti dnes v noci hrad neopustí.
- Omlouvají se hráčům, že po nich musí chtít takovýto úkol bez vysvětlení a s takovou mlčenlivostí, ale ujištují je, že se jedná o otázku života a smrti.

**Co páni vědí (před setměním):**

Bratři nelžou o všem, jen o tom, co by je prozradilo. O smlouvě mluvit nemohou, o snoubence a věži nechtějí. Hráči by z nich zatím neměli mít pocit, že je něco hodně špatně. Jen trochu.

- **Věž:**
    - „Strážní věž z dob obléhání. Už se rozpadá..."
    - „Je to prokleté místo, z dob před dobytím našimi předky..."
    - Na světlo v okně: „Poslali jsme tam hlídku, aby lidi spali lépe..."

- **Půlknír:**
    - Krajemír: „Nejlepší muž, s jakým jsem kdy stál v boji."
    - Miloslav: „Byl to otcův rytíř. Učil mě držet meč."
    - Kde je teď: Lidovid: „Po válce odešel." Víc neřeknou. Vědí, kde je, a nelžou docela, jen zamlčí.

- **Páni sami:**
    - Vládnou od otcovy smrti: „Otec zemřel ve spánku, v nejhorších časech. Údolí jsme pak ubránili sami."
    - Když někdo zmíní, jak mladě vypadají: Miloslav se zasměje: „Horský vzduch." Lidovid: „Na věku nezáleží.", "Děkujeme moc..."

- **Perníčkář:**
    - Bratři ztuhnou. Krajemír: „Nemluvme o něm. Známe ho moc dobře, je to divný chlap..."
    - Miloslav: „Nevěřte každému, kdo vám dá něco sladkého."

- **Vesnice:**
    - Miloslav: „Naši lidé. Mají nás rádi, i když to neříkají nahlas."
- **O figurkách:** „Dárky. Je to taková naše tradice, zdejší lidé jsou pověrčiví a tyto figurky vždy nosily štěstí..."
- **O pověrách:** Krajemír: „Lidi tu jsou pověrčiví. Nechte je, mají k tomu důvod."
- **Kokeš:**
    - Krajemír: „Kokeš nám vozí slepice. Jediný, kdo ještě chodí přes průsmyk."
    - Miloslav: „Je trochu blázen, ale poctivý."
**Slepice:**
    - Lidovid: „Slepice jsou tu vzácné. Kdo zabije slepici, tvrdě za to zaplatí."
    - **Kohouti:**
        - Krajemír: „Kohouti tu nežijí. Je to tak odjakživa." Lež: je to tak čtyřicet let.

**Odchod z hradu**
> Brána se za vámi zavře. Když sestupujete serpentinami zpátky do vsi, slunce zapadne docela. V údolí se rozsvěcují okna a nejjasněji ze všech svítí to v osamělé věži na hřebeni.

---

### Hospoda Rozcestí
#### Rváč před hospodou
 
> Když scházíte serpentinami zpátky do vsi, před hospodou Rozcestí stojí v rozhalené košili chlap jako hora a z rozpálené hlavy mu do mrazu stoupá pára. Ruce má černé od kovárny, předloktí jako špalky. Přišel se zjevně venku zchladit. Zahlédne vás, jak sestupujete od hradu, a jeho tvář potemní. Udělá pár kroků a postaví se vám do cesty.
>
> „Vy jdete od pánů, co?" Odplivne si do sněhu. „Takovým, co stojej s pánama bok po boku, my tady nevěříme."
 
**Pro vypravěče:**
- **Kovář Bořek**: horká hlava, ne zlý člověk. Pánů se jako jeden z mála nebojí, a tak se aspoň vytahuje na cizích.
- **Dvě cesty:**
    - **Uklidnit ho slovy.** Výzva proti jeho Vlivu. Pomůže vtip, pozvání na pivo, nebo uznání, že pánům nikdo z družiny nic nedluží.
    - **Pěstní souboj jeden na jednoho.** Na hluk se z hospody vyhrnou místní, udělají ve sněhu kruh a sázejí. Zbraně se netasí. Kdo tasí, toho Bořek i hospoda odsoudí jako zbabělce.
- **Slabé místo je pýcha:** prohra před celou vsí ho zlomí víc než rána.

```npc
name: Bořek the smith |cs| Kovář Bořek
subtitle: Medium human, ordinary |cs| Střední člověk, obyčejný
body: 13
soul: 4
charisma: 5
skills: Fighter skills +2
armour: Leather apron (0) |cs| Kožená zástěra (0)
speed: 6 m
threat: d4
## Actions
***Fists.*** Reach 1 m. Hit: 1d4 + 2 bludgeoning against NPCs; threat d4 against player characters. |cs| ***Pěsti.*** Dosah 1 m. Zásah: 1d4 + 2 drtivé proti NPC; proti hráčským postavám kostka hrozby d4.
```
#### Hostinský
Ať to skončí jakkoliv, do rvačky zasáhne hostinský. Bojuje se do první jizvy hráče, nebo do 5 zbývajících telesných bodů u Bořka. Vyhraje-li někdo z hráčů, Bořek uzná, že se mýlil a omluví se. U vesničanů tak trochu opadne opatrnost. 

> Ve dveřích hospody se objeví hostinský, prošedivělý mužík s utěrkou přes rameno. „Bořku, jdi se vyspat." Pak se obrátí k vám. „Nezlobte se na něj, má hlavu horkou. Pojďte dál, venku zmrznete."
>
> Na prahu vám podá bochník a misku soli. „Pod mou střechou jste hosté. Postele nahoře jsou čisté a polévka teplá."
 
**Pro vypravěče:**
- **Hostinský Ondřej**. Ochotný, ustaraný, pánů se bojí.
- **Třetí dluh.** Družina je teď hostem i v hospodě.

#### Uvnitř
 
> Uvnitř je teplo a dusno, voní tu kouř, pivo a mokrá vlna. Pod začouzenými trámy sedí u stolů pár místních a o něčem si šeptají.
>
> V nejzazším koutě, u malého stolku, sedí Perníčkář. Před sebou má láhev tmavého vína a jednu sklenici. Když vás uvidí, zvedne ji na pozdrav.

**Čeho si lze všimnout:**
- Na polici za výčepem stojí vyřezávaná figurka, obličejem do lokálu.
 
**Pro vypravěče:**
- **Figurka na polici** patří Lidovidovi. Hospoda je sledovaná jako všechno ostatní.
- **Na láhvi** je vypálený znak martikovského vinařství. Kdo se podívá zblízka, přečte si ho. Hráči zatím nevědí, že je to víno, které páni zakázali.

#### Perníčkář v koutě
 
> „Říkal jsem, že se potkáme," usměje se, když k němu přijdete. „Posaďte se. Tady v koutě je nejtepleji."

- "Máte mě zabít? Ale proč, prosímvás, to je nějaký nesmysl... Sedněte si a napijte se se mnou. Mám pro vás nabídku..."
 
**Když na něj zaútočí:**
 
> „Jedli jste můj chléb," řekne tiše a úsměv mu z tváře nezmizí. „Opravdu chcete pokračovat?"
 
- Když pokračují, **zastaví čas** pro všechny kromě družiny.
> Všechno ztichne. Plamen v krbu ztuhne uprostřed pohybu, kapka piva visí ve vzduchu nad džbánem. Cítíte všechno, dech, tlukot vlastního srdce, a nemůžete se pohnout. Perníčkář vstane, pomalu obejde stůl a jednomu po druhém vám vezme zbraně z rukou. Položí je úhledně na svůj stolek a na každou dá kousek perníku. Pak si zase sedne, napije se a luskne prsty.
>
> Svět se dá do pohybu. Ležíte na podlaze, jeden přes druhého, a celá hospoda se směje, jak jste zakopli o vlastní nohy.
 
Proti této akci se nelze bránit.

**Protinabídka:**
 
> Perníčkář si nalije a podívá se na vás přes okraj sklenice. „Páni vás poslali, abyste mě zabili. Já vím, nic si z toho nedělejte. Ale víte, jak to chodí. Zachránil jsem vám život a nakrmil vás. Takže teď já poprosím vás o malou službičku."
>
> Přisune k vám láhev. „Zaneste tohle pánům na hrad. Jako dar ode mě. Páni mi kdysi něco slíbili a já nemám rád, když lidé nedodržují sliby."
>
> Pak se usměje. „Mám mnoho talentů. Když mi s tím pomůžete, možná vás dokážu odměnit. Čímkoliv, oč si řeknete."
 
**Co Perníčkář ví (v hospodě):**
- **Proč ho chtějí páni mrtvého:** „Protože jim připomínám, co slíbili."
- **Co slíbili:** „To je mezi mnou a jimi. O tom se nemluví s cizinci." O smlouvě nepromluví. Pokud je družina úplně ztracená, viz *Výmluva na slib* v pozdějších kapitolách.
- **Proč víno:** „Je to dobré víno. Páni ho mají rádi, jen si to nepřiznají."
- Zbytek viz *Co Perníčkář ví (před setměním)*.
#### Opilec
 
> Když se od Perníčkářova stolu vracíte, přitočí se k vám vrávoravý chlapík s nosem jako švestka. Oči mu sjedou k láhvi. „Martikovský víno?" zašeptá, jako by vyslovil jméno svaté. „Dám vám za něj víc stříbra, než stojí moje chalupa."
 
**Pro vypravěče:**
- **Opilec Havel**
- **Co ví:** páni martikovské víno zakázali v celém kraji. Nikdo neví proč. Dá se sehnat jen pašované přes hory, a to málokdy. „Kdo ho pije, pije zakázané. A zakázané chutná nejlíp."
- **Když mu ho prodají:** víno vypije doma a prázdnou láhev hodí na kompost za svou chalupou. Odtud ji družina může později vyhrabat. **Smlouvě stačí láhev, i prázdná.**

### Znovu na hradě
 
> Je už tma, když znovu stoupáte k hradu. Brána je zavřená a za okénkem se ozve stejný hlas. Na jméno se ptá třikrát.
 
- Když strážný uvidí láhev, ucouvne od okénka, jako by mu ji strkali pod nos hořící. „To sem nenoste. To se na hrad nenosí."
- **Na láhev nesáhne.**
- Pány po setmění nezavolá. „Páni po setmění nepřijímají. Přijďte ráno."
- Kdo se stráží hádá, nic nezmůže. Brána se do rána neotevře.

### Noc v hospodě
 
> Hostinský vám ukáže postele pod střechou. Slamníky voní senem, peřiny jsou těžké a teplé. Když se ještě naposledy ohlédnete dolů do lokálu, Perníčkář pořád sedí v koutě nad svou sklenicí. Zvedne ji k vám.
>
> „Dobrou noc, přátelé. A sladké sny."
 
- Odpočinek funguje normálně, počítá se jako kvalitní odpočinek.

### Ráno, které nepřišlo
 
> Probudíte se odpočatí, s pocitem, že jste spali dlouho. Za okenicí je pořád tma.
>
> Chvíli si říkáte, že je ještě brzo. Venku je tma jako o půlnoci a na obloze se nic nemění.
>
> Dole v lokálu panuje lehký rozruch. Těch pár lidí, co se v hospodě sešlo ustrašeně debatují nad tím, co se děje. Slyšíte jen "Proč to slunce nevychází?" V koutě sědí Perníčkář, na stejném místě, se stejnou sklenicí, jako by se celou noc nepohnul.
 
- **Tady začíná otevřený svět.** Družina může jít kamkoli v údolí.

