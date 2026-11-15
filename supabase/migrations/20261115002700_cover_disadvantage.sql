-- Cover reworked (confirmed 2026-11-15): half = the attack is disadvantaged,
-- three-quarters = disadvantaged and armour rating +1. The Danger Level is the DM's call.
update rulebook_pages set content =
  substring(content from 1 for position('## Cover' in content) - 1)
  || $n$## Cover

A wall, a barrel, a tree trunk or an overturned table between you and an attacker makes you harder to hit. Cover counts against attacks and effects that come from the other side of it: arrows, bolts, thrown weapons and spells, and melee attacks too, like a sword swung over a low wall. It works the same for player characters and NPCs, and you don't need to defend to get it. The wall is there whether you spend your action or not.

| Cover | What it looks like | The attack | Against the hit |
|---|---|---|---|
| **Half** | Half the body hidden: a low wall, a barrel, a cart, another fighter in the way | Disadvantaged | — |
| **Three-quarters** | Only a sliver showing: an arrow slit, a corner, a thick tree trunk | Disadvantaged | Armour rating +1 |
| **Total** | Nothing showing: a closed door, a full wall | Can't target you | — |

Disadvantage always wins, so an attacker can't pay for Precise to aim round your cover. The +1 armour rating behind three-quarters cover works like the armour you wear: it lowers the Scar level and the cost of averting the hit, and it comes off an NPC's damage.

**Total cover** means the attacker has nothing to aim at. Ranged attacks of any kind can't reach you, and neither can a spell aimed at you, because the caster can't see you. Only two things still can. An **area effect** reaches you if its area gets round the cover: a fireball bursting on your side of the wall does, but a blast on the far side of a solid wall doesn't, and the DM decides what the cover keeps out. A **spell aimed at you through a symbolic touch** doesn't need sight at all, so cover doesn't stop it.

:::example[Behind the barrels]{image="/img/rulebook/michal.webp"}
A bandit with a crossbow (+2) shoots at Michal across a yard. Michal has dived behind a stack of barrels that hides half of him, and he wants to keep his action, so he doesn't defend. The shot is an undefended attack, disadvantaged by the cover: the bandit rolls :roll[d6 (6) 4 2] and keeps the worst two, 4 + 2 + 2 = 8. The bolt thuds into a barrel. Without the barrels, the 6 and the 4 would have hit.

Bolts keep coming, so the DM leaves Michal's Danger Level where it was. Michal crawls on behind the well, where nothing of him shows, and the bandit can't shoot him at all until he runs round the yard for a clear line.
:::

:::note[Cover and the Danger Level]
Cover doesn't lower your Danger Level by itself: the disadvantage already does that job. The Danger Level is how hard your heart is racing. If getting into cover really calms things down (the archers lose sight of you, you get a moment to breathe), the DM can lower it. Under a rain of arrows it stays the same, or even goes up.
:::

:::note[Shooting over a wall]
Some perks get round total cover, like the Hunter's *Sniper*: a high arc over a wall at a target that can't be seen. Without such a perk, total cover can't be shot through.
:::

$n$
  || substring(content from position('## How bad a hit is' in content))
where slug = 'defending' and position('## Cover' in content) > 0;
