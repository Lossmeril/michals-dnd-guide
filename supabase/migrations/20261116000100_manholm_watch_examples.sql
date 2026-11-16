-- The example stat blocks belong to the watch of the free city of Manholm
-- (new emblem), not the watch of Krutá Hora. Emblem lines pointing at the
-- removed SVG emblems (Harbour Rats, Order of the Ash) are dropped.

update rulebook_pages set content =
  replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(content,
    '/img/emblems/watch-kruta-hora.svg', '/img/emblems/Manholm.webp'),
    'The watch of The Free City of Manholm', 'The watch of the free city of Manholm'),
    'The city watch of Krutá Hora:', 'The watch of the free city of Manholm:'),
    'The watch of Krutá Hora', 'The watch of the free city of Manholm'),
    'Městská hlídka Kruté Hory:', 'Hlídka svobodného města Manholm:'),
    'Hlídka Kruté Hory', 'Hlídka svobodného města Manholm'),
    'City watch, semi-independent of the royal administration', 'City watch, answerable to the city council'),
    'Městská hlídka, napůl nezávislá na královské správě', 'Městská hlídka, odpovídá se městské radě'),
    E'emblem: /img/emblems/harbour-rats.svg\n', ''),
    E'emblem: /img/emblems/order-of-ash.svg\n', '')
where slug in ('npcs', 'organizations', 'units', 'networks', 'ritual-items');
