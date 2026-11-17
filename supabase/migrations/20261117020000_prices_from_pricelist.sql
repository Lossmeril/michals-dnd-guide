-- Prices follow the researched pricelist (docs/pricelist.md, "To settle").
-- Kits keep their price equal to the sum of their pieces.

-- Single items
update items set price_copper = 1500  where id = 'riding-horse';   -- 150 sp
update items set price_copper = 18000 where id = 'warhorse';       -- 18 gp (12–24 gp)
update items set price_copper = 60    where id = 'lance';
update items set price_copper = 300   where id = 'iron-cap';
update items set price_copper = 30    where id = 'winter-blanket';

-- New kit pieces
insert into items (id, name, kind, price_copper, sort) values
  ('lancet',         'Lancet |cs| Skalpel',                         'tool', 50,  300),
  ('linen-bandages', 'Linen bandages |cs| Plátěné obvazy',          'tool', 10,  301),
  ('penknife',       'Penknife |cs| Nožík na brky',                 'tool', 30,  302),
  ('coloured-inks',  'Coloured inks |cs| Barevné inkousty',         'gear', 100, 303)
on conflict (id) do nothing;

-- Pieces repriced so the kits add up
update items set price_copper = 30  where id = 'splints';           -- healer's kit 10 sp
update items set price_copper = 10  where id = 'glass-jar';         -- herbalism kit 10 sp
update items set price_copper = 40  where id = 'leather-knife';     -- leatherworker's 10 sp
update items set price_copper = 40  where id = 'last';
update items set price_copper = 60  where id = 'chisels';           -- carpenter's 25 sp, mason's 20 sp
update items set price_copper = 80  where id = 'saw';
update items set price_copper = 50  where id = 'plane';
update items set price_copper = 50  where id = 'auger';
update items set price_copper = 10  where id = 'claw-hammer';
update items set price_copper = 80  where id = 'masons-hammer';
update items set price_copper = 30  where id = 'trowel';
update items set price_copper = 30  where id = 'masons-square';
update items set price_copper = 120 where id = 'cosmetics';         -- disguise kit 30 sp
update items set price_copper = 160 where id = 'lockpicks';         -- thieves' tools 30 sp
update items set price_copper = 250 where id = 'blank-seals';       -- forgery kit 40 sp
update items set price_copper = 70  where id = 'wax-tools';
update items set price_copper = 200 where id = 'jewellers-files';   -- goldsmith's tools 80 sp
update items set price_copper = 400 where id = 'jewellers-saw';
update items set price_copper = 50  where id = 'tweezers';
update items set price_copper = 150 where id = 'touchstone';

-- Kit contents
update items set contents = '[{"item":"splints","quantity":1},{"item":"needle-and-thread","quantity":1},{"item":"lancet","quantity":1},{"item":"linen-bandages","quantity":1}]'::jsonb
  where id = 'healers-kit';
update items set contents = '[{"item":"quill","quantity":10},{"item":"ink","quantity":1},{"item":"parchment","quantity":5},{"item":"penknife","quantity":1},{"item":"coloured-inks","quantity":1}]'::jsonb
  where id = 'calligraphers-supplies';
update items set contents = '[{"item":"blank-seals","quantity":1},{"item":"wax-tools","quantity":1},{"item":"sealing-wax","quantity":1},{"item":"quill","quantity":10},{"item":"ink","quantity":1},{"item":"parchment","quantity":5}]'::jsonb
  where id = 'forgery-kit';

-- Kit prices = the sum of their pieces
update items k set price_copper = s.total
from (
  select k2.id, sum(p.price_copper * (c->>'quantity')::int) as total
  from items k2, jsonb_array_elements(k2.contents) c
  join items p on p.id = c->>'item'
  where jsonb_array_length(k2.contents) > 0
  group by k2.id
) s
where k.id = s.id;
