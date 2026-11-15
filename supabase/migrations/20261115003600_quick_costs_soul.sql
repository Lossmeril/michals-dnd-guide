-- Quick always costs 1 Soul (confirmed 2026-11-15): initiative comes before the
-- action is chosen, so there's no governing resource to pay from.
update rulebook_pages set content = replace(content,
$o$You declare it before initiative is rolled, and you roll initiative with advantage (2d20, keep the higher).$o$,
$n$You declare it before initiative is rolled, and you roll initiative with advantage (2d20, keep the higher).

Quick always costs **1 :soul**. When you roll initiative you haven't chosen your action yet, so there's no governing resource to pay from: seizing the moment is a matter of the mind.$n$)
where slug = 'manoeuvres';
