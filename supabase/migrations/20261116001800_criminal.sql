-- The Criminal (takes in the old Charlatan and Urchin); see docs/ruleset-overview.md, Backgrounds › Criminal

insert into public.items (id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents)
select id, name, kind, category, description, damage, damage_type, properties, sort, image_url, free_manoeuvre, price_copper, slots, protection, burden, harness, contents
from backup.items_20261116
where id in ('thieves-tools', 'lockpicks', 'scissors', 'pliers', 'forgery-kit', 'blank-seals', 'wax-tools', 'sealing-wax')
on conflict (id) do nothing;

update public.items set sort = s.sort from (values
  ('thieves-tools', 206), ('lockpicks', 207), ('scissors', 208), ('pliers', 209),
  ('forgery-kit', 210), ('blank-seals', 211), ('wax-tools', 212), ('sealing-wax', 213)
) as s(id, sort) where items.id = s.id;

insert into public.backgrounds (id, name, description, known_settings, extra_languages, sort, variants, archetypes, quirks, ideals, bonds, flaws)
values ('criminal', 'Criminal |cs| Zločinec', 'A life outside the law: tools for getting in, and a cut of whatever comes out. |cs| Život mimo zákon: náčiní, jak se dostat dovnitř, a podíl z toho, co se vynese ven.', 'The underworld, anywhere: fences, smugglers, beggars and dens in any town; the dark side of their home town, its gangs, its watch and who can be bribed |cs| Podsvětí, kdekoli: překupníci, pašeráci, žebráci a doupata v každém městě; temná strana rodného města, jeho gangy, jeho stráž a kdo se dá podplatit', 1, 8,
  '{"poor": {"label": "A gutter child or a pickpocket |cs| Dítě ulice nebo kapsář", "equipment": [{"options": [{"entries": [{"items": ["pouch"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["dice-set"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["weighted-dice"], "quantity": 1}]}]}], "coins_copper": 20, "material": 1}, "commoner": {"label": "A burglar or a con artist with a gang |cs| Lupič nebo podvodník s partou", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hemp-rope"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["crowbar"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["thieves-tools", "disguise-kit"], "quantity": 1}]}]}], "coins_copper": 150, "material": 1}, "fortunate": {"label": "A fence, a gang boss or a master forger |cs| Překupník, šéf gangu nebo mistr padělatel", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hemp-rope"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["crowbar"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["thieves-tools", "disguise-kit"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hooded-lantern"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["oil-flask"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["playing-cards"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["forgery-kit", "merchants-kit"], "quantity": 1}]}]}], "coins_copper": 400, "material": 2}}'::jsonb,
  'Pickpocket | Worked the market crowds, and can lift a purse without breaking stride. | Poor background; poor arms: a dagger
Burglar | Came in through the roof, left through the cellar, and took only what fit in a sack. | Commoner background: thieves'' tools; poor arms: a dagger
Con artist | Sold relics, cures and titles to anyone who wanted to believe. | Commoner background: a disguise kit; poor arms: a dagger
Forger | Made letters of passage, guild seals and the odd will, all better than the real ones. | Fortunate background: a forgery kit; poor arms: a dagger
Smuggler | Moved salt, wine and people past the toll gates, by night and by river. | Commoner background; commoner mount; commoner arms: a crossbow and a club
Fence | Bought what fell off the cart, asked no questions, and remembers every answer anyway. | Fortunate background: a merchant''s kit; poor arms: a dagger
Gutter child | Grew up on the streets, ran errands for the gangs, and knows every alley and hole in the walls. | Poor background; poor arms: a sling
Leg-breaker | Collected debts for the gang boss, one finger at a time. | Poor background; commoner arms: a club and a gambeson

|cs|

Kapsář | Pracoval v davu na trhu a měšec ukradne, aniž by zpomalil krok. | Chudý původ; chudá výzbroj: dýka
Lupič | Dovnitř střechou, ven sklepem, a bral jen to, co se vešlo do pytle. | Prostý původ: zlodějské náčiní; chudá výzbroj: dýka
Podvodník | Prodával ostatky svatých, zázračné léky a tituly každému, kdo chtěl věřit. | Prostý původ: maskovací souprava; chudá výzbroj: dýka
Padělatel | Dělal glejty, cechovní pečeti a sem tam závěť, všechno lepší než pravé. | Zámožný původ: padělatelská souprava; chudá výzbroj: dýka
Pašerák | Převáděl sůl, víno i lidi kolem mýtnic, v noci a po řece. | Prostý původ; prostý kůň; prostá výzbroj: kuše a kyj
Překupník | Kupoval, co spadlo z vozu, na nic se neptal, a stejně si pamatuje každou odpověď. | Zámožný původ: kupecké potřeby; chudá výzbroj: dýka
Dítě ulice | Vyrostl na ulici, běhal pro gangy se vzkazy a zná každou uličku a díru ve zdi. | Chudý původ; chudá výzbroj: prak
Vymahač | Vymáhal dluhy pro šéfa gangu, jeden prst po druhém. | Chudý původ; prostá výzbroj: kyj a prošívanice',
  'Counts the exits, the guards and the purses in every room
Sits with their back to the wall, always
Talks to strangers in cant to see who answers
Tests every lock they pass, out of habit
Has three names and answers to all of them
Sleeps lightly, with their boots on
Haggles over everything, even when it''s free
Always eats like it''s their last meal

|cs|

V každé místnosti spočítá východy, stráže a měšce
Sedí vždycky zády ke zdi
Mluví na cizince v hantýrce, aby viděl, kdo odpoví
Ze zvyku zkusí každý zámek, kolem kterého jde
Má tři jména a slyší na všechna
Spí lehce a v botách
Smlouvá o všem, i když je to zadarmo
Jí vždycky, jako by to bylo naposled',
  'Freedom | No lord, no law, no chains
Loyalty | Thieves have their own law, and you don''t rat on your own
Greed | Everyone has a price, and they mean to collect it
Charity | Take from those who won''t miss it, give to those who will
Respect | One day the whole underworld will know their name
Thrill | The take matters less than getting away with it
Survival | Nobody looks after you but you
Family | The gang is the only family that never turned them away

|cs|

Svoboda | Žádný pán, žádný zákon, žádné okovy
Věrnost | Zloději mají vlastní zákon a na své se nebonzuje
Chamtivost | Každý má svou cenu a on si ji hodlá vybrat
Dobročinnost | Brát těm, kterým to nebude chybět, a dávat těm, kterým to chybí
Respekt | Jednou bude jeho jméno znát celé podsvětí
Vzrušení | Na lupu záleží méně než na tom, jestli to projde
Přežití | Nikdo se o tebe nepostará, jen ty sám
Rodina | Parta je jediná rodina, která ho nikdy neodehnala',
  'The gang that raised them was hanged in the square; they were the only one not caught
A rival gang boss wants them dead over a debt they swear is paid
Their little brother is still on the streets; everything they steal is for him
A watch sergeant lets them work, as long as he gets his cut
They hid the loot from their last big job, and someone is still looking for it
A fence they trusted sold them out; they mean to find him
They owe their life to a priest who didn''t turn them in
They stole something from a powerful man without knowing what it was

|cs|

Partu, která ho vychovala, pověsili na náměstí; jediného jeho nechytili
Šéf soupeřícího gangu ho chce mrtvého kvůli dluhu, o kterém přísahá, že je splacený
Jeho malý bratr je pořád na ulici; všechno, co ukradne, je pro něj
Jeden seržant stráže ho nechává pracovat, dokud dostává svůj podíl
Lup ze své poslední velké akce schoval a někdo ho pořád hledá
Překupník, kterému věřil, ho prodal; hodlá ho najít
Vděčí za život knězi, který ho neudal
Ukradl mocnému muži něco, aniž by věděl, co to je',
  'Can''t walk past an unattended purse
Lies by reflex, even when the truth would serve
Never trusts anyone fully, the party included
Gambles away every score, and the next one too
Runs at the first sign of the watch, whoever they leave behind
Holds a grudge forever, and pays it back double
Can''t resist showing off how good they are
Despises honest folk as marks and fools

|cs|

Nedokáže přejít kolem měšce bez dozoru
Lže ze zvyku, i když by pravda posloužila líp
Nikomu úplně nevěří, ani družině
Prohraje každý lup, a ten příští taky
Při prvním náznaku stráže uteče, ať za sebou nechá kohokoli
Křivdy nezapomíná a vrací je dvojnásob
Neodolá, aby nepředvedl, jak je dobrý
Pohrdá poctivými lidmi jako hlupáky a snadnou kořistí');
