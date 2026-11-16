-- The Scholar; see docs/ruleset-overview.md, Backgrounds › Scholar

insert into public.items (id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents)
select id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents
from backup.items_20261116
where id in ('cartographers-tools', 'drawing-compasses', 'ruler')
on conflict (id) do nothing;

-- One book, whatever its subject (DrD2 style: one kind of each thing)
insert into public.items (id, name, kind, category, price_copper, harness, sort, description, contents) values
  ('book', 'Book |cs| Kniha', 'gear', null, 1500, false, 0,
   'A handwritten book on one subject: a herbal, a chronicle, a treatise on law or the stars. Name its subject in your backstory. With an hour to consult it, you can make a knowledge roll in its field even without a fitting class, and on a success the DM answers more fully. |cs| Ručně psaná kniha o jednom tématu: herbář, kronika, traktát o právu nebo o hvězdách. Její téma uveď v příběhu postavy. S hodinou na listování můžeš hodit na znalost z jejího oboru i bez vhodného povolání a při úspěchu ti PJ odpoví podrobněji.', '[]'::jsonb);

update public.items set sort = s.sort from (values
  ('book', 134),
  ('cartographers-tools', 196), ('drawing-compasses', 197), ('ruler', 198)
) as s(id, sort) where items.id = s.id;

