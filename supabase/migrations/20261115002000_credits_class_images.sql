-- Sources for the Druid, Ranger (Gwent), Scout and Shaman class images.

update public.credits set
  used_for = $t$Class images of Fighter, Hunter, Juggler, Medic, Warrior, Ranger, Witcher, Rogue, Alchemist, Warlock, Mage, Necromancer, Warlord and Shadow. Race images of Human, Elf, Dwarf and Halfling. Aspect images of all aspects except Life Moulder, Monk, Stoneshaper and Tidecaller. Rulebook images: Damage, Saving throw, Body and Soul, Coins and Material, Danger Level.$t$,
  images = array_append(images, '/img/classes/ranger.webp')
where title = 'Gwent: The Witcher Card Game';

update public.credits set
  used_for = 'Inquisitor, Ravager and Zhrets.',
  images = array['/img/classes/inquisitor.webp', '/img/classes/ravager.webp', '/img/classes/zhrets.webp']
where title = 'Other class images';

update public.credits set sort = sort + 3 where section <> 'rules' and sort >= 11;

insert into public.credits (section, authors, year, title, medium, place, publisher, url, accessed, used_for, images, sort) values
('pictures', 'Flanagan, J.', '2010', 'Hraničářův učeň: Halt v nebezpečí', null, 'Praha', 'Egmont ČR',
 'https://krasnyart.eu/searchResults.php?criteria=cycle&id=81&lng=cz', '2026-11-15',
 $t$Cover art by Jan Patrik Krásný for the Czech translation of Ranger's Apprentice: Halt's Peril: the Scout class image.$t$,
 array['/img/classes/scout.webp'], 11),
('pictures', 'Christian, B.', '2021', 'Augur of Autumn', 'Magic: The Gathering card, Innistrad: Midnight Hunt', 'Renton, WA', 'Wizards of the Coast',
 null, null, 'The card art: the Shaman class image.', array['/img/classes/shaman.webp'], 12),
('pictures', 'Unknown Reddit user', '2017', '[OC] I decided to paint my friend as a druid', 'Reddit post, r/DnD', null, null,
 'https://www.reddit.com/r/DnD/comments/690u5l/oc_i_decided_to_paint_my_friend_as_a_druid/', '2026-11-15',
 'The Druid class image.', array['/img/classes/druid.webp'], 13);

-- The Scout image is credited to its illustrator
update public.credits set authors = 'Krásný, J. P.', title = 'Cover illustration for Flanagan, J., Hraničářův učeň: Halt v nebezpečí',
  used_for = $t$The Scout class image: the cover of the Czech translation of Ranger's Apprentice: Halt's Peril.$t$
where title = 'Hraničářův učeň: Halt v nebezpečí';
