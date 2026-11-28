# Vůně perníku

## Pozadí příběhu

**Krátce:** Před čtyřiceti lety tři bratři zavraždili otce, zachránili údolí a uzavřeli smlouvu s ďáblem, který prodává perník. Dnes v noci si přichází pro dluh.

**Dávno:**
- V údolí vládla **Královna lesa, Stará**: duch zdejší přírody, jejímž srdcem je živá voda pod hradním kopcem. Lidé jí každou zimu dávali dítě. V létě spala.
- **Zakladatel**, dědeček dnešních pánů, ji s kněžími Hvězdného boha zahnal a nad její studánkou postavil hrad.

**Před čtyřiceti lety:**
- Vládl **starý pán**, laskavý k lidem a slabý proti nepřátelům. Měl tři syny, **Krajemíra, Lidovida a Miloslava**, a věrného rytíře **Půlkníra**.
- Nepřítel oblehl údolí a kopal pod hrad štolu. Synové ji zatopili. Štola se ale prokopala až ke studánce a utopení havíři vstali jako otroci živé vody.
- **Synové otce otrávili** (Krajemír si u babky kořenářky vzal oměj „na vlky"), převzali vládu a nepřítele vyhnali. Bez toho by údolí padlo. Oficiálně starý pán zemřel ve spánku. **Půlknír o vraždě neví.** Přísahal starému pánovi: „Budu chránit tvé syny, dokud budou živi."
- Pak se bratři na rozcestí pod Šerodolem sešli s **Perníčkářem** a snědli jeho perník. Každý si přál jednu věc:
    - **Krajemír**, aby mu země odpovídala. Cítí všechno v údolí, poroučí zvěři a jeho nálady hýbou krajem. Jeho přítomnost drží Starou zapečetěnou.
    - **Lidovid**, aby viděl vše, co se v kraji děje. Vidí figurkami, které páni rozdávají do každého domu, a posílá stíny, aby slídily. Nikdy nespí.
    - **Miloslav** nevěstu, která ho bude milovat. Jeho snoubenka **Svatava** ho milovala už předtím. Když se dozvěděla, co si přál, odešla od něj. Miloslav navíc dokáže okouzlit kohokoli kromě ní, a vždycky ví, kde je a co cítí.
    - **Všichni tři** nestárnou ani neumírají, dokud smlouva platí. Za to propadnou jejich duše, až se všichni sejdou s Perníčkářem nad lahví martikovského vína. Nesejdou-li se do rozbřesku čtyřicátého roku, smlouva padá.
- **Svatava** je jediná svědkyně znění smlouvy. Páni ji zavřeli do věže a Půlknír ji hlídá. Protože páni nestárnou, nestárne ani on, a nemůže zemřít.
- **Hraniční kameny** v průsmyku jsou staré posvátné prahy, teď v Perníčkářově moci. Každý kohout, který jimi projde, padne. V údolí už čtyřicet let nezakokrhal kohout.

**Dnes v noci:**
- Čtyřicet let uplynulo. **Perníčkář drží rozbřesk zpátky:** nad údolím nekončí noc. Podle starých lidí ale rozbřesk přichází s kuropěním.
- Páni zakázali martikovské víno, dnes v noci neopustí hrad a Perníčkáře nikdy nepozvali pod svou střechu. Najmou družinu, aby ho zabila. Perníčkář po družině chce, aby k pánům dostala láhev a jeho samotného.

**Dva konce:**
- **Perníčkářův plán:** láhev ve štole pod nádvořím a Perníčkář v hradě, tváří v tvář všem třem. Páni přijdou o duše, údolí zůstane bez pánů a Starou už nikdo nedrží.
- **Konec noci:** kohout zakokrhá v údolí a smlouva padá. Páni začnou zase stárnout: navenek dvacetiletí, uvnitř se šedesáti lety života a těžkým břemenem. Starou pak musí zapečetit sami.


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
> Ves je tichá. Okenice jsou přivřené, i když se ještě nesetmělo. Žena, která vás míjí, nese v náručí slepici zabalenou do šátku jako mimino a pevně si ji tiskne k sobě.
>
> Lidé Perníčkáře zdraví, jeden mu podá ruku, jiný se zastaví na kus řeči. Vám se vyhýbají pohledem.

**Čeho si lze všimnout:**
- Ve skoro každém okně stojí na parapetu vyřezávaná figurka nebo panenka z otepi slámy, obličejem ven. Kdo se na figurku zadívá déle, má pocit, že se dívá i ona.

**Pro vypravěče:**
- Figurky a panenky jsou dary od pánů. Lidovid se jimi dívá. Hráči to zatím nevědí. Ve popisech je nezmiňujte, ať je hráči hledají sami.
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

- "Máte mě zabít? Ale proč, prosímvás, to je nějaký nesmysl... Sedněte si a napijte se se mnou. Mám pro vás naídku..."
 
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

---

## 2: Dlouhá noc

Ve druhé kapitole se údolí otevře. Družina se ve tmě ptá, hledá a skládá dohromady, co se v Šerodolu stalo. Všechny cesty ve vesnici nakonec vedou k babce kořenářce v lese.

**Jak hrát otevřený svět:**
- Vesnice má tři místa: **kovárnu**, **rychtářův dům** a **faru**. Pořadí je na hráčích.
- Každé místo dá kus historie, kus o starých bozích a kus o pánech. **Každé ukazuje k babce v lese.**
- **Ve vsi jsou dva stínoví zvědové:** jeden v rychtářově domě, jeden na faře.
- Strach roste, čím déle noc trvá: mráz na vnitřní straně oken, praskající stromy, vlci u vsi, zamrzlý potok.

### Ráno v hospodě

#### Hostinský Ondřej

> Hostinský vám nalévá polévku a ruce se mu přitom třesou. Když dojíte, sehne se k vám přes stůl a ztiší hlas.
>
> „Jestli půjdete ven, vemte si světlo. A počítejte stíny. Kdekoli budete, počítejte stíny na zdi. Když jich je víc než lidí, je to zlé znamení. Pak nic neříkejte a jděte pryč."

**Co hostinský ví:**
- **Stín navíc** je podle místních znamení neštěstí. Kdo ho uvidí, tomu se v domě něco zlého stane. Že jsou to Lidovidovi zvědové, netuší nikdo.
- **Další pověry**, které opakuje na konci každé řeči jako zaříkadlo:
    - „Na nic, co najdete v lese, nesahejte."
    - „Na jméno se ptejte třikrát, než otevřete."
    - „Tohle by se za mladýho Půlkníra nestalo."
- **Noc:** neví, co se děje. Nikdo neví. „Kohout by to věděl," ušklíbne se smutně, „kdyby tu nějakej byl."
- **Kam jít:** „Zeptejte se rychtáře, ten ví všechno, co se ve vsi děje. Nebo pana faráře, ten má knihy. A Bořek... toho už znáte."

#### Perníčkář

> Perníčkář sedí ve svém koutě, sklenice v ruce, a vypadá jako jediný člověk v hospodě, kterého tma vůbec netrápí.

- **Když se ho zeptají na tmu:** usměje se. „Když páni nechtějí můj dárek přijmout, nedá se nic dělat. Oni mají čas do rozbřesku." Napije se. „Já mám času, kolik chci."
- **Když se ptají dál, co tím myslí:** „Víc o tom mluvit nemůžu. Takovou máme dohodu." A víc z něj nedostanou.

---

### Kovárna

> Kovárna stojí na kraji vsi u potoka. Je to jediné místo v Šerodolu, kde je ve tmě pořád slyšet práce: rytmické bušení kladiva o kovadlinu. Výheň žhne jako malé slunce a kolem ní je sníh roztátý do bláta.
>
> Bořek stojí u kovadliny, ve tváři rudý od žáru, a buší do rozžhaveného železa, jako by se chtěl tmě pomstít.

**Kovář Bořek:**
- **Jak se k družině chová** podle toho, jak skončila včerejší rvačka:
    - **Když ho porazili nebo s ním zůstali v míru,** uzná je a mluví otevřeně.
    - **Když ho ponížili nebo podvedli,** je kousavý, ale ve tmě je rád za každou živou duši.
- **V kovárně nemá figurku.** Jako jediný ve vsi. „Já si nenechám nic koukat pod ruce."

**Co Bořek ví:**
- **Půlknír:** jeho táta bojoval při obléhání s Půlknírem. Půlknír mu tehdy zachránil život. „Táta říkal, že se smál i ve chvíli, kdy na něj padala půlka nepřátelský armády." Pak dodá: „Tohle by se za mladýho Půlkníra nestalo."
- **Obléhání:** nepřátelé kopali štolu pod hrad. Páni ji zaplavili a havíře v ní utopili. „Prej je tam pod hradem v noci pořád slyšet kopat." Bořek se ušklíbne, ale znít to legračně nechce.
- **Starý pán:** „Táta říkal, že starej pán byl dobrej člověk. Akorát měkkej. Pak umřel. Ve spánku. Zrovna když to bylo nejvíc potřeba." Odmlčí se a víc k tomu neřekne.
- **Páni:** nemá je rád a netají to. Nikdy mu ale neublížili. „A přesto se jich lidi bojej. Já taky, jen to neřeknu nahlas."
- **Staří bohové a babka:** „Babka v lese si u mě nechává kovat železný hřeby. Na prahy, prej. Proti tomu, co chodí lesem." Ukáže kladivem k lesu. „Zeptejte se jí sami, já tomu nerozumím. Ale lidi k ní chodí, když farář nepomůže."

**Co Bořek nabídne:**
- **Postříbření zbraní** proti tomu, „co chodí ve tmě", když mu přinesou stříbro. Bořek sám neví, proti čemu přesně pomáhá. Říká to tak jeho děd. *Stínům ublíží jen postříbřená zbraň.*

**Kam ukazuje:** k babce v lese (železné hřeby, staré prahy).

---

### Rychtářův dům

> Rychtářův dům je největší ve vsi, ze silných trámů a s vysokou podezdívkou. Uvnitř je teplo, v krbu praská oheň a u stolu sedí rodina: rychtář, jeho žena a dvě děti, které si nejspíš včera na louce hrály na Půlkníra. Na tvářích mají ještě šmouhy od sazí.
>
> Rychtář vás přivítá chlebem a solí, ale ruce se mu přitom třesou.

**Čeho si lze všimnout:**
- Na parapetu okna stojí vyřezávaná figurka, obličejem do světnice.

**Rychtář Matouš** *(návrh jména)*:
- Starostlivý, úzkostný, poctivý úředník. Pánům slouží věrně a bojí se jich.
- Vede **rejstřík slepic**: každou slepici ve vsi má zapsanou i s majitelem. Kdo slepici zabije, platí pokutu, kterou určí páni.
- **Co ví:**
    - **Páni:** „Vládnou spravedlivě. Daně jsou mírné, zákony přísné." Mladost: „Neptejte se mě na to. Já byl ještě kluk, když nastoupili, a oni vypadají pořád stejně." Řekne to a zbledne, jako by řekl moc.
    - **Kokeš:** „Kokeš nám prodává kuřata. Slepičky. Kohoutky ne, ty by stejně nepřežily cestu."
    - **Věž:** „Tam se nechodí. Páni to zakázali, už když jsem byl malý."
    - **Noc:** „Nevím. Snad to přejde."

**Rychtářka Dorota** *(návrh jména)*:
- Pověrčivější než její muž. Mluví, když on zrovna nedává pozor.
- Pomáhá na faře s úklidem a pečením. Proto ví o věcech, o kterých farář mlčí.
- **Co ví:**
    - **Babka v lese:** „Babka mi pomáhala u porodu obou dětí. Ona kojila i pány, když byli malí, to ví každý." Ztiší hlas. „Jestli někdo ví, co se to děje, tak ona."
    - **Staří bohové:** „Babička říkávala, že tu dřív lidi dávali v zimě něco lesu, aby je nechal na pokoji. Něco moc drahého." Nechce říct co.
    - **Podivná kniha** (jen když se na ni hráči zeptají, a to až poté, co o ní slyšeli od babky): před mužem zbledne a řekne, že nic neví. *Viz Tajná komora níže.*
- **Děti** (kluk a holka): na Půlkníra si hrají každý den. Kluk ví, že „Půlknír neumřel, jenom odešel, to říká děda." Holka se bojí tmy a počítá stíny.

#### Stín navíc

> Holčička se k vám najednou otočí a zašeptá: „Mami... já napočítala o jeden stín víc."
>
> Všichni ztuhnou. Na zdi za krbem se v rozkmitaném světle plamenů vlní stíny. Napočítáte je, a pak znovu. Jeden přebývá. Stojí u zdi vedle okna a nikdo z vás ho nevrhá.
>
> Když si uvědomí, že o něm víte, stín se pomalu odlepí od zdi.

**Pro vypravěče:**
- **Jeden ze dvou Lidovidových zvědů ve vsi.** Stín poslouchal u figurky na parapetu.
- **Když ho družina odhalí, bojuje.** Moc neublíží, ale je k vzteku.
- **Zbraně na blízko** mu bez postříbření neublíží. Oheň, světlo a pochodně ano, a víc než obvykle. Bojovníkovy a válečníkovy dovednosti proti němu nepřidávají úroveň: je to noční duch.
- **Když ztratí polovinu Těla, uprchne** škvírou v okně. Lidovid se pak dozví, že ho družina viděla.
- **Rodina** je vyděšená. Rychtářka se pak víc rozpovídá, rychtář naopak zmlkne úplně.

```npc
name: Shadow spy |cs| Stínový zvěd
subtitle: Medium fiend (night spirit), ordinary |cs| Střední noční duch, obyčejný
body: 9
soul: 4
charisma: 4
skills: Acrobatics +3 (sneaking), Urban survival +2
armour: None (0)
speed: 6 m, along walls and floors |cs| 6 m, po zdech a podlaze
threat: d4
immunities: Bludgeoning, piercing and slashing from melee weapons that aren't silvered |cs| Drtivé, bodné a sečné od zbraní na blízko, které nejsou postříbřené
weaknesses: Fire, radiant |cs| Oheň, zář
## Traits
***Only a shadow.*** It looks like an ordinary shadow until someone counts. Where there's no light, it can't be. |cs| ***Jen stín.*** Vypadá jako obyčejný stín, dokud ho někdo nespočítá. Kde není světlo, tam být nemůže.
***Back to its master.*** At half Body or less, it flees through the nearest crack. |cs| ***Zpátky k pánovi.*** S polovinou Těla nebo méně uprchne nejbližší škvírou.
## Actions
***Cold touch.*** Reach 1 m. Hit: 1d6 + 2 ice against NPCs; threat d4 against player characters. |cs| ***Ledový dotek.*** Dosah 1 m. Zásah: 1d6 + 2 ledové proti NPC; proti hráčským postavám kostka hrozby d4.
```

#### Tajná komora

Spustí se, až když se hráči rychtářky zeptají na **podivnou knihu**, o které jim řekla babka v lese.

> Když od rychtářů odcházíte, za vámi zavrzají dveře. Rychtářka vás dožene u plotu, přes ramena jen šátek, a ohlíží se k oknu, jestli ji muž nevidí.
>
> „Na faře je komora, o které pan farář nikomu neříká," šeptá. „Uklízím tam, tak to vím. Je za oltářem, zamčená. A klíč…" Polkne. „Klíč nosí pan farář pořád u sebe. Nesundá ho, ani když spí. Ode mě to nemáte."

**Pro vypravěče:**
- **Rychtářka to muži nikdy neřekla.** Kdyby se dozvěděl, že to prozradila, bála by se ho i pánů.
- **Rychtářka ví, kde komora je a kdo má klíč.** Klíč sama nemá a faráři ho nevezme.

**Kam ukazuje:** k babce v lese (porody, kojila pány, staré oběti).

---

### Fara

> Fara stojí vedle kostela, malá kamenná budova se zasněženou střechou. Zvon nad ní zvonil na ranní, i když žádné ráno nepřišlo. Dveře otevře farář, starší muž v ošoupaném talárku, se svíčkou v ruce a s očima člověka, který celou noc nespal.

**Farář Vojtěch** *(návrh jména)*:
- Vzdělaný, unavený, opatrný. Věří ve **Hvězdného boha** a pověrami pohrdá. Pánům se klaní, protože musí, a modlí se za ně, protože se bojí.
- **Chléb a sůl nepodává.** „To jsou pohanské zvyky." Družina proto není jeho host a zákon pohostinství ji vůči němu neváže.
- **Ovládá drobná ohnivá kouzla:** zapálí svíčku dotykem prstu, rozdmýchá vyhaslá kamna. Ve vsi se o tom šeptá jako o zázraku.
- **Klíč od tajné komory nosí pořád u sebe.** Nesundá ho, ani když spí.
- **O tajné komoře za oltářem mlčí.** Když se ho na ni přímo zeptají, zapře ji.
- O babce v lese mluví s nelibostí: „Ta stará žena ještě pálí svíčky starým bohům. Dobře to nedopadne." Přesto přizná: „Ví věci, které v mých knihách nejsou."

**Co farář ví:**
- **Staří bohové:** „Než sem přišla víra ve Hvězdného boha, klaněli se tu lidé lesu. Té, které se tu říká Stará." Její pravé jméno vysloví neochotně, jako by plivl: „*Královna lesa.* Pohanská modla. A ve faře už to jméno nevyslovujte."
- **Zakladatel:** dědeček dnešních pánů přišel do údolí s kněžími Hvězdného boha a Starou zahnal. „Postavil hrad tam, kde byla nejsilnější. Od té doby spí."
- **Noc:** „Je zima a noc nekončí. Pohané by řekli, že se v zimě Stará probouzí." Udělá rukou znamení hvězdy.
- **Páni:** „Vládnou tu už dlouho." Víc o tom mluvit nechce.

#### Stín na faře

- **Druhý Lidovidův zvěd ve vsi.** Stojí v knihovně, za policí, pod figurkou, kterou faráři kdysi darovali páni.
- Hraje se stejně jako stín v rychtářově domě (stejné hodnoty). Spustí se, když hráči v knihovně počítají stíny, nebo když se přiblíží ke skryté komoře.
- **Farář** se ho lekne, ale brání se: ze svíčky v ruce vyšlehne plamen a stín před ním ucouvne. Když ho družina ochrání, víc se rozpovídá o Staré. Poprvé připustí, že některé pověry možná nejsou jen pověry.

#### Knihovna

Farář družinu do knihovny pustí, když slušně požádá. Je to pár polic za farou, prach a vůně vosku.

| Co najdou | Obtížnost | Kde |
|---|---|---|
| **O pověstech domácích** | Snadné | Na polici |
| **Krátká historie údolí** | Snadné | Na polici |
| **Staré zápisy fary**: oběti dětí lesní paní každou zimu a její letní spánek | Střední | Ve staré klenuté komoře za knihovnou, viz *Zával* |
| **Pohřební zápis starého pána**: detail, který nesedí ke „smrti ve spánku", a jméno babky, která ho připravila k pohřbu | Střední | V matrice ve staré klenuté komoře, viz *Zával* |
| **O muži, který prodává zázvor** | Velmi těžké | V tajné komoře za oltářem |

- **Texty pro hráče:** viz *Přílohy pro hráče* na konci.
- **Cesta ke knize v tajné komoře** má čtyři kroky:
    1. **Stopa:** o podivné knize řekne babka v lese.
    2. **Místo:** o komoře ví rychtářka. Řekne to, jen když se jí na knihu zeptají, a jen potají.
    3. **Klíč:** nosí ho farář u sebe. Družina mu ho musí ukrást. Je to poslední krok.
    4. **Čtení:** kniha je psaná cizím písmem. Na okrajích je částečný mnišský překlad.

#### Zával

Staré zápisy a matrika leží v nejstarší části fary: v nízké klenuté komoře za knihovnou, postavené ze stejného kamene jako kostel. Nekonečná noc se jí zakousla do zdí.

> Sotva otevřete starou skříň, klenba nad vámi zapraská. Nejdřív tiše, jako když praská led na rybníce, pak hlasitěji. Z prasklin se sype malta a plamen svíčky se rozkmitá.

**Čeho si lze všimnout:**
- Jinovatka se táhne po klenbě jen nad skříní a matrikou, nikde jinde.
- Nade dveřmi komory stojí vyřezávaná figurka.

**Pro vypravěče:**
- **Spustí se,** když družina začne hledat ve skříni nebo v matrice.
- *(návrh)* **Kdo za tím je:** Lidovid figurkou vidí, co družina hledá, a Krajemírův mráz rozštípne starou klenbu. Páni nechtějí, aby se o smrti starého pána něco našlo. Hráči to poznat nemusí.
- **Zával:** podle pravidel pro závaly hod na Akrobacii na Ohrožení 4, jinak jizva na Tělo s kostkou hrozby d6 a **Restrained**, dokud ho někdo nevyhrabe.
- **Tma:** svíčky zhasnou a zbude jen světlo, které si družina nese. Když se znovu rozsvítí, napočítejte stíny.
- **Knihy pod kamením** *(Pravidlo od oka)*: skříň je převrácená a matrika zasypaná. Vyhrabat je trvá **tři kola**. Každé kolo klenba povolí znovu: kdo hrabe, hází na Sílu na Ohrožení 3, jinak jizva na Tělo s kostkou hrozby d4.
    - Pomůže podepřít klenbu trámem, držet ji kouzlem, nebo podávat kameny řetězem z ruky do ruky.
    - Farář je zděšený, ale svým drobným ohněm rozsvítí svíčky.
- **Kdo uteče a vrátí se později,** najde komoru zasypanou celou. Knihy jsou pod kamením a vyhrabat je dá hodiny práce.

**Kam ukazuje:** k babce v lese (staří bohové, pohřební zápis).

---

### Cesta k babce

Všechny tři vesnické cesty se sbíhají k jednomu jménu: **k babce kořenářce v lese**. Ona kojila pány, zná staré zvyky, kove si železné hřeby na prahy a ví věci, které v knihách nejsou.

### Cesta lesem

> Za posledními chalupami začíná les. Smrky se pod tíhou sněhu ohýbají až k zemi a mezi kmeny je tma tak hustá, že světlo vaší lucerny dosáhne sotva na pár kroků. Sníh vrže pod nohama a ten zvuk je jediný, který slyšíte.

**Pro vypravěče:**
- Cesta k babce trvá zhruba hodinu. Hoďte k8 jednou nebo dvakrát, nebo vyberte, co se hodí.
- **Krajemír cítí každého, kdo jde lesem.** Babku zná a nechce, aby družině řekla, co ví. Jeho zvířata a stromy se ji snaží odradit, ne zabít.

| k8 | Setkání |
|---|---|
| 1 | **Figurka na větvi.** Ze tmy se ozve tiché klapání, jako když dřevo ťuká o dřevo. Na větvi nad stezkou, nebo na pařezu u cesty, visí na provázku malá dřevěná figurka a pomalu se otáčí obličejem k vám. Je to Lidovidovo oko. Připomeňte zaříkadlo: *„Na nic, co najdete v lese, nesahejte."* *(návrh)* Kdo ji vezme, toho Lidovid sleduje až k babce. Kdo ji rozbije, vezme Lidovidovi jedno oko, a on to pozná. |
| 2 | **Vlci v cestě.** Napříč stezkou stojí tři až pět vlků a dívají se na vás. Neútočí a neutečou. Je to Krajemírova vůle: dál nemáte. Když je družina zkusí obejít, jdou opodál s ní. Pořádné zastrašení je rozežene, útok spustí boj. Šaman, který se jich dotkne myslí (*Beast mind*), v nich najde cizí vůli. *(vlk: obyčejný, +2, Tělo 11, kostka hrozby d6, Vliv 3)* |
| 3 | **Havrani.** Hejno havranů se usadí ve větvích nad vámi a mlčky s vámi letí od stromu ke stromu. Kdo jednoho sestřelí, ostatní se rozkřičí a les kolem zasténá. Krajemír teď ví přesně, kde jste. |
| 4 | **Padající smrk.** Zmrzlý kmen hlasitě praskne a řítí se přes stezku. Záchranný hod na Ohrožení 3, jinak jizva na Tělo s kostkou hrozby d6 a **Prone**. *Pravidlo od oka.* Krajemírův neklid. |
| 5 | **Kořeny.** Sníh pod nohama se pohne a kolem kotníku se omotá kořen. Záchranný hod (síla) na Ohrožení 3, jinak **Restrained**, dokud ho někdo nevysekne. Kořen pustí, jakmile se družina otočí zpátky ke vsi. |
| 6 | **Probuzený medvěd.** Z doupěte pod vývratem se vyhrabe medvěd, který by v zimě měl spát. Je rozespalý a vzteklý. Dá se zahnat ohněm a hlukem, uklidnit (*Animal handling*, *Beast mind*), nebo porazit. *(medvěd: tvrdý, +3, Tělo 34, hustá srst 1, kostka hrozby d8; slabé místo: oheň a hluk)* |
| 7 | **Dar pro les.** U starého pařezu klečí vesničan a pokládá na něj chléb a sůl. Když vás uvidí, lekne se. „Pro les, aby nás nechal na pokoji. Neříkejte to faráři." Ukáže, kudy k babce, a dodá: „Stará má v zimě hlad." |
| 8 | **Ticho.** Les naráz utichne. Vítr ustane, sníh přestane vrzat. Mezi stromy stojí jelen, nehybný jako socha, a dívá se na vás. Pak se otočí a zmizí. Nic dalšího se nestane. |

### Babka kořenářka

> Les se rozestoupí a před vámi je mýtina. Uprostřed stojí chalupa napůl zapuštěná do země, se střechou porostlou mechem a zasypanou sněhem. Z komína stoupá kouř, který voní pelyňkem a pryskyřicí. Pod okapem visí svazky sušených bylin. Když přijdete blíž, uvidíte, že práh je hustě pobitý železnými hřeby, hlavička vedle hlavičky.
>
> Dveře se pootevřou na šířku dlaně a v mezeře se objeví oko, šedé a bystré. „Kdo jste?" Počká na odpověď. „Kdo jste?" A potřetí: „Kdo jste?"
>
> Teprve pak se dveře otevřou docela. Stojí v nich drobná, shrbená stařena v šátku, s prsty zelenými od bylin. V jedné ruce drží bochník, ve druhé misku soli.

**Pro vypravěče:**
- **Babka Kuňka** (Kunhuta). Kořenářka a porodní bába. Před čtyřiceti lety kojila všechny tři pány. Pořád je má ráda jako svoje kluky, i když ví, co udělali. Nechce jim zachránit krk, ale duši: ať zestárnou a umřou jako lidé.
- Staré zvyky dodržuje do písmene: jméno třikrát, chléb a sůl na prahu, železo na prazích proti tomu, co chodí lesem. **Kdo chléb a sůl přijme, je její host.**
- **Spěchá.** Na lavici u kamen leží nemocné dítě a babka se k němu každou chvíli otáčí. Na otázky odpovídá krátce, dokud se dítěti neuleví.

> Uvnitř je horko k zalknutí. Kamna rudě žhnou, a přesto se holčička, která leží na lavici zabalená do kožešin, třese zimnicí. Tváře má rudé od horečky a dýchá mělce a rychle.

**Nemocné dítě:**
- **Anička**, asi šestiletá dcera vdovy z dolního konce vsi. Matka ji sem přinesla ještě před setměním. Babka ji poslala domů: „Tady by jen plakala."
- **Obyčejná zimnice.** Babka by ji vyléčila sama, kdyby vyšlo slunce. Bez léku bude holčičce den ode dne hůř.

#### Lektvar, který musí vidět slunce

> Babka postaví na stůl hliněný hrnek se zlatavým odvarem. „Třezalka, sbíraná o svatojánské noci. Slunce v ní spí. Musí ho vidět, aby se probudilo. Postavila bych ji na okno a za hodinu by byl lék." Podívá se k zatemnělému oknu. „Jenže slunce není."
>
> Chvíli mlčí. „Tak mu ho uděláme. Na slunci lektvar nevrhá stín. Potřebuju světlo aspoň ze tří stran, ať nemá kam stín hodit. A celou dobu míchat po slunci a říkat zaříkání. Na to už mám slabé ruce."

**Pro vypravěče:**
- **Rituál trvá hodinu**, uvnitř chalupy. Nic nadpřirozeného ho neohrožuje. Je to obyčejné babské vaření, jen pečlivé.
- **Světla:** babka má jen kamna a jeden kahan. Zbytek musí obstarat družina: lucerny, pochodně, čarodějův oheň, vyleštěný štít nebo postříbřená zbraň, která odrazí světlo. Kdo přemluvil faráře, aby šel s nimi, má i jeho drobná ohnivá kouzla. Farář s babkou u jednoho stolu je scéna sama o sobě.
- **Míchání:** někdo musí celou hodinu míchat po slunci a opakovat babčino zaříkání. Když se splete, babka ho zastaví a začíná se znovu.

**Jak rituál běží**:
- Hodina se dělí na **tři úseky**. Každý úsek přijde jedna komplikace. Kdo ji řeší, hází na vhodnou dovednost na Ohrožení 2.
- **Komplikace** (vyberte nebo hoďte k4):
    1. **Průvan.** Starou chalupou táhne škvírami i komínem a plameny se kymácejí. Někdo musí ucpat škvíry nebo světla zaclonit.
    2. **Dohořívá světlo.** Lucerně dochází lůj, pochodeň dohořívá. Je potřeba ji vyměnit dřív, než zhasne.
    3. **Blouznící holčička.** Probudí se v horečce, chce k mamince a sahá po hrnku. Někdo ji musí utišit.
    4. **Zaříkání.** Babka zaváhá u slova, které si čtyřicet let nevybavila. Kdo míchá, musí ho najít s ní.
- Když se komplikace nevyřeší, úsek se nepočítá a musí se opakovat.

**Když se to podaří:**

> Odvar v hrnku se rozzáří, nejdřív jako med, pak jako poledne. Na okamžik vypadá chalupa, jako by do ní svítilo slunce, a vy si uvědomíte, jak dlouho jste ho neviděli. Pak světlo pohasne a v hrnku zůstane jen teplý zlatý čaj.
>
> Holčička se napije. Přestane se třást, horečka z tváří pomalu ustoupí a poprvé za celou noc klidně usne.

**Když se to nepodaří:** babka má bylin ještě na jeden pokus.

#### Co babka ví (před úkolem)

Odpovídá krátce a pořád se otáčí k dítěti.

- **Páni:** „Moji kluci." Krajemír se pořád toulal se zvěří, Lidovid koukal klíčovou dírkou, Miloslava měli rádi všichni. „Byli to hodní kluci. Pak přišla válka."
- **Víno:** „Martikovské? To k sobě páni nepustí. Nad tím vínem si nikdy nesednou."
- **Noc:** „Ráno přijde s kuropěním, dítě. Tak to bylo vždycky." Smutně se usměje. „A kohout se tu kuropění nedožil čtyřicet let."
- **Stará:** „Spí pod hradem, u své studánky. Živá voda. Zakladatel na ní postavil hrad, aby ji udusil. Dokud Krajemír drží zemi, ven nemůže. Jenže voda je pořád živá. Co mrtvého do ní ponoříš, nezůstane ležet."
- **Perníčkář:** „Ten, co voní medem a hřebíčkem? Byl tu už tehdy." Ví, že se s ním kluci tehdy sešli na rozcestí. Co si řekli, neví.
- **Věž:** „Tam zavřeli Miloslavovu nevěstu. Kdo ji hlídá, nevím. Ale světlo tam svítí čtyřicet let."
- **Podivná kniha:** „Na faře je kniha o muži, který prodává zázvor. Přivezl ji kdysi z východu farář, co tu byl před tímhle. Viděla jsem ji jednou, v jeho rukou, a hned ji schoval. Jestli chcete vědět, s kým se kluci spolčili, tam to bude."
- **Rarášek** (jen když se ptají, jak sehnat kohouta): „Kohouta tu žádná slepice nevysedí. Ale vejce, které nosíš u srdce, dokud nepraskne, vylíhne něco, co jako kohout aspoň vypadá." Varuje: „Rarášek chce za svou službu zaplatit. Vždycky."

#### Co babka řekne (po úkolu)

Až když holčička usne, babka promluví o tom, o čem čtyřicet let mlčela.

> Babka dlouho sedí u spící holčičky. Pak se na vás podívá a poprvé vypadá na všechny svoje roky.
>
> „Starého pána jsem myla, než ho pohřbili. Rty měl modré a z úst mu to vonělo hořce. Oměj. Vlčí mor." Odmlčí se. „Tu zimu si u mě Krajemír vzal oměj. Na vlky, říkal."

- **Tohle je důkaz, který potřebuje Půlknír.** Babka to řekne jen jednou a jen těm, kdo jí pomohli. Půlkníra by přesvědčilo, kdyby to slyšel od ní samé, nebo spolu s pohřebním zápisem z fary.
- **Kluky pořád miluje.** „Říkám vám to, protože jsou dost staří na to, aby za to zaplatili. Jen jim neříkejte, že to máte ode mě."
- **Její prosba:** „Slibte mi, že moje kluky nedáte čertovi."

---

## 3: Pravda a volba

Ve třetí kapitole se družina dozví, co přesně páni před čtyřiceti lety slíbili, a rozhodne se, na čí stranu se postaví. Pořadí míst je zase na hráčích, ale **věž je klíč**: bez znění smlouvy se družina rozhoduje naslepo.

### Háčky: kudy kam

| Místo | Co nebo kdo tam ukazuje |
|---|---|
| **Věž** | Světlo v okně, vidět z celého údolí. Babka („zavřeli tam Miloslavovu nevěstu"). Rychtář („páni to zakázali"). Perníčkář od ní odrazuje. Páni o ní lžou. |
| **Štola pod hradem** | Bořek (zaplavená štola, v noci je slyšet kopat). Půlknír po oživení. Babka (živá voda pod hradem). Kouzelník, který zkusí vycítit hradní půdu.|
| **Kokeš a kohout** | Kokešovo „údolí nemá kluky rádo" a hřbitůvek. Hostinský („kohout by to věděl"). Babka („ráno přijde s kuropěním"). Rychtář („kohoutci by nepřežili cestu"). Kniha *O pověstech domácích* (rozbřesk je první kuropění). |
| **Hrad v noci** | Perníčkářova láhev. Kniha *O pověstech domácích* (kdo musí chléb a sůl podat?). Půlknír nebo nevěsta. Miloslav, který si družinu po věži sám zavolá. |
| **Tajná kniha** | Babka, pak rychtářka, pak farářův klíč. |

