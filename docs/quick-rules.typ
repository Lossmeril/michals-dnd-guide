// Quick rules: a printable player reference for the base game.
// Compile with: typst compile docs/quick-rules.typ
// Fonts: Libre Baskerville and Merriweather if installed, otherwise Baskerville or the
// Libertinus Serif that ships with Typst.

// ---------- Colours (from docs/visual-language.md) ----------
#let ink = rgb("#4a4138")
#let red = rgb("#8e2a1e")
#let reddark = rgb("#68211b")
#let gold = rgb("#cdb37a")
#let parch = rgb("#f5ebd1")
#let c-body = rgb("#c25a7c")
#let c-soul = rgb("#6a5acd")
#let c-cha = rgb("#b8860b")

#let heading-font = ("Libre Baskerville", "Baskerville", "Libertinus Serif", "Linux Libertine")
#let body-font = ("Merriweather", "Libertinus Serif", "Linux Libertine")

// ---------- Page and text ----------
#set document(title: "Quick rules", author: "Michal Špitálský")
#set page(
  paper: "a4",
  flipped: true,
  columns: 3,
  margin: (x: 1.2cm, top: 1.1cm, bottom: 1.1cm),
  footer: context {
    set text(size: 7pt, fill: ink.lighten(30%), font: heading-font)
    grid(
      columns: (1fr, 1fr, 1fr),
      align(left, upper[Quick rules]),
      align(center)[— #counter(page).display() —],
      align(right, smallcaps[Player reference]),
    )
  },
)
#set columns(gutter: 14pt)
#set text(font: body-font, size: 7.3pt, fill: ink, lang: "en")
#set par(justify: false, leading: 0.5em, spacing: 0.6em)
#set list(marker: text(fill: red)[•], indent: 0.2em, body-indent: 0.4em, spacing: 0.45em)
#set enum(indent: 0.2em, body-indent: 0.4em, spacing: 0.45em)
#show strong: set text(fill: reddark)

// ---------- Headings ----------
#show heading.where(level: 1): it => {
  v(0.7em, weak: true)
  block(sticky: true, below: 0.45em, width: 100%)[
    #text(font: heading-font, size: 11pt, fill: reddark, weight: "bold", upper(it.body))
    #v(-0.6em)
    #line(length: 100%, stroke: 1.2pt + gold)
  ]
}
#show heading.where(level: 2): it => {
  v(0.6em, weak: true)
  block(sticky: true, below: 0.4em,
    text(font: heading-font, size: 9pt, fill: red, weight: "bold", it.body))
}

// ---------- Helpers ----------
#let note(body) = text(size: 6.8pt, style: "italic", fill: ink.lighten(15%), body)
#let B = text(fill: c-body, weight: "bold")[Body]
#let S = text(fill: c-soul, weight: "bold")[Soul]
#let C = text(fill: c-cha, weight: "bold")[Charisma]
#let box-ex = box(width: 0.75em, height: 0.75em, stroke: 0.6pt + ink, baseline: 10%,
  place(line(start: (0%, 100%), end: (100%, 0%), stroke: 0.6pt + ink)))
#let box-sc = box(width: 0.75em, height: 0.75em, stroke: 0.6pt + ink, baseline: 10%, {
  place(line(start: (0%, 100%), end: (100%, 0%), stroke: 0.6pt + ink))
  place(line(start: (0%, 0%), end: (100%, 100%), stroke: 0.6pt + ink))
})

// A table: gold rule under the header, zebra rows.
#let t(columns: auto, align: left, head: (), ..rows) = {
  set text(size: 7pt)
  set par(leading: 0.4em)
  block(breakable: false, below: 0.6em, table(
    columns: columns,
    align: align,
    stroke: none,
    inset: (x: 3.5pt, y: 2.4pt),
    fill: (x, y) => if y > 0 and calc.even(y) { parch },
    ..if head.len() > 0 {
      (table.header(..head.map(h => text(font: heading-font, fill: reddark, weight: "bold", h))),
       table.hline(stroke: 0.9pt + gold))
    },
    ..rows.pos(),
    table.hline(stroke: 0.5pt + gold),
  ))
}

// ---------- Title ----------
#block(width: 100%, below: 0.6em)[
  #text(font: heading-font, size: 18pt, fill: reddark, weight: "bold", upper[Quick rules])
  #v(-0.9em)
  #line(length: 100%, stroke: 1.5pt + gold)
]

= Playing the game

== Dice rolls

