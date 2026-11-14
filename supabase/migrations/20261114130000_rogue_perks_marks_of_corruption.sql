-- Rogue perks from 5E's Rogue, Incantor's Marks of corruption, and Thieves' cant.

insert into perks (id, name, kind, flavour, description) values
('sneak-attack', 'Sneak attack |cs| Útok ze zálohy', 'perk',
 'Fights fair. Just not with you. |cs| Bojuje férově. Jen ne s tebou.',
 'When your attack would get a free **Precise** from the situation (the target is unaware of you, prone, blinded, restrained, …), or an ally stands within 1 m of the target, or nobody but the target is within 1 m of you, you may take a free **Mighty** instead. It''s still the action''s one manoeuvre. |cs| Když by tvůj útok dostal ze situace **Přesně** zdarma (cíl o tobě neví, leží, je oslepený, spoutaný, …), nebo do 1 m od cíle stojí tvůj spojenec, nebo do 1 m od tebe není nikdo kromě cíle, můžeš si místo toho vzít **Mocně** zdarma. Pořád je to jediný manévr akce.'),
('slip-away', 'Slip away |cs| Vytratit se', 'perk',
 'Was here a moment ago. |cs| Ještě před chvílí tu byl.',
 'You can dash, disengage or hide as a bonus action. |cs| Běh, odpoutání z boje nebo schování můžeš udělat jako bonusovou akci.'),
('stroke-of-luck', 'Stroke of luck |cs| Štěstí blbců', 'perk',
 'Born under a lucky star. Hasn''t fallen off it yet. |cs| Narodil se pod šťastnou hvězdou. Zatím z ní nespadl.',
 'Once a day you can turn a lost roll into a win, like an important NPC''s Fate. It comes back at the next sunrise. |cs| Jednou za den můžeš prohraný hod změnit ve výhru, jako důležité NPC Sudbou. Vrací se s dalším východem slunce.'),
('fast-hands', 'Fast hands |cs| Rychlé ruce', 'perk',
 'Shook your hand. Kept your ring. |cs| Podal ti ruku. Prsten si nechal.',
 'When your **Cunning** lands in close combat, instead of knocking the target prone, grappling or pushing it, you can take one item from its hand or belt: a weapon, a key, a purse, a vial. |cs| Když v boji zblízka uspěješ **Lstivě**, můžeš cíli místo povalení, chvatu nebo odstrčení vzít jednu věc z ruky nebo od pasu: zbraň, klíč, měšec, lahvičku.'),
('uncanny-dodge', 'Uncanny dodge |cs| Neuvěřitelný úhyb', 'perk',
 'Never where the blade lands. |cs| Nikdy tam, kam čepel dopadne.',
 'Once a round, when you exhaust Body to avert a hit from an attacker you can see, it costs 2 less (minimum 1). |cs| Jednou za kolo, když vyčerpáváš Tělo, abys odvrátil zásah od útočníka, kterého vidíš, stojí to o 2 méně (nejméně 1).'),
('evasion', 'Evasion |cs| Únik', 'perk',
 'The fireball was very impressive. He watched it from behind the well. |cs| Ohnivá koule byla velkolepá. Díval se na ni zpoza studny.',
 'When you lose a roll against an area (a Fireball, a blast, a collapsing ceiling), averting it costs half the usual (the Danger Level, or a hazard''s strength), rounded up. |cs| Když prohraješ hod proti plošnému účinku (Ohnivá koule, výbuch, padající strop), odvrácení stojí polovinu obvyklého (Ohrožení, nebo sílu nástrahy), zaokrouhleno nahoru.'),
('thiefs-reflexes', 'Thief''s reflexes |cs| Zlodějské reflexy', 'perk',
 'Out the window before the guards got through the door. |cs| Byl z okna dřív, než stráže prošly dveřmi.',
 'In the first round of a fight you take two turns: one on your initiative and a second at the end of the round. Not if you were surprised. |cs| V prvním kole boje máš dva tahy: jeden na svou iniciativu a druhý na konci kola. Ne, pokud tě překvapili.'),
('assassinate', 'Assassinate |cs| Vražda', 'perk',
 'The first move is the only one that matters. |cs| Záleží jen na prvním tahu.',
 'Against a target that hasn''t acted yet in this fight, or that is unaware of you, your attack gets a free **Very mighty**. It''s the action''s one manoeuvre. |cs| Proti cíli, který v tomto boji ještě nejednal, nebo o tobě neví, dostane tvůj útok **Velmi mocně** zdarma. Je to jediný manévr akce.'),
('dirty-tricks', 'Dirty tricks |cs| Špinavé triky', 'perk',
 'Sand in the eyes is a fighting style. |cs| Písek do očí je taky bojový styl.',
 'When your **Cunning** lands, instead of prone, grapple or push you can blind the target (sand, a cloak over the head) or make it **Imprecise** on its attacks (a kick to the knee, a thumb in the eye), each until the end of its next turn. |cs| Když uspěješ **Lstivě**, můžeš cíl místo povalení, chvatu nebo odstrčení oslepit (písek, plášť přes hlavu), nebo ho udělat **Nepřesným** v útocích (kopanec do kolena, palec do oka), obojí do konce jeho dalšího tahu.'),
('hit-and-run', 'Hit and run |cs| Bodni a zmiz', 'perk',
 'Stab, step, gone. |cs| Bod, krok, pryč.',
 'Whoever you attacked in close combat this turn gets no free attack when you move away from them. |cs| Kdo od tebe v tomto tahu dostal útok zblízka, nemá volný útok, když od něj odejdeš.'),