---

### Věž

#### Cesta k věži

> Stezka k věži vede po hřebeni nad lesem. Sotva na ni vkročíte, země pod vámi změkne. Zmrzlá cesta se během pár kroků promění v bahno, které vám saje boty z nohou, a to uprostřed zimy, kdy by měla být tvrdá jako kámen. Větve se sklánějí přes stezku a zachytávají se do plášťů.

**Pro vypravěče:**
- **Krajemír ví, kam družina jde,** a země se ji snaží zastavit. Ne zabít, jen zdržet a odradit: bahno, větve přes cestu, zvěř, která se staví do cesty.
- Použijte cokoli z tabulky *Cesta lesem*, nebo jen bahno a větve.

#### Pod věží

> Na konci hřebene stojí věž, stará a kamenná, ochoz nahoře se už napůl rozpadl. Jediné okno svítí teplým, klidným světlem, jako svíčka, kterou někdo nechal hořet pro toho, kdo se má vrátit.
>
> Pod věží, u zamčených dveří, sedí na kameni muž v kroužkové košili. Na hlavě má starou kumánskou přilbu s maskou, která mu kryje jen pravou půlku tváře, i s půlkou kníru. Když vás uvidí, zvedne se, oprášíí si sníh z kolen a usměje se tou půlkou, kterou je vidět.
>
> „Hosté! Čtyřicet let tu nikdo nebyl, a teď hned celá družina. Mám vám uvařit polévku, nebo se rovnou bijeme?"

