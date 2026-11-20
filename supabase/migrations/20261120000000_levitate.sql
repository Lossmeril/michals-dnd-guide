-- Incantor spell Levitate (objects); the Warlock's Fly is for living beings.

insert into perks (id, name, flavour, description, kind, cost_amount, cost_resource, components, range, duration)
values (
  'levitate',
  'Levitate |cs| Levitace',
  'The cup floats, the knife floats, and then the knife doesn''t. |cs| Pohár se vznáší, nůž se vznáší, a pak už se nůž nevznáší.',
  'You lift one object of reasonable size, about what a person can carry, and move it slowly through the air while you keep your concentration. Lifting costs nothing.

For **1 Soul** you can throw it. A weapon hits as with the Fighter''s *Flying weapon*: a thrown weapon (4/12 m from where it floats), its dice + your Incantor level. Anything else hits as an improvised thrown weapon: d4 + your Incantor level. You roll the attack with your Incantor level.

Every throw is its own action and costs its own Soul. You can lift an object and throw it in the same action. Lifting or throwing two objects at once needs **Widespread**. |cs| Zvedneš jeden předmět rozumné velikosti, zhruba co unese člověk, a pomalu jím pohybuješ vzduchem, dokud se soustředíš. Zvednutí nic nestojí.

Za **1 Duši** ho můžeš vrhnout. Zbraň zasáhne jako s perkem Bojovníka *Letící zbraň*: jako vrhací zbraň (4/12 m od místa, kde se vznáší), její kostky + tvoje úroveň Zaříkávače. Cokoli jiného zasáhne jako improvizovaná vrhací zbraň: k4 + tvoje úroveň Zaříkávače. Útok házíš s úrovní Zaříkávače.

Každý vrh je samostatná akce a stojí vlastní Duši. Předmět můžeš zvednout a vrhnout v jedné akci. Zvednout nebo vrhnout dva předměty naráz vyžaduje manévr **Rozsáhle**.',
  'spell', null, null, '{verbal,somatic}', 'Sight |cs| Dohled', 'concentration'
);

insert into class_perks (class_id, perk_id, is_core, sort) values ('incantor', 'levitate', false, 20);

update perks set description =
  'You touch a willing living being, yourself included, and it can fly for the duration of the spell: 10 metres per turn, rising or sinking at will. The spell ends if the target is incapacitated or if you lose concentration. Objects are moved with the Incantor''s *Levitate*. |cs| Dotkneš se ochotné živé bytosti, i sebe, a ta může po dobu kouzla létat: 10 metrů za tah, libovolně stoupat i klesat. Kouzlo skončí, když je cíl neschopný, nebo když ztratíš soustředění. Předměty se přenášejí Zaříkávačovou *Levitací*.'
where id = 'fly';
