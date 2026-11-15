-- Magic types renamed again: none → dormant, infused (was full) → awakened, awakened (was pseudo) → latent.
-- Clarifying sections turned into notes (Charmed vs control, armour in a fight, NPCs hurting player characters).

alter type class_magic rename value 'awakened' to 'latent';
alter type class_magic rename value 'infused' to 'awakened';
alter type class_magic rename value 'none' to 'dormant';

update rulebook_pages set content = replace(replace(replace(content,
  $o$**None.** The class has no spells.$o$, $n$**Dormant.** The class has no spells.$n$),
  $o$**Infused.** The Incantor and every class built on it have magic in them:$o$,
  $n$**Awakened.** The Incantor and every class built on it have their magic awake:$n$),
  $o$**Awakened.** The Witcher and the Shaman come from the Medic, not the Incantor, and the Ravager is built on the Witcher. Their magic sleeps until they wake it with pain. Before their first spell, they take a **level-1 Scar** in any pool they like and enter **magic mode**. From then on they cast like an infused caster,$o$,
  $n$**Latent.** The Witcher and the Shaman come from the Medic, not the Incantor, and the Ravager is built on the Witcher. Their magic lies latent until they wake it with pain. Before their first spell, they take a **level-1 Scar** in any pool they like and enter **magic mode**. From then on they cast like an awakened caster,$n$)
where slug = 'magic';

update rulebook_pages set content = replace(replace(replace(replace(replace(replace(replace(replace(content,
  $o$All classes stemming from it are **infused**: the magic is in them.$o$,
  $n$All classes stemming from it are **awakened**: the magic is awake in them.$n$),
  $o$We call these classes **awakened**: their magic sleeps until they wake it.$o$,
  $n$We call these classes **latent**: their magic sleeps until they wake it. Classes with no magic at all are **dormant**.$n$),
  $o$| None | No spells. |$o$, $n$| Dormant | No spells. |$n$),
  $o$| Infused | Core spells from the start;$o$, $n$| Awakened | Core spells from the start;$n$),
  $o$| Awakened | Core spells too, but$o$, $n$| Latent | Core spells too, but$n$),
  $o$| Probuzená | Taky základní kouzla$o$, $n$| Skrytá | Taky základní kouzla$n$),
  $o$| Prostoupená | Základní kouzla od začátku;$o$, $n$| Probuzená | Základní kouzla od začátku;$n$),
  $o$| Žádná | Žádná kouzla. |$o$, $n$| Spící | Žádná kouzla. |$n$)
where slug = 'classes';

update rulebook_pages set content = replace(content,
  $o$you deal it yourself to wake awakened magic$o$, $n$you deal it yourself to wake latent magic$n$)
where slug = 'exhaustion';

update rulebook_pages set content = replace(content,
  $o$## Charmed is not controlled

These are two different things. **[Charmed](conditions#charmed)** is a condition: the target keeps its own will, treats the caster as a friend, and acts for itself. **Control** is an active act: the caster drives the target like a puppet, and the target does what the caster wants.
$o$, $n$:::note[Charmed is not controlled]
These are two different things. **[Charmed](conditions#charmed)** is a condition: the target keeps its own will, treats the caster as a friend, and acts for itself. **Control** is an active act: the caster drives the target like a puppet, and the target does what the caster wants.
:::
$n$)
where slug = 'control';

update rulebook_pages set content = replace(content,
  $o$## In a fight

The armour rating takes points off the level of every Scar from a hit, and off the :body you exhaust to avert a hit. How that works is on [Defending and getting hit](defending).
$o$, $n$:::note[In a fight]
The armour rating takes points off the level of every Scar from a hit, and off the :body you exhaust to avert a hit. How that works is on [Defending and getting hit](defending).
:::
$n$)
where slug = 'armour';

update rulebook_pages set content = replace(content,
  $o$## Hurting player characters

NPCs don't roll weapon damage against player characters. A hit that lands and isn't averted becomes a Scar, sized by the NPC's threat die; see [Defending and getting hit](defending).
$o$, $n$:::note[Hurting player characters]
NPCs don't roll weapon damage against player characters. A hit that lands and isn't averted becomes a Scar, sized by the NPC's threat die; see [Defending and getting hit](defending).
:::
$n$)
where slug = 'npcs';

-- Mighty classes table: still said Full and None, and had the Ravager as Full.
update rulebook_pages set content = regexp_replace(regexp_replace(regexp_replace(replace(replace(replace(content,
  '| Warrior, Ranger, Witcher | Full |', '| Warrior, Ranger, Witcher | Latent |'),
  ' | Full |', ' | Awakened |'),
  '| Warrior, Rogue, Scout | None |', '| Warrior, Rogue, Scout | Dormant |'),
  '(Hraničář, Vědmák \| )Plná \|', '\1Skrytá |', 'g'),
  ' \| Plná \|', ' | Probuzená |', 'g'),
  ' \| Žádná \|', ' | Spící |', 'g')
where slug = 'mighty-classes';
