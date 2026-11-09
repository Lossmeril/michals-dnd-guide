# Rules overview, condensed

The whole ruleset on a few pages: what's decided, without the history, the DrD2 summaries or the open questions.
The full version, with sources and reasoning, is [ruleset-overview.md](ruleset-overview.md). When the two disagree, that one wins.

Items marked *(draft)* aren't confirmed yet.

---

## 1. The idea

A gritty low-to-mid fantasy game built from **Dračí Doupě 2** and **D&D 5E**.

- **No attributes.** Characters have three **pools** (Body, Soul, Charisma) that they spend to push through danger.
- **Every roll bonus is a class level.** Classes are bundles of skills, and everyone multiclasses.
- **The Danger Level sets the price.** The worse the situation, the more each avoided failure costs.
- **Player characters have no hit points.** They pay to avoid harm, and what they don't pay for becomes a **Scar**.

---

## 2. Rolls

| Roll | When | Dice | Success |
|---|---|---|---|
| **Skill check** | An obstacle with no one opposing | 2d6 + class level | 9 or more |
| **Challenge** | Someone opposes you (a fight, a debate, a card game) | d20 + class level, both sides | Higher wins; ties go to the defender |
| **Defense roll** | You're attacked or targeted: a challenge you react with | d20 + class level vs the attacker | As a challenge |
| **Initiative** | Start of a fight | d20 | Higher acts first |
| **Damage** | Hitting an NPC | Weapon or spell dice + class level | — |

- **Which class level:** the class that owns the skill being used. Without the class, a non-unique skill is rolled with no bonus (a plain 2d6). A **unique** skill can't be tried at all without its class.
- **Saving throws don't exist.** Old texts' "saving throw" means a **defense roll** against an attacker, or a **skill check** against a hazard.

### Advantage and disadvantage

| | Skill check | Challenge, initiative |
|---|---|---|
| **Advantage** | 3d6, keep the best two | 2d20, keep the higher |
| **Disadvantage** | 3d6, keep the worst two | 2d20, keep the lower |

- Several sources don't stack: three advantages are still one.
- **Disadvantage always wins.** Any disadvantage makes the roll disadvantaged, however much advantage it has. (In 5E they cancel; here they don't.) Paying for Precise or Quick on a disadvantaged roll is wasted.

### Bonus die

Some abilities give a bonus die (e.g. *Trophy Hunter*: d4 at level 1 up to d12 at level 5). Once per encounter, add it to **any one roll**. Once rolled, it stays.

### Merit points

- The DM hands one out for **good play or roleplay**: a clever plan, a good story, playing the character's personality.
- **Spend one before a roll** for a free advantage on it.
- Usually you hold **up to 3** (the DM decides), and you're expected to spend them in the same session.
- They're **tracked per campaign**.

### Hazards

Traps, poison, falling floors, a curse muttered at you: anything with **no attacker** is a **skill check**. The player says how they deal with it, and the DM accepts a class whose skill fits. Skills follow expertise, not stats: recalling siege engines is Fighter's *Warrior knowledge*, not "intelligence".

| Hazard | Default skill (class, pool) |
|---|---|
| Dodging a trap, falling rocks, an explosion; balance | Acrobatics (Juggler, Body) |
| The same in the wild | Wilderness movement (Hunter, Body) |
| Holding on, breaking free, forcing a door | Strength (Fighter, Body) |
| Poison, disease, cold, hunger, a long march | Endurance (Medic, Body) |
| Fear, charm, mind magic, temptation | Willpower (Incantor, Soul) |
| Keeping face under threats or mockery | Confidence and intimidation (Fighter, Charisma) |
| Spotting a trap or ambush in the wild / in town | Wilderness survival (Hunter, Soul) / Urban survival (Juggler, Soul) |
| Recalling knowledge | By field: war → Fighter; occult and history → Incantor; wounds → Medic; beasts → Hunter |

---

## 3. Resources

### The three pools

| Pool | Covers |
|---|---|
| **Body** | Strength, speed, agility, armed combat, climbing, sleight of hand |
| **Soul** | Knowledge, perception, focus, lockpicking, spellcasting, alchemy |
| **Charisma** | Persuading, intimidating, deceiving, reading people, taming animals |

- Pools aren't hit points or skill. They're **how far you can push right now**. An empty pool doesn't mean collapse; it means pushing further costs Scars.
- The pool depends on context: a bow in a chaotic battle is Body, the same shot in an archery contest is Soul.
- **Starting pools: 15 points** split freely. No cap and no minimum, but a pool under 2 gets a warning: that character won't last.
- A level-up point can buy +1 to a pool.

### Coins and Material

- **1 gold = 100 silver; 1 silver = 10 copper.** One gold is a lot for a commoner.
- **Material** is abstract supplies (herbs, wood, components), worth 1 silver each. Say what it is when you spend it.

### Danger Level

- One number for how risky the situation is. **Default 3.** It can differ per character: the knocked-down warrior faces 5, the caster on the hill 2.
- **To avert a failure, exhaust points equal to the Danger Level** from the skill's pool.
- The DM raises it for hostile, urgent or chaotic situations; players lower it with cover, distractions, preparation.

| Level | Feel |
|---|---|
| 1 | A walk in the park |
| 2 | Same shit, different day |
| 3 | Time to file a safety report |
| 4 | The danger is real |
| 5+ | "The fuck did I stumble into?" |

### Cost to attempt

Some things are hard before you even start. Pay the **cost to attempt** (exhaust points) **before rolling**, whatever the result. It comes on top of the Danger Level. Typical cases: armour encumbrance, ice magic on a hot day, tracking on packed earth, each action through a sigil.

### Exhaustion

- **Exhausting** marks points as spent (one diagonal stroke).
- **Poor rest** restores 3 exhausted points of your choice. **Quality rest** (safe, comfortable, no stress) restores all of them.

### Scars

**Taking one to avert a failure:** when the pool is too low, take a Scar. It gives **2 temporary points** that must be spent right away; leftovers are lost.
*Danger Level 3, 1 Charisma left: take a Scar, 1 + 2 = 3, failure averted.*

**Scars the DM gives:** a failure you don't (or can't) avert becomes a Scar of the DM's choosing, with a **level**.
- A **level-N Scar blocks N points** of its pool until healed. Sleep doesn't heal it.
- From a hit: **scar level = damage roll − armour rating**. 0 or less is absorbed (the DM may scar the armour instead).
- Scars are story: Body wounds and illness, Soul nightmares and guilt, Charisma mockery and a ruined name.

