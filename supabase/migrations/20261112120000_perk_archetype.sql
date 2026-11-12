-- Dev-only tag for perk archetypes, to count what each class still lacks:
-- advantage (a plain "advantage on an area" perk), sigil (a school's sigil),
-- mastery (strong manoeuvres at class level 5). Shown on perk cards while
-- SHOW_ARCHETYPES is on in components/game/perkCard.tsx.
alter table perks add column archetype text
  check (archetype in ('advantage', 'sigil', 'mastery'));

update perks set archetype = 'advantage' where id in (
  'gladiator', 'fight-club', 'strongman', 'champion',
  'sniper', 'wild-thing', 'beast-master', 'just-keep-swimming', 'sharp-senses',
  'random-bullshit-go', 'mission-possible', 'steady-hands', 'don-juan',
  'negotiator', 'medicineman', 'medic-poisoner',
  'carpenter', 'friend-of-all-monsters', 'soon-may-the-wellerman-come',
  'sea-legs', 'jockey', 'herald'
);

update perks set archetype = 'sigil' where id in (
  'eye-sigil', 'salamander-sigil', 'vodyanoy-sigil', 'stone-spirit-sigil',
  'leshy-sigil', 'werewolf-sigil', 'nightmare-sigil', 'veil-sigil'
);

update perks set archetype = 'mastery' where id in ('legendary-warrior');
