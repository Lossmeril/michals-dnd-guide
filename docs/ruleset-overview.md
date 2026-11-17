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
  - It covers every source of disadvantage (such as a condition) and every source of advantage, paid or free: Precise, Quick, free manoeuvres from perks, a Blessing, attacking a prone target.
  - Paying for Precise or Quick on a disadvantaged roll is wasted.

**Bonus die:** some abilities grant a bonus die, e.g. Trophy Hunter's d4 at level 1 rising to d12 at level 5. The old rulebook called these "Advantage dice".
- During the encounter, the player may add the bonus die to **any one roll**: initiative, a skill check, a challenge, and so on.
- Once they commit to rolling it, they must keep the result.

**Hidden rolls** *(confirmed, 2026-11-08; written by Michal on the rulebook's Dice rolls page)*
- **What:** a roll the DM makes **behind the screen**, usually a saving throw or a skill check, so the player doesn't know whether the outcome came from the roll.
  - *Example:* Michal searches a missing girl's room. The DM rolls in secret and says he finds nothing. Is there nothing to find, or did he just roll badly?
- **Only to shield against meta-knowledge.** Hidden rolls serve the story: they're for rolls where the result itself would tell the player something their character doesn't know (is there anything to find?).
- **No exhausting against a hidden roll.** The player can't avert a failure they don't know about.
- **Harm is rolled openly.** When a failure would hurt (a saving throw against a trap or poison), the player rolls the dice themselves and can exhaust as usual. So a hidden roll never takes away the safety net.
- **Hidden circumstances in a challenge:** when something the players mustn't know yet takes away a bonus, the player still rolls and adds their bonus openly. The DM **secretly adds the same bonus to the other side** to cancel it, so nothing gives the secret away.
  - **Only the bonus is hidden.** The rest of the challenge works as usual: the player sees the result and can exhaust to avert a loss.
  - *Example:* Michal (Juggler 2) throws a knife at a rival bard who is really a higher demon. Juggler's throwing works only against humans and beasts, so it shouldn't apply. Michal rolls 7 + 2 = 9; the "bard" rolls 5 + 3 + 2 (the hidden compensation) = 10.

**Critical hits** *(confirmed, 2026-11-01)*
- A natural 20 on the challenge, or double 6 on the skill check, before a damage roll makes the hit **critical**: the attacker gets a free **Mighty**.
- It sits **outside the one-manoeuvre limit**, as a reward from the dice rather than a choice. It's the one manoeuvre that arrives after the roll.
- **No refund:** a point already paid for Mighty on that roll stays spent.
- **Paralyzed and Unconscious:** a hit from within 1 m is a critical hit.

**Merit points** *(confirmed; DrD2's Výhoda)*
- The DM awards a merit point for **good play, creating interesting situations or roleplay**: a clever plan, a good story, playing the character's personality. That's one reason the sheet has a personality field.
- Each award adds **+1 to the character's merit counter**. (This is DrD2's "bonus of size 1": a point on the counter, not +1 to a roll.)
- **Spending one** gives **one free resource point of any pool** *(confirmed, 2026-11-01; replaces "a free advantage on any roll")*: to buy a manoeuvre, or towards exhausting.
- **Not hard rules, so not in the rulebook** *(confirmed)*: merits don't carry from campaign to campaign (the app tracks them per campaign, so a guest character starts with 0), and they're meant to be used within the session.
- **No cap** *(confirmed)*. The old "usually up to 3" is gone; nobody gets that far anyway.
- *Example:* Michal earns a merit for good roleplay, and in his next mess spends it on a Mighty manoeuvre for an extra damage die.

Weapons use the D&D 5E simple and martial weapon table: dice, damage type and properties such as Light, Finesse, Thrown (4/12 m, converted from 20/60 ft), Versatile, Heavy, Reach and Two-Handed.

**Weapon properties on Michal's Weapons page** *(confirmed)*:
- **Finesse:** the attack and its damage use either the Fighter or the Juggler level, the same one for both.
- **Heavy:** halflings attack with it **Feeble**, unless a perk says otherwise; a free manoeuvre from a perk doesn't cancel it.
- **Light:** krolls attack with it **Imprecise**, on the same terms.
- **Loading:** reloading takes an action.

**Unarmed strikes** *(confirmed, 2026-11-08)*: a punch, kick or headbutt deals a flat **1 + Fighter level** bludgeoning damage, with no die (5E's 1 + Strength modifier). It's foot close combat, a Fighter skill. The Fighter perk *Rock fist* raises it to **d4 + Fighter level**. Improvised weapons stay at d4.

### Resources

| Resource | Covers |
|---|---|
| **Body** | Physical limits and reflexes: strength, speed, agility, coordination, armed combat, climbing, sleight of hand |
| **Soul** | Mind, focus and technical ability: knowledge, perception, languages, lockpicking, spellcasting, alchemy |
| **Charisma** | Communicating, influencing and reading others: intimidation, negotiation, seduction, animal taming, deception |

- Resources are **not hit points and not skill**. They are how far a character can push right now. An empty pool doesn't mean collapsing; it means further pushing costs Scars.
- The governing resource can depend on context. A bow in a chaotic battle uses Body; the same shot in an archery contest uses Soul.
- **Starting pools:** every character gets **15 points** to split freely between Body, Soul and Charisma. The old example character has Body 7, Soul 5, Charisma 3.
  - **No cap and no minimum** *(confirmed)*. A 13 / 2 / 0 split is allowed.
  - **Lopsided builds balance themselves:** a 0 pool overflows on its first Scar, so a few intimidations take out a Charisma-0 brute. A big pool doesn't make a character safe either: the DM raises a tank's Danger Level as they take more reckless actions.
  - **A warning below 2:** the rulebook and the character editor warn that a pool under 2 leaves the character too feeble, dull-minded or laughable to last in a harsh world. *Milena the leper may have all the willpower in the world, but in a fight keeping her alive becomes the party's job.*
- **Growth:** a level-up point can go into +1 Body, Soul or Charisma instead of a class or perk (see [Leveling](#leveling)). Planned: some perks that raise a resource by 1.

**Secondary resources**

- **Coins:** 1 gold = 100 silver, 1 silver = 10 copper. One gold is a lot of money for a commoner.
- **Material:** abstract supplies (herbs, wood, components). 1 Material = 1 silver. Its exact nature is declared when it's spent. Many crafted effects scale with the Material used.

### Danger Level

- A single number for how risky the current situation is. **Default: 3.**
- To **avoid a bad outcome** (getting hurt, failing a task, losing an item, triggering a trap), a character spends resources from the skill's pool equal to the Danger Level.
- The DM raises it for hostile, urgent or chaotic situations. Players lower it by calming the situation: distractions, negotiation and so on. Taking cover can help, but the DM decides (see [Cover](#cover-confirmed-2026-11-15-from-5e-and-fateforge)).
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
- **One Scar, one level** *(confirmed, 2026-11-14)*: a character never takes several Scars to avert one failure; a bigger need means one Scar of a higher level (in crossed-out boxes it comes to the same thing).
- **Scars can cross out exhausted boxes** *(confirmed, 2026-11-14)*. Players usually scar exhausted boxes first, so the points they still have stay available.
- **Healing exhaustion:** a **poor rest** restores 3 exhausted points of the player's choice; a **quality rest** (safe, comfortable, stress-free) restores all of them.
- **Healing a scar:** costs **5 resource points per scar level**, plus meaningfully addressing the cause (treating the wound, therapy, reparations). A level-2 scar costs 10. The points can come from any mix of:
  - **The bearer's own pools,** any of the three. Body: it hurts. Soul: the pain wears them out. Charisma: recovering leaves them unsociable.
  - **A healer's resources,** usually Soul, when a perk allows it (e.g. *Good Samaritan*). *It's Not a Sacrifice* is different: it hands over exhausted points, not Scar healing.
  - **Healing substances** such as ointments and elixirs. Each holds a fixed number of resource points; a Medic's burn ointment might be worth 5. Each treats only the kind of Scar it was made for (see [Our potion rules](#our-potion-rules-confirmed)).
  - **Material,** at 1 point each, where it makes sense and only after consulting the DM; for example, 5 Material for a bandage.
  - **Coins,** only when the DM allows it *(confirmed, 2026-11-14)*: drinks in a tavern against a Soul or Charisma Scar, a bribe against a Charisma one.

  Healing also needs **one successful skill check per scar level**, e.g. treating the wound.

### Item scars

Items can take scars too.

- **Scarring an item to avert failure:** a player can scar one of their items, which **breaks** it. Like a self-taken scar, this gives **2 resource points** to spend immediately.
  - Only for an activity the item would **reasonably be involved in**: a lockpick for a lock, a sword for a fight. Creative uses can be allowed, e.g. flirting with a magic trick that burns the only map to the dungeon.
  - The 2 points are an **unspecified resource**: they count towards whichever pool the failed roll needed.
  - Unspent points are lost and don't carry over. If 1 point was missing and the scar gave 2, the extra point is gone.
- **Only proper items** can be scarred. An improvised item, like a chair leg used as a club, can't be scarred for points, though some perks may allow it: the Fighter's *Headcracker* scars an improvised weapon for the usual **2 points** *(confirmed, 2026-11-09)*.
- **Armour scars:** when the DM scars armour, one piece of it breaks and stops counting until repaired *(draft, replaces "its rating drops by 1"; see [Modular armour](#modular-armour-draft-from-the-central-european-pricelist))*.
- **Repair** works like healing a scar: **5 resources**, usually Material, plus a successful **skill check**. It must be plausible: an old map or an antique sword can't be restored to its former glory.
- Latent classes deal themselves a Scar to enter magic mode for a conflict (see [Magic](#magic)).

**Scars imposed by the DM**

If a character doesn't (or can't) avert a bad outcome, such as falling into a trap, the DM gives them a Scar of the DM's choosing, with a **level**:
- Level 2 Body scar: slashed arm.
- Level 6 Body scar: broken leg.
- Level 5 Charisma scar: banished from town.

A level-N scar **blocks N points** of its resource until it's healed, and the character isn't safe again until it is. For combat hits, the level comes from the damage roll minus armour rating (see [Defending](#defending)).

Healing costs 5 points per level (see Healing a scar above).

**Overflow and dying:** if a scar's level exceeds the pool's boxes that aren't scarred yet (exhausted ones count) *(confirmed, 2026-11-14)*, the scar blocks the **entire pool** and the character immediately enters the **dying** stage, as in 5E. The same happens if a character takes a scar while that pool is already fully blocked. This applies to all three pools, and each leads to an adventure-ending state if not resolved:

| Pool | What "dying" looks like |
|---|---|
| Body | Physically dying |
| Soul | Going mad, or a catatonic state |
| Charisma | Reputation and self-worth ruined |

**Dying rolls** work like 5E death saving throws, for all three pools. Each turn the character rolls a d20: 10 or more is a success, three successes stabilise them, and three failures mean the end.

**Dying details** *(confirmed; Michal's Dying page)*: a natural 20 counts as two successes and a natural 1 as two failures; a hit taken while dying counts as a failure; another character within touch can help with a skill check (Medic, Incantor or Scout, by the pool).

**Absorbed hits:** if armour reduces the scar level to 0 or less, the hit is absorbed and there's no scar. A DM who wants to punish the player a little can scar the **armour** instead (see [Item scars](#item-scars)).

### Combat

- Combat is in **rounds**, ordered by initiative.
- **Reactions** *(confirmed, 2026-11-14)*: by default the only reaction a player chooses to take part in is defending; the free attack is granted by a trigger. Perks may add more.
- Each turn: **one action** and **one movement**. Movement can be split around the action. Some abilities grant bonus actions or reactions.
- Actions include **attacking** one target in reach (more with Widespread) and **casting a spell**.
- **Free attacks** *(confirmed, 2026-11-08; 5E's opportunity attack)*: when an enemy leaves a character's reach, that character may make **one melee attack** against it, **once per round**, as a reaction. The target can defend as usual.
  - **Disengage** is an action: the character moves away that turn without giving anyone a free attack. Perks like the Fighter's *Long reach* (step back 1 m as a bonus action) do it without spending the action.
- **Player characters have no hit points.** The game is about resource management: players exhaust resources to avoid bad outcomes, and anything they don't avert becomes a Scar.
- **NPC damage against player characters** only helps the DM translate a hit into a Scar. The die reflects the threat: **d4** for weak combatants, **d6** for normal challenges, larger dice for gargantuan threats. The exact system isn't decided yet.
- Weapon damage dice and the 5E weapon table apply to attacks against NPCs, reducing their **Body** track (see [NPCs](#npcs)).

### Defending

When a character is targeted by an attack, spell or other hostile effect, they can **react** with a **defense roll**. This is a challenge (d20 + class level vs the attacker's d20 + class level) using whichever skill fits the defense.

- A defense roll **always takes an action** *(confirmed, 2026-11-14)*: defending before your turn uses up the action you were about to take. To keep it, pay for the **Defense manoeuvre** (or have it free, from a shield or a perk), or don't defend at all, and the attacker makes a skill check instead of a challenge (see *Undefended attacks* below).
- **Losing a defense roll** is a failure like any other: the defender can **exhaust** resources equal to the Danger Level, or take a self-inflicted Scar, to avert it.
- **Undefended attacks:** if the target doesn't or can't defend, the attack goes unchallenged. The attacker makes a **skill check** (2d6 + class level ≥ 9) to see if it lands. A landed hit **can't be averted** with Exhaustion, because there was no roll of the target's to save. The attacker rolls damage, and the target takes a Scar:

  ```
  scar level = damage roll − armour rating
  ```

  For example, a normal enemy (d6) rolls 5 against armour rating 2, giving a level-3 Scar.
- **Old 5E texts:** against an attacker or caster, read "saving throw" as **defense roll**. "Automatically fails saving throws" means the target automatically loses defense rolls. Against the environment it's our own [saving throw](#saving-throws-confirmed), a skill check.

### Cover *(confirmed, 2026-11-15; from 5E and Fateforge)*

Something solid between the target and the attacker: a wall, a barrel, a tree, another fighter. It counts against attacks and effects from the other side, **melee too** (as 5E), for player characters and NPCs alike. The target doesn't need to defend to get it.

| Cover | Body hidden | The attack | Against the hit |
|---|---|---|---|
| **Half** | Half: a low wall, a barrel, someone in the way | Disadvantaged | — |
| **Three-quarters** | All but a sliver: an arrow slit, a thick trunk | Disadvantaged | Armour rating +1 |
| **Total** | All: a closed door, a full wall | Can't be targeted | — |

- **Why not 5E's +2 / +5:** we have no AC, and a flat bonus means very different things on our two rolls. At class level 3, +5 drops an undefended attack (2d6) from 72% to 8%, but a challenge (d20) only from 47% to 26%. Disadvantage works on both alike (72% → 48%, 47% → 31%), needs no defense roll, and blocks the attacker's Precise.
- **The Defense manoeuvre changes nothing:** it only pays for defending without the action.
- **Armour rating +1** works as worn armour: off the Scar level and the averting cost, off an NPC's damage.
- **Area effects** (a fireball, a bomb): behind half or three-quarters cover, the defense roll or saving throw against them is **advantaged** (5E's bonus to Dexterity saves).
- **Total cover:** no ranged attack of any kind, and no spell aimed at the target (it needs sight).
  - **Area effects** still reach if their area gets round the cover; the cover may still shield the target (a blast on the far side of a solid wall). The DM decides.
  - **A symbolic touch** gets a direct spell through: it needs no sight.
  - **Perks** can shoot over it: the Hunter's *Sniper* (a high arc over a wall).
- **Portable cover** *(2026-11-15)*: a **pavise** carried on the arm is a shield (free Defense once per round); planted, it gives **half cover**. Planting or picking it up is an **action** (a bonus action with the Warrior's *Bastion*). **Mantlets** can't be worn: a mantlet (planks or wicker, 15 sp *(est.)*) gives **three-quarters** to one or two people; a wheeled **siege mantlet** (60 sp *(est.)*, half speed) gives **total** cover from the front to four. In the item list as `pavise`, `mantlet`, `siege-mantlet`.
- **The Danger Level** doesn't drop just for cover; the disadvantage does that job. It's how hard the heart is racing: if taking cover really calms things, the DM can lower it; under a rain of arrows it stays the same or goes up.
- **In the rulebook:** *Cover* on the Defending page.

### Saving throws *(confirmed)*

*Called "hazards" until 2026-11-01.*

Traps, poisons, collapsing floors, a curse muttered at the character: anything that needs overcoming with no attacker to challenge. It's a **skill check** (2d6 + class level ≥ 9), and replaces both 5E's saving throws against the environment and DrD2's *výzva*.

- **Any fitting class:** the player says how the character deals with it, and the DM accepts the class whose skill fits that approach. Against a dart trap: leap clear (Juggler), take it on a shield (Fighter), or have spotted the plate beforehand (Hunter).
- **Skills follow areas of expertise,** as in DrD2, not 5E's stats. Recognising a fencing school by its stance is Fighter's *Weapon knowledge*, and recalling how a siege engine works is Warrior's *Warrior knowledge*, not the Incantor's *Scholarship*, even though it's "intelligence".
- **Failing** is averted as usual, by exhausting the skill's resource equal to the Danger Level or taking a Scar. The pools are everyone's safety net; the class level only decides how often they pay.

**Default classes.** When nobody has a better idea, these are the expected answers:

| Danger | 5E save | Default skill (class, resource) |
|---|---|---|
| Dodging a trap, falling rocks, an explosion; keeping balance | Dexterity | Acrobatics (Juggler, B) |
| The same in the wild: a rockslide, a crumbling riverbank | Dexterity | Wilderness movement (Hunter, B) |
| Holding on, breaking free of a net or grapple, forcing a door | Strength | Strength (Fighter, B) |
| Poison, disease, cold, hunger | Constitution | Endurance (Medic, B) |
| A long march, hard labour, a heavy load | Strength, Constitution | Strength (Fighter, B) *(2026-11-08)* |
| Fear, charm, mind magic, temptation | Wisdom | Willpower (Incantor, S) |
| Keeping face under threats, mockery or social pressure | Charisma | Confidence and intimidation (Fighter, C) |
| Noticing a trap or an ambush in the wild | Wisdom (Perception) | Wilderness survival (Hunter, S) |
| Noticing a trap or an ambush in town | Wisdom (Perception) | Urban survival (Juggler, S) |
| Recalling knowledge | Intelligence | By field: weapons and fighting → *Weapon knowledge* (Fighter); war and tactics → *Warrior knowledge* (Warrior); the occult and history → *Scholarship* (Incantor); wounds and illness → *Healing the human body* (Medic); beasts → *Hunting* (Hunter) |

Advanced classes can answer too when their skills fit: *Mechanisms* (Rogue) for a lock trap, *Aerial acrobatics* (Rogue) for a fall.

### Armour

Armour helps player characters in two ways, and NPCs in one:

- **Scars from hits:** scar level = damage roll − armour rating.
- **Body exhaustion** *(confirmed)*: when a character exhausts Body to avert being hit, the armour rating lowers the cost, like a resistance bonus. **Averting always costs at least 1.** At Danger Level 3: no armour 3, light 2, medium 1, heavy 1. A long fight still wears down a knight.
- **NPCs** *(confirmed, 2026-11-08)*: every hit's damage loses the armour rating, the same subtraction as a player character's Scar level. 0 or less is **absorbed**. *A longsword hit of 7 against a knight in plate (rating 3) deals 4.*
  - The stat block's `armour:` line sets the rating, from the pieces worn like a player character's, or natural armour (a bear's hide).
  - **Natural armour** goes up to 3 like worn armour. **Big monsters can reach 4–5**, but only where it's warranted: a dragon's scales, a stone golem. *(Confirmed, 2026-11-08.)*
  - **Mighty's extra die** is the way through it. Since weapons no longer grant it free (2026-11-11), perks that do (*Weapon of choice*, *Legendary warrior*) are the answer to armour.
  - **Units:** the rating counts only if most members wear it, like other equipment.
  - **Backup, if heavy armour makes fights drag:** the 5E route instead. Armour makes the wearer harder to hit: +rating to the NPC's defense rolls, and an undefended attack needs 9 + rating to land. Player characters keep their own rules either way.
- **Ignoring armour** *(planned)*: some damage skips the subtraction, for player characters and NPCs alike.
  - **Poison** already does (see [Our poison rules](#our-poison-rules-confirmed)).
  - **Ballista bolts** (see [Structures and siege engines](#structures-and-siege-engines-draft)).
  - **A Ravager perk**, reserved to that mighty class: its hits ignore armour.

| Armour | Rating | Encumbrance cost |
|---|---|---|
| None | 0 | — |
| Light | 1 | — |
| Medium | 2 | Exhaust 1 Body |
| Heavy | 3 | Exhaust 2 Body |

**Encumbrance** is a [cost to attempt](#cost-to-attempt): before even attempting an activity the armour would hinder, the character must first exhaust the encumbrance cost in Body. That covers stealth, acrobatics, swimming, fast movement, and anything else the DM judges the armour gets in the way of.

#### Modular armour *(draft, from the Central European pricelist)*

Armour isn't bought as a suit ("full plate" is hard to price, and nobody bought it in one go). Players **mix and match pieces**, and the pieces add up to the tiers above.

- **Slots:** under, body, head, arms, legs. **One piece per slot**; a long mail hauberk takes body and arms.
- **Two totals:** every piece adds to **Protection** and **Burden**.
  - **Protection sets the armour rating**, **Burden sets the encumbrance**.
  - Both use the same tiers: **0 none, 1–3 light, 4–6 medium, 7+ heavy**. So Protection 4–6 is rating 2; Burden 7+ costs 2 Body to attempt.
  - Most sets land in the same tier on both.
- **Fitted plate harness:** plate on the body (coat of plates or breastplate), a bascinet, plate arms and plate legs, fitted by an armourer: **−3 Burden**. It's the only way to get heavy protection at medium burden. Second-hand plate gets no relief until refitted (a week with an armourer).
- *Optional:* mail and plate body pieces need a gambeson underneath.
- **The numbers are ours, not the source's.** The pricelist asked how the three tiers work in numbers; our existing armour rules answer it: rating 0–3 is subtracted from Scar levels and from averting a hit, and encumbrance is a cost to attempt in Body.
- **Scarring armour** *(draft, to confirm)*: the old rule ("rating drops by 1; light armour breaks") assumed one suit. With pieces, **one piece breaks** (the DM picks which) and stops counting until repaired, which can drop the armour a tier. Breaking a cheap kettle hat and a mail shirt aren't equal, so the DM picks the piece the hit plausibly struck.

| Piece | Slot | Protection | Burden |
|---|---|---|---|
| Gambeson (padded) | Under | 1 | 1 |
| Leather or hide jerkin | Body | 1 | 1 |
| Mail shirt (haubergeon), scale shirt | Body | 2 | 2 |
| Mail hauberk, long and sleeved | Body + arms | 3 | 3 |
| Coat of plates, breastplate *(harness)* | Body | 3 | 3 |
| Brigandine *(2026-11-16; flexible, so never part of a harness)* | Body | 3 | 3 |
| Padded hood, padded coif, mail coif, iron cap, kettle hat | Head | 1 | 1 |
| Mask helmet *(2026-11-16)* | Head | 2 | 2 |
| Bascinet with mail aventail *(harness)* | Head | 2 | 2 |
| Closed bascinet, visored *(harness; 2026-11-16)* | Head | 3 | 3 |
| Plate arms with gauntlets *(harness)* | Arms | 1 | 1 |
| Mail chausses | Legs | 1 | 1 |
| Plate legs *(harness)* | Legs | 1 | 1 |

| Example set | Protection | Burden | Rating | Encumbrance |
|---|---|---|---|---|
| Gambeson + kettle hat | 2 | 2 | 1 | — |
| Militia: gambeson + mail shirt + kettle hat | 4 | 4 | 2 | 1 Body |
| Gambeson + coat of plates + kettle hat | 5 | 5 | 2 | 1 Body |
| Man-at-arms: gambeson + hauberk + bascinet + chausses | 7 | 7 | 3 | 2 Body |
| Partial plate (no plate legs) | 7 | 7 | 3 | 2 Body |
| Full fitted plate | 8 | 5 | 3 | 1 Body |

**In the app:** armour items carry `slots`, `protection`, `burden` and `harness`; `lib/rules/armour.ts` adds them up. The character sheet shows the totals for carried, unbroken pieces, assuming a full harness is fitted. The rulebook lists the pieces with `::armour`. The old whole suits (leather, chain shirt, scale mail, chain mail, plate) are gone.

The Kroll perk *Bison Skin*: with no armour worn, the kroll's hide counts as **armour rating 1**, like light armour *(confirmed, 2026-11-09; was "+1 resistance bonus on exhaustion")*. It doesn't stack with worn armour.

### Manoeuvres

Each costs **1 point of the governing resource**, unless an ability makes it free.

| Manoeuvre | Effect |
|---|---|
| **Precise** | Advantaged roll on the action. |
| **Mighty** | Against an NPC: an extra damage die (or +1 at stake on Soul and Charisma). Against a player character: averting costs +1, or on top of the Scar they exhaust d4 more from the same pool. See [The Mighty versions](#the-mighty-versions-confirmed). |
| **Cunning** | Once the attack lands, the manoeuvre buys a triggered bonus action *(confirmed)*: the target is knocked prone, or **in close combat** grappled or pushed in any direction *(confirmed, 2026-11-11: a thrown or shot weapon can't grapple or push)*. No perk-granted bonus action is needed. |
| **Quick** | Advantaged initiative roll. Always costs **1 Soul** *(confirmed, 2026-11-15)*: the action isn't chosen yet, so there's no governing resource. |

**Precise and Quick are advantage.** Any advantage on an action, from a perk, a Blessing or a prone target, **is** a free Precise; advantage on initiative is a free Quick. **A perk that grants advantage always means Precise** *(confirmed, 2026-11-11)*; a perk that helps initiative names Quick. Paying for one when you already have advantage changes nothing.

**One manoeuvre per action** *(confirmed, 2026-11-01; replaces "one paid manoeuvre")*. Free manoeuvres count towards the limit, whether they come from a perk, a shield or a situation.
- **Quick counts** *(confirmed)*, because it affects the turn's action: use it, and that turn's action gets no other manoeuvre.
- **Defense doesn't count** *(confirmed)*: it's a paid reaction, not part of the action.
- **A critical hit's free Mighty doesn't count** (see [Rolls](#rolls)).
- *A swordsman with a perk's free Precise can't also pay 1 Body for Mighty.*
- *Paying for both Mighty and Cunning on one swing:* not allowed.
- **Conditions name the manoeuvre** *(confirmed)*: attacks against a prone target (within 1 m), or a blinded, paralyzed, petrified, restrained, stunned or unconscious one, **are Precise**. So are a charmer's social checks against the charmed and an invisible creature's actions (its initiative is Quick). That Precise is the action's one manoeuvre.
  - **It isn't forced:** the attacker can use another manoeuvre instead, but has to pay for it unless something else grants it free (a perk's free Mighty).

**Widespread and areas** *(confirmed)*
- **Every multi-target action needs Widespread,** as in DrD2. Without it, an action affects one target.
- **Two kinds of spell** *(confirmed, 2026-11-01)*:
  - **Unspecified effects,** usually core spells, give the caster a general ability to control something, like a Druid's control of water. They work up to a witch's hut (see *Units of size* under [Scale of the basic version](#proposed-base-dračí-doupě-2)). **Widespread extends them,** to more targets or a larger amount: more water needs a Widespread. *A Warlock lighting several torches at a distance with base fire magic pays for Widespread.* Perks like Marching Forest, Rock and Stone and Tsunami make it free for their bending.
  - **Specific effects,** like Fireball, Burning Hands or Earthquake, do one fixed thing. Their area is part of that effect, paid for by the **activation price**, much like a 5E spell slot. **Widespread can't change them:** there's no way to make a fireball bigger.
- *To confirm:* a specific spell's area isn't a manoeuvre, so the action's one manoeuvre looks free for something else, such as Mighty.

**Weapons grant no free manoeuvres** *(confirmed, 2026-11-11; replaces "every proper weapon grants one")*
- **Why:** DrD2's free weapon manoeuvre made weapons differ in a vague damage system. Ours already differ by 5E's dice and properties, and an always-on manoeuvre took the main Body-spending decision out of combat (every sword attack advantaged, every mace hit an extra die and +1 to avert).
- **The shield stays:** a free **Defense once per round**.
- **Perks grant them instead** *(confirmed, 2026-11-11)*, in three ways:
  - **Advantage** on an activity (a weapon, a skill) **always means Precise**, nothing else.
  - **A named manoeuvre** for a specific case: *Got you* gives Cunning to grapple with a hooking weapon.
  - **Strong manoeuvres** across all the skills a class governs, e.g. Very Mighty in every Fighter skill.
- **The ladder:** a plain weapon pays 1 point; a perk makes it free (*Weapon of choice*: Mighty with one weapon type); a class's **mastery perk** at level 5 makes any manoeuvre strong with all that class's skills (*Legendary warrior* for the Warrior); mighty classes give cruel manoeuvres.
- **NPCs:** a free manoeuvre with a weapon is a stat-block ability ("free Precise with the sword"), not a property of the weapon.
- **In the app:** weapons' `free_manoeuvre` is cleared; only shields keep `defense`. The column and the item editor field stay for now.

**Strong and cruel manoeuvres** *(confirmed)*. There's no general "mastery"; perks and abilities grant them.
- **Strong (*very*) manoeuvres** come from **perks**, each tied to a class's skills. Class level 5 alone doesn't unlock them.
  - **Mastery perks** *(confirmed, 2026-11-12)*: every basic and advanced class has one, needing **class level 5**, on *Legendary warrior*'s pattern. With any of that class's skills, **any** manoeuvre can be its strong version (Very precise, Very mighty, Very cunning, Very quick) for the same price: a free one stays free, a paid one still costs its point. It's still the action's one manoeuvre.
  - *Hundred fights* (Fighter), *Lord of the hunt* (Hunter), *Word of power* (Incantor), *Grand trickster* (Juggler), *Master healer* (Medic), *Legendary warrior* (Warrior), *Legend of the borderlands* (Ranger), *Master witcher* (Witcher), *Grey eminence* (Scout), *Elder shaman* (Shaman), *Archdruid* (Druid), *Prince of thieves* (Rogue), *Magnum opus* (Alchemist), *Master of elements* (Warlock), *Archmage* (Mage).
  - **The other strong versions** *(confirmed, 2026-11-12; as on the rulebook's Manoeuvres page)*:
    - **Very precise / Very quick:** DrD2's: the advantage die may be rolled after everyone has rolled, when you see you need it. It adds nothing when the manoeuvre is free anyway; that's accepted.
    - **Very cunning:** Cunning's effect (prone, grapple, push) and more. Against an **NPC**, 1d4 damage as a bonus action. Against a **player character**, their **Danger Level +2** while the effect lasts (until they stand up, break free or close the distance). *Draft:* the "while the effect lasts" part.
- **Cruel manoeuvres** come from **perks of the mighty classes**, the top of a character's advancement.
- **NPCs** get either as **special abilities** in their stat block: the arena champion's Very Mighty, the dragon's Cruelly Mighty.

**NPC manoeuvres** *(confirmed)*
- **Granted manoeuvres are free:** any listed in the stat block (a wolf's Cunning on every bite, a soldier's shield Defense).
- **Ungranted manoeuvres cost 1 point of a track,** usually **Soul or Charisma**, whichever fits. Those tracks are small, so paying brings the NPC closer to breaking or giving in.

**The Mighty versions** *(confirmed; the not-averting and NPC rows as on the rulebook's Manoeuvres page, 2026-11-12)*. All are declared before the roll.

| | Mighty | Very mighty | Cruelly mighty |
|---|---|---|---|
| **Player character averting** | Costs +1 | Costs +2 | Must first take a **level-1 Scar** (a blank payment, no temporary points), then pay the cost |
| **Player character not averting** | On top of the Scar, exhausts **d4** more points of the Scar's pool; if the pool runs out, it stops at 0 | Scar level +1 | Scar level +2 |
| **NPC, Body** | +1 damage die | +2 damage dice | If it **defends**, it first takes one damage die before the challenge roll; then, either way, +2 damage dice |
| **NPC, Soul or Charisma** | +1 at stake | +2 at stake | If it **defends**, it first takes damage equal to the attacker's class level; then, either way, +2 at stake |
| **Who gets it** | Anyone (1 point), or free from a perk | Class perks; NPC stat blocks | Mighty class perks; NPC stat blocks |

- *(Confirmed, 2026-11-12.)* A player character who doesn't avert plain Mighty keeps the Scar's level but exhausts d4 more points from the pool the Scar hit. It stops at 0: running out costs no extra Scar. Very mighty raises the Scar by 1, Cruelly mighty by 2. Against an NPC, Cruelly mighty is Very mighty plus the damage before defending.
- **Damage before defending** against Cruelly mighty: **one die** of the attack's damage on Body (no class level; 1d8 against a longsword), or the **attacker's class level** on Soul and Charisma. An important NPC's Fate saves it from the blow, not from this.
| **Defense** | Defend yourself without spending your action. Usable as many times per round as the character can pay *(confirmed)*; a shield makes one per round free. |
| **Widespread** | The action affects multiple targets instead of one. |

**When to declare** *(confirmed)*

| Manoeuvre | Declared |
|---|---|
| **Precise** | Before the roll |
| **Mighty** | Before the roll |
| **Cunning** | After the attack lands |
| **Quick** | Before initiative is rolled. It counts as the turn's one manoeuvre |
| **Defense** | When targeted after the action is spent |
| **Widespread** | When describing the action |

**Mighty has no penalty for missing** *(confirmed, 2026-11-01)*. The old gamble (disadvantage on the next roll after a miss) is gone: too complicated, and it almost never came up.

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

**Reworked as mirrors of the manoeuvres** *(2026-11-14; DrD2's Feeble and Foolish leaned on NPCs averting and having a Danger Level, which ours don't)*. Each penalty blocks one manoeuvre, even a free one, and turns its effect against the character. There's no penalty for Defense or Widespread: conditions already cover those (Incapacitated, Restrained, …).

| Penalty | Blocks | Effect |
|---|---|---|
| **Imprecise** | Precise | The character's rolls with that skill are disadvantaged |
| **Slow** | Quick | The character's initiative is disadvantaged |
| **Feeble** | Mighty | Against an NPC: one damage die fewer (minimum 1), or 1 less at stake for Soul and Charisma damage. Against a player character: averting the feeble character's action costs 1 less (minimum 1) |
| **Foolish** | Cunning | The character can't knock prone, grapple or push. **Opponents who land a hit on them get a free Cunning** (the bonus action: prone, or in close combat a grapple or push). Like a condition's free Precise, it's that action's one manoeuvre |

**Scope:** set by the source. A penalty can name a skill or skill group (*Imprecise: ranged weapons* from a curse of trembling hands) or apply to everything the character does (*Slow* from a numbing poison).

**Duration:** like any condition, a penalty lasts **as long as its cause**, which the DM sets. From a spell, it lasts the spell's duration; otherwise, until the condition no longer holds. (DrD2's default of "until the next sunset or sunrise" isn't used.) More conditions may be added later.

**The hidden difference:** every DrD2 penalty also **blocks its manoeuvre**. Under 5E's cancelling rule, one point spent on Precise would cancel any disadvantage. DrD2's Imprecise can't be paid off that way.

**Answer:** now covered by the general rule that **disadvantage always wins** (see [Rolls](#rolls)). A condition that imposes disadvantage blocks advantage on those rolls, like DrD2's Imprecise:
- Disadvantage on attacks or skill checks (Blinded, Frightened, Prone, Restrained, Imprecise…) blocks **Precise**.
- Disadvantage on initiative (Blinded, Deafened, Frightened, Stunned, Slow) blocks **Quick**.
- **It blocks every source of advantage,** not just paid ones: free manoeuvres from perks, a Blessing, attacking a prone target, being invisible. The roll stays disadvantaged.

#### Conflicts with our manoeuvres and 5E

1. ~~**Cunning is different.**~~ Answered: ours stays (prone, grapple or push). → **Q16a**
2. ~~**Mighty**~~ Answered: reworded for tracks (see *The Mighty versions*). It mostly agrees: DrD2's +1 to the averting cost is ours "against targets without hit points". Against NPCs we add an extra damage die. Wording needs updating, since NPCs now have tracks, not hit points.
3. ~~**"Free when you have advantage"**~~ Answered: the clause is dropped. It came from translating advantage into manoeuvres: any advantage on an action is a free Precise, on initiative a free Quick. Our Precise and Quick) does nothing: advantage doesn't stack, so a second source changes nothing. DrD2 has no such clause. → **Q16b**
4. ~~**Timing.**~~ Answered: DrD2's timing, with Cunning after the attack lands, and Mighty declared before the roll, with no penalty for missing (changed 2026-11-01). DrD2 fixes when each is declared: Precise and Quick before the roll, Mighty after winning, Cunning after the target declines to exhaust. Ours doesn't say. → **Q16b**
5. ~~**One manoeuvre per action.**~~ Answered: one manoeuvre, free ones included (changed 2026-11-01). DrD2 implies it (Quick doesn't count, being outside the action), plus any free one from a weapon. Ours doesn't say. → **Q16b**
6. ~~**Widespread is required**~~ Answered: spells with a specific effect have a fixed area, paid for by their activation price, which Widespread can't change; spells with an unspecified effect, and other actions, pay for Widespread to extend them. **Widespread is required** for any multi-target action in DrD2. Our area spells (Fireball, Burning Hands, Earthquake) and the 5E idea of built-in areas clash with it. → **Q16c**
7. ~~**Weapons.**~~ Answered: each weapon grants one free manoeuvre, set in the item editor, defaulting by damage type. Ours use the 5E table (dice, damage type, properties). DrD2's free manoeuvre maps neatly onto 5E damage types: piercing → Cunning, slashing → Precise, bludgeoning → Mighty; bows → Precise, crossbows → Mighty, thrown → Cunning. Shields → free Defense once per round. Both can coexist. → **Q16d**
8. ~~**Strong and cruel manoeuvres need "mastery"**~~ Answered: strong ones from perks, cruel ones from mighty class perks; NPCs from stat-block abilities. They needed mastery, which we haven't defined: class level 5, a perk, an NPC bonus above 5? → **Q16e**
9. ~~**NPCs and manoeuvre costs.**~~ Answered: granted manoeuvres are free; ungranted ones cost 1 point of a track, usually Soul or Charisma. Player characters pay 1 point of a pool. NPCs have tracks, not pools, and Fate only averts failures. DrD2 NPCs paid with Fate (cruelly cunning even scales with it). → **Q16f**
10. ~~**Cruelly mighty against an NPC.**~~ Answered: an NPC that defends first takes one die of damage (or the class level on Soul and Charisma); one that doesn't takes +2 damage dice. NPCs don't exhaust, so it only bites on Fate. Does an NPC spending Fate first take track damage? → **Q16f**
11. ~~**Penalties vs 5E conditions.**~~ Answered (Q16g). 5E handles similar effects with conditions (Poisoned: disadvantage on attacks and checks) that last a set time. DrD2's penalties are narrower (one skill group) and last until sunset or sunrise, which fits our spell durations. → **Q16g**
12. **Ranges in paces.** DrD2's ~12/24/80 paces vs our 5E-converted metres (thrown 4/12 m, shortbow 16/64 m, longbow 30/120 m). We keep metres.

### Conditions, resistances and weaknesses

- **Conditions:** Blinded, Charmed, Deafened, Frightened, Grappled, Incapacitated, Invisible, Paralyzed, Petrified, Prone, Restrained, Stunned and Unconscious, adapted from 5E, mostly granting or imposing advantage and disadvantage. Plus four from DrD2's penalties: **Imprecise, Slow, Feeble and Foolish** (see [Penalties vs our conditions](#penalties-vs-our-conditions)). Their disadvantage, like any, can't be cancelled by advantage.
- Old texts' "saving throw" against an attacker or caster reads as a **defense roll** (see [Defending](#defending)). Some also mention Strength/Dexterity saves, which need rewording, and feet, which become metres (see [Units](#units)).

| Modifier | Effect on damage | Effect on exhaustion cost |
|---|---|---|
| Weakness | Doubled | Doubled |
| Weakness bonus | — | Increased by the bonus |
| Resistance | Halved | Halved |
| Resistance bonus | — | Reduced by the bonus |
| Immunity | Negated | None |

**Rounding** *(confirmed, 2026-11-14)*: halving always rounds in the character's favour, so the harm is less: damage and averting costs round down. Averting still costs at least 1. *Evasion* follows it.

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

**DM tables** *(draft, 2026-11-08)*. The same numbers as the calculator, worked out ahead so the DM can read them off at the table. Days are 8 hours on the move.

**Speeds**

| Who | Per turn | Running (whole turn) | km/h | km a day (road, normal pace) |
|---|---|---|---|---|
| Dwarf, Halfling | 5 m | 10 m | 4 | 30 |
| Human, Elf | 6 m | 12 m | 5 | 40 |
| Kroll | 7 m | 14 m | 5.5 | 45 |
| Ox cart, heavy wagon | 4 m | — | 3 | 25 |
| Pony, mule, draught horse, war dog, wolf | 8 m | 16 m | 6.5 | 50 |
| Riding horse, warhorse | 12 m | 24 m | 10 | 75 |

**A day's travel** (km), by the slowest traveller's speed:

| Speed | Pace | Road, plains | Hills, forest | Mountains, swamp | Severe |
|---|---|---|---|---|---|
| 4 m | Slow | 17 | 13 | 8 | 4 |
| | Normal | 25 | 19 | 13 | 6 |
| | Fast | 33 | 25 | 17 | 8 |
| 5 m | Slow | 20 | 15 | 10 | 5 |
| | Normal | 30 | 23 | 15 | 8 |
| | Fast | 40 | 30 | 20 | 10 |
| 6 m | Slow | 27 | 20 | 13 | 7 |
| | Normal | 40 | 30 | 20 | 10 |
| | Fast | 53 | 40 | 27 | 13 |
| 7 m | Slow | 30 | 23 | 15 | 8 |
| | Normal | 45 | 34 | 23 | 11 |
| | Fast | 60 | 45 | 30 | 15 |
| 8 m | Slow | 33 | 25 | 17 | 8 |
| | Normal | 50 | 38 | 25 | 13 |
| | Fast | 67 | 50 | 33 | 17 |
| 12 m | Slow | 50 | 38 | 25 | 13 |
| | Normal | 75 | 56 | 38 | 19 |
| | Fast | 100 | 75 | 50 | 25 |

- **Pace:** what each one allows is in [Pace](#pace-confirmed-2026-11-08) below.
- **Weather and ground move the column, not the number:**
  - Rain: no change.
  - Heavy rain, mud on the roads, ankle-deep snow: **one column right**.
  - Snowstorm, knee-deep snow: **two columns right**.
  - Past *Severe*: 3 km at most, or stay put.
- **Encumbered:** one pace slower (normal becomes slow). **Heavily encumbered:** slow pace and one column right. *(Replaces −2 m and −4 m, near enough.)*
- **Gallop:** a mounted party can add one hour of gallop, about **+15 km** on a road. The horses then need a slow day or a long rest.
- **Spare horses** *(2026-11-14)*: with a spare horse for every rider, swapping mounts, the party can gallop a **second hour** (another +15 km), and the horses need no slow day afterwards. The Scout's *Courier* does it on one horse.
- **Forced march:** each hour past 8 is a [cost to attempt](#cost-to-attempt) of **1 Body**, exhausted before the hour starts. With no Body left, the traveller stops or takes a Scar to go on.

**Ground** *(draft)*: what the ground does in a fight, and which travel column it counts as.

| Ground | In a fight | Travel column | The catch |
|---|---|---|---|
| Road, firm meadow, light forest | Full | Road | — |
| Ploughed field, tall grass, ankle-deep snow, a ford up to the knee | Half | Hills, forest | — |
| Mud, wet clay | Half | Hills, forest | Running or fighting: Acrobatics saving throw or fall prone |
| Ice | Full, walking only | Road, slow pace only | Running, fighting or being hit: Acrobatics saving throw or fall prone |
| Knee-deep snow, sand dunes, loose scree, steep slope uphill | Half | Mountains | Downhill at a run: Acrobatics saving throw or fall |
| Dense forest, thicket | Half | Mountains | No riding |
| Primeval forest, a mountain with no path | Half | Severe | No riding or carts |
| Deep mud (knee and above) | Quarter | Severe | Carts get stuck. Ending a turn still: Strength saving throw or stuck (lose next turn's movement) |
| Bog, marsh | Quarter | Severe | Ending a turn still: Strength saving throw or sink deeper and be **Restrained**; sunk to the chest, only someone else can pull you out |
| Waist-deep water | Quarter | Severe | Armour's cost to attempt applies |
| Swimming | Quarter | — | Armour's cost to attempt applies; heavy armour sinks |
| Climbing (a rope, a rough wall) | Quarter | — | A saving throw (Acrobatics or Strength) at the Danger Level of the fall |

**Half and quarter speed per turn:**

| Speed | Full | Half | Quarter |
|---|---|---|---|
| 5 m | 5 m | 2.5 m | 1 m |
| 6 m | 6 m | 3 m | 1.5 m |
| 7 m | 7 m | 3.5 m | 2 m |
| 8 m | 8 m | 4 m | 2 m |
| 12 m | 12 m | 6 m | 3 m |

#### Pace *(confirmed, 2026-11-08)*

From 5E (2024 PHB: slow gives advantage on Perception and Survival, fast gives disadvantage on them, normal gives disadvantage on Stealth). In our terms, advantage is a free **Precise** and disadvantage always wins.

| Pace | Distance | Noticing an ambush or a sign (the watch) | Navigating, tracking, foraging | Sneaking |
|---|---|---|---|---|
| **Slow** | The *Slow* row | **Advantage** | **Advantage** | Yes |
| **Normal** | The *Normal* row | Plain roll | Plain roll | Disadvantaged |
| **Fast** | The *Fast* row | **Disadvantage** | **Disadvantage**; no foraging | No |

- **Noticing** is the watch's hidden saving throw (*Wilderness survival*, Hunter; *Urban survival*, Juggler, in town). One character rolls for the party: whoever is keeping watch, usually at the front.
- **Sneaking:** the party moves unseen, so encounters notice them only on a won challenge. The whole party rolls, and armour's [cost to attempt](#cost-to-attempt) applies. One clanking knight gives everyone away.
- **Encumbered** drops one pace (see above), and with it these benefits.

#### Travel tasks *(confirmed, 2026-11-08)*

From 5E's travel activities. Each character picks **one** for the day; the pace limits what's possible.

| Task | Roll | Success | Failure, not averted |
|---|---|---|---|
| **Keep watch** | *Wilderness* or *Urban survival* (hidden) | The party notices an encounter first | The encounter notices the party first |
| **Navigate** (off the road only) | *Wilderness survival* | On course | Lost: the day's distance counts for nothing; next morning's roll finds the way |
| **Track** | *Hunting* (Hunter) | On the trail | Trail lost until a new sign is found |
| **Forage** (not at fast pace) | *Hunting* (Hunter) | Food for the party today, and **1 Material** of herbs, wood or hides (proper Material) | Nothing found |
| **Map** | *Warrior knowledge*, *Ranger knowledge* or Scout's skills | Advantage on navigating this route again | — |
| **Hunt** (not at fast pace) *(2026-11-15)* | The game d10, then *Hunting* (Hunter) | Tiny animals, small or large game, as rolled | The game gets away |
| **Cover the trail** (slow pace only) *(2026-11-14)* | No roll | Tracking the party is disadvantaged (the Scout's *Cold trail* gives it free) | — |
| **Sneak** (slow or normal pace) | *Acrobatics* (Juggler) or *Wilderness movement* (Hunter), for everyone | Unseen, as above | Seen |

- **Hunting** *(2026-11-15)*: a d10 on the land's row says what's around, then a *Hunting* roll takes it. Large game can be run as a fight. In settled land and a lord's reserve, it's poaching. The Hunter's ***Fresh tracks*** (1 Soul) skips the d10: the hunter decides which animal the region could hold is nearby and finds its tracks. *(It replaces the Shaman's *Animal tracks*, dropped 2026-11-15.)*

  | Land | For example | Nothing | Tiny animals | Small game | Large game |
  |---|---|---|---|---|---|
  | **Lush** | Old forest, river meadows, a lord's reserve | 1 | 2–3 | 4–7 | 8–10 |
  | **Settled** | Fields, pastures, managed woods | 1–2 | 3–5 | 6–9 | 10 |
  | **Devastated** | A war zone, burnt or hunted-out land | 1–4 | 5–7 | 8–9 | 10 |
  | **Barren** | Bare mountains, heath, winter wastes | 1–5 | 6–8 | 9 | 10 |

  Tiny animals (mice, frogs, eggs) feed one person today; small game (hares, fowl, fish) the party today; large game (deer, boar, bear) the party for three days, plus 2 Material of hides and horn.
- **The Danger Level** of travel rolls is the region's (see [Random encounters](#random-encounters-confirmed-2026-11-08)): 2 on a patrolled road, 3 in the wilds, 4 in dangerous lands.
- **Weather** makes some rolls disadvantaged (see [Weather](#weather-confirmed-2026-11-08)).

#### Weather *(confirmed, 2026-11-08)*

**Roll 2d6 each morning** on the season's column. A 7 keeps yesterday's weather, so spells of rain and frost last. 5E's DMG rolls temperature, wind and rain separately on a d20; this folds them into one roll for Central Europe.

| 2d6 | Spring | Summer | Autumn | Winter |
|---|---|---|---|---|
| 2 | Late frost, sleet | Thunderstorm | Gale | Snowstorm |
| 3–4 | Heavy rain | Heavy rain shower | Heavy rain | Snow |
| 5–6 | Rain | Overcast, showers | Fog | Overcast, frost |
| 7 | As yesterday | As yesterday | As yesterday | As yesterday |
| 8–10 | Fair | Fair, warm | Fair, fog in the morning | Clear, hard frost |
| 11 | Mild, roads drying | Heat | Rain | Thaw: mud |
| 12 | Thaw floods: fords impassable | Heatwave | First snow | Bitter cold |

**What it does:**

| Weather | Travel | Noticing and ranged attacks | Exposure |
|---|---|---|---|
| Fair, overcast, showers, rain | — | — | — |
| Fog | — | Nothing seen beyond 20 m; **navigating disadvantaged** | — |
| Heavy rain, sleet | One column right | Noticing by sight or hearing **disadvantaged**; open flames go out | — |
| Thunderstorm, gale | One column right | Noticing and ranged attacks **disadvantaged** | Lightning and falling branches: shelter is wise |
| Snow | One column right from the next day (ankle-deep) | — | Cold, below |
| Snowstorm | Two columns right | Nothing seen beyond 10 m; noticing, navigating and ranged attacks **disadvantaged** | Cold, below |
| Thaw, mud | One column right | — | — |
| Thaw floods | Fords impassable for a day | — | — |
| Heat | — | — | Heavy armour: the day's march is a cost to attempt of 1 Body |
| Heatwave | — | — | Everyone: the day's march costs 1 Body to attempt (2 in medium or heavy armour), unless they march at night |
| Hard frost, bitter cold | — | — | Cold, below |

- **Cold:** a night outdoors without a fire, a tent or warm clothes is an *Endurance* saving throw (Medic) at **Danger Level 3** (bitter cold: 5). Failing, not averted: a level-1 Body Scar (frostbite, a fever). Either way it's a **poor rest**.
- **Rain, snow, cold and heat** make any night outdoors without shelter a poor rest.

#### Random encounters *(confirmed, 2026-11-08)*

From 5E's DMG (a d20 check, encounter on 18–20, rolled every few hours or once by day and once by night) and the old-school 1-in-6. Here: **roll a d6 twice a day, once for the day's march and once for the night.**

| Region | Encounter on | Danger Level of travel rolls |
|---|---|---|
| **A patrolled road**, settled farmland | 1, and only at night | 2 |
| **The wilds**: forest, hills, an unpatrolled road | 1 | 3 |
| **Dangerous lands**: a war zone, monster country, an outlaw forest | 1–2 | 4 |

- **Slow pace** doesn't change the chance; it changes who notices first.
- **Camping by the road** or in a village counts one row safer; a **fire at night** in the wilds or worse counts one row more dangerous (the light carries).
- **The DM can skip the roll** when an encounter would only waste time, or place one when the story needs it.

**What it is** (d6, or the DM picks):

| d6 | Encounter |
|---|---|
| 1 | **A sign:** tracks, a corpse, a burnt farm, a fresh grave. A hook, not a fight |
| 2 | **Travellers:** merchants, pilgrims, a herald, refugees |
| 3 | **The lord's men:** a patrol, a toll, a bailiff looking for someone |
| 4 | **Beasts:** wolves, a boar, a bear (the region's animals) |
| 5 | **Outlaws:** bandits, deserters, poachers who don't want witnesses |
| 6 | **Something worse:** a monster or a fiend of the region (from the [bestiary](#bestiary)); in dangerous lands, roll twice and take the worse |

**Who notices first:** the watch's hidden roll against the encounter (a challenge if the other side is sneaking or lying in ambush).

| Ground and light | Spotted at |
|---|---|
| Open ground by day | 100 m |
| Forest, hills, rain | 30 m |
| Dense forest, fog, night, snowstorm | 10 m |

- **The side that noticed** chooses: talk, hide, ambush or go round.
- **The side that didn't** is surprised: **disadvantaged initiative** in the first round (5E 2024's rule).
- **A night encounter** breaks the rest: it becomes a poor rest.

**How they react** (optional, for travellers, the lord's men and outlaws when the party doesn't strike first): 2d6, the classic reaction roll. The DM can add a fitting talker's class level once they open their mouth, or a [known setting](#backgrounds)'s +1 if the player asks and it fits.

| 2d6 | Reaction |
|---|---|
| 2–4 | Hostile: attack, rob or arrest |
| 5–8 | Wary: talk, but keep hands on weapons |
| 9–12 | Friendly: share news, trade, offer the fire |

### Digging and mining *(draft)*

**One worker with a spade and pick**, per hour, in m³ (a grave is about 2 m³):

| Ground | By hand | With tools | A tunnel, crew of 4, per 8-hour shift |
|---|---|---|---|
| Sand, loose earth | 0.1 | 1 | 4 m |
| Garden earth, topsoil | 0.1 | 0.75 | 3 m |
| Clay, packed earth | — | 0.5 | 2 m |
| Gravel, stony ground | — | 0.25 | 1 m |
| Frozen ground | — | 0.1 (thaw it with fire first) | 0.5 m |
| Soft rock: chalk, sandstone, tuff | — | 0.05 | 0.5 m |
| Hard rock: granite, limestone | — | — | 10 cm (30 cm with fire-setting) |

- **A tunnel** is 1 m wide and 2 m high.
- **Overtime:** each hour past 8 is a [cost to attempt](#cost-to-attempt) of **1 Body**, exhausted before the hour starts. With no Body left, the digger stops or takes a Scar to go on. *(Replaces an Endurance saving throw.)*
- **Faster digging is a racial perk:** the dwarf's *Call of the mine* (twice the speed, advantage on digging rolls). There's no free racial bonus.

**Cave-ins:** roll a d6 **once per shift** for each tunnel; on the listed numbers it caves in.

| Ground | Unshored | Shored with timber |
|---|---|---|
| Sand, loose earth | 1–3 | 1 |
| Garden earth, topsoil, gravel | 1–2 | — |
| Clay, packed earth, frozen ground | 1 | — |
| Soft rock, hard rock | — | — |

- **Shoring** takes timber: about 1 Material per metre of tunnel.
- **Shaking ground** (siege engines hitting above, a countermine, a fire in the tunnel, an earthquake): roll at once, and a shored tunnel caves in on a 1 whatever the ground.
- **Caught inside:** an Acrobatics saving throw at Danger Level 4 to get clear. Failing means a d6 threat-die Body Scar and being buried (**Restrained**) until dug out, about 1 m³ of digging per person.

**Burrowing creatures:**

| Creature | Burrow per turn | Through rock? | Leaves a tunnel? |
|---|---|---|---|
| Giant badger | 2 m | No | Yes, a narrow one |
| Earth elemental | 6 m | Yes, and worked stone | No |
| Earth or stone golem | 6 m | Yes, and worked stone | No |

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
- **Body works as hit points** and is scaled like 5E hit points, so it's the largest track. Weapons and damage spells reduce it, minus the NPC's armour rating (see [Armour](#armour)).
  - **Not the same scale as a player character's Body.** A player's Body pool (about 3–10) is how far they can push, spent at the Danger Level; they never lose it to damage, they take Scars. An NPC's Body track is 5E hit points (a guard 11, an ogre 59), because weapon damage against NPCs is 5E-sized (dice + class level). Don't compare the two numbers.
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
| **Manoeuvres** | 1 point of a pool, or free from a perk or shield | Free if granted by the stat block or a shield; otherwise 1 point of a track, usually Soul or Charisma |

### How 5E does it

- **Stat block:** armour class, hit points, speed, ability scores, saving throw and skill bonuses (e.g. *Perception +4*), resistances, senses, languages, challenge rating; then traits, actions, reactions and, for bosses, legendary actions.
- **Bonuses** come from ability modifiers plus a proficiency bonus set by challenge rating (+2 up to +9). Ours replaces both with a class-like bonus.
- **Legendary Resistance:** a boss can turn a failed save into a success a few times a day (usually 3). It's the closest 5E thing to DrD2's Fate: a small, limited way for important NPCs to avert failure.
- **No exhaustion for monsters:** they just take damage until they drop. Social and mental defeat (fear, charm, persuasion) is handled by conditions and DM judgement, not a track.

## Bestiary

> **Status: being designed (Q20).** The root of an academic-style bestiary.

**In the app:** admins edit it at `/admin/bestiary`. Categories (`bestiary_categories`) are two levels deep: the five roots and their subgroups. Each creature (`creatures`) sits in a root or a subgroup and has a name, a picture, a description (lore, Markdown) and a stat block written as the rulebook's ```` ```npc ```` lines; its name and picture fill the block, and its category stands in for a missing subtitle. All text takes `English |cs| Czech`. A rulebook page shows a creature's stat block with `::creature{id="…"}`; there's no bestiary page of its own yet.

### The five categories *(confirmed)*

Every creature belongs to one of five categories. They're the roots of the bestiary; subgroups branch from them.

| Category | What it is | Examples |
|---|---|---|
| **Animals** | Ordinary, non-magical beasts | Wolves, bears, horses, falcons, war dogs |
| **Humans and humanoids** | Sapient beings resembling human nature and the human body shape | Humans, elves, dwarves, halflings, krolls, trolls, giants |
| **Undead and reanimated** | Beings made from human (or non-human) remains, souls and bodies; **artificial life** belongs here too | Skeletons, zombies, ghosts, golems, homunculi |
| **Monsters** | Animal-like creatures that are **magical in nature** | Dragons, wyverns, basilisks, **lesser vampires** |
| **Fiends** | **Otherworldly entities** summoned into our world, or come in from other planes | **Higher vampires**, leshies, noonwraiths, duskwraiths, nightmares, house spirits, familiars, demons, gods |

**Fiends** are the hardest to pin down. "Demons" describes them only in very simplified terms.
- **What unites them:** they **attract worship** or **concern themselves with human souls**. They can live alongside humans, hunt them or lead them.
- **Territory and cults:** some fight territorial struggles over worshippers, or sit at the centre of local cults.
  - A vampire lord keeps familiars and thralls.
  - A noonwraith guards its fields; a leshy guards a vast forest.
  - Demons collect souls.
- **Vampires straddle the line.** A lesser vampire is a monster. Becoming a **higher vampire** takes a curse with a **fiend aspect**, which makes it a fiend.
- **Familiars are fiends** too: the Incantor's familiar spell (see [Companions](#companions)) brings one into the world in an animal's shape.

### Where the categories meet the rules

Many rules already name kinds of creatures. Read them against the categories:

| Rule | Names | Categories |
|---|---|---|
| Fighter, Hunter and Juggler combat skills; Warrior and Scout mounted combat | "humans and beasts" | Humans and humanoids, Animals *(confirmed)* |
| Ranger: *Monster taming*, *Trophies* | "monsters" | Monsters |
| Ranger: *Ranged foot combat vs monsters, fiends and undead*; Witcher: *Close combat vs monsters, fiends and undead* *(changed 2026-11-12)* | "monsters, fiends and undead" | Monsters, Fiends, Undead and reanimated |
| Witcher: *Trophy taking*, *Witcher knowledge* | "monsters, fiends and undead" | Monsters, Fiends, Undead and reanimated |
| Hunter *Animal handling* and *Animal training*; Shaman *Animal healing* and *Animal magic* | "animals" | Animals |
| Medic poisons | "humans and animals" | Humans and humanoids, Animals |
| *Dealing with supernatural beings* (Incantor, Witcher, Ranger) | "supernatural beings" | Undead and reanimated, Monsters, Fiends |
| *Isa Sign* (Witcher) | "monsters and supernatural beings" | Undead and reanimated, Monsters, Fiends |
| Alchemist *Artificial life* | "artificial beings" | Undead and reanimated |
| DrD2 master abilities (Paladin, Necromancer) | "undead and demons" | Undead and reanimated, Fiends |
| DrD2 master abilities (Žrec: *Basilisk spit*, *Dragon's claw*) | "monsters and demons", "monsters" | Monsters, Fiends |

- **Fighting the supernatural is split by range** *(confirmed, 2026-11-12)*: the **Ranger** shoots, the **Witcher** fights up close, both against monsters, fiends and undead. A perk adds the class level to the other kind: *Up close* (Ranger), *Crossbow and silver* (Witcher). DrD2 split it by creature instead (Ranger monsters, Witcher undead and fiends). *Dealing with supernatural beings* stays with all three of Incantor, Ranger and Witcher.
- **"Humans and beasts" means exactly Humans and humanoids plus Animals** *(confirmed)*. A troll or a giant is fought with Fighter skills; a wyvern or a lesser vampire needs Ranger's or Witcher's monster combat.
- **Animals and Monsters** split along magic: a wolf is an animal, a werewolf or a wyvern is a monster. Animal magic and Medic poisons stop at the line; perks like Žrec's *Dragon's claw* carry them across.

### Subgroups

*(Confirmed, 2026-11-08; in the app as the second level of `bestiary_categories`, ids like `animals-predators`.)* Each category splits into subgroups, like an academic bestiary's families:

| Category | Subgroups |
|---|---|
| **Animals** | Beasts of the field (horses, cattle, dogs); predators (wolves, bears, big cats); birds; beasts of the water; vermin and swarms (rats, insects) |
| **Humans and humanoids** | The civilised races (humans, elves, dwarves, halflings, krolls); wild humanoids (goblins, ogres, trolls); giants |
| **Undead and reanimated** | Corporeal undead (zombies, ghouls, skeletons); spectres (ghosts, wraiths, banshees); constructs (golems, homunculi, animated objects) |
| **Monsters** | Draconids (dragons, wyverns, basilisks); hybrids (griffins, chimeras, manticores); cursed beasts (werewolves, lesser vampires); insectoids and crawlers (giant spiders, centipedes); beasts of the deep (krakens, drowners) |
| **Fiends** | Place guardians (leshies, noonwraiths, water spirits); night spirits (nightmares, duskwraiths); household spirits; vampires (higher vampires and their lords); demons; gods |

## Companions

> **Status: being designed (Q18).** Called *henchmen* in early drafts. Companions that serve a player character and that the player controls: a trained falcon, a hired sellsword, a loyal squire, a raised skeleton, a bound demon, a golem. Needed for magical control (see [Control](#magic)) and referenced by sigils.
> Michal wants DrD2's rules **retrofitted onto 5E**: concrete stat blocks rather than DrD2's abstractions.

### Our companions

**Stat block and Bond** *(confirmed for now)*
- A companion is an **ordinary NPC stat block**: Body, Soul and Charisma tracks, a skill bonus, special abilities and a weapon. 5E's (wolf, mastiff, guard, veteran, skeleton) can be borrowed and converted like any NPC.
- **Enemy hits land on its tracks,** like any NPC's. At 0 it's down, breaks or flees.
- It has **no Fate.** It has **Bond** instead, which pays for its **averting failures and its manoeuvres**.
  - **Averting a failure costs Bond equal to the Danger Level** *(confirmed)*, like a player character's exhaustion, not 1 point like Fate. Companions are expensive to keep in a fight on purpose.
  - **Which Danger Level** *(confirmed)*: its **master's** by default, so there's nothing extra to track. The DM sets a different one only when the companion's situation clearly differs: scouting ahead, guarding the camp, circling high above the fight.
  - **A manoeuvre costs 1 Bond.**
  - **Scarring the Bond** gives 2 temporary points, like a self-inflicted Scar.
- **Bond scars are for the relationship:** mistreatment, a broken deal, or the player scarring the Bond for extra points in an emergency. *A sword hits the wolf; betrayal hits the Bond.*
- Otherwise Bond follows DrD2 (below): refilled by payments, capped at the master's Charisma, and below 0 the DM takes the companion over.

**Kinds and turn order** *(confirmed)*: as 5E's subtypes.

| Kind | Example | Turn |
|---|---|---|
| **Familiar** | A spirit in a raven's shape | **Right after its master**, on the master's initiative |
| **Summon** | A conjured spirit, an animated tree | **Right after its master** |
| **Animal companion** | A trained wolf, a falcon, a war dog | **Its own initiative** |
| **Hireling** | A sellsword, a squire, a guide | **Its own initiative** |

- **Controlled creatures** keep the control rule: the caster gives up their own actions and rolls initiative only for the creature (see [Control](#magic)).
- **Familiars come from a spell,** like 5E's *Find Familiar*: an **Incantor perk spell** *(confirmed)*, priced like any other perk. Every awakened caster who goes through Incantor can reach it. *(Written 2026-11-12: *Familiar*, Incantor 2, 3 Material ritual, Bond 3.)*

**Organizations and units: who gets what** *(confirmed)*
- **One rule for organizations.** Networks fold into DrD2's organizations and Standing (see [Organizations, Standing and Power](#organizations-standing-and-power-drd2)); there's no separate network rule.
- **Anyone can join an organization of any Reach** at a low rank: a king's soldier is Standing 0 in a Reach-5 army.
- **Anyone can build and lead a small network** of Reach 1–2, at Standing equal to its Reach: a smuggling ring, a circle of informants, a first witcher school.
- **A character's Standing 3–5 comes only from mighty class perks.** Rising to officer in the king's army or abbot of a great monastery needs a mighty class.
- **Units are for the mighty classes,** or for **special story beats** where the DM lends one. *Michal once let a player command a city watch squadron against a giant monster.*
- **Creating new units, and the perks for commanding them, belong to the mighty classes,** military units especially to the **Warlord**.

**Reach and Standing** *(confirmed)*
- DrD2's Standing mixes two things: **how important the organization is** in the world, and **where the character stands in it**. Even Standing 1 is a leader (of a small band, a musicians' guild).
- Michal wants them apart:
  - a player can hold a **lower rank, below a leader**;
  - a **grunt in a huge organization** (a king's soldier: important organization, no rank);
  - the **leader of a tiny one** (a small, insignificant spy ring: unimportant organization, top rank).
- **Two numbers.** **Reach** (1–5) is the organization's importance, using DrD2's Standing table. The character's **Standing** (0 up to the Reach) is their rank in it; the leader's Standing equals the Reach. DrD2's table describes people, so it still reads as the character's Standing; Power costs and companions work from the character's Standing.
  - **Standing 0** is a rank-and-file member, used in play here (DrD2 didn't). A king's soldier is Standing 0 in a Reach-5 army; an officer over hundreds, Standing 3 there; the founder of a spy ring, Standing 1 in a Reach-1 ring.
- *Terms, not to mix up:* a **merit point** is a temporary bonus for good play (one free resource point); a **level-up point** is a story beat that buys a class level, a perk or a resource point. Power, if adopted, would be a third thing.

**Organizations acting for the character** *(confirmed)*
- DrD2's organizations **take no actions**; its networks **do** (theft, kidnapping, gathering information, bribery). Folding networks into organizations lost that.
- Michal wants to keep it: a player can have **their organization act in their stead**: gather information, kidnap someone, spread a rumour.
- **Agreed:** the part of the organization the character commands acts as a **network**: a companion stat block with a bonus, **Body** (muscle: theft, ambushes, kidnapping), **Soul** (information, finding things) and **Charisma** (influence, bribery) tracks, and Bond. **Standing caps it**, so a Standing-0 grunt can't order it at all, only ask favours.
- **Michal's concerns:**
  - **+1 is too little.** A Scout 3 leading a Reach-1 ring would just do the job themselves. **Money** could raise the bonus.
  - An organization needs a **specialisation**, like an NPC.
  - It needs a way to **avert a bad outcome**.
  - Take more from DrD2's networks.
- **Network rules** *(confirmed; DrD2's network building, adapted)*:
  - **Bonus bought with money, capped by Standing + 2.** DrD2 lets the builder pick the bonus and charges for it in upkeep: **a payment is worth the bonus in silver**. A ring leader at Standing 1 can run a +3 network; a mighty spymaster at Standing 5, up to +7 (below the legendary +8).
  - **One specialisation,** like an NPC's skill bonus: *a thieves' guild: theft and finding goods; a lodge of lords: swaying nobles and arranging audiences; an occult circle: lore about the supernatural.* Outside it, the network can still try anything, with no bonus (DrD2: network skills are general).
  - **Special abilities** like an NPC's, e.g. a free manoeuvre within its specialisation.
  - **Tracks:** split **12 points** between Body, Soul and Charisma, as DrD2 splits a network's limits. They show what it has (thugs, informants, smooth talkers) and what an enemy can knock out (a raid arrests the muscle).
  - **Averting with Bond,** like any companion: Bond equal to the Danger Level of the task, which the DM sets, since the network acts elsewhere. A failure not averted becomes a **Bond scar**: a member caught, a contact gone quiet.
  - **Default Bond sizes** (from DrD2): **3** for a companion bound by a challenge or got through Standing, adjusted to the circumstances (Věstěj started at 2); **0** for a network the character builds; joining an existing network is a binding, so around 2–3 (Pavouk's thieves' guild: 2). **Always capped by the master's Charisma pool.**
  - **Bond starts at 0** for a network the character builds, and **5 payments raise it by 1**, up to the character's Charisma pool. A new ring can't avert anything yet: it has to be invested in. **1 payment refills 1 spent Bond point.**
  - **Why use one at all:** it acts **while the character is elsewhere**, in parallel, pays failures from Bond instead of the character's pools, and keeps the character's hands clean.
  - **Upkeep** *(confirmed)*:
    - **Once per in-game week,** usually once per session, each network needs **one payment's worth of material attention**, in any form that fits: silver, goods, a favour done for its members, a personal visit, protection from the watch. The player says what it is.
    - **Kept up:** the network sends **one tip or report** from its specialisation, unasked.
    - **Skipped:** the Bond takes a **level-1 scar**. Contacts go quiet, a member drifts off, rumours say the boss has forgotten them. Healing it costs 5 payments and a roll, as for any Bond scar.
    - **Separate from refills:** spent Bond points are refilled at 1 payment each, whenever the player pays.
    - **On the sheet:** the network's Bond, its scars, and a tick for this period's upkeep.
  - *Example:* a Scout 3 founds a smuggling ring (Reach 1, Standing 1). They pick bonus +3 (the cap), specialisation *smuggling and fencing*, tracks Body 3, Soul 5, Charisma 4. A payment is 3 silver, so raising Bond to 2 costs 10 payments, 30 silver. While the Scout sneaks into the castle, the ring fences the stolen silverware in the harbour.

**Networks** *(direction agreed, details open)*
- **Anyone can build a network.** It's not limited to Scout, Warrior and Mage as in DrD2.
- **Built by hand:** the player **recruits the members themselves**, at least the **commanders**, each one met and won over in play. The commanders can bring in nameless members of their own; that's flavour.
  - *A Witcher who wants to found a witcher school has to find and recruit witchers, and keep in touch with them.*
- **Three classes have advantage** on **finding, navigating and starting** their own kind of network:
  - **Scout:** the underworld (thieves, smugglers, fences).
  - **Warrior:** high society (nobles, courts, officers).
  - **Mage:** an arcane society (mages, scholars of the occult).
- **Harder to keep than a companion:** the player has to give the network **material attention**: letters, visits, favours, coin, protection, whatever keeps it alive. In return it sends **tips and reports**.
- **Not only the leader:** a character can hold **any position** in a network. A grunt's place is **cheaper** to get and keep, but **easier to lose**. This matches DrD2's *Standing* (see [Organizations, Standing and Power](#organizations-standing-and-power-drd2)).

### DrD2's companions (*pomocníci*)

*(Summarised from DrD2 Part III. Not yet confirmed.)*

**What they are**
- Any character can get any companion. The kind depends on the world and the story, not on the character's skills; skills only make getting one easier.
- Described like any NPC: limits, a bonus (*charakteristika*) and special abilities.
- **No Fate.** Instead a companion has **Bond** (*Pouto*): its relationship to its master. The higher it is, the more loyal, obedient and motivated the companion, and the better the master controls it.

**Bond**
- Bond is a **resource pool the player spends on the companion's actions**, like the DM spends Fate: exhausting to avert a failure, manoeuvres, special abilities, hard activities.
- Unlike Fate, it **doesn't refill on its own**. The master refills it by paying the companion (see *Payment*).
- **Scars on Bond** lower it. They come from enemies' actions, or the player scars the Bond on purpose to get more points (like a self-inflicted Scar). A Bond scar stands for an injury, lost trust, bitterness or weaker control.
- **Raising Bond:** through the master's actions, or the DM rewards good roleplay of the relationship. It stands for restored trust, teamwork, training or healed wounds.
- **Cap:** never above the master's Charisma pool.
- **Below 0:** the player loses the companion. The DM takes it over and decides what happens: it dies, leaves, or (a raised undead) turns on its maker.

**Getting one:** three phases, each an automatic success, a roll, or a whole adventure, as the story needs.
1. **Finding.** Buying a war dog from a breeder is easy; a wolf has to be caught in the wild. Skills help: hunting to trap an animal, haggling to buy one, dealing with supernatural beings to summon a demon. A roll can also decide the companion's quality: a Warrior judging whether the sellswords are veterans or boys in borrowed armour.
2. **Binding.** Usually a challenge: the creature resists with its bonus, the character uses recruiting or training skills.
   - Success creates a Bond, usually **3**, adjusted to the circumstances.
   - Failure: the creature attacks, flees, scorns the character or spreads rumours.
   - A companion already bound to another player character spends all of that Bond resisting. The old Bond must end before a new one forms.
   - **Voluntary binding:** someone whose life the character saved can simply join out of gratitude, with no roll. Only the payment is agreed.
   - Some companions are impossible without special circumstances: nobody in a small farming village will sign up to hunt a dragon.
3. **Payment.** Agreed during binding; stronger companions want more, often something exotic.

**Using one**
- The player controls the companion fully. It acts as **a separate character**: its own initiative, actions and manoeuvres, using its bonus, limits and special abilities.
- It pays everything from **Bond**, and in an emergency the player can scar the Bond for more.

**Payment**
- A mercenary wants wages; a demon, virgin's blood. The form and amount are agreed when the Bond forms.
- **1 payment refills 1 Bond point.** A companion that spends nothing needs no refilling.
- **A payment's usual value = the companion's bonus** (minimum 1). Money: 1 groš (≈ 1 silver for us). Food: a day's ration. Blood: a level-1 Body Scar. Memories: a level-1 Soul Scar.
- Something that is part of the character (blood, memories, their face) can be paid as a Scar. The character's **resources can't be a payment**: they're the character's own effort, not something to hand over.
- **Healing a Bond scar:** a successful roll with the skill the character uses on the companion (usually the one that bound it) plus **5 payments** per scar level. The companion spends nothing itself.
- **Strengthening Bond** above its starting value works the same way: a roll and 5 payments for +1, never above the master's current Charisma pool. If Charisma Scars drop the pool below the Bond, the Bond stays, but once damaged it can only be restored up to the current pool.

*Example (DrD2):* the Incantor Kolva bargains with Věstěj, an undead prince in plate, guarding a warlock's lair. The warlock stole the prince's circlet; Kolva promises it back. The DM spends Věstěj's last Fate and he agrees, but wants a bowl of Kolva's blood whenever he thirsts: payment in **Body Scars**. Bond starts at only **2**, since the warlock still holds the circlet. In the next fight Kolva's player runs Věstěj alongside Kolva, rolls his initiative, and scars the Bond ("crushed fingers") so he can avert being dragged into a chasm. Afterwards Kolva bleeds into the bowl to refill it. Later Kolva keeps the circlet; the DM calls it a broken deal, a new binding follows, and Věstěj now takes Kolva's face as payment: **Charisma Scars**.

**Networks of contacts** (*sítě kontaktů*)
- **Scout, Warrior and Mage** have skills for gaining influence in a part of society: the underworld, high society, and the initiated (mages and clergy). Besides acting directly, they can act **through a network**.
- A network is described like a companion, with limits, a bonus, special abilities, Bond and payment.
  - **Body:** thugs, guards, soldiers. Theft, ambushes, arson, kidnapping, murder.
  - **Soul:** scholars, informants. Gathering information, finding items.
  - **Charisma:** liars, diplomats, merchants. Influencing, changing opinions, bribery.
  - A network's skills are general: it can try anything, just without its bonus.
- *Examples:* a **thieves' guild** (free manoeuvres in theft and finding items), a **lodge of lords** (influencing nobles, arranging audiences), the **Circle of the Black Hand** (occult knowledge).
- **Joining an existing network:** like binding a companion, plus time (hours to days). It pays more, since it feeds more people.
- **Building one:** pick its bonus and one skill, split **12 points** between its limits. Payment is 1 groš per bonus level. Bond starts at **0**; every 5 payments add 1, up to the character's Charisma.
- *Example (DrD2):* the Scout Pavouk asks around the harbour taverns and gets dragged to a cellar by the thieves' captain's thugs. He wins the challenge and gets a network with Bond 2, then has it plant stolen goods in the burgomaster's house. When a thief is caught, Pavouk and friends spring him themselves, as an ordinary fight.

### Conflicts with our rules and 5E

1. ~~**Limits vs tracks.**~~ Answered: an NPC stat block. DrD2 companions have NPC limits; ours have Body, Soul and Charisma tracks like any NPC (see [NPCs](#npcs)). A companion could simply be an NPC stat block, borrowing 5E's (wolf, mastiff, guard, veteran, skeleton). → **Q18a**
2. ~~**Bond vs Fate.**~~ Answered: Bond pays manoeuvres (1) and averting (equal to the Danger Level). Our NPCs don't exhaust; important ones spend Fate, 1 point to turn a lost roll into a win. DrD2 Bond is spent like DrD2 Fate (exhausting up to a limit). Bond could work exactly like our Fate, plus paying manoeuvres and ability prices. → **Q18a**
3. ~~**Two kinds of harm.**~~ Answered: hits on tracks, Bond scars for the relationship. In DrD2 an injury is a Bond scar. Ours would have both track damage (an NPC) and Bond scars (the relationship). Which does a sword hit do? → **Q18a**
4. ~~**Turn order.**~~ Answered: by 5E subtype. DrD2: the companion rolls its own initiative and acts as a separate character. 5E companions and summons act **right after their owner**, on the owner's initiative, and need commands. → **Q18b**
5. **Loyalty.** 5E has none for familiars and companions; only the DMG's optional hireling Loyalty (0–20). Bond fills that gap.
6. **Control already fits.** Our control rule (the caster takes no actions, pays the creature's costs from their own Charisma) is DrD2's companion with the caster's Charisma standing in for Bond. Sigils' pool "works like Bond" too.
7. **Payments.** Groš → silver (1 Material = 1 silver). Healing a Bond scar at 5 payments plus a roll matches our scar healing (5 points per level plus a skill check).
8. **Networks.** Scout's *Underground influence* and Warrior's *High society influence* fit. Our Mage has no "initiated society" skill. Known settings (backgrounds) overlap a little. → **Q18c**
9. ~~**Familiars.**~~ Answered: from a spell. 5E's *Find Familiar* is a spell; ours would be a companion got through a perk or a binding. → **Q18d**
10. ~~**Who plays the Games of the Mighty.**~~ Answered: anyone up to Standing 2; Standing 3–5 from mighty class perks; units for mighty classes or story beats. DrD2 offers organizations, Standing, Power and units to any character once the game grows; Michal wants a **bigger option for the mighty classes** (Warlord's leadership, armies and political power fits it best). Is Standing open to everyone, with the mighty classes reaching the top? → **Q18f**
11. ~~**Networks are small organizations.**~~ Answered: folded into one rule. A character's place in a network (grunt or leader) is exactly DrD2's Standing. Networks could fold into organizations rather than be a separate rule. → **Q18f**
12. **Power vs merit points.** Both reward play: merit points for good play (one free resource point), Power for adding a complication to one's own organization (spent on Standing and companions), at most the highest Standing per session. Two currencies, different jobs. → **Q18g**
13. ~~**Fate on companions and units.**~~ Answered: no Fate; Bond only. DrD2's companions from Standing get both Fate (bonus + 3) and Bond; ours have Bond and no Fate. Units' Fate grows with size. → **Q18h**
14. ~~**Units vs tracks.**~~ Answered: Body × size, Soul and Charisma as the average member. DrD2 units have the average member's limits; ours would need NPC tracks. 5E has swarm stat blocks (a swarm of rats) as one creature, which fits. Only a widespread action hitting enough members changes a unit's state, which maps onto our Widespread manoeuvre. → **Q18h**
15. **Exhausting against a bigger unit costs double the Danger Level.** It plugs straight into our Danger Level for player characters. → **Q18h**
16. ~~**Units' Danger Level.**~~ Answered: none; widespread actions reaching enough members harm the tracks. DrD2 tracks one per unit (and per part when it splits). We don't track NPCs' Danger Level; a companion unit uses its master's. → **Q18h**
17. **Payments for units:** ×5 per size step (handful ×5, band ×25, horde ×125). Groš → silver.

### Organizations, Standing and Power (DrD2)

*(Summarised from DrD2's Games of the Mighty. Not yet confirmed. Michal: "slightly advanced, but if we think of it now, we may save ourselves the trouble later".)*

**Why:** as heroes grow, so does their place in the world: a tribal chief, the grey eminence of a merchant league, a bishop, a lord with an estate. Their scarcest resource becomes time, and what matters is how many people follow them. Few characters are truly mighty without a strong organization behind them.

**Organizations**
- Power groups and official institutions alike: guilds, criminal brotherhoods, merchant leagues, churches and orders, cults, mountain tribes, bandit gangs; also a city's administration, its garrison, a ducal court, a university, a standing army.
- Some have no structure (a sect, a bandit gang), some strict hierarchies (a church, an army). They differ in advancement too: a soldier can slowly rise through the ranks, a commoner almost never becomes a noble.
- **An organization isn't a unit:** it takes no actions and uses no skills. It acts through its members, who hold **positions** in it.
- *Example:* in Krutá Hora the royal administration, the semi-independent city watch and several underworld families all compete. Undercover watchmen climb the crime families' ranks; the criminals bribe sergeants and try to unseat the watch captain; everyone fights over council seats.

**Standing** (*Postavení*)
- A position in an organization. Like a class, but instead of skills it gives **possibilities the character wouldn't otherwise have**. The character still rolls with their class skills; Standing makes otherwise impossible actions possible.
- Every Standing lets the character **find and bind companions** from its reach.
- *Example:* the watch captain can issue city decrees, choose which cases get investigated, detain any citizen, attend council meetings as a guest, sit on the stand at festivals, and pick companions from the whole watch.
- **Value 1–5:** roughly **how many people the character's decisions affect** (not direct subordinates).

| Standing | Reach | Examples | How many in the land |
|---|---|---|---|
| **5** | Decisive across the land; heads whole organizations | A strong king, the head of a merchant league, an archbishop, an archmage, a regent | A few |
| **4** | Shapes decisions across the land, or decisive in a large region | A trusted ducal advisor, the capital's burgomaster, a rebel leader, the head of a big city's underworld, a high priest, a dwarf king | Dozens |
| **3** | Decides a small region's key questions, or advises on bigger ones | An abbot, an officer over hundreds, the royal majordomo, the heir to the throne; a weak king | Hundreds |
| **2** | Influences a small region | A small town's guild master, a professor of alchemy, a robber baron, a wood-elf elder; an aged chief nobody dares unseat | Common |
| **1** | A few subordinates and some say in one community | A poor squire, a merchant with a few wagons, a wizard with apprentices, a bandit chief, a big farmer, a smith with helpers, a safecracker with a gang, a seer with first followers | Many |

- **0** is a rank-and-file member (a forbidden sect's member may only attend meetings); **6** is for emperors and gods. Neither is used in play.
- **Not tied to a title:** a weak king may hold Standing 2; a mere parish priest with tens of thousands of followers, Standing 4.
- Nobility counts as an organization: a title can be won by deeds, bought, seized, or founded with a colony in the wilds.
- **Abstract on purpose:** no economy, morale or harvest rules. The focus stays on what the position gives the player character.
- **Several Standings at once** are possible, but time is short, so characters **place companions** in positions. A Standing held by a companion counts as the character's own.

**Power** (*Moc*)
- The resource spent to **gain Standing** or **use it beyond its formal powers**. In the story: obligations, favours owed, blackmail, the weight of a title.
- **At 0 Power** the character keeps their Standing's powers, but can't get companions or force events beyond them until they gain more.
- **Gaining Power:**
  - **As an adventure reward**, instead of money: a promise of future help. Usually the player chooses money or Power. The amount depends on the giver's Standing and how much the adventure mattered.
    - *Example:* the party hushes up Bishop Waldkart's visits to a certain street. The spy Zlatava turns down the money for a vague promise of help. The bishop is Standing 4 but the affair touched one street (more like 2); the DM settles on **3 Power**.
  - Power can be collected **without any Standing**, but it's hard to use.
  - **For creating an interesting situation:** 1 Power for adding a complication to the story or to one of the character's organizations, like a character trait in DrD2's base rules. At most **the character's highest Standing per session**.
    - *Example:* Gojko, commander of the royal scouts (Standing 3), describes finding his two contacts hanged in the village square, because his scouts had been plundering the local lord's peasants. No information, and a feud with the lord: 1 Power.
- **Gaining Standing** needs an **opportunity** (the position exists and is free) and the **means**.
  - Sometimes both come naturally: buying an inn makes the character an innkeeper (Standing 1); being elected chief after a war of liberation, Standing 4.
  - **Power covers the missing one.** Rising one level in a simple hierarchy costs **5 × the new Standing**. Skipping levels (or putting a companion in "from the street") also pays for every skipped level. The player narrates how the Power is used.
    - *Example:* Kryšpín wants to be watch captain (Standing 3): 15 + 10 + 5 = **30 Power**. A sergeant owes him a favour and lets the men slack; a merchant on the council is reminded of the smuggled spices; the abbot preaches about the city's sins. The captain's chair starts to wobble.
  - **Another player can pay** with a story reason: Gojko has two scouts "attack" the reeve's wife so Kryšpín can save her.
  - **Neither opportunity nor means:** the character has to set it up in the story first (forge a decree creating the post, arrange an accident). That's an adventure of its own.
- **Keeping Standing:** nothing is guaranteed. The DM warns through the story; the character can lose the position, or keep the title while the real power moves elsewhere. Defending it is a new adventure. The higher the Standing, the more time it takes, so heroes put companions in charge of daily matters.
- **Limits:** story beats numbers. Power should come from somewhere believable: favours at a foreign academy won't win the local throne. And a title seized by intrigue doesn't make anyone obey.
- **Small advantages:** **1 Power** buys an informal favour beyond the position's formal powers. *Captain Kryšpín can't release a prisoner without trial, but for 1 Power he gets drunk on duty with the jailer, and his friend Tlupoň escapes.*

**Companions through Standing**
- **Finding and binding are automatic,** limited to what the Standing reaches: a squire gathers village men; a crime boss, killers and thieves; a university dean, student incantors; a tribal chief, warriors, hunters and perhaps a shaman.
- **Such a companion:** bonus 1–5; one special ability or reserved skill per bonus level; Fate = bonus + 3 (+1 per size step for a unit); 12 points for limits, +1 per bonus level. Equipment follows the bonus:
  - **1:** villagers with pitchforks, pilgrims with a few belongings, wandering monks with prayer books.
  - **3:** infantry in full kit, a watch in new uniforms, a noble's escort, trackers with bows, scholars in embroidered robes.
  - **5:** knights in plate, a caravan with heavy wagons and guards, spies with poisons, forgery kits and lockpicks.
- **Price:** a basic companion (one person, bonus 1, one ability) costs **1 Power**. Each further Power raises its bonus or size by one step, up to **the Standing's value** in extra Power.
- **Bond** usually 3. **Payment** as for any companion: the bonus in groše (people), food rations (animals) or Scars (strange and magical beings); for a unit ×5 per size step.
- **Networks** can be got the same way inside organizations.
- *Example:* the inquisitor Morena (Standing 3, 8 Power) can spend up to 1 + 3 on one companion. She takes an experienced old monk (bonus 3: 1 + 2 = 3 Power) and a handful of incantors (bonus 2, a handful: 1 + 1 + 1 = 3 Power), reminding the abbot that he kept his seat thanks to her.
- **Through someone else's Standing:** the character must win a challenge to persuade its holder. Same costs, but capped by the holder's Standing, and usually temporary or restricted. *Morena asks Bishop Waldkart (Standing 4) for a band of experienced monks: 1 + 2 + 2 = 5 Power.*
- **The story limits it:** taking every monk would shut the monastery; a horde of warlocks may not exist anywhere; villagers can't all be scholars.

### Units (DrD2)

**Our units** *(confirmed)*
- A unit is an NPC stat block. **Its Body track = the average member's × size:** a handful ×2, a band ×4, a horde ×8, like 5E's swarm stat blocks.
- **Soul and Charisma stay at the average member's.** Morale and nerve don't grow with numbers, so a good speech can rout a horde.
- **No Fate.** A companion unit averts with **Bond**; an enemy unit only averts if its stat block names an important commander.
- **DrD2's six rules in a fight apply as written** (below), on our Widespread manoeuvre and Danger Level.
- **No Danger Level for units** *(confirmed)*, like any NPC.
  - **Enemy units:** DrD2's first fight rule becomes: **only a widespread action reaching enough members harms the unit's tracks** (more than one person for a handful, more than a handful for a band, more than a band for a horde). Smaller actions only matter in the story.
  - **Companion units** use their master's Danger Level; a part sent elsewhere gets one from the DM.
  - **Player characters** keep theirs: exhausting against a bigger unit costs double.
- **Tracking damage** *(confirmed)*:
  - **The Body track is the unit's hit points,** as for any NPC. A qualifying action rolls damage **once** against it.
  - **The unit shrinks as it bleeds:** when Body falls to the next smaller size's maximum, it **drops a size** (horde → band → handful → one survivor). That changes who gets free Defenses and who pays double.
  - **0 Body:** the unit is overpowered: dead, scattered or surrendered.
  - **Soul and Charisma** take damage as for any NPC (the Danger Level the unit faces + the winner's class level), from a widespread speech, threat or terror. 0 means it breaks or gives in, whatever its Body.
  - **Too-small actions** do no track damage: one guard falls, and the band fights on.
  - *Example:* a band of watchmen (average Body 11, from 5E's Guard: 11 hit points) has Body 44. A Fireball reaching most of them deals 28: Body 16, below a handful's 22, so it's now a handful. A Warlord's roar wins a Charisma roll at Danger Level 4 + Warlord 3: 7 off the watch's Charisma of 6, and the survivors flee.

#### Unit types *(draft, 2026-11-14)*

**The stat block comes first.** Every unit already gets bonuses for what it's good at from its stat block: its bonus, its special abilities, its equipment. The type only answers **who is strong against whom**, as one more way to get a free manoeuvre. Each free manoeuvre counts as the action's one manoeuvre as usual. **Light infantry** means levies, missile units, scouts and sappers.

| Type | Examples | Gets | Against it | Ground |
|---|---|---|---|---|
| **Levy** | Peasants with pitchforks, town militia | Nothing. Cheap: bonus usually 1 | Heavy infantry and heavy cavalry get a free **Mighty**. Panic hits it at Danger Level 3, not 2 | — |
| **Heavy infantry** | Men-at-arms, a shield wall | A free **Defense** against every missile volley; a free **Mighty** against levies | — | — |
| **Spears and pikes** | Pikemen, a spear wall | A free **Precise** and **Defense** against cavalry attacking its front | Missile volleys against it are **Precise** (dense, no shields) | Loses both in dense forest, rubble or a breach |
| **Missile** | Archers, crossbowmen, slingers | Shoots over friendly units; a free **Precise** against spears and pikes, and levies | Cavalry in melee get a free **Precise**. Can't shoot while engaged | — |
| **Light cavalry** | Hobilars, horse archers | Withdraws from engagement without spending its action; a free **Precise** against missile units, scouts and supply | Heavy infantry, spears and pikes get a free **Precise** | — |
| **Heavy cavalry** | Knights, mounted men-at-arms | **Charge:** after moving 2+ squares straight into contact, a free **Mighty** against light infantry and light cavalry | Spears and pikes get **Precise** and **Defense** against its front | Half-speed ground (mud, a ploughed field, a slope): **Slow** and no charge |
| **Scouts** | Foresters, skirmishers | A free **Quick** in the first round; unseen in forest or hills until it acts or is found | Heavy infantry and heavy cavalry get a free **Mighty** in melee | — |
| **Sappers** | Miners, engineers | Their work against structures is **Precise**; stakes and ditches make ground half-speed for cavalry | As levies | — |
| **Supply train** | Wagons, sutlers, the herd | Doesn't attack | Everyone gets a free **Mighty**. Destroyed or captured: every unit of the army takes Charisma damage at Danger Level 2, and the army starts starving | — |

- **The loop:** heavy cavalry beats light troops; spears and pikes beat cavalry; missiles beat spears, pikes and levies; heavy infantry shrugs off missiles and beats levies; light cavalry beats missiles and the rear.

*(Summarised from DrD2's Games of the Mighty. Not yet confirmed.)*

A mighty character rarely travels alone: a knight's squires, a wizard's apprentices, a count's guard, a bandit's gang. Running dozens of individuals is a pain, so a **unit** resolves a whole group as **one NPC**: a drilled squad, a loose net of scouts, a pack of wolves.

- **Use them where one hero still matters:** a caravan ambushed by goblins, yes; a battle of ten thousand, narrate it.
- **A unit is a bit weaker than its members one by one,** to keep fights quick and heroes important. Raise its Fate or add an ability if that bothers you.

**Building one**
- **Bonus** = the average member's. 4–5 means exceptional people: rare, small units.
- **Abilities and skills** count only if **most members** have them. Three kinds of special ability:
  - from the members (if most have it);
  - from the unit's form: teamwork and drill, or a mass effect (*Crowd*, *Unstoppable*);
  - from a **special member**: a pack leader, a drummer and standard-bearer, a chieftain. Taking that member out is hard, since the whole unit defends them.
- **Size:** no headcount, just three steps.
  - **Handful:** more than one, fewer than a dozen.
  - **Band:** a dozen to about 60.
  - **Horde:** about 60 to 300. Nothing bigger in play.
  - Huge single creatures (a kraken, a dragon) count as both one individual and a handful.
  - *Example:* Gojko's 40 scouts are a band, roughly four handfuls. A handful splits off to lead a patrol astray; now he has about three.
- **Fate** = the average member's + 1 per size step. **Limits** = the average member's.
- **Getting one** works like a companion: find (automatic through Standing), bind (with the unit or its commander; Bond usually 3), pay (×5 per size step).
  - *Example:* Gojko's cut-throats have bonus 3 and are paid a share of the loot. One Bond point for his band costs 3 × 5 × 5 = **75 groše**.
- **Upkeep in the story:** a bigger unit needs more food, money, room to rest, time and Material to train and heal.
- **Equipment** gives a free manoeuvre, a talent or an exhaustion discount only if **most members** have it. *Mountain tribesmen with mixed weapons get no free weapon manoeuvre, but all carry shields (free Defense) and most wear light armour (discount 1); the few in heavy armour don't count.* Other gear depends on the story: riding needs a horse for everyone.
- **Improving:** a hero with training abilities can train a unit like a companion; rarely, months of war harden a bonus-1 unit into bonus 3.

**Splitting and merging**
- **Dispersed** (one task over a wide area, like patrols across a city): roll as one unit.
- **Short split** (different tasks within one scene): each part acts as a smaller unit, sharing **Bond and Fate**; each starts at the original Danger Level and tracks its own.
- **Long separation** (kilometres or days apart): two new units, each keeping the Bond as it stood (Scars and exhausted points included), drawing on it separately from then on. The part away from the master can't use Fate.
- Splitting a horde into bands can't multiply Fate or Bond while they're in contact.
- **Merging** different units for one scene: limits and bonus by estimate; Fate = the strongest member's + 1 per size step; each keeps its own Bond; abilities only if most members have them.

**Six rules in a fight**
1. A unit **rolls initiative and has one action** a round. Its Danger Level changes only from a **widespread action hitting enough members**: more than one person for a handful, more than a handful for a band, more than a band for a horde. Smaller actions only matter in the story.
   - **Reach:** in melee one person hits at most a handful; with ranged attacks or magic, a tight band or a scattered handful; with commands, threats or speeches, a horde within earshot.
2. A **bigger unit gets any number of free Defenses** against smaller ones.
3. A unit can **react to anything within its reach**, even after acting, with the Defense manoeuvre.
4. A unit gets **Widespread free** on every action, and can still add another manoeuvre.
5. A smaller unit's successful counter against a bigger one **doesn't cancel** the bigger one's effect on its other targets.
6. Exhausting against an action of a **bigger unit costs double the Danger Level**; against one of comparable size, the normal cost.

**Optional:** many small actions together can count as one environmental action against a unit; a unit outnumbered by several smaller ones keeps free Defenses only until their total passes its own number.

**From the Bestiary**
- **Crowd:** an overwhelming mass, beyond unit scale, that tramples. It acts as an environmental action raising the Danger Level or dealing a Body Scar; from a distance it presses on Charisma.
- **Swarm** (optional; insects, birds, rats): one creature with double Fate and higher limits (Body +3, Soul +1, Charisma +2), free Widespread against two or more opponents.

**Tips**
- Don't count heads. Mention a corpse or a lost tracker whenever a unit loses Fate or its Danger Level rises.
- For a companion unit, **permanent losses are Bond Scars**; restoring the Bond means recruiting new members.
- A strong unit with a weak Bond is still strong when the Bond runs out; it just stops obeying. It can withdraw, surrender, or switch sides.
- Keep few units on the scene: merge infantry with archers, thieves with scouts; play commanders as the unit's abilities.

### Grid and scales *(draft, 2026-11-08)*

Also in the rulebook as *Grid and scales* (Useful tables); keep both in step.

The battle map works at three scales. **A round is 6 seconds at both skirmish and battle scale**, so heroes and units fight in the same rounds. Zoom in when it matters: one battle square is 5 × 5 skirmish squares, and one field square is 10 × 10 battle squares.

| Scale | One square | A square holds | A round | Use it for |
|---|---|---|---|---|
| **Skirmish** | 1 m | One person | 6 s | Fights of a few people. The usual map: 5E's 5 ft square |
| **Battle** | 5 m | A handful | 6 s | Fights with units: a caravan ambush, a gate stormed |
| **Field** | 50 m | A horde | 1 minute | Pitched battles. Heroes join units |
| **Campaign** | 5 km | — | An hour | Marches; distances from [A day's travel](#travel) |

#### Big creatures

At skirmish scale, from 5E's sizes:

| Size | Squares | For example |
|---|---|---|
| Small, Medium | 1 | A halfling, a human, a wolf |
| Large | 2 × 2 | A horse, an ogre, a troll |
| Huge | 3 × 3 | A giant, a wyvern |
| Gargantuan | 4 × 4 or more | A dragon |

#### Movement

Squares per round (a minute on the field). Running takes the whole turn.

| Who | Skirmish walk / run | Battle walk / run | Field walk / run |
|---|---|---|---|
| Dwarf, Halfling | 5 / 10 | 1 / 2 | 1 / 2 |
| Human, Elf | 6 / 12 | 1 / 2 | 1 / 2 |
| Kroll | 7 / 14 | 1 / 2 | 1 / 2 |
| Pony, mule, war dog, wolf | 8 / 16 | 1 / 3 | 1 / 3 |
| Riding horse, warhorse | 12 / 24 | 2 / 5 | 2 / 5 |
| Ox cart | 4 / — | 1 / — | 1 / — |

- **A unit moves at its slowest member's speed.**
- **Rough ground** (see [Ground](#travel)): on half-speed ground every square costs 2; on quarter-speed ground, 4. A unit that moves 1 square takes two rounds per square of mud.

#### Units on the map

| Size | Battle (5 m squares) | Field (50 m squares) |
|---|---|---|
| Handful | 1 square | Part of a square |
| Band | 4 squares: a 2 × 2 block or a 1 × 4 line | Up to 4 bands share a square |
| Horde | 16 squares: a 4 × 4 block, a 2 × 8 or a 1 × 16 line | 1 square |
| A hero | Stands alone in a square, or joins a friendly unit's square | Always joins a unit |

- **Front:** a unit faces one side, set when it moves. **Attacks into its flank or rear are Precise** (a free Precise, like attacking a prone target).
- **Block or line:** a line has a wider front and more members in contact, but turning it costs its whole movement. A block turns freely.
- **Engaged:** units in touching squares (edges or corners) are in melee. An engaged unit can only move away by spending its **action** to withdraw.
- **Shrinking:** when a unit drops a size, remove squares down to the new size, from the side that was hit.

#### What one action reaches

DrD2's reach rule, in squares. Only an action reaching enough members harms a unit's tracks (see [Units](#units-drd2)).

| Action | Battle | Field |
|---|---|---|
| Melee by one person | 1 square (a handful) | — (too small) |
| Ranged attack or a spell | A tight 2 × 2 (a band) | — |
| A Widespread volley by a unit | Every square in range | 1 square |
| Commands, threats, a speech | Everyone within 6 squares (earshot) | 1 square |

#### Ranges in squares

| Weapon | Skirmish (m) | Battle | Field |
|---|---|---|---|
| Thrown dagger, handaxe | 4 / 12 | 1 / 2 | Touching |
| Javelin | 6 / 24 | 1 / 5 | Touching |
| Shortbow, light crossbow | 16 / 64 | 3 / 13 | Touching / 1 |
| Heavy crossbow | 20 / 80 | 4 / 16 | Touching / 1 |
| Longbow | 30 / 120 | 6 / 24 | 1 / 2 |
| Ballista | 24 / 96 | 5 / 19 | Touching / 2 |
| Mangonel | 40 / 160 | 8 / 32 | 1 / 3 |
| Trebuchet | 60 / 240 | 12 / 48 | 1 / 5 |

## Domains, sieges and war

> **Status: confirmed (Q21, 2026-11-08); numbers are a starting point.** Late-game rules for characters who hold land. Source: **DrD 1.6, Pravidla pro experty – Svět** (*Hospodářství a politika*, *Hrady*, *Armády*), a file Michal shared on 2026-11-08. Nothing here is confirmed.

### What the old book does

**Domain economy** (*Hospodářství a politika*)
- **One turn is a season.** It runs in the background between adventures: "while you were away, taxes brought in this much, ten households left, a village burned".
- **Contentment** (*spokojenost*, about −500 to +500) drives everything. Tax rate sets a starting value; then things push it up or down:
  - **Up:** spending on law (safe roads, fair courts), churches and festivals, a castle or town walls (a sense of safety).
  - **Down:** levies, confiscations, a garrison keeping people in line, plundering, disasters.
  - **People remember:** the new value is (5 × last season's + this season's) ÷ 6, so a domain can't be bought back in a week.
- **Fear works too.** Output is lowest at contentment 0, when people are unhappy but not yet afraid. Below 0 (a garrison, terror) they work again out of fear. The **chance of revolt** also peaks at 0.
- **Revolt** comes in three kinds:
  - an **uprising**, where every household fields a band of peasants;
  - an **outlaw hero** (*zbojník*), who skims a share of the income until someone hunts him down, which makes a ready-made adventure;
  - an **assassination attempt** on the lord.
- **People move.** Households drift towards the domain with better contentment. Distance, borders and a foreign language slow them down.
- **Work costs labour and material.** Roads, fields, a town or a castle cost labour (taken from tax income) and material (paid from the treasury). Spending more per season finishes it sooner.
- **Titles and obligations** (Drakonie): a lord owes taxes and troops to the lord above; titles are hereditary, granted, elected or conquered; a conquered title still needs the higher lords' recognition.

**Castles** (*Hrady*)
- **The price ruins families:** "most castles destroyed their owners". Upkeep is the castle's price ÷ 200 every season. Skip it and the castle decays, and repairs cost extra.
- **Walls have their own hit points,** on a separate scale (one "castle life" ≈ 3,000 ordinary ones), so swords can't dent them; only siege engines, mining and magic can.
- **Storage sets the siege.** Granaries, wells, kitchens, stables and barracks decide how many people the castle holds and for how many weeks.
- **Five ways to take a castle:**
  - **Bombardment:** trebuchets and catapults knock out wall sections; a gap is a breach.
  - **Storm:** ladders, siege towers and rams; defenders get a big bonus on walls and in towers.
  - **Mining:** a tunnel to collapse a wall or to sneak in; the defenders can dig a countermine.
  - **Starvation:** when the stores run out.
  - **Magic:** ordinary missiles thrown by magic, or spells that attack the stone itself.

**Armies** (*Armády*)
- **A unit** has combat strength, punch, toughness, morale and speed, plus a number of groups (its hit points). One set of rules scales from a squad to a division.
- **Battles:** the side that loses half its groups rolls morale, and a unit rolls for **panic** when more friendly units around it fall than enemy ones. **An army breaks when a quarter of its groups flee.**
- **How a battle ends:** an agreement, a withdrawal, a rout, a scattering or annihilation. **A unit that fled can be gathered again; a destroyed one can't.**
- **Attacker and defender manoeuvres:** probe, attack or storm; withdraw, defend or counter-attack.
- **Commanders** give a morale bonus to units near them, more when fighting in the front line.
  - Anyone can **challenge** a commander to a duel. The battle pauses, and the winner's troops get a bonus.
  - A commander who refuses for no good reason loses their troops' trust.
- **Strategy is played in weeks.** Marching slow, average or fast builds **fatigue**, which costs the army in battle.
  - **Supply:** each group eats a set ration a week and can carry two weeks of food.
  - **Living off the land:** **foraging** feeds the army and hurts the domain's mood; **plundering** destroys households for good.
- **Heroes in units:** a character joins a unit and makes it stronger. The bigger the battle's scale, the less one hero matters; at large scales the hero's plans and abilities count more than their sword.

### What to take

1. **The domain as a slow mood with memory** *(confirmed: see [The seasonal turn](#the-seasonal-turn-confirmed-2026-11-08-numbers-are-a-starting-point))*. A small mood scale (e.g. −3 Afraid … 0 Sullen … +3 Content) that moves at most **one step a season**. The taxes and the lord's actions set where it's heading. This keeps the old book's best idea, that "people remember", without its arithmetic.
2. **Fear works, sullenness doesn't.** Income and the revolt risk follow the old curve: a ruler of fear gets work out of people, and a ruler who is neither loved nor feared gets the worst of both.
3. **Revolts as adventure hooks.** The outlaw hero, the uprising and the assassin are story events triggered by the mood, not number crunching.
4. **Castles cost upkeep.** A castle is mostly an expense that raises the domain's mood (safety) or holds it down (oppression).
5. **Fortifications as stat blocks** *(confirmed: see [Structures and siege engines](#structures-and-siege-engines-draft) and [Stores and the storm](#stores-and-the-storm-confirmed-2026-11-08))*.
   - Each wall section, tower and gate has a **Body track** that only siege engines, mining and magic can harm. That's the same idea as 5E's damage threshold for objects; ours is called sturdiness.
   - **Stores** are counted in weeks.
   - **The storm** maps onto our rules: defenders on a wall have three-quarters cover, and attackers climbing face a higher Danger Level. A breach lowers it.
6. **Siege engines** (ballista, mangonel, trebuchet, ram, siege tower) as small stat blocks: structure damage, range, crew. 5E's DMG has numbers to convert.
7. **Morale and scattering on our tracks** *(confirmed: see [Battles](#battles-confirmed-2026-11-08))*.
   - A unit **overpowered through Charisma** has scattered and can be gathered after the battle. One **overpowered through Body** is gone.
   - **An army breaks** when a quarter of its units have broken.
   - **Panic:** when a neighbouring unit breaks, its neighbours take Charisma damage.
8. **The commander's duel** *(confirmed: see [Battles](#battles-confirmed-2026-11-08))*: a challenge between commanders mid-battle. The winner's units get a free Precise for a few rounds; the loser's take Charisma damage. Refusing without a good reason costs the commander their units' trust. This is a natural Warlord perk.
9. **The strategic week:** march pace, fatigue, food carried (two weeks), foraging vs plunder and its effect on the domain's mood.

### The seasonal turn *(confirmed, 2026-11-08; numbers are a starting point)*

A held domain runs on **seasonal turns**, not on the network rules: holding land is **active upkeep**, decided by the lord every season, not a pool topped up with payments.

**Each season, in order:**

1. **The lord decides:** the tax rate and up to **two upkeep actions** (more if a companion runs part of the domain for them, one each).
2. **Add up where the mood is heading** (the table below).
3. **The mood moves one step** towards that number, never more. People remember: a domain bled dry can't be bought back with one feast.
4. **Collect the income** for the new mood, and pay upkeep (castles).
5. **Roll for revolt** if the mood calls for it.

**Where the mood is heading:** start at 0 and add everything that happened this season.

| This season | Mood heads |
|---|---|
| Light taxes | +1 |
| Normal taxes | 0 |
| Heavy taxes | −1 |
| Crushing taxes | −2 |
| **Upkeep actions** (each) | |
| Keeping the law: courts held, roads patrolled (the lord or a companion there in person) | +1 |
| A feast or festival (a tenth of the domain's full income) | +1 |
| Alms, or a church built or endowed (a tenth of the full income) | +1 |
| Walls built or repaired (the people feel safe) | +1 |
| A holding built or repaired: a mill, a fishpond, a burnt farm (the people see their lord investing) | +1 |
| **Hard hands** | |
| A garrison keeping order | −1, and holds the mood below 0 (see *Fear works*) |
| Levies raised for war | −1 |
| Confiscation, or plunder by the lord's own troops | −2 |
| **Bad luck** | |
| Famine, plague, a raid, a fire | −1 each |
| The lord away all season, with no companion in charge | −1 |

**What the mood gives:**

| Mood | | Income | Revolt (d6 each season) |
|---|---|---|---|
| +3 | **Content** | Full; levies come willingly | — |
| +2 | **Loyal** | Full | — |
| +1 | **Calm** | Three quarters | — |
| 0 | **Sullen** | Half | 1–2 |
| −1 | **Wary** | Half | 1 |
| −2 | **Afraid** | Three quarters | 1 |
| −3 | **Terrorised** | Full | 1; any revolt is an assassin |

- **Fear works, sullenness doesn't** (the old book's curve). A domain that's neither loved nor feared gives the least and revolts the most.
  - **Fear needs a garrison.** Without one, a mood below 0 heads back up towards 0, Sullen, one step a season.
- **Revolt** (roll a d6 when it triggers):

| d6 | What happens |
|---|---|
| 1–2 | **An outlaw hero** takes to the woods and skims a quarter of the income until someone hunts them down: a ready-made adventure |
| 3–4 | **An uprising:** every village fields a band of peasants (see [Units](#units-drd2)) |
| 5–6 | **An assassin** comes for the lord |

**Income per season** *(confirmed, 2026-11-08)*: the **sum of the domain's holdings**. The DM adds up the rows once when the domain is set up, and again only when something is built or lost; the mood picks the column.

| Holding | Full | Three quarters | Half | To build or buy | Pays back in |
|---|---|---|---|---|---|
| A lán of peasant land (16–18 ha) | 10 sp | 8 sp | 5 sp | 900–1,500 sp (the pricelist) | 25–35 years |
| A mill (the lord's monopoly) | 40 sp | 30 sp | 20 sp | 800 sp | 5 years |
| A tavern licence | 15 sp | 11 sp | 8 sp | 300 sp | 5 years |
| A smithy | 10 sp | 8 sp | 5 sp | 200 sp | 5 years |
| A fishpond | 30 sp | 23 sp | 15 sp | 600 sp (digging, a dam) | 5 years |
| Woods (timber, game, pannage) | 15 sp | 11 sp | 8 sp | Comes with the land | — |
| A vineyard | 20 sp | 15 sp | 10 sp | 400 sp, and 3 years to the first harvest | 8 years |
| A toll (bridge, ford, road) | 30–60 sp | 23–45 sp | 15–30 sp | A bridge, or a royal grant | — |
| A weekly market (a town right) | 400 sp | 300 sp | 200 sp | A royal or ducal charter | — |
| A town house's rent | 8 sp | 6 sp | 4 sp | — | — |
| A silver mine | 500 sp or more | — | — | A royal grant; a story of its own | — |

- **Where the numbers come from:** around 1350 a lán paid its lord half a kopa to a kopa of groschen a year plus hens and eggs, about 40 sp. Buildings are set to pay back in about five years; land takes decades, as land sold for about 20 years' income.
- **Land is slow money; buildings are fast.** More lány means clearing forest or taking a neighbour's: an adventure.

**Typical domains:**

| Domain | Holdings | Full | Three quarters | Half |
|---|---|---|---|---|
| A village | 16 lány, a mill | 200 sp | 150 sp | 100 sp |
| A manor with three villages | Three villages | 600 sp | 450 sp | 300 sp |
| A small town | 150 houses, a weekly market, a bridge toll, two mills, eight taverns | 2,000 sp | 1,500 sp | 1,000 sp |

**Disasters hit holdings** *(confirmed, 2026-11-08)* as well as the mood (−1 each). The DM brings them in from the story; they aren't rolled.

| Disaster | What it does to holdings |
|---|---|
| Famine, a bad harvest | Fields give half this season |
| Plague | Fields and town houses give half this season (fewer hands) |
| Fire | One building gone (or ten town houses) until rebuilt at its build cost |
| A raid | One building burnt, and one village's fields give nothing this season |
| A flood | Mills and fishponds give nothing this season |

- **Rebuilding** costs the holding's build price and counts as an upkeep action, so a lord who rebuilds quickly wins the people back.

**In the app** *(planned)*: a domain sheet, a list of holdings with the totals per mood column.

**Castle upkeep per season** (the old book's price ÷ 200, worked out): a fortified manor 100 sp, a small castle 1,000 sp. Unpaid, the castle decays: a wall section loses a quarter of its Body each season, and repairs cost double. *A small castle eats half a small town's income: "most castles destroyed their owners".*

**Where it meets the rest:**
- **The domain is an organization:** the lord's Standing equals its Reach (a village 1, a manor 2, a town 3).
- **Companions** run parts of it, each adding one upkeep action, and each needing their own Bond and payment.
- **Revolts, outlaw heroes and assassins** are adventures, not dice results to shrug off.

### Battles *(confirmed, 2026-11-08)*

In the rulebook as *Battles* (Companions and power). From the old book's armies, on our [units](#units-drd2) and [grid](#grid-and-scales-draft-2026-11-08).

**Scattered or destroyed:**

| A unit at 0 in | Has | After the battle |
|---|---|---|
| **Charisma** | Scattered: thrown down weapons, ran | Can be gathered again: a day, and a skill check with *Combat leadership* (Warrior) or *Leading people outside combat* (Scout). It comes back **one size smaller**: stragglers never return |
| **Body** | Been destroyed | Gone for good |
| **Soul** | Broken: panicked, frozen, or under someone else's control | As scattered, unless magic still holds it |

**Panic:** when a unit breaks (any track at 0), every friendly unit **touching it** takes Charisma damage at Danger Level 2, as if from a threat.

**An army breaks** when a quarter of its units have broken. The units still standing withdraw, and the battle ends in a rout unless someone stops it (a commander's speech: a Widespread Charisma action at the scene's Danger Level).

| Units in the army | 4 | 8 | 12 | 16 | 20 |
|---|---|---|---|---|---|
| Breaks after this many | 1 | 2 | 3 | 4 | 5 |

**The commander's duel:**
- **Anyone can challenge** an enemy commander within earshot. If accepted, the battle around them **pauses** (the units watch) and the two fight it out as an ordinary fight, to the first Scar not averted, or until one yields.
- **The winner's units** get a **free Precise for 3 rounds**.
- **The loser's units** take Charisma damage at **Danger Level 3**.
- **Refusing without a good reason** costs the commander their units' trust: companion units lose **1 Bond**, others take Charisma damage at Danger Level 2.
- A natural **Warlord perk** later (better odds, a cruel version), but anyone can challenge.

### What to leave

- The percentages, multiplier tables and grain sums: they're built for a spreadsheet, not the table.
- The castle drawn on hex paper in triangles, and the battle played with counters on hex maps.
- The gold amounts: they don't match our pricelist, where 1 gold is 3–4 months' wages.
- Slaves and the detailed climate model.

### Where it meets our rules

1. **A domain is an organization.** Reach and Standing already exist. A held domain could reuse the **network** rules: three tracks (muscle and levies, order and stores, loyalty), a **Bond-like pool of loyalty** paid for with upkeep (law, festivals, a church), and scars when the upkeep is skipped. Or it gets its own seasonal turn with the mood scale. → **Q21**
2. **Units already exist** (handful, band, horde). The old book's battle-scale ladder (squad → company → regiment → division) matches the unit sizes.
3. **Siege engines** deal structure damage; see [Structures and siege engines](#structures-and-siege-engines-draft).
4. **Mining** fits Rogue's *Mechanisms* or a perk for sappers; a countermine is a challenge. Tunnelling speeds are in [Digging and mining](#digging-and-mining-draft).
5. **Mighty classes:** Warlord (armies, commanding, the duel), Zhrets and Necromancer (disasters), Shadow (assassins, mining in, sabotage) and Inquisitor (outlaw heroes, revolts) all get late-game uses.

### Structures and siege engines *(draft)*

Walls, gates and roofs have a **Body track**, like an NPC, counted **per section**: about 3 m of wall, one gate, or a 3 × 3 m patch of roof.

- **Sturdiness** *(confirmed, 2026-11-08; called threshold until then)*: a hit dealing **less** than the sturdiness does nothing; one that reaches it deals its full damage. It's 5E's damage threshold and does the job of DrD2's *Odolnost*. Swords don't dent a town wall; a trebuchet does.
  - **The same for every hit:** weapons, siege engines, and [hazards](#substances-and-traps), which roll their strength in d6. A weak charge sometimes gets lucky; that slight randomness is wanted.
- **At 0** a wall section is **breached** (a 3 m gap full of rubble), a gate is **broken**, and a roof **falls in**.
- **Burning:** a burning section loses the listed Body **every round** until the fire is put out. A bucket chain puts out one section a round.
- **Taking it apart by hand:** with time and no one shooting, workers don't roll. The last column says how long a **crew of 4** with axes, picks and crowbars needs.

**Walls and gates**

| Section | Body | Sturdiness | Burns | Crew of 4 takes it down in |
|---|---|---|---|---|
| Wattle and daub (a cottage) | 15 | 0 | 5 a round | 1 minute |
| Plank wall, plain door | 20 | 5 | 5 a round | 5 minutes |
| Iron-bound door | 40 | 10 | 2 a round | 30 minutes |
| Log wall (a cabin, a blockhouse) | 40 | 10 | 2 a round | 1 hour |
| Wooden palisade | 50 | 10 | 5 a round (once oiled) | 2 hours |
| Brick wall | 60 | 10 | No | 4 hours |
| Stone house wall | 80 | 15 | No | 1 day |
| Town gate (oak, iron-bound) | 100 | 15 | 2 a round | 1 day |
| Portcullis (iron) | 80 | 20 | No | 2 days (or lift it) |
| Earth rampart | 300 | 20 | No | 3 days of digging |
| Town wall (2 m of stone) | 400 | 20 | No | 4 days |
| Castle curtain wall, tower storey (3 m of stone) | 600 | 25 | No | 1 week, or a mine |

- **Earth soaks up stones:** siege engines and loose blasts deal **half** damage to a rampart. Rams, mines and tamped charges deal full.
- **A tower storey at 0** collapses onto the one below. Anyone inside makes a saving throw (Acrobatics) at Danger Level 4, or takes a d8 threat-die Scar.

**Roofs**

| Roof | Body | Sturdiness | Burns | Falls on those below as |
|---|---|---|---|---|
| Thatch | 10 | 0 | 10 a round; a fire arrow or torch lights it | d4 |
| Wooden shingles | 15 | 0 | 5 a round | d4 |
| Flat clay roof | 30 | 5 | No | d6 |
| Clay tiles on beams | 20 | 5 | 2 a round (the beams) | d6 |
| Slate on beams | 25 | 5 | 2 a round (the beams) | d6 |
| Stone vault | 100 | 15 | No | d10 |

**Small things** have a sturdiness and no Body: a hit that reaches it breaks them, like an [item scar](#item-scars). Rope, a leather strap 0; a wooden bar, a chest 5; an iron lock, a chain, manacles, a hinge 10; a steel strongbox 15.

- **Those below** make a saving throw (Acrobatics) to dive clear. A player character who fails takes a Scar from the threat die; an NPC takes the roll × 3 off its Body track. *(To confirm: the NPC damage.)*

**Siege engines** *(from the 5E DMG, ranges at 5 ft = 1 m)*

| Engine | Damage (average) | Range | Crew | Shots |
|---|---|---|---|---|
| Ballista | 3d10 (16) | 24 / 96 m | 3 | 1 a round |
| Mangonel | 5d10 (27) | 40 / 160 m, not under 12 m | 5 | 1 every 3 rounds; 10 an hour |
| Trebuchet | 8d10 (44) | 60 / 240 m, not under 12 m | 8 | 4 an hour |
| Ram (roofed) | 8d8 (36) | Touch | 10 | 1 a round |
| Fire pots, burning bundles | Sets wood and thatch alight | As the engine throwing them | — | — |
| A finished mine | The section above drops to 0; the next one along loses half. Fired the old way (burning the props) it falls by morning, and the smoke gives it away; blown with a tamped charge (see below) whose roll reaches the section's sturdiness, it falls at once | — | — | — |
| Explosive charge | Its strength in d6; **tamped** (packed against or under the section: hung on a gate, at the end of a mine) it rolls **2 more dice**. Sets anything that burns alight | Thrown: 4 / 12 m; or placed | 1 | Once |

- **Hitting a wall** from a siege engine is a skill check (2d6 + the crew's bonus ≥ 9). Misses are common on purpose: a trebuchet that lands half its shots takes a curtain section down in about 7 hours.
- **Repairs:** a night's work by a crew of 10 restores a quarter of a damaged section's Body. A breach needs rebuilding (days, Material), not repair.
- **The ballista** is the only engine meant for people too: against an NPC or a unit, use its damage as a weapon's. Its bolts **ignore armour**.

**Charges needed:** tamped Alchemist charges to bring a section down, on average rolls. "Rarely" means the average roll falls short of the sturdiness: a lucky charge gets through now and then.

| Section (Body, sturdiness) | Strength 3 (tamped 5d6 ≈ 17) | Strength 5 (7d6 ≈ 24) | Strength 7 (9d6 ≈ 31) |
|---|---|---|---|
| Iron-bound door (40, 10) | 3 | 2 | 2 |
| Town gate (100, 15) | 6 | 5 | 4 |
| Portcullis (80, 20) | Rarely | 4 | 3 |
| Town wall (400, 20) | Rarely | 17 | 13 |
| Castle curtain wall (600, 25) | Rarely | Rarely | 20 |

- **The point:** an Alchemist opens doors and gates; walls fall to engines and mines. A charge at the end of a mine is the fast way to fire it.
- **In the old book's five ways to take a castle** (see [Domains, sieges and war](#domains-sieges-and-war)): charges belong to the **storm** (blowing the gate) and to **mining** (firing the mine). Bombardment stays with the engines, magic with the casters.


#### Stores and the storm *(confirmed, 2026-11-08)*

In the rulebook as *Sieges* (World).

**Stores** are counted in weeks, for the garrison the place was built for:

| Place | Garrison | Food | Water |
|---|---|---|---|
| A fortified manor | 20 | 4 weeks | A well |
| A small castle | 60 | 12 weeks | A well, or 1 week from a cistern |
| A walled town | The burghers and 200 soldiers | 8 weeks | Wells |

- **Double the people, half the weeks.** Refugees let in at the gate cut the siege short.
- **Starving:** each week with no food, the garrison takes Charisma damage at Danger Level 3, and the defending unit drops a size (desertion and death).

**The storm:**
- **On the wall,** defenders have **three-quarters [cover](#cover-confirmed-2026-11-15-from-5e-and-fateforge)**: attacks at them are disadvantaged, +1 armour rating against the hit *(2026-11-15; replaces a free Defense once per round)*.
- **Climbing a ladder** is a [cost to attempt](#cost-to-attempt) of **1 Body**. A climber can't defend: attacks at them are undefended.
- **Pushing a ladder off** is a **Cunning** manoeuvre (the push); everyone on it falls.
- **A siege tower** reaches the top of the wall with no climbing cost and no ladder to push.
- **A breach** is rubble: half-speed ground, and no cover for the defenders. The fight moves to the breach.

**Falling** is a [hazard](#substances-and-traps) whose strength is set by height (Acrobatics saving throw; armour doesn't help):

| Height | 3 m | 6 m | 9 m | 12 m |
|---|---|---|---|---|
| Strength | 2 | 4 | 6 | 8 |

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
7. Write a short **personality**: a few words to roleplay from (how they talk, what they want). Free text, no direct mechanical effect, but playing it well earns [merit points](#rolls).

## Races

Race has little mechanical impact beyond one racial perk, but it matters a lot for backstory and how NPCs react. No fairies, vampires or ghosts ("No, Gareth.").

| Race | Description | Speed | Racial perk options |
|---|---|---|---|
| **Human** | Diverse and courageous, living life to the fullest | 6 m | Everywhere at Home, For the King!, I Know a Guy, Maiden Fair, Sticks and Stones |
| **Elf** | Secluded, ancient, ageless beauty and wisdom | 6 m | Behind Blue Eyes, Dusk Veil, Eternal Nobility, Fey Blood, Pearls in Their Hair |
| **Dwarf** | Hearty and proud; honour and their word are everything | 5 m | Ancient Artisan, Call of the Mine, Clan Bond, Iron Liver, Steel in Our Bones |
| **Halfling** | Hospitable, jovial, braver than they look | 5 m | Connoisseur, Good Spirits, Scrappy, Silent Feet, Sixth Sense |
| **Kroll** | Unique to this system: brawny, primitive, attuned to the wild | 7 m | Bison Skin, Echolocation, Fury, Magic Roots, Tokens of Heroism |

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
- **Magic:** *dormant* (no magic); *awakened* (core spells from the start, more unlocked as perks); *latent* (also core spells, but the caster deals themselves a Scar to enter magic mode until the end of the conflict). *(Renamed 2026-11-14 from full and pseudo; explained on the rulebook's Casting magic page.)*
- **Maximum class level is 5.**

### Basic classes

| Class | Magic | Skills (resource) |
|---|---|---|
| **Fighter** | None | Foot close combat vs humans and beasts (B), Strength (B), Weapon knowledge (S), Confidence and intimidation (C) |
| **Hunter** | None | Foot ranged combat vs humans and beasts (B), Wilderness movement (B), Wilderness survival (S), Hunting (S), Animal handling (C), Animal training (C) |
| **Juggler** | None | Foot throwing vs humans and beasts (B), Acrobatics (B), Tricks and sleight of hand (B), Urban survival (S), Influence and deception (C) |
| **Medic** | None | Endurance (B), Healing the human body (S), Potions and poisons (S), Negotiation (C) |
| **Incantor** | Full | Scholarship (S), Healing of the soul (S), Willpower (S), Ritual items (S, unique), Dealing with supernatural beings (C, unique except with intelligent beings that speak). Core spells: Blessings and Curses, Eye Sigil |

### Advanced classes

An advanced class unlocks once **its two parent basic classes total 6 levels**, in any split. Fighter 5 / Juggler 1, Fighter 3 / Juggler 3 and Fighter 1 / Juggler 5 can all take Warrior 1. **That is the only gate:** once it's met, the advanced class levels up like any other class, up to 5.

### Aspects

Each advanced class has **3 aspects**. An aspect is the root node of a perk tree within that class. **Mighty classes can have aspects too**, unlocked by combinations of their advanced classes' levels; none are designed yet.

Mechanically, an aspect is a **perk that is granted automatically** when its level requirements are met. Other perks then require it. Supporting aspects doesn't change how a class works, so the same system covers advanced and mighty classes.

- An aspect **belongs to its advanced class**. The character must have that class (Warrior 1 or higher) before any of its aspects can unlock. A Fighter 4 character without Warrior does not hold Hire-Sword.
- Within the class, an aspect **unlocks automatically** when the character reaches a certain combination of parent-class levels.
- An aspect **does nothing on its own**. It only acts as a prerequisite for certain perks.
- The parent-class split decides which aspects, and so which perk branches, a character can reach **first**.
- Aspects **stack**: a character can hold several aspects of one class, and can eventually unlock all of them.
- The purpose is to put playstyle-specific perks behind a sensible wall, while letting players plan their advancement.

Example, Warrior:

| Aspect | Requires |
|---|---|
| **Hire-Sword** | Fighter 4 + Juggler 1 |
| **Knight** | Fighter 3 + Juggler 3 |
| **Monk** | Fighter 1 + Juggler 4 |

**All advanced classes** *(confirmed; lopsided aspects changed from 4 + 2 to 4 + 1, 2026-11-14)*: every class follows the same pattern. The first aspect leans on the first parent (**4 + 1**), the second is balanced (**3 + 3**), the third leans on the second parent (**1 + 4**). **Every split that unlocks the class gets at least one aspect**: 5 / 1 and 4 / 2 get the lopsided one, 3 / 3 the balanced one. With 4 + 2, a Fighter 5 / Juggler 1 Warrior had none. The split a character used to get in decides which aspect comes first; holding all three needs at least 4 + 4.

| Class | Parents | 4 + 1 | 3 + 3 | 1 + 4 |
|---|---|---|---|---|
| **Warrior** | Fighter + Juggler | Hire-Sword | Knight | Monk |
| **Ranger** | Fighter + Hunter | Barbarian | Monster Slayer | Beastmaster |
| **Witcher** | Fighter + Medic | Berserk | Hexer | Exorcist |
| **Scout** | Hunter + Juggler | Ghost | Outrider | Spymaster |
| **Shaman** | Hunter + Medic | Warg | Seer | Herbalist |
| **Druid** | Hunter + Incantor | Wildheart | Stoneshaper | Tidecaller |
| **Rogue** | Juggler + Medic | Thief | Assassin | Poisoner |
| **Alchemist** | Medic + Incantor | Mixer | Transmuter | Life Moulder |
| **Warlock** | Fighter + Incantor | Paladin | Battlemage | Abjurer |
| **Mage** | Juggler + Incantor | Illusionist | Puppetmaster | Conjurer |


The 10 advanced classes are exactly every pair of the 5 basic classes:

| Class | Parents | Magic | Skills (resource) |
|---|---|---|---|
| **Warrior** | Fighter + Juggler | None | Mounted combat (B), Ironworks (B), Warrior knowledge (S), High society influence (C), Combat leadership (C) |
| **Ranger** | Fighter + Hunter | None | Ranged foot combat vs monsters, fiends and undead (B), Trophies (S), Woodworking (S), Ranger knowledge (S), Monster taming (C, unique), Leading in the wild (C), Dealing with supernatural beings (C) |
| **Witcher** | Fighter + Medic | Latent | Close combat vs monsters, fiends and undead (B), Trophy taking (S), Witcher signs (S, unique), Witcher knowledge (S, unique), Dealing with supernatural beings (C). Core spell: Isa Sign |
| **Scout** | Hunter + Juggler | None | Ranged mounted combat (B), Hiding information (S), Underground influence (C, unique), Leading people outside combat (C), Healing human charisma (C), Seafaring (S) |
| **Shaman** | Hunter + Medic | Latent | Narcotic substances (S, unique), Foresight (S, unique), Animal healing (S), Animal magic (C, unique). Core spells: Spirit walk, Beast mind |
| **Druid** | Hunter + Incantor | Full | Stone magic, Water magic, Plant magic (all S, unique). Core spells: Earth Bending, Water Bending, Manipulate Plants |
| **Rogue** | Juggler + Medic | None | Aerial acrobatics (B), Mechanisms (S), Forgery (S), Contact poisons (S, unique) |
| **Alchemist** | Medic + Incantor | Full | Alchemy knowledge (S), Explosives, corrosives and gases (S, unique), Elixirs (S, unique), Artificial life (C, unique) |
| **Warlock** | Fighter + Incantor | Full | Fire, Wind, Evocation and Abjuration magic (all S, unique). Core spells: Fire Bending, Air Bending, Evoke, Ward |
| **Mage** | Juggler + Incantor | Full | Illusion, Enchantment and Conjuration magic (all S, unique). Core spells: Illusion, Mind touch, Conjure |

### Mighty classes

Each combines 3–4 advanced classes. A mighty class unlocks once **its advanced classes total 6 levels**, spread in any way. All of them can contribute, or only some. For Warlord, Warrior 5 / Rogue 1, Warrior 3 / Rogue 3 and Warrior 2 / Rogue 2 / Scout 2 all qualify. A single class can't do it alone, because classes cap at 5. As with advanced classes, that is the only gate.

**Mighty classes have no skills, only perks** *(confirmed, 2026-11-08)*. Their rolls use the level of the lower class whose skill the perk builds on, as DrD2's master skills do. None of the perks are written yet, and Necromancer has no description (**Q8**).

| Class | Built from | Magic | Fantasy |
|---|---|---|---|
| **Warlord** | Warrior, Rogue, Scout | None | Leadership, strategy, armies and political power |
| **Ravager** | Warrior, Ranger, Witcher | Latent *(2026-11-14: built on the Witcher)* | Raw martial destruction: dragon riders, legendary skinchangers |
| **Shadow** | Rogue, Scout, Mage, Alchemist | Full | Supernatural stealth: vanishing, bypassing barriers |
| **Inquisitor** | Warrior, Warlock, Witcher, Mage | Full | Blood magic that uncovers truth; counters and reflects spells |
| **Zhrets** | Ranger, Druid, Shaman | Full | Pagan priest commanding whole regions of nature |
| **Necromancer** *(renamed from Black Priest, 2026-11-15; Czech Černokněžník; the id stays `black-priest`)* | Warlock, Alchemist, Shaman, Druid | Full | *(no description yet)* |

Michal's six mighty classes are a **reduced version of DrD2's ten master classes** (*mistrovská povolání*), merged because there were too many. Which DrD2 class goes where is **Q19**.

### Master classes in DrD2

*(Summarised from DrD2's Games of the Mighty. Not yet confirmed.)* Class names: šaman = Shaman, alchymista = Alchemist, mág = Mage, druid = Druid, čaroděj = Warlock, zvěd = Scout, vědmák = Witcher, válečník = Warrior, hraničář = Ranger, lupič = Rogue; bojovník = Fighter, lovec = Hunter, kejklíř = Juggler, mastičkář = Medic, zaříkávač = Incantor.

**General rules**
- A master class unlocks with **6 levels in total across its advanced classes**, in any split, as ours. *Optional:* 6 special abilities from them instead.
- **No levels of its own.** Each master ability is bought (12 XP) together with a level in one of its advanced classes, or with raising a resource limit.
- **Master skills** list **prerequisite skills** from lower classes. The roll adds the level of the class that owns the prerequisite skill used, and the effect follows that class (a Necromancer-Shaman speaks with the dead by drumming in a trance; a Necromancer-Mage reads the corpse's memory with words). The character needs at least one level in that class to use that part. All master skills are **unique**.
  - Talents, Widespread and discounts from lower classes still apply where they fit.
  - The magic used keeps its range and ritual (a Mage still needs words and sight).
- Abilities without prerequisite skills just need the 6 levels.
- Master abilities can't be triggered by Alchemist elixirs, except those with *Elixirs* as a prerequisite, and then only for the Alchemist himself.
- **Each ability once** (the Elementalist takes them again per element).
- *Optional:* an **initiation**, usually an adventure, granted by people of equal or lesser power (a church's faithful, a cult). *A Necromancer finds and performs a forgotten, forbidden ritual at a guarded place; an Inquisitor is chosen by the church's faithful or by the god after a heroic deed.*

**DrD2 terms in the abilities:** *Advantage N* (Výhoda) = N merit points; *hard* (náročnost N) = a cost to attempt of N; *discount N on exhaustion* = a resistance bonus of N; *talent / proficiency / mastery* (nadání / zběhlost / mistrovství) = DrD2's tiers of free manoeuvres in a skill, which we don't have; *narrative authority* = the player declares a fact of the world, like *I Know a Guy*. Prices in brackets: Body, Soul, Charisma points, or a Scar.

| DrD2 master class | Advanced classes | Fantasy |
|---|---|---|
| **Necromancer** (*černokněžník*) | Shaman, Alchemist, Mage | Speaks with the dead, reads blood, spreads plague; executioners, investigators, priests of death |
| **Wonderworker** (*divotvůrce*) | Shaman, Druid, Alchemist, Warlock | Master of magic itself: portals, eternal spells, hidden casting, curses into frogs |
| **Inquisitor** (*inkvizitor*) | Scout, Witcher, Mage | Keeper of truth: breaks and mirrors spells, interrogates, reads a spell's author |
| **Avenger** (*mstitel*) | Warrior, Ranger, Rogue, Scout | Master assassin of the great: supernatural agility, unseen, terror symbols |
| **Destroyer** (*ničitel*) | Warrior, Ranger, Witcher | Master warrior: barbarian, swordmaster, dragon rider, dragon-man |
| **Paladin** | Warrior, Witcher, Warlock | Holy warrior against undead and demons |
| **Shadow** (*stín*) | Rogue, Alchemist, Mage | Thief beyond the body: dissolves, steals through shadows |
| **Leader** (*vůdce*) | Warrior, Rogue, Scout | Diplomat and commander: armies, intrigue, organizations |
| **Elementalist** (*živlomág*) | Druid, Warlock | Master of one element (fire, water, air, earth) at disaster scale |
| **Žrec** | Ranger, Shaman, Druid | Pagan nature priest, master of monsters and forests |

**Necromancer**
- *Gates of the underworld:* summon chosen undead or demons even where they don't live (Incantor, Alchemist; 2 Cha), or a dream being into a drugged body (Shaman; 2 Cha). They don't attack him and treat him as kin.
- *Blood toll:* drawing blood with a Body Scar refills 2 Soul, or gives 2 merit points.
- *Plague:* a contagion source by curse or substance until sunset or sunrise (2 Soul); an Alchemist can make a corpse explode as a trap, with a trigger (1 Soul each).
- *Necrolog:* talk to the dead's spirit (Shaman; 3 Soul), read a corpse's memory (Mage; 3 Cha), call the soul into a prepared body (Alchemist; 3 Cha). The dead can lie.
- *Last memory:* touching old blood, see the last seconds before it was spilled; see the bleeder's true face (1 Soul).
- *Bound soul:* curse a sinner to return as a tormented undead until conditions tied to the sin are met (2 Cha).
- *Shadows of night:* a fear made flesh; every roll is hard for the target until dusk or dawn without strong light or friends (1 Cha); also as an explosive gas.
- *Dark minds:* narcotics, animal and mind magic work on undead and demons.
- *Darkland:* on a place of death, symbolic touch on everything there.
- *Lord of souls:* move a trusting soul (or his own) into an object, plant or corpse until dusk or dawn (2 Cha); make golems that think like people.
- *Host of puppets:* lasting mind or animal spells without keeping the target in sight (1 Soul).
- *Desecration:* carry a wellspring's power away in a "key" item (a Soul Scar of the wellspring's strength).

**Wonderworker**
- *Master of reagents:* turn emergency ingredients into full ones at magic moments (1 Soul).
- *Overview:* stop time to think; Danger Level drops to 1, wins next initiative (Soul Scar 1).
- *Void:* a fire or water spell (or alchemical substance) that leaves nothing, ignoring armour (2 Soul / 3 Material).
- *Master of sigils:* hold as many sigils as Soul; an immortal guardian that refills itself and casts one spell on its own (6 Soul).
- *Portal:* paired sigils at any distance carrying image and sound; people (5 Soul), two-way (1), dormant until a condition (1).
- *Runesmith:* a rune item with an elixir's effect until the solstice, for triple ingredients.
- *Hidden spells:* cast with no gestures, words or visible sigils, untraceable (1 Soul).
- *Dream weaver:* reshape the dream world, set dream guardians, enter and change dreams (2 Soul).
- *Eternal spells:* a spell lasting until broken or a set condition; can't kill; no one carries more than their Soul limit (Soul Scar 1).
- *Lord of rituals:* an extra ritual item per 3 Soul.
- *Curse:* turn a target into a small harmless animal until a condition or the sacrificed Scar heals; can't be broken (Soul Scar 1).
- *Sigil thief:* take over another's sigil (1 Soul) and convert it to his own school (1 Soul).

**Inquisitor**
- *Clairvoyance:* wins first initiative, free Quick all conflict, one free Defense a round (1 Soul).
- *Spellbreaking:* break spells and sigils of any magic, even very widespread ones (not substances).
- *Magical handwriting:* tell who cast a spell or made a substance, or their "culture" (a Church priest, a pupil of Cyd); learn a spell's ending condition; a cipher's author, a slander's source.
- *Torturer:* anything can be a torture tool; cruel manoeuvres when torturing; declare a place with gallows nearby (1 Soul).
- *Protective aura:* resistance bonus 2 against spells (not substances).
- *Memory of place:* see the most emotional event at a place since the last solstice (1 Soul).
- *Kneel, rabble!:* a Charisma Scar he deals refills his Charisma (2 per level), or gives merit points.
- *Dirty methods:* the player names the target's weakness, to loosen their tongue (Charisma Scar 1).
- *Slippery:* resistance bonus 2 against persuasion, deceit, forgery and secrets.
- *Interrogation:* talent at getting the truth from people and demons.
- *Confessor:* name up to three sins of a member of an organization; each gives a merit point against that organization (1 Cha).
- *Spell mirroring:* turn any spell back on its caster (1 Soul).

**Avenger**
- *Lightning movement:* supernatural acrobatics (run on fresh snow, up a wall, across water, catch missiles), one free Defense.
- *Weak spots:* a target loses its armour's discount against him for the conflict (1 Soul).
- *Nerves of steel:* resistance bonus 2 against intimidation.
- *Eyes in the back:* answer traps and ambushes without an action; a free Defense against attacks from behind.
- *Self-defence:* use the opponent's weapon's free manoeuvre; redirect an averted hit onto another target.
- *Blend into the crowd,* even a hostile one in a fight (1 Cha).
- *Death symbol:* a frightened enemy makes a mistake the player chooses (1 Cha); declare someone is hunted by the underworld (1 Cha).
- *Hidden presence:* when hidden, undetectable by any sense, even supernatural ones.
- *Lord of chaos:* among an enemy unit, impose penalties instead of his unused manoeuvres.
- *Back door:* lower his own Danger Level by 1 alongside an attack.
- *Treacherous attacks:* no manoeuvre limit on a surprise attack.
- *Sharpened sense:* a racial sense (Night Eyes, Sixth Sense, bat hearing), and resistance 1 when using senses.

**Destroyer**
- *Dragon rider:* riding and fighting on flying creatures.
- *Dragon's roar:* mastery in intimidation, cruel manoeuvres.
- *Dragon-man:* after an involuntary Body Scar, turn into a monster he once killed himself until the conflict ends, with its body skills, abilities and natural weapons.
- *Legendary fighter:* counters to his attacks are hard this round (2 Body).
- *Mystic hunter:* ranged and all-round combat skills count against undead and demons.
- *Sky archer:* mastery in mounted and aerial ranged combat against monsters.
- *Devastating flurry:* with initiative in melee, defenders can only defend.
- *Steel fist:* fists as steel weapons with free Mighty; armour gives 1 less against them.
- *At home in armour:* armour hinders 1 less (good heavy armour not at all); a free Defense in armour.
- *Charioteer and helmsman:* fighting from wagons and ships.
- *Victor's mockery:* every enemy is Imprecise next round, once per conflict (1 Cha).
- *Treacherous feints:* impose penalties on a melee opponent instead of his unused manoeuvres.

**Paladin**
- *God's favour:* bless himself.
- *God's judgement:* arrange a meeting with an opponent; a higher power keeps the duel fair (1 Cha).
- *Holy place:* consecrate a temple into a wellspring until the next solstice (3 Soul); reopen desecrated ones.
- *Oath:* a sworn goal; no manoeuvre limit in life-threatening scenes serving it, penalties when acting against it, a Charisma Scar if it fails (1 Cha).
- *Knight of light:* mastery in mounted melee against undead and demons.
- *Self-sacrifice:* take another's Scar onto himself, one level lower (minimum 1) (2 points).
- *Holy words:* mastery in curses and blessings.
- *Holy armour:* consecrated armour gives +1 against undead and demons' attacks and 1 against their magic.
- *Holy water:* poisons that work on undead and demons.
- *Dawn:* an aura making undead and demons' actions hard (1 Cha).
- *Inner sight:* see undead and demons, even invisible or behind walls (1 Soul).
- *Prison:* lock an opponent outside time and space until dusk or dawn (2 Soul).

**Shadow** (most abilities need no ritual)
- *Black market:* the player decides who in town owns a wanted (ordinary) item (2 Soul).
- *How does the runt do it?:* know a building's layout; appear past a locked door if light shines through (1 Soul).
- *Escape artist:* a saddled horse or boat is waiting somewhere (1 Cha).
- *Springs and cogs:* work locks and traps by gesture, leaving no trace.
- *Dissolve:* vanish for a moment to avoid a physical consequence, whatever the Danger Level (Soul Scar 1).
- *Shadow sower:* whoever hurts him is struck back by a shadow (+1 Danger Level) (1 Soul).
- *Sabotage:* a Mighty hit also scars the target's tool; objects resist his destruction less.
- *Shadowing:* use the same skill an opponent uses on him, with a shadow weapon.
- *Dark hound:* know the direction to anyone he scarred, or who scarred him, until the solstice.
- *Silent companion:* animate his own shadow; it acts on other shadows, and the effects come true at dusk or dawn (1 Cha per action).
- *Vanish into shadows:* undetectable in shadow while still.

**Leader**
- *As ordered!:* companions with a clear planned order get free Quick while following it (1 Soul/Cha).
- *Schemer:* talent at intrigue against organizations.
- *Master and teacher / Teamwork:* join a companion unit and give it mastery / talent in skills he shares.
- *Personal guard:* companions and units from organizations cost 1 Power less (minimum 1) and get an extra ability.
- *Sacred bond:* heal Bond Scars for 3 payments instead of 5; his own yearly magic moment (5) and wellspring (2).
- *Truce:* stop any conflict for the rest of the round; allies get a merit point; he wins next initiative (2 Cha).
- *Natural charm:* counters to his negotiation are hard this round (1 Cha).
- *I've heard of you:* the opponent's favourite topic comes up; free Quick in that talk (1 Cha).
- *Silver tongue:* talent at negotiating, haggling and pretending.
- *Warlord:* talent at leading in and out of combat, and warrior knowledge.
- *Group leader:* free Widespread when lowering his group's Danger Level.

**Elementalist** (one element per initiation; each counts as a new class; *optional:* the opposite element closes: fire × water, earth × air)
- *Brother of demons:* elemental demons treat him as kin; resistance 1 against them.
- *Screen:* his element can't harm him (his gear isn't so lucky).
- *Genie's lamp:* bind an elemental companion into a vessel (1 Soul).
- *Catastrophe:* very widespread on his element where it's present: rain to flood (1 Soul).
- *Wrath of elements:* a lasting spell adds Imprecise, Feeble and Foolish on one activity (1 Soul).
- *Lord of the skies:* omens from horizon to horizon (2 Soul); decide the weather (1 Soul).
- *Chaining:* cast through allies close to his element, paying from their Bond.
- *Force of nature:* his element's outbursts (fire, storm, flood, quake) are magic moments of strength 3.
- *Merging:* become his element, immune to it and to ordinary weapons (1 Soul).
- *Summon demons:* elemental demons as companions with Bond 3 (Soul Scar 1).
- *Drain:* drain an element from a foe as a Scar; refills 2 Soul or 2 merit points.
- *Elemental disaster:* counters to his magic are hard this round (2 Soul).

**Žrec**
- *Basilisk spit:* narcotics and poisons that work on monsters and demons.
- *Landscaper:* shape the terrain for allies' advantage: Ranger by woodwork, Druid by stone magic (very widespread), Hunter by using it (2 Soul).
- *Forest guardians:* summon a handful of monsters hostile to everyone but him until dusk (2 Cha); natural creatures don't attack him.
- *Leaf-haired:* become a plant, or a monster whose trophy he holds, for as long as he likes (Soul Scar 1).
- *Song of bark and feathers:* talent at magic cast with material of the target's kind.
- *Awakening of the forest:* plant magic can kill with a giant's strength (1 Soul); total control of an animal (1 Cha).
- *Strength of the forest:* very widespread nature magic over an area.
- *Dragon's claw:* curses and animal magic work on monsters.
- *Council of leshies:* bind part of his soul to a plant or spring, and be reborn from it when death comes (Soul Scar 3, every participant).
- *Secret of roots:* grow seedlings of unusual plants he has seen (Soul Scar 1); recharge from a forest's wellspring.
- *Call of kin:* call the nearest animal, or a pack, of his chosen kind within a day's travel (1 Cha).
- *Sparrow chatter:* send one sense into any living thing in nature he perceives (1 Soul).

**Our merge** *(confirmed)*

| Ours | DrD2 sources |
|---|---|
| **Warlord** | Leader (command, intrigue, organizations); keeps the Avenger's prerequisite list |
| **Ravager** | Destroyer (+ Shaman for skinchanging) |
| **Shadow** | Shadow + the Avenger's assassin abilities (unseen presence, supernatural agility, treacherous attacks) |
| **Inquisitor** | Inquisitor + Paladin + the Necromancer's **investigative blood magic** |
| **Zhrets** | Žrec + the Elementalist's **water and earth** (through Druid) |
| **Necromancer** | Necromancer + Wonderworker + the Elementalist's **fire and air** (through Warlock) |

- Each leftover ability goes to the class that shares its prerequisites.
- **Blood magic for the Inquisitor:** the Necromancer's blood reading is an investigator's tool, which matches our Inquisitor's "blood magic that uncovers truth". *Draft:* *Last memory* and the Mage version of *Necrolog* move; *Blood toll* stays with Necromancer. Perks are settled later.

**Prerequisites** *(confirmed)*
- **Goal:** every advanced class leads to **two** mighty classes, with no forced pairing that doesn't make sense. **Warrior** is the exception, leading to three: it's meant to be slightly more useful.
- Built from the DrD2 sources' own lists: three match a DrD2 class exactly.

| Mighty class | Advanced classes | DrD2 match | Change from the current list |
|---|---|---|---|
| **Warlord** | Warrior, Rogue, Scout | Leader, exactly | − Ranger |
| **Ravager** | Warrior, Ranger, Witcher | Destroyer, exactly | − Shaman (skinchanging works through Ranger trophies and Witcher signs, as Dragon-man does) |
| **Shadow** | Rogue, Scout, Mage, Alchemist | Shadow + Scout (from the Avenger) | Ranger → Scout |
| **Inquisitor** | Warrior, Warlock, Witcher, Mage | Inquisitor + Paladin, without Scout | none |
| **Zhrets** | Ranger, Druid, Shaman | Žrec, exactly | none |
| **Necromancer** | Warlock, Alchemist, Shaman, Druid | Wonderworker, exactly | Mage → Shaman, Druid (the Necromancer's spirits and dreams come through Shaman, its bodies and plagues through Alchemist; the corpse-reading Mage part goes to the Inquisitor anyway) |

- Each advanced class: Warrior (Warlord, Ravager, Inquisitor), Ranger (Ravager, Zhrets), Rogue (Warlord, Shadow), Scout (Warlord, Shadow), Witcher (Ravager, Inquisitor), Shaman (Zhrets, Necromancer), Druid (Zhrets, Necromancer), Alchemist (Shadow, Necromancer), Warlock (Inquisitor, Necromancer), Mage (Shadow, Inquisitor).
- **The Elementalist stays split** *(confirmed)*: fire and air to Necromancer, water and earth to Zhrets. *Later:* maybe a purchasable Zhrets perk for all four elements.

**Conflicts with ours**
1. ~~**10 classes into 6.**~~ Answered: see *Our merge*.
2. ~~**Levels.**~~ Answered: mighty classes have levels 1–5 and one perk per level, but **no skills**. Master abilities become perks; "master skills" become perks that extend a lower class's skill, rolled with that class's level.
3. **Talent, proficiency, mastery.** DrD2's tiers of free manoeuvres have no equivalent here; strong and cruel manoeuvres come from perks.
4. **Paladin** is already a Warlock aspect name.

### Hidden classes *(draft, 2026-11-14)*

A **hidden class** is a basic class a player **can't choose**. The story gives it: a bite, a curse, a pact. Michal has one in mind, the **Vampire**, and it will probably stay the only one.

- **Like a basic class:** a bundle of skills, levels 1–5, and rolls add the class level.
- **Doesn't combine:** it counts towards no advanced or mighty class.
- **Few skills, many base perks.** Base perks come free with the class, like core spells, and **add the class level** to their rolls. More perks are taken as usual, one per level.
- **It grows with the character:** higher levels unlock stronger perks.

#### Vampire

Vampiric skills grow over time, marking the change from a **thrall** to a **vampire lord**.

**Skill:** *Vampire knowledge* (S, unique).

**Base perks** (free with the class):

| Perk | Effect |
|---|---|
| **Sun afflicted** | In broad daylight, all your actions are **Imprecise** |
| **Bloodthirst** | You must drink human blood at least once a day. If you don't, you take **double damage**. Drinking blood counts as a **poor rest** (restores 3 exhausted points) |
| **Slumber** | Sleeping with a bit of your homeland's dirt counts as a **quality rest**. Each day you stay in slumber heals **one level of a Scar**. Being killed while in slumber **breaks your immortality** |
| **Immortal** | When you would die, you instead appear at the place of your **last slumber**, in slumber. You can't wake until at least one resource point is back (neither scarred nor exhausted) |
| **Bat form** | You can turn into a bat |

**Perks:**

| Perk | Effect |
|---|---|
| **Mist** | You can turn into mist |
| **Wolf form** | You can turn into a wolf |
| **Blood resourceful** | Animal blood quenches your thirst instead of human blood |
| **Enlightened abstinence** | Needs *Blood resourceful*. You no longer need to drink blood; drinking it still restores your resources |
| **Daywalker** | The sun no longer affects you |
| **Hypnosis** | You can use mind magic, like the Mage's *Mind touch* |

**Where it meets our rules** (to settle):
1. **Getting it:** who grants the first level (the DM, through the story), and whether later levels are bought with level-up points like any class or come from the story too.
2. **Other classes:** "doesn't combine" could mean only that it makes no advanced classes (the vampire keeps their old classes and can still raise them), or that a vampire takes no other classes at all.
3. **Races:** the Races section says "No fairies, vampires or ghosts". A hidden class gets around that: a human becomes a vampire, they aren't born one.
4. **Bestiary:** a lesser vampire is a **Monster**, a higher vampire a **Fiend**. If a Vampire player character counts as a monster, then Fighter's "humans and beasts" skills don't work against them, but the Ranger's and Witcher's do. Medic poisons (humans and animals only) and *Witcher senses* are affected too. The lord at Vampire 5 might count as a Fiend.
5. **Double damage:** player characters have no hit points. The closest rule is **weakness to all damage**: Scar levels and the cost of averting doubled. That's harsh; a milder option is weakness bonus 1 (averting costs 1 more).
6. **Slumber's healing** is free: no 5 points per Scar level and no skill check. It's balanced by time, since a day in slumber is a day out of the story.
7. **"When you would die":** the moment the third dying roll fails, or the moment a pool overflows into dying. The first is closer to 5E.
8. **Transformations:** the Shaman's *Skinchanger* (2 Body) is the model: keep pools and class levels, gain the form's abilities, limited by its body. Prices for bat, mist and wolf are still to set. Mist could be the rules' only way through a keyhole.
9. **Hypnosis** uses Mage mind magic (*Mind touch*, and *Charm*?), rolled with the **Vampire** level and paid like the Mage's.
10. **Level gating:** which perks need which Vampire level (*Mist*, *Daywalker* and *Enlightened abstinence* feel like lord-level).
11. **Level validation:** base perks don't count towards level, like core spells.
12. **Vampire lords keep familiars and thralls** (Bestiary), so a lord-level perk could give thralls as companions.

## Leveling

Each level-up gives the player **one point to invest**, in one of four ways:

1. **Raise a class level.** The class must be below **level 5**, the per-class maximum. Raising it also grants **one perk of that class**, so a character always has as many perks in a class as their level in it. The perk's prerequisites must be met.
2. **Take a new class at level 1.** A new **basic** class is always available and comes with a perk choice. A new **advanced** or **mighty** class requires its prerequisites to be met.
3. **Take an extra perk** in a class already at level 5, if the perk's prerequisites are met.
4. **Add +1 to Body, Soul or Charisma.**

### Granting levels *(2026-11-17)*

- **The DM grants a level-up point**, from a campaign the character is currently put forward in. Any such DM can, including the DM of a campaign the character only visits as a guest. **The level stays** when the character leaves the campaign, or the campaign is deleted.
- **Every grant is recorded:** the campaign, the DM, the date and an optional reason ("Slew the wyvern"). The character sheet shows the level history; level = starting level + grants.
- **Undo:** the DM of the campaign a grant came from can undo it, even after the character has moved on; no DM can undo another campaign's grant. If the point was already spent, the sheet warns that the build has a pick too many, and the player gives one back in the editor.
- **Where:** a *Grant a level* button on the campaign's player cards, the character list and the character page, shown only to a DM who may grant or undo.
- **In the app:** `character_level_grants`, written only by `grant_level` and `revoke_level`. A trigger stops anyone changing `level` or `start_level` by hand, and a new character starts at its starting level (3, 7 or 9).

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

> **Status: being designed (Q14).** This section records what the old rulebook and `perks.tsx` (git commit `60a40a6`) actually contain. The rules for casting are still mostly missing. The old spells are in the database since 2026-11-08, carried over as they were.

### As it stands

- **The magic potential** *(Michal's, 2026-11-16; the rulebook's Casting magic page)*: magic is in everything, the weave that holds reality together, even where its effects are rarely seen. Casters differ only in having **awoken their connection** to it. Anyone could in theory awaken it, but most people never even meet a magic effect. The three magic types say whether a class has tapped into the weave yet.
- **Three kinds of class:** *dormant*, *awakened* and *latent* *(renamed 2026-11-14 from none, full and pseudo)*.
  - **Awakened** (Incantor, Druid, Alchemist, Warlock, Mage, and every mighty class except Warlord and Ravager): **core spells** come free with the class, and more spells are taken as class perks.
  - **Latent** (Witcher, Shaman, Ravager): the same, but the caster must first **enter magic mode** by dealing themselves a **Scar**.
    - **Magic mode lasts until the end of the conflict,** or outside combat a **reasonable continuous stretch of time**, such as searching one ruin. The DM judges when it ends. Until then, they cast their spells normally, paying each spell's own price.
    - **The Scar is narrative and can be anything:** a Witcher drinking a toxic elixir, a Shaman slicing their palm with a ritual dagger.
    - **It's a level-1 Scar, a blank payment:** it gives **no** temporary points, unlike a Scar taken to avert a failure.
    - **Any pool the player likes** *(confirmed)*, matching the story: slicing a palm with a sacrificial dagger is a Body Scar; a Witcher elixir that eats at the mind is a Soul Scar.
- **Magic skills:** awakened classes' skills are their schools, e.g. Warlock's *Fire, Wind, Evocation and Abjuration magic*, Mage's *Illusion, Enchantment and Conjuration magic*. They're all Soul and unique. Witcher signs and Shaman's Animal magic (Charisma) are the pseudo equivalents.
- **Casting is an action** in combat. The old Danger Level page has a caster on a hill "facing Danger Level 2 to cast a spell", which suggests a failed cast is averted with exhaustion like any other failure. Nothing says what roll casting uses.
- **Core spells** are open-ended tools rather than fixed effects:
  - *Bending* (Druid: earth, water, plants; Warlock: fire, air) works "in a limited manner" on what already exists, and does no direct damage. The exception is Fire Bending, which deals 1d6.
  - *Blessings and Curses* (Incantor) gives a target advantage, disadvantage or a bonus d4 on one kind of roll.
  - *Eye Sigil* (Incantor) is an area that other Incantor spells can be cast through, costing Material per "sigil strength".
  - *Isa Sign* (Witcher) deals 1d6 radiant to monsters and supernatural beings.
- **Prices vary widely.** Spells cost nothing, 1–3 Soul (Burning Hands, Kenaz and Sowilo 1 Soul since 2026-11-09), 1 Charisma, 2 Body (Skinchanger), or 1–2 Material (Fireball, Fire Shield). Some perks make spells cheaper: free Widespread for bending (Marching Forest, Rock and Stone, Tsunami), and free amulet charging (Mighty Amulets).
- **Spell fields:** components (Verbal, Somatic, Material and/or Ritual, sometimes naming the item: "a feather of any bird"), range, area, duration, damage and damage type.
- **Damage is 5E-sized:** Burning Hands 2d6, Fire Shield 2d8, Kenaz *Witcher level × d6*, Fireball *(3 + Warlock level)d6*. Area spells give each target a defense roll: an NPC who wins takes half damage, a player character who wins takes none.
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

**Units of size** *(confirmed, 2026-11-08)*: how much an open-ended spell (bending, plant control, an illusion) moves in one cast. Each step up the ladder is one Widespread.

| Unit | About | On the grid | For example |
|---|---|---|---|
| **A palm** | A cup, a candle, a handful of earth | Part of a square | Light a pipe, chill a drink, wilt a flower |
| **A witch's hut** (the base) | A small cottage: about 5 m across | One battle square (5 m), a handful | A wave that capsizes a raft but only rocks a ship; a shallow stream frozen to the bed for 5 m, as a dam or a bridge; one tree; walking 5 m across water; one illusion of a hut-sized thing |
| **A farmstead** (Widespread) | A yard with its buildings: about 10 m across | 2 × 2 battle squares, a band's footprint | Fog over a small harbour; a riverbank sliding into the water; a whole grove swaying |
| **A village** (Very widespread: only master abilities that name it) | A fort, a village green, a city district | One field square (50 m), a horde's | Catastrophe-scale nature magic: Zhrets, Necromancer |

- **The ladder is also a unit's reach.** A base spell reaches a handful, Widespread a band, Very widespread a horde (see [Units](#units-drd2)).
- **Several things within one step** (three torches, four puddles) also take Widespread, as for any multi-target action.
- **Strength stays in words,** with no ladder: a human's by default ("a gust pushes like a man", "vines grip like hands and can be torn free"). Perks that go further say so in their text (a giant's strength, a storm).
- **DrD2's limits stay:** only existing material in its natural form (no water from nothing; no beer or soup without a perk); a hut of water can be frozen, not a lake; effects are instant unless a perk extends them.

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
- **Steady mind** *(Incantor perk, 2026-11-12)*: concentration rolls don't cost the Defense manoeuvre. Every awakened caster can reach it through their Incantor levels; Witcher and Shaman can't.
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
- **Scale:** one target and hut-sized (more targets or a larger amount with a paid Widespread), human strength, no killing. Hard circumstances add a cost to attempt.
- **NPC immunity:** stronger NPCs can be immune to simple curses, as a stat-block ability.
- **Blessings and Curses stays free.** It's a buff that costs an action and risks exhaustion. In play, players use buffs less once they have more active options.

**Magic can't kill on its own.** Basic magic can't kill or knock out a living creature without a perk. The Warlock's fire has the strength of a torch: it scares, dazzles, burns and raises the target's Danger Level, but won't set their clothes alight.
- **Circumstances can kill:** douse the target in oil first and the same spark makes a living torch.
- **Perks can kill:** a perk like *Dragon's Breath* makes the fire itself deadly.
- **Substances can kill** in their basic form (poisons, explosives, corrosives), balanced by needing contact.

**Control**

**Charmed and control are separate** *(confirmed)*:
- **Charmed** (5E's condition): the target keeps **its own will**. It treats the caster as a friend, but acts for itself.
- **Control** (DrD2's, below): the Mage's puppeteering of people and the Shaman's of animals. An **active act**: the caster drives the target, as a companion (see [Companions](#companions)).

- **Unresisting target** (a minor NPC): a skill check with the control skill. **Resisting:** a challenge, which can grow into a longer conflict with both sides exhausting to avoid failing.
- **On success,** the controlled creature acts like a companion. The caster uses its skills, but pays any exhaustion, manoeuvres or perk prices from **their own Charisma**.
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
  - The ingredients become the **guardian's resource pool**. It works like a companion's Bond, but can't take Scars. It's never returned, even if unused.
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

**The spirit world** *(confirmed, 2026-11-11; DrD2's *snový svět*, also called the dream world)*

- **What it is:** a **reflection of our world**, and the **gateway between our plane and the others**. Places, people and things here have their reflections there. **Information and secrets shape it**: what happened, what's remembered and what's hidden all take form there.
- **An endless spiral, not a place.** It shows itself as a world with ground and sky, but it isn't crossed like one. Travellers go **down the spiral**, one long hallway that only goes deeper: the further down, the older the knowledge.
  - **Tone:** the rulebook page can use a little eldritch language here: the veil, the spiral, things that shouldn't have shapes. Only here; everywhere else stays dry.
  - **One peculiarity** marks every spirit world, so anyone knows where they are: no colours, only grey; ground of sharp glass; everything a twisted parody of ours. DrD2's examples (*Ice plains*, *Bone forest*, *Twisted kingdom*) can stay as inspiration for DMs.
- **Only souls enter.** Nobody goes in with their body; it stays behind in a trance, breathing slowed, looking dead on long trips.
  - **Everything there is Soul.** Fighting, running, climbing: every action there exhausts **Soul**, and every Scar taken there is a **Soul Scar**, as running in a dream wears the mind out. Class levels apply as usual.
  - **Overflowing** Soul there means Soul's dying stage (madness, catatonia) like anywhere.
  - **The body left behind** *(confirmed)* is treated as **Unconscious**. Any harm to it pulls the soul back at once, ending the trip: an ambush on the sleeping party is a way to cut a trip short.
  - **The one exception:** the Zhrets's *Soultrap* at Zhrets 4 traps a living being whole, body and soul.
- **Who uses it:**
  - **Shamans** are the only ones who **enter** it, and the only ones who **summon human spirits** from it.
  - **Other classes tap it slightly,** without a direct connection: the Incantor's familiar comes into the world through it. Others case by case.
  - **The Mage's Conjuration** pulls spirit-world creatures into our world (*Through the veil*), one way only; *Both ways* (Mage 5) sends them back. Calling the souls of the dead stays with Shamans, and later the Necromancer.

**Layers** *(confirmed)*: how deep down the spiral, by what's asked. The deeper, the longer the trip takes in our world.

| Asking about | Who knows | Time passing in our world |
|---|---|---|
| What's happening now | Most beings | A few heartbeats |
| Since the last sunrise or sunset | Fewer | Minutes |
| Since the last solstice or equinox | Fewer still | Hours |
| Since the Shaman was born | A few, hard to find | Up to days |
| Before the Shaman was born | Out of reach | — |

**Animal magic** *(confirmed, 2026-11-15; the Shaman's *Animal magic* skill, C, unique; DrD2 *magie zvířat*)*

**In the app** it's the Shaman's core spell ***Beast mind***, the animal twin of the Mage's *Mind touch*.

- **Target:** one ordinary, non-magical animal in sight (beasts, birds, fish, reptiles). Never a monster, however dim. Needs **magic mode** (DrD2's *essence*, whose Charisma Scar is our level-1 Scar in any pool).
- **Unnoticed:** read and nudge mood, intentions and feelings: calm it, make it ignore a passing group, let you ride it, cut a lock of its fur.
- **Noticed** (the animal may howl or rage to throw the Shaman out): talk with it, read thoughts and memories, see and hear through its senses. Animals don't understand speech: they pass on smells, sounds, a tone of voice, not what was said.
- **Duration:** a willing animal stays linked while in sight and attended to; a resisting one gives one feeling for a moment, or one answer, per successful cast.
- **In the rules:** changes the Danger Level through feelings (fear, fury, dullness; pride for a pack leader); Soul or Charisma damage against NPC animals. Can't knock out, kill, madden or take over the will on its own. Full control is the separate [control](#magic) rule.

**Foresight** *(confirmed, 2026-11-11; the Shaman's *Foresight* skill, S, unique; DrD2 *hadačství*)*

**In the app** it's the Shaman's core spell ***Spirit walk*** *(2026-11-12)*, so the sheet and the class page carry these rules.

**Two ways:**

| | Summoning | Venturing in |
|---|---|---|
| **What** | The Shaman calls one spirit to answer questions, using the spirit world as an agent | The Shaman's soul goes down the spiral, with companions if they like |
| **Price** | 1 Material | 2 Material, +1 for every companion |
| **Who answers** | A **relative's** spirit, or someone the Shaman had a **strong bond** with, an animal too. Anyone else needs *Voice of the dead* (and a symbolic touch: something they owned) | Whoever and whatever the party finds down there |
| **What it can tell** | Only what's **unguarded**, only what happened **after the spirit was born**, and only **general** things: *did* men walk through here, not *how many* | Anything the party can find, fight or talk out of the spirit world: specifics, and guarded secrets once their guardian is past |
| **How long** | Only the questions asked, and only as long as the spirit is willing | Until the trip ends |

- **Contact with what the question is about:**
  - **A person:** a symbolic touch (their hair, their ring).
  - **A place or an item:** **only with *Dream runes***, carved into it (a diary's cover, a tavern room's wall). Without the perk, Foresight reaches only people.
- **A ritual:** drugs, song, drumming. It takes time to prepare, so it's not for combat (the Ritual component).
- **Magic mode** first: a level-1 Scar in **any pool** the player likes, as for any latent magic. A trip down the spiral counts as one stretch. Companions take no Scar.
- **Answers:** each successful roll gets **one simple question** and a **short, true answer**.
- **Only as far back as the Shaman's own life.**
- **Great seer** (DrD2 specialisation, strong manoeuvres in Foresight): covered by the Shaman's mastery perk, *Elder shaman*.

**The spirit world skews everything** *(confirmed)*. Answers are true, but bent: partial, symbolic, faces and names twisted. Each way gives a different piece.

*Example:* a spy was murdered in his tavern room, and the party wants the killer.

| Way | What it gives |
|---|---|
| Summoning the Shaman's grandmother, with the spy's ring | A murder happened; blood was spilled |
| Summoning the murdered spy (*Voice of the dead* and his ring) | When and how he died, but not the killer's face or name |
| *Dream runes* carved into the wall | A blurry memory of the murder, faces grotesquely deformed; the room can now be searched |
| Venturing in | An animated suit of armour guards the room's reflection; defeated, it describes the killer's face |

**Secrets** *(confirmed)*
- **Any secret can be guarded** by a spirit-world creature: a guardian a caster set there (a *Veil sigil*, a fed wolf's soul in a cave), or one that lives there. Summoned spirits won't reveal what it guards, so the Shaman has to venture in and get past it. The guardian rolls with its maker's class level.
- **Beyond the veil:** the mightiest, most ancient keepers can banish information out of the spirit world entirely. A one-way wall: nothing in the spiral can find it. Only for mighty class perks and ancient NPCs (a stat-block ability).
- *Example (DrD2):* the Shaman Brana drums herself, the hunter Domabor and the minstrel Milorad down the spiral (2 + 2 = 4 Material) to find where renegades fled. Her ancestor's spirit says powerful forces guard it. In a cave up a snowy gorge, a huge wolf's soul set there by an enemy shaman blocks the way; the friends keep it busy, and Brana touches the dove imprisoned inside: "They went up the river Ostrá into the mountains."

**Perks** *(in the database, 2026-11-11)*
- ***Voice of the dead*** (Shaman, passive): summon the spirit of any dead person, with a symbolic touch (something they owned).
- ***Dream runes*** (Shaman, +1 Material per carving): the **only way** to search a place or an item. Runes carved into it let Foresight reach it (summoning or venturing in), and show a blurry memory of what happened there, faces and names grotesquely deformed.
- ***Nightmare sigil*** (Shaman): a sigil in our world and its reflection. Its alarm works across the veil; through it the Shaman pulls the soul of someone standing in it into the spirit world (an unwilling target makes a defense roll); a spirit-world creature walking into its reflection is pulled into our world, unbound. **Lasts until the next solstice or equinox.**
- ***Veil sigil*** (Shaman): drawn in the spirit world around one piece of information, during a trance. Summoned spirits can't reveal it; when someone tries to reach it, the alarm wakes the Shaman, who puts obstacles in the way from the sigil's pool, or ventures down to fight. **Lasts until the next solstice or equinox.** *(DrD2's Znak můry.)*
- ***Soul base*** (Shaman) *(confirmed, 2026-11-12; set up like a sigil or a unit)*: the Shaman's own room in the spirit world, made during a Spirit walk.
  - **Setting up:** 5 Material, plus Material for its **pool**, 1 per point, up to the Shaman's Soul pool.
  - **Uses:** trips start and end there, spirit-world beings can be invited in, and the party's secrets kept there. Seekers have to find the room first.
  - **Paid from the pool:** 1 point to invite a being or to act against an intruder (rolled with the Shaman level, averted from the pool). Refilled during any Spirit walk, 1 Material per point.
  - **Renewal:** the bond is renewed at every solstice or equinox with a Spirit walk. Skipped, the room fades: everything kept there is loose in the spirit world, unguarded, and trapped souls go free.
- ***Soultrap*** (Zhrets, 2 Soul; needs *Soul base*): traps a soul in the Soul base. A dead person's soul can't be summoned; a living person's (defense roll) leaves the body catatonic. At **Zhrets 4**, a living being whole, body and soul. **Holding** costs 1 point of the base's pool per soul at every renewal *(confirmed, 2026-11-12)*; unpaid, or if the room fades, the soul goes free.

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

*Supernatural means* *(confirmed: counterspells and breaking as DrD2, with Berkano Sign as the Witcher exception below)*
- **Counterspells** stop a spell as it's cast:
  - **Against the ritual:** do magically what could be done naturally. An Incantor curses the enemy's tongue tied; a Warlock knocks them down with a gust.
  - **Against the spell:** with the same school or another, wherever it makes sense to the table. *A Druid making fog can be stopped by another Druid seizing the water, or raising a water wall first, or by a Warlock's gust.* Each needs a **won challenge**.
- **Breaking spells and antidotes** remove a lasting effect after it's cast:
  - Only **supernatural effects** can be broken. A curse can be lifted and a narcotic suppressed, but fire magic can't heal burns from another Warlock's fire.
  - The breaker needs the **same conditions as for casting**: the skill (the school, or making that substance), but not the perks that were used.
  - They also need **range** (touch or symbolic touch to the victim) and **the same resources** that went into the spell. An antidote needs as many ingredients as the poison.
  - They must **know what the spell is:** from being there when it was cast, from an exact description (a curse's wording, a poison's recipe), or from studying its effects (Incantor's occult knowledge, Medic's medical knowledge).
  - **Breaking ends the spell, not its consequences.** The sleeper wakes and the fire wall goes out. Scars taken to resist the flames stay, and the Mage keeps what they read. One-off spells can only be averted while they happen.
- **Berkano Sign, the Witcher exception:** for 1 Soul, a Witcher breaks **one spell or magical effect targeting them**, and can use it with the Defense manoeuvre.
  - It skips the breaking requirements: no matching skill, no matching resources, no need to know the spell.
  - It's cheap because it's narrow: the Witcher only, never an ally, and it doesn't undo magic's consequences (burning ground stays burning).

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
- Anyone can own them as flavour. Incantors store resources in them (see [Ritual items](#magic)). For Shamans and Witchers an amulet can be the tool that **awakens their magic**, DrD2's *essence*. That fits our latent magic mode.

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
  - **Immediate poisons are a speciality:** for player characters, the **Fast** property of the Medic perk *Unusual poisons* (+1 Material per strength; no separate perk); for NPCs, a special ability (a giant spider's bite).
    - *Example:* a Rogue with Medic levels and *Unusual poisons* coats a blade with a strength-3 fast contact poison for 6 Material per dose.
  - A condition from a poison lasts as long as the poison does.
- **Delivery** *(confirmed)*: three ways in, each tied to a skill.
  - **Swallowed:** Medic's *Potions and poisons*. Anyone can try; the Medic adds their class level.
  - **Contact:** Rogue's *Contact poisons* (unique). A contact poison works only when it **meets bodily fluids**: an open wound, the mouth, the eyes. On bare, unbroken skin it does nothing. **Weapon (injury) poisons count as contact poisons**: a coating on a blade or arrowhead gets in through the wound. In a fight they're only useful when immediate, so they usually need the Fast property of *Unusual poisons* too.
  - **Breathed in:** Alchemist's *Explosives, corrosives and gases* (unique).
- **Medic substance perks work on every class's substances** *(confirmed)*. *Unusual poisons* and its kin apply to Rogue contact poisons, Alchemist gases and Shaman narcotics as well as Medic brews. The character needs the Medic perk itself, so a Rogue who wants hard-to-detect poisons takes Medic levels.

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
5. ~~**Price.**~~ Answered: every poison's base price is **1 Material per strength per dose**. *Your Lips Are Venomous Poison* adds steps on top: a poison that works on bare skin costs **2** per strength; one the Rogue is also immune to (carried on skin and lips) costs **3**. *Note:* base contact poisons need bodily fluids (a wound, the mouth, the eyes), so the perk's real gift is a poison that works on **bare skin**. DrD2: 1 Material per strength per dose (+1 per unusual property). 5E: 100–2,000 gp. The old Rogue perk *Your Lips Are Venomous Poison* is 3 Material per unit of strength (4 to be immune yourself), steep next to DrD2.
6. ~~**Strong effects vs player characters.**~~ Answered: lethal poison is damage, a threat die by strength turned into a Body Scar. For NPCs they map onto conditions (sleep → Unconscious, paralysis → Paralyzed) or the Body track (death). For player characters there are no hit points; does "death" become a big Body Scar, e.g. level = strength? → **Q17a**
7. **Penalties fit:** DrD2 poisons use exactly the four penalty conditions we just adopted (Imprecise, Slow, Feeble, Foolish), which covers 5E's Poisoned condition without adding it.
8. ~~**Potions vs our healing substances.**~~ Answered: one kind of Scar, Body by default; *Omni Potion* lifts the limit. Ours already hold resource points for scar healing (a Medic's burn ointment worth 5). DrD2 adds two limits: a potion treats **one kind** of Scar, and only **Body** Scars. Ours say nothing about either.
9. ~~**"Bonus of size 1."**~~ Answered: DrD2's *Výhoda* is a merit point added to a counter, spent as one free resource point (changed 2026-11-01; see [Merit points](#rolls)).
10. ~~**Dwarves.**~~ Answered: *Iron Liver* is widened to advantage when resisting **alcohol and swallowed poisons**. It stays a chosen racial perk, so not every dwarf has it; contact poisons and gases aren't covered. 5E dwarves resist poison by race.

### Conflicts with 5E and our current rules

1. **Damage spells.** ~~Can basic magic kill?~~ Answered: core spells only chip, perk spells carry the dice. Against player characters the DM uses a threat die instead. → **Q14d**
2. ~~**Ranges and areas.**~~ Answered: both kept; approximate units for open-ended spells, metres where a specific area matters. The old spells use metres (Detect Magic 10 m, Fireball and Earthquake 30 m) like 5E. DrD2 uses touch, symbolic touch, sight and contact, and caps size at a hut. → **Q14k**
3. **Durations.** ~~Keep only DrD2's three?~~ Answered: all six stay. *Concentration* ties up the caster's action like DrD2's control; *until dismissed* needs no action. Unlike 5E, concentration isn't something a caster keeps up while acting freely. → **Q14g**
4. ~~**Saving throws.**~~ Answered: a won defense roll halves area damage for NPCs and avoids it for player characters. Spell texts say "make a saving throw to halve the damage". DrD2 resolves it by whether the target resists: a skill check if not, a challenge if so. That fits our defense rolls; halving doesn't. → **Q14e**
5. ~~**Charm.**~~ Answered: Charmed and control stay separate. The old Charm spell uses 5E's charmed condition. DrD2 control turns the target into a companion paid for with the caster's Charisma. We have no companion rules yet. → **Q14l**
6. ~~**Components.**~~ Answered: Verbal, Somatic, Material (spent Material, named by the spell) and Ritual (a long ceremony, not in combat). The old set is Verbal, Somatic and "Material and/or Ritual". "Material" clashes with the Material resource, and "Ritual" means something else in 5E (a slow cast without a slot). DrD2 has four kinds: words, gestures, sigils, substances. → **Q14h**
7. ~~**Unique Incantor skills.**~~ Answered: *Ritual items* stays unique; *Dealing with supernatural beings* is open to anyone with intelligent, speaking beings, and Incantor-only with the rest. Our class table marks *Ritual items* and *Dealing with supernatural beings* as unique. In DrD2, anyone can attempt Incantor magic. Blessings and Curses would also be a skill anyone can try, not a core spell. → **Q14m**
8. ~~**Price.**~~ Answered: spells are priced like perks (core spells only unlocked free), hard circumstances add a cost to attempt, and latent magic needs a Scar to enter magic mode for the conflict. → **Q14b**, **Q14c**
9. **Hard-circumstance cost.** DrD2's "costs 1 to attempt" for ice on a hot day has no general rule in ours. The closest is the armour encumbrance cost paid before acting. → **Q14b**
10. ~~**Scale.**~~ Answered with conflict 2. Base magic is one target, hut-sized and human-strength. Our Widespread manoeuvre already covers more targets. Earthquake (30 m radius) and Fly (10 m per turn) go beyond the base scale and would need to be perks. → **Q14k**
11. ~~**Schools.**~~ Answered: Arcane/Divine/Eldritch are unused for now; the magic skills act as schools. DrD2 has no Arcane/Divine/Eldritch. It groups magic by class domain, like our skill names. → **Q14i**
12. ~~**Rolls.**~~ Answered: a *výzva* (like a 5E saving throw against an environmental effect) is a plain skill check. Which class level applies is **Q7c**. DrD2 mentions a third roll type (*výzva*), used e.g. for noticing a sigil being triggered while asleep. We only have skill checks and challenges. → **Q14p**
13. **Sigils.** ~~DrD2 glyphs vs our sigils~~: answered, they're the same thing. Incantor gets Eye Sigil as a core spell; every other magic class buys a sigil perk. *Sigil Guardian* adds a trigger condition. 5E's *Glyph of Warding* stores one spell until triggered; here the caster acts live through the sigil. → **Q14n**
14. ~~**Counterspells.**~~ Answered: DrD2's counterspells and breaking are adopted; *Berkano Sign* stays as a Witcher exception. 5E's *Counterspell* is a reaction with a slot-level check. DrD2's is a won challenge with any fitting school. Our *Berkano Sign* (1 Soul, break one spell targeting you, usable with the Defense manoeuvre) breaks spells without knowing what they are, which DrD2 requires. → **Q14o**
15. **Breaking spells.** 5E's *Dispel Magic* and *Remove Curse* work by spell level. DrD2 needs the school, range, matching resources and knowledge of the spell. Breaking not healing Scars agrees with our scar healing rules.
16. **Concentration.** 5E breaks it on damage with a Constitution save. Ours: any hit (even one armour absorbs) forces a defense roll with the caster's magic class level. Details are listed under *Breaking concentration*. → **Q14g**
17. ~~**The "hard action" cost**~~: answered. Hard circumstances add a DM-set cost to attempt, like armour encumbrance; a sigil's 1 point per action is the same rule.
18. ~~**Poison duration.**~~ Answered: next sunrise or sunset by default, and Alchemist substances act at once (see [Substances and traps](#substances-and-traps)).
19. **Ritual items vs 5E.** A 5E focus (arcane focus, holy symbol) only replaces material components. The closest 5E item to a battery is the *Pearl of Power*. No direct clash; *wellsprings* are new to our world and need a place in the World section.

Open points are collected as **Q14** in [Open questions](#open-questions).

## Substances and traps

> **Status: confirmed (Q22, 2026-11-08).** In the rulebook as *Traps and hazards* (Equipment) and in the structure tables. One rule for everything that is made and then acts on its own: poisons, narcotics, explosives, acids, gases, mechanical traps. A second, shorter rule covers what is drunk or used up for a benefit: healing potions, elixirs, artificial life. Source: DrD2 Part III (*nástrahy*, *výroba*, and the Medic, Shaman and Alchemist substances), which Michal shared on 2026-11-08. Our confirmed poison and potion rules stay; this section generalises them.

### Hazards: one stat line for every trap and harmful substance *(confirmed, 2026-11-08)*

DrD2 calls them *nástrahy*: things that take their own action against whoever meets them. A poison works on the drinker, a trapdoor on whoever steps on it, a bomb on everyone near it.

**Five entries** (DrD2's, unchanged):

| Entry | Says | For example |
|---|---|---|
| **Reach** | Who it hits, and how | The drinker; whoever opens the lid; everyone within the blast |
| **Pool** | Body, Soul or Charisma | Body for darts and acid; Soul for a nightmare draught |
| **Strength** | How bad it is (see below) | 1–8 |
| **Effect** | One effect, as for our poisons: damage, a condition, a Scar, a story effect, or a mix | 3d6 off Body; Paralyzed; the cell door shuts |
| **Giveaway** | How it can be spotted. **Every hazard must have one** that gives a real chance | A bitter taste; a wire across the corridor; a hiss as the vial breaks |

**Shorthand,** for stat blocks and adventure notes: *Spider venom (bite; fast Body poison, strength 5; Paralyzed).*

**Strength does three jobs**, so there's one number to set:

| Strength | Danger Level to avert | Damage to an NPC | Threat die against a player character | Feel |
|---|---|---|---|---|
| 1 | 1 | 1d6 (3) | d4 | A sting, a prank, anything made of improvised materials |
| 2 | 2 | 2d6 (7) | d4 | A rusty snare, a vial of acid |
| 3 | 3 | 3d6 (10) | d6 | A dart trap, a sleeping draught, a small bomb |
| 4 | 4 | 4d6 (14) | d6 | A spiked pit, a strong poison |
| 5 | 5 | 5d6 (17) | d8 | Black powder, a deadly poison |
| 6 | 6 | 6d6 (21) | d8 | A collapsing ceiling |
| 7 | 7 | 7d6 (24) | d10 | A powder keg |
| 8 | 8 | 8d6 (28) | d10 | Legendary work |

This is the poison rule already confirmed (strength d6 against NPCs, the same threat dice against player characters), stretched to every hazard. **The hazard's strength replaces the scene's Danger Level** for that one roll.

### Meeting a hazard

1. **Noticing it** (optional). A character who could spot the giveaway in time rolls a Soul saving throw: *Mechanisms* (Rogue) for a lock trap, *Urban* or *Wilderness survival* for an ambush trap, *Potions and poisons* (Medic) for a tainted meal.
   - It's a **hidden roll**: whether there was anything to find is exactly the meta-knowledge hidden rolls protect. So no exhausting against it.
   - Spotted means avoided, or at least not triggered by accident. **A hazard with no giveaway** (the *Hard to detect* property below) can only be found by searching, and that roll is disadvantaged.
2. **Disarming it** (a found trap): a skill check with *Mechanisms* (or *Hunting* for a snare). A failure **sets it off**, unless averted by exhausting Soul equal to its strength.
3. **Resisting it.** The victim makes an **open** saving throw with whatever fits: *Acrobatics* to dodge the darts, *Endurance* against the poison, *Willpower* against the draught. This is a skill check, since there's no attacker.
   - **A player character** who fails averts as usual: exhaust the pool **equal to the strength**, or take a Scar. Averted means no effect.
   - **An ordinary NPC** suffers the effect. **An important one** can spend 1 Fate.
   - **Several victims** each roll for themselves.
4. **No weak effect.** DrD2's hazards have a strong and a weak effect, and the weak one (a raised Danger Level) lands even on a success. We dropped that for poisons, so it's dropped for every hazard: a won roll, or an averted one, means **nothing happens**.
5. **Armour** *(confirmed, 2026-11-08)*: counts against what mail or a shield would stop (darts, blades, falling rocks, the stones a blast throws): rating off the Scar level and off the Body cost of averting, as for any hit. It does nothing against poison, gas, acid, fire or a fall.

**Hazards against things** *(confirmed, 2026-11-08)*: walls, gates, roofs and locks have a **sturdiness** (see [Structures and siege engines](#structures-and-siege-engines-draft)), which does the job of DrD2's *Odolnost*.
- The hazard rolls its **strength in d6**. A roll below the sturdiness does nothing; one that reaches it comes off the section's Body. A small thing (a lock, a chain, a bar) simply breaks.
- **Tamped** (packed against or under the target: hung on a gate, at the end of a mine) a charge rolls **2 more dice**. That's placement, not a better brew, so it goes past the maker's Soul cap.
- **Acid** takes about a minute to eat through. **Gas** does nothing to things.
- A hazard does nothing to the wrong thing: poison doesn't hurt a door.
- *A strength-3 bomb hung on an iron-bound door (sturdiness 10, Body 40) rolls 5d6, about 17 a charge: three charges. Thrown loose at a town wall (sturdiness 20), its 3d6 almost never gets through.*

### Kinds of hazard

| Kind | Class | Skill | Pool | Gets in by | Takes effect | Material per strength |
|---|---|---|---|---|---|---|
| **Mechanical trap**: pit, darts, blade, net, alarm | Rogue | *Mechanisms* | Body; Soul for one that traps or misleads rather than hurts | Trigger: a plate, a wire, a lid | At once | 1 |
| **Wild trap**: snare, deadfall, staked pit | Hunter | *Hunting* | Body | A tripline, a bait | At once | 1 |
| **Swallowed poison** | Medic (anyone can try) | *Potions and poisons* | Body | Swallowed | Next sunrise or sunset | 1 |
| **Contact poison** (weapon coatings too) | Rogue | *Contact poisons* (unique) | Body | A wound, the mouth or the eyes | Next sunrise or sunset | 1 |
| **Narcotic**: visions, frenzy, giggling fits, love | Shaman | *Narcotic substances* (unique) | Soul or Charisma | Swallowed | Next sunrise or sunset | 1 |
| **Explosive**: black powder, fire clay | Alchemist | *Explosives, corrosives and gases* (unique) | Body | Lit fuse, or impact | At once | 2 |
| **Corrosive**: acid | Alchemist | The same | Body | Splashed or poured | At once | 2 |
| **Gas** | Alchemist | The same | Body | Breathed in when the vial breaks | At once | 2 |

- **The class column matters most:** it's what a player needs to make the thing. Unique skills can't be tried at all without that class; the rulebook's *Substances* page opens with the same split for every substance, potions and elixirs included.

- **Narcotics** work like Medic poisons, aimed at the mind: the effect is a condition (Charmed, Frightened, Imprecise or Foolish with a skill), a Soul or Charisma Scar from the threat die, or a story effect (the victim sees things, barks like a dog). Mostly mental or social; a physical one (visions that spoil aim) is the exception.
- **Explosives, corrosives and gases** are the Alchemist's. They cost double because they act **at once** and **hit everything around them**:
  - **Full strength where they go off, 1 less for every metre further out.** *A strength-4 bomb hits at 4 in its square, 3 at 1 m, 2 at 2 m, 1 at 3 m.* Diving clear is the saving throw (*Acrobatics*).
  - That area is part of the price, like a Fireball's (see [Widespread and areas](#manoeuvres)), so Widespread can't change it.
  - **Reach by strength:** 1 in its own square only; 2 → 1 m; 3 → 2 m; 5 → 4 m; 7 → 6 m.
  - **Gas indoors** keeps its full strength through a closed room no wider than its reach; outside it falls off like a blast.
  - Their giveaway is often the moment itself: a flash, a bang, a smell, coloured smoke.
- **Widespread for traps:** a mechanical trap meant to catch several people (a net across the corridor, a collapsing ceiling) costs **1 Material more**, however many it catches. Poisons and narcotics are per dose: one dose, one victim.
- **Medic poisons and narcotics work only on humans, humanoids and animals.** The others work on anything with a body.

**Properties.** Each costs **+1 Material per strength** and needs the perk that teaches it:

| Property | Does | For | Perk |
|---|---|---|---|
| **Fast** | Works at once instead of at sunrise or sunset | Poisons, narcotics | *Unusual poison* (Medic) |
| **Two-part** | Sleeps until something wakes it (wine, pipe smoke) | Poisons, narcotics, gases | *Unusual poison* (Medic) |
| **Hard to detect** | No taste, smell or colour | Poisons, narcotics, gases | *Unusual poison* (Medic) |
| **Bare skin** (+1; +2 if the maker is immune) | A contact poison that works through unbroken skin | Contact poisons | *Your lips are venomous poison* (Rogue) |
| **On a word** | Goes off at a sound or a spoken word | Explosives, gases | *On a word* (Alchemist, Mixer; DrD2 *Neobvyklé třaskaviny*) |
| **First one met** | The victim acts a set way towards the first person they meet once it takes effect (fall in love, try to kill) | Narcotics | *Philtres* (Shaman) |

*Example:* a strength-3 fast, hard-to-detect sleeping poison costs 3 + 3 + 3 = **9 Material** a dose.

**Strength cap** *(confirmed, 2026-11-08)*: no higher than the **maker's Soul pool**, the same cap as a sigil's pool (DrD2: the maker's Soul limit).
- **NPCs' hazards are pre-made.** The DM just writes the hazard line (or the shorthand in a stat block); an NPC maker needs no separate stat and no cap.

### Making things *(confirmed, 2026-11-08)*

In the rulebook as *Crafting* (Equipment).


The same for hazards, potions, elixirs and plain gear.

- **Needs:** a place, tools, time and **Material**. A smithy for an axe; a pot and a campfire for a draught.
- **Tools that fit the work** *(confirmed, 2026-11-16)*: a smith's tools need a forge, so on the road a smith only manages small repairs and rents a smithy for more; leather, cloth and clay work anywhere.
- **Without the proper tools** *(confirmed, 2026-11-16)*: the DM decides whether it can be tried at all. If it can, it's never automatic: a [cost to attempt](#cost-to-attempt) the DM sets, then the skill check.
- **Crafts belong to classes** *(confirmed, 2026-11-16)*: a background gives tools, not a skill; the roll uses the class whose skill fits (*Ironworks*, *Woodworking*, *Potions and poisons*). A player who wants their trade to count can ask the DM for +1 on the roll.
- **Time in a hurry:** **1 Material goes in per round.** A strength-4 bomb (8 Material) takes 8 rounds. A pit still needs digging (see [Digging and mining](#digging-and-mining-draft)).
- **Rolls:**
  - With **time, tools and a rest afterwards**, it simply works. A roll would only cost points the rest gives back.
  - **In a hurry, or with no rest to follow:** a skill check with the making skill. A failure is averted with Soul at the scene's Danger Level, or the Material is lost (the DM says how much).
- **Interrupted:** someone who wins against the maker spoils that round's Material (the ladle spills). One who sets out to wreck the work (kicks the pot over) spoils all of it.
- **Improvised materials** (DrD2's emergency ingredients: whatever's at hand, 0 Material) *(confirmed)*. They work like improvised weapons:
  - **Hazards:** strength **1**, and it stops working at the next sunrise or sunset. Hunter's *MacGyver* is the exception: an improvised trap up to the Soul pool.
  - **Consumables** (potions, elixirs, sigils): no effect in the rules, only in the story. The ointment soothes; it heals nothing.
  - **Weapons and tools:** no free manoeuvre, as improvised weapons already.
  - *Perk to write:* a Medic perk like DrD2's *Umění improvizace*: improvised materials make any hazard of strength 1 that **keeps** past sunrise or sunset.
  - **Medic's *Garden of Eden*** avoids the problem: what it harvests (1d4 − 1 a day) is **proper Material**, not improvised.
- **Keeping:**
  - Substances keep until used (a potion practically forever).
  - A set trap stays armed until it's triggered or found.
  - Sigils are the exception, ending at sunrise or sunset (see [Sigils](#magic)).
- **Buying** is in [Crafted substances](#crafted-substances): about Material × 1.5 in silver. DrD2 and 5E both say materials are half the shop price, which is close.

### Consumables: potions, elixirs, artificial life

**Healing potions:** as confirmed (see [Our potion rules](#our-potion-rules-confirmed)). 1 Material per stored point, one kind of Scar, Body by default.

**Elixirs** *(confirmed, 2026-11-08)* (Alchemist's *Elixirs*, unique). DrD2's three tiers, turned into our manoeuvres. In the rulebook under *Substances* (Magic):

| Elixir | For the drinker's **next action** | Material |
|---|---|---|
| **Skill elixir** (DrD2 *zběhlost*) | One named skill gets a free Precise, Mighty or Cunning (set when it's made) | 2 |
| **Master elixir** (DrD2 *mistrovství*) | One named skill gets a strong manoeuvre: Very precise, Very mighty or Very cunning | 3 |
| **Wonder elixir** (DrD2 *zázračný*) | An ability no human has: flying, walking on calm water, breathing fire as Fire bending, seeing in the dark | 5 |

- **One action,** won or lost. If the action is averted or cut short, the elixir is spent anyway. *Walking on water, the drinker loses the struggle with a drowner halfway across: the rest is swimming.*
- **The free manoeuvre is the action's one manoeuvre.** Under disadvantage a Precise is wasted, as always.
- **Only humans, humanoids and animals,** and the whole dose at once.
- **Rolling with a wonder elixir:** plain 2d6, since nobody trusts a power that isn't theirs. **An Alchemist adds their Alchemist level.** So does someone who has the skill already.
- **Several effects in one bottle:** add up the prices.
- **No improvised materials.**
- *Perk to write:* *Strengthened elixir* (DrD2 *Posílení elixíru*): +3 Material and a short ritual as the Alchemist hands it over, and the elixir lasts until sunset or sunrise. Only when the Alchemist gives it in person, so it can't be sold.
- **Flying:** the Alchemist flies through the wonder elixir (and later *Strengthened elixir*); the spell *Fly* is **Warlock only** *(confirmed, 2026-11-09)*.

**Artificial life** (Alchemist's *Artificial life*, unique; DrD2's *umělý život*):
- **A shem** (a clay ball, a gem, a scroll with runes) set into a body up to human size brings it to life. **One at a time.**
- **The ritual** takes a day and a night. It costs **5 Material per point of Bond**.
- **It lasts** until the next solstice or equinox, and can be renewed then.
- **The creature** is a companion with an NPC stat block in the *Undead and reanimated* category: mute, literal-minded, good at simple tasks.

**Lasting magic items** *(confirmed, 2026-11-08)*: only the **Necromancer** makes them, through its mighty class perks. Everyone else, Alchemists included, makes things that run out. Other lasting artefacts (a dwarven runesmith's axe, a fairy's circlet) come from masters and the DM, as loot and story rewards.
- **Why Necromancer:** it's built from DrD2's Wonderworker, whose *Runesmith* (a rune item holding an elixir's effect) and *Eternal spells* (a spell lasting until broken) are exactly this. The perks are still to write.
- 5E lets anyone craft magic items by rarity, with a formula, money and time. We don't.

### Next to 5E

| | 5E | DrD2 | Ours (proposed) |
|---|---|---|---|
| **Traps** | Trigger, effect and countermeasures. Severity (setback, dangerous, deadly) × tier sets the save DC (10–20), the attack bonus and the damage (1d10 up to 24d10). The 2024 DMG scales each trap by tier. | Reach, pool, strength, effect, giveaway; strength against the victim's limit | DrD2's five entries; **strength is the Danger Level, the damage dice and the price** |
| **Poisons** | Contact, ingested, inhaled, injury; a fixed Constitution DC and effect; 100–2,000 gp | Strength per Material, timed by sunrise and sunset | Confirmed rules; contact covers injury |
| **Bombs and acid** | Acid 2d6 (25 gp), alchemist's fire 1d4 a turn (50 gp); the DMG's bomb 3d6 and powder keg 7d6 with a Dexterity save | Alchemist substances, 2 per strength, weaker by 1 per pace | The same, 1 less per metre |
| **Potions** | Healing 2d4 + 2; others mostly last an hour | Healing points; elixirs for one action | Healing points; elixirs for one action, all day with a perk |
| **Crafting** | Raw materials half the price; progress per day (2014: 5 gp a day; 2024: 10 gp a day); magic items by rarity, needing a formula | Materials half the price; a roll only in a hurry; 1 groš a round | The same, at 1 Material a round |
| **Objects** | AC and hit points by material and size, a damage threshold | *Odolnost* 1 (paper wall) to 16+ (stone walls), against the hazard's strength | Body tracks and a sturdiness (5E's threshold) against the rolled damage |

**5E's adventuring gear in our terms:**

| 5E item | Ours | Material |
|---|---|---|
| Basic poison (1d4, coats a weapon) | Contact poison, strength 1, Fast | 2 |
| Vial of acid | Corrosive, strength 2, one target | 4 |
| Alchemist's fire | Corrosive, strength 2, keeps burning: it repeats each round until put out with a skill check (as *lasting flame*) | 4 |
| Bomb | Explosive, strength 3 | 6 |
| Keg of gunpowder | Explosive, strength 7 (a player needs Soul 7 to make it; bought or found ones are pre-made) | 14 |
| Antitoxin | A Medic potion against poison Scars, or an antidote that breaks one poison (Material equal to its strength; see breaking spells under [Magic](#magic)) | By strength |
| Potion of healing | Healing potion | 1 per point |
| Potion of flying, giant strength | Wonder elixir | 5 |
| Holy water | Not alchemy: a Blessing, or a later perk (DrD2's Paladin *Holy water*) | — |

### Where it meets our rules

1. **Poisons** keep every confirmed rule; this only adds the hazard line, the shorthand and the cap.
2. **Latent-magic essences** (the Witcher's elixir, the Shaman's drum or amulet) are already our magic mode: a level-1 Scar, no Material. They aren't substances in this sense.
3. **Sigils** are hazards too in a way (they act on intruders), but they're live magic, paid from their own pool. They stay as they are.
4. **NPC abilities** use the shorthand: a wyvern's sting, a giant spider's bite.
5. **Perks to write:** *Strengthened elixir* (Alchemist; drafted 2026-11-12 but not taken yet), a Medic improvisation perk, and the crafting specialities DrD2 gives as free or strong manoeuvres (*Medicinman*, *Výrobce elixírů*, *Ohněstrůjce*).

## Perks and spells

- The old `data/perks/perks.tsx` (git commit `60a40a6`) had about **137** perks and spells. **All are in the database** *(2026-11-08)*: Michal rewrote the racial and Fighter perks; the other **106** were carried over as they were, with typos fixed and a few confirmed changes (bonus dice in *Trophy hunter*, the 2/3 Material price of *Your lips are venomous poison*, ice instead of cold in *Fire shield*).
  - **Wording pass** *(2026-11-09)*: "saving throw" against a caster became a defense roll, "turns" became rounds, "challenge" became a roll where it meant a skill check, schools of magic became magic skills, and typos were fixed. Bonus actions stay for now.
  - **Now in the database:** 143 perks and spells plus the 30 aspects. Racial perks are listed under [Races](#races).
  - **Perk review** *(2026-11-09)*, decisions per perk:
    - *Burning hands*, *Kenaz sign*, *Sowilo sign*: 1 Soul (specific-effect spells pay for their area).
    - *Headcracker* (Fighter): 2 points, as any item scar.
    - *Bison skin* (Kroll): armour rating 1 when unarmoured.
    - *Tiwaz sign* (Witcher): free Defense manoeuvres until the end of the conflict; a lost defense roll is still averted as usual.
    - *Berserk* (Ranger): for 5 rounds, advantage on attacks and averting a hit costs 1 less (minimum 1). No extra class level on damage, no resistance. *Later:* maybe a second perk expanding it.
    - *Legendary warrior* (Warrior) *(changed 2026-11-11)*: any Mighty with a **Warrior skill** can be **Very Mighty** for the same price; needs **Warrior 3**. The first strong-manoeuvre perk, of the class-wide kind. (Was: free Very Mighty with one weapon type.) **Changed again 2026-11-12:** any manoeuvre, not only Mighty, at **Warrior 5**, as every class's mastery perk.
    - *Weapon of choice* (Fighter, **new**, 2026-11-11): free **Mighty** with one chosen weapon type in foot close combat. Ungated.
    - *Borders walker* (Ranger): **passive**, encumbrance 1 lower in the wilderness (medium free, heavy 1 Body). It was 1 Soul for a 1-point discount.
    - *Two birds* (Juggler): a second throw as a **bonus action**, like Hunter's *Double shot*. It was a paid Widespread, which anyone can already use.
    - *Earthquake* (Druid): shrunk to a **farmstead**, a 5 m radius at up to 30 m, **3d6 bludgeoning** and prone on a lost defense roll; 3 Soul, no Material. A 30 m radius is village scale, kept for master abilities.
    - *City guide* (Rogue): **1 Soul** per use, like the other "you can determine…" perks.
    - *Strongman* (Fighter): only advantage on sheer strength. Wielding two-handed weapons one-handed belongs to the Warrior's *Mountain that rides*.
    - *Gladiator* and *Fight club* (Fighter): Gladiator gives advantage with **proper weapons** only; Fight club with **fists and improvised weapons** (the brawler, alongside *Headcracker* and *Rock fist*).
    - *Blinding lights* (Mage) and *Sowilo sign* (Witcher): Blinding lights bursts at a point within 10 m; Sowilo bursts **around the Witcher**, who is immune to it (close allies aren't). Both 1 Soul.
    - *Behind blue eyes* (Elf): +1 point per **Soul** Scar (a typo said Charisma). One race per pool: Kroll *Fury* Body, Elf Soul, Human *Sticks and stones* Charisma.
    - **Water perks, split by body, small boat and ship:**
      - *Just keep swimming* (Hunter): swimming, diving, holding breath, fishing.
      - *Soon may the Wellerman come* (**Ranger only** now): small boats on rivers, lakes and coasts (rowing, canoes, rafts), and building rafts, dugouts and rowing boats.
      - **Seafaring** (Scout skill, S, **new**): sailing a ship, rigging and crew, navigating the open sea, reading the sea and weather at sea. Rolled with the Scout level; Body where it's hauling rigging in a storm.
      - *Sea legs* (Scout, **new**): advantage on Seafaring.
    - **Sensing the supernatural, in layers:** *Witcher senses* (passive) feels monsters, fiends and undead within about 100 m, with no direction or number, except the greatest; *Othala sign* (now **1 Soul**) pinpoints them and magic within 20 m, invisible ones too; Ranger's *Hunter instinct* feels **monsters only**, like Witcher senses.
    - *Animal whisperer* (Hunter): renamed from *Beast master*, which clashed with the Ranger aspect *Beastmaster*. The id stays `beast-master`.
    - *Fly*: **Warlock only**; the Alchemist flies with the wonder elixir.
    - *It's not a sacrifice* (Medic): after an hour of care, each Body point the Medic exhausts restores one of the patient's exhausted Body points. No Scar healing (that's *Good Samaritan*).
    - *Field medic* (Medic): 1 Material per use. An action restores 1 exhausted Body point to an ally within touch; a bonus action and a *Healing the human body* skill check stabilise a dying ally at once.
    - **Scar-bonus perks** (*Fury*, *Behind blue eyes*, *Sticks and stones*, *For the king!*): only a Scar taken **to avert a failure** gives 3 points instead of 2. Blank payments (magic mode, Cruelly mighty) and DM-imposed Scars give nothing extra.
    - *Infiltration expertise* (Rogue): **25 silver**, about a month's wages. A Coins price on a perk is always in silver, and the app shows it as "Pay 25 silver".
    - *Scrappy* (Halfling) and *Garden of Eden* (Medic) give **proper** Material, not improvised.
    - **Spell fields tidied:** areas moved out of the range field (*Burning hands*, *Kenaz*), *Pied piper* priced per animal, *Salamander sigil* lasts until sunset or sunrise, and Material notes for the sigils, *Fireball* and *Fire shield* (5E's components).
    - *Fireball* (Warlock): a **4 m radius** (5E's 20 ft).
    - *Blessings and curses* (Incantor): lasts **until sunset or sunrise**, on every roll of the named kind; **one blessing or curse per target**, a new one replaces the old. The d4 bonus die is used once, as any bonus die.
    - **Ids cleaned:** 24 perks, the *Bard* background and the *Druidic* language had the Czech name in their id (`fury-cs-zbesilost` → `fury`); also `connosieur` → `connoisseur`, and the aspects `brute` → `hire-sword` and `enchanter` → `puppetmaster`. The admin editors now make a new id from the **English** name only.
    - **Aspect gating** *(in progress, 2026-11-11)*: assigned class by class. Each class keeps one or two perks ungated, so every build has something to pick at level 1. Michal is writing more perks for the thin classes (Rogue, Shaman, Scout, Mage, Alchemist).
      - **Warrior** *(confirmed)*: **Hire-Sword**: *Mountain that rides*, *Double trouble*, *Bastion*. **Knight**: *Rider*, *Herald*, *Well known*, *Defender of people*. **Monk**: *Parry*, *War dancer*, plus the unarmed perks still to write. **Ungated:** *Jockey*; *Legendary warrior* needs **Warrior 3**.
      - **Ranger** *(confirmed)*: **Barbarian**: *Berserk*, *Tough of body*, *Borders walker*. **Monster Slayer**: *Hunter instinct*, *Trophy hunter*, *Natural advantage*. **Beastmaster**: *Friend of all monsters*, *Pack leader*, *Animal doctor*. **Ungated:** *Make haste*, *Carpenter*, *Soon may the Wellerman come*.
    - **DrD2's narrative and sigil perks** *(2026-11-11)*, since most DrD2 perks only grant manoeuvres:
      - *Lay of the land* (Ranger, 1 Soul): *City guide* for the wild (a gorge, a stream, a thicket, a ford, a ruin). Ungated for now.
      - ~~*Animal tracks* (Shaman, 1 Soul)~~: dropped 2026-11-15 for the Hunter's *Fresh tracks*.
      - *Philtres* (Shaman): the *First one met* property for narcotics, +1 Material per strength.
      - **Sigils for every school**, priced like *Salamander sigil*: *Werewolf sigil* (Shaman, Animal magic; needs magic mode), *Vodyanoy sigil* (Druid, water), *Stone spirit sigil* (Druid, stone), *Leshy sigil* (Druid, plants).
      - *Voice of the dead*, *Dream runes*, *Nightmare sigil*, *Veil sigil*, *Soul base* (Shaman) and *Soultrap* (Zhrets): see [The spirit world](#magic).
    - **Advantage perks for the basic classes** *(2026-11-12)*: *Know your steel* (Fighter, Weapon knowledge), *Marksman* and *Light foot* (Hunter), *Learned*, *Comforter* and *Iron will* (Incantor), *Gutter wise*, *Smooth talker* and *Showman* (Juggler), *Tough as old boots* and *Apothecary* (Medic). Ritual items gets none: charging needs no roll unless rushed.
    - **Advantage perks for Warrior, Ranger, Witcher, Scout and Shaman** *(2026-11-12)*: *Anvil-born*, *Old campaigner* (Knight), *Captain* (Hire-Sword); *Beast-breaker* (Monster Slayer), *Monster lore* (knowledge and trophies), *Trailblazer* (Barbarian); *Silver for monsters* (Berserk), *Practised signs* (Hexer), *Old school* (Exorcist; knowledge and trophies); *Horse archer* and *Ringleader* (Outrider), *Cryptographer* (Ghost), *Friend of the guild* (Spymaster), *Fixer*; *Brewer of visions* (Herbalist), *Spiral walker* (Seer), *Beast mender* (the Shaman's ungated level-1 pick), *One of the pack* (Warg). The combat unlocks: *Up close* (Barbarian), *Crossbow and silver* (Hexer).
    - **Advantage perks for Rogue, Alchemist, Druid, Warlock and Mage** *(2026-11-12)*: *Spider* and *Second hand* (Thief), *Lockbreaker*, *Venom-touched* (Poisoner); *Philosopher*, *Powder monkey* (Mixer), *Distiller* (Transmuter), *Clay father* (Life Moulder); *Stone-sworn* (Stoneshaper), *River-born* (Tidecaller), *Green hand* (Wildheart); *Ember heart* (Battlemage), *Stormcaller*, *Raw power* (Paladin), *Warden* (Abjurer); *Master of mirrors* (Illusionist), *Honeyed mind* (Puppetmaster), *Summoner* (Conjurer). Every basic and advanced class now has an advantage perk for every skill, except the Incantor's *Ritual items*.
    - **The last sigils** *(2026-11-12)*: every school of every magic class now has one. *Melusine sigil* (Warlock, wind; ungated), *Perun's sigil* (evocation; Paladin), *Domovoi sigil* (abjuration; Abjurer: a ward cast through it covers everything inside, no Widespread), *Will-o'-wisp sigil* (Mage, illusion; Illusionist: illusions anywhere inside), *Fairy sigil* (enchantment; Puppetmaster), *Fiend sigil* (conjuration; Conjurer: what's conjured can appear inside, however far away the Mage is), *Algiz sign* (Witcher signs; Hexer; needs magic mode: sign traps at a distance). *Salamander sigil* now covers all Fire magic, like the Druid sigils. **The Alchemist gets no sigil:** its skills are crafting, not casting.
    - **Mage spells and perks** *(2026-11-12; from DrD2's mind and illusion magic, and 5E)*. The Mage had no core spells until now.
      - **Core spells:** *Illusion* (one illusion, one sense, up to a witch's hut, gone in moments, doesn't react; can also hide one sense of something; a suspicious onlooker rolls a challenge against the Mage level, testing it by hand settles it) and *Mind touch* (read and nudge feelings unnoticed; telepathy and visions the target knows come from outside; reading memory and borrowing senses the target senses; a willing target stays linked, a resisting one gives one answer per cast; no knocking out, killing, madness or control).
      - **Illusion spells** (5E): *Borrowed face* (1 Soul, ungated: face and voice until sunset or sunrise), *Fetch* (1 Soul: two copies take the next two hits), *Unnoticed* (2 Soul, concentration: Invisible to anyone not looking; the only lasting way to hide a living creature), *Marsh lights* (3 Soul, farmstead, concentration: the charmed follow the lights). All but Borrowed face need Illusionist.
      - **DrD2 perks:** *Many senses* (1 Soul per extra sense), *Phantasms* (1 Soul each: lasting until sunset or sunrise, reacting), *Army of phantoms* (free Widespread for identical illusions), all Illusionist; *Invisible puppeteer* (1 Charisma each: control until sunset or sunrise, senses and telepathy through a friend with a symbolic touch), *Soul eater* (1 Charisma each: a mind spell until sunset or sunrise like a strong blessing or curse, stealing or rewriting one memory), *Mass hysteria* (free Widespread against a crowd that formed on its own), all Puppetmaster.
      - *Wrong road* (5E's *Hallucinatory Terrain*) was dropped: Illusion with Phantasms already does it.
      - **Conjuration** *(confirmed, 2026-11-12)*: fiends, small elementals and plain matter. Spirits of the dead are necromancy and go to the Necromancer; so does real teleportation. Nothing extravagant: no Mage Hand.
        - **Summons:** companions of the Summon kind (right after the caster), ordinary stat blocks, Bond = the Material put in, up to the caster's Charisma pool; gone when it runs out. Unbound fiends are the DM's.
        - **Core spell *Conjure*:** palm-sized plain matter (no metal, worked, edible or valuable things) that crumbles at sunset or sunrise, Widespread to a hut; or a lesser fiend of the place for one simple act. Changes the Danger Level, can't kill.
        - **Spells:** *Wayfinder* (1 Material: a light to the nearest road or settlement), *Domovoi* (1 Material: a household imp until sunset or sunrise), *Fiend's grease* (1 Soul: Acrobatics or prone) are ungated. Conjurer: *Guardian spirit* (Material per Bond: an animal spirit guards until sunset or sunrise, fights as a wolf), *Through the veil* (2 Soul + Material per Bond: a spirit-world creature, one way), *Borrowed things* (2 Soul: a wood, rope, cloth or stone object up to human size), *Brimstone smoke* (1 Soul, farmstead), *Spider's lair* (2 Soul: Strength or Restrained); *Elemental servant* (Mage 3; 5E's mephits), *Recall* (Mage 3, 2 Soul + 1 per passenger: step out at your active sigil, which ends), *Bound to the place* (Mage 4, ritual: a fiend tied to a place until the solstice or equinox), *Both ways* (Mage 5, 2 Soul: send a spirit-world creature back, or a fiend's soul across), *Infernal calling* (Mage 5, ritual, 3 Material + the demon's payment: a lesser demon at Bond 3, like 5E's imp or quasit).
        - *Domovoi* (the spell) and the *Domovoi sigil* (Warlock) share the English name; in Czech they're *Šotek* and *Znak hospodáříčka*.
    - **Warlock Evocation and Abjuration** *(2026-11-12, added for now)*. Both schools get a core spell, as every school of the Druid and the Mage has.
      - **Evocation** (raw force, lightning, thunder; Paladin): core *Evoke* (a human's strength of force, 1d6 chip damage). *Thunderclap* (1 Soul, ungated: 2d6 within 2 m and a 3 m push), *Force stones* (1 Soul: 3 × 1d4, no defense, armour counts), *Perun's arrow* (2 Soul: a 12 m line, 4d6, metal armour defends with disadvantage), *Cracked bell* (2 Soul: 3d6 in a hut, a strength-3 hazard against things), *Perun's wrath* (Warlock 4, 3 Soul, concentration: 3d6 a round, only in a thunderstorm).
      - **Abjuration** (wards, breaking magic; Abjurer): core *Ward* (a resistance bonus 1 against one named harm, one per target; or a warded threshold lesser fiends can't cross). *Shield* (1 Soul, ungated, reaction: armour rating +2 against one hit), *Counterspell* (1 Soul: counter a spell at anyone in sight, Precise), *Break the spell* (1 Soul per point in the spell: any school, without its skill; still needs range, resources and knowing the spell), *Sanctuary* (1 Soul: attackers must win a challenge first), *Circle of salt* (2 Material, ritual: fiends, undead and spirit-world creatures kept out until sunset or sunrise), *Stone skin* (Warlock 3, 2 Soul + 2 Material: rating 3, no encumbrance), *Hidden from sight* (Warlock 3, 3 Material, ritual: seeking magic needs a won challenge, until the solstice or equinox).
      - **Prices can't be variable** in the database (amount and resource are both set or both empty), so *Break the spell* is priced per point.
    - **Incantor spells** *(2026-11-12)*: very basic on purpose, since every awakened caster goes through Incantor. Free: *Witchlight* (a torch-bright cold light in the palm, concentration), *Hedge tricks* (5E's Prestidigitation), *Mending* (small breaks, not item scars), *Whisper* (5E's Message, sound only). 1 Soul: *Soothing word* (ends natural fear, panic or rage; a new defense roll against magical fear or charm), *Last rites* (stabilises Soul or Charisma dying on a Healing of the soul check). 1 Material: *Identify* (what a magic item or substance does and how strong), *Omen* (5E's Augury: good, bad, both or nothing clear). *Familiar* (Incantor 2) and the perk *Steady mind*.
    - *Read the tongue* (5E's Comprehend Languages; 1 Soul, concentration) went to the **Mage**, ungated.
    - **Druid spells** *(2026-11-12)*: fixed effects on top of the bending core spells. Gates follow the advantage perks.
      - **Water** (Tidecaller): *Purify* (free, ungated: rot and sickness, not crafted poisons), *Vodyanoy's breath* (1 Soul, ungated: breathe water until sunset or sunrise), *Walking the water* (2 Soul), *Drowner's grip* (2 Soul, concentration: Restrained under water, 1 Body to attempt anything).
      - **Stone** (Stoneshaper): *Sling stones* (1 Soul, ungated: 1d6 + Druid level), *Shape stone* (2 Soul: a door's worth, lasting), *Into the rock* (2 Soul: 5E's Meld into Stone), *Stone thorns* (2 Soul, concentration: half-speed ground, d4 threat die or 2d4), *Stone rampart* (Druid 3, 3 Soul: a brick wall 5 × 2 m until sunset or sunrise).
      - **Plants** (Wildheart): *Thorn whip* (1 Soul, ungated: 1d6 and a 3 m pull), *Good berries* (1 Material, ungated: Druid level berries, each a day's food and 1 exhausted Body back), *Bramble snare* (1 Soul, concentration: Strength or Restrained), *Barkskin* (1 Soul, concentration: rating 2), *Without a trace* (2 Soul: no tracks, Precise sneaking in the wild).
      - *Tree Stride* was left out: teleportation is the Necromancer's.
    - **Alchemist perks** *(2026-11-12)*: Mixer: *Grenadier* (thrown charges 8 / 24 m, a throw can be a bonus action), *On a word* (+1 Material per strength). Transmuter: *Fool's gold* (1 Material per 10 coins: base coins pass as silver until sunset or sunrise). Life Moulder: *Second shem* (two artificial beings at once), *Homunculus* (2 Material per Bond: a rat-sized spy you see and hear through), *Clay mender* (1 Material per 5 Body). Drafted and not taken: *Field laboratory*, *Prima materia*, *Sapper*, *Aqua regia*, *Strengthened elixir*, *Rapid dose*.
    - **Rogue perks from 5E** *(in the database, 2026-11-14)*. Goal for every class: about everything a 5E character gains by levelling, our characters can do through skills or perks.
      - **Ungated:** *Sneak attack* (when the situation gives a free Precise on an attack, an ally is within 1 m of the target, or you're alone with it, take a **free Mighty** instead: 5E's Sneak Attack triggers on advantage, which our one-manoeuvre limit would otherwise waste), *Slip away* (Dash, Disengage or hide as a bonus action), *Stroke of luck* (Rogue 4: once a day, a lost roll becomes a win, like Fate).
      - **Thief:** *Fast hands* (reworked: a bonus action only matters in big fights, so instead your **Cunning** in close combat can also **take an item** from the target's hand or belt: a weapon, a key, a vial), *Uncanny dodge* (once a round, averting a hit you can see costs 2 less, minimum 1), *Evasion* (averting a lost roll against an area costs half the Danger Level, rounded up), *Thief's reflexes* (Rogue 4: act twice in a fight's first round).
      - **Assassin:** *Assassinate* (free **Very mighty** against a target that **hasn't acted yet or is unaware of you**), *Dirty tricks* (Cunning can also blind the target or make it **Imprecise** on its attacks, until the end of its next turn; Slow was dropped, since initiative is rolled once), *Hit and run* (whoever you attacked in melee gets no free attack when you move away), *Elusive* (Rogue 4: nobody gets Precise against you unless you're incapacitated).
      - **Poisoner:** *Quick coat* (coat a blade as a bonus action; it lasts 3 hits), *Potent* (your poisons ignore resistance to poison).
      - **Thieves' cant is a language** *(confirmed)*, not a perk or a skill: knowing it is yes or no, not a roll. It goes in the languages table; Criminal and Urchin can take it as their extra language, and Scout's *Underground influence* is where it gets used.
      - **Left out:** *Reliable Talent* (advantage perks and no-roll crafting), *Steady Aim* (Hunter's *Marksman*), *Slippery Mind* (Incantor's *Iron will*), *Use Magic Device* (few magic items), *Death Strike* (a cruel manoeuvre: the Shadow), the magic subclasses (Rogue has no magic); *Inquisitive*, *Mastermind* and *Scout* go to our Scout class.
    - *Marks of corruption* (Incantor, **Michal's**, 2026-11-14): a **level-2 Charisma Scar** (blank payment) that shows: glowing tattoos, a wrongly shaped shadow, unnatural eyes or hair, a reflection that doesn't match, plants wilting nearby. While it lasts, either **one spell** of any of the character's classes with an activation price in Body, Soul or Charisma is free (chosen when the Scar is taken, never changed; Material is still spent), or **one corrupted or wild magic spell** can be taken as a perk, working only while the Scar lasts. Stackable, one effect per Scar. It heals normally, but the effect ends once any part of it is healed. *Still to write:* the corrupted and wild magic spells.
    - **Monk perks** *(Warrior, in the database, 2026-11-14; from 5E's Monk)*. They replace the removed *Monastic school*.
      - *Empty hand*: unarmed strikes against humans and beasts roll with the **Warrior level** and deal d6 (Warrior 1–2), d8 (3–4), d10 (5) + Warrior level; doesn't stack with *Rock fist*. *Flurry of blows*: a second unarmed strike as a bonus action. *Step of the wind*: dash or disengage as a bonus action, jumps twice as far. *Arrow catcher*: averting an arrow, bolt or thrown weapon with Body costs 1 less and you catch it, to throw back as a bonus action. *Slow fall*: **with no armour**, a fall's strength drops by the Warrior level. *Inner breath*: once a day, 10 minutes restore **1** exhausted Body point. *Drunken master*: after a drink, a won defense roll in close combat sends the hit into someone else within 1 m, undefended. *Stunning strike* (Warrior 3): an unarmed Cunning can Stun until the start of your next turn; Fate shakes it off. *Still mind* (Warrior 3): end Charmed or Frightened as an action. *Light as a leaf* (Warrior 4): with no armour, +1 m speed, run up walls and across water during a move.
      - **Scrapped:** *Unarmoured defence* (armour rating without encumbrance was too strong).
      - **Left out from 5E:** the magic subclasses (Shadow, Four Elements, Sun Soul, Astral Self), *Quivering Palm* (cruel: a mighty class), *Kensei* (*Weapon of choice*), *Mercy* (Medic), *Extra Attack* (*Flurry of blows*), focus points (the pools), *Diamond Soul*, *Evasion* (the Rogue's; a perk can't sit behind two aspects).
    - *Reinforcements* (**Warlord**, **Michal's**, in the database, 2026-11-14; the first mighty class perk): arriving at a battle already under way, the Warlord spends their action for two rounds on a rallying speech; the units can move but not attack. Each unit then gets a free **Mighty** on its **first round of actual combat** (the first round it attacks or is attacked), since marching to the enemy can take several rounds.
    - **Training and Tradecraft** *(in the database, 2026-11-14; both ungated; Training is Michal's)*: a companion, unit or network you lead learns one of **your** class skills, +1 per step, priced like raising Bond (a successful roll and 5 payments per +1; units ×5 per size step). Cap: your Charisma pool, and no higher than your own level in that class.
      - **Training** (Warrior; roll *Combat leadership*): combat companions, units of infantry, heavy cavalry and sappers, and noble societies (networks specialised in high society).
      - **Tradecraft** (Scout; roll *Leading people outside combat*): non-combat companions, light cavalry, scouts and supply units, spy and underworld networks.
    - **Scout perks** *(2026-11-14; first drafted 2026-11-12, then checked against 5E's Mastermind, Inquisitive and Scout subclasses)*.
      - **In the database:** *Listener* (Ghost: lip-reading as far as you see faces, which **nobody else can do**, and hearing through a door or thin wall), *Mimic* (Ghost: after a minute of listening, a voice, accent or dialect **passes by default**; without the perk, every exchange with someone who knows the original is a challenge; only within a reasonable range for your voice), *Turncoat* (Spymaster, 1 Charisma: a won Underground influence challenge turns a captured spy or informant into a companion at Bond 1, still reporting to the old master what you feed them), *Unerring eye* (Spymaster, 1 Soul: sense illusions, magical disguises and shapechangers within 10 m), *Closed book* (Spymaster, Scout 4: mind magic must win a challenge to read you; no magic can tell your lies). *Inside job* (Spymaster, **25 silver**, **Michal's**, after Dishonored's favours: for a **specific planned destination**, arranged at least a day ahead through the underworld, an infiltration opportunity waits there; the DM picks it and tells the player on payment: a bribed servant, blackmail on a guard, a saboteur, a forged invitation. One per destination; spent once the alarm goes up).
      - **Taken (2026-11-14, second round):**
        - *Ungated:* *Smuggler's hold* (a chest-sized hidden space in any ship or cart you load; finding it takes a won challenge against your Scout level), *Weather eye* (at sea or in the open, the DM rolls tomorrow's weather tonight and tells you).
        - *Ghost:* *Ambush master* (5E: free Quick when your side ambushes; allies' attacks are Precise against the first enemy you hit, until your next turn), *Nobody's face* (people who met you can't describe you unless they win a challenge against your Scout level), *Cold trail* (tracking you and your whole party is disadvantaged by default; without it, a party gets that only by covering its trail on purpose).
        - *Outrider:* *Saddle-born* (mounting and dismounting free during the move; falls from a horse never hurt), *Master of tactics* (5E: bonus action, an ally within 10 m gets a free Precise on their next roll against a target you see), *Courier* (the Scout alone, on one horse: what others need a spare horse for, a second hour of gallop and no slow day after).
        - *Spymaster* (**Michal's**): *Nose for secrets* (2 Charisma: the DM says truthfully whether there's any dirt to find on an NPC), *Little birdies* (in a place of 40+ people, a day sets up an improvised network: one task at +1, Bond 0, 1 payment; it disbands when you leave unless you build it into a proper network).
      - **Not taken:** *Ghost's tread*, *Face in the crowd*, *Dead drop*, *Outrider's eye*, *Parthian shot*, *Rally the column*, *Skirmisher*, *Smoke and mirrors*, *Raider*, *Web of whispers*, *Leverage* (*Nose for secrets* covers it), *Misdirection*, *Whisper campaign*, *Spin doctor*.
      - **Dropped:** *Cover identity* (the Rogue's *Infiltration expertise* already does it). **Left out from 5E:** *Superior Mobility*, *Sudden Strike* (Hunter's *Double shot*), *Survivalist*, *Eye for Detail*, *Ear for Deceit* (advantage perks), *Insightful Fighting*.
    - **Filling the thin aspects** *(2026-11-14)*. Goal: every aspect has at least 4 perks. Counted before: Witcher's Berserk and Exorcist 1 each, Warlock's Battlemage 1, Alchemist's Transmuter 2, Shaman's Herbalist 2, Scout's Outrider 2 (its drafts are above), Ranger's Beastmaster 3, Witcher's Hexer 3, Alchemist's Mixer 3.
      - **In the database** (Witcher perks are Michal's; the Alchemist and Herbalist ones were picked from new ideas):
        - *Witcher, Berserk:* *Whirlwind* (2 Body, sword only: a pirouette as your action; everyone within 1 m, friend or foe, defends or takes your weapon's damage, and so does anyone moving next to you until your next turn; a free Defense against close combat meanwhile; ends at your next turn or when you take a Scar; creatures immune to your attack skip the roll and ignore the free Defense), *Blood rush* (a Body Scar from a monster, fiend or undead gives a free Mighty against that one creature until the end of the conflict), *Mutagen collector* (taking a monster's trophy also gives 1d4 proper Material, on top of the main trophy: what the character came for, a griffin's beak or its head).
        - *Witcher, Exorcist:* *Witcher oils* (contact poisons, rolled with *Witcher knowledge*, that work only on monsters, fiends and undead, bloodless ones too; the usual substance rules), *Ghostly fireworks* (a silver petard, an explosive rolled with *Witcher knowledge*, that damages only incorporeal beings), *Cursebreaker* (1 Soul, touch: lifts a simple curse or blessing without knowing it; on a complex one, the DM gives one lead), *Dagaz sign* (2 Soul: banish a lesser fiend or a spirit-world creature to its realm; defense roll, Fate as usual).
        - *Witcher, Hexer:* *Eihwaz sign* (1 Material per strength, carved runestones: a hazard trap; the first monster, fiend or undead in it defends or is Restrained for strength rounds).
        - *Warlock, Battlemage:* *Flame blade* (1 Soul, until the end of combat: +1d6 fire, lights what burns), *Gale step* (1 Soul, a bonus action: 6 m by gust, no free attacks), *Spellblade* (after casting a spell as your action, one weapon attack as a bonus action), *Dragon's breath* (Fire bending deals 2d6 and sets people alight, a lasting flame), *Playing with fire* (resistance to fire).
        - *Ranger, Beastmaster:* *Loyal to the end* (animal and monster companions avert at 1 Bond less, minimum 1).
        - *Shaman, Herbalist:* *Dreamless sleep* (1 Material per sleeper, up to the Shaman level: a quality rest anywhere; a night encounter still breaks it).
        - *Alchemist, Transmuter:* *Silvering* (10 Material: a weapon or ten arrows, until the next solstice or equinox; a smith's 50 sp lasts), *Solve et coagula* (a broken item or a spare trophy rendered into proper Material, a third of its price), *Tempering oil* (2 Material per piece: +1 Protection, no extra Burden, until sunset or sunrise).
        - *Alchemist, Mixer:* *Singed eyebrows* (your own charges, corrosives and gases never hurt you; resistance to fire), *Sapper's fuse* (a fuse exact to the minute, up to an hour, or a tripwire, lid or door trigger without *Mechanisms*; no extra Material).
        - *Shaman, Herbalist:* *Nose for poison* (1 Soul: smelling it, you know for certain whether a poison or narcotic is there and which, Hard to detect ones too; no roll).
      - **Drafted, not convinced yet:** *Not today* (Witcher: Body dying rolls succeed on 8+), *Cursed wounds* (Witcher: Scars from monsters and curses heal at 3 points per level), *Strengthened elixir*, *Shared dose* (+1 Material, one elixir for two), *Rust and rot* (1 Material, breaks a small thing up to sturdiness 10) for the Transmuter; *Shaped charge* (tamped charges +3 dice) for the Mixer; *Smoke of the ancestors* (narcotic incense for a closed room) for the Herbalist.
      - **Fuses by default:** a plain fuse costs nothing and burns for a few rounds, give or take, as the DM says. Only *On a word* (a property, +1 Material per strength) and *Sapper's fuse* make the timing exact.
      - **Ideas not taken:** *Changeling draught*, *Quick mix*, *Bitter cure*.
      - **Tidecaller and Poisoner** *(2026-11-14; both had 3 perks)*:
        - **In the database:** *Fog bank* (Druid, 1 Soul, concentration: fog over a farmstead, nothing seen beyond 2 m, navigating disadvantaged), *Scalding steam* (Druid, 1 Soul: water within 2 m of a target flashes to steam, 2d6 fire on a lost defense roll), *Rain-caller* (Druid 3, 3 Material, a ritual at sunset: **tomorrow's** weather over a **region** is rain, snow in winter, or fair, the Druid's choice; no roll), *Mithridate* (Rogue: resistance to poison), *Poisoned well* (Rogue, +1 Material per strength: one dose taints a pot or a barrel).
        - **Rain-caller sets the weather outright** rather than moving it "one row", because the weather table isn't ordered from fair to foul (11–12 hold heat, floods, first snow and bitter cold). Reordering the table stays an option.
        - **Not taken:** *Lasting ice*, *Undertow* (Druid); *Slow death*, *Venom milker* (Rogue). Gating the ungated water perks behind Tidecaller wasn't chosen.
        - **Poisoner, not only poisons:** *Coroner* (in the database, 3 Soul per body: no roll, where a plain *Healing the human body* check only says roughly wound, sickness or poison; you learn the exact poison and strength or weapon, when and how it got in, what was staged, and whether two victims share a poison or a killer). *Not taken:* *Trusted hands*, *Slip of the hand*.
      - *Whirlwind* for the Warrior (in the database, Hire-Sword, id `warrior-whirlwind`): the same perk, but with a **finesse** weapon instead of a sword.
    - **Magic schools differ from DrD2 on purpose:** our magic classes merge DrD2's vague magic with 5E's spells, so they have more, narrower schools (Warlock's Evocation and Abjuration; Mage's Illusion, Enchantment and Conjuration in place of DrD2's mind magic and initiated society).
    - *Sniper* (Hunter) *(changed 2026-11-12)*: no disadvantage at long range; where it makes sense, shoot at a target that can't be seen at all (a high arc over a wall); free Mighty against an unaware target. The plain advantage moved to *Marksman*.
    - *Monastic school* (Warrior): **removed**. It was "unarmed: Warrior level × d6", which made fists the best weapon. Unarmed fighting comes back as several perks under the **Monk** aspect. Options discussed: an unarmed die growing with Warrior level (d6 at 1–2, d8 at 3–4, d10 at 5, plus the Fighter level), and fists counting as a proper weapon with a free manoeuvre.
  - *Berserk* (Ranger perk) and *Poisoner* (Medic perk) share their names with the Witcher and Rogue aspects; their ids are `ranger-berserk` and `medic-poisoner`.
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
- **Perk archetypes** *(confirmed, 2026-11-12)*: every class should have these, besides its own flavour perks.
  - **Advantage ("boring") perks** covering **all** the class's skills, unique and non-unique, so every build has the basic option.
  - **A sigil for every school of magic** the class has, for casting at a distance.
  - **A mastery perk at class level 5** for strong manoeuvres, in every basic and advanced class.
  - **Trophies** get no advantage perk of their own: the Ranger's and Witcher's knowledge perks cover them.
  - **Skill fixes** *(2026-11-12, against DrD2's lists)*: Witcher close combat is Body (it was Soul, with a knowledge description); Warrior's *High society influence* is Charisma; Ranger and Witcher knowledge lose the intimidation line (that's Fighter's).
  - **Shared skills:** *Dealing with supernatural beings* gets **one perk for all three** classes that have it (*Old pacts*: Incantor, Ranger, Witcher). Fighter's and Warrior's knowledge are different skills, each with its own perk: Fighter's ***Weapon knowledge*** (renamed from *Warrior knowledge*, 2026-11-12) is weapons and fighting; Warrior's ***Warrior knowledge*** is tactics, how arms and armour are made, and leading soldiers.
  - **In the app:** perks carry an `archetype` (advantage, sigil, mastery) for tracking gaps. The cards no longer show it (removed 2026-11-14).
- **Spells are perks** *(confirmed)*: every non-core spell takes one of the class's perk slots, on purpose, so casters get no more abilities than anyone else.
- **Spells** add components, damage, damage type, range, area of effect and duration.
  - **Components:** Verbal, Somatic, Material and/or Ritual (see *Components* under Magic).
  - **Durations:** instantaneous; until concentration breaks; until the end of combat; *short* (until the next sunset or sunrise); *long* (until the next solstice or equinox); *will* (until dismissed).
  - **Schools of magic** (old data): Arcane, Divine, Eldritch. Unused for now.
- Perks can require an **aspect** of an advanced class (see [Aspects](#aspects)). This matches the database's `has_aspect` requirement.

## Backgrounds

> **Status: being redesigned (2026-11-16).** Michal isn't happy with the background system or with how characters get their equipment. **All backgrounds and all items except weapons, armour, shields, ammunition (arrows, bolts, sling bullets, quiver) and the mantlets were deleted** from the database; the rows are kept in the `backup` schema (`backup.backgrounds_20261116`, `backup.items_20261116`; drop it once the new system is settled). What follows the redesign below describes the deleted draft, kept for reference.

### The redesign *(agreed so far, 2026-11-16; from DrD2's starting equipment)*

- **Why:** the old backgrounds gave no reason to build unusual combinations, and filled the inventory with clutter (the urchin's pet mouse). Their strength, an archetype to work from, stays.
- **Three sections,** and in each the player says how fortunate the character has been: **poor, commoner or fortunate.**
  1. **Arms and armour.** The same for every background. Swords and medium armour only when fortunate.
  2. **The background.** Each background has three variants. Gear, kits, **coins and Material** come from here.
  3. **A mount.** Poor: none. Commoner: a riding horse with tack. Fortunate: a warhorse with tack.
- **The starting level sets the fortunes,** in whichever sections the player likes:

  | Start | Fortunes |
  |---|---|
  | Rags to Riches (3) | Commoner, commoner, poor |
  | Seasoned (7) | Fortunate, commoner, poor |
  | Veteran (9) | Fortunate, commoner, commoner |

  The value of a horse or a sword isn't balanced against anything; what balances it is what the player gives up. A rider who spends their fortune on a warhorse isn't fortunate in arms.
- **Only gear that serves play:** kits, tools, rope, light. No keepsakes or pets as items.
- **A minimal gear list, DrD2 style:** one kind of each thing (one rope, one blanket, one lantern; dice and loaded dice).
- **Clothes are free text** on the sheet, with placeholder suggestions (capes, cloaks, hoods, tunics, boots, belts, bags…), not items.
- **Jumpstart archetypes:** each background has a **d8 table** of ready-made archetypes, each with its recommended picks in small type ("Recommended: crossbow and pavise"). The player can copy one into personality and backstory, or write their own.
- **One known setting** per background stays, but **with no flat bonus** *(confirmed, 2026-11-16)*: it's what the character knows. When it makes sense, the player can ask the DM for a **temporary +1** on a roll inside it, and the DM decides.
- **Fewer backgrounds than 5E:** merge or drop the ones that would only bloat the list.
- **Every jumpstart table ends with a 9th line:** "Or make up your own, picking whatever you feel like."
- **Quirks, not traits:** the jumpstart personality bits are called **quirks**, since *traits* are already the challenge perks. Each background has a d8 table of them, plus the 9th line.

**Arms and armour** *(draft)*: the same for every background. A ranged weapon comes with its quiver and 20 pieces of ammunition.

| Fortune | Weapons | Armour |
|---|---|---|
| **Poor** | One weapon, no swords | A padded hood or a gambeson |
| **Commoner** | Two weapons, or a weapon and a shield; no swords | Light: Protection up to 3 |
| **Fortunate** | Two weapons, or a weapon and a shield; swords allowed | Up to medium: Protection up to 6 |

**The gear list** *(2026-11-16)*: one kind of each thing, in the item list: backpack, pouch, bedroll, blanket, tent, waterskin, rations, iron pot, tinderbox, torch, lantern, oil, rope, shovel, dice, loaded dice, rank insignia, playing cards, costume, steel mirror, and ten instruments (flute, drum, shawm, hunting horn, lyre; lute, fiddle, hurdy-gurdy, bagpipes, dulcimer); the healer's kit, writing things, the disguise kit, the merchant's kit and the craft tools (smith's, leatherworker's, tailor's, potter's, bowyer's, goldsmith's, carpenter's, mason's, surveyor's) the herbalism kit and cartographer's tools, cook's utensils, brewer's supplies, thieves' tools and the forgery kit as bundles, a book, silvering, a hunting trap, manacles, plus a whetstone and a crowbar. Weapons gained a **lance** (1d12, Reach; disadvantaged within 1 m, two-handed unless mounted) and a **pick** (1d8 piercing, also the pick for digging). Mounts are gear for now (`riding-horse`, `warhorse`, category `mount`); they may become companion stat blocks.

**In the app** *(2026-11-16)*:
- **Backgrounds** hold three `variants` (jsonb: `poor`, `commoner`, `fortunate`, each a `label`, equipment groups, `coins_copper` and `material`) and the jumpstart tables as text, one line per d8 result (`archetypes`: `Name | text | recommended`; `ideals`: `Name | text`). The ninth line is added when shown. The old `equipment`, `coins_copper` and `material` columns are gone.
- **Characters** store `fortunes` (`{ arms, background, mount }`), `arms_picks` (item ids) and `clothes`. The mount follows from its fortune. Saving turns arms picks (plus quiver and ammunition for ranged weapons), the variant's gear and the mount into inventory rows.
- **Items** have `min_fortune` (`poor` by default): swords (longsword, shortsword, greatsword, rapier, scimitar) and the warhorse need fortunate, the riding horse commoner. The hunting sword (tesák) counts as a knife, open to everyone.
- **The editor** checks the fortunes against the starting level, the arms against their limits (in hand, one shield, Protection, one piece per slot, the least fortune), and lets a jumpstart line be put into the backstory (archetypes) or the personality (the rest).
- **To confirm:** poor armour is checked as Protection 1 at most, so an iron cap or a leather jerkin also passes, not only a padded hood or a gambeson. The Czech word for fortune is drafted as *štěstí* (chudý, prostý, zámožný), and the Rulebook page now says *Původ* for background, as the app does.

#### First draft: Soldier

**Known setting:** armies and war camps, soldiers and their officers. **Languages:** no extra.

| Fortune | Gear | Coins | Material |
|---|---|---|---|
| **Poor** (a levy sent home, or a deserter) | Backpack, bedroll, waterskin, 3 days of rations, dice | 10 sp | 1 |
| **Commoner** (a veteran of a few campaigns) | As poor, plus blanket, tinderbox, rope, a healer's kit, rank insignia | 25 sp | 2 |
| **Fortunate** (a sergeant or an officer) | As commoner, plus a tent, a lantern and oil, writing things | 60 sp | 4 |

No map of the region: unmapped land can be the point of an adventure.

| d8 | Archetype | Recommended |
|---|---|---|
| 1 | **Infantryman.** Stood in the line and held it. | Commoner or fortunate arms: spear or sword, and a shield |
| 2 | **Archer.** Shot from behind the line at whatever came. | Fortunate arms: longbow or crossbow, medium armour |
| 3 | **Pavisier.** Crossbow and a planted pavise, at sieges and on walls. | Commoner arms: crossbow and pavise |
| 4 | **Scout.** Rode ahead and came back with news, or didn't. | Commoner mount, shortbow and a handaxe |
| 5 | **Man-at-arms.** Fought from the saddle in the charge. | Fortunate mount, commoner arms: lance and shield |
| 6 | **Sapper.** Dug mines under walls and countermines under theirs. | Commoner arms: pick, gambeson; fortunate background |
| 7 | **Barber-surgeon.** Sewed the others up behind the line. | Poor arms: a dagger; fortunate background |
| 8 | **Guard.** Kept the gate, walked the walls at night, and knows every face that comes through. | Commoner arms: spear and crossbow, iron cap |
| 9 | Or make up your own, picking whatever you feel like. | |

Each background also has d8 tables of **quirks, ideals, bonds and flaws** (5E's four, with quirks in place of personality traits), each ending with the 9th line. They're roleplay only, with no rules attached. Soldier:

| d8 | Quirk | Ideal | Bond | Flaw |
|---|---|---|---|---|
| 1 | Counts everyone's rations, yours included, and remembers who ate more | **Duty.** An order is an order, even when the one who gave it is dead | Carries a dead comrade's letter to his family, and hasn't found the courage to deliver it | Obeys anyone who sounds like an officer, even when they know better |
| 2 | Sleeps with a hand on their weapon, awake at the first snapped twig | **Comrades.** The banner means nothing; the one beside you means everything | Their old captain saved their life; whatever the captain asks, they'll do | Thunder, drums or a sudden shout, and they're back on the field, frozen or swinging |
| 3 | Calls everyone by rank, and makes one up for people who haven't got one | **Survival.** The brave are buried first; they mean to be buried last | The company scattered after a lost battle; they look for the faces in every tavern | Drinks to sleep, and the nights are getting longer |
| 4 | Tells the same war story at every fire, the enemy bigger each time | **Order.** War is chaos, and somebody has to keep the line straight | A village they burned on orders gets part of every pay, unsigned | Loots the dead without a thought, friends included |
| 5 | Can't rest until the camp is in order: a ditch dug, a watch set, boots by the fire | **Glory.** Songs are sung about the ones who charged first | Their sworn brother rides with the enemy now; they've promised to bring him back alive | Despises civilians and their soft lives, and it shows |
| 6 | Hums marching songs under their breath, louder the more scared they are | **Pay.** Fights for whoever pays, and holds to the deal as long as the pay lasts | The company's banner, torn from its pole, is wrapped at the bottom of their pack | Never backs down from a challenge, however stupid |
| 7 | Doesn't trust anyone who has never held a line, and says so | **Protection.** Soldiers exist so farmers don't have to be | The lord they served owes them a year's pay, and they mean to collect | Deserted once; if anyone finds out, the noose is waiting |
| 8 | Owes money in every camp they've served in, with dice in their pocket to win it back | **Atonement.** They did things in the war that can't be undone, but some can be made up for | A younger recruit they trained still writes, calling them their best teacher | Treats every problem as a siege: dig in, wait them out, starve them |
| 9 | Or make up your own, picking whatever you feel like | | | |

#### Entertainer *(draft, 2026-11-16; Czech Komediant)*

**Known setting:** fairs, taverns and travelling troupes; audiences and patrons. **Languages:** one extra (they travel).

| Fortune | Gear | Coins | Material |
|---|---|---|---|
| **Poor** (a street busker) | Pouch, a flute, drum or shawm, playing cards | 5 sp | 1 |
| **Commoner** (a player in a travelling troupe) | Backpack, bedroll, waterskin, a flute, drum, shawm, hunting horn or lyre, a costume, playing cards | 15 sp | 2 |
| **Fortunate** (a court minstrel, or a troupe's master) | Backpack, bedroll, blanket, waterskin, a lute, fiddle, hurdy-gurdy, bagpipes or dulcimer, a costume, a disguise kit, a steel mirror, playing cards, writing things | 40 sp | 3 |

No perfume or admirer's favour: they don't serve play. The costume and the disguise kit do (passing as someone else), and the horn is the herald's.

| d8 | Archetype | Recommended |
|---|---|---|
| 1 | **Minstrel.** Sang in taverns for a meal and a bed, and in better halls for silver. | Fortunate background: a lute or a fiddle; poor arms: a dagger |
| 2 | **Knife-thrower.** Juggled blades at fairs, then threw them at an apple on a volunteer's head. | Commoner arms: two daggers |
| 3 | **Tumbler.** Walked the rope over the market square and somersaulted for coins. | Poor arms: a club, no armour; commoner background |
| 4 | **Fool.** Wore the motley at a lord's court and said what nobody else dared. | Fortunate background; poor arms: a club |
| 5 | **Strolling player.** Toured the villages with a troupe and a cart, playing saints and devils. | Commoner mount, commoner background |
| 6 | **Prize fighter.** Fought anyone at the fair who paid a groschen to try, with fists or blunted swords. | Fortunate arms: a sword and a shield; poor background |
| 7 | **Fortune teller.** Read palms and cards at fairs, and told people what they wanted to hear. | Commoner background; poor arms: a dagger |
| 8 | **Herald.** Rode before a lord, blew the horn and cried his name at tournaments. | Commoner mount, commoner background: a horn; poor arms: a dagger |
| 9 | Or make up your own, picking whatever you feel like. | |

| d8 | Quirk | Ideal | Bond | Flaw |
|---|---|---|---|---|
| 1 | Turns every story into a performance, with voices for everyone in it | **Beauty.** A good song outlives the king it's about | Their old teacher's instrument, cracked and unplayable, is the one thing they'd save from a fire | Can't resist an audience, even when they should be hiding |
| 2 | Can't pass a crowd without guessing how much it would pay | **Freedom.** No lord, no guild, no walls; the road is home | The troupe they grew up in broke up over a debt; they mean to bring it back together | Spends a night's takings before the night is over |
| 3 | Sizes up every room as a stage: where the light falls, where the exits are | **Truth.** The fool is the only one allowed to tell the king he's wrong, and somebody has to | A lady at court once paid their way out of the stocks; they've sworn to sing at her wedding, whoever she marries | Lies when the truth would do, because the lie is a better story |
| 4 | Bows after anything they do well, even with nobody watching | **Fame.** They'll be singing about you in a hundred years, or what was it all for | They wrote a song mocking a powerful man; it's sung everywhere now, and he hasn't forgotten who wrote it | Falls in love in every town, and promises to stay |
| 5 | Hums the tune of whatever they're doing, and makes up the words | **Joy.** Life is hard; an hour of laughter is worth more than bread | They're searching for the last verse of a song nobody sings any more | Can't take criticism; a heckler becomes an enemy for life |
| 6 | Speaks in rhyme when nervous, and doesn't notice | **Troupe.** The players are family, and family shares the last crust | A child from the audience followed them for a season; they still wonder whether they should have sent her home | Mocks the powerful to their face, and calls it art |
| 7 | Remembers every audience that didn't laugh, town by town | **Coin.** Art is lovely, but the audience pays, so the audience decides | Their rival from the fair circuit is the only one as good as they are; one day they'll settle it | Lifts a little from every audience, just to keep their hands quick |
| 8 | Never eats before a show, and treats every conversation as one | **Memory.** The old songs remember what the chronicles forgot | Their song is the only record of a massacre the lord wants forgotten | Drinks before every show for courage, and after every show to forget it |
| 9 | Or make up your own, picking whatever you feel like | | | |

**The Artisan split** *(2026-11-16)* into the **Craftsman** and the **Builder** (both below); the brewer and the cook went to the **Servant**.

#### Craftsman *(draft, 2026-11-16; Czech Řemeslník)*

**Known setting:** guilds, workshops and markets; masters, journeymen and the people who buy from them. **Languages:** no extra. **What sets it apart:** Material, the raw stock for crafting and repairs.

| Fortune | Gear | Coins | Material |
|---|---|---|---|
| **Poor** (a journeyman on the road, *vandr*) | Backpack, bedroll, waterskin, one craft's tools: smith's, leatherworker's, tailor's, potter's or bowyer's | 5 sp | 2 |
| **Commoner** (a village craftsman, or a hand in a town workshop) | As poor, plus blanket, tinderbox, whetstone | 15 sp | 4 |
| **Fortunate** (a guild master) | As commoner, plus a lantern and oil, writing things, a merchant's kit; the tools can also be a goldsmith's | 40 sp | 6 |

- **Bundles:** smith's (hammer, tongs, file), leatherworker's (knife, awl, needle and thread, last), tailor's (shears, needle and thread, fabric scraps), potter's (ribs, cutting wire), bowyer's (drawknife, bowstring wax, fletching feathers), goldsmith's (files, saw, tweezers, touchstone). The tailor's and the bowyer's are new; the weaver's hand loom was too bulky.
- **No guild letter:** membership is part of the known setting, not an item.

| d8 | Archetype | Recommended |
|---|---|---|
| 1 | **Village smith.** Shod horses and mended ploughs, and was the first one called when wolves came. | Commoner background: smith's tools; poor arms: a light hammer |
| 2 | **Armourer.** Hammered out mail and plate for men who paid well and died anyway. | Fortunate background: smith's tools; commoner arms: armour of their own making |
| 3 | **Locksmith.** Made the town's locks, and knows exactly how they open. | Commoner background: smith's tools; poor arms: a dagger |
| 4 | **Journeyman.** Wandered from town to town, learning under one master after another. | Poor background; commoner arms: a quarterstaff and a gambeson |
| 5 | **Saddler.** Made harness and saddles for a lord's stable. | Commoner background: leatherworker's tools; commoner mount |
| 6 | **Goldsmith.** Weighed gold and set stones for burghers who never trusted the scales. | Fortunate background: goldsmith's tools; poor arms: a dagger |
| 7 | **Bowyer.** Made bows and arrows, and can tell a good yew stave from across the yard. | Commoner background: bowyer's tools; commoner arms: a longbow |
| 8 | **Tailor.** Knows cloth, fashion, and who in town wears what they can't afford. | Commoner background: tailor's tools; poor arms: a dagger |
| 9 | Or make up your own, picking whatever you feel like. | |

| d8 | Quirk | Ideal | Bond | Flaw |
|---|---|---|---|---|
| 1 | Picks up every tool they pass and judges the maker | **Craft.** A thing worth making is worth making right | Their master's mark is stamped on their first piece; they'd die before selling it | Can't leave someone else's bad work alone, even mid-fight |
| 2 | Knocks on walls, tugs at straps, taps blades: has to know what things are made of | **Guild.** The guild feeds its own, and its own keep its rules | Their guild expelled them over a quarrel; they mean to be taken back | Overprices everything, friends included |
| 3 | Keeps their hands busy at every rest, whittling, mending, stitching | **Honesty.** Short weight and bad iron are theft, whoever does it | A customer died because of a piece they made badly; nobody knows it was theirs | Despises anyone who works with their mouth instead of their hands |
| 4 | Sizes people up by their boots and buckles | **Independence.** A master answers to no lord, only to their work | They owe a moneylender for their tools, and he knows where they live | Won't take orders from someone who couldn't do the job themselves |
| 5 | Tells everyone how it should have been made | **Legacy.** Their work should outlast them by a hundred years | Somewhere there's a masterpiece of their old master's that went missing; they'll find it | Keeps every trade secret, even when sharing it would save lives |
| 6 | Counts the Material in everyone's pack, and their own twice | **Progress.** There's always a better way to do it, and they mean to find it | Their apprentice ran away to the war; they've heard the boy is still alive | Drinks away the money for raw stock, then works twice as hard to make up for it |
| 7 | Carries a sample of their best work and shows it to strangers | **Fair trade.** A fair price for fair work, no more and no less | A rival workshop burned theirs down; they can't prove it | Swears by a single method and refuses to try anything else |
| 8 | Burns, scars and missing fingertips, and a story for each | **Usefulness.** A thing is beautiful if it works | The town they grew up in still uses the bridge irons they forged at fifteen | Says yes to every commission, and finishes half of them |
| 9 | Or make up your own, picking whatever you feel like | | | |

#### Builder *(draft, 2026-11-16; Czech Stavitel)*

**Known setting:** how buildings, mines and bridges are put together, **anywhere**; building sites, masons' lodges and their crews. Unlike other settings, the first half travels: it covers any wall, tunnel or bridge the party meets (a weak section, a hidden passage). **Languages:** no extra. Its Material is timber and stone, e.g. for shoring (1 per metre).

| Fortune | Gear | Coins | Material |
|---|---|---|---|
| **Poor** (a day labourer on a building site) | Backpack, bedroll, waterskin, shovel, rope | 5 sp | 2 |
| **Commoner** (a journeyman of the lodge) | As poor, plus carpenter's or mason's tools, a crowbar, a tinderbox, a lantern and oil | 15 sp | 4 |
| **Fortunate** (a master builder) | As commoner, plus a blanket, writing things, surveyor's tools | 40 sp | 6 |

- **Bundles:** carpenter's (saw, plane, chisels, auger, claw hammer), mason's (mason's hammer, chisels, trowel, square), surveyor's (new: a knotted measuring cord, a plumb line, a water level).
- **The pick stays one item,** a weapon taken through arms; it digs too. The background gives no weapons.
- **The Soldier's sapper and the Builder's miner** overlap on purpose: the same skills, learned in war or in a mine.

| d8 | Archetype | Recommended |
|---|---|---|
| 1 | **Mason.** Cut stone for a cathedral that won't be finished in their lifetime. | Commoner background: mason's tools; poor arms: a light hammer |
| 2 | **Carpenter.** Raised roof trusses and siege towers alike, whoever was paying. | Commoner background: carpenter's tools; commoner arms: a handaxe and a gambeson |
| 3 | **Miner.** Followed the silver veins deep under a mining town, where the air goes bad. | Commoner background; commoner arms: a pick and an iron cap |
| 4 | **Roofer.** Worked on rooftops in all weather, and never fell. Never once. | Poor background; poor arms: a sickle |
| 5 | **Millwright.** Built mills and their gears, and knows water, wheels and every trick a miller has. | Fortunate background; poor arms: a dagger |
| 6 | **Well-digger.** Dug wells for a living, and once found something else at the bottom. | Poor background; poor arms: a club |
| 7 | **Bridge-builder.** Threw bridges over rivers for the lords who'd collect the tolls, and knows how a bridge falls. | Fortunate background; commoner mount |
| 8 | **Master builder.** Drew the plans for a lord's castle, and knows every weakness hidden in it. | Fortunate background; commoner mount; poor arms: a dagger |
| 9 | Or make up your own, picking whatever you feel like. | |

| d8 | Quirk | Ideal | Bond | Flaw |
|---|---|---|---|---|
| 1 | Pats every wall they pass, as if it were a horse | **Permanence.** Kings die; a good wall stands for five hundred years | Their mason's mark is cut into a cathedral pillar; one day they'll show it to their children | Can't walk past a badly built wall without saying so, loudly |
| 2 | Counts steps, measures rooms by eye, and is never wrong by more than a hand | **The lodge.** Lodge brothers help each other, in any town, no questions asked | The lodge's secrets were entrusted to them; others would kill to learn them | Won't go anywhere that hasn't been shored, shored again and checked |
| 3 | Sleeps badly anywhere with a crack in the ceiling | **Craft.** Measure twice, cut once, and never skimp on the foundations | A tunnel collapsed on their crew; they were the only one who got out | Overestimates every job: it takes twice as long and costs twice as much |
| 4 | Whistles in the dark: an old miners' trick, to hear how far the walls are | **Safety.** Nobody dies on their site, and they'll fight anyone who cuts corners | They built a lord's secret passage, and the lord would rather it were forgotten, along with them | Takes money from both sides of a siege, if both sides need a builder |
| 5 | Has an opinion on every castle they see, and will share it | **Ambition.** One day their name will be on something people come from far away to see | Their old master is in debtors' prison over a building that fell; they know it wasn't his fault | Superstitious about mines: whistling, women and the knockers in the walls |
| 6 | Collects odd stones and keeps the best one in their pocket | **Usefulness.** A bridge is worth more than a hundred knights | The mine where they grew up is flooded; their family's still down there | Drinks with the crew every night, and the crew always drinks more |
| 7 | Wakes before dawn every day, ready for the site | **Order.** Every stone in its place, every worker at their task | A village depends on the mill they built; they go back every spring to check it | Thinks anyone who can't use a trowel is soft |
| 8 | Draws plans in the dirt with a stick to explain anything | **Freedom.** A lodge brother answers to the lodge, not to the lord | Somewhere there's a church they left half-built when the money ran out; they mean to finish it | Builds a way out into everything they make, and doesn't tell the client |
| 9 | Or make up your own, picking whatever you feel like | | | |

#### Hermit *(draft, 2026-11-16; Czech Poustevník)*

**Known setting:** plants and mushrooms, and what grows where, **anywhere** (travels like the Builder's: naming a plant or finding a herb); wild places at the edge of settlements, and the folk who come to the hermit's door at night. **Languages:** no extra. Almost no coins, the most Material of any background (herbs, roots, bark). The herbalism kit and the Material let them brew with the Medic's *Potions and poisons*, which anyone can roll.

| Fortune | Gear | Coins | Material |
|---|---|---|---|
| **Poor** (a vagrant sleeping rough) | Bedroll, blanket, waterskin, iron pot, tinderbox | 1 sp | 3 |
| **Commoner** (a herbalist or wise woman at the edge of a village) | As poor, plus a backpack, a herbalism kit, a healer's kit | 5 sp | 5 |
| **Fortunate** (a famous hermit, with patrons who bring gifts) | As commoner, plus a lantern and oil, writing things | 15 sp | 8 |

**Herbalism kit:** leather gloves, clippers, a mortar and pestle, three glass jars, two pouches.

| d8 | Archetype | Recommended |
|---|---|---|
| 1 | **Herbalist.** Knew every plant in the valley, and what it did to the person who ate it. | Commoner background; poor arms: a sickle |
| 2 | **Wise woman.** Knew the cures, the curses, and which girl was in trouble before her mother did. | Commoner background; poor arms: a quarterstaff |
| 3 | **Drifter.** Worked harvests, haymaking and woodcutting from village to village, never staying past the season, sleeping in barns and under trees. | Poor background; poor arms: a sickle or a handaxe |
| 4 | **Charcoal burner.** Tended kilns deep in the forest for weeks at a time, black to the elbows. | Poor background; commoner arms: a handaxe and a gambeson |
| 5 | **Recluse.** Withdrew to a cave above the treeline to sit with the silence, and came back calmer than anyone has a right to be. | Poor background; poor arms: a quarterstaff |
| 6 | **Honey hunter.** Climbed the forest's oldest trees for wild honey, and knows the forest from above. | Commoner background; poor arms: a handaxe |
| 7 | **Exiled noble.** Banished from court after something unforgivable, and kept the sword. | Poor background; fortunate arms: a sword |
| 8 | **Prophet.** Came down from the mountain with visions nobody asked for. | Poor background; poor arms: a quarterstaff |
| 9 | Or make up your own, picking whatever you feel like. | |

| d8 | Quirk | Ideal | Bond | Flaw |
|---|---|---|---|---|
| 1 | Talks to plants, animals and the weather, and waits for answers | **Solitude.** Quiet is where the truth is heard | The village that drove them out still sends someone at night when a child is sick | Can't stand crowds; three people is a crowd |
| 2 | Picks and sniffs every herb by the road, and pockets half of them | **Healing.** Nobody who comes to the door goes away without help | Their old teacher's hut stands empty; they're the only one who knows what's buried under it | Speaks the plain truth at the worst possible moment |
| 3 | Eats sparingly, and comments on what others eat | **Nature.** The forest was here first and will be here last | A creature of the forest spared their life once; they owe it | Distrusts anything made in a town, coins included |
| 4 | Keeps strange hours: sleeps at noon, walks at night | **Knowledge.** Every plant has a secret, and they mean to learn them all | Someone they love is buried in the clearing by the hut | Has forgotten how to lie, and how to tell when others do |
| 5 | Measures time by moons and seasons, never by days | **Penance.** They withdrew to pay for a sin, and it isn't paid yet | They made a promise to a dying pilgrim and haven't kept it | Hoards herbs, roots and odd bits like a magpie |
| 6 | Answers questions with riddles or proverbs | **Freedom.** No lord, no priest, no tax collector finds them | A noble family sends gifts every year to keep them away from court | Believes their visions over their eyes |
| 7 | Can sit still for hours, and expects others to | **Faith.** God speaks in silence, and they listen | The wise woman of the next valley is their rival; neither will admit the other is better | Treats townsfolk like children |
| 8 | Smells of smoke, mint and something nobody can name | **Balance.** Every cure costs something, and somebody has to pay | They saw something in the forest one night that nobody believes | Takes a long time to trust anyone, and forgives nothing |
| 9 | Or make up your own, picking whatever you feel like | | | |

#### Scholar *(draft, 2026-11-16; Czech Učenec)*

**Known setting:** the written word, **anywhere** (texts, records, inscriptions, old documents, wherever they're found); universities, monastery libraries and chanceries, and the learned people in them. **Languages:** two extra (Liturgic or an Old tongue fit). There's no Latin in the world: Liturgic stands in for it.

| Fortune | Gear | Coins | Material |
|---|---|---|---|
| **Poor** (a wandering student) | Backpack, bedroll, waterskin, writing things | 3 sp | 1 |
| **Commoner** (a scribe, or a physician's assistant) | As poor, plus a lantern and oil, a book | 15 sp | 2 |
| **Fortunate** (a university master, or a court physician) | As commoner, plus a second book, and a healer's kit, a herbalism kit or cartographer's tools | 40 sp | 3 |

- **Book** *(confirmed, 2026-11-16)*: one item (`book`, 150 sp), whatever the subject; the player names it in the backstory (the editor can't set item notes yet). With an hour to consult it, a character can make a knowledge roll in its field even without a fitting class, and on a success the DM answers more fully. The old history, philosophy and prayer books stay in the backup.
- **Cartographer's tools:** drawing compasses, a ruler, a quill, ink, 5 sheets of parchment.
- **Medic overlap** (the physician, the apothecary) is fine: crafts belong to classes.

| d8 | Archetype | Recommended |
|---|---|---|
| 1 | **Wandering student.** Drank and disputed their way from one university to the next, singing for bread. | Poor background; poor arms: a dagger |
| 2 | **Scribe.** Copied charters in a chancery, and knows exactly what a forgery looks like. | Commoner background; poor arms: a dagger |
| 3 | **Physician.** Studied the ancients and read urine flasks, and never touched a wound until the plague came. | Fortunate background: a healer's kit; poor arms: a dagger |
| 4 | **Apothecary.** Mixed theriac for the rich and sold sugar pills to everyone else. | Fortunate background: a herbalism kit; poor arms: a dagger |
| 5 | **Astrologer.** Cast horoscopes for a lord who believed every word. | Fortunate background; commoner mount |
| 6 | **Alchemist's apprentice.** Kept the fire going and the master's secrets, until the explosion. | Commoner background; poor arms: a club |
| 7 | **Notary.** Knows every law, privilege and loophole in the land, and charges by the word. | Fortunate background; poor arms: a dagger |
| 8 | **Chronicler.** Wrote the history of a noble house, including the parts they paid to have removed. | Commoner background; commoner mount |
| 9 | Or make up your own, picking whatever you feel like. | |

| d8 | Quirk | Ideal | Bond | Flaw |
|---|---|---|---|---|
| 1 | Corrects everyone's Liturgic, and everyone's facts | **Knowledge.** Everything can be known, given enough time and candles | Their master's unfinished book is in their pack; they mean to finish it | Can't resist showing that they know better |
| 2 | Takes notes on everything, in a script nobody else can read | **Truth.** A fact doesn't care who it offends | A letter from a dead colleague asks a question nobody has answered | Trusts a book over their own eyes |
| 3 | Quotes the ancients at every occasion, sometimes accurately | **Tradition.** The ancients knew more than we ever will | Their university expelled them over a disputation they still think they won | Forgets to eat, sleep and keep watch when there's something to read |
| 4 | Sniffs every book before opening it | **Progress.** The ancients were wrong about plenty, and somebody has to say so | A library burned with the only copy of something they need | Looks down on anyone who can't read |
| 5 | Counts in fractions and speaks in footnotes | **Service.** Learning is worthless unless it helps someone | Their patron paid for their studies and expects a return | Steals rare books; borrowing is for people who give them back |
| 6 | Collects odd facts and shares them at the wrong moment | **Secrets.** Some knowledge is too dangerous for the many | They copied a forbidden text once, and someone knows | Argues every point, especially the ones that don't matter |
| 7 | Has ink stains on every finger, and on their nose | **Fame.** A name on a book lives forever | An old fellow student is now a bishop, and owes them a favour | Is a coward about anything that isn't a debate |
| 8 | Measures and weighs everything, in case it's useful later | **Freedom.** No bishop or king decides what may be read | Their family sold its land to pay for the university | Is sure they're the cleverest person in the room, and usually says so |
| 9 | Or make up your own, picking whatever you feel like | | | |

#### Servant *(draft, 2026-11-16; Czech Služebník)*

**Known setting:** servants **anywhere**, and the gossip they pass on (the staff of any household: in through the kitchen door); inns, kitchens and stables, and the servants' quarters of great houses. **Languages:** no extra. Nobody looks at a servant.

| Fortune | Gear | Coins | Material |
|---|---|---|---|
| **Poor** (a scullion or a stable hand) | Pouch, bedroll, tinderbox, 3 days of rations | 3 sp | 1 |
| **Commoner** (a cook, a maid or a barmaid in a good house or inn) | Backpack, bedroll, waterskin, 3 days of rations, tinderbox, and cook's utensils or a healer's kit | 15 sp | 2 |
| **Fortunate** (an innkeeper, or a great house's steward) | As commoner, plus a lantern and oil, writing things, and brewer's supplies or a merchant's kit | 40 sp | 3 |

- **Bundles:** cook's utensils (kitchen knives, iron pot, ladle, spice box); brewer's supplies (mash paddle, funnel and sieve, ladle; **no copper kettle**, too heavy: the brewer uses an iron pot, 3 sp).
- **The inn is story, not property.** Owning one is a domain holding (a tavern licence), granted only by the DM.
- **Overlaps kept:** the bathhouse maid's healer's kit with the Soldier's barber-surgeon; the steward's ledger with a future Merchant.

| d8 | Archetype | Recommended |
|---|---|---|
| 1 | **Innkeeper.** Ran an inn on the high road, and heard every rumour before the town did. | Fortunate background; poor arms: a club |
| 2 | **Brewer.** Brewed the town's beer under its brewing right, and can name any tavern by the taste of its beer. | Fortunate background: brewer's supplies; poor arms: a club |
| 3 | **Cook.** Fed a lord's household, a hundred mouths twice a day, and knows what a poisoned dish smells like. | Commoner background: cook's utensils; poor arms: a handaxe (the cleaver) |
| 4 | **Barmaid.** Carried tankards, broke up fights, and remembers every face that didn't pay. | Poor background; poor arms: a club |
| 5 | **Bathhouse maid.** Heated the water, scrubbed the guests, and heard the town's dirtiest secrets. | Commoner background: a healer's kit; poor arms: a dagger |
| 6 | **Groom.** Kept a lord's horses, some of which like them better than people. | Poor background; commoner mount |
| 7 | **Steward.** Kept the keys and accounts of a great house, and knows where its silver went. | Fortunate background: a merchant's kit; poor arms: a dagger |
| 8 | **Lady's maid.** Dressed a noble every morning, and knew all their secrets by evening. | Commoner background; poor arms: a dagger |
| 9 | Or make up your own, picking whatever you feel like. | |

| d8 | Quirk | Ideal | Bond | Flaw |
|---|---|---|---|---|
| 1 | Tidies wherever they go, even in a dungeon | **Hospitality.** A guest under your roof is sacred, whoever they are | The inn they grew up in was burned by soldiers; they mean to rebuild it | Gossips, and can't keep a secret past the second drink |
| 2 | Judges every meal, every bed and every inn out loud | **Loyalty.** A good master deserves a good servant, to the end | Their old master died in suspicious circumstances; they saw something that night | Eavesdrops on everyone, out of habit |
| 3 | Hears everything and pretends to hear nothing | **Pride.** Serving well is a craft, and they're a master of it | A noble child they raised still writes to them in secret | Steals small things from the rich: a spoon, a ribbon, a coin |
| 4 | Moves so quietly people forget they're in the room | **Freedom.** They served long enough; now they serve no one | They know a lord's secret that could bring down his house | Bows to anyone in fine clothes, without thinking |
| 5 | Can't sit idle while others work, or work while others sit | **Fairness.** Everyone eats at the same table, lord or stable boy | The tavern regulars are their family; they'd do anything for them | Resents every noble, and lets it show in small ways |
| 6 | Cooks something for the party at every rest, asked or not | **Ambition.** Today the scullery, tomorrow their own inn | Their sister is still in service at a cruel house; they want her out | Spends money on fine things to look like their betters |
| 7 | Remembers what everyone drinks, and how much | **Discretion.** What's seen in a house stays in the house | They owe the brewers' guild for a debt they didn't make | Waters down the drinks of people they dislike |
| 8 | Polishes their boots every night, however tired | **Comfort.** A warm meal and a dry bed fix most of the world's troubles | Someone left a sealed letter with them at the inn, and never came back for it | Can't say no to anyone who asks politely |
| 9 | Or make up your own, picking whatever you feel like | | | |

#### Monster hunter *(draft, 2026-11-16; Czech Lovec netvorů)*

**Known setting:** folk tales and superstitions about monsters, fiends and the undead, **anywhere**, and which of them are true (overlaps the Witcher's and Ranger's knowledge skills on purpose); border villages, graveyards and ruins, and the people who hire hunters. **Languages:** no extra. A poor background: hunters get paid when the thing is dead.

| Fortune | Gear | Coins | Material |
|---|---|---|---|
| **Poor** (a village rat-catcher and grave-watcher) | Bedroll, waterskin, 3 torches, rope, a hunting trap | 2 sp | 2 |
| **Commoner** (a hunter for hire on the borderlands) | As poor, plus a backpack, tinderbox, steel mirror, manacles | 10 sp | 3 |
| **Fortunate** (a slayer of some fame, or the squire of an old order) | As commoner, plus a lantern and oil, a healer's kit, and silvering | 30 sp | 4 |

- **Silvering** *(confirmed, 2026-11-16)*: an item (`silvering`, 50 sp) standing for one weapon, or ten pieces of ammunition, from the character's arms, silvered; the player names which in the backstory. The background still gives no weapons.
- **No trophies as items:** trophies are the Ranger's and Witcher's skill; Material instead.

| d8 | Archetype | Recommended |
|---|---|---|
| 1 | **Rat-catcher.** Cleared cellars of rats, and once of something much bigger. | Poor background; poor arms: a club |
| 2 | **Grave-watcher.** Sat the nights in the churchyard so the dead stayed where they were put. | Poor background; poor arms: a spear |
| 3 | **Wolf hunter.** Tracked wolves through the winter, until the tracks started walking on two legs. | Fortunate background: silvering; commoner arms: a spear and a crossbow |
| 4 | **Slayer for hire.** Took the lord's coin for the wyvern's head, and came back with it. | Fortunate background; fortunate arms: a sword and a shield |
| 5 | **Witch-finder.** Hunted witches for the church, until they learned what's really out there. | Commoner background; commoner arms: a crossbow and a dagger |
| 6 | **Survivor.** The only one left of a village the thing came for, and they've been hunting it since. | Poor background; commoner arms: an axe and a shield |
| 7 | **Squire of an order.** Carried a monster-slaying knight's lance, until the knight didn't come back. | Fortunate background; commoner mount; commoner arms: a spear and a shield |
| 8 | **Trapper.** Caught beasts with snares and pits, then learned the same works on worse things. | Commoner background; poor arms: a shortbow |
| 9 | Or make up your own, picking whatever you feel like. | |

| d8 | Quirk | Ideal | Bond | Flaw |
|---|---|---|---|---|
| 1 | Checks every room for exits, shadows and claw marks before sitting down | **Protection.** Someone has to stand between the village and the dark | The thing that killed their family is still out there | Sees monsters where there are only people |
| 2 | Salts every threshold they sleep behind | **Coin.** Nobody kills a monster for free, and neither do they | Their old master's hunting journal is half-finished, and the last pages are torn out | Haggles over the price while the village burns |
| 3 | Collects trophies, and tells their stories unasked | **Knowledge.** Every monster has a weakness; the trick is finding it first | A village owes them its children, and treats them like a leper anyway | Drinks to forget what they've seen |
| 4 | Sleeps with a light on, and won't explain why | **Glory.** Songs about slain dragons have to start somewhere | Their order cast them out for sparing something they were sent to kill | Can't resist poking at anything strange, however dangerous |
| 5 | Sniffs the air when entering anywhere new | **Mercy.** Not every monster deserves to die, and not every man deserves to live | A fiend once spared them, and they don't know why | Doesn't trust priests, mages or anyone who deals with the other side |
| 6 | Knows a folk remedy for everything, half of them nonsense | **Duty.** The order's oath binds until death, and maybe after | They carry a silver ring from someone the thing took | Takes every job, however hopeless, because saying no feels like cowardice |
| 7 | Tests every coin with their teeth, in case it's fairy gold | **Vengeance.** Every monster pays for the one that took what was theirs | A rival hunter keeps beating them to the bounties, and they're sure it's no accident | Treats villagers as bait, if that's what it takes |
| 8 | Hums an old song that keeps the dead at bay, or so their grandmother said | **Order.** Monsters are the wild breaking in; they keep it out | They've promised a child they'll come back for her when the hunt is over | Has stopped fearing death, and it makes them reckless |
| 9 | Or make up your own, picking whatever you feel like | | | |

#### Criminal *(draft, 2026-11-16; Czech Zločinec)*

Takes in the old **Charlatan** (the con artist) and **Urchin** (the gutter child).

**Known setting:** the underworld, **anywhere** (fences, smugglers, beggars and dens in any town); the dark side of their home town, its gangs, its watch and who can be bribed. **Languages:** one extra (Thieves' cant fits, but isn't given). Overlaps the Scout's *Underground influence* on purpose.

| Fortune | Gear | Coins | Material |
|---|---|---|---|
| **Poor** (a gutter child or a pickpocket) | Pouch, tinderbox, dice and loaded dice | 2 sp | 1 |
| **Commoner** (a burglar or a con artist with a gang) | Backpack, bedroll, rope, crowbar, and thieves' tools or a disguise kit | 15 sp | 1 |
| **Fortunate** (a fence, a gang boss or a master forger) | As commoner, plus a lantern and oil, playing cards, and a forgery kit or a merchant's kit | 40 sp | 2 |

- **Bundles:** thieves' tools (file, lockpicks, small mirror, scissors, pliers), disguise kit, forgery kit (blank seals, wax tools, sealing wax, quill, ink, parchment). Dark hooded clothes go in the clothes text.

| d8 | Archetype | Recommended |
|---|---|---|
| 1 | **Pickpocket.** Worked the market crowds, and can lift a purse without breaking stride. | Poor background; poor arms: a dagger |
| 2 | **Burglar.** Came in through the roof, left through the cellar, and took only what fit in a sack. | Commoner background: thieves' tools; poor arms: a dagger |
| 3 | **Con artist.** Sold relics, cures and titles to anyone who wanted to believe. | Commoner background: a disguise kit; poor arms: a dagger |
| 4 | **Forger.** Made letters of passage, guild seals and the odd will, all better than the real ones. | Fortunate background: a forgery kit; poor arms: a dagger |
| 5 | **Smuggler.** Moved salt, wine and people past the toll gates, by night and by river. | Commoner background; commoner mount; commoner arms: a crossbow and a club |
| 6 | **Fence.** Bought what fell off the cart, asked no questions, and remembers every answer anyway. | Fortunate background: a merchant's kit; poor arms: a dagger |
| 7 | **Gutter child.** Grew up on the streets, ran errands for the gangs, and knows every alley and hole in the walls. | Poor background; poor arms: a sling |
| 8 | **Leg-breaker.** Collected debts for the gang boss, one finger at a time. | Poor background; commoner arms: a club and a gambeson |
| 9 | Or make up your own, picking whatever you feel like. | |

| d8 | Quirk | Ideal | Bond | Flaw |
|---|---|---|---|---|
| 1 | Counts the exits, the guards and the purses in every room | **Freedom.** No lord, no law, no chains | The gang that raised them was hanged in the square; they were the only one not caught | Can't walk past an unattended purse |
| 2 | Sits with their back to the wall, always | **Loyalty.** Thieves have their own law, and you don't rat on your own | A rival gang boss wants them dead over a debt they swear is paid | Lies by reflex, even when the truth would serve |
| 3 | Talks to strangers in cant to see who answers | **Greed.** Everyone has a price, and they mean to collect it | Their little brother is still on the streets; everything they steal is for him | Never trusts anyone fully, the party included |
| 4 | Tests every lock they pass, out of habit | **Charity.** Take from those who won't miss it, give to those who will | A watch sergeant lets them work, as long as he gets his cut | Gambles away every score, and the next one too |
| 5 | Has three names and answers to all of them | **Respect.** One day the whole underworld will know their name | They hid the loot from their last big job, and someone is still looking for it | Runs at the first sign of the watch, whoever they leave behind |
| 6 | Sleeps lightly, with their boots on | **Thrill.** The take matters less than getting away with it | A fence they trusted sold them out; they mean to find him | Holds a grudge forever, and pays it back double |
| 7 | Haggles over everything, even when it's free | **Survival.** Nobody looks after you but you | They owe their life to a priest who didn't turn them in | Can't resist showing off how good they are |
| 8 | Always eats like it's their last meal | **Family.** The gang is the only family that never turned them away | They stole something from a powerful man without knowing what it was | Despises honest folk as marks and fools |
| 9 | Or make up your own, picking whatever you feel like | | | |

#### Outlander *(draft, 2026-11-16; Czech Cizinec)*

Takes in the old **Guide**.

**Known setting:** the wild lands and the peoples who live in them (clans, nomads, the trails and fords between them), not surviving in the wild, which is the Hunter class's; one homeland far from here, its customs, its feuds and who rules it. **Languages:** one extra, usually the homeland's (a Kroll clan dialect, Second elvish, the Language of the Isles). Little coin, plenty of Material: furs, hides, amber and salt to trade.

| Fortune | Gear | Coins | Material |
|---|---|---|---|
| **Poor** (a clan's youngest, or a lone wanderer) | Bedroll, waterskin, tinderbox, 3 days of rations, a hunting trap | 2 sp | 3 |
| **Commoner** (a hunter, a herder or a guide) | Backpack, bedroll, blanket, waterskin, tinderbox, iron pot, rope, 3 days of rations, a hunting trap | 10 sp | 4 |
| **Fortunate** (a chieftain's kin, or a wildland trader) | As commoner, plus a tent, and cartographer's tools or a merchant's kit | 30 sp | 6 |

| d8 | Archetype | Recommended |
|---|---|---|
| 1 | **Clansman.** Grew up in a hill clan where the feud with the next valley is older than anyone's grandfather. | Poor background; commoner arms: an axe and a shield |
| 2 | **Hunter.** Fed the clan through the winters, and can follow a deer for three days. | Commoner background; commoner arms: a longbow and a spear |
| 3 | **Steppe rider.** Rode with a horde across the grass, and feels naked on foot. | Poor background; commoner mount; fortunate arms: a shortbow and a scimitar or khopesh |
| 4 | **Wildland merchant.** Took salt and iron to the clans and came back with furs and amber, when they came back. | Fortunate background: a merchant's kit; commoner mount; poor arms: a spear |
| 5 | **Guide.** Led travellers through the mountain passes for coin, and lost fewer than most. | Fortunate background: cartographer's tools; poor arms: a quarterstaff |
| 6 | **Herder** (Czech *Bača*). Drove the flocks up to the high pastures every summer, alone with the wolves and the stars. | Poor background; poor arms: a sling and a quarterstaff |
| 7 | **Island raider.** Came south on a longship to plunder, and stayed when the ship didn't go back. | Poor background; commoner arms: an axe and a shield |
| 8 | **Stranger from afar.** Comes from somewhere nobody here has heard of, and their customs show it. | Commoner background; poor arms: a spear |
| 9 | Or make up your own, picking whatever you feel like. | |

- **Khopesh** isn't in the item list yet; the steppe rider's scimitar is.

| d8 | Quirk | Ideal | Bond | Flaw |
|---|---|---|---|---|
| 1 | Sleeps outside, even when there's a bed | **Freedom.** Walls are for people who are afraid of the sky | Their clan cast them out; they mean to earn their way back | Has no idea how towns work, and won't admit it |
| 2 | Greets everyone with a custom nobody here understands | **Kin.** The clan comes first, last and always | A blood feud follows them, and the other side has long memories | Settles insults with fists, wherever they are |
| 3 | Reads the weather aloud every morning, and is usually right | **Honour.** A word given is a word kept, even to an enemy | Their horse is their oldest friend, and they'd die for it | Distrusts anyone who lives behind walls |
| 4 | Eats anything, and judges people who don't | **Nature.** The land gives, the land takes, and it doesn't care what lords think | A trader they guided died on the way; his family wants to know why | Takes what they need, because in the wild nothing belongs to anyone |
| 5 | Counts wealth in horses, furs and favours, never coins | **Hospitality.** Whoever shares your fire is under your protection | They carry a token they swore to return to a chieftain's daughter | Speaks the truth bluntly, and calls tact lying |
| 6 | Wears charms against every spirit they've ever heard of | **Strength.** The weak don't last a winter, and shouldn't expect to | The horde they rode with is coming west, and they know when | Superstitious to the bone, and won't break a taboo for anything |
| 7 | Tells time by the sun and stars, and laughs at bells | **Wandering.** There's always another valley over the next ridge | They promised their dying father to see the sea | Gets restless after three nights in one place |
| 8 | Carves something during every rest, and gives it away | **Tradition.** The old ways kept their people alive; they'll keep them alive here too | Somewhere in a town lives a sibling who went soft, and they want to bring them home | Treats every stranger as a possible enemy until shown otherwise |
| 9 | Or make up your own, picking whatever you feel like | | | |

#### Noble *(draft, 2026-11-16; Czech Šlechtic)*

**No large benefits in play** *(confirmed)*: the name opens doors and **commands nothing**. No land, servants, income or authority, and nobody has to obey them. Coins and Material are the same as other backgrounds'; swords and a warhorse come from fortunes, which anyone can choose. **The price of the name:** the family's debts, feuds and summons home are hooks the DM can pull; the background's description says so.

**Known setting:** noble courts and town councils (etiquette, heraldry, who is feuding with whom); their own family, its lands and its lord. **Languages:** one extra (Liturgic, or a neighbouring court's tongue). The **councillor's child** is patrician, not strictly noble, and belongs here rather than in a future Merchant. A *vladyka* is the lowest rank of Czech nobility; the English text keeps the word.

| Fortune | Gear | Coins | Material |
|---|---|---|---|
| **Poor** (a name and nothing behind it) | Bedroll, waterskin, tinderbox, 3 days of rations, playing cards | 3 sp | 0 |
| **Commoner** (a minor house that still keeps up appearances) | Backpack, bedroll, waterskin, tinderbox, writing things, playing cards | 15 sp | 1 |
| **Fortunate** (heir of a modest house) | As commoner, plus a lantern and oil, and a signet ring | 40 sp | 1 |

- **Signet ring** (`signet-ring`, 50 sp, fortunate only): proves who you are and seals your letters; it grants no authority.

| d8 | Archetype | Recommended |
|---|---|---|
| 1 | **Third son of a third son.** Has a long name, a short inheritance, and no reason to stay home. | Poor background; fortunate arms: a sword |
| 2 | **Hedge knight.** Knighted on a battlefield by a lord now dead, rides from tourney to tourney, and sleeps under hedges between them. | Poor background; fortunate mount; commoner arms: a lance and a shield |
| 3 | **Councillor's child.** Grew up in a patrician house on the town square, with more money than blood and everyone knowing it. | Fortunate background; poor arms: a dagger |
| 4 | **Child of a poor vladyka.** The family has a fortified farmhouse, a coat of arms and debts; the father ploughs alongside his serfs. | Poor background; commoner mount; commoner arms: a spear and a shield |
| 5 | **Bastard.** Raised at the castle, acknowledged by nobody, and better at swordplay than the legitimate heirs. | Poor background; fortunate arms: a sword |
| 6 | **Ward.** Raised at a rival lord's court as a hostage for their family's good behaviour, and isn't sure whose side they're on. | Commoner background; poor arms: a dagger |
| 7 | **Runaway bride.** Was promised to a man three times her age, or to a convent, and chose the road instead. | Commoner background; commoner mount; poor arms: a dagger |
| 8 | **Disgraced heir.** The family lost everything in a feud, a war or at dice, and the name is all that's left. | Poor background; fortunate arms: a sword and medium armour |
| 9 | Or make up your own, picking whatever you feel like. | |

| d8 | Quirk | Ideal | Bond | Flaw |
|---|---|---|---|---|
| 1 | Introduces themselves with their full name and lineage, every time | **Honour.** A name is worth nothing if its bearer isn't | The family estate is mortgaged; they mean to buy it back | Expects to be served, and is surprised when they aren't |
| 2 | Eats with perfect manners, even off a stick by the fire | **Duty.** Noble birth means protecting those beneath you | Their elder brother will inherit everything, and they love him anyway | Can't let an insult to the family pass |
| 3 | Knows every coat of arms on the road, and whose debts it's hiding | **Ambition.** The family was great once and will be again | A marriage was arranged for them; the other family hasn't forgotten | Has never done a day of honest work, and it shows |
| 4 | Speaks politely to everyone, servants included, which confuses them | **Freedom.** Better a poor knight on the road than a rich prisoner at home | Their old tutor is the only one who ever believed in them | Spends money they don't have to look like they have it |
| 5 | Keeps a small book of everyone who has slighted them | **Chivalry.** Fight fair, keep your word, protect the weak | A rival house blames them for something their father did | Looks down on burghers, and burghers know it |
| 6 | Hums court dances when nervous | **Power.** Titles are only paper; real power is people who owe you | They still write to their mother, who thinks they're at a monastery | Picks fights with people above their station, to prove they belong |
| 7 | Can't resist a tournament, a duel or a dare | **Family.** Blood comes before everything, even the law | The lord who knighted them died owing them a favour; his son doesn't know | Lies about how grand the family really is |
| 8 | Wears one good garment, mended a hundred times | **Fairness.** They've seen how the lords treat the poor, and won't be like them | The family's ancestral sword was sold; they've seen it on another man's hip | Can't take advice from anyone of lower birth |
| 9 | Or make up your own, picking whatever you feel like | | | |

#### Sailor *(draft, 2026-11-16; Czech Loďař)*

Rivers and coasts as much as the sea: rafts, ferries and trading cogs. **Known setting:** ports, ships and crews **anywhere** (who's hiring, who's smuggling, which harbourmaster can be bought); their home waters' rivers and coasts, the shoals, weirs and tolls. Overlaps the Scout's *Seafaring* and the Ranger's small boats on purpose. **Languages:** one extra (the Language of the Isles, or a port's tongue). A poor background, like the Outlander.

| Fortune | Gear | Coins | Material |
|---|---|---|---|
| **Poor** (a deckhand or a raftsman) | Bedroll, waterskin, rope, 3 days of rations, dice | 2 sp | 1 |
| **Commoner** (an able seaman or a river boatman) | Backpack, bedroll, waterskin, tinderbox, rope, 3 days of rations, dice or playing cards | 10 sp | 2 |
| **Fortunate** (a ship's mate, a pilot or a ship-owner's child) | As commoner, plus a lantern and oil, and navigator's tools or a merchant's kit | 30 sp | 3 |

- **Navigator's tools** (restored): a lodestone compass, a sounding line, a ruler.

| d8 | Archetype | Recommended |
|---|---|---|
| 1 | **Deckhand.** Hauled rope on a trading cog from port to port, and left a debt, a sweetheart and a grudge in every one. | Poor background; poor arms: a club (the belaying pin) |
| 2 | **Raftsman** (*Vorař*). Rode timber rafts down the river to the city, and knows every weir and every tavern on the way. | Poor background; poor arms: a handaxe |
| 3 | **Fisherman.** Went out before dawn in all weather, and knows the water better than the land. | Commoner background; poor arms: a spear (the gaff) |
| 4 | **River pilot.** Knows every shoal, weir and toll on the river, and what every toll-keeper drinks. | Fortunate background: navigator's tools; poor arms: a dagger |
| 5 | **Ship's crossbowman.** Guarded a merchant cog against pirates from the castle at the stern. | Commoner background; commoner arms: a crossbow and a gambeson |
| 6 | **Pirate.** Sailed under a letter of marque, and later without one. | Poor background; fortunate arms: a sword |
| 7 | **Ferryman.** Took people across the river for a coin, and remembers everyone who crossed at night. | Commoner background; poor arms: a quarterstaff (the pole) |
| 8 | **Castaway.** The only one who came ashore when the ship broke up, and won't say how. | Poor background; poor arms: a dagger |
| 9 | Or make up your own, picking whatever you feel like. | |

| d8 | Quirk | Ideal | Bond | Flaw |
|---|---|---|---|---|
| 1 | Walks with a roll, even on dry land | **Freedom.** The sea belongs to no lord | Their old ship lies at the bottom with the captain's chest still aboard | Drinks every port dry, then the next one |
| 2 | Ties knots in anything they're holding | **Crew.** On a ship, everyone lives or everyone drowns | The crew that marooned them is still sailing, and they know the ship's name | Superstitious: no whistling aboard, no sailing on a Friday |
| 3 | Reads the sky every morning and announces the weather | **Fortune.** One good cargo and they'll never work again | A sweetheart waits in a harbour town, or so they hope | Settles every argument with fists |
| 4 | Swears in six languages, and only speaks four | **Adventure.** There's always another coast beyond the horizon | Their brother was pressed into a war fleet and never came home | Can't swim, and has never told anyone |
| 5 | Sleeps anywhere, anytime, in any weather | **Honesty.** A fair captain gets a loyal crew | They owe a smuggler a cargo they lost to the toll-keepers | Spends their pay before they've earned it |
| 6 | Tells sea stories that get bigger with every mug | **Respect.** The water humbles everyone, and so should you | A drowned shipmate visits them in dreams, asking for something | Can't stay ashore for more than a month |
| 7 | Eats fast and guards their plate, as on the mess deck | **Tradition.** The old ways of the river keep the river kind | The raftsmen's guild expelled them; they mean to be taken back | Treats landsmen as fools |
| 8 | Keeps a lucky trinket and touches it before anything risky | **Profit.** Every cargo has a price, and every toll-keeper too | They saw a sea monster once, and they're going back for it | Jumps ship at the first sign of trouble |
| 9 | Or make up your own, picking whatever you feel like | | | |

#### Merchant *(draft, 2026-11-16; Czech Kupec)*

The road and the market; the councillor's child (Noble), the steward (Servant), the fence (Criminal) and the wildland trader (Outlander) live elsewhere. **Known setting:** markets, fairs and trade roads **anywhere** (what things are worth, who's buying, the tolls and staple rights); merchant guilds and trading houses, and who owes whom. The obvious case for the DM's temporary +1 when haggling. **Languages:** one extra. **No large benefits:** coins as other backgrounds'; the wealth shows as a little more Material (trade goods).

| Fortune | Gear | Coins | Material |
|---|---|---|---|
| **Poor** (a pedlar with a pack) | Backpack, bedroll, waterskin, pouch, 3 days of rations | 3 sp | 2 |
| **Commoner** (a market trader or a carter) | Backpack, bedroll, waterskin, tinderbox, a merchant's kit, playing cards | 15 sp | 3 |
| **Fortunate** (a trading house's merchant) | As commoner, plus a lantern and oil, writing things | 40 sp | 5 |

| d8 | Archetype | Recommended |
|---|---|---|
| 1 | **Pedlar.** Carried needles, ribbons and gossip from village to village on their back. | Poor background; poor arms: a quarterstaff |
| 2 | **Salt carrier** (*Soumar*). Led a pack train of salt along the Golden Trail over the border forest, past robbers and toll-keepers. | Commoner background; commoner mount; commoner arms: a crossbow and a club |
| 3 | **Stallholder.** Sold cloth on the town square every market day, and knows what everything is worth. | Commoner background; poor arms: a club |
| 4 | **Carter** (*Forman*). Drove a merchant's wagons on the high roads, and knows every inn and every ditch. | Commoner background; commoner mount; poor arms: a club |
| 5 | **Factor.** Kept the books in a foreign trading house, and knows whose ships are late. | Fortunate background; poor arms: a dagger |
| 6 | **Moneychanger.** Weighed foreign coins at a bench by the bridge, and knows a clipped groschen by feel. | Fortunate background; poor arms: a dagger |
| 7 | **Horse trader.** Sold horses at fairs, some of them sound. | Commoner background; commoner mount; poor arms: a dagger |
| 8 | **Bankrupt.** Was rich last year, and kept only the sword bought in better days. | Poor background; fortunate arms: a sword |
| 9 | Or make up your own, picking whatever you feel like. | |

| d8 | Quirk | Ideal | Bond | Flaw |
|---|---|---|---|---|
| 1 | Prices everything they see, out loud | **Profit.** A deal is good when both sides think they've won, and one of them is right | Their partner ran off with the strongbox; they know which town he's in | Can't pass up a bargain, even one they don't need |
| 2 | Bites every coin, and weighs every purse by hand | **Honesty.** Fair weight and fair measure, or the guild hangs you | A caravan they financed vanished on the road; nobody believes it was robbers | Haggles over everything, even with friends, even over life and death |
| 3 | Keeps accounts of who in the party owes what | **Freedom.** Money buys what birth never gave them | They owe a moneylender more than they'll ever earn | Trusts a signed contract over a person's word |
| 4 | Speaks a few words of every language, all of them numbers | **Ambition.** Their name will be on a house on the square one day | A noble owes them a fortune and won't pay; the courts belong to him | Bribes first, thinks later |
| 5 | Never says no, only "that depends on the price" | **Community.** A market feeds the whole town, not just the traders | Their guild expelled them for underselling; they mean to prove it wrong | Hoards coin and won't spend it, even on the party |
| 6 | Collects samples: a pinch of every spice, a scrap of every cloth | **Risk.** The biggest profits are on the roads nobody else dares | They carry a sealed letter of credit to a trading house far away | Looks down on anyone who's never earned their own bread |
| 7 | Remembers every price from every fair for ten years back | **Reputation.** A merchant's word is their capital | A rival house ruined their family; they're keeping a ledger of their own | Sells anything to anyone, and asks no questions |
| 8 | Wears a purse inside their shirt and touches it every few minutes | **Generosity.** Wealth is for spending, on people who need it | A child they took on as an apprentice was lost on the road | Thinks everyone has a price, and treats them that way |
| 9 | Or make up your own, picking whatever you feel like | | | |

#### Peasant *(draft, 2026-11-16; Czech Rolník)*

Takes in the old **Folk hero**, and the old Farmer. Not only ploughing: everyone who lives off the land and the village. Not *Commoner*, which is a fortune. **Known setting:** villages and the countryside **anywhere** (the work, the livestock, the seasons and the customs, market days, who the reeve is); their home village, its lord and his bailiff. **Languages:** no extra. Little coin, a fair amount of Material (grain, hides, wool, a cheese).

| Fortune | Gear | Coins | Material |
|---|---|---|---|
| **Poor** (a cottar or a farmhand) | Bedroll, waterskin, tinderbox, 3 days of rations | 2 sp | 2 |
| **Commoner** (a smallholder with a field and a cow) | Backpack, bedroll, blanket, waterskin, tinderbox, iron pot, rope, 3 days of rations, and a shovel or a healer's kit | 10 sp | 3 |
| **Fortunate** (a rich farmer or a village reeve) | As commoner, plus a lantern and oil, and carpenter's tools or brewer's supplies | 30 sp | 5 |

| d8 | Archetype | Recommended |
|---|---|---|
| 1 | **Ploughman.** Walked behind the oxen from dawn to dusk, and is stronger than any knight they've met. | Poor background; poor arms: a club |
| 2 | **Swineherd.** Drove the village pigs into the oak woods every autumn, and knows every path in them. | Poor background; poor arms: a quarterstaff |
| 3 | **Village reeve.** Collected the lord's dues and settled the village's quarrels, and was hated by both sides. | Fortunate background; poor arms: a club |
| 4 | **Vintner.** Tended a vineyard on the slopes above the river, and judges every wine harshly. | Fortunate background: brewer's supplies; poor arms: a sickle |
| 5 | **Folk hero.** Stood up to the lord's bailiff once, and the village still sings about it. | Commoner background; commoner arms: a spear and a shield |
| 6 | **Woodcutter.** Felled trees for the charcoal burners and the town's builders, and has strong arms and few words. | Poor background; commoner arms: an axe and a gambeson |
| 7 | **Gravedigger.** Dug the village's graves, and knows which ones were dug twice. | Poor background; poor arms: a club |
| 8 | **Midwife.** Delivered every child in three villages, and a few calves. | Commoner background: a healer's kit; poor arms: a dagger |
| 9 | Or make up your own, picking whatever you feel like. | |

| d8 | Quirk | Ideal | Bond | Flaw |
|---|---|---|---|---|
| 1 | Up before dawn every day, and wakes everyone else | **Hard work.** Bread is earned, not given | The lord's bailiff took the family's best field; they mean to get it back | Distrusts anything new, from a plough to a priest |
| 2 | Reads the weather from the sky, the birds and their own knee | **Community.** The village stands together, or it starves alone | Their parents still work the land and need the money they send home | Hoards food, just in case |
| 3 | Judges every field they pass, and the farmer who keeps it | **Freedom.** No man should be another's property | They ran from the lord's land, and his men are still looking | Can't read, and is ashamed of it |
| 4 | Eats everything on the plate, and finishes others' | **Fairness.** The lord takes too much, and someday someone will say so | The village gave them its savings to bring back help | Treats townsfolk as cheats and lords as thieves |
| 5 | Names every animal, even the ones they'll eat | **Tradition.** The old feasts and the old ways keep the harvest coming | A wolf, a bear or something worse took their flock; they know where it lairs | Stubborn as an ox, and proud of it |
| 6 | Counts the days to the next feast, and knows every saint's day | **Faith.** God sends the rain and the hail, and both are deserved | They're betrothed back home, and the wedding keeps being put off | Superstitious about everything to do with the harvest |
| 7 | Talks about the harvest at every fire, every year's | **Home.** Every road leads back to the village in the end | Their brother was taken as a levy and never came back | Settles things with fists, like back home |
| 8 | Carries a pinch of home soil in a pouch | **Ambition.** Their grandchildren won't plough someone else's field | The village well went bad the year a stranger came; they think they know who | Bows to anyone in fine clothes, out of long habit |
| 9 | Or make up your own, picking whatever you feel like | | | |

#### Acolyte *(draft, 2026-11-16; Czech Duchovní)*

**Known setting:** the Star God's church **anywhere** (its rites and feasts, its hierarchy, who holds which parish and which abbot owes whom); monasteries, parishes, pilgrim roads and shrines. **Languages:** one extra (Liturgic fits, but isn't given).

| Fortune | Gear | Coins | Material |
|---|---|---|---|
| **Poor** (a mendicant friar or a pilgrim) | Bedroll, waterskin, pouch, holy symbol, 3 days of rations | 1 sp | 2 |
| **Commoner** (a parish priest, a monk or a nun) | Backpack, bedroll, waterskin, tinderbox, holy symbol, writing things | 10 sp | 2 |
| **Fortunate** (a canon, a prior or a bishop's secretary) | As commoner, plus a lantern and oil, a book, and a healer's kit or a herbalism kit | 30 sp | 3 |

- **Holy symbol** (`holy-symbol`, 3 sp, restored): the obvious ritual item for an Incantor, and what people hold up against the dead. Vestments go in the clothes text; a prayer book is the `book`, its subject named in the backstory.

| d8 | Archetype | Recommended |
|---|---|---|
| 1 | **Mendicant friar.** Begged their way from town to town, preaching poverty to people who had nothing else. | Poor background; poor arms: a quarterstaff |
| 2 | **Pilgrim.** Walked to a distant shrine to keep a vow, and came back changed, or hasn't come back yet. | Poor background; poor arms: a quarterstaff (the pilgrim's staff) |
| 3 | **Village priest.** Christened, married and buried the whole village, and knows all their sins. | Commoner background; poor arms: a club |
| 4 | **Infirmarian.** Ran the monastery's infirmary and herb garden, and has seen every way a body fails. | Fortunate background: a herbalism kit; poor arms: a dagger |
| 5 | **Runaway nun.** Took the veil, by choice or not, and left the convent for reasons of her own. | Commoner background; poor arms: a dagger |
| 6 | **Sergeant-brother.** Served a knightly order as a lay brother: cooked, prayed, and held the line behind the knights. | Commoner background; commoner arms: a mace and a shield |
| 7 | **Inquisitor's clerk.** Wrote down the confessions at the inquisitor's trials, and can't forget them. | Fortunate background; poor arms: a dagger |
| 8 | **Heretic preacher.** Preached that the church is rotten, and the church agreed to burn them for it. | Poor background; poor arms: a quarterstaff |
| 9 | Or make up your own, picking whatever you feel like. | |

| d8 | Quirk | Ideal | Bond | Flaw |
|---|---|---|---|---|
| 1 | Prays before every meal, every fight and every door | **Faith.** The Star God sees everything, and that's enough | Their old abbot sent them out with a task and a sealed letter | Sees sin everywhere, especially in others |
| 2 | Quotes scripture for every occasion, often the wrong verse | **Charity.** Whoever is hungry gets fed, whoever they are | A relic was stolen from their monastery; they've sworn to bring it back | Can't refuse a confession, even an enemy's |
| 3 | Keeps the hours: wakes at night for prayers, and wakes everyone else | **Tradition.** The rites are old for a reason | They heard a confession they can't repeat and can't forget | Drinks the communion wine, and more besides |
| 4 | Blesses everything, from horses to soup | **Reform.** The church has grown fat and rich, and has to be made clean again | The village they served was taken by plague; they buried everyone | Trusts priests too readily, and heretics not at all |
| 5 | Fasts on feast days and feasts on fast days, by a calendar nobody else knows | **Mercy.** Every soul can be saved, even the worst | A bishop owes their family a debt, and won't acknowledge it | Is sure every misfortune is a punishment, and says whose |
| 6 | Counts prayer beads when nervous, and loses count | **Obedience.** The order's rule is the path; stepping off it is the fall | They left someone behind at the convent, and promised to come back | Breaks their vows in small ways, and confesses in big ones |
| 7 | Speaks Liturgic when they don't want to be understood | **Truth.** A lie is a sin, even a kind one | Their brother monk was burned as a heretic; they're not sure he was wrong | Can't stand to see the church mocked, and makes a scene |
| 8 | Writes down everyone's sins, to pray for them later | **Power.** The church is the only power older than kings, and they mean to rise in it | A pilgrim died in their arms and asked them to finish the pilgrimage | Prays instead of acting, and calls it patience |
| 9 | Or make up your own, picking whatever you feel like | | | |

### Load *(agreed, 2026-11-16; DrD2's naložení)*

- **By eye, not by numbers.** The player compares the character with three silhouettes (`public/img/rulebook/load.png`): **light** (clothes and personal things), **medium** (more than a couple of bags), **heavy** (a heavy pack with things hung on it, a shield and two swords).
- **Overloading is a punishment, not a second armour system:** medium load costs what medium armour does (1 Body to attempt hindered activities), heavy load what heavy armour does (2). It isn't added on top of armour; the worse of the two counts.
- **A mount carries the load,** but only while it's there. The character can leave most of their things on the horse outside the dungeon, and risks a thief unless they spend time hiding them.
- The travel tables' *encumbered* and *heavily encumbered* are medium and heavy load.

*(Planned, the deleted draft.)* Like 5E backgrounds, but **without skill proficiencies**, because those come from classes. A background gives:

- **Starting inventory:** equipment, **coins** and **Material**.
  - Equipment is made of **individual items** from the item catalogue (`/admin/items`: weapons, armour, shields, clothing, tools, gear, each with an optional picture).
  - A background's gear is a list of **groups**. A group with one option is simply given; with several, the player **takes one**, e.g. Soldier: *two weapons, or a weapon and a shield*.
  - A line inside an option can be a **choice list** ("any martial weapon", "spear or longsword"); the player picks the item when creating the character.
  - The picks become rows in the character's **inventory** (`character_items`): quantity, carried or left behind, broken, a note. Inventory is shared across campaigns; the owner and the DM of any campaign the character is in can change it. Managing it in play isn't built yet; the sheet shows it read-only.
  - Changing the background or the picks later replaces the background's items; saving the build otherwise leaves the inventory alone.
- **Non-class abilities**, such as the number of **languages** spoken.
- **Known settings**, such as the criminal underbelly or noble courts: places to navigate or groups of people to deal with. *(Changed 2026-11-16: no flat +1.)* When it makes sense, the player can ask the DM for a temporary +1 on a roll inside the setting, e.g. a Criminal haggling with a fence; the DM decides.

### Languages

Kept deliberately vague for now. A starting list:

| Language | Spoken by |
|---|---|
| **Common tongue** | Everyone; the everyday language of the realm |
| **Tongue of the kings** | *Not learnable by player characters.* Nobody any more. The universal language of the pre-cataclysmic empire, whose name nobody remembers; survives in Liturgic and in bits on ruins, coins and seals. Royalty learns a few lines to sound legitimate, mostly for show *(sample: Classical Latin)* |
| **Liturgic** | The Star God's clergy; a bastard form of the Tongue of the kings *(Ecclesiastical Latin)* |
| **First elvish** | *Not learnable by player characters.* The oldest elves, who remember the world before the cataclysm; elven songs *(Scottish Gaelic)* |
| **Second elvish** | Elven clans and nations everywhere; grew out of First elvish after the cataclysm *(Irish)* |
| **Druidic** | Druids; a bastard mix of First and Second elvish *(Welsh)* |
| **Dwarven runes** | Written only: runes that vary by clan (elder futhark, younger futhark, other Germanic runes). Dwarves speak the local tongue. The runes come with dwarven customs: their maps have east at the top |
| **Language of the Isles** | The northern island nations *(Old Norse)*. Written in elder futhark, so a speaker can read some dwarven; a dwarven scribe can only read it aloud, sound by sound, without understanding |
| **Kroll clan dialects** | Krolls; mostly spoken, grammar differs by clan |
| **Old tongues** | Dead languages of unnamed empires from the far corners of the world; written only, read by scholars |
| **Thieves' cant** | The underworld: a cant of slang, double meanings and chalk marks on doorposts |

Languages can be linked as **related** (dialects, deviations, bastard mixes) in the language editor. A link shows on both languages. **Related languages** *(confirmed, 2026-11-15)*: a character can try to understand a language they don't know if it's related to one they speak, with a fitting skill check at **disadvantage** (a failure averted as usual). Understanding isn't speaking: they can't answer in it. **Not learnable** (`languages.learnable`, 2026-11-15): Tongue of the kings and First elvish; the character editor hides them. Links: Liturgic ↔ Tongue of the kings; First elvish ↔ Second elvish; Druidic ↔ First and Second elvish. Each language can also have a **sample text** (a line written in it, to show how it looks), shown under its name in the rulebook's languages table.

Every character speaks the **Common tongue**. Elves (Second elvish) and Krolls also speak their **racial language**; Dwarves read and write their clan's **runes** (their racial language in the app). Humans and Halflings, who have none, instead pick **one extra language** of their choice. A background then adds the number of extra languages shown below.

### Starter backgrounds

*(Draft, to be edited.)* **All 5E backgrounds**, from the 2014 PHB and the 2024 PHB, merged where they overlap (2014 Guild Artisan and 2024 Artisan are one; Guild Merchant is the Merchant). The 2014 variants (Spy, Gladiator, Knight, Pirate) are left out: they only change a feature. The Entertainer is our **Bard**. Plus one of our own, the **Monster hunter**: 20 in all, in the database and in the rulebook's `::backgrounds` block.

**How the 5E gear was adapted:**
- **Classes give no gear here**, so every background brings its own weapon, usually as a choice ("quarterstaff, mace or club"). A few carry armour pieces: Soldier and Guard (gambeson and a helmet), Folk hero (gambeson), Criminal and Sailor (leather jerkin), Guide and Outlander (hide jerkin).
- **Kits are bundles** *(2026-11-15; were split into separate items)*, as 5E's kits: a bundle is an item with **contents** (`items.contents`), set in the item editor. A background offers it as one line ("Thieves' tools"); the inventory gets its **pieces**, each tagged with the bundle (`character_items.bundle_id`), and the sheet and the printed sheet show them under the bundle's name, so one broken lockpick can be marked on its own. A bundle's price is the sum of its pieces.
  - Thieves' tools = file, lockpicks, small mirror on a handle, scissors, pliers; herbalism kit = leather gloves, clippers, mortar and pestle, three glass jars, two pouches; also the disguise and forgery kits, calligrapher's supplies, cartographer's and navigator's tools, a healer's kit, a merchant's kit, and the nine artisan's tools.
  - The Artisan and the Folk hero pick one artisan's bundle from a single list; the Charlatan picks the disguise or the forgery kit.
  - **Consumables become Material:** herbs, salves, bandages, incense, nails, hops. That's what Material is for. Tools stay items.
  - **Artisan's tools:** the Artisan and the Folk hero pick a craft (smith, carpenter, leatherworker, weaver, brewer, mason, potter, jeweller, cook), each its own set of tools.
  - **Navigator's tools** (no sextants here; spyglasses don't exist) become a lodestone compass, a sounding line, a ruler and writing things. The Merchant gets balance scales, a counting cloth and a ledger instead.
  - **Gaming set:** bone dice or playing cards.
- **The 2024 "50 gp instead of equipment" option is dropped.**
- **Swords are expensive** (a longsword is four months' wages), but **almost unsellable** *(confirmed, 2026-11-15)*: only a knight, a noble or an armourer pays what one is worth; ordinary tradespeople pay for its iron, about a tenth, in Material or coin. So the **Soldier** and the **Noble** may start with one, and the balance counts a sword at its melt value. The rulebook's Backgrounds page has it as a note (*Swords don't sell*).
- **Monster hunter** *(2026-11-15)*: one **silvered** weapon of their choice, a sword too (the silvering is 50 sp), and little else: poor on purpose.
- **Notes on starting items:** an equipment entry can carry a note ("Silvered"); it goes on the inventory row, and a noted item stays its own row.

**Balance** *(draft)*. Starting value = gear + coins + Material, with **clothes counted at half** (you can't sell the shirt off your back at full price). Coins compensate, so gear-rich backgrounds get little cash and poor ones a bit more than the pricelist suggests. The spread is roughly **1 : 3** (urchin 86 sp, noble about 260 sp) instead of the pricelist's raw allowances (5 sp to 150 sp on top of gear). The scholars sit high because a book is worth 150 sp, but nobody sells their only book.

| Background | Gear, in short | Coins | Material | Languages | Value |
|---|---|---|---|---|---|
| **Acolyte** | Quarterstaff, mace or club; holy symbol, prayer book, vestments, calligrapher's things | 15 sp | 3 | 1 | ~190 sp |
| **Artisan** | One craft's tools; light hammer, handaxe or dagger; guild letter | 70 sp | 5 | 0 | 115–155 sp |
| **Charlatan** | Disguise or forgery kit; a con (bottles, weighted dice, marked cards, fake signet); dagger, fine clothes | 20 sp | 1 | 1 | ~210 sp |
| **Criminal** | Two daggers (or dagger and club), leather jerkin, crowbar, thieves' tools, dark hooded clothes | 50 sp | 1 | 1 | ~145 sp |
| **Bard** (5E's Entertainer) | A simple weapon; an instrument; two costumes, steel mirror, perfume, admirer's favour, traveller's clothes | 10 sp | 3 | 1 | 120–220 sp |
| **Farmer** | Spear, quarterstaff or flail; sickle, carpentry tools, healer's things, iron pot, shovel | 30 sp | 6 | 0 | 95–115 sp |
| **Folk hero** | One craft's tools; spear, handaxe, quarterstaff or flail; gambeson, shovel, iron pot | 30 sp | 2 | 0 | 100–155 sp |
| **Guard** | Spear and light crossbow, or spear and shield; gambeson, iron cap, hooded lantern, manacles | 30 sp | 1 | 0 | 140–180 sp |
| **Guide** | Shortbow, or sling and spear or handaxe; hide jerkin, cartographer's tools, tent, bedroll | 25 sp | 2 | 1 | ~125 sp |
| **Hermit** | Quarterstaff, herbalism tools, book of philosophy, notes, lamp and oil, bedroll, blanket | 5 sp | 6 | 1 | ~210 sp |
| **Merchant** | Dagger, mace or club; scales, counting cloth, ledger, writing things | 50 sp | 3 | 1 | 125–140 sp |
| **Noble** | Dagger, spear, mace, or a longsword, shortsword or rapier; fine clothes, signet ring, pedigree, perfume, gaming set | 20 sp | 0 | 1 | 255–275 sp |
| **Outlander** | Quarterstaff, spear, handaxe or greatclub, or a shortbow; hide jerkin, hunting trap, animal trophy | 30 sp | 6 | 1 | 95–110 sp |
| **Sage** | Quarterstaff, small knife, book of history, letter from a dead colleague, writing things, scholar's robe | 5 sp | 2 | 2 | ~220 sp |
| **Sailor** | Club, dagger or handaxe; leather jerkin, navigation things, hemp rope, lucky charm | 35 sp | 2 | 1 | ~120 sp |
| **Scribe** | Dagger or quarterstaff; small knife, writing things, extra parchment, lamp and oil, scholar's robe | 60 sp | 2 | 1 | ~120 sp |
| **Soldier** | Spear and shortbow, two military weapons (swords included), or one and a shield; gambeson, kettle hat, insignia, trophy, healer's things | 25 sp | 4 | 0 | 120–180 sp |
| **Urchin** | Sling or club; dagger, map of the home town, pet mouse, token of the parents | 60 sp | 1 | 0 | ~85 sp |
| **Wayfarer** | Two daggers, thieves' tools, gaming set, bedroll, pouches | 25 sp | 1 | 1 | ~100 sp |
| **Monster hunter** | One **silvered** weapon (dagger, spear, axe, mace, warhammer, flail, shortsword or longsword); hide jerkin, torches, rope, a trophy, bedroll, waterskin | 3 sp | 2 | 0 | 105–125 sp (55–75 without the silvering) |

**Known settings:** as in the database; e.g. Guard: town watches and gatehouses, law and its enforcers; Scribe: town halls and chanceries, records and those who keep them.

## Economy and prices

> **Status: saved for later.** Every item has a price in the database (`items.price_copper`), but **no page shows prices yet**; the DM's price tables come later. The source is Michal's *Central European Pricelist & Economy (1300–1400) for 5E* (2026-10-31). What follows is its outline, adapted to our rules.

### Coins

- **1 gp = 100 sp, 1 sp = 10 cp** (ours already). **Silver is the everyday currency.**
- **Anchor:** 1 sp = 1 Prague groschen, a day's unskilled wage (St. Vitus site, 1372). 1 cp ≈ a heller: a mug of cheap beer. 1 gp is 3–4 months of a labourer's pay; no real coin that big existed, so treat it as a heavy "great gold" or a bookkeeping unit.
- **In-world units:** a *kopa* = 60 sp ("three kopy" = 180 sp); a florin = 16 sp by default (14 c.1360, 18 c.1385, 22–24 after 1400).
- **1 Material = 1 sp** (ours already) matches the pricelist's "one material at 1 sp".

| Amount | Buys |
|---|---|
| 1 cp | A mug of beer, a bread roll, a torch, a foot toll |
| 1 sp | A day's wage, a chicken, a block of cheese |
| 10 sp | Leather boots, a calf, a plough |
| 1 gp | Two cows, a cheap riding horse, a basic sword |
| 10 gp | A simple house in Prague's New Town, a good warhorse |
| 100 gp | A showpiece burgher house, a small village |

### Re-pricing 5E

- **Base rule:** a 5E price of X gp becomes **X × 10 sp**; 5E copper and silver prices stay about as they are.
- **Cut hard:** armour (plate 1,500 gp → 480 sp), horses (riding horse ~150 sp, destrier 12–24 gp), livestock (halved), food and lifestyle (cut about 10×: modest living is 1 sp a day).
- **Raised:** clothing and books, which 5E undercharges (common clothes 40 sp, fine clothes 300 sp, a book 150 sp).
- **Swords are the expensive weapon** (longsword 120 sp); village iron and polearms are cheap (spear 4 sp, halberd 25 sp).
- **Silvering** a weapon, or ten pieces of ammunition: **50 sp** *(confirmed, 2026-11-08; 5E's 100 gp)*. About a third of a longsword: affordable for a monster hunter, not an afterthought.
- **Not available:** spyglass. Acid, alchemist's fire, antitoxin, poisons and potions follow the Material rules.

### Crafted substances

- **Shop price = (Material × 1 sp + labour) × 1.25**, minimum 2 sp a batch. Labour at a master's 3 sp a day. Shortcut: Material × 1.5, rounded up.
- Fits our potions and poisons as they are: a burn ointment worth 5 points costs 5 Material to make and about 9 sp in a shop.
- Regional and event modifiers apply to the Material only. A village herb-wife charges 5 cp per Material for purely local remedies.

### Prices move

- **Final price = base × season × region × event**, rounded to clean coins. Grain swings most (±30% by season, ×2–4 in famine); arms and horses ×1.5 in war (warhorses ×2); a siege multiplies food by 5 or more.
- **Regions:** big towns cheapest for imports and dearest for food and lodging; mining towns +25–50% on food, lodging and labour; villages cheap food, dear or missing manufactured goods.
- **Haggling:** optionally roll 2d6 for the day's price (2: −30%, 3–4: −15%, 5–9: list, 10–11: +15%, 12: +30%). *Ours:* a won haggling roll (a Charisma skill such as Juggler's *Influence and deception* or Medic's *Negotiation*, with a known setting's +1 if the DM allows it) moves it one step the buyer's way. It replaces the source's Persuasion check.
- **Pawnbrokers pay half** the list price.

### Wages, lifestyle, property

- **Wages:** labourer 1 sp a day, carpenter or mason 2–3 sp, master craftsman 3–5 sp, foot soldier 1.5–2 sp, crossbowman 3 sp, mounted man-at-arms 5 sp, knight leading a troop 10–20 sp.
- **Adventurers' hazard pay** is 2–3× a soldier's: 10–15 sp a day of real danger. Escort duty 10–20 sp a job, a bandit bounty 30–60 sp each, a monster or a lord's errand 50–100 sp, loot 5–30 sp.
- **Lifestyle per day:** squalid 3 cp, poor 6 cp, modest 1 sp, comfortable 2 sp, wealthy 5 sp, aristocratic 20 sp+. *Ours:* comfortable or better is what a **quality rest** needs (safe, comfortable, stress-free); squalid and poor nights are **poor rests**.
- **Hirelings:** untrained 1 sp a day, skilled 3 sp. This agrees with our [companions'](#companions) payments: a payment is the companion's bonus in silver.
- **Property:** a town house 4–10 gp, a lán of farmland 9–15 gp, a village 100–250 gp, a fortified manor 150–300 gp, a small castle 1,000–3,000 gp. Useful once characters gain Standing.
- **Taxes, tolls and fines** (berna, tithe, bridge and gate tolls, Casimir the Great's compositions) are in the source for flavour; a city gate is 1 cp on foot.

### Starting money and saving for plate

- **Allowances:** the pricelist gives 5–150 sp on top of the gear. Ours fold them into the background balance above.
- **Plate is a goal, not a starting option.** Good plate (480 sp in pieces) takes 6–10 jobs. *Ours:* characters start at level 3, 7 or 9, so plate comes with money earned in play, not with a level.
  - **Piece by piece** is now the natural path: gambeson, a coat of plates, a bascinet, then arms and legs, trading old pieces in at half value.
  - Second-hand plate: about 300 sp, plus 30 sp and a week to refit it (no harness relief until then).
  - A patron (the plate stays the lord's), or instalments with a debt collector behind them.
- **Keeping it expensive:** upkeep about 1 sp a week on the road; full plate marks the wearer as rich, so tolls, prices and bandit interest rise. The bespoke knightly harness (about 45 gp) gives prestige only.

### Item prices in the database

Every item has `price_copper`, set in the item editor (admin only) and never shown to players. Values follow the pricelist; *(est.)* items are interpolated (a quiver 1 sp, a pavise 40 sp, plate legs 110 sp). Kit pieces are priced so a kit adds up to the pricelist's kit price (thieves' tools ≈ 30 sp). Sentimental items (a guild letter, a pet mouse) are worth nothing.

## Traits

*(Planned.)* A perk-like entity tied to a character. A trait is a **challenge perk** with both a **positive and a negative effect**, similar to the negative perks in Kingdom Come: Deliverance II's hardcore mode. It has a one-line **flavour** text, a short description of what it does, and its upside and downside.

- **Source:** players pick from a list of **premade traits**, or **create their own** to help with roleplay.
- **How many:** no limit; a player can take as many as they like.
- **Custom traits need approval** from the campaign DM, who checks that the downside balances the upside.
- **Later:** the DM can grant traits as a **story event**, and a trait can be **removed**, e.g. by overcoming it in the story.
- **They must affect play,** not only roleplay: the upside and downside hook into the rules (rests, the Danger Level, Scars, advantage, costs to attempt). Illnesses are typical, but not required.
- **Premade traits** *(2026-11-15)*: Insomniac, Short fuse, Show-off, Drunkard, Coward, Superstitious, Night-blind, Manic-depressive (a d20 after every rest: even, Soul and Charisma Danger Level starts 1 lower; odd, 1 higher), Pious (advantage resisting seduction and temptation; disadvantage resisting alcohol, and anything immoral costs 1 Soul to attempt).
- **Not for new players** *(2026-11-16)*: the editor's Traits page says so in a story box; a newcomer who wants a flaw or a habit writes it into the personality instead.
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
- The **DM of a campaign the character is in** can add **Scars**, manage **resources** (exhaustion, healing, coins, Material) and **grant levels**. Levels are granted and undone as in [Granting levels](#granting-levels-2026-11-17).

**Same character in several campaigns:** a character can appear in more than one campaign as a shared **ghost**.
- The **build is shared**: classes, levels, perks and resource split. A level granted by any campaign's DM applies everywhere.
- **In-play state is per campaign**: Scars and exhaustion are tracked separately in each campaign.
- **Inventory is shared**: items, coins and Material travel with the character. An item broken in one campaign stays broken in the others.
- The use case is **guest appearances**: a character visits another campaign, and the player gets to experience it with their own character.
- For two **simultaneous** campaigns, the player should make two different characters.

A user's role is account-wide. A user with the `dm` role is the DM of the campaigns they create, and can still play characters in other people's campaigns.

## Rulebook pages

**Built** at `/rulebook` (public, no login needed), following the structure below.

- **Admin-editable:** pages and chapters live in the database (`rulebook_chapters`, `rulebook_pages`). Admins edit them at `/admin/rulebook`: Markdown with shortcodes, a live preview, image uploads (header, side or plain; a plain one can take `width` and/or `height`, and `align`; on a header or side picture `align` picks the part that stays in view: `top`, `bottom left`, `30%` or `20% 70%`), and ordering of chapters and pages. The front page has the slug `index`.
- **Shortcodes:** examples (`:::example`), notes, formulas, resource names (`:body`), rolled dice (`:roll[d6 4 2]`), resource bars, pictures, videos (`::video{src="…"}`: a YouTube link becomes an embedded youtube-nocookie player, any other link plays as a file; the editor's *Upload video* sends MP4, WebM or MOV up to 50 MB straight from the browser to the public `videos` bucket, which only admins can write to) and cards (`::::cards` with `:::card`s inside; `{cols="2"}` or `{cols="3"}` for rows, three only on extra-wide screens), stat blocks (```` ```npc ```` and the other kinds: `companion`, `unit`, `network`, `organization`, `ritual-item`; any can take an `emblem:` picture and an `allegiance:`; a toolbar button inserts a template) and bestiary creatures by id (`::creature{id="wyvern"}`). The editor has a cheat sheet. Dice notation like 2d6 gets its die icon automatically.
- **Two languages:** every page and data field can hold English and Czech (`English |cs| Czech`, or the editor's tabs); readers switch in the navbar. See *Languages* in [visual-language.md](visual-language.md).
- **Data blocks:** races, backgrounds, languages, traits, weapons, aspects and class cards are read from their own tables (`::races`, `::aspects`, `::classes{rank="basic"}`, …), so the other admin pages update the rulebook directly. Each class's own page is still built in code from the class data.

Drafted while writing the pages, to confirm:
- **Conditions:** "automatically fails Strength/Dexterity saving throws" became "automatically loses Body defense rolls"; Restrained's "disadvantage on Dexterity saving throws" became "disadvantage on Body defense rolls".
- **Conditions:** 5E's "a hit within 5 feet is a critical hit" (Paralyzed, Unconscious) stays a critical hit, within 1 m (see [Rolls](#rolls)).
- **NPC damage dice:** d4 weak, d6 normal, **d8 or more for big threats** (ogres, trolls), and anything the DM likes for gargantuan ones.
- **Bows and crossbows** in the weapon table use the 5E ranges converted at 5 ft = 1 m (shortbow 16/64 m, longbow 30/120 m).

**Writing guidelines**
- **Short, focused pages:** each page covers one part of the rules.
- **Story examples:** each rule gets a short story example, like the old site's Michal-and-the-burgmaster's-daughter examples.
- **Plain, direct language** in the author's voice: no padding, no flowery or overly descriptive "AI-sounding" prose. The old site's tone (dry, joking, to the point) is the reference.
- **Old example images:** the old site's `public/img/classes/advanced/warrior-monk.webp` (git commit `60a40a6`) illustrates Zara the Recluse in the class-blending examples (Fighter 1 / Juggler 5 / Warrior 1). Restore it for the "How classes work" page.
- **No standalone perk list.** The old Perks page was a debug page. Perks appear on the class and race pages they belong to.

**Structure** (built):

**Consolidated 2026-11-14:** every page after Manoeuvres rewritten in prose with explanatory examples and notes; each rule stated once (poisons on *Traps and hazards*, armour in a hit on *Defending and getting hit*, travel rules on *Travel* with the tables in *Useful tables*). English only for now: the old Czech halves of these pages were dropped and get rewritten once the English settles.

- **Introduction** *(the chapter was called "Finished" until 2026-11-15)*: What this game is · Dice rolls (including saving throws) · Advantage · Bonuses
- **Classes:** How classes work · Basic classes · Advanced classes and aspects · Mighty classes · one page per class (skills, aspects, perks)
- **Resources:** Resources · Danger Level · Cost to attempt · Exhaustion · Scars · Healing · Item scars · Dying
- **Combat:** Turns and actions · Manoeuvres · Defending and getting hit (the defense roll, undefended attacks, threat dice and armour in a hit, resistances) · Conditions (with penalties as mirrors of the manoeuvres) · NPCs
- **Magic:** Casting magic · Durations and concentration · Sigils · Ritual items · Control and mind reading · Countering magic · Substances (poisons, narcotics, potions, elixirs, with a table of what works on what)
- **Equipment:** Weapons · Armour · Item scars · Traps and hazards · Crafting
- **Characters:** Creating a character · Races · Backgrounds · Languages · Traits · Leveling
- **Companions and power:** Companions · Organizations and Standing · Networks · Units · Battles and the map (the grid and scales merged in, 2026-11-14)
- **World:** Coins and Material · Travel (pace, tasks, weather, encounters, the calculator) · Sieges
- **Useful tables** *(draft, 2026-11-08)*: Speeds · A day's travel · Ground · Weather · Random encounters · Digging and mining · Fortifications (walls and gates, roofs and small things, merged 2026-11-15) · Siege engines. Lookup tables for the DM, from the drafts under [Travel](#travel), [Digging and mining](#digging-and-mining-draft) and [Structures and siege engines](#structures-and-siege-engines-draft); keep both in step.

The pages added on 2026-10-28 hold rules only; their examples and story bits are Michal's to write. The weapon table on *Dice rolls* is the `::weapons` block, filled from the item list.

## Campaign management

Built so far: a campaign overview (cover, name, description, DM, characters) and a campaign updates feed.

- **Creating:** users with the `dm` or `admin` role start campaigns at `/campaigns/new` and become their DM.
- **Players, not characters** *(2026-11-17)*: the DM adds **players** (any account but their own) and removes them. A player then **puts one of their characters forward**, changes it or withdraws it, on their own card; until then the card shows the player's name and avatar. A player added without a character already sees the campaign and its updates, and can post. A player can leave ("Leave campaign").
  - **Merit points** belong to the player's place in the campaign (`campaign_players`, one row per player), so they stay when the character is swapped.
  - In the database: `campaign_players.player` (unique per campaign), `character_id` nullable; the player sets it through `set_campaign_character`, never by a direct update.
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

The magic, NPC, manoeuvre and poison Q&A resumed on **2026-10-28** (Q14o, Q14p, Q7c, Q11b, Q11c, Q1a, the readings, merit points and the poison leftovers answered). Resume here.

**Pending question:** none from Q20–Q22; next up are the leftovers under *Still open after that*. **Q22**, substances and traps, is fully answered (2026-11-08).

**Still open after that:**
- ~~**Units for magic**~~: answered (2026-11-08). A size ladder (palm, witch's hut, farmstead, village; one Widespread per step, tied to the grid); strength described in words only.
- **Q18g, Power:** kept for now, not confirmed; revisit once organizations have been played.
- **Rules still to write:** mighty class perks (no skills; including the Standing 3–5 perks, and Warlord's perks for creating and commanding military units).

**App and data follow-ups:** written into the app on **2026-10-28**: the rulebook pages (rules only; Michal writes the examples), mighty class prerequisites, all 30 aspects, the shared *Dealing with supernatural beings* skill, race speed, each weapon's free manoeuvre (item editor and the `::weapons` block), per-campaign merit points (campaign page) and the pool-under-2 warning. Still to do:
- Perks still to write: Necromancer perks for crafting lasting magic items, strong manoeuvre perks, cruel manoeuvre perks for mighty classes, the Ravager's armour-ignoring perk, (Done: the Monk aspect's unarmed-fighting perks, 2026-11-14; *Omni potion*, *Unusual poison*, *Trophy hunter*'s bonus dice, *Your lips are venomous poison*'s price, *Iron liver*.)
- Rulebook examples and story bits for the new pages (Michal).
- *Power* (organizations) isn't in the rulebook, since it isn't confirmed.
- **Pricing, modular armour and backgrounds** (2026-10-31): the code is in, but the database part waits in `supabase/migrations/2026103112*.sql` (schema, then items and backgrounds, then the rulebook armour paragraphs); applying it from the session was declined. To confirm: **scarring armour breaks one piece** (replaces "rating drops by 1"), and the background balance.

1. ~~Resource pools~~: answered (15 points to split).
   - ~~Q1a~~: answered (one point per level-up; see Leveling). ~~A cap per pool?~~ Answered: no cap or minimum; a warning below 2, and the DM handles tanks by raising their Danger Level.
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
   - Answered: all ten advanced classes have aspects at 4 + 1, 3 + 3 and 1 + 4 (changed from 4 + 2 on 2026-11-14, so a 5 / 1 split isn't left without one) (see [Aspects](#aspects)). Aspects for mighty classes still need defining.
5. ~~Advantage~~: answered (3d6 keep best two; 2d20 keep higher; "Advantage dice" are now **bonus dice**).
   - ~~Q5a~~: answered (disadvantage mirrors advantage; sources don't stack). **Changed:** disadvantage always wins and cancels advantage; advantage never cancels disadvantage (unlike 5E). The rulebook's Advantage page still says they cancel out.
6. ~~Non-unique skills~~: answered (anyone can attempt them, with no class bonus).
7. **5E leftovers:**
   - ~~Saving throws~~: answered (5E's against an attacker or caster are **defense rolls**: reaction challenges using the action or the Defense manoeuvre; against the environment, a **saving throw** is our skill check).
   - ~~Q7a~~: answered (the attacker makes a skill check to land, then rolls damage by threat size: d4, d6 or larger).
   - Strength/Dexterity saves in the Restrained and Unconscious conditions need rewording to a resource, or dropping.
   - ~~**Q7c, saves without stats**~~: answered. Saving throws are skill checks with any class that fits the described approach; skills follow areas of expertise, not stats. A table of default classes sets expectations (see [Saving throws](#saving-throws-confirmed)).
   - ~~Metres or feet?~~ Answered: **metres**, for player legibility.
   - ~~Q7b~~: answered (simplified 5 ft = 1 m).
8. **Content gaps:**
   - Skills and perks for the mighty classes, and a description for Necromancer.
   - ~~Armour~~: answered (none 0, light 1, medium 2, heavy 3; heavy costs 2 Body before acrobatic tasks).
   - ~~Q8a~~: answered (light 0, medium 1, heavy 2 Body, for any activity the armour would hinder).
   - ~~Q8b~~: answered (only for activities the item is reasonably involved in, creative uses allowed; the points are unspecified and leftovers are lost).
   - ~~The scar-healing example's gold/silver mismatch~~: superseded (healing now uses resources, substances or Material, not coins).
9. **Content to keep:** which old perks and spells stay, get cut or get reworked?
10. ~~Characters in several campaigns~~: answered (shared ghost; build and levels shared, Scars and exhaustion per campaign; guest appearances; simultaneous campaigns use separate characters).
    - ~~Q10a~~: answered (inventory is shared across ghosts).
11. ~~Backgrounds~~: answered (inventory, coins, Material, languages and known settings; no proficiencies).
    - ~~**Q11b, known settings**~~: answered, **changed 2026-11-16**. No flat bonus; the DM may allow a temporary +1 when the player asks and it fits.
    - ~~**Q11c**~~: answered. When allowed, it's **+1**, not advantage, so it stacks with advantage from other sources.
    - **Q11a:** A draft list of 10 backgrounds and 8 languages is in the doc; the background kits and coins still need review. Racial languages are answered.
12. ~~Traits~~: answered (premade or custom; any number; the DM can grant more later).
    - ~~Q12a~~: answered (custom traits need the campaign DM's approval; traits can be removed).
13. ~~Rulebook structure~~: answered (short single-topic pages with story examples, plain language, no standalone perk list). The proposed structure is in Rulebook pages.
14. **Magic** (see [Magic](#magic)):
    - DrD2's magic chapter is the proposed base (see [Proposed base](#proposed-base-dračí-doupě-2)); its clashes with 5E and the old spells are listed under [Conflicts](#conflicts-with-5e-and-our-current-rules).
    - ~~**Q14a, casting roll**~~: answered. A skill check when unopposed, a challenge against a resisting target. A failed cast can be averted with exhaustion or a Scar.
    - **Q14b, price:** ~~common scale?~~ Answered: a spell's price works like any other perk's (none, or an activation price). Core spells are only unlocked from the start, not automatically free. A free spell still needs its components. ~~Hard circumstances?~~ Answered: a DM-set cost to attempt, paid before rolling, like armour encumbrance. Sigils' 1 point per action is the same rule.
    - ~~**Q14c, latent magic Scars**~~: answered. A level-1 Scar, as a blank payment with no temporary points, enters **magic mode**. It lasts until the end of the conflict, or a reasonable continuous stretch of time outside combat. The Scar's story is free (an elixir, a cut palm), and it goes into any pool the player likes.
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
    - ~~**Q14l, control**~~: answered. Kept separate: Charmed leaves the target its own will; control (Mage's and Shaman's puppeteering) is an active act, DrD2-style, with the target as a companion. Companion rules still need writing.
    - ~~**Q14m, Incantor skills**~~: ~~*Ritual items*~~: answered, Incantor only (stays unique). ~~*Dealing with supernatural beings*?~~ Answered: **non-unique** with highly intelligent beings that can speak (bargaining with a demon), so anyone can try; **unique** (Incantor only) with all others. The Incantor always adds their class level. **Witcher and Ranger** have it as a skill of their own, adding their class level, with all supernatural beings. *Blessings and Curses* stays an Incantor core spell. Q14m is fully answered.
    - ~~**Q14n, sigils**~~: ~~are DrD2 glyphs our sigils?~~ Answered: yes. ~~Which classes get them?~~ Answered: every magic class, through a purchasable sigil perk for its school. ~~Sigil Guardian?~~ Answered: a speciality that sets a trigger condition. ~~Eye Sigil core or bought?~~ Answered: it stays an Incantor core spell, the only free sigil. ~~Mighty Amulets?~~ Answered: it waives the 1 Material per stored point in a ritual item; the charging limits stay. Q14n is fully answered.
    - ~~**Q14o, counterspells and breaking**~~: answered. DrD2's counterspells (a won challenge, against the ritual or the spell, with any school that makes sense) and spell breaking (same skill, range, matching resources, knowing the spell) are adopted. *Berkano Sign* stays as a Witcher exception: 1 Soul breaks one spell targeting the Witcher, with none of the breaking requirements.
    - ~~**Q14p, the third roll**~~: answered. A *výzva* is basically a 5E saving throw against an environmental effect, and for us it's a plain skill check. Which class applies is **Q7c**.
15. **NPCs** (see [NPCs](#npcs)):
    - ~~**Q15a, overpowering**~~: answered. Three tracks (Body, Soul, Charisma) replace hit points; Body works as 5E hit points and is the largest; 0 in any track overpowers the NPC.
    - ~~**Q15d, social and mental damage**~~: ~~what does a won roll deal?~~ Answered: the temporary Danger Level the NPC faces as it stands, set by the DM and not tracked afterwards. ~~Class level?~~ Answered: it adds, like weapon damage. Q15d is answered.
    - ~~**Q15b, averting failure**~~: answered. Ordinary NPCs can't avert failures. Important NPCs get 1–3 Fate, like Legendary Resistance; 1 Fate turns a lost roll into a win, and it comes back once a day (next sunrise).
    - ~~**Q15c, bonus scale**~~: answered. Usually like player characters (up to +5); legendary NPCs can go up to **+8**, but only in incredible instances.
16. **Manoeuvres** (see [Manoeuvres in DrD2](#manoeuvres-in-drd2)):
    - ~~**Q16a, Cunning**~~: answered. Ours stays (prone, grapple or push); DrD2's Danger Level version isn't used.
    - ~~**Q16b, rules of use**~~: answered. ~~Timing?~~ Answered: DrD2's timing (see *When to declare*). Cunning is declared after the attack lands. Mighty is declared before the roll, with no penalty for missing (changed 2026-11-01). ~~"Free when you have advantage"?~~ Dropped: any advantage on an action is a free Precise, on initiative a free Quick. ~~How many per action?~~ One manoeuvre, free ones and Quick included; Defense and a critical hit's free Mighty don't count (changed 2026-11-01; it was one paid manoeuvre). Conditions are to be reworded to name the manoeuvre ("attacks against a prone target are Precise").
    - ~~**Q16c, Widespread and areas**~~: answered. Every multi-target action needs Widespread. Spells with an unspecified effect (usually core spells) pay for Widespread to reach more targets or a larger amount. Spells with a specific effect (Fireball) have a fixed area, paid for by their activation price (like a 5E spell slot), and Widespread can't change it.
    - ~~**Q16d, weapon manoeuvres**~~: answered, **changed 2026-11-11**. Weapons grant no free manoeuvre; shields keep a free Defense once per round; a perk's advantage means only Precise; other perks name a manoeuvre (*Got you*) or grant strong manoeuvres across a class's skills (see *Weapons grant no free manoeuvres*). *Got you*, *Flying weapon* and *Legendary warrior* no longer mention replacing the weapon's manoeuvre. (Was: each weapon grants one, defaulting by damage type.)
    - ~~**Q16e, mastery**~~: answered. Strong manoeuvres come from class perks; cruel manoeuvres from mighty class perks; NPCs get either as stat-block abilities. Class level alone unlocks neither.
    - ~~**Q16f, NPC manoeuvres**~~: answered. ~~How do NPCs pay?~~ Answered: manoeuvres granted by their weapon or stat block are free; an ungranted one costs 1 point of a track, usually Soul or Charisma. ~~Cruelly mighty against them?~~ An NPC that defends first takes damage before the challenge roll; one that doesn't takes +2 damage dice. Damage before the roll is one die of the attack (Body) or the attacker's class level (Soul, Charisma). The full Mighty table is under *The Mighty versions*.
    - ~~**Q16g, penalties**~~: answered. Imprecise, Slow, Feeble and Foolish join the conditions under their own names (no Poisoned). A condition's disadvantage blocks every source of advantage. Duration follows the cause. Scope is set by the source: one skill or skill group, or everything.
17. **Potions and poisons** (see [Potions and poisons](#potions-and-poisons-drd2)):
    - ~~**Q17a, poison strength**~~: answered. Strength is the poison's Danger Level; one effect only, as in 5E. Poison damage is strength d6 against NPCs and a threat die by strength against player characters (1–2 d4, 3–4 d6, 5–6 d8, 7+ d10), confirmed for now. Armour doesn't reduce it.
    - ~~**Q17b, resisting**~~: answered. A Body skill check; player characters can avert a failure by exhausting Body equal to the strength (then no effect); ordinary NPCs suffer it; important NPCs can spend Fate.
    - ~~**Q17c, timing**~~: answered. A default poison takes effect at the next sunrise or sunset and wears off at the one after. Immediate poisons are a speciality: the Fast property of *Unusual poisons* for player characters, a special ability for NPCs.
    - ~~**Q17d, delivery**~~: answered. Swallowed (Medic), contact (Rogue, unique) and breathed in (Alchemist, unique). Weapon poisons count as contact poisons, under the Rogue's *Contact poisons*.
    - ~~**Q17e, potions**~~: answered. A potion treats one kind of Scar, named in the story when it's made (burns, cuts and bruises, …), Body by default. The Medic perk *Omni Potion* makes one that heals unspecified wounds. Q17 is fully answered.
18. **Companions** (see [Companions](#companions)): DrD2's *pomocníci* are the base, retrofitted onto 5E-style stat blocks.
    - ~~**Q18a, stat block and Bond**~~: answered for now. An NPC stat block whose tracks take the hits, plus Bond to pay for averting failures and manoeuvres. Bond scars are for the relationship. Renamed from henchmen to **companions**. Averting costs Bond equal to the Danger Level, like a player character's exhaustion.
    - ~~**Q18b, turn order**~~: answered. As 5E's subtypes: familiars and summons act right after their master; animal companions and hirelings roll their own initiative.
    - ~~**Q18e, companions' Danger Level**~~: answered. The master's by default; the DM sets another when the companion's situation clearly differs.
    - **Q18c, networks:** direction agreed. Anyone can build one by recruiting its commanders in play; Scout (underworld), Warrior (high society) and Mage (arcane society) have advantage finding, navigating and starting theirs; networks need correspondence and send tips and reports. Upkeep is any **material attention**, not just letters. A character can hold any position in a network: a grunt's place is cheaper but easier to lose. Still open: how this works in the rules (see Q18f).
    - ~~**Q18f, Standing and the mighty**~~: answered. One rule: networks are small organizations, and anyone can build and lead one at Standing 1–2. Standing 3–5 comes only from mighty class perks. Units are commanded by mighty classes or lent in special story beats; creating units and the command skills belong to mighty classes (military ones to the Warlord). Was: adopt DrD2's organizations, Standing and Power? Are networks just small organizations with the character's position as Standing? Is Standing open to everyone, with a bigger option for the mighty classes?
    - ~~**Q18i, rank vs importance**~~: answered. Split into the organization's **Reach** (1–5) and the character's **Standing** (rank, 0 up to the Reach; the leader's equals the Reach).
    - **Q18g, Power:** kept **for now**, not confirmed. Michal's doubts: whether players can track a fourth number next to Body, Soul and Charisma, and how hard or easy climbing a rank and spreading an organization's influence would be. Gained from adventure rewards and self-made complications, spent on Standing, companions and favours.
    - ~~**Q18j, organizations acting**~~: answered. The part the character commands acts as a network companion: bonus bought with money up to Standing + 2 (a payment = the bonus in silver), one specialisation, 12 track points, Bond from 0 (5 payments per +1) averting at the task's Danger Level.
    - ~~**Q18k, network upkeep**~~: answered. One payment's worth of material attention per in-game week (usually per session); kept up gives a tip, skipped gives a level-1 Bond scar.
    - ~~**Q18h, units**~~: answered. Body track × size (handful ×2, band ×4, horde ×8); Soul and Charisma at the average member's; no Fate (companion units avert with Bond); DrD2's six fight rules as written.
    - ~~**Q18l, units' Danger Level**~~: answered. None, like any NPC. Enemy units take track damage only from widespread actions reaching enough members; companion units use their master's Danger Level.
    - ~~**Q18m, unit damage**~~: answered. The Body track is the unit's hit points; one damage roll per qualifying action; the unit drops a size when Body falls to the next smaller size's maximum.
    - ~~**Q18d, familiars**~~: answered. From an Incantor perk spell, like *Find Familiar*.
19. **Mighty classes from DrD2's master classes** (see [Master classes in DrD2](#master-classes-in-drd2)):
    - ~~**Q19a, merging**~~: answered (see *Our merge*). Warlord ← Leader; Ravager ← Destroyer; Shadow ← Shadow + Avenger's assassin side; Inquisitor ← Inquisitor + Paladin + the Necromancer's investigative blood magic; Zhrets ← Žrec + Elementalist water and earth; Necromancer ← Necromancer + Wonderworker + Elementalist fire and air.
    - **Q19b, blood magic:** draft only: *Last memory* and the Mage *Necrolog* to the Inquisitor, *Blood toll* stays with Necromancer. Perks are settled later.
    - ~~**Q19c, prerequisites**~~: answered. Warlord: Warrior, Rogue, Scout. Ravager: Warrior, Ranger, Witcher. Shadow: Rogue, Scout, Mage, Alchemist. Inquisitor: Warrior, Warlock, Witcher, Mage. Zhrets: Ranger, Druid, Shaman. Necromancer: Warlock, Alchemist, Shaman, Druid. Every advanced class leads to two, Warrior to three.
    - ~~**Q19d, Elementalist**~~: answered. Kept split: fire and air to Necromancer, water and earth to Zhrets. *Later:* maybe let Zhrets reach all four elements through a purchasable perk, even without Warlock.
20. **Bestiary** (see [Bestiary](#bestiary)): five root categories confirmed: Animals, Humans and humanoids, Undead and reanimated, Monsters, Fiends.
    - ~~**Q20a, combat skills**~~: answered. "Humans and beasts" (Fighter, Hunter, Juggler, Warrior, Scout) means exactly Humans and humanoids plus Animals. Trolls and giants are Fighter's; wyverns and lesser vampires need Ranger or Witcher.
    - ~~**Q20b, subgroups**~~: answered. The draft subgroups are confirmed and in the app (see [Subgroups](#subgroups)).
21. ~~**Domains, sieges and war**~~ (see [Domains, sieges and war](#domains-sieges-and-war)): answered 2026-11-08, from DrD 1.6's *Svět*.
    - ~~**Q21a, the domain model**~~: answered. Seasonal turns with the mood scale, not the network rules: running a domain is active upkeep (see [The seasonal turn](#the-seasonal-turn-confirmed-2026-11-08-numbers-are-a-starting-point)).
    - ~~**Q21d, seasonal numbers**~~: answered. The draft tables are the starting point, to adjust in play.
    - ~~**Q21f, yield from holdings**~~: answered. Income is the sum of the domain's holdings (lány, mills, taverns, fishponds, tolls, markets, houses), per mood column.
    - ~~**Q21e, holdings in the turn**~~: answered. Building or repairing a holding is an upkeep action (+1); disasters hit specific holdings as well as the mood.
    - ~~**Q21b, fortifications**~~: answered. Wall sections, towers and gates have Body tracks and sturdiness; stores are counted in weeks (double the people, half the weeks); the storm gives defenders a free Defense, climbers a 1 Body cost to attempt and no defense, and falls are hazards by height.
    - ~~**Q21c, battles**~~: answered. 0 Charisma scatters a unit (gathered again a size smaller), 0 Body destroys it; panic hits touching units; an army breaks at a quarter of its units; the commander's duel (see [Battles](#battles-confirmed-2026-11-08)).
22. ~~**Substances and traps**~~ (see [Substances and traps](#substances-and-traps)): answered 2026-11-08, from DrD2's *nástrahy*, crafting and substances.
    - ~~**Q22a, one hazard rule**~~: answered. Every trap and harmful substance uses DrD2's five entries (Reach, Pool, Strength, Effect, Giveaway). Strength is the Danger Level to avert, the damage dice (strength d6 against NPCs, a threat die against player characters) and the price. One effect, no weak effect.
    - ~~**Q22b, cap**~~: answered. Strength is no higher than the maker's Soul pool. NPC hazards are pre-made, written as a hazard line with no maker's stat.
    - ~~**Q22c, armour against traps**~~: answered. Armour counts against darts, blades, rocks and blasts (off the Scar level and the Body cost of averting), not against poison, gas, acid, fire or falls.
    - ~~**Q22d, Alchemist prices**~~: answered. Explosives, corrosives and gases cost 2 Material per strength and lose 1 strength per metre from where they go off.
    - ~~**Q22h, sturdiness**~~: answered. The structures' threshold is renamed **sturdiness** and stays a threshold against rolled damage, for hazards too (the slight randomness is wanted). Tamped charges roll 2 more dice. DrD2's *Odolnost* isn't used.
    - ~~**Q22e, elixirs**~~: answered. Skill elixir (a free Precise, Mighty or Cunning with one named skill, 2 Material), master elixir (the Very version, 3), wonder elixir (an ability no human has, 5); each for the drinker's next action.
    - ~~**Q22f, lasting magic items**~~: answered. Only the Necromancer crafts them, through mighty class perks (from DrD2's Wonderworker: *Runesmith*, *Eternal spells*). Others make consumables; lasting artefacts otherwise come from the DM.
    - ~~**Q22g, crafting**~~: answered. Automatic with time, tools and a rest; otherwise a skill check; 1 Material a round in a hurry; improvised materials (0 Material) make strength-1 hazards that end at sunrise or sunset, and consumables with no effect. *Garden of Eden* harvests proper Material.
23. **Hidden classes** (see [Hidden classes](#hidden-classes-draft-2026-11-14)): a basic class the story grants, which doesn't combine into advanced classes. The Vampire is drafted; the twelve points under *Where it meets our rules* are open.
