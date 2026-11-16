-- The Monster hunter; see docs/ruleset-overview.md, Backgrounds › Monster hunter

insert into public.items (id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents)
select id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents
from backup.items_20261116
where id in ('hunting-trap', 'manacles')
on conflict (id) do nothing;

-- Silvering a weapon from your arms (the background gives no weapons itself)
insert into public.items (id, name, kind, category, price_copper, harness, sort, description, contents) values
  ('silvering', 'Silvering |cs| Postříbření', 'gear', null, 500, false, 0,
   'One weapon, or ten pieces of ammunition, from your arms is silvered. Name which in your backstory. |cs| Jedna zbraň nebo deset kusů střeliva z tvé výzbroje je postříbřená. Kterou, uveď v příběhu postavy.', '[]'::jsonb);

update public.items set sort = s.sort from (values
  ('silvering', 135), ('hunting-trap', 136), ('manacles', 137)
) as s(id, sort) where items.id = s.id;

insert into public.backgrounds (id, name, description, known_settings, extra_languages, sort, variants, archetypes, quirks, ideals, bonds, flaws)
values ('monster-hunter', 'Monster hunter |cs| Lovec netvorů', 'Paid to deal with what lives in the dark, and paid only once it''s dead. |cs| Placený za to, aby si poradil s tím, co žije ve tmě, a placený, až když je to mrtvé.', 'Folk tales and superstitions about monsters, fiends and the undead, anywhere, and which of them are true; border villages, graveyards and ruins, and the people who hire hunters |cs| Pověsti a pověry o netvorech, běsech a nemrtvých, kdekoli, a které z nich jsou pravdivé; pohraniční vesnice, hřbitovy a zříceniny a lidé, kteří si najímají lovce', 0, 7,
  '{"poor": {"label": "A village rat-catcher and grave-watcher |cs| Vesnický krysař a hlídač hřbitova", "equipment": [{"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["torch"], "quantity": 3}]}]}, {"options": [{"entries": [{"items": ["hemp-rope"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hunting-trap"], "quantity": 1}]}]}], "coins_copper": 20, "material": 2}, "commoner": {"label": "A hunter for hire on the borderlands |cs| Najatý lovec na pomezí", "equipment": [{"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["torch"], "quantity": 3}]}]}, {"options": [{"entries": [{"items": ["hemp-rope"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hunting-trap"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["mirror"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["manacles"], "quantity": 1}]}]}], "coins_copper": 100, "material": 3}, "fortunate": {"label": "A slayer of some fame, or the squire of an old order |cs| Proslulý zabiják, nebo panoš starého řádu", "equipment": [{"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["torch"], "quantity": 3}]}]}, {"options": [{"entries": [{"items": ["hemp-rope"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hunting-trap"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["mirror"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["manacles"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hooded-lantern"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["oil-flask"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["healers-kit"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["silvering"], "quantity": 1}]}]}], "coins_copper": 300, "material": 4}}'::jsonb,
  'Rat-catcher | Cleared cellars of rats, and once of something much bigger. | Poor background; poor arms: a club
Grave-watcher | Sat the nights in the churchyard so the dead stayed where they were put. | Poor background; poor arms: a spear
Wolf hunter | Tracked wolves through the winter, until the tracks started walking on two legs. | Fortunate background: silvering; commoner arms: a spear and a crossbow
Slayer for hire | Took the lord''s coin for the wyvern''s head, and came back with it. | Fortunate background; fortunate arms: a sword and a shield
Witch-finder | Hunted witches for the church, until they learned what''s really out there. | Commoner background; commoner arms: a crossbow and a dagger
Survivor | The only one left of a village the thing came for, and they''ve been hunting it since. | Poor background; commoner arms: an axe and a shield
Squire of an order | Carried a monster-slaying knight''s lance, until the knight didn''t come back. | Fortunate background; commoner mount; commoner arms: a spear and a shield
Trapper | Caught beasts with snares and pits, then learned the same works on worse things. | Commoner background; poor arms: a shortbow

|cs|

Krysař | Čistil sklepy od krys a jednou od něčeho mnohem většího. | Chudý původ; chudá výzbroj: kyj
Hlídač hřbitova | Proseděl noci na hřbitově, aby mrtví zůstali, kde je pohřbili. | Chudý původ; chudá výzbroj: kopí
Vlčí lovec | Celou zimu stopoval vlky, dokud stopy nezačaly chodit po dvou. | Zámožný původ: postříbření; prostá výzbroj: kopí a kuše
Najatý zabiják | Vzal od pána peníze za hlavu saně a vrátil se s ní. | Zámožný původ; zámožná výzbroj: meč a štít
Hledač čarodějnic | Lovil pro církev čarodějnice, dokud nezjistil, co tam venku doopravdy je. | Prostý původ; prostá výzbroj: kuše a dýka
Přeživší | Jediný, kdo zbyl z vesnice, pro kterou si ta věc přišla, a od té doby ji loví. | Chudý původ; prostá výzbroj: sekera a štít
Panoš řádu | Nosil dřevec rytíři řádu lovců netvorů, dokud se rytíř nevrátil. | Zámožný původ; prostý kůň; prostá výzbroj: kopí a štít
Lovec s pastmi | Chytal zvěř do ok a jam a pak zjistil, že na horší věci to funguje taky. | Prostý původ; chudá výzbroj: krátký luk',
  'Checks every room for exits, shadows and claw marks before sitting down
Salts every threshold they sleep behind
Collects trophies, and tells their stories unasked
Sleeps with a light on, and won''t explain why
Sniffs the air when entering anywhere new
Knows a folk remedy for everything, half of them nonsense
Tests every coin with their teeth, in case it''s fairy gold
Hums an old song that keeps the dead at bay, or so their grandmother said

|cs|

Než si sedne, prohlédne v každé místnosti východy, stíny a stopy drápů
Každý práh, za kterým spí, posype solí
Sbírá trofeje a vypráví jejich příběhy, i když se nikdo neptá
Spí se světlem a nevysvětlí proč
Kdykoli vejde někam nově, nasaje vzduch nosem
Na všechno zná lidový lék, polovina z nich jsou nesmysly
Každou minci kousne, pro případ, že je to vílí zlato
Pobrukuje si starou píseň, která drží mrtvé v hrobech, nebo to aspoň říkala babička',
  'Protection | Someone has to stand between the village and the dark
Coin | Nobody kills a monster for free, and neither do they
Knowledge | Every monster has a weakness; the trick is finding it first
Glory | Songs about slain dragons have to start somewhere
Mercy | Not every monster deserves to die, and not every man deserves to live
Duty | The order''s oath binds until death, and maybe after
Vengeance | Every monster pays for the one that took what was theirs
Order | Monsters are the wild breaking in; they keep it out

|cs|

Ochrana | Někdo musí stát mezi vesnicí a tmou
Peníze | Nikdo nezabíjí netvory zadarmo, a on taky ne
Poznání | Každý netvor má slabinu; jde o to najít ji první
Sláva | Písně o zabitých saních musí někde začít
Milosrdenství | Ne každý netvor si zaslouží zemřít a ne každý člověk žít
Povinnost | Přísaha řádu zavazuje až do smrti, a možná i po ní
Pomsta | Každý netvor zaplatí za toho, který mu vzal, co měl
Řád | Netvoři jsou divočina, která se dere dovnitř; on ji drží venku',
  'The thing that killed their family is still out there
Their old master''s hunting journal is half-finished, and the last pages are torn out
A village owes them its children, and treats them like a leper anyway
Their order cast them out for sparing something they were sent to kill
A fiend once spared them, and they don''t know why
They carry a silver ring from someone the thing took
A rival hunter keeps beating them to the bounties, and they''re sure it''s no accident
They''ve promised a child they''ll come back for her when the hunt is over

|cs|

Ta věc, která zabila jeho rodinu, je pořád tam venku
Lovecký deník jeho starého mistra je napůl dopsaný a poslední stránky jsou vytržené
Jedna vesnice mu vděčí za své děti, a přesto s ním jedná jako s malomocným
Řád ho vyhnal, protože ušetřil něco, co měl zabít
Jeden běs ho kdysi ušetřil a on neví proč
Nosí stříbrný prsten po někom, koho si ta věc vzala
Jiný lovec mu pořád vyfukuje odměny a on si je jistý, že to není náhoda
Slíbil jedné holčičce, že se pro ni vrátí, až bude hon u konce',
  'Sees monsters where there are only people
Haggles over the price while the village burns
Drinks to forget what they''ve seen
Can''t resist poking at anything strange, however dangerous
Doesn''t trust priests, mages or anyone who deals with the other side
Takes every job, however hopeless, because saying no feels like cowardice
Treats villagers as bait, if that''s what it takes
Has stopped fearing death, and it makes them reckless

|cs|

Vidí netvory tam, kde jsou jen lidé
Smlouvá o cenu, zatímco vesnice hoří
Pije, aby zapomněl, co viděl
Neodolá a šťouchne do všeho podivného, ať je to sebenebezpečnější
Nevěří kněžím, mágům ani nikomu, kdo se zaplétá s druhou stranou
Vezme každou zakázku, ať je sebebeznadějnější, protože odmítnout mu připadá zbabělé
Když je to nutné, použije vesničany jako návnadu
Přestal se bát smrti a dělá ho to lehkomyslným');
