-- Two more elf racial perks: Pearls in their hair (the mirror of the kroll's Tokens of heroism) and Fey blood.

insert into perks (id, name, kind, race_id, description, flavour) values
(
  'pearls-in-their-hair',
  'Pearls in their hair |cs| Elfka s perlami ve vlasech',
  'racial',
  'elf',
  $d$This perk only triggers if something about your appearance is striking and lovely (pearls or jewels in your hair, fine braids, silk, a circlet, ...).

When dealing with a stranger of an intelligent race, you gain advantage on any positive interaction (negotiating, charming, projecting trust), or disadvantage on any negative interaction (intimidating, threatening). This only applies to your first roll of the situation.

|cs|

Tento perk funguje, jen pokud je na tvém vzhledu něco nápadného a krásného (perly nebo drahokamy ve vlasech, jemné copánky, hedvábí, čelenka, ...).

Když jednáš s cizincem z rozumné rasy, máš výhodu na každé přátelské jednání (vyjednávání, okouzlení, budování důvěry), nebo nevýhodu na každé nepřátelské (zastrašování, výhrůžky). Platí to jen pro tvůj první hod v dané situaci.$d$,
  $f$They look like something out of a song, and people treat them that way. |cs| Vypadá to, jako by vystoupili z písně, a lidé s nimi podle toho jednají.$f$
),
(
  'fey-blood',
  'Fey blood |cs| Vílí krev',
  'racial',
  'elf',
  $d$You have advantage when resisting charm, fear and mind magic, whether it's a saving throw or a defense roll.

|cs|

Máš výhodu, když odoláváš okouzlení, strachu a magii mysli, ať jde o záchranný hod, nebo obranný hod.$d$,
  $f$Their minds are older than most spells. |cs| Jejich mysl je starší než většina kouzel.$f$
);
