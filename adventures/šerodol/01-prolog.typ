#import "sablona.typ": *

= 0: Prolog

V prologu se hráči seznámí se základy boje, poznají *Starého Kokeše* a *Perníčkáře* a sestoupí do šerodolského údolí.

== Kokešova chaloupka

#cti[
  Po dlouhém a líbezném podzimu jste se jako družina rozhodli opustit úrodné nížiny a ještě před tou nejhorší zimou přejít hory a nechat se zaměstnat na nějakém hradě. Doufáte, že tak přečkáte to nejnepříznivější období a zároveň si něco málo vyděláte.

  Jdete už druhým dnem a hory jako by vás odmítaly pustit dál. Od časného rána stoupáte kamenitou stezkou a smrky kolem vás jsou s každým krokem nižší a pokroucenější. Nakonec je vystřídá už jen kleč, holé kamení a ostrý vítr, který se vám nemilosrdně prodírá pod pláště. Nad horským hřebenem se stahují těžká šedá mračna a z jejich temných útrob se začínají snášet první sněhové vločky.

  Těsně pod sedlem stojí osamělá roubená chalupa. Její šindelovou střechu zatěžují kameny, z komína se líně vine kouř a kolem stavení se táhne nízký proutěný plot. Za ním se ještě před chvílí ozývalo spokojené kdákání slepic. Je to poslední obydlené stavení před průsmykem.

  Jakmile se však přiblížíte k vrátkům, poklidné kvokání vystřídá vyděšený křik. Dva vyhublí toulaví psi se protáhli dírou v plotě a právě teď prohánějí slepice po celém dvorku. Dveře chalupy se prudce rozletí a na zápraží se objeví stařík, který se s holí zdviženou nad hlavou nejistě žene na pomoc svým opeřeným svěřenkyním.

  „Svatá Ludmilo! Svatá Anežko! Ne moje holky! Pomozte mi někdo!“
]

#pv[
  Výukový boj. Psi jsou slabí a utečou, jakmile jeden padne. Ukažte hráčům iniciativu, střet, obranný hod a vyčerpání.
]

#sb(
  [Toulavý pes], [Střední zvíře, obyčejné],
  telo: 9, duse: 3, vliv: 2,
  zbroj: [žádná (0)], rychlost: [8 m], hrozba: [k4],
  dovednosti: [Pěší boj zblízka +2, Pohyb v divočině +2, Přežití v divočině +2 (čich)],
  smysly: [bystrý čich a sluch],
  vlastnosti: (
    ([Smečka], [Když je druhý pes do 1 m od stejného cíle, útočí *Přesně* zdarma.]),
    ([Zbabělec], [Když druhý pes padne, uteče.]),
  ),
  akce: (
    ([Kousnutí], [Dosah 1 m. Zásah: 1k6 + 2 bodné proti NPC; proti hráčským postavám kostka hrozby k4.]),
  ),
)

=== Starý Kokeš

Místní „slepičí bača“. Hubený stařík v ovčím kožichu, ve vousech peří. Mluví víc se slepicemi než s lidmi. Je laskavý, vděčný a trochu pomatený. Mluví pravdu, jen tak, že jí nikdo nerozumí.

#cti[
  Stařík, kterému jste právě pomohli, vypadá trochu unaveně, ale na svůj věk plný života. Na hlavě mu už moc nezbylo, zatímco bílý plnovous má stále úctyhodně hustý a plný slepičího chmýří. Na sobě má kožich z ovčí vlny a zbytek jeho šatníku je spíše praktický. Ve tváři má šibalský úsměv, který může být stejně dobře radost ze života jako šílenství.
]

*Po boji:*
- Kokeš děkuje, sbírá slepice a každou cestou počítá.
- Pozve družinu na práh a podá jim chléb a sůl: „Kdo mi zachránil holky, je u mě host.“ Hráči tak poznají zvyk dřív, než na něm začne záležet.
- Představí své slepice, všechny po svatých: *Ludmila, Anežka, Zdislava, Markéta, Barbora.* „Zdislava snáší nejvíc. Markéta kouše.“
- Pak pyšně zvedne kohouta: „A tohle je *Půlknír*. Taky svatej, jenom o tom ještě neví.“ Když se někdo zeptá na jméno: „Po rytíři. Ten taky nikdy nevěděl, kdy přestat kokrhat.“