#t(
  columns: (auto, 1fr),
  head: ([Roll], [How]),
  [Skill check], [2d6 + class level, success on *9+*],
  [Challenge], [d20 + class level against the opponent's; higher wins, a tie goes to the defender],
  [Initiative], [d20; higher acts first],
  [Damage (to NPCs)], [Weapon or spell dice + class level],
)
- The level added is the level of the class the skill belongs to.
- *Non-unique* skill without the class: roll plain dice. *Unique* skill: only that class can try.
- *No retrying* a failed roll for the same thing, unless the situation changes.
- *Critical hit:* a natural 20 (challenge) or double 6 (skill check) before damage gives a free *Mighty*.

== Advantage and disadvantage

#t(
  columns: (auto, 1fr, 1fr),
  head: ([Roll], [Advantage], [Disadvantage]),
  [Skill check], [3d6, keep the best two], [3d6, keep the worst two],
  [Challenge, initiative], [2d20, keep the higher], [2d20, keep the lower],
)
- Sources don't stack: three advantages are one advantaged roll.
- *Disadvantage always wins.* Any disadvantage cancels all advantage, paid or free.
- *Bonus die* (from an ability): add it to any one roll in the encounter. Once rolled, keep it.

== Resources

#t(
  columns: (auto, 1fr, 1fr),
  head: ([Pool], [Covers], [Scars look like]),
  B, [Strength, speed, agility, fighting, climbing, sleight of hand], [Wounds, illness, sprains, trembling hands],
  S, [Mind, focus, knowledge, perception, lockpicking, spellcasting], [Insomnia, anxiety, guilt, nightmares],
  C, [Talking, influencing, reading people, seduction, animals], [Mockery, ruined name, being outlawed],
)
- *15 points* to split at the start; no cap, no minimum (under 2 is risky).
- The situation picks the pool: a bow in a brawl is #B, in an archery contest #S.
- *Coins:* 1 gold = 100 silver, 1 silver = 10 copper. A day's wage is 1 sp.
- *Material:* abstract supplies (herbs, wood, parts); 1 Material = 1 sp. Say what it is when you spend it.

== Danger Level

#grid(
  columns: (auto, 1fr),
  column-gutter: 8pt,
  t(
    columns: (auto, auto),
    head: ([DL], [Feels]),
    [1], [Very easy],
    [2], [Normal],
    [3], [Reasonably difficult],
    [4], [Difficult],
    [5+], [Insane],
  ),
  [
    #set par(leading: 0.45em)
    - *Default 3.* What averting a failure costs.
    - Hostile, urgent, chaotic: up. Calming things down: down.
    - Can differ per character in one scene.
  ],
)

== Exhaustion, Scars, costs

#t(
  columns: (auto, 1fr),
  [#box-ex *Exhaust*], [To avert a failure, spend points equal to the *Danger Level* from the skill's pool. Mark each with one stroke.],
  [#box-sc *Scar*], [Pool too low? Cross out a box: it gives *2 temporary points*, spent now; leftovers are lost. Can go on an exhausted box. One Scar per failure (a bigger need means a higher level).],
  [*Cost to attempt*], [Paid *before* rolling, win or lose: armour encumbrance, sigils, hard circumstances. Comes on top of the Danger Level.],
  [*DM's Scar*], [A failure you don't avert: a Scar of the DM's choice. A level-N Scar blocks N boxes until healed.],
  [*Item Scar*], [Break an item involved in the action (lockpick for a lock): *2 points* for the pool the roll needed. Broken weapon = improvised (d4). Repair: 5 resources (Material) + a skill check.],
)

== Rest and healing

#t(
  columns: (auto, 1fr),
  head: ([What], [Heals]),
  [Poor rest], [3 exhausted points of your choice],
  [Quality rest (safe, comfortable, stress-free)], [All exhausted points],
  [Healing a Scar], [*5 points per Scar level* + one successful skill check per level, and dealing with the cause],
)
#note[Points for a Scar can come from any of your pools, a healer's perk, a healing substance, Material (with the DM's OK) or coins (drinks against a Soul Scar, a bribe against Charisma).]

== Dying

- Dying comes from *overflowing* a pool: a Scar bigger than the pool's unscarred boxes (exhausted ones count). A pool of 3 survives a level-3 Scar; a level-4 Scar overflows it.
- Out of points isn't dying: a level-1 Scar on your last unscarred box still gives 2 points.
- Every box scarred and you still pay? The action happens, then you start dying.

#t(
  columns: (auto, 1fr),
  head: ([Pool], [Dying phase]),
  B, [Unconscious, physically dying],
  S, [Catatonic state, madness],
  C, [Paralysing anxiety, ruined self-worth],
)
- Each turn: d20, no bonuses. *10+* success, three successes stabilise; three failures, it's over. Not in a row.
- Natural 20 = two successes; natural 1 = two failures. A hit in that pool = a failure.
- An ally can spend their turn on a skill check: Medic (#B), Incantor (#S), Scout (#C).

== Merit points

The DM awards them for good play and roleplay. Spend one for *one free resource point* of any pool. Per campaign, no cap.

== Saving throws

#block(sticky: true)[No attacker? A skill check with whichever class fits your approach. Defaults:]

#t(
  columns: (1.3fr, 1fr),
  head: ([Danger], [Skill (class)]),
  [Dodge a trap, falling rocks, a blast; keep balance], [Acrobatics (Juggler)],
  [Break free, hold on, force a door, a long march], [Strength (Fighter)],
  [Poison, disease, cold, hunger], [Endurance (Medic)],
  [Fear, charm, mind magic, temptation], [Willpower (Incantor)],
  [Keep face under threats or mockery], [Intimidation (Fighter)],
  [Notice a trap or ambush: wild / town], [Wilderness survival (Hunter) / Urban survival (Juggler)],
  [Recall: weapons / war / occult / medicine / beasts], [Fighter / Warrior / Incantor / Medic / Hunter],
)

