# Ruleset overview

How Michal's custom D&D ruleset works, and how the app should present and enforce it.
Claude loads this file every session (imported from `CLAUDE.md`), so keep it current.

> **Status: draft.** Everything below is taken from the old rulebook (git commit `60a40a6`) and has not been confirmed yet.
> Open points are marked **Q1–Q9** and collected in [Open questions](#open-questions) at the end.

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
| **Damage** (dealt to NPCs) | Weapon/ability dice + class level | — |

The class level added is that of the class the skill belongs to.

**Advantage:**
- **Skill check:** roll 3d6 and keep the best two.
- **Challenge and initiative:** roll 2d20 and keep the higher.

**Disadvantage** mirrors it:
- **Skill check:** roll 3d6 and keep the worst two.
- **Challenge and initiative:** roll 2d20 and keep the lower.

**Several sources** work the 5E way:
- Advantage and disadvantage **don't stack**. Three sources of advantage is still just one advantaged roll.
- If a roll has **any** advantage and **any** disadvantage, they cancel out and the roll is normal, however many sources each side has.

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

### Exhaustion and Scars

- **Exhaustion:** spend points equal to the Danger Level to avert a failure. Exhausted points are marked with one diagonal strike.
- **Scar:** taken when the pool is too low. A scar gives **2 temporary points** that must be spent immediately; leftovers are lost. The scarred point is crossed out until healed, and sleep doesn't heal it.
  - Example: Danger Level 3, 1 Charisma left, take 1 Scar → 1 + 2 = 3, failure averted.
  - Scars are story consequences. Body: wounds, illness, sprains, trembling hands. Soul: insomnia, anxiety, guilt, nightmares. Charisma: mockery, ruined reputation, being outlawed.
- **Healing exhaustion:** a **poor rest** restores 3 exhausted points of the player's choice; a **quality rest** (safe, comfortable, stress-free) restores all of them.
- **Healing a scar:** costs **5 resource points per scar level**, plus meaningfully addressing the cause (treating the wound, therapy, reparations). A level-2 scar costs 10. The points can come from any mix of:
  - **The bearer's own pools,** any of the three. Body: it hurts. Soul: the pain wears them out. Charisma: recovering leaves them unsociable.
  - **A healer's resources,** usually Soul, when a perk allows it (e.g. *Good Samaritan*, *It's Not a Sacrifice*).
  - **Healing substances** such as ointments and elixirs. Each holds a fixed number of resource points; a Medic's burn ointment might be worth 5.
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
- Pseudo-magic classes deal themselves Scars to fuel their powers.

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
- Weapon damage dice and the 5E weapon table apply to attacks against NPCs that use health points.

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

Armour reduces the level of Scars from hits: scar level = damage roll − armour rating.

| Armour | Rating | Encumbrance cost |
|---|---|---|
| None | 0 | — |
| Light | 1 | — |
| Medium | 2 | Exhaust 1 Body |
| Heavy | 3 | Exhaust 2 Body |

**Encumbrance:** before even attempting an activity the armour would hinder, the character must first exhaust the encumbrance cost in Body. That covers stealth, acrobatics, swimming, fast movement, and anything else the DM judges the armour gets in the way of.

The Kroll perk *Bison Skin* ("+1 resistance bonus on exhaustion when not wearing armour") could become "counts as armour rating 1 when unarmoured" under this system.

### Manoeuvres

Each costs **1 point of the governing resource**, unless an ability makes it free.

| Manoeuvre | Effect |
|---|---|
| **Precise** | Advantaged roll on the action. Free when you have advantage. |
| **Mighty** | Attack deals an extra damage die, or +1 exhaustion cost against targets without hit points. |
| **Cunning** | After the attack, the target is knocked prone, grappled, or pushed in any direction. |
| **Quick** | Advantaged initiative roll. Free with initiative advantage. |
| **Defense** | Defend yourself without spending your action. |
| **Widespread** | The action affects multiple targets instead of one. |

### Conditions, resistances and weaknesses

- **Conditions:** Blinded, Charmed, Deafened, Frightened, Grappled, Incapacitated, Invisible, Paralyzed, Petrified, Prone, Restrained, Stunned and Unconscious. They're adapted from 5E and mostly grant or impose advantage and disadvantage.
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