#### Půlknír

**Pro vypravěče:**
- **Rytíř starého pána a lidový hrdina Šerodolu.** Přísahal starému pánovi: „Budu chránit tvé syny, dokud budou živi." Synové nestárnou, a tak nestárne ani on.
- **Hlídá věž** na rozkaz pánů. K nevěstě nesmí nikdo.
- **Žoviální, zdvořilý, nepohnutelný.** Vtipkuje, chválí dobré rány a mezi výměnami odpovídá na otázky.
- **Nemá slabé místo.** Musí být poražen mečem. Slova a hrozby na něj nefungují: když mu dojde Duše nebo Charisma, nestane se nic.
- **Nemůže zůstat mrtvý.** Smrtelná rána se mu do minuty zahojí a vstane.
- **Proklouznutí:** zvěd se může vplížit do věže, zatímco ho ostatní zaměstnají. Když Půlknír uslyší uvnitř hlasy, jde se podívat, a ze scény je záchrana, nebo hra na schovávanou. I družina, která se kolem něj dostane, ho **pořád potřebuje kvůli tomu, co ví.**
- **Když o vetřelci neví,** stromy kolem věže se rozpláčou: z kůry jim stéká pryskyřice, větve sténají a skřípou jako vzlykot. Krajemír ho tak varuje. Půlknír pochopí.
- *Statblok doplníme.*

