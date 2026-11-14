-- Filling the thin aspects, part 2: Alchemist Transmuter and Mixer, Shaman Herbalist.

insert into perks (id, name, kind, flavour, description, cost_amount, cost_resource, cost_unit) values
-- Alchemist, Transmuter
('silvering', 'Silvering |cs| Postříbření', 'perk',
 'The smith wanted fifty. You want a pot and an afternoon. |cs| Kovář chtěl padesát. Tobě stačí hrnec a odpoledne.',
 'You silver a weapon, or ten pieces of ammunition, yourself. It lasts until the next solstice or equinox, then the coat wears thin. A smith charges 50 silver for the same, and his lasts. |cs| Postříbříš si zbraň nebo deset kusů střeliva sám. Vydrží do příštího slunovratu nebo rovnodennosti, pak se povlak opotřebuje. Kovář si za totéž řekne 50 stříbrných a jeho vydrží.',
 10, 'material', null),
('solve-et-coagula', 'Solve et coagula', 'perk',
 'Dissolve, then bind. Mostly dissolve. |cs| Rozpusť a sjednoť. Hlavně rozpusť.',
 'With a few hours over a fire, you render a **broken item** or a **spare trophy** down into proper Material: a third of its price in silver, rounded down. The DM prices trophies. |cs| Za pár hodin nad ohněm rozložíš **rozbitý předmět** nebo **trofej navíc** na plnohodnotný Materiál: třetinu její ceny ve stříbrných, zaokrouhleno dolů. Cenu trofejí určuje PJ.',
 null, null, null),
('tempering-oil', 'Tempering oil |cs| Kalicí olej', 'perk',
 'Leather like iron, until the sun goes down. |cs| Kůže jako železo, dokud nezapadne slunce.',
 'You rub an oil into one armour piece. Until the next sunset or sunrise, it gives **+1 Protection** with no extra Burden. One oil per piece. |cs| Vetřeš olej do jednoho kusu zbroje. Do příštího západu nebo východu slunce dává **+1 k Ochraně** bez přidané Zátěže. Jeden olej na kus.',
 2, 'material', 'per armour piece'),
-- Alchemist, Mixer
('singed-eyebrows', 'Singed eyebrows |cs| Ožehnuté obočí', 'perk',
 'It''s not the first time, and it shows. |cs| Není to poprvé, a je to vidět.',
 'Your own charges, corrosives and gases never hurt you. You have advantage when resisting fire. |cs| Tvé vlastní nálože, žíraviny a plyny ti nikdy neublíží. Při odolávání ohni máš výhodu.',
 null, null, null),
('sappers-fuse', 'Sapper''s fuse |cs| Ženijní doutnák', 'perk',
 'It goes off at midnight. Not a minute before. |cs| Bouchne o půlnoci. Ani o minutu dřív.',
 'An ordinary fuse burns for a few rounds, give or take, as the DM says. Yours goes off **exactly when you set it**, to the minute, up to an hour later. Or you rig a charge to a **tripwire**, a lid or a door, without needing *Mechanisms*. Neither costs extra Material. |cs| Obyčejný doutnák hoří pár kol, plus minus, jak řekne PJ. Tvůj bouchne **přesně, kdy ho nastavíš**, na minutu, až hodinu dopředu. Nebo nálož napojíš na **nástražný drát**, víko či dveře, aniž bys potřeboval *Mechanismy*. Ani jedno nestojí Materiál navíc.',
 null, null, null),
-- Shaman, Herbalist
('nose-for-poison', 'Nose for poison |cs| Nos na jedy', 'perk',
 'Almonds. Someone doesn''t like you. |cs| Mandle. Někdo tě nemá rád.',
 'You smell a drink, a dish or a blade. You know **for certain** whether it holds a poison or narcotic, and which one, even a Hard to detect one. No roll, and no tasting. |cs| Přičichneš k pití, jídlu nebo čepeli. **S jistotou** víš, jestli obsahuje jed nebo omamnou látku, a jakou, i takovou, kterou je těžké odhalit. Bez hodu a bez ochutnávání.',
 1, 'soul', null);

insert into class_perks (class_id, perk_id, sort) values
('alchemist', 'silvering', 60), ('alchemist', 'solve-et-coagula', 61), ('alchemist', 'tempering-oil', 62),
('alchemist', 'singed-eyebrows', 63), ('alchemist', 'sappers-fuse', 64),
('shaman', 'nose-for-poison', 71);

insert into perk_requirements (perk_id, kind, required_perk_id) values
('silvering', 'has_aspect', 'transmuter'), ('solve-et-coagula', 'has_aspect', 'transmuter'),
('tempering-oil', 'has_aspect', 'transmuter'),
('singed-eyebrows', 'has_aspect', 'mixer'), ('sappers-fuse', 'has_aspect', 'mixer'),
('nose-for-poison', 'has_aspect', 'herbalist');
