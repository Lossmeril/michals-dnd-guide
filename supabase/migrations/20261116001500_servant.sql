-- The Servant; see docs/ruleset-overview.md, Backgrounds › Servant

insert into public.items (id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents)
select id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents
from backup.items_20261116
where id in ('cooks-utensils', 'kitchen-knives', 'ladle', 'spice-box', 'brewers-supplies', 'mash-paddle', 'sieve')
on conflict (id) do nothing;

-- The brewer brews in the iron pot they already carry: no copper kettle
update public.items set
  contents = '[{"item": "mash-paddle", "quantity": 1}, {"item": "sieve", "quantity": 1}, {"item": "ladle", "quantity": 1}]'::jsonb,
  price_copper = 30
where id = 'brewers-supplies';

update public.items set sort = s.sort from (values
  ('cooks-utensils', 199), ('kitchen-knives', 200), ('ladle', 201), ('spice-box', 202),
  ('brewers-supplies', 203), ('mash-paddle', 204), ('sieve', 205)
) as s(id, sort) where items.id = s.id;

insert into public.backgrounds (id, name, description, known_settings, extra_languages, sort, variants, archetypes, quirks, ideals, bonds, flaws)
values ('servant', 'Servant |cs| Služebník', 'The people who keep everyone else fed, washed and housed, and whom nobody ever looks at. |cs| Lidé, kteří všechny ostatní živí, myjí a ubytovávají, a na které se nikdo nedívá.', 'Servants anywhere, and the gossip they pass on; inns, kitchens and stables, and the servants'' quarters of great houses |cs| Služebnictvo kdekoli a drby, které si předává; hostince, kuchyně a stáje a čeledníky velkých domů', 0, 6,
  '{"poor": {"label": "A scullion or a stable hand |cs| Pomocník v kuchyni nebo podkoní", "equipment": [{"options": [{"entries": [{"items": ["pouch"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}], "coins_copper": 30, "material": 1}, "commoner": {"label": "A cook, a maid or a barmaid in a good house or inn |cs| Kuchař, služka nebo šenkýřka v dobrém domě či hostinci", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["cooks-utensils", "healers-kit"], "quantity": 1}]}]}], "coins_copper": 150, "material": 2}, "fortunate": {"label": "An innkeeper, or a great house''s steward |cs| Hostinský, nebo správce velkého domu", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["cooks-utensils", "healers-kit"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hooded-lantern"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["oil-flask"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["calligraphers-supplies"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["brewers-supplies", "merchants-kit"], "quantity": 1}]}]}], "coins_copper": 400, "material": 3}}'::jsonb,
  'Innkeeper | Ran an inn on the high road, and heard every rumour before the town did. | Fortunate background; poor arms: a club
Brewer | Brewed the town''s beer under its brewing right, and can name any tavern by the taste of its beer. | Fortunate background: brewer''s supplies; poor arms: a club
Cook | Fed a lord''s household, a hundred mouths twice a day, and knows what a poisoned dish smells like. | Commoner background: cook''s utensils; poor arms: a handaxe (the cleaver)
Barmaid | Carried tankards, broke up fights, and remembers every face that didn''t pay. | Poor background; poor arms: a club
Bathhouse maid | Heated the water, scrubbed the guests, and heard the town''s dirtiest secrets. | Commoner background: a healer''s kit; poor arms: a dagger
Groom | Kept a lord''s horses, some of which like them better than people. | Poor background; commoner mount
Steward | Kept the keys and accounts of a great house, and knows where its silver went. | Fortunate background: a merchant''s kit; poor arms: a dagger
Lady''s maid | Dressed a noble every morning, and knew all their secrets by evening. | Commoner background; poor arms: a dagger

|cs|

Hostinský | Vedl hostinec na hlavní cestě a každou novinu slyšel dřív než město. | Zámožný původ; chudá výzbroj: kyj
Sládek | Vařil pivo pro město podle jeho várečného práva a každou krčmu pozná podle chuti piva. | Zámožný původ: sládkovské potřeby; chudá výzbroj: kyj
Kuchař | Živil panskou domácnost, sto krků dvakrát denně, a ví, jak voní otrávené jídlo. | Prostý původ: kuchařské náčiní; chudá výzbroj: sekerka (sekáček)
Šenkýřka | Nosila korbele, rozháněla rvačky a pamatuje si každou tvář, která nezaplatila. | Chudý původ; chudá výzbroj: kyj
Lazebnice | Ohřívala vodu, drhla hosty a slyšela nejšpinavější tajemství celého města. | Prostý původ: ranhojičská brašna; chudá výzbroj: dýka
Podkoní | Staral se o pánovy koně, z nichž někteří ho mají radši než lidi. | Chudý původ; prostý kůň
Správce | Měl klíče a účty velkého domu a ví, kam se podělo jeho stříbro. | Zámožný původ: kupecké potřeby; chudá výzbroj: dýka
Komorná | Každé ráno oblékala šlechtičnu a večer znala všechna její tajemství. | Prostý původ; chudá výzbroj: dýka',
  'Tidies wherever they go, even in a dungeon
Judges every meal, every bed and every inn out loud
Hears everything and pretends to hear nothing
Moves so quietly people forget they''re in the room
Can''t sit idle while others work, or work while others sit
Cooks something for the party at every rest, asked or not
Remembers what everyone drinks, and how much
Polishes their boots every night, however tired

|cs|

Uklízí všude, kam přijde, i v podzemí
Nahlas hodnotí každé jídlo, každou postel a každý hostinec
Slyší všechno a dělá, že neslyší nic
Pohybuje se tak tiše, že lidé zapomenou, že je v místnosti
Nedokáže zahálet, když ostatní pracují, ani pracovat, když ostatní sedí
Při každém odpočinku něco uvaří, ať o to někdo stojí, nebo ne
Pamatuje si, co kdo pije a kolik
Každý večer si vyleští boty, ať je jakkoli unavený',
  'Hospitality | A guest under your roof is sacred, whoever they are
Loyalty | A good master deserves a good servant, to the end
Pride | Serving well is a craft, and they''re a master of it
Freedom | They served long enough; now they serve no one
Fairness | Everyone eats at the same table, lord or stable boy
Ambition | Today the scullery, tomorrow their own inn
Discretion | What''s seen in a house stays in the house
Comfort | A warm meal and a dry bed fix most of the world''s troubles

|cs|

Pohostinnost | Host pod tvou střechou je posvátný, ať je to kdokoli
Věrnost | Dobrý pán si zaslouží dobrého služebníka, až do konce
Hrdost | Dobře sloužit je řemeslo a on je v něm mistr
Svoboda | Sloužil dost dlouho; teď neslouží nikomu
Spravedlnost | U jednoho stolu jedí všichni, pán i podkoní
Ctižádost | Dnes v kuchyni u dřezu, zítra ve vlastním hostinci
Mlčenlivost | Co se v domě vidí, zůstane v domě
Pohodlí | Teplé jídlo a suchá postel spraví většinu trápení světa',
  'The inn they grew up in was burned by soldiers; they mean to rebuild it
Their old master died in suspicious circumstances; they saw something that night
A noble child they raised still writes to them in secret
They know a lord''s secret that could bring down his house
The tavern regulars are their family; they''d do anything for them
Their sister is still in service at a cruel house; they want her out
They owe the brewers'' guild for a debt they didn''t make
Someone left a sealed letter with them at the inn, and never came back for it

|cs|

Hostinec, kde vyrůstal, vypálili vojáci; hodlá ho postavit znovu
Jeho starý pán zemřel za podivných okolností; té noci něco viděl
Šlechtické dítě, které vychoval, mu pořád tajně píše
Zná tajemství jednoho pána, které by mohlo zničit celý jeho rod
Štamgasti z krčmy jsou jeho rodina; udělal by pro ně cokoli
Jeho sestra pořád slouží v krutém domě; chce ji odtamtud dostat
Dluží cechu sládků za dluh, který neudělal
Kdosi u něj v hostinci nechal zapečetěný dopis a už si pro něj nepřišel',
  'Gossips, and can''t keep a secret past the second drink
Eavesdrops on everyone, out of habit
Steals small things from the rich: a spoon, a ribbon, a coin
Bows to anyone in fine clothes, without thinking
Resents every noble, and lets it show in small ways
Spends money on fine things to look like their betters
Waters down the drinks of people they dislike
Can''t say no to anyone who asks politely

|cs|

Drbe a žádné tajemství neudrží déle než do druhého džbánku
Ze zvyku poslouchá za dveřmi u každého
Krade bohatým drobnosti: lžičku, stužku, minci
Ukloní se každému v drahém oblečení, aniž by přemýšlel
Nesnáší všechny šlechtice a dává to najevo drobnostmi
Utrácí za pěkné věci, aby vypadal jako jeho páni
Lidem, které nemá rád, ředí pití
Neumí říct ne nikomu, kdo hezky poprosí');
