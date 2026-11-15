-- Rulebook consolidation (2026-11-14): Defending, Damage and the combat half of Armour merged; poisons stated once on Traps and hazards;
-- Travel explains, Useful tables hold the tables; Battles and Grid merged. Pages after Manoeuvres rewritten in prose; links repaired.
-- Snapshot of the resulting pages, applied directly to the database.

delete from rulebook_pages where slug in ('damage','grid');

update rulebook_pages set title = $t$Defending and getting hit |cs| Obrana a zásahy$t$, content = $c$::image{src="/img/rulebook/defense.webp" alt="A fighter raising a shield" layout="side"}

When an attack, a spell or any other hostile effect targets your character, they can answer it with a **defense roll**. It's a [challenge](dice#challenge): you roll d20 plus the level of the class whose skill fits the way you defend (parrying with a sword is Fighter, leaping aside is Juggler), and the attacker rolls d20 plus theirs. The higher result wins, and a tie goes to you as the defender.

::formula[your d20 + class level vs their d20 + class level]

A defense roll **always takes an action**. If you are attacked before your turn and you defend, you have spent the action you were about to take. To keep it, you pay for the [Defense manoeuvre](manoeuvres), which lets you defend without spending your action; a shield gives you one of those free every round. The other choice is not to defend at all, and let the attack come at you undefended.

Losing a defense roll is a failure like any other. You avert it by exhausting points of the skill's pool equal to the [Danger Level](danger-level), or by taking a [Scar](exhaustion#scars).

:::example[Keeping the action]{image="/img/rulebook/michal.webp"}
A bandit lunges at Michal (Fighter 4) before Michal's turn comes. Michal has no shield and wants to keep his action for his own attack, so he pays 1 :body for the Defense manoeuvre and parries: :roll[d20 9] + 4 = 13 against the bandit's 15. He loses.

Michal wears no armour and the Danger Level is 3, so he exhausts 3 more :body to avert the hit, twisting away at the last moment. When his turn comes, he still has his action, and he attacks.
:::

## Undefended attacks

