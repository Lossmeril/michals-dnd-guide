# Ruleset overview

How Michal's custom D&D ruleset works, and how the app should present and enforce it.
Claude loads this file every session (imported from `CLAUDE.md`), so keep it current.

> **Status: draft.** Everything below is taken from the old rulebook (git commit `60a40a6`) and has not been confirmed yet.
> Open points are marked **Q1–Q17** and collected in [Open questions](#open-questions) at the end.

## The big picture

A gritty, low-to-mid fantasy ruleset stitched together mostly from **Dračí Doupě 2** and **D&D 5th Edition**.

- No attributes (Strength, Dexterity, …). Instead, characters have three **resource pools** they spend to push through danger.
- Every roll bonus comes from a **class level**. Classes are bundles of skills, and characters naturally multiclass.
- Tension comes from the **Danger Level**: the worse the situation, the more each avoided failure costs.

## Core mechanics

### Rolls

| Roll | Dice | Success |
|---|---|---|
| **Skill check**: overcoming an obstacle without direct opposition | 2d6 + class level | Result ≥ 9 |
| **Challenge**: direct opposition (fights, card games, debates) | d20 + class level on both sides | Higher wins; ties go to the defender |
| **Initiative** | d20 | Higher acts earlier |
| **Damage** (dealt to NPCs' tracks) | Weapon/ability dice + class level (class level plays 5E's ability modifier) | — |

The class level added is that of the class the skill belongs to.

**Advantage:**
- **Skill check:** roll 3d6 and keep the best two.
- **Challenge and initiative:** roll 2d20 and keep the higher.

**Disadvantage** mirrors it:
- **Skill check:** roll 3d6 and keep the worst two.
- **Challenge and initiative:** roll 2d20 and keep the lower.

**Several sources:**
- Advantage and disadvantage **don't stack**, as in 5E. Three sources of advantage is still just one advantaged roll.
- **Disadvantage always wins.** If a roll has **any** disadvantage, it's disadvantaged, however many sources of advantage it has. Disadvantage cancels advantage; advantage never cancels disadvantage. This differs from 5E, where one of each cancels out.
  - It covers every source of disadvantage (a condition, a missed Mighty) and every source of advantage, paid or free: Precise, Quick, free manoeuvres from weapons and perks, a Blessing, attacking a prone target.
  - Paying for Precise or Quick on a disadvantaged roll is wasted.

**Bonus die:** some abilities grant a bonus die, e.g. Trophy Hunter's d4 at level 1 rising to d12 at level 5. The old rulebook called these "Advantage dice".
- During the encounter, the player may add the bonus die to **any one roll**: initiative, a skill check, a challenge, and so on.
- Once they commit to rolling it, they must keep the result.

Weapons use the D&D 5E simple and martial weapon table: dice, damage type and properties such as Light, Finesse, Thrown (4/12 m, converted from 20/60 ft), Versatile, Heavy, Reach and Two-Handed.

### Resources

| Resource | Covers |
|---|---|
| **Body** | Physical limits and reflexes: strength, speed, agility, coordination, armed combat, climbing, sleight of hand |
| **Soul** | Mind, focus and technical ability: knowledge, perception, languages, lockpicking, spellcasting, alchemy |
| **Charisma** | Communicating, influencing and reading others: intimidation, negotiation, seduction, animal taming, deception |

- Resources are **not hit points and not skill**. They are how far a character can push right now. An empty pool doesn't mean collapsing; it means further pushing costs Scars.
- The governing resource can depend on context. A bow in a chaotic battle uses Body; the same shot in an archery contest uses Soul.
- **Starting pools:** every character gets **15 points** to split freely between Body, Soul and Charisma. The old example character has Body 7, Soul 5, Charisma 3.
- **Growth:** a level-up point can go into +1 Body, Soul or Charisma instead of a class or perk (see [Leveling](#leveling)). Planned: some perks that raise a resource by 1.

**Secondary resources**

- **Coins:** 1 gold = 100 silver, 1 silver = 10 copper. One gold is a lot of money for a commoner.
- **Material:** abstract supplies (herbs, wood, components). 1 Material = 1 silver. Its exact nature is declared when it's spent. Many crafted effects scale with the Material used.

### Danger Level

- A single number for how risky the current situation is. **Default: 3.**
- To **avoid a bad outcome** (getting hurt, failing a task, losing an item, triggering a trap), a character spends resources from the skill's pool equal to the Danger Level.
- The DM raises it for hostile, urgent or chaotic situations. Players lower it with cover, distractions, negotiation and so on.
- It can differ per character in the same scene. A knocked-down warrior might face 5 while a spellcaster on a hill faces 2.

| Level | Feel | Body example | Soul example | Charisma example |
|---|---|---|---|---|
| 1 | Walk in a park | Crossing a calm river | Prying open a hayloft latch | Puppet show for children |
| 2 | Same shit, different day | Crossing a wild mountain stream | Picking a basic cell lock | Adventure stories for villagers |
| 3 | Time to file a safety report | Crossing a swollen river | Several locks on a merchant's chest | Impressing bored city folk |
| 4 | The danger is real | River with floating debris | Disarming a dart trap in a steel lock | Flawless show for a critical audience |
| 5+ | "The fuck did I stumble into?" | Debris-filled river in a storm | Decoding mechanisms as the ceiling collapses | Forbidden performance for a decadent audience |

### Cost to attempt

Some activities are hard before they even start. In those, the character pays a **cost to attempt**: resource points exhausted **before rolling**, just to try. It's paid whether the roll succeeds or not.

- **Main use: armour.** Encumbrance is a cost to attempt (see [Armour](#armour)). A knight in heavy armour exhausts 2 Body before trying to sneak through a dungeon.
- **Any skill, at the DM's call:** a Hunter tracking prey on packed earth, a Druid making ice on a hot summer day.
- **Sigils:** each action through a sigil costs 1 point of its pool to attempt (see [Magic](#magic)).
- **It adds to the Danger Level, it doesn't replace it.** The cost to attempt is paid up front; the Danger Level still sets what averting a failure costs.

### Exhaustion and Scars

- **Exhaustion:** spend points equal to the Danger Level to avert a failure. Exhausted points are marked with one diagonal strike.
- **Scar:** taken when the pool is too low. A scar gives **2 temporary points** that must be spent immediately; leftovers are lost. The scarred point is crossed out until healed, and sleep doesn't heal it.
  - Example: Danger Level 3, 1 Charisma left, take 1 Scar → 1 + 2 = 3, failure averted.
  - Scars are story consequences. Body: wounds, illness, sprains, trembling hands. Soul: insomnia, anxiety, guilt, nightmares. Charisma: mockery, ruined reputation, being outlawed.
- **Healing exhaustion:** a **poor rest** restores 3 exhausted points of the player's choice; a **quality rest** (safe, comfortable, stress-free) restores all of them.
- **Healing a scar:** costs **5 resource points per scar level**, plus meaningfully addressing the cause (treating the wound, therapy, reparations). A level-2 scar costs 10. The points can come from any mix of:
  - **The bearer's own pools,** any of the three. Body: it hurts. Soul: the pain wears them out. Charisma: recovering leaves them unsociable.
  - **A healer's resources,** usually Soul, when a perk allows it (e.g. *Good Samaritan*, *It's Not a Sacrifice*).
  - **Healing substances** such as ointments and elixirs. Each holds a fixed number of resource points; a Medic's burn ointment might be worth 5. Each treats only the kind of Scar it was made for (see [Our potion rules](#our-potion-rules-confirmed)).
  - **Material,** at 1 point each, where it makes sense and only after consulting the DM; for example, 5 Material for a bandage.

  Healing also needs **one successful skill check per scar level**, e.g. treating the wound.

### Item scars

Items can take scars too.

- **Scarring an item to avert failure:** a player can scar one of their items, which **breaks** it. Like a self-taken scar, this gives **2 resource points** to spend immediately.
  - Only for an activity the item would **reasonably be involved in**: a lockpick for a lock, a sword for a fight. Creative uses can be allowed, e.g. flirting with a magic trick that burns the only map to the dungeon.
  - The 2 points are an **unspecified resource**: they count towards whichever pool the failed roll needed.
  - Unspent points are lost and don't carry over. If 1 point was missing and the scar gave 2, the extra point is gone.
- **Only proper items** can be scarred. An improvised item, like a chair leg used as a club, can't be scarred for points, though some perks may allow it.
- **Armour scars:** when the DM scars armour, its rating drops by 1. Light armour (rating 1) breaks instead.
- **Repair** works like healing a scar: **5 resources**, usually Material, plus a successful **skill check**. It must be plausible: an old map or an antique sword can't be restored to its former glory.
- Pseudo-magic classes deal themselves a Scar to enter magic mode for a conflict (see [Magic](#magic)).

**Scars imposed by the DM**

If a character doesn't (or can't) avert a bad outcome, such as falling into a trap, the DM gives them a Scar of the DM's choosing, with a **level**:
- Level 2 Body scar: slashed arm.
- Level 6 Body scar: broken leg.
- Level 5 Charisma scar: banished from town.

A level-N scar **blocks N points** of its resource until it's healed, and the character isn't safe again until it is. For combat hits, the level comes from the damage roll minus armour rating (see [Defending](#defending)).

Healing costs 5 points per level (see Healing a scar above).

**Overflow and dying:** if a scar's level exceeds the pool, the scar blocks the **entire pool** and the character immediately enters the **dying** stage, as in 5E. The same happens if a character takes a scar while that pool is already fully blocked. This applies to all three pools, and each leads to an adventure-ending state if not resolved:

| Pool | What "dying" looks like |
|---|---|
| Body | Physically dying |
| Soul | Going mad, or a catatonic state |
| Charisma | Reputation and self-worth ruined |

**Dying rolls** work like 5E death saving throws, for all three pools. Each turn the character rolls a d20: 10 or more is a success, three successes stabilise them, and three failures mean the end.

Planned: perks that let another character within **touch distance** intervene and roll a **skill check** in the dying character's place.

**Absorbed hits:** if armour reduces the scar level to 0 or less, the hit is absorbed and there's no scar. A DM who wants to punish the player a little can scar the **armour** instead (see [Item scars](#item-scars)).

### Combat

- Combat is in **rounds**, ordered by initiative.
- Each turn: **one action** and **one movement**. Movement can be split around the action. Some abilities grant bonus actions or reactions.
- Actions include **attacking** one target in reach (more with Widespread) and **casting a spell**.
- **Player characters have no hit points.** The game is about resource management: players exhaust resources to avoid bad outcomes, and anything they don't avert becomes a Scar.
- **NPC damage against player characters** only helps the DM translate a hit into a Scar. The die reflects the threat: **d4** for weak combatants, **d6** for normal challenges, larger dice for gargantuan threats. The exact system isn't decided yet.
- Weapon damage dice and the 5E weapon table apply to attacks against NPCs, reducing their **Body** track (see [NPCs](#npcs)).

### Defending

When a character is targeted by an attack, spell or other hostile effect, they can **react** with a **defense roll**. This is a challenge (d20 + class level vs the attacker's d20 + class level) using whichever skill fits the defense.

- A defense roll uses the character's **action** for the turn, or the **Defense manoeuvre** to defend without spending it.
- **Losing a defense roll** is a failure like any other: the defender can **exhaust** resources equal to the Danger Level, or take a self-inflicted Scar, to avert it.
- **Undefended attacks:** if the target doesn't or can't defend, the attack goes unchallenged. The attacker makes a **skill check** (2d6 + class level ≥ 9) to see if it lands. A landed hit **can't be averted** with Exhaustion, because there was no roll of the target's to save. The attacker rolls damage, and the target takes a Scar:

  ```
  scar level = damage roll − armour rating
  ```

  For example, a normal enemy (d6) rolls 5 against armour rating 2, giving a level-3 Scar.
- This replaces 5E's **saving throws**. Wherever old texts say "saving throw", read **defense roll**. "Automatically fails saving throws" means the target automatically loses defense rolls.

### Armour

Armour helps in two ways:

- **Scars from hits:** scar level = damage roll − armour rating.
- **Body exhaustion** *(confirmed)*: when a character exhausts Body to avert being hit, the armour rating lowers the cost, like a resistance bonus. **Averting always costs at least 1.** At Danger Level 3: no armour 3, light 2, medium 1, heavy 1. A long fight still wears down a knight.

| Armour | Rating | Encumbrance cost |
|---|---|---|
| None | 0 | — |
| Light | 1 | — |
| Medium | 2 | Exhaust 1 Body |
| Heavy | 3 | Exhaust 2 Body |

**Encumbrance** is a [cost to attempt](#cost-to-attempt): before even attempting an activity the armour would hinder, the character must first exhaust the encumbrance cost in Body. That covers stealth, acrobatics, swimming, fast movement, and anything else the DM judges the armour gets in the way of.

The Kroll perk *Bison Skin* ("+1 resistance bonus on exhaustion when not wearing armour") could become "counts as armour rating 1 when unarmoured" under this system.

### Manoeuvres

Each costs **1 point of the governing resource**, unless an ability makes it free.

| Manoeuvre | Effect |
|---|---|
| **Precise** | Advantaged roll on the action. |
| **Mighty** | Against an NPC: an extra damage die (or Danger Level +1 on Soul and Charisma). Against a player character: averting costs +1, or the Scar is 1 level higher. See [The Mighty versions](#the-mighty-versions-confirmed). |
| **Cunning** | After the attack, the target is knocked prone, grappled, or pushed in any direction. |
| **Quick** | Advantaged initiative roll. |

**Precise and Quick are advantage.** Any advantage on an action, from a perk, a Blessing or a prone target, **is** a free Precise; advantage on initiative is a free Quick. Paying for one when you already have advantage changes nothing.

**One paid manoeuvre per action** *(confirmed)*. Free manoeuvres (from a weapon, a perk or any advantage) don't count towards it. Quick isn't part of the action, so it doesn't count either.
- *A swordsman with the blade's free Precise pays 1 Body for Mighty:* allowed.
- *Paying for both Mighty and Cunning on one swing:* not allowed.

**Widespread and areas** *(confirmed)*
- **Every multi-target action needs Widespread,** as in DrD2. Without it, an action affects one target.
- **Area spells have it built in.** A perk spell with an area (Fireball, Burning Hands, Earthquake) hits its area with a free Widespread, so its paid manoeuvre slot stays open. Its **activation price** pays for the area instead, much like a 5E spell slot.
- **Base magic pays for it.** Core spells and other base forms of magic need a paid Widespread for several targets. *A Warlock lighting several torches at a distance with base fire magic pays for Widespread.* Perks like Marching Forest, Rock and Stone and Tsunami make it free for their bending.

**Free manoeuvres from weapons** *(confirmed)*
- Every proper weapon grants **one free manoeuvre** in combat; improvised weapons grant none. A **shield** grants a free **Defense once per round**.
- **Defaults by damage type:** piercing and thrown → Cunning; slashing and bows → Precise; bludgeoning and crossbows → Mighty.
- **Set per weapon in the item editor** (`/admin/items`): the admin picks which manoeuvre it grants, starting from the default. *(Planned: not built yet.)* Odd cases like the rapier (piercing, but all about precision) are set by hand.

**Strong and cruel manoeuvres** *(confirmed)*. There's no general "mastery"; perks and abilities grant them.
- **Strong (*very*) manoeuvres** come from **perks**, each tied to a class's skills: e.g. a Fighter perk for Very Mighty in foot close combat. Class level 5 alone doesn't unlock them.
- **Cruel manoeuvres** come from **perks of the mighty classes**, the top of a character's advancement.
- **NPCs** get either as **special abilities** in their stat block: the arena champion's Very Mighty, the dragon's Cruelly Mighty.

**NPC manoeuvres** *(confirmed)*
- **Granted manoeuvres are free:** the weapon's free one, and any listed in the stat block (a wolf's Cunning on every bite, a soldier's shield Defense).
- **Ungranted manoeuvres cost 1 point of a track,** usually **Soul or Charisma**, whichever fits. Those tracks are small, so paying brings the NPC closer to breaking or giving in.

**The Mighty versions** *(confirmed)*. All are declared before the roll; a lost roll gives disadvantage on the next roll.

| | Mighty | Very mighty | Cruelly mighty |
|---|---|---|---|
| **Player character averting** | Costs +1 | Costs +2 | Must first take a **level-1 Scar** (a blank payment, no temporary points), then pay the cost |
| **Player character not averting** | Scar level +1 | Scar level +2 | As Very mighty |
| **NPC, Body** | +1 damage die | +2 damage dice | If it **defends**, it first takes damage before the challenge roll; if it doesn't, +2 damage dice |
| **NPC, Soul or Charisma** | Danger Level +1 | Danger Level +2 | As for Body: damage first if it defends |
| **Who gets it** | Anyone (1 point), or free from a weapon | Class perks; NPC stat blocks | Mighty class perks; NPC stat blocks |

- *Readings, to confirm:* Very mighty against an NPC's Body adds 2 dice (the same as an undefended Cruelly mighty hit). A player character not averting a Cruelly mighty hit takes the Very mighty +2.
- **Damage before defending** against Cruelly mighty: **one die** of the attack's damage on Body (no class level; 1d8 against a longsword), or the **attacker's class level** on Soul and Charisma. An important NPC's Fate saves it from the blow, not from this.
| **Defense** | Defend yourself without spending your action. |
| **Widespread** | The action affects multiple targets instead of one. |

**When to declare** *(confirmed)*

| Manoeuvre | Declared |
|---|---|
| **Precise** | Before the roll |
| **Mighty** | Before the roll: a gamble (see below) |
| **Cunning** | After the attack lands |
| **Quick** | Before initiative is rolled. It's outside the action, so it isn't the action's manoeuvre |
| **Defense** | When targeted after the action is spent |
| **Widespread** | When describing the action |

**Mighty is a gamble.** Unlike DrD2, where it's declared after winning, Mighty is paid up front. If the roll is **lost** (the attack misses), the character has **disadvantage on their next roll**, whatever it is: a defense roll, initiative, the next attack. Like all disadvantage, no advantage cancels it.
- *Reading, to confirm:* a hit the target averts with exhaustion isn't a miss. Mighty did its job by raising the cost.

#### Manoeuvres in DrD2

*(Proposed base, from DrD2 Part III and the Bestiary. Not yet confirmed.)*

**The six manoeuvres**
- **Precise:** an advantaged roll (3d6 keep the best two). *Very precise* lets the character add the third die **after** seeing the roll.
- **Mighty:** declared **after** the roll is won; the loser's exhaustion cost to avert rises by **1**. *Very mighty* raises it by **2**.
  - *Hrun wins a wrestling bout against Vlkava (Danger Level 5) and pays 1 Body for Mighty: averting now costs her 6.*
- **Cunning:** declared after the opponent **lost and chose not to exhaust**. For 1 point, the target's Danger Level changes by **1 more** than the action's effect, up or down, so it can also help an ally. *Very cunning* adds 1 more again (3 in total).
  - *Ulrich disarms the prince's son (+1 Danger Level), and for 1 Body cunningly turns it into the set-up for the final blow: +2.*
- **Quick:** declared **before** initiative; advantaged initiative. Costs **1 Soul**, since seizing the initiative is mental. It isn't part of an action, so it doesn't use up the action's manoeuvre. *Very quick* adds the third die after everyone has rolled.
- **Defense:** when an action targets the character after they've used their action, they can still answer it as if they hadn't. Only against actions aimed **at them**, not at allies. **No strong version.**
- **Widespread:** one action affects several targets for **1 point, however many**. Declared when describing the action; the effect must be **the same for all**. **Without it, an action can't hit several targets at all.** Can't be used in a reaction. **No strong version.**

**Strong and master manoeuvres**
- The *very* versions are **strong manoeuvres**, for characters who meet DrD2's conditions for **mastery**.
- **Cruel manoeuvres** (from the DrD2 Bestiary) replace a strong manoeuvre, so they also need mastery:
  - **Cruelly precise:** advantaged roll, and the roller may also make the opponent reroll their highest die.
  - **Cruelly mighty:** to exhaust at all, the opponent must **first take a Scar**, then pay the cost.
  - **Cruelly cunning:** raises the target's Danger Level by **1 + the Fate or resources spent**; with a weapon that gives Cunning free, **2 +** that.
- **Very widespread:** affects a fort, a village or a city district instead of a witch's hut. Only for master abilities that name it.
  - Without it, a very widespread spell or natural force can't be undone by one action: a counterspell breaks it only in a hut-sized patch. Several casters, or one caster in several places, can dispel it fully.

**Weapons grant a free manoeuvre**
- A weapon gives **one** of Precise, Mighty or Cunning **free** in combat. A **shield** gives a free **Defense once per round**. Improvised weapons give nothing.

| Kind | Free manoeuvre | Melee | Ranged |
|---|---|---|---|
| Improvised | — | Fists and kicks, a tankard, a table leg, a tent pole | A stone (~12 paces) |
| Piercing / thrown | Cunning | Dagger, knife, spear | Throwing knife and axe (~12 paces), javelin, sling (~24 paces) |
| Slashing / bows | Precise | Cleaver, machete, sabre, axe, sword, glaive, scythe | Bow (~80 paces) |
| Crushing / mechanical | Mighty | Buckler, mace, flail, iron-shod staff, club, warhammer | Crossbow (~80 paces) |
| Defensive | Defense | Shield | — |

**Penalties** (DrD2 *postihy*)
Lasting limits, usually from magic: trembling hands, a clouded mind. Each applies to **one skill or skill group** and usually ends at the next **sunset or sunrise**.
- **Imprecise:** disadvantaged rolls with that skill; can't use Precise, even a free one.
- **Feeble:** opponents avert this character's actions **1 cheaper** (minimum 1); can't use Mighty.
- **Foolish:** the character's actions can't raise an opponent's Danger Level; can't use Cunning.
- **Slow:** always disadvantaged initiative; can't use Quick.

#### Penalties vs our conditions

Penalties are **another form of condition** and belong with them. Compared with the conditions on the rulebook's Conditions page:

| Penalty | Closest existing condition | Suggestion |
|---|---|---|
| **Imprecise** (disadvantage on a skill group, no Precise) | Blinded, Deafened, Frightened, Prone and Restrained already give disadvantage on attacks. 5E's **Poisoned** (disadvantage on attacks and checks) is missing from our list. | Make it the general condition "disadvantaged on *[skill group]*". **Poisoned** becomes Imprecise on everything. |
| **Slow** (disadvantaged initiative, no Quick) | Blinded, Deafened, Frightened and Stunned already give disadvantaged initiative. | Mostly covered. Keep it as a standalone condition (**Slowed**) for magic and drugs that only make someone sluggish. |
| **Feeble** (opponents avert 1 cheaper, no Mighty) | No condition, but it's exactly a **resistance bonus of 1** against that character's actions. | Write it as a resistance bonus, so no new rule is needed. |
| **Foolish** (can't raise the Danger Level, no Cunning) | Nothing similar. With our Cunning, it means no prone, grapple or push. On Charisma it also matters for NPCs: social damage is the Danger Level + class level, so a foolish talker would deal only their class level. | Keep as a new condition. |

**Answer:** the four penalties join the conditions as they are, under their own names: **Imprecise, Slow, Feeble and Foolish**. No Poisoned (that came from 5E's own condition list, which our list had left out), and Feeble stays a condition rather than being rewritten as a resistance bonus.

**Scope:** set by the source. A penalty can name a skill or skill group (*Imprecise: ranged weapons* from a curse of trembling hands) or apply to everything the character does (*Slow* from a numbing poison).

**Duration:** like any condition, a penalty lasts **as long as its cause**, which the DM sets. From a spell, it lasts the spell's duration; otherwise, until the condition no longer holds. (DrD2's default of "until the next sunset or sunrise" isn't used.) More conditions may be added later.

**The hidden difference:** every DrD2 penalty also **blocks its manoeuvre**. Under 5E's cancelling rule, one point spent on Precise would cancel any disadvantage. DrD2's Imprecise can't be paid off that way.

**Answer:** now covered by the general rule that **disadvantage always wins** (see [Rolls](#rolls)). A condition that imposes disadvantage blocks advantage on those rolls, like DrD2's Imprecise:
- Disadvantage on attacks or skill checks (Blinded, Frightened, Prone, Restrained, Imprecise…) blocks **Precise**.
- Disadvantage on initiative (Blinded, Deafened, Frightened, Stunned, Slow) blocks **Quick**.
- **It blocks every source of advantage,** not just paid ones: free manoeuvres from weapons and perks, a Blessing, attacking a prone target, being invisible. The roll stays disadvantaged.

#### Conflicts with our manoeuvres and 5E

1. ~~**Cunning is different.**~~ Answered: ours stays (prone, grapple or push). → **Q16a**
2. ~~**Mighty**~~ Answered: reworded for tracks (see *The Mighty versions*). It mostly agrees: DrD2's +1 to the averting cost is ours "against targets without hit points". Against NPCs we add an extra damage die. Wording needs updating, since NPCs now have tracks, not hit points.
3. ~~**"Free when you have advantage"**~~ Answered: the clause is dropped. It came from translating advantage into manoeuvres: any advantage on an action is a free Precise, on initiative a free Quick. Our Precise and Quick) does nothing: advantage doesn't stack, so a second source changes nothing. DrD2 has no such clause. → **Q16b**
4. ~~**Timing.**~~ Answered: DrD2's timing, with Cunning after the attack lands, and Mighty declared before the roll with disadvantage on the next roll if it misses. DrD2 fixes when each is declared: Precise and Quick before the roll, Mighty after winning, Cunning after the target declines to exhaust. Ours doesn't say. → **Q16b**
5. ~~**One manoeuvre per action.**~~ Answered: one paid manoeuvre; free ones don't count. DrD2 implies it (Quick doesn't count, being outside the action), plus any free one from a weapon. Ours doesn't say. → **Q16b**
6. ~~**Widespread is required**~~ Answered: area spells have a free Widespread built in, paid for by their activation price; base magic and other actions pay for it. **Widespread is required** for any multi-target action in DrD2. Our area spells (Fireball, Burning Hands, Earthquake) and the 5E idea of built-in areas clash with it. → **Q16c**
7. ~~**Weapons.**~~ Answered: each weapon grants one free manoeuvre, set in the item editor, defaulting by damage type. Ours use the 5E table (dice, damage type, properties). DrD2's free manoeuvre maps neatly onto 5E damage types: piercing → Cunning, slashing → Precise, bludgeoning → Mighty; bows → Precise, crossbows → Mighty, thrown → Cunning. Shields → free Defense once per round. Both can coexist. → **Q16d**
8. ~~**Strong and cruel manoeuvres need "mastery"**~~ Answered: strong ones from perks, cruel ones from mighty class perks; NPCs from stat-block abilities. They needed mastery, which we haven't defined: class level 5, a perk, an NPC bonus above 5? → **Q16e**
9. ~~**NPCs and manoeuvre costs.**~~ Answered: granted manoeuvres are free; ungranted ones cost 1 point of a track, usually Soul or Charisma. Player characters pay 1 point of a pool. NPCs have tracks, not pools, and Fate only averts failures. DrD2 NPCs paid with Fate (cruelly cunning even scales with it). → **Q16f**
10. ~~**Cruelly mighty against an NPC.**~~ Answered: an NPC that defends first takes one die of damage (or the class level on Soul and Charisma); one that doesn't takes +2 damage dice. NPCs don't exhaust, so it only bites on Fate. Does an NPC spending Fate first take track damage? → **Q16f**
11. ~~**Penalties vs 5E conditions.**~~ Answered (Q16g). 5E handles similar effects with conditions (Poisoned: disadvantage on attacks and checks) that last a set time. DrD2's penalties are narrower (one skill group) and last until sunset or sunrise, which fits our spell durations. → **Q16g**
12. **Ranges in paces.** DrD2's ~12/24/80 paces vs our 5E-converted metres (thrown 4/12 m, shortbow 16/64 m, longbow 30/120 m). We keep metres.

### Conditions, resistances and weaknesses

- **Conditions:** Blinded, Charmed, Deafened, Frightened, Grappled, Incapacitated, Invisible, Paralyzed, Petrified, Prone, Restrained, Stunned and Unconscious, adapted from 5E, mostly granting or imposing advantage and disadvantage. Plus four from DrD2's penalties: **Imprecise, Slow, Feeble and Foolish** (see [Penalties vs our conditions](#penalties-vs-our-conditions)). Their disadvantage, like any, can't be cancelled by advantage.
- Old texts still say "saving throw"; read it as a **defense roll** (see [Defending](#defending)). Some also mention Strength/Dexterity saves, which need rewording, and feet, which become metres (see [Units](#units)).

| Modifier | Effect on damage | Effect on exhaustion cost |
|---|---|---|
| Weakness | Doubled | Doubled |
| Weakness bonus | — | Increased by the bonus |
| Resistance | Halved | Halved |
| Resistance bonus | — | Reduced by the bonus |
| Immunity | Negated | None |

**Damage types:** fire, ice, lightning, poison, psychic, necrotic, radiant, force, thunder, acid, piercing, slashing and bludgeoning.

### Units

The rulebook uses **metres**. Readability for European players matters more than the 5E feel. Old 5E values in feet (weapon ranges, movement speed, "within 5 feet" in conditions) convert at a simplified **5 ft = 1 m**. This matches the 1-metre steps the perks already use.

| 5E | Here |
|---|---|
| 5 ft (adjacent, "within 5 feet") | 1 m |
| 30 ft walking speed | 6 m |
| Thrown 20/60 ft | 4/12 m |
| Thrown 30/120 ft (javelin) | 6/24 m |

### Travel

The old site had a 5E-style travel calculator.
- The old formula was speed in feet ÷ 10 = mph (30 ft = 3 mph). In metres, that's speed × 0.5 = mph, or roughly speed × 0.8 = km/h, so 6 m ≈ 5 km/h. The calculator should show km/h.
- Pace multiplier: slow ×⅔, fast ×4⁄3.
- Terrain multiplier: road/plains ×1, hills/forest ×0.75, mountains/swamp ×0.5, severe ×0.25.
- Weather multiplier: rain ×0.9, heavy rain ×0.75, snowstorm ×0.5.
- Encumbered −2 m, heavily encumbered −4 m. Whether this should tie into armour encumbrance is still to decide.
- The slowest traveller sets the pace, and mounted groups can add a 1-hour gallop.

## NPCs

> **Status: being designed (Q15).** How non-player characters differ from player characters.

### Lessons from DrD2

- In DrD2, NPCs **exhausted too**, from a shared, non-specific pool called **Fate** (*Sudba*).
- **In play, fights became long chains of both sides exhausting** to avert every failure, with nobody accomplishing anything.
- The way to win was to **push the opponent's Danger Level past their limits**. Every character had a Body, Soul and Charisma limit; once the Danger Level overshot it, they could no longer exhaust and failures stuck.
- Tracking a Danger Level for **every NPC** is a pain for the DM.

### Direction

- **Keep something like the limits,** so players can overpower an enemy instead of trading exhaustion forever.
- **Don't track a Danger Level per NPC.**
- **A 5E-style stat block:** a list of **special abilities** (like 5E traits and actions).
- **Skill bonuses that mimic classes,** in place of 5E's ability and skill modifiers. The NPC adds a **static bonus** to rolls with those skills:
  - *Enemy soldier:* +2 to Fighter skills.
  - *Enemy commander:* +4 to Fighter skills, +1 to Warrior skills.
  - **Range:** usually up to +5, like a player character's class level. **Legendary NPCs can reach +8**, but only in incredible instances.
  - A bonus can cover a **whole class's skills, a small subset** (e.g. only *Foot close combat*), or a **unique skill** of the NPC's own.
- The bonus works like a class level: d20 + bonus in a challenge, 2d6 + bonus ≥ 9 in a skill check (e.g. an undefended attack).

### Three tracks instead of hit points *(confirmed)*

- **NPCs have Body, Soul and Charisma tracks** instead of hit points, and never exhaust.
- **Body works as hit points** and is scaled like 5E hit points, so it's the largest track. Weapons and damage spells reduce it.
- **Soul and Charisma** are smaller tracks for mental and social defeat: fear, illusions and mind magic reduce Soul; intimidation, deception and humiliation reduce Charisma.
- **At 0 in a track, the NPC is overpowered** that way. Body: down or dead. Soul: breaks, panics or is controlled. Charisma: surrenders, flees or gives in.
- **Fate:** important NPCs (a captain, the burgomaster, the dragon) get **1–3 Fate**, like 5E's Legendary Resistance.
  - Spending 1 Fate turns a lost roll into a win. No Danger Level is involved.
  - Spent Fate comes back **once a day** (at the next sunrise), like Legendary Resistance's "3/day". It never refills during a fight, so players can wear it down.
  - Ordinary NPCs (guards, bandits, wolves) have none; their failures just land.
- **Soul and Charisma damage = a temporary Danger Level + class level.** When a character wins a Soul or Charisma roll against an NPC, the DM sets the Danger Level the NPC faces **as it stands** in that moment, and the NPC's track drops by that much. It isn't tracked afterwards.
  - It mirrors player characters: they pay the Danger Level to avert a failure; an NPC simply loses it.
  - Leverage sets it, as with any Danger Level: an empty threat 1–2, a blade at the throat 4, their family held hostage 5+. Players raise it by preparing (digging up dirt, bringing the army); the NPC's situation can lower it (guards nearby, a powerful patron).
  - **The winner's class level adds** to it, as with weapon damage (like 5E's ability modifier). *A Juggler 3 holding a blade to a guard's throat (Danger Level 4) takes 7 off the guard's Charisma.*

### Player characters and NPCs side by side

| | Player character | NPC (current) |
|---|---|---|
| **Roll bonus** | Class level (max 5) | Static bonus per skill group, class-like |
| **Abilities** | Perks and spells from classes and race | A list of special abilities |
| **Taking harm** | No hit points; exhausts to avert, otherwise Scars | Body, Soul and Charisma tracks; Body works as 5E hit points |
| **Averting failure** | Exhausts Body, Soul or Charisma equal to the Danger Level | Ordinary NPCs can't; important ones spend Fate (1–3) |
| **Danger Level** | Tracked per character | *Not tracked* |
| **Damage it deals** | Weapon or spell dice + class level, against hit points | A threat die (d4/d6/d8+), turned into a Scar |
| **Defeat** | Dying rolls when a Scar overflows a pool | Overpowered at 0 in any track |
| **Manoeuvres** | 1 point of a pool, or free from a weapon or perk | Free if granted by weapon or stat block; otherwise 1 point of a track, usually Soul or Charisma |

### How 5E does it

- **Stat block:** armour class, hit points, speed, ability scores, saving throw and skill bonuses (e.g. *Perception +4*), resistances, senses, languages, challenge rating; then traits, actions, reactions and, for bosses, legendary actions.
- **Bonuses** come from ability modifiers plus a proficiency bonus set by challenge rating (+2 up to +9). Ours replaces both with a class-like bonus.
- **Legendary Resistance:** a boss can turn a failed save into a success a few times a day (usually 3). It's the closest 5E thing to DrD2's Fate: a small, limited way for important NPCs to avert failure.
- **No exhaustion for monsters:** they just take damage until they drop. Social and mental defeat (fear, charm, persuasion) is handled by conditions and DM judgement, not a track.

## Character creation

From the old rulebook's order (still to be confirmed and completed, **Q1**, **Q3**):

0. **Pick a starting level:** Rags to Riches (3), Seasoned (7) or Veteran (9). See [Starting level](#starting-level).
1. **Pick a race** and its **one** racial perk.
2. **Pick classes.** Levels are spread across basic classes, and advanced classes unlock from them.
3. Pick **class perks**: up to one per level in each class.
4. Split **15 points** between Body, Soul and Charisma.
   - **All starting levels go into classes.** A new character can't spend them on extra resource points or extra perks; those options open only for levels gained in play.
5. Pick a **background**: starting equipment, coins, Material, languages and known settings (planned).
6. Pick any number of **traits**, premade or custom (planned).
7. Write a short **personality**: a few words to roleplay from (how they talk, what they want). Free text, no mechanical effect.

## Races

Race has little mechanical impact beyond one racial perk, but it matters a lot for backstory and how NPCs react. No fairies, vampires or ghosts ("No, Gareth.").

| Race | Description | Speed | Racial perk options |
|---|---|---|---|
| **Human** | Diverse and courageous, living life to the fullest | 6 m | For the King, Sticks and Stones, Maiden Fair, I Know a Guy |
| **Elf** | Secluded, ancient, ageless beauty and wisdom | 6 m | Behind Blue Eyes, Eternal Nobility, Veil of Night (the data also has Magical Ties) |
| **Dwarf** | Hearty and proud; honour and their word are everything | 5 m | Night Eyes, Skin Made of Iron, Iron Liver, Blood Bond |
| **Halfling** | Hospitable, jovial, braver than they look | 5 m | Sixth Sense, Silent Feet, Connoisseur, Scrappy |
| **Kroll** | Unique to this system: brawny, primitive, attuned to the wild | 7 m | Echolocation, Fury, Bison Skin |

**Speed** is how far a character moves in one movement on their turn, from 5E (SRD 5.1) at 5 ft = 1 m:
- **Human and Elf** 30 ft → 6 m.
- **Dwarf and Halfling** 25 ft → 5 m. (5E's 2024 rules raised both to 30 ft; we keep the shorter legs.) In 5E, heavy armour doesn't slow a dwarf; here armour costs Body to attempt rather than speed, so nothing changes.
- **Kroll** 7 m: larger and more muscular than humans on average, like 5E's Goliath (35 ft).
- The travel calculator uses it (speed × 0.8 ≈ km/h): a dwarf walks about 4 km/h, a kroll about 5.5 km/h, and the slowest sets the pace.

## Classes

Classes are **bundles of skills**, not a whole identity. Characters are expected to mix them.

- Each class has **skills**, each tied to a resource. Rolls for a skill add that class's level.
- A **unique** skill can only be attempted by characters with that class.
- Anyone can attempt a **non-unique** skill from a class they don't have, just without the class bonus. For example, a pure Medic attempting Acrobatics rolls a plain 2d6.
- **Magic:** *none*; *full* (core spells from the start, more unlocked as perks); *pseudo* (also core spells, but the caster deals themselves a Scar to enter magic mode until the end of the conflict).
- **Maximum class level is 5.**

### Basic classes

| Class | Magic | Skills (resource) |
|---|---|---|
| **Fighter** | None | Foot close combat vs humans and beasts (B), Strength (B), Warrior knowledge (S), Confidence and intimidation (C) |
| **Hunter** | None | Foot ranged combat vs humans and beasts (B), Wilderness movement (B), Wilderness survival (S), Hunting (S), Animal handling (C), Animal training (C) |
| **Juggler** | None | Foot throwing vs humans and beasts (B), Acrobatics (B), Tricks and sleight of hand (B), Urban survival (S), Influence and deception (C) |
| **Medic** | None | Endurance (B), Healing the human body (S), Potions and poisons (S), Negotiation (C) |
| **Incantor** | Full | Scholarship (S), Healing of the soul (S), Willpower (S), Ritual items (S, unique), Dealing with supernatural beings (C, unique except with intelligent beings that speak). Core spells: Blessings and Curses, Eye Sigil |

### Advanced classes

An advanced class unlocks once **its two parent basic classes total 6 levels**, in any split. Fighter 5 / Juggler 1, Fighter 3 / Juggler 3 and Fighter 1 / Juggler 5 can all take Warrior 1. **That is the only gate:** once it's met, the advanced class levels up like any other class, up to 5.

### Aspects

Each advanced class has **3 aspects**. An aspect is the root node of a perk tree within that class. **Mighty classes can have aspects too**, unlocked by combinations of their advanced classes' levels; none are designed yet.

Mechanically, an aspect is a **perk that is granted automatically** when its level requirements are met. Other perks then require it. Supporting aspects doesn't change how a class works, so the same system covers advanced and mighty classes.

- An aspect **belongs to its advanced class**. The character must have that class (Warrior 1 or higher) before any of its aspects can unlock. A Fighter 4 character without Warrior does not hold Brute.
- Within the class, an aspect **unlocks automatically** when the character reaches a certain combination of parent-class levels.
- An aspect **does nothing on its own**. It only acts as a prerequisite for certain perks.
- The parent-class split decides which aspects, and so which perk branches, a character can reach **first**.
- Aspects **stack**: a character can hold several aspects of one class, and can eventually unlock all of them.
- The purpose is to put playstyle-specific perks behind a sensible wall, while letting players plan their advancement.

Example, Warrior:

| Aspect | Requires |
|---|---|
| **Brute** | Fighter 4 |
| **Knight** | Fighter 3 + Juggler 3 |
| **Monk** | Juggler 4 | The aspects for the other nine advanced classes aren't defined yet.

The 10 advanced classes are exactly every pair of the 5 basic classes:

| Class | Parents | Magic | Skills (resource) |
|---|---|---|---|
| **Warrior** | Fighter + Juggler | None | Mounted combat (B), Ironworks (B), Warrior knowledge (S), High society influence (S), Combat leadership (C) |
| **Ranger** | Fighter + Hunter | None | Close and ranged foot combat vs monsters (B), Trophies (S), Woodworking (S), Ranger knowledge (S), Monster taming (C, unique), Leading in the wild (C), Dealing with supernatural beings (C) |
| **Witcher** | Fighter + Medic | Pseudo | Close combat vs monsters, fiends and undead (S), Trophy taking (S), Witcher signs (S, unique), Witcher knowledge (S, unique), Dealing with supernatural beings (C). Core spell: Isa Sign |
| **Scout** | Hunter + Juggler | None | Ranged mounted combat (B), Hiding information (S), Underground influence (C, unique), Leading people outside combat (C), Healing human charisma (C) |
| **Shaman** | Hunter + Medic | Pseudo | Narcotic substances (S), Foresight (S, unique), Animal healing (S), Animal magic (C, unique) |
| **Druid** | Hunter + Incantor | Full | Stone magic, Water magic, Plant magic (all S, unique). Core spells: Earth Bending, Water Bending, Manipulate Plants |
| **Rogue** | Juggler + Medic | None | Aerial acrobatics (B), Mechanisms (S), Forgery (S), Contact poisons (S, unique) |
| **Alchemist** | Medic + Incantor | Full | Alchemy knowledge (S), Explosives, corrosives and gases (S, unique), Elixirs (S, unique), Artificial life (C, unique) |
| **Warlock** | Fighter + Incantor | Full | Fire, Wind, Evocation and Abjuration magic (all S, unique). Core spells: Fire Bending, Air Bending |
| **Mage** | Juggler + Incantor | Full | Illusion, Enchantment and Conjuration magic (all S, unique) |

### Mighty classes

Each combines 3–4 advanced classes. A mighty class unlocks once **its advanced classes total 6 levels**, spread in any way. All of them can contribute, or only some. For Warlord, Warrior 5 / Rogue 1, Warrior 3 / Rogue 3 and Warrior 2 / Ranger 2 / Scout 1 / Rogue 1 all qualify. A single class can't do it alone, because classes cap at 5. As with advanced classes, that is the only gate.

None have skills or perks yet, and Black Priest has no description (**Q8**).

| Class | Built from | Magic | Fantasy |
|---|---|---|---|
| **Warlord** | Warrior, Ranger, Rogue, Scout | None | Leadership, strategy, armies and political power |
| **Ravager** | Warrior, Ranger, Witcher, Shaman | Full | Raw martial destruction: dragon riders, legendary skinchangers |
| **Shadow** | Rogue, Ranger, Mage, Alchemist | Full | Supernatural stealth: vanishing, bypassing barriers |
| **Inquisitor** | Warrior, Warlock, Witcher, Mage | Full | Blood magic that uncovers truth; counters and reflects spells |
| **Zhrets** | Ranger, Druid, Shaman | Full | Pagan priest commanding whole regions of nature |
| **Black Priest** | Warlock, Mage, Alchemist | Full | *(no description yet)* |

## Leveling

Each level-up gives the player **one point to invest**, in one of four ways:

1. **Raise a class level.** The class must be below **level 5**, the per-class maximum. Raising it also grants **one perk of that class**, so a character always has as many perks in a class as their level in it. The perk's prerequisites must be met.
2. **Take a new class at level 1.** A new **basic** class is always available and comes with a perk choice. A new **advanced** or **mighty** class requires its prerequisites to be met.
3. **Take an extra perk** in a class already at level 5, if the perk's prerequisites are met.
4. **Add +1 to Body, Soul or Charisma.**

### Starting level

Characters can start above level 1. There are three typical starts:

| Start | Level | Typical build |
|---|---|---|
| **Rags to Riches** | 3 | Points invested between two classes |
| **Seasoned** *(suggested name)* | 7 | Two basic classes and one advanced class |
| **Veteran** *(suggested name)* | 9 | Two basic classes and one advanced class, at higher levels |

**`level` vs `start_level`:** a character's `start_level` is kept separately from their current `level`. It's used to validate how the character's points were spent: the starting levels all go into classes, so

```
resource points above 15 + extra perks ≤ level − start_level
```

### Validating a character's level

Every level-up point is spent on exactly one of: a class level, an extra perk in a maxed class, or +1 resource. So a character's level can be checked from their sheet:

```
level = Σ class levels
      + (number of class perks − Σ class levels)   ← extra perks beyond one per level
      + (Body + Soul + Charisma − 15)               ← resource points above the starting 15
```

The first two terms cancel, so this simplifies to:

```
level = number of class perks + (Body + Soul + Charisma − 15)
```

Resource points are counted **without perk bonuses**: a perk that raises a stat already counts as the perk. Only **chosen** class perks count. The racial perk, **core spells** (unlocked for free when gaining the class) and **aspects** (granted automatically) don't. Each class level grants one chosen class perk, so chosen class perks never fall below Σ class levels.
## Magic

> **Status: being designed (Q14).** This section records what the old rulebook and `perks.tsx` (git commit `60a40a6`) actually contain. The rules for casting are still mostly missing. The current database holds no spells yet.

### As it stands

- **Three kinds of class:** *none*, *full* and *pseudo*.
  - **Full** (Incantor, Druid, Alchemist, Warlock, Mage, and every mighty class except Warlord): **core spells** come free with the class, and more spells are taken as class perks.
  - **Pseudo** (Witcher, Shaman): the same, but the caster must first **enter magic mode** by dealing themselves a **Scar**.
    - **Magic mode lasts until the end of the conflict,** or outside combat a **reasonable continuous stretch of time**, such as searching one ruin. The DM judges when it ends. Until then, they cast their spells normally, paying each spell's own price.
    - **The Scar is narrative and can be anything:** a Witcher drinking a toxic elixir, a Shaman slicing their palm with a ritual dagger.
    - **It's a level-1 Scar, a blank payment:** it gives **no** temporary points, unlike a Scar taken to avert a failure. *(Reading: any pool, matching the story.)*
- **Magic skills:** full classes' skills are their schools, e.g. Warlock's *Fire, Wind, Evocation and Abjuration magic*, Mage's *Illusion, Enchantment and Conjuration magic*. They're all Soul and unique. Witcher signs and Shaman's Animal magic (Charisma) are the pseudo equivalents.
- **Casting is an action** in combat. The old Danger Level page has a caster on a hill "facing Danger Level 2 to cast a spell", which suggests a failed cast is averted with exhaustion like any other failure. Nothing says what roll casting uses.
- **Core spells** are open-ended tools rather than fixed effects:
  - *Bending* (Druid: earth, water, plants; Warlock: fire, air) works "in a limited manner" on what already exists, and does no direct damage. The exception is Fire Bending, which deals 1d6.
  - *Blessings and Curses* (Incantor) gives a target advantage, disadvantage or a bonus d4 on one kind of roll.
  - *Eye Sigil* (Incantor) is an area that other Incantor spells can be cast through, costing Material per "sigil strength".
  - *Isa Sign* (Witcher) deals 1d6 radiant to monsters and supernatural beings.
- **Prices vary widely.** Spells cost nothing, 1–3 Soul, 1 Charisma, 2 Body (Skinchanger), or 1–2 Material (Fireball, Fire Shield). Some perks make spells cheaper: free Widespread for bending (Marching Forest, Rock and Stone, Tsunami), and free amulet charging (Mighty Amulets).
- **Spell fields:** components (Verbal, Somatic, Material and/or Ritual, sometimes naming the item: "a feather of any bird"), range, area, duration, damage and damage type.
- **Damage is 5E-sized:** Burning Hands 2d6, Fire Shield 2d8, Kenaz *Witcher level × d6*, Fireball *(3 + Warlock level)d6*. Area spells let each target "make a saving throw to halve the damage".
- **Schools of magic** (Arcane, Divine, Eldritch) exist in the old data. Only Detect Magic uses them ("identify its school"), and the database has no field for them. **Unused for now** *(confirmed)*: the magic skills (Fire magic, Illusion magic, …) act as schools, so Detect Magic identifies the skill. Arcane, Divine and Eldritch are kept aside and may go to another class later.

### Proposed base: Dračí Doupě 2

*(Summarised from the DrD2 magic chapter, Part III. Not yet confirmed as our rules.)* Names are mapped to ours: zaříkávač = Incantor, mastičkář = Medic, čaroděj = Warlock, mág = Mage, vědmák = Witcher, Průvodce = DM, Ohrožení = Danger Level, Vliv = Charisma.

**Casting roll** *(confirmed)*
- **Unopposed** (freezing a lake, lighting a fire, raising a wall of earth): a **skill check** with the magic skill, 2d6 + magic class level, success on 9 or more.
- **Against a resisting target** (charming a guard, reading a prisoner's mind): a **challenge**, d20 + magic class level against the target's defense roll.
- **A failed cast** can be averted like any other failure: exhausting points of the skill's resource (usually Soul) equal to the Danger Level, or taking a Scar.

**Spell prices** *(confirmed)*
- **A spell's price works like any other perk's:** either none, or an **activation price** paid by exhausting the resource (or spending Material).
- **Core spells** are only **unlocked from the start**. They aren't automatically free: each has its own price, or none.
- **A spell with no price** is free to cast, as long as all its **components** can be performed.
- This differs from DrD2, where basic magic is always free and only perks cost.
- **Cost to attempt:** in hard circumstances (ice on a hot summer day), the DM sets an extra cost the caster pays **before rolling**, just to try. It's the general [cost to attempt](#cost-to-attempt) rule, the same as armour encumbrance: a knight in heavy armour pays 2 Body before trying to sneak through a dungeon. It comes on top of the Danger Level, which still sets the cost of averting a failure.

**Spell damage** *(confirmed)*
- **Core spells can't kill directly.** At most they do **chip damage**, like Fire Bending's 1d6 (a torch) or Isa Sign's 1d6. They hurt mainly by raising the target's Danger Level or by exploiting circumstances (oil, a cliff edge).
- **Spells bought as perks can carry real damage dice, the same as 5E,** e.g. Fireball, Burning Hands, Kenaz.
- Same idea as DrD2, where only perks and substances kill.
- **Against player characters,** the DM translates a spell's damage into a **threat die**, like any NPC attack (d4 weak, d6 normal, d8 or more for big threats). The spell's own dice only apply to NPCs with hit points.
  - *Scale, confirmed for now:* chip damage from core spells d4; small perk spells (Burning Hands) d6; big area spells (Fireball, Kenaz) d8; legendary magic d10 or more.
- **Area spells** *(confirmed for now)*: every target in the area makes a defense roll. Old texts' "saving throw to halve the damage" reads as:
  - **An NPC that wins** takes **half damage**, rounded down; one that loses takes full damage.
  - **A player character who wins** takes **no harm**: they dived clear. One who loses averts with exhaustion as usual, or takes a Scar from the threat die.

**What a spell needs**
1. **The magic skill**, e.g. *Wind magic* or *Illusion magic*. Most schools are unique skills: without the skill you can't even try.
   - **Exception:** the basic Medic and Incantor skills. Anyone can try to brew a healing potion or poison, bless or curse, bind supernatural forces to a place or item, or use ritual items. The class only adds its level.
2. **A ritual.** If the caster can't perform it (hands tied, gagged), there's no spell.
   - **Words and sounds:** a formula, a curse, an animal's call, a song, a tune on an instrument.
   - **Gestures:** hand movements that release and direct the magic.
   - **Sigils:** symbols, runes and lines that bind supernatural forces to a place or item. Slow. *A rune carved into a chest curses whoever touches it until the next sunset or sunrise.*
   - **Preparing a substance:** potions, elixirs, poisons, narcotics, explosives, corrosives, essences, golem shems, amulets and talismans. Slow.
3. **Contact with the target** (range):
   - **Touch:** the caster's body touches the target.
   - **Symbolic touch:** the caster holds something that was part of the target (hair, a splinter) or that the target owned and loves (a parent's ring). The link fades at the next solstice or equinox.
   - **Sight:** the caster sees the target with their own eyes; no mirrors, spyglasses or crystal balls.
   - **Contact:** the target touches what the caster made: steps over a sigil, drinks a substance, stands close enough to an explosion.

**Price**
- **Casting is normally free.** Freezing part of a lake or capsizing a boat with a wave is as ordinary for a Druid as tracking is for a Hunter.
- **Hard circumstances cost resources.** Making ice on a hot summer day might cost 1, paid like any other hard activity.
- **Ingredients:** substances always need them (herbs, trophies, gems, metals), usually bought. The weakest substances can use emergency ingredients gathered in the field. Sigils also need ingredients, which must be bought.
- **Activating perks** that make a spell last longer, or be stronger or more complex, costs resources, usually Soul or Charisma.

**Effects:** the caster's player decides the effect, within their school:
- **Body and soul of living beings:** Incantor, Medic, Shaman, Witcher, Alchemist.
- **Elements and plants:** Warlock, Druid.
- **Controlling people and animals, and learning information:** Mage, Shaman.
- **Animating artificial beings:** Alchemist.
- **Binding supernatural forces to a place or item:** most magic classes, in some form.

**Reaching the target** *(confirmed)*: **every spell**, core or perk, needs one of the four kinds of contact above: **touch, symbolic touch, sight, or contact through a sigil or substance**. Metres only limit how far within that.
- *A Fireball still needs the caster to see where it lands. It can't be cast into a dungeon from the surface above.*

**Two kinds of units** *(confirmed)*: both are kept, for different jobs.
- **Approximate units** (a palm, a hut, a village) give a rough idea of what a **non-specific** spell can do, one that can range in size, like bending.
- **Metres and exact areas** are for spells where a **specific area matters**, like Fireball's spread.

**Scale of the basic version**
- **Targets:** one. Some substances hit everyone nearby (gunpowder, a gas cloud).
- **Size:** about a small village house (a "witch's hut"). A Druid's wave can capsize a raft, but only rocks a ship.
- **Strength:** a human's, or what a human could do by natural means. A gust of wind pushes as hard as a person could.

**Duration**
- **Instant:** one action that would otherwise be impossible (leap across the battlefield), or a change to the target's Danger Level (a wave of fear; the target can steel themselves again next moment).
- **Until sunset or sunrise**, whichever comes first.
- **Until the solstice or equinox**, up to a quarter of a year.
- Anything longer than instant usually needs a perk.

**Our durations:** all six are kept. The extra three extend DrD2 rather than replace it.

| Duration | Ends | The caster meanwhile |
|---|---|---|
| **Instant** | Right away | Free |
| **Until sunset or sunrise** | At the next one | Free |
| **Until solstice or equinox** | At the next one | Free |
| **Concentration** | When the caster stops concentrating | Spends their **action** on the spell and can't do other tasks |
| **Until the end of combat** | When the fight ends | Free |
| **Until dismissed** | When the caster or target ends it | **Needs no action** and can do other tasks |

Concentration and until dismissed are deliberately separate: concentration ties the caster up, while a dismissable spell runs on its own.

**Breaking concentration**
- **Any attack at the caster forces the roll,** whether it hits or not. This is stricter than 5E, where only damage does.
  - The defense against the attack only decides whether the caster is **hit**. Win it, lose it, avert it with exhaustion, or let it through: the caster rolls to keep concentrating either way.
  - A hit that leaves no Scar (armour absorbed it) counts too.
- **The roll is a defense roll** (a challenge against the attacker) with the **caster's magic class level** as the bonus. It replaces 5E's Constitution save.
- Losing it ends the spell, unless the caster **averts the failure** like any other: exhausting points equal to the Danger Level, or taking a Scar.
- **It costs the Defense manoeuvre** (1 point), since the caster's action is already spent on concentrating.
- *Planned (to be added by Michal):* an **Incantor perk** that helps with concentration rolls, e.g. a free Defense manoeuvre for them. Every full caster can reach it through their Incantor levels; Witcher and Shaman can't.
- **It also ends** (as in 5E):
  - when the caster **starts another concentration spell**: one at a time;
  - when the caster is **incapacitated** (Incapacitated, Paralyzed, Petrified, Stunned, Unconscious);
  - on a **violent distraction** (a wave over the deck, a collapsing floor), if the caster fails a **skill check**: 2d6 + magic class level, success on 9 or more.
    - No Defense manoeuvre is needed, since nothing is attacking.
    - The DM sets the Danger Level by how violent the distraction is. A failure can be averted with exhaustion or a Scar, as usual.

**Components** *(confirmed)*. A caster who can't perform a spell's components can't cast it.

| Component | What it is | Blocked by |
|---|---|---|
| **Verbal** | Words, sounds, a song | A gag, magical silence |
| **Somatic** | Gestures | Bound hands |
| **Material** | The spell **spends Material**, and names what it is ("a feather of any bird"). The component is the spell's Material price. | Having no Material |
| **Ritual** | A long ceremony, minutes or more; not in combat. Sigils, charging a ritual item, brewing substances. | Being in a fight, or rushed |

Reusable focus objects (a staff, a holy symbol) aren't components; they're [ritual items](#magic).

**What limits core spells** *(confirmed)*. Core spells can be free and used every turn; the limits are elsewhere:
- **An action** each cast, so the caster isn't attacking or doing anything else.
- **A roll** each cast. Failures cost exhaustion at the Danger Level, and that adds up: by turn three a novice mage can be worn out.
- **Scale:** one target (more with a paid Widespread), hut-sized, human strength, no killing. Hard circumstances add a cost to attempt.
- **NPC immunity:** stronger NPCs can be immune to simple curses, as a stat-block ability.
- **Blessings and Curses stays free.** It's a buff that costs an action and risks exhaustion. In play, players use buffs less once they have more active options.

**Magic can't kill on its own.** Basic magic can't kill or knock out a living creature without a perk. The Warlock's fire has the strength of a torch: it scares, dazzles, burns and raises the target's Danger Level, but won't set their clothes alight.
- **Circumstances can kill:** douse the target in oil first and the same spark makes a living torch.
- **Perks can kill:** a perk like *Dragon's Breath* makes the fire itself deadly.
- **Substances can kill** in their basic form (poisons, explosives, corrosives), balanced by needing contact.

**Control**

**Charmed and control are separate** *(confirmed)*:
- **Charmed** (5E's condition): the target keeps **its own will**. It treats the caster as a friend, but acts for itself.
- **Control** (DrD2's, below): the Mage's puppeteering of people and the Shaman's of animals. An **active act**: the caster drives the target, as a henchman. *Needs henchman rules, not written yet.*

- **Unresisting target** (a minor NPC): a skill check with the control skill. **Resisting:** a challenge, which can grow into a longer conflict with both sides exhausting to avoid failing.
- **On success,** the controlled creature acts like a henchman. The caster uses its skills, but pays any exhaustion, manoeuvres or perk prices from **their own Charisma**.
- **The caster takes no actions of their own** while controlling. They roll initiative only for the controlled creature, but can still use the Defense manoeuvre and follow slowly. Letting go ends the control.
- **If the caster sets no reaction,** the controlled creature reacts normally and pays with its own resources.

**Learning information** (Mage's mind magic, Shaman's animal magic and Foresight, Druid's talking to plants):
- **Willing target:** a successful roll opens the link, and they can talk as long as they like.
- **Resisting target:** each successful roll gets one simple, true answer, usually yes or no.

**Countering:** the target sometimes needs an action to undo a spell.
- **Illusions:** knocking on the illusion settles it with no roll; questioning a fake ghost is a challenge with the Mage.
- **Lasting flame:** the victim must put it out with a skill check, or it keeps raising their Danger Level like a repeating trap.

**Sigils** (DrD2 *magické obrazce*, "glyphs")

DrD2's glyphs **are our sigils**, the same thing as Eye Sigil and Salamander Sigil already in the rules. We call them sigils.

- **Incantor** gets **Eye Sigil** as a **core spell**, free with the class. It's the only class whose sigil comes free.
- **Every other magic class buys a sigil perk** for its own school, like any other perk: Salamander Sigil for Warlock fire, and one each for the rest.
- **Sigil Guardian** is a speciality perk. It lets the caster set a **trigger condition**, such as a password or one specific person touching the sigil. Without it, the sigil reacts to anyone who steps in or touches it.

Most magic classes can draw sigils that guard a place or an item, binding a force of their school to it. A Warlock's wind sigil can move things inside it, hold a door shut or knock intruders down.

- **Alarm:** when someone steps on the sigil or touches the marked item, the caster knows, and may even wake from sleep. They don't know who it is.
- **Casting through it:** the caster can then cast on the place, the item or the intruder through the bound **guardian**, as if they were there. They can't see, but they sense vaguely whether the target resists, and how.
- **Making one:**
  - It follows the crafting rules: a long ritual using ingredients (basilisk blood, burnt herbs, ground bear claws, a black rooster, crushed gems).
  - The minimum is **1 dose** of ingredients, worth 1 groš in DrD2 (for us, probably **1 Material**).
  - The ingredients become the **guardian's resource pool**. It works like a henchman's Bond, but can't take Scars. It's never returned, even if unused.
  - **Cap:** no more than the caster's Soul pool size.
  - Sigils are consumables, so field-gathered emergency ingredients won't do: such a sigil might scare someone, but it has no effect in the rules.
- **One sigil at a time:** drawing a new one breaks the link to the old one. A caster with several schools, and sigil perks for each, can bind several guardians into **one** sigil and use its pool for any of them.
- **Noticing an intruder:** a caster who is on guard notices at once. One who is busy or asleep must roll to notice.
- **Acting through it:**
  - It uses the caster's initiative and **their action** for the round, even if they're standing right there.
  - Only the bound school's magic can be used, though the caster's perks still work.
  - The caster can exhaust **only the sigil's pool**, never their own.
  - Every action through a sigil is hard: it costs **1 sigil point just to attempt**.
- **Targets:**
  - **The intruder:** counts as symbolic touch, one way only.
  - **The marked item:** a Druid can make a marked tree creak and sway as a warning.
  - **Any place inside the sigil:** so guarding sigils are drawn as closed shapes, like a circle round a camp or a line of runes round a room.
- **End:** at the next sunset or sunrise. It also ends earlier if:
  - someone triggers it and the caster chooses not to act;
  - the caster fails an action through it and doesn't exhaust the sigil's pool to avert the failure;
  - the pool runs out.

**Ritual items** (DrD2 *rituální předměty*; the Incantor's *Ritual items* skill)

Most Incantors carry a staff, an amulet or talisman, a holy symbol or their order's badge. The item stores magical power the Incantor put into it, to strengthen their spells later.

- **Charging** is a ritual of incantations and ceremony: burning scented candles, scattering ash from dead men's bones, shattering a crystal, spending ingredients. It's done at **sunrise or sunset**, and is strongest at a **solstice or equinox**.
- **Incantor only.** *Ritual items* stays a unique skill: other classes can't charge or use a ritual item, even with a plain roll.
- **One per character.** It must hold something that was part of the owner's body (cut hair or beard, a drop of blood).
  - The owner renews the link at every solstice or equinox.
  - Losing it is dangerous: until the next solstice or equinox, whoever holds it has **symbolic touch** on the owner.
- **How much it holds:**
  - **Sunset or sunrise:** store **1 point**, paying **1 dose of ingredients** (1 Material).
  - **The evening of a solstice or equinox:** store **up to 5**, 1 dose each.
  - **Wellsprings:** places of power where more than 1 can be stored at sunset or sunrise. Their strength runs from **2 to 5**. Evil or cursed places allow **none**, even at a solstice.
  - When several apply (a wellspring at a solstice), only the **highest** counts, so 5 at most.
  - Points already stored aren't lost when a bigger occasion allows more. If the item already holds as many as the occasion allows, nothing more can be added.
- **Using it:** stored points pay **perk activation prices and manoeuvres when casting**, for any magic the Incantor has, including advanced magic classes' schools.
- **Mighty Amulets** (old Incantor perk: "no Material to charge your amulet") waives the 1 Material per stored point. It doesn't raise how many points can be stored or how often; the sunrise, sunset, solstice and wellspring limits still apply.

**Defense against magic**

When a spell is stopped, all resources put into it are lost.

*Natural means*
- **Breaking the ritual:** knock the caster down, grab their hands, cut them, hit them in the mouth, choke them. Captured casters get bound and gagged, and their odd trinkets get smashed in case they're amulets.
- **Leaving range:** hiding behind an overturned table blocks a spell that needs sight. The caster can target the table, not the person behind it.
- **Folk wisdom:**
  - People avoid touching casters. Tying up a captured wizard is a job for the least popular or least bright member of the group.
  - People burn their cut hair and nails, and cover spilled blood.
  - The well-off get their hair cut just before a solstice or equinox, so the symbolic link fades at once. A lord's barber is among the most vetted people at court.
  - Superstitions abound: not meeting a caster's eyes, hooding captured warlocks, singing loudly or plugging ears with wax so curses can't be heard. The last one backfires, because knowing a curse's exact words helps break it.
- **Ending effects:**
  - Short spells can simply be avoided: jump away from the flames, run from the animated tree.
  - Lasting spells end when naturally undone. A fire wall doused with water doesn't relight. Calming a magically enraged person with kind words ends the mind magic, as does the target mastering themselves by willpower.
- **Waiting it out:** a bewitched person is locked up until sunrise or sunset to see whether it's magic or real madness.
  - Poisons and narcotics last the same way, which is why food tasters get up before dawn (poison shows at sunrise) and great lords dine after dark.

*Supernatural means*
- **Counterspells** stop a spell as it's cast:
  - **Against the ritual:** do magically what could be done naturally. An Incantor curses the enemy's tongue tied; a Warlock knocks them down with a gust.
  - **Against the spell:** with the same school or another, wherever it makes sense to the table. *A Druid making fog can be stopped by another Druid seizing the water, or raising a water wall first, or by a Warlock's gust.* Each needs a **won challenge**.
- **Breaking spells and antidotes** remove a lasting effect after it's cast:
  - Only **supernatural effects** can be broken. A curse can be lifted and a narcotic suppressed, but fire magic can't heal burns from another Warlock's fire.
  - The breaker needs the **same conditions as for casting**: the skill (the school, or making that substance), but not the perks that were used.
  - They also need **range** (touch or symbolic touch to the victim) and **the same resources** that went into the spell. An antidote needs as many ingredients as the poison.
  - They must **know what the spell is:** from being there when it was cast, from an exact description (a curse's wording, a poison's recipe), or from studying its effects (Incantor's occult knowledge, Medic's medical knowledge).
  - **Breaking ends the spell, not its consequences.** The sleeper wakes and the fire wall goes out. Scars taken to resist the flames stay, and the Mage keeps what they read. One-off spells can only be averted while they happen.

### Potions and poisons (DrD2)

*(Summarised from DrD2 Part III. Not yet confirmed.)* Both are **substances**: crafted with ingredients, governed by the general magic rules, even if the world treats them as plain herbalism.

**Potions** (Medic)
- Drops, ointments, balms and draughts that help **heal wounds, poisons and diseases**.
- **Making one:**
  - It follows the crafting rules.
  - The maker decides **which Scars it treats**: a burn balm, a wound ointment, a fever draught, an anti-venom serum.
  - **1 ingredient (1 Material) per stored point.**
- **Using it:** when healing a **Body Scar** of that kind, the patient pays from the potion's points instead of their own. A potion with several points can be shared between patients until used up.
- **Shelf life:** practically forever. After months the ointment may go rancid or the drops ferment, which isn't always a bad thing.

**Amulets and talismans** (sidebar)
- **Amulets** are pendants made of herbs, animal parts, monster or undead trophies, sometimes gems or crystals. Always with something of the maker in them. *A pouch of jasper dust and myrtle leaves picked at midnight on the solstice; a shard of dragon horn hung with eagle feathers; a wrist cord rattling with an executed criminal's finger bones.*
- **Talismans** carry writing: runes, signs, words or whole incantations. *An amethyst engraved with a moonlight rune; a wooden box holding a prayer written by a holy man decades ago.*
- Anyone can own them as flavour. Incantors store resources in them (see [Ritual items](#magic)). For Shamans and Witchers an amulet can be the tool that **awakens their magic**, DrD2's *essence*. That fits our pseudo-magic mode.

**Poisons** (Medic: ingested)
- **Effects in the story:** shivers, watering eyes, rashes, cramps, pain. Dangerous ones paralyse, cause deep sleep or kill.
- **Medic poisons work only on humans and animals**, and only when **drunk or eaten**.
- **Timing:** usually it takes effect at the **next sunrise or sunset** after being swallowed and wears off at the one after. The dead stay dead.
- **Target is always Body.**
- **Strength:** each level of strength costs **1 ingredient (1 Material) per dose**.
- **Strong effect:** death, sleep, paralysis or pain. It happens when the poison's strength **exceeds the victim's Body limit** and the victim doesn't avert it.
- **Weak effect:** a lesser version (e.g. tiredness instead of sleep), when the victim averts the failure.
- **A poison can instead impose a penalty:** Imprecise, Feeble or Foolish with a named skill (rarely a skill group), or Slow initiative. Usually a physical activity; mental or social ones (a headache, a hideous facial rash) are the exception.
- **A poison can also add a Body Scar** on top of its strong effect, like other traps.
- **Every Medic poison has a giveaway**, at least one of: a distinct taste, a distinct smell, or a distinct colour or consistency.

*Example (DrD2):*
- **Making it:** the Medic Čajek brews a poppy sleeping draught for the town jailer. One drinker, target Body, strength 3. Strong effect: deep sleep. Weak effect: tired and unfocused. Giveaway: a sweet poppy aftertaste.
- **Cost:** two doses cost 3 × 2 = **6 ingredients**. He has no time to rest, so the DM has him roll for each dose; he succeeds.
- **Slipping it in:** pouring it into the jailer's wine isn't the poison skill, it's sleight of hand or acting. A good story earns him a bonus and he succeeds. The jailer is a minor NPC, so there's no challenge.
- **The jailer resists** and fails. Strength 3 beats his Body limit of 2, so he falls asleep.
- **Had the DM spent Fate** ("the wine was too sweet, he didn't finish it"), the jailer would only be dull and inattentive, and face a higher Danger Level if Čajek tried to sneak past.

**Unusual poisons** (a unique Medic speciality, for every poison including Rogue contact poisons, Alchemist gases and Shaman narcotics)
- Each property costs **+1 ingredient per strength level**:
  - **Fast:** works immediately on swallowing.
  - **Two-part:** works only after something else triggers it (alcohol, a pipe).
  - **Hard to detect:** no taste, smell or colour.

#### Our poison rules *(confirmed)*

- **One effect per poison,** like 5E. DrD2's strong and weak effects are dropped.
- **The effect** is set when the poison is made: a condition (Unconscious, Paralyzed, or Imprecise, Slow, Feeble or Foolish with a skill), a Body Scar, or both.
- **Strength is the poison's Danger Level.** It still costs 1 Material per strength per dose.
- **Resisting:** the victim makes a **Body skill check** (2d6 + a fitting class level, success on 9 or more). There's no attacker, so it isn't a defense roll.
- **On a failure:**
  - **A player character** can avert it like any failure, by exhausting Body equal to the strength or taking a Scar. If they do, the poison has **no effect**.
  - **An ordinary NPC** suffers the effect.
  - **An important NPC** can spend 1 Fate to avert it.
- **Poison damage** *(confirmed for now)*: the effect can be damage, which works on both systems:
  - **Against NPCs:** **strength d6** off the Body track, with no class level added (like 5E: serpent venom 3d6, wyvern poison 7d6).
  - **Against player characters:** the DM translates it into a **threat die**, as for spells: strength 1–2 d4, 3–4 d6, 5–6 d8, 7+ d10. The roll is the Scar's level.
  - **Armour doesn't reduce poison.** Resistance and immunity to poison still apply (see [Conditions, resistances and weaknesses](#conditions-resistances-and-weaknesses)).
- **Timing** *(confirmed)*: a poison in its default, weakest form takes effect at the **next sunrise or sunset** after it's taken, and wears off at the one after. The dead stay dead.
  - **Immediate poisons are a speciality:** a perk for player characters (like DrD2's *Unusual poisons*), a special ability for NPCs (a giant spider's bite).
  - A condition from a poison lasts as long as the poison does.
- **Delivery** *(confirmed)*: three ways in, each tied to a skill.
  - **Swallowed:** Medic's *Potions and poisons*. Anyone can try; the Medic adds their class level.
  - **Contact:** Rogue's *Contact poisons* (unique). **Weapon (injury) poisons count as contact poisons**: a coating on a blade or arrowhead gets in through the wound. In a fight they're only useful when immediate, so they usually need the immediate-poison perk too.
  - **Breathed in:** Alchemist's *Explosives, corrosives and gases* (unique).

#### Our potion rules *(confirmed)*

- **One kind of Scar per potion.** The player says in the story what it treats when it's made: burns, cuts and bruises, fever, a snake's venom. It pays only for healing Scars of that kind.
- **Body Scars by default.** A Soul substance can be allowed where the story fits (a calming tea against nightmares).
- **Omni Potion** (a Medic perk) makes a substance that heals **unspecified wounds**, any kind of Body Scar.
- Otherwise as DrD2: 1 Material per stored point, shared between patients until used up, and it keeps practically forever.

#### Conflicts: potions and poisons

1. ~~**Body limit.**~~ Answered: strength is the Danger Level of resisting. DrD2 compares poison strength with the victim's small Body *limit* (the jailer's is 2). Our NPCs' Body is a large 5E-style track (a soldier around 11), and player characters' Body pools are around 3–9. A different threshold is needed. → **Q17a**
2. ~~**Resisting.**~~ Answered: a Body skill check. DrD2 has the victim roll a *výzva*; 5E a Constitution save against a DC; ours replaces saves with a Body defense roll, but a defense roll is a challenge against an attacker, and a poison has none. → **Q17b**
3. ~~**Timing.**~~ Answered: next sunrise or sunset by default; immediate poisons need a perk (player characters) or an ability (NPCs). DrD2: from the next sunrise or sunset to the one after. 5E: instant onset, minutes to hours (Midnight tears waits until midnight). Ours: conditions last as long as their cause. → **Q17c**
4. ~~**Delivery.**~~ Answered: weapon poisons are Rogue contact poisons. DrD2 splits it by class: Medic ingested, Rogue contact, Alchemist gas (inhaled). 5E also has **injury** poisons coating weapons and ammunition, which this excerpt doesn't mention. → **Q17d**
5. **Price.** DrD2: 1 Material per strength per dose (+1 per unusual property). 5E: 100–2,000 gp. The old Rogue perk *Your Lips Are Venomous Poison* is 3 Material per unit of strength (4 to be immune yourself), steep next to DrD2.
6. ~~**Strong effects vs player characters.**~~ Answered: lethal poison is damage, a threat die by strength turned into a Body Scar. For NPCs they map onto conditions (sleep → Unconscious, paralysis → Paralyzed) or the Body track (death). For player characters there are no hit points; does "death" become a big Body Scar, e.g. level = strength? → **Q17a**
7. **Penalties fit:** DrD2 poisons use exactly the four penalty conditions we just adopted (Imprecise, Slow, Feeble, Foolish), which covers 5E's Poisoned condition without adding it.
8. ~~**Potions vs our healing substances.**~~ Answered: one kind of Scar, Body by default; *Omni Potion* lifts the limit. Ours already hold resource points for scar healing (a Medic's burn ointment worth 5). DrD2 adds two limits: a potion treats **one kind** of Scar, and only **Body** Scars. Ours say nothing about either.
9. **"Bonus of size 1."** DrD2's *Výhoda* is a number; our advantage is a die (3d6 keep two). Read it as advantage.
10. **Dwarves.** 5E dwarves resist poison by race. Ours have *Iron Liver* (advantage against alcohol) only.

### Conflicts with 5E and our current rules

1. **Damage spells.** ~~Can basic magic kill?~~ Answered: core spells only chip, perk spells carry the dice. Against player characters the DM uses a threat die instead. → **Q14d**
2. ~~**Ranges and areas.**~~ Answered: both kept; approximate units for open-ended spells, metres where a specific area matters. The old spells use metres (Detect Magic 10 m, Fireball and Earthquake 30 m) like 5E. DrD2 uses touch, symbolic touch, sight and contact, and caps size at a hut. → **Q14k**
3. **Durations.** ~~Keep only DrD2's three?~~ Answered: all six stay. *Concentration* ties up the caster's action like DrD2's control; *until dismissed* needs no action. Unlike 5E, concentration isn't something a caster keeps up while acting freely. → **Q14g**
4. ~~**Saving throws.**~~ Answered: a won defense roll halves area damage for NPCs and avoids it for player characters. Spell texts say "make a saving throw to halve the damage". DrD2 resolves it by whether the target resists: a skill check if not, a challenge if so. That fits our defense rolls; halving doesn't. → **Q14e**
5. ~~**Charm.**~~ Answered: Charmed and control stay separate. The old Charm spell uses 5E's charmed condition. DrD2 control turns the target into a henchman paid for with the caster's Charisma. We have no henchman rules yet. → **Q14l**
6. ~~**Components.**~~ Answered: Verbal, Somatic, Material (spent Material, named by the spell) and Ritual (a long ceremony, not in combat). The old set is Verbal, Somatic and "Material and/or Ritual". "Material" clashes with the Material resource, and "Ritual" means something else in 5E (a slow cast without a slot). DrD2 has four kinds: words, gestures, sigils, substances. → **Q14h**
7. ~~**Unique Incantor skills.**~~ Answered: *Ritual items* stays unique; *Dealing with supernatural beings* is open to anyone with intelligent, speaking beings, and Incantor-only with the rest. Our class table marks *Ritual items* and *Dealing with supernatural beings* as unique. In DrD2, anyone can attempt Incantor magic. Blessings and Curses would also be a skill anyone can try, not a core spell. → **Q14m**
8. ~~**Price.**~~ Answered: spells are priced like perks (core spells only unlocked free), hard circumstances add a cost to attempt, and pseudo-magic needs a Scar to enter magic mode for the conflict. → **Q14b**, **Q14c**
9. **Hard-circumstance cost.** DrD2's "costs 1 to attempt" for ice on a hot day has no general rule in ours. The closest is the armour encumbrance cost paid before acting. → **Q14b**
10. ~~**Scale.**~~ Answered with conflict 2. Base magic is one target, hut-sized and human-strength. Our Widespread manoeuvre already covers more targets. Earthquake (30 m radius) and Fly (10 m per turn) go beyond the base scale and would need to be perks. → **Q14k**
11. ~~**Schools.**~~ Answered: Arcane/Divine/Eldritch are unused for now; the magic skills act as schools. DrD2 has no Arcane/Divine/Eldritch. It groups magic by class domain, like our skill names. → **Q14i**
12. **Rolls.** DrD2 mentions a third roll type (*výzva*), used e.g. for noticing a sigil being triggered while asleep. We only have skill checks and challenges. → **Q14p**
13. **Sigils.** ~~DrD2 glyphs vs our sigils~~: answered, they're the same thing. Incantor gets Eye Sigil as a core spell; every other magic class buys a sigil perk. *Sigil Guardian* adds a trigger condition. 5E's *Glyph of Warding* stores one spell until triggered; here the caster acts live through the sigil. → **Q14n**
14. **Counterspells.** 5E's *Counterspell* is a reaction with a slot-level check. DrD2's is a won challenge with any fitting school. Our *Berkano Sign* (1 Soul, break one spell targeting you, usable with the Defense manoeuvre) breaks spells without knowing what they are, which DrD2 requires. → **Q14o**
15. **Breaking spells.** 5E's *Dispel Magic* and *Remove Curse* work by spell level. DrD2 needs the school, range, matching resources and knowledge of the spell. Breaking not healing Scars agrees with our scar healing rules.
16. **Concentration.** 5E breaks it on damage with a Constitution save. Ours: any hit (even one armour absorbs) forces a defense roll with the caster's magic class level. Details are listed under *Breaking concentration*. → **Q14g**
17. ~~**The "hard action" cost**~~: answered. Hard circumstances add a DM-set cost to attempt, like armour encumbrance; a sigil's 1 point per action is the same rule.
18. **Poison duration.** DrD2 poisons and narcotics run until the next sunrise or sunset. Our Medic, Rogue and Alchemist substances have no duration rules yet.
19. **Ritual items vs 5E.** A 5E focus (arcane focus, holy symbol) only replaces material components. The closest 5E item to a battery is the *Pearl of Power*. No direct clash; *wellsprings* are new to our world and need a place in the World section.

Open points are collected as **Q14** in [Open questions](#open-questions).

## Perks and spells

- There are about **137** perks and spells, defined in the old `data/perks/perks.tsx`.
- Each belongs to a race (racial perks) or a class (class perks, core spells, spells).
- **Perk:** a name, a one-line **flavour** text with the gist, a description, and either **passive** or an **activation price**. A price is an amount (or "Variable") of a resource (Body, Soul, Charisma, Material, Coins), sometimes with a unit, e.g. "per unit of strength" or "per group member".
  - A Body, Soul or Charisma price is paid by **exhausting** that many points of the pool.
  - A Material price is **spent** Material, e.g. Material per unit when crafting a healing substance.
- **Typical effects:**
  - Advantage on certain activities.
  - Free manoeuvres.
  - Bonus actions.
  - Extra resources from Scars.
  - Cheaper scar healing.
  - Narrative "you can determine that…" abilities, e.g. I Know a Guy or Hidden Pocket.
- **Spells are perks** *(confirmed)*: every non-core spell takes one of the class's perk slots, on purpose, so casters get no more abilities than anyone else.
- **Spells** add components, damage, damage type, range, area of effect and duration.
  - **Components:** Verbal, Somatic, Material and/or Ritual (see *Components* under Magic).
  - **Durations:** instantaneous; until concentration breaks; until the end of combat; *short* (until the next sunset or sunrise); *long* (until the next solstice or equinox); *will* (until dismissed).
  - **Schools of magic** (old data): Arcane, Divine, Eldritch. Unused for now.
- Perks can require an **aspect** of an advanced class (see [Aspects](#aspects)). This matches the database's `has_aspect` requirement.

## Backgrounds

*(Planned.)* Like 5E backgrounds, but **without skill proficiencies**, because those come from classes. A background gives:

- **Starting inventory:** equipment, **coins** and **Material**.
  - Equipment is made of **individual items** from the item catalogue (`/admin/items`: weapons, armour, shields, clothing, tools, gear, each with an optional picture).
  - A background's gear is a list of **groups**. A group with one option is simply given; with several, the player **takes one**, e.g. Soldier: *two weapons, or a weapon and a shield*.
  - A line inside an option can be a **choice list** ("any martial weapon", "spear or longsword"); the player picks the item when creating the character.
  - The picks become rows in the character's **inventory** (`character_items`): quantity, carried or left behind, broken, a note. Inventory is shared across campaigns; the owner and the DM of any campaign the character is in can change it. Managing it in play isn't built yet; the sheet shows it read-only.
  - Changing the background or the picks later replaces the background's items; saving the build otherwise leaves the inventory alone.
- **Non-class abilities**, such as the number of **languages** spoken.
- **Known settings**, such as the criminal underbelly or noble courts: places to navigate or groups of people to deal with. A roll there gets **+1** on top of the class level, e.g. a Criminal haggling with a fence, or a Sailor finding a ship in port.
  - The DM decides whether a roll falls inside the setting.

### Languages

Kept deliberately vague for now. A starting list:

| Language | Spoken by |
|---|---|
| **Common tongue** | Everyone; the everyday language of the realm |
| **Liturgic** | Clergy and scholars; the language of rites, scripture and old records |
| **Oriental tongues** | Merchants and travellers from the far east and south (one language family) |
| **Northern tongues** | The northern clans and raiders |
| **Elven** | Elves, and old elven ruins and songs |
| **Dwarven** | Dwarves, and dwarven runes and holds |
| **Kroll tongue** | Krolls; primitive and mostly spoken |
| **Old tongues** | Dead languages of fallen empires; written only, read by scholars |

Languages can be linked as **related** (dialects, deviations, bastard mixes) in the language editor. A link shows on both languages; it has no rules effect yet.

Every character speaks the **Common tongue**. Elves, Dwarves and Krolls also speak their **racial language**. Humans and Halflings, who have none, instead pick **one extra language** of their choice. A background then adds the number of extra languages shown below.

### Starter backgrounds

*(Draft adapted from 5E, to be edited.)* For scale: 1 gold is a lot for a commoner, 1 silver = 10 copper, and 1 Material is worth 1 silver.

| Background | Equipment | Coins | Material | Extra languages | Known settings |
|---|---|---|---|---|---|
| **Soldier** | Spear or longsword, shield, medium armour, rank insignia, dice set, bedroll | 5 silver | 2 | 0 | Barracks and army camps, the chain of command |
| **Criminal** | Dagger, dark hooded clothes, crowbar, lockpicks | 8 silver | 2 | 1 (e.g. an oriental tongue picked up from smugglers) | The criminal underbelly, fences and hideouts |
| **Noble** | Rapier, fine clothes, signet ring, scroll of pedigree | 1 gold | 0 | 1 (e.g. Liturgic or Elven) | Noble courts, etiquette and heraldry |
| **Acolyte** | Prayer book, holy symbol, incense, vestments | 5 silver | 3 (incense, candles) | 1 (Liturgic) | Temples and monasteries, the church hierarchy |
| **Hermit** | Quarterstaff, herbal kit, winter blanket, journal | 2 silver | 5 (herbs) | 1 | The wilds near their retreat, folk remedies and superstitions |
| **Sailor** | Club, 15 m of silk rope, lucky charm, sailor's clothes | 5 silver | 2 | 1 (e.g. an oriental tongue) | Ports, ships and dockside taverns |
| **Artisan** | Light hammer, artisan's tools of one craft, guild letter, traveller's clothes | 1 gold | 5 (craft supplies) | 0 | Guilds, workshops and markets |
| **Commoner** | Sickle or handaxe, common clothes, shovel, iron pot | 3 silver | 3 | 0 | Villages and farmland, local folk and their troubles |
| **Entertainer** | Dagger, musical instrument, costume, admirer's favour | 6 silver | 1 | 1 | Taverns, fairs and travelling troupes |
| **Outlander** | Handaxe or spear, hunting trap, light armour (hides), traveller's clothes | 2 silver | 4 (hides, bone) | 1 (e.g. Northern or Kroll tongue) | The frontier, its tribes and trade routes |

## Traits

*(Planned.)* A perk-like entity tied to a character. A trait is a **challenge perk** with both a **positive and a negative effect**, similar to the negative perks in Kingdom Come: Deliverance II's hardcore mode. It has a one-line **flavour** text, a short description of what it does, and its upside and downside.

- **Source:** players pick from a list of **premade traits**, or **create their own** to help with roleplay.
- **How many:** no limit; a player can take as many as they like.
- **Custom traits need approval** from the campaign DM, who checks that the downside balances the upside.
- **Later:** the DM can grant traits as a **story event**, and a trait can be **removed**, e.g. by overcoming it in the story.
- *(Draft.)* Eight premade traits are in the database as a starting point: Hothead, Light sleeper, Glutton, Pious, Coward, Show-off, Bookworm, Superstitious. Rewrite or replace them freely.
- Traits are flavour and challenge. They don't count towards level (see [Validating a character's level](#validating-a-characters-level)).

## Roles in the app

The database's user roles are **player**, **dm** and **admin**.

| Action | Who |
|---|---|
| Edit the rulebook (classes, perks, races, aspects, …) | **admin** only |
| Create campaigns | **dm** only |
| Create characters | Everyone |

**Editing characters:**
- Only the **owner** can edit their character's build: classes, perks, resource split, backstory.
- The **DM of a campaign the character is in** can add **Scars**, manage **resources** (exhaustion, healing, coins, Material) and **grant levels**.

**Same character in several campaigns:** a character can appear in more than one campaign as a shared **ghost**.
- The **build is shared**: classes, levels, perks and resource split. A level granted by any campaign's DM applies everywhere.
- **In-play state is per campaign**: Scars and exhaustion are tracked separately in each campaign.
- **Inventory is shared**: items, coins and Material travel with the character. An item broken in one campaign stays broken in the others.
- The use case is **guest appearances**: a character visits another campaign, and the player gets to experience it with their own character.
- For two **simultaneous** campaigns, the player should make two different characters.

A user's role is account-wide. A user with the `dm` role is the DM of the campaigns they create, and can still play characters in other people's campaigns.

## Rulebook pages

**Built** at `/rulebook` (public, no login needed), following the structure below.

- **Admin-editable:** pages and chapters live in the database (`rulebook_chapters`, `rulebook_pages`). Admins edit them at `/admin/rulebook`: Markdown with shortcodes, a live preview, image uploads (header, side or plain), and ordering of chapters and pages. The front page has the slug `index`.
- **Shortcodes:** examples (`:::example`), notes, formulas, resource names (`:body`), rolled dice (`:roll[d6 4 2]`), resource bars, pictures and cards (`::::cards` with `:::card`s inside; `{cols="2"}` or `{cols="3"}` for rows, three only on extra-wide screens). The editor has a cheat sheet. Dice notation like 2d6 gets its die icon automatically.
- **Data blocks:** races, backgrounds, languages, traits and class cards are read from their own tables (`::races`, `::classes{rank="basic"}`, …), so the other admin pages update the rulebook directly. Each class's own page is still built in code from the class data.

Drafted while writing the pages, to confirm:
- **Conditions:** "automatically fails Strength/Dexterity saving throws" became "automatically loses Body defense rolls"; Restrained's "disadvantage on Dexterity saving throws" became "disadvantage on Body defense rolls".
- **Conditions:** 5E's "a hit within 5 feet is a critical hit" (Paralyzed, Unconscious) became "a hit from within 1 m adds an extra damage die", since there are no critical hits.
- **NPC damage dice:** d4 weak, d6 normal, **d8 or more for big threats** (ogres, trolls), and anything the DM likes for gargantuan ones.
- **Bows and crossbows** in the weapon table use the 5E ranges converted at 5 ft = 1 m (shortbow 16/64 m, longbow 30/120 m).

**Writing guidelines**
- **Short, focused pages:** each page covers one part of the rules.
- **Story examples:** each rule gets a short story example, like the old site's Michal-and-the-burgmaster's-daughter examples.
- **Plain, direct language** in the author's voice: no padding, no flowery or overly descriptive "AI-sounding" prose. The old site's tone (dry, joking, to the point) is the reference.
- **Old example images:** the old site's `public/img/classes/advanced/warrior-monk.webp` (git commit `60a40a6`) illustrates Zara the Recluse in the class-blending examples (Fighter 1 / Juggler 5 / Warrior 1). Restore it for the "How classes work" page.
- **No standalone perk list.** The old Perks page was a debug page. Perks appear on the class and race pages they belong to.

**Proposed structure** (inspired by the old site, split into smaller pages):

- **Basics:** What this game is · Dice rolls · Advantage and bonus dice
- **Resources:** Resources · Danger Level · Exhaustion · Scars · Healing · Item scars · Dying
- **Combat:** Turns and actions · Defending · Damage and armour · Manoeuvres · Conditions
- **Characters:** Creating a character · Races · Backgrounds · Languages · Traits · Leveling
- **Classes:** How classes work · Basic classes · Advanced classes and aspects · Mighty classes · one page per class (skills, aspects, perks)
- **World:** Coins and Material · Travel (with the calculator)

## Campaign management

Built so far: a campaign overview (cover, name, description, DM, characters) and a campaign updates feed.

- **Creating:** users with the `dm` or `admin` role start campaigns at `/campaigns/new` and become their DM.
- **Characters:** the DM adds and removes characters; a player can take their own character out ("Leave campaign").
- **Updates:** the DM and players post to the campaign's feed with a rich text editor (bold, italics, headings, lists, quotes, links, pictures). Posts are stored as Markdown; pictures go to the `campaigns` bucket under `<campaign id>/updates/`.
- The database enforces the same: only the DM edits or deletes a campaign or changes its character list.

**Priority:** campaign tools come after the character editor and the rulebook. Ideas parked for later:
- A DM screen for setting each character's Danger Level, applying Scars and granting levels.
- Session notes.
- A shared loot list.
- NPC and location notes.
- A shared dice roller.

<!-- What else DMs and players should be able to do in a campaign. -->

## Open questions

### Where we left off

The magic, NPC, manoeuvre and poison Q&A paused on **2026-10-18**. Resume here.

**Pending question (Q14o):** adopt DrD2's counterspells (a won challenge, against the ritual or the spell, with any school that makes sense) and spell breaking (same skill, range, matching resources, knowing the spell), with *Berkano Sign* kept as a Witcher exception? Suggested answer: yes.

**Still open after that:**
- **Q14p:** DrD2's third roll type (*výzva*); is it a plain skill check for us?
- **Q11b:** which rolls the known-setting +1 applies to.
- **Q1a:** a cap per resource pool?
- **Poison leftovers:** potion and poison prices against the old Rogue perk (conflict 5); DrD2's "bonus of size 1" read as advantage (conflict 9); dwarves and poison resistance (conflict 10).
- **Readings to confirm:**
  - The pseudo-magic Scar comes from any pool, matching the story.
  - A Mighty hit the target averts with exhaustion isn't a miss.
  - Very mighty against an NPC's Body adds 2 dice; a player character not averting a Cruelly mighty hit takes +2 Scar levels.
- **Rules still to write:** henchman rules (for control), aspects for the other nine advanced classes, mighty class skills and perks.

**App and data follow-ups** from these decisions:
- Rulebook pages (admin): **Advantage** (disadvantage now always wins) and **Conditions** (add Imprecise, Slow, Feeble, Foolish).
- `skills` table: add *Dealing with supernatural beings* to Witcher and Ranger; mark the Incantor's as unique only with non-speaking beings.
- `races`: a speed column (Human 6 m, Elf 6 m, Dwarf 5 m, Halfling 5 m, Kroll 7 m), in the race editor and pages.
- Item editor: the free manoeuvre each weapon grants (default by damage type; shields Defense).
- Perks to add: the Incantor concentration perk, *Omni Potion* (Medic), immediate poisons, strong manoeuvre perks, cruel manoeuvre perks for mighty classes. *Trophy Hunter*'s "Advantage dice" wording → bonus die.

1. ~~Resource pools~~: answered (15 points to split).
   - ~~Q1a~~: answered (one point per level-up; see Leveling). Still open: is there a cap per pool?
2. ~~Damage to player characters~~: answered (no hit points; unaverted harm becomes a DM-chosen Scar).
   - ~~Q2a~~: answered.
     - A level-N scar blocks N points.
     - Combat scar level = damage roll − armour rating; 0 or less is absorbed.
     - Healing costs 5 points plus one skill check per level.
     - Overflow blocks the whole pool and starts dying, in all three pools.
     - Dying uses 5E death saves.
3. **Leveling:** the four level-up options are answered. Still open:
   - ~~Is character level the number of level-ups or the sum of class levels?~~ Answered: every point spent counts (see the validation formula).
   - ~~What is `start_level`?~~ Answered: typical starts are levels 3, 7 and 9, and it's used to validate the character.
   - ~~Q3a~~: answered (the starts are 7 and 9, not 6 and 8).
   - ~~Q3b~~: confirmed (level = class perks + (Body + Soul + Charisma − 15)).
   - ~~What unlocks advanced level 2 and beyond?~~ Answered: nothing more; the 6-level gate is the only one.
   - ~~What unlocks a mighty class?~~ Answered: its advanced classes total 6 levels, in any spread.
4. ~~Aspects~~: answered (3 per advanced class, unlocked by parent-class levels, gate perks).
   - ~~Q4a~~: answered (aspects need the advanced class itself; they stack, and all can eventually be unlocked).
   - Aspects for the other nine advanced classes, and any for mighty classes, still need defining.
5. ~~Advantage~~: answered (3d6 keep best two; 2d20 keep higher; "Advantage dice" are now **bonus dice**).
   - ~~Q5a~~: answered (disadvantage mirrors advantage; sources don't stack). **Changed:** disadvantage always wins and cancels advantage; advantage never cancels disadvantage (unlike 5E). The rulebook's Advantage page still says they cancel out.
   - The Trophy Hunter perk text still says "Advantage dice" and needs updating.
6. ~~Non-unique skills~~: answered (anyone can attempt them, with no class bonus).
7. **5E leftovers:**
   - ~~Saving throws~~: answered (they're **defense rolls**: reaction challenges using the action or the Defense manoeuvre).
   - ~~Q7a~~: answered (the attacker makes a skill check to land, then rolls damage by threat size: d4, d6 or larger).
   - Strength/Dexterity saves in the Restrained and Unconscious conditions need rewording to a resource, or dropping.
   - ~~Metres or feet?~~ Answered: **metres**, for player legibility.
   - ~~Q7b~~: answered (simplified 5 ft = 1 m).
8. **Content gaps:**
   - Skills and perks for the mighty classes, and a description for Black Priest.
   - ~~Armour~~: answered (none 0, light 1, medium 2, heavy 3; heavy costs 2 Body before acrobatic tasks).
   - ~~Q8a~~: answered (light 0, medium 1, heavy 2 Body, for any activity the armour would hinder).
   - ~~Q8b~~: answered (only for activities the item is reasonably involved in, creative uses allowed; the points are unspecified and leftovers are lost).
   - ~~The scar-healing example's gold/silver mismatch~~: superseded (healing now uses resources, substances or Material, not coins).
9. **Content to keep:** which old perks and spells stay, get cut or get reworked?
10. ~~Characters in several campaigns~~: answered (shared ghost; build and levels shared, Scars and exhaustion per campaign; guest appearances; simultaneous campaigns use separate characters).
    - ~~Q10a~~: answered (inventory is shared across ghosts).
11. ~~Backgrounds~~: answered (inventory, coins, Material, languages and known settings; no proficiencies).
    - Known settings give +1 to rolls inside them. **Q11b:** which rolls does the +1 apply to (skill checks only, or challenges and defense rolls too), and does it work for a skill the character has no class for?
    - **Q11a:** A draft list of 10 backgrounds and 8 languages is in the doc; the background kits and coins still need review. Racial languages are answered.
12. ~~Traits~~: answered (premade or custom; any number; the DM can grant more later).
    - ~~Q12a~~: answered (custom traits need the campaign DM's approval; traits can be removed).
13. ~~Rulebook structure~~: answered (short single-topic pages with story examples, plain language, no standalone perk list). The proposed structure is in Rulebook pages.
14. **Magic** (see [Magic](#magic)):
    - DrD2's magic chapter is the proposed base (see [Proposed base](#proposed-base-dračí-doupě-2)); its clashes with 5E and the old spells are listed under [Conflicts](#conflicts-with-5e-and-our-current-rules).
    - ~~**Q14a, casting roll**~~: answered. A skill check when unopposed, a challenge against a resisting target. A failed cast can be averted with exhaustion or a Scar.
    - **Q14b, price:** ~~common scale?~~ Answered: a spell's price works like any other perk's (none, or an activation price). Core spells are only unlocked from the start, not automatically free. A free spell still needs its components. ~~Hard circumstances?~~ Answered: a DM-set cost to attempt, paid before rolling, like armour encumbrance. Sigils' 1 point per action is the same rule.
    - ~~**Q14c, pseudo-magic Scars**~~: answered. A level-1 Scar, as a blank payment with no temporary points, enters **magic mode**. It lasts until the end of the conflict, or a reasonable continuous stretch of time outside combat. The Scar's story is free (an elixir, a cut palm).
    - **Q14d, damage:** ~~can basic magic kill?~~ Answered: core spells can't kill directly, at most chip damage; perk spells can have damage dice. ~~Scale against player characters?~~ Answered: the DM translates spell damage into a threat die (d4 chip, d6 small, d8 big area, d10+ legendary), confirmed for now.
    - ~~**Q14e, area spells**~~: answered for now. A won defense roll halves the damage for NPCs (rounded down) and avoids it completely for player characters.
    - ~~**Q14f, core spell limits**~~: answered. Core spells may be free; they're limited by the action, the roll (failed casts cost exhaustion, which adds up), the base scale, Widespread and costs to attempt. Stronger NPCs can be immune to simple curses. Blessings and Curses stays free. Eye Sigil's "sigil strength" is the Material put into its pool (see *Sigils*).
    - ~~**Q14g, concentration**~~: answered.
      - All six durations stay. Concentration uses the caster's action; until dismissed doesn't.
      - Any attack at the caster, hit or miss, forces a defense roll with the magic class level. It costs the Defense manoeuvre, and a loss can be averted with exhaustion.
      - It also ends on another concentration spell or on being incapacitated. A violent distraction calls for a skill check with the magic class level.
      - The rules are in *Breaking concentration*.
    - ~~**Q14h, components**~~: answered. Verbal (blocked by a gag), Somatic (blocked by bound hands), Material (the spell spends Material and names what it is; it's the spell's Material price) and Ritual (a long ceremony, not in combat).
    - ~~**Q14i, schools**~~: answered. Arcane, Divine and Eldritch are **unused for now** and may go to another class later. Meanwhile the magic skills act as schools (Detect Magic identifies the skill).
    - ~~**Q14j, spells as perks**~~: answered. Yes, on purpose: every non-core spell takes one of the class's perk slots and competes with its other perks.
    - ~~**Q14k, range and scale**~~: answered. Every spell needs touch, symbolic touch, sight, or contact through a sigil or substance; metres only limit distance within that. Both kinds of units are kept: DrD2's approximate units (palm, hut) estimate what a non-specific spell can do; metres and exact areas are used when a specific area matters (Fireball's spread).
    - ~~**Q14l, control**~~: answered. Kept separate: Charmed leaves the target its own will; control (Mage's and Shaman's puppeteering) is an active act, DrD2-style, with the target as a henchman. Henchman rules still need writing.
    - ~~**Q14m, Incantor skills**~~: ~~*Ritual items*~~: answered, Incantor only (stays unique). ~~*Dealing with supernatural beings*?~~ Answered: **non-unique** with highly intelligent beings that can speak (bargaining with a demon), so anyone can try; **unique** (Incantor only) with all others. The Incantor always adds their class level. **Witcher and Ranger** have it as a skill of their own, adding their class level, with all supernatural beings. *Blessings and Curses* stays an Incantor core spell. Q14m is fully answered.
    - ~~**Q14n, sigils**~~: ~~are DrD2 glyphs our sigils?~~ Answered: yes. ~~Which classes get them?~~ Answered: every magic class, through a purchasable sigil perk for its school. ~~Sigil Guardian?~~ Answered: a speciality that sets a trigger condition. ~~Eye Sigil core or bought?~~ Answered: it stays an Incantor core spell, the only free sigil. ~~Mighty Amulets?~~ Answered: it waives the 1 Material per stored point in a ritual item; the charging limits stay. Q14n is fully answered.
    - **Q14o, counterspells and breaking:** adopt DrD2's counterspells (a won challenge) and spell breaking (skill, range, matching resources, knowing the spell)? Does *Berkano Sign* stay as a Witcher exception?
    - **Q14p, the third roll:** DrD2 uses a *výzva* for things like noticing a triggered sigil while asleep. Is that a plain skill check for us?
15. **NPCs** (see [NPCs](#npcs)):
    - ~~**Q15a, overpowering**~~: answered. Three tracks (Body, Soul, Charisma) replace hit points; Body works as 5E hit points and is the largest; 0 in any track overpowers the NPC.
    - ~~**Q15d, social and mental damage**~~: ~~what does a won roll deal?~~ Answered: the temporary Danger Level the NPC faces as it stands, set by the DM and not tracked afterwards. ~~Class level?~~ Answered: it adds, like weapon damage. Q15d is answered.
    - ~~**Q15b, averting failure**~~: answered. Ordinary NPCs can't avert failures. Important NPCs get 1–3 Fate, like Legendary Resistance; 1 Fate turns a lost roll into a win, and it comes back once a day (next sunrise).
    - ~~**Q15c, bonus scale**~~: answered. Usually like player characters (up to +5); legendary NPCs can go up to **+8**, but only in incredible instances.
16. **Manoeuvres** (see [Manoeuvres in DrD2](#manoeuvres-in-drd2)):
    - ~~**Q16a, Cunning**~~: answered. Ours stays (prone, grapple or push); DrD2's Danger Level version isn't used.
    - ~~**Q16b, rules of use**~~: answered. ~~Timing?~~ Answered: DrD2's timing (see *When to declare*). Cunning is declared after the attack lands. Mighty is declared before the roll; a miss gives disadvantage on the character's next roll. ~~"Free when you have advantage"?~~ Dropped: any advantage on an action is a free Precise, on initiative a free Quick. ~~How many per action?~~ One paid manoeuvre; free ones (weapon, perk, advantage) and Quick don't count.
    - ~~**Q16c, Widespread and areas**~~: answered. Every multi-target action needs Widespread. Perk spells with an area have it built in, paid for by their activation price (like a 5E spell slot); base forms of magic pay for it.
    - ~~**Q16d, weapon manoeuvres**~~: answered. Each weapon grants one free manoeuvre, chosen by the admin in the item editor (default by damage type: piercing Cunning, slashing Precise, bludgeoning Mighty); shields grant a free Defense once per round. The editor field isn't built yet.
    - ~~**Q16e, mastery**~~: answered. Strong manoeuvres come from class perks; cruel manoeuvres from mighty class perks; NPCs get either as stat-block abilities. Class level alone unlocks neither.
    - ~~**Q16f, NPC manoeuvres**~~: answered. ~~How do NPCs pay?~~ Answered: manoeuvres granted by their weapon or stat block are free; an ungranted one costs 1 point of a track, usually Soul or Charisma. ~~Cruelly mighty against them?~~ An NPC that defends first takes damage before the challenge roll; one that doesn't takes +2 damage dice. Damage before the roll is one die of the attack (Body) or the attacker's class level (Soul, Charisma). The full Mighty table is under *The Mighty versions*.
    - ~~**Q16g, penalties**~~: answered. Imprecise, Slow, Feeble and Foolish join the conditions under their own names (no Poisoned). A condition's disadvantage blocks every source of advantage. Duration follows the cause. Scope is set by the source: one skill or skill group, or everything.
17. **Potions and poisons** (see [Potions and poisons](#potions-and-poisons-drd2)):
    - ~~**Q17a, poison strength**~~: answered. Strength is the poison's Danger Level; one effect only, as in 5E. Poison damage is strength d6 against NPCs and a threat die by strength against player characters (1–2 d4, 3–4 d6, 5–6 d8, 7+ d10), confirmed for now. Armour doesn't reduce it.
    - ~~**Q17b, resisting**~~: answered. A Body skill check; player characters can avert a failure by exhausting Body equal to the strength (then no effect); ordinary NPCs suffer it; important NPCs can spend Fate.
    - ~~**Q17c, timing**~~: answered. A default poison takes effect at the next sunrise or sunset and wears off at the one after. Immediate poisons are a speciality: a perk for player characters, a special ability for NPCs.
    - ~~**Q17d, delivery**~~: answered. Swallowed (Medic), contact (Rogue, unique) and breathed in (Alchemist, unique). Weapon poisons count as contact poisons, under the Rogue's *Contact poisons*.
    - ~~**Q17e, potions**~~: answered. A potion treats one kind of Scar, named in the story when it's made (burns, cuts and bruises, …), Body by default. The Medic perk *Omni Potion* makes one that heals unspecified wounds. Q17 is fully answered.
