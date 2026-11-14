-- Warrior Hire-Sword: Whirlwind, the Witcher's perk with a finesse weapon instead of a sword.

insert into perks (id, name, kind, flavour, description, cost_amount, cost_resource) values
('warrior-whirlwind', 'Whirlwind |cs| Vír', 'perk',
 'Steel in every direction, and you in the middle of it. |cs| Ocel na všechny strany a ty uprostřed.',
 'As your action, with a **finesse weapon** in hand, you start a pirouette. When you start, everyone within 1 m of you, friend or foe, makes a defense roll or takes your weapon''s damage. Until your next turn, anyone who moves into or through a square next to you makes a defense roll or takes the damage too, and you have a free **Defense** against every close combat attack at you.

The whirlwind ends at the start of your next turn, or as soon as you take a Scar. A creature immune to your attack makes no defense roll, and your free Defense doesn''t work against it. |cs| Svou akcí, se **zbraní s vlastností finesa** v ruce, se roztočíš v piruetě. Když začneš, každý do 1 m od tebe, přítel i nepřítel, si hodí obranný hod, jinak utrží zranění tvou zbraní. Do tvého dalšího tahu si obranný hod hází i každý, kdo vstoupí na pole vedle tebe nebo jím projde, a proti každému útoku na blízko máš zdarma **Obranu**.

Vír skončí na začátku tvého dalšího tahu, nebo jakmile utržíš Jizvu. Tvor imunní vůči tvému útoku si obranný hod nehází a tvá Obrana zdarma proti němu nefunguje.',
 2, 'body');

insert into class_perks (class_id, perk_id, sort) values ('warrior', 'warrior-whirlwind', 71);
insert into perk_requirements (perk_id, kind, required_perk_id) values ('warrior-whirlwind', 'has_aspect', 'hire-sword');