**Healing a Scar:** **5 points per level**, plus addressing the cause (treating the wound, therapy, reparations), plus **one successful skill check per level**. The points can come from any mix of:
- the bearer's own pools (any of the three);
- a healer's pools, when a perk allows it;
- a healing substance made for that kind of Scar;
- Material, 1 point each, with the DM's agreement.

### Dying

- If a Scar's level exceeds the pool, it blocks the **whole pool** and the character starts **dying**. So does any Scar taken while that pool is already fully blocked.
- Body: physically dying. Soul: madness or catatonia. Charisma: reputation and self-worth ruined.
- **Dying rolls:** each turn a d20. 10+ is a success; **three successes** stabilise, **three failures** are the end.

### Item scars

- **Breaking your own item** gives 2 points of any pool, to spend at once. Only for things the item is plausibly part of (a lockpick for a lock, a sword in a fight). Improvised items don't count.
- **Armour scarred by the DM:** one piece breaks *(draft)*.
- **Repair:** 5 points (usually Material) plus a skill check, if it's plausible at all.

---

## 4. Combat

### Turns

- Rounds in initiative order. Each turn: **one action** and **one movement** (which can be split around the action).
- Actions: attack one target in reach, cast a spell, defend, and so on.

### Defending

- When targeted, react with a **defense roll** (a challenge). It uses your **action**, or the **Defense** manoeuvre if your action is spent.
- **Losing it** is a failure like any other: exhaust the Danger Level or take a Scar to avert it.
- **Not defending:** the attacker makes a **skill check** (2d6 + bonus ≥ 9). If it lands, it **can't be averted**: the attacker rolls damage and you take a Scar (damage − armour).

### Damage against player characters

NPCs don't roll weapon damage against player characters. They roll a **threat die**, and the result minus armour is the Scar's level:

| Threat | Die |
|---|---|
| Weak (a scared peasant, chip damage from core spells) | d4 |
| Normal (a guard, a wolf, small perk spells) | d6 |
| Big (an ogre, a troll, big area spells) | d8 |
| Legendary or gargantuan | d10 or more |

### Armour

