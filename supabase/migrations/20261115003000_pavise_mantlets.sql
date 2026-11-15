-- Portable cover (2026-11-15): a pavise worn gives a free Defense, planted half cover;
-- mantlets can't be worn and give three-quarters or total cover by size.
update items set description =
  'A large shield with a prop. Carried on the arm, it gives a free Defense once per round like any shield; planted on the ground, it gives half cover to whoever crouches behind it, so crossbowmen can reload. |cs| Velký štít s opěrou. Nesený na paži dává jednu Obranu za kolo zdarma jako každý štít; postavený na zem dává poloviční krytí tomu, kdo se za ním skrčí, aby se kušiníci mohli nabíjet.'
where id = 'pavise';

insert into items (id, name, kind, description, price_copper, sort) values
('mantlet', 'Mantlet |cs| Plutěj', 'gear',
 'A screen of planks or wicker on a prop, pushed or carried ahead and set down. Too big to wear. Gives three-quarters cover to one or two people behind it. |cs| Štít z prken nebo proutí s opěrou, který se tlačí nebo nese před sebou a staví na zem. Je příliš velký, aby se dal nosit na paži. Dává tříčtvrteční krytí jednomu nebo dvěma lidem za ním.',
 150, 198),
('siege-mantlet', 'Siege mantlet |cs| Obléhací plutěj', 'gear',
 'A tall roofed screen on wheels, pushed towards the walls by its crew. Gives total cover from the front to up to four people behind it; it moves at half speed. |cs| Vysoký zastřešený štít na kolech, který obsluha tlačí ke hradbám. Dává úplné krytí zepředu až čtyřem lidem za ním; pohybuje se polovičním tempem.',
 600, 199)
on conflict (id) do nothing;

update rulebook_pages set content = replace(content,
$o$**Total cover** means the attacker$o$,
$n$**Portable cover** comes from big shields. A **pavise** carried on the arm is a shield like any other, with a free Defense once per round; planted on the ground, it gives **half cover** instead. A **mantlet**, a screen of planks too big to wear, gives **three-quarters cover** to one or two people behind it, and a wheeled **siege mantlet** gives **total cover** from the front to a crew of four.

**Total cover** means the attacker$n$)
where slug = 'defending';
