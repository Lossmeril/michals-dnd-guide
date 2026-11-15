-- Cover counts against melee too (confirmed 2026-11-15, as 5E).
update rulebook_pages set content = replace(content,
$o$Cover counts against attacks and effects that come from the other side of it, which mostly means arrows, bolts, thrown weapons and spells.$o$,
$n$Cover counts against attacks and effects that come from the other side of it: arrows, bolts, thrown weapons and spells, and melee attacks too, like a sword swung over a low wall.$n$)
where slug = 'defending';