= Combat

== Your turn

- Initiative: d20, higher first. Rounds of about 6 seconds.
- *One action* and *one movement*; movement can be split around the action.
- *Actions:* attack one target in reach, cast a spell, Dash, *Disengage* (move without free attacks), help, use an item…
- *Free attack:* an enemy leaving your reach provokes one melee attack, once a round, as a reaction.
- *Unarmed:* 1 + Fighter level. *Improvised weapon:* d4.

#t(
  columns: (1fr, auto, auto),
  head: ([Speed], [Turn], [Run]),
  [Dwarf, Halfling], [5 m], [10 m],
  [Human, Elf], [6 m], [12 m],
  [Kroll], [7 m], [14 m],
)

== Getting attacked

#t(
  columns: (auto, 1fr),
  [*Defend*], [A *defense roll*: a challenge with the skill that fits. It *takes your action*, unless you pay for *Defense* (or a shield gives it free).],
  [*Lose it*], [A failure: avert it with exhaustion (Danger Level − armour rating, at least 1) or a Scar.],
  [*Don't defend*], [The attacker makes a skill check (2d6 + bonus, 9+). A landed hit *can't be averted*: you take a Scar.],
  [*Scar level*], [Threat die − armour rating. 0 or less is absorbed (the DM may scar the armour).],
)
#note[Threat dice: d4 weak, d6 normal, d8+ big threats. Old 5E "saving throws" against a caster are defense rolls.]

== Manoeuvres

