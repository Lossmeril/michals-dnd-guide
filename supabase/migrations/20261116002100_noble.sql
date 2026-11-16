-- The Noble; see docs/ruleset-overview.md, Backgrounds › Noble

insert into public.items (id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents)
select id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents
from backup.items_20261116
where id = 'signet-ring'
on conflict (id) do nothing;

update public.items set sort = 138,
  description = 'Proves who you are and seals your letters. It grants no authority: nobody has to obey a ring. |cs| Prokáže, kdo jsi, a zapečetí tvé dopisy. Nedává žádnou moc: prstenu nikdo poslouchat nemusí.'
where id = 'signet-ring';

insert into public.backgrounds (id, name, description, known_settings, extra_languages, sort, variants, archetypes, quirks, ideals, bonds, flaws)
values ('noble', 'Noble |cs| Šlechtic', 'A name and not much else. The name opens doors but commands nothing: no land, servants, income or authority, and nobody has to obey you. It comes with a price, too: the family''s debts, feuds and summons home are hooks the DM can pull. |cs| Jméno a skoro nic dalšího. Jméno otevírá dveře, ale nic nenařizuje: žádná půda, služebnictvo, příjmy ani moc a nikdo tě nemusí poslouchat. A něco stojí: dluhy, sváry a povolání domů jsou háčky, za které může PJ zatáhnout.', 'Noble courts and town councils: etiquette, heraldry, and who is feuding with whom; their own family, its lands and its lord |cs| Šlechtické dvory a městské rady: etiketa, heraldika a kdo se s kým svádí; vlastní rod, jeho panství a jeho pán', 1, 10,
  '{"poor": {"label": "A name and nothing behind it |cs| Jméno a nic za ním", "equipment": [{"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}, {"options": [{"entries": [{"items": ["playing-cards"], "quantity": 1}]}]}], "coins_copper": 30, "material": 0}, "commoner": {"label": "A minor house that still keeps up appearances |cs| Drobný rod, který ještě drží zdání", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["calligraphers-supplies"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["playing-cards"], "quantity": 1}]}]}], "coins_copper": 150, "material": 1}, "fortunate": {"label": "Heir of a modest house |cs| Dědic skromného rodu", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["calligraphers-supplies"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["playing-cards"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hooded-lantern"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["oil-flask"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["signet-ring"], "quantity": 1}]}]}], "coins_copper": 400, "material": 1}}'::jsonb,
  'Third son of a third son | Has a long name, a short inheritance, and no reason to stay home. | Poor background; fortunate arms: a sword
Hedge knight | Knighted on a battlefield by a lord now dead, rides from tourney to tourney, and sleeps under hedges between them. | Poor background; fortunate mount; commoner arms: a lance and a shield
Councillor''s child | Grew up in a patrician house on the town square, with more money than blood and everyone knowing it. | Fortunate background; poor arms: a dagger
Child of a poor vladyka | The family has a fortified farmhouse, a coat of arms and debts; the father ploughs alongside his serfs. | Poor background; commoner mount; commoner arms: a spear and a shield
Bastard | Raised at the castle, acknowledged by nobody, and better at swordplay than the legitimate heirs. | Poor background; fortunate arms: a sword
Ward | Raised at a rival lord''s court as a hostage for their family''s good behaviour, and isn''t sure whose side they''re on. | Commoner background; poor arms: a dagger
Runaway bride | Was promised to a man three times her age, or to a convent, and chose the road instead. | Commoner background; commoner mount; poor arms: a dagger
Disgraced heir | The family lost everything in a feud, a war or at dice, and the name is all that''s left. | Poor background; fortunate arms: a sword and medium armour

|cs|

Třetí syn třetího syna | Má dlouhé jméno, krátké dědictví a žádný důvod zůstávat doma. | Chudý původ; zámožná výzbroj: meč
Potulný rytíř | Pasoval ho na bojišti pán, který je dnes mrtvý; jezdí od turnaje k turnaji a mezi nimi spí pod živými ploty. | Chudý původ; zámožný kůň; prostá výzbroj: dřevec a štít
Dítě radního | Vyrostl v patricijském domě na náměstí, s více penězi než krví, a všichni to vědí. | Zámožný původ; chudá výzbroj: dýka
Dítě chudého vladyky | Rod má tvrz, erb a dluhy; otec orá vedle svých poddaných. | Chudý původ; prostý kůň; prostá výzbroj: kopí a štít
Levoboček | Vyrostl na hradě, nikdo ho neuznal a s mečem je lepší než právoplatní dědici. | Chudý původ; zámožná výzbroj: meč
Rukojmí | Vyrostl na dvoře znepřáteleného pána jako záruka, že se jeho rod bude chovat slušně, a sám neví, na čí je straně. | Prostý původ; chudá výzbroj: dýka
Uprchlá nevěsta | Měla si vzít muže třikrát staršího, nebo jít do kláštera, a zvolila raději cestu. | Prostý původ; prostý kůň; chudá výzbroj: dýka
Zneuctěný dědic | Rod přišel o všechno ve sváru, ve válce nebo v kostkách a zbylo jen jméno. | Chudý původ; zámožná výzbroj: meč a střední zbroj',
  'Introduces themselves with their full name and lineage, every time
Eats with perfect manners, even off a stick by the fire
Knows every coat of arms on the road, and whose debts it''s hiding
Speaks politely to everyone, servants included, which confuses them
Keeps a small book of everyone who has slighted them
Hums court dances when nervous
Can''t resist a tournament, a duel or a dare
Wears one good garment, mended a hundred times

|cs|

Pokaždé se představí celým jménem a rodokmenem
Jí s dokonalými způsoby, i z klacku u ohně
Zná každý erb na cestě a ví, čí dluhy skrývá
Mluví zdvořile s každým, i se služebnictvem, což je mate
Vede si knížku všech, kdo ho urazili
Když je nervózní, pobrukuje si dvorské tance
Neodolá turnaji, souboji ani sázce
Nosí jeden dobrý oděv, stokrát spravovaný',
  'Honour | A name is worth nothing if its bearer isn''t
Duty | Noble birth means protecting those beneath you
Ambition | The family was great once and will be again
Freedom | Better a poor knight on the road than a rich prisoner at home
Chivalry | Fight fair, keep your word, protect the weak
Power | Titles are only paper; real power is people who owe you
Family | Blood comes before everything, even the law
Fairness | They''ve seen how the lords treat the poor, and won''t be like them

|cs|

Čest | Jméno nemá cenu, pokud ji nemá jeho nositel
Povinnost | Urozený původ znamená chránit ty pod sebou
Ctižádost | Rod byl kdysi velký a zase bude
Svoboda | Raději chudý rytíř na cestě než bohatý vězeň doma
Rytířskost | Bojuj čestně, drž slovo, chraň slabé
Moc | Tituly jsou jen papír; skutečná moc jsou lidé, kteří ti dluží
Rod | Krev je nade vše, i nad zákon
Spravedlnost | Viděl, jak páni zacházejí s chudými, a nechce být jako oni',
  'The family estate is mortgaged; they mean to buy it back
Their elder brother will inherit everything, and they love him anyway
A marriage was arranged for them; the other family hasn''t forgotten
Their old tutor is the only one who ever believed in them
A rival house blames them for something their father did
They still write to their mother, who thinks they''re at a monastery
The lord who knighted them died owing them a favour; his son doesn''t know
The family''s ancestral sword was sold; they''ve seen it on another man''s hip

|cs|

Rodový statek je zastavený; hodlá ho vykoupit
Starší bratr zdědí všechno, a on ho přesto má rád
Byl mu domluven sňatek; druhý rod na to nezapomněl
Jeho starý vychovatel je jediný, kdo v něj kdy věřil
Soupeřící rod mu dává za vinu něco, co udělal jeho otec
Pořád píše matce, která si myslí, že je v klášteře
Pán, který ho pasoval, zemřel a dlužil mu laskavost; jeho syn o tom neví
Rodový meč prodali; viděl ho u boku jiného muže',
  'Expects to be served, and is surprised when they aren''t
Can''t let an insult to the family pass
Has never done a day of honest work, and it shows
Spends money they don''t have to look like they have it
Looks down on burghers, and burghers know it
Picks fights with people above their station, to prove they belong
Lies about how grand the family really is
Can''t take advice from anyone of lower birth

|cs|

Čeká, že ho budou obsluhovat, a diví se, když ne
Nedokáže nechat bez odpovědi urážku rodu
V životě poctivě nepracoval a je to na něm vidět
Utrácí peníze, které nemá, aby vypadal, že je má
Pohrdá měšťany a měšťané to vědí
Vyvolává spory s výše postavenými, aby dokázal, že mezi ně patří
Lže o tom, jak velkolepý jeho rod doopravdy je
Nepřijme radu od nikoho nižšího původu');
