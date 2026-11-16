-- The Craftsman, half of the old Artisan (the other half is the Builder);
-- see docs/ruleset-overview.md, Backgrounds › Craftsman

-- Tool bundles and their pieces, restored from the backup
insert into public.items (id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents)
select id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents
from backup.items_20261116
where id in (
  'smiths-tools', 'smiths-hammer', 'tongs', 'file',
  'leatherworkers-tools', 'leather-knife', 'awl', 'last',
  'potters-tools', 'potters-ribs', 'potters-wire',
  'jewellers-tools', 'jewellers-files', 'jewellers-saw', 'tweezers', 'touchstone',
  'merchants-kit', 'scales', 'counting-cloth', 'ledger',
  'whetstone'
)
on conflict (id) do nothing;

update public.items set name = 'Goldsmith''s tools |cs| Zlatnické náčiní' where id = 'jewellers-tools';

-- New: the tailor's and the bowyer's tools
insert into public.items (id, name, kind, category, price_copper, harness, sort, description, contents) values
  ('shears', 'Shears |cs| Krejčovské nůžky', 'tool', null, 40, false, 0,
   'Heavy iron shears for cloth. |cs| Těžké železné nůžky na látku.', '[]'::jsonb),
  ('fabric-scraps', 'Fabric scraps |cs| Odstřižky látky', 'tool', null, 10, false, 0,
   'Patches of wool, linen and felt for mending. |cs| Záplaty z vlny, plátna a plsti na spravování.', '[]'::jsonb),
  ('tailors-tools', 'Tailor''s tools |cs| Krejčovské náčiní', 'tool', 'kit', 60, false, 0,
   'Everything to cut, sew and mend clothes, packed in a roll. |cs| Všechno ke stříhání, šití a spravování oděvu, sbalené v rolce.',
   '[{"item": "shears", "quantity": 1}, {"item": "needle-and-thread", "quantity": 1}, {"item": "fabric-scraps", "quantity": 1}]'::jsonb),
  ('drawknife', 'Drawknife |cs| Pořízek', 'tool', null, 30, false, 0,
   'A two-handled blade for shaving a stave down to a bow. |cs| Čepel se dvěma rukojeťmi, kterou se z polena ořeže luk.', '[]'::jsonb),
  ('bowstring-wax', 'Bowstring wax |cs| Vosk na tětivy', 'tool', null, 5, false, 0,
   'Keeps a string from fraying in the rain. |cs| Chrání tětivu, aby se v dešti netřepila.', '[]'::jsonb),
  ('fletching-feathers', 'Fletching feathers |cs| Brka na šípy', 'tool', null, 10, false, 0,
   'Goose feathers, split and trimmed, for fletching arrows. |cs| Husí brka, rozštípnutá a zastřižená, na opeření šípů.', '[]'::jsonb),
  ('bowyers-tools', 'Bowyer''s tools |cs| Lučištnické náčiní', 'tool', 'kit', 45, false, 0,
   'For making and mending bows and arrows. |cs| K výrobě a opravám luků a šípů.',
   '[{"item": "drawknife", "quantity": 1}, {"item": "bowstring-wax", "quantity": 1}, {"item": "fletching-feathers", "quantity": 1}]'::jsonb);

update public.items set sort = s.sort from (values
  ('whetstone', 132),
  ('smiths-tools', 150), ('smiths-hammer', 151), ('tongs', 152), ('file', 153),
  ('leatherworkers-tools', 154), ('leather-knife', 155), ('awl', 156), ('last', 157),
  ('tailors-tools', 158), ('shears', 159), ('fabric-scraps', 160),
  ('potters-tools', 161), ('potters-ribs', 162), ('potters-wire', 163),
  ('bowyers-tools', 164), ('drawknife', 165), ('bowstring-wax', 166), ('fletching-feathers', 167),
  ('jewellers-tools', 168), ('jewellers-files', 169), ('jewellers-saw', 170), ('tweezers', 171), ('touchstone', 172),
  ('merchants-kit', 173), ('scales', 174), ('counting-cloth', 175), ('ledger', 176)
) as s(id, sort) where items.id = s.id;

