-- Scout perks, part 2: Smuggler's hold and Weather eye (ungated), Ghost, Outrider and Spymaster.

insert into perks (id, name, kind, flavour, description, cost_amount, cost_resource, cost_unit) values
-- Ungated
('smugglers-hold', 'Smuggler''s hold |cs| Pašerácká skrýš', 'perk',
 'Just salted fish, officer. Smell it. |cs| Jenom solené ryby, pane strážníku. Přičichněte.',
 'Any ship or cart you load has a **chest-sized hidden space** in it. Finding it takes a won challenge against your Scout level. |cs| Každá loď nebo vůz, které nakládáš, má **skrýš velkou jako truhla**. Kdo ji chce najít, musí vyhrát střet proti tvé úrovni Zvěda.',
 null, null, null),
('weather-eye', 'Weather eye |cs| Oko na počasí', 'perk',
 'Red sky at night. You know the rest. |cs| Večerní červánky. Zbytek znáš.',
 'At sea or under an open sky, the DM rolls **tomorrow''s weather** tonight and tells you what it will be. |cs| Na moři nebo pod širým nebem hodí PJ **zítřejší počasí** už dnes večer a řekne ti, jaké bude.',
 null, null, null),
-- Ghost
('ambush-master', 'Ambush master |cs| Mistr přepadů', 'perk',
 'They never saw the first one. Or the second. |cs| Prvního neviděli. Ani druhého.',
 'When your side springs an ambush, you have a free **Quick**. Until your next turn, your allies'' attacks against the first enemy you hit are **Precise**. |cs| Když vaše strana přepadne nepřítele, máš zdarma **Rychle**. Do tvého dalšího tahu jsou útoky tvých spojenců na prvního nepřítele, kterého zasáhneš, **Přesné**.',
 null, null, null),
('nobodys-face', 'Nobody''s face |cs| Tvář nikoho', 'perk',
 'Average height. Brownish hair. Or was it grey? |cs| Průměrná postava. Hnědé vlasy. Nebo šedivé?',
 'People who met you can''t describe you afterwards, unless they win a challenge against your Scout level. They remember that someone was there, not who. |cs| Lidé, kteří tě potkali, tě pak nedokážou popsat, pokud nevyhrají střet proti tvé úrovni Zvěda. Pamatují si, že tam někdo byl, ne kdo.',
 null, null, null),
('cold-trail', 'Cold trail |cs| Vychladlá stopa', 'perk',
 'Footprints? What footprints? |cs| Stopy? Jaké stopy?',
 'Rolls to track you are **disadvantaged**, without you even trying. When your party makes an active effort to cover its trail (walking in a stream, brushing out tracks, splitting up), rolls to track all of you are disadvantaged too. |cs| Hody na stopování tebe jsou **v nevýhodě**, aniž by ses snažil. Když se tvá družina aktivně snaží zahladit stopy (jde potokem, zametá za sebou, rozdělí se), jsou v nevýhodě i hody na stopování vás všech.',
 null, null, null),
-- Outrider
('saddle-born', 'Saddle-born |cs| Narozený v sedle', 'perk',
 'You walk like a duck, but nobody rides like you. |cs| Chodíš jako kachna, ale nikdo nejezdí jako ty.',
 'Mounting and dismounting are free during your move, and you never get hurt falling from a horse. |cs| Nasednout a sesednout můžeš během pohybu zdarma a pád z koně ti nikdy neublíží.',
 null, null, null),
('master-of-tactics', 'Master of tactics |cs| Mistr taktiky', 'perk',
 'Left flank. No, your other left. |cs| Levé křídlo. Ne, to druhé levé.',
 'As a **bonus action**, you point out an opening: an ally within 10 m gets a free **Precise** on their next roll against a target you can see. It counts as that action''s one manoeuvre. |cs| Jako **bonusovou akcí** ukážeš na slabé místo: spojenec do 10 m má zdarma **Přesně** na svůj příští hod proti cíli, kterého vidíš. Počítá se jako jediný manévr té akce.',
 null, null, null),
('courier', 'Courier |cs| Kurýr', 'perk',
 'The message gets there. The horse might not. |cs| Zpráva dorazí. Kůň možná ne.',
 'Riding with a spare horse, **you** can gallop a second hour a day (+15 km on a road), and your horses don''t need a slow day afterwards. The rest of the party doesn''t get this. |cs| Když jedeš s náhradním koněm, můžeš **ty** cválat druhou hodinu denně (+15 km po cestě) a tví koně pak nepotřebují pomalejší den. Zbytek družiny to nemá.',
 null, null, null),
-- Spymaster
('nose-for-secrets', 'Nose for secrets |cs| Nos na tajemství', 'perk',
 'Everyone has something. |cs| Každý něco má.',
 'You ask the DM whether there''s **any dirt to be found** on an NPC, and the DM has to answer truthfully. Finding it is up to you. |cs| Zeptáš se PJ, jestli se na nějaké NPC **dá něco najít**, a PJ musí odpovědět pravdivě. Najít to už je na tobě.',
 2, 'charisma', null),
('little-birdies', 'Little birdies |cs| Ptáčci', 'perk',
 'A coin for the beggar, a coin for the stable boy, a coin for the washerwoman. |cs| Groš pro žebráka, groš pro čeledína, groš pro pradlenu.',
 'In any place with at least **40 people** living there, you can set up an **improvised network** in a day: urchins, beggars, gossips. It does **one task** for you with a bonus of **+1** and Bond 0, so it can''t avert a failure. It costs one payment (1 silver).

It disbands as soon as you set off, unless you invest in it and build it into a proper network (Bond from 0, 5 payments per +1). |cs| V každém místě, kde žije aspoň **40 lidí**, si za den založíš **narychlo sestavenou síť**: uličníky, žebráky, drbny. Udělá pro tebe **jeden úkol** s bonusem **+1** a Poutem 0, takže neúspěch odvrátit nemůže. Stojí jednu platbu (1 stříbrný).

Rozpadne se, jakmile odjedeš, pokud do ní neinvestuješ a nevybuduješ z ní řádnou síť (Pouto od 0, 5 plateb za +1).',
 null, null, null);

insert into class_perks (class_id, perk_id, sort) values
('scout', 'smugglers-hold', 70), ('scout', 'weather-eye', 71),
('scout', 'ambush-master', 72), ('scout', 'nobodys-face', 73), ('scout', 'cold-trail', 74),
('scout', 'saddle-born', 75), ('scout', 'master-of-tactics', 76), ('scout', 'courier', 77),
('scout', 'nose-for-secrets', 78), ('scout', 'little-birdies', 79);

insert into perk_requirements (perk_id, kind, required_perk_id) values
('ambush-master', 'has_aspect', 'ghost'), ('nobodys-face', 'has_aspect', 'ghost'), ('cold-trail', 'has_aspect', 'ghost'),
('saddle-born', 'has_aspect', 'outrider'), ('master-of-tactics', 'has_aspect', 'outrider'), ('courier', 'has_aspect', 'outrider'),
('nose-for-secrets', 'has_aspect', 'spymaster'), ('little-birdies', 'has_aspect', 'spymaster');