#### Minuta po smrti

> Půlknír padne do sněhu a zůstane ležet. Pak se mu rána začne zavírat, kousek po kousku, jako když mráz zatahuje led na kaluži. Zalapá po dechu, posadí se a dlouho se dívá do země.
>
> „Čtyřicet let," řekne nakonec tiše. „A pořád nevím proč."

**Pro vypravěče:**
- **Minuta, než se postaví, je okno pro rozhovor.** Je poražený, bezmocný a nic mu nedává smysl.
- **Varování,** dřív než mu někdo řekne pravdu: „Pánům nepřeju nic zlého. Přísahal jsem jejich otci. Kdyby ta přísaha padla…" Pokrčí rameny. „Možná bych padl s ní."
- **Na čí stranu se postaví:**
    - **Když ho družina přesvědčí, že chce pánům pomoct,** pomůže jí.
    - **Když ho přesvědčí, že páni zabili starého pána,** a má důkaz (babčino svědectví, pohřební zápis), přísaha se zlomí. Pak pomůže pány svrhnout.

**Co Půlknír ví:**
- **Obléhání a štola:** „Nepřítel kopal pod hrad. Páni štolu zaplavili. Tehdy jsem si myslel, jak je to chytré." Odmlčí se. „Teď v noci slyším, že tam dole pořád někdo kope." Ví, kde je vchod: v rokli pod hradním ostrohem.
- **Starý pán:** „Umřel ve spánku. Tak mi to řekli." A dodá: „Bůh mi odpusť, ale jestli někdy přišla smrt v pravou chvíli, tak tehdy. Starý pán by údolí neudržel. Kluci se chopili vlády a vyhráli. Bez nich by tu dneska nebylo nic." Dokud nemá důkaz, nepochybuje.
- **Páni:** mluví o nich jako o klucích, které učil šermovat. „Krajemír byl nejlepší, Lidovid nejchytřejší a Miloslav nejhodnější."
- **Nevěsta:** „Je nahoře. Nic zlého se jí neděje. Nosím jí dříví a čtu jí, když chce."
- **Smlouva:** nic. U smlouvy nestál. Ví jen, že se kluci té noci vrátili z rozcestí a už nikdy nezestárli.
- **Kohout Půlknír:** když se dozví, že se po něm jmenuje kohout, poprvé se doopravdy rozesměje.