#t(
  columns: (auto, 0.8fr, 2fr),
  head: ([Manoeuvre], [Declare], [Effect]),
  [*Precise*], [Before the roll], [Advantage on the roll],
  [*Mighty*], [Before the roll], [NPC: +1 damage die (+1 at stake on #S / #C). Player character: averting costs +1; not averting, d4 more points exhausted from that pool],
  [*Cunning*], [After the attack lands], [A bonus action: knock prone; in close combat also grapple or push],
  [*Quick*], [Before initiative], [Advantage on initiative. Always *1 #S*],
  [*Defense*], [When targeted after your action is spent], [Defend without spending your action. As often as you can pay; a shield gives one free a round],
  [*Widespread*], [When describing the action], [The action affects several targets (needed for any multi-target action)],
)
- Each costs *1 point* of the action's pool, unless something makes it free.
- *One manoeuvre per action*, free ones included (Quick counts). Defense and a critical's free Mighty don't.
- *Any advantage is a free Precise*; on initiative, a free Quick. Paying for one you have does nothing.
- *Strong* (Very…) and *cruel* manoeuvres come only from perks.

== Armour

#t(
  columns: (auto, auto, auto, 1fr),
  head: ([Armour], [Protection], [Rating], [Encumbrance]),
  [None], [0], [0], [—],
  [Light], [1–3], [1], [—],
  [Medium], [4–6], [2], [Exhaust 1 #B],
  [Heavy], [7+], [3], [Exhaust 2 #B],
)
- *Pieces add up* (one per slot: under, body, head, arms, legs). Protection sets the rating; Burden sets the encumbrance on the same scale.
- *Encumbrance* is a cost to attempt for anything the armour hinders: stealth, acrobatics, swimming, running.
- Rating comes off a hit's Scar and off the #B cost of averting a hit (at least 1).
- *Load* works the same: medium load costs 1 #B, heavy 2. The worse of load and armour counts.

== Cover

#t(
  columns: (auto, 1fr, 1fr),
  head: ([Cover], [Example], [Effect]),
  [Half], [Low wall, barrel, someone in the way], [Attacks disadvantaged],
  [Three-quarters], [Arrow slit, thick trunk], [Disadvantaged, armour +1],
  [Total], [Closed door, full wall], [Can't be targeted],
)
#note[Behind half or three-quarters cover, rolls against area effects are advantaged.]

== Weapon properties

#t(
  columns: (auto, 1fr),
  [Finesse], [Attack and damage with Fighter or Juggler level],
  [Heavy / Light], [Halflings Feeble with Heavy; krolls Imprecise with Light],
  [Loading], [Reloading takes an action],
  [Ammunition], [One piece per shot; a minute after the fight recovers half],
  [Range], [Beyond normal range: disadvantaged; nothing past long range],
  [Reach], [+1 m reach],
  [Thrown, Two-handed, Versatile], [As in 5E],
)

== Conditions

#t(
  columns: (auto, 1fr),
  [Blinded], [Fails sight checks. Attacks against: Precise. Own attacks, initiative: disadvantaged],
  [Charmed], [Can't harm the charmer; their social checks against you are Precise],
  [Deafened], [Fails hearing checks. Attacks, initiative: disadvantaged],
  [Frightened], [Source in sight: checks, attacks, initiative disadvantaged; can't move closer],
  [Grappled], [Speed 0],
  [Incapacitated], [No actions or reactions],
  [Invisible], [Rolls against: disadvantaged. Own actions Precise, initiative Quick],
  [Paralyzed], [Incapacitated, can't move or speak, loses #B defense rolls. Attacks against Precise; within 1 m a critical],
  [Petrified], [As paralyzed, unaware; resists all damage],
  [Prone], [Crawl only; attacks disadvantaged. Against: Precise within 1 m, disadvantaged further],
  [Restrained], [Speed 0. Attacks against Precise; own attacks and #B defense disadvantaged],
  [Stunned], [Incapacitated, loses #B defense rolls. Against: Precise. Attacks, initiative disadvantaged],
  [Unconscious], [As paralyzed, unaware; drops everything, falls prone],
)

#t(
  columns: (auto, 1fr),
  head: ([Penalty], [Blocks the manoeuvre and…]),
  [Imprecise], [Rolls with the named skill disadvantaged],
  [Slow], [Initiative disadvantaged],
  [Feeble], [One damage die fewer (min 1); averting you costs 1 less],
  [Foolish], [Can't prone, grapple or push; whoever hits you gets a free Cunning],
)

#t(
  columns: (auto, 1fr, 1fr),
  head: ([Modifier], [Damage], [Averting cost]),
  [Weakness], [Doubled], [Doubled],
  [Resistance], [Halved], [Halved],
  [… bonus N], [—], [± N],
  [Immunity], [None], [None],
)
#note[Halving rounds in your favour. Averting always costs at least 1.]

= Magic

== Casting a spell

+ *Have the skill.* Magic skills are unique to their class (Medic potions and Incantor blessings excepted).
+ *Perform the components:* Verbal (gag blocks it), Somatic (bound hands), Material (spends Material), Ritual (minutes or more, not in a fight).
+ *Reach the target:* touch; symbolic touch (their hair, a loved ring; fades at the solstice); sight; or contact (they step into a sigil, drink the potion).
+ *Roll:* a skill check if nothing resists, a challenge against a resisting target. Avert a failure as usual.
+ *Pay the price,* if the spell has one: exhausted points or Material.

#t(
  columns: (auto, 1fr),
  head: ([Magic], [Casts]),
  [Dormant], [No magic (Fighter, Hunter, Juggler, Medic…)],
  [Awakened], [Core spells come with the class; more as perks],
  [Latent], [Witcher, Shaman: first enter *magic mode* with a level-1 Scar in any pool (no points). Lasts the conflict],
)
- *Core spells can't kill:* at most chip damage (d6). They work by raising the Danger Level and using the situation.
- *Perk spells* carry real damage dice.
- *Area spells:* every target makes a defense roll. An NPC who wins takes half; a player character who wins takes nothing.
- Hard circumstances (ice on a summer day) add a cost to attempt.

== How much, how long

#t(
  columns: (auto, 1fr),
  head: ([Size], [About]),
  [Palm], [A cup, a candle, a handful of earth],
  [Witch's hut], [The base: a 5 m cottage, one tree],
  [Farmstead], [A yard, 10 m. Needs *Widespread*],
  [Village], [Masters only],
)

#t(
  columns: (auto, 1fr),
  head: ([Duration], [Ends]),
  [Instant], [At once],
  [Short], [Next sunset or sunrise],
  [Long], [Next solstice or equinox],
  [Concentration], [When you stop; it takes your action],
  [End of combat], [When the fight ends],
  [Until dismissed], [When you end it; no action needed],
)
- *Concentration breaks* on any attack at you, hit or miss, unless you win a defense roll with your magic class level (costs the Defense manoeuvre). Also on a second concentration spell or being incapacitated.

== Sigils and ritual items

- *Sigil:* a drawn shape guarding a place or item. Its pool = Material put in (at most your #S). Alarm when someone enters; cast through it as if you were there. Each action through it costs 1 point to attempt. One at a time; ends at sunset or sunrise.
- *Ritual item* (Incantor): store 1 point at sunset or sunrise for 1 Material; up to 5 at a solstice or equinox. Stored points pay spell prices and manoeuvres.
- *Countering:* break the ritual (gag, grab, knock down), leave the range, or counter with magic (a won challenge).

= Substances and hazards

#t(
  columns: (auto, auto, auto, 1fr),
  head: ([Strength], [NPC damage], [Threat die], [Feel]),
  [1–2], [1d6–2d6], [d4], [A sting, a snare, acid],
  [3–4], [3d6–4d6], [d6], [Darts, a sleeping draught, a pit],
  [5–6], [5d6–6d6], [d8], [Black powder, deadly poison],
  [7–8], [7d6–8d6], [d10], [A powder keg, legendary work],
)
- *Strength = the Danger Level to avert it.* Resist with a fitting skill check; avert by exhausting the strength.
- Armour helps against darts, blades, rocks and blasts, not poison, gas, acid, fire or falls.
- *Spot it* (hidden roll, Soul); *disarm* with Mechanisms; failing sets it off.

#t(
  columns: (auto, 1fr),
  head: ([Substance], [Rules]),
  [Poison], [1 Material per strength per dose. Swallowed (Medic), contact via wound, mouth, eyes (Rogue), breathed (Alchemist). Works at the next sunset or sunrise unless *Fast*],
  [Bomb, acid, gas], [Alchemist, 2 Material per strength; at once; 1 weaker per metre out],
  [Healing potion], [1 Material per stored point; heals one kind of Scar],
  [Elixir], [Your next action: a free manoeuvre (2), its Very version (3), or a superhuman ability (5)],
)

== Crafting

- Place, tools, time and Material. Gear costs about two thirds of its price in Material.
- With time, tools and a rest after: it just works. In a hurry: a skill check, 1 Material per round.
- Improvised materials (0 Material): strength-1 hazards until sunset or sunrise; consumables do nothing.

= Growing

Each level-up gives *one point*:
+ +1 level in a class (max 5) and *one perk* of it.
+ A new class at level 1 (advanced: two basics total 6 levels; mighty: its advanced classes total 6).
+ An extra perk in a class at level 5.
+ +1 #B, #S or #C.

== Basic classes

#t(
  columns: (auto, 1fr),
  head: ([Class], [Skills (★ unique)]),
  [Fighter], [Close combat vs humans and beasts (#B), Strength (#B), Weapon knowledge (#S), Confidence and intimidation (#C)],
  [Hunter], [Ranged combat vs humans and beasts (#B), Wilderness movement (#B), Wilderness survival (#S), Hunting (#S), Animal handling, training (#C)],
  [Juggler], [Throwing vs humans and beasts (#B), Acrobatics (#B), Tricks and sleight of hand (#B), Urban survival (#S), Influence and deception (#C)],
  [Medic], [Endurance (#B), Healing the human body (#S), Potions and poisons (#S), Negotiation (#C)],
  [Incantor], [Scholarship, Healing of the soul, Willpower (#S), Ritual items ★ (#S), Dealing with supernatural beings (#C)],
)
#note[Two basic classes totalling 6 levels open their advanced class (Fighter + Juggler = Warrior, and so on).]

== Travel pace

#t(
  columns: (auto, 1fr, 1fr),
  head: ([Pace], [Noticing, navigating, tracking], [Sneaking]),
  [Slow], [Advantage], [Yes],
  [Normal], [Plain roll], [Disadvantaged],
  [Fast], [Disadvantage; no foraging], [No],
)
#note[A day is 8 hours on the move. Each hour past that costs 1 #B to attempt.]
