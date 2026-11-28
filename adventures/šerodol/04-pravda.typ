#import "sablona.typ": *

= 3: Pravda a volba

Ve třetí kapitole se družina dozví, co přesně páni před čtyřiceti lety slíbili, a rozhodne se, na čí stranu se postaví. Pořadí míst je zase na hráčích, ale *věž je klíč*: bez znění smlouvy se družina rozhoduje naslepo.

== Háčky: kudy kam

#tab(
  columns: (auto, 1fr),
  head: ([Místo], [Co nebo kdo tam ukazuje]),
  [*Věž*], [Světlo v okně, vidět z celého údolí. Babka („zavřeli tam Miloslavovu nevěstu“). Rychtář („páni to zakázali“). Perníčkář od ní odrazuje. Páni o ní lžou.],
  [*Štola pod hradem*], [Bořek (zaplavená štola, v noci je slyšet kopat). Havel (schovává tam víno). Půlknír. Babka (živá voda pod hradem). Kouzelník, který zkusí vycítit hradní půdu.],
  [*Kokeš a kohout*], [Kokešovo „údolí nemá kluky rádo“ a hřbitůvek. Hostinský („kohout by to věděl“). Babka („ráno přijde s kuropěním“). Rychtář („kohoutci by nepřežili cestu“). Kniha _O pověstech domácích_ (rozbřesk je první kuropění).],
  [*Hrad v noci*], [Perníčkářova láhev. Kniha _O pověstech domácích_ (kdo musí chléb a sůl podat?). Půlknír nebo Svatava. Miloslav, který si družinu po věži sám zavolá.],
  [*Tajná kniha*], [Babka, pak rychtářka, pak farářův klíč.],
)

== Věž

=== Cesta k věži

#cti[
  Stezka k věži vede po hřebeni nad lesem. Sotva na ni vkročíte, země pod vámi změkne. Zmrzlá cesta se během pár kroků promění v bahno, které vám saje boty z nohou, a to uprostřed zimy, kdy by měla být tvrdá jako kámen. Větve se sklánějí přes stezku a zachytávají se do plášťů.
]

#pv[
  *Krajemír ví, kam družina jde,* a země se ji snaží zastavit. Ne zabít, jen zdržet a odradit: bahno, větve přes cestu, zvěř, která se staví do cesty. Použijte cokoli z tabulky _Cesta k babce_, nebo jen bahno a větve.
]

#pravidla[
  Bahno je terén za polovinu rychlosti. Kdo v něm běží nebo bojuje, hází záchranný hod (*Akrobacie*) na Ohrožení 3, jinak je #stav[Ležící].
]

=== Pod věží

#cti[
  Na konci hřebene stojí věž, stará a kamenná, ochoz nahoře se už napůl rozpadl. Jediné okno svítí teplým, klidným světlem, jako svíčka, kterou někdo nechal hořet pro toho, kdo se má vrátit.

  Pod věží, u zamčených dveří, sedí na kameni muž v kroužkové košili. Na hlavě má starou kumánskou přilbu s maskou, která mu kryje jen pravou půlku tváře, i s půlkou kníru. Když vás uvidí, zvedne se, opráší si sníh z kolen a usměje se tou půlkou, kterou je vidět.

  „Hosté! Čtyřicet let tu nikdo nebyl, a teď hned celá družina. Mám vám uvařit polévku, nebo se rovnou bijeme?“
]

=== Půlknír

#portret(image("../šerodol-img/Půlknír.png"), jmeno: [Půlknír, rytíř starého pána])

#pv[
  - *Rytíř starého pána a lidový hrdina Šerodolu.* Přísahal starému pánovi: „Budu chránit tvé syny, dokud budou živi.“ Synové nestárnou, a tak nestárne ani on.
  - *Hlídá věž* na rozkaz pánů. K nevěstě nesmí nikdo.
  - *Žoviální, zdvořilý, nepohnutelný.* Vtipkuje, chválí dobré rány a mezi výměnami odpovídá na otázky.
  - *Nemá slabé místo.* Musí být poražen mečem. Slova a hrozby na něj nefungují: když mu dojde Duše nebo Vliv, nestane se nic.
  - *Nemůže zůstat mrtvý.* Smrtelná rána se mu do minuty zahojí a vstane.
  - *Proklouznutí:* zvěd se může vplížit do věže, zatímco ho ostatní zaměstnají. Když Půlknír uslyší uvnitř hlasy, jde se podívat, a ze scény je záchrana, nebo hra na schovávanou. I družina, která se kolem něj dostane, ho *pořád potřebuje kvůli tomu, co ví.*
  - *Když o vetřelci neví,* stromy kolem věže se rozpláčou: z kůry jim stéká pryskyřice, větve sténají a skřípou jako vzlykot. Krajemír ho tak varuje. Půlknír pochopí.
]