#vi[Kokeš][
  - Údolí za průsmykem se jmenuje Šerodol a vládnou v něm tři bratři: Krajemír, Lidovid a Miloslav. „Už nejmíň třicet let.“ Plete se, je to čtyřicet; stařík si to špatně pamatuje. Že jste v Šerodolu, poznáte podle hraničních kamenů v průsmyku.
  - V údolí žijou dobří lidé, co s ním dělají dobré obchody.
  - „Máme tu pár zvláštních zvyklostí, ale na to si určitě zvyknete!“
  - Práce by pro vás mohla být na hradě.
]

#vsim[
  *Hřbitůvek za chalupou.* Kdo se porozhlédne, najde za chalupou asi dvacet křížků z klacíků, každý sotva na dlaň. „Koho tu pohřbíváte?“ „Kluky.“
]

#pv[
  Pod křížky leží kohoutci, které se Kokeš kdysi pokusil prodat do údolí. Hraniční kameny je srazily do umírání a nikdo je nezachránil. Kokeš to ví, jen to neumí říct srozumitelně.
]

*Odchod.* Kokeš ukáže holí k sedlu: „Jestli chcete přes sedlo, tak teď hned. Do setmění tam napadne po kolena.“ Zatímco odcházejí, mumlá si spíš pro sebe: „Holky tam dolů prodám, to jo. Kluky ne. Údolí nemá kluky rádo.“ Když se ptají dál, mávne rukou, nebo dodá jen: „Kameny je nemaj rády.“

#cti[
  Odcházíte směrem k horskému průsmyku. Vánice už mezitím stihla pořádně zesílit. Kokeš vám mává na cestu a pod paží drží svatou Ludmilu. Nebo snad Markétu? Gestikuluje na vás, ať mu nemáváte a radši jdete co nejrychleji.
]

== Průsmyk

#cti[
  Za Kokešovou chalupou se stezka zužuje a stoupá k sedlu. Sníh už nepadá, ale letí vodorovně, rovnou do tváří, a stopy, které za sebou necháváte, mizí dřív, než se stačíte ohlédnout.

  V nejvyšším místě sedla stojí po obou stranách cesty dva vysoké kameny, ohlazené větrem jako dva staří vrátní. Kdosi do nich kdysi vytesal znaky, ale čas je skoro smazal.

  Jakmile projdete mezi nimi, něco se změní. Vítr nepolevil a mraky jsou pořád stejně těžké, jen to málo světla, co jimi prosvítá, jako by ztratilo barvu. Slunce za nimi pořád tušíte, ale působí jako pouhá vzpomínka; jako popis od člověka, který už dávno zapomněl, jak slunce vypadá, a přesto se ho pokusil popsat.

  Kousek pod kameny se nad stezkou sklání skalní převis. Pod ním je vyšlapaná plocha, staré ohniště po pocestných a pár suchých větví. Místo jako stvořené k tomu, abyste tu přečkali nejhorší vánici.
]

#pv[
  - *Hraniční kameny* jsou staré posvátné prahy, teď v Perníčkářově moci. Hráči to zatím nemají jak poznat.
  - *Krajemír cítí každého, kdo mezi nimi projde.* Teď ví, že do údolí přišli cizinci, a hlavně, kdo jde kousek za nimi.
  - *Odpočívadlo pod převisem je past,* i když o tom nikdo neví. Nechte hráče, ať se usadí a začnou rozdělávat oheň.
]

#vsim[
  - Kdo kameny zkoumá (*Učenost*, *Jednání s nadpřirozenými bytostmi*, kouzelník), pozná, že je mezi nimi magické spojení, které vymezuje údolí.
  - Znaky na kamenech jsou starší než víra ve Hvězdného boha.
]

=== Perníčkář Janek

#portret(image("../šerodol-img/Perníčkář.png"), jmeno: [Perníčkář Janek])