#### Nevěsta

> Nahoře ve věži je jediná místnost. Na stole hoří svíčka, u kamen sedí stará žena v čistých, mnohokrát spravovaných šatech. Bílé vlasy má spletené do copu, jak se nosí u nevěst. Stěny kolem ní jsou popsané uhlem, řádek pod řádkem, pořád dokola stejný text.
>
> „Vy nejdete od něj," řekne. Není to otázka. „On by poslal Půlkníra pryč. Posaďte se."

**Pro vypravěče:**
- **Svatava**, Miloslavova snoubenka. Milovala ho dřív, než si ji přál. Když se dozvěděla, co si přál, odešla od něj ještě před svatbou. Milovat ho nepřestala. Je smrtelná a stará, on ne.
- **Svědkyně smlouvy, ale ne její strana.** Proto může mluvit. A proto ji páni zavřeli.
- **Na stěnách je smlouva.** Psala ji čtyřicet let uhlem, aby nezapomněla ani slovo. Je to plné znění, viz *Přílohy pro hráče: Úmluva*.
- **Svíčka v okně** hoří pro Miloslava. „Ví, že tu jsem. Ví, co cítím. Tak ať aspoň vidí, že svítím."
- **Miloslav ji cítí.** Ve chvíli, kdy k ní někdo přijde, to ví a varuje bratry.

