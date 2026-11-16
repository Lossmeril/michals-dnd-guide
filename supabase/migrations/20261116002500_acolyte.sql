-- The Acolyte (Duchovní); see docs/ruleset-overview.md, Backgrounds › Acolyte

insert into public.items (id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents)
select id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents
from backup.items_20261116
where id = 'holy-symbol'
on conflict (id) do nothing;

update public.items set sort = 139 where id = 'holy-symbol';

insert into public.backgrounds (id, name, description, known_settings, extra_languages, sort, variants, archetypes, quirks, ideals, bonds, flaws)
values ('acolyte', 'Acolyte |cs| Duchovní', 'Raised in the service of the Star God: parishes, monasteries and the roads between shrines. |cs| Vychován ve službě Hvězdnému bohu: fary, kláštery a cesty mezi poutními místy.', 'The Star God''s church anywhere: its rites and feasts, its hierarchy, who holds which parish and which abbot owes whom; monasteries, parishes, pilgrim roads and shrines |cs| Církev Hvězdného boha kdekoli: její obřady a svátky, hierarchie, kdo drží kterou faru a který opat komu dluží; kláštery, fary, poutní cesty a poutní místa', 1, 14,
  '{"poor": {"label": "A mendicant friar or a pilgrim |cs| Žebravý mnich nebo poutník", "equipment": [{"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["pouch"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["holy-symbol"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}], "coins_copper": 10, "material": 2}, "commoner": {"label": "A parish priest, a monk or a nun |cs| Farář, mnich nebo jeptiška", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["holy-symbol"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["calligraphers-supplies"], "quantity": 1}]}]}], "coins_copper": 100, "material": 2}, "fortunate": {"label": "A canon, a prior or a bishop''s secretary |cs| Kanovník, převor nebo biskupův sekretář", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["holy-symbol"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["calligraphers-supplies"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hooded-lantern"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["oil-flask"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["book"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["healers-kit", "herbalism-kit"], "quantity": 1}]}]}], "coins_copper": 300, "material": 3}}'::jsonb,
  'Mendicant friar | Begged their way from town to town, preaching poverty to people who had nothing else. | Poor background; poor arms: a quarterstaff
Pilgrim | Walked to a distant shrine to keep a vow, and came back changed, or hasn''t come back yet. | Poor background; poor arms: a quarterstaff (the pilgrim''s staff)
Village priest | Christened, married and buried the whole village, and knows all their sins. | Commoner background; poor arms: a club
Infirmarian | Ran the monastery''s infirmary and herb garden, and has seen every way a body fails. | Fortunate background: a herbalism kit; poor arms: a dagger
Runaway nun | Took the veil, by choice or not, and left the convent for reasons of her own. | Commoner background; poor arms: a dagger
Sergeant-brother | Served a knightly order as a lay brother: cooked, prayed, and held the line behind the knights. | Commoner background; commoner arms: a mace and a shield
Inquisitor''s clerk | Wrote down the confessions at the inquisitor''s trials, and can''t forget them. | Fortunate background; poor arms: a dagger
Heretic preacher | Preached that the church is rotten, and the church agreed to burn them for it. | Poor background; poor arms: a quarterstaff

|cs|

Žebravý mnich | Prožebral se od města k městu a kázal chudobu lidem, kteří nic jiného neměli. | Chudý původ; chudá výzbroj: hůl
Poutník | Došel ke vzdálenému poutnímu místu, aby splnil slib, a vrátil se změněný, nebo se ještě nevrátil. | Chudý původ; chudá výzbroj: hůl (poutnická)
Vesnický farář | Křtil, oddával a pohřbíval celou vesnici a zná všechny její hříchy. | Prostý původ; chudá výzbroj: kyj
Infirmář | Vedl klášterní špitál a bylinnou zahradu a viděl každý způsob, jak tělo selže. | Zámožný původ: bylinkářská brašna; chudá výzbroj: dýka
Uprchlá jeptiška | Přijala závoj, dobrovolně či ne, a z kláštera odešla z vlastních důvodů. | Prostý původ; chudá výzbroj: dýka
Řádový bratr | Sloužil rytířskému řádu jako laický bratr: vařil, modlil se a držel řadu za rytíři. | Prostý původ; prostá výzbroj: palcát a štít
Písař inkvizitora | Zapisoval doznání u inkvizičních procesů a nedokáže je zapomenout. | Zámožný původ; chudá výzbroj: dýka
Kacířský kazatel | Kázal, že církev je prohnilá, a církev se za to rozhodla ho upálit. | Chudý původ; chudá výzbroj: hůl',
  'Prays before every meal, every fight and every door
Quotes scripture for every occasion, often the wrong verse
Keeps the hours: wakes at night for prayers, and wakes everyone else
Blesses everything, from horses to soup
Fasts on feast days and feasts on fast days, by a calendar nobody else knows
Counts prayer beads when nervous, and loses count
Speaks Liturgic when they don''t want to be understood
Writes down everyone''s sins, to pray for them later

|cs|

Modlí se před každým jídlem, každým bojem a každými dveřmi
Při každé příležitosti cituje Písmo, často špatný verš
Drží hodinky: v noci vstává k modlitbě a budí všechny ostatní
Žehná všemu, od koní po polévku
Postí se o svátcích a hoduje o půstech, podle kalendáře, který nikdo jiný nezná
Když je nervózní, přebírá růženec a ztrácí počet
Mluví liturgicky, když nechce, aby mu bylo rozumět
Zapisuje si hříchy všech, aby se za ně později pomodlil',
  'Faith | The Star God sees everything, and that''s enough
Charity | Whoever is hungry gets fed, whoever they are
Tradition | The rites are old for a reason
Reform | The church has grown fat and rich, and has to be made clean again
Mercy | Every soul can be saved, even the worst
Obedience | The order''s rule is the path; stepping off it is the fall
Truth | A lie is a sin, even a kind one
Power | The church is the only power older than kings, and they mean to rise in it

|cs|

Víra | Hvězdný bůh vidí všechno, a to stačí
Milosrdenství | Kdo má hlad, dostane najíst, ať je to kdokoli
Tradice | Obřady jsou staré z dobrého důvodu
Náprava | Církev ztloustla a zbohatla a musí se znovu očistit
Slitování | Každou duši lze spasit, i tu nejhorší
Poslušnost | Řehole je cesta; sejít z ní je pád
Pravda | Lež je hřích, i ta laskavá
Moc | Církev je jediná moc starší než králové a on v ní hodlá stoupat',
  'Their old abbot sent them out with a task and a sealed letter
A relic was stolen from their monastery; they''ve sworn to bring it back
They heard a confession they can''t repeat and can''t forget
The village they served was taken by plague; they buried everyone
A bishop owes their family a debt, and won''t acknowledge it
They left someone behind at the convent, and promised to come back
Their brother monk was burned as a heretic; they''re not sure he was wrong
A pilgrim died in their arms and asked them to finish the pilgrimage

|cs|

Jeho starý opat ho vyslal s úkolem a zapečetěným dopisem
Z jeho kláštera ukradli ostatek; přísahal, že ho přinese zpátky
Vyslechl zpověď, kterou nesmí zopakovat a nemůže zapomenout
Vesnici, které sloužil, vzal mor; pohřbil všechny
Jeden biskup dluží jeho rodině a nechce to uznat
V klášteře po sobě někoho nechal a slíbil, že se vrátí
Jeho spolubratra upálili jako kacíře; není si jistý, že se mýlil
Poutník mu zemřel v náručí a požádal ho, aby pouť dokončil',
  'Sees sin everywhere, especially in others
Can''t refuse a confession, even an enemy''s
Drinks the communion wine, and more besides
Trusts priests too readily, and heretics not at all
Is sure every misfortune is a punishment, and says whose
Breaks their vows in small ways, and confesses in big ones
Can''t stand to see the church mocked, and makes a scene
Prays instead of acting, and calls it patience

|cs|

Všude vidí hřích, hlavně u ostatních
Neodmítne zpověď, ani nepříteli
Upíjí mešní víno, a nejen to
Kněžím věří příliš snadno a kacířům vůbec
Je si jistý, že každé neštěstí je trest, a řekne čí
Porušuje sliby v malém a zpovídá se ve velkém
Nesnese, když se někdo církvi posmívá, a udělá scénu
Místo jednání se modlí a říká tomu trpělivost');
