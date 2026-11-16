-- The second background in the fortune format: the Entertainer
-- (see docs/ruleset-overview.md, Backgrounds › Entertainer)

-- Instruments, costume, cards, mirror and the disguise kit (with its pieces),
-- restored from the backup taken when the old background gear was deleted
insert into public.items (id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents)
select id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents
from backup.items_20261116
where id in (
  'flute', 'drum', 'shawm', 'hunting-horn', 'lyre', 'lute', 'fiddle',
  'hurdy-gurdy', 'bagpipes', 'dulcimer',
  'costume', 'playing-cards', 'mirror',
  'disguise-kit', 'cosmetics', 'hair-dye', 'false-beard', 'small-mirror'
)
on conflict (id) do nothing;

update public.items set sort = s.sort from (values
  ('playing-cards', 117), ('costume', 118), ('mirror', 119),
  ('disguise-kit', 127), ('cosmetics', 128), ('hair-dye', 129),
  ('false-beard', 130), ('small-mirror', 131),
  ('flute', 140), ('drum', 141), ('shawm', 142), ('hunting-horn', 143),
  ('lyre', 144), ('lute', 145), ('fiddle', 146), ('hurdy-gurdy', 147),
  ('bagpipes', 148), ('dulcimer', 149)
) as s(id, sort) where items.id = s.id;

