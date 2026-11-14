-- Filling the thin aspects: Witcher (Berserk, Exorcist, Hexer; Michal's versions), Warlock Battlemage,
-- Ranger Beastmaster and Shaman Herbalist.

insert into perks (id, name, kind, flavour, description, cost_amount, cost_resource, cost_unit, components, damage, damage_types, range, area, duration) values
-- Witcher, Berserk
('whirlwind', 'Whirlwind |cs| Vír', 'perk',
 'Steel in every direction, and you in the middle of it. |cs| Ocel na všechny strany a ty uprostřed.',
 'As your action, with a **sword** in hand, you start a pirouette. When you start, everyone within 1 m of you, friend or foe, makes a defense roll or takes your weapon''s damage. Until your next turn, anyone who moves into or through a square next to you makes a defense roll or takes the damage too, and you have a free **Defense** against every close combat attack at you.

The whirlwind ends at the start of your next turn, or as soon as you take a Scar. A creature immune to your attack makes no defense roll, and your free Defense doesn''t work against it. |cs| Svou akcí, s **mečem** v ruce, se roztočíš v piruetě. Když začneš, každý do 1 m od tebe, přítel i nepřítel, si hodí obranný hod, jinak utrží zranění tvou zbraní. Do tvého dalšího tahu si obranný hod hází i každý, kdo vstoupí na pole vedle tebe nebo jím projde, a proti každému útoku na blízko máš zdarma **Obranu**.

Vír skončí na začátku tvého dalšího tahu, nebo jakmile utržíš Jizvu. Tvor imunní vůči tvému útoku si obranný hod nehází a tvá Obrana zdarma proti němu nefunguje.',
 2, 'body', null, null, null, null, null, null, null),
('blood-rush', 'Blood rush |cs| Krvavé opojení', 'perk',
 'Now it''s personal. |cs| Teď je to osobní.',
 'When a monster, fiend or undead gives you a Body Scar, you have a free **Mighty** in close combat against that creature, and only that one, until the end of the conflict. It counts as the action''s one manoeuvre. |cs| Když ti netvor, běs nebo nemrtvý způsobí Jizvu Těla, máš až do konce konfliktu proti tomuto tvorovi, a jen proti němu, v boji na blízko zdarma manévr **Mocně**. Počítá se jako jediný manévr akce.',
 null, null, null, null, null, null, null, null, null),
('mutagen-collector', 'Mutagen collector |cs| Sběrač mutagenů', 'perk',
 'Nothing goes to waste. Not even the gall bladder. |cs| Nic nepřijde nazmar. Ani žlučník ne.',
 'When you take a trophy from a monster, you also get **1d4 Material** (proper Material: glands, blood, marrow), on top of the main trophy. The main trophy is what you came for: a griffin''s beak for an alchemist, or its head to hang over the tavern door. |cs| Když z netvora získáš trofej, dostaneš navíc **1d4 Materiálu** (plnohodnotného: žlázy, krev, morek), vedle hlavní trofeje. Hlavní trofej je to, kvůli čemu jsi přišel: gryfí zobák pro alchymistu, nebo jeho hlava nad dveře hospody.',
 null, null, null, null, null, null, null, null, null),
-- Witcher, Exorcist
('witcher-oils', 'Witcher oils |cs| Vědmácké oleje', 'perk',
 'Rub it on the blade, not on your fingers. |cs| Natírej to na čepel, ne na prsty.',
 'You can make **contact poisons** like a Rogue''s, rolled with *Witcher knowledge*, that work only on **monsters, fiends and undead**, including those with no blood to carry them (a skeleton, a ghoul): any hit with the coated weapon gets them in. They follow the usual substance rules: strength, Material, damage, timing and properties. They do nothing to humans and animals. |cs| Umíš vyrábět **kontaktní jedy** jako Lupič, hází se na *Vědmácké znalosti*, které působí jen na **netvory, běsy a nemrtvé**, i na ty, kteří nemají krev, jež by jed roznesla (kostlivec, ghúl): stačí jakýkoli zásah natřenou zbraní. Řídí se obvyklými pravidly pro látky: síla, Materiál, zranění, nástup i vlastnosti. Na lidi a zvířata nepůsobí.',
 null, null, null, null, null, null, null, null, null),
('ghostly-fireworks', 'Ghostly fireworks |cs| Přízračný ohňostroj', 'perk',
 'Silver dust, a pinch of grave salt and a very short fuse. |cs| Stříbrný prach, špetka hřbitovní soli a hodně krátká zápalná šňůra.',
 'You can make a **silver petard**, an explosive like an Alchemist''s, rolled with *Witcher knowledge*. It damages only **incorporeal beings** (ghosts, wraiths, noonwraiths); everyone and everything else just gets a face full of glitter. Its strength, Material, reach and how it falls off with distance follow the substance rules for explosives. |cs| Umíš vyrobit **stříbrnou petardu**, výbušninu jako Alchymistovu, hází se na *Vědmácké znalosti*. Zraňuje jen **nehmotné bytosti** (duchy, přízraky, polednice); všichni ostatní dostanou jen hrst třpytek do obličeje. Síla, Materiál, dosah i slábnutí se vzdáleností se řídí pravidly látek pro výbušniny.',
 null, null, null, null, null, null, null, null, null),
('cursebreaker', 'Cursebreaker |cs| Rušitel kleteb', 'perk',
 'Sour milk and a lame goat. I''ve seen worse. |cs| Kyselé mléko a kulhavá koza. Viděl jsem horší.',
 'With a touch, you lift a **simple curse or blessing**: an Incantor''s Blessings and Curses, a hedge witch''s hex, the evil eye. You don''t need to know what it is or match its resources. A **complex curse** (a ritual, a perk, a curse with conditions to end it) can''t be broken this way, but the DM gives you **one lead** for the investigation: where it came from, what kind of magic it is, or what it''s tied to. |cs| Dotykem zrušíš **jednoduchou kletbu nebo požehnání**: Zaříkávačovo Požehnání a prokletí, kořenářčino zaříkání, uhranutí. Nemusíš vědět, co to je, ani do toho vložit stejné zdroje. **Složitou kletbu** (rituál, perk, kletbu s podmínkou zrušení) takto zlomit nejde, ale PJ ti dá **jednu stopu** pro pátrání: odkud přišla, jaký je to druh magie, nebo na co je vázaná.',
 1, 'soul', null, null, null, null, null, null, null),
('dagaz-sign', 'Dagaz sign |cs| Znamení Dagaz', 'spell',
 'Back where you came from. |cs| Zpátky, odkud jsi přišel.',
 'A witcher sign that banishes a **lesser fiend** (an imp, a domovoi, a familiar, a wisp; not a named demon, a place guardian or a god) or a **creature of the spirit world** back to its own realm. The target makes a defense roll; an important one can spend Fate as usual. Like any sign, it needs magic mode. |cs| Vědmácké znamení, které vyžene **nižšího běsa** (šotka, hospodáříčka, familiára, bludičku; ne démona se jménem, strážce místa ani boha) nebo **tvora ze světa duchů** zpět do jeho říše. Cíl si hodí obranný hod; důležitý může jako obvykle utratit Sudbu. Jako každé znamení potřebuje magický režim.',
 2, 'soul', null, '{somatic}', null, null, 'Sight', null, 'instantaneous'),
-- Witcher, Hexer
('eihwaz-sign', 'Eihwaz sign |cs| Znamení Eihwaz', 'spell',
 'Patience, stones and a good hiding spot. |cs| Trpělivost, kameny a dobrá skrýš.',
 'You carve runestones and lay them out on the ground as a sigil: a **trap** for the supernatural. It takes time, so it''s not for a fight already under way (1 Material a round in a hurry), and the carving needs magic mode.

It''s a hazard. **Reach:** the first monster, fiend or undead to step into it. **Pool:** Body. **Strength:** the Material you put in (no higher than your Soul pool). **Effect:** **Restrained** for as many rounds as its strength. **Giveaway:** the runestones, if you look at the ground. The creature resists with a defense roll. The trap stays set until something triggers it. |cs| Vyřežeš runové kameny a rozložíš je na zemi do obrazce: **past** na nadpřirozené. Chce to čas, takže se nehodí do boje, který už běží (ve spěchu 1 Materiál za kolo), a vyřezávání potřebuje magický režim.

Je to nástraha. **Dosah:** první netvor, běs nebo nemrtvý, který do ní vstoupí. **Zásoba:** Tělo. **Síla:** Materiál, který do ní vložíš (nejvýš tvá zásoba Duše). **Účinek:** **Spoutaný** na tolik kol, kolik je její síla. **Prozrazení:** runové kameny, když se člověk dívá pod nohy. Tvor se brání obranným hodem. Past zůstane nastražená, dokud ji něco nespustí.',
 1, 'material', 'per unit of strength', '{material}', null, null, 'The area within the sigil', null, null),
-- Warlock, Battlemage
('flame-blade', 'Flame blade |cs| Plamenná čepel', 'spell',
 'It''s still a sword. It''s just angrier. |cs| Pořád je to meč. Jen naštvanější.',
 'Your weapon bursts into flame until the end of combat. Its hits deal **+1d6 fire** damage to NPCs, and it lights anything that burns: thatch, a cloak, an oiled rag. You don''t need to concentrate. |cs| Tvá zbraň vzplane až do konce boje. Její zásahy způsobí NPC **+1k6 zranění ohněm** a zapálí cokoli, co hoří: doškovou střechu, plášť, naolejovaný hadr. Nemusíš se soustředit.',
 1, 'soul', null, '{verbal,somatic}', '1d6', '{fire}', 'Self', null, 'combat'),
('gale-step', 'Gale step |cs| Krok vichru', 'spell',
 'One moment here, the next over there, with your hat somewhere in between. |cs| Chvíli tady, chvíli tamhle a klobouk někde mezi.',
 'As a **bonus action**, a gust of wind carries you up to 6 m in any direction, over gaps and up onto a wall, if you can stand there. Nobody gets a free attack as you leave. |cs| Jako **bonusová akce** tě poryv větru přenese až 6 m libovolným směrem, přes propast i nahoru na hradbu, pokud tam jde stát. Když odcházíš, nikdo nedostane volný útok.',
 1, 'soul', null, '{somatic}', null, null, 'Self', null, 'instantaneous'),
('spellblade', 'Spellblade |cs| Čarovná čepel', 'perk',
 'Fire first, steel second. |cs| Nejdřív oheň, potom ocel.',
 'When you cast a spell as your action, you can make **one weapon attack** as a bonus action in the same turn. |cs| Když sešleš kouzlo svou akcí, můžeš v tomtéž tahu jako bonusovou akci provést **jeden útok zbraní**.',
 null, null, null, null, null, null, null, null, null),
('dragons-breath', 'Dragon''s breath |cs| Dračí dech', 'perk',
 'Your torch has grown up. |cs| Tvá pochodeň dospěla.',
 'Your **Fire bending** deals **2d6** instead of 1d6, and it can set clothes and people alight: a lasting flame that keeps burning until the victim puts it out with a skill check. |cs| Tvé **Ohýbání ohně** způsobí **2k6** místo 1k6 a dokáže zapálit oblečení i lidi: trvalý plamen, který hoří, dokud ho oběť neuhasí zkouškou dovednosti.',
 null, null, null, null, null, null, null, null, null),
-- Ranger, Beastmaster
('loyal-to-the-end', 'Loyal to the end |cs| Věrný až do konce', 'perk',
 'It won''t leave you. It''s been told not to. |cs| Neopustí tě. Bylo mu to řečeno.',
 'Your animal and monster companions avert a failure for **1 Bond less** than the Danger Level (minimum 1). |cs| Tví zvířecí a netvoří pomocníci odvracejí neúspěch za **1 Pouto méně**, než je Ohrožení (nejméně 1).',
 null, null, null, null, null, null, null, null, null),
-- Shaman, Herbalist
('dreamless-sleep', 'Dreamless sleep |cs| Spánek beze snů', 'perk',
 'Valerian, hops and something you''d rather not know about. |cs| Kozlík, chmel a něco, o čem radši nechceš vědět.',
 'You brew a draught for the night. Up to your **Shaman level** sleepers who drink it have a **quality rest**, however poor the place: a wet ditch, a flea-ridden barn, the night before a battle. A night encounter still breaks it. |cs| Uvaříš nápoj na noc. Až tolik spáčů, kolik je tvá **úroveň Šamana**, má po jeho vypití **kvalitní odpočinek**, ať je místo jakkoli mizerné: mokrý příkop, blechami prolezlá stodola, noc před bitvou. Noční setkání ho ale stejně přeruší.',
 1, 'material', 'per sleeper', null, null, null, null, null, null);

insert into class_perks (class_id, perk_id, sort) values
('witcher', 'whirlwind', 70), ('witcher', 'blood-rush', 71), ('witcher', 'mutagen-collector', 72),
('witcher', 'witcher-oils', 73), ('witcher', 'ghostly-fireworks', 74), ('witcher', 'cursebreaker', 75),
('witcher', 'dagaz-sign', 76), ('witcher', 'eihwaz-sign', 77),
('warlock', 'flame-blade', 70), ('warlock', 'gale-step', 71), ('warlock', 'spellblade', 72),
('warlock', 'dragons-breath', 73),
('ranger', 'loyal-to-the-end', 70),
('shaman', 'dreamless-sleep', 70);

insert into perk_requirements (perk_id, kind, required_perk_id) values
('whirlwind', 'has_aspect', 'berserk'), ('blood-rush', 'has_aspect', 'berserk'),
('mutagen-collector', 'has_aspect', 'berserk'),
('witcher-oils', 'has_aspect', 'exorcist'), ('ghostly-fireworks', 'has_aspect', 'exorcist'),
('cursebreaker', 'has_aspect', 'exorcist'), ('dagaz-sign', 'has_aspect', 'exorcist'),
('eihwaz-sign', 'has_aspect', 'hexer'),
('flame-blade', 'has_aspect', 'battlemage'), ('gale-step', 'has_aspect', 'battlemage'),
('spellblade', 'has_aspect', 'battlemage'), ('dragons-breath', 'has_aspect', 'battlemage'),
('loyal-to-the-end', 'has_aspect', 'beastmaster'),
('dreamless-sleep', 'has_aspect', 'herbalist');
