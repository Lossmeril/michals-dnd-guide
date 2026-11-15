-- Rulebook (2026-11-15): finish the list of manoeuvres on Michal's Manoeuvres
-- page. Everything above "List o'manoeuvres" and the NPCs section stay as written.

update rulebook_pages set content =
  substring(content from 1 for position($p$## List o'manoeuvres$p$ in content) - 1)
  || $n$## List o'manoeuvres

If ever unsure what a manoeuvre does, refer to this list below.

### Precise

If your character takes their time to aim, feints before the real cut, or checks the lock twice before turning the pick, they act **Precise**: the roll has [advantage](advantage). On a skill check you roll 3d6 and keep the best two; in a challenge, 2d20 and keep the higher. You declare it before you roll.

Any advantage on an action already *is* a Precise, whether it comes from a perk, a Blessing or a prone target. Paying for a second one changes nothing, and the free one still takes up the action's one manoeuvre.

:::note[Disadvantage wins]
If the roll has any disadvantage, Precise does nothing, paid or free. Don't pay for it on a disadvantaged roll.
:::

:::example[Taking aim]{image="/img/rulebook/michal.webp"}
Michal (Fighter 2) is crossing swords with a bandit who knows what he's doing. He pays 1 :body for Precise and rolls :roll[d20 (4) 15]: 15 + 2 = 17 against the bandit's 12. Without the second die it would have been 4 + 2, and Michal would be the one paying to avert.
:::

**Very precise** lets you roll the third die after everyone has rolled, once you see you need it. **Cruelly precise** also makes the opponent re-roll their highest die.

### Mighty

**Mighty** puts your whole weight behind the action. Against an NPC, the hit deals **one extra damage die**; on :soul or :charisma, 1 more is at stake. Against a player character, the hit becomes harder to shrug off: averting it costs **1 more**, and if they don't avert it, they exhaust **d4 more** points of the Scar's pool on top of the Scar.

You declare it before the roll. A miss costs you nothing more than the point you paid.

| Target | Mighty | Very mighty | Cruelly mighty |
|---|---|---|---|
| **Player character averting failure** | Exhaustion costs +1 | Exhaustion costs +2 | First takes a level 1 Scar and then pays the exhaustion |
| **Player character not averting failure** | On top of the Scar, exhausts d4 more points of the same pool (stopping at 0) | Scar level +1 | Scar level +2 |
| **NPC, :body** | +1 damage die | +2 damage dice | If it defends, it first takes one damage die before rolling; then in any case +2 damage dice |
| **NPC, :soul or :charisma** | +1 at stake | +2 at stake | If it defends, it first takes damage equal to the attacker's class level; then in any case +2 at stake|

- The damage taken before defending against Cruelly mighty is **one die** of the attack's damage with no class level added, or the **attacker's class level** on :soul and :charisma. Fate doesn't prevent it.

:::note[Mighty for free]
A [critical hit](dice#damage) gives you a free Mighty after the roll, on top of the action's one manoeuvre. A point you already paid for Mighty on that roll stays spent.
:::

:::example[Through the plate]{image="/img/rulebook/michal.webp"}
Michal's longsword hits a knight in plate (armour rating 3). He paid 1 :body for Mighty, so he rolls two d8: :roll[d8 6] :roll[d8 3], + 2 for his Fighter level, is 11, and 8 gets past the armour. With one die it would have been 8, and only 5 through.
:::

### Cunning

**Cunning** is the dirty part of a fight: the hook behind the knee, the shoulder into the ribs. Once your attack **lands**, you pay 1 point and get a bonus action against the target: you **knock it prone**, or in close combat you **grapple** it or **push** it in any direction. A thrown knife or an arrow can knock someone over, but it can't grab or shove them.

Because you declare it after the hit, you only pay when you know it's worth it. Pushing a guard down the stairs, or off the bridge into the river, is often worth more than the damage.

:::note[Foolish]
A character with the Foolish condition can't use Cunning, and anyone who lands a hit on them gets a free one.
:::

**Very cunning** does all of that and more. Against an NPC, you also deal 1d4 damage as part of the bonus action; against a player character, their Danger Level rises by 2 while the effect lasts, until they stand up, break free or close the distance.

### Quick

**Quick** is being ready before the others are: the hand already on the hilt, the first to notice the guards reaching for their crossbows. You declare it before initiative is rolled, and you roll initiative with advantage (2d20, keep the higher).

Initiative is rolled once a fight, so Quick only matters at its start, and it counts as your **first turn's** one manoeuvre: that turn's action gets no other.

:::note[Slow]
Anything that makes your initiative disadvantaged (Blinded, Deafened, Frightened, Stunned or Slow) blocks Quick.
:::

**Very quick** lets you roll the third die after everyone has rolled, once you see you need it.

### Defense

A [defense roll](defending) always takes your action. If someone attacks you before your turn, defending uses up the action you were about to take; once your action is spent, you can't defend at all.

**Defense** gets you round that. You pay 1 point when you're targeted, defend as a reaction, and keep your action, or defend again after it's spent. You can use it as many times a round as you can pay for, and a **shield** gives you one free each round. It doesn't count towards the one-manoeuvre limit, because it isn't part of your action.

Defense only works against things aimed **at you**, not at your allies, and it has no strong version. A caster keeping up a [concentration](spell-durations) spell pays for it too, since their action is already spent on concentrating.

:::example[Three goblins, two points]{image="/img/rulebook/michal.webp"}
Two goblins rush Michal at once. He pays 1 :body for Widespread and swings at both.

Then a third jumps him from behind when he has no action left, so he pays another 1 :body for Defense and fends it off anyway. Three goblins, two points, one very tired Fighter.
:::

### Widespread

Without **Widespread**, an action affects **one target**. Every action against several (a swing at two goblins, a threat shouted at the whole patrol) needs it.

- It costs 1 point however many targets there are, and the effect is **the same for all** of them.
- You declare it when you describe the action.
- It can't be used in a reaction.

**Magic** works in two ways. A spell with an open-ended effect, such as a Druid's control of water, works on one thing up to the size of a witch's hut; Widespread takes it one step up, to more targets or a farmstead's worth. A spell with a **specific effect**, such as Fireball or Burning Hands, has its area built into its activation price, and Widespread can't change it: there's no way to make a fireball bigger.

$n$
  || substring(content from position($p$## NPCs$p$ in content))
where slug = 'manoeuvres' and position($p$## List o'manoeuvres$p$ in content) > 0;