If the target doesn't defend, or can't, nobody rolls against the attacker. The attacker makes a [skill check](dice#skill-check) instead: 2d6 plus their bonus, and the attack lands on 9 or more. A hit that lands this way **can't be averted** with exhaustion, because the target made no roll that could be saved. The attacker rolls damage, and the target takes a Scar.

## How bad a hit is

NPCs don't roll weapon damage against player characters. When an NPC's hit lands and the player doesn't avert it, the NPC rolls its **threat die**, which matches how dangerous it is, and the result minus the target's armour rating is the level of the Scar.

| Attacker | Threat die |
|---|---|
| Weak: a stray dog, a drunk with a bottle | d4 |
| Normal: a bandit, a soldier, a wolf | d6 |
| Big: an ogre, a troll | d8 or more |
| Gargantuan: a dragon | Whatever the DM feels the dragon deserves |

::formula[scar level = threat die − armour rating]

If armour brings the level to 0 or less, the hit is **absorbed** and leaves no Scar. A DM who wants the hit to cost something anyway can scar the armour instead, and one of its pieces breaks (see [Item scars](item-scars)).

Armour helps before it comes to a Scar, too. When you exhaust :body to avert a hit, the armour rating comes off the cost, though averting always costs at least 1.

| At Danger Level 3 | No armour | Light | Medium | Heavy |
|---|---|---|---|---|
| Averting a hit costs | 3 :body | 2 :body | 1 :body | 1 :body |

:::example[A cut along the ribs]{image="/img/rulebook/michal.webp"}
Michal is halfway up a ladder and can't defend, so the bandit makes a skill check, lands the hit, and rolls his threat die: :roll[d6 5]. Michal wears a gambeson, a mail shirt and a kettle hat, armour rating 2, so he takes a level-3 :body Scar, a deep cut along the ribs. In heavy armour (rating 3) it would have been a level-2 Scar.
:::

Your own hits against NPCs work differently: they deal weapon damage to the NPC's tracks. See [NPCs](npcs).

## Resistances and weaknesses

A creature can be resistant or weak to a type of damage. Against an NPC, that changes the damage it takes. A player character takes no damage, so for them it changes what averting costs.

| Modifier | Damage | Cost of averting |
|---|---|---|
| Weakness | Doubled | Doubled |
| Weakness bonus | — | Increased by the bonus |
| Resistance | Halved | Halved |
| Resistance bonus | — | Reduced by the bonus |
| Immunity | None | Nothing to avert |

:::note[Rounding]
Halving always rounds down, so the harm is the smaller number. Averting still costs at least 1.
:::

**Damage types:** fire, ice, lightning, poison, psychic, necrotic, radiant, force, thunder, acid, piercing, slashing and bludgeoning.

:::note[Old 5E texts]
Where an old 5E text says "saving throw" against an attacker or a caster, read it as a defense roll: "automatically fails saving throws" means the target automatically loses defense rolls. Against the environment (a trap, a poison, a collapsing floor) it means our [saving throw](dice#saving-throw), which is a skill check.
:::$c$ where slug = 'defending';

update rulebook_pages set title = $t$Armour |cs| Zbroj$t$, content = $c$Armour is put together from **pieces**: something under, something on the body, a helmet, arms and legs. You wear **one piece per slot**, and every piece adds to two totals. **Protection** sets the armour rating, which makes hits hurt less. **Burden** sets the encumbrance, which makes moving harder. Both totals use the same tiers:

| Total | Tier | Rating (from Protection) | Encumbrance (from Burden) |
|---|---|---|---|
| 0 | None | 0 | — |
| 1–3 | Light | 1 | — |
| 4–6 | Medium | 2 | 1 :body |
| 7+ | Heavy | 3 | 2 :body |

::armour

Most sets land in the same tier on both totals. The exception is a **fitted plate harness**: plate on the body, a bascinet, plate arms and plate legs, fitted by an armourer, which lowers Burden by 3. That's how a knight gets heavy protection at medium burden. Second-hand plate gets nothing off until an armourer refits it, which takes a week.

:::example[Dressing a man-at-arms]
Ulrich wears a gambeson (Protection 1, Burden 1), a long mail hauberk (3 and 3), a bascinet (2 and 2) and mail chausses (1 and 1). Both totals come to 7, so his armour is heavy: rating 3, and an encumbrance of 2 :body. If he swapped the hauberk for a full fitted harness, his Protection would stay heavy while his Burden dropped to medium.
:::

## In a fight

The armour rating takes points off the level of every Scar from a hit, and off the :body you exhaust to avert a hit. How that works is on [Defending and getting hit](defending).

## Encumbrance

Encumbrance is a [cost to attempt](danger-level#cost-to-attempt). Before trying anything the armour gets in the way of (sneaking, acrobatics, swimming, running, anything else the DM judges), the character first exhausts its encumbrance in :body, whether the roll then succeeds or not.

:::note[Broken pieces]
When armour takes a Scar, one piece breaks (the DM picks the piece the hit plausibly struck) and stops counting towards Protection and Burden until it's repaired. That can drop the armour a tier. See [Item scars](item-scars).
:::$c$ where slug = 'armour';

update rulebook_pages set title = $t$Conditions |cs| Stavy$t$, content = $c$Conditions are states that change what a character can do. They come from spells, poisons, a fall in the mud or a shove in the back, and most of them work through [manoeuvres](manoeuvres) and [disadvantage](advantage): attacks against a blinded or restrained target are Precise, while the target's own rolls are disadvantaged.

A condition lasts **as long as its cause**: a spell's duration, a poison's, or until the situation that caused it ends. The DM decides when that is.

:::note[A free Precise isn't forced on you]
When a condition makes an attack Precise, that is the action's one manoeuvre. You can use another manoeuvre instead, but you have to pay for it, unless something else grants it free (a perk's free Mighty, say).
:::

:::note[Disadvantage always wins]
A condition's disadvantage can't be cancelled by any advantage, paid or free. See [Advantage](advantage).
:::

::::cards
:::card[Blinded]{#blinded}
Can't see, and automatically fails any skill check that needs sight. Attacks against it are Precise; its attacks and initiative have disadvantage.
:::

:::card[Charmed]{#charmed}
Can't attack the charmer or target them with harmful abilities or magic. The charmer's social skill checks against it are Precise.
:::

:::card[Deafened]{#deafened}
Can't hear, and automatically fails any skill check that needs hearing. Its attacks and initiative have disadvantage.
:::

:::card[Frightened]{#frightened}
While it can see the source of its fear: disadvantage on skill checks, attacks and initiative, and it can't willingly move closer.
:::

:::card[Grappled]{#grappled}
Speed becomes 0. It can still act in place. Ends if the grappler is incapacitated, lets go, or the target is moved out of reach.
:::

:::card[Incapacitated]{#incapacitated}
Can't take actions or reactions. Mostly a building block of the conditions below.
:::

:::card[Invisible]{#invisible}
Can't be seen without magic or a special sense, but noise and tracks give it away. Rolls against it have disadvantage; its actions are Precise and its initiative is Quick. Not the same as hidden.
:::

:::card[Paralyzed]{#paralyzed}
Incapacitated, can't move or speak. Automatically loses :body defense rolls. Attacks against it are Precise, and a hit from within 1 m is a [critical hit](dice#damage).
:::

:::card[Petrified]{#petrified}
Turned to stone with everything it carries. Incapacitated, can't move or speak, unaware of its surroundings. Attacks against it are Precise; it automatically loses :body defense rolls, resists all damage, and is immune to poison and disease (anything already in its system is paused, not cured).
:::

:::card[Prone]{#prone}
Can only crawl until it stands up. Its attacks have disadvantage. Attacks against it from within 1 m are Precise; from further away they have disadvantage.
:::

:::card[Restrained]{#restrained}
Speed becomes 0. Attacks against it are Precise; its attacks have disadvantage, and so do its :body defense rolls.
:::

:::card[Stunned]{#stunned}
Incapacitated, can't move, speaks only falteringly. Automatically loses :body defense rolls. Attacks against it are Precise; its attacks and initiative have disadvantage.
:::

:::card[Unconscious]{#unconscious}
Incapacitated, can't move or speak, unaware of its surroundings. Drops what it holds and falls prone. Automatically loses :body defense rolls. Attacks against it are Precise, and a hit from within 1 m is a [critical hit](dice#damage).
:::
::::

## Penalties

Penalties are conditions that mirror the [manoeuvres](manoeuvres). Each one takes a manoeuvre away from the character, even one they would get free, and turns its effect against them. A penalty can cover one skill (a curse of trembling hands makes you *Imprecise* with ranged weapons), a group of skills, or everything the character does (a numbing poison makes you *Slow*). Its source says which.

::::cards
:::card[Imprecise]{#imprecise}
The mirror of Precise. Rolls with the named skill are disadvantaged, and the character can't use Precise.
:::

:::card[Slow]{#slow}
The mirror of Quick. Initiative is disadvantaged, and the character can't use Quick.
:::

:::card[Feeble]{#feeble}
The mirror of Mighty. The character's hits with the named skill deal one damage die fewer to an NPC (minimum one die), or 1 less :soul or :charisma damage. A player character averts them for 1 point less (minimum 1). The character can't use Mighty.
:::

:::card[Foolish]{#foolish}
The mirror of Cunning. The character can't knock prone, grapple or push, and anyone who lands a hit on them gets a free **Cunning** for it. That free Cunning is the attacker's one manoeuvre for the action.
:::
::::

:::example[A halfling with a greataxe]
Milka the halfling picks up a greataxe, a Heavy weapon, so her attacks with it are Feeble. She hits a bandit and rolls d12 + her Fighter level. A greataxe has only one die, so it stays at one die, but she can't pay for Mighty to add another. Against a player character, the same swing would cost them 1 point less to avert.
:::$c$ where slug = 'conditions';

update rulebook_pages set title = $t$NPCs |cs| NPC$t$, content = $c$Non-player characters work differently from player characters. They don't exhaust, they don't take Scars, and they have no Danger Level of their own. Instead they have **tracks** that go down as they're beaten, the way hit points do in 5E. That keeps the DM's bookkeeping small: an NPC is a stat block, a few numbers to tick off, and nothing to track between rolls.

## The stat block

An NPC is written like a 5E creature, with a few swaps. In place of hit points it has a :body, :soul and :charisma track. In place of ability scores and proficiencies it has **skill bonuses**. It has **special abilities** (its traits, actions and reactions), a **threat die** for the harm it does to player characters, and if it matters to the story, a few points of **Fate**.

## Skill bonuses

An NPC adds a static bonus to rolls with the skills it's good at, and uses it exactly like a class level: d20 + bonus in a challenge, 2d6 + bonus against 9 in a skill check. A bonus can cover a whole class's skills (a soldier with +2 to Fighter skills), a small part of one (+3 to *Foot close combat*), or a skill of the NPC's own. Bonuses usually go up to +5, like a class level; legendary NPCs can reach +8.

## Tracks

Each track measures one way of beating the NPC, and at 0 the NPC is overpowered that way.

| Track | Lowered by | At 0 the NPC |
|---|---|---|
| :body | Weapons, damage spells, poison | Goes down or dies |
| :soul | Fear, illusions, mind magic | Breaks, panics or is controlled |
| :charisma | Intimidation, deception, humiliation | Surrenders, flees or gives in |

:body is the largest track and works like 5E hit points: a 5E creature's hit points are its :body track. :soul and :charisma are much smaller, so beating an NPC with words or terror is often quicker than with steel.

:::note[Two different Bodies]
An NPC's :body track and a player character's :body pool are different scales. The pool is how far a character can push themselves, spent a Danger Level at a time; the track is 5E hit points. Don't compare the two numbers.
:::

## Damaging an NPC

**:body damage** is the weapon's or spell's dice plus the attacker's class level, minus the NPC's armour rating. If armour brings it to 0 or less, the hit is absorbed. Armour works as for player characters, up to rating 3; the natural armour of a big monster can reach 4 or 5 where it's warranted, like a dragon's scales or a stone golem.

**:soul and :charisma damage** come from winning a roll against the NPC: a threat, a lie, a terrifying illusion. The DM decides how much the NPC has at stake at that moment, on the same scale as a Danger Level, and the track drops by that much plus the winner's class level. Players raise the stakes by preparing (digging up dirt, bringing the army); the NPC's situation can lower them (guards nearby, a powerful patron). The number isn't kept afterwards.

| What's at stake | Points |
|---|---|
| An empty threat | 1–2 |
| A blade at the throat | 4 |
| Their family held hostage | 5+ |

:::example[A blade at the throat]
Michal (Juggler 3) catches a guard alone in an alley and holds a knife to his throat, demanding the key. He wins the :charisma challenge. A blade at the throat is worth 4, and Michal adds his Juggler level: the guard's :charisma track of 6 drops by 7 to 0, and he hands over the key.
:::

## Failing and Fate

Ordinary NPCs can't avert failures: if a guard loses a roll, the result lands. Important NPCs (a captain, the burgomaster, the dragon) have **1–3 Fate**, and spending 1 Fate turns a lost roll into a win. Spent Fate comes back at the next sunrise and never during a fight, so the players can wear it down.

## Manoeuvres

Manoeuvres listed in the stat block are free: a wolf's Cunning on every bite, a soldier's shield Defense. Any other manoeuvre costs the NPC 1 point of a track, usually :soul or :charisma, whichever fits. Strong and cruel manoeuvres come only as special abilities.

## Hurting player characters

NPCs don't roll weapon damage against player characters. A hit that lands and isn't averted becomes a Scar, sized by the NPC's threat die; see [Defending and getting hit](defending).

## Side by side

| | Player character | NPC |
|---|---|---|
| **Roll bonus** | Class level (max 5) | Static bonus per skill group (usually max 5) |
| **Abilities** | Perks and spells | Special abilities |
| **Taking harm** | Exhausts to avert, otherwise Scars | Loses track points |
| **Averting failure** | Exhausts points equal to the Danger Level | Can't; important NPCs spend Fate |
| **Danger Level** | Yes, per character | No |
| **Damage it deals** | Dice + class level, to tracks | A threat die, as a Scar level |
| **Defeat** | Dying rolls when a Scar overflows a pool | At 0 in any track |
| **Manoeuvres** | 1 point of a pool, or free | Free if granted, otherwise 1 track point |$c$ where slug = 'npcs';

update rulebook_pages set title = $t$Casting magic |cs| Sesílání magie$t$, content = $c$Magic is a skill like any other. A caster rolls for it, pays for it, and can fail it like anything else; what sets it apart is what it can do.

## Who can cast

Every class has one of three magic types, shown as a badge next to its name.

**None.** The class has no spells. Magic skills are unique, so a pure Fighter can't even try to cast.

**Infused.** The Incantor and every class built on it have magic in them: the Druid, Alchemist, Warlock and Mage, and every mighty class except the Warlord and the Ravager. Their core spells come with the class, and they can cast whenever they have an action and can pay the spell's price.

**Awakened.** The Witcher and the Shaman come from the Medic, not the Incantor, and the Ravager is built on the Witcher. Their magic sleeps until they wake it with pain. Before their first spell, they take a **level-1 Scar** in any pool they like and enter **magic mode**. From then on they cast like an infused caster, paying each spell's own price. Magic mode lasts until the end of the conflict. Outside a fight, it lasts one continuous stretch of work, such as searching one ruin, and the DM says when it ends.

:::example[Waking the signs]
Ulrich (Witcher 2) is cornered by a drowner in a flooded cellar. He hasn't used a sign in this fight yet, so he first drinks his bitter elixir: a level-1 :body Scar, which blocks one of his :body points and gives him nothing back. He is now in magic mode. As his action he casts Isa Sign, which has no price, and rolls d20 + 2 against the drowner's defense roll. Next round he can use a sign again without another Scar, and the same holds until the fight is over.
:::

:::note[A blank payment]
The Scar that wakes the magic gives **no** temporary points, unlike a Scar taken to avert a failure. Its story is up to the player: a Witcher's toxic elixir, a Shaman cutting their palm with a ritual dagger.
:::

Besides the core spells, every spell is a **perk**: it takes one of the class's perk slots like any other perk, so a caster never has more abilities than anyone else, only different ones.

## What a spell needs

To cast a spell, the caster needs three things. The first is the **magic skill**. Most magic skills are unique, so without the class a character can't even try; the basic Medic and Incantor skills are the exception, and anyone can try to brew a potion, bless or curse, just with no class bonus.

The second is the spell's **components**. A caster who can't perform them can't cast at all, which is why captured wizards get gagged and tied.

| Component | What it is | Blocked by |
|---|---|---|
| **Verbal** | Words, sounds, a song | A gag, magical silence |
| **Somatic** | Gestures | Bound hands |
| **Material** | The spell spends :material and names what it is. This is the spell's Material price. | Having no Material |
| **Ritual** | A long ceremony, minutes or more: sigils, charging a ritual item, brewing substances | Being in a fight, or rushed |

The third is **contact with the target**. Every spell needs one of four kinds, and its range in metres only limits distance within that contact.

| Contact | Meaning |
|---|---|
| **Touch** | The caster's body touches the target. |
| **Symbolic touch** | The caster holds something that was part of the target (hair, a splinter) or that the target owned and loves. The link fades at the next solstice or equinox. |
| **Sight** | The caster sees the target with their own eyes. No mirrors, spyglasses or crystal balls. |
| **Contact** | The target touches what the caster made: steps on a sigil, drinks a substance, stands too close to an explosion. |

:::note[Focus objects]
A staff or a holy symbol isn't a component. Those are [ritual items](ritual-items).
:::

:::example[No line of sight]
A Warlock on a city wall wants to drop a Fireball into a courtyard on the other side of a gatehouse. He can't see the courtyard, so he can't reach it, however close it is in metres. He climbs the gatehouse first.
:::

## The casting roll

When nobody resists the spell (freezing a stream, lighting a fire, raising a wall of earth), the caster makes a [skill check](dice#skill-check): 2d6 plus the level of the magic class, against 9. When the target resists (charming a guard, reading a prisoner's mind), it's a [challenge](dice#challenge): d20 plus the magic class level against the target's defense roll.

A failed cast is averted like any failure, by exhausting points of the skill's pool (usually :soul) equal to the [Danger Level](danger-level), or by taking a Scar. In combat, casting takes the turn's action.

## Price

A spell's price works like any perk's. Either it has none, or it has an **activation price**, paid by exhausting a pool or spending :material each time it's cast. Core spells come free with the class only in the sense that you don't spend a perk on them; each still has its own price, or none. A spell with no price can be cast as often as the caster has actions and can perform its components.

In hard circumstances (making ice on a hot summer day), the DM adds a [cost to attempt](danger-level#cost-to-attempt), paid before rolling.

## Scale of basic magic

Core spells and other basic magic work at a human scale. They affect **one target**. They move about as much as a **witch's hut**. And their **strength** is what a person could manage by natural means: a gust of wind pushes like a man, vines grip like hands and can be torn free. Perks that go further say so.

Spells with an open-ended size (bending earth, water or fire, moving plants, an illusion) are measured in rough units. Each step up the ladder costs one [Widespread](manoeuvres), and so does affecting several things within one step (three torches, four puddles).

| Unit | About | On the grid | For example |
|---|---|---|---|
| **A palm** | A cup, a candle, a handful of earth | Part of a square | Light a pipe, chill a drink, wilt a flower |
| **A witch's hut** (the base) | A small cottage, about 5 m across | One [battle square](battles#the-map), a handful | A wave that capsizes a raft but only rocks a ship; a shallow stream frozen to the bed for 5 m; one tree; one illusion of a hut-sized thing |
| **A farmstead** (Widespread) | A yard with its buildings, about 10 m across | 2 × 2 battle squares, a band | Fog over a small harbour; a riverbank sliding into the water; a whole grove swaying |
| **A village** (Very widespread) | A fort, a village green, a city district | One field square, a horde | Only master abilities that name it |

Magic only moves what's already there, in its natural form. A Druid can't make water from nothing, or turn it into beer; a hut's worth of water can be frozen, a lake can't. Spells where a specific area matters, like a Fireball, are measured in metres instead.

:::example[Three torches]
Ondra the Warlock wants to light the three torches along the crypt wall at once. One torch is within a palm, the base of Fire bending, but three are several things, so he pays 1 :soul for Widespread.
:::

Core spells can be free and used every round, and that's on purpose. What holds them back is everything else: each cast takes the action, each needs a roll whose failures cost exhaustion and add up, the scale above keeps them small, and stronger NPCs can simply be immune to a simple curse.

## Damage

Basic magic **can't kill or knock out a living creature on its own**. At most it does chip damage (Fire bending's 1d6, Isa Sign's 1d6). It hurts by making things worse for the target, or by using the circumstances: a spark is harmless until the target is soaked in oil. Spells taken as perks can carry real damage dice, the same as in 5E. Substances (poisons, explosives, corrosives) can kill in their basic form, but need contact.

Against a player character, a spell's damage becomes a threat die, like any NPC's hit (see [Defending and getting hit](defending)):

| Spell | Threat die |
|---|---|
| Chip damage from core spells | d4 |
| Small perk spells | d6 |
| Big area spells | d8 |
| Legendary magic | d10 or more |

## Area spells

A perk spell with a fixed area, like a Fireball, already pays for that area with its activation price, so it needs no Widespread and Widespread can't make it bigger. Every target in the area makes a [defense roll](defending). An NPC that wins takes half damage, rounded down, and one that loses takes it all. A player character who wins takes no harm at all; one who loses averts with exhaustion as usual, or takes a Scar from the threat die.

## Effects by school

Within their school, the caster's player decides what the spell does. The magic skills (*Fire magic*, *Illusion magic* and the rest) are the schools; *Detect Magic* tells which skill a spell came from.

| Domain | Classes |
|---|---|
| Body and soul of living beings | Incantor, Medic, Shaman, Witcher, Alchemist |
| Elements and plants | Warlock, Druid |
| Controlling people and animals, learning information | Mage, Shaman |
| Animating artificial beings | Alchemist |
| Binding supernatural forces to a place or item | Most magic classes, through [sigils](sigils) |$c$ where slug = 'magic';

update rulebook_pages set title = $t$Durations and concentration |cs| Trvání a soustředění$t$, content = $c$Every spell says how long it lasts. Most last a moment; anything longer than that usually comes from a perk.

| Duration | Ends | The caster meanwhile |
|---|---|---|
| **Instant** | Right away | Free |
| **Until sunset or sunrise** | At the next one | Free |
| **Until solstice or equinox** | At the next one | Free |
| **Concentration** | When the caster stops concentrating | Spends their **action** on the spell each turn and can't do other tasks |
| **Until the end of combat** | When the fight ends | Free |
| **Until dismissed** | When the caster or the target ends it | Needs no action and can do other tasks |

Concentration and "until dismissed" are deliberately different. A concentration spell ties the caster up: holding the fog over the harbour is their whole turn. A spell that lasts until dismissed runs on its own while the caster does something else.

## Concentration

A caster can concentrate on one spell at a time, so starting a second concentration spell ends the first. Being [incapacitated](conditions#incapacitated) ends it too, and so does anything that makes the caster incapacitated: paralysis, petrification, being stunned or knocked out.

Any attack at a concentrating caster forces a **concentration roll**, whether it hits or misses. It's a [defense roll](defending) against the attacker, with the caster's magic class level as the bonus, and since the caster's action is already spent on concentrating, it costs the Defense manoeuvre. This roll is separate from defending against the attack itself: the caster rolls whether the attack hit, missed, was averted or was absorbed by armour.

A violent distraction (a wave over the deck, a collapsing floor) also breaks concentration unless the caster makes a [skill check](dice#skill-check) with their magic class level. Nothing is attacking, so no Defense manoeuvre is needed, and the DM sets the Danger Level by how violent it is.

Losing either roll ends the spell, unless the caster averts the failure like any other: by exhausting points equal to the Danger Level, or by taking a Scar.

:::example[Holding the fog]
Vesna the Druid (Druid 3, Incantor 3) holds a fog bank over the harbour while her friends row away. A crossbowman on the pier shoots at her and misses. She still has to make a concentration roll: she pays 1 :soul for the Defense manoeuvre and rolls d20 + 3 against his d20 + 2. She loses, and at Danger Level 3 she exhausts 3 :soul to keep the fog up.
:::

:::note[Steady mind]
The Incantor perk *Steady mind* lets a caster make concentration rolls without paying for the Defense manoeuvre.
:::$c$ where slug = 'spell-durations';

update rulebook_pages set title = $t$Sigils |cs| Obrazce$t$, content = $c$A sigil binds a force of the caster's school to a place or an item. It guards that place, raises the alarm when someone comes, and lets the caster cast through it as if they were standing there.

The **Incantor** gets *Eye Sigil* as a core spell; it's the only sigil that comes free. **Every other magic class** buys a sigil perk for its own school, like any other perk: *Salamander sigil* for a Warlock's fire, *Leshy sigil* for a Druid's plants. Without the perk *Sigil Guardian*, a sigil reacts to anyone who steps in or touches it; with it, the caster sets a trigger, such as a password or one particular person.

## Drawing one

Drawing a sigil is a ritual with ingredients, and the :material put into it becomes the sigil's own **pool**: at least 1, and no more than the caster's :soul pool. The pool is spent as the sigil works and is never refunded. It has to be proper, bought Material; ingredients gathered in the field might scare someone, but they have no effect in the rules.

A caster holds **one sigil at a time**, and drawing a new one breaks the link to the old. A caster with several schools, and a sigil perk for each, can bind them all into the same sigil and use its pool for any of them.

Guarding sigils are drawn as closed shapes (a circle round a camp, a line of runes round a room), because the caster can reach any place inside the shape.

## What it does

When someone steps into the sigil or touches the marked item, the caster knows, though not who it is. A caster who is on guard notices at once; one who is busy or asleep makes a skill check to notice.

The caster can then act **through the sigil**. It takes their initiative and their action for the round, even if they're standing right there. They can only use the bound school's magic, though their perks still work. They can't see, but they sense roughly whether the target resists, and how. Every action through a sigil costs **1 point of its pool** as a [cost to attempt](danger-level#cost-to-attempt), and to avert a failed action the caster exhausts the sigil's pool, never their own.

| Target | How |
|---|---|
| **The intruder** | As symbolic touch, one way only |
| **The marked item** | Directly |
| **Any place inside the sigil** | Directly |

:::example[The creaking tree]
Vesna draws a *Leshy sigil* round her camp with 3 :material. At midnight a stranger crosses the circle, and the sigil wakes her. She makes the old oak creak and shed a branch at his feet: 1 point from the pool to attempt, then a skill check with her Druid level. She succeeds, and the stranger runs. The sigil has 2 points left.
:::

## When it ends

A sigil lasts until the next **sunset or sunrise**. It ends sooner if someone triggers it and the caster chooses not to act, if an action through it fails and the caster doesn't avert it from the pool, or when the pool runs out.$c$ where slug = 'sigils';

update rulebook_pages set title = $t$Ritual items |cs| Rituální předměty$t$, content = $c$A ritual item (a staff, an amulet, a holy symbol, an order's badge) stores magical power an Incantor put into it, to spend on spells later. Only an Incantor can charge or use one: *Ritual items* is a unique Incantor skill.

A character has **one** ritual item, and it has to hold something that was part of its owner's body, like cut hair or a drop of blood. The owner renews that link at every solstice or equinox. That's also what makes losing it dangerous: whoever holds the item has **symbolic touch** on its owner until the next solstice or equinox.

## Charging

Charging is a ritual at **sunrise or sunset**, and every point stored costs 1 :material. How many points the item can hold after charging depends on the occasion:

| Occasion | Points it can hold |
|---|---|
| Sunrise or sunset | 1 |
| The evening of a solstice or equinox | Up to 5 |
| At a wellspring, a place of power | The wellspring's strength (2–5) |
| At an evil or cursed place | None |

When several apply, only the highest counts, so an item never holds more than 5. Points already stored aren't lost on a smaller occasion; the item just can't be filled past what that occasion allows.

:::example[Charging at the equinox]
Kolva the Incantor's staff holds 1 point. On the evening of the spring equinox she burns candles and scatters ash, spending 4 :material, and the staff now holds 5. At an ordinary sunset a week later she can't add anything, because a sunset only allows 1 and the staff already holds more.
:::

## Using it

Stored points pay **activation prices and manoeuvres when casting**, for any magic the Incantor has, including the schools of advanced classes like the Warlock's or the Mage's.

:::note[Mighty Amulets]
The Incantor perk *Mighty Amulets* makes charging cost no Material. The limits on how many points an occasion allows still apply.
:::$c$ where slug = 'ritual-items';

update rulebook_pages set title = $t$Control and mind reading |cs| Ovládání a čtení myšlenek$t$, content = $c$Some magic doesn't hurt anyone; it takes over their will or reads what's in their head. Mage magic does this to people, the Shaman's animal magic to animals.

## Charmed is not controlled

These are two different things. **[Charmed](conditions#charmed)** is a condition: the target keeps its own will, treats the caster as a friend, and acts for itself. **Control** is an active act: the caster drives the target like a puppet, and the target does what the caster wants.

## Control

Against a target that doesn't resist, such as a minor NPC, taking control is a skill check with the control skill. Against one that resists, it's a challenge, which can grow into a longer struggle with both sides averting failures.

Once the caster wins, the creature acts as their [companion](companions). The caster uses its skills, but pays its exhaustion, manoeuvres and perk prices from **their own :charisma**. Controlling takes all of the caster's attention: they take no actions of their own, and roll initiative only for the controlled creature. They can still use the Defense manoeuvre, and they can follow slowly. If the caster doesn't direct the creature's reactions, it reacts on its own and pays with its own resources. Letting go ends the control.

:::example[The borrowed guard]
Dobromila the Mage (Mage 3) takes control of the gate guard, who resists: she wins the challenge, d20 + 3 against his d20 + 2. The guard walks to the winch and starts raising the portcullis. When his sergeant shouts at him, Dobromila makes the guard lie; he loses the roll, and she exhausts 3 of her own :charisma at Danger Level 3 to avert it. Meanwhile Dobromila herself stands frozen in the alley, doing nothing else.
:::

## Learning information

Mind magic (Mage), animal magic and *Foresight* (Shaman) and talking to plants (Druid) can find things out. With a willing target, one successful roll opens the link, and they can talk as long as they like. A resisting target gives only one simple, true answer for each successful roll, usually a yes or a no.$c$ where slug = 'control';

update rulebook_pages set title = $t$Countering magic |cs| Rušení magie$t$, content = $c$When a spell is stopped, every resource put into it is lost. There are three ways to stop one: by hand, with a counterspell as it's cast, or by breaking it after it's cast.

## By hand

The plainest way to stop a spell is to make it impossible to cast. Knock the caster down, grab their hands, gag them: a caster who can't perform the components can't cast. A spell that needs sight can be blocked by hiding; the caster can target the overturned table, not the person behind it.

Short spells can simply be avoided by jumping away from the flames or running from the animated tree. Lasting ones often end the natural way: a wall of fire doused with water stays out, and calming a magically enraged man with kind words ends the mind magic, as does the target mastering themselves. Most magic also ends by itself at the next sunrise or sunset, so waiting it out is a real option.

## Counterspells

A counterspell stops a spell as it's being cast, and it needs a **won challenge** against the caster. It can go after the ritual, doing with magic what could be done by hand: tying the caster's tongue with a curse, knocking them over with a gust. Or it can go after the spell itself, with the same school or another, wherever it makes sense to the table: a Druid's fog can be stopped by another Druid seizing the water, by raising a wall of water first, or by a Warlock blowing it away.

## Breaking a spell

Breaking removes a lasting effect after it's been cast. Only **supernatural effects** can be broken: a curse can be lifted and a narcotic suppressed, but magical fire's burns can't be undone by magic. To break a spell, the breaker needs four things:

1. **The skill** that cast it: the same school, or making that substance. The perks used don't matter.
2. **Contact** with the victim: touch or symbolic touch.
3. **The same resources** that went into the spell. An antidote needs as many ingredients as the poison.
4. **To know what the spell is**: from being there, from an exact description (a curse's wording, a recipe), or from studying its effects with a fitting skill.

Breaking ends the spell, not what it has already done. A sleeper wakes and a wall of fire goes out, but Scars taken while it lasted stay. An instant spell can only be countered while it happens.

:::example[Lifting the curse]
A miller's son has been cursed to stutter until the solstice. Kolva the Incantor (Incantor 3) heard the hedge witch speak the curse in the market, so she knows what it is. She lays her hand on the boy, exhausts 2 :soul (what the witch paid), and makes an Incantor skill check: 2d6 + 3. On a 9 or more, the boy speaks clearly again.
:::

:::note[Berkano Sign]
The Witcher's *Berkano Sign* is the exception to breaking. For 1 :soul a Witcher breaks one spell or magical effect **targeting them**, with no matching skill, resources or knowledge of the spell, and they can use it with the Defense manoeuvre. It works only on the Witcher, and doesn't undo what has already happened.
:::$c$ where slug = 'countering-magic';

update rulebook_pages set title = $t$Traps and hazards |cs| Nástrahy$t$, content = $c$A **hazard** is anything that acts on its own once it's made or set: a poison in the wine, a trapdoor, darts in a lock, a bomb, a vial of acid, a cloud of gas, a snare in the woods. They all work by one rule, so the DM needs only one stat line for each.

## The hazard line

| Entry | Says | For example |
|---|---|---|
| **Reach** | Who it hits, and how | The drinker; whoever opens the lid; everyone near the blast |
| **Pool** | :body, :soul or :charisma | :body for darts and acid; :soul for a nightmare draught |
| **Strength** | How bad it is, 1–8 | 3 for a dart trap |
| **Effect** | One effect: damage, a [condition](conditions), a Scar, something in the story, or a mix | 3d6 off :body; Paralyzed; the cell door shuts |
| **Giveaway** | How it can be spotted | A bitter taste; a wire across the corridor; a hiss as the vial breaks |

Every hazard **must have a giveaway** that gives the players a real chance to spot it. Without one it isn't a trap, it's the DM's whim.

:::note[Shorthand]
In stat blocks and adventure notes, a hazard fits in one bracket: *Spider venom (bite; fast :body poison, strength 5; Paralyzed).*
:::

## Strength

Strength is one number that does three jobs. It's the Danger Level for averting the hazard, it sets the damage, and it sets the price of making it (see [Kinds](#kinds)).

| Strength | Danger Level to avert | Damage to an NPC | Threat die against a player character |
|---|---|---|---|
| 1 | 1 | 1d6 (3) | d4 |
| 2 | 2 | 2d6 (7) | d4 |
| 3 | 3 | 3d6 (10) | d6 |
| 4 | 4 | 4d6 (14) | d6 |
| 5 | 5 | 5d6 (17) | d8 |
| 6 | 6 | 6d6 (21) | d8 |
| 7 | 7 | 7d6 (24) | d10 |
| 8 | 8 | 8d6 (28) | d10 |

For that one roll, the hazard's strength replaces the scene's Danger Level. A player character can't make a hazard stronger than their :soul pool; an NPC's hazards are simply written into its stat block, with no maker to check.

## Meeting a hazard

A character who could spot the giveaway in time first rolls to **notice** it: a :soul [saving throw](dice#saving-throw) with *Mechanisms* (Rogue) for a lock trap, *Urban* or *Wilderness survival* for an ambush, *Potions and poisons* (Medic) for a tainted meal. It's a [hidden roll](dice#hidden-roll), because whether there was anything to find is exactly what the player mustn't learn from the dice, so nobody exhausts against it. A hazard that's spotted is avoided, or at least not set off by accident.

A found trap can be **disarmed** with a skill check, using *Mechanisms*, or *Hunting* for a snare. A failure sets it off, unless the character averts it by exhausting :soul equal to its strength.

A hazard that goes off is **resisted** with an open saving throw, using whatever fits: *Acrobatics* to dodge the darts, *Endurance* against a poison, *Willpower* against a draught. Each victim rolls for themselves. A player character who fails averts as usual, by exhausting the pool equal to the strength or by taking a Scar, and then nothing happens. An ordinary NPC who fails suffers the effect; an important one can spend 1 Fate. A won or averted roll means **nothing happens** at all; there's no lesser effect for a near miss.

:::example[Darts in the lock]
Michal (Juggler 2, Rogue 1) kneels at a merchant's chest. The DM rolls his hidden *Mechanisms* check to notice the trap (2d6 + 1) and it fails, so Michal opens the lid and the darts fly: strength 3. He makes an *Acrobatics* saving throw, 2d6 + 2, and rolls 7. He wears a leather jerkin, armour rating 1, so averting costs him 3 − 1 = 2 :body instead of 3. He pays, and the darts thud into the wall behind him.
:::

:::note[Armour against hazards]
Armour counts against what mail or a shield would stop: darts, blades, falling rocks, the stones a blast throws. Its rating comes off the Scar level and off the :body cost of averting, as for any hit. It does nothing against poison, gas, acid, fire or a fall.
:::

## Kinds {#kinds}

| Kind | Class | Skill | Pool | Gets in by | Takes effect | :material per strength |
|---|---|---|---|---|---|---|
| **Mechanical trap**: pit, darts, blade, net, alarm | **Rogue** | *Mechanisms* | :body; :soul for one that traps or misleads | A plate, a wire, a lid | At once | 1 |
| **Wild trap**: snare, deadfall, staked pit | **Hunter** | *Hunting* | :body | A tripline, a bait | At once | 1 |
| **Swallowed poison** | **Medic** (anyone can try) | *Potions and poisons* | :body | Swallowed | Next sunrise or sunset | 1 |
| **Contact poison** | **Rogue** | *Contact poisons* (unique) | :body | A wound, the mouth, the eyes | Next sunrise or sunset | 1 |
| **Narcotic** | **Shaman** | *Narcotic substances* (unique) | :soul or :charisma | Swallowed | Next sunrise or sunset | 1 |
| **Explosive**: black powder, fire clay | **Alchemist** | *Explosives, corrosives and gases* (unique) | :body | A lit fuse, or impact | At once | 2 |
| **Corrosive**: acid | **Alchemist** | *Explosives, corrosives and gases* (unique) | :body | Splashed or poured | At once | 2 |
| **Gas** | **Alchemist** | *Explosives, corrosives and gases* (unique) | :body | Breathed in when the vial breaks | At once | 2 |

A mechanical trap meant to catch several people (a net across the corridor, a collapsing ceiling) costs 1 :material more, however many it catches.

### Poisons and narcotics {#poisons}

When a poison is made, the maker chooses its **one effect**: a condition (Unconscious, Paralyzed, or Imprecise, Slow, Feeble or Foolish with a named skill), damage, a :body Scar, or a mix. A narcotic does the same to the mind: Charmed, Frightened, a :soul or :charisma Scar, or something in the story, like visions or barking at the moon. Both are made **per dose**: one dose, one victim. Both work only on humans, humanoids and animals.

A swallowed poison or a narcotic takes effect at the **next sunrise or sunset** after it's taken, and wears off at the one after; a condition from it lasts as long. The dead stay dead. To work at once, it needs the *Fast* property below.

A **contact poison** works only when it meets bodily fluids: an open wound, the mouth, the eyes. On bare, unbroken skin it does nothing. A coating on a blade or an arrowhead is a contact poison too, getting in through the wound, but it's only useful in a fight when it's Fast.

:::note[Medic perks on every substance]
The Medic's substance perks, like *Unusual poison*, work on every class's substances: a Rogue's contact poisons, an Alchemist's gases, a Shaman's narcotics. The character needs the Medic perk itself.
:::

### Blasts {#blasts}

Explosives, acids and gases cost double because they act **at once** and hit **everything around them**. A blast hits at full strength where it goes off, and 1 less for every metre further out; diving clear is the saving throw (*Acrobatics*). The area is part of the price, so [Widespread](manoeuvres) can't make it bigger. Gas indoors keeps its full strength through a closed room no wider than its reach. The giveaway is often the moment itself: a flash, a bang, a stink, coloured smoke.

| Strength | Reaches | Strength at 1 m / 2 m / 3 m | :material |
|---|---|---|---|
| 1 | Its own square | — | 2 |
| 2 | 1 m | 1 / — / — | 4 |
| 3 | 2 m | 2 / 1 / — | 6 |
| 4 | 3 m | 3 / 2 / 1 | 8 |
| 5 | 4 m | 4 / 3 / 2 | 10 |
| 6 | 5 m | 5 / 4 / 3 | 12 |
| 7 | 6 m | 6 / 5 / 4 | 14 |

### Properties

Each property costs **+1 :material per strength** and needs the perk that teaches it.

| Property | Does | For | Perk |
|---|---|---|---|
| **Fast** | Works at once, not at sunrise or sunset | Poisons, narcotics | *Unusual poison* (Medic) |
| **Two-part** | Sleeps until something wakes it: wine, pipe smoke | Poisons, narcotics, gases | *Unusual poison* (Medic) |
| **Hard to detect** | No taste, smell or colour; it can only be found by searching, and that roll is disadvantaged | Poisons, narcotics, gases | *Unusual poison* (Medic) |
| **Bare skin** (+2 if the maker is immune) | A contact poison that works through unbroken skin | Contact poisons | *Your lips are venomous poison* (Rogue) |
| **On a word** | Goes off at a sound or a spoken word | Explosives, gases | *On a word* (Alchemist) |
| **First one met** | Once it takes effect, the victim acts a set way towards the first person they meet: falls in love, tries to kill | Narcotics | *Philtres* (Shaman) |

:::example[A quiet dinner]
A strength-3 sleeping poison that works at once and has no taste is Fast and Hard to detect: 3 + 3 + 3 = 9 :material a dose.
:::

## Falling

A fall is a hazard of its own. Its strength comes from the height, the saving throw is *Acrobatics*, and armour doesn't help.

| Height | 3 m | 6 m | 9 m | 12 m |
|---|---|---|---|---|
| Strength | 2 | 4 | 6 | 8 |

## Against walls, doors and locks

Walls, gates, roofs and small things have a **sturdiness** (see [Walls and gates](walls-and-gates)). A hazard rolls its strength in d6 against them: a roll below the sturdiness does nothing, and one that reaches it comes off the section's :body. A small thing, like a lock or a chain, simply breaks. Acid takes about a minute to eat through; gas and poison do nothing to things.

A charge **tamped** against or under its target (hung on a gate, packed at the end of a mine) rolls 2 more dice. That's placement, not a better brew, so it can go past the maker's :soul cap. How many charges a gate or a wall takes is in [Siege engines](siege-engines).

:::example[The vault door]
A strength-3 bomb hung on an iron-bound door (sturdiness 10, :body 40) rolls 5d6, about 17 a charge, so it takes three charges to blow the door. Thrown loose at the town wall (sturdiness 20), the same bomb rolls only 3d6, and it almost never gets through.
:::$c$ where slug = 'hazards';

update rulebook_pages set title = $t$Substances |cs| Látky$t$, content = $c$Substances are brewed from :material and act on whoever drinks, touches or breathes them. The world may call it herbalism, but the magic rules govern them. They come in two families. **Harmful** ones (poisons, narcotics, explosives, acids, gases) are [hazards](hazards), and the rules for making, spotting and resisting them are there. **Helpful** ones (potions and elixirs) are on this page.

## Who makes what {#overview}

| Substance | Class | Skill | Works on | For example |
|---|---|---|---|---|
| **[Swallowed poison](hazards#poisons)** | **Medic** (anyone can try, without the bonus) | *Potions and poisons* | Humans, humanoids, animals | A poppy draught that puts the jailer to sleep |
| **[Contact poison](hazards#poisons)**, weapon coatings too | **Rogue** | *Contact poisons* (unique) | Humans, humanoids, animals | A coated dagger; a poisoned glove |
| **[Narcotic](hazards#poisons)** | **Shaman** | *Narcotic substances* (unique) | Humans, humanoids, animals | Mushrooms that bring visions; a love draught |
| **[Explosive, acid or gas](hazards#blasts)** | **Alchemist** | *Explosives, corrosives and gases* (unique) | Anything with a body; explosives and acid also things | A bomb on the vault door; choking fumes in a guardroom |
| **[Potion](#potions)** | **Medic** (anyone can try, without the bonus) | *Potions and poisons* | Whoever is being healed | A burn ointment worth 5 points |
| **[Elixir](#elixirs)** | **Alchemist** | *Elixirs* (unique) | Humans, humanoids, animals | Walking across a lake |

A **unique** skill means only that class can make the substance at all. The others can be tried by anyone, with a plain roll. How long brewing takes, and when it needs a roll, is in [Crafting](crafting).

## Potions {#potions}

Potions are drops, ointments, balms and draughts that help heal. Each one holds resource points, at **1 :material per point**, and when a Scar of its kind is healed, the patient pays from the potion instead of their own pools. The skill check that [healing](healing) needs is still rolled. A potion with several points can be shared between patients until it's used up, and it keeps practically forever.

When the potion is made, the maker names the **one kind of Scar** it treats: burns, cuts and bruises, a fever, a snake's venom. Potions treat :body Scars, though a :soul one (a calming tea against nightmares) is allowed where the story fits. The Medic perk *Omni Potion* makes one that treats any :body Scar.

:::example[The burn ointment]
Vesna spends 5 :material on a burn ointment. Michal has a level-1 :body Scar from a torch, which costs 5 points to heal: he pays all 5 from the ointment, makes the skill check to dress the burn, and keeps his own pools untouched.
:::

## Elixirs {#elixirs}

An elixir lends its drinker something they don't have, for **their next action**, won or lost. If that action is averted or cut short, the elixir is spent anyway. Only an Alchemist can brew one, and only humans, humanoids and animals can drink one, the whole dose at once.

| Elixir | For the drinker's next action | :material |
|---|---|---|
| **Skill elixir** | One named skill gets a free Precise, Mighty or Cunning, set when it's brewed | 2 |
| **Master elixir** | One named skill gets a strong manoeuvre: Very precise, Very mighty or Very cunning | 3 |
| **Wonder elixir** | An ability no human has: flying, walking on calm water, breathing fire, seeing in the dark | 5 |

Several effects in one bottle add up their prices. The free manoeuvre from a skill or master elixir is the action's [one manoeuvre](manoeuvres), and under disadvantage a Precise is wasted as always.

A wonder elixir's ability is rolled with a plain 2d6, since nobody trusts a power that isn't theirs. An Alchemist adds their Alchemist level, and so does anyone who already has the skill. Breathing fire works as the Warlock's Fire bending with no perks. The body still limits the rest: without wings, a flyer floats more than steers, and giant's strength lifts a cart, not a cliff.

:::example[The water strider]
Michal drinks a wonder elixir and sets off across the lake. Halfway over, a drowner grabs his ankle. He loses the struggle and doesn't avert it, so the elixir is spent, and the rest of the crossing is swimming.
:::

:::note[Lasting magic items]
Elixirs, potions and bombs run out. Only the **Black Priest**, a mighty class, can make a magic item that lasts, through its perks. Anyone else gets one as loot or a reward.
:::$c$ where slug = 'substances';

update rulebook_pages set title = $t$Crafting |cs| Výroba$t$, content = $c$One rule covers everything made by hand: an axe, a healing ointment, an elixir, a bomb, a snare.

Making something takes **a place, tools and time** (a smithy and an afternoon for an axe; a pot and a campfire for a draught) and **:material**, the abstract supplies whose exact nature you name as you spend them: herbs, wire, black powder, timber. Potions, elixirs and [hazards](hazards) say how much they need. Plain gear takes about two thirds of its shop price.

## Does it work?

With time, tools and a rest afterwards, it simply works. A roll would only cost points that the rest gives back.

In a hurry, or with no rest to follow, it's a [skill check](dice#skill-check) with the making skill: *Potions and poisons* for a draught, *Mechanisms* for a trap, *Elixirs* for an elixir. A failure is averted with :soul at the scene's Danger Level; otherwise the :material is lost, as much as the DM says.

Work in a hurry goes at **1 :material per round**, so a strength-4 bomb (8 :material) takes 8 rounds. A pit still has to be dug (see [Digging and mining](digging)). Someone who beats the maker in a challenge spoils that round's :material (the ladle spills); one who sets out to wreck the work (kicks the pot over) spoils all of it.

:::example[Tonight, not tomorrow]
Michal (Medic 2) has to put the jailer to sleep tonight, and there's no rest before he sneaks in, so the DM asks for a roll. He brews a strength-3 sleeping draught for 3 :material and makes the skill check at Danger Level 3. He fails, exhausts 3 :soul to avert it, and walks to the jail with the draught and a headache.
:::

## Improvised materials

Whatever's at hand, gathered on the spot, costs nothing. Like an improvised weapon, it does the job without the benefits:

| Made from improvised materials | In the rules |
|---|---|
| A hazard: a trap, a poison, a bomb | Strength **1** at most, and it stops working at the next sunrise or sunset |
| A potion, an elixir, a sigil | **No effect.** The ointment soothes; it heals nothing |
| A weapon or a tool | An improvised one: a weapon deals d4 |

:::note[Perks that change it]
The Hunter's *MacGyver* builds an improvised trap up to your :soul pool. The Medic's *Garden of Eden* harvests proper :material, not improvised.
:::

## Keeping

Substances keep until they're used; a potion lasts practically forever, though after a few months it may smell. A set trap stays armed until it's triggered or found. Sigils are the exception, ending at the next sunrise or sunset (see [Sigils](sigils)).$c$ where slug = 'crafting';

update rulebook_pages set title = $t$Companions |cs| Pomocníci$t$, content = $c$A companion is an NPC that serves a player character, and that the player runs: a trained falcon, a hired sellsword, a loyal squire, a raised skeleton, a bound demon, a golem.

A companion is an ordinary [NPC](npcs) stat block, with :body, :soul and :charisma tracks, a skill bonus, special abilities and a weapon, so 5E stat blocks can be borrowed and converted. Enemy hits land on its tracks like on any NPC's, and at 0 it's down, breaks or flees. What it doesn't have is Fate. It has **Bond** instead.

## Kinds and turn order

| Kind | Examples | Acts |
|---|---|---|
| **Familiar** | A spirit in a raven's shape | Right after its master, on the master's initiative |
| **Summon** | A conjured spirit, an animated tree | Right after its master |
| **Animal companion** | A trained wolf, a falcon, a war dog | On its own initiative |
| **Hireling** | A sellsword, a squire, a guide | On its own initiative |

Familiars come from the Incantor's *Familiar* spell. A creature taken over by magic follows the [control](control) rule instead.

## Bond

Bond is the companion's relationship to its master, and the pool the player spends on the companion. Averting one of its failures costs Bond equal to the Danger Level, and a manoeuvre costs 1 Bond. In an emergency the player can **scar the Bond**, which gives 2 temporary points like a Scar a character takes to avert a failure.

The Danger Level a companion faces is its **master's**, so there's nothing extra to track. The DM sets a different one only when the companion's situation clearly differs, such as scouting ahead or guarding the camp.

Bond can never be higher than the master's :charisma pool. If it drops below 0, the player loses the companion: the DM takes it over and decides whether it dies, leaves, or turns on its master.

:::example[The wolf at the ford]
Sněhurka, Michal's wolf (Bond 3), loses a struggle with a current while crossing a ford. Michal is on the same ford at Danger Level 3, so averting the failure costs all 3 Bond. Sněhurka scrambles out, but Michal will have to pay her before she can save herself again.
:::

:::note[Two kinds of harm]
A sword hits the companion's tracks; betrayal hits the Bond. Bond Scars are harm to the relationship: mistreatment, a broken deal, or the player scarring the Bond for points.
:::

## Getting a companion

Getting a companion goes in three steps, and each one can be automatic, a single roll or a whole adventure, as the story needs.

First the character has to **find** one. Buying a war dog from a breeder is easy; a wolf has to be caught in the wild, and fitting skills help with either.

Then they **bind** it, usually with a challenge: the creature resists with its bonus, and the character rolls with a recruiting or training skill. A win creates a Bond, usually 3, which the DM adjusts to the circumstances. A loss means the creature attacks, flees or scorns the character. A creature already bound to someone else spends all of that Bond resisting, and the old Bond has to end before a new one can form. Someone whose life the character saved can simply join out of gratitude, with no roll.

Finally they agree the **payment**, during the binding.

## Payment

One payment refills one spent point of Bond, so a companion that spends nothing needs nothing. A payment is usually worth the companion's bonus (at least 1):

| Form | One payment |
|---|---|
| Money | 1 silver per bonus point |
| Food | A day's ration |
| Blood | A level-1 :body Scar |
| Memories | A level-1 :soul Scar |

Something that is part of the character, like blood, memories or their face, is paid as a Scar. The character's resource points can't be a payment; they're the character's own effort, not something to hand over.

## Raising and healing Bond

Healing a Bond Scar takes a successful roll with the skill used on the companion (usually the one that bound it), plus **5 payments per Scar level**. Raising Bond by 1 takes the same roll and 5 payments, and never goes above the master's current :charisma pool. If :charisma Scars drop the pool below the Bond, the Bond stays where it is, but once it's damaged it can only be restored up to the current pool. The DM can also raise Bond for good roleplay of the relationship.$c$ where slug = 'companions';

update rulebook_pages set title = $t$Organizations and Standing |cs| Organizace a Postavení$t$, content = $c$An organization is any group with power: a guild, a criminal brotherhood, a church, a cult, a tribe, a city watch, an army, a ducal court. An organization takes no actions of its own; it acts through its members, and what a member can do comes from their place in it.

## Reach and Standing

Two numbers describe that place. **Reach** (1–5) is how important the organization is in the world. **Standing** (0 up to the Reach) is the character's rank in it, and the leader's Standing equals the Reach. A king's soldier is Standing 0 in a Reach-5 army; the founder of a small spy ring is Standing 1 in a Reach-1 ring.

| Value | Reach of the decisions | Examples | How many in the land |
|---|---|---|---|
| **5** | Decisive across the land; heads whole organizations | A strong king, the head of a merchant league, an archbishop, an archmage | A few |
| **4** | Shapes decisions across the land, or decisive in a large region | A trusted ducal advisor, the capital's burgomaster, the head of a big city's underworld, a high priest | Dozens |
| **3** | Decides a small region's key questions, or advises on bigger ones | An abbot, an officer over hundreds, the royal majordomo | Hundreds |
| **2** | Influences a small region | A small town's guild master, a professor of alchemy, a robber baron | Common |
| **1** | A few subordinates and some say in one community | A merchant with a few wagons, a wizard with apprentices, a bandit chief | Many |
| **0** | No rank | A rank-and-file member | — |

Standing isn't tied to a title: a weak king may hold Standing 2, and a parish priest with tens of thousands of followers Standing 4. A character can hold Standing in several organizations at once.

Anyone can join an organization of any Reach at a low rank, and anyone can build and lead a small [network](networks) of Reach 1–2, at Standing equal to its Reach. Standing 3 to 5 comes only from the perks of the mighty classes.

## What Standing gives

Standing makes possible what otherwise wouldn't be. A watch captain can detain a citizen, choose which cases get investigated and sit on the council; the character still rolls with their class skills, and Standing only makes the action allowed. Standing also lets the character find **companions** within its reach (a squire gathers village men, a crime boss thieves) and **command a network**: the part of the organization they lead. A Standing-0 member can't order the organization at all, only ask favours.

Nothing is guaranteed. A character can lose the position, or keep the title while the real power moves elsewhere, and defending it is an adventure of its own.$c$ where slug = 'organizations';

update rulebook_pages set title = $t$Networks |cs| Sítě$t$, content = $c$A network is the part of an [organization](organizations) a character commands. It acts **in the character's stead**, while they're somewhere else: gathering information, stealing, kidnapping, spreading a rumour. Its failures are paid from its own Bond rather than the character's pools, and it keeps the character's hands clean.

## The stat block

A network is a [companion](companions), built like this:

| Part | Rule |
|---|---|
| **Bonus** | Chosen by the character, up to their **Standing + 2** |
| **Specialisation** | One, like an NPC's skill bonus: smuggling and fencing, swaying nobles, occult lore. Outside it, the network can still try anything, with no bonus |
| **Special abilities** | Like an NPC's, such as a free manoeuvre within its specialisation |
| **Tracks** | **12 points** split between :body, :soul and :charisma |

The tracks show what the network has, and what an enemy can knock out of it: :body is its muscle (thugs and guards, for theft, ambushes and kidnapping), :soul its information (informants and scholars, for finding things out), and :charisma its influence (liars, diplomats and merchants, for swaying people and bribery). A raid that arrests the muscle hits :body.

## Bond and payments

A payment to a network is worth **its bonus in silver**, and one payment refills one spent point of Bond. How much Bond it starts with depends on how the character got it: a network they build themselves starts at **0**, joining an existing one is a binding that gives around 2–3, and one got through Standing starts at 3. A built network raises its Bond by 1 for every 5 payments. As for any companion, Bond can't go above the master's :charisma pool.

A network starting at Bond 0 can't avert anything yet. It has to be invested in first.

## Acting

The network rolls with its bonus. It acts somewhere else, so the DM sets the Danger Level of the task, and a failure is averted with that much Bond. A failure that isn't averted becomes a Bond Scar: a member caught, a contact gone quiet.

:::example[Fencing the silver]
A Scout 3 founds a smuggling ring (Reach 1, Standing 1). She picks a bonus of +3, the most she can, with the specialisation *smuggling and fencing*, and splits the tracks into :body 3, :soul 5 and :charisma 4. A payment costs 3 silver, so raising the Bond to 2 takes 10 payments, 30 silver. While she sneaks into the castle, the ring fences the stolen silverware in the harbour, rolling 2d6 + 3. It fails at Danger Level 2, and the ring spends 2 Bond to avert it.
:::

## Upkeep

Once per in-game week, usually once a session, a network needs **one payment's worth of attention**, in any form that fits: silver, goods, a favour for its members, a personal visit, protection from the watch. Kept up, the network sends one tip or report from its specialisation, unasked. Skipped, its Bond takes a level-1 Scar; healing it costs 5 payments and a roll, as for any Bond Scar. Upkeep is separate from refilling spent Bond.$c$ where slug = 'networks';

update rulebook_pages set title = $t$Units |cs| Jednotky$t$, content = $c$A unit is a group resolved as **one NPC**: a drilled squad, a pack of wolves, a band of watchmen. Running a dozen guards one by one is a pain; as a unit, they're one stat block, one initiative and one action.

Units are for the **mighty classes**, or for moments when the DM lends one to the story. Creating units and the perks for commanding them belong to the mighty classes, military ones especially to the **Warlord**.

## Size and stat block

| Size | Members | :body track |
|---|---|---|
| **Handful** | More than one, fewer than a dozen | The average member's × 2 |
| **Band** | A dozen to about 60 | × 4 |
| **Horde** | About 60 to 300 | × 8 |

A unit's bonus, and its :soul and :charisma tracks, are its average member's. Numbers make a unit harder to kill but not braver, so a good speech can rout a horde. Abilities and equipment count only if most members have them: a few men in heavy armour don't make the unit heavy. A unit can also have abilities from its form (drill, a crush of bodies) or from a special member, like a pack leader or a standard-bearer. It has no Fate and no Danger Level.

Huge single creatures, like a kraken or a dragon, count both as one individual and as a handful.

## In a fight

A unit rolls initiative and has one action a round, and it gets Widespread free on every action, so it can still add another manoeuvre. A bigger unit gets any number of free Defenses against smaller ones, and a unit can answer anything within its reach, even after acting, with the Defense manoeuvre. When a smaller unit wins a counter against a bigger one, it saves itself, but the bigger unit's action still hits its other targets. A player character who exhausts against a bigger unit pays **double** the Danger Level; against one of comparable size, the normal cost.

## Damaging a unit

Only an action that reaches **enough members** harms a unit's tracks: more than one person for a handful, more than a handful for a band, more than a band for a horde. One guard falling matters only in the story. A single person reaches at most a handful in melee, a tight band (or a scattered handful) with ranged attacks or magic, and a whole horde within earshot with commands, threats or a speech. That usually takes [Widespread](manoeuvres).

An action that qualifies rolls its damage **once** against the :body track. As :body falls, the unit **shrinks**: when it drops to the next smaller size's maximum, the unit becomes that size (a horde becomes a band, a band a handful, a handful one survivor). :soul and :charisma take damage as for any [NPC](npcs). At 0 in any track the unit is overpowered: dead, scattered, surrendered or broken.

:::example[Fire on the watch]
A band of watchmen has :body 44 (from 5E's guard, 11 each). A Fireball catches most of them and deals 28, leaving 16: below a handful's maximum of 22, so the band shrinks to a handful. Then a Warlord 3 roars at the survivors with 4 at stake, as much as a blade at the throat, and wins: 7 off the watch's :charisma of 6, and they flee.
:::

## Companion units

A companion unit averts failures with Bond, like any [companion](companions), at its master's Danger Level; a part sent elsewhere gets one from the DM. Payments grow with size: ×5 for a handful, ×25 for a band, ×125 for a horde. Permanent losses are Bond Scars, and restoring the Bond means recruiting new members. A unit whose Bond runs out is still strong; it just stops obeying, and can withdraw, surrender or switch sides.

:::note[Splitting and merging]
A unit spread over a wide area for one task (patrols across a city) still rolls as one. Split for different tasks within one scene, each part acts as a smaller unit, sharing the Bond. Kilometres or days apart, the parts become two units, each keeping the Bond as it stood. Units merged for one scene get their tracks and bonus by estimate, each keeps its own Bond, and abilities count only if most members have them.
:::$c$ where slug = 'units';

update rulebook_pages set title = $t$Battles and the map |cs| Bitvy a mapa$t$, content = $c$A battle is fought by [units](units) on a map. This page covers the map's scales, and the rules that decide when a unit, and then a whole army, has had enough.

## The map

The battle map works at three scales. **A round is 6 seconds at both skirmish and battle scale**, so heroes and units fight in the same rounds, and the DM can zoom in when it matters: one battle square is 5 × 5 skirmish squares, and one field square is 10 × 10 battle squares.

| Scale | One square | A square holds | A round | Use it for |
|---|---|---|---|---|
| **Skirmish** | 1 m | One person | 6 s | Fights of a few people. The usual map: 5E's 5 ft square |
| **Battle** | 5 m | A handful | 6 s | Fights with units: a caravan ambush, a gate stormed |
| **Field** | 50 m | A horde | 1 minute | Pitched battles. Heroes join units |
| **Campaign** | 5 km | — | An hour | Marches; distances from [A day's travel](travel-days) |

At skirmish scale, a big creature takes more than one square: Large (a horse, an ogre, a troll) 2 × 2, Huge (a giant, a wyvern) 3 × 3, and Gargantuan (a dragon) 4 × 4 or more.

### Units on the map

| Size | Battle (5 m squares) | Field (50 m squares) |
|---|---|---|
| Handful | 1 square | Part of a square |
| Band | 4 squares: a 2 × 2 block or a 1 × 4 line | Up to 4 bands share a square |
| Horde | 16 squares: a 4 × 4 block, a 2 × 8 or a 1 × 16 line | 1 square |
| A hero | Stands alone in a square, or joins a friendly unit's square | Always joins a unit |

A unit faces one side, set when it moves, and **attacks into its flank or rear are Precise**. A line has a wider front and more members in contact, but turning it costs its whole movement; a block turns freely. Units in touching squares (edges or corners) are **engaged** in melee, and an engaged unit can only move away by spending its action to withdraw. When a unit shrinks a size, remove squares down to the new size from the side that was hit.

A unit moves at its slowest member's speed. On half-speed ground every square costs 2, and on quarter-speed ground 4 (see [Ground](ground)).

| Who | Skirmish walk / run | Battle walk / run | Field walk / run |
|---|---|---|---|
| Dwarf, Halfling | 5 / 10 | 1 / 2 | 1 / 2 |
| Human, Elf | 6 / 12 | 1 / 2 | 1 / 2 |
| Kroll | 7 / 14 | 1 / 2 | 1 / 2 |
| Pony, mule, war dog, wolf | 8 / 16 | 1 / 3 | 1 / 3 |
| Riding horse, warhorse | 12 / 24 | 2 / 5 | 2 / 5 |
| Ox cart | 4 / — | 1 / — | 1 / — |

### What one action reaches

| Action | Battle | Field |
|---|---|---|
| Melee by one person | 1 square (a handful) | — (too small) |
| Ranged attack or a spell | A tight 2 × 2 (a band) | — |
| A Widespread volley by a unit | Every square in range | 1 square |
| Commands, threats, a speech | Everyone within 6 squares (earshot) | 1 square |

### Ranges in squares

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

## Scattered or destroyed

How a unit leaves the battle depends on which track ran out:

| A unit at 0 in | Has | After the battle |
|---|---|---|
| :charisma | **Scattered:** thrown down its weapons and run | Can be gathered again: a day, and a skill check with *Combat leadership* (Warrior) or *Leading people outside combat* (Scout). It comes back **one size smaller**, because stragglers never return |
| :body | **Been destroyed** | Gone for good |
| :soul | **Broken:** panicked, frozen, or under someone else's control | As scattered, unless magic still holds it |

When a unit breaks (any track at 0), every friendly unit **touching it** panics and takes :charisma damage at Danger Level 2.

## An army breaks

An army breaks when **a quarter of its units** have broken. The units still standing withdraw, and the battle ends in a rout, unless a commander stops it with a speech: a Widespread :charisma action at the scene's Danger Level.

| Units in the army | 4 | 8 | 12 | 16 | 20 |
|---|---|---|---|---|---|
| Breaks after this many | 1 | 2 | 3 | 4 | 5 |

## The commander's duel

Anyone can challenge an enemy commander within earshot. If the commander accepts, the battle around them pauses while the units watch, and the two fight it out as an ordinary fight, to the first Scar not averted or until one yields. The winner's units get a **free Precise for 3 rounds**; the loser's take :charisma damage at Danger Level 3. A commander who refuses without a good reason loses their units' trust: companion units lose 1 Bond, and others take :charisma damage at Danger Level 2.

:::example[Not today]
Michal rides out between the lines and challenges the robber baron. The baron, who has seen Michal fight, finds he has urgent business at the back. His men watch him go: the DM rolls :charisma damage at Danger Level 2 against each of his units, and the band on the left flank, already bloodied, hits 0 and scatters. The two bands touching it now take panic damage of their own.
:::

:::note[Draft]
The map scales are a draft and not confirmed yet.
:::$c$ where slug = 'battles';

update rulebook_pages set title = $t$Travel |cs| Cestování$t$, content = $c$Overland travel is worked out a day at a time: 8 hours on the move. The **slowest traveller** sets the pace for everyone, and the [Useful tables](travel-days) say how far that gets the party, what the weather does and what they meet on the way. This page covers the rules for using them.

A day on the road goes like this. In the morning, roll the [weather](weather). Then the party picks its **pace**, and each character picks one **task** for the day. During the march, roll for a [random encounter](encounters), and at night roll again and see what kind of [rest](healing) it is.

## Pace {#pace}

The pace decides how far the party gets, and what else it can do on the way. A slow party looks around; a fast one only looks ahead.

| Pace | Distance | Noticing an ambush or a sign | Navigating, tracking, foraging | Sneaking |
|---|---|---|---|---|
| **Slow** | The *Slow* row | **Advantage** | **Advantage** | Yes |
| **Normal** | The *Normal* row | Plain roll | Plain roll | Disadvantaged |
| **Fast** | The *Fast* row | **Disadvantage** | **Disadvantage**; no foraging | No |

Advantage here is a free Precise, and as always [disadvantage wins](advantage). An encumbered party drops one pace, and loses that pace's benefits with it.

## Tasks {#tasks}

Each character does **one** task a day, and the pace limits which ones are possible. Travel rolls are made at the region's Danger Level: **2** on a patrolled road, **3** in the wilds, **4** in dangerous lands.

| Task | Roll | Success | Failure, not averted |
|---|---|---|---|
| **Keep watch** | *Wilderness survival* (Hunter), or *Urban survival* (Juggler) on streets; a [hidden roll](dice#hidden-roll) | The party notices an encounter first | The encounter notices the party first |
| **Navigate** (off the road only) | *Wilderness survival* (Hunter) | On course | Lost: the day's distance counts for nothing. Next morning's roll finds the way |
| **Track** | *Hunting* (Hunter) | On the trail | The trail is lost until a new sign turns up |
| **Forage** (not at fast pace) | *Hunting* (Hunter) | Food for the party today, and **1 :material** of herbs, wood or hides | Nothing found |
| **Map** | *Warrior knowledge*, *Ranger knowledge*, or a Scout's skill | Advantage on navigating this route next time | — |
| **Cover the trail** (slow pace only) | No roll | Tracking the party is disadvantaged | — |
| **Sneak** (slow or normal pace) | *Acrobatics* (Juggler) or *Wilderness movement* (Hunter); **everyone rolls** | The party moves unseen: an encounter notices them only by winning a challenge | Seen |

When the party sneaks, armour's [cost to attempt](danger-level#cost-to-attempt) applies to everyone wearing it, and one clanking knight gives the whole party away.

:::example[The shortcut]
The party cuts through the Black Wood at a slow pace, and the wilds put travel rolls at Danger Level 3. Michal navigates: *Wilderness survival* with advantage from the slow pace, 3d6 keeping the best two, plus his Hunter level. He fails and won't exhaust 3 :soul to avert it, so the party spends the day walking in a circle round the same fallen oak, and the day's distance counts for nothing. Zara keeps watch, and her hidden roll succeeds, so when wolves come in the evening, the party sees them first.
:::

## Weather {#weather}

Bad weather slows the party by moving it to the right on [A day's travel](travel-days), and it can make noticing, navigating and ranged attacks disadvantaged; the [weather table](weather) lists what each kind does.

Exposure is the part that costs resources. A night outdoors without a fire, a tent or warm clothes in cold weather is an *Endurance* [saving throw](dice#saving-throw) (Medic) at **Danger Level 3**, or **5** in bitter cold, and failing it without averting means a level-1 :body Scar: frostbite, a fever. A day's march in a heatwave is a cost to attempt of **1 :body** (2 in medium or heavy armour), unless the party marches at night. And any night outdoors without shelter in rain, snow, cold or heat is a **poor rest**.

## Random encounters {#encounters}

Roll a d6 **twice a day**, once for the march and once for the night. How likely an encounter is depends on the region, and the [encounter tables](encounters) say what comes and how far away it's spotted.

Who notices first is settled by the watch's roll, or by a challenge if the other side is sneaking or lying in ambush. **The side that noticed** chooses what happens: talk, hide, ambush or go round. **The side that didn't** is surprised, and has **disadvantaged initiative** in the first round. An encounter at night breaks the rest, which becomes a poor one.

:::note[The DM's call]
The DM can skip the roll when an encounter would only waste time, or place one when the story needs it.
:::

## Calculator

::travel-calculator

:::note[Still uses multipliers]
The calculator works with the old multipliers. [A day's travel](travel-days) has the same numbers worked out.
:::$c$ where slug = 'travel';

update rulebook_pages set title = $t$Weather$t$, content = $c$Roll **2d6 each morning** on the season's column. A **7** keeps yesterday's weather, so wet and frosty spells last. The rules are on [Travel](travel#weather).

| 2d6 | Spring | Summer | Autumn | Winter |
|---|---|---|---|---|
| 2 | Late frost, sleet | Thunderstorm | Gale | Snowstorm |
| 3–4 | Heavy rain | Heavy rain shower | Heavy rain | Snow |
| 5–6 | Rain | Overcast, showers | Fog | Overcast, frost |
| 7 | As yesterday | As yesterday | As yesterday | As yesterday |
| 8–10 | Fair | Fair, warm | Fair, fog in the morning | Clear, hard frost |
| 11 | Mild, roads drying | Heat | Rain | Thaw: mud |
| 12 | Thaw floods: fords impassable | Heatwave | First snow | Bitter cold |

## What it does

| Weather | Travel column | Seeing, noticing, shooting | Exposure |
|---|---|---|---|
| Fair, overcast, showers, rain | — | — | — |
| Fog | — | Nothing seen beyond 20 m; navigating **disadvantaged** | — |
| Heavy rain, sleet | One right | Noticing by sight or hearing **disadvantaged**; open flames go out | Poor rest outdoors |
| Thunderstorm, gale | One right | Noticing and ranged attacks **disadvantaged** | Poor rest outdoors; seek shelter |
| Snow | One right from the next day | — | Cold |
| Snowstorm | Two right | Nothing seen beyond 10 m; noticing, navigating and ranged attacks **disadvantaged** | Cold |
| Thaw, mud | One right | — | — |
| Thaw floods | Fords impassable for a day | — | — |
| Heat | — | — | Heavy armour: the march costs 1 :body to attempt |
| Heatwave | — | — | The march costs 1 :body to attempt, 2 in medium or heavy armour; none at night |
| Frost, hard frost | — | — | Cold |
| Bitter cold | — | — | Cold, at Danger Level 5 |

What cold and heat cost the travellers is on [Travel](travel#weather).
$c$ where slug = 'weather';

update rulebook_pages set title = $t$Random encounters$t$, content = $c$Roll **a d6 twice a day**: once for the march, once for the night. Who notices first, and what surprise does, is on [Travel](travel#encounters).

## Is there one?

| Region | Encounter on | Danger Level of travel rolls |
|---|---|---|
| **A patrolled road**, settled farmland | 1, and only at night | 2 |
| **The wilds**: forest, hills, an unpatrolled road | 1 | 3 |
| **Dangerous lands**: a war zone, monster country, an outlaw forest | 1–2 | 4 |

Camping in a village or by a patrolled road counts one row safer. A fire at night in the wilds or worse counts one row more dangerous, because the light carries.

## What is it?

| d6 | Encounter |
|---|---|
| 1 | **A sign:** tracks, a corpse, a burnt farm, a fresh grave. A hook, not a fight |
| 2 | **Travellers:** merchants, pilgrims, a herald, refugees |
| 3 | **The lord's men:** a patrol, a toll, a bailiff looking for someone |
| 4 | **Beasts:** wolves, a boar, a bear, whatever lives there |
| 5 | **Outlaws:** bandits, deserters, poachers who don't want witnesses |
| 6 | **Something worse:** a monster or a fiend of the region. In dangerous lands, roll twice and take the worse |

## How far?

| Ground and light | Spotted at |
|---|---|
| Open ground by day | 100 m |
| Forest, hills, rain | 30 m |
| Dense forest, fog, night, snowstorm | 10 m |

## How do they react?

Optional, for travellers, the lord's men and outlaws when nobody strikes first. Roll 2d6; the DM can add a fitting talker's class level, or a [known setting](backgrounds)'s +1, once the party opens its mouth.

| 2d6 | Reaction |
|---|---|
| 2–4 | **Hostile:** attack, rob or arrest |
| 5–8 | **Wary:** talk, but keep hands on weapons |
| 9–12 | **Friendly:** share news, trade, offer the fire |
$c$ where slug = 'encounters';

update rulebook_pages set title = $t$Sieges |cs| Obléhání$t$, content = $c$A castle falls in one of five ways: **bombardment**, **storm**, **mining**, **starvation** or **magic**. The walls, gates and engines are in [Walls and gates](walls-and-gates) and [Siege engines](siege-engines); this page covers the people inside, and the ones trying to climb in.

## Stores

A besieged place lasts as long as its food and water. Stores are counted in **weeks**, for the garrison the place was built for:

| Place | Garrison | Food | Water |
|---|---|---|---|
| A fortified manor | 20 | 4 weeks | A well |
| A small castle | 60 | 12 weeks | A well, or 1 week from a cistern |
| A walled town | The burghers and 200 soldiers | 8 weeks | Wells |

Double the people and the stores last half the weeks, so every refugee let in at the gate shortens the siege. Each week with no food, the garrison takes :charisma damage at Danger Level 3, and the defending [unit](units) drops a size as men desert and men die.

## The storm

Defenders on the wall get a **free Defense once per round**, as if each had a shield. Climbing a ladder is a [cost to attempt](danger-level#cost-to-attempt) of **1 :body**, and a climber can't defend, so attacks at them are undefended. A defender can push the ladder off with a **Cunning** manoeuvre, and everyone on it falls; the fall is a [hazard](hazards#falling) with its strength set by the height. A siege tower reaches the top of the wall with no climbing cost and no ladder to push.

A **breach** is rubble: half-speed [ground](ground), and no wall bonus for the defenders. That's why, once there is one, the fight moves to the breach.

:::example[The ladder]
Michal is halfway up a ladder when a defender sets a pole against it and pays for Cunning. The ladder goes over, and Michal falls 6 m: a strength-4 hazard. He fails the *Acrobatics* saving throw and exhausts 4 :body rather than take a Scar from the d6. His armour doesn't help against a fall.
:::$c$ where slug = 'sieges';

update rulebook_pages set title = $t$Turns and actions |cs| Kola a akce$t$, content = $c$Combat is how the table resolves a fight where several characters clash and the outcome is uncertain. It runs in **rounds**, that follow the order of [initiative roll](dice#initiative).

## Your turn

- During your turn you may take **one action** and **one movement** by default.
- Some abilities grant a bonus action or a reaction on top.

### Actions
Action is the part of turn that makes you actually do something.
| Action | What it does |
|---|---|
| Attack | Attack one target within reach with a weapon you hold. More targets need the [Widespread manoeuvre](manoeuvres). |
| Cast a spell | See [Magic](magic). |
| Defend | Answer an attack with a [challenge roll](defending). This spends your action unless you use the Defense manoeuvre. |
| Disengage | Move away this turn without giving anyone a free attack. |
| Anything else | Use an item, help a friend, pull a lever. The DM decides what's a roll and what is automatic. |

### Reactions
Reactions are situations that allow you to act out of your turn. They are usually triggered by something. By default there is only one kind you choose to take part in: to defend. The free attack is different, because a trigger grants it to you. Class perks may grant you more. You can defend as many times per round as you can pay for it: each [Defense manoeuvre](manoeuvres) costs a point, and a shield makes one of them per round free.

| Reaction | What it does | Trigger
|---|---|---|
| Defend | Answer an attack with a [challenge roll](defending). This is the [Defense manoeuvre](manoeuvres). | Someone attacking you
| Free attack | Make one melee attack against them, once per round. | An enemy leaving your reach

### Bonus action
Bonus actions are an extra thing you can do during your turn. They are granted by your class perks and oftentimes they allow you to do an extra damage to your target.

### Movement
Movement means you may move your character around the battle map before and/or after your action. Movement can be split around the action: e.g., step in, strike, step back.

In practice it can mean you running to pull a lever, getting close to your enemy, or hide in a cover.

My rulebook uses **metres**, bc I don't speak McDonalds, ammirite? Old 5E values convert at a simple 5 ft = 1 m.

| 5E | My rulebook |
|---|---|
| 5 ft (adjacent, "within 5 feet") | 1 m |
| 30 ft walking speed | 6 m |
| Thrown 20/60 ft | 4/12 m |
| Thrown 30/120 ft (javelin) | 6/24 m |

## No hit points for players

Player characters don't have hit points. They spend resources to avoid bad outcomes, and whatever they don't avoid becomes a [Scar](exhaustion#scars). [NPCs](npcs) have :body, :soul and :charisma tracks instead, and lose them to [damage rolls](dice#damage).

|cs|

Boj je způsob, jak stůl vyřeší rvačku, ve které se střetne víc postav a výsledek není jistý. Probíhá v **kolech**, v pořadí [iniciativy](dice#initiative).

## Tvůj tah {#your-turn}

- **Jedna akce** a **jeden pohyb**.
- Pohyb můžeš rozdělit kolem akce: přiskoč, bodni, ustup.
- Některé schopnosti dávají navíc bonusovou akci nebo reakci.

## Akce {#actions}

| Akce | Co dělá |
|---|---|
| Útok | Zaútoč na jeden cíl v dosahu zbraní, kterou držíš. Na víc cílů potřebuješ [manévr Rozsáhle](manoeuvres). |
| Seslání kouzla | Viz [Magie](magic). |
| Obrana | Odpověz na útok [obranným hodem](defending). Stojí tě to akci, pokud nepoužiješ manévr Obrana. |
| Cokoli jiného | Použij předmět, pomoz kamarádovi, zatáhni za páku. Co je hod, rozhodne PJ. |

## Hráči nemají životy {#no-hit-points-for-players}

Hráčské postavy nemají životy. Utrácejí zdroje, aby se vyhnuly špatným výsledkům, a čemu se nevyhnou, z toho je [Jizva](exhaustion#scars). [NPC](npcs) mají místo toho hodnoty :body, :soul a :charisma a přicházejí o ně [hody na zranění](dice#damage).

:::example[Přiskoč, bodni, ustup]{image="/img/rulebook/michal.webp"}
Michal přiskočí ke goblinovi (pohyb) a bodne ho (akce: střet, který vyhraje). Zranění je 1d6 + 4: hodí :roll[d6 5], celkem 9.

Pak zbytkem pohybu ustoupí za dveře. Goblin má 7 životů a 9 zranění na přemýšlení. Ne na dlouho.
:::

## Jednotky {#units}

Pravidla používají **metry**. Staré hodnoty z 5E se převádějí jednoduše: 5 stop = 1 m.

| 5E | Tady |
|---|---|
| 5 stop (vedle, „do 5 stop“) | 1 m |
| Rychlost chůze 30 stop | 6 m |
| Vrh 20/60 stop | 4/12 m |
| Vrh 30/120 stop (oštěp) | 6/24 m |

:::note[Čtení starých textů]
Kde perk nebo kouzlo pořád mluví o stopách, vyděl pěti. Kde se píše „záchranný hod“, čti [obranný hod](defending) (nebo hod proti [nástraze](hazards), když není útočník).
:::$c$ where slug = 'combat';

update rulebook_pages set title = $t$Exhaustion and scars |cs| Vyčerpání a jizvy$t$, content = $c$::image{src="/img/rulebook/exhaustion-and-scars.webp" alt="A weary adventurer" layout="header"}

## Exhaustion
When a roll fails and the outcome is bad, you can buy your way out of it. Spend points equal to the [Danger Level](danger-level) from the pool the skill uses, and the failure is averted. Those points are **exhausted**, marked with one diagonal strike.

This means exactly what the name suggests - a character makes an extra effort by biting their tongue which results in them pushing their limits and tiring themselves in the process.

:::note[Getting it back]
Exhaustion heals with rest. How much depends on the rest; see [Healing](healing).
:::

::::example[Exhausting yourself]{image="/img/rulebook/michal.webp"}
:roll[d6 3 2] **+ 2 = 7**

Michal (Juggler 2) failed a :charisma Juggler [skill check](dice) to flirt with the burgomaster's daughter like the fucking failure he is. However, his team relies on her goodwill later that day, so Michal decides to exhaust himself.

As this was moderately difficult situation, the **[Danger Level](danger-level) was 3**. He must therefore exhaust 3 :charisma to avert the failure.

Michal spends 3 :charisma resources and averts failure by turning unsuccessful courting into a joke based on stereotype of city bad boys, which amuses the target. Even though the flirting succeeded in the end, Michal knows he was painfully close to embarrassing himself and this knowledge haunts him for the rest of the afternoon (his Charisma is exhausted).

:::stats[]
::stat{r="charisma" base="5" exhausted="3"}
:::
::::

## Scars

A Scar, unlike the Exhaustion, is lasting harm: a wound, a fear, a ruined name. They are semi-permanent, they don't go away with a good night's sleep.

| Pool | Examples |
|---|---|
| :body | Bleeding wound, illness, sprained ankle, bruising, trembling hands, lost hearing |
| :soul | Insomnia, anxiety, guilt, nightmares, shaken confidence, headache, depression |
| :charisma | Mockery, ruined reputation, distrust, being outlawed, having ruined self-worth |

:::note[Scar severity]
Not every scar is equal. Some are more severe than others. We generally speak of **Scar levels**. A level 1 scar crosses out 1 box. A level 3 scar, takes up 3 boxes.
:::

There are several ways to get one: you take one to push past your limit, the DM gives you one as a story outcome, you deal it yourself to wake awakened magic, or you take a plain ol' damage.

:::note[Scars are story]
A Scar isn't just a crossed-out box, it's something the character lives with, and the DM and the player should both lean on it until it's dealt with.

A warrior with a broken arm will have to adjust their fighting style and a bard with a ruined reputation will probably have to hide away for a while, or win people's trust again...
:::

### Taking a Scar to push on

When a pool is too low to pay the Danger Level, you can take a Scar. It gives **2 temporary points** that must be spent right away; whatever is left over is lost. The scarred point is crossed out, and sleep doesn't bring it back.

::::example[Gaining a Scar]{image="/img/rulebook/michal.webp"}
Michal failed a Juggler :charisma skill check again to flirt with the burgomaster's daughter as he is really bad at his game. He wants to exhaust himself, but does not have enough :charisma points - he has only 2 left, while the **danger level is 3**.

He must take a Scar, so he crosses out one of his resource boxes. It gives him additional 2 resources. As the danger level needed only three, the fourth one is wasted.

However, he is seen too close with a respected unmarried lady by burgomaster's men. Michal now carries a :charisma Scar: a ruined reputation, and a town guard that would like a word.

:::stats[Michal's Charisma, before and after]
::stat{r="charisma" base="5" exhausted="3"}
::stat{r="charisma" base="5" exhausted="4" scarred="1"}
:::

In order to mend his Scar, Michal will probably have to pay for burgomaster's drink and profusely apologise. He will have to spend some monetary and :charisma resources to get rid of the Scar before he can unblock the crossed-out token.
::::

:::note[Which box gets the Scar]
A Scar can cross out an exhausted box as well as a fresh one. Players usually scar their exhausted boxes first, so the points they still have stay available. A bigger Scar is still one Scar: a level-3 Scar crosses out three boxes, not three Scars.
:::

### Scars from the DM and combat

If a character doesn't or can't avert a bad outcome, say they fall into a trap, the DM gives them a Scar of the DM's choosing. 

| Example | Pool | Level |
|---|---|---|
| Slashed arm | :body | 2 |
| Broken leg | :body | 6 |
| Haunted by what you saw in the crypt | :soul | 3 |
| Banished from town | :charisma | 5 |

For hits in combat, the level comes from the damage roll:

::formula[scar level = damage roll − armour rating]

For what armour takes off, see [Defending and getting hit](defending#how-bad-a-hit-is). If the Scar is bigger than the pool, the character starts dying.

## Dying
:::note[Note from Michal]
In my 12-something years of DM experience, never have I ever killed off a character. I wanted once, but the bastard rolled well...

Anyway, it is not easy to die.
:::

A Scar bigger than the boxes of its pool that aren't scarred yet (exhausted ones count) blocks the **whole pool**, and the character starts dying. The same happens when a character takes a Scar in a pool that's already fully blocked.

All three pools can kill an adventure, each in its own way:

| Pool | What dying looks like |Dying phase
|---|---|---|
| :body | Physically dying |Unconscious
| :soul | Going mad, or a catatonic state|Catatonic state
| :charisma | Reputation and self-worth ruined beyond repair |Paralysing anxiety

When your resource bar fails and you drop to 0, you enter a dying phase. In a dying phase, your every turn consists of rolling a d20 with no bonuses.

- rolling **10 or more** is a success; three successes and the character stabilises.
- rolling three failures, and it's the end for your character
- the rolls don't have to be consecutive
- rolling :roll[d20 20]counts as two successes; :roll[d20 1] counts as two failures
- you getting hit in the affected resource pool counts as a failure
- other character can use their turn to assist you in stabilising by succeeding a Medic skill check (for :body), an Incantor skill check (for :soul), or a Scout skill check (for :charisma). These skill checks are **non-unique**.

:::example[The troll goes boom]{image="/img/rulebook/michal.webp"}
A stone troll called "The Rock" hits Michal for a level-6 :body Scar with only 4 :body left. The whole pool goes dark and Michal hits the ground.

In the next four turns he rolls :roll[d20 14 (3) 11 17]: three successes. He lives, but he won't be walking anywhere for a while.
:::

|cs|

::image{src="/img/rulebook/exhaustion-and-scars.webp" alt="Unavený dobrodruh" layout="header"}

Když hod selže a výsledek je špatný, můžeš se z toho vykoupit. Utrať ze zdroje, který dovednost používá, tolik bodů, kolik je [Ohrožení](danger-level), a neúspěch je odvrácen. Ty body jsou **vyčerpané**, označené jedním šikmým škrtem.

Když ve zdroji nezbývá dost, můžeš pořád pokračovat tím, že si vezmeš [Jizvu](exhaustion#scars).

::::example[Vyčerpání]{image="/img/rulebook/michal.webp"}
Michal se snaží flirtovat s purkmistrovou dcerou. Hodí :roll[d6 3 2] + 2 = 7 a selže, zklamání jako vždycky, ale družina potřebuje do večera její přízeň.

Ohrožení je **3**, takže vyčerpá 3 :charisma[Vlivu] a neúspěch odvrátí.

:::stats[Michalův Vliv před a po]
::stat{r="charisma" base="5"}
::stat{r="charisma" base="5" exhausted="3"}
:::

Nepovedenou hlášku obrátí v sebeironický vtip o městských grázlech. Zabere to. Zbytek odpoledne je citově vyždímaný.
::::

## Jak se vrací {#getting-it-back}

Vyčerpání se léčí odpočinkem. Kolik se vrátí, záleží na odpočinku; viz [Léčení](healing).$c$ where slug = 'exhaustion';

update rulebook_pages set title = $t$Healing |cs| Léčení$t$, content = $c$::image{src="/img/rulebook/healing.webp" alt="A healer tending a wound" layout="header"}

## Healing exhaustion

Exhausted resources regenerate after a period of rest; usually after a night of sleep. The amount of resources regained depends on the quality of rest.

::::cards{cols="2"}
:::card[Poor rest]{image="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/bfcedda3-e254-4be1-8d52-27265c707a60.webp"}
 Whenever the characters rest under less than ideal conditions, the rest is considered poor. **Poor rest recovers three exhausted resource points**;  the choice of which points to recover is up to the player.
:::
:::card[Quality rest]{image="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/f8ace00f-79c2-4ecb-b575-3354f44fc0f3.webp"}
A rest in a comfortable, safe and stress-free environment is considered quality. **Quality rest recovers all the exhausted resource points.**
:::
::::

## Healing a Scar

Unlike exhaustion, Scars require time, effort, or help from others to heal. Scar is not healed after a rest. A character must meaningfully address the problem — treating the wound, seeking therapy, paying reparations, rebuilding trust, or resolving guilt — depending on the nature of the Scar.

Each Scar takes **5 resource points per level** to be healed (a level-2 Scar costs 10). The points can come from any mix of:

- **The bearer's own pools**, any of the three. :body[]: it hurts. :soul[]: the pain wears them out. :charisma[]: recovering leaves them unsociable.
- **A healer's resources**, usually :soul, when a perk allows another character to assist in the healing.
- **Healing substances** such as ointments and elixirs. *see [Potions](substances#potions)*.
- **:material**, 1 point each, where it makes sense and after asking the DM: 5 Material for a proper bandage.

:::note[Coins]
Coins pay for healing only when the DM allows it: a round of drinks in a tavern to wash away a :soul or :charisma Scar, or a bribe to mend a :charisma one.
:::


You must also deal with the cause in the story (treating the wound, therapy, paying reparations, rebuilding trust) and succeed in **one skill check per Scar level**.


:::example[Mending a reputation]{image="/img/rulebook/michal.webp"}
Michal's level-1 :charisma Scar needs 5 points and one successful check. In this instance, the DM allows Michal to use money as a part of the healing resource.

He pays 3 :charisma for the humiliation and 2 :coins for the drinks. 

He buys the burgomaster a generous drink and apologises until his tongue hurts: a Juggler persuasion check, :roll[d6 5 4] + 2 = 11, passed.

The Scar is gone. The burgomaster still doesn't like him as a person, but trusts him that he means well.
:::

|cs|

::image{src="/img/rulebook/healing.webp" alt="Léčitel ošetřuje ránu" layout="header"}

## Léčení vyčerpání {#healing-exhaustion}

| Odpočinek | Co to je | Obnoví |
|---|---|---|
| Špatný odpočinek | Cokoli horšího než bezpečí a pohodlí: příkop, studený tábor, noc na hlídce | 3 vyčerpané body podle tvého výběru |
| Kvalitní odpočinek | V bezpečí, pohodlí a bez stresu | Všechny vyčerpané body |

## Léčení Jizvy {#healing-a-scar}

Spánek Jizvy neléčí. K zahojení jedné jsou potřeba tři věci:

1. **Vypořádat se s příčinou** v příběhu: ošetřit ránu, terapie, odškodné, obnovit důvěru.
2. **5 bodů zdrojů za každý stupeň Jizvy.** Jizva 2. stupně stojí 10.
3. **Jedna úspěšná zkouška za každý stupeň Jizvy**, třeba ošetření rány.

Body můžou pocházet z jakékoli kombinace:

- **Vlastních zdrojů nositele**, kteréhokoli ze tří. :body[]: bolí to. :soul[]: bolest ho vyčerpává. :charisma[]: z uzdravování je nespolečenský.
- **Zdrojů léčitele**, obvykle :soul[Duše], pokud to dovoluje perk.
- **Léčivých látek**, jako jsou masti a elixíry, každá za pevný počet bodů; Mastičkářova mast na popáleniny může mít 5. Každá léčí jeden druh Jizvy; viz [Lektvary](substances#potions).
- **:material[Materiálu]**, 1 bod za kus, kde to dává smysl a po dohodě s PJ: 5 Materiálu na pořádný obvaz.

:::example[Spravit si pověst]{image="/img/rulebook/michal.webp"}
Michalova Jizva 1. stupně na :charisma[Vlivu] potřebuje 5 bodů a jednu úspěšnou zkoušku.

Koupí purkmistrovi štědrý drink a omlouvá se, dokud ho nebolí jazyk: zkouška přesvědčování za Kejklíře, :roll[d6 5 4] + 2 = 11, uspěl. Za to ponížení zaplatí 3 :charisma[Vlivu] a 2 :soul[Duše].

Jizva je pryč. Purkmistr ho pořád nemá rád.
:::

Předměty se hojí stejně; viz [Jizvy předmětů](item-scars).$c$ where slug = 'healing';

update rulebook_pages set title = $t$How classes work |cs| Jak fungují povolání$t$, content = $c$::image{src="/img/rulebook/classes.webp" alt="A band of adventurers" layout="header"}

In 5E you pick a class and stay in it until level 20, unless you're brave enough to learn the multiclassing rules. Here, **classes are bundles of skills**, not a whole identity, and characters are expected to mix them.

## Skills

- Each class has **skills**, each tied to a resource. A roll for a skill adds that class's level. A pure Juggler doing acrobatics rolls 2d6 + Juggler level.
- Anyone can attempt a skill from a class they don't have, just without the bonus. A pure Medic doing acrobatics rolls a plain 2d6.
- A **unique** skill is the exception: only characters with the class can attempt it. For example, pure Fighter cannot even attempt to cast a spell.
- The highest class level is **5**.

:::note[One number for the whole bundle]
Want to be good at fighting, weapon knowledge and intimidation? You no longer juggle Strength, Constitution, Intelligence and an Intimidation proficiency. Take Fighter: it bundles armed combat, raw strength, weapon knowledge and scaring people into one number.
:::

## Three tiers of classes
This version of Dungeons and Dragons uses three tiers of classes. Again, a character is expected to take on multiple and unlock more as they go. This system always offers the opportunity for a character to fill in the ability void in their party should the need arise.

::::cards{cols="3"}
:::card[Basic]{image="/img/classes/fighter.webp"}
**[5 basic classes](basic-classes)** that are always open to take. They form little bundles of basic skillsets.
:::
:::card[Advanced]{image="/img/classes/warrior.webp"}
**[10 advanced classes](advanced-classes)** which unlock once their two parents total 6 levels. They provide the characters with more specialized skills.
:::
:::card[Mighty]{image="/img/classes/ravager.webp"}
**[6 mighty classes](mighty-classes)** unlock once their advanced classes total 6 levels. They make the characters leaders in their field.
:::
::::

## Magic
Magic and magical abilities are linked and limited by class. The only proper magical class is [Incantor](classes/incantor). All classes stemming from it are **infused**: the magic is in them.

There are two exceptions and those are [Shaman](classes/shaman) and [Witcher](classes/witcher), that both stem from [Medic](classes/medic), but can wield their own forms of magic. However, in order to be able to cast spells, they need to deal themselves a [Scar](exhaustion#scars) first. We call these classes **awakened**: their magic sleeps until they wake it.

| Kind | How it works |
|---|---|
| None | No spells. |
| Infused | Core spells from the start; more unlock as perks. |
| Awakened | Core spells too, but the caster takes a Scar to enter magic mode first. See [Casting magic](magic#who-can-cast). |

|cs|

::image{src="/img/rulebook/classes.webp" alt="Družina dobrodruhů" layout="header"}

V 5E si vybereš povolání a zůstaneš v něm až do 20. levelu, pokud nemáš odvahu naučit se pravidla pro kombinování povolání. Tady jsou **povolání balíčky dovedností**, ne celá identita, a postavy je mají míchat.

## Dovednosti {#skills}

- Každé povolání má **dovednosti** a každá patří k jednomu zdroji. Hod na dovednost přičítá úroveň daného povolání.
- Dovednost povolání, které nemáš, může zkusit kdokoli, jen bez bonusu. Čistý Mastičkář, který dělá akrobacii, hází holé 2d6.
- Výjimkou je **jedinečná** dovednost: zkusit ji můžou jen postavy s tím povoláním.
- Nejvyšší úroveň povolání je **5**.

:::example[Jedno číslo na boj]
Chceš být dobrý v boji? Už nežongluješ se Silou, Odolností a zdatností v Zastrašování. Vezmi si Bojovníka: ozbrojený boj, hrubou sílu, znalost zbraní a strašení lidí má v jednom čísle.
:::

## Magie {#magic}

| Druh | Jak funguje |
|---|---|
| Žádná | Žádná kouzla. |
| Prostoupená | Základní kouzla od začátku; další se odemykají jako perky. |
| Probuzená | Taky základní kouzla, ale sesilatel si nejdřív musí vzít Jizvu, aby se dostal do magického režimu. Viz [Magie](magic). |

## Tři stupně {#three-tiers}

- **[5 základních povolání](basic-classes)** je otevřených vždycky.
- **[10 pokročilých povolání](advanced-classes)**, jedno pro každou dvojici základních, se odemkne, když jeho dva rodiče mají dohromady 6 úrovní.
- **[6 mocných povolání](mighty-classes)** se odemkne, když jejich pokročilá povolání mají dohromady 6 úrovní.

## Míchání povolání {#blending-classes}

Rodiče můžou dát 6 v jakémkoli poměru a ten poměr postavu formuje. Tři Válečníci, tři úplně jiní lidé:

::::cards
:::card[Hakon, berserkr z medvědího klanu]{image="/img/classes/fighter.webp" subtitle="Bojovník 5 · Kejklíř 1 · Válečník 1"}
Obří válečník, který drtí nepřátele hrubou silou a pak je překvapí vrženou sekerou. Má hodně Bojovníka, takže hraje jako klasický barbar.
:::

:::card[Sir Ulrich z Velgraadu]{image="/img/classes/warrior.webp" subtitle="Bojovník 3 · Kejklíř 3 · Válečník 1"}
Charismatický rytíř, stejně dobrý v sedle a na turnaji jako v souboji s mečem. Vyrovnané úrovně dělají všestrannou postavu.
:::

:::card[Zara Samotářka]{image="/img/rulebook/warrior-monk.webp" subtitle="Bojovník 1 · Kejklíř 5 · Válečník 1"}
Válečná mniška, která se pohybuje jako stín: samá akrobacie, vrhací čepele a přesné údery. Má hodně Kejklíře, takže má blízko k Mnichovi z 5E.
:::
::::

:::note[Perky]
Každá úroveň povolání přináší jeden perk toho povolání. Perky najdeš na stránce každého povolání.
:::$c$ where slug = 'classes';

update rulebook_pages set title = $t$Danger Level |cs| Ohrožení$t$, content = $c$::image{src="/img/rulebook/danger-level.webp" alt="Adventurers in a collapsing ruin" layout="side"}

The Danger Level is a single number for how risky, chaotic or technically nasty the current situation is. 

**The default is 3.**

After a bad roll, the player may choose to avert the bad outcome. To avoid it (getting hurt, failing a task, losing an item, setting off a trap, making a fool of yourself), a character spends resources equal to the Danger Level from the pool the skill uses. That is [Exhaustion](exhaustion).

:::note[Each to their own]
Characters in the same scene can face different Danger Levels. [NPCs](npcs) have none.
:::


:::example[Muddy situation]
A warrior knocked into the mud faces Danger Level 4 against the next blow. His spellcasting friend on the rock next to him casts spells at Danger Level 2, and feels a bit guilty about it.
:::

### What the numbers feel like

| Level | Feel | :body | :soul | :charisma |
|---|---|---|---|---|
| 1 | Walk in a park | Crossing a calm river | Prying open a hayloft latch | Puppet show for children |
| 2 | Same shit, different day | Crossing a wild mountain stream | Picking a basic cell lock | Adventure stories for villagers |
| 3 | Better fill a risk assessment | Crossing a swollen river | Several locks on a merchant's chest | Impressing bored city folk |
| 4 | The danger is real | River with floating debris | Disarming a dart trap in a steel lock | Flawless show for a critical audience |
| 5+ | "The fuck did I stumble into?" | Debris-filled river in a storm | Decoding mechanisms as the ceiling collapses | Forbidden performance for a decadent audience |

### Raising and lowering it

- The DM **raises** it when things get hostile, urgent or chaotic, or when a character is in a bad spot.
- Players **lower** it by improving their position: finding cover, making a distraction, talking an enemy down.

In short: the Danger Level is how screwed you are if things go wrong, and how much it costs to stay in the fight.

## Cost to attempt

Some activities are hard before they even start. For those, the character pays a **cost to attempt**: points exhausted **before rolling**, just to try.

- It is paid whether the roll succeeds or fails; always before you even roll.
- It comes from the pool of the skill being used, unless the rule says otherwise.
- It is separate from a Danger Level.
- If the pool can't pay it, the character can take a [Scar](exhaustion#scars) to pay it, as with any exhaustion.


| Source | Cost |
|---|---|
| **Armour** that gets in the way: stealth, acrobatics, swimming, running | Medium armour 1 :body, heavy armour 2 :body. See [Armour](armour#encumbrance). |
| **Hard circumstances**, at the DM's call: tracking on packed earth, making ice on a hot summer day | Usually 1, set by the DM |
| **Acting through a [sigil](sigils)** | 1 point of the sigil's pool per action |

|cs|

::image{src="/img/rulebook/danger-level.webp" alt="Dobrodruzi v hroutící se zřícenině" layout="side"}

Ohrožení je jedno číslo, které říká, jak riskantní, chaotická nebo technicky zapeklitá je současná situace. **Výchozí hodnota je 3.**

Aby se vyhnula špatnému výsledku (zranění, nezdaru, ztrátě věci, spuštění pasti, ztrapnění se), utratí postava ze zdroje, který dovednost používá, tolik bodů, kolik je Ohrožení. To je [Vyčerpání](exhaustion).

## Jak čísla působí {#what-the-numbers-feel-like}

| Úroveň | Pocit | :body | :soul | :charisma |
|---|---|---|---|---|
| 1 | Procházka parkem | Brodění klidné řeky | Vypáčení západky na seníku | Loutkové divadlo pro děti |
| 2 | Jiný den, stejný sračky | Brodění divoké horské bystřiny | Odemčení obyčejného zámku cely | Dobrodružné historky pro vesničany |
| 3 | Čas vyplnit hlášení BOZP | Brodění rozvodněné řeky | Několik zámků na kupecké truhle | Zaujmout znuděné měšťany |
| 4 | Nebezpečí je skutečné | Řeka plná plovoucích klád | Zneškodnění šipkové pasti v ocelovém zámku | Bezchybné vystoupení pro kritické publikum |
| 5+ | „Do prdele, kam jsem to vlezl?“ | Řeka plná klád v bouři | Luštění mechanismů, zatímco padá strop | Zakázané představení pro zhýralé publikum |

## Zvyšování a snižování {#raising-and-lowering-it}

- PJ ho **zvyšuje**, když jde do tuhého, spěchá se nebo je kolem chaos, nebo když je postava ve špatné pozici.
- Hráči ho **snižují** tím, že si polepší: najdou kryt, odvedou pozornost, ukecají nepřítele.
- Některé činnosti mají navíc [cenu pokusu](danger-level#cost-to-attempt), placenou před hodem. Přičítá se k Ohrožení, nenahrazuje ho.

## Každý to své {#each-to-their-own}

Postavy v téže scéně můžou čelit různému Ohrožení. [NPC](npcs) žádné nemají.

:::example[Bláto a kopec]
Válečnice, kterou právě srazili do bláta, čelí dalšímu úderu s Ohrožením 5. Její kamarádka sesilatelka na kopci za ní sesílá s Ohrožením 2 a trochu se za to stydí.
:::

Zkrátka: Ohrožení říká, jak moc jsi v háji, když se něco pokazí, a kolik stojí zůstat v boji.$c$ where slug = 'danger-level';

update rulebook_pages set title = $t$Item scars |cs| Jizvy předmětů$t$, content = $c$Your gear can take Scars too, and sometimes you may want to scar one of your items instead of yourself. The item **breaks**, and like a Scar you take, it gives **2 points** to spend right away.

You can only scar an item for an activity the item would **reasonably be involved in**: a lockpick for a lock, a sword for a fight. Creative uses are welcome if the DM buys them.

The 2 points count towards **whichever pool** the failed roll needed and leftover points are lost as with normal Scar.

Only **proper items** count. A chair leg used as a club can't be scarred for points, because it is an improvised weapon. There are perks that may allow you to do otherwise.

### Weapons
Should a weapon break, it counts as an improvised weapon with d4 damage die until properly repaired.

### Armour

When the DM scars armour, one piece of it breaks and stops counting towards Protection and Burden until it's repaired. See [Armour](armour).

:::example[The paper rose]{image="/img/rulebook/michal.webp"}
Cornered by a jealous "girlfriend", Michal needs an extra :charisma point to talk his way out.

He produces the party's only map to the dungeon, folds it into a paper rose with a flourish, and sets it on fire. The girl is charmed. The party is not.
:::

## Repairs

Repairing works like [healing a Scar](healing): 5 resources, usually Material, and a successful skill check for a class that governs that area of expertise (Warrior for smithing a sword, Ranger for bowmaking...).

:::note[It has to be plausible]
A one-of-a-kind map or an antique sword can't be restored to its former glory. A cracked shield can.
:::

|cs|

Jizvy můžou dostat i tvoje věci, a někdy by si ji měly vzít místo tebe.

## Rozbít věc, abys odvrátil neúspěch {#breaking-an-item-to-avert-failure}

Místo sebe můžeš zjizvit některou svoji věc. Věc se **rozbije** a stejně jako Jizva, kterou si vezmeš, dá **2 body** k okamžitému utracení.

- Jen u činnosti, ve které by věc **rozumně hrála roli**: paklíč u zámku, meč v boji. Tvořivé nápady jsou vítané, pokud je PJ skousne.
- Ty 2 body se počítají do **kteréhokoli zdroje**, který nepovedený hod potřeboval.
- Zbylé body propadnou.
- Počítají se jen **pořádné věci**. Noha od židle použitá jako kyj se za body zjizvit nedá, pokud perk neříká jinak.

:::example[Papírová růže]{image="/img/rulebook/michal.webp"}
Žárlivý manžel zahnal Michala do kouta a Michal potřebuje ještě jeden bod :charisma[Vlivu], aby se z toho vykecal.

Vytáhne jedinou mapu družiny do jeskyně, s grácií z ní složí papírovou růži a zapálí ji. Manžel je okouzlen. Družina ne.
:::

## Zbroj {#armour}

Když PJ zjizví zbroj, jeden její kus se rozbije a nepočítá se do Ochrany ani Zátěže, dokud ho někdo neopraví. Viz [Zbroj](armour).

## Opravy {#repairs}

Oprava funguje jako [léčení Jizvy](healing): 5 bodů zdrojů, obvykle Materiálu, a úspěšná zkouška.

:::note[Musí to být uvěřitelné]
Starou mapu nebo starožitný meč do původní slávy nevrátíš. Prasklý štít ano.
:::$c$ where slug = 'item-scars';

update rulebook_pages set title = $t$Dice rolls |cs| Hody kostkou$t$, content = $c$:::note[]
*"Alea iacta est..."*

&mdash;Julius Caesar, while getting his socks wet
:::

Dice decide what happens when the outcome is uncertain. There are four kinds of roll, and every one of them adds the level of the [class](classes) the skill belongs to.

:::note[Do I always have to roll?]
The rules say "whenever the outcome is uncertain". It goes without saying that picking a flower off the ground is not something where you can fail and therefore the action is automatic...

If the DM wants to be a prick tho... 😏
:::

:::note[Failing a roll]

What sets this game apart from other versions is how it works with failure. A failed roll does not automatically mean a total failure.

For now, all you need to know is that you can either avert the failure with [exhaustion and scars](exhaustion), or accept it, as failure can many times create more interesting and creative story situations.
:::

## Skill check

::image{src="/img/rulebook/skill-check.webp" alt="An adventurer picking a lock" layout="side"}

::formula[2d6 + class level ≥ 9]
Skill check is the most basic roll there is.

In short, your character tries to overcome an obstacle that isn't fighting back: a locked door, a cliff, a crowd that needs convincing. **Roll two six-sided dice and add your level in the class the skill belongs to. 9 or more succeeds.**

:::note[No cheesing...]
If you fail a roll, you cannot try the same action anymore. E.g., if you fail scaling a wall, you cannot attempt to scale it again, **unless the situation changes** (a friend comes to help you, you distract the guards to make your Danger Level lower...).
:::

:::example[Picking a pocket]{image="/img/rulebook/michal.webp"}
Michal (Juggler 2) tries to pick a merchant's pocket. Sleight of hand is a Juggler skill, so he rolls 2d6 + 2.

He rolls :roll[d6 4 3] **+ 2 = 9**.

Just barely, but the whole endeavour succeeds and Michal is walking away with a sealed contract.
:::

:::note[What if I want to pick a pocket, but am not a Juggler?]
No class with that skill? That is not a problem. You can still try anything that isn't a unique skill, just without the bonus: a plain 2d6.

The only exceptions are so-called *unique skills* that can be attempted only by the wielder of said class.
:::

## Challenge

::image{src="/img/rulebook/challenge.webp" alt="Two fighters crossing swords" layout="side"}

::formula[d20 + class level vs d20 + class level]

Challenge is a roll where two parties disagree on the outcome. Every fight, but also an arm-wrestle, a card game or a debate are a challenge.

Both sides roll a d20 and add their class level. The higher result wins.

:::note[What about a tie?]
In case of a tie, the victory goes to the defender by default.
:::

:::example[Seduction game]{image="/img/rulebook/michal.webp"}
Michal (Juggler 2) tries to seduce a girl at the tavern. To extract some information, he told his party. The poor girl, however, has a different opinion on said matter and therefore the roll is treated as a challenge.

Michal rolls :roll[d20 6] **+ 2** (seduction is a Juggler skill) **= 8**.

The girl rolls :roll[d20 12] **+ 1** (she has a slight bonus on resisting seduction) **= 13**

Tough luck. She resists his clunky charm and Michal is to seek his intel elsewhere.
:::

## Initiative

::image{src="/img/rulebook/initiative.webp" alt="A tavern brawl about to start" layout="side"}

::formula[d20]

The third type of roll is initiative. Initiative represents how quickly a character managed to make sense of a situation to act.

When a fight starts, everyone rolls a plain d20. The highest acts first, and so on down. No class level is added.

:::example[Tavern brawl]{image="/img/rulebook/michal.webp"}
Enraged by Michal flirting with his fiancée, a local tavern brawler jumps to his feet and grabs a nearby tankard.
Michal rolls :roll[d20 17], the brawler :roll[d20 5]. Michal's wits are quicker and he gets to make the first move.
:::

## Damage

::image{src="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/5ecff9af-aefb-473d-b6b8-d0aff169bb01.webp" alt="" layout="side"}

::formula[weapon or ability dice + class level]

When you hit an [NPC](npcs), roll the weapon's dice and add your class level. The total is the damage that gets subtracted off its :body track.

Player characters don't have hit points; damage to them turns into a [Scar](defending#how-bad-a-hit-is) instead.

Weapons use the 5E table, with every weapon granting a different damage die.

:::note[Critical hit]
Should you roll a :roll[d20 20] or :roll[d6 6 6] in the challenge / skill check preceding the damage roll, the hit is critical and you get the [Mighty manoeuvre](manoeuvres) for free. It doesn't count towards the action's one manoeuvre.
:::

:::example[Tavern brawl 2: Tokyo Drift]{image="/img/rulebook/michal.webp"}
Michal (Juggler 2) cannot help but defend himself from a raging tavern brawler. He pulls out his shortsword and slashes the brute's arm.

Normally, as a Juggler he does not have a skill in armed foot combat, as that is a Fighter skill. However, as a shortsword is listed as a **finesse weapon**, he may add his Juggler level to the roll.

The brute does not react, so Michal rolls a skill check: :roll[d6 6 2] **+ 2 ≥ 9**. He succeeds.

Next, he rolls for damage. Shortsword has d6 as a damage die.

:roll[d6 4] **+ 2** (a level bonus for the attacking class) **= 6 :body damage to the target**. 
:::

## Saving throw

::image{src="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/79199346-3ffd-4fa4-ba60-8b3af36ace26.webp" alt="" layout="side"}

A saving throw is a passive form of skill check. A saving throw is anything a character has to overcome with nobody rolling against them. 

Noticing a trap, enduring a poison, avoiding a collapsing floor, resisting a curse, braving a long march through snow, or waking up after being sneaked up upon are all examples of a saving throw.

::formula[2d6 + class level ≥ 9]

### Which class to use?
Admittedly, this can get puzzling, but here are some rules of thumb:

With some events, the player says **how** the character deals with the hazard. The DM accepts the class whose skills make sense:
- Several approaches can work against the same hazard. A dart trap can be dodged (Juggler), caught on a shield (Fighter), or spotted beforehand (Hunter).

Some events may just have one preferable skill to check for. Noticing an ambush in the wilderness will always fall under Hunter and an ambush in a city under Juggler.

Skills follow **areas of expertise**, not 5E's ability scores. Recognising a fencing school by its stance is Fighter's *Weapon knowledge*; recalling how a siege engine works is Warrior's *Warrior knowledge*. Neither is a general "Intelligence" roll.
- Advanced classes answer too when one of their skills fits: *Mechanisms* (Rogue) for a trapped lock, *Aerial acrobatics* (Rogue) for a fall.
- A character without a fitting class rolls a plain 2d6.

:::example[Tavern brawl 3: Return of the King]{image="/img/rulebook/michal.webp"}
Suddenly a tavern-wide brawl erupts. Out of nowhere, a wine bottle flies directly at Michal.

The DM wants to underline how chaotic the situation is so he does not even tell Michal what is happening and has him roll a saving throw. He has determined that he will allow Michal to use the Juggler bonus as ducking is a viable option.

Michal therefore rolls :roll[d6 6 5] **+ 2 ≥ 9**.

The DM describes how Michal ducks before the flying bottle. Michal then decides that it is high time to leave the tavern.
:::

#### Default skills

When nobody has a better idea, these are the fallback answers:

| Hazard | Skill | Class | Pool |
|---|---|---|---|
| Dodging a trap, falling rocks or an explosion; keeping balance | Acrobatics | Juggler | :body |
| The same in the wild: a rockslide, a crumbling riverbank | Wilderness movement | Hunter | :body |
| Holding on, breaking free of a net or grapple, forcing a door | Strength | Fighter | :body |
| Poison, disease, cold, hunger | Endurance | Medic | :body |
| A long march, hard labour, a heavy load | Strength | Fighter | :body |
| Fear, charm, mind magic, temptation | Willpower | Incantor | :soul |
| Keeping face under threats, mockery or social pressure | Confidence and intimidation | Fighter | :charisma |
| Noticing a trap or an ambush in the wild | Wilderness survival | Hunter | :soul |
| Noticing a trap or an ambush in town | Urban survival | Juggler | :soul |
| Recalling war and soldiering | Warrior knowledge | Warrior | :soul |
| Recalling the occult and history | Scholarship | Incantor | :soul |
| Recalling wounds and illness | Healing the human body | Medic | :soul |
| Recalling beasts | Hunting | Hunter | :soul |


## Hidden roll
One more thing to know: so-called *hidden rolls*. These rolls are usually saving throws or skill checks, but conducted by the DM behind a screen so the player does not know whether the outcome is a result of the roll.

**You cannot exhaust against a hidden roll.**

Hidden rolls only shield the player from knowing what their character doesn't. When a failure would hurt (a trap, a poison), you roll the dice yourself and can exhaust as usual.

:::example[Searching for clues]{image="/img/rulebook/michal.webp"}
Michal's party has been contracted to investigate the curious case of disappearing children. Attempting to find any leads, Michal searches the room of a girl who has gone missing.

The DM rolls secretly behind the screen and explains that Michal has found nothing in the room. Michal's player therefore does not know whether there is truly nothing to be found, or Michal just sucks at playing detective.
:::

Should a challenge force a hidden roll, it is usually due to a hidden circumstance that prevents using the bonus skill. The DM secretly adds the bonus applied by the player to the other side, to cancel it out. Only the bonus is hidden: the rest of the challenge works as usual, and you can still exhaust to avert a loss.

:::example[Demon days]{image="/img/rulebook/michal.webp"}
Michal throws a knife at what he believes is an annoying rival bard. The bard is secretly a higher demon in human form.

As Michal's Juggler bonus applies only to humans and beasts, technically Michal should not be able to use this bonus. However, as stating that aloud would break the fourth wall to the players, the DM opts for a hidden roll.

Michal rolls :roll[d20 7] + 2 = 9, and the "bard" :roll[d20 5] + 3 *+ 2 (to compensate for Michal's bonus)* = 10.
:::

|cs|

Kostky rozhodují, co se stane, když výsledek není jistý. Hody jsou čtyř druhů a každý z nich přičítá úroveň [povolání](classes), ke kterému dovednost patří.

## Zkouška {#skill-check}

::image{src="/img/rulebook/skill-check.webp" alt="Dobrodruh páčí zámek" layout="header"}

::formula[2d6 + úroveň povolání ≥ 9]

Tvoje postava se snaží překonat překážku, která se nebrání: zamčené dveře, útes, dav, který je potřeba přesvědčit. Hoď dvěma šestistěnnými kostkami a přičti svou úroveň v povolání, ke kterému dovednost patří. 9 a víc je úspěch.

Nemáš povolání s tou dovedností? Pořád můžeš zkusit cokoli, co není jedinečná dovednost, jen bez bonusu: holé 2d6.

:::example[Kapsářství]{image="/img/rulebook/michal.webp"}
Michal (Kejklíř 2) se snaží vybrat kupci kapsu. Zručnost rukou je dovednost Kejklíře, takže hází 2d6 + 2.

Hodí :roll[d6 4 2] + 2 = 8. O jedna méně. Kupec ucítí na měšci cizí ruku.
:::

## Střet {#challenge}

::image{src="/img/rulebook/challenge.webp" alt="Dva bojovníci křižují meče" layout="side"}

::formula[d20 + úroveň povolání proti d20 + úroveň povolání]

Dvě strany přímo proti sobě: každý boj, ale taky páka, karetní hra nebo hádka. Obě strany hodí d20 a přičtou úroveň povolání. Vyšší výsledek vyhrává; **při shodě vyhrává obránce**.

Když proti tobě nikdo nehází (past, jed, bouře), jde o [nástrahu](hazards): zkoušku.

:::example[Rána po štítu]
Michal (Bojovník 4) se rozmáchne po banditovi (Bojovník 2). Michal hodí :roll[d20 11] + 4 = 15, bandita :roll[d20 13] + 2 = 15.

Shoda, a bandita se brání, takže čepel sklouzne po jeho štítu.
:::

## Iniciativa {#initiative}

::image{src="/img/rulebook/initiative.webp" alt="Hospodská rvačka těsně před začátkem" layout="header"}

::formula[d20]

Když začne boj, každý hodí holou d20. Nejvyšší jedná první a tak dál dolů. Úroveň povolání se nepřičítá.

## Zranění {#damage}

::formula[kostky zbraně nebo perku + úroveň povolání]

Když zasáhneš [NPC](npcs), hoď kostky zbraně a přičti úroveň povolání. Součet se odečte od jeho :body[Těla]. Hráčské postavy nemají životy; zranění se jim místo toho mění v [Jizvu](defending#how-bad-a-hit-is).

Zbraně používají tabulku z 5E, s dosahy v metrech (viz [jednotky](combat#units)). Každá pořádná zbraň navíc dává jeden [manévr](manoeuvres) zdarma:

::weapons

:::note[Který zdroj hod používá?]
Povolání dává bonus; dovednost určuje, který zdroj utratíš, když se hod nepovede. Mávání mečem je :body, čtení starých run :soul, ukecání strážného :charisma. Viz [Zdroje](resources).
:::$c$ where slug = 'dice';

update rulebook_pages set title = $t$Resources |cs| Zdroje$t$, content = $c$In Dungeons and Dragons: 5E your hero has Strength, Dexterity and Wisdom. Now guess what?

::image{src="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/71cfe5db-5f03-400c-b8bc-20f7fe592cb3.webp" alt="" layout="inline" width="300" align="left"}

Your character has three pools of effort instead, and spends them whenever they push themselves.

::::cards{cols="3"}
:::card[Body]{image="/img/rulebook/body.webp"}
Physical limits and reflexes: strength, speed, agility, coordination, armed combat, climbing, sleight of hand
:::
:::card[Soul]{image="/img/rulebook/soul.webp"}
Mind, focus and technical ability: knowledge, perception, languages, lockpicking, spellcasting, alchemy
:::
:::card[Charisma]{image="/img/rulebook/charisma.webp"}
Communicating, influencing and reading others: intimidation, negotiation, seduction, taming animals, deception
:::
::::

They are not hit points, nor skill.

Resources are how far your character can push *right now* and safely. If you want to avoid a bad outcome, you can [exhaust yourself](exhaustion). Exhaustion will always be equal to your [Danger Level](danger-level).

Running out of :body doesn't mean collapsing, and running out of :charisma doesn't make you mute. It means any further pushing is taking a toll and costs [Scars](exhaustion#scars).

They aren't skill either. How good you are comes from your [class level](classes); the pool is how long you can keep it up.

:::example[Two Juggler skills, two pools]{image="/img/rulebook/michal.webp"}
Michal (Juggler 4) has :body 3, :soul 5 and :charisma 7. 

Rope climbing and flirting are both Juggler skills, so both rolls get +4.

But a failed rope climb costs :body and a failed romance costs :charisma. This means Michal can probably flirt away the whole night before feeling any real embarrassment, but his feeble body will not endure much failed acrobatics.
:::

## The governing resource

The nature of the skill decides which pool is governing the activity and which one will pay, should you

:::note[Same shot, different pool]
A bow shot in a chaotic battle uses :body[]: it needs strength, balance and reflexes. The same shot in an archery contest uses :soul[]: focus and patience.
:::

## Starting pools and growth

- Every character starts with **15 points** to split freely between the three pools.
- There is **no cap and no minimum** per pool.
- **A pool under 2 is a risk.** A 0 pool overflows on its first Scar, which starts [dying](exhaustion#dying). The character editor warns about any pool under 2.
- A big pool doesn't make a character safe: the DM raises the Danger Level as a character takes more reckless actions.
- Later, a [level-up point](leveling) can buy +1 to a pool instead of a class level. Starting levels can't.

## Coins and Material

In addition to the three character resources, each player also balances two additional resources: :coins and :material.

::::cards{cols="2"}
:::card[Coins]{image="/img/rulebook/coin.webp"}
Representations of the amount of money you have.
:::
:::card[Material]{image="/img/rulebook/material.webp"}
Useful material of nondescript nature that you may use for crafting substances, making traps and more...
:::
::::

### Coins

:::note[]
"Money, money, money... money, money... is a ritchmen weld..."

&mdash;President Miloš Zeman, visiting Letohrad
:::

:coins are the representation of monetary possessions of your character. When speaking plainly in specific values, the term :coins refers to the silver coins which is a basic currency. Although the coins may look different across the world, their value lies within the metal.

There are also copper coins, which are the lower denomination (10 copper = 1 silver. And there are gold coins that are worth a lot (100 silver = 1 gold).

:::note[The value]
A gold coin is a lot of money. Average peasant will make a gold coin in three to four months.
:::

| Coin | Worth |
|---|---|
| 1 gold | 100 silver |
| 1 silver | 10 copper |

:::note[What will I pay?]
The prices may and will fluctuate region to region; poorer villages may need to charge you more.

Few other things affect the prices: the story context, your standing with the merchant, your overall reputation and looks,...

**And beware: not everything DM roleplays is the truth.** Greedy innkeeper may try to charge you tenfold should they feel you are gullible.
:::

### Material

:material is abstract supplies: herbs, wood, thread, scrap, reagents. **1 Material is worth 1 silver.** You don't track what exactly is in your pack; you say what it was when you spend it.

- Many crafted effects scale with the Material put in.
- Material can pay for [healing a Scar](healing) (1 point each, with the DM's blessing) and for [repairs](item-scars).
- Some perks cost Material to use instead of exhausting a pool, but usually it is for making stronger substances.

Specialised and rare alchemy ingredients MUST be obtained and cannot hide within the :material pool.

:::example[Linen, herbs and honey]
The party's Medic has 4 :material. When Michal comes back from the tavern bleeding, the Medic declares that 3 of it were clean linen, some fresh herbs and a pot of honey, and gets to work.
:::

|cs|

V 5E má tvůj hrdina Sílu, Obratnost a Moudrost. To tady neděláme. Tvoje postava má místo toho tři zásoby úsilí a utrácí je pokaždé, když ze sebe něco vymáčkne.

| Zdroj | Pokrývá |
|---|---|
| :body | Fyzické limity a reflexy: sílu, rychlost, mrštnost, koordinaci, ozbrojený boj, šplhání, zručnost rukou |
| :soul | Mysl, soustředění a technickou zručnost: znalosti, vnímání, jazyky, páčení zámků, sesílání kouzel, alchymii |
| :charisma | Komunikaci, ovlivňování a čtení druhých: zastrašování, vyjednávání, svádění, krocení zvířat, klam |

## Nejsou to životy ani dovednost {#not-hit-points-not-skill}

::image{src="/img/rulebook/body.webp" alt="Válečník lapající po dechu" layout="side"}

Zdroje říkají, jak moc se tvoje postava může vydat *právě teď*. Když ti dojde :body[Tělo], neznamená to, že se zhroutíš, a když ti dojde :charisma[Vliv], neoněmíš. Znamená to, že každé další úsilí stojí [Jizvy](exhaustion#scars).

Nejsou to ani dovednosti. Jak dobrý v něčem jsi, určuje [úroveň povolání](classes); zdroj říká, jak dlouho to vydržíš.

:::example[Dvě dovednosti Bojovníka, dva zdroje]{image="/img/rulebook/michal.webp"}
Michal (Bojovník 4) má :body 7, :soul 5 a :charisma 3. Boj s mečem i zastrašování jsou dovednosti Bojovníka, takže oba hody dostanou +4.

Jenže nepovedený souboj stojí :body[Tělo] a nepovedená výhrůžka stojí :charisma[Vliv]. Michal se rvačkou probije docela dlouho; jeho výhrůžky vyschnou po jednom nepovedeném smlouvání.
:::

## Řídící zdroj {#the-governing-resource}

Dovednost určuje, který zdroj platí, a situace to může změnit.

:::note[Stejný výstřel, jiný zdroj]
Výstřel z luku v chaotické bitvě používá :body[]: rovnováhu a reflexy. Tentýž výstřel na lukostřelecké soutěži používá :soul[]: soustředění a trpělivost.
:::

## Začátek a růst {#starting-pools-and-growth}

- Každá postava začíná s **15 body**, které volně rozdělí mezi tři zdroje.
- Žádný zdroj nemá **strop ani minimum**.
- **Zdroj pod 2 je riziko.** Zdroj 0 přeteče při první Jizvě, a to znamená [umírání](exhaustion#dying). Editor postavy varuje u každého zdroje pod 2.
- Velký zdroj postavu neochrání: PJ zvyšuje Ohrožení, čím víc si postava dovoluje.
- Později můžeš za [nový level](leveling) koupit +1 ke zdroji místo úrovně povolání. Počáteční levely to neumí.

## Mince a Materiál {#coins-and-material}

Mimo tři zdroje žijí dva vedlejší: :coins a :material. Viz [Mince a Materiál](resources#coins-and-material).$c$ where slug = 'resources';

update rulebook_pages set title = $t$Weapons |cs| Zbraně$t$, content = $c$::image{src="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/7ef66265-5e49-4917-a337-4d7b4e179ed0.webp" alt="" width="250" align="left"}

Below, find a table of the different weapons you can wield.

- **Damage** signifies the die you roll to determine the damage dealt
- **Type** is category of the damage. Some types of armour can grant a partial resistance or total immunity to a damage type, so pay close attention. Some monsters may also have an immunity.
- **Properties** determine how the weapon is used which may allow you for some extra bonuses; check the section below the table.
- **Free manoeuvre:** weapons grant none; you pay for [manoeuvres](manoeuvres) or get them free from perks. Only a **shield** grants one: a free Defense once per round.

::weapons

### Properties
Below, you will find the description of individual weapon properties:

#### Ammunition
Ammunition weapons count towards the *ranged attacks* skills. You can use this weapon only if you have ammunition to shoot from the weapon.

Each time you attack with the weapon, you expend one piece of ammunition. Drawing the ammunition from a quiver, case, or other container is part of the attack (you need a free hand to load a one-handed weapon). **Some perks may allow you to fire two pieces at once.**

At the end of the battle, you can recover half your expended ammunition by taking a minute to search the battlefield. If you use a weapon that has the ammunition property to make a melee attack, you treat the weapon as an improvised weapon, unless a perk modifies this rule.

#### Finesse
When attacking with finesse weapon, you may use either Fighter or Juggler as a roll bonus and damage bonus. You must use the same bonus for both, though.

#### Heavy
Halflings are clumsy when attacking with this weapon, unless specified by a perk. Every attack with this weapon is, therefore [Feeble](conditions). (A free manoeuvre from a perk doesn't cancel this.)

#### Light
Krolls are clumsy when attacking with this weapon, unless specified by a perk. Every attack with this weapon is, therefore [Imprecise](conditions). (A free manoeuvre from a perk doesn't cancel this.)

#### Loading
This weapon takes a while to reload before another attack can be launched from it. Loading is therefore considered an action.

#### Range
Ranged weapons count towards the *ranged attacks* or *thrown attacks* skills. Ranged weapons have two numbers associated with them in parentheses.

The first number is a **normal range**. The second one is **long range**. When attacking a target beyond normal range, you have disadvantage on the attack roll. You can’t attack a target beyond the weapon’s long range.

#### Reach
This weapon adds 1 m to your reach when you attack with it.

#### Thrown
If a weapon has the thrown property, you can throw the weapon to make a ranged attack and it counts towards the *thrown attacks* skills.

#### Two-Handed
This weapon requires two hands when you attack with it. Go figure...

#### Versatile
This weapon can be used with one or two hands. A damage value in parentheses appears with the property—the damage when the weapon is used with two hands to make a melee attack.

### Improvised weapons
The term improvised weapon is any object you can wield in one or two hands and bash someone with it. Things such as broken glass, a table leg, a frying pan, a wagon wheel, or a dead goblin.

Improper use of weapons, such as punching someone with a bow counts also as an attack with an improvised weapon.

Improvised weapons cannot be dealt [Scars](exhaustion#scars) and attack with a mere d4 (both unless specified otherwise by a perk).

### Unarmed strikes
A punch, a kick or a headbutt. It's foot close combat, so it uses your Fighter level.

::formula[1 + Fighter level]

- **No die:** an unarmed strike deals a flat 1 + your Fighter level as bludgeoning damage.
- **No free manoeuvre:** fists aren't a weapon.
- The Fighter perk *Rock fist* raises it to **d4 + Fighter level**.

### Silvered Weapons

:::note[]
"I believe in the sword. As you can see, I carry two. Every witcher does. It's said, spitefully, the silver one is for monsters and the iron for humans. But that's wrong. As there are monsters which can be struck down only with a silver blade, so there are those for whom iron is lethal..."

&mdash; Geralt of Rivia, *The Last Wish*
:::

Some monsters that have immunity or resistance to nonmagical weapons are susceptible to silver weapons, so cautious adventurers and professional monster slayers invest extra coin to plate their weapons with silver.

You can silver a single weapon or ten pieces of ammunition for 50 :coins[silver]. This cost represents not only the price of the silver, but the time and expertise needed to add silver to the weapon without making it less effective.$c$ where slug = 'weapons';

update rulebook_pages set title = $t$Advantage and disadvantage |cs| Výhoda a nevýhoda$t$, content = $c$Some situations, perks and conditions tip the odds. They may grant you a bonus to your roll or make your life harder. We call that **advantage** and **disadvantage**.

:::note[Advantage IS a manoeuvre]
Some perks might grant you advantage. Some may grant you free [Precise manoeuvre](manoeuvres).  Advantage on an action **is** the [Precise manoeuvre](manoeuvres); advantage on initiative **is** [Quick manoeuvre](manoeuvres).

Any advantage from a perk, a Blessing or the situation counts as a free Precise or Quick. Paying for one when you already have advantage changes nothing.
:::

With advantage, you roll one more die than you normally do and discard the worst one. With disadvantage the reverse is true:

| Roll | Advantage | Disadvantage |
|---|---|---|
| Skill check | Roll 3d6, keep the best two | Roll 3d6, keep the worst two |
| Challenge | Roll 2d20, keep the higher | Roll 2d20, keep the lower |
| Initiative | Roll 2d20, keep the higher | Roll 2d20, keep the lower |

:::note[You can pay for advantage]
Because advantage is a [manoeuvre](manoeuvres), you can easily pay for it. Need a bit of extra luck? Just spend one resource and it's yours, my friend.

*See: [Manoeuvres](manoeuvres)*
:::

- **They don't stack.** Three sources of advantage are still one advantaged roll.
- **Disadvantage always wins.** If a roll has **any** disadvantage, it's disadvantaged, however many sources of advantage it has. Advantage never cancels disadvantage. (In 5E one of each cancels out; not here.)
- This covers every source of advantage, paid or free: Precise, Quick, free manoeuvres from perks, a Blessing, attacking a prone target. Paying for advantage on a disadvantaged roll is wasted.


:::example[Keeping the best two]{image="/img/rulebook/michal.webp"}
Michal climbs a wall with a rope and his perk gives him free [Precise](manoeuvres). He claims the advantage and rolls :roll[d6 5 (1) 4].

He keeps the 5 and the 4. With his Juggler 2, that's 11, and he's over.
:::

|cs|

Některé situace, perky a stavy naklánějí šance. Fungují jako v 5E, přizpůsobené našim kostkám, s jedním velkým rozdílem: **nevýhoda vždycky vyhrává**.

## Výhoda a nevýhoda {#advantage-and-disadvantage}

| Hod | Výhoda | Nevýhoda |
|---|---|---|
| Zkouška | Hoď 3d6, nech si dvě nejlepší | Hoď 3d6, nech si dvě nejhorší |
| Střet | Hoď 2d20, nech si vyšší | Hoď 2d20, nech si nižší |
| Iniciativa | Hoď 2d20, nech si vyšší | Hoď 2d20, nech si nižší |

- **Nesčítají se.** Tři zdroje výhody jsou pořád jeden hod s výhodou.
- **Nevýhoda vždycky vyhrává.** Pokud má hod **jakoukoli** nevýhodu, je s nevýhodou, ať má zdrojů výhody kolik chce. Výhoda nevýhodu nikdy neruší. (V 5E se jedna a jedna vyruší; tady ne.)
- Platí to pro každý zdroj výhody, placený i zdarma: Přesně, Rychle, manévry zdarma z perků, Požehnání, [bonus](bonuses#merits), útok na ležící cíl. Platit za výhodu u hodu s nevýhodou je zbytečné.

:::example[Dvě nejlepší]
Michal šplhá po zdi s lanem, které drží kamarád: výhoda. Hodí :roll[d6 5 (1) 4] a nechá si 5 a 4. S Kejklířem 2 je to 11 a je nahoře.
:::

## Výhoda je manévr {#advantage-is-a-manoeuvre}

Výhoda u akce **je** [manévr Přesně](manoeuvres); výhoda u iniciativy **je** Rychle. Jakákoli výhoda z perku, Požehnání nebo situace se počítá jako Přesně nebo Rychle zdarma. Platit za ně, když už výhodu máš, nic nemění.

## Bonusové kostky {#bonus-dice}

Některé perky dávají **bonusovou kostku**, například d4 na 1. úrovni, která vyroste na d12 na 5. úrovni. Během střetnutí ji smíš přidat k **jakémukoli jednomu hodu**: iniciativě, zkoušce, střetu, čemukoli.

Jakmile se rozhodneš jí hodit, výsledek platí, dobrý i špatný.

:::note[Staré texty]
Stará pravidla jim říkala „kostky výhody“. Totéž.
:::$c$ where slug = 'advantage';

update rulebook_pages set title = $t$Creating a character |cs| Tvorba postavy$t$, content = $c$The [character editor](/characters/new) walks you through all of this and checks the numbers for you.

1. **Pick a starting level** with your DM; see the table below.
2. **Pick a [race](races)** and one of its racial perks.
3. **Spend your levels on [classes](classes).** Every starting level goes into a class level; advanced classes unlock from basic ones.
4. **Pick class perks:** one per level in each class.
5. **Split 15 points** between :body, :soul and :charisma. Exactly 15: starting levels can't buy more.
6. **Pick a [background](backgrounds)**: starting gear, coins, Material, extra languages and a setting you know.
7. **Pick any [traits](traits)** you like. They're optional.
8. **Write a short personality**: a few words to roleplay from. How they talk, what they want, what they can't stand. Playing it well may earn you [merit points](bonuses).

| Start | Level | Typical build |
|---|---|---|
| Rags to Riches | 3 | Points spread between two classes |
| Seasoned | 7 | Two basic classes and one advanced class |
| Veteran | 9 | Two basic classes and one advanced class, higher up |

|cs|

[Editor postavy](/characters/new) tě tím vším provede a čísla zkontroluje za tebe.

1. **Vyber počáteční level** spolu s PJ; viz tabulka níže.
2. **Vyber [rasu](races)** a jeden z jejích rasových perků.
3. **Utrať levely za [povolání](classes).** Každý počáteční level jde do úrovně povolání; pokročilá povolání se odemykají ze základních.
4. **Vyber perky povolání:** jeden za každou úroveň v každém povolání.
5. **Rozděl 15 bodů** mezi :body, :soul a :charisma. Přesně 15: počáteční levely víc nekoupí.
6. **Vyber [původ](backgrounds)**: počáteční výbavu, mince, Materiál, jazyky navíc a prostředí, které znáš.
7. **Vyber si libovolné [rysy](traits).** Jsou nepovinné.
8. **Napiš krátkou povahu**: pár slov, ze kterých se dá hrát. Jak mluví, co chce, co nesnáší. Dobré hraní přináší [bonusy](bonuses#merits).

| Začátek | Level | Typická postava |
|---|---|---|
| Z bláta do louže | 3 | Body rozdělené mezi dvě povolání |
| Ostřílený | 7 | Dvě základní povolání a jedno pokročilé |
| Veterán | 9 | Dvě základní povolání a jedno pokročilé, výš |

:::example[Michal na 7. levelu]{image="/img/rulebook/michal.webp"}
Člověk se *Znám jednoho chlápka*. Bojovník 4, Kejklíř 2, Válečník 1: 7 levelů, 7 perků. :body 7, :soul 5, :charisma 3.

Původ Zločinec, takže zná každého překupníka v dolním městě.

Povaha: „Okouzlující, dokud není. Dluží peníze nejmíň třem lidem.“
:::$c$ where slug = 'creating-a-character';

update rulebook_pages set title = $t$What this game is? |cs| Co jsme zač?$t$, content = $c$Welcome to Michal's D&D ruleset! I am Michal and I'll be your DM.

Think I am not autistic enough to just use a pre-existing ruleset and not be a special case? Think twice, mate!

If you have played 5E, most of the table will feel familiar: you roll dice, you fight things, you level up. 


Three things, however, work differently:

- **No attributes.** No Strength, no Dexterity, no rolling stats. Characters have three [resource pools](resources), :body, :soul and :charisma, which they spend to push through danger.
- **Roll bonuses come from classes.** Every roll adds a [class level](classes). Classes are bundles of skills, and characters mix them freely. They allow for much more natural bonus spreads than having many attributes.
- **The worse it gets, the more it costs.** The [Danger Level](danger-level) sets how much a character pays to avoid a bad outcome. Pay too much and you start collecting [Scars](exhaustion#scars).

::::cards{cols="3"}

::image{src="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/9af772c9-e4f9-4b48-a7fe-a096797a42f5.webp" alt="" layout="inline"}

::image{src="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/6972c2f8-760f-4789-8b2e-dd6199a2d286.webp" alt="" layout="inline"}

::image{src="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/b40f2184-2f18-4ba2-8714-5f0526f00b17.webp" alt="" layout="inline"}

::::


## Chapters

Need a quick reference? Find it below or just use the left navbar!

::chapters

|cs|

Vítej v Michalových pravidlech pro D&D! Jsem Michal a budu dnes Váš PJ.

Myslíte si, že nejsem dost autistický na to, abych prostě vzal existující pravidla a nebyl zvláštní případ? Think twice, mate.

Jestli znáš 5E, většina ti bude povědomá: házíš kostkami, bojuješ s věcmi, získáváš nové levely.

Pár věcí ale funguje trochu jinak:

- **Žádné atributy.** Žádná Síla, žádná Obratnost, žádné házení statů. Postavy mají tři [zdroje](resources), :body, :soul a :charisma, které utrácejí, aby se prodraly nebezpečím.
- **Bonusy k hodům dávají povolání.** Každý hod přičítá [úroveň povolání](classes). Povolání jsou balíčky dovedností a postavy je volně kombinují. Bonusy se tak rozloží mnohem přirozeněji než s hromadou atributů.
- **Opakovaný nezdar přichází draho.** [Ohrožení](danger-level) určuje, kolik postava zaplatí, aby se vyhnula špatnému výsledku. Vyčerpej se příliš a začneš sbírat [Jizvy](exhaustion#scars).

## Kapitoly {#chapters}

Potřebuješ rychle něco najít? Koukni níže, nebo použij navigaci vlevo!

::chapters$c$ where slug = 'index';