**Co Svatava ví:**
- **Celé znění smlouvy**, slovo od slova.
- **Perníčkář:** stála u toho, na rozcestí pod Šerodolem. „Voněl medem a hřebíčkem. Dal jim každému kus perníku a oni ho snědli."
- **Proč odešla:** „Přál si nevěstu, která ho bude milovat. Já ho milovala. Tak proč si to přál?"
- **Co chce:** aby Miloslav zestárl a umřel jako člověk. „Chci ho vidět starého. Aspoň jednou."

---

### Štola pod hradem

> Vchod do štoly je v rokli pod hradním ostrohem, skoro zasypaný sněhem a kamením. Kdysi ho zatloukli prkny, ale prkna shnila. Zevnitř táhne vzduch, který je teplejší, než by měl být, a voní mokrou hlínou a něčím nasládlým, jako když hnije ovoce.
>
> Hluboko ve tmě se ozývá pravidelné ťukání. Ťuk. Ťuk. Ťuk. Jako když někdo kope.

**Pro vypravěče:**
- **Štola nepřátel z doby obléhání.** Vede až pod hradní nádvoří, tam, kde páni přijímají hosty. Propadlá dlažba nahoře je přímo nad ní.
- **Je napůl zaplavená.** Páni ji tehdy zatopili, ale štola se mezitím prokopala až ke studánce pod hradem. Voda v ní nezamrzá.
- **Havlova skrýš:** pod převislým kamenem u vchodu má opilec Havel schované pašované víno. Když se ho družina zeptá, kde ho schovává, prozradí to. Dovnitř sám nechodí: „Tam někdo kope."
- Štola není součástí hradu, není možné ji tedy zahrnout do práv hostů

#### Havíři

> V chodbě před vámi stojí muž v rozedrané kazajce, po kolena ve vodě, a buší krumpáčem do skály. Kůži má bledou a nafouklou jako utopenec a rukávy mu prorůstají kořínky. Když vás uslyší, otočí se.
>
> „Už jsme skoro tam," řekne. „Skoro pod nimi. Pomůžete nám kopat?"

- **Utopení nepřátelští havíři, otroci živé vody.** Krajemírovi neodpovídají.
- Mluví, ale moc to nedává smysl. Myslí si, že obléhání pořád trvá.
- **Kdo jim překáží v kopání,** na toho zaútočí.
- **Jsou to nemrtví:** Bojovníkovy a válečníkovy dovednosti proti nim nepřidávají úroveň.
- *Statblok doplníme.*

#### Studánka