Armour is built from **pieces**, one per slot (under, body, head, arms, legs). Each adds to **Protection** and **Burden**, and both totals fall into tiers: **1–3 light, 4–6 medium, 7+ heavy**.

| Tier | Rating (from Protection) | Encumbrance (from Burden, a cost to attempt) |
|---|---|---|
| None | 0 | — |
| Light | 1 | — |
| Medium | 2 | 1 Body |
| Heavy | 3 | 2 Body |

- **Rating** lowers the Scar from a hit, **and** lowers the Body you exhaust to avert being hit, though averting always costs **at least 1**.
- **Encumbrance** is paid before stealth, acrobatics, swimming, running and anything else the armour hinders.
- **A fitted plate harness** (plate body, bascinet, plate arms, plate legs) takes **3 off Burden**: heavy protection at medium burden.
- *(Draft.)* A Scar on armour **breaks one piece**.

### Manoeuvres

Each costs **1 point** of the pool in use, unless something makes it free.

| Manoeuvre | Effect | Declared |
|---|---|---|
| **Precise** | Advantage on the action's roll | Before the roll |
| **Mighty** | See below | Before the roll |
| **Cunning** | The target is knocked prone, grappled or pushed | After the attack lands |
| **Quick** | Advantage on initiative | Before initiative |
| **Defense** | Defend without spending your action | When targeted |
| **Widespread** | The action hits several targets instead of one | When describing the action |

- **One paid manoeuvre per action.** Free ones (from a weapon, a perk, any advantage) and Quick don't count.
- **Any advantage is a free Precise** (or Quick on initiative); paying for a second one does nothing.
- **Every multi-target action needs Widespread.** Area perk spells have it built in; base magic pays for it.
- **Weapons give one free manoeuvre:** piercing and thrown → Cunning; slashing and bows → Precise; bludgeoning and crossbows → Mighty (set per weapon in the item list). A **shield** gives a free Defense once per round. Improvised weapons give nothing.

**Mighty, Very mighty, Cruelly mighty**

| | Mighty | Very mighty | Cruelly mighty |
|---|---|---|---|
| **Player character averts** | +1 cost | +2 cost | First takes a level-1 Scar (no temporary points), then pays |
| **Player character doesn't avert** | Scar +1 | Scar +2 | Scar +2 |
| **NPC's Body** | +1 damage die | +2 damage dice | If it defends: takes one die of damage before rolling; if not, +2 dice |
| **NPC's Soul or Charisma** | Danger Level +1 | Danger Level +2 | If it defends: takes the attacker's class level first |
| **Who has it** | Anyone, or free from a weapon | Class perks, NPC abilities | Mighty class perks, NPC abilities |

- **Mighty is a gamble:** if your roll is lost and you don't avert it, you have **disadvantage on your next roll**. A hit the target averts isn't a miss.

### Conditions

- **From 5E:** Blinded, Charmed, Deafened, Frightened, Grappled, Incapacitated, Invisible, Paralyzed, Petrified, Prone, Restrained, Stunned, Unconscious.
- **From DrD2:**
  - **Imprecise:** disadvantage with a skill or everything; no Precise.
  - **Slow:** disadvantage on initiative; no Quick.
  - **Feeble:** opponents avert your actions 1 cheaper (minimum 1); no Mighty.
  - **Foolish:** your actions can't raise anyone's Danger Level; no Cunning.
- A condition lasts **as long as its cause**. Its disadvantage blocks every source of advantage.
- A hit from within 1 m on a Paralyzed or Unconscious target adds an extra damage die (there are no critical hits).

### Resistances and weaknesses

| | Damage | Exhaustion cost |
|---|---|---|
| Weakness | ×2 | ×2 |
| Weakness bonus *N* | — | +N |
| Resistance | ×½ | ×½ |
| Resistance bonus *N* | — | −N |
| Immunity | None | None |

Damage types: fire, ice, lightning, poison, psychic, necrotic, radiant, force, thunder, acid, piercing, slashing, bludgeoning.

### Units and distances

Metres, converted at **5 ft = 1 m**: adjacent 1 m, walking speed 6 m, thrown 4/12 m, shortbow 16/64 m, longbow 30/120 m.

---

## 5. NPCs

NPCs don't work like player characters:

| | Player character | NPC |
|---|---|---|
| **Roll bonus** | Class level (max 5) | A fixed bonus to a group of skills, usually up to +5, legendary up to +8 |
| **Taking harm** | Exhausts or takes Scars | Loses points off its **tracks** |
| **Averting failure** | Exhausts the Danger Level | Can't; important NPCs spend **Fate** |
| **Danger Level** | Tracked | Not tracked |
| **Damage it deals** | Dice + class level | A threat die, turned into a Scar |
| **Defeat** | Dying rolls | Overpowered at 0 in any track |
| **Manoeuvres** | 1 point, or free from weapon or perk | Free if granted; otherwise 1 Soul or Charisma |

- **Tracks:** Body is 5E hit points (a guard 11, an ogre 59). Soul and Charisma are small tracks for fear, mind magic, intimidation and humiliation. Don't compare an NPC's Body track with a player's Body pool; they're different scales.
- **At 0 in a track:** Body: down or dead. Soul: breaks, panics or is controlled. Charisma: surrenders, flees or gives in.
- **Soul and Charisma damage:** win a Soul or Charisma roll against an NPC and its track drops by **the Danger Level it faces right now + your class level**. *A Juggler 3 with a blade at a guard's throat (Danger Level 4) takes 7 off his Charisma.*
- **Fate (1–3, important NPCs only):** spend 1 to turn a lost roll into a win. Refills at sunrise. Ordinary NPCs have none: their failures land.

### Reading a stat block

Stat blocks are written in rulebook pages as ```` ```npc ```` (or `companion`, `unit`, `network`, `organization`), one `field: value` per line, then `## Sections`. Any field or section can hold `English |cs| Czech`. Fields you leave out aren't shown. Below each block the card prints a short **Running it** box with the rules that apply to it; `rules: no` hides that box.

**Fields on every creature block (NPC, companion, unit)**

| Field | What it means |
|---|---|
| **name** | The creature's name. |
| **subtitle** | The italic line under the name: size, kind, how important it is ("Medium human, ordinary"). A bestiary creature without one shows its category. |
| **image** | A picture shown with the block. |
| **body** | The Body track: its hit points. Weapons and damage spells take it down. |
| **soul** | The Soul track: how much fear, mind magic and illusion it takes to break it. |
| **charisma** | The Charisma track: how much intimidation, deception or humiliation it takes to make it give in. |
| **skills** | Its roll bonuses, like class levels: "+2 Fighter skills", "+4 Foot close combat". It adds this to d20 in a challenge, or to 2d6 in a skill check (an undefended attack lands on 9+). |
| **armour** | What it wears. The rules don't yet say how armour changes damage against an NPC; for now it's description, and what the DM scars when it breaks. |
| **speed** | How far it moves in one movement, in metres. |
| **threat** | The threat die it rolls when it hits a player character: the result minus their armour is the Scar's level. |
| **fate** | Important NPCs only: how many lost rolls it can turn into wins (1 each). Refills at sunrise. No field means no Fate. |
| **manoeuvres** | Manoeuvres it gets free: its weapon's, a shield's Defense, a wolf's Cunning on every bite, a champion's Very mighty. Anything else costs it 1 Soul or Charisma. |
| **resistances / weaknesses / immunities** | Damage types or effects it resists, is weak to, or ignores (see the table above). |
| **senses** | Darkvision, a keen nose, tremorsense, and so on. |
| **languages** | What it speaks or understands. |
| **## sections** | Its special abilities, actions and reactions, like a 5E stat block's traits and actions (`## Abilities`, `## Actions`). An attack usually names its weapon damage (used against NPCs) and its threat die (used against player characters). |

**Extra fields on a companion**

| Field | What it means |
|---|---|
| **role** | `familiar`, `summon`, `animal` or `hireling`. Familiars and summons act **right after their master**; animal companions and hirelings roll **their own initiative**. |
| **master** | The character it serves. |
| **bond** | Its Bond: the pool the player spends for it. Averting a failure costs Bond equal to the master's Danger Level; a manoeuvre costs 1. Never above the master's Charisma. |
| **payment** | What one payment is (silver, a ration, blood as a Body Scar). 1 payment refills 1 Bond. |

A companion has **no Fate**.

**Extra fields on a unit**

| Field | What it means |
|---|---|
| **size** | `handful` (2–11), `band` (12–60) or `horde` (60–300). |
| **members** | Who's in it ("40 royal scouts"). |
| **body** | The **average member's** Body. The card multiplies it by size (handful ×2, band ×4, horde ×8) and shows where the unit drops a size. |
| **soul / charisma** | The average member's; they don't grow with numbers, so a good speech can rout a horde. |
| **bond, payment, master** | For a companion unit. A payment is multiplied ×5 per size step. |

