-- Two more premade traits: Manic-depressive and Pious.

insert into traits (name, flavour, description, upside, downside, is_custom, created_by)
select t.name, t.flavour, t.description, t.upside, t.downside, false,
  (select created_by from traits where name like 'Insomniac%' limit 1)
from (values
(
  'Manic-depressive |cs| Maniodepresivní',
  $f$Some mornings the world is theirs. Some mornings it isn't worth getting up for. |cs| Některá rána jim patří celý svět. Jindy nestojí za to ani vstát.$f$,
  $d$You never know who wakes up in your skin. One day you could talk a bishop into dancing; the next, a stranger's glance feels like an accusation. The others have learned to ask how you slept before they ask anything else.

|cs|

Nikdy nevíš, kdo se ve tvé kůži probudí. Jeden den bys přemluvil biskupa k tanci; druhý den ti i pohled cizince připadá jako obvinění. Ostatní se naučili nejdřív se zeptat, jak ses vyspal, a teprve pak cokoli dalšího.$d$,
  $u$After every rest, roll a d20. On an even number you're in good spirits: until your next rest, the Danger Level of your Soul and Charisma actions starts 1 lower (2 instead of the usual 3). |cs| Po každém odpočinku si hoď k20. Na sudé číslo máš dobrou náladu: do dalšího odpočinku začíná Ohrožení tvých akcí Duše a Vlivu o 1 níž (2 místo obvyklých 3).$u$,
  $w$On an odd number you're in bad spirits: until your next rest, the Danger Level of your Soul and Charisma actions starts 1 higher (4 instead of 3). The DM still raises and lowers it from there as usual. |cs| Na liché číslo máš špatnou náladu: do dalšího odpočinku začíná Ohrožení tvých akcí Duše a Vlivu o 1 výš (4 místo 3). PJ ho od toho dál zvyšuje a snižuje jako obvykle.$w$
),
(
  'Pious |cs| Zbožný',
  $f$Their conscience is loud, and it never sleeps. |cs| Jejich svědomí je hlasité a nikdy nespí.$f$,
  $d$You were raised on prayers and the fear of the Star God, and it stuck. Temptation slides off you, but stepping off the righteous path, even for a good reason, costs you. And the one sin nobody warned you about properly was the jug.

|cs|

Vyrostl jsi na modlitbách a bázni před Hvězdným bohem a zůstalo to v tobě. Pokušení po tobě sklouzne, ale sejít ze správné cesty, i z dobrého důvodu, tě něco stojí. A jediný hřích, před kterým tě nikdo pořádně nevaroval, byl džbán.$d$,
  $u$You have advantage on resisting seduction and other temptations to do something immoral. |cs| Máš výhodu, když odoláváš svádění a jiným pokušením udělat něco nemorálního.$u$,
  $w$You have disadvantage on resisting alcohol. Doing anything immoral (lying, stealing, betraying, desecrating) has a cost to attempt of 1 Soul. |cs| Máš nevýhodu, když odoláváš alkoholu. Cokoli nemorálního (lež, krádež, zrada, znesvěcení) má cenu za pokus 1 Duše.$w$
)
) as t(name, flavour, description, upside, downside);