> Na konci štoly se chodba rozšíří v jeskyni. Uprostřed je jezírko, černé a nehybné, a nezamrzá. Ze stropu, ze stěn i ze dna k němu vedou kořeny tlusté jako paže, porostlé bulvami jako nádory. Některé bulvy pomalu pulzují.
>
> Nad hladinou je cítit teplo. A pak hlas, který nepřichází odnikud a odevšad zároveň, hluboký a sladký jako med.
>
> „Hosté. Tak dlouho tu nikdo nebyl."

**Královna lesa (Stará):**
- **Starý duch údolí.** Její srdce je živá voda. Projevuje se jako kořeny s nádory a výrůstky kolem studánky.
- **Je uvězněná.** Dokud Krajemír drží zemi, ze štoly ven nemůže. Její moc sahá jen kousek kolem vody.
- **Je lstivá.** Snaží se družinu přemluvit, aby pány zabila, protože jejich smrt ji osvobodí. Nabízí za to pomoc: ukáže cestu pod nádvoří, uklidní havíře.
- **Dá se obelhat.** Kdo s ní jedná (*Jednání s nadpřirozenými bytostmi*), může ji přesvědčit, že jí pomáhá. Například že kohout musí ožít, aby páni padli.
- **Živá voda:** cokoli mrtvého se do ní ponoří, vstane jako její otrok. Mluví, ale moc to nedává smysl, a je agresivnější. Ze štoly ven nemůže.

**Co se tu dá udělat:**
- **Láhev:** položit martikovskou láhev na konec štoly pod nádvořím. Pak stačí, aby se Perníčkář setkal se všemi třemi bratry tváří v tvář na nádvoří nad ní.
- **Kohout:** mrtvý kohout ponořený do studánky ožije jako otrok vody. Ze štoly nemůže, ale může tu zakokrhat. Pod hradem je pořád údolí, takže se to počítá. Stará to musí dovolit, a proto ji je potřeba obelhat.

---

### Zpátky za průsmyk

> Za hraničními kameny je najednou světleji. Ne moc, jen o tolik, o kolik je šero světlejší než noc. Za zády máte tmu nad údolím a před sebou nad horami šedý pruh svítání. Tady venku noc skončila už dávno.

**Pro vypravěče:**
- **Cesta:** průsmyk zavřela lavina. Dá se prokopat (dlouho), obejít po kozí stezce přes hřeben (nebezpečné), nebo sníh odstranit magií (hlučné, Krajemír to ucítí).
- **Kokeš** je rád, že je vidí. „Ráno přišlo, jenom tam dole se nějak zaseklo."
- **Kohout Půlknír:** Kokeš ho miluje. Dá ho tomu, kdo mu vysvětlí proč, nebo kdo mu slíbí, že se mu nic nestane. Ukáže na hřbitůvek: „Kluci tam dolů nedojdou. Kameny je nemaj rády."

**Jak dostat kohouta přes kameny** *(Pravidlo od oka)*:
- **Přerušit spojení mezi kameny** abjurací, třeba obráceným *Ochranným kouzlem* čaroděje.
- **Nechat ho umřít a vrátit:** kameny kohouta srazí do umírání, ne na smrt. Hraje se jako hody na umírání s *Léčením zvířat*, které může zkusit kdokoli s holými kostkami.
- **Odnést ho mrtvého ke studánce** ve štole a ponořit ho.

**Cesty, které kameny vůbec nepotřebují:**
- **Přivolaný pomocníček** v podobě kohouta (*Familiar*): přivolaný kameny neprochází.
- **Kožoměnec** s kohoutím pérem (*Skinchanger*).
- **Rarášek** z vejce šerodolské slepice, podle babčina obřadu *(návrh)*. Je to duch, nikdy se nenarodil, a kameny ho nechají být. Perníčkář ho ale může zapovědět, když mu ho přinesou na oči.

---

### Hrad v noci

> V nekonečné noci vypadá hrad menší než za soumraku. Na hradbách hoří jediná pochodeň. Za okénkem v bráně se lesknou oči strážného, který nespal od chvíle, kdy mělo svítat.

**Pro vypravěče:**
- **Brána:** dokud družina neprojde věží, strážný pořád opakuje: „Páni po setmění nepřijímají. Přijďte ráno." Jenže ráno nepřichází.
- **Miloslav si družinu zavolá.** Jakmile někdo dojde k Svatavě, Miloslav to ucítí a varuje bratry. Když se pak družina vrátí k hradu, brána se otevře a sluha řekne: „Páni vás očekávají."
- **Páni v noci** nespí a čekají na nádvoří u ohně. Krajemír poslouchá zemi, Lidovid sleduje figurky, Miloslav je smutnější než kdy dřív. Vědí, kde všude družina byla.
- **Co páni chtějí:** rozbřesk. O smlouvě mluvit nemohou, ani když ji družina zná.
- **Miloslav zkusí družinu okouzlit** (Charmed), jakmile má podezření, že stojí při Perníčkáři. Okouzlený mu nemůže ublížit, a pustit Perníčkáře do hradu je ublížení.

#### Kuchyně

Hlavní cesta, jak dostat Perníčkáře do hradu. Dělaná pro zvěda.

- **Zvyk přesně** (viz *O pověstech domácích*): „Kdo požije chléb a sůl domu na jeho prahu, jest jeho hostem." Nikde se neříká, kdo je musí podat.
- **Kuchyně** je v přízemí u nádvoří. Chléb a sůl na uvítanou leží na polici pod plátnem. Hlídá ji okouzlený sluha.
- **Čeho si lze všimnout:** nad plotnou stojí figurka, obličejem ke dveřím.
- **Proč to nikdo z hradu nikdy neudělal:** všichni jsou okouzlení Miloslavem, Lidovid celým hradem kouká, a do dneška na tom nezáleželo.
- **Proč to může družina:** nejsou okouzlení (pokud je Miloslav neokouzlí) a jako hosté mají k chlebu domu přístup.
- **Překážky:** figurka nad plotnou, stíny na zdi (počítejte je!), Krajemírovi psi, sluha.
- Pak stačí Perníčkáře nakrmit na prahu brány.

#### Jiné cesty dovnitř
- **Přemluvit pána,** aby ho pozval: skoro nemožné. Přísahali, že nikdy.
- **Převlek:** Perníčkář přijde jako jeden z družiny a na nádvoří dostane chléb a sůl jako každý host. Překážky: figurky, stíny, psi.
- **Vylákat všechny pány z hradu:** dům bez pána není ničí střecha. Připusťte to jen nerad.

---

### Perníčkář ve třetí kapitole

- **Když se k němu družina přidá,** řekne jí, co potřebuje, a o smlouvě přitom nepromluví: „Páni na víno nesáhnou a stráž ho nepustí. Ale láhev nemusí stát na stole. Stačí, když bude pod nimi." A: „Do hradu mě nikdo nepozve. Leda by mi někdo podal jejich chleba."

#### Výmluva na slib

Jen když je družina úplně ztracená.

> Perníčkář si povzdechne a odloží sklenici. „O žádné smlouvě nemluvím. Mluvím o slibu." Usměje se. „Páni mi kdysi slíbili, že si se mnou sednou nad lahví martikovského. Všichni tři, a já s nimi, tváří v tvář. Čtyřicet let čekám."

---

### Rozhodnutí

Po věži má družina všechno, co potřebuje, a volí mezi dvěma cestami. Ani jedna není čistá.