insert into public.backgrounds (id, name, description, known_settings, extra_languages, sort, variants, archetypes, quirks, ideals, bonds, flaws)
values ('scholar', 'Scholar |cs| Učenec', 'Learning from books: universities, chanceries and candlelit libraries, and a pack heavier with paper than with food. |cs| Vzdělání z knih: univerzity, kanceláře a knihovny při svíčkách, a batoh těžší papírem než jídlem.', 'The written word, anywhere: texts, records, inscriptions and old documents; universities, monastery libraries and chanceries, and the learned people in them |cs| Psané slovo, kdekoli: texty, záznamy, nápisy a staré listiny; univerzity, klášterní knihovny a kanceláře a učení lidé v nich', 2, 5,
  '{"poor": {"label": "A wandering student |cs| Potulný žák", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["calligraphers-supplies"], "quantity": 1}]}]}], "coins_copper": 30, "material": 1}, "commoner": {"label": "A scribe, or a physician''s assistant |cs| Písař, nebo lékařův pomocník", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["calligraphers-supplies"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hooded-lantern"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["oil-flask"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["book"], "quantity": 1}]}]}], "coins_copper": 150, "material": 2}, "fortunate": {"label": "A university master, or a court physician |cs| Univerzitní mistr, nebo dvorní lékař", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["calligraphers-supplies"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hooded-lantern"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["oil-flask"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["book"], "quantity": 2}]}]}, {"options": [{"entries": [{"items": ["healers-kit", "herbalism-kit", "cartographers-tools"], "quantity": 1}]}]}], "coins_copper": 400, "material": 3}}'::jsonb,
  'Wandering student | Drank and disputed their way from one university to the next, singing for bread. | Poor background; poor arms: a dagger
Scribe | Copied charters in a chancery, and knows exactly what a forgery looks like. | Commoner background; poor arms: a dagger
Physician | Studied the ancients and read urine flasks, and never touched a wound until the plague came. | Fortunate background: a healer''s kit; poor arms: a dagger
Apothecary | Mixed theriac for the rich and sold sugar pills to everyone else. | Fortunate background: a herbalism kit; poor arms: a dagger
Astrologer | Cast horoscopes for a lord who believed every word. | Fortunate background; commoner mount
Alchemist''s apprentice | Kept the fire going and the master''s secrets, until the explosion. | Commoner background; poor arms: a club
Notary | Knows every law, privilege and loophole in the land, and charges by the word. | Fortunate background; poor arms: a dagger
Chronicler | Wrote the history of a noble house, including the parts they paid to have removed. | Commoner background; commoner mount

|cs|

Potulný žák | Propil a prohádal se od jedné univerzity k druhé a za chleba zpíval. | Chudý původ; chudá výzbroj: dýka
Písař | Opisoval listiny v kanceláři a přesně ví, jak vypadá padělek. | Prostý původ; chudá výzbroj: dýka
Lékař | Studoval staré mistry a četl z moči, a ránu poprvé ošetřil, až když přišel mor. | Zámožný původ: ranhojičská brašna; chudá výzbroj: dýka
Lékárník | Míchal theriak pro bohaté a všem ostatním prodával cukrové pilulky. | Zámožný původ: bylinkářská brašna; chudá výzbroj: dýka
Astrolog | Sestavoval horoskopy pánovi, který věřil každému slovu. | Zámožný původ; prostý kůň
Alchymistův učeň | Přikládal do ohně a střežil mistrova tajemství, až do výbuchu. | Prostý původ; chudá výzbroj: kyj
Notář | Zná každý zákon, výsadu a kličku v zemi a účtuje si od slova. | Zámožný původ; chudá výzbroj: dýka
Kronikář | Sepsal dějiny šlechtického rodu, včetně částí, za jejichž vyškrtnutí mu zaplatili. | Prostý původ; prostý kůň',
  'Corrects everyone''s Liturgic, and everyone''s facts
Takes notes on everything, in a script nobody else can read
Quotes the ancients at every occasion, sometimes accurately
Sniffs every book before opening it
Counts in fractions and speaks in footnotes
Collects odd facts and shares them at the wrong moment
Has ink stains on every finger, and on their nose
Measures and weighs everything, in case it''s useful later

|cs|

Opravuje každému liturgičtinu a každému fakta
Dělá si poznámky o všem, písmem, které nikdo jiný nepřečte
Při každé příležitosti cituje staré mistry, někdy i přesně
Každou knihu před otevřením očichá
Počítá ve zlomcích a mluví v poznámkách pod čarou
Sbírá podivné zajímavosti a sděluje je v nevhodnou chvíli
Má inkoust na každém prstu a na nose
Všechno měří a váží, kdyby se to později hodilo',
  'Knowledge | Everything can be known, given enough time and candles
Truth | A fact doesn''t care who it offends
Tradition | The ancients knew more than we ever will
Progress | The ancients were wrong about plenty, and somebody has to say so
Service | Learning is worthless unless it helps someone
Secrets | Some knowledge is too dangerous for the many
Fame | A name on a book lives forever
Freedom | No bishop or king decides what may be read

|cs|

Poznání | Všechno se dá poznat, když je dost času a svíček
Pravda | Faktu je jedno, koho urazí
Tradice | Staří mistři věděli víc, než se kdy dozvíme my
Pokrok | Staří mistři se v leckčem mýlili a někdo to musí říct
Služba | Učenost nemá cenu, pokud nikomu nepomáhá
Tajemství | Některé vědění je pro mnohé příliš nebezpečné
Sláva | Jméno na knize žije navždy
Svoboda | Žádný biskup ani král nerozhoduje, co se smí číst',
  'Their master''s unfinished book is in their pack; they mean to finish it
A letter from a dead colleague asks a question nobody has answered
Their university expelled them over a disputation they still think they won
A library burned with the only copy of something they need
Their patron paid for their studies and expects a return
They copied a forbidden text once, and someone knows
An old fellow student is now a bishop, and owes them a favour
Their family sold its land to pay for the university

|cs|

V batohu nese mistrovu nedopsanou knihu; hodlá ji dopsat
Dopis od zesnulého kolegy klade otázku, na kterou ještě nikdo neodpověděl
Univerzita ho vyloučila kvůli disputaci, o které si pořád myslí, že ji vyhrál
Shořela knihovna s jediným opisem něčeho, co potřebuje
Jeho mecenáš mu zaplatil studia a čeká, že se mu to vrátí
Jednou opsal zakázaný text a někdo o tom ví
Bývalý spolužák je teď biskupem a dluží mu laskavost
Jeho rodina prodala půdu, aby mu zaplatila univerzitu',
  'Can''t resist showing that they know better
Trusts a book over their own eyes
Forgets to eat, sleep and keep watch when there''s something to read
Looks down on anyone who can''t read
Steals rare books; borrowing is for people who give them back
Argues every point, especially the ones that don''t matter
Is a coward about anything that isn''t a debate
Is sure they''re the cleverest person in the room, and usually says so

|cs|

Neodolá a dá najevo, že to ví líp
Víc věří knize než vlastním očím
Když má co číst, zapomene jíst, spát i držet hlídku
Pohrdá každým, kdo neumí číst
Krade vzácné knihy; půjčují si je ti, kdo je vracejí
Hádá se o každou maličkost, hlavně o ty nedůležité
Je zbabělec ve všem, co není disputace
Je si jistý, že je v místnosti nejchytřejší, a obvykle to řekne');