#sb(
  [Půlknír], [Střední člověk, elitní],
  telo: 55, duse: 10, vliv: 10,
  zbroj: [kroužková košile, prošívanice, kumánská přilba s maskou (2); štít],
  rychlost: [6 m], hrozba: [k8],
  dovednosti: [dovednosti Bojovníka +4, dovednosti Válečníka +3],
  vlastnosti: (
    ([Přísaha], [Dokud páni žijí, Půlknír nestárne a nemůže zemřít. S 0 Těla padne; do minuty se mu rány zavřou a vstane s plným Tělem. Přísaha padne, jen když uvěří, že páni zavraždili jeho pána (viz _Minuta po smrti_).]),
    ([Nepohnutelný], [Když mu dojde Duše nebo Vliv, nestane se nic. Zastrašit ani obalamutit ho nelze.]),
    ([Starý mistr], [Dva útoky za kolo. Štít mu dává *Obranu* zdarma jednou za kolo.]),
    ([Strážce dveří], [Kdo se kolem něj chce protáhnout ke dveřím věže, dává mu volný útok, i když se nevzdaluje.]),
  ),
  akce: (
    ([Dlouhý meč], [Dosah 1 m. Zásah: 1k8 + 4 sečné proti NPC; proti hráčským postavám kostka hrozby k8.]),
    ([Úder štítem], [Místo jednoho útoku. Dosah 1 m. Zásah: 1k4 + 4 drtivé a *Lstivě* zdarma: cíl je odstrčen o 2 m nebo je #stav[Ležící].]),
  ),
)

#pravidla[
  *Jak těžký je to boj.* Proti začínající družině čtyř postav vydrží zhruba čtyři kola. Bijte se s ním na Ohrožení 3; je to souboj, ne jatka. Kdo spadne do umírání, toho Půlknír dál nebije a pomůže ho stabilizovat.
]

=== Minuta po smrti

#cti[
  Půlknír padne do sněhu a zůstane ležet. Pak se mu rána začne zavírat, kousek po kousku, jako když mráz zatahuje led na kaluži. Zalapá po dechu, posadí se a dlouho se dívá do země.

  „Čtyřicet let,“ řekne nakonec tiše. „A pořád nevím proč.“
]

#pv[
  - *Minuta, než se postaví, je okno pro rozhovor.* Je poražený, bezmocný a nic mu nedává smysl.
  - *Varování,* dřív než mu někdo řekne pravdu: „Pánům nepřeju nic zlého. Přísahal jsem jejich otci. Kdyby ta přísaha padla…“ Pokrčí rameny. „Možná bych padl s ní.“
  - *Na čí stranu se postaví:*
    - *Když ho družina přesvědčí, že chce pánům pomoct,* pomůže jí.
    - *Když ho přesvědčí, že páni zabili starého pána,* a má důkaz (babčino svědectví, pohřební zápis), přísaha se zlomí. Pak pomůže pány svrhnout.
]

#pv[
  *Když přísaha padne,* Půlkníra jako by opustila obrovská tíha, a hned nato ho zavalí všechno, co čtyřicet let odkládal. Začne zase stárnout, se čtyřiceti lety prožitého života v sobě. Totéž čeká pány po kuropění. Viz _Když přísaha padne_ v kapitole 4.
]

#vi[Půlknír][
  - *Obléhání a štola:* „Nepřítel kopal pod hrad. Páni štolu zaplavili. Tehdy jsem si myslel, jak je to chytré.“ Odmlčí se. „Teď v noci slyším, že tam dole pořád někdo kope.“ Ví, kde je vchod: v rokli pod hradním ostrohem.
  - *Starý pán:* „Umřel ve spánku. Tak mi to řekli.“ A dodá: „Bůh mi odpusť, ale jestli někdy přišla smrt v pravou chvíli, tak tehdy. Starý pán by údolí neudržel. Kluci se chopili vlády a vyhráli. Bez nich by tu dneska nebylo nic.“ Dokud nemá důkaz, nepochybuje.
  - *Páni:* mluví o nich jako o klucích, které učil šermovat. „Krajemír byl nejlepší, Lidovid nejchytřejší a Miloslav nejhodnější.“
  - *Nevěsta:* „Je nahoře. Nic zlého se jí neděje. Nosím jí dříví a čtu jí, když chce.“
  - *Smlouva:* nic. U smlouvy nestál. Ví jen, že se kluci té noci vrátili z rozcestí a už nikdy nezestárli.
  - *Kohout Půlknír:* když se dozví, že se po něm jmenuje kohout, poprvé se doopravdy rozesměje.
]

=== Svatava

#portret(image("../šerodol-img/Svatava.png"), jmeno: [Svatava], vyska: 4.5cm)

#cti[
  Nahoře ve věži je jediná místnost. Na stole hoří svíčka, u kamen sedí stará žena v čistých, mnohokrát spravovaných šatech. Bílé vlasy má spletené do copu, jak se nosí u nevěst. Stěny kolem ní jsou popsané uhlem, řádek pod řádkem, pořád dokola stejný text.

  „Vy nejdete od něj,“ řekne. Není to otázka. „On by poslal Půlkníra pryč. Posaďte se.“
]

