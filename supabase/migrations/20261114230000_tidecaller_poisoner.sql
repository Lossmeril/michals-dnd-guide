-- Druid Tidecaller: Fog bank, Scalding steam, Rain-caller. Rogue Poisoner: Mithridate, Poisoned well.

insert into perks (id, name, kind, flavour, description, cost_amount, cost_resource, cost_unit, components, damage, damage_types, range, area, duration) values
('fog-bank', 'Fog bank |cs| Mlžná stěna', 'spell',
 'The river breathes out, and the world ends two steps away. |cs| Řeka vydechne a svět končí dva kroky před tebou.',
 'Fog rolls over a **farmstead**. Inside it, nothing can be seen beyond 2 m, and navigating is **disadvantaged**. It lasts as long as you concentrate. |cs| Nad **statkem** se převalí mlha. Uvnitř není nic vidět dál než na 2 m a navigace je **v nevýhodě**. Trvá, dokud se soustředíš.',
 1, 'soul', null, '{somatic}', null, null, 'Sight', 'A farmstead (about 10 m across)', 'concentration'),
('scalding-steam', 'Scalding steam |cs| Opařující pára', 'spell',
 'The puddle was the least of his worries. |cs| Louže byla to nejmenší, čeho se měl bát.',
 'Water within 2 m of a target flashes into scalding steam. The target makes a defense roll: an NPC who loses takes the damage, a player character who loses averts as usual or takes a Scar from the threat die. It needs water there: a puddle, a barrel, wet clothes. |cs| Voda do 2 m od cíle se promění v opařující páru. Cíl si hodí obranný hod: NPC, které prohraje, utrží zranění, hráčská postava, která prohraje, odvrací jako obvykle, nebo utrží Jizvu podle kostky hrozby. Musí tam být voda: louže, sud, mokré šaty.',
 1, 'soul', null, '{somatic}', '2d6', '{fire}', 'Sight', null, 'instantaneous'),
('rain-caller', 'Rain-caller |cs| Přivolávač deště', 'spell',
 'The old songs still work. Slowly. |cs| Staré písně pořád fungují. Pomalu.',
 'With a ritual at sunset, you decide **tomorrow''s weather** over a region: either **rain** (snow in winter) or **fair**. Nobody rolls for it. |cs| Rituálem při západu slunce určíš **zítřejší počasí** nad krajem: buď **déšť** (v zimě sníh), nebo **jasno**. Nikdo na něj nehází.',
 3, 'material', null, '{verbal,material}', null, null, 'Self', 'A region', 'instantaneous'),
('mithridate', 'Mithridate |cs| Mithridát', 'perk',
 'A little every day, like the old king. |cs| Každý den trochu, jako starý král.',
 'Years of small doses have hardened you. You have **resistance to poison**. |cs| Roky malých dávek tě zocelily. Máš **odolnost vůči jedu**.',
 null, null, null, null, null, null, null, null, null),
('poisoned-well', 'Poisoned well |cs| Otrávená studna', 'perk',
 'One dose. One barrel. One very quiet feast. |cs| Jedna dávka. Jeden sud. Jedna velmi tichá hostina.',
 'One dose of your poison can taint a **whole pot or barrel**: everyone who eats or drinks from it is exposed. Normally one dose is one victim. |cs| Jedna dávka tvého jedu dokáže otrávit **celý hrnec nebo sud**: každý, kdo z něj jí nebo pije, je mu vystaven. Jinak platí jedna dávka, jedna oběť.',
 1, 'material', 'per unit of strength', null, null, null, null, null, null);

insert into class_perks (class_id, perk_id, sort) values
('druid', 'fog-bank', 60), ('druid', 'scalding-steam', 61), ('druid', 'rain-caller', 62),
('rogue', 'mithridate', 75), ('rogue', 'poisoned-well', 76);

insert into perk_requirements (perk_id, kind, required_perk_id) values
('fog-bank', 'has_aspect', 'tidecaller'), ('scalding-steam', 'has_aspect', 'tidecaller'),
('rain-caller', 'has_aspect', 'tidecaller'),
('mithridate', 'has_aspect', 'poisoner'), ('poisoned-well', 'has_aspect', 'poisoner');

with r as (
  insert into perk_requirements (perk_id, kind, level) values ('rain-caller', 'class_level', 3) returning id
)
insert into perk_requirement_classes (requirement_id, class_id) select id, 'druid' from r;
