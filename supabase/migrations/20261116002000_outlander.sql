-- The Outlander (takes in the old Guide); see docs/ruleset-overview.md, Backgrounds › Outlander

insert into public.backgrounds (id, name, description, known_settings, extra_languages, sort, variants, archetypes, quirks, ideals, bonds, flaws)
values ('outlander', 'Outlander |cs| Cizinec', 'From beyond the settled lands: little coin, plenty of furs, and customs nobody here understands. |cs| Odněkud za usedlými zeměmi: málo mincí, hodně kožešin a zvyky, kterým tu nikdo nerozumí.', 'The wild lands and the peoples who live in them: clans, nomads, and the trails and fords between them; one homeland far from here, its customs, its feuds and who rules it |cs| Divoké kraje a národy, které v nich žijí: klany, kočovníci a stezky a brody mezi nimi; jedna vzdálená domovina, její zvyky, její sváry a kdo jí vládne', 1, 9,
  '{"poor": {"label": "A clan''s youngest, or a lone wanderer |cs| Nejmladší z klanu, nebo osamělý poutník", "equipment": [{"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}, {"options": [{"entries": [{"items": ["hunting-trap"], "quantity": 1}]}]}], "coins_copper": 20, "material": 3}, "commoner": {"label": "A hunter, a herder or a guide |cs| Lovec, pastevec nebo průvodce", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["winter-blanket"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["iron-pot"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hemp-rope"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}, {"options": [{"entries": [{"items": ["hunting-trap"], "quantity": 1}]}]}], "coins_copper": 100, "material": 4}, "fortunate": {"label": "A chieftain''s kin, or a wildland trader |cs| Příbuzný náčelníka, nebo kupec z divočiny", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["winter-blanket"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["iron-pot"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hemp-rope"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}, {"options": [{"entries": [{"items": ["hunting-trap"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tent"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["cartographers-tools", "merchants-kit"], "quantity": 1}]}]}], "coins_copper": 300, "material": 6}}'::jsonb,
  'Clansman | Grew up in a hill clan where the feud with the next valley is older than anyone''s grandfather. | Poor background; commoner arms: an axe and a shield
Hunter | Fed the clan through the winters, and can follow a deer for three days. | Commoner background; commoner arms: a longbow and a spear
Steppe rider | Rode with a horde across the grass, and feels naked on foot. | Poor background; commoner mount; fortunate arms: a shortbow and a scimitar or khopesh
Wildland merchant | Took salt and iron to the clans and came back with furs and amber, when they came back. | Fortunate background: a merchant''s kit; commoner mount; poor arms: a spear
Guide | Led travellers through the mountain passes for coin, and lost fewer than most. | Fortunate background: cartographer''s tools; poor arms: a quarterstaff
Herder | Drove the flocks up to the high pastures every summer, alone with the wolves and the stars. | Poor background; poor arms: a sling and a quarterstaff
Island raider | Came south on a longship to plunder, and stayed when the ship didn''t go back. | Poor background; commoner arms: an axe and a shield
Stranger from afar | Comes from somewhere nobody here has heard of, and their customs show it. | Commoner background; poor arms: a spear

|cs|

Člen klanu | Vyrostl v horském klanu, jehož svár se sousedním údolím je starší než kdokoli z dědů. | Chudý původ; prostá výzbroj: sekera a štít
Lovec | Živil klan přes zimy a dokáže jít po stopě jelena tři dny. | Prostý původ; prostá výzbroj: dlouhý luk a kopí
Stepní jezdec | Jezdil s hordou přes travnaté pláně a pěšky si připadá nahý. | Chudý původ; prostý kůň; zámožná výzbroj: krátký luk a šavle nebo chopeš
Kupec z divočiny | Vozil klanům sůl a železo a vracel se s kožešinami a jantarem, pokud se vrátil. | Zámožný původ: kupecké potřeby; prostý kůň; chudá výzbroj: kopí
Průvodce | Za peníze vodil pocestné přes horské průsmyky a ztratil jich méně než ostatní. | Zámožný původ: kartografické náčiní; chudá výzbroj: hůl
Bača | Každé léto hnal stáda na horské pastviny, sám s vlky a hvězdami. | Chudý původ; chudá výzbroj: prak a hůl
Nájezdník z ostrovů | Připlul na jih na dlouhé lodi plenit a zůstal, když se loď nevrátila. | Chudý původ; prostá výzbroj: sekera a štít
Cizinec z daleka | Pochází odněkud, o čem tu nikdo neslyšel, a jeho zvyky to prozrazují. | Prostý původ; chudá výzbroj: kopí',
  'Sleeps outside, even when there''s a bed
Greets everyone with a custom nobody here understands
Reads the weather aloud every morning, and is usually right
Eats anything, and judges people who don''t
Counts wealth in horses, furs and favours, never coins
Wears charms against every spirit they''ve ever heard of
Tells time by the sun and stars, and laughs at bells
Carves something during every rest, and gives it away

|cs|

Spí venku, i když je k dispozici postel
Každého zdraví zvykem, kterému tu nikdo nerozumí
Každé ráno nahlas předpovídá počasí a obvykle má pravdu
Sní cokoli a odsuzuje ty, kdo ne
Bohatství počítá v koních, kožešinách a laskavostech, nikdy v mincích
Nosí amulety proti všem duchům, o kterých kdy slyšel
Čas určuje podle slunce a hvězd a zvonům se směje
Při každém odpočinku něco vyřezává a pak to daruje',
  'Freedom | Walls are for people who are afraid of the sky
Kin | The clan comes first, last and always
Honour | A word given is a word kept, even to an enemy
Nature | The land gives, the land takes, and it doesn''t care what lords think
Hospitality | Whoever shares your fire is under your protection
Strength | The weak don''t last a winter, and shouldn''t expect to
Wandering | There''s always another valley over the next ridge
Tradition | The old ways kept their people alive; they''ll keep them alive here too

|cs|

Svoboda | Zdi jsou pro ty, kdo se bojí nebe
Rod | Klan je na prvním místě, na posledním a vždycky
Čest | Dané slovo se drží, i nepříteli
Příroda | Země dává, země bere a je jí jedno, co si myslí páni
Pohostinnost | Kdo s tebou sdílí oheň, je pod tvou ochranou
Síla | Slabí zimu nepřežijí a nemají to čekat
Toulky | Za dalším hřebenem je vždycky další údolí
Tradice | Staré zvyky udržely jeho lid naživu; udrží naživu i jeho tady',
  'Their clan cast them out; they mean to earn their way back
A blood feud follows them, and the other side has long memories
Their horse is their oldest friend, and they''d die for it
A trader they guided died on the way; his family wants to know why
They carry a token they swore to return to a chieftain''s daughter
The horde they rode with is coming west, and they know when
They promised their dying father to see the sea
Somewhere in a town lives a sibling who went soft, and they want to bring them home

|cs|

Klan ho vyhnal; hodlá si návrat zasloužit
Pronásleduje ho krevní msta a druhá strana má dlouhou paměť
Jeho kůň je jeho nejstarší přítel a zemřel by za něj
Kupec, kterého vedl, cestou zemřel; jeho rodina chce vědět proč
Nese památku, kterou přísahal vrátit náčelníkově dceři
Horda, se kterou jezdil, táhne na západ, a on ví kdy
Umírajícímu otci slíbil, že uvidí moře
Někde ve městě žije jeho sourozenec, který změkl, a on ho chce dostat domů',
  'Has no idea how towns work, and won''t admit it
Settles insults with fists, wherever they are
Distrusts anyone who lives behind walls
Takes what they need, because in the wild nothing belongs to anyone
Speaks the truth bluntly, and calls tact lying
Superstitious to the bone, and won''t break a taboo for anything
Gets restless after three nights in one place
Treats every stranger as a possible enemy until shown otherwise

|cs|

Netuší, jak to ve městě chodí, a nepřizná to
Urážky řeší pěstmi, ať je kdekoli
Nevěří nikomu, kdo žije za zdmi
Bere si, co potřebuje, protože v divočině nic nikomu nepatří
Říká pravdu bez obalu a taktu říká lež
Je pověrčivý do morku kostí a tabu neporuší za nic
Po třech nocích na jednom místě začne být neklidný
Každého cizince má za možného nepřítele, dokud se neukáže opak');
