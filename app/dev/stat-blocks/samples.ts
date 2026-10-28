// Sample stat blocks for the preview page, written as they would be on a
// rulebook page

export const SAMPLES: { title: string; markdown: string }[] = [
  {
    title: "NPC: ordinary",
    markdown: `
\`\`\`npc
name: Town guard |cs| Městský strážný
image: /img/classes/fighter.webp
subtitle: Human, ordinary |cs| Člověk, obyčejný
armour: Medium (2)
speed: 6 m
threat: d6
body: 11
soul: 4
charisma: 4
skills: Fighter skills +2
manoeuvres: Cunning (spear), Defense once a round (shield)
languages: Common tongue

## Actions
***Spear.*** Foot close combat, reach 1 m. Hit: 1d6 + 2 piercing. Free **Cunning**.

## Reactions
***Shield.*** Once a round, defends without spending its action.
\`\`\`
`,
  },
  {
    title: "NPC: important, wide",
    markdown: `
\`\`\`npc wide
name: Captain of the watch
image: /img/classes/warrior.webp
subtitle: Human, important
armour: Heavy (3)
speed: 6 m
threat: d8
fate: 2
body: 58
soul: 9
charisma: 10
skills: Fighter skills +4, Warrior skills +1
manoeuvres: Precise (longsword)
resistances: Charisma: intimidation (bonus 1)
senses: Notices bribes a mile off
languages: Common tongue, Liturgic

## Traits
***Seasoned.*** Advantage on initiative (a free **Quick**).

***Chain of command.*** While the captain stands, watchmen within earshot don't flee when their Charisma drops to 0; they fall back instead.

## Actions
***Longsword.*** Foot close combat, reach 1 m. Hit: 1d8 + 4 slashing, or 1d10 + 4 two-handed. Free **Precise**.

***To me!*** Calls a band of watchmen, who arrive in 1d4 rounds.

## Reactions
***Parry.*** Defends without spending its action. Costs 1 :soul as an ungranted Defense.
\`\`\`
`,
  },
  {
    title: "NPC: legendary (Strahd von Zarovich, converted from 5E)",
    markdown: `
\`\`\`npc wide
name: Strahd von Zarovich
image: /img/classes/black-priest.webp
subtitle: Vampire (undead), legendary. Lord of Barovia
armour: Natural (2)
speed: 6 m, climbing 6 m
threat: d10
fate: 3
body: 144
soul: 18
charisma: 20
skills: Influence and deception +8, Mage skills +7, Incantor skills +6, Fighter skills +5, Scholarship +8
manoeuvres: Cunning (unarmed strike: grapple)
resistances: Necrotic; bludgeoning, piercing and slashing from ordinary weapons
weaknesses: Sunlight, running water, a stake through the heart (see Traits)
senses: Darkvision 24 m
languages: Common tongue, Elven, Old tongues

## Traits
***Shapechanger.*** As an action, turns into a bat, a wolf or a cloud of mist, or back. His tracks stay the same; his speed and attacks follow the form.

***Misty escape.*** At 0 Body outside his resting place, he turns to mist instead of falling. He must reach his coffin within 2 hours, where he rests for an hour and wakes with 1 Body.

***Regeneration.*** Regains 20 Body at the start of his turn, unless radiant damage or holy water hit him since his last turn.

***Spider climb.*** Climbs any surface, even upside down, without a roll.

***Vampire weaknesses.***
- Can't enter a home without an invitation from someone who lives there.
- Takes 20 acid damage when he ends his turn in running water.
- A wooden stake driven into his heart while he's down paralyses him until it's pulled out.
- Takes 20 radiant damage when he starts his turn in sunlight, and has disadvantage on every roll there.

***Spellcasting.*** A full caster with Enchantment, Illusion, Conjuration and Necromancy magic (Mage skills +7). Perk spells: *Fireball*, *Greater invisibility*, *Polymorph*, *Animate dead*, *Blight*, *Scrying*. Each costs 1 :soul.

## Actions
***Multiattack*** (vampire form only). Two attacks, only one of them a bite.

***Unarmed strike.*** Reach 1 m. Hit: 1d8 + 4 bludgeoning. Free **Cunning**: he grapples the target instead.

***Bite.*** One willing, grappled, incapacitated or restrained target. Hit: 1d6 + 4 piercing and 3d6 necrotic, and Strahd regains as much Body as the necrotic damage. Against a player character it's a **Very mighty** hit: averting costs +2, or the Scar is 2 levels higher.

***Charm.*** A Charisma challenge against one person within 6 m who can see him, defended with Willpower. The loser is **Charmed** by Strahd until the next sunrise, or until he or his allies harm them.

***Children of the night*** (once a day). Calls a band of wolves, or a horde of bats or rats, which arrive in 1d4 rounds and obey him.

## Legendary actions
Three a round, one at the end of another creature's turn. Spent ones come back at the start of his turn.

- ***Move.*** Moves up to his speed without provoking attacks.
- ***Unarmed strike.*** As the action.
- ***Bite*** (costs 2). As the action.
\`\`\`
`,
  },
  {
    title: "Companion",
    markdown: `
\`\`\`companion
name: Trained wolf
image: /img/classes/ranger.webp
subtitle: Beast, animal companion
role: animal
armour: None (0)
speed: 10 m
threat: d6
bond: 3
payment: A day's ration
body: 11
soul: 3
charisma: 2
skills: Hunting +2, Wilderness movement +2
manoeuvres: Cunning (bite)
senses: Keen hearing and smell

## Traits
***Pack tactics.*** Advantage on attacks when its master or another ally stands within 1 m of the target.

## Actions
***Bite.*** Reach 1 m. Hit: 2d4 + 2 piercing. Free **Cunning**: knocks the target prone.
\`\`\`
`,
  },
  {
    title: "Unit",
    markdown: `
\`\`\`unit
name: Band of watchmen
subtitle: Human soldiers, enemy unit
size: band
members: About 30 town guards
armour: Medium (2)
speed: 6 m
threat: d8
body: 11
soul: 4
charisma: 6
skills: Fighter skills +2
manoeuvres: Cunning (spears), Widespread on every action

## Traits
***Shield wall.*** Most carry shields: one free Defense a round.

***Sergeant.*** A special member. While he stands, the band's Charisma can't drop below 1.

## Actions
***Spears.*** Every target the band can reach in melee. Hit: 2d6 + 2 piercing.
\`\`\`
`,
  },
  {
    title: "Network",
    markdown: `
\`\`\`network
name: The Harbour Rats
image: /img/classes/rogue.webp
subtitle: Smuggling ring, Reach 1
master: A Scout 3, Standing 1
bonus: +3
specialisation: Smuggling and fencing
bond: 2
payment: 3 silver
body: 3
soul: 5
charisma: 4

## Abilities
***Fences everywhere.*** Free **Precise** when selling stolen goods in any port town.

## Commanders
- **Old Mareček**, harbour master's clerk: knows every ship's cargo.
- **Kuna**, fence: buys anything, asks nothing.
\`\`\`
`,
  },
  {
    title: "Organization",
    markdown: `
\`\`\`organization
name: The watch of Krutá Hora
image: /img/classes/warlord.webp
subtitle: City watch, semi-independent of the royal administration
reach: 3
seat: The Lantern Tower by the old market
leader: Captain Jorgen Veit
structure: Strict hierarchy; a watchman can slowly rise through the ranks
rank 0: Watchman: patrols, arrests in the act
rank 1: Sergeant: leads a patrol; picks companions from its men
rank 2: Lieutenant: runs a district; chooses which cases get investigated
rank 3: Captain: issues city decrees, detains any citizen, attends the council as a guest
companions: Watchmen, informants, the jailer and his keys
rivals: The underworld families, the royal reeve

## Secrets
The captain's chair is bought, not earned. Half the sergeants are on someone's payroll.
\`\`\`
`,
  },
];