#cti[
  Zatímco se snažíte přečkat vánici, v mlze na cestě, odkud jste přišli, se začne ozývat zvuk. Nejdříve jen vrzání, ale brzy se k němu přidá klapání kopyt a cinkání. Z vánice se vynoří koník s rolničkou na krku, za ním malý vozík zakrytý navoskovaným plátnem a vedle něj muž. Nevysoký, zavalitý, s tváří, na kterou byste zapomněli hned, jak se otočí. Jde o holi, kterou si pohazuje. Oči má ale veselé a usmívá se, jako by byl rád, že konečně vidí někoho živého. Z vozíku to hezky voní, nejspíš medem a hřebíčkem.

  „Tady bych nesedal, přátelé,“ řekne vlídně a ani nezastaví. „Mám z toho kopce špatný pocit. Pojďte, pojďte, dole je teplo.“
]

*Kdo to je.* Perníčkář, kterému děti říkají Perníkový dědek. Žoviální, zdvořilý a štědrý. Nikdy nevypadá, že spěchá, a nikdy nepřijde pozdě.
- Na vozíku veze perníky, srdce na provázcích a další cukroví. Koník se jmenuje *Pepř*.
- Na nic nenaléhá. Když hráči nechtějí jít, pokrčí rameny: „Takováhle místa laviny přitahujou.“ A jde sám, pomalu, aby ho dohnali.
- *Janek nikdy nelže,* jen neříká všechno. Hrajte ho tak celé dobrodružství.

#sb(
  [Perníčkář Janek], [Střední člověk, obyčejný (zdánlivě)],
  telo: 11, duse: 6, vliv: 6, sudba: 3,
  zbroj: [cestovní šaty (0)], rychlost: [6 m], hrozba: [k4],
  dovednosti: [Vyjednávání +4, Ovlivňování a klam +4, Pěší boj zblízka +1],
  vlastnosti: (
    ([Šťastlivec], [Sudba 3: prohraný hod se mění ve výhru. Popište to jako náhodu: protivník uklouzne na ledu, rána mine o vlásek. Sudba se obnovuje s východem slunce, takže v nekonečné noci se neobnoví.]),
    ([Nic ho nerozhodí], [Když mu dojde Duše nebo Vliv, nestane se nic. Zasměje se, uzná bod a je si jistý jako předtím.]),
    ([Zastavení času], [Když mu někdo chce doopravdy ublížit (ne přátelské klání), zastaví čas pro všechny, vezme útočníkům zbraně a pustí čas dál. Útočníci jediní vnímají, co se děje, ale nemohou se pohnout. Proti tomu se nelze bránit. Viz _Hospoda Rozcestí_.]),
    ([Nezvaný nevejde], [Nevstoupí pod žádnou střechu, kam ho nikdo nepozval chlebem a solí.]),
  ),
  akce: (
    ([Hůl], [Dosah 1 m. Zásah: 1k6 + 1 drtivé proti NPC; proti hráčským postavám kostka hrozby k4.]),
  ),
)

#pv[
  Na papíře je to obyčejný chlapík. Takhle ho hrajte při pošťuchování, přetahované o slovo nebo přátelském zápasu. Přátelské klání není ublížení podle zákona pohostinství; útok, který mu má doopravdy ublížit, ano.
]

=== Lavina

#cti[
  Sotva ujdete pár desítek kroků, nad vámi to zaburácí. Ze svahu se utrhne bílá stěna, převalí se přes převis a zasype ho i s ohništěm. Když se sníh usadí, cesta zpátky je pryč. Kde stála stezka ke Kokešovi, je teď jen hladký nával sněhu, vyšší než dva chlapi.

  Perníčkář si opráší rameno, kde se mu usadila hroudička sněhu, podívá se na zasypané odpočívadlo a pak na vás. „No vidíte. Teď byste tam trčeli zavalení…“
]

#pv[
  Lavinu poslal Krajemír a mířil na Janka, ne na družinu. Hráči to zatím nevědí. Perníčkář tudy chodí léta; zrovna dnes je ale čtyřicátá noc.
]

