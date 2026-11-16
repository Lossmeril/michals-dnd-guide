-- The Builder, the other half of the old Artisan;
-- see docs/ruleset-overview.md, Backgrounds › Builder

insert into public.items (id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents)
select id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents
from backup.items_20261116
where id in (
  'carpenters-tools', 'saw', 'plane', 'chisels', 'auger', 'claw-hammer',
  'masons-tools', 'masons-hammer', 'trowel', 'masons-square',
  'crowbar'
)
on conflict (id) do nothing;

insert into public.items (id, name, kind, category, price_copper, harness, sort, description, contents) values
  ('measuring-cord', 'Knotted measuring cord |cs| Uzlová měřicí šňůra', 'tool', null, 10, false, 0,
   'Twenty metres of cord knotted every metre, for laying out a building. |cs| Dvacet metrů šňůry s uzlem po každém metru, k vytyčení stavby.', '[]'::jsonb),
  ('plumb-line', 'Plumb line |cs| Olovnice', 'tool', null, 10, false, 0,
   'A lead weight on a string: the wall is straight, or it isn''t. |cs| Olůvko na provázku: zeď je rovná, nebo není.', '[]'::jsonb),
  ('water-level', 'Water level |cs| Vodováha', 'tool', null, 30, false, 0,
   'A long wooden trough with water in it, for levelling foundations. |cs| Dlouhý dřevěný žlábek s vodou, k vyrovnání základů.', '[]'::jsonb),
  ('surveyors-tools', 'Surveyor''s tools |cs| Měřičské náčiní', 'tool', 'kit', 50, false, 0,
   'For laying out a building and checking someone else''s. |cs| K vytyčení stavby a ke kontrole cizí.',
   '[{"item": "measuring-cord", "quantity": 1}, {"item": "plumb-line", "quantity": 1}, {"item": "water-level", "quantity": 1}]'::jsonb);

update public.items set sort = s.sort from (values
  ('crowbar', 133),
  ('carpenters-tools', 177), ('saw', 178), ('plane', 179), ('chisels', 180), ('auger', 181), ('claw-hammer', 182),
  ('masons-tools', 183), ('masons-hammer', 184), ('trowel', 185), ('masons-square', 186),
  ('surveyors-tools', 187), ('measuring-cord', 188), ('plumb-line', 189), ('water-level', 190)
) as s(id, sort) where items.id = s.id;

