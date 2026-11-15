-- Rulebook: Infused and Awakened magic explained on Casting magic; terms renamed elsewhere.

update rulebook_pages set content = replace(content, $old$## Who can cast

| Class magic | How it works |
|---|---|
| **None** | No spells. |
| **Full** | Core spells come with the class. More spells are taken as class perks. |
| **Pseudo** | Like full, but the caster must first enter **magic mode**. |

**Magic mode** (Witcher, Shaman):

- To enter it, the caster takes a **level-1 Scar** in any pool. It gives **no** temporary points.
- It lasts until the end of the conflict, or outside combat for a reasonable continuous stretch of time (searching one ruin). The DM decides when it ends.
- While in it, the caster casts their spells normally, paying each spell's own price.

**Spells are perks.** Every spell that isn't a core spell takes one of the class's perk slots.$old$, $new$## Who can cast

Every class has one of three magic types, shown as a badge next to its name.

**None.** The class has no spells. Magic skills are unique, so a pure Fighter can't even try to cast.

**Infused.** The Incantor and every class built on it have magic in them: the Druid, Alchemist, Warlock and Mage, and every mighty class except the Warlord. Their core spells come with the class, and they can cast whenever they have an action and can pay the spell's price.

**Awakened.** The Witcher and the Shaman come from the Medic, not the Incantor. Their magic sleeps until they wake it with pain. Before their first spell, they take a **level-1 Scar** in any pool they like and enter **magic mode**. From then on they cast like an infused caster, paying each spell's own price. Magic mode lasts until the end of the conflict. Outside a fight, it lasts one continuous stretch of work, such as searching one ruin, and the DM says when it ends.

:::example[Waking the signs]
Ulrich (Witcher 2) is cornered by a drowner in a flooded cellar. He hasn't used a sign in this fight yet, so he first drinks his bitter elixir: a level-1 Body Scar, which blocks one of his Body points and gives him nothing back. He is now in magic mode. As his action he casts Isa Sign, which has no price, and rolls d20 + 2 against the drowner's defense roll. Next round he can use a sign again without another Scar, and the same holds until the fight is over.
:::

:::note[A blank payment]
The Scar that wakes the magic gives **no** temporary points, unlike a Scar taken to avert a failure. Its story is up to the player: a Witcher's toxic elixir, a Shaman cutting their palm with a ritual dagger.
:::

**Spells are perks.** Every spell that isn't a core spell takes one of the class's perk slots.$new$)
where slug = 'magic';

update rulebook_pages set content = replace(replace(replace(content,
  $o$| **Plná** | Základní kouzla přicházejí s povoláním. Další kouzla se berou jako perky povolání. |$o$,
  $n$| **Prostoupená** | Základní kouzla přicházejí s povoláním. Další kouzla se berou jako perky povolání. |$n$),
  $o$| **Pseudo** | Jako plná, ale sesilatel musí nejdřív vstoupit do **magického režimu**. |$o$,
  $n$| **Probuzená** | Jako prostoupená, ale sesilatel musí nejdřív vstoupit do **magického režimu**. |$n$),
  $o$**Magický režim** (Vědmák, Šaman):$o$, $n$**Magický režim** (Vědmák, Šaman, magie probuzená):$n$)
where slug = 'magic';

update rulebook_pages set content = replace(replace(replace(replace(replace(content,
  $o$All classes stemming from it are classified as **magic**.$o$,
  $n$All classes stemming from it are **infused**: the magic is in them.$n$),
  $o$We call these classes **pseudo magic**.$o$,
  $n$We call these classes **awakened**: their magic sleeps until they wake it.$n$),
  $o$| Full | Core spells from the start; more unlock as perks. |
| Pseudo | Core spells too, but the caster takes a Scar to enter magic mode first. See [Magic](magic). |$o$,
  $n$| Infused | Core spells from the start; more unlock as perks. |
| Awakened | Core spells too, but the caster takes a Scar to enter magic mode first. See [Casting magic](magic#who-can-cast). |$n$),
  $o$| Plná | Základní kouzla od začátku; další se odemykají jako perky. |$o$,
  $n$| Prostoupená | Základní kouzla od začátku; další se odemykají jako perky. |$n$),
  $o$| Pseudo | Taky základní kouzla$o$, $n$| Probuzená | Taky základní kouzla$n$)
where slug = 'classes';

update rulebook_pages set content = replace(content,
  $o$you deal it yourself to cast pseudo-magic$o$, $n$you deal it yourself to wake awakened magic$n$)
where slug = 'exhaustion';
