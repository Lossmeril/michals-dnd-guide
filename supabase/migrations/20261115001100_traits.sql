-- Six premade traits: Short fuse, Show-off, Drunkard, Coward, Superstitious, Night-blind.

insert into traits (name, flavour, description, upside, downside, is_custom, created_by)
select t.name, t.flavour, t.description, t.upside, t.downside, false,
  (select created_by from traits where name like 'Insomniac%' limit 1)
from (values
(
  'Short fuse |cs| Výbušný',
  $f$An insult is a debt, and they pay debts on the spot. |cs| Urážka je dluh a dluhy se splácejí hned.$f$,
  $d$You never learned to let things go. A sneer, a shove, a word about your mother, and the room goes red. Sometimes that's exactly what the moment needs.

|cs|

Nikdy ses nenaučil věci jen tak přejít. Úšklebek, strčení, slovo o tvojí matce, a všechno zrudne. Někdy je to přesně to, co chvíle potřebuje.$d$,
  $u$In a fight that starts from an insult or a provocation, you get a free Quick, and a free Mighty on your first attack. |cs| V boji, který začal urážkou nebo provokací, máš Rychle zdarma a Mocně zdarma na první útok.$u$,
  $w$Once insulted, your Soul and Charisma rolls are disadvantaged until you've answered the insult: with your fists, a duel or real revenge. |cs| Jakmile tě někdo urazí, máš na hody Duše a Vlivu nevýhodu, dokud urážku neoplatíš: pěstí, soubojem nebo skutečnou pomstou.$w$
),
(
  'Show-off |cs| Exhibicionista',
  $f$Nothing is worth doing unless someone sees it. |cs| Nic nestojí za to dělat, když se nikdo nedívá.$f$,
  $d$Give you a crowd and you'll juggle knives, climb the bell tower or kiss the burgomaster's daughter. Give you an empty room and you'll wonder why you bothered. Falling flat in front of people, though, stays with you.

|cs|

Dej ti publikum a budeš žonglovat s noži, vylezeš na zvonici nebo políbíš purkmistrovu dceru. V prázdné místnosti nevíš, proč se vůbec snažit. Jenže ztrapnit se před lidmi, to v tobě zůstane.$d$,
  $u$With an audience (anyone watching who isn't an enemy), your first roll of the scene gets a free Precise. |cs| Když máš publikum (kohokoli, kdo se dívá a není nepřítel), tvůj první hod ve scéně má Přesně zdarma.$u$,
  $w$A failure in front of that audience that you don't avert also costs you a level-1 Charisma Scar. |cs| Neúspěch před tímhle publikem, který neodvrátíš, tě navíc stojí Jizvu 1. stupně na Vlivu.$w$
),
(
  'Drunkard |cs| Pijan',
  $f$Their hands shake until noon, or until the first pint. |cs| Ruce se jim třesou do poledne, nebo do prvního korbele.$f$,
  $d$Mornings are the worst. The world is too loud, your hands won't hold still and your head won't think straight. One drink fixes all of it, and after a few, nothing anyone says can really touch you.

|cs|

Rána jsou nejhorší. Svět je moc hlasitý, ruce se nechtějí uklidnit a hlava nemyslí. Jeden doušek to všechno spraví a po pár dalších se tě už nic, co kdo řekne, doopravdy nedotkne.$d$,
  $u$After a drink, you have a resistance bonus of 1 when averting Soul and Charisma failures, until your next rest. |cs| Po napití máš do dalšího odpočinku bonus k odolnosti 1, když odvracíš neúspěch na Duši a Vlivu.$u$,
  $w$Without a drink by midday, you're Imprecise on Body and Soul skills until you get one. A mug costs about 1 copper. |cs| Když se do poledne nenapiješ, máš na dovednosti Těla a Duše postih Nepřesně, dokud se nenapiješ. Korbel stojí zhruba 1 měďák.$w$
),
(
  'Coward |cs| Zbabělec',
  $f$The bravest thing they ever did was run. |cs| To nejstatečnější, co kdy udělali, byl útěk.$f$,
  $d$Others call it cowardice. You call it still being alive. You know every back door, every side alley and the exact moment a fight is lost, usually a little before it is.

|cs|

Ostatní tomu říkají zbabělost. Ty tomu říkáš, že ještě žiješ. Znáš každé zadní dveře, každou boční uličku a přesnou chvíli, kdy je boj prohraný, obvykle o něco dřív, než doopravdy je.$d$,
  $u$You can disengage as a bonus action, and when you run from a fight, your initiative is Quick. |cs| Ústup můžeš provést jako bonusovou akci, a když z boje utíkáš, tvoje iniciativa je Rychle.$u$,
  $w$Facing a creature bigger than you, or any unit, the Danger Level of your Soul rolls is 1 higher, and your first attack against it is disadvantaged. |cs| Proti tvoru většímu než ty, nebo proti jakékoli jednotce, máš na hody Duše Ohrožení o 1 vyšší a na první útok proti němu nevýhodu.$w$
),
(
  'Superstitious |cs| Pověrčivý',
  $f$The crow on the roof means something. It always does. |cs| Vrána na střeše něco znamená. Vždycky.$f$,
  $d$You spit over your shoulder, count magpies and never whistle after dark. The others laugh, but now and then the crow on the roof was right.

|cs|

Plivneš si přes rameno, počítáš straky a po setmění nikdy nepískáš. Ostatní se smějí, jenže občas měla ta vrána na střeše pravdu.$d$,
  $u$Once a session, ask the DM whether there's a bad omen about the place or person in front of you. The DM answers truthfully, though vaguely. |cs| Jednou za sezení se můžeš PJ zeptat, jestli nad místem nebo člověkem před tebou visí zlé znamení. PJ odpoví pravdivě, i když mlhavě.$u$,
  $w$After a bad omen (a black cat, a broken mirror, a funeral on the road), the Danger Level of your Soul rolls is 1 higher until your next rest. |cs| Po zlém znamení (černá kočka, rozbité zrcadlo, pohřeb na cestě) máš do dalšího odpočinku na hody Duše Ohrožení o 1 vyšší.$w$
),
(
  'Night-blind |cs| Šeroslepý',
  $f$By day they see the hawk; at dusk they don't see the wall. |cs| Ve dne vidí jestřába; za šera nevidí zeď.$f$,
  $d$Your eyes are sharp in daylight, sharper than anyone's. But once the sun goes down, the world turns to grey shapes, and you've walked into more doorframes than you'd like to admit.

|cs|

Za denního světla máš ostré oči, ostřejší než kdokoli jiný. Jenže jakmile slunce zapadne, svět se rozpadne do šedých tvarů a do futer jsi už narazil víckrát, než bys rád přiznal.$d$,
  $u$By day, you get a free Precise on noticing anything far away. |cs| Ve dne máš Přesně zdarma, když si všímáš čehokoli v dálce.$u$,
  $w$In poor light, you're Imprecise on ranged attacks and on noticing anything. |cs| Za špatného světla máš postih Nepřesně na útoky na dálku a na všímání si čehokoli.$w$
)
) as t(name, flavour, description, upside, downside);
