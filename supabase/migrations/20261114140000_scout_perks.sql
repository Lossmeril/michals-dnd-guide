-- Scout perks: Listener and Mimic (Ghost); Turncoat, Unerring eye and Closed book (Spymaster).

insert into perks (id, name, kind, flavour, description, cost_amount, cost_resource) values
('listener', 'Listener |cs| Naslouchač', 'perk',
 'Heard every word. Through the wall. |cs| Slyšel každé slovo. Přes zeď.',
 'You can read lips, which nobody else can, as far as you can see faces. You also hear through a door or a thin wall as if you were in the room. |cs| Umíš odezírat ze rtů, což nikdo jiný neumí, tak daleko, kam vidíš na tváře. Taky slyšíš přes dveře nebo tenkou zeď, jako bys byl v místnosti.',
 null, null),
('mimic', 'Mimic |cs| Imitátor', 'perk',
 'His mother would have let him in. She did. |cs| Jeho matka by ho pustila dál. Pustila.',
 'Anyone can try to imitate a voice, but every exchange with a listener who knows the original is a challenge. After a minute of listening, you can copy a voice, an accent or a dialect so well that it **passes by default**: nobody tells the difference unless something else gives you away. It has to be within a reasonable range for your voice: a grown man won''t pass for a small child. |cs| Napodobit hlas může zkusit kdokoli, ale každá výměna s posluchačem, který zná originál, je střet. Po minutě poslouchání umíš napodobit hlas, přízvuk nebo nářečí tak dobře, že **projde automaticky**: rozdíl nikdo nepozná, pokud tě neprozradí něco jiného. Musí to být v rozumném rozsahu tvého hlasu: dospělý muž za malé dítě neprojde.',
 null, null),
('turncoat', 'Turncoat |cs| Převlékač kabátů', 'perk',
 'Still writes to his old master. Every word yours. |cs| Pořád píše starému pánovi. Každé slovo tvoje.',
 'When you win an Underground influence challenge against a captured spy or an enemy''s informant, they become your companion at Bond 1. They keep reporting to their old master whatever you feed them. |cs| Když vyhraješ střet Vlivu v podsvětí proti zajatému špehovi nebo nepřítelovu informátorovi, stane se tvým pomocníkem s Poutem 1. Svému starému pánovi dál hlásí, co mu podstrčíš.',
 1, 'charisma'),
('unerring-eye', 'Unerring eye |cs| Neomylné oko', 'perk',
 'The duchess has two shadows. One of them is wrong. |cs| Vévodkyně má dva stíny. Jeden z nich je špatně.',
 'You sense whether there''s an illusion, a magical disguise or a shapechanger within 10 m of you, and where. |cs| Vycítíš, jestli je do 10 m od tebe iluze, magický převlek nebo měňavec, a kde.',
 1, 'soul'),
('closed-book', 'Closed book |cs| Zavřená kniha', 'perk',
 'Even his lies have alibis. |cs| I jeho lži mají alibi.',
 'Mind magic has to win a challenge against you to read your thoughts or feelings, and no magic can tell when you''re lying. |cs| Magie mysli musí vyhrát střet proti tobě, aby přečetla tvé myšlenky nebo city, a žádná magie nepozná, že lžeš.',
 null, null);

insert into class_perks (class_id, perk_id, sort) values
('scout', 'listener', 60), ('scout', 'mimic', 61),
('scout', 'turncoat', 62), ('scout', 'unerring-eye', 63), ('scout', 'closed-book', 64);

insert into perk_requirements (perk_id, kind, required_perk_id) values
('listener', 'has_aspect', 'ghost'), ('mimic', 'has_aspect', 'ghost'),
('turncoat', 'has_aspect', 'spymaster'), ('unerring-eye', 'has_aspect', 'spymaster'),
('closed-book', 'has_aspect', 'spymaster');

with r as (
  insert into perk_requirements (perk_id, kind, level) values ('closed-book', 'class_level', 4) returning id
)
insert into perk_requirement_classes (requirement_id, class_id) select id, 'scout' from r;
