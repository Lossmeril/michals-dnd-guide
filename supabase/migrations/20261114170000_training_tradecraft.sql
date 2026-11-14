-- Training (Warrior) and Tradecraft (Scout): teaching your class skills to companions, units and networks you lead.

insert into perks (id, name, kind, flavour, description) values
('training', 'Training |cs| Výcvik', 'perk',
 'Again. Slower. Now faster. |cs| Znovu. Pomaleji. Teď rychleji.',
 'A companion, unit or network you lead can learn one of your **Warrior** skills, gaining a bonus in it. Each +1 costs the same as raising Bond: a successful *Combat leadership* roll and 5 payments (for a unit, ×5 per size step). The bonus goes no higher than your Charisma pool, nor above your own Warrior level.

You can train combat companions (sellswords, squires), units of **infantry**, **heavy cavalry** and **sappers**, and **noble societies** (networks specialised in high society). |cs| Pomocník, jednotka nebo síť, kterou vedeš, se může naučit jednu z tvých dovedností **Válečníka** a získat v ní bonus. Každé +1 stojí stejně jako zvýšení Pouta: úspěšný hod na *Vedení v boji* a 5 plateb (u jednotky ×5 za každý stupeň velikosti). Bonus nemůže přesáhnout tvou zásobu Vlivu ani tvou úroveň Válečníka.

Cvičit můžeš bojové pomocníky (žoldnéře, panoše), jednotky **pěchoty**, **těžké jízdy** a **ženistů** a **šlechtické spolky** (sítě zaměřené na vysokou společnost).'),
('tradecraft', 'Tradecraft |cs| Řemeslo zvědů', 'perk',
 'Never write it down. Never say it twice. |cs| Nikdy to nepiš. Nikdy to neříkej dvakrát.',
 'A companion, unit or network you lead can learn one of your **Scout** skills, gaining a bonus in it. Each +1 costs the same as raising Bond: a successful *Leading people outside combat* roll and 5 payments (for a unit, ×5 per size step). The bonus goes no higher than your Charisma pool, nor above your own Scout level.

You can teach non-combat companions (guides, porters, informants), units of **light cavalry**, **scouts** and **supply**, and **spy and underworld networks**. |cs| Pomocník, jednotka nebo síť, kterou vedeš, se může naučit jednu z tvých dovedností **Zvěda** a získat v ní bonus. Každé +1 stojí stejně jako zvýšení Pouta: úspěšný hod na *Vedení lidí mimo boj* a 5 plateb (u jednotky ×5 za každý stupeň velikosti). Bonus nemůže přesáhnout tvou zásobu Vlivu ani tvou úroveň Zvěda.

Učit můžeš nebojové pomocníky (průvodce, nosiče, informátory), jednotky **lehké jízdy**, **zvědů** a **zásobování** a **špionážní a podsvětní sítě**.');

insert into class_perks (class_id, perk_id, sort) values ('warrior', 'training', 70), ('scout', 'tradecraft', 66);
