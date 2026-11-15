-- Languages player characters can't learn; the Language of the Isles; dwarves' racial language is their runes.

alter table languages add column learnable boolean not null default true;

update languages set learnable = false where id in ('first-elvish', 'tongue-of-the-kings');

update languages set sort = sort + 1 where sort >= 7;

insert into languages (id, name, description, sort, sample) values (
  'isles',
  'Language of the Isles |cs| Jazyk Ostrovů',
  $d$Spoken by the northern island nations. It's written in elder futhark, the same runes the oldest dwarven clans use, so a speaker can read some dwarven. It doesn't work the other way round: a dwarven scribe can read the Isles' runes aloud, sound by sound, without understanding a word. |cs| Mluví jím severské ostrovní národy. Píše se starým futharkem, stejnými runami, jaké používají nejstarší trpasličí klany, takže mluvčí přečte i část trpasličích nápisů. Opačně to nefunguje: trpasličí písař runy Ostrovů nahlas přečte hlásku po hlásce, ale nerozumí ani slovu.$d$,
  7,
  $s$Deyr fé, deyja frændr, deyr sjalfr it sama.
— "Cattle die, kinsmen die, and you yourself will die the same." |cs| Deyr fé, deyja frændr, deyr sjalfr it sama.
— „Umírá dobytek, umírají příbuzní, i ty sám jednou zemřeš.“$s$
);

update races set language_id = 'dwarven' where id = 'dwarf';

update rulebook_pages set content = replace(replace(content,
$o$Understanding isn't speaking: you can follow what's said or written, but you can't answer in it.$o$,
$n$Understanding isn't speaking: you can follow what's said or written, but you can't answer in it.

:::note[Not for player characters]
The **Tongue of the kings** and **First elvish** can't be learned by player characters: nobody alive teaches them, or nobody will. The related-language rule still lets a Liturgic or Second elvish speaker puzzle out a line of them.
:::$n$),
$o$Rozumět neznamená mluvit: chápeš, co se říká nebo píše, ale odpovědět v tom jazyce nedokážeš.$o$,
$n$Rozumět neznamená mluvit: chápeš, co se říká nebo píše, ale odpovědět v tom jazyce nedokážeš.

:::note[Ne pro hráčské postavy]
**Královskou řeč** a **první elfštinu** se hráčské postavy naučit nemohou: nikdo z živých je neučí, nebo nechce. Pravidlo o příbuzných jazycích ale dovolí mluvčímu liturgické řeči nebo druhé elfštiny luštit jejich útržky.
:::$n$)
where slug = 'languages';