insert into public.backgrounds (id, name, description, known_settings, extra_languages, sort, variants, archetypes, quirks, ideals, bonds, flaws)
values ('entertainer', 'Entertainer |cs| Komediant', 'Fairs, taverns and the halls of whoever pays: a life on the road, sung for supper. |cs| Jarmarky, krčmy a síně toho, kdo zaplatí: život na cestě, odzpívaný za večeři.', 'Fairs, taverns and travelling troupes; audiences and patrons |cs| Jarmarky, krčmy a kočovné společnosti; publikum a mecenáši', 1, 1,
  '{"poor": {"label": "A street busker |cs| Pouliční muzikant", "equipment": [{"options": [{"entries": [{"items": ["pouch"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["flute", "drum", "shawm"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["playing-cards"], "quantity": 1}]}]}], "coins_copper": 50, "material": 1}, "commoner": {"label": "A player in a travelling troupe |cs| Herec kočovné společnosti", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["flute", "drum", "shawm", "hunting-horn", "lyre"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["costume"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["playing-cards"], "quantity": 1}]}]}], "coins_copper": 150, "material": 2}, "fortunate": {"label": "A court minstrel, or a troupe''s master |cs| Dvorní pěvec, nebo principál", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["winter-blanket"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["lute", "fiddle", "hurdy-gurdy", "bagpipes", "dulcimer"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["costume"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["disguise-kit"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["mirror"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["playing-cards"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["calligraphers-supplies"], "quantity": 1}]}]}], "coins_copper": 400, "material": 3}}'::jsonb,
  'Minstrel | Sang in taverns for a meal and a bed, and in better halls for silver. | Fortunate background: a lute or a fiddle; poor arms: a dagger
Knife-thrower | Juggled blades at fairs, then threw them at an apple on a volunteer''s head. | Commoner arms: two daggers
Tumbler | Walked the rope over the market square and somersaulted for coins. | Poor arms: a club, no armour; commoner background
Fool | Wore the motley at a lord''s court and said what nobody else dared. | Fortunate background; poor arms: a club
Strolling player | Toured the villages with a troupe and a cart, playing saints and devils. | Commoner mount, commoner background
Prize fighter | Fought anyone at the fair who paid a groschen to try, with fists or blunted swords. | Fortunate arms: a sword and a shield; poor background
Fortune teller | Read palms and cards at fairs, and told people what they wanted to hear. | Commoner background; poor arms: a dagger
Herald | Rode before a lord, blew the horn and cried his name at tournaments. | Commoner mount, commoner background: a horn; poor arms: a dagger

|cs|

Pěvec | Zpíval po krčmách za jídlo a nocleh, v lepších síních za stříbro. | Zámožný původ: loutna nebo housle; chudá výzbroj: dýka
Vrhač nožů | Na jarmarcích žongloval s čepelemi a pak je házel po jablku na hlavě dobrovolníka. | Prostá výzbroj: dvě dýky
Provazochodec | Chodil po laně nad tržištěm a dělal kotrmelce za groše. | Chudá výzbroj: kyj, bez zbroje; prostý původ
Šašek | Nosil pestrý šat na panském dvoře a říkal, co si nikdo jiný netroufl. | Zámožný původ; chudá výzbroj: kyj
Kočovný herec | Objížděl s komedianty a vozem vesnice a hrál svaté a čerty. | Prostý kůň, prostý původ
Zápasník z jarmarku | Bil se s každým, kdo na jarmarku zaplatil groš, že to zkusí, pěstmi nebo tupými meči. | Zámožná výzbroj: meč a štít; chudý původ
Věštec | Na jarmarcích četl z dlaní a karet a říkal lidem, co chtěli slyšet. | Prostý původ; chudá výzbroj: dýka
Herold | Jezdil před pánem, troubil na roh a vyvolával jeho jméno na turnajích. | Prostý kůň, prostý původ: roh; chudá výzbroj: dýka',
  'Turns every story into a performance, with voices for everyone in it
Can''t pass a crowd without guessing how much it would pay
Sizes up every room as a stage: where the light falls, where the exits are
Bows after anything they do well, even with nobody watching
Hums the tune of whatever they''re doing, and makes up the words
Speaks in rhyme when nervous, and doesn''t notice
Remembers every audience that didn''t laugh, town by town
Never eats before a show, and treats every conversation as one

|cs|

Z každého vyprávění udělá představení, s hlasem pro každou postavu
Nedokáže projít kolem davu, aniž by odhadl, kolik by zaplatil
Každou místnost si prohlíží jako jeviště: kam padá světlo, kudy se dá odejít
Po všem, co se mu povede, se ukloní, i když se nikdo nedívá
Pobrukuje si melodii k tomu, co zrovna dělá, a vymýšlí k ní slova
Když je nervózní, mluví ve verších a nevšimne si toho
Pamatuje si každé publikum, které se nesmálo, město po městě
Před představením nejí a každý rozhovor bere jako představení',
  'Beauty | A good song outlives the king it''s about
Freedom | No lord, no guild, no walls; the road is home
Truth | The fool is the only one allowed to tell the king he''s wrong, and somebody has to
Fame | They''ll be singing about you in a hundred years, or what was it all for
Joy | Life is hard; an hour of laughter is worth more than bread
Troupe | The players are family, and family shares the last crust
Coin | Art is lovely, but the audience pays, so the audience decides
Memory | The old songs remember what the chronicles forgot

|cs|

Krása | Dobrá píseň přežije krále, o kterém se zpívá
Svoboda | Žádný pán, žádný cech, žádné hradby; domov je cesta
Pravda | Jen šašek smí králi říct, že se mýlí, a někdo to udělat musí
Sláva | Za sto let o tobě budou zpívat, jinak to celé nemělo smysl
Radost | Život je těžký; hodina smíchu má větší cenu než chleba
Společnost | Komedianti jsou rodina a rodina se dělí i o poslední skývu
Peníze | Umění je krásné, ale platí publikum, takže rozhoduje publikum
Paměť | Staré písně si pamatují, co kroniky zapomněly',
  'Their old teacher''s instrument, cracked and unplayable, is the one thing they''d save from a fire
The troupe they grew up in broke up over a debt; they mean to bring it back together
A lady at court once paid their way out of the stocks; they''ve sworn to sing at her wedding, whoever she marries
They wrote a song mocking a powerful man; it''s sung everywhere now, and he hasn''t forgotten who wrote it
They''re searching for the last verse of a song nobody sings any more
A child from the audience followed them for a season; they still wonder whether they should have sent her home
Their rival from the fair circuit is the only one as good as they are; one day they''ll settle it
Their song is the only record of a massacre the lord wants forgotten

|cs|

Nástroj jeho starého učitele, prasklý a nehratelný, je jediné, co by zachránil z ohně
Společnost, ve které vyrůstal, se rozpadla kvůli dluhu; hodlá ji dát zase dohromady
Jedna dáma u dvora ho kdysi vykoupila z klády; přísahal, že jí zazpívá na svatbě, ať si vezme kohokoli
Složil píseň, která si tropí žerty z mocného pána; zpívá se všude a pán nezapomněl, kdo ji napsal
Hledá poslední sloku písně, kterou už nikdo nezpívá
Jedno dítě z publika s ním chodilo celou sezónu; pořád neví, jestli ho neměl poslat domů
Jeho soupeř z jarmarků je jediný, kdo je stejně dobrý; jednou si to rozdají
Jeho píseň je jediným záznamem o masakru, na který chce pán zapomenout',
  'Can''t resist an audience, even when they should be hiding
Spends a night''s takings before the night is over
Lies when the truth would do, because the lie is a better story
Falls in love in every town, and promises to stay
Can''t take criticism; a heckler becomes an enemy for life
Mocks the powerful to their face, and calls it art
Lifts a little from every audience, just to keep their hands quick
Drinks before every show for courage, and after every show to forget it

|cs|

Neodolá publiku, ani když by se měl schovávat
Večerní výdělek utratí dřív, než večer skončí
Lže, i když by stačila pravda, protože lež je lepší příběh
V každém městě se zamiluje a slíbí, že zůstane
Nesnese kritiku; kdo na něj pokřikuje, je jeho nepřítel na celý život
Vysmívá se mocným do očí a říká tomu umění
Z každého publika trochu ukradne, jen aby měl obratné ruce
Před každým představením pije pro odvahu a po každém, aby na něj zapomněl');
