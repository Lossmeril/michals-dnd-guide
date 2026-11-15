-- Sources for the Inquisitor, Zhrets and Ravager class images; the Druid's poster.

update public.credits set authors = 'u/JordanJardine', year = '2017',
  used_for = 'The Druid class image. Posted on 3 May 2017.'
where title = '[OC] I decided to paint my friend as a druid';

delete from public.credits where title = 'Other class images';

update public.credits set sort = sort + 2 where section <> 'rules' and sort >= 14;

insert into public.credits (section, authors, year, title, medium, place, publisher, url, accessed, used_for, images, sort) values
('pictures', 'ConceptartistJR', '2021', 'Eonnan Inquisitor - Avorkarth Illustration/Concept', 'Digital painting, DeviantArt', null, null,
 'https://www.deviantart.com/conceptartistjr/art/Eonnan-Inquisitor---Avorkarth-Illustration-Concept-876617171', '2026-11-15',
 'The Inquisitor class image.', array['/img/classes/inquisitor.webp'], 14),
('pictures', 'Unknown artist', null, 'Zhrets class image', 'Digital painting, ArtStation', null, null,
 'https://www.artstation.com/artwork/YRKXK', '2026-11-15',
 'The Zhrets class image.', array['/img/classes/zhrets.webp'], 15),
('pictures', 'Unknown artist', null, 'Ravager class image', 'Digital painting, ArtStation', null, null,
 'https://www.artstation.com/artwork/nEzQoe', '2026-11-15',
 'The Ravager class image.', array['/img/classes/ravager.webp'], 16);
