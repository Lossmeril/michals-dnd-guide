-- Lopsided aspects need 4 + 1, not 4 + 2, so a 5 / 1 split (which already
-- unlocks the advanced class) gets an aspect too. Balanced 3 + 3 stays.
update perk_requirements r
set level = 1
from perks p
where p.id = r.perk_id
  and p.kind = 'aspect'
  and r.kind = 'class_level'
  and r.level = 2;

update rulebook_pages
set content = replace(
      replace(content,
        '**4 levels in the first parent and 2 in the second**, the second **3 + 3**, the third **2 + 4**. The split you used to unlock the class decides which aspect you get first.',
        '**4 levels in the first parent and 1 in the second**, the second **3 + 3**, the third **1 + 4**. Any split that unlocks the class gets at least one aspect, and the split decides which comes first.'),
      '**4 úrovně v prvním rodiči a 2 ve druhém**, druhý **3 + 3**, třetí **2 + 4**. Poměr, kterým sis povolání odemkl, rozhoduje, který aspekt dostaneš první.',
      '**4 úrovně v prvním rodiči a 1 ve druhém**, druhý **3 + 3**, třetí **1 + 4**. Každý poměr, který povolání odemkne, dá aspoň jeden aspekt, a rozhoduje, který dostaneš první.')
where slug = 'advanced-classes';
