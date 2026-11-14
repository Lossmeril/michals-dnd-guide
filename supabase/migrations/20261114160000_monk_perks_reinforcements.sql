-- Warrior Monk perks (unarmed fighting, from 5E's Monk) and the first Warlord perk, Reinforcements.

insert into perks (id, name, kind, flavour, description) values
('empty-hand', 'Empty hand |cs| Prázdná ruka', 'perk',
 'Left his sword at the monastery. Didn''t miss it. |cs| Meč nechal v klášteře. Nechybí mu.',
 'Your unarmed strikes against humans and beasts roll with your **Warrior level** instead of Fighter''s, and deal **d6** at Warrior 1–2, **d8** at Warrior 3–4 and **d10** at Warrior 5, plus your Warrior level. It doesn''t stack with *Rock fist*: use whichever is better. |cs| Tvé údery beze zbraně proti lidem a zvířatům se hází s tvou **úrovní Válečníka** místo Bojovníka a zraňují za **k6** na Válečníkovi 1–2, **k8** na 3–4 a **k10** na 5, plus úroveň Válečníka. Nesčítá se s *Kamennou pěstí*: použij lepší.'),
('flurry-of-blows', 'Flurry of blows |cs| Krupobití ran', 'perk',
 'The second one you didn''t see. |cs| Tu druhou jsi neviděl.',
 'After an unarmed attack, you can use a bonus action for a second one. |cs| Po útoku beze zbraně můžeš bonusovou akcí udeřit podruhé.'),
('step-of-the-wind', 'Step of the wind |cs| Krok větru', 'perk',
 'Over the wall before the shout. |cs| Přes zeď dřív, než se ozval křik.',
 'You can dash or disengage as a bonus action, and you jump twice as far. |cs| Běh nebo odpoutání z boje můžeš udělat jako bonusovou akci a skočíš dvakrát dál.'),
('arrow-catcher', 'Arrow catcher |cs| Lapač šípů', 'perk',
 'Thanks. He''ll give it back. |cs| Díky. On ho vrátí.',
 'When you exhaust Body to avert an arrow, a bolt or a thrown weapon, it costs 1 less (minimum 1) and you catch it. You can throw it back as a bonus action. |cs| Když vyčerpáváš Tělo, abys odvrátil šíp, šipku nebo vrženou zbraň, stojí to o 1 méně (nejméně 1) a chytíš ji. Bonusovou akcí ji můžeš hodit zpátky.'),
('slow-fall', 'Slow fall |cs| Pomalý pád', 'perk',
 'Took the stairs. The quick way. |cs| Šel po schodech. Tou rychlou cestou.',
 'With no armour on, a fall''s strength drops by your Warrior level. At 0 or less you land on your feet, unhurt. |cs| Bez zbroje klesá síla pádu o tvou úroveň Válečníka. Na 0 nebo méně dopadneš na nohy bez újmy.'),
('inner-breath', 'Inner breath |cs| Vnitřní dech', 'perk',
 'Breathe in. Breathe out. Get up. |cs| Nádech. Výdech. Vstávej.',
 'Once a day, ten minutes of slow breathing restores 1 exhausted Body point. |cs| Jednou za den ti deset minut pomalého dýchání vrátí 1 vyčerpaný bod Těla.'),
('drunken-master', 'Drunken master |cs| Opilý mistr', 'perk',
 'Swaying since noon. Still standing. |cs| Motá se od poledne. Pořád stojí.',
 'If you''ve had a drink within the last hour: when you win a defense roll in close combat, the attacker stumbles into someone else within 1 m of you, who takes the hit as an undefended one. |cs| Pokud jsi poslední hodinu pil: když vyhraješ obranný hod v boji zblízka, útočník zavrávorá do někoho jiného do 1 m od tebe a ten dostane zásah jako neobráněný.'),
('stunning-strike', 'Stunning strike |cs| Omračující úder', 'perk',
 'One finger. Right there. |cs| Jeden prst. Přesně sem.',
 'When an unarmed **Cunning** lands, instead of prone, grapple or push, the target can be **Stunned** until the start of your next turn. An important NPC can spend Fate to shake it off. |cs| Když uspěješ **Lstivě** beze zbraně, můžeš cíl místo povalení, chvatu nebo odstrčení **omráčit** do začátku tvého dalšího tahu. Důležité NPC se ho může zbavit Sudbou.'),
('still-mind', 'Still mind |cs| Klidná mysl', 'perk',
 'Fear knocked. Nobody was home. |cs| Strach zaklepal. Nikdo nebyl doma.',
 'As an action, you end being Charmed or Frightened. |cs| Akcí ukončíš, že jsi okouzlený nebo vystrašený.'),
('light-as-a-leaf', 'Light as a leaf |cs| Lehký jako list', 'perk',
 'The pond didn''t notice him. |cs| Rybník si ho ani nevšiml.',
 'With no armour on, your speed is 1 m higher, and during your move you can run up a wall or across water. You fall if you end the move there. |cs| Bez zbroje máš rychlost o 1 m vyšší a během pohybu můžeš vyběhnout po zdi nebo přeběhnout vodu. Pokud tam pohyb skončíš, spadneš.'),
('reinforcements', 'Reinforcements |cs| Posily', 'perk',
 'Late? No. Exactly on time. |cs| Pozdě? Ne. Přesně načas.',
 'When your army arrives at a battle already under way, you can spend your action for two rounds on a rallying speech in front of it. Your units can move into position meanwhile, but not attack. Afterwards each of your units gets a free **Mighty** on its first round of actual combat: the first round it attacks or is attacked. |cs| Když tvé vojsko dorazí do už probíhající bitvy, můžeš dvě kola věnovat svou akci burcující řeči před ním. Tvé jednotky se mezitím můžou přesouvat, ale ne útočit. Potom každá tvá jednotka dostane **Mocně** zdarma ve svém prvním kole skutečného boje: v prvním kole, kdy útočí nebo je napadena.');

insert into class_perks (class_id, perk_id, sort) values
('warrior', 'empty-hand', 60), ('warrior', 'flurry-of-blows', 61), ('warrior', 'step-of-the-wind', 62),
('warrior', 'arrow-catcher', 63), ('warrior', 'slow-fall', 64), ('warrior', 'inner-breath', 65),
('warrior', 'drunken-master', 66), ('warrior', 'stunning-strike', 67), ('warrior', 'still-mind', 68),
('warrior', 'light-as-a-leaf', 69),
('warlord', 'reinforcements', 10);

insert into perk_requirements (perk_id, kind, required_perk_id)
select id, 'has_aspect', 'monk' from (values ('empty-hand'), ('flurry-of-blows'), ('step-of-the-wind'),
  ('arrow-catcher'), ('slow-fall'), ('inner-breath'), ('drunken-master'), ('stunning-strike'),
  ('still-mind'), ('light-as-a-leaf')) v(id);

with r as (
  insert into perk_requirements (perk_id, kind, level)
  values ('stunning-strike', 'class_level', 3), ('still-mind', 'class_level', 3), ('light-as-a-leaf', 'class_level', 4)
  returning id
)
insert into perk_requirement_classes (requirement_id, class_id) select id, 'warrior' from r;
