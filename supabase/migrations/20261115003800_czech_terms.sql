-- Czech terms confirmed 2026-11-15: úroveň zbroje (armour rating), kostka pro
-- hrozbu (threat die), penalties Nepřesně, Pomalu, Chabě, Hloupě.
-- Only the Czech half of each page changes.

create function pg_temp.cs(content text, pairs text[]) returns text language plpgsql as $$
declare en text := split_part(content, E'\n\n|cs|\n\n', 1);
        cz text := split_part(content, E'\n\n|cs|\n\n', 2);
        i int;
begin
  for i in 1 .. array_length(pairs, 1) by 2 loop
    cz := replace(cz, pairs[i], pairs[i + 1]);
  end loop;
  return en || E'\n\n|cs|\n\n' || cz;
end $$;

update rulebook_pages set content = pg_temp.cs(content, array[
  'stupeň zbroje', 'úroveň zbroje',
  'Stupeň zbroje', 'Úroveň zbroje',
  'V těžké zbroji (stupeň 3)', 'V těžké zbroji (úroveň 3)',
  'do stupně 3', 'do úrovně 3',
  'kostkou hrozby', 'kostkou pro hrozbu',
  'kostka hrozby', 'kostka pro hrozbu',
  'Kostka hrozby', 'Kostka pro hrozbu',
  'kostky hrozby', 'kostky pro hrozbu'
]) where slug in ('defending', 'npcs', 'manoeuvres', 'conditions');

update rulebook_pages set content = pg_temp.cs(content, array[
  '(kletba třesoucích se rukou tě udělá *Nepřesným* se zbraněmi na dálku)', '(kletba třesoucích se rukou ti dá *Nepřesně* se zbraněmi na dálku)',
  '(otupující jed tě udělá *Pomalým*)', '(otupující jed ti dá *Pomalu*)',
  ':::card[Nepřesný]{#imprecise}', ':::card[Nepřesně]{#imprecise}',
  ':::card[Pomalý]{#slow}', ':::card[Pomalu]{#slow}',
  ':::card[Slabý]{#feeble}', ':::card[Chabě]{#feeble}',
  ':::card[Prostoduchý]{#foolish}', ':::card[Hloupě]{#foolish}',
  'takže její útoky s ní jsou Slabé.', 'takže s ní útočí Chabě.',
  'nebo Pomalý), Rychle zablokuje', 'nebo postih Pomalu), Rychle zablokuje'
]) where slug = 'conditions';

update rulebook_pages set content = pg_temp.cs(content, array[
  ':::note[Prostoduchý]', ':::note[Hloupě]',
  'Postava ve stavu Prostoduchý nemůže', 'Postava s postihem Hloupě nemůže',
  ':::note[Pomalý]', ':::note[Pomalu]',
  'Omráčený nebo Pomalý), Rychle zablokuje', 'Omráčený nebo postih Pomalu), Rychle zablokuje'
]) where slug = 'manoeuvres';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || replace(split_part(content, E'\n\n|cs|\n\n', 2), 'kostku hrozby', 'kostku pro hrozbu') where slug = 'npcs';