#pv[
  - *Svatava*, Miloslavova snoubenka. Milovala ho dřív, než si ji přál. Když se dozvěděla, co si přál, odešla od něj ještě před svatbou. Milovat ho nepřestala. Je smrtelná a stará, on ne.
  - *Svědkyně smlouvy, ale ne její strana.* Proto může mluvit, a proto ji páni zavřeli.
  - *Na stěnách je smlouva.* Psala ji čtyřicet let uhlem, aby nezapomněla ani slovo. Plné znění je v _Přílohách: Úmluva_.
  - *Svíčka v okně* hoří pro Miloslava. „Ví, že tu jsem. Ví, co cítím. Tak ať aspoň vidí, že svítím.“
  - *Miloslav ji cítí.* Ve chvíli, kdy k ní někdo přijde, to ví a varuje bratry.
]

#vi[Svatava][
  - *Celé znění smlouvy*, slovo od slova.
  - *Perníčkář:* stála u toho, na rozcestí pod Šerodolem. „Voněl medem a hřebíčkem. Dal jim každému kus perníku a oni ho snědli.“
  - *Proč odešla:* „Přál si nevěstu, která ho bude milovat. Já ho milovala. Tak proč si to přál?“
  - *Co chce:* aby Miloslav zestárl a umřel jako člověk. „Chci ho vidět starého. Aspoň jednou.“
]

== Štola pod hradem

#cti[
  Vchod do štoly je v rokli pod hradním ostrohem, skoro zasypaný sněhem a kamením. Kdysi ho zatloukli prkny, ale prkna shnila. Zevnitř táhne vzduch, který je teplejší, než by měl být, a voní mokrou hlínou a něčím nasládlým, jako když hnije ovoce.

  Hluboko ve tmě se ozývá pravidelné ťukání. Ťuk. Ťuk. Ťuk. Jako když někdo kope.
]

#pv[
  - *Štola nepřátel z doby obléhání.* Vede až pod hradní nádvoří, tam, kde páni přijímají hosty. Propadlá dlažba nahoře je přímo nad ní.
  - *Je napůl zaplavená.* Páni ji tehdy zatopili, ale štola se mezitím prokopala až ke studánce pod hradem. Voda v ní nezamrzá.
  - *Havlova skrýš:* pod převislým kamenem u vchodu má opilec Havel schované pašované víno. Další láhev martikovského, kdyby družina tu první ztratila.
  - *Štola není součástí hradu.* Neplatí v ní práva hostů hradu.
]

#vsim[
  - Voda ve štole je teplá a voní medem.
  - Ve stropě rostou kořeny, i když nad štolou je jen skála a hradní zeď.
  - *Válečník nebo zvěd:* podle sklonu štoly a počtu kroků pozná, kdy je přímo pod nádvořím.
]

=== Havíři

#cti[
  V chodbě před vámi stojí muž v rozedrané kazajce, po kolena ve vodě, a buší krumpáčem do skály. Kůži má bledou a nafouklou jako utopenec a rukávy mu prorůstají kořínky. Když vás uslyší, otočí se.

  „Už jsme skoro tam,“ řekne. „Skoro pod nimi. Pomůžete nám kopat?“
]

#pv[
  - *Utopení nepřátelští havíři, otroci živé vody.* Krajemírovi neodpovídají.
  - Mluví, ale moc to nedává smysl. Myslí si, že obléhání pořád trvá.
  - *Kdo jim překáží v kopání,* na toho zaútočí. Kdo kope s nimi, toho nechají být.
  - Ve štole jich je čtyři až šest; po dvou vylézají z vody.
]

#sb(
  [Utopený havíř], [Střední nemrtvý, obyčejný],
  telo: 15, duse: 3, vliv: 2,
  zbroj: [rozedraná kazajka (0)], rychlost: [6 m, ve vodě bez postihu], hrozba: [k6],
  dovednosti: [Síla +2, Pěší boj zblízka +2, kopání +4],
  smysly: [cítí každého, kdo stojí ve vodě štoly],
  vlastnosti: (
    ([Nemrtvý], [Dovednosti „proti lidem a zvířatům“ proti němu nepřidávají úroveň povolání.]),
    ([Otrok živé vody], [Když padne do vody štoly, na konci příštího kola vstane s polovinou Těla. Zůstane ležet, jen když ho někdo vytáhne na suché, spálí, nebo když Stará dovolí.]),
    ([Kořeny], [Při zásahu *Lstivě* zdarma: cíl je chycený kořeny z jeho rukávů.]),
    ([Pořád obléhání], [Ztráta Duše ho nezastaví; místo toho se vrátí ke kopání.]),
  ),
  akce: (
    ([Krumpáč], [Dosah 1 m. Zásah: 1k8 + 2 bodné proti NPC; proti hráčským postavám kostka hrozby k6.]),
  ),
)