#pravidla[
  - *Kdo zůstal pod převisem:* Janek ho stihne strhnout stranou. Pokud ne, záchranný hod (*Akrobacie*) na Ohrožení 4, jinak Jizva na #T s kostkou hrozby k6 a #stav[Zadržený], dokud ho někdo nevyhrabe.
  - *Průsmyk je zavřený.* Zpátky ke Kokešovi se dá jen prokopat, obejít po kozí stezce přes hřeben, nebo sníh odstranit magií. Viz _Zpátky za průsmyk_ v kapitole 3.
]

=== Medový chléb na cestu

#cti[
  Perníčkář sáhne pod plátno a každému z vás podá kousek perníku. „Na cestu. Se solí, jak se patří.“ Z malého váčku vám na každý kousek nasype špetku soli. Perník je ještě teplý; plátno na vozíku musí držet teplo hodně dobře.
]

#pv[
  Kdo sní perník se solí, je Jankův host. Podle starého zvyku platí na cestě špetka soli s chlebem stejně jako chléb a sůl na prahu. Janek to nevysvětluje. Spolu se zachráněným životem je to *první dluh*.
]

#vi[Perníčkář (v průsmyku)][
  - Do Šerodolu jezdí často, prodávat perník. „Děti tam mají perník rády. Dospělí taky, jen to nepřiznají.“
  - Průsmyk teď bude zavřený. „Zpátky už nepůjdete, nanejvýš na jaře.“
  - Na lavinu: „Hory jsou náladové. A místní páni taky. Lidi je moc nemají rádi, i když mně nikdy nic zlého neudělali.“ Víc neřekne. „To se musíte poptat sami.“
]

== Sestup do údolí

#cti[
  Jak sestupujete ze sedla do údolí, vánice pomalu polevuje. Přechází v mírné sněžení, pak jen pár vloček, a nakonec i ty z ledové oblohy zmizí. Stezka klesá mezi smrky, které jsou tu zase vysoké a husté, a pak se les najednou rozestoupí a před vámi leží celé údolí.

  Je menší, než byste čekali. Úzká kotlina sevřená horami, dole potok, kolem něj roztroušená ves a nad ní, na skalnatém ostrohu, hrad s kamennou zdí a jednou hranatou věží. Dál na hřebeni, stranou od všeho, stojí osamělá věž. V jednom jejím okně svítí světlo.

  Všechno tu má barvu odpoledne, které se nemůže rozhodnout, jestli už je večer, nebo ne. Nebe je skvrnité, zahalené mlžným oparem. Sníh je šedý, střechy jsou šedé a i kouř z komínů jako by stoupal pomaleji, než by měl. Vypadá to tu ospale.

  „Za chvíli budeme ve vesnici. Ta se taky jmenuje Šerodol; moc vynalézaví tu nejsou. A pověrčiví habaděj…“
]

#vsim[
  - *Lovec, šaman nebo druid:* zvíře, které potkají, na ně zůstane zírat, místo aby uteklo.
  - *Válečník, hraničář nebo zvěd:* na cestě do údolí není žádná hlídka.
]

#pv[
  Zvířata jsou Krajemírovy oči. To, že tu není hlídka, se hodí později: Lidovid na hradě tvrdí, že mu o lavině řekly hlídky.
]

=== Děti na kraji vsi

#cti[
  Na kraji vsi si na zasněžené louce hraje hlouček dětí na vojáky. Kluci i holky mávají klacky jako meči a každé z nich má na tváři sazemi namalovanou půlku knírku, vždycky jen na pravé straně.

  Když vás uvidí, hra ustane. Děti ztichnou a zírají, jedno z nich couvne za ostatní. Pak si všimnou vozíku a koníka s rolničkou a louka vybuchne radostí.

  „Perníkový dědek! Perníkový dědek přijel!“

  Perníčkář se směje, sahá pod plátno a rozdává kousky perníku do natažených ručiček. „Pomalu, pomalu, medového chleba je dost pro všechny.“
]

*Hra na Půlkníry.* Děti si hrají na Půlknírův poslední boj. „Já jsem Půlknír!“ „Ne, ty jsi byl Půlknír včera, dneska jsem Půlknír já!“ Je-li v družině někdo, kdo vypadá jako válečník, nejstarší z chlapců ho vyzve na souboj s klacky.

