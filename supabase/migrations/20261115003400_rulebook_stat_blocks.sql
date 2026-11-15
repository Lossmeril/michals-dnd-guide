-- Rulebook (2026-11-15): a sample stat block on each page that describes one,
-- built from the examples the pages already use.

update rulebook_pages set content = replace(content, $o$## Skill bonuses$o$, $n$A town guard, the most ordinary NPC there is, looks like this:

```npc
name: Town guard |cs| Městský strážný
image: /img/classes/fighter.webp
subtitle: Human, ordinary |cs| Člověk, obyčejný
emblem: /img/emblems/watch-kruta-hora.svg
allegiance: The watch of Krutá Hora
armour: Medium (2)
speed: 6 m
threat: d6
body: 11
soul: 4
charisma: 6
skills: Fighter skills +2
manoeuvres: Defense once a round (shield)
languages: Common tongue

## Actions
***Spear.*** Foot close combat, reach 1 m. Hit: 1d6 + 2 piercing.

## Reactions
***Shield.*** Once a round, defends without spending its action.
```

## Skill bonuses$n$)
where slug = 'npcs';

update rulebook_pages set content = replace(content, $o$## Kinds and turn order$o$, $n$Michal's wolf Sněhurka, written as a companion:

```companion
name: Sněhurka
image: /img/classes/ranger.webp
subtitle: Wolf, Michal's animal companion
role: animal
armour: None (0)
speed: 8 m
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
***Pack tactics.*** A free **Precise** on attacks when Michal or another ally stands within 1 m of the target.

## Actions
***Bite.*** Reach 1 m. Hit: 2d4 + 2 piercing. Free **Cunning**: knocks the target prone.
```

## Kinds and turn order$n$)
where slug = 'companions';

update rulebook_pages set content = replace(content, $o$## In a fight$o$, $n$The band of watchmen from the example below, as a unit. Its :body is four guards' worth; its :soul and :charisma are one guard's:

```unit
name: Band of watchmen
subtitle: Human soldiers, enemy unit
emblem: /img/emblems/watch-kruta-hora.svg
allegiance: The watch of Krutá Hora
size: band
members: About 30 town guards
armour: Medium (2)
speed: 6 m
threat: d8
body: 44
soul: 4
charisma: 6
skills: Fighter skills +2
manoeuvres: Widespread on every action

## Traits
***Shield wall.*** Most carry shields: one free Defense a round.

***Sergeant.*** A special member. While he stands, the band's :charisma can't drop below 1.

## Actions
***Spears.*** Every target the band can reach in melee. Hit: 2d6 + 2 piercing.
```

## In a fight$n$)
where slug = 'units';

update rulebook_pages set content = replace(content, $o$## Bond and payments$o$, $n$The smuggling ring from the example below, written out:

```network
name: The Harbour Rats
image: /img/classes/rogue.webp
subtitle: Smuggling ring, Reach 1
emblem: /img/emblems/harbour-rats.svg
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
```

## Bond and payments$n$)
where slug = 'networks';

update rulebook_pages set content = content || $n$

## The stat block

An organization's stat block lists its Reach, who leads it, and what each rank allows. The city watch of Krutá Hora:

```organization
name: The watch of Krutá Hora
image: /img/classes/warlord.webp
subtitle: City watch, semi-independent of the royal administration
emblem: /img/emblems/watch-kruta-hora.svg
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
```$n$
where slug = 'organizations' and position('```organization' in content) = 0;

update rulebook_pages set content = replace(content, $o$## Using it$o$, $n$A ritual item gets a card of its own on the character sheet, to fill in by hand. Kolva's staff:

```ritual-item
name: Staff of the Ashen Oak |cs| Hůl popelavého dubu
emblem: /img/emblems/order-of-ash.svg
allegiance: Order of the Ash
subtitle: Kolva's ritual item
```

## Using it$n$)
where slug = 'ritual-items';
