-- The Peasant (Rolník); see docs/ruleset-overview.md, Backgrounds › Peasant

insert into public.backgrounds (id, name, description, known_settings, extra_languages, sort, variants, archetypes, quirks, ideals, bonds, flaws)
values ('peasant', 'Peasant |cs| Rolník', 'Life off the land and in the village: fields and herds, woods and graves, feasts and dues to the lord. |cs| Život z půdy a ve vsi: pole a stáda, lesy a hroby, svátky a dávky pánovi.', 'Villages and the countryside anywhere: the work, the livestock, the seasons and the customs, market days, and who the reeve is; their home village, its lord and his bailiff |cs| Vesnice a venkov kdekoli: práce, dobytek, roční období a zvyky, trhové dny a kdo je rychtář; rodná ves, její pán a jeho dráb', 0, 13,
  '{"poor": {"label": "A cottar or a farmhand |cs| Chalupník nebo čeledín", "equipment": [{"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}], "coins_copper": 20, "material": 2}, "commoner": {"label": "A smallholder with a field and a cow |cs| Sedlák s políčkem a krávou", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["winter-blanket"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["iron-pot"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hemp-rope"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}, {"options": [{"entries": [{"items": ["shovel", "healers-kit"], "quantity": 1}]}]}], "coins_copper": 100, "material": 3}, "fortunate": {"label": "A rich farmer or a village reeve |cs| Zámožný sedlák nebo rychtář", "equipment": [{"options": [{"entries": [{"items": ["backpack"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["bedroll"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["winter-blanket"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["waterskin"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["tinderbox"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["iron-pot"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hemp-rope"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["rations"], "quantity": 3}]}]}, {"options": [{"entries": [{"items": ["shovel", "healers-kit"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["hooded-lantern"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["oil-flask"], "quantity": 1}]}]}, {"options": [{"entries": [{"items": ["carpenters-tools", "brewers-supplies"], "quantity": 1}]}]}], "coins_copper": 300, "material": 5}}'::jsonb,
  'Ploughman | Walked behind the oxen from dawn to dusk, and is stronger than any knight they''ve met. | Poor background; poor arms: a club
Swineherd | Drove the village pigs into the oak woods every autumn, and knows every path in them. | Poor background; poor arms: a quarterstaff
Village reeve | Collected the lord''s dues and settled the village''s quarrels, and was hated by both sides. | Fortunate background; poor arms: a club
Vintner | Tended a vineyard on the slopes above the river, and judges every wine harshly. | Fortunate background: brewer''s supplies; poor arms: a sickle
Folk hero | Stood up to the lord''s bailiff once, and the village still sings about it. | Commoner background; commoner arms: a spear and a shield
Woodcutter | Felled trees for the charcoal burners and the town''s builders, and has strong arms and few words. | Poor background; commoner arms: an axe and a gambeson
Gravedigger | Dug the village''s graves, and knows which ones were dug twice. | Poor background; poor arms: a club
Midwife | Delivered every child in three villages, and a few calves. | Commoner background: a healer''s kit; poor arms: a dagger

|cs|

Oráč | Chodil za voly od svítání do soumraku a je silnější než kterýkoli rytíř, jakého potkal. | Chudý původ; chudá výzbroj: kyj
Pasák vepřů | Každý podzim hnal vesnická prasata do doubrav a zná v nich každou stezku. | Chudý původ; chudá výzbroj: hůl
Rychtář | Vybíral pánovi dávky a urovnával vesnické spory, a nenáviděly ho obě strany. | Zámožný původ; chudá výzbroj: kyj
Vinař | Staral se o vinici na svazích nad řekou a každé víno přísně soudí. | Zámožný původ: sládkovské potřeby; chudá výzbroj: srp
Lidový hrdina | Jednou se postavil pánovu drábovi a vesnice o tom dodnes zpívá. | Prostý původ; prostá výzbroj: kopí a štít
Dřevorubec | Kácel stromy pro uhlíře a městské stavitele; má silné paže a málo slov. | Chudý původ; prostá výzbroj: sekera a prošívanice
Hrobník | Kopal vesnici hroby a ví, které z nich se kopaly dvakrát. | Chudý původ; chudá výzbroj: kyj
Porodní bába | Přivedla na svět každé dítě ve třech vesnicích a pár telat k tomu. | Prostý původ: ranhojičská brašna; chudá výzbroj: dýka',
  'Up before dawn every day, and wakes everyone else
Reads the weather from the sky, the birds and their own knee
Judges every field they pass, and the farmer who keeps it
Eats everything on the plate, and finishes others''
Names every animal, even the ones they''ll eat
Counts the days to the next feast, and knows every saint''s day
Talks about the harvest at every fire, every year''s
Carries a pinch of home soil in a pouch

|cs|

Každý den vstává před svítáním a budí všechny ostatní
Počasí čte z oblohy, z ptáků a z vlastního kolena
Posuzuje každé pole, kolem kterého jde, i sedláka, který ho obdělává
Sní všechno na talíři a dojí i po ostatních
Každé zvíře pojmenuje, i to, které sní
Počítá dny do příštích svátků a zná každého svatého v kalendáři
U každého ohně mluví o žních, o každých
Nosí v měšci špetku hlíny z domova',
  'Hard work | Bread is earned, not given
Community | The village stands together, or it starves alone
Freedom | No man should be another''s property
Fairness | The lord takes too much, and someday someone will say so
Tradition | The old feasts and the old ways keep the harvest coming
Faith | God sends the rain and the hail, and both are deserved
Home | Every road leads back to the village in the end
Ambition | Their grandchildren won''t plough someone else''s field

|cs|

Poctivá práce | Chleba se vydělává, nedostává
Pospolitost | Vesnice drží při sobě, nebo hladoví každý sám
Svoboda | Žádný člověk nemá být majetkem jiného
Spravedlnost | Pán bere příliš a jednou to někdo řekne nahlas
Tradice | Staré svátky a staré zvyky zajišťují úrodu
Víra | Bůh sesílá déšť i kroupy a obojí je zasloužené
Domov | Každá cesta nakonec vede zpátky do vsi
Ctižádost | Jeho vnoučata nebudou orat cizí pole',
  'The lord''s bailiff took the family''s best field; they mean to get it back
Their parents still work the land and need the money they send home
They ran from the lord''s land, and his men are still looking
The village gave them its savings to bring back help
A wolf, a bear or something worse took their flock; they know where it lairs
They''re betrothed back home, and the wedding keeps being put off
Their brother was taken as a levy and never came back
The village well went bad the year a stranger came; they think they know who

|cs|

Pánův dráb vzal rodině nejlepší pole; hodlá ho získat zpátky
Rodiče pořád dřou na poli a potřebují peníze, které jim posílá
Utekl z pánovy půdy a jeho lidé ho pořád hledají
Vesnice mu dala své úspory, aby přivedl pomoc
Vlk, medvěd nebo něco horšího mu vzal stádo; ví, kde má doupě
Doma je zasnoubený a svatba se pořád odkládá
Jeho bratra odvedli do zbroje a už se nevrátil
Vesnická studna se zkazila v roce, kdy přišel cizinec; myslí si, že ví kdo',
  'Distrusts anything new, from a plough to a priest
Hoards food, just in case
Can''t read, and is ashamed of it
Treats townsfolk as cheats and lords as thieves
Stubborn as an ox, and proud of it
Superstitious about everything to do with the harvest
Settles things with fists, like back home
Bows to anyone in fine clothes, out of long habit

|cs|

Nevěří ničemu novému, od pluhu po faráře
Hromadí jídlo, pro jistotu
Neumí číst a stydí se za to
Měšťany má za podvodníky a pány za zloděje
Tvrdohlavý jako vůl a pyšný na to
Pověrčivý ve všem, co se týká úrody
Věci řeší pěstmi, jako doma
Ze starého zvyku se klaní každému v drahých šatech');
