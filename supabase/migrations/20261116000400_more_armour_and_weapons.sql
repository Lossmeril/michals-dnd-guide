-- More head pieces, the brigandine, and Central European polearms and blades.
-- Armour sorts are renumbered so pieces stay grouped by slot; the ranged
-- martial weapons move after the new melee ones.

insert into items (id, name, kind, category, damage, damage_type, properties, price_copper, slots, protection, burden, harness, sort, description) values
  -- Head
  ('padded-hood', 'Padded hood |cs| Prošívaná kápě', 'armour', null, null, null, null, 40, '{head}', 1, 1, false, 49,
   'A quilted hood with a short cape over the shoulders. The poor man''s helmet. |cs| Prošívaná kápě s krátkým límcem přes ramena. Přilba chudých.'),
  ('padded-coif', 'Padded coif |cs| Prošívaná kukla', 'armour', null, null, null, null, 60, '{head}', 1, 1, false, 50,
   'A close-fitting quilted cap tied under the chin. |cs| Přiléhavá prošívaná čapka zavázaná pod bradou.'),
  ('mail-coif', 'Mail coif |cs| Kroužková kukla', 'armour', null, null, null, null, 400, '{head}', 1, 1, false, 53,
   'A mail hood covering the head, neck and throat. |cs| Kroužková kukla, která kryje hlavu, krk i hrdlo.'),
  ('mask-helmet', 'Mask helmet |cs| Přilba s maskou', 'armour', null, null, null, null, 500, '{head}', 2, 2, false, 54,
   'A rounded helmet with a fixed iron mask over the face. |cs| Kulatá přilba s pevnou železnou maskou přes obličej.'),
  ('closed-bascinet', 'Closed bascinet |cs| Uzavřený bacinet', 'armour', null, null, null, null, 800, '{head}', 3, 3, true, 56,
   'A bascinet with a pointed visor that can be raised, and a mail aventail. |cs| Bacinet se zašpičatělým hledím, které jde zvednout, a s kroužkovým závěsem.'),
  -- Body
  ('brigandine', 'Brigandine |cs| Brigantina', 'armour', null, null, null, null, 1600, '{body}', 3, 3, false, 46,
   'Small steel plates riveted inside a cloth or leather coat. Flexible, so no armourer fits it into a harness. |cs| Drobné ocelové pláty přinýtované zevnitř k látkové nebo kožené kazajce. Je pružná, takže ji žádný platnéř nezapasuje do plátové zbroje.'),
  -- Weapons
  ('pitchfork', 'Pitchfork |cs| Vidle', 'weapon', 'simple', '1d6', 'piercing', 'Two-Handed', 5, null, null, null, false, 14,
   'Every farm has one, and every peasant uprising. |cs| Má je každý statek a každá selská vzpoura.'),
  ('bardiche', 'Bardiche |cs| Bardiš', 'weapon', 'martial', '1d10', 'slashing', 'Heavy, Two-Handed', 200, null, null, null, false, 34,
   'A long, crescent axe blade on a haft as tall as a man. |cs| Dlouhá půlměsíčitá čepel sekery na násadě vysoké jako člověk.'),
  ('billhook', 'Billhook |cs| Kosíř', 'weapon', 'martial', '1d8', 'slashing', 'Reach, Two-Handed', 120, null, null, null, false, 35,
   'A farmer''s hooked blade on a long pole. A hooking weapon: the hook pulls riders from the saddle. |cs| Zahnutá selská čepel na dlouhé tyči. Zbraň s hákem: hák stahuje jezdce ze sedla.'),
  ('voulge', 'Voulge |cs| Sudlice', 'weapon', 'martial', '1d10', 'slashing', 'Heavy, Reach, Two-Handed', 150, null, null, null, false, 36,
   'A cleaver-like blade bound to a long pole, the militia''s polearm. |cs| Čepel jako sekáček připevněná na dlouhou tyč, žerďová zbraň domobrany.'),
  ('morgenstern', 'Morgenstern |cs| Kropáč', 'weapon', 'martial', '1d8', 'piercing', null, 150, null, null, null, false, 37,
   'A heavy club with an iron head studded with spikes. |cs| Těžký kyj s železnou hlavicí posázenou bodci.'),
  ('hunting-sword', 'Hunting sword |cs| Tesák', 'weapon', 'martial', '1d6', 'slashing', 'Finesse, Light', 300, null, null, null, false, 38,
   'A short, broad single-edged blade for finishing game, and for anything else on the road. |cs| Krátká široká jednosečná čepel na dobíjení zvěře a na cokoli jiného, co se na cestě přihodí.');

-- The voulge is the Czech sudlice, so the glaive takes its own Czech name
update items set name = 'Glaive |cs| Glévie' where id = 'glaive';

-- Ranged martial weapons after the melee ones
update items set sort = 40 where id = 'longbow';
update items set sort = 41 where id = 'heavy-crossbow';

-- Armour grouped by slot: under, body, head, arms, legs
update items set sort = s.sort from (values
  ('gambeson', 40), ('leather-jerkin', 41), ('hide-jerkin', 42), ('mail-shirt', 43),
  ('scale-shirt', 44), ('mail-hauberk', 45), ('brigandine', 46), ('coat-of-plates', 47),
  ('breastplate', 48), ('padded-hood', 49), ('padded-coif', 50), ('iron-cap', 51),
  ('kettle-hat', 52), ('mail-coif', 53), ('mask-helmet', 54), ('bascinet', 55),
  ('closed-bascinet', 56), ('plate-arms', 57), ('mail-chausses', 58), ('plate-legs', 59)
) as s(id, sort) where items.id = s.id;