=== Studánka

#cti[
  Na konci štoly se chodba rozšíří v jeskyni. Uprostřed je jezírko, černé a nehybné, a nezamrzá. Ze stropu, ze stěn i ze dna k němu vedou kořeny tlusté jako paže, porostlé bulvami jako nádory. Některé bulvy pomalu pulzují.

  Nad hladinou je cítit teplo. A pak hlas, který nepřichází odnikud a odevšad zároveň, hluboký a sladký jako med.

  „Hosté. Tak dlouho tu nikdo nebyl.“
]

#pv[
  *Královna lesa (Stará):*
  - *Starý duch údolí.* Její srdce je živá voda. Projevuje se jako kořeny s nádory a výrůstky kolem studánky.
  - *Je uvězněná.* Dokud Krajemír drží zemi, ze štoly ven nemůže. Její moc sahá jen kousek kolem vody.
  - *Je lstivá.* Snaží se družinu přemluvit, aby pány zabila, protože jejich smrt ji osvobodí. Nabízí za to pomoc: ukáže cestu pod nádvoří, uklidní havíře.
  - *Dá se obelhat.* Kdo s ní jedná (_Jednání s nadpřirozenými bytostmi_), může ji přesvědčit, že jí pomáhá. Například že kohout musí ožít, aby páni padli.
  - *Živá voda:* cokoli mrtvého se do ní ponoří, vstane jako její otrok. Mluví, ale moc to nedává smysl, a je agresivnější. Ze štoly ven nemůže.
]

#vi[Stará][
  - *Páni:* „Synové zloděje. Dědeček mi vzal údolí, vnuci mě drží pod kamenem. Ten nejstarší je dobrý žalářník.“
  - *Perníčkář:* „Sladký. Chce jejich duše. Já chci jen zpátky svůj les. Kdo z nás je horší?“
  - *Děti:* „Dávali mi je dobrovolně. A zima pak přešla. Byl to obchod, jako každý jiný.“
  - *Kohout:* neví, proč by ho družina chtěla. Když se ptají moc, zbystří.
  - *Co nabízí:* uklidní havíře, ukáže, kde je štola přesně pod nádvořím, a „až budu volná, les vás bude mít rád“.
]

#pravidla[
  - *Obelhat Starou:* střet _Jednání s nadpřirozenými bytostmi_ (kdokoli, pokud mluví a je to inteligentní bytost) nebo *Ovlivňování a klam* proti její +5. Její Vliv (12) ubírá Ohrožení (běžně 3) + úroveň. Na 0 Vlivu jí věří.
  - *Prohraný hod* stojí jako vždy Ohrožení ve Vlivu. Kdo ho neodvrátí, toho Stará prokoukne: havíři se probudí a kořeny se dají do pohybu.
]

#pv[
  *Boj se Starou.* Zabít ji nejde: jejím srdcem je živá voda. Její tělesnou podobu, kořeny s bulvami kolem studánky, ale zničit lze. Bojuje mrazem: kde sáhne, tam voda zamrzá, kůže praská a dech se mění v jinovatku.
  - *Zničená podoba:* s 0 Těla kořeny zčernají, zmrznou a popraskají. Stará zmlkne a do příští zimy se nebude moct projevit. Pak dorostou.
  - *Pozor:* se zničenou podobou nemůže oživit kohouta, ani kdyby chtěla. Kdo s ní bojuje dřív, než ho přemluví, přijde o tuhle cestu.
]

