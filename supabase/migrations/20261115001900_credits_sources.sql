-- More sources: Scriptorium (perk images), Strixhaven (the Incantor), the races
-- from Gwent, DrD 1.6's Svět and Fateforge's Grimoire. Black Priest is now the Necromancer.

update public.credits set
  used_for = $t$Class images of Fighter, Hunter, Juggler, Medic, Warrior, Witcher, Rogue, Alchemist, Warlock, Mage, Necromancer, Warlord and Shadow. Race images of Human, Elf, Dwarf and Halfling. Aspect images of all aspects except Life Moulder, Monk, Stoneshaper and Tidecaller. Rulebook images: Damage, Saving throw, Body and Soul, Coins and Material, Danger Level.$t$,
  images = images || array['/img/races/human.webp', '/img/races/elf.webp', '/img/races/dwarf.webp', '/img/races/halfling.webp']
where title = 'Gwent: The Witcher Card Game';

update public.credits set title = 'Kroll image', used_for = 'The Kroll race.', images = array['/img/races/kroll.webp']
where title = 'Race images';

update public.credits set
  used_for = 'Druid, Ranger, Scout, Shaman, Inquisitor, Ravager and Zhrets.',
  images = array_remove(images, '/img/classes/incantor.webp')
where title = 'Other class images';

update public.credits set
  authors = 'Yaza Games', year = '2026', medium = 'Video game', publisher = 'Mythwright',
  url = 'https://www.yazagames.com/', accessed = '2026-11-15',
  used_for = 'All perk and spell images. A game made by the author of this app.',
  images = coalesce((select array_agg(distinct image_url) from public.perks
                     where kind <> 'aspect' and image_url is not null), '{}')
where title = 'Scriptorium: Master of Manuscripts';

-- Make room for the new rules sources after Dračí Doupě II
update public.credits set sort = sort + 2 where sort >= 2;
update public.credits set sort = sort + 1 where sort >= 10;

insert into public.credits (section, authors, year, title, medium, place, publisher, url, accessed, used_for, images, sort) values
('rules', 'Altar', null, 'Dračí doupě 1.6: Pravidla pro experty – Svět', null, 'Praha', 'Altar', null, null,
 'Domains, castles, sieges and armies: the seasonal turn, the mood of a domain, fortifications and battles.', '{}', 2),
('rules', 'Studio Agate', '2019', 'Fateforge: Book 2, Grimoire', null, null, 'Studio Agate', null, null,
 'Inspiration for some of the magic.', '{}', 3),
('pictures', 'Wizards of the Coast', '2021', 'Strixhaven: A Curriculum of Chaos', null, 'Renton, WA', 'Wizards of the Coast', null, null,
 'The cover art: the Incantor class image.', array['/img/classes/incantor.webp'], 10);
