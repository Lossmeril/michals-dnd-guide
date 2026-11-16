-- The Hermit; see docs/ruleset-overview.md, Backgrounds › Hermit

insert into public.items (id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents)
select id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents
from backup.items_20261116
where id in ('herbalism-kit', 'leather-gloves', 'clippers', 'mortar-and-pestle', 'glass-jar')
on conflict (id) do nothing;

update public.items set sort = s.sort from (values
  ('herbalism-kit', 191), ('leather-gloves', 192), ('clippers', 193), ('mortar-and-pestle', 194), ('glass-jar', 195)
) as s(id, sort) where items.id = s.id;

insert into public.backgrounds (id, name, description, known_settings, extra_languages, sort, variants, archetypes, quirks, ideals, bonds, flaws)
values ('hermit', 'Hermit |cs| Poustevník', 'A life apart, close enough to a village to be visited: herbs, silence, and people knocking at night. |cs| Život stranou, ale dost blízko vesnice, aby za ním lidé chodili: byliny, ticho a klepání na dveře v noci.', 'Plants and mushrooms, and what grows where, anywhere; wild places at the edge of settlements, and the folk who come to the hermit''s door at night |cs| Rostliny a houby, a co kde roste, kdekoli; divoká místa na okraji osad a lidé, kteří chodí k poustevníkovi v noci', 0, 4,
  '{"poor": {"label": "A vagrant sleeping rough |cs| Tulák, který spí pod širákem", "equipment": [{"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["winter-blanket"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["iron-pot"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}], "coins_copper": 10, "material": 3}, "commoner": {"label": "A herbalist or wise woman at the edge of a village |cs| Bylinkář nebo kořenářka na kraji vesnice", "equipment": [{"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["winter-blanket"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["iron-pot"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["herbalism-kit"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["healers-kit"], "quantity": 1}]}]}], "coins_copper": 50, "material": 5}, "fortunate": {"label": "A famous hermit, with patrons who bring gifts |cs| Slavný poustevník, kterému mecenáši nosí dary", "equipment": [{"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["winter-blanket"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["iron-pot"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["herbalism-kit"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["healers-kit"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hooded-lantern"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["oil-flask"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["calligraphers-supplies"], "quantity": 1}]}]}], "coins_copper": 150, "material": 8}}'::jsonb,
  'Herbalist | Knew every plant in the valley, and what it did to the person who ate it. | Commoner background; poor arms: a sickle
Wise woman | Knew the cures, the curses, and which girl was in trouble before her mother did. | Commoner background; poor arms: a quarterstaff
Drifter | Worked harvests, haymaking and woodcutting from village to village, never staying past the season, sleeping in barns and under trees. | Poor background; poor arms: a sickle or a handaxe
Charcoal burner | Tended kilns deep in the forest for weeks at a time, black to the elbows. | Poor background; commoner arms: a handaxe and a gambeson
Recluse | Withdrew to a cave above the treeline to sit with the silence, and came back calmer than anyone has a right to be. | Poor background; poor arms: a quarterstaff
Honey hunter | Climbed the forest''s oldest trees for wild honey, and knows the forest from above. | Commoner background; poor arms: a handaxe
Exiled noble | Banished from court after something unforgivable, and kept the sword. | Poor background; fortunate arms: a sword
Prophet | Came down from the mountain with visions nobody asked for. | Poor background; poor arms: a quarterstaff

|cs|

Bylinkář | Znal každou rostlinu v údolí a věděl, co udělá s tím, kdo ji sní. | Prostý původ; chudá výzbroj: srp
Kořenářka | Znala léky, kletby, a věděla, která dívka je v jiném stavu, dřív než její matka. | Prostý původ; chudá výzbroj: hůl
Tulák | Chodil na žně, senoseč a dřevo od vesnice k vesnici, nikde nezůstal déle než sezónu a spal po stodolách a pod stromy. | Chudý původ; chudá výzbroj: srp nebo sekerka
Uhlíř | Celé týdny hlídal milíře hluboko v lese, černý až po lokty. | Chudý původ; prostá výzbroj: sekerka a prošívanice
Samotář | Odešel do jeskyně nad hranicí lesa, aby naslouchal tichu, a vrátil se klidnější, než by kdo měl právo být. | Chudý původ; chudá výzbroj: hůl
Brtník | Lezl na nejstarší stromy v lese pro divoký med a zná les shora. | Prostý původ; chudá výzbroj: sekerka
Vyhnaný šlechtic | Byl vyhnán od dvora za něco neodpustitelného a meč si nechal. | Chudý původ; zámožná výzbroj: meč
Prorok | Sestoupil z hory s viděními, o která nikdo nestál. | Chudý původ; chudá výzbroj: hůl',
  'Talks to plants, animals and the weather, and waits for answers
Picks and sniffs every herb by the road, and pockets half of them
Eats sparingly, and comments on what others eat
Keeps strange hours: sleeps at noon, walks at night
Measures time by moons and seasons, never by days
Answers questions with riddles or proverbs
Can sit still for hours, and expects others to
Smells of smoke, mint and something nobody can name

|cs|

Mluví s rostlinami, zvířaty a počasím a čeká na odpověď
U cesty utrhne a očichá každou bylinu a půlku jich strčí do kapsy
Jí střídmě a komentuje, co jedí ostatní
Žije v divných hodinách: v poledne spí, v noci chodí
Čas měří úplňky a ročními obdobími, nikdy dny
Na otázky odpovídá hádankami nebo příslovími
Dokáže sedět bez hnutí celé hodiny a čeká totéž od ostatních
Voní kouřem, mátou a něčím, co nikdo nedokáže pojmenovat',
  'Solitude | Quiet is where the truth is heard
Healing | Nobody who comes to the door goes away without help
Nature | The forest was here first and will be here last
Knowledge | Every plant has a secret, and they mean to learn them all
Penance | They withdrew to pay for a sin, and it isn''t paid yet
Freedom | No lord, no priest, no tax collector finds them
Faith | God speaks in silence, and they listen
Balance | Every cure costs something, and somebody has to pay

|cs|

Samota | Pravda je slyšet v tichu
Léčení | Nikdo, kdo přijde ke dveřím, neodejde bez pomoci
Příroda | Les tu byl první a bude tu poslední
Poznání | Každá rostlina má tajemství a on je chce poznat všechna
Pokání | Odešel, aby zaplatil za hřích, a ještě není splacený
Svoboda | Nenajde ho žádný pán, kněz ani výběrčí daní
Víra | Bůh mluví v tichu a on naslouchá
Rovnováha | Každý lék něco stojí a někdo musí zaplatit',
  'The village that drove them out still sends someone at night when a child is sick
Their old teacher''s hut stands empty; they''re the only one who knows what''s buried under it
A creature of the forest spared their life once; they owe it
Someone they love is buried in the clearing by the hut
They made a promise to a dying pilgrim and haven''t kept it
A noble family sends gifts every year to keep them away from court
The wise woman of the next valley is their rival; neither will admit the other is better
They saw something in the forest one night that nobody believes

|cs|

Vesnice, která ho vyhnala, k němu pořád v noci posílá, když je nemocné dítě
Chatrč jeho starého učitele stojí prázdná; jen on ví, co je pod ní zakopané
Jedna lesní bytost mu kdysi ušetřila život; je jí dlužen
Na mýtině u chatrče je pohřbený někdo, koho miloval
Umírajícímu poutníkovi dal slib a ještě ho nesplnil
Jedna šlechtická rodina mu každý rok posílá dary, aby se držel dál od dvora
Kořenářka ze sousedního údolí je jeho sokyně; ani jeden nepřizná, že je ten druhý lepší
Jedné noci viděl v lese něco, čemu nikdo nevěří',
  'Can''t stand crowds; three people is a crowd
Speaks the plain truth at the worst possible moment
Distrusts anything made in a town, coins included
Has forgotten how to lie, and how to tell when others do
Hoards herbs, roots and odd bits like a magpie
Believes their visions over their eyes
Treats townsfolk like children
Takes a long time to trust anyone, and forgives nothing

|cs|

Nesnáší davy; tři lidé jsou dav
Říká holou pravdu v tu nejhorší chvíli
Nevěří ničemu, co se vyrobilo ve městě, mincím taky ne
Zapomněl, jak se lže, i jak poznat, když lžou ostatní
Hromadí byliny, kořínky a podivnosti jako straka
Víc věří svým viděním než svým očím
Jedná s měšťany jako s dětmi
Dlouho trvá, než někomu uvěří, a neodpouští nic');
