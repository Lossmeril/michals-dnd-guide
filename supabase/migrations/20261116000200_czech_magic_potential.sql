-- Casting magic: the Czech half follows Michal's new English "The magic
-- potential" section (magic in everything, three subheadings) and the
-- symbolic-touch line in the "No line of sight" example. The Classes page
-- linked to the old #who-can-cast anchor.

update rulebook_pages set content =
  replace(replace(replace(replace(replace(content,
$a$## Kdo může kouzlit {#who-can-cast}

Každé povolání má jeden ze tří druhů magie, který se ukazuje jako odznak vedle jeho jména.

**Spící.** Povolání nemá kouzla.$a$,
$b$## Magický potenciál {#the-magic-potential}

V tomhle světě je magie ve všem, i když její viditelné účinky bývají vzácné. Je to předivo, které drží pohromadě tkanivo skutečnosti. Sesilatele od ostatních odlišuje jen to, že v sobě probudili spojení s magickými silami.

Probudit svůj magický potenciál může teoreticky kdokoli, ale většina lidí prožije celý život, aniž by se s magickým účinkem vůbec setkala, natož aby probudila vlastní schopnosti.

Každé povolání má jeden ze tří druhů magie, který se ukazuje jako odznak vedle jeho jména a říká, jestli se jeho nositel už na magické předivo napojil.

### Spící {#dormant}

Když povolání neumí usměrňovat magické síly, říkáme jeho magii **Spící**. Povolání nemá kouzla.$b$),
$c$

**Probuzená.** Zaříkávač a všechna$c$,
$d$

### Probuzená {#awakened}

Když má sesilatel ke svým magickým silám stálý přístup, říkáme jeho magii **Probuzená**. Zaříkávač a všechna$d$),
$e$

**Skrytá.** Vědmák a Šaman$e$,
$f$

### Skrytá {#latent}

Když má sesilatel nějaké magické schopnosti, ale nemůže k nim sáhnout, kdy se mu zachce, říkáme jeho magii **Skrytá**. Vědmák a Šaman$f$),
$g$Nádvoří nevidí, takže na něj nedosáhne, ať je v metrech jakkoli blízko. Napřed vyleze na věž.$g$,
$h$Nádvoří nevidí, takže na něj nedosáhne, ať je v metrech jakkoli blízko. Napřed musí vylézt na věž.

Kdyby ale měl vlas městského strážného, který na nádvoří stojí, mohl by na něj zamířit přes **symbolický dotek**.$h$),
  'magic#who-can-cast', 'magic#the-magic-potential')
where slug in ('magic', 'classes');
