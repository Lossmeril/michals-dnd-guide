-- Audit fixes: saving throws are by skill, the Warrior knowledge row, weapons grant no manoeuvres.
update perks set description = replace(replace(description,
 'you make a Charisma saving throw at Danger Level 4',
 'you make a saving throw with a fitting Charisma skill (talking your way out, a bribe) at Danger Level 4'),
 'házíš si záchranný hod na Vliv s Ohrožením 4',
 'házíš si záchranný hod s vhodnou dovedností Vlivu (vymluvit se, uplatit) s Ohrožením 4')
where id = 'dead-wood-and-dead-flesh';
update rulebook_pages set content = replace(replace(content,
 '| Recalling war and soldiering | Warrior knowledge | Fighter | :soul |',
 '| Recalling war and soldiering | Warrior knowledge | Warrior | :soul |'),
 'a lot of perks or weapons grant some for free.',
 'a lot of perks grant some for free, and a shield gives a free Defense once per round.')
where slug in ('dice','manoeuvres');
