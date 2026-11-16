-- The Sailor (Loďař); see docs/ruleset-overview.md, Backgrounds › Sailor

insert into public.items (id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents)
select id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents
from backup.items_20261116
where id in ('navigators-tools', 'mariners-compass', 'sounding-line')
on conflict (id) do nothing;

update public.items set sort = s.sort from (values
  ('navigators-tools', 214), ('mariners-compass', 215), ('sounding-line', 216)
) as s(id, sort) where items.id = s.id;

insert into public.backgrounds (id, name, description, known_settings, extra_languages, sort, variants, archetypes, quirks, ideals, bonds, flaws)
values ('sailor', 'Sailor |cs| Loďař', 'Rivers, coasts and the sea: rafts, ferries and trading cogs, and the crews that work them. |cs| Řeky, pobřeží a moře: vory, přívozy a kupecké lodě, a posádky, které na nich slouží.', 'Ports, ships and crews anywhere: who''s hiring, who''s smuggling, which harbourmaster can be bought; their home waters'' rivers and coasts, the shoals, weirs and tolls |cs| Přístavy, lodě a posádky kdekoli: kdo najímá, kdo pašuje, kterého přístavního mistra lze podplatit; řeky a pobřeží domovských vod, jejich mělčiny, jezy a cla', 1, 11,
  '{"poor": {"label": "A deckhand or a raftsman |cs| Plavčík nebo vorař", "equipment": [{"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hemp-rope"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}, {"options": [{"entries": [{"items": ["dice-set"], "quantity": 1}]}]}], "coins_copper": 20, "material": 1}, "commoner": {"label": "An able seaman or a river boatman |cs| Zkušený námořník nebo říční lodník", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hemp-rope"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}, {"options": [{"entries": [{"items": ["dice-set", "playing-cards"], "quantity": 1}]}]}], "coins_copper": 100, "material": 2}, "fortunate": {"label": "A ship''s mate, a pilot or a ship-owner''s child |cs| Lodní důstojník, lodivod nebo dítě majitele lodi", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hemp-rope"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}, {"options": [{"entries": [{"items": ["dice-set", "playing-cards"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hooded-lantern"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["oil-flask"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["navigators-tools", "merchants-kit"], "quantity": 1}]}]}], "coins_copper": 300, "material": 3}}'::jsonb,
  'Deckhand | Hauled rope on a trading cog from port to port, and left a debt, a sweetheart and a grudge in every one. | Poor background; poor arms: a club (the belaying pin)
Raftsman | Rode timber rafts down the river to the city, and knows every weir and every tavern on the way. | Poor background; poor arms: a handaxe
Fisherman | Went out before dawn in all weather, and knows the water better than the land. | Commoner background; poor arms: a spear (the gaff)
River pilot | Knows every shoal, weir and toll on the river, and what every toll-keeper drinks. | Fortunate background: navigator''s tools; poor arms: a dagger
Ship''s crossbowman | Guarded a merchant cog against pirates from the castle at the stern. | Commoner background; commoner arms: a crossbow and a gambeson
Pirate | Sailed under a letter of marque, and later without one. | Poor background; fortunate arms: a sword
Ferryman | Took people across the river for a coin, and remembers everyone who crossed at night. | Commoner background; poor arms: a quarterstaff (the pole)
Castaway | The only one who came ashore when the ship broke up, and won''t say how. | Poor background; poor arms: a dagger

|cs|

Plavčík | Tahal lana na obchodní lodi od přístavu k přístavu a v každém nechal dluh, milou a zášť. | Chudý původ; chudá výzbroj: kyj (kolík na lana)
Vorař | Sváděl vory po řece do města a zná každý jez a každou hospodu po cestě. | Chudý původ; chudá výzbroj: sekerka
Rybář | Vyplouval před svítáním za každého počasí a zná vodu líp než souš. | Prostý původ; chudá výzbroj: kopí (osti)
Říční lodivod | Zná každou mělčinu, jez a clo na řece a ví, co pije který celník. | Zámožný původ: navigační náčiní; chudá výzbroj: dýka
Lodní kušiník | Bránil kupeckou loď před piráty z kastelu na zádi. | Prostý původ; prostá výzbroj: kuše a prošívanice
Pirát | Plul s kaperským listem, a později bez něj. | Chudý původ; zámožná výzbroj: meč
Převozník | Převážel lidi přes řeku za minci a pamatuje si každého, kdo se plavil v noci. | Prostý původ; chudá výzbroj: hůl (bidlo)
Trosečník | Jediný, kdo se dostal na břeh, když se loď rozbila, a neřekne jak. | Chudý původ; chudá výzbroj: dýka',
  'Walks with a roll, even on dry land
Ties knots in anything they''re holding
Reads the sky every morning and announces the weather
Swears in six languages, and only speaks four
Sleeps anywhere, anytime, in any weather
Tells sea stories that get bigger with every mug
Eats fast and guards their plate, as on the mess deck
Keeps a lucky trinket and touches it before anything risky

|cs|

Kolébá se v chůzi, i na suché zemi
Váže uzly na všem, co drží v ruce
Každé ráno si přečte oblohu a ohlásí počasí
Nadává v šesti jazycích, přestože mluví jen čtyřmi
Spí kdekoli, kdykoli a za každého počasí
Vypráví námořnické historky, které s každým džbánkem rostou
Jí rychle a hlídá si misku, jako v podpalubí
Nosí talisman pro štěstí a dotkne se ho před vším riskantním',
  'Freedom | The sea belongs to no lord
Crew | On a ship, everyone lives or everyone drowns
Fortune | One good cargo and they''ll never work again
Adventure | There''s always another coast beyond the horizon
Honesty | A fair captain gets a loyal crew
Respect | The water humbles everyone, and so should you
Tradition | The old ways of the river keep the river kind
Profit | Every cargo has a price, and every toll-keeper too

|cs|

Svoboda | Moře nepatří žádnému pánovi
Posádka | Na lodi buď přežijí všichni, nebo se všichni utopí
Štěstí | Jeden dobrý náklad a už nikdy nebude muset pracovat
Dobrodružství | Za obzorem je vždycky další pobřeží
Poctivost | Spravedlivý kapitán má věrnou posádku
Úcta | Voda pokoří každého, a ty bys měl být pokorný taky
Tradice | Staré zvyky řeky drží řeku vlídnou
Zisk | Každý náklad má svou cenu, a každý celník taky',
  'Their old ship lies at the bottom with the captain''s chest still aboard
The crew that marooned them is still sailing, and they know the ship''s name
A sweetheart waits in a harbour town, or so they hope
Their brother was pressed into a war fleet and never came home
They owe a smuggler a cargo they lost to the toll-keepers
A drowned shipmate visits them in dreams, asking for something
The raftsmen''s guild expelled them; they mean to be taken back
They saw a sea monster once, and they''re going back for it

|cs|

Jeho stará loď leží na dně a kapitánova truhla je pořád na palubě
Posádka, která ho vysadila na pustém břehu, pořád pluje a on zná jméno lodi
V jednom přístavním městě na něj čeká milá, nebo v to aspoň doufá
Jeho bratra odvedli násilím do válečného loďstva a už se nevrátil
Dluží pašerákovi náklad, o který přišel u celníků
Utopený druh z lodi ho navštěvuje ve snech a o něco ho žádá
Cech vorařů ho vyloučil; hodlá se do něj vrátit
Jednou viděl mořskou obludu a vrací se pro ni',
  'Drinks every port dry, then the next one
Superstitious: no whistling aboard, no sailing on a Friday
Settles every argument with fists
Can''t swim, and has never told anyone
Spends their pay before they''ve earned it
Can''t stay ashore for more than a month
Treats landsmen as fools
Jumps ship at the first sign of trouble

|cs|

Vypije každý přístav do dna, a pak ten další
Pověrčivý: na palubě se nepíská a v pátek se nevyplouvá
Každou hádku řeší pěstmi
Neumí plavat a nikdy to nikomu neřekl
Utratí výplatu dřív, než si ji vydělá
Nevydrží na souši déle než měsíc
Jedná se suchozemci jako s hlupáky
Při prvním náznaku potíží opustí loď');