#sb(
  [Stará, Královna lesa], [Obrovský běs (strážce místa), boss; jen u studánky],
  obrazek: image("../šerodol-img/Stará.png"),
  telo: 90, duse: 15, vliv: 12, sudba: 2,
  zbroj: [kůra a bulvy (1)], rychlost: [0 m (kořeny sahají po celé jeskyni)], hrozba: [k8],
  dovednosti: [Jednání s nadpřirozenými bytostmi +5, Ovlivňování a klam +5, Síla +4],
  imunity: [ledové; zastrašování],
  slabiny: [oheň],
  vlastnosti: (
    ([Nesmrtelná], [Nemůže zemřít, dokud je živá voda. S 0 Těla je zničená jen její tělesná podoba (viz výše).]),
    ([Uvězněná], [Dokud páni vládnou, nemůže ze štoly ani nikomu ublížit dál než 10 m od vody. Viz _Stará a propadlé nádvoří_ v kapitole _Stavby Šerodolu_.]),
    ([Dvě akce], [Jedná dvakrát za kolo, pokaždé na jiné iniciativě.]),
    ([Zamrzající voda], [Voda štoly kolem studánky je pro nepřátele terén za polovinu rychlosti; kdo v ní běží nebo bojuje, hází záchranný hod (*Akrobacie*) na Ohrožení 3, jinak je #stav[Ležící].]),
  ),
  akce: (
    ([Mrazivý kořen], [Dosah 10 m. Zásah: 2k6 + 4 ledové proti NPC; proti hráčským postavám kostka hrozby k8. *Lstivě* zdarma: cíl je #stav[Zadržený] přimrzlým kořenem a stažený o 3 m k vodě.]),
    ([Jinovatka], [Jednou za kolo. Kužel 5 m z hladiny. Každý v něm hází obranný hod proti její +4; NPC, které prohraje, dostane 3k6 ledové (vyhraje: polovinu), hráčská postava kostku hrozby k8 a má postih #stav[Pomalu] do konce svého příštího tahu.]),
    ([Do vody], [Cíl #stav[Zadržený] u vody stáhne pod ledovou hladinu. Záchranný hod (*Síla*) na Ohrožení 4; kdo ho neodvrátí, začne se topit (Jizva na #T úrovně 2 každé kolo pod vodou).]),
    ([Sladký hlas], [Střet proti *Síle vůle* cíle. Výhra: cíl je #stav[Okouzlený] do konce scény a brání ji.]),
  ),
)

*Co se tu dá udělat:*
- *Láhev:* položit martikovskou láhev na konec štoly pod nádvořím. Pak stačí, aby se Perníčkář setkal se všemi třemi bratry tváří v tvář na nádvoří nad ní.
- *Kohout:* mrtvý kohout ponořený do studánky ožije jako otrok vody. Ze štoly nemůže, ale může tu zakokrhat. Pod hradem je pořád údolí, takže se to počítá. Stará to musí dovolit, a proto ji je potřeba obelhat.

#pv[
  *Kohout nikoho neklame.* Zakokrhá doopravdy a smlouvu tím zruší. Lest je jinde: družina musí Starou přesvědčit, aby kohouta oživila, i když to jí samotné uškodí. Krajemír pak zemi drží dál a ona zůstane pod kamenem. Když kohout zakokrhá, Stará to pochopí, ale v tu chvíli už je pozdě.
]

== Zpátky za průsmyk

#cti[
  Za hraničními kameny je najednou světleji. Ne moc, jen o tolik, o kolik je šero světlejší než noc. Za zády máte tmu nad údolím a před sebou nad horami šedý pruh svítání. Tady venku noc skončila už dávno.
]

#pv[
  - *Kokeš* je rád, že je vidí. „Ráno přišlo, jenom tam dole se nějak zaseklo.“
  - *Kohout Půlknír:* Kokeš ho miluje. Dá ho tomu, kdo mu vysvětlí proč, nebo kdo mu slíbí, že se mu nic nestane. Ukáže na hřbitůvek: „Kluci tam dolů nedojdou. Kameny je nemaj rády.“
]

#pravidla[
  *Cesta přes zavřený průsmyk:*
  - *Prokopat:* posádka čtyř lidí s lopatami prokope lavinu za *dvě hodiny* (_Hodiny noci_ +2).
  - *Kozí stezka přes hřeben:* hodina cesty, dva záchranné hody (*Akrobacie* nebo *Pohyb v divočině*) na Ohrožení 4. Neodvrácený neúspěch: pád ze 6 m, nástraha síly 4 (kostka hrozby k6). Zbroj nepomáhá.
  - *Magie:* rychlé, ale hlučné. Krajemír to ucítí a pošle další lavinu, nebo vlky.
]

=== Kozí stezka

#cti[
  Stezka se odpojí od cesty kousek pod sedlem a stoupá po skalách, kam by se odvážila jen koza. Sníh je tu odfoukaný na holou skálu, která se leskne ledem. Nad vámi, na hřebeni, stojí v řadě kamzíci a dívají se dolů. Neutíkají. Zírají.

  Na nejvyšším místě hřebene stojí kámen, menší než ty dva v průsmyku, ale se stejnými skoro smazanými znaky.
]

#pv[
  - *Kamzíci* jsou Krajemírovy oči jako všechna zvěř v údolí. Krajemír ví, kudy družina jde.
  - *Kámen na hřebeni* patří ke stejnému prahu jako ty v průsmyku. Hranice údolí vede po celém hřebeni; kohout tudy projde stejně špatně jako sedlem.
  - Pokud Krajemír chce družinu zdržet, kamzíci shodí kamení: záchranný hod (*Akrobacie*) na Ohrožení 3, jinak Jizva na #T s kostkou hrozby k4.
]

*Jak dostat kohouta přes kameny* _(pravidlo od oka)_:
- *Rozbít kámen, nebo magií přerušit spojení mezi kameny* (_Zlomení kouzla_, obrácené _Zaštítění_). Do minuty se to zacelí, ale po tu minutu je v prahu mezera a kohout jí projde. Hodnoty kamene jsou v kapitole _Stavby Šerodolu_.
- *Nechat ho umřít a vrátit:* kameny kohouta srazí do umírání, ne na smrt. Hraje se jako hody na umírání s _Léčením zvířat_, které může zkusit kdokoli s holými kostkami.
- *Odnést ho mrtvého ke studánce* ve štole a ponořit ho.

*Cesty, které kameny vůbec nepotřebují:*
- *Familiár* v podobě kohouta (Zaříkávačovo kouzlo _Familiár_): přivolaný běs kameny neprochází.
- *Kožoměnec* s kohoutím pérem (Šamanovo _Kožoměnec_).
- *Rarášek* z vejce šerodolské slepice, podle babčina obřadu (viz kapitola 2). Je to duch, nikdy se nenarodil, a kameny ho nechají být. Perníčkář ho ale může zapovědět, když mu ho přinesou na oči.

== Hrad v noci

#cti[
  V nekonečné noci vypadá hrad menší než za soumraku. Na hradbách hoří jediná pochodeň. Za okénkem v bráně se lesknou oči strážného, který nespal od chvíle, kdy mělo svítat.
]

#pv[
  - *Brána:* dokud družina neprojde věží, strážný pořád opakuje: „Páni po setmění nepřijímají. Přijďte ráno.“ Jenže ráno nepřichází.
  - *Prohlídka:* páni pustí družinu dovnitř, jen když ji stráž u brány prohledá a láhev u sebe nemá. Kdo ji nese, musí ji nechat venku před branou. Strážný na ni nesáhne; leží ve sněhu, dokud se pro ni někdo nevrátí. Láhev schovaná na těle se hledá střetem *Triky a zručnost rukou* proti strážnému (+2); figurky na bráně se dívají taky.
  - *Miloslav si družinu zavolá.* Jakmile někdo dojde ke Svatavě, Miloslav to ucítí a varuje bratry. Když se pak družina vrátí k hradu, brána se otevře a sluha řekne: „Páni vás očekávají.“
  - *Páni v noci* nespí a čekají na nádvoří u ohně. Krajemír poslouchá zemi, Lidovid sleduje figurky, Miloslav je smutnější než kdy dřív. Vědí, kde všude družina byla.
  - *Co páni chtějí:* rozbřesk. O smlouvě mluvit nemohou, ani když ji družina zná.
  - *Miloslav zkusí družinu okouzlit,* jakmile má podezření, že stojí při Perníčkáři. Okouzlený mu nemůže ublížit, a pustit Perníčkáře do hradu je ublížení.
]

=== Rozhovor s pány v noci

#cti[
  Páni sedí na nádvoří u ohně, každý na jiné straně, jako by se jeden druhému vyhýbali. Když vejdete, Miloslav vstane. Ostatní dva ne.

  „Byli jste ve věži,“ řekne Miloslav. Není to otázka. „Jak se má?“
]