insert into public.backgrounds (id, name, description, known_settings, extra_languages, sort, variants, archetypes, quirks, ideals, bonds, flaws)
values ('craftsman', 'Craftsman |cs| Řemeslník', 'A trade learned at a master''s bench: iron, leather, cloth, clay or yew, and an eye for bad work. |cs| Řemeslo vyučené u mistrova ponku: železo, kůže, látka, hlína nebo tis, a oko pro odfláknutou práci.', 'Guilds, workshops and markets; masters, journeymen and the people who buy from them |cs| Cechy, dílny a trhy; mistři, tovaryši a ti, kdo od nich kupují', 0, 2,
  '{"poor": {"label": "A journeyman on the road |cs| Tovaryš na vandru", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["smiths-tools", "leatherworkers-tools", "tailors-tools", "potters-tools", "bowyers-tools"], "quantity": 1}]}]}], "coins_copper": 50, "material": 2}, "commoner": {"label": "A village craftsman, or a hand in a town workshop |cs| Vesnický řemeslník, nebo pomocník v městské dílně", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["smiths-tools", "leatherworkers-tools", "tailors-tools", "potters-tools", "bowyers-tools"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["winter-blanket"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["whetstone"], "quantity": 1}]}]}], "coins_copper": 150, "material": 4}, "fortunate": {"label": "A guild master |cs| Cechmistr", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["smiths-tools", "leatherworkers-tools", "tailors-tools", "potters-tools", "bowyers-tools", "jewellers-tools"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["winter-blanket"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["whetstone"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hooded-lantern"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["oil-flask"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["calligraphers-supplies"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["merchants-kit"], "quantity": 1}]}]}], "coins_copper": 400, "material": 6}}'::jsonb,
  'Village smith | Shod horses and mended ploughs, and was the first one called when wolves came. | Commoner background: smith''s tools; poor arms: a light hammer
Armourer | Hammered out mail and plate for men who paid well and died anyway. | Fortunate background: smith''s tools; commoner arms: armour of their own making
Locksmith | Made the town''s locks, and knows exactly how they open. | Commoner background: smith''s tools; poor arms: a dagger
Journeyman | Wandered from town to town, learning under one master after another. | Poor background; commoner arms: a quarterstaff and a gambeson
Saddler | Made harness and saddles for a lord''s stable. | Commoner background: leatherworker''s tools; commoner mount
Goldsmith | Weighed gold and set stones for burghers who never trusted the scales. | Fortunate background: goldsmith''s tools; poor arms: a dagger
Bowyer | Made bows and arrows, and can tell a good yew stave from across the yard. | Commoner background: bowyer''s tools; commoner arms: a longbow
Tailor | Knows cloth, fashion, and who in town wears what they can''t afford. | Commoner background: tailor''s tools; poor arms: a dagger

|cs|

Vesnický kovář | Koval koně a spravoval pluhy, a když přišli vlci, volali první jeho. | Prostý původ: kovářské náčiní; chudá výzbroj: lehké kladivo
Platnéř | Vykoval kroužky i pláty pro muže, kteří dobře platili a stejně umřeli. | Zámožný původ: kovářské náčiní; prostá výzbroj: zbroj vlastní výroby
Zámečník | Dělal zámky celému městu a ví přesně, jak se otvírají. | Prostý původ: kovářské náčiní; chudá výzbroj: dýka
Tovaryš | Táhl od města k městu a učil se u jednoho mistra za druhým. | Chudý původ; prostá výzbroj: hůl a prošívanice
Sedlář | Šil postroje a sedla pro panskou stáj. | Prostý původ: brašnářské náčiní; prostý kůň
Zlatník | Vážil zlato a zasazoval kameny měšťanům, kteří vahám nikdy nevěřili. | Zámožný původ: zlatnické náčiní; chudá výzbroj: dýka
Lučištník | Dělal luky a šípy a dobré tisové poleno pozná přes celý dvůr. | Prostý původ: lučištnické náčiní; prostá výzbroj: dlouhý luk
Krejčí | Zná látky, módu, a ví, kdo ve městě nosí, na co nemá. | Prostý původ: krejčovské náčiní; chudá výzbroj: dýka',
  'Picks up every tool they pass and judges the maker
Knocks on walls, tugs at straps, taps blades: has to know what things are made of
Keeps their hands busy at every rest, whittling, mending, stitching
Sizes people up by their boots and buckles
Tells everyone how it should have been made
Counts the Material in everyone''s pack, and their own twice
Carries a sample of their best work and shows it to strangers
Burns, scars and missing fingertips, and a story for each

|cs|

Vezme do ruky každý nástroj, kolem kterého jde, a posoudí, kdo ho dělal
Klepe na zdi, tahá za řemeny, ťuká do čepelí: musí vědět, z čeho věci jsou
Při každém odpočinku má ruce v práci, vyřezává, spravuje, šije
Lidi posuzuje podle bot a přezek
Každému řekne, jak se to mělo udělat
Počítá Materiál v batohu každého a ve svém dvakrát
Nosí s sebou ukázku své nejlepší práce a ukazuje ji cizím lidem
Popáleniny, jizvy a chybějící konečky prstů, a ke každé historka',
  'Craft | A thing worth making is worth making right
Guild | The guild feeds its own, and its own keep its rules
Honesty | Short weight and bad iron are theft, whoever does it
Independence | A master answers to no lord, only to their work
Legacy | Their work should outlast them by a hundred years
Progress | There''s always a better way to do it, and they mean to find it
Fair trade | A fair price for fair work, no more and no less
Usefulness | A thing is beautiful if it works

|cs|

Řemeslo | Co stojí za to udělat, stojí za to udělat pořádně
Cech | Cech živí své lidi a jeho lidé drží jeho pravidla
Poctivost | Šizená váha a špatné železo jsou krádež, ať je dělá kdokoli
Nezávislost | Mistr se nezodpovídá žádnému pánovi, jen své práci
Odkaz | Jeho práce by ho měla přežít o sto let
Pokrok | Vždycky se to dá udělat líp a on na to hodlá přijít
Poctivý obchod | Poctivá cena za poctivou práci, nic víc a nic míň
Užitek | Věc je krásná, když funguje',
  'Their master''s mark is stamped on their first piece; they''d die before selling it
Their guild expelled them over a quarrel; they mean to be taken back
A customer died because of a piece they made badly; nobody knows it was theirs
They owe a moneylender for their tools, and he knows where they live
Somewhere there''s a masterpiece of their old master''s that went missing; they''ll find it
Their apprentice ran away to the war; they''ve heard the boy is still alive
A rival workshop burned theirs down; they can''t prove it
The town they grew up in still uses the bridge irons they forged at fifteen

|cs|

Na jeho prvním výrobku je vyražená značka jeho mistra; spíš by umřel, než by ho prodal
Cech ho kvůli sváru vyloučil; hodlá se do něj vrátit
Kvůli špatně udělanému kusu jeden zákazník zemřel; nikdo neví, že byl jeho
Za nástroje dluží lichváři a ten ví, kde bydlí
Někde se ztratilo mistrovské dílo jeho starého mistra; najde ho
Jeho učeň utekl do války; slyšel, že kluk ještě žije
Konkurenční dílna mu vypálila tu jeho; nemůže to dokázat
Město, kde vyrůstal, pořád používá kování mostu, které vykoval v patnácti',
  'Can''t leave someone else''s bad work alone, even mid-fight
Overprices everything, friends included
Despises anyone who works with their mouth instead of their hands
Won''t take orders from someone who couldn''t do the job themselves
Keeps every trade secret, even when sharing it would save lives
Drinks away the money for raw stock, then works twice as hard to make up for it
Swears by a single method and refuses to try anything else
Says yes to every commission, and finishes half of them

|cs|

Nedokáže nechat cizí odfláknutou práci být, ani uprostřed boje
Všechno předraží, přátelům taky
Pohrdá každým, kdo pracuje pusou místo rukama
Nepřijme rozkaz od někoho, kdo by tu práci sám neuměl
Drží každé řemeslné tajemství, i když by jeho prozrazení zachránilo životy
Peníze na suroviny propije a pak dře dvakrát tolik, aby to dohnal
Přísahá na jediný postup a nic jiného nezkusí
Na každou zakázku řekne ano a dokončí polovinu');

-- Crafting: tools that fit the work, working without them, and crafts belong to classes
update public.rulebook_pages set content = replace(replace(content,
'## Improvised materials

',
'## Tools that fit the work

Tools only help where they can be used. A smith''s tools need a forge, so a smith on the road manages small repairs and rents a smithy for anything more. Leather, cloth and clay can be worked wherever there''s a table and some light.

Without the proper tools, the DM decides whether the work can be tried at all: sewing up a torn strap with a borrowed needle, yes; forging a blade over a campfire, no. If it can, it''s never automatic. The maker first pays a [cost to attempt](danger-level#cost-to-attempt), as much as the DM sets, and then makes the skill check.

:::note[Crafts belong to classes]
A background gives tools, not a skill. A craft roll uses the class whose skill fits: the Warrior''s *Ironworks* for a sword, the Ranger''s *Woodworking* for a bow, the Medic''s *Potions and poisons* for a draught. A craftsman''s known setting helps them buy, sell and appraise, which are :soul and :charisma rolls. A player who wants their trade to count on a craft roll can ask the DM for +1.
:::

## Improvised materials

'),
'## Improvizované přísady {#improvised-materials}',
'## Nástroje, které se hodí k práci {#tools-that-fit-the-work}

Nástroje pomohou jen tam, kde se dají použít. Kovářské náčiní potřebuje výheň, takže kovář na cestách zvládne drobné opravy a na cokoli většího si pronajme kovárnu. S kůží, látkou a hlínou se dá pracovat všude, kde je stůl a trochu světla.

Bez pořádných nástrojů PJ rozhodne, jestli se práce dá vůbec zkusit: sešít roztržený řemen půjčenou jehlou ano, vykovat čepel nad táborákem ne. Pokud ano, nikdy to není automatické. Výrobce nejdřív zaplatí [cenu za pokus](danger-level#cost-to-attempt), tolik, kolik určí PJ, a pak hodí zkoušku.

:::note[Řemesla patří k povoláním]
Původ dává nástroje, ne dovednost. Hod na výrobu používá povolání, jehož dovednost se hodí: Válečníkovo *Kovářství* na meč, Hraničářova *Práce se dřevem* na luk, Mastičkářovy *Lektvary a jedy* na odvar. Známé prostředí řemeslníkovi pomáhá kupovat, prodávat a odhadovat cenu, což jsou hody na :soul[Duši] a :charisma[Vliv]. Hráč, který chce, aby se jeho řemeslo počítalo i v hodu na výrobu, si může u PJ říct o +1.
:::

## Improvizované přísady {#improvised-materials}')
where slug = 'crafting';
