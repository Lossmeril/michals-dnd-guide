-- Known settings no longer give a flat +1: the DM may allow a temporary +1 when the player asks and it fits

update public.rulebook_pages set content = replace(replace(replace(replace(content,
  'A roll inside the background''s known setting gets **+1**. It applies only to :soul and :charisma rolls (knowing the ropes, finding the right person, haggling, getting a hearing), to every kind of roll, and without a fitting class too: a plain 2d6 + 1. The DM decides whether a roll falls inside the setting.',
  'A known setting gives no bonus on its own. It''s what your character knows: the places, the people, and how things are done there. When it makes sense, the player can ask the DM for a temporary **+1** on a roll inside it, and the DM decides. It''s a reward for putting the backstory to use, not a standing bonus.'),
  'Michal, a former Soldier, haggles with a camp quartermaster over a horse. War camps are his known setting: +1 on top of his Juggler level.',
  'Michal, a former Soldier, haggles with a camp quartermaster over a horse. He reminds the DM that war camps are his known setting, and the DM allows +1 on top of his Juggler level for this haggle.'),
  'Hod uvnitř známého prostředí původu dostane **+1**. Platí jen pro hody na :soul[Duši] a :charisma[Vliv] (vyznat se, najít toho správného člověka, smlouvat, dostat slyšení), pro každý druh hodu a i bez vhodného povolání: holé 2k6 + 1. O tom, jestli hod do prostředí spadá, rozhoduje PJ.',
  'Známé prostředí samo o sobě žádný bonus nedává. Je to to, co tvoje postava zná: místa, lidi a jak se tam věci dělají. Když to dává smysl, může si hráč u PJ říct o dočasné **+1** k hodu uvnitř prostředí a PJ rozhodne. Je to odměna za to, že hráč využije příběh své postavy, ne stálý bonus.'),
  'Michal, bývalý Voják, smlouvá s táborovým proviantníkem o koně. Vojenské tábory jsou jeho známé prostředí: +1 navíc k úrovni Kejklíře.',
  'Michal, bývalý Voják, smlouvá s táborovým proviantníkem o koně. Připomene PJ, že vojenské tábory jsou jeho známé prostředí, a PJ mu pro toto smlouvání povolí +1 navíc k úrovni Kejklíře.')
where slug = 'backgrounds';

update public.rulebook_pages set content = replace(replace(content,
  'the DM can add a fitting talker''s class level, or a [known setting](backgrounds)''s +1, once the party opens its mouth.',
  'the DM can add a fitting talker''s class level once the party opens its mouth, or a +1 for a [known setting](backgrounds) if the player asks and it fits.'),
  'PJ může přičíst úroveň povolání vhodného mluvčího, nebo +1 za [známé prostředí](backgrounds), jakmile družina otevře pusu.',
  'PJ může přičíst úroveň povolání vhodného mluvčího, jakmile družina otevře pusu, nebo +1 za [známé prostředí](backgrounds), pokud si o ni hráč řekne a dává to smysl.')
where slug = 'encounters';

update public.rulebook_pages set content = replace(replace(content,
  ' A craftsman''s known setting helps them buy, sell and appraise, which are :soul and :charisma rolls. A player who wants their trade to count on a craft roll can ask the DM for +1.',
  ' A player who wants their trade to count on a craft roll can ask the DM for +1, as with any known setting.'),
  ' Známé prostředí řemeslníkovi pomáhá kupovat, prodávat a odhadovat cenu, což jsou hody na :soul[Duši] a :charisma[Vliv]. Hráč, který chce, aby se jeho řemeslo počítalo i v hodu na výrobu, si může u PJ říct o +1.',
  ' Hráč, který chce, aby se jeho řemeslo počítalo i v hodu na výrobu, si může u PJ říct o +1, jako u každého známého prostředí.')
where slug = 'crafting';