#pv[
  Páni o smlouvě mluvit nemohou, ani teď. Mohou ale prosit, nabízet a ukazovat. Každý to dělá po svém:
  - *Miloslav prosí.* Nabídne cokoli z pokladnice za „kohouta do rána“. Slova o smlouvě mu uvíznou v krku, slova o kohoutovi ne. Na Svatavu se ptá znovu a znovu.
  - *Lidovid ukazuje.* Vyjmenuje všechno, co družina za noc dělala a říkala, slovo od slova, aby věděla, že před ním nic neschová. Nevyhrožuje. Jen konstatuje.
  - *Krajemír mlčí,* dokud někdo nezmíní otce. Pak vstane a odejde od ohně. Psi jdou s ním.
  - *Když družina zmíní vraždu,* nikdo z nich nezapírá. Miloslav sklopí oči, Lidovid řekne: „Údolí by padlo.“ Krajemír neřekne nic.
  - *Když se družina přizná k Perníčkáři,* Miloslav zkusí okouzlení. Nejdřív na toho, kdo nese láhev.
]

=== Kuchyně

Hlavní cesta, jak dostat Perníčkáře do hradu. Dělaná pro zvěda.

#pv[
  - *Zvyk přesně* (viz _O pověstech domácích_): „Kdo požije chléb a sůl domu na jeho prahu, jest jeho hostem.“ Nikde se neříká, kdo je musí podat.
  - *Kuchyně* je v přízemí u nádvoří. Chléb a sůl na uvítanou leží na polici pod plátnem. Hlídá ji okouzlený sluha.
  - *Proč to nikdo z hradu nikdy neudělal:* všichni jsou okouzlení Miloslavem, Lidovid celým hradem kouká, a do dneška na tom nezáleželo.
  - *Proč to může družina:* nejsou okouzlení (pokud je Miloslav neokouzlí) a jako hosté mají k chlebu domu přístup.
  - *Překážky:* figurka nad plotnou, stíny na zdi (počítejte je!), Krajemírovi psi, sluha.
  - Pak stačí Perníčkáře nakrmit na prahu brány.
]