#vi[děti][
  - Kdo je Půlknír: „Nejlepší rytíř na světě!“ „Akorát umřel.“ „Neumřel, jenom odešel!“
  - Víc o něm nevědí. Zbytek legendy přijde ve vsi.
]

#vsim[
  Opodál stojí havran a vše sleduje. Když se kolem něj prožene dítě, neuletí, jen lehce poposkočí, aby nebyl zašlapán.
]

== Vesnice Šerodol

#cti[
  Ves je tichá. Okenice jsou přivřené, i když se ještě nesetmělo. Žena, která vás míjí, nese v náručí slepici zabalenou do šátku jako mimino a pevně si ji tiskne k sobě.

  Lidé Perníčkáře zdraví, jeden mu podá ruku, jiný se zastaví na kus řeči. Vám se vyhýbají pohledem.
]

#vsim[
  Ve skoro každém okně stojí na parapetu vyřezávaná figurka nebo panenka z otepi slámy, obličejem ven. Kdo se na figurku zadívá déle, má pocit, že se dívá i ona.
]

#pv[
  - *Figurky a panenky* jsou dary od pánů. Lidovid se jimi dívá. V popisech je dál nezmiňujte, ať je hráči hledají sami.
  - *Slepice* jsou v údolí vzácné. Proto ta žena nese svou jako poklad.
  - Lidé jsou k družině zdvořile chladní. Kdo se na něco zeptá, dostane krátkou odpověď a rychlé rozloučení. Pánům se nic špatného neřekne, ale nikdo je ani nechválí.
]

=== Rozcestí

#cti[
  Uprostřed vsi se cesta větví. Jedna odbočka vede k hospodě, z jejíchž oken se line teplé světlo, druhá stoupá serpentinami k hradu. Perníčkář zastaví koníka a otočí se k vám.
]

*Co Perníčkář říká na rozcestí:*
- Rozloučí se: „Já tu mám ještě nějaké kšefty. Ale co si budem, v tak malém údolí se určitě ještě potkáme.“
- *Zákon pohostinství:* „A ještě něco, ať nenarazíte. Tady v Šerodolu se drží starý zvyk. Kdo vás přivítá chlebem a solí, bere vás pod svou střechu, a kdo je přijme, je jeho host. Host hostiteli neublíží a hostitel hostu taky ne. Lidi si na tom hodně zakládají. Kdo to poruší, na toho čeká kletba.“
- Pošle je na hrad: „Práci určitě najdete na hradě. Páni jsou pohostinní lidé. A koneckonců jste teď na jejich panství, je zdvořilé se aspoň představit.“ Usměje se.
- Když se někdo zeptá, jestli jsou teď jeho hosté, zasměje se: „Technicky ano…“

#vi[Perníčkář (před setměním)][
  O smlouvě, přáních ani o noci nepromluví. Od věže družinu odrazuje, protože tam je jediný člověk, který zná znění smlouvy.
  - *Věž:* „Tamta se světlem? Tam bych nechodil. Nic dobrého tam není, jen staré kamení a staré trápení.“ Když naléhají: „Páni si ji hlídají. Zeptejte se jich, jestli chcete slyšet lež.“
  - *Půlknír:* „Ach, Půlknír. Takoví už se nerodí.“ Smutně se usměje. „Býval to dobrý člověk. Možná pořád je.“
  - *Páni:* „Znám je už dlouho. Kdysi jsem jim prodal něco sladkého a doteď mi to nezaplatili.“ Zasměje se, jako by to byl vtip. „Ale to je mezi námi.“
  - *On sám:* „Peču perník. Pro děti, a pro dospělé, když jsou hodní.“ Odkud je: „Odevšad trochu.“ Jméno: „Janek. Ale děti mi říkají jinak.“
  - *Vesnice:* „Dobří lidé. Pověrčiví, ale dobří. Je tu hostinec, kovárna, fara… všechno, co tu má být. Když vám tu někdo poradí, ať počítáte stíny na zdi, tak je počítejte. Neuškodí to.“
  - *Kokeš:* „Starý Kokeš má víc rozumu, než se zdá. Jen ho nikdo neposlouchá.“
  - *Slepice:* „Slepice tu mají cenu zlata. Kohoutům se tu nedaří.“
]
