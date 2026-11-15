-- Cover against area effects (confirmed 2026-11-15): an advantaged defense roll or saving throw.
update rulebook_pages set content = replace(content,
$o$and it comes off an NPC's damage.

**Total cover**$o$,
$n$and it comes off an NPC's damage.

An **area effect** can't be aimed round, so cover works the other way against it: a fireball or a bomb that reaches you behind half or three-quarters cover gives you an **advantaged** defense roll or saving throw to get clear.

**Total cover**$n$)
where slug = 'defending';
