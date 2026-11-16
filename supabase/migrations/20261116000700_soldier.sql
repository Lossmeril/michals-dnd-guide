-- The first background in the fortune format: the Soldier
-- (see docs/ruleset-overview.md, Backgrounds › First draft: Soldier)

insert into public.backgrounds (id, name, description, known_settings, extra_languages, sort, variants, archetypes, quirks, ideals, bonds, flaws)
values ('soldier', 'Soldier |cs| Voják', 'A life in someone else''s war: the march, the line, the pay that comes late. |cs| Život v cizí válce: pochod, řada a žold, který chodí pozdě.', 'Armies and war camps, soldiers and their officers |cs| Vojska a vojenské tábory, vojáci a jejich důstojníci', 0, 0,
  '{"poor": {"label": "A levy sent home, or a deserter |cs| Odvedenec poslaný domů, nebo dezertér", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}, {"options": [{"entries": [{"items": ["dice-set"], "quantity": 1}]}]}], "coins_copper": 100, "material": 1}, "commoner": {"label": "A veteran of a few campaigns |cs| Veterán několika tažení", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}, {"options": [{"entries": [{"items": ["dice-set"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["winter-blanket"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hemp-rope"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["healers-kit"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rank-insignia"], "quantity": 1}]}]}], "coins_copper": 250, "material": 2}, "fortunate": {"label": "A sergeant or an officer |cs| Seržant nebo důstojník", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}, {"options": [{"entries": [{"items": ["dice-set"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["winter-blanket"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hemp-rope"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["healers-kit"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rank-insignia"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tent"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hooded-lantern"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["oil-flask"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["calligraphers-supplies"], "quantity": 1}]}]}], "coins_copper": 600, "material": 4}}'::jsonb,
  'Infantryman | Stood in the line and held it. | Commoner or fortunate arms: spear or sword, and a shield
Archer | Shot from behind the line at whatever came. | Fortunate arms: longbow or crossbow, medium armour
Pavisier | Crossbow and a planted pavise, at sieges and on walls. | Commoner arms: crossbow and pavise
Scout | Rode ahead and came back with news, or didn''t. | Commoner mount, shortbow and a handaxe
Man-at-arms | Fought from the saddle in the charge. | Fortunate mount, commoner arms: lance and shield
Sapper | Dug mines under walls and countermines under theirs. | Commoner arms: pick, gambeson; fortunate background
Barber-surgeon | Sewed the others up behind the line. | Poor arms: a dagger; fortunate background
Levy | A peasant handed a polearm and pointed at the enemy. | Poor arms: billhook or pitchfork, padded hood

|cs|

Pěšák | Stál v řadě a držel ji. | Prostá nebo zámožná výzbroj: kopí nebo meč a štít
Lučištník | Střílel zpoza řady na všechno, co se blížilo. | Zámožná výzbroj: dlouhý luk nebo kuše, střední zbroj
Pavézník | Kuše a zapíchnutá paváza, při obléhání a na hradbách. | Prostá výzbroj: kuše a paváza
Zvěd | Jezdil napřed a vracel se se zprávami. Nebo se nevrátil. | Prostý kůň, krátký luk a sekerka
Těžký jezdec | Bojoval ze sedla v útoku. | Zámožný kůň, prostá výzbroj: dřevec a štít
Zákopník | Kopal podkopy pod jejich hradby a protipodkopy pod naše. | Prostá výzbroj: krumpáč, prošívanice; zámožný původ
Felčar | Za řadou sešíval ostatní. | Chudá výzbroj: dýka; zámožný původ
Odvedenec | Sedlák, kterému strčili do ruky žerďovou zbraň a ukázali na nepřítele. | Chudá výzbroj: kosíř nebo vidle, prošívaná kápě',
  'Counts everyone''s rations, yours included, and remembers who ate more
Sleeps with a hand on their weapon, awake at the first snapped twig
Calls everyone by rank, and makes one up for people who haven''t got one
Tells the same war story at every fire, the enemy bigger each time
Can''t rest until the camp is in order: a ditch dug, a watch set, boots by the fire
Hums marching songs under their breath, louder the more scared they are
Doesn''t trust anyone who has never held a line, and says so
Owes money in every camp they''ve served in, with dice in their pocket to win it back

|cs|

Počítá příděly všem, tvoje taky, a pamatuje si, kdo snědl víc
Spí s rukou na zbrani a probudí ho první prasklá větvička
Všechny oslovuje hodností, a kdo žádnou nemá, tomu nějakou vymyslí
U každého ohně vypráví tutéž válečnou historku, nepřítel je pokaždé větší
Neodpočine si, dokud není tábor v pořádku: vykopaný příkop, rozestavěné hlídky, boty u ohně
Pobrukuje si pochodové písně, tím hlasitěji, čím víc se bojí
Nevěří nikomu, kdo nikdy nedržel řadu, a říká to nahlas
Dluží peníze v každém táboře, kde sloužil, a v kapse nosí kostky, aby je vyhrál zpátky',
  'Duty | An order is an order, even when the one who gave it is dead
Comrades | The banner means nothing; the one beside you means everything
Survival | The brave are buried first; they mean to be buried last
Order | War is chaos, and somebody has to keep the line straight
Glory | Songs are sung about the ones who charged first
Pay | Fights for whoever pays, and holds to the deal as long as the pay lasts
Protection | Soldiers exist so farmers don''t have to be
Atonement | They did things in the war that can''t be undone, but some can be made up for

|cs|

Povinnost | Rozkaz je rozkaz, i když je ten, kdo ho dal, mrtvý
Druzi | Korouhev nic neznamená; ten, kdo stojí vedle tebe, znamená všechno
Přežití | Stateční se pohřbívají první; on chce být pohřben poslední
Řád | Válka je chaos a někdo musí držet řadu rovnou
Sláva | Písně se zpívají o těch, kdo útočili první
Žold | Bojuje za toho, kdo platí, a dohodu drží, dokud žold teče
Ochrana | Vojáci jsou proto, aby sedláci nemuseli být
Pokání | Ve válce dělal věci, které nejdou vzít zpět, ale některé jdou odčinit',
  'Carries a dead comrade''s letter to his family, and hasn''t found the courage to deliver it
Their old captain saved their life; whatever the captain asks, they''ll do
The company scattered after a lost battle; they look for the faces in every tavern
A village they burned on orders gets part of every pay, unsigned
Their sworn brother rides with the enemy now; they''ve promised to bring him back alive
The company''s banner, torn from its pole, is wrapped at the bottom of their pack
The lord they served owes them a year''s pay, and they mean to collect
A younger recruit they trained still writes, calling them their best teacher

|cs|

Nese dopis mrtvého druha jeho rodině a ještě nenašel odvahu ho doručit
Jeho starý kapitán mu zachránil život; co kapitán požádá, to udělá
Setnina se po prohrané bitvě rozprchla; v každé krčmě hledá známé tváře
Vesnice, kterou na rozkaz vypálil, dostává část každého žoldu, bez podpisu
Jeho pobratim teď jezdí s nepřítelem; slíbil, že ho přivede zpátky živého
Korouhev setniny, utržená z žerdi, leží zabalená na dně jeho batohu
Pán, kterému sloužil, mu dluží roční žold, a on si ho hodlá vybrat
Mladší rekrut, kterého cvičil, mu pořád píše a říká mu nejlepší učitel',
  'Obeys anyone who sounds like an officer, even when they know better
Thunder, drums or a sudden shout, and they''re back on the field, frozen or swinging
Drinks to sleep, and the nights are getting longer
Loots the dead without a thought, friends included
Despises civilians and their soft lives, and it shows
Never backs down from a challenge, however stupid
Deserted once; if anyone finds out, the noose is waiting
Treats every problem as a siege: dig in, wait them out, starve them

|cs|

Poslechne každého, kdo zní jako důstojník, i když to sám ví líp
Hrom, bubny nebo náhlý výkřik, a je zpátky na bojišti, ztuhlý nebo se ohání
Pije, aby usnul, a noci se prodlužují
Bez rozmýšlení obírá mrtvé, přátele nevyjímaje
Pohrdá civilisty a jejich pohodlnými životy, a je to na něm vidět
Nikdy necouvne před výzvou, ať je sebehloupější
Jednou dezertoval; jestli na to někdo přijde, čeká ho oprátka
Každý problém řeší jako obléhání: zakopat se, vyčkat, vyhladovět je');
