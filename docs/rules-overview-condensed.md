# Rules overview, condensed

The whole ruleset in one file, written to be handed to a language model (or a new DM) that helps plan a one-shot or a campaign. It holds what's decided, with every table, and none of the history, DrD2 summaries or open questions.

- The full version, with sources and reasoning, is [ruleset-overview.md](ruleset-overview.md). When the two disagree, that one wins.
- *(Draft)* marks rules not confirmed yet. **Rule of thumb** marks advice for converting or improvising that isn't in the rulebook.
- Updated 2026-11-17.

---

## 0. Read this first: a briefing for the next model

You're about to work with a homebrew system that looks familiar and isn't. Most mistakes come from filling a gap with what 5E or DrD2 would do. This section is what I'd want to know before touching it.

### What you're dealing with

- **A hybrid, not a variant.** The engine (pools, Danger Level, averting failure, manoeuvres, magic as skills) comes from **DrD2**. The content (weapons, conditions, spells, monsters, the stat block format) comes from **5E**. When the two clash, the hybrid usually keeps DrD2's *idea* and 5E's *numbers*.
- **Player characters have no attributes and no hit points.** Never give one hit points, a Strength score, an AC or a saving throw bonus. Their pools (Body, Soul, Charisma, 15 points in all) are both their hit points and their stamina.
- **NPCs are the opposite:** 5E-like stat blocks whose Body track works as hit points, plus small Soul and Charisma tracks. They never exhaust; only important ones have Fate.
- **Setting:** gritty low-to-mid fantasy with a Central European feel (Bohemia around 1300–1400). Silver is the everyday coin, a gold piece is months of wages, plate is a fortune, lasting magic items are rare, and magic is real but rarely seen.
- **Status:** a living draft. Core resolution is confirmed, and much of it comes from the table. Much of the rest (NPC budgets, domains, battles, sieges, backgrounds, hidden classes) is new, marked *(Draft)*, and **untested at the table**. Treat those numbers as estimates.

### Strengths: what the system does well, so don't "fix" it

- **Every failure is a choice.** A lost roll isn't final: the player decides whether to pay at the Danger Level, take a Scar, or accept it. This is the heart of the game; protect it.
- **One lever for everything.** The Danger Level prices physical, mental and social risk alike, so a debate, a river crossing and a sword fight run on the same rule. A good DM moves it constantly.
- **Scars are story.** A Scar is a broken arm, a nightmare, a ruined name, not a number going down. Describe them.
- **Words win fights.** NPCs' Soul and Charisma tracks make fear, threats and bargaining real ways to end an encounter, often faster than steel.
- **Free-form builds.** Classes are skill bundles; everyone multiclasses, and advanced and mighty classes unlock from combinations. Odd builds are encouraged.
- **Few numbers, reused.** A hazard's strength is at once its Danger Level, its dice and its price; a scar level is a scar level everywhere. Lookup tables replace arithmetic.

### Caveats: where models (and people) go wrong

