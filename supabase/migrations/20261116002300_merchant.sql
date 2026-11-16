-- The Merchant (Kupec); see docs/ruleset-overview.md, Backgrounds › Merchant

insert into public.backgrounds (id, name, description, known_settings, extra_languages, sort, variants, archetypes, quirks, ideals, bonds, flaws)
values ('merchant', 'Merchant |cs| Kupec', 'Buying cheap, selling dear, and getting the goods there alive: markets, fairs and the roads between them. |cs| Levně koupit, draze prodat a dovézt zboží v pořádku: trhy, jarmarky a cesty mezi nimi.', 'Markets, fairs and trade roads anywhere: what things are worth, who''s buying, the tolls and staple rights; merchant guilds and trading houses, and who owes whom |cs| Trhy, jarmarky a obchodní cesty kdekoli: co má jakou cenu, kdo kupuje, cla a právo skladu; kupecké cechy a obchodní domy, a kdo komu dluží', 1, 12,
  '{"poor": {"label": "A pedlar with a pack |cs| Podomní obchodník s nůší", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["pouch"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}], "coins_copper": 30, "material": 2}, "commoner": {"label": "A market trader or a carter |cs| Trhovec nebo forman", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["merchants-kit"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["playing-cards"], "quantity": 1}]}]}], "coins_copper": 150, "material": 3}, "fortunate": {"label": "A trading house''s merchant |cs| Kupec obchodního domu", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["merchants-kit"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["playing-cards"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hooded-lantern"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["oil-flask"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["calligraphers-supplies"], "quantity": 1}]}]}], "coins_copper": 400, "material": 5}}'::jsonb,
  'Pedlar | Carried needles, ribbons and gossip from village to village on their back. | Poor background; poor arms: a quarterstaff
Salt carrier | Led a pack train of salt along the Golden Trail over the border forest, past robbers and toll-keepers. | Commoner background; commoner mount; commoner arms: a crossbow and a club
Stallholder | Sold cloth on the town square every market day, and knows what everything is worth. | Commoner background; poor arms: a club
Carter | Drove a merchant''s wagons on the high roads, and knows every inn and every ditch. | Commoner background; commoner mount; poor arms: a club
Factor | Kept the books in a foreign trading house, and knows whose ships are late. | Fortunate background; poor arms: a dagger
Moneychanger | Weighed foreign coins at a bench by the bridge, and knows a clipped groschen by feel. | Fortunate background; poor arms: a dagger
Horse trader | Sold horses at fairs, some of them sound. | Commoner background; commoner mount; poor arms: a dagger
Bankrupt | Was rich last year, and kept only the sword bought in better days. | Poor background; fortunate arms: a sword

|cs|

Podomní obchodník | Nosil jehly, stužky a drby na zádech od vesnice k vesnici. | Chudý původ; chudá výzbroj: hůl
Soumar | Vodil karavanu soumarů se solí po Zlaté stezce přes pohraniční hvozd, kolem lapků a celníků. | Prostý původ; prostý kůň; prostá výzbroj: kuše a kyj
Trhovec | Každý trhový den prodával sukno na náměstí a ví, co má jakou cenu. | Prostý původ; chudá výzbroj: kyj
Forman | Vozil kupcovy vozy po hlavních cestách a zná každou hospodu a každý příkop. | Prostý původ; prostý kůň; chudá výzbroj: kyj
Faktor | Vedl účty v cizím obchodním domě a ví, čí lodě mají zpoždění. | Zámožný původ; chudá výzbroj: dýka
Penězoměnec | Vážil cizí mince na lavici u mostu a ostřižený groš pozná po hmatu. | Zámožný původ; chudá výzbroj: dýka
Koňský handlíř | Prodával koně na jarmarcích, některé z nich i zdravé. | Prostý původ; prostý kůň; chudá výzbroj: dýka
Zkrachovalec | Ještě loni byl bohatý a zbyl mu jen meč koupený v lepších časech. | Chudý původ; zámožná výzbroj: meč',
  'Prices everything they see, out loud
Bites every coin, and weighs every purse by hand
Keeps accounts of who in the party owes what
Speaks a few words of every language, all of them numbers
Never says no, only "that depends on the price"
Collects samples: a pinch of every spice, a scrap of every cloth
Remembers every price from every fair for ten years back
Wears a purse inside their shirt and touches it every few minutes

|cs|

Všechno, co vidí, nahlas ocení
Každou minci kousne a každý měšec zváží v ruce
Vede si účty, kdo v družině dluží co
Umí pár slov v každém jazyce, samé číslovky
Nikdy neřekne ne, jen „to záleží na ceně“
Sbírá vzorky: špetku každého koření, útržek každého sukna
Pamatuje si každou cenu z každého jarmarku deset let nazpět
Nosí měšec pod košilí a každých pár minut se ho dotkne',
  'Profit | A deal is good when both sides think they''ve won, and one of them is right
Honesty | Fair weight and fair measure, or the guild hangs you
Freedom | Money buys what birth never gave them
Ambition | Their name will be on a house on the square one day
Community | A market feeds the whole town, not just the traders
Risk | The biggest profits are on the roads nobody else dares
Reputation | A merchant''s word is their capital
Generosity | Wealth is for spending, on people who need it

|cs|

Zisk | Obchod je dobrý, když si obě strany myslí, že vyhrály, a jedna z nich má pravdu
Poctivost | Poctivá váha a poctivá míra, jinak tě cech pověsí
Svoboda | Peníze koupí, co mu původ nikdy nedal
Ctižádost | Jednou bude jeho jméno na domě na náměstí
Pospolitost | Trh živí celé město, nejen kupce
Riziko | Největší zisky jsou na cestách, na které si nikdo jiný netroufne
Pověst | Kupcovo slovo je jeho kapitál
Štědrost | Bohatství je od toho, aby se utrácelo, za ty, kdo to potřebují',
  'Their partner ran off with the strongbox; they know which town he''s in
A caravan they financed vanished on the road; nobody believes it was robbers
They owe a moneylender more than they''ll ever earn
A noble owes them a fortune and won''t pay; the courts belong to him
Their guild expelled them for underselling; they mean to prove it wrong
They carry a sealed letter of credit to a trading house far away
A rival house ruined their family; they''re keeping a ledger of their own
A child they took on as an apprentice was lost on the road

|cs|

Jeho společník utekl s pokladnicí; ví, ve kterém městě je
Karavana, kterou financoval, zmizela na cestě; nikdo nevěří, že to byli lapkové
Dluží lichváři víc, než kdy vydělá
Jeden šlechtic mu dluží jmění a nezaplatí; soudy patří jemu
Cech ho vyloučil, protože prodával pod cenou; hodlá mu dokázat, že se mýlil
Nese zapečetěný úvěrní list do vzdáleného obchodního domu
Soupeřící dům zruinoval jeho rodinu; vede si vlastní účetní knihu
Dítě, které vzal do učení, se mu ztratilo na cestě',
  'Can''t pass up a bargain, even one they don''t need
Haggles over everything, even with friends, even over life and death
Trusts a signed contract over a person''s word
Bribes first, thinks later
Hoards coin and won''t spend it, even on the party
Looks down on anyone who''s never earned their own bread
Sells anything to anyone, and asks no questions
Thinks everyone has a price, and treats them that way

|cs|

Neodolá výhodné koupi, i když tu věc nepotřebuje
Smlouvá o všem, i s přáteli, i když jde o život
Víc věří podepsané smlouvě než slovu člověka
Nejdřív podplácí, pak přemýšlí
Hromadí peníze a neutratí je, ani za družinu
Pohrdá každým, kdo si nikdy nevydělal na vlastní chleba
Prodá cokoli komukoli a na nic se neptá
Myslí si, že každý má svou cenu, a podle toho s lidmi jedná');