**Fields on a network**

| Field | What it means |
|---|---|
| **master** | The character running it. |
| **bonus** | Its roll bonus, bought with money; at most the master's Standing + 2. |
| **specialisation** | The one thing the bonus applies to ("smuggling and fencing"). Outside it, the network rolls with no bonus. |
| **body / soul / charisma** | Its tracks, 12 points in total: Body is muscle (theft, ambushes, kidnapping), Soul is information, Charisma is influence and bribery. The card warns if they don't add up to 12. |
| **bond** | Starts at 0; +1 per 5 payments, up to the master's Charisma. |
| **payment** | One payment = the bonus in silver, unless written otherwise. One payment of attention a week is the upkeep. |

**Fields on an organization**

| Field | What it means |
|---|---|
| **reach** | How important it is in the world, 1–5 (1: a few people in one community; 5: decisive across the land). |
| **seat** | Where it sits. |
| **leader** | Who runs it (their Standing equals the Reach). |
| **structure** | How it's organised: a loose gang, a strict hierarchy. |
| **rank 0 … rank 5** | What each Standing in it is called and what it lets you do ("rank 1: sergeant, can detain a citizen"). |
| **companions, network, allies, rivals** | Who you can get from it, the network it runs, its friends and enemies. |

---

## 6. Bestiary

Every creature belongs to one of **five categories**:

| Category | What | Examples |
|---|---|---|
| **Animals** | Ordinary, non-magical beasts | Wolves, bears, horses |
| **Humans and humanoids** | Sapient, human-shaped | Humans, elves, dwarves, krolls, trolls, giants |
| **Undead and reanimated** | Made from remains and souls; artificial life too | Skeletons, ghosts, golems |
| **Monsters** | Animal-like, magical by nature | Dragons, wyverns, basilisks, lesser vampires |
| **Fiends** | Otherworldly; drawn to worship and human souls | Higher vampires, leshies, noonwraiths, demons, familiars |

How the rules use them:
- **"Humans and beasts"** (Fighter, Hunter, Juggler, Warrior, Scout combat) means Humans and humanoids plus Animals. A troll is fought with Fighter; a wyvern needs Ranger or Witcher.
- **Ranger** fights monsters. **Witcher** fights monsters, fiends and undead.
- **Animal** skills and magic, and **Medic poisons**, stop at the animal/monster line.
- **"Supernatural beings"** means undead, monsters and fiends.

*(Draft)* Subgroups under each category, like an academic bestiary's families.

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
7. **Personality:** a few words to play from. Playing it well earns merit points.

### Races

| Race | Speed | Racial perk options |
|---|---|---|
| **Human** | 6 m | For the King, Sticks and Stones, Maiden Fair, I Know a Guy |
| **Elf** | 6 m | Behind Blue Eyes, Eternal Nobility, Veil of Night |
| **Dwarf** | 5 m | Night Eyes, Skin Made of Iron, Iron Liver, Blood Bond |
| **Halfling** | 5 m | Sixth Sense, Silent Feet, Connoisseur, Scrappy |
| **Kroll** | 7 m | Echolocation, Fury, Bison Skin |

No fairies, vampires or ghosts. ("No, Gareth.")

### Backgrounds

All 19 from the 2014 and 2024 PHBs. Like 5E's, but **no skill proficiencies**. A background gives:
- **Starting gear**, from the item list, sometimes with a choice ("a weapon and a shield, or two weapons"). Classes give no gear, so every background brings a weapon; kits come as their separate items, their consumables as Material;
- **coins and Material**;
- **extra languages**;
- **known settings** (the criminal underbelly, noble courts, ports): **+1** to **Soul and Charisma** rolls there, with or without a fitting class. It's knowing the place, not fighting in it.

### Languages

Everyone speaks the **Common tongue**. Elves, Dwarves and Krolls also speak their own; Humans and Halflings pick one extra. Others: Liturgic, Oriental tongues, Northern tongues, Old tongues (written only).

### Traits

A **trait** has an upside and a downside (Hothead, Coward, Bookworm…). Take as many as you like; custom ones need the DM's approval. The DM can grant or remove them in the story. They don't count towards level.

