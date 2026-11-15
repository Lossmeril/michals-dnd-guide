-- Cover (draft, after 5E and Fateforge): half +2, three-quarters +5, total can't be targeted.

update rulebook_pages set content = replace(content,
$o$## How bad a hit is$o$,
$n$## Cover

A wall, a barrel, a tree trunk or an overturned table between you and an attacker makes you harder to hit. Cover counts against attacks and effects that come from the other side of it, which mostly means arrows, bolts, thrown weapons and spells. It works the same for player characters and NPCs.

| Cover | What it looks like | Defense rolls and saving throws | An undefended attack lands on |
|---|---|---|---|
| **Half** | Half the body hidden: a low wall, a barrel, a cart, another fighter in the way | +2 | 11 or more |
| **Three-quarters** | Only a sliver showing: an arrow slit, a corner, a thick tree trunk | +5 | 14 or more |
| **Total** | Nothing showing: a closed door, a full wall | Can't be targeted | — |

**Total cover** means the attacker has nothing to aim at. Ranged attacks of any kind can't reach you, and neither can a spell aimed at you, because the caster can't see you. Only two things still can. An **area effect** reaches you if its area gets round the cover: a fireball bursting on your side of the wall does, but a blast on the far side of a solid wall doesn't, and the DM decides what the cover keeps out. A **spell aimed at you through a symbolic touch** doesn't need sight at all, so cover doesn't stop it.

:::example[Behind the barrels]{image="/img/rulebook/michal.webp"}
Two bandits with crossbows shoot at Michal (Juggler 3) across a yard. He dives behind a stack of barrels that hides half of him: half cover. The first bandit shoots, and Michal defends by ducking: :roll[d20 8] + 3 + 2 for the cover = 13 against the bandit's 12. The bolt thuds into a barrel.

Michal then crawls behind the well, where nothing of him shows. The second bandit can't shoot him at all, so he runs round the yard to get a clear line instead.
:::

:::note[Shooting over a wall]
Some perks get round total cover, like the Hunter's *Sniper*: a high arc over a wall at a target that can't be seen. Without such a perk, total cover can't be shot through.
:::

## How bad a hit is$n$)
where slug = 'defending';
