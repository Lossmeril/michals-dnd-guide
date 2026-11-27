# Pricelist

What things cost in Michal's ruleset. The world is Central Europe around 1300–1400: Bohemia, Moravia, Silesia and Lesser Poland, with the serial numbers filed off.

> **Status: draft, 2026-11-17.** Built from three sources:
> - **Michal's *Central European Pricelist & Economy (1300–1400) for 5E*** (2026-10-31), the researched historical source. **Where the sources disagree, it wins.**
> - **The item list in the app** (`items.price_copper`), for items the source doesn't price.
> - **Price rules settled since** in [ruleset-overview.md](ruleset-overview.md): Material, crafting, silvering, domains, companions, substances.
>
> Prices marked *(est.)* are game estimates, not historical figures: worked out from wages (a craftsman's 2–3 sp a day), materials and the nearest listed item. Changes the app's item list needs are collected in [To settle](#to-settle) at the end.

## 1. Coins

| Coin | Worth | In the world |
|---|---|---|
| **Copper (cp)** | — | A heller (*haléř*). A mug of cheap beer |
| **Silver (sp)** | 10 cp | A Prague groschen (*groš*). A day's unskilled wage. **The everyday coin** |
| **Gold (gp)** | 100 sp | No real coin this big existed: a heavy "great gold", or a bookkeeping unit. 3–4 months of a labourer's pay |

- **A kopa** (*kopa*) is 60 sp, a counting unit: "three kopy" is 180 sp.
- **A florin** (gold trade coin) is 16 sp by default: 14 around 1360, 18 around 1385, 22–24 after 1400. Used by merchants and nobles.
- **1 Material = 1 sp.** Material is abstract stock (herbs, wood, iron, hides), declared when it's spent.
- **Prices in this file** are given in the cheapest clean unit: 3 cp, 15 sp, 12 gp.

**What money buys, at a glance:**

| Amount | Buys |
|---|---|
| 1 cp | A mug of beer, a bread roll, a torch, a foot toll |
| 1 sp | A day's wage, a chicken, a day's rations, a modest day's living |
| 10 sp | A shortbow, a shield, a calf, a plough |
| 1 gp | Two cows, a longsword with change, a year's rent on a peasant holding |
| 10 gp | A simple house in a big town, a cheap warhorse |
| 100 gp | A showpiece burgher house, a small village |

## 2. How prices work

### Buying and selling

- **List price** is what a shop in a big town asks in peacetime. [Prices move](#11-prices-move) with season, region and events.
- **Selling:** a pawnbroker or a casual buyer pays **half** the list price.
- **Swords don't sell** *(confirmed, 2026-11-15)*. Only a knight, a noble or an armourer pays what a sword is worth (half the list price, as above). Anyone else pays for its iron, about **a tenth**, in coin or Material.
- **Haggling:** the DM may roll 2d6 for the day's price. A won haggling roll moves the result one step in the buyer's favour. Fitting skills are the Juggler's *Influence and deception* or the Medic's *Negotiation*; a known setting may give a temporary +1 if the DM allows it.

  | 2d6 | 2 | 3–4 | 5–9 | 10–11 | 12 |
  |---|---|---|---|---|---|
  | Price | −30% | −15% | List | +15% | +30% |

- **NPCs can lie about prices,** and the price also depends on the character's standing with the merchant, their reputation and their looks.
- **Rare ingredients** for alchemy and magic aren't for sale by the Material. They're found in play.

### Making instead of buying

- **Plain gear** takes about **two thirds of its list price in Material**, plus tools, a place and time (see *Crafting* in the ruleset). A 15 sp lantern takes 10 Material.
- **Substances** (potions, poisons, bombs, elixirs) say how much Material they need; see [section 9](#9-substances-and-services-of-the-craft).
- **Repairing** a broken item costs **5 Material** and a skill check with the class that governs the craft.

### Re-pricing a 5E item that isn't listed

1. **Start from the 5E price:** X gp becomes **X × 10 sp**. 5E copper and silver prices stay roughly as they are.
2. **Then correct by category.** 5E overcharges these: armour, horses, livestock, food and lifestyle. It undercharges these: clothing and books, because cloth and parchment took a lot of work.
3. **Compare with a neighbour** in this list. A swept-hilt sword costs about what a rapier does.

## 3. Weapons

Swords are the expensive weapon: a longsword is about four months of a labourer's wage. Village iron and polearms are cheap. Bohemian lists give a knife 2–4 groschen, an axe 6 and a sword from 2 kopy (120 sp).

- **Fortune:** a sword (shortsword, longsword, greatsword, rapier, scimitar) needs a **fortunate** arms fortune at character creation. The hunting sword (*tesák*) counts as a knife.
- **Silvering** a weapon, or ten pieces of ammunition: **50 sp**.

**Simple weapons**

| Weapon | Price | Damage | Properties |
|---|---|---|---|
| Club | 2 cp | 1d4 bludgeoning | Light |
| Quarterstaff | 2 cp | 1d6 bludgeoning | Versatile (1d8) |
| Greatclub | 5 cp | 1d8 bludgeoning | Two-handed |
| Pitchfork | 5 cp | 1d6 piercing | Two-handed |
| Sling | 1 cp | 1d4 bludgeoning | Ammunition (6/24 m) |
| Dagger | 3 sp | 1d4 piercing | Finesse, Light, Thrown (4/12 m) |
| Javelin | 3 sp | 1d6 piercing | Thrown (6/24 m) |
| Light hammer | 3 sp | 1d4 bludgeoning | Light, Thrown (4/12 m) |
| Sickle | 3 sp | 1d4 slashing | Light |
| Spear | 4 sp | 1d6 piercing | Thrown (4/12 m), Versatile (1d8) |
| Handaxe | 5 sp | 1d6 slashing | Light, Thrown (4/12 m) |
| Shortbow | 10 sp | 1d6 piercing | Ammunition (16/64 m), Two-handed |
| Mace | 15 sp | 1d6 bludgeoning | — |
| Light crossbow | 40 sp | 1d8 piercing | Ammunition (16/64 m), Loading, Two-handed |

**Martial weapons**

| Weapon | Price | Damage | Properties |
|---|---|---|---|
| Pick | 8 sp | 1d8 piercing | Also digs |
| Maul | 10 sp | 2d6 bludgeoning | Heavy, Two-handed |
| Billhook | 12 sp | 1d8 slashing | Reach, Two-handed |
| Longbow | 15 sp | 1d8 piercing | Ammunition (30/120 m), Heavy, Two-handed |
| Lance | 6 sp | 1d12 piercing | Reach; disadvantaged within 1 m; two-handed unless mounted |
| Morgenstern | 15 sp | 1d8 piercing | — |
| Voulge | 15 sp | 1d10 slashing | Heavy, Reach, Two-handed |
| Warhammer | 15 sp | 1d8 bludgeoning | Versatile (1d10) |
| Battleaxe | 20 sp | 1d8 slashing | Versatile (1d10) |
| Bardiche | 20 sp | 1d10 slashing | Heavy, Two-handed |
| Flail | 20 sp | 1d8 bludgeoning | — |
| Glaive | 25 sp | 1d10 slashing | Heavy, Reach, Two-handed |
| Halberd | 25 sp | 1d10 slashing | Heavy, Reach, Two-handed |
| Greataxe | 30 sp | 1d12 slashing | Heavy, Two-handed |
| Hunting sword (*tesák*) | 30 sp | 1d6 slashing | Finesse, Light |
| Shortsword (messer, falchion) | 60 sp | 1d6 piercing | Finesse, Light. *Fortunate* |
| Heavy crossbow | 80 sp | 1d10 piercing | Ammunition (20/80 m), Heavy, Loading, Two-handed |
| Longsword | 120 sp | 1d8 slashing | Versatile (1d10). *Fortunate* |
| Scimitar (sabre) | 120 sp | 1d6 slashing | Finesse, Light. *Fortunate* |
| Greatsword | 200 sp | 2d6 slashing | Heavy, Two-handed. *Fortunate* |
| Rapier (a luxury sword, rare this early) | 200 sp | 1d8 piercing | Finesse. *Fortunate* |

**Not in the item list yet.** Damage and properties as 5E's, ranges at 5 ft = 1 m.

| Weapon | Price | Damage | Properties |
|---|---|---|---|
| Dart | 1 cp | 1d4 piercing | Finesse, Thrown (4/12 m) |
| Whip | 3 sp | 1d4 slashing | Finesse, Reach |
| Net | 5 sp | — | Thrown (1/3 m); a hit Restrains a Medium or smaller target |
| Blowgun | 5 sp | 1 piercing | Ammunition (5/20 m), Loading. Mostly a way to deliver poison |
| Pike | 8 sp | 1d10 piercing | Heavy, Reach, Two-handed |
| Trident, fishing spear | 8 sp | 1d6 piercing | Thrown (4/12 m), Versatile (1d8) |
| Morningstar | 15 sp | 1d8 piercing | — |
| War pick | 15 sp | 1d8 piercing | — |
| War flail, threshing flail *(est.)* | 3 sp | 1d8 bludgeoning | Two-handed. A peasant's weapon; the Hussites made it famous |
| Hand crossbow (a rare curiosity) | 150 sp | 1d6 piercing | Ammunition (6/24 m), Light, Loading |
| Khopesh *(est.)* | 120 sp | 1d6 slashing | Finesse, Light. Priced as a scimitar. *Fortunate* |

**Weapon accessories** *(est.)*: a scabbard 2 sp, a sword belt 1 sp, a spare bowstring 5 cp, a bolt case 1 sp, a crossbow's cranequin (a winder for the heavy crossbow) 20 sp.

**Ammunition**

| Item | Price |
|---|---|
| Arrows (20) | 3 sp |
| Bolts (20), iron | 2 sp |
| Bolts (20), steel-tipped | 4 sp |
| Sling bullets (20) | 2 cp |
| Quiver *(est.)* | 1 sp |
| Blowgun needles (50) | 2 sp |
| Fire arrows (10) *(est.)*: oil-soaked tow, light thatch but don't deal more damage | 2 sp |
| Ballista bolt, one *(est.)* | 2 sp |

## 4. Armour and shields

Armour is bought **piece by piece**: one piece per slot (under, body, head, arms, legs). The pieces' **Protection** adds up to the armour rating, and their **Burden** to the encumbrance. Both use the same tiers: **1–3 light, 4–6 medium, 7+ heavy**.

- **Fitted plate harness:** plate on the body, a bascinet and plate arms and legs, fitted by an armourer, gives −3 Burden. **Refitting** second-hand plate costs **30 sp and a week**.
- **Fortune:** at character creation, a poor arms fortune allows a padded hood or a gambeson, commoner up to Protection 3, fortunate up to Protection 6.

| Piece | Slot | Protection | Burden | Price |
|---|---|---|---|---|
| Padded hood | Head | 1 | 1 | 4 sp |
| Padded coif | Head | 1 | 1 | 6 sp |
| Iron cap | Head | 1 | 1 | 30 sp |
| Kettle hat | Head | 1 | 1 | 30 sp |
| Mail coif | Head | 1 | 1 | 40 sp |
| Bascinet with mail aventail *(harness)* | Head | 2 | 2 | 48 sp |
| Mask helmet | Head | 2 | 2 | 50 sp |
| Closed bascinet, visored *(harness)* | Head | 3 | 3 | 80 sp |
| Gambeson | Under | 1 | 1 | 30 sp |
| Hide jerkin | Body | 1 | 1 | 15 sp |
| Leather jerkin | Body | 1 | 1 | 30 sp |
| Mail shirt (haubergeon) | Body | 2 | 2 | 150 sp |
| Scale shirt | Body | 2 | 2 | 150 sp |
| Brigandine *(est.)* | Body | 3 | 3 | 160 sp |
| Coat of plates *(harness)* | Body | 3 | 3 | 200 sp |
| Breastplate *(harness)* | Body | 3 | 3 | 200 sp |
| Mail hauberk, long and sleeved | Body + arms | 3 | 3 | 240 sp |
| Plate arms with gauntlets *(harness)* | Arms | 1 | 1 | 90 sp |
| Mail chausses | Legs | 1 | 1 | 60 sp |
| Plate legs *(harness)* | Legs | 1 | 1 | 110 sp |

**Example sets**

| Set | Rating | Encumbrance | Price |
|---|---|---|---|
| Gambeson + kettle hat | 1 | — | 60 sp |
| Militia: gambeson + mail shirt + kettle hat | 2 | 1 Body | 210 sp |
| Gambeson + coat of plates + kettle hat | 2 | 1 Body | 260 sp |
| Man-at-arms: gambeson + hauberk + bascinet + chausses | 3 | 2 Body | 378 sp |
| Full fitted plate: gambeson + coat of plates + bascinet + plate arms + plate legs | 3 | 1 Body | 478 sp |
| A bespoke knightly harness | 3 | 1 Body | 45 gp: prestige only, no better in the rules |

**Shields**

| Shield | Price | Notes |
|---|---|---|
| Buckler | 5 sp | Light |
| Targe | 8 sp | Light |
| Round shield | 10 sp | — |
| Heater shield | 15 sp | — |
| Kite shield | 15 sp | — |
| Pavise *(est.)* | 40 sp | Heavy. Carried, a shield; planted, half cover |
| Mantlet *(est.)* | 15 sp | Not worn. Three-quarters cover for one or two |
| Siege mantlet *(est.)* | 60 sp | Wheeled, half speed. Total cover from the front for four |

**Upkeep:** about 1 sp a week on the road for mail or plate, more after hard fights. Full plate marks its wearer as rich: tolls, prices and bandit interest rise.

## 5. Gear, tools and kits

**Adventuring gear**

| Item | Price | Item | Price |
|---|---|---|---|
| Torch | 1 cp | Rope (15 m) | 4 sp |
| Dice | 1 cp | Shovel | 4 sp |
| Quill | 1 cp | Bedroll | 5 sp |
| Loaded dice | 5 cp | Blanket | 3 sp |
| Pouch | 1 sp | Crowbar | 5 sp |
| Rations (1 day) | 1 sp | Hunting trap | 5 sp |
| Oil (flask) | 1 sp | Playing cards (new in the 1370s) | 5 sp |
| Ink (bottle) | 1 sp | Iron pot | 8 sp |
| Parchment (sheet) | 1 sp | Lantern | 8 sp |
| Sealing wax | 1 sp | Manacles | 8 sp |
| Glass jar | 1 sp 5 cp | Steel mirror | 15 sp |
| Tinderbox | 2 sp | Tent (two-person) | 20 sp |
| Rank insignia | 2 sp | Ledger | 20 sp |
| Waterskin | 3 sp | Signet ring (silver) | 50 sp |
| Holy symbol (pewter) | 3 sp | Silvering | 50 sp |
| Backpack | 4 sp | Book (any subject) | 150 sp |

**Not in the item list yet.** From the source unless marked *(est.)*.

| Item | Price | Item | Price |
|---|---|---|---|
| Candle, tallow | 1 cp | Hammer *(est.)* | 1 sp |
| Chalk *(est.)* | 1 cp | Iron spikes (10) *(est.)* | 1 sp |
| String (15 m) *(est.)* | 1 cp | Caltrops (a bag of 20) *(est.)* | 1 sp |
| Whistle *(est.)* | 1 cp | Scroll or map case *(est.)* | 1 sp |
| Paper (sheet) | 2 cp | Wax tablet and stylus *(est.)* | 1 sp |
| Clay jug, clay lamp *(est.)* | 2 cp | Glass bottle *(est.)* | 2 sp |
| Soap *(est.)* | 2 cp | Abacus *(est.)* | 2 sp |
| Candle, wax | 5 cp | Barrel *(est.)* | 2 sp |
| Sack | 5 cp | Grappling hook | 5 sp |
| Bucket *(est.)* | 5 cp | Rope ladder (5 m) *(est.)* | 5 sp |
| Basket *(est.)* | 5 cp | Bell, brass *(est.)* | 5 sp |
| Ladder (3 m) *(est.)* | 5 cp | Perfume (vial) *(est.)* | 5 sp |
| Pole (3 m) *(est.)* | 5 cp | Block and tackle *(est.)* | 10 sp |
| Fishing tackle *(est.)* | 5 cp | Chain (3 m) | 10 sp |
| Prayer beads *(est.)* | 5 cp | Chest, plain | 10 sp |
| | | Component pouch | 10 sp |
| | | Hourglass (a luxury) *(est.)* | 10 sp |
| | | Lock | 15 sp |
| | | Lantern, bullseye | 15 sp |
| | | Silk rope (15 m) | 50 sp |
| | | Holy symbol, silver | 60 sp |
| | | Chest with a lock | 60–120 sp |
| | | Spellbook (blank) | 200 sp |
| | | Reading stone (a magnifying lens) *(est.)* | 10 gp |
| | | A Bible | 1,440 sp |

**Kits** are bundles of pieces. The source's price wins where it names the same kit; for the others, the price is the sum of the pieces.

| Kit | Contents | Price |
|---|---|---|
| Potter's tools | Ribs and scrapers, cutting wire | 2 sp 5 cp |
| Brewer's supplies (for the road) | Mash paddle, funnel and sieve, ladle | 3 sp |
| Bowyer's tools | Drawknife, bowstring wax, fletching feathers | 4 sp 5 cp |
| Surveyor's tools | Knotted measuring cord, plumb line, water level | 5 sp |
| Tailor's tools | Shears, needle and thread, fabric scraps | 6 sp |
| Healer's kit | Splints, needle and thread, a lancet, linen bandages | 10 sp |
| Herbalism kit | Leather gloves, clippers, mortar and pestle, 3 glass jars, 2 pouches | 10 sp |
| Leatherworker's tools | Leather knife, awl, needle and thread, cobbler's last | 10 sp |
| Smith's tools (for the road) | Smith's hammer, tongs, file | 12 sp |
| Cartographer's tools | Drawing compasses, ruler, quill, ink, 5 sheets of parchment | 12 sp 1 cp |
| Cook's utensils | Kitchen knives, iron pot, ladle, spice box | 16 sp 5 cp |
| Writing things (calligrapher's supplies) | 10 quills, ink, coloured inks, a penknife, 5 sheets of parchment | 20 sp |
| Mason's tools | Mason's hammer, chisels, trowel, mason's square | 20 sp |
| Navigator's tools | Lodestone compass, sounding line, ruler | 24 sp |
| Carpenter's tools | Saw, plane, chisels, auger, claw hammer | 25 sp |
| Disguise kit | Face paints and powders, hair dye, false beard and wig, small mirror on a handle | 30 sp |
| Thieves' tools | File, lockpicks, small mirror on a handle, scissors, pliers | 30 sp |
| Forgery kit | Blank seals, wax-carving tools, sealing wax, 10 quills, ink, 5 sheets of parchment | 40 sp |
| Merchant's kit | Balance scales and weights, counting cloth and tokens, ledger | 40 sp |
| Tinker's tools | Small hammer, snips, solder, a few rivets | 40 sp |
| Poisoner's kit | Vials, gloves, a small mortar, a dropper, a scale | 60 sp |
| Goldsmith's tools | Jeweller's files, jeweller's saw, tweezers, touchstone | 80 sp |

**Workshops** don't travel, and a craftsman on the road rents one.
- **From the source:** a smithy's anvil and full kit 100 sp, an alchemist's supplies 100 sp, a weaver's loom 60 sp, a brewer's full set with a copper kettle 60 sp.
- **Renting** *(est.)*: a smithy or another workshop for a day costs 2–3 sp with fuel. That comes from the source's 20–40 sp a month, plus fuel and the owner's grumbling.

**Instruments**

| Instrument | Price | Instrument | Price |
|---|---|---|---|
| Flute | 2 sp | Bagpipes | 30 sp |
| Drum | 5 sp | Lyre | 40 sp |
| Hunting horn | 5 sp | Dulcimer | 40 sp |
| Shawm | 10 sp | Fiddle | 50 sp |
| | | Hurdy-gurdy | 50 sp |
| | | Lute | 60 sp |

**Clothes** are free text on the sheet, not items. They're dearer than in 5E, because cloth took a lot of work. Most people owned one set and patched it.

| Outfit | Price |
|---|---|
| Common clothes | 40 sp |
| Costume | 40 sp |
| Traveller's clothes | 60 sp |
| Fine clothes | 300 sp |

**Single pieces** *(est.)*, adding up to about a set of common clothes:

| Piece | Price | Piece | Price |
|---|---|---|---|
| Belt | 1 sp | Linen shirt or shift | 3 sp |
| Hat, cap, hood | 2 sp | Hose | 4 sp |
| Gloves | 2 sp | Tunic or kirtle | 6 sp |
| Shoes | 3 sp | Hooded cape | 8 sp |
| | | Leather boots (from the source) | 10 sp |
| | | Woollen cloak | 15 sp |
| | | Fur-lined winter coat | 60 sp |

## 6. Mounts, animals and vehicles

Bohemian lists valued things in cows: a cow was 46–55 groschen, an ox about 1.3 cows, a warhorse about 25. Horses vary the most: Kraków horses in 1369–72 ranged from 48 to 192 groschen by quality alone.

**Mounts** (at character creation: a commoner mount is a riding horse with tack, a fortunate one a warhorse with tack)

| Animal | Price | Speed |
|---|---|---|
| Donkey | 30 sp | 8 m |
| Mule, pony | 50 sp | 8 m |
| Draught horse | 80 sp | 8 m |
| Riding horse (rouncey) | 150 sp | 12 m |
| Palfrey (a lady's or a cleric's smooth ride) | 300–500 sp | 12 m |
| Courser (a fast hunting and war horse) | 360–600 sp | 12 m |
| Warhorse (destrier) | 12–24 gp; royal 50–150 gp | 12 m |

**Livestock and other animals**

| Animal | Price | Animal | Price |
|---|---|---|---|
| Chicken | 1 sp | Pig | 20 sp |
| Goose | 2 sp | Mastiff | 20 sp |
| War dog (trained to fight) *(est.)* | 60–100 sp |
| Goat | 6 sp | Hunting hound | 20–60 sp |
| Sheep | 8 sp | Cow | 50 sp |
| Calf | 12 sp | Ox | 60 sp |
| | | Trained hawk or falcon | 1–3 gp (gyrfalcon 10+ gp) |

A **trained** animal is also a companion: buying it is *finding*; it still needs *binding* and payments (see [section 8](#8-companions-networks-and-units)).

**Tack, feed and stabling**

| Item | Price |
|---|---|
| Bit and bridle | 5 sp |
| Saddlebags | 5 sp |
| Pack saddle | 8 sp |
| Riding saddle | 20 sp |
| Military saddle | 40 sp |
| Horseshoes, a set | 1 sp, or the smith's 1 sp for shoeing |
| Horse blanket *(est.)* | 3 sp |
| Barding | Twice the price of the same armour for a person |
| Padded caparison (barding, Protection 1) *(est.)* | 60 sp |
| Mail trapper (barding, Protection 3) *(est.)* | 480 sp |
| Feed (a day) | 4 cp |
| Stabling (a day, in town) | 1 sp |

**Vehicles and boats**

| Vehicle | Price |
|---|---|
| Raft *(est.)* | 10 Material, or 10 sp |
| Dugout canoe *(est.)* | 15 sp |
| Sled | 15 sp |
| Cart | 30 sp |
| Rowing boat, river punt | 30 sp |
| Wagon | 80 sp |
| Carriage (a covered noble wagon) | 5 gp |
| River barge (Elbe, Vltava, Vistula) | 10–20 gp |
| Longship | 100 gp |
| Hanseatic cog | 600–1,000 gp |
| Warship | 1,200 gp |
| Galley | 1,500 gp |

### Siege engines *(est.)*

These are priced from carpenters' wages (2–3 sp a day), timber and iron. A great English trebuchet of the time cost £20–50, which is 40–100 gp at the source's £1 = 2 gp. Most lords build them where the siege is, from the local forest, rather than buying them.

| Engine | Price | Build time with a crew of 10 |
|---|---|---|
| Siege ladder (6 m) | 5 sp | An hour |
| Ram, roofed | 10 gp | 3 days |
| Ballista | 10 gp | 5 days |
| Mangonel | 25 gp | 10 days |
| Siege tower | 40 gp | 2 weeks |
| Trebuchet | 60 gp | 3 weeks |

Stones for the engines cost only the labour; a ballista bolt is 2 sp.

## 7. Living: food, lodging, services

### Lifestyle

Modest living costs 1 sp a day, about 365 sp a year, which matches the 240–360 groschen a year it took to live in Prague.

| Lifestyle | A day | Who lives like this | Rest |
|---|---|---|---|
| Squalid | 3 cp | Cottagers, the urban poor | Poor rest |
| Poor | 6 cp | A labourer's household | Poor rest |
| Modest | 1 sp | Most burghers and craftsmen | Poor rest, unless it's also safe and calm |
| Comfortable | 2 sp | A master craftsman, minor gentry | Quality rest |
| Wealthy | 5 sp | The top of the gentry | Quality rest |
| Aristocratic | 20 sp+ | Barons and prelates | Quality rest |

A **quality rest** needs to be safe, comfortable and stress-free. A comfortable room doesn't help in a town under siege.

### Food and drink

| Item | Price | Item | Price |
|---|---|---|---|
| Beer, a mug | 1 cp | Cheese, a hunk | 3 cp |
| Beer, a gallon (about 4 l) | 3 cp | Meat, a chunk | 5 cp |
| White roll | 1 cp | Hot tavern meal | 2–5 cp |
| Rye loaf | 2 cp | Local wine, a pitcher | 4 cp |
| | | Fine wine, a bottle | 3–5 sp |
| | | A banquet, per person | 3 sp |

**More food** *(est.)*, from the staples above:

| Item | Price | Item | Price |
|---|---|---|---|
| Eggs, a dozen | 3 cp | Mead, a pitcher | 6 cp |
| Butter, 1 lb | 2 cp | Smoked ham | 3 sp |
| Dried fish or herring, 1 lb | 2 cp | Honey, 1 lb | 1 sp |
| Smoked sausage | 2 cp | Sugar, 1 lb (an imported luxury) | 5 sp |
| Pickled cabbage, a pot | 2 cp | A barrel of herring | 5 gp |

| Meals a day | Squalid | Poor | Modest | Comfortable | Wealthy | Aristocratic |
|---|---|---|---|---|---|---|
| Price | 2 cp | 3 cp | 6 cp | 1 sp | 3 sp | 10 sp |

### Lodging

| A night at an inn | Squalid | Poor | Modest | Comfortable | Wealthy | Aristocratic |
|---|---|---|---|---|---|---|
| Price | 1 cp | 2 cp | 5 cp | 1 sp | 3 sp | 10 sp |

A bed in the common room is 2 cp; a private room 1 sp.

### Services

| Service | Price |
|---|---|
| Laundry | 1 cp a bundle |
| Bathhouse | 1–2 cp |
| Shave or haircut | 1 cp |
| Scribe writes or reads a letter | 1–3 cp |
| Messenger on foot | 1 cp per 1.5 km (minimum 5 cp) |
| Mounted courier | 3 sp a day + feed |
| Carter's wagon between towns | 1 cp per 1.5 km |
| A cab in town | 1 cp |
| Passage by river | 1 cp per 1.5 km |
| Passage on the Baltic | 2 cp per 1.5 km |
| Ferry: a person / a horse / a cart | 1 cp / 3 cp / 1 sp |
| Blacksmith: sharpening / a small repair / shoeing a horse | 1 cp / 2–5 cp / 1 sp |
| Barber: bloodletting / minor surgery | 2–5 cp / 1–3 sp |
| Physician: a consultation / a house call | 1–3 sp / 5 sp |
| Local guide | 2–3 sp a day |
| Low mass for a soul | 1 sp |
| Baptism or marriage | 1–3 sp |
| Burial rites | 4–6 sp |
| Notary's deed | 5–10 sp |
| Advocate, per case | 30+ sp |
| Emptying a town cesspit | 120 sp |
| University study, 4 years (Prague) | 1,440 sp (about 14 gp) |
| A wagon with a driver, a day *(est.)* | 3 sp |
| Renting a workshop or smithy, a day *(est.)* | 2–3 sp |
| A letter of safe conduct from a lord *(est.)* | 5 sp, and someone who knows his chancery |
| Copying a book *(est.)* | 150 sp: a scribe's half year |
| A blessing or a prayer said for you *(est.)* | 1 sp to the church box |
| Ransom of a captured knight *(est.)* | About a year's income: 30–100 gp |
| Company: a quick visit, cheap house or bathhouse *(est.)* | 2–5 cp |
| Company: a whole night, ordinary house *(est.)* | 1 sp |
| Company: a bathhouse evening (bath, wine, company) *(est.)* | 2–3 sp |
| Company: a courtesan for the wealthy *(est.)* | 10–30 sp a night, plus gifts |

**Healing in the rules:** a physician or a barber's fee buys the treatment. **Healing a Scar** still costs 5 resource points per level and a skill check. The healer can pay those points only with a perk such as *Good Samaritan*. The fee is for their time.

**Coins against Scars,** only when the DM allows it: drinks in a tavern against a Soul or Charisma Scar, a bribe against a Charisma one. Allowed, 1 sp buys 1 point.

## 8. Companions, networks and units

**Hirelings by the day** (5E-style, with no Bond):

| Hireling | A day |
|---|---|
| Untrained (a porter, a torchbearer) | 1 sp |
| Skilled (a mason, a scribe, a guide) | 3 sp |
| Crossbowman, archer (mercenary) | 3 sp |
| Mounted man-at-arms | 5 sp |
| Knight leading a troop | 10–20 sp |

**Bound companions** pay with Bond, which is refilled with **payments**:

- **One payment = the companion's bonus in silver** (minimum 1 sp). Food for animals: a day's ration per bonus point. Strange and magical beings: a Scar, blood, memories, as agreed.
- **1 payment refills 1 spent Bond point.**
- **Healing a level of a Bond scar:** 5 payments and a skill check.
- **Raising Bond by 1:** 5 payments and a skill check, never above the master's Charisma pool.
- **Units:** ×5 per size step (handful ×5, band ×25, horde ×125). *A bonus-3 band: one payment is 3 × 25 = 75 sp.*
- **Networks:** one payment's worth of material attention a week, plus refills. *A bonus-3 smuggling ring: 3 sp a payment; raising its Bond from 0 to 2 costs 10 payments, 30 sp.*

**Artificial life** (Alchemist): **5 Material per point of Bond**, plus a ritual of a day and a night.

## 9. Substances and services of the craft

### Material and shop prices

- **Making:** each substance names its Material. A strength-N hazard costs **N Material a dose**, double for explosives, corrosives and gases, and +1 per strength for each property (Fast, Two-part, Hard to detect and so on).
- **Buying:** **Material × 1.5**, rounded up. That's the source's (Material + labour) × 1.25, with labour at a master's 3 sp a day.
- **A village herb-wife** charges 5 cp per Material for purely local remedies.
- **Imported ingredients** add +25% in a big town and +50% in the countryside, on the Material only.
- **Rare ingredients** aren't for sale by the Material.

| Substance | Material | Shop price |
|---|---|---|
| **Healing potion** | 1 per stored point | 5-point burn ointment: 8 sp (about 2 sp a dose) |
| **Antidote** to one poison | Its strength | Strength 3: 5 sp |
| **Swallowed poison** (Medic) | 1 per strength, per dose | Strength 3 sleeping draught: 5 sp a dose |
| **Contact poison** (Rogue) | 1 per strength, per dose | Strength 1, Fast (5E's basic poison): 3 sp |
| **Narcotic** (Shaman) | 1 per strength, per dose | Strength 2: 3 sp |
| **Explosive** (Alchemist) | 2 per strength | Strength 3 bomb: 9 sp. Strength 7 powder keg: 21 sp |
| **Corrosive** (Alchemist) | 2 per strength | Strength 2 vial of acid: 6 sp |
| **Gas** (Alchemist) | 2 per strength | Strength 3: 9 sp |
| **Mechanical or wild trap** | 1 per strength (+1 to catch several) | Strength 3 dart trap: 5 sp of parts |
| **Skill elixir** (a free Precise, Mighty or Cunning with one skill) | 2 | 3 sp |
| **Master elixir** (the Very version) | 3 | 5 sp |
| **Wonder elixir** (flying, breathing water, seeing in the dark) | 5 | 8 sp |
| **Sigil** pool | 1 per point | Not sold: the caster's own |
| **Ritual item** charge | 1 per stored point | Not sold: the owner's own |

**5E's alchemy in these terms:** a potion of healing is a healing potion at 1 Material a point. Alchemist's fire is a strength-2 corrosive that keeps burning (6 sp). A potion of flying or giant strength is a wonder elixir (8 sp). Antitoxin is an antidote. **Holy water isn't alchemy:** a priest blesses it for an offering of about 5 sp.

**Who can buy them:** Medic potions and simple poisons are sold by apothecaries and herb-wives. Bombs, acids and elixirs come only from an Alchemist who's willing. Selling poison to strangers is a hanging offence in most towns.

## 10. Wages

A labourer working six days a week earns about 300 sp a year, roughly the cost of modest living.

| Profession | A day | A month or a year |
|---|---|---|
| Farmhand, live-in servant, maid | 3–5 cp + board | 25–50 sp a year + food and clothing |
| Journeyman craftsman | 5–7 cp + board | 3–4 sp a week |
| Minstrel | 5 cp–2 sp + food, per performance | — |
| Bathhouse maid, harlot (ordinary house) *(est.)* | 2–5 cp a visit, 1 sp a night, less the house's cut | — |
| Courtesan *(est.)* | 10–30 sp a night + gifts | — |
| Unskilled day labourer (town) | 1 sp | about 25 sp a month |
| Silver miner (Kutná Hora) | 1–1.5 sp | 7–8 sp a week |
| Town guard, watchman | 1–1.5 sp | 30–40 sp a month |
| Barber-surgeon | 1–2 sp | — |
| Foot soldier, militia | 1.5–2 sp | 50 sp a month |
| Village smith | 2 sp | — |
| Carpenter | 2–3 sp | 16–20 sp a week |
| Mason | 2.5–3 sp | about 15 sp a week |
| Scribe, town clerk | 2–3 sp | 500–800 sp a year |
| Mint worker | 2–4 sp | — |
| Crossbowman, archer (mercenary) | 3 sp | 90 sp a month |
| Town master smith | 3–4 sp | — |
| Apothecary (master) | 3–4 sp | about 1,000 sp a year |
| Master craftsman | 3–5 sp | 600–1,800 sp a year |
| Mounted man-at-arms | 5 sp | about 150 sp a month |
| Physician (court retainer) | 5–10 sp a visit-day | 20–60 gp a year |
| Knight leading a troop | 10–20 sp | 3–6 gp a month |
| Estate hunter or forester | — | 90 sp a year + food |
| Mine foreman / mine administrator (Wieliczka) | — | 84 / 1,248 sp a year |
| Public notary | — | 800–1,500 sp a year |
| Parish priest | — | 600–1,500 sp a year |

### Adventurers' pay

About 2–3 times a soldier's wage: **10–15 sp per person per day of real danger**.

| Job, per character | Pay |
|---|---|
| Escort or guard duty, a few days | 10–20 sp |
| Clearing out bandits (a 1–2 gp bounty split four ways) | 30–60 sp |
| A dangerous monster, or a lord's errand | 50–100 sp |
| Loot, per job | 5–30 sp |

- **Power instead of money:** a patron may pay in a favour owed (Power) instead. It's kept for now, not confirmed.
- **Plate is a goal, not a starting option.** Good plate (478 sp in pieces) takes 6–10 jobs.
  - **Piece by piece:** the natural route is gambeson, coat of plates, bascinet, then arms and legs, trading old pieces in at half value.
  - **Second-hand plate:** about 300 sp, plus 30 sp and a week to refit it.
  - **A patron:** the plate stays the lord's.
  - **Instalments,** with a debt collector behind them.

## 11. Prices move

**Final price = list price, then one step on each table that applies,** rounded to clean coins. For a quick answer, take the one change that matters most.

**Season and events**

| Event | Food | Livestock | Arms, horses | Cloth | Labour | Luxuries |
|---|---|---|---|---|---|---|
| After the harvest (Sep–Nov) | ×0.8 | ×0.9 | — | — | ×0.9 | — |
| Late spring (Apr–Jun) | ×1.3 | ×1.2 | ×1.1 | — | ×1.2 | — |
| Bad harvest | ×2 | ×1.3 | — | — | ×0.9 | ×1.2 |
| Famine | ×3–4 | ×1.5 | — | — | ×0.8 | ×1.5 |
| War nearby | ×1.5 | ×1.5 | ×1.5 (horses ×2) | ×1.2 | ×1.3 | ×1.3 |
| Siege (inside the walls) | ×5 or more | ×3 | ×2 | ×1.5 | — | ×2 |
| Plague year | ×1.2 | ×0.9 | — | — | ×1.3 | ×1.2 |

**Region**

| Region | Change |
|---|---|
| A big town (Prague, Kraków, Wrocław) | Baseline for goods; food and lodging +10–20%; imported luxuries cheapest here |
| A mining town (Kutná Hora, Jihlava) | Food, lodging and labour +25–50% |
| A market town | Baseline food; manufactured goods +10–20% |
| A village | Food and livestock −20%; manufactured goods +25–50% or not available; imports +100% or not available |
| Lesser Poland, compared with Bohemia | Land and food −30–60%; salt −60% near the salt mines |

**Era:** prices are pitched at about 1350–1390. Before 1340, cash prices are about 10% lower. After 1400, raise them 20% and set the florin at 22–24 sp; the groschen's silver fell from 3.65 g to 1.75 g.

## 12. Trade goods

| Good | Price |
|---|---|
| Oats, 1 lb (about ½ kg) | ¼ cp |
| Rye, 1 lb | ½ cp |
| Wheat, 1 lb | 1 cp |
| Flour, 1 lb | 2 cp |
| Salt, 1 lb | 1 cp near the salt mines, 3 cp in Bohemia |
| Iron, 1 lb | 2 cp |
| Copper, 1 lb | 5 cp |
| Coarse linen or canvas, 1 m² | 1 sp |
| Fine linen, 1 m² | 2 sp |
| Fustian, 1 m² | 3 sp |
| Wool, 1 lb (fine or dyed) | 3 sp |
| Cloves, ginger, 1 lb | 4 sp |
| Pepper, cinnamon, 1 lb | 6 sp |
| Fine Flemish cloth, an ell (about 60 cm) | 20–40 sp |
| Silk, 1 m² | 30 sp |
| Saffron, 1 lb | 1 gp |
| Silver, 1 lb | 1 gp |
| Gold, 1 lb | 20 gp |

- **Spice merchants** sold in Prague at about 25% profit. Saffron reached a month's unskilled wage per 100 g.
- **Trade goods and Material:** goods bought for crafting count as Material at their price (1 sp each). Goods bought to sell again stay goods.

## 13. Property, holdings and domains

**Property**

| Property | Price |
|---|---|
| Peasant cottage | 1–3 gp |
| Wooden town house | 3.6 gp |
| Simple three-room house | 4–7 gp |
| House in Prague's New Town | 9 gp (larger 18–30 gp) |
| Two-storey town house | 10–13 gp |
| Two-storey town house with a workshop | 18–33 gp |
| Showpiece burgher house, Old Town Square | 67–210 gp |
| Permanent market stall | 10 gp |
| A small town's house | 50–70% of the Prague price |
| A lán of good land (16–18 ha) | 9–15 gp (in Poland about 2 gp) |
| Respectable gentry seat | 30–36 gp |
| Village (10–15 lány) | 100–250 gp |
| Small fortified manor (*tvrz*) | 150–300 gp |
| Small castle with a domain | 1,000–3,000 gp |

**Rent:** a town house is about 8–10% of its value a year (a New Town house 70–90 sp). A workshop is 20–40 sp a month. A farm lease is 60–120 sp a year.

**Domain holdings** *(confirmed, 2026-11-08)*: a season's income at each mood. The rest is under *The seasonal turn* in the ruleset.

| Holding | Full | Three quarters | Half | To build or buy |
|---|---|---|---|---|
| A lán of peasant land | 10 sp | 8 sp | 5 sp | 900–1,500 sp |
| A mill (the lord's monopoly) | 40 sp | 30 sp | 20 sp | 800 sp |
| A tavern licence | 15 sp | 11 sp | 8 sp | 300 sp |
| A smithy | 10 sp | 8 sp | 5 sp | 200 sp |
| A fishpond | 30 sp | 23 sp | 15 sp | 600 sp |
| Woods (timber, game, pannage) | 15 sp | 11 sp | 8 sp | Comes with the land |
| A vineyard | 20 sp | 15 sp | 10 sp | 400 sp, and 3 years to the first harvest |
| A toll (bridge, ford, road) | 30–60 sp | 23–45 sp | 15–30 sp | A bridge, or a royal grant |
| A weekly market (a town right) | 400 sp | 300 sp | 200 sp | A royal or ducal charter |
| A town house's rent | 8 sp | 6 sp | 4 sp | — |
| A silver mine | 500 sp or more | — | — | A royal grant; a story of its own |

**Castle upkeep per season:** a fortified manor 100 sp, a small castle 1,000 sp. *A small castle eats half a small town's income.*

**Feasts and alms** as upkeep actions cost a tenth of the domain's full income for the season.

## 14. Taxes, tolls and fines

**Dues a peasant pays:** about 1 gp a year in cash on a full lán.

| Tax or due | Rate |
|---|---|
| Cash rent | 60–100 sp a year per full lán |
| Parish tithe | 15–20 sp a year per peasant |
| Labour dues (*robota*) | 4–8 days a year, or 1 sp a day to buy them off |
| Royal tax (*berna*), only for coronations and royal weddings | 16–32 sp per lán; 12 sp per farmstead; 4 sp per cottager, workshop or tavern |
| A royal town's special *berna* | 130–200 gp per town per levy |
| Polish plough tax (*poradlne*) | 2 sp per łan a year |
| Peter's Pence (Poland) | 1 cp per head |
| Burgher rights (Prague) | 30 sp, + a 6 gp bond for 3 years' residence |
| Guild entry | about 60 sp |
| Jewish taxes (Bohemia) | 5 sp–5 gp per household a year |

Collection could be brutal: in 1418, New Town residents were taxed seven times, and the collectors took the clothes off people who couldn't pay.

**Tolls and market fees** *(mostly game estimates)*

| Toll | Rate |
|---|---|
| City gate: on foot / a rider / a pack horse / a loaded cart | 1 cp / 2 cp / 3 cp / 1 sp |
| Prague bridge: on foot / a horse / a cart | 1 cp / 3 cp / 1 sp |
| A lord's road toll (*mýto*) | 1 cp a person, 5 cp a cart |
| River toll, per boat or raft at each station | 2–5 sp + 1 sp per cart-load |
| Market stall, a day | 1–3 cp (a prime spot 5 cp) |
| Public scales | 1 cp per 25 lb |
| Staple right (a foreign merchant halts 2–3 days) | 1/30 of the goods' value |
| Beer or wine import excise | 1 sp a barrel |

**Fines** (from the Statutes of Casimir the Great, Poland):

| Offence | Fine |
|---|---|
| Killing a noble / a peasant | 29 gp / 5 gp |
| Cutting off a hand, a foot or a nose / a finger | 7 gp / 1.5 gp |
| Insulting a noble as a "whore's son" | 29 gp |
| A peasant striking a knight | 3 gp |

## 15. Starting money

Coins and Material come from the **background fortune** at character creation, on top of the background's gear (see *Backgrounds* in the ruleset). The usual range:

| Background fortune | Coins | Material |
|---|---|---|
| **Poor** | 1–5 sp | 0–3 |
| **Commoner** | 5–15 sp | 1–5 |
| **Fortunate** | 15–60 sp | 1–8 |

- **Gear is the real wealth.** A sword, a horse or a book is worth more than any starting purse, and it isn't easy to turn back into coin (see *Swords don't sell*).
- **Poor backgrounds** (Hermit, Outlander, Monster hunter, Sailor, Peasant) carry little coin and more Material: furs, herbs, grain, trade stock.
- **No background** starts with a gold piece.

## To settle

The source wins where it disagrees with the app's item list. **These were changed in the app on 2026-11-17** (migration `20261117020000_prices_from_pricelist.sql`):

| Item | Was | Now | Why |
|---|---|---|---|
| Riding horse | 1,500 sp | 150 sp | Off by a factor of ten |
| Warhorse | 120 gp | 18 gp (the source's 12–24 gp) | Off by a factor of ten |
| Lance | 15 sp | 6 sp | The source |
| Iron cap | 20 sp | 30 sp | The source prices it with the kettle hat |
| Blanket | 5 sp | 3 sp | The source |
| Healer's kit | 2 sp | 10 sp | The source; a lancet and linen bandages added as pieces |
| Herbalism kit | 11 sp 5 cp | 10 sp | The source |
| Leatherworker's tools | 6 sp | 10 sp | The source |
| Writing things | 6 sp 1 cp | 20 sp | The source's calligrapher's supplies; 10 quills, a penknife and coloured inks |
| Mason's tools | 9 sp 5 cp | 20 sp | The source |
| Carpenter's tools | 15 sp | 25 sp | The source |
| Disguise kit | 26 sp | 30 sp | The source |
| Thieves' tools | 29 sp | 30 sp | The source |
| Forgery kit | 23 sp 1 cp | 40 sp | The source |
| Goldsmith's tools | 25 sp | 80 sp | The source's jeweller's tools |

- **Kits are priced as the sum of their pieces** in the app, so the pieces were raised with them, mostly the main tool: the lockpicks, the jeweller's saw, the blank seals. The forgery kit now holds 10 quills.
- **Deliberately different, kept:**
  - The smith's tools and the brewer's supplies are the road versions. The source's 100 sp and 60 sp include the anvil and the copper kettle, which belong to the workshop.
  - The pick (8 sp) is a digging pick that also fights; the war pick (15 sp) is a separate weapon.
- **Estimates** *(est.)* without a source figure: the brigandine, the extra helmets, the hunting sword, the bardiche, billhook, voulge and morgenstern, the pavise and mantlets. Also everything newly added here: weapons, gear, clothes, food, services, barding and siege engines.
- **Not in the app's item list yet:** everything in the *Not in the item list yet* tables, plus livestock, tack, vehicles and siege engines. They can be added when a story needs them.