### Leveling

Each level-up gives **one point**. Spend it on one of:
1. **+1 class level** (max 5), which comes with **one perk** of that class;
2. **a new class at level 1**, with its perk (advanced and mighty classes need their prerequisites);
3. **an extra perk** in a class already at 5;
4. **+1 Body, Soul or Charisma**.

Check a sheet with: **level = chosen class perks + (Body + Soul + Charisma − 15)**. The racial perk, core spells and aspects don't count, and neither do perk bonuses to pools.

---

## 8. Classes

- Classes are **bundles of skills**; each skill has a pool. Max level **5**.
- **Magic:** *none*; *full* (core spells free with the class, more as perks); *pseudo* (the same, but entering **magic mode** costs a level-1 Scar first).

### Basic classes

| Class | Magic | Skills (pool) |
|---|---|---|
| **Fighter** | None | Foot close combat vs humans and beasts (B), Strength (B), Warrior knowledge (S), Confidence and intimidation (C) |
| **Hunter** | None | Foot ranged combat vs humans and beasts (B), Wilderness movement (B), Wilderness survival (S), Hunting (S), Animal handling (C), Animal training (C) |
| **Juggler** | None | Foot throwing vs humans and beasts (B), Acrobatics (B), Tricks and sleight of hand (B), Urban survival (S), Influence and deception (C) |
| **Medic** | None | Endurance (B), Healing the human body (S), Potions and poisons (S), Negotiation (C) |
| **Incantor** | Full | Scholarship (S), Healing of the soul (S), Willpower (S), Ritual items (S, unique), Dealing with supernatural beings (C). Core spells: Blessings and Curses, Eye Sigil |

### Advanced classes

Unlocked when **its two parent classes total 6 levels**, in any split. That's the only gate.

| Class | Parents | Magic | Aspects (4+2 / 3+3 / 2+4) |
|---|---|---|---|
| **Warrior** | Fighter + Juggler | None | Hire-Sword / Knight / Monk |
| **Ranger** | Fighter + Hunter | None | Barbarian / Monster Slayer / Beastmaster |
| **Witcher** | Fighter + Medic | Pseudo | Berserk / Hexer / Exorcist |
| **Scout** | Hunter + Juggler | None | Ghost / Outrider / Spymaster |
| **Shaman** | Hunter + Medic | Pseudo | Warg / Seer / Herbalist |
| **Druid** | Hunter + Incantor | Full | Wildheart / Stoneshaper / Tidecaller |
| **Rogue** | Juggler + Medic | None | Thief / Assassin / Poisoner |
| **Alchemist** | Medic + Incantor | Full | Mixer / Transmuter / Life Moulder |
| **Warlock** | Fighter + Incantor | Full | Paladin / Battlemage / Abjurer |
| **Mage** | Juggler + Incantor | Full | Illusionist / Puppetmaster / Conjurer |

**Aspects** are perks granted automatically when you hold the advanced class and your parent levels reach the split (e.g. Hire-Sword: Fighter 4 + Juggler 2). They do nothing alone; they unlock perk branches. You can eventually hold all three.

### Mighty classes

Unlocked when **its advanced classes total 6 levels**. Skills and perks aren't written yet.

| Class | From | Fantasy |
|---|---|---|
| **Warlord** | Warrior, Rogue, Scout | Leadership, armies, politics |
| **Ravager** | Warrior, Ranger, Witcher | Martial destruction, dragon riders, skinchangers |
| **Shadow** | Rogue, Scout, Mage, Alchemist | Supernatural stealth |
| **Inquisitor** | Warrior, Warlock, Witcher, Mage | Blood magic that finds the truth; breaking and mirroring spells |
| **Zhrets** | Ranger, Druid, Shaman | Pagan priest of whole regions of nature; water and earth |
| **Black Priest** | Warlock, Alchemist, Shaman, Druid | Necromancy, master magic; fire and air |

### Perks

- A perk has a name, a one-line flavour, a description, and is either **passive** or has an **activation price** (exhausted Body/Soul/Charisma, or spent Material or coins).
- **Spells are perks** and take a perk slot. **Core spells** come free with the class (but can still have a price to cast).
- Strong (*very*) manoeuvres come from class perks; cruel ones from mighty class perks.

---

## 9. Magic

### Casting

