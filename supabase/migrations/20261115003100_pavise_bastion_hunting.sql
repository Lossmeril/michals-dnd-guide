-- 2026-11-15: planting or picking up a pavise is an action (Bastion: a bonus action);
-- Hunter perk Fresh tracks; the Hunt travel task and its d10 table.

update items set description =
  'A large shield with a prop. Carried on the arm, it gives a free Defense once per round like any shield; planted on the ground, it gives half cover to whoever crouches behind it, so crossbowmen can reload. Planting it or picking it up takes an action. |cs| Velký štít s opěrou. Nesený na paži dává jednu Obranu za kolo zdarma jako každý štít; postavený na zem dává poloviční krytí tomu, kdo se za ním skrčí, aby se kušiníci mohli nabíjet. Postavit ji nebo zvednout zabere akci.'
where id = 'pavise';

update perks set
  name = 'Bastion |cs| Bašta',
  description = 'With this perk, you are able to use your Warrior level as a bonus when constructing simple wooden structures such as barricades, palisades, watchtowers or moats (similar to Ranger''s woodworking skill). You can also plant or pick up a pavise as a bonus action instead of an action. |cs| Díky tomuto perku si můžeš přičíst úroveň Válečníka při stavbě jednoduchých dřevěných staveb, jako jsou barikády, palisády, strážní věže nebo příkopy (podobně jako Hraničářova dovednost práce se dřevem). Pavézu také můžeš postavit na zem nebo zvednout jako bonusovou akci místo akce.'
where id = 'bastion';

insert into perks (id, name, flavour, description, kind, cost_amount, cost_resource) values
('fresh-tracks', 'Fresh tracks |cs| Čerstvá stopa',
 'Never comes home empty-handed. |cs| Nikdy se nevrací s prázdnou.',
 'You may determine that an animal you would expect in this region is somewhere nearby, and that you have found its tracks, fresh enough to follow. You pick the animal, within what the region could hold; you skip the roll for what game is around, but taking it still needs a *Hunting* roll. |cs| Můžeš určit, že se nablízku pohybuje zvíře, které by se v tomto kraji dalo čekat, a že jsi našel jeho stopy, dost čerstvé, aby se po nich dalo jít. Zvíře si vybereš sám, v mezích toho, co v kraji může žít; nehážeš na to, jaká zvěř je kolem, ale ulovit ji stále vyžaduje hod na *Lov*.',
 'perk', 1, 'soul')
on conflict (id) do nothing;

insert into class_perks (class_id, perk_id, is_core, sort) values ('hunter', 'fresh-tracks', false, 100)
on conflict do nothing;

update rulebook_pages set content = replace(content,
$o$planted on the ground, it gives **half cover** instead.$o$,
$n$planted on the ground, it gives **half cover** instead. Planting it or picking it up takes an action, or a bonus action with the Warrior's *Bastion*.$n$)
where slug = 'defending';

update rulebook_pages set content = replace(replace(content,
$o$| **Map** |$o$,
$n$| **Hunt** (not at fast pace) | The [game table](#hunting), then *Hunting* (Hunter) | Tiny animals, small or large game, as rolled | The game gets away |
| **Map** |$n$),
$o$## Weather {#weather}$o$,
$n$## Hunting {#hunting}

Foraging gathers what grows; hunting goes after meat. A character who hunts first rolls a d10 to see what's around, on the row for the land the party is in, and then makes a *Hunting* roll at the region's Danger Level to take it. Large game is a fight of its own: a boar or a bear can turn on the hunter, and the DM can run it as one.

| Land | For example | Nothing | Tiny animals | Small game | Large game |
|---|---|---|---|---|---|
| **Lush** | Old forest, river meadows, a lord's game reserve | 1 | 2–3 | 4–7 | 8–10 |
| **Settled** | Fields and pastures, managed woods | 1–2 | 3–5 | 6–9 | 10 |
| **Devastated** | A war zone, burnt or hunted-out land | 1–4 | 5–7 | 8–9 | 10 |
| **Barren** | Bare mountains, heath, winter wastes | 1–5 | 6–8 | 9 | 10 |

| Game | For example | A successful hunt gives |
|---|---|---|
| **Tiny animals** | Mice, frogs, snails, birds' eggs | Food for one person today |
| **Small game** | Hares, rabbits, pheasants, ducks, fish | Food for the party today |
| **Large game** | Deer, a boar, a bear | Food for the party for three days, and **2 :material** of hides and horn |

:::example[A hungry week]
The party crosses a valley the war went through: devastated land. Michal hunts, rolls a 6 on the d10 and finds only tiny animals. His *Hunting* roll succeeds, and he eats a handful of frogs while the others go hungry. The next day Zara, who has *Fresh tracks*, pays 1 :soul and decides that a boar has been rooting along the stream. She skips the d10, follows the tracks and makes her *Hunting* roll; the party eats for three days.
:::

:::note[Whose game it is]
In settled land and in a lord's reserve, the game belongs to the lord, and hunting it is poaching.
:::

:::note[Fresh tracks]
The Hunter's *Fresh tracks* skips the d10: for 1 :soul, the hunter decides which animal the region could hold is nearby, and finds its tracks. Taking it still needs the *Hunting* roll.
:::

## Weather {#weather}$n$)
where slug = 'travel';
