-- Languages: the Tongue of the kings, Old tongues, First elvish, Dwarven runes; descriptions and samples;
-- relations; and the rule for understanding related languages.

insert into languages (id, name, description, sort, sample) values
(
  'tongue-of-the-kings',
  'Tongue of the kings |cs| Královská řeč',
  $d$The universal language of the empire before the cataclysm. Nobody remembers the empire's name, and nobody speaks its tongue any more. It survives in two ways: spoken, in the Liturgic of the Star God's clergy, and written, in bits carved on ruins, coins and old seals. Royalty learns a few lines to sound legitimate, and it's usually just for show. |cs| Univerzální jazyk říše z doby před kataklyzmatem. Jméno té říše si nikdo nepamatuje a jejím jazykem už nikdo nemluví. Přežívá dvojím způsobem: mluvený v liturgické řeči duchovenstva Hvězdného boha, psaný v útržcích vytesaných na ruinách, mincích a starých pečetích. Panovníci se naučí pár vět, aby zněli legitimněji, a většinou je to jen divadlo.$d$,
  1,
  $s$REGNVM · ANTE · STELLAS · ERAT
— "The kingdom was before the stars." (carved over a ruined gate, and stitched on a king's banner) |cs| REGNVM · ANTE · STELLAS · ERAT
— „Království bylo před hvězdami.“ (vytesáno nad zbořenou branou a vyšito na královské korouhvi)$s$
),
(
  'first-elvish',
  'First elvish |cs| První elfština',
  $d$The elven tongue from before the cataclysm. Only the oldest elves, who remember the world before it, still speak it, and elven songs keep it alive. Second elvish grew out of it. |cs| Elfský jazyk z doby před kataklyzmatem. Mluví jím už jen nejstarší elfové, kteří pamatují svět před ním, a naživu ho drží elfské písně. Vyrostla z něj druhá elfština.$d$,
  3,
  $s$Is gorm na cnuic a tha fada bhuainn.
— "Blue are the hills that are far from us." |cs| Is gorm na cnuic a tha fada bhuainn.
— „Modré jsou kopce, které jsou od nás daleko.“$s$
),
(
  'dwarven',
  'Dwarven runes |cs| Trpasličí runy',
  $d$Not a spoken language but a writing system: runes that differ from clan to clan, from the elder futhark of the oldest clans to the younger futhark and other runes of the newer ones. Dwarves speak the tongue of wherever they live. Knowing the runes also means knowing the customs that come with them: a dwarven map, for one, has east at the top. |cs| Nejde o mluvený jazyk, ale o písmo: runy, které se liší klan od klanu, od starého futharku nejstarších klanů po mladší futhark a jiné runy klanů novějších. Trpaslíci mluví jazykem místa, kde žijí. Znát runy znamená znát i zvyky, které k nim patří: trpasličí mapa má třeba nahoře východ.$d$,
  6,
  $s$ᛖᚲ ᚺᛚᛖᚹᚨᚷᚨᛊᛏᛁᛉ ᚺᛟᛚᛏᛁᛃᚨᛉ ᚺᛟᚱᚾᚨ ᛏᚨᚹᛁᛞᛟ
— "I, Hlewagastiz of Holt, made this horn." (an old clan's maker's mark, in elder futhark)

ᚴᚢᚾᛅᚱ ᚱᛅᛁᛋᛏᛁ ᛋᛏᛅᛁᚾ ᚦᛅᚾᛋᛁ
— "Gunnar raised this stone." (a younger clan, in younger futhark) |cs| ᛖᚲ ᚺᛚᛖᚹᚨᚷᚨᛊᛏᛁᛉ ᚺᛟᛚᛏᛁᛃᚨᛉ ᚺᛟᚱᚾᚨ ᛏᚨᚹᛁᛞᛟ
— „Já, Hlewagastiz z Holtu, jsem udělal tento roh.“ (značka mistra starého klanu, starým futharkem)

ᚴᚢᚾᛅᚱ ᚱᛅᛁᛋᛏᛁ ᛋᛏᛅᛁᚾ ᚦᛅᚾᛋᛁ
— „Gunnar vztyčil tento kámen.“ (mladší klan, mladším futharkem)$s$
),
(
  'old-tongues',
  'Old tongues |cs| Staré jazyky',
  $d$Dead languages of unnamed empires from the far corners of the world. Written only, and read by a handful of scholars. |cs| Mrtvé jazyky bezejmenných říší z dalekých koutů světa. Jen psané a čte je hrstka učenců.$d$,
  8,
  null
);

update languages set
  description = $d$A bastard form of the Tongue of the kings, spoken by the clergy of the Star God. |cs| Zkomolená odnož Královské řeči, kterou mluví duchovenstvo Hvězdného boha.$d$,
  sort = 2
where id = 'liturgic';

update languages set
  description = $d$The everyday language of elven clans and nations all over the world. It grew out of First elvish after the cataclysm and has changed only a little. |cs| Každodenní jazyk elfských klanů a národů po celém světě. Vyrostla z první elfštiny po kataklyzmatu a změnila se jen málo.$d$,
  sample = $s$Is glas iad na cnoic i bhfad uainn.
— "Green are the hills far from us." |cs| Is glas iad na cnoic i bhfad uainn.
— „Zelené jsou kopce daleko od nás.“$s$,
  sort = 4
where id = 'second-elvish';

update languages set
  description = $d$A bastard mix of First and Second elvish, kept by the druids. |cs| Zkomolená směs první a druhé elfštiny, kterou si uchovávají druidové.$d$,
  sample = $s$Beth yw'r haf i mi? Dim ond gaeaf llwm a dagrau'n lli.
— "What's the summer to me? Just a poor winter and a flood of tears." |cs| Beth yw'r haf i mi? Dim ond gaeaf llwm a dagrau'n lli.
— „Co je mi po létě? Jen chudá zima a záplava slz.“$s$,
  sort = 5
where id = 'druidic';

update languages set sort = 7 where id = 'kroll-clan-dialects';
update languages set sort = 9 where id = 'thieves-cant';

insert into language_relations (language_id, related_id) values
  ('liturgic', 'tongue-of-the-kings'),
  ('second-elvish', 'first-elvish'),
  ('druidic', 'first-elvish')
on conflict do nothing;

-- The rule for understanding a related language
update rulebook_pages set content = replace(replace(content,
$o$- A [background](backgrounds) adds the extra languages it lists.

::languages$o$,
$n$- A [background](backgrounds) adds the extra languages it lists.

::languages

## Related languages {#related}

Some languages grew out of others, and the table lists them as related. You can try to understand a language you don't know, as long as it's related to one you speak. Make a skill check that fits what you're trying to understand, with **disadvantage**. A failure can be averted as usual. Understanding isn't speaking: you can follow what's said or written, but you can't answer in it.

:::example[Blue hills, green hills]
Lianne speaks Second elvish and finds a line of First elvish carved into a waystone. The two are related, so they can try. The DM calls for Scholarship, and Lianne (Incantor 2) rolls 3d6, keeping the worst two: 2 and 4, plus 2 makes 8. One short of 9. At Danger Level 2 they exhaust 2 Soul and work it out: far-off hills look blue, so whatever lies further down the road, don't expect it to be better.
:::$n$),
$o$- [Původ](backgrounds) přidá jazyky navíc, které uvádí.

::languages$o$,
$n$- [Původ](backgrounds) přidá jazyky navíc, které uvádí.

::languages

## Příbuzné jazyky {#related}

Některé jazyky vyrostly z jiných a tabulka je uvádí jako příbuzné. Jazyku, který neznáš, se můžeš pokusit porozumět, pokud je příbuzný s některým, kterým mluvíš. Hoď zkoušku dovednosti, která sedí na to, čemu se snažíš porozumět, s **nevýhodou**. Neúspěch můžeš odvrátit jako obvykle. Rozumět neznamená mluvit: chápeš, co se říká nebo píše, ale odpovědět v tom jazyce nedokážeš.$n$)
where slug = 'languages';