- **Unopposed** (freezing a lake): skill check with the magic skill. **Against a resisting target** (charming a guard): a challenge.
- A failed cast is averted like any failure: exhaust the Danger Level or take a Scar.
- Casting is an **action**.

### What a spell needs

1. **The skill.** Most magic schools are unique. Exceptions: anyone can try Medic brews and Incantor blessings and curses.
2. **Its components:**

   | Component | What | Blocked by |
   |---|---|---|
   | Verbal | Words, a song | A gag, magical silence |
   | Somatic | Gestures | Bound hands |
   | Material | Spends Material, named by the spell | Having none |
   | Ritual | A ceremony of minutes or more | A fight, being rushed |

3. **Contact with the target:** touch, symbolic touch (hair, blood, a loved belonging; fades at the next solstice or equinox), sight (your own eyes), or contact through a sigil or substance. Metres only limit distance within that.
4. **Its price,** if it has one, and any **cost to attempt** in hard circumstances.

### Scale and damage

- **Base magic:** one target (more with paid Widespread), about **hut-sized**, **human strength**, and it **can't kill**. A Warlock's fire is a torch: it scares and burns, it doesn't set clothes alight. Douse the target in oil first and it's another story.
- **Perk spells** can carry 5E damage dice (Fireball, Burning Hands).
- **Against player characters,** spell damage becomes a threat die (see Combat).
- **Area spells:** everyone in the area defends. An NPC that wins takes half; a player character who wins takes nothing.

### Pseudo-magic (Witcher, Shaman)

Enter **magic mode** with a **level-1 Scar** in any pool (a toxic elixir, a cut palm). It gives no temporary points. It lasts the conflict, or a reasonable stretch outside combat.

### Durations

| Duration | The caster meanwhile |
|---|---|
| Instant | Free |
| Until sunset or sunrise | Free |
| Until solstice or equinox | Free |
| Until the end of combat | Free |
| Until dismissed | Free; needs no action |
| **Concentration** | Spends their **action** on it each turn |

**Breaking concentration:**
- **Any attack at the caster**, hit or miss, forces a **defense roll** with the magic class level. It costs the Defense manoeuvre. A loss ends the spell unless averted.
- It also ends on starting another concentration spell, on being incapacitated, or on failing a skill check against a violent distraction.

### Control and mind reading

- **Charmed** keeps its own will; **control** puppets the target like a companion. The caster takes no actions of their own and pays the creature's costs from their **Charisma**.
- **Reading a mind:** a willing target talks freely; a resisting one gives one simple true answer per won roll.

### Sigils

- A guarding sigil drawn around a place or item. Incantor gets **Eye Sigil** free; other magic classes buy one for their school.
- **Making it:** a ritual, with at least 1 Material. The Material becomes the sigil's **pool**, at most your Soul.
- **When someone crosses it,** you know (not who). You can then cast through it, as if you were there, using your action.
- Each action costs **1 sigil point to attempt**, and you exhaust **only the sigil's pool**.
- **One sigil at a time.** It ends at the next sunset or sunrise, when its pool runs out, or when you don't avert a failure through it.
- *Sigil Guardian* (perk) adds a trigger condition, like a password.

### Ritual items (Incantor only)

- One per character, holding a bit of its owner's body.
- **Charged** at sunrise or sunset: 1 point for 1 Material. At a solstice or equinox, up to 5. At a wellspring, 2–5. Only the highest of these applies.
- Stored points pay **perk prices and manoeuvres when casting**.
- Lose it and its holder has symbolic touch on you until the next solstice.

### Countering and breaking

- **Natural means:** gag or bind the caster, leave their sight, wait it out until sunrise.
- **Counterspell:** win a challenge against the ritual or the spell, with any school that makes sense.
- **Breaking a lasting spell:** needs the same skill, range, the same resources that went in, and knowing what the spell is. It ends the spell, not its consequences.
- **Berkano Sign** (Witcher): 1 Soul breaks one spell aimed at the Witcher, with none of those requirements.

### Poisons

- **One effect per poison:** a condition, a Body Scar, or damage.
- **Strength = its Danger Level.** It costs **1 Material per strength per dose**.
- **Delivery:**
  - **swallowed** (Medic; anyone can try);
  - **contact** (Rogue, unique): needs a wound, mouth or eyes, so weapon poisons count;
  - **breathed in** (Alchemist, unique).