1. **Two kinds of Body.** A player character's Body *pool* (about 3–10) is spent at the Danger Level. An NPC's Body *track* (a guard 11, an ogre 59) is 5E hit points. Never compare them or convert one into the other.
2. **Damage is asymmetric.** Player characters roll weapon dice + class level against NPC tracks. NPCs roll a **threat die** (d4–d12) against player characters, and the result is a Scar level. NPCs never deal 5E damage to a player character.
3. **Defending costs the action.** A defense roll uses the action you were about to take, unless you pay the Defense manoeuvre or have a shield. An attack nobody defends against can't be averted. This drives action economy more than anything else.
4. **Disadvantage always wins.** Unlike 5E, any disadvantage beats any number of advantages. Advantage and disadvantage never stack.
5. **One manoeuvre per action,** free ones included. **Weapons grant no free manoeuvres** (DrD2 texts and older notes say they do; that rule was dropped).
6. **"Saving throw" means two things.** Against an attacker or caster, read it as a **defense roll** (a challenge). Against the environment (a trap, poison, a fall), it's a **skill check**. There are no 5E saves.
7. **Class levels stop at 5,** and there's no Extra Attack, so a party's damage stays around 5E's levels 2–4 however far they advance. **Don't scale encounters by 5E CR alone;** use the role budgets in section 5.
8. **NPCs have no Danger Level.** Only player characters (and companions, through their master) track one. Don't invent a per-NPC Danger Level.
9. **Magic is limited by design.** Core spells can't kill (chip damage at most). Every spell needs touch, symbolic touch, sight or contact through a sigil or substance. A specific spell's area can't be widened. Lasting magic items belong to the Necromancer only.
10. **"Humans and beasts"** in a skill name binds player classes: a Fighter's sword skill doesn't add its level against a wyvern (that's the Ranger and Witcher). NPC attack bonuses work against anyone.
11. **Similar words, different things.** *Fate* (an important NPC's 1–3 points that turn a lost roll into a win), *Bond* (a companion's pool), *merit points* (rewards for good play, one free resource point each), *level-up points* (advancement), *Power* (organizations, not confirmed). DrD2's *Sudba* and *limits* don't exist here as rules.
12. **Material is abstract** (1 Material = 1 silver of whatever's needed, named when spent), but rare ingredients must be found in play.
13. **This file is a summary.** The full [ruleset-overview.md](ruleset-overview.md) wins on any disagreement and holds the reasoning and open questions. The live rulebook in the app is what players read.

### How Michal (the designer and DM) likes things done

- **Story beats numbers.** When a rule and the fiction disagree, the DM decides; rules give the DM a starting point, not a cage.
- **Tables, not maths.** Precompute answers into lookup tables; prefer steps ("one column right") to multipliers. If you need a formula at the table, the rule is wrong.
- **Reuse before inventing.** A new effect should borrow an existing perk, condition, hazard line or stat block. A new subsystem needs a very good reason.
- **Propose, then write.** Suggest content (backgrounds, perks, tables, gear) in conversation and agree on it before it goes into the rulebook or the database.
- **Plain, dry, a bit joking.** No flowery or "AI-sounding" prose. Short sentences, concrete examples.
- **Mark what you made up.** Anything not in these rules is labelled **Rule of thumb**, *(est.)* or *(Draft)*, so it can be checked later. Never present an improvised ruling as an existing rule.

### My honest read

- **The core is elegant and holds together.** Resolution, averting, Scars and the Danger Level are consistent, and most later subsystems (hazards, units, networks, domains) are built on the same parts.
- **The risk is bookkeeping.** Three pools with exhausted and scarred boxes, Scar levels, merit points per campaign, Bond for companions: players may lose track. Keep the table light; don't add trackers.
- **Fights are swingy at high Danger Levels.** At 4–5 one bad round can empty a pool. That's intended for boss fights; it's harsh as a default. The default is 3 for a reason.
- **Watch these numbers** when they first meet play: NPC armour 3+ (fights drag), free Mighty on every NPC attack (pressure climbs fast), lopsided pools (a Charisma-0 brute breaks on the first threat), and the economy (silver amounts are realistic for the period, so players feel poor; that's on purpose).
- **When unsure, ask the DM** rather than guess. A short question beats a confident invention.

### Quick conventions

- **Units:** metres (5 ft = 1 m); silver as the default coin (5E's gold × 10 = our silver); a round is 6 seconds.
- **Terms** are capitalised as here: Body, Soul, Charisma, Danger Level, Scar, Fate, Bond, Material.
- **People:** refer to player characters as *they/them* or *you*.
- **Building NPCs:** follow section 5, from scratch or copied from a 5E or DrD2 stat block.

---

## 1. The idea

A gritty game built from **Dračí Doupě 2** (DrD2, a Czech RPG) and **D&D 5E**.

- **No attributes.** Characters have three **pools** (Body, Soul, Charisma) that they spend to push through danger.
- **Every roll bonus is a class level.** Classes are bundles of skills, and everyone multiclasses.
- **The Danger Level sets the price.** The worse the situation, the more each avoided failure costs.
- **No hit points for player characters.** They pay to avoid harm; what they don't pay for becomes a **Scar**.

---

## 2. Rolls

| Roll | When | Dice | Success |
|---|---|---|---|
| **Skill check** | An obstacle with no one opposing | 2d6 + class level | 9 or more |
| **Challenge** | Someone opposes you (a fight, a debate, a card game) | d20 + class level, both sides | Higher wins; ties go to the defender |
| **Defense roll** | You're attacked or targeted: a challenge you react with | d20 + class level vs the attacker's | As a challenge |
| **Saving throw** | A danger with no attacker (trap, poison, fall) | A skill check with a fitting class | 9 or more |
| **Initiative** | Start of a fight | d20 | Higher acts first |
| **Damage** | Hitting an NPC | Weapon or spell dice + class level | — |

- **Which class level:** the class that owns the skill used. A non-unique skill can be tried without the class, at plain 2d6 (or d20). A **unique** skill can't be tried at all without its class.
- **Odds of a skill check** (2d6 + bonus ≥ 9): +0 28%, +1 42%, +2 58%, +3 72%, +4 83%, +5 92%.

### Advantage and disadvantage

| | Skill check | Challenge, initiative |
|---|---|---|
| **Advantage** | 3d6, keep the best two | 2d20, keep the higher |
| **Disadvantage** | 3d6, keep the worst two | 2d20, keep the lower |

- Several sources don't stack: three advantages are one advantage.
- **Disadvantage always wins.** Any disadvantage makes the roll disadvantaged, whatever advantage it has (unlike 5E, they don't cancel). Paying for Precise or Quick on a disadvantaged roll is wasted.

### Bonus die

Some abilities give a bonus die (*Trophy hunter*: d4 at level 1 up to d12 at level 5). During the encounter, add it to **any one roll**. Once rolled, it stays.

### Merit points

- The DM awards one for **good play**: a clever plan, a good story, playing the character's personality.
- **Spending one** gives **one free resource point** of any pool: for a manoeuvre, or towards averting a failure.
- No cap. Tracked per campaign, meant to be spent within the session; they don't carry between campaigns.

### Hidden rolls

- The DM rolls **behind the screen** only when the result itself would tell the player something their character doesn't know (is there anything to find in this room?).
- **No averting a hidden roll:** the player can't avert a failure they don't know about. So **harm is always rolled openly**: a saving throw against a trap or poison is the player's own roll.
- **Hidden circumstances in a challenge:** when something secret cancels a player's bonus, the player still adds it openly, and the DM secretly adds the same amount to the other side.

### Critical hits

- A natural 20 on the challenge, or double 6 on the skill check, before a damage roll: a free **Mighty**. It sits outside the one-manoeuvre limit. A point already paid for Mighty on that roll stays spent.
- A hit from within 1 m on a **Paralyzed** or **Unconscious** target is a critical hit.

### Saving throws: default skills

The player says how the character deals with it; the DM accepts any class whose skill fits that approach. Skills follow **areas of expertise**, not stats.

| Danger | 5E save | Default skill (class, pool) |
|---|---|---|
| Dodging a trap, falling rocks, an explosion; balance | Dexterity | Acrobatics (Juggler, Body) |
| The same in the wild: a rockslide, a crumbling bank | Dexterity | Wilderness movement (Hunter, Body) |
| Holding on, breaking free, forcing a door | Strength | Strength (Fighter, Body) |
| Poison, disease, cold, hunger | Constitution | Endurance (Medic, Body) |
| A long march, hard labour, a heavy load | Strength, Constitution | Strength (Fighter, Body) |
| Fear, charm, mind magic, temptation | Wisdom | Willpower (Incantor, Soul) |
| Keeping face under threats or mockery | Charisma | Confidence and intimidation (Fighter, Charisma) |
| Noticing a trap or ambush in the wild | Perception | Wilderness survival (Hunter, Soul) |
| Noticing a trap or ambush in town | Perception | Urban survival (Juggler, Soul) |
| Recalling knowledge | Intelligence | Weapons and fighting → *Weapon knowledge* (Fighter); war and tactics → *Warrior knowledge* (Warrior); occult and history → *Scholarship* (Incantor); wounds and illness → *Healing the human body* (Medic); beasts → *Hunting* (Hunter) |

Advanced classes answer too when they fit: *Mechanisms* (Rogue) for a lock trap, *Aerial acrobatics* (Rogue) for a fall.

---

## 3. Resources

### The three pools

| Pool | Covers | Its Scars look like |
|---|---|---|
| **Body** | Strength, speed, agility, armed combat, climbing, sleight of hand | Wounds, illness, sprains, trembling hands |
| **Soul** | Knowledge, perception, focus, lockpicking, spellcasting, alchemy | Insomnia, anxiety, guilt, nightmares |
| **Charisma** | Persuading, intimidating, deceiving, reading people, taming animals | Mockery, a ruined reputation, being outlawed |

- Pools aren't hit points or skill: they're **how far you can push right now**. An empty pool doesn't mean collapse; pushing further costs Scars.
- The pool depends on context: a bow in a chaotic battle is Body; the same shot in an archery contest is Soul.
- **Starting pools: 15 points** split freely (the old example: Body 7, Soul 5, Charisma 3). No cap, no minimum; a pool under 2 gets a warning. A level-up point can buy +1.

### Danger Level

- One number for how risky the situation is. **Default 3.** It can differ per character: the knocked-down warrior faces 5, the caster on a hill 2.
- **To avert a failure, exhaust points equal to the Danger Level** from the skill's pool.
- The DM raises it for hostile, urgent or chaotic situations; players lower it with cover, distractions and preparation. It's the main dial for encounter difficulty.

| Level | Feel | Body | Soul | Charisma |
|---|---|---|---|---|
| 1 | A walk in the park | Crossing a calm river | Prying open a hayloft latch | A puppet show for children |
| 2 | Same shit, different day | A wild mountain stream | Picking a basic cell lock | Adventure stories for villagers |
| 3 | Time to file a safety report | A swollen river | Several locks on a merchant's chest | Impressing bored city folk |
| 4 | The danger is real | A river with floating debris | Disarming a dart trap in a steel lock | A flawless show for a critical audience |
| 5+ | "The fuck did I stumble into?" | A debris-filled river in a storm | Decoding mechanisms as the ceiling collapses | A forbidden performance for a decadent audience |

### Cost to attempt

Some things are hard before you start: pay the **cost to attempt** (exhaust points) **before rolling**, whatever the result. It comes **on top of** the Danger Level, from the skill's pool unless the rule names another; a Scar can pay it if the pool can't. Cases: armour encumbrance, ice magic on a hot day, tracking on packed earth, each action through a sigil, climbing a siege ladder, a forced march past 8 hours (1 Body per hour).

### Exhaustion and rest

- **Exhausting** marks points as spent (one diagonal stroke).
- **Poor rest** restores 3 exhausted points of your choice. **Quality rest** (safe, comfortable, no stress) restores all of them.

### Scars

- **Taking one to avert a failure:** when the pool is too low, take a Scar. It gives **2 temporary points**, spent at once; leftovers are lost. *Danger Level 3, 1 Charisma left: Scar, 1 + 2 = 3, averted.*
- **One Scar, one level:** never several Scars for one failure; a bigger need means one Scar of a higher level.
- **Scars the DM gives:** a failure not averted (falling into a trap, an undefended hit) becomes a Scar of the DM's choosing, with a **level**. A **level-N Scar blocks N points** of its pool until healed. Sleep doesn't heal it. *Level 2 Body: a slashed arm. Level 6 Body: a broken leg. Level 5 Charisma: banished from town.*
- **Which boxes:** a Scar can cross out exhausted boxes; players usually scar exhausted ones first.
- **Blank payments:** a Scar paid as a price (waking latent magic, Cruelly mighty) gives no temporary points.

### Healing a Scar

- **5 points per Scar level** (a level-2 Scar costs 10), plus addressing the cause (treating the wound, therapy, reparations), plus **one successful skill check per level**.
- The points can come from any mix of: the bearer's own pools (any of the three); a healer's pools when a perk allows (*Good Samaritan*); a healing substance made for that kind of Scar; Material at 1 point each (with the DM's agreement: 5 Material for a bandage); coins only when the DM allows (drinks in a tavern against a Soul or Charisma Scar, a bribe against a Charisma one).

### Dying

- If a Scar's level exceeds the pool's boxes not yet scarred (exhausted ones count), it blocks the **whole pool** and the character starts **dying**. So does any Scar on an already fully blocked pool.
- Body: physically dying (Unconscious). Soul: madness or a catatonic state. Charisma: reputation and self-worth ruined (paralysing anxiety).
- **Dying rolls** (all three pools), each turn a d20 with no bonuses, not necessarily consecutive: **10+** a success; **three successes** stabilise, **three failures** are the end. A natural 20 counts as two successes, a natural 1 as two failures; a hit taken while dying is a failure. Someone within touch can spend their turn helping with a non-unique skill check (Medic for Body, Incantor for Soul, Scout for Charisma).

### Item scars

- **Breaking your own item** gives 2 points towards the failed roll's pool, spent at once. Only for an item plausibly involved (a lockpick for a lock, a sword in a fight); creative uses allowed. Improvised items don't count, unless a perk says so (*Headcracker*).
- **Armour scarred by the DM:** one piece breaks and stops counting until repaired *(draft)*.
- **Repair:** 5 points (usually Material) plus a skill check, if plausible at all.

---

## 4. Combat

### Turns and reactions

- Rounds of **6 seconds**, in initiative order. Each turn: **one action** and **one movement** (splittable around the action). Some abilities give bonus actions.
- Actions: attack one target in reach, cast a spell, defend, disengage, dash, use an item.
- **Reactions:** the only one a player chooses is **defending**. The **free attack** comes from a trigger: when an enemy leaves your reach, make one melee attack against it, once per round. **Disengage** (an action) avoids giving free attacks.

### Defending

- A **defense roll** is a challenge with the skill that fits (parry: Fighter; leap aside: Juggler). It **always takes your action.** To keep the action, pay for the **Defense** manoeuvre (a shield gives one free per round).
- **Losing it** is a failure: avert it (exhaust the Danger Level, or a Scar) or take the hit.
- **Not defending:** the attacker makes a **skill check** (2d6 + bonus ≥ 9). If it lands, it **can't be averted**.
- **Cover**, melee too: half makes the attack **disadvantaged**; three-quarters disadvantaged and **armour rating +1** against the hit. Against an area effect, either gives an **advantaged** defense roll or saving throw. Total: no ranged attacks or aimed spells; area effects only if they get round it; a symbolic touch still works; *Sniper* shoots over it. A pavise is a shield when carried, half cover when planted (planting or picking up is an action, a bonus action with *Bastion*); a mantlet gives three-quarters, a wheeled siege mantlet total cover from the front. Cover doesn't lower the Danger Level by itself; the DM may if things calm down, or raise it under a rain of arrows.

### Threat dice: NPC hits on player characters

NPCs don't roll weapon damage against player characters. A hit that lands and isn't averted makes the NPC roll its **threat die** (choosing one for a new NPC: see *Building NPCs*):

**scar level = threat die − armour rating** (0 or less: absorbed, no Scar; the DM may break a piece of armour instead)

| Attacker | Threat die |
|---|---|
| Weak: a stray dog, a drunk with a bottle, chip damage from core spells | d4 |
| Normal: a bandit, a soldier, a wolf, small perk spells | d6 |
| Big: an ogre, a troll, big area spells (Fireball) | d8 |
| Legendary or gargantuan: a dragon, legendary magic | d10 or more |

### Armour

| Tier | From Protection / Burden total | Armour rating | Encumbrance (Body, a cost to attempt) |
|---|---|---|---|
| None | 0 | 0 | — |
| Light | 1–3 | 1 | — |
| Medium | 4–6 | 2 | 1 |
| Heavy | 7+ | 3 | 2 |

- **Rating** lowers Scars from hits, **and** the Body exhausted to avert a hit (minimum 1). At Danger Level 3: no armour 3, light 2, medium 1, heavy 1.
- **Encumbrance** is paid before stealth, acrobatics, swimming, running, anything the armour hinders.
- **Armour doesn't help** against poison, gas, acid, fire or falls.

**Pieces:** one per slot (under, body, head, arms, legs). Protection sets the rating, Burden sets the encumbrance.

| Piece | Slot | Protection | Burden | Price |
|---|---|---|---|---|
| Gambeson | Under | 1 | 1 | 30 sp |
| Hide jerkin | Body | 1 | 1 | 15 sp |
| Leather jerkin | Body | 1 | 1 | 30 sp |
| Mail shirt, scale shirt | Body | 2 | 2 | 150 sp |
| Mail hauberk (long, sleeved) | Body + arms | 3 | 3 | 240 sp |
| Coat of plates, breastplate *(harness)* | Body | 3 | 3 | 200 sp |
| Iron cap | Head | 1 | 1 | 20 sp |
| Kettle hat | Head | 1 | 1 | 30 sp |
| Bascinet with aventail *(harness)* | Head | 2 | 2 | 48 sp |
| Plate arms with gauntlets *(harness)* | Arms | 1 | 1 | 90 sp |
| Mail chausses | Legs | 1 | 1 | 60 sp |
| Plate legs *(harness)* | Legs | 1 | 1 | 110 sp |

- **Fitted plate harness** (plate body, bascinet, plate arms, plate legs, fitted by an armourer): **−3 Burden**. Second-hand plate needs a week and 30 sp to refit.

| Example set | Protection | Burden | Rating | Encumbrance |
|---|---|---|---|---|
| Gambeson + kettle hat | 2 | 2 | 1 | — |
| Militia: gambeson + mail shirt + kettle hat | 4 | 4 | 2 | 1 Body |
| Gambeson + coat of plates + kettle hat | 5 | 5 | 2 | 1 Body |
| Man-at-arms: gambeson + hauberk + bascinet + chausses | 7 | 7 | 3 | 2 Body |
| Full fitted plate | 8 | 5 | 3 | 1 Body |

**Shields** give a free **Defense once per round**; they add no rating. Buckler 5 sp, targe 8, round shield 10, heater or kite 15, tower shield 30, pavise 40.

### Weapons

5E's weapon table, ranges at 5 ft = 1 m, prices in silver. **Weapons grant no free manoeuvres.**

| Weapon | Damage | Properties | Price |
|---|---|---|---|
| *Simple* | | | |
| Club | 1d4 bludgeoning | Light | 2 cp |
| Quarterstaff | 1d6 bludgeoning | Versatile (1d8) | 2 cp |
| Greatclub | 1d8 bludgeoning | Two-handed | 5 cp |
| Sling | 1d4 bludgeoning | Ammunition (6/24 m) | 1 cp |
| Light hammer | 1d4 bludgeoning | Light, thrown (4/12 m) | 3 sp |
| Sickle | 1d4 slashing | Light | 3 sp |
| Dagger | 1d4 piercing | Finesse, light, thrown (4/12 m) | 3 sp |
| Javelin | 1d6 piercing | Thrown (6/24 m) | 3 sp |
| Spear | 1d6 piercing | Thrown (4/12 m), versatile (1d8) | 4 sp |
| Handaxe | 1d6 slashing | Light, thrown (4/12 m) | 5 sp |
| Shortbow | 1d6 piercing | Ammunition (16/64 m), two-handed | 10 sp |
| Mace | 1d6 bludgeoning | — | 15 sp |
| Light crossbow | 1d8 piercing | Ammunition (16/64 m), loading, two-handed | 40 sp |
| *Martial* | | | |
| Maul | 2d6 bludgeoning | Heavy, two-handed | 10 sp |
| Longbow | 1d8 piercing | Ammunition (30/120 m), heavy, two-handed | 15 sp |
| Warhammer | 1d8 bludgeoning | Versatile (1d10) | 15 sp |
| Battleaxe | 1d8 slashing | Versatile (1d10) | 20 sp |
| Flail | 1d8 bludgeoning | — | 20 sp |
| Halberd, glaive | 1d10 slashing | Heavy, reach, two-handed | 25 sp |
| Greataxe | 1d12 slashing | Heavy, two-handed | 30 sp |
| Shortsword | 1d6 piercing | Finesse, light | 60 sp |
| Heavy crossbow | 1d10 piercing | Ammunition (20/80 m), heavy, loading, two-handed | 80 sp |
| Longsword | 1d8 slashing | Versatile (1d10) | 120 sp |
| Scimitar | 1d6 slashing | Finesse, light | 120 sp |
| Rapier | 1d8 piercing | Finesse | 200 sp |
| Greatsword | 2d6 slashing | Heavy, two-handed | 200 sp |

Ammunition: 20 sling bullets 2 cp, 20 bolts 2 sp, 20 arrows 3 sp, a quiver 1 sp. **Silvering** a weapon or ten pieces of ammunition: 50 sp.

- **Finesse:** attack and damage use either the Fighter or the Juggler level (the same one for both).
- **Heavy:** halflings attack with it **Feeble**. **Light:** krolls attack with it **Imprecise**.
- **Loading:** reloading takes an action.
- **Ammunition:** half is recovered after a battle. **Range:** beyond normal range is disadvantaged, nothing beyond long. **Reach:** +1 m. A broken weapon counts as improvised (d4) until repaired.
- **Unarmed strike:** 1 + Fighter level bludgeoning (*Rock fist*: d4 + Fighter level; the Warrior's *Empty hand*: d6–d10 + Warrior level). **Improvised weapon:** d4.

### Manoeuvres

Each costs **1 point** of the pool in use, unless something makes it free.

| Manoeuvre | Effect | Declared |
|---|---|---|
| **Precise** | Advantage on the action's roll | Before the roll |
| **Mighty** | Harder to avert, or more damage (table below) | Before the roll |
| **Cunning** | Once the attack lands, a triggered bonus action: knock prone, or in close combat grapple or push | After the attack lands |
| **Quick** | Advantage on initiative; always 1 Soul | Before initiative |
| **Defense** | Defend without spending your action; as often as you can pay | When targeted |
| **Widespread** | The action affects several targets instead of one | When describing the action |

- **One manoeuvre per action**, free ones included (from a perk, a condition, a shield). Quick counts as the turn's manoeuvre. **Defense** and a critical hit's free Mighty don't count.
- **Any advantage is a free Precise** (on initiative, a free Quick); paying for a second one does nothing.
- **Every multi-target action needs Widespread.** Spells with a fixed area (Fireball) pay for it in their price, and Widespread can't enlarge them.
- **Mighty has no penalty for missing.**

**Mighty, Very mighty, Cruelly mighty**

| | Mighty | Very mighty | Cruelly mighty |
|---|---|---|---|
| **Player character averting** | Costs +1 | Costs +2 | First a level-1 Scar (blank), then pays the cost |
| **Player character not averting** | Also exhausts d4 more from the Scar's pool (stops at 0) | Scar level +1 | Scar level +2 |
| **NPC, Body** | +1 damage die | +2 damage dice | If it defends, it first takes one damage die; then +2 dice either way |
| **NPC, Soul or Charisma** | +1 at stake | +2 at stake | If it defends, it first takes the attacker's class level; then +2 at stake |
| **Who has it** | Anyone (1 point), or free from a perk | Class perks, NPC abilities | Mighty class perks, NPC abilities |

**Strong manoeuvres** come from perks; every basic and advanced class has a **mastery perk at level 5** letting any manoeuvre with its skills be the strong version at the same price.
- **Very precise / Very quick:** roll the advantage die after everyone has rolled.
- **Very cunning:** Cunning's effect plus, against an NPC, 1d4 damage as a bonus action; against a player character, their Danger Level +2 while the effect lasts *(draft)*.

### Conditions

A condition lasts **as long as its cause** (a spell's duration, a poison's, the situation). Conditions that make attacks Precise give that action's one manoeuvre; the attacker may pay for another instead.

| Condition | Effect |
|---|---|
| **Blinded** | Fails checks needing sight. Attacks against it Precise; its attacks and initiative disadvantaged |
| **Charmed** | Can't attack or harm the charmer. The charmer's social checks against it are Precise. Keeps its own will |
| **Deafened** | Fails checks needing hearing. Its attacks and initiative disadvantaged |
| **Frightened** | While it sees the source: checks, attacks and initiative disadvantaged; can't move closer |
| **Grappled** | Speed 0; can act in place |
| **Incapacitated** | No actions or reactions |
| **Invisible** | Rolls against it disadvantaged; its actions Precise, its initiative Quick. Noise and tracks give it away |
| **Paralyzed** | Incapacitated, can't move or speak; automatically loses Body defense rolls; attacks against it Precise; a hit within 1 m is critical |
| **Petrified** | Stone: incapacitated, unaware; attacks Precise; loses Body defense rolls; resists all damage; immune to poison and disease |
| **Prone** | Crawls only; its attacks disadvantaged; attacks from within 1 m Precise, from further disadvantaged |
| **Restrained** | Speed 0; attacks against it Precise; its attacks and Body defense rolls disadvantaged |
| **Stunned** | Incapacitated; loses Body defense rolls; attacks Precise; its attacks and initiative disadvantaged |
| **Unconscious** | Incapacitated, drops what it holds, falls prone; loses Body defense rolls; attacks Precise; a hit within 1 m is critical |

**Penalties** mirror the manoeuvres: each blocks one, even a free one. The source sets the scope (one skill, a group, or everything).

| Penalty | Blocks | Effect |
|---|---|---|
| **Imprecise** | Precise | Rolls with that skill are disadvantaged |
| **Slow** | Quick | Initiative is disadvantaged |
| **Feeble** | Mighty | Against an NPC: one damage die fewer (minimum 1), or 1 less Soul or Charisma damage. Against a player character: averting costs 1 less (minimum 1) |
| **Foolish** | Cunning | Can't knock prone, grapple or push; anyone who lands a hit on them gets a free Cunning |

There's no Poisoned condition: a poison imposes one of these.

### Resistances and weaknesses

| Modifier | Damage (NPC) | Cost of averting (player character) |
|---|---|---|
| Weakness | ×2 | ×2 |
| Weakness bonus N | — | +N |
| Resistance | ×½ | ×½ |
| Resistance bonus N | — | −N |
| Immunity | None | Nothing to avert |

Halving rounds down (in the character's favour); averting costs at least 1. Damage types: fire, ice, lightning, poison, psychic, necrotic, radiant, force, thunder, acid, piercing, slashing, bludgeoning.

---

## 5. NPCs

| | Player character | NPC |
|---|---|---|
| **Roll bonus** | Class level (max 5) | A static bonus per skill group, usually up to +5; legendary up to +8 |
| **Abilities** | Perks and spells | Special abilities |
| **Taking harm** | Exhausts or takes Scars | Loses points off its **tracks** |
| **Averting failure** | Exhausts the Danger Level | Can't; important NPCs spend **Fate** |
| **Danger Level** | Yes, per character | No |
| **Damage it deals** | Dice + class level, to tracks | A threat die, as a Scar level |
| **Defeat** | Dying rolls | Overpowered at 0 in any track |
| **Manoeuvres** | 1 point, or free from a perk or shield | Free if the stat block grants it; otherwise 1 track point (usually Soul or Charisma) |

**Skill bonuses** work like class levels (d20 + bonus in a challenge, 2d6 + bonus ≥ 9 in a skill check). One can cover a whole class's skills (+2 Fighter skills), part of one (+3 *Foot close combat*), or a skill of the NPC's own. *Enemy soldier: +2 Fighter. Commander: +4 Fighter, +1 Warrior.*

**Tracks**

| Track | Lowered by | At 0 the NPC |
|---|---|---|
| Body | Weapons, damage spells, poison | Goes down or dies |
| Soul | Fear, illusions, mind magic | Breaks, panics or is controlled |
| Charisma | Intimidation, deception, humiliation | Surrenders, flees or gives in |

- **Body is 5E hit points** (a guard 11, an ogre 59). Soul and Charisma are small (a guard's Charisma about 6), so words and terror often win faster than steel. An NPC's Body track and a player's Body pool are different scales.
- **Body damage:** weapon or spell dice + the attacker's class level, **minus the NPC's armour rating** (0 or less absorbed). Natural armour goes up to 3; big monsters 4–5 where warranted (dragon scales, a stone golem). Mighty's extra die is the way through armour.
- **Soul and Charisma damage:** win a roll against the NPC; the track drops by **what's at stake + the winner's class level**. Stakes use the Danger Level scale and aren't kept afterwards.

| What's at stake | Points |
|---|---|
| An empty threat | 1–2 |
| A real threat, a good lie | 3 |
| A blade at the throat | 4 |
| Their family held hostage | 5+ |

*A Juggler 3 with a blade at a guard's throat (4) takes 7 off his Charisma of 6: he hands over the key.*

- **Fate** (important NPCs only, 1–3): spend 1 to turn a lost roll into a win. Refills at the next sunrise, never during a fight. Ordinary NPCs have none.

### Building NPCs *(draft, 2026-11-17)*

How to make an NPC that is as hard here as it was meant to be, whether it's built from scratch ("make me a wolf") or copied from a 5E or DrD2 stat block. The method is the same every time: **decide the NPC's role, then fit the numbers to the role's budget.** Numbers copied from a source are kept where they sit inside the budget, and pulled into it where they don't. A wolf should come out about the same whichever way it was made.

The numbers below are estimates from the rules' maths, not yet tested at the table.

#### How a fight with an NPC works

Five levers decide how hard an NPC is:

1. **How often it wins:** its skill bonus.
2. **How long it lasts:** Body, stretched by armour.
3. **What its wins cost the players:** how many attacks it makes, its threat die, its free manoeuvres, and the scene's Danger Level.
4. **The other ways to beat it:** Soul and Charisma.
5. **How it escapes a bad result:** Fate.

**Winning rolls.** The skill bonus is used both to attack and to defend, so one point counts twice.

| Bonus minus the opponent's | −4 | −3 | −2 | −1 | 0 | +1 | +2 | +3 | +4 | +5 |
|---|---|---|---|---|---|---|---|---|---|---|
| Attacker wins the challenge | 30% | 34% | 38% | 43% | 47% | 52% | 57% | 62% | 66% | 70% |

| Bonus on an undefended attack (2d6 ≥ 9) | 0 | +1 | +2 | +3 | +4 | +5 |
|---|---|---|---|---|---|---|
| Lands | 28% | 42% | 58% | 72% | 83% | 92% |
| Lands with Precise | 52% | 68% | 81% | 89% | 95% | 98% |

- **Equal bonuses make a coin flip.** Starting player characters have about +2 in their fighting class, late ones +4 or +5. An NPC with the same bonus is an even match one on one.
- **Precise is worth about +3 or +4** in a challenge (47% → 64%), and more on an undefended attack. A free Precise on every attack is a big gift; hand it out for a situation (pack tactics, attacking from behind), not by default.
- **Defending costs an action.** An NPC that defends doesn't attack that round, unless it gets a free Defense (a shield once a round, a unit, a boss). Ordinary NPCs usually attack and take their hits undefended. That's why they fall fast and still hurt.
- **Hits on an NPC that doesn't defend land very often** against good player characters (83–92%). A lone NPC against a whole party gets hit a lot, which is what *Action economy* below fixes.

**What player characters deal.** One hit is the weapon's dice + the class level − the NPC's armour. Most characters attack once a round; a few perks add a second attack or a free Mighty.

| Party | One hit | Lands, on average | Per character a round |
|---|---|---|---|
| Rags to Riches (level 3) | 6–7 | ~65% | ~4–5 |
| Seasoned (level 7) | 7–9 | ~70% | ~5–6 |
| Veteran (level 9) and later | 9–12; with a free Mighty 14+ | ~75% | ~7–10 |

- **Our player characters stay at 5E's first tier.** Class levels stop at 5 and nobody gets 5E's Extra Attack, so a party here deals about what a 5E party of level 2–4 deals, however far it advances. Their toughness comes from their pools and from averting, not from damage.
- **Armour makes fights longer,** and more so for weaker attackers. Against starting characters (about 7 a hit), armour 1 makes an NPC last about ×1.2 as long, 2 ×1.4, 3 ×1.75, 4 ×2.3 and 5 ×3.5. That's why Mighty's extra die and the perks that grant it free are the answer to armour.

**What NPC wins cost player characters.** A player character has no hit points; their pools are their hit points. A starting character has about 5–7 points in their main pool and 15 in all.

- **When they defend and lose,** averting costs the Danger Level minus their armour (minimum 1): about 2 at Danger Level 3 in light armour. Mighty adds 1, Very mighty 2.
- **When they can't or don't defend,** the NPC rolls 2d6 + bonus against 9 to land. A landed hit can't be averted, and becomes a Scar of the threat die minus armour.

| Threat die | Average Scar against armour 0 | 1 | 2 | 3 | Feels like |
|---|---|---|---|---|---|
| d4 | 2.5 | 1.5 | 0.75 | 0.25 | Rarely gets through armour |
| d6 | 3.5 | 2.5 | 1.7 | 1 | A real wound |
| d8 | 4.5 | 3.5 | 2.6 | 1.9 | Can overflow a small pool in one hit |
| d10 | 5.5 | 4.5 | 3.6 | 2.8 | Lethal to anyone who doesn't defend |

- **The scene's Danger Level isn't part of the stat block,** but it's the biggest lever on cost. A boss fight is usually Danger Level 4–5, which makes every lost roll cost twice what a brawl does.

#### Role budgets

Pick the role first. The role says how many player-character actions the NPC should soak up and how much it should drain from them.

| Role | Example | Bonus | Body | Armour | Soul, Charisma | Threat | Fate | Free manoeuvres | Actions a round |
|---|---|---|---|---|---|---|---|---|---|
| **Minion** | A peasant with a pitchfork, a rat, a possessed child | 0–1 | 1–6: one hit | 0–1 | 1–3 | d4 | — | — | 1 |
| **Ordinary** | A guard, a wolf, a bandit, a boar | +2 | 7–15: two hits | 0–2 | 3–6: one win | d6 | — | 0–1 | 1 |
| **Tough** | A veteran, a bear, a bandit chief, an ogre | +3 | 25–60 | 0–2 | 5–10 | d6–d8 | 0–1 | 1 | 1 |
| **Elite** | A knight, a witcher, a troll | +4 | 40–80 | 1–3 | 8–12: two wins | d8 | 1 | 1–2; strong possible | 1, or 2 if built for it |
| **Boss** | A wyvern, the house's fiend, a robber baron | +4–5 | 70–130 | 2–3 (4) | 12–18: three wins | d8–d10 | 2 | 2; strong | One per two player characters |
| **Legendary** | A dragon, an archfiend | +6–8 | 130–200 | 3–5 | 16+, or immune | d10–d12 | 3 | 2–3; strong or cruel | One per two player characters |

**Body.**
- **Size moves Body within the role:** Small at the bottom of the range, Large at the top, Huge and Gargantuan one role higher in Body only. A Large ordinary horse has about 19.
- **Armour 3 or more:** take Body from the bottom of the range. Armour stretches the fight (see above).
- **Above 200 Body** a fight drags past ten rounds even for a strong party. Don't go there, not even for a dragon.

**Soul and Charisma** are counted in **wins**. One won roll against an NPC deals the stakes (1–5, usually 3–4) + the winner's class level: about **6**.
- **One win (up to 6)** breaks it: it flees, panics or gives in at the first real threat. Most people and animals.
- **Two wins (7–12)** for the proud, the brave and the stubborn.
- **Three wins (13–18)** for fanatics, great lords and ancient things.
- **Immune:** mindless things (a zombie, a golem) to Soul; animals to lies, though not to fear.
- **Give every NPC below a boss one soft spot.** A dim brute has low Soul (an ogre's 3), a coward low Charisma, and a fanatic who can't be scared down can still be cut down. Winning with words should be as real an option as winning with steel, not a guaranteed shortcut.

**Fate** turns one lost roll into a win, so each point cancels about one player success. That's one round of one character's work, or one hostage who doesn't crack.

**Free manoeuvres:**
- **Each free manoeuvre is worth about 1 point an action.** Precise is about +3 or +4.
- Free Mighty on every attack makes each averted hit cost 1 more, about **+50% pressure** at Danger Level 3.
- **Tie a free manoeuvre to a situation where you can** (pack tactics, a charge, cornered) rather than "always". It plays better, and the players can deny it.

**Action economy.** One NPC against four player characters gets one action against their four.
- **Bosses and legends get one action per two player characters,** rounded up, each on its own initiative count (5E's legendary actions).
- **Or they get free Defenses:** one a round per two player characters.
- **Or they don't fight alone:** add minions or make the boss's guard a [unit](#units).
- **Never give one NPC all three** of high armour, high Body and free Defense against every attack.

#### Encounters

**Count the pressure:** the NPCs' attacks a round per player character, at the scene's Danger Level.

| Fight | NPC attacks a round per player character | Danger Level | Typical cost to each player character |
|---|---|---|---|
| **Easy** | ½ | 2–3 | 1–2 points, no Scars |
| **Normal** | 1 | 3 | 3–4 points; a Scar for whoever's unlucky |
| **Hard** | 1½ | 3–4 | Most of the main pool; some Scars |
| **Deadly** | 2 or more | 4–5 | Scars for everyone; someone may be dying |

**And count the length:** the NPCs' Body (stretched by armour) against the party's damage a round (see *What player characters deal*). A normal fight should be about **3 rounds**: a starting party of four deals about 18 a round, so about 55 Body in all. Four town guards (11 Body each, armour 2) come to about 60.

Two things change the sums:
- **Soul and Charisma are the other way out.** A fight where half the enemies flee after one good threat is shorter than its Body says.
- **Ordinary NPCs flee or surrender** when the fight is clearly lost (half of them down, their leader broken). They don't fight to the last unless the story says so.

#### Building from scratch

1. **Concept and role.** What it is, its [bestiary](#6-bestiary) category, its size, and its role.
2. **Bonus areas.** One or two areas it's good at: a whole class's skills (*Fighter skills +2*), part of one (*Foot close combat +3*), or its own (*Tracking by smell +3*). Everything else rolls plain dice. **Its attack bonus works against any target**; the "humans and beasts" split binds player classes only.
3. **Numbers from the role budget:** Body (size within the role), armour, Soul and Charisma (with one soft spot), threat die, Fate, speed in metres.
4. **Attacks.**
   - **A weapon:** its dice + the bonus.
   - **A natural weapon,** by size: Tiny 1, Small d4, Medium d6, Large 2d6, Huge 3d8, Gargantuan 4d10, + the bonus. A long one (horns, a tail) has 1 m more reach.
   - **An attack on the mind** (a scream, a hateful stare) deals the same dice to Soul or Charisma, and its Scars land there.
5. **Free manoeuvres and special abilities** within the role (ordinary 1–2 abilities, important 2–4, bosses up to 6).
   - **Borrow a class perk** where one fits ("*Fire bending*, as the Warlock's, rolled with its bonus") rather than writing a new rule.
   - **NPCs have no pools.** A perk's Body, Soul or Charisma price comes off the matching track, so a caster that casts a lot gets easier to break. Or the ability is free a set number of times (*3 a day*).
   - **Material prices are ignored:** NPC substances are pre-made. Give it a stock (*carries 2 bombs*) if that matters.
6. **Check it against the budget** and *Action economy*.
7. **Write the description** (below).

#### Copying from 5E or DrD2

Copying means reading the source's **role**, then keeping its numbers wherever they fit that role's budget. Where a number doesn't fit, the budget wins: a 5E adult dragon's 256 hit points, an ogre's Wisdom that would make it stubborn.

**From 5E:**
- **The role** comes from CR and how the creature is meant to be used:

  | CR | Role |
  |---|---|
  | 0 | Minion |
  | ⅛–½ | Ordinary |
  | 1–3 | Tough or elite (by its hit points) |
  | 4–9 | Elite or boss |
  | 10+ | Boss or legendary |

  Our parties stay at 5E's first tier in damage, so a high-CR creature becomes the top of our scale, not something beyond it.
- **What to keep and what to change:**

| 5E | Ours |
|---|---|
| Hit points | **Body**, as they are, within the role's range. Above 120, pull them towards the range (an adult dragon's 256 → about 180) |
| AC | Armour from what it wears, as pieces; natural AC 12–13 → 1, 14–16 → 2, 17–18 → 3, 19+ → 4–5. Then check *Armour 3 or more* above |
| Attack bonus | +3/+4 → **+2**, +5/+6 → **+3**, +7/+8 → **+4**, +9/+10 → **+5**, +11 and up → **+6 to +8** |
| Skills (*Perception +4*) | A bonus in our matching skill, same table (see the skill list below) |
| Wisdom, Charisma | Soul and Charisma by **wins** for the role. Score ÷ 2 is a starting point; a low score marks the soft spot |
| Strength, Dexterity, Constitution, Intelligence, saving throw bonuses | Nothing of their own: they're already in the hit points, the attack bonus and the skills |
| Speed, senses | Metres, 5 ft = 1 m |
| Damage (*2d8 + 4*) | Keep the dice, swap the modifier for the bonus (*2d8 + 3*). Against player characters it's the threat die |
| Multiattack | A second attack as an ability (elite and up), or a free Widespread when the attacks go to several targets |
| Advantage from a trait (pack tactics) | A free Precise in that situation |
| Knocks prone, grapples or pushes on a hit | A free Cunning |
| Extra damage on a hit (a charge) | A free Mighty in that situation. A trait that does both picks one: one manoeuvre an action |
| Its save DC (*DC 13 Constitution*) | The target defends against its bonus. A trap or a poison is a hazard: DC 10 → strength 2, 12 → 3, 15 → 4–5, 18+ → 6–8 |
| Recharge, X/day | Once a fight, or X a day |
| Spellcasting | The matching class's spells and perks, rolled with its bonus. Cantrips are free; slotted spells cost Soul off its track, or X a day |
| Legendary Resistance | Fate, as the role says |
| Legendary actions | *Action economy* |
| Lair actions | Hazards of the place |
| Resistances, immunities, vulnerabilities | Resistance, immunity, weakness. *Poisoned* becomes *Imprecise* |
| Swarm | A unit |

| 5E skill | Ours |
|---|---|
| Athletics | Strength (Fighter) |
| Acrobatics; Stealth in town | Acrobatics (Juggler) |
| Sleight of Hand | Tricks and sleight of hand (Juggler) |
| Stealth in the wild | Wilderness movement (Hunter) |
| Perception, Survival | Wilderness survival (Hunter); Urban survival (Juggler) in town |
| Nature, Animal Handling | Hunting, Animal handling (Hunter) |
| Insight, Deception, Persuasion, Performance | Influence and deception (Juggler); bargaining: Negotiation (Medic) |
| Intimidation | Confidence and intimidation (Fighter) |
| Medicine | Healing the human body (Medic) |
| Arcana, History, Religion, Investigation | Scholarship (Incantor) |

**From DrD2.** Our player characters are built on DrD2's scale, so its bonuses carry straight over. What doesn't carry is its NPC system: DrD2 NPCs exhaust Fate and have no hit points. So read each part for **what it tells you about the role**, and build the numbers from the budget.

| DrD2 | Tells you | Ours |
|---|---|---|
| **Charakteristika X–Y** | How good it is: the range is weak to strong individuals | The bonus, as it is, for the areas named after it (*zejména …*). Everything else is plain dice |
| **Sudba** | How much it matters, and how hard it is to finish | Fate by role. A big Sudba on a creature that's ordinary in the story (a boar's 5) gives nothing; 10+ usually marks an important one |
| **Hranice: Tělo** | How tough it is: 2 frail, 3–4 ordinary, 5–6 tough, 7+ elite | Body from the budget for that role and its size, or a 5E creature of the same kind |
| **Hranice: Duše, Vliv** | How easily it breaks: up to 3 one push, 4–6 two, 7+ three | Soul and Charisma in wins; the limit × 2 lands there |
| **Special abilities** (talents, skin, natural weapons, vulnerabilities) | What it's good at and how it can be beaten | **By effect, not by name.** A situational edge is a free manoeuvre in that situation; a steady edge, +1–2 bonus in that area; a hide, armour; *Nezranitelnost* is immunity, *Zranitelnost* weakness, *Neschopnost* Incapacitated. An ability "found at" a class is our perk of that class |
| **Oblíbený manévr** (favourite manoeuvre) | How it fights | Not free: the one it usually pays for, and a hint for the DM |
| **Weapon kinds** (krátká, dlouhá, drtivá, symbol, …) | Reach and damage type | A natural weapon by size; **no free manoeuvre** from the kind. *Symbol* attacks Soul or Charisma |
| **Jak jedná, Jak bojuje, Jakou roli má v příběhu** | Behaviour and hooks | The description, nearly as it is |
| **Varianta** | A related creature | Its own block: *As [the base], except:* |

#### Writing the description

The stat block holds the numbers; the creature's description (its lore, Markdown) holds the rest, in DrD2's order, a few lines each:
- **What it is:** what people know and believe about it.
- **How it acts:** what it wants, when it avoids or seeks people, how to talk to it.
- **How it fights:** its tactics, when it flees or won't back down, which manoeuvre it likes. Say its soft spot here.
- **Its place in the story:** two or three hooks, each as prey, attacker, tool, ally or legend.
- **Variants,** each with its own short stat block.

#### Example: one boar, three ways

**From scratch:** a Medium animal, **ordinary**. The budget gives bonus +2, Body about 11, a thick hide (armour 1), Soul and Charisma at one win, threat d6, one situational free manoeuvre and one ability.

**From 5E** (boar: CR ¼, 11 hit points, AC 11, tusk +3 for 1d6 + 1 slashing, *Charge* adds damage and knocks prone, *Relentless*, Wisdom 9, Charisma 5, speed 40 ft):
- CR ¼ means ordinary, and the 11 hit points fit.
- Attack +3 gives +2.
- *Charge* does two things, so it keeps one: knocking prone is a free Cunning.
- *Relentless* (staying up once at 1) would do for its ability; DrD2's *cornered* does the same job, and the block uses that.
- Charisma 5 halves to 2; one win either way.

**From DrD2** (divočák: Charakteristika 1–3 especially for running, smell, close combat and moving quietly in the wild; Sudba 5; Hranice Body 4, Soul 2, Charisma 3; *proficiency when cornered*, tusks, *bison hide*, keen senses; favourite manoeuvre Mighty):
- A Body limit of 4 means ordinary. Soul and Charisma limits of 2 and 3 mean one push each.
- Sudba 5 on an ordinary animal gives no Fate.
- The bonus is 1–3, so a sow +2 and the old tusker +3, but only in the named areas.
- *Proficiency when cornered* is an edge in one situation, so it becomes a free manoeuvre then; its favourite, Mighty, is the natural pick.
- *Bison hide* is armour 1.

All three land on the same animal:

```npc
name: Wild boar
subtitle: Medium animal, ordinary
armour: Thick hide (1)
speed: 8 m
threat: d6
body: 11
soul: 4
charisma: 4
skills: Foot close combat +2, Wilderness movement +2, Wilderness survival +2 (smell); an old tusker +3
senses: Keen smell and hearing; short-sighted
## Traits
***Charge.*** After moving 4 m straight at a target, a free **Cunning** on the hit: knocked prone.
***Cornered.*** When it can't flee, a free **Mighty** on every attack.
## Actions
***Tusks.*** Reach 1 m. Hit: 1d6 + 2 slashing.
```

- **Its soft spot is the open field.** It flees anything it notices in time, and it only gets dangerous when it's surprised or cornered.
- **Against starting characters it's an easy fight,** half a party's attacks for one round. Two boars and a sow with piglets (who won't flee) make a normal one.

### Writing a stat block

In rulebook pages (and in notes for the app), a stat block is a fenced block: ```` ```npc ```` (or `companion`, `unit`, `network`, `organization`, `ritual-item`), one `field: value` per line, then `## Sections` for abilities and actions. Any field can hold `English |cs| Czech`. Fields left out aren't shown; unknown fields are shown as they are. There are no rules reminders on the card: the rulebook explains how to run it. Any block can take an `emblem:` picture and an `allegiance:`.

```npc
name: Village guard
subtitle: Medium human, ordinary
body: 11
soul: 6
charisma: 5
skills: +2 Fighter skills
armour: Gambeson, kettle hat (rating 1)
speed: 6 m
threat: d6
manoeuvres: Defense once per round (shield)
## Actions
**Spear.** Foot close combat +2. 1d6 + 2 piercing against NPCs; threat d6 against player characters.
```

| Field | Means |
|---|---|
| **name, subtitle, image** | Name; the italic line (size, kind, how important); a picture |
| **body / soul / charisma** | The tracks |
| **skills** | Roll bonuses, like class levels |
| **armour** | What it wears, and its rating |
| **speed** | Metres per movement |
| **threat** | Threat die against player characters |
| **fate** | Important NPCs only |
| **manoeuvres** | Manoeuvres it gets free; others cost a track point |
| **resistances / weaknesses / immunities, senses, languages** | As in 5E |
| **## sections** | Abilities, actions, reactions. An attack names its weapon damage (vs NPCs) and threat die (vs player characters) |

**Companion** adds `role` (`familiar`, `summon`, `animal`, `hireling`), `master`, `bond`, `payment`; no Fate. **Unit** adds `size` (`handful`, `band`, `horde`), `members`, and its `body` is the average member's (the card multiplies it). **Network:** `master`, `bonus` (≤ master's Standing + 2), `specialisation`, `body/soul/charisma` (12 points in all), `bond`, `payment`. **Organization:** `reach` (1–5), `seat`, `leader`, `structure`, `rank 0` … `rank 5`, `companions`, `network`, `allies`, `rivals`. **Ritual item:** a card to fill in by hand (stored points, charging, link).

---

## 6. Bestiary

| Category | What | Subgroups |
|---|---|---|
| **Animals** | Ordinary, non-magical beasts | Beasts of the field (horses, cattle, dogs); predators (wolves, bears, big cats); birds; beasts of the water; vermin and swarms |
| **Humans and humanoids** | Sapient, human-shaped | Civilised races (humans, elves, dwarves, halflings, krolls); wild humanoids (goblins, ogres, trolls); giants |
| **Undead and reanimated** | Made from remains and souls; artificial life too | Corporeal undead (zombies, ghouls, skeletons); spectres (ghosts, wraiths, banshees); constructs (golems, homunculi, animated objects) |
| **Monsters** | Animal-like, magical by nature | Draconids (dragons, wyverns, basilisks); hybrids (griffins, chimeras, manticores); cursed beasts (werewolves, lesser vampires); insectoids and crawlers; beasts of the deep (krakens, drowners) |
| **Fiends** | Otherworldly; drawn to worship and to human souls | Place guardians (leshies, noonwraiths, water spirits); night spirits (nightmares, duskwraiths); household spirits; vampires (higher vampires and lords); demons; gods |

| Rule names | Means |
|---|---|
| "Humans and beasts" (Fighter, Hunter, Juggler combat; Warrior and Scout mounted) | Humans and humanoids + Animals. A troll is Fighter's; a wyvern needs Ranger or Witcher |
| "Monsters, fiends and undead" (Ranger shoots them, Witcher fights them up close) | Monsters + Fiends + Undead |
| "Animals" (animal handling, training, healing, magic) and Medic poisons | Animals (Medic poisons: humans and animals) |
| "Supernatural beings" (*Dealing with supernatural beings*) | Undead + Monsters + Fiends |
| "Artificial beings" (Alchemist) | Undead and reanimated |

---

## 7. Characters

### Creating one

0. **Starting level:** Rags to Riches (3), Seasoned (7) or Veteran (9).
1. **Race** and its one racial perk.
2. **Classes:** all starting levels go into classes.
3. **Class perks:** one per class level.
4. **Pools:** split 15 between Body, Soul and Charisma.
5. **Background:** gear, coins, Material, languages, known settings.
6. **Traits:** any number, premade or custom.
7. **Personality:** a few words to play from; playing it well earns merit points.

| Start | Level | Typical build |
|---|---|---|
| Rags to Riches | 3 | Two basic classes |
| Seasoned | 7 | Two basic classes and one advanced |
| Veteran | 9 | Two basic and one advanced, higher |

### Races

No fairies, vampires or ghosts as player races.

| Race | Speed | Feel |
|---|---|---|
| **Human** | 6 m | Diverse and courageous |
| **Elf** | 6 m | Secluded, ancient, ageless |
| **Dwarf** | 5 m | Hearty and proud; their word is everything |
| **Halfling** | 5 m | Hospitable, jovial, braver than they look |
| **Kroll** | 7 m | Brawny, primitive, attuned to the wild (unique to this setting) |

| Race | Racial perk (pick one) | Effect |
|---|---|---|
| Human | Everywhere at home | Advantage persuading a stranger of your goodwill |
| Human | For the king! | A Scar against a superior or your sworn organisation gives 3 points instead of 2 |
| Human | I know a guy | 1 Charisma: a stranger owes you a favour, or you share a friend |
| Human | Maiden fair | Someone attracted to you has disadvantage in every challenge against you |
| Human | Sticks and stones | A Charisma Scar to avert gives 3 points instead of 2 |
| Elf | Behind blue eyes | A Soul Scar to avert gives 3 points instead of 2 |
| Elf | Dusk veil | Advantage hiding and sneaking in poor light |
| Elf | Eternal nobility | Healing a Charisma Scar costs 4 per level |
| Elf | Fey blood | Advantage resisting charm, fear and mind magic |
| Elf | Pearls in their hair | With a striking, lovely look, the first roll with an intelligent stranger: advantage if friendly (negotiating, charming), disadvantage if hostile (intimidating, threatening) |
| Dwarf | Ancient artisan | 1 Soul: detect magic in a crafted item and its skill |
| Dwarf | Call of the mine | Advantage digging; dig twice as fast |
| Dwarf | Clan bond | 2 Charisma: a dwarf is a relative or owes your clan |
| Dwarf | Iron liver | Advantage drinking, resisting alcohol and swallowed poison |
| Dwarf | Steel in our bones | Healing a Body Scar costs 4 per level |
| Halfling | Connoisseur | 1 Soul: you have a snack on you |
| Halfling | Good spirits | Healing (or helping heal) a Soul Scar costs 4 per level |
| Halfling | Scrappy | 1 Soul, once a day: scavenge 1 proper Material |
| Halfling | Silent feet | Advantage sneaking when barefoot |
| Halfling | Sixth sense | A 50% hidden chance to sense danger without clues |
| Kroll | Bison skin | Unarmoured, your hide is armour rating 1 |
| Kroll | Echolocation | Navigate and map an area in total darkness by sound |
| Kroll | Fury | A Body Scar to avert gives 3 points instead of 2 |
| Kroll | Tokens of heroism | With an unusual look, the first roll against an intelligent foe: advantage if hostile (fighting, intimidating), disadvantage if friendly |
| Kroll | Magic roots | 1 Soul: there's a magical wellspring nearby |

### Backgrounds

15 backgrounds: Entertainer, Craftsman, Builder, Hermit, Scholar, Servant, Monster hunter, Soldier, Criminal, Outlander, Noble, Sailor, Merchant, Peasant, Acolyte. **No skill proficiencies.**

**Three fortunes:** the player says how lucky the character has been in each of three sections: **poor, commoner or fortunate.**
- **Arms and armour** (the same for everyone):
  - Poor: one weapon (no swords) and a padded hood or gambeson.
  - Commoner: two weapons, or a weapon and a shield, no swords; light armour (Protection up to 3).
  - Fortunate: swords allowed; up to medium armour (Protection up to 6).
  - A ranged weapon comes with a quiver and 20 ammunition.
- **The background:** each has a poor, commoner and fortunate variant with its own gear, coins and Material.
- **A mount:** poor none, commoner a riding horse, fortunate a warhorse.

| Start | Fortunes, in any sections |
|---|---|
| Rags to Riches (3) | Commoner, commoner, poor |
| Seasoned (7) | Fortunate, commoner, poor |
| Veteran (9) | Fortunate, commoner, commoner |

**Each background also gives:**
- **Known settings:** what the character knows. There's no flat bonus; the DM may allow a temporary **+1** when the player asks and it fits.
- Extra languages.
- d8 tables of **archetypes** (with recommended picks) and of **quirks, ideals, bonds and flaws**, each with a ninth line: make up your own.

**Gear:**
- Only gear that serves play: kits as bundles, tools, rope, light.
- Clothes are free text on the sheet.
- **Swords don't sell:** only a knight, a noble or an armourer pays what one is worth; anyone else pays for its iron, about a tenth.

**Load** is judged by eye against three silhouettes. Medium load costs what medium armour does (1 Body to attempt), heavy what heavy armour does (2); the worse of load and armour counts. A mount carries the load while it's there.

### Languages

Everyone speaks the **Common tongue**. Elves (Second elvish) and Krolls also speak their own, and Dwarves read their clan's runes; Humans and Halflings pick one extra. Backgrounds add more.

**Related languages** (Liturgic ↔ Tongue of the kings; First ↔ Second elvish; Druidic ↔ both elvish): you can try to understand one you don't know if it's related to one you speak, with a fitting skill check at **disadvantage**. You can't answer in it.

| Language | Spoken by |
|---|---|
| Common tongue | Everyone |
| Tongue of the kings | Not for player characters. Nobody: the pre-cataclysmic empire's universal language (its name is forgotten). Survives in Liturgic and in bits on ruins, coins, seals; royalty learns a few lines for show |
| Liturgic | The Star God's clergy; a bastard form of the Tongue of the kings |
| First elvish | Not for player characters. The oldest elves, who remember the world before the cataclysm; elven songs |
| Second elvish | Elves everywhere; grew out of First elvish |
| Druidic | Druids; a bastard mix of First and Second elvish |
| Dwarven runes | Written only, varying by clan; dwarves speak the local tongue. Dwarven maps have east at the top |
| Language of the Isles | The northern island nations. Written in elder futhark: a speaker reads some dwarven; a dwarven scribe can only sound it out, not understand it |
| Kroll clan dialects | Krolls; mostly spoken, grammar differs by clan |
| Old tongues | Dead languages of unnamed far-off empires; written only |
| Thieves' cant | The underworld: slang, double meanings, chalk marks |

### Traits

A trait has an **upside and a downside**, both affecting play, not only roleplay (premade: Insomniac, Short fuse, Show-off, Drunkard, Coward, Superstitious, Night-blind, Manic-depressive, Pious, Weak of body; or custom with the DM's approval). Any number; the DM can grant or remove them in the story. They don't count towards level.

### Leveling

Each level-up gives **one point**, spent on one of: **+1 class level** (max 5, with one perk of that class); **a new class at level 1** (with its perk; advanced and mighty classes need prerequisites); **an extra perk** in a class at 5; **+1 Body, Soul or Charisma**.

Check: **level = chosen class perks + (Body + Soul + Charisma − 15)**. Racial perk, core spells and aspects don't count.

---

## 8. Classes

- Classes are **bundles of skills**; each skill has a pool. Max class level **5**.
- **Magic types:** **Dormant** (no magic); **Awakened** (core spells come with the class, more as perks; the Incantor and every class built on it); **Latent** (Witcher, Shaman, Ravager: the same, but they first wake their magic with a **level-1 Scar** in any pool, a blank payment, entering **magic mode** until the end of the conflict or one stretch of work).
- **Spells are perks** and take a perk slot. Core spells come with the class but can still have a price.

### Basic classes

| Class | Magic | Skills (pool) |
|---|---|---|
| **Fighter** | Dormant | Foot close combat vs humans and beasts (B), Strength (B), Weapon knowledge (S), Confidence and intimidation (C) |
| **Hunter** | Dormant | Foot ranged combat vs humans and beasts (B), Wilderness movement (B), Wilderness survival (S), Hunting (S), Animal handling (C), Animal training (C) |
| **Juggler** | Dormant | Foot throwing vs humans and beasts (B), Acrobatics (B), Tricks and sleight of hand (B), Urban survival (S), Influence and deception (C) |
| **Medic** | Dormant | Endurance (B), Healing the human body (S), Potions and poisons (S), Negotiation (C) |
| **Incantor** | Awakened | Scholarship (S), Healing of the soul (S), Willpower (S), Ritual items (S, unique), Dealing with supernatural beings (C; anyone with intelligent speaking beings, otherwise unique). Core spells: Blessings and curses, Eye sigil |

### Advanced classes

Unlocked when **its two parent classes total 6 levels**, any split. **Aspects** are perks granted automatically at parent-level splits (**4 + 1 / 3 + 3 / 1 + 4**, first parent first); they do nothing alone and unlock perk branches.

| Class | Parents | Magic | Aspects | Skills (pool) |
|---|---|---|---|---|
| **Warrior** | Fighter + Juggler | Dormant | Hire-Sword / Knight / Monk | Mounted combat (B), Ironworks (B), Warrior knowledge (S), High society influence (C), Combat leadership (C) |
| **Ranger** | Fighter + Hunter | Dormant | Barbarian / Monster Slayer / Beastmaster | Ranged foot combat vs monsters, fiends and undead (B), Trophies (S), Woodworking (S), Ranger knowledge (S), Monster taming (C, unique), Leading in the wild (C), Dealing with supernatural beings (C) |
| **Witcher** | Fighter + Medic | Latent | Berserk / Hexer / Exorcist | Close combat vs monsters, fiends and undead (B), Trophy taking (S), Witcher signs (S, unique), Witcher knowledge (S, unique), Dealing with supernatural beings (C). Core spell: Isa sign |
| **Scout** | Hunter + Juggler | Dormant | Ghost / Outrider / Spymaster | Ranged mounted combat (B), Hiding information (S), Seafaring (S), Underground influence (C, unique), Leading people outside combat (C), Healing human charisma (C) |
| **Shaman** | Hunter + Medic | Latent | Warg / Seer / Herbalist | Narcotic substances (S, unique), Foresight (S, unique), Animal healing (S), Animal magic (C, unique). Core spells: Spirit walk, Beast mind (read, nudge and talk with one ordinary animal in sight) |
| **Druid** | Hunter + Incantor | Awakened | Wildheart / Stoneshaper / Tidecaller | Stone, Water, Plant magic (S, unique). Core: Earth bending, Water bending, Manipulate plants |
| **Rogue** | Juggler + Medic | Dormant | Thief / Assassin / Poisoner | Aerial acrobatics (B), Mechanisms (S), Forgery (S), Contact poisons (S, unique) |
| **Alchemist** | Medic + Incantor | Awakened | Mixer / Transmuter / Life Moulder | Alchemy knowledge (S), Explosives, corrosives and gases (S, unique), Elixirs (S, unique), Artificial life (C, unique) |
| **Warlock** | Fighter + Incantor | Awakened | Paladin / Battlemage / Abjurer | Fire, Wind, Evocation, Abjuration magic (S, unique). Core: Fire bending, Air bending, Evoke, Ward |
| **Mage** | Juggler + Incantor | Awakened | Illusionist / Puppetmaster / Conjurer | Illusion, Enchantment, Conjuration magic (S, unique). Core: Illusion, Mind touch, Conjure |

### Mighty classes

Unlocked when **its advanced classes total 6 levels**. No skills, only perks, rolled with the level of the lower class whose skill the perk builds on. Most perks aren't written yet (Warlord has *Reinforcements*). Standing 3–5, creating units and commanding armies belong here.

| Class | From | Magic | Fantasy |
|---|---|---|---|
| **Warlord** | Warrior, Rogue, Scout | Dormant | Leadership, strategy, armies, political power |
| **Ravager** | Warrior, Ranger, Witcher | Latent | Raw martial destruction: dragon riders, skinchangers |
| **Shadow** | Rogue, Scout, Mage, Alchemist | Awakened | Supernatural stealth, assassination |
| **Inquisitor** | Warrior, Warlock, Witcher, Mage | Awakened | Blood magic that finds the truth; breaking and mirroring spells; holy warrior |
| **Zhrets** | Ranger, Druid, Shaman | Awakened | Pagan priest of whole regions of nature; water and earth at disaster scale |
| **Necromancer** | Warlock, Alchemist, Shaman, Druid | Awakened | Necromancy and master magic; fire and air; the only maker of lasting magic items |

### Hidden class: Vampire *(draft)*

A basic class the story grants (a bite, a curse); it doesn't combine into advanced classes. Skill: *Vampire knowledge*. Base perks: *Sun afflicted* (Imprecise in daylight), *Bloodthirst* (human blood daily, a poor rest), *Slumber* (homeland dirt: quality rest, heals one Scar level a day), *Immortal* (death returns you to your last slumber), *Bat form*. Perks: Mist, Wolf form, Blood resourceful, Enlightened abstinence, Daywalker, Hypnosis.

### Perks

- A perk is **passive** or has an **activation price** (exhausted Body, Soul or Charisma, or spent Material or silver).
- Typical effects: advantage on activities (a free Precise), free manoeuvres, bonus actions, extra points from Scars, cheaper Scar healing, narrative "you can determine that…" powers (*I know a guy*).
- Every class has an **advantage perk for each skill**, a **sigil** for each school of magic, and a **mastery perk** at level 5.

---

## 9. Magic

### Casting

- **Unopposed** (freezing a stream): a skill check with the magic skill. **Against a resisting target** (charming a guard): a challenge. A failed cast is averted like any failure. Casting is an **action**.
- **Price:** none, or an activation price (exhausted pool or spent Material). Hard circumstances add a **cost to attempt**.
- **Contact:** every spell needs **touch**, **symbolic touch** (hair, blood, a loved belonging; fades at the next solstice or equinox), **sight** (your own eyes), or **contact** through a sigil or substance. A Fireball can't be cast into a dungeon from above.

| Component | What | Blocked by |
|---|---|---|
| Verbal | Words, a song | A gag, magical silence |
| Somatic | Gestures | Bound hands |
| Material | Spends Material, named by the spell | Having none |
| Ritual | A ceremony of minutes or more | A fight, being rushed |

### Scale and damage

- **Core spells** (bending, Blessings and curses, Illusion): one target, about hut-sized, human strength, and **can't kill** (at most chip damage like 1d6). A Warlock's fire is a torch; douse the target in oil first and it's another story.
- **Perk spells** carry 5E damage dice (Fireball, Burning hands).
- **Against player characters,** spell damage becomes a threat die: core-spell chip d4, small perk spells d6, big area spells d8, legendary d10+.
- **Area spells:** everyone in the area makes a defense roll. An NPC that wins takes half; a player character who wins takes nothing.

**Units of size** for open-ended spells; each step up is one Widespread.

| Unit | About | Grid | Example |
|---|---|---|---|
| A palm | A cup, a candle | Part of a square | Light a pipe, wilt a flower |
| A witch's hut (base) | ~5 m across | One battle square, a handful | Capsize a raft; freeze a stream 5 m long; one tree |
| A farmstead (Widespread) | ~10 m across | 2 × 2 battle squares, a band | Fog over a small harbour; a whole grove |
| A village (Very widespread, master abilities only) | A fort, a district | One field square, a horde | Catastrophe-scale nature magic |

### Durations

| Duration | The caster meanwhile |
|---|---|
| Instant | Free |
| Until sunset or sunrise | Free |
| Until solstice or equinox | Free |
| Until the end of combat | Free |
| Until dismissed | Free; needs no action |
| **Concentration** | Spends their **action** on it each turn |

**Concentration breaks** on any attack at the caster, hit or miss, unless they win a defense roll with their magic class level (costs the Defense manoeuvre; *Steady mind* waives it). It also ends on another concentration spell, on being incapacitated, or a failed skill check against a violent distraction.

### Control and information

- **Charmed** keeps its own will. **Control** puppets the target like a companion: the caster takes no actions of their own and pays the creature's costs from their **Charisma**.
- **Learning information:** a willing target opens a link for as long as it likes; a resisting one gives one simple true answer per won roll.

### Sigils

- A guarding sigil around a place or item. Incantor gets *Eye sigil* free; every other school has a sigil perk (*Salamander*, *Vodyanoy*, *Leshy*, *Werewolf*, *Will-o'-wisp*…). Alchemists have none.
- **Making:** a ritual with at least 1 Material; the Material is the sigil's **pool**, at most your Soul.
- **Trigger:** you know someone crossed it (not who). You can cast through it as if there, with your action; each action costs **1 sigil point to attempt**, and you exhaust only the sigil's pool.
- **One sigil at a time.** Ends at the next sunset or sunrise, when its pool runs out, or on an unaverted failure. *Sigil guardian* adds a trigger condition.

### Ritual items (Incantor only)

One per character, holding something of the owner's body. Stored points pay **perk prices and manoeuvres when casting**. Lost, its holder has symbolic touch on you until the next solstice or equinox.

| Charging at | Points stored (1 Material each) |
|---|---|
| Sunrise or sunset | 1 |
| The evening of a solstice or equinox | Up to 5 |
| A wellspring | 2–5, by its strength |
| An evil or cursed place | 0 |

Only the highest that applies counts. *Mighty amulets* waives the Material.

### Countering

- **By hand:** knock the caster down, bind or gag them, leave their sight, wait until sunrise.
- **Counterspell:** win a challenge against the ritual or the spell with any school that makes sense.
- **Breaking a lasting spell:** the same skill, range and resources that went in, and knowing what the spell is. It ends the spell, not its consequences.
- **Berkano sign** (Witcher): 1 Soul breaks one spell aimed at the Witcher, no requirements.

### The spirit world

A grey reflection of our world and the gateway to other planes; information and secrets shape it. Only **souls** enter (the body stays Unconscious; harming it ends the trip). Everything there is **Soul**: actions exhaust Soul, Scars are Soul Scars. Shamans enter it (*Spirit walk*: summoning 1 Material, venturing in 2 + 1 per companion); others only touch it.

| Asking about | Who knows | Time passing in our world |
|---|---|---|
| What's happening now | Most beings | A few heartbeats |
| Since the last sunrise or sunset | Fewer | Minutes |
| Since the last solstice or equinox | Fewer still | Hours |
| Since the Shaman was born | A few, hard to find | Up to days |
| Before the Shaman was born | Out of reach | — |

---

## 10. Hazards, substances and crafting

### Hazards

Every trap and harmful substance has five entries: **Reach** (who it hits), **Pool**, **Strength**, **Effect** (one: damage, a condition, a Scar, a story effect), **Giveaway** (every hazard needs one). Shorthand: *Spider venom (bite; fast Body poison, strength 5; Paralyzed).*

| Strength | Danger Level to avert | Damage to an NPC | Threat die vs a player | Feel |
|---|---|---|---|---|
| 1 | 1 | 1d6 | d4 | A sting, a prank, anything improvised |
| 2 | 2 | 2d6 | d4 | A rusty snare, a vial of acid |
| 3 | 3 | 3d6 | d6 | A dart trap, a sleeping draught, a small bomb |
| 4 | 4 | 4d6 | d6 | A spiked pit, a strong poison |
| 5 | 5 | 5d6 | d8 | Black powder, a deadly poison |
| 6 | 6 | 6d6 | d8 | A collapsing ceiling |
| 7 | 7 | 7d6 | d10 | A powder keg |
| 8 | 8 | 8d6 | d10 | Legendary work |

1. **Noticing** (optional): a **hidden** Soul saving throw (*Mechanisms*, *Urban* or *Wilderness survival*, *Potions and poisons*). Spotted means avoided.
2. **Disarming:** *Mechanisms* (or *Hunting* for a snare). A failure sets it off unless averted with Soul equal to its strength.
3. **Resisting:** an open saving throw. A player character averts at the strength; an ordinary NPC suffers it; an important one may spend Fate. A won or averted roll means nothing happens.
4. **Armour** counts against darts, blades, rocks, blast debris; not against poison, gas, acid, fire or falls.

| Kind | Class (skill) | Pool | Gets in by | Takes effect | Material per strength |
|---|---|---|---|---|---|
| Mechanical trap | Rogue (*Mechanisms*) | Body (Soul if it traps or misleads) | A trigger | At once | 1 |
| Wild trap | Hunter (*Hunting*) | Body | A tripline, bait | At once | 1 |
| Swallowed poison | Medic (anyone can try) | Body | Swallowed | Next sunrise or sunset | 1 |
| Contact poison (weapon coatings too) | Rogue (unique) | Body | A wound, mouth or eyes | Next sunrise or sunset | 1 |
| Narcotic | Shaman (unique) | Soul or Charisma | Swallowed | Next sunrise or sunset | 1 |
| Explosive | Alchemist (unique) | Body | Lit or impact | At once | 2 |
| Corrosive | Alchemist (unique) | Body | Splashed | At once | 2 |
| Gas | Alchemist (unique) | Body | Breathed in | At once | 2 |

- **Poisons** wear off at the sunrise or sunset after they take effect. Medic poisons work only on humans, humanoids and animals.
- **Blasts:** full strength where they go off, 1 less per metre. Reach: strength 1 own square; 2 → 1 m; 3 → 2 m; 5 → 4 m; 7 → 6 m. Gas keeps full strength in a closed room no wider than its reach.
- **Strength cap:** the maker's Soul pool. NPC hazards are pre-made.
- **Widespread trap** (a net, a ceiling): +1 Material.

| Property | Does | Perk | Cost |
|---|---|---|---|
| Fast | Works at once | *Unusual poison* (Medic) | +1 Material per strength |
| Two-part | Sleeps until triggered (wine, smoke) | *Unusual poison* | +1 per strength |
| Hard to detect | No taste, smell or colour | *Unusual poison* | +1 per strength |
| Bare skin | Contact poison through unbroken skin | *Your lips are venomous poison* (Rogue) | +1 per strength (+2 if the maker is immune) |
| On a word | Explosive or gas goes off at a sound or word | *On a word* (Alchemist) | +1 per strength |
| First one met | Narcotic: acts a set way towards the first person met | *Philtres* (Shaman) | +1 per strength |

**Falling** is a hazard (Acrobatics saving throw; armour doesn't help): 3 m strength 2, 6 m 4, 9 m 6, 12 m 8.

### Potions and elixirs

- **Healing potion** (Medic): 1 point per Material, treats **one kind of Scar** named when made (burns, cuts, fever), Body by default; shared between patients; keeps practically forever. *Omni potion* heals any Body Scar.
- **Elixirs** (Alchemist, unique), for the drinker's **next action** only:

| Elixir | Effect | Material |
|---|---|---|
| Skill elixir | One named skill gets a free Precise, Mighty or Cunning | 2 |
| Master elixir | One named skill gets Very precise, Very mighty or Very cunning | 3 |
| Wonder elixir | An ability no human has: flying, walking on water, breathing fire, seeing in the dark | 5 |

- **Artificial life** (Alchemist): a shem animates a body up to human size; a day-and-night ritual, 5 Material per point of Bond; lasts to the next solstice or equinox.
- **Lasting magic items** are made only by the **Necromancer**; everything else runs out. Others come as loot and story rewards.

### Crafting

- Needs a place, tools, time and **Material**. With time, tools and rest afterwards, it simply works; in a hurry, a skill check (failure: avert with Soul or lose Material). In a hurry, **1 Material goes in per round**.
- **Improvised materials** (0 Material): hazards of strength 1 that stop working at the next sunrise or sunset; consumables have no rules effect.
- **Buying** a substance: about **Material × 1.5** in silver.

| 5E item | Ours | Material |
|---|---|---|
| Basic poison | Contact poison, strength 1, Fast | 2 |
| Vial of acid | Corrosive, strength 2 | 4 |
| Alchemist's fire | Corrosive, strength 2, burns each round until put out | 4 |
| Bomb | Explosive, strength 3 | 6 |
| Keg of gunpowder | Explosive, strength 7 | 14 |
| Antitoxin | A potion against poison Scars, or an antidote (Material = the poison's strength) | By strength |
| Potion of healing | Healing potion | 1 per point |
| Potion of flying, giant strength | Wonder elixir | 5 |

---

## 11. Companions, organizations, units and battles

### Companions

A trained wolf, a sellsword, a familiar, a bound demon: an **NPC stat block** (tracks take the hits) plus **Bond**, the pool the player spends for it.

- **Averting** costs Bond equal to the master's Danger Level; a **manoeuvre** costs 1 Bond. Scarring the Bond gives 2 points. Bond scars are the relationship (mistreatment, a broken deal).
- Bond is capped by the master's **Charisma**; below 0, the DM takes the companion over. No Fate.
- **Getting one:** find, bind (usually a challenge; Bond around 3), agree a payment. **1 payment refills 1 Bond**; healing a Bond scar or raising Bond by 1 costs a roll and 5 payments.
- **Payment** = its bonus in silver (people), a day's ration (animals), or a Scar (strange beings: blood is a Body Scar).

| Kind | Example | Turn |
|---|---|---|
| Familiar | A spirit in a raven's shape (Incantor spell *Familiar*) | Right after its master |
| Summon | A conjured spirit, an animated tree | Right after its master |
| Animal companion | A trained wolf, a falcon | Its own initiative |
| Hireling | A sellsword, a squire, a guide | Its own initiative |

### Organizations

An organization's **Reach** (1–5) is how much it matters; your **Standing** (0 up to its Reach) is your rank in it. Anyone can join any organization low down and lead one at Reach 1–2. **Standing 3–5 comes only from mighty class perks.** *Power* (favours spent to climb) is kept but not confirmed.

| Reach / Standing | Decides | Examples |
|---|---|---|
| 5 | Across the land | A strong king, an archbishop, a merchant league's head |
| 4 | Shapes the land, or decisive in a large region | A ducal advisor, the capital's burgomaster, a big city's underworld boss |
| 3 | A small region | An abbot, an officer over hundreds, a weak king |
| 2 | Influences a small region | A small town's guild master, a robber baron |
| 1 | A few subordinates in one community | A squire, a bandit chief, a smith with helpers |
| 0 | Rank and file | A king's soldier |

### Networks

The part of an organization you command, acting while you're elsewhere: a companion stat block with a **bonus** bought with money (at most Standing + 2), **one specialisation**, **12 track points** (Body muscle, Soul information, Charisma influence) and **Bond** from 0 (+1 per 5 payments, up to your Charisma). A payment is worth its bonus in silver. **Upkeep:** one payment's worth of attention a week; kept up, it sends a tip; skipped, a level-1 Bond scar. *Little birdies* (Scout) sets up a one-task network in a day.

### Units

A group run as one NPC.

| Size | How many | Body track | Payment |
|---|---|---|---|
| Handful | 2–11 | Average member ×2 | ×5 |
| Band | 12–60 | ×4 | ×25 |
| Horde | 60–300 | ×8 | ×125 |

- Soul and Charisma stay at the average member's (a good speech can rout a horde). No Fate; no Danger Level.
- Only a **widespread action reaching enough members** harms it (more than one for a handful, more than a handful for a band, more than a band for a horde). One damage roll per such action; at the next smaller size's maximum Body, it drops a size.
- **In a fight:** one initiative and one action; free Widespread plus another manoeuvre; a bigger unit gets unlimited free Defenses against smaller ones; exhausting against a bigger unit costs **double** the Danger Level.

**Unit types** *(draft)*: who's strong against whom; each free manoeuvre is the action's one.

| Type | Gets | Against it |
|---|---|---|
| Levy | Nothing; bonus usually 1 | Heavy infantry and cavalry get free Mighty; panic hits at Danger Level 3 |
| Heavy infantry | Free Defense vs every volley; free Mighty vs levies | — |
| Spears and pikes | Free Precise and Defense vs cavalry at its front (lost in forest, rubble, a breach) | Volleys against it are Precise |
| Missile | Shoots over friends; free Precise vs spears, pikes, levies | Cavalry in melee get free Precise; can't shoot while engaged |
| Light cavalry | Withdraws without its action; free Precise vs missiles, scouts, supply | Heavy infantry, spears, pikes get free Precise |
| Heavy cavalry | Charge (2+ squares straight): free Mighty vs light troops | Spears get Precise and Defense; half-speed ground makes it Slow |
| Scouts | Free Quick in round one; unseen in forest or hills | Heavy troops get free Mighty in melee |
| Sappers | Precise against structures; stakes slow cavalry | As levies |
| Supply train | Doesn't attack | Everyone gets free Mighty; lost: Charisma damage to the army at Danger Level 2, and starving |

### Battles

| A unit at 0 in | Has | After the battle |
|---|---|---|
| Charisma | Scattered | Gathered again in a day (*Combat leadership* or *Leading people outside combat*), one size smaller |
| Body | Been destroyed | Gone |
| Soul | Broken (panic, control) | As scattered, unless magic holds it |

- **Panic:** when a unit breaks, touching friendly units take Charisma damage at Danger Level 2.
- **An army breaks** at a quarter of its units broken (4 units → 1, 8 → 2, 12 → 3, 16 → 4, 20 → 5).
- **Commander's duel:** anyone challenges an enemy commander in earshot; the battle pauses; winner's units get free Precise for 3 rounds; loser's units take Charisma damage at Danger Level 3. Refusing without reason: companion units lose 1 Bond, others take Charisma damage at Danger Level 2.

### Grid and scales

| Scale | One square | Holds | A round | For |
|---|---|---|---|---|
| Skirmish | 1 m | One person | 6 s | Fights of a few people |
| Battle | 5 m | A handful | 6 s | Fights with units |
| Field | 50 m | A horde | 1 minute | Pitched battles; heroes join units |
| Campaign | 5 km | — | An hour | Marches |

| Size | Skirmish squares | Example |
|---|---|---|
| Small, Medium | 1 | Halfling, human, wolf |
| Large | 2 × 2 | Horse, ogre, troll |
| Huge | 3 × 3 | Giant, wyvern |
| Gargantuan | 4 × 4+ | Dragon |

| Who | Skirmish walk / run | Battle | Field |
|---|---|---|---|
| Dwarf, Halfling | 5 / 10 | 1 / 2 | 1 / 2 |
| Human, Elf | 6 / 12 | 1 / 2 | 1 / 2 |
| Kroll | 7 / 14 | 1 / 2 | 1 / 2 |
| Pony, mule, war dog, wolf | 8 / 16 | 1 / 3 | 1 / 3 |
| Riding horse, warhorse | 12 / 24 | 2 / 5 | 2 / 5 |
| Ox cart | 4 / — | 1 / — | 1 / — |

| Unit size | Battle | Field |
|---|---|---|
| Handful | 1 square | Part of a square |
| Band | 4 squares (2 × 2 or 1 × 4) | Up to 4 per square |
| Horde | 16 squares (4 × 4, 2 × 8, 1 × 16) | 1 square |

- **Flank or rear attacks are Precise.** Units in touching squares are engaged; leaving takes the action. A line turns only with its whole movement.

| Action | Reaches at battle scale | Field |
|---|---|---|
| Melee by one person | 1 square (a handful) | — |
| A ranged attack or spell | A tight 2 × 2 (a band) | — |
| A unit's Widespread volley | Every square in range | 1 square |
| Commands, threats, a speech | Everyone within 6 squares | 1 square |

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

---

## 12. Travel and the wild

### Speeds and a day's travel

A travelling day is 8 hours. The slowest traveller sets the pace.

| Who | Per turn | Running | km/h | km a day (road, normal) |
|---|---|---|---|---|
| Dwarf, Halfling | 5 m | 10 m | 4 | 30 |
| Human, Elf | 6 m | 12 m | 5 | 40 |
| Kroll | 7 m | 14 m | 5.5 | 45 |
| Ox cart, heavy wagon | 4 m | — | 3 | 25 |
| Pony, mule, draught horse, war dog, wolf | 8 m | 16 m | 6.5 | 50 |
| Riding horse, warhorse | 12 m | 24 m | 10 | 75 |

| Speed | Pace | Road, plains | Hills, forest | Mountains, swamp | Severe |
|---|---|---|---|---|---|
| 4 m | Slow / Normal / Fast | 17 / 25 / 33 | 13 / 19 / 25 | 8 / 13 / 17 | 4 / 6 / 8 |
| 5 m | Slow / Normal / Fast | 20 / 30 / 40 | 15 / 23 / 30 | 10 / 15 / 20 | 5 / 8 / 10 |
| 6 m | Slow / Normal / Fast | 27 / 40 / 53 | 20 / 30 / 40 | 13 / 20 / 27 | 7 / 10 / 13 |
| 7 m | Slow / Normal / Fast | 30 / 45 / 60 | 23 / 34 / 45 | 15 / 23 / 30 | 8 / 11 / 15 |
| 8 m | Slow / Normal / Fast | 33 / 50 / 67 | 25 / 38 / 50 | 17 / 25 / 33 | 8 / 13 / 17 |
| 12 m | Slow / Normal / Fast | 50 / 75 / 100 | 38 / 56 / 75 | 25 / 38 / 50 | 13 / 19 / 25 |

- **Weather and ground move the column:** heavy rain, mud, ankle-deep snow one column right; snowstorm, knee-deep snow two. Past *Severe*: 3 km at most.
- **Encumbered:** one pace slower. **Heavily encumbered:** slow pace and one column right.
- **Gallop:** +15 km on a road for one hour; horses then need a slow day. With a spare horse each, a second hour and no slow day.
- **Forced march:** each hour past 8 costs 1 Body to attempt.

### Pace and tasks

| Pace | Noticing (the watch) | Navigating, tracking, foraging | Sneaking |
|---|---|---|---|
| Slow | Advantage | Advantage | Yes |
| Normal | Plain | Plain | Disadvantaged |
| Fast | Disadvantage | Disadvantage; no foraging | No |

Each character picks **one task** a day. Travel rolls use the region's Danger Level (2 patrolled road, 3 wilds, 4 dangerous lands).

| Task | Roll | Success | Failure, not averted |
|---|---|---|---|
| Keep watch | *Wilderness* or *Urban survival* (hidden) | The party notices an encounter first | The encounter notices first |
| Navigate (off road) | *Wilderness survival* | On course | Lost: the day's distance counts for nothing |
| Track | *Hunting* | On the trail | Trail lost until a new sign |
| Forage (not fast) | *Hunting* | Food for the party, and 1 Material | Nothing |
| Map | *Warrior knowledge*, *Ranger knowledge*, Scout skills | Advantage navigating this route again | — |
| Hunt (not fast) | Game d10 by land (lush 1 nothing · 2–3 tiny · 4–7 small · 8–10 large; settled 1–2 · 3–5 · 6–9 · 10; devastated 1–4 · 5–7 · 8–9 · 10; barren 1–5 · 6–8 · 9 · 10), then *Hunting* | Tiny: food for one; small: the party today; large: the party 3 days + 2 Material. Hunter *Fresh tracks* (1 Soul) skips the d10 | The game gets away |
| Cover the trail (slow) | No roll | Tracking the party is disadvantaged | — |
| Sneak (slow or normal) | *Acrobatics* or *Wilderness movement*, everyone | Unseen | Seen |

### Weather

Roll **2d6 each morning**; a 7 keeps yesterday's weather.

| 2d6 | Spring | Summer | Autumn | Winter |
|---|---|---|---|---|
| 2 | Late frost, sleet | Thunderstorm | Gale | Snowstorm |
| 3–4 | Heavy rain | Heavy rain shower | Heavy rain | Snow |
| 5–6 | Rain | Overcast, showers | Fog | Overcast, frost |
| 7 | As yesterday | As yesterday | As yesterday | As yesterday |
| 8–10 | Fair | Fair, warm | Fair, morning fog | Clear, hard frost |
| 11 | Mild, roads drying | Heat | Rain | Thaw: mud |
| 12 | Thaw floods: fords impassable | Heatwave | First snow | Bitter cold |

| Weather | Travel | Noticing, ranged attacks | Exposure |
|---|---|---|---|
| Fair, overcast, showers, rain | — | — | — |
| Fog | — | Nothing seen beyond 20 m; navigating disadvantaged | — |
| Heavy rain, sleet | One column right | Noticing disadvantaged; open flames go out | — |
| Thunderstorm, gale | One column right | Noticing and ranged attacks disadvantaged | Shelter is wise |
| Snow | One column right from the next day | — | Cold |
| Snowstorm | Two columns right | Nothing beyond 10 m; noticing, navigating, ranged disadvantaged | Cold |
| Thaw, mud | One column right | — | — |
| Thaw floods | Fords impassable for a day | — | — |
| Heat | — | — | Heavy armour: the march costs 1 Body to attempt |
| Heatwave | — | — | Everyone: 1 Body to attempt (2 in medium or heavy armour), unless marching at night |
| Hard frost, bitter cold | — | — | Cold |

**Cold:** a night outdoors without fire, tent or warm clothes is an *Endurance* saving throw at Danger Level 3 (bitter cold 5); failing gives a level-1 Body Scar. Rain, snow, cold and heat make any unsheltered night a poor rest.

### Random encounters

Roll a **d6 twice a day** (the march and the night).

| Region | Encounter on | Danger Level of travel rolls |
|---|---|---|
| A patrolled road, farmland | 1, and only at night | 2 |
| The wilds: forest, hills, an unpatrolled road | 1 | 3 |
| Dangerous lands: war zone, monster country, outlaw forest | 1–2 | 4 |

Camping by the road or in a village counts one row safer; a fire at night in the wilds one row worse. The DM can skip or place encounters.

| d6 | Encounter |
|---|---|
| 1 | A sign: tracks, a corpse, a burnt farm, a fresh grave |
| 2 | Travellers: merchants, pilgrims, a herald, refugees |
| 3 | The lord's men: a patrol, a toll, a bailiff |
| 4 | Beasts: wolves, a boar, a bear |
| 5 | Outlaws: bandits, deserters, poachers |
| 6 | Something worse: a monster or fiend (in dangerous lands, roll twice, take the worse) |

| Ground and light | Spotted at |
|---|---|
| Open ground by day | 100 m |
| Forest, hills, rain | 30 m |
| Dense forest, fog, night, snowstorm | 10 m |

The side that noticed chooses (talk, hide, ambush, go round); the other is surprised: disadvantaged initiative in round one. A night encounter makes it a poor rest.

| 2d6 reaction | Travellers, the lord's men, outlaws |
|---|---|
| 2–4 | Hostile: attack, rob or arrest |
| 5–8 | Wary: talk, hands on weapons |
| 9–12 | Friendly: news, trade, the fire |

### Ground

| Ground | In a fight | Travel column | The catch |
|---|---|---|---|
| Road, firm meadow, light forest | Full | Road | — |
| Ploughed field, tall grass, ankle-deep snow, a knee-deep ford | Half | Hills, forest | — |
| Mud, wet clay | Half | Hills, forest | Running or fighting: Acrobatics or fall prone |
| Ice | Full, walking only | Road, slow only | Running, fighting, being hit: Acrobatics or prone |
| Knee-deep snow, dunes, scree, steep uphill | Half | Mountains | Downhill at a run: Acrobatics or fall |
| Dense forest, thicket | Half | Mountains | No riding |
| Primeval forest, pathless mountain | Half | Severe | No riding or carts |
| Deep mud | Quarter | Severe | Carts stuck; ending a turn still: Strength or stuck |
| Bog, marsh | Quarter | Severe | Ending a turn still: Strength or Restrained |
| Waist-deep water | Quarter | Severe | Armour's cost to attempt |
| Swimming | Quarter | — | Armour's cost; heavy armour sinks |
| Climbing | Quarter | — | A saving throw at the fall's Danger Level |

Half and quarter speed: 5 m → 2.5 / 1 m; 6 m → 3 / 1.5; 7 m → 3.5 / 2; 8 m → 4 / 2; 12 m → 6 / 3.

### Digging and mining

| Ground | m³ per hour, by hand | With tools | A tunnel, crew of 4, per 8-hour shift |
|---|---|---|---|
| Sand, loose earth | 0.1 | 1 | 4 m |
| Garden earth | 0.1 | 0.75 | 3 m |
| Clay, packed earth | — | 0.5 | 2 m |
| Gravel, stony ground | — | 0.25 | 1 m |
| Frozen ground | — | 0.1 | 0.5 m |
| Soft rock | — | 0.05 | 0.5 m |
| Hard rock | — | — | 10 cm (30 with fire-setting) |

A grave is about 2 m³; a tunnel is 1 × 2 m. Overtime costs 1 Body per hour to attempt. **Cave-ins** (d6 per shift): sand 1–3 unshored, 1 shored; earth and gravel 1–2; clay and frozen 1; rock never. Shaking ground: roll at once, shored tunnels fall on a 1. Caught inside: Acrobatics at Danger Level 4, or a d6 threat-die Body Scar and Restrained until dug out. Shoring costs 1 Material per metre.

---

## 13. Economy

### Coins

- **1 gp = 100 sp; 1 sp = 10 cp.** **Silver is the everyday currency.** 1 sp ≈ a Prague groschen ≈ a day's unskilled wage (1372). 1 cp ≈ a mug of beer. 1 gp is 3–4 months of labour, a heavy "great gold" or bookkeeping unit.
- In-world: a *kopa* = 60 sp; a florin = 16 sp.
- **1 Material = 1 sp.** It's abstract supplies (herbs, wood, components), named when spent.

| Amount | Buys |
|---|---|
| 1 cp | A mug of beer, a bread roll, a torch, a foot toll |
| 1 sp | A day's wage, a chicken, a block of cheese |
| 10 sp | Leather boots, a calf, a plough |
| 1 gp | Two cows, a cheap riding horse, a basic sword |
| 10 gp | A simple town house, a good warhorse |
| 100 gp | A showpiece burgher house, a small village |

### Converting 5E prices

- **X gp in 5E → X × 10 sp.** 5E copper and silver prices stay about the same.
- **Cut hard:** armour (plate 1,500 gp → about 480 sp in pieces), horses (riding horse ~150 sp, destrier 12–24 gp), livestock (halved), food and lifestyle (÷10: modest living 1 sp a day).
- **Raised:** clothing and books (common clothes 40 sp, fine clothes 300 sp, a book 150 sp).
- **Swords are expensive** (longsword 120 sp); village iron and polearms cheap (spear 4 sp, halberd 25 sp).
- **Not available:** spyglasses, sextants.

### Wages, lifestyle, property

| Work | Per day |
|---|---|
| Labourer | 1 sp |
| Carpenter, mason | 2–3 sp |
| Master craftsman | 3–5 sp |
| Foot soldier | 1.5–2 sp |
| Crossbowman | 3 sp |
| Mounted man-at-arms | 5 sp |
| Knight leading a troop | 10–20 sp |
| Untrained hireling | 1 sp |
| Skilled hireling | 3 sp |

| Adventurer pay | |
|---|---|
| A day of real danger | 10–15 sp |
| Escort duty | 10–20 sp a job |
| A bandit bounty | 30–60 sp a head |
| A monster, a lord's errand | 50–100 sp |
| Loot | 5–30 sp |

| Lifestyle | Per day | Rest |
|---|---|---|
| Squalid | 3 cp | Poor |
| Poor | 6 cp | Poor |
| Modest | 1 sp | Quality if safe |
| Comfortable | 2 sp | Quality |
| Wealthy | 5 sp | Quality |
| Aristocratic | 20 sp+ | Quality |

| Property | Price |
|---|---|
| A town house | 4–10 gp |
| A lán of farmland (16–18 ha) | 9–15 gp |
| A village | 100–250 gp |
| A fortified manor | 150–300 gp |
| A small castle | 1,000–3,000 gp |

Tolls: a city gate is 1 cp on foot.

### Prices move

**Final price = base × season × region × event.** Grain ±30% by season, ×2–4 in famine; arms and horses ×1.5 in war (warhorses ×2); a siege ×5+ on food. Big towns are cheap for imports and dear for food and lodging; mining towns +25–50%; villages cheap food, dear or missing goods. **Pawnbrokers pay half.** Crafted substances: **(Material + labour) × 1.25**, roughly Material × 1.5. A won haggling roll (a Charisma skill, plus a known setting's +1 if the DM allows it) moves the day's price one step:

| 2d6 (optional day's price) | Price |
|---|---|
| 2 | −30% |
| 3–4 | −15% |
| 5–9 | List |
| 10–11 | +15% |
| 12 | +30% |

**Plate is a goal, not a starting option:** good plate in pieces (~480 sp) takes 6–10 jobs; second-hand ~300 sp plus refitting; upkeep ~1 sp a week; wearing it marks you as rich.

### Price list

Weapons, armour and shields are in Combat. Prices in silver unless marked cp.

| Clothing | | Gear | | Gear | |
|---|---|---|---|---|---|
| Spare hood and cloak | 10 | Torch | 1 cp | Hemp rope (15 m) | 4 |
| Common clothes | 40 | Quill, bone dice | 1 cp | Bedroll, winter blanket | 5 |
| Sailor's clothes, costume | 40 | Pouch, sealing wax, oil (flask) | 1 | Playing cards, marked cards | 5 |
| Dark hooded clothes | 45 | Parchment (sheet), ink (bottle) | 1 | Hooded lantern, iron pot, manacles | 8 |
| Scholar's robe | 50 | Rations (1 day) | 1 | Steel mirror | 15 |
| Traveller's clothes, vestments | 60 | Glass jar | 1.5 | Perfume (vial), tent (two-person), ledger | 20 |
| Fine clothes | 300 | Small knife, tinderbox, oil lamp | 2 | Silk rope (15 m), signet ring | 50 |
| | | Holy symbol, waterskin | 3 | Prayer book | 100 |
| | | Backpack | 4 | Book of history or philosophy | 150 |

| Tools | | Tools | | Instruments | |
|---|---|---|---|---|---|
| Clippers, needle and thread, splints | 1 | Lockpicks | 15 | Flute | 2 |
| Leather gloves, mortar and pestle, scissors | 2 | Balance scales and weights | 15 | Hunting horn, drum | 5 |
| File, pliers, sounding line | 3 | Gold and silver leaf | 15 | Shawm | 10 |
| Shovel | 4 | Lodestone compass | 20 | Bagpipes | 30 |
| Crowbar, hunting trap, drawing compasses | 5 | Smith's hammer | 5 | Lyre, dulcimer | 40 |
| Small mirror on a handle, wax-carving tools | 6 | Saw, tongs | 4 | Hurdy-gurdy, fiddle | 50 |
| Face paints, false beard and wig, blank seals | 8–10 | Hand loom | 20 | Lute | 60 |
| | | Copper brewing kettle | 40 | | |

Kits are bought as their parts (thieves' tools ≈ 30 sp: file, lockpicks, mirror, scissors, pliers); consumables in a kit are Material.

### Domains *(confirmed; numbers are a starting point)*

A held domain runs on **seasonal turns** between adventures. The lord's Standing equals the domain's Reach (a village 1, a manor 2, a town 3).

1. The lord sets the **tax rate** and up to **two upkeep actions** (+1 per companion running part of it).
2. Add up where the **mood** is heading.
3. The mood moves **one step** towards it.
4. Collect income for the new mood; pay upkeep.
5. Roll for revolt if the mood calls for it.

| This season | Mood heads |
|---|---|
| Light / normal / heavy / crushing taxes | +1 / 0 / −1 / −2 |
| Keeping the law in person, a feast (a tenth of income), alms or a church (a tenth), walls built, a holding built or repaired | +1 each |
| A garrison keeping order | −1 (and holds the mood below 0) |
| Levies raised for war | −1 |
| Confiscation, or plunder by the lord's own troops | −2 |
| Famine, plague, a raid, a fire; the lord away all season with no companion in charge | −1 each |

| Mood | | Income | Revolt (d6 each season) |
|---|---|---|---|
| +3 | Content | Full; levies come willingly | — |
| +2 | Loyal | Full | — |
| +1 | Calm | Three quarters | — |
| 0 | Sullen | Half | 1–2 |
| −1 | Wary | Half | 1 |
| −2 | Afraid | Three quarters | 1 |
| −3 | Terrorised | Full | 1; any revolt is an assassin |

Fear works only with a garrison; without one, a mood below 0 rises towards 0. **Revolt** (d6): 1–2 an outlaw hero skims a quarter of the income until hunted down; 3–4 an uprising (every village fields a band of peasants); 5–6 an assassin.

| Holding | Full | ¾ | ½ | To build | Pays back in |
|---|---|---|---|---|---|
| A lán of peasant land | 10 sp | 8 | 5 | 900–1,500 sp | 25–35 years |
| A mill | 40 sp | 30 | 20 | 800 sp | 5 years |
| A tavern licence | 15 sp | 11 | 8 | 300 sp | 5 years |
| A smithy | 10 sp | 8 | 5 | 200 sp | 5 years |
| A fishpond | 30 sp | 23 | 15 | 600 sp | 5 years |
| Woods | 15 sp | 11 | 8 | With the land | — |
| A vineyard | 20 sp | 15 | 10 | 400 sp + 3 years | 8 years |
| A toll | 30–60 sp | 23–45 | 15–30 | A bridge or a grant | — |
| A weekly market | 400 sp | 300 | 200 | A charter | — |
| A town house's rent | 8 sp | 6 | 4 | — | — |
| A silver mine | 500 sp+ | — | — | A royal grant | — |

| Typical domain | Holdings | Full | ¾ | ½ |
|---|---|---|---|---|
| A village | 16 lány, a mill | 200 sp | 150 | 100 |
| A manor with three villages | Three villages | 600 sp | 450 | 300 |
| A small town | 150 houses, a market, a toll, 2 mills, 8 taverns | 2,000 sp | 1,500 | 1,000 |

| Disaster | Holdings |
|---|---|
| Famine | Fields give half |
| Plague | Fields and town houses give half |
| Fire | One building gone (or ten houses) until rebuilt |
| A raid | One building burnt; one village's fields give nothing |
| A flood | Mills and fishponds give nothing |

**Castle upkeep** per season: a fortified manor 100 sp, a small castle 1,000 sp. Unpaid, a wall section loses a quarter of its Body each season, and repairs cost double.

---

## 14. Sieges and structures

Walls, gates and roofs have a **Body track per section** (about 3 m of wall, one gate, a 3 × 3 m patch of roof) and a **sturdiness**: a hit dealing less does nothing; one that reaches it deals full damage. At 0 a wall is breached, a gate broken, a roof falls in.

| Section | Body | Sturdiness | Burns (per round) | Crew of 4 takes it down in |
|---|---|---|---|---|
| Wattle and daub | 15 | 0 | 5 | 1 minute |
| Plank wall, plain door | 20 | 5 | 5 | 5 minutes |
| Iron-bound door | 40 | 10 | 2 | 30 minutes |
| Log wall | 40 | 10 | 2 | 1 hour |
| Wooden palisade | 50 | 10 | 5 (oiled) | 2 hours |
| Brick wall | 60 | 10 | No | 4 hours |
| Stone house wall | 80 | 15 | No | 1 day |
| Town gate | 100 | 15 | 2 | 1 day |
| Portcullis | 80 | 20 | No | 2 days |
| Earth rampart (engines deal half) | 300 | 20 | No | 3 days |
| Town wall (2 m stone) | 400 | 20 | No | 4 days |
| Castle curtain wall, tower storey (3 m) | 600 | 25 | No | 1 week, or a mine |

| Roof | Body | Sturdiness | Burns | Falls on those below as |
|---|---|---|---|---|
| Thatch | 10 | 0 | 10 (a torch lights it) | d4 |
| Wooden shingles | 15 | 0 | 5 | d4 |
| Flat clay | 30 | 5 | No | d6 |
| Clay tiles on beams | 20 | 5 | 2 | d6 |
| Slate on beams | 25 | 5 | 2 | d6 |
| Stone vault | 100 | 15 | No | d10 |

**Small things** have only a sturdiness (a hit that reaches it breaks them): rope 0; a wooden bar, a chest 5; a lock, chain, manacles, hinge 10; a steel strongbox 15. A bucket chain puts out one burning section a round.

| Engine | Damage (average) | Range | Crew | Shots |
|---|---|---|---|---|
| Ballista (bolts ignore armour; usable on people) | 3d10 (16) | 24 / 96 m | 3 | 1 a round |
| Mangonel | 5d10 (27) | 40 / 160 m, not under 12 m | 5 | 1 every 3 rounds |
| Trebuchet | 8d10 (44) | 60 / 240 m, not under 12 m | 8 | 4 an hour |
| Ram (roofed) | 8d8 (36) | Touch | 10 | 1 a round |
| Explosive charge | Strength d6; tamped +2 dice | Thrown 4 / 12 m or placed | 1 | Once |
| A finished mine | The section above drops to 0, the next loses half | — | — | — |

Hitting a wall is a skill check (2d6 + crew bonus ≥ 9). A night's work by 10 restores a quarter of a section's Body; a breach needs rebuilding.

| Tamped charges to bring down | Strength 3 | Strength 5 | Strength 7 |
|---|---|---|---|
| Iron-bound door | 3 | 2 | 2 |
| Town gate | 6 | 5 | 4 |
| Portcullis | Rarely | 4 | 3 |
| Town wall | Rarely | 17 | 13 |
| Castle curtain wall | Rarely | Rarely | 20 |

| Place | Garrison | Food | Water |
|---|---|---|---|
| A fortified manor | 20 | 4 weeks | A well |
| A small castle | 60 | 12 weeks | A well, or 1 week from a cistern |
| A walled town | Burghers and 200 soldiers | 8 weeks | Wells |

- Double the people, half the weeks. Each starving week: Charisma damage at Danger Level 3, and the defending unit drops a size.
- **The storm:** defenders behind battlements have three-quarters cover; climbing a ladder costs 1 Body to attempt and climbers can't defend; pushing a ladder off is a Cunning; a siege tower needs no climb; a breach is half-speed rubble with no cover.