insert into public.backgrounds (id, name, description, known_settings, extra_languages, sort, variants, archetypes, quirks, ideals, bonds, flaws)
values ('builder', 'Builder |cs| Stavitel', 'Stone, timber and the dark under the ground: the people who raise towns and castles, and dig beneath them. |cs| Kámen, dřevo a tma pod zemí: lidé, kteří stavějí města a hrady a kopou pod nimi.', 'How buildings, mines and bridges are put together, anywhere; building sites, masons'' lodges and their crews |cs| Jak jsou postavené budovy, doly a mosty, kdekoli; staveniště, kamenické hutě a jejich party', 0, 3,
  '{"poor": {"label": "A day labourer on a building site |cs| Nádeník na stavbě", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["shovel"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hemp-rope"], "quantity": 1}]}]}], "coins_copper": 50, "material": 2}, "commoner": {"label": "A journeyman of the lodge |cs| Tovaryš z hutě", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["shovel"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hemp-rope"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["carpenters-tools", "masons-tools"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["crowbar"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hooded-lantern"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["oil-flask"], "quantity": 1}]}]}], "coins_copper": 150, "material": 4}, "fortunate": {"label": "A master builder |cs| Stavitel", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["shovel"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hemp-rope"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["carpenters-tools", "masons-tools"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["crowbar"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hooded-lantern"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["oil-flask"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["winter-blanket"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["calligraphers-supplies"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["surveyors-tools"], "quantity": 1}]}]}], "coins_copper": 400, "material": 6}}'::jsonb,
  'Mason | Cut stone for a cathedral that won''t be finished in their lifetime. | Commoner background: mason''s tools; poor arms: a light hammer
Carpenter | Raised roof trusses and siege towers alike, whoever was paying. | Commoner background: carpenter''s tools; commoner arms: a handaxe and a gambeson
Miner | Followed the silver veins deep under a mining town, where the air goes bad. | Commoner background; commoner arms: a pick and an iron cap
Roofer | Worked on rooftops in all weather, and never fell. Never once. | Poor background; poor arms: a sickle
Millwright | Built mills and their gears, and knows water, wheels and every trick a miller has. | Fortunate background; poor arms: a dagger
Well-digger | Dug wells for a living, and once found something else at the bottom. | Poor background; poor arms: a club
Bridge-builder | Threw bridges over rivers for the lords who''d collect the tolls, and knows how a bridge falls. | Fortunate background; commoner mount
Master builder | Drew the plans for a lord''s castle, and knows every weakness hidden in it. | Fortunate background; commoner mount; poor arms: a dagger

|cs|

Kameník | Tesal kámen pro katedrálu, která za jeho života dostavěná nebude. | Prostý původ: kamenické náčiní; chudá výzbroj: lehké kladivo
Tesař | Stavěl krovy i obléhací věže, podle toho, kdo zrovna platil. | Prostý původ: tesařské náčiní; prostá výzbroj: sekerka a prošívanice
Horník | Šel za stříbrnými žílami hluboko pod horní město, tam, kde se kazí vzduch. | Prostý původ; prostá výzbroj: krumpáč a železný klobouk
Pokrývač | Pracoval na střechách za každého počasí a nikdy nespadl. Ani jednou. | Chudý původ; chudá výzbroj: srp
Mlynář-stavitel | Stavěl mlýny a jejich soukolí a zná vodu, kola i každý mlynářský fígl. | Zámožný původ; chudá výzbroj: dýka
Studnař | Kopal studny a jednou na dně našel něco jiného. | Chudý původ; chudá výzbroj: kyj
Stavitel mostů | Stavěl mosty přes řeky pánům, kteří na nich vybírali mýto, a ví, jak most padá. | Zámožný původ; prostý kůň
Stavitel hradů | Kreslil plány pánova hradu a zná každou slabinu, která se v něm skrývá. | Zámožný původ; prostý kůň; chudá výzbroj: dýka',
  'Pats every wall they pass, as if it were a horse
Counts steps, measures rooms by eye, and is never wrong by more than a hand
Sleeps badly anywhere with a crack in the ceiling
Whistles in the dark: an old miners'' trick, to hear how far the walls are
Has an opinion on every castle they see, and will share it
Collects odd stones and keeps the best one in their pocket
Wakes before dawn every day, ready for the site
Draws plans in the dirt with a stick to explain anything

|cs|

Poplácá každou zeď, kolem které jde, jako by to byl kůň
Počítá kroky, měří místnosti od oka a nikdy se nesplete o víc než o dlaň
Špatně spí všude, kde je ve stropě prasklina
Ve tmě si píská: starý hornický fígl, aby slyšel, jak daleko jsou stěny
Na každý hrad, který vidí, má názor a podělí se o něj
Sbírá podivné kameny a ten nejlepší nosí v kapse
Každý den vstává před svítáním, připravený na stavbu
Cokoli vysvětluje tak, že klackem nakreslí plánek do hlíny',
  'Permanence | Kings die; a good wall stands for five hundred years
The lodge | Lodge brothers help each other, in any town, no questions asked
Craft | Measure twice, cut once, and never skimp on the foundations
Safety | Nobody dies on their site, and they''ll fight anyone who cuts corners
Ambition | One day their name will be on something people come from far away to see
Usefulness | A bridge is worth more than a hundred knights
Order | Every stone in its place, every worker at their task
Freedom | A lodge brother answers to the lodge, not to the lord

|cs|

Trvalost | Králové umírají; dobrá zeď stojí pět set let
Huť | Bratři z hutě si pomáhají, v kterémkoli městě, bez otázek
Řemeslo | Dvakrát měř, jednou řež a nikdy nešetři na základech
Bezpečí | Na jeho stavbě nikdo neumře, a s každým, kdo něco odbude, se pustí do křížku
Ctižádost | Jednou bude jeho jméno na něčem, na co se lidé budou jezdit dívat zdaleka
Užitek | Most má větší cenu než sto rytířů
Řád | Každý kámen na svém místě, každý dělník u své práce
Svoboda | Bratr z hutě se zodpovídá huti, ne pánovi',
  'Their mason''s mark is cut into a cathedral pillar; one day they''ll show it to their children
The lodge''s secrets were entrusted to them; others would kill to learn them
A tunnel collapsed on their crew; they were the only one who got out
They built a lord''s secret passage, and the lord would rather it were forgotten, along with them
Their old master is in debtors'' prison over a building that fell; they know it wasn''t his fault
The mine where they grew up is flooded; their family''s still down there
A village depends on the mill they built; they go back every spring to check it
Somewhere there''s a church they left half-built when the money ran out; they mean to finish it

|cs|

Jeho kamenická značka je vytesaná do pilíře katedrály; jednou ji ukáže svým dětem
Byla mu svěřena tajemství hutě; jiní by pro ně zabíjeli
Na jeho partu se zřítila štola; dostal se ven jako jediný
Postavil pánovi tajnou chodbu a pán by byl raději, kdyby se na ni zapomnělo, i na něj
Jeho starý mistr sedí ve vězení pro dlužníky kvůli stavbě, která spadla; on ví, že to nebyla mistrova vina
Důl, kde vyrůstal, je zatopený; jeho rodina je pořád dole
Na mlýně, který postavil, závisí celá vesnice; každé jaro se tam vrací ho zkontrolovat
Někde stojí kostel, který nechal napůl postavený, když došly peníze; hodlá ho dokončit',
  'Can''t walk past a badly built wall without saying so, loudly
Won''t go anywhere that hasn''t been shored, shored again and checked
Overestimates every job: it takes twice as long and costs twice as much
Takes money from both sides of a siege, if both sides need a builder
Superstitious about mines: whistling, women and the knockers in the walls
Drinks with the crew every night, and the crew always drinks more
Thinks anyone who can''t use a trowel is soft
Builds a way out into everything they make, and doesn''t tell the client

|cs|

Nedokáže projít kolem špatně postavené zdi, aniž by to nahlas řekl
Nevleze nikam, co není vyztužené, znovu vyztužené a zkontrolované
Každou práci nadsadí: trvá dvakrát déle a stojí dvakrát víc
Při obléhání bere peníze od obou stran, pokud obě potřebují stavitele
Pověrčivý v dolech: pískání, ženy a permoníci, co klepou ve stěnách
Každý večer pije s partou, a parta vždycky vypije víc
Kdo neumí držet zednickou lžíci, je podle něj měkkota
Do všeho, co postaví, udělá únikovou cestu, a zákazníkovi to neřekne');
