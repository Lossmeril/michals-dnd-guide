-- Weak of body: the +2 stacks on top of the armour's own cost to attempt.

update traits set downside = replace(replace(downside,
  'Any armour you wear, even light, adds 2 Body to its cost to attempt.',
  'Wearing any armour, even light, costs 2 Body to attempt on top of the armour''s own cost: 2 in light, 3 in medium, 4 in heavy.'),
  'Jakákoli zbroj, i lehká, ti zvyšuje cenu za pokus o 2 Těla.',
  'Jakákoli zbroj, i lehká, stojí 2 Těla za pokus navíc k ceně za pokus samotné zbroje: v lehké 2, ve střední 3, v těžké 4.')
where name like 'Weak of body%';