| Strana | Co je potřeba | Kdo vyhraje |
|---|---|---|
| **Perníčkářův plán** | Láhev ve štole pod nádvořím, a Perníčkář v hradě tváří v tvář všem třem pánům | Perníčkář. Páni přijdou o duše, údolí zůstane bez pánů a Staré už nikdo nedrží. Družina jako hosté hradu ponese kletbu. |
| **Konec noci** | Kohoutí kokrhání v údolí | Páni a údolí. Páni začnou zase stárnout: navenek dvacetiletí, uvnitř se šedesáti lety života a těžkým břemenem. Starou musí zapečetit vlastníma rukama. |

- **Závěry a Perníčkářova přání:** doplníme.

---

## Přílohy pro hráče

### O pověstech domácích
*Fara, knihovna. Snadné. Psáno starou češtinou.*

> **O pověstech domácích, jak je lid v horách drží**
>
> **O prahu a o hostech.** Práh domu jest místo svaté. Co stojí za ním, jest pod ochranou hospodářovou, a co stojí před ním, nemá k ní práva, leč bylo-li pozváno. Pozváním jest chléb a sůl. Kdo požije chléb a sůl domu na jeho prahu, jest jeho hostem po tři dni a tři noci. Host hospodáři neublíží a hospodář hostu též ne, neboť smlouva ta jest oboustranná. Na cestách postačí chléb se špetkou soli, jak staří pocestní činívali. Kdo zákon hostinný zruší, toho stihne kletba na duši i na jméně.
>
> Takéž mezné kameny na hranicích kraje mají moc prahu, neboť jsou prahem celé země.
>
> Učení se přou, co jest pozváním. Jsouť bytosti, jako můry a noční duchové, jež žijí právě z toho, že vcházejí nezvány. Kdo vejde nezván, tomu prý se pod cizí střechou nedaří a mysl se mu mate. Někteří učenci z východu to mají za pověru a praví, že vyšší mocnosti zákon hostinný drží jen z jakési zvrácené rytířskosti, podle pravidel smrtelníkům neznámých.
>
> **O jménu třikrát řečeném.** Po setmění neotvírej nikomu, leč se ho třikrát otážeš na jméno. Noční duch dovede jednou zalhat i podruhé, ale potřetí lhát nemůže: buď řekne jméno pravé, nebo odejde. Proto lid praví, že kdo se ptá třikrát, nepustí pod střechu nic zlého.
>
> **O rozbřesku.** Lid horský nepočítá den od slunce, nýbrž od kohouta. Rozbřesk není, když vyjde slunce, ale když poprvé zakokrhá kohout, a tomu se říká kuropění. Do kuropění patří noc všemu, co v ní chodí. S prvním kohoutím hlasem musí ustoupit, i kdyby slunce ještě nevyšlo. Kde kohout nezakokrhá, tam, praví staří, noc neskončí.

### Krátká historie údolí Šerodolského
*Fara, knihovna. Snadné.*

> Údolí toto bylo pusté a divoké, dokud do něho nepřišel urozený pán **Vok** s kněžími Hvězdného boha. Lid zdejší se tehdy klaněl jakési paní lesa. Pán Vok ji s pomocí víry zahnal a…
>
> *(Několik listů je vytrženo.)*
>
> …nechal rovzavlit a na místě, kde byla nejsilnější, postavil hrad.
>
> Po něm vládl syn jeho, pán **Bohuslav**, pán dobrý a lidu milý, však proti nepřátelům měkký. Za jeho dnů kraj slábl, až nakonec nepřítel přitáhl s velkou armádou a dlouho jej svíral.
>
> V nejtěžší chvíli obležení pán Bohuslav zemřel ve spánku. Synové jeho, Krajemír, Lidovid a Miloslav, se chopili vlády a nepřítele z údolí vyhnali. Bylo to vítězství veliké.
>
> *(Jinou rukou, novějším inkoustem:)*
>
> Však sladké nezůstalo. Páni nestárnou. Píši tyto řádky po třiceti letech jejich vlády a vypadají, jako by bitva byla včera. Lid se jich bojí, a přece je podivně miluje.


### Staré zápisy fary
*Fara, stará klenutá komora, ve skříni. Střední, viz Zával.*

> *Léta prvního po příchodu víry.* Lid z horních samot opět vynesl dítě do lesa, k paní. Zakázal jsem to. Neposlechli. Praví, že jinak by zima nepřestala.
>
> *Léta třetího, v zimě.* Zima krutá. Dítě nevynesli, neboť jsem je hlídal. Vlci sešli až ke vsi a na horních samotách zmrzlo pět lidí.
>
> *Léta téhož, v létě.* Les je klidný. Lid praví, že paní spí, jako každé léto, a že v zimě zase procitne hladová.
>
> *Léta pátého.* Pán Vok postavil hrad nad studánkou paní. Té zimy poprvé nikdo nevynesl dítě do lesa, a zima přesto přešla. Chvála Hvězdě.

### Pohřební zápis
*Fara, stará klenutá komora, v matrice. Střední, viz Zával.*

> *Léta obležení, v zimě.* Zesnul urozený pán Bohuslav ze Šerodolu, ve spánku, jak praví synové jeho. Pohřben v kryptě pod kostelem. Tělo umyla a k pohřbu připravila Kunhuta, kořenářka z lesa.
>
> *(Na okraji, drobným písmem:)* Rty modré jako od mrazu, ač v komnatě bylo topeno. Z úst vůně hořká. Nepřísluší mi soudit.

### O muži, který prodává zázvor
*Fara, tajná komora za oltářem. Velmi těžké.*

> *(Kniha je psaná písmem, které neznáte. Na okrajích jsou drobným rukopisem připsané mnišské překlady.)*
>
> „…v každém národě má jiné jméno: cukrář, pekař, prodavač zázvoru, perníkář…"
>
> „…nevejde, kam není pozván. Proto zve on, chlebem svým…"
>
> „…nabízí sladké a splní přání. Slovo však obrátí, a těší se, když člověk trpí tím, co si sám přál…"
>
> „…pozbýti duše jemu jest osud horší nežli smrt… …pouze utrpení duše…"
>
> „…jediný muž, o němž se ví, mu unikl. Porazil jej v jeho vlastní hře se slovy…"
>
> „…praví se, že srdci vskutku neporušenému splní přání zadarmo. Já však soudím, že ta pověst jest nastražena jako past. Neporušeného srdce není…"

### Úmluva
*Věž, na stěnách Svatavina pokoje. Plné znění.*

*(návrh znění; noc svaté Lucie je zatím návrh)*

> **Úmluva**
>
> My, Krajemír, Lidovid a Miloslav, synové pána šerodolského, a já, Perníčkář, smlouváme takto:
>
> 1. Krajemírovi se dává, by mu země šerodolská odpovídala.
> 2. Lidovidovi se dává, by viděl vše, co se v kraji šerodolském děje.
> 3. Miloslavovi se dává nevěsta krásná, jež ho bude milovat.
> 4. Všem třem se dává, že nezestárnou ani nezemřou, dokud tato úmluva platí.
> 5. Za to propadnou duše jejich Perníčkáři, až se všichni sejdeme nad láhví martikovského vína.
> 6. Nesejdeme-li se do rozbřesku noci svaté Lucie léta čtyřicátého, budiž úmluva zrušena a dary vzaty zpět.
> 7. O této úmluvě nepromluví žádná ze stran k nikomu, kdo při ní nestál.
>
> Dáno na rozcestí pod Šerodolem. Stvrzeno krví a medovým chlebem.