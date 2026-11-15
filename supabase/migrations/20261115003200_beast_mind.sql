-- 2026-11-15: the Shaman's Animal tracks is dropped (the Hunter's Fresh tracks replaces it);
-- Animal magic gets a core spell, Beast mind, from DrD2's magie zvířat (as Mind touch for the Mage).

delete from perk_requirements where perk_id = 'animal-tracks';
delete from class_perks where perk_id = 'animal-tracks';
delete from perks where id = 'animal-tracks';

insert into perks (id, name, flavour, description, kind, components, range, duration) values
('beast-mind', 'Beast mind |cs| Mysl zvířete',
 'The watchdog wags its tail at the burglars. It couldn''t say why. |cs| Hlídací pes vrtí na zloděje ocasem. Neřekl by proč.',
 'You reach into the mind of one ordinary, non-magical animal in sight: a beast, a bird, a fish, a reptile. Never a monster, however dim it is. You need magic mode.
i) Unnoticed by the animal, you read and nudge its mood, intentions and feelings: calm it, make it ignore a passing group, let you ride it or cut a lock of its fur. It can still fight it off.
ii) The animal knows or senses someone is in its head, and may howl or fly into a fury to throw you out: you talk with it, in its own voice or without words, to learn things, bargain or persuade; you read its thoughts and memories; or you see and hear through its senses. Animals don''t understand human speech, so they pass on what they saw, smelled and heard (a tone of voice), not what was said.
A willing animal can stay linked as long as you like, while it''s in sight and you''re paying attention. Against a resisting one, each successful cast gives one feeling for a moment, or one answer.
In the rules, it changes the Danger Level through feelings: respect or fear, fury or bloodlust, weariness or dullness for a foe; pride for one that should lead its pack. Against NPC animals it deals Soul or Charisma damage as usual. It can''t knock an animal out, kill it, drive it mad or take over its will on its own, but it can talk it into following you, or keep a watchdog quiet. |cs| Sáhneš do mysli jednoho obyčejného, nemagického zvířete, které vidíš: šelmy, ptáka, ryby, plaza. Nikdy netvora, ať je jakkoli hloupý. Potřebuješ magický mód.
i) Bez vědomí zvířete čteš a postrkuješ jeho náladu, záměry a pocity: uklidníš ho, zařídíš, aby si nevšímalo procházející skupiny, aby se na sobě nechalo vozit nebo si nechalo ustřihnout pramínek srsti. Zvíře to i tak může přemoci.
ii) Zvíře ví nebo tuší, že je mu někdo v hlavě, a může výt nebo propadnout zuřivosti, aby se vetřelce zbavilo: mluvíš s ním, jeho řečí nebo beze slov, abys něco zjistil, vyjednával nebo ho přesvědčil; čteš jeho myšlenky a vzpomínky; nebo vidíš a slyšíš jeho smysly. Zvířata nerozumějí lidské řeči, takže předají, co viděla, cítila a slyšela (tón hlasu), ne co se říkalo.
S dobrovolným zvířetem můžeš zůstat spojen libovolně dlouho, dokud ho vidíš a věnuješ mu pozornost. U vzpírajícího se zvířete přinese každé úspěšné kouzlo jeden pocit na chvíli nebo jednu odpověď.
V pravidlech mění Ohrožení skrze pocity: respekt či strach, zuřivost či krvelačnost, únava či otupělost pro nepřítele; hrdost pro zvíře, které má vést smečku. Zvířecím NPC uděluje zranění Duše nebo Vlivu jako obvykle. Samo o sobě zvíře neomráčí, nezabije, nepřivede k šílenství ani mu nevezme vůli, ale může ho přemluvit, aby tě následovalo, nebo umlčet hlídacího psa.',
 'spell', '{verbal}', 'Sight', 'instantaneous')
on conflict (id) do nothing;

insert into class_perks (class_id, perk_id, is_core, sort) values ('shaman', 'beast-mind', true, -1)
on conflict do nothing;