- **Resisting:** a Body skill check. A player character who fails can avert it (exhaust Body equal to the strength, or take a Scar) and then it does nothing. An ordinary NPC suffers it; an important one can spend Fate.
- **Damage:** strength d6 to an NPC's Body. Against a player character, a threat die: strength 1–2 d4, 3–4 d6, 5–6 d8, 7+ d10. Armour doesn't help.
- **Timing:** it takes effect at the **next sunrise or sunset** and wears off at the one after. Instant poisons need the *Fast* property (Medic perk *Unusual poisons*, +1 Material per strength) or an NPC ability.

### Potions

- A potion holds **1 point per Material** and treats **one kind of Scar**, named when it's made (burns, cuts, fever). Body by default.
- Its points pay for healing instead of the patient's own. Several patients can share it, and it keeps practically forever.
- *Omni Potion* (Medic perk) heals any Body Scar.

---

## 10. Companions, organizations and units

### Companions

A trained wolf, a sellsword, a familiar, a bound demon.

- An **NPC stat block** with tracks (enemy hits land there) plus **Bond**, its loyalty and the pool the player spends for it.
  - **Averting** costs Bond equal to the master's Danger Level; a **manoeuvre** costs 1.
  - **Scarring the Bond** gives 2 temporary points.
  - **Bond scars** stand for the relationship: mistreatment, a broken deal.
- Bond is capped by the master's **Charisma**. Below 0, the DM takes the companion over.
- **Getting one:** find it, bind it (usually a challenge; Bond starts around 3), and agree a payment.
- **Payment:** usually its bonus in silver, a ration, or a Scar for strange beings. 1 payment refills 1 Bond; healing a Bond scar costs a roll and 5 payments per level.
- **Turn:** familiars and summons act right after their master; animals and hirelings roll their own initiative.
- Familiars come from an **Incantor perk spell**.

### Organizations, Reach and Standing

- An organization's **Reach** (1–5) is how much it matters. Your **Standing** (0 up to its Reach) is your rank in it. The leader's Standing equals the Reach.
- **Anyone** can join any organization low down, and can build and lead a small one at Reach 1–2.
- **Standing 3–5** comes only from **mighty class perks**.
- *(Draft)* **Power**: favours and leverage spent to climb ranks and get companions. Kept for now, not confirmed.

### Networks

The part of an organization you command, acting while you're elsewhere.

- It's a companion stat block:
  - a **bonus** bought with money, at most Standing + 2;
  - **one specialisation**;
  - **12 track points** split between Body (muscle), Soul (information) and Charisma (influence);
  - **Bond**, starting at 0 and rising by 1 per 5 payments.
- **A payment** is worth the bonus in silver.
- **Upkeep:** one payment's worth of attention a week (coin, a favour, a visit). Kept up, it sends you a tip. Skipped, its Bond takes a level-1 scar.
- A failure it doesn't avert becomes a Bond scar: a member caught, a contact gone quiet.

### Units

A group run as one NPC.

| Size | How many | Body track |
|---|---|---|
| Handful | 2–11 | Average member ×2 |
| Band | 12–60 | ×4 |
| Horde | 60–300 | ×8 |

- **Soul and Charisma** stay at the average member's.
- **No Fate.** A companion unit averts with Bond, and its payments are ×5 per size step.
- **No Danger Level.** Only a **widespread action reaching enough members** harms it: more than one person for a handful, more than a handful for a band, more than a band for a horde.
- **It shrinks as it bleeds:** at the next smaller size's maximum Body, it drops a size.
- **In a fight:**
  - one initiative and one action a round, with free Widespread plus one other manoeuvre;
  - a bigger unit gets unlimited free Defenses against smaller ones;
  - exhausting against a **bigger unit costs double** the Danger Level.
- Commanding and creating units is for the **mighty classes**, or for a story beat where the DM lends one.

---

## 11. Travel

- **Speed in km/h ≈ walking speed in metres × 0.8.** A human walks about 5 km/h, a dwarf about 4.
- **Multipliers:**
  - pace: slow ×⅔, fast ×4⁄3;
  - terrain: road ×1, hills or forest ×0.75, mountains or swamp ×0.5, severe ×0.25;
  - weather: rain ×0.9, heavy rain ×0.75, snowstorm ×0.5.
- Encumbered −2 m, heavily encumbered −4 m.
- The slowest traveller sets the pace. Mounted groups can add a 1-hour gallop.
