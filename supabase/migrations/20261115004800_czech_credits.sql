-- Czech for the credits page: what each reference is used for, and its medium
update credits set used_for = used_for || ' |cs| ' || v.cs from (values
 (1, 'Páteř pravidel: zdroje místo vlastností, Ohrožení, vyčerpání a Jizvy, povolání jako balíčky dovedností, pomocníci, magie a mistrovská povolání.'),
 (2, 'Výhoda a nevýhoda, stavy, tabulka zbraní, hody na smrt a původy.'),
 (3, 'Původy z roku 2024, tempa cestování a schopnosti Lupiče a Mnicha předělané na perky.'),
 (7, 'Obrázky povolání Bojovník, Lovec, Kejklíř, Mastičkář, Válečník, Hraničář, Vědmák, Lupič, Alchymista, Čaroděj, Mág, Černokněžník, Vojevůdce a Stín. Obrázky ras Člověk, Elf, Trpaslík a Půlčík. Obrázky všech aspektů kromě Tvůrce života, Mnicha, Tvarovače kamene a Vládce přílivu. Obrázky v pravidlech: Zranění, Záchranný hod, Tělo a Duše, Mince a Materiál, Ohrožení.'),
 (8, 'Všechny obrázky perků a kouzel. Scriptorium je hra na zdobení rukopisů; obrázky v ní vytvořil autor téhle aplikace.'),
 (9, 'Neidhart von Reuental: ikona webu a obrázek v navigaci.'),
 (11, 'Obrázek rasy Kroll. Zveřejněno 21. září 2013.'),
 (12, 'Ilustrace z karty: městská brána na stránkách přihlášení a registrace.'),
 (13, 'Pozadí každé stránky.'),
 (14, 'Karty na úvodní stránce, odkazované přímo z D&D Beyond.'),
 (15, 'Ikony předmětů a pravidel.'),
 (18, 'Písma nadpisů a textu.'),
 (19, 'Architektura, vizuální jazyk a komponenty rozhraní.'),
 (20, 'Vývoj s pomocí AI: s ní vznikla velká část kódu.'),
 (21, 'Open-source základ, na kterém aplikace běží: React, Supabase, Tailwind CSS a TipTap.'),
 (22, 'Panství, hrady, obléhání a vojska: sezónní tah, nálada panství, opevnění a bitvy.'),
 (23, 'Inspirace pro část magie.'),
 (24, 'Obálka: obrázek povolání Zaříkávač.'),
 (25, 'Obrázek povolání Zvěd: obálka českého vydání Hraničářova učně: Haltovo nebezpečí.'),
 (26, 'Ilustrace z karty: obrázek povolání Šaman.'),
 (27, 'Obrázek povolání Druid. Zveřejněno 3. května 2017.'),
 (28, 'Obrázek povolání Inkvizitor.'),
 (29, 'Obrázek povolání Žrec. Zveřejněno 22. dubna 2016.'),
 (30, 'Obrázek povolání Ničitel. Zveřejněno 28. října 2022.')
) as v(id, cs) where credits.id = v.id and credits.used_for not like '%|cs|%';

update credits set medium = medium || ' |cs| ' || v.cs from (values
 ('Video game', 'Videohra'),
 ('Digital painting, DeviantArt', 'Digitální malba, DeviantArt'),
 ('Digital painting, ArtStation', 'Digitální malba, ArtStation'),
 ('Software', 'Software'),
 ('Reddit post, r/DnD', 'Příspěvek na Redditu, r/DnD'),
 ('Magic: The Gathering card, Commander Legends: Battle for Baldur''s Gate', 'Karta Magic: The Gathering, Commander Legends: Battle for Baldur''s Gate'),
 ('Magic: The Gathering card, Innistrad: Midnight Hunt', 'Karta Magic: The Gathering, Innistrad: Midnight Hunt')
) as v(en, cs) where credits.medium = v.en;