('elusive', 'Elusive |cs| Nepolapitelný', 'perk',
 'You can''t hit what you can''t pin down. |cs| Netrefíš, co nedokážeš přišpendlit.',
 'Nobody gets **Precise** against you, from a manoeuvre, a perk or a situation, unless you''re incapacitated. |cs| Nikdo proti tobě nemá **Přesně**, z manévru, perku ani situace, ledaže jsi neschopný jednat.'),
('quick-coat', 'Quick coat |cs| Rychlý nátěr', 'perk',
 'Wipe, sheathe, smile. |cs| Otřít, zasunout, usmát se.',
 'You can coat a blade, or 3 arrows or bolts, with a contact poison as a bonus action. A coated blade keeps its poison for 3 hits instead of one. |cs| Čepel nebo 3 šípy či šipky můžeš natřít kontaktním jedem jako bonusovou akci. Natřená čepel drží jed 3 zásahy místo jednoho.'),
('potent', 'Potent |cs| Prudký jed', 'perk',
 'What doesn''t kill you hasn''t met her yet. |cs| Co tě nezabije, s ní se ještě nesetkalo.',
 'Your poisons ignore resistance to poison. Immunity still stops them. |cs| Tvé jedy ignorují odolnost vůči jedu. Imunita je pořád zastaví.'),
('marks-of-corruption', 'Marks of corruption |cs| Znamení poskvrny', 'perk',
 'The mirror stopped agreeing with her. |cs| Zrcadlo s ní přestalo souhlasit.',
 'You let magic into your body to cast more easily, and it marks you where everyone can see: glowing tattoos and signs, a shadow of the wrong shape, skin, lips, hair or eyes of unnatural colours, a reflection that doesn''t match, plants wilting around you.

Take a **level-2 Charisma Scar** (a blank payment: no temporary points). While it lasts, pick one:

- **One spell** of any of your classes with an activation price in Body, Soul or Charisma is free to cast. You choose it when you take the Scar and can''t change it. Material is still spent.
- **One corrupted or wild magic spell** (still to be written) can be taken as a perk. It works only while the Scar lasts.

You can take the Scar more than once, each with its own effect. It heals by the usual rules, but its effect ends as soon as any part of it is healed. If it overflows your Charisma, you''re dying, as with any Scar. |cs| Pouštíš magii do svého těla, abys sesílal snáz, a ono tě to poznamená, aby to viděl každý: zářící tetování a znamení, stín špatného tvaru, kůže, rty, vlasy nebo oči nepřirozených barev, odraz, který nesedí, rostliny kolem tebe vadnou.

Vezmi si **Jizvu Vlivu 2. úrovně** (holá platba: žádné dočasné body). Dokud trvá, vyber si jedno:

- **Jedno kouzlo** kteréhokoli tvého povolání s aktivační cenou v Těle, Duši nebo Vlivu sesíláš zdarma. Vybíráš ho, když si Jizvu bereš, a nemůžeš ho změnit. Materiál se pořád spotřebuje.
- **Jedno kouzlo zkažené nebo divoké magie** (zatím nenapsané) si můžeš vzít jako perk. Funguje jen, dokud Jizva trvá.

Jizvu si můžeš vzít víckrát, každou s vlastním účinkem. Léčí se podle obvyklých pravidel, ale její účinek končí, jakmile se vyléčí byť jen část. Pokud přeteče tvůj Vliv, umíráš, jako u každé Jizvy.');

insert into class_perks (class_id, perk_id, sort) values
('rogue', 'sneak-attack', 60), ('rogue', 'slip-away', 61), ('rogue', 'stroke-of-luck', 62),
('rogue', 'fast-hands', 63), ('rogue', 'uncanny-dodge', 64), ('rogue', 'evasion', 65), ('rogue', 'thiefs-reflexes', 66),
('rogue', 'assassinate', 67), ('rogue', 'dirty-tricks', 68), ('rogue', 'hit-and-run', 69), ('rogue', 'elusive', 70),
('rogue', 'quick-coat', 71), ('rogue', 'potent', 72),
('incantor', 'marks-of-corruption', 85);

-- Aspect gates
insert into perk_requirements (perk_id, kind, required_perk_id) values
('fast-hands', 'has_aspect', 'thief'), ('uncanny-dodge', 'has_aspect', 'thief'),
('evasion', 'has_aspect', 'thief'), ('thiefs-reflexes', 'has_aspect', 'thief'),
('assassinate', 'has_aspect', 'assassin'), ('dirty-tricks', 'has_aspect', 'assassin'),
('hit-and-run', 'has_aspect', 'assassin'), ('elusive', 'has_aspect', 'assassin'),
('quick-coat', 'has_aspect', 'poisoner'), ('potent', 'has_aspect', 'poisoner');

-- Rogue 4 gates
with r as (
  insert into perk_requirements (perk_id, kind, level)
  values ('stroke-of-luck', 'class_level', 4), ('thiefs-reflexes', 'class_level', 4), ('elusive', 'class_level', 4)
  returning id
)
insert into perk_requirement_classes (requirement_id, class_id) select id, 'rogue' from r;

insert into languages (id, name, description, sort, sample) values
('thieves-cant', 'Thieves'' cant |cs| Zlodějská hantýrka',
 'The underworld''s speech: slang, double meanings and chalk marks on doorposts. Criminals, fences and beggars use it; nobody admits to it. |cs| Řeč podsvětí: slang, dvojsmysly a křídové značky na veřejích. Používají ji zloději, překupníci i žebráci; nikdo se k ní nehlásí.',
 (select coalesce(max(sort), 0) + 1 from languages),
 '"The goose sleeps at the miller''s till the bell goes quiet."
— "The job''s at the miller''s house, after the night bell." |cs| „Husa spí u mlynáře, dokud zvon nezmlkne.“
— „Akce je u mlynáře, po nočním zvonu.“');