#vsim[
  Nad plotnou stojí figurka, obličejem ke dveřím.
]

#pv[
  *Jak dostat Perníčkáře na práh brány.* Brána je po setmění zavřená, ale páni jsou vzhůru a čekají na nádvoří. Družina má víc cest:
  - *Promluvit si cestu dovnitř:* páni si družinu stejně chtějí zavolat. Kdo strážnému okénkem řekne, že nese zprávu o věži, toho pustí, a s ním i toho, kdo stojí vedle.
  - *Převlek:* Perníčkář jde mezi družinou v cizím plášti. Na trojí otázku řekne potřetí pravé jméno, „Janek“, a to strážnému nic neřekne.
  - *Proplížit se nebo přelézt hradby:* *Vzdušná akrobacie* nebo *Akrobacie*, figurky na hradbách a Krajemírovi psi. Pak otevřít branku zevnitř.
  - *Podplatit:* okouzlené stráže podplatit nejde. Sluhu z kuchyně ano, pokud ho Miloslav zrovna nepotřebuje.
  - *Dovolat se práva hostů:* družina je host hradu a hostu se nezavírají dveře. Strážný musí otevřít, když mu to připomenou podle zvyku (*Vyjednávání* proti jeho *Přežití ve městě*, Ohrožení 3).
]

=== Jiné cesty dovnitř

- *Přemluvit pána,* aby ho pozval: skoro nemožné. Přísahali, že nikdy.
- *Převlek:* Perníčkář přijde jako jeden z družiny a na nádvoří dostane chléb a sůl jako každý host. Překážky: figurky, stíny, psi.
- *Vylákat všechny pány z hradu:* dům bez pána není ničí střecha. Připusťte to jen nerad.

=== Obyvatelé hradu

#sb(
  [Hradní strážný, sluha], [Střední člověk, obyčejný],
  telo: 11, duse: 4, vliv: 6,
  zbroj: [prošívanice a železný klobouk (1)], rychlost: [6 m], hrozba: [k6],
  dovednosti: [dovednosti Bojovníka +2, Přežití ve městě +1],
  vlastnosti: (
    ([Okouzlený], [Je okouzlený Miloslavem. Ve věcech pánů proti němu Vliv nepomáhá a pánům neublíží.]),
    ([Jméno třikrát], [Po setmění nikoho nepustí, dokud se třikrát nezeptá na jméno.]),
  ),
  akce: (
    ([Kopí], [Dosah 2 m. Zásah: 1k6 + 2 bodné proti NPC; proti hráčským postavám kostka hrozby k6.]),
    ([Kuše], [Dostřel 16/64 m. Zásah: 1k8 + 2 bodné. Nabíjení stojí akci.]),
  ),
)

#sb(
  [Krajemírův pes], [Střední zvíře, obyčejné],
  telo: 12, duse: 3, vliv: 5,
  zbroj: [žádná (0)], rychlost: [8 m], hrozba: [k6],
  dovednosti: [Pěší boj zblízka +2, Přežití v divočině +3 (čich)],
  smysly: [bystrý čich a sluch],
  vlastnosti: (
    ([Mlčí], [Nikdy neštěkne ani nezavrčí.]),
    ([Krajemírovy oči], [Co pes vidí a cítí, to Krajemír ví.]),
  ),
  akce: (
    ([Kousnutí], [Dosah 1 m. Zásah: 1k6 + 2 bodné proti NPC; proti hráčským postavám kostka hrozby k6. Při zásahu *Lstivě* zdarma: cíl je #stav[Ležící].]),
  ),
)

=== Páni v boji

#pv[
  Páni a družina jsou si navzájem hosty, takže k boji dojít nemá. Když přesto dojde (zákon poruší jedna strana, nebo družina pány svrhne s Půlknírem), použijte tyto statbloky. *Kdo zákon pohostinství poruší, toho stihne kletba* (viz kapitola 4).
]

