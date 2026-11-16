-- A minimal gear list in the DrD2 style (one of each thing), restored from the
-- backup taken when the old background gear was deleted; plus the lance, the
-- pick and the two mounts the new backgrounds need.

-- Gear and tools, one kind of each
insert into public.items
select * from backup.items_20261116
where id in (
  'backpack', 'pouch', 'bedroll', 'winter-blanket', 'waterskin', 'rations',
  'tinderbox', 'torch', 'hooded-lantern', 'oil-flask', 'hemp-rope', 'tent',
  'iron-pot', 'dice-set', 'weighted-dice', 'rank-insignia', 'shovel',
  'healers-kit', 'splints', 'needle-and-thread',
  'calligraphers-supplies', 'quill', 'ink', 'parchment'
);

-- With one kind of each, the names drop the qualifiers
update public.items set name = 'Blanket |cs| Přikrývka' where id = 'winter-blanket';
update public.items set name = 'Lantern |cs| Lucerna' where id = 'hooded-lantern';
update public.items set name = 'Rope (15 m) |cs| Lano (15 m)' where id = 'hemp-rope';
update public.items set name = 'Dice |cs| Kostky' where id = 'dice-set';
update public.items set name = 'Loaded dice |cs| Falešné kostky' where id = 'weighted-dice';
update public.items set name = 'Writing things |cs| Psací potřeby' where id = 'calligraphers-supplies';

update public.items set sort = s.sort from (values
  ('backpack', 100), ('pouch', 101), ('bedroll', 102), ('winter-blanket', 103),
  ('tent', 104), ('waterskin', 105), ('rations', 106), ('iron-pot', 107),
  ('tinderbox', 108), ('torch', 109), ('hooded-lantern', 110), ('oil-flask', 111),
  ('hemp-rope', 112), ('shovel', 113), ('dice-set', 114), ('weighted-dice', 115),
  ('rank-insignia', 116), ('healers-kit', 120), ('splints', 121),
  ('needle-and-thread', 122), ('calligraphers-supplies', 123), ('quill', 124),
  ('ink', 125), ('parchment', 126)
) as s(id, sort) where items.id = s.id;

-- Lance and pick
insert into public.items (id, name, kind, category, damage, damage_type, properties, price_copper, harness, sort, description) values
  ('lance', 'Lance |cs| Dřevec', 'weapon', 'martial', '1d12', 'piercing', 'Reach', 150, false, 39,
   'A long ash lance for the charge. Attacks against a target within 1 m are disadvantaged; two-handed unless mounted. |cs| Dlouhý jasanový dřevec do útoku. Útoky na cíl do 1 m jsou v nevýhodě; obouruční, pokud nejsi na koni.'),
  ('pick', 'Pick |cs| Krumpáč', 'weapon', 'martial', '1d8', 'piercing', null, 80, false, 40,
   'A miner''s pick that serves as a weapon, and as the pick for digging. |cs| Hornický krumpáč, který poslouží jako zbraň i ke kopání.');

update public.items set sort = 43 where id = 'longbow';
update public.items set sort = 44 where id = 'heavy-crossbow';

-- Mounts (for now as gear; maybe companion stat blocks later)
insert into public.items (id, name, kind, category, price_copper, harness, sort, description) values
  ('riding-horse', 'Riding horse |cs| Jezdecký kůň', 'gear', 'mount', 15000, false, 190,
   'With saddle, bridle and saddlebags. Carries its rider''s load. Not trained for battle. |cs| Se sedlem, uzdou a sedlovými brašnami. Nese náklad svého jezdce. Není cvičený do boje.'),
  ('warhorse', 'Warhorse |cs| Válečný kůň', 'gear', 'mount', 120000, false, 191,
   'A destrier with war saddle, bridle and saddlebags. Trained for battle: it doesn''t bolt at steel or fire. |cs| Válečný oř s bojovým sedlem, uzdou a sedlovými brašnami. Cvičený do boje: nesplaší se před ocelí ani ohněm.');
