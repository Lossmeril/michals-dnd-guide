-- Sources for the Kroll image and the city gate.

update public.credits set authors = 'Hellstern', year = '2013', title = 'Dorn Il-Khan',
  medium = 'Digital painting, DeviantArt',
  url = 'https://www.deviantart.com/hellstern/art/Dorn-Il-Khan-401738753', accessed = '2026-11-15',
  used_for = 'The Kroll race image. Posted on 21 September 2013.'
where title = 'Kroll image';

update public.credits set authors = 'Lunter, T.', year = '2022', title = $t$Baldur's Gate$t$,
  medium = $t$Magic: The Gathering card, Commander Legends: Battle for Baldur's Gate$t$,
  place = 'Renton, WA', publisher = 'Wizards of the Coast',
  used_for = 'The card art: the city gate on the login and sign-up pages.'
where title = 'City gate';