#sb(
  [Krajemír], [Střední člověk, elitní; pán země],
  obrazek: image("../šerodol-img/Krajemír.png"),
  telo: 50, duse: 9, vliv: 10, sudba: 2,
  zbroj: [lovecký kabátec (1)], rychlost: [6 m], hrozba: [k8],
  dovednosti: [dovednosti Bojovníka +4, dovednosti Lovce +4],
  vlastnosti: (
    ([Smlouva], [Nestárne a neumírá. S 0 Těla padne a do minuty vstane, dokud smlouva platí.]),
    ([Země mu odpovídá], [Cítí každého v údolí. Jednou za kolo pohne krajem: kořeny (záchranný hod *Síla*, Ohrožení 3, jinak #stav[Zadržený]), praskající led, padající větev.]),
    ([Pán zvěře], [Zvířata v údolí ho poslouchají a nedají se jeho vůli vzít.]),
    ([Slabé místo], [Otec. Kdo mu připomene oměj, bere mu Duši s *Přesně* zdarma.]),
  ),
  akce: (
    ([Lovecký oštěp], [Dosah 2 m. Zásah: 1k8 + 4 bodné proti NPC; proti hráčským postavám kostka hrozby k8.]),
  ),
)

#sb(
  [Lidovid], [Střední člověk, elitní; ten, který vidí],
  obrazek: image("../šerodol-img/Lidovid.png"),
  telo: 40, duse: 7, vliv: 10, sudba: 2,
  zbroj: [žádná (0)], rychlost: [6 m], hrozba: [k6],
  dovednosti: [dovednosti Kejklíře +4, dovednosti Zvěda +4],
  vlastnosti: (
    ([Smlouva], [Nestárne a neumírá. S 0 Těla padne a do minuty vstane, dokud smlouva platí.]),
    ([Vidí vše], [Nedá se překvapit. Vidí každou figurkou v údolí; *Rychle* má zdarma.]),
    ([Stíny], [Jednou za scénu přivolá stínového zvěda.]),
    ([Nikdy nespí], [Slabé místo: Duše. Je unavený čtyřicet let.]),
  ),
  akce: (
    ([Vrhací nože], [Dostřel 4/12 m. Zásah: 1k4 + 4 bodné proti NPC; proti hráčským postavám kostka hrozby k6.]),
  ),
)

#sb(
  [Miloslav], [Střední člověk, elitní; ten, kterého milují],
  obrazek: image("../šerodol-img/Miloslav.png"),
  telo: 45, duse: 10, vliv: 9, sudba: 2,
  zbroj: [žádná (0)], rychlost: [6 m], hrozba: [k6],
  dovednosti: [Ovlivňování a klam +5, Vliv ve vysoké společnosti +4, dovednosti Bojovníka +2],
  vlastnosti: (
    ([Smlouva], [Nestárne a neumírá. S 0 Těla padne a do minuty vstane, dokud smlouva platí.]),
    ([Okouzlení], [Akce. Střet *Ovlivňování a klam* proti *Síle vůle* cíle. Výhra: cíl je #stav[Okouzlený], dokud ho Miloslav nepustí. Nefunguje na Svatavu.]),
    ([Cítí Svatavu], [Vždycky ví, kde je a co cítí.]),
    ([Slabé místo], [Svatava. Kdo mluví jejím jménem, bere mu Vliv s *Přesně* zdarma.]),
  ),
  akce: (
    ([Meč], [Dosah 1 m. Zásah: 1k8 + 2 sečné proti NPC; proti hráčským postavám kostka hrozby k6.]),
  ),
)

== Perníčkář ve třetí kapitole

*Když se k němu družina přidá,* řekne jí, co potřebuje, a o smlouvě přitom nepromluví: „Páni na víno nesáhnou a stráž ho nepustí. Ale láhev nemusí stát na stole. Stačí, když bude pod nimi.“ A: „Do hradu mě nikdo nepozve. Leda by mi někdo podal jejich chleba.“

=== Výmluva na slib

Jen když je družina úplně ztracená.

#cti[
  Perníčkář si povzdechne a odloží sklenici. „O žádné smlouvě nemluvím. Mluvím o slibu.“ Usměje se. „Páni mi kdysi slíbili, že si se mnou sednou nad lahví martikovského. Všichni tři, a já s nimi, tváří v tvář. Čtyřicet let čekám.“
]

=== Když se družina postaví proti němu

#pv[
  Perníčkář je host družiny a družina jeho. Ublížit jí nesmí a neudělá to. Nelže a nevyhrožuje. Zbývá mu prosit a připomínat:
  - „Zachránil jsem vám život. Nakrmil jsem vás. Na tohle jsem čekal čtyřicet let.“
  - Nabídne přání hned, ne až potom. Každému jedno, cokoli. (Přání se pak obrátí stejně jako ve finále A.)
  - Kohout není host. Když ho družina nese údolím, Perníčkář se objeví u cesty a dívá se na něj. Nic neudělá, jen se dívá.
  - Když prohraje, viz _Finále B_ v kapitole 4.
]

== Rozhodnutí

Po věži má družina všechno, co potřebuje, a volí mezi dvěma cestami. Ani jedna není čistá.

#tab(
  columns: (auto, 1fr, 1fr),
  head: ([Strana], [Co je potřeba], [Kdo vyhraje]),
  [*Perníčkářův plán*], [Láhev ve štole pod nádvořím a Perníčkář v hradě, tváří v tvář všem třem pánům.], [Perníčkář. Páni přijdou o duše, údolí zůstane bez pánů a Staré už nikdo nedrží. Družina jako hosté hradu ponese kletbu.],
  [*Konec noci*], [Kohoutí kokrhání v údolí.], [Páni a údolí. Páni začnou zase stárnout: navenek dvacetiletí, uvnitř se šedesáti lety života a těžkým břemenem. Starou musí zapečetit vlastníma rukama.],
)
