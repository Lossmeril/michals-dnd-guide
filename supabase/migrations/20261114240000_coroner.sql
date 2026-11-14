-- Rogue Poisoner: Coroner, a forensic perk that goes past a plain Medic check.

insert into perks (id, name, kind, flavour, description) values
('coroner', 'Coroner |cs| Ohledač', 'perk',
 'He didn''t fall down the stairs. Not first, anyway. |cs| Ze schodů nespadl. Aspoň ne napoprvé.',
 'Anyone can examine a body with *Healing the human body*: a successful roll tells roughly whether it was a wound, sickness or poison. You need **no roll**, and you learn more:

- **The exact cause:** which poison and its strength (Hard to detect ones too), or which weapon.
- **When and how:** at which sunrise or sunset the poison was taken, and whether it was swallowed, through a wound or breathed in.
- **What was staged:** a body that was moved, a wound made after death, a "suicide" that wasn''t.
- **The same hand:** whether two victims died of the same poison or the same killer''s habits. |cs| Ohledat tělo dokáže každý s *Léčením lidského těla*: úspěšný hod zhruba řekne, jestli šlo o zranění, nemoc, nebo jed. Ty **nehážeš** a zjistíš víc:

- **Přesnou příčinu:** jaký jed a jaké síly (i těžko odhalitelný), nebo jaká zbraň.
- **Kdy a jak:** při kterém východu či západu slunce byl jed požit a jestli byl spolknut, vnikl ranou, nebo byl vdechnut.
- **Co bylo narafičeno:** tělo, se kterým se hýbalo, rána způsobená po smrti, „sebevražda“, která jí nebyla.
- **Tutéž ruku:** jestli dvě oběti zemřely na stejný jed, nebo podle zvyků téhož vraha.');

insert into class_perks (class_id, perk_id, sort) values ('rogue', 'coroner', 77);
insert into perk_requirements (perk_id, kind, required_perk_id) values ('coroner', 'has_aspect', 'poisoner');

-- Pricey for that much information: 3 Soul per body.
update perks set cost_amount = 3, cost_resource = 'soul', cost_unit = 'per body' where id = 'coroner';