| Race | Description | Racial perk options |
|---|---|---|
| **Human** | Diverse and courageous, living life to the fullest | For the King, Sticks and Stones, Maiden Fair, I Know a Guy |
| **Elf** | Secluded, ancient, ageless beauty and wisdom | Behind Blue Eyes, Eternal Nobility, Veil of Night (the data also has Magical Ties) |
| **Dwarf** | Hearty and proud; honour and their word are everything | Night Eyes, Skin Made of Iron, Iron Liver, Blood Bond |
| **Halfling** | Hospitable, jovial, braver than they look | Sixth Sense, Silent Feet, Connoisseur, Scrappy |
| **Kroll** | Unique to this system: brawny, primitive, attuned to the wild | Echolocation, Fury, Bison Skin |

## Classes

Classes are **bundles of skills**, not a whole identity. Characters are expected to mix them.

- Each class has **skills**, each tied to a resource. Rolls for a skill add that class's level.
- A **unique** skill can only be attempted by characters with that class.
- Anyone can attempt a **non-unique** skill from a class they don't have, just without the class bonus. For example, a pure Medic attempting Acrobatics rolls a plain 2d6.
- **Magic:** *none*; *full* (core spells from the start, more unlocked as perks); *pseudo* (also core spells, but the caster deals themselves a Scar to use them).
- **Maximum class level is 5.**

### Basic classes

| Class | Magic | Skills (resource) |
|---|---|---|
| **Fighter** | None | Foot close combat vs humans and beasts (B), Strength (B), Warrior knowledge (S), Confidence and intimidation (C) |
| **Hunter** | None | Foot ranged combat vs humans and beasts (B), Wilderness movement (B), Wilderness survival (S), Hunting (S), Animal handling (C), Animal training (C) |
| **Juggler** | None | Foot throwing vs humans and beasts (B), Acrobatics (B), Tricks and sleight of hand (B), Urban survival (S), Influence and deception (C) |
| **Medic** | None | Endurance (B), Healing the human body (S), Potions and poisons (S), Negotiation (C) |
| **Incantor** | Full | Scholarship (S), Healing of the soul (S), Willpower (S), Ritual items (S, unique), Dealing with supernatural beings (C, unique). Core spells: Blessings and Curses, Eye Sigil |

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
| **Ranger** | Fighter + Hunter | None | Close and ranged foot combat vs monsters (B), Trophies (S), Woodworking (S), Ranger knowledge (S), Monster taming (C, unique), Leading in the wild (C) |
| **Witcher** | Fighter + Medic | Pseudo | Close combat vs monsters, fiends and undead (S), Trophy taking (S), Witcher signs (S, unique), Witcher knowledge (S, unique). Core spell: Isa Sign |
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
- **Spells** add components, damage, damage type, range, area of effect and duration.
  - **Components:** Verbal, Somatic, Material and/or Ritual.
  - **Durations:** instantaneous; until concentration breaks; until the end of combat; *short* (until the next sunset or sunrise); *long* (until the next solstice or equinox); *will* (until dismissed).
  - **Schools of magic** (old data): Arcane, Divine, Eldritch.
- Perks can require an **aspect** of an advanced class (see [Aspects](#aspects)). This matches the database's `has_aspect` requirement.

## Backgrounds

*(Planned.)* Like 5E backgrounds, but **without skill proficiencies**, because those come from classes. A background gives:

- **Starting inventory:** equipment, **coins** and **Material**.
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

**Built** at `/rulebook` (public, no login needed), following the structure below. Chapter and page order live in `app/rulebook/nav.ts`. Races, backgrounds, languages, traits, classes, skills and perks are read from the database, so the admin pages update the rulebook directly.

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

**Priority:** campaign tools come after the character editor and the rulebook. Ideas parked for later:
- A DM screen for setting each character's Danger Level, applying Scars and granting levels.
- Session notes.
- A shared loot list.
- NPC and location notes.
- A shared dice roller.

<!-- What else DMs and players should be able to do in a campaign. -->

## Open questions

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
   - ~~Q5a~~: answered (disadvantage mirrors advantage; sources don't stack; any of each cancels, as in 5E).
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
