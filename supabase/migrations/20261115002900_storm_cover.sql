-- The storm: defenders on the wall have three-quarters cover instead of a free Defense (2026-11-15).
update rulebook_pages set content = replace(replace(content,
$o$Defenders on the wall get a **free Defense once per round**, as if each had a shield.$o$,
$n$Defenders behind battlements have **three-quarters [cover](defending#cover)**: attacks at them are disadvantaged, and they get +1 armour rating against the hit.$n$),
$o$and no wall bonus for the defenders.$o$,
$n$and no cover for the defenders.$n$)
where slug = 'sieges';
