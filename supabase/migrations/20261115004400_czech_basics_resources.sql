-- Rulebook (2026-11-15): Czech for index, advantage, bonuses, dice, resources, danger-level, exhaustion, healing, siege-engines.
-- The English half stays; the Czech half is replaced.

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Vítej v Michalových pravidlech pro D&D! Jsem Michal a budu tvůj PJ.

Myslíš si, že nejsem dost autistický na to, abych prostě vzal existující pravidla a nebyl zvláštní případ? Think twice, mate!

Jestli jsi hrál 5E, většina ti bude povědomá: házíš kostkami, bojuješ s věcmi, získáváš nové levely.

Tři věci ale fungují jinak:

- **Žádné atributy.** Žádná Síla, žádná Obratnost, žádné házení statů. Postavy mají tři [zdroje](resources), :body, :soul a :charisma, které utrácejí, aby se prodraly nebezpečím.
- **Bonusy k hodům dávají povolání.** Každý hod přičítá [úroveň povolání](classes). Povolání jsou balíčky dovedností a postavy je volně kombinují. Bonusy se tak rozloží mnohem přirozeněji než s hromadou atributů.
- **Čím hůř, tím dráž.** [Ohrožení](danger-level) určuje, kolik postava zaplatí, aby se vyhnula špatnému výsledku. Zaplať příliš a začneš sbírat [Jizvy](exhaustion#scars).

::::cards{cols="3"}

::image{src="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/9af772c9-e4f9-4b48-a7fe-a096797a42f5.webp" alt="" layout="inline"}

::image{src="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/6972c2f8-760f-4789-8b2e-dd6199a2d286.webp" alt="" layout="inline"}

::image{src="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/38f61f82-de2c-4475-940f-b251495c954b.webp" alt="" layout="inline"}

::::

## Kapitoly {#chapters}

Potřebuješ rychle něco najít? Koukni níže, nebo použij navigaci vlevo!

::chapters$cs$
where slug = 'index';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Některé situace, perky a stavy naklánějí šance. Můžou ti dát bonus k hodu, nebo ti zkomplikovat život. Říkáme tomu **výhoda** a **nevýhoda**.

:::note[Výhoda JE manévr]
Některé perky ti můžou dát výhodu. Některé ti můžou dát [manévr Přesně](manoeuvres) zdarma. Výhoda u akce **je** [manévr Přesně](manoeuvres); výhoda u iniciativy **je** [manévr Rychle](manoeuvres).

Jakákoli výhoda z perku, Požehnání nebo situace se počítá jako Přesně nebo Rychle zdarma. Platit za ně, když už výhodu máš, nic nemění.
:::

S výhodou hodíš o jednu kostku víc než obvykle a tu nejhorší zahodíš. S nevýhodou je to naopak:

| Hod | Výhoda | Nevýhoda |
|---|---|---|
| Zkouška | Hoď 3k6, nech si dvě nejlepší | Hoď 3k6, nech si dvě nejhorší |
| Střet | Hoď 2k20, nech si vyšší | Hoď 2k20, nech si nižší |
| Iniciativa | Hoď 2k20, nech si vyšší | Hoď 2k20, nech si nižší |

:::note[Za výhodu se dá zaplatit]
Protože výhoda je [manévr](manoeuvres), dá se za ni snadno zaplatit. Potřebuješ trochu štěstí navíc? Prostě utrať jeden zdroj a je tvoje, kamaráde.

*Viz: [Manévry](manoeuvres)*
:::

- **Nesčítají se.** Tři zdroje výhody jsou pořád jeden hod s výhodou.
- **Nevýhoda vždycky vyhrává.** Pokud má hod **jakoukoli** nevýhodu, je s nevýhodou, ať má zdrojů výhody kolik chce. Výhoda nevýhodu nikdy neruší. (V 5E se jedna a jedna vyruší; tady ne.)
- Platí to pro každý zdroj výhody, placený i zdarma: Přesně, Rychle, manévry zdarma z perků, Požehnání, útok na ležící cíl. Platit za výhodu u hodu s nevýhodou je zbytečné.

:::example[Dvě nejlepší]{image="/img/rulebook/michal.webp"}
Michal šplhá po zdi s lanem a jeho perk mu dává [Přesně](manoeuvres) zdarma. Vezme si výhodu a hodí :roll[d6 5 (1) 4].

Nechá si 5 a 4. S Kejklířem 2 je to 11 a je nahoře.
:::$cs$
where slug = 'advantage';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Jsou způsoby, jak tě hra může odměnit bonusy, aby ti trochu usnadnila život.

## Bonusové kostky {#bonus-dice}

Některé schopnosti dávají **bonusovou kostku**, například k4 na 1. úrovni, která vyroste na k12 na 5. úrovni. Během střetnutí ji smíš přidat k **jakémukoli jednomu hodu**: iniciativě, zkoušce, střetu, čemukoli.

Jakmile se rozhodneš jí hodit, výsledek platí, dobrý i špatný. Bonusové kostky obvykle zmizí

## Bonusy {#merits}

Bonusy jsou malé, krátkodobé odměny za dobrou hru, které rozdává PJ. PJ může udělit bonus za **dobrou hru, vytvoření zajímavé situace nebo hraní role**: chytrý plán, dobrý příběh, hraní [povahy](creating-a-character) postavy.

Bonus ti v podstatě dá jeden zdroj zdarma k utracení, ať už :body, :soul, nebo :charisma. Můžeš za něj koupit [manévr](manoeuvres), nebo ho použít, když se [vyčerpáváš](exhaustion).

:::example[Dobrá hra]{image="/img/rulebook/michal.webp"}
Michal dostane bonus jako hodnej kluk, za svoje kvalitní hraní role (ne úchylné).

V další průšvihové situaci, do které se dostane, se rozhodne bonus použít na [manévr Mocně](manoeuvres), aby udělil kostku zranění navíc.
:::$cs$
where slug = 'bonuses';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$:::note[]
*„Alea iacta est…“*

&mdash;Julius Caesar, když si v brodu namočil ponožky
:::

Kostky rozhodují, co se stane, když výsledek není jistý. Hody jsou čtyř druhů a každý z nich přičítá úroveň [povolání](classes), ke kterému dovednost patří.

:::note[Musím házet vždycky?]
Pravidla říkají „kdykoli výsledek není jistý“. Je asi jasné, že utrhnout kytku ze země není nic, v čem by se dalo selhat, a akce je tedy automatická…

Pokud teda PJ nechce být kretén… 😏
:::

:::note[Nepovedený hod]

Tahle hra se od jiných verzí liší tím, jak pracuje s neúspěchem. Nepovedený hod automaticky neznamená úplný nezdar.

Zatím ti stačí vědět, že neúspěch můžeš buď odvrátit [vyčerpáním a Jizvami](exhaustion), nebo ho přijmout, protože neúspěch často vytvoří zajímavější a tvořivější situace v příběhu.
:::

## Zkouška {#skill-check}

::image{src="/img/rulebook/skill-check.webp" alt="Dobrodruh páčí zámek" layout="side"}

::formula[2k6 + úroveň povolání ≥ 9]
Zkouška je ten nejzákladnější hod, jaký existuje.

Zkrátka se tvoje postava snaží překonat překážku, která se nebrání: zamčené dveře, útes, dav, který je potřeba přesvědčit. **Hoď dvěma šestistěnnými kostkami a přičti svou úroveň v povolání, ke kterému dovednost patří. 9 a víc je úspěch.**

:::note[Žádné podvádění…]
Když hod nevyjde, stejnou akci už zkusit nemůžeš. Když třeba nevylezeš na zeď, nemůžeš to zkoušet znovu, **pokud se nezmění situace** (přijde ti pomoct kamarád, odlákáš stráže, aby se ti snížilo Ohrožení…).
:::

:::example[Kapsářství]{image="/img/rulebook/michal.webp"}
Michal (Kejklíř 2) se snaží vybrat kupci kapsu. Zručnost rukou je dovednost Kejklíře, takže hází 2k6 + 2.

Hodí :roll[d6 4 3] **+ 2 = 9**.

Jen tak tak, ale celý podnik vyjde a Michal odchází se zapečetěnou smlouvou.
:::

:::note[Co když chci vybrat kapsu, ale nejsem Kejklíř?]
Nemáš povolání s tou dovedností? To nevadí. Pořád můžeš zkusit cokoli, co není jedinečná dovednost, jen bez bonusu: holé 2k6.

Jedinou výjimkou jsou takzvané *jedinečné dovednosti*, které může zkusit jen ten, kdo má dané povolání.
:::

## Střet {#challenge}

::image{src="/img/rulebook/challenge.webp" alt="Dva bojovníci křižují meče" layout="side"}

::formula[k20 + úroveň povolání proti k20 + úroveň povolání]

Střet je hod, kdy se dvě strany neshodnou na výsledku. Každý boj, ale taky páka, karetní hra nebo hádka jsou střet.

Obě strany hodí k20 a přičtou úroveň povolání. Vyšší výsledek vyhrává.

:::note[A co při shodě?]
Při shodě vyhrává ve výchozím stavu obránce.
:::

:::example[Hra na svádění]{image="/img/rulebook/michal.webp"}
Michal (Kejklíř 2) se v hospodě snaží svést dívku. Aby z ní vytáhl nějaké informace, tvrdil své družině. Chudinka má ale na celou věc jiný názor, a tak se hod bere jako střet.

Michal hodí :roll[d20 6] **+ 2** (svádění je dovednost Kejklíře) **= 8**.

Dívka hodí :roll[d20 12] **+ 1** (má mírný bonus na odolávání svádění) **= 13**

Smůla. Odolá jeho neohrabanému šarmu a Michal si bude muset informace sehnat jinde.
:::

## Iniciativa {#initiative}

::image{src="/img/rulebook/initiative.webp" alt="Hospodská rvačka těsně před začátkem" layout="side"}

::formula[k20]

Třetím druhem hodu je iniciativa. Iniciativa ukazuje, jak rychle se postava dokázala v situaci zorientovat, aby jednala.

Když začne boj, každý hodí holou k20. Nejvyšší jedná první a tak dál dolů. Úroveň povolání se nepřičítá.

:::example[Hospodská rvačka]{image="/img/rulebook/michal.webp"}
Místní hospodský rváč, rozzuřený tím, že Michal flirtuje s jeho snoubenkou, vyskočí na nohy a popadne korbel, co má po ruce.
Michal hodí :roll[d20 17], rváč :roll[d20 5]. Michal to rychleji pobere a táhne první.
:::

## Zranění {#damage}

::image{src="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/5ecff9af-aefb-473d-b6b8-d0aff169bb01.webp" alt="" layout="side"}

::formula[kostky zbraně nebo schopnosti + úroveň povolání]

Když zasáhneš [NPC](npcs), hoď kostky zbraně a přičti úroveň povolání. Součet je zranění, které se odečte od jeho hodnoty :body[Těla].

Hráčské postavy nemají životy; zranění se jim místo toho mění v [Jizvu](defending#how-bad-a-hit-is).

Zbraně používají tabulku z 5E a každá zbraň má jinou kostku zranění.

:::note[Kritický zásah]
Když ve střetu nebo zkoušce před hodem na zranění hodíš :roll[d20 20] nebo :roll[d6 6 6], zásah je kritický a [manévr Mocně](manoeuvres) dostaneš zdarma. Nepočítá se do jednoho manévru za akci.
:::

:::example[Hospodská rvačka 2: Tokyo Drift]{image="/img/rulebook/michal.webp"}
Michalovi (Kejklíř 2) nezbývá než se zuřícímu hospodskému rváči bránit. Vytasí krátký meč a sekne hromotluka do ruky.

Kejklíř normálně nemá dovednost v pěším boji se zbraní, protože to je dovednost Bojovníka. Krátký meč je ale **finesní zbraň**, takže k hodu může přičíst svou úroveň Kejklíře.

Hromotluk nereaguje, takže Michal hází zkoušku: :roll[d6 6 2] **+ 2 ≥ 9**. Uspěje.

Pak hodí na zranění. Krátký meč má kostku zranění k6.

:roll[d6 4] **+ 2** (bonus za úroveň útočícího povolání) **= 6 zranění :body[Těla] cíli**.
:::

## Záchranný hod {#saving-throw}

::image{src="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/79199346-3ffd-4fa4-ba60-8b3af36ace26.webp" alt="" layout="side"}

Záchranný hod je pasivní podoba zkoušky. Záchranný hod je cokoli, co postava musí překonat, aniž by proti ní někdo házel.

Všimnout si pasti, vydržet jed, vyhnout se propadající se podlaze, odolat kletbě, zvládnout dlouhý pochod sněhem nebo se probudit, když se k tobě někdo připlíží, to všechno jsou příklady záchranného hodu.

::formula[2k6 + úroveň povolání ≥ 9]

### Které povolání použít? {#which-class-to-use}
Uznávám, že tohle umí zamotat hlavu, ale tady je pár orientačních pravidel:

U některých událostí hráč řekne, **jak** se s nástrahou postava vypořádá. PJ přijme povolání, jehož dovednosti dávají smysl:
- Proti stejné nástraze může fungovat víc přístupů. Šipkové pasti se dá uhnout (Kejklíř), chytit ji na štít (Bojovník), nebo si jí všimnout předem (Lovec).

Některé události mají prostě jednu dovednost, se kterou je nejlepší házet. Všimnout si přepadu v divočině vždycky spadá pod Lovce a přepadu ve městě pod Kejklíře.

Dovednosti se řídí **oblastmi znalostí**, ne atributy z 5E. Poznat šermířskou školu podle postoje je Bojovníkova *Znalost zbraní*; vybavit si, jak funguje obléhací stroj, jsou Válečníkovy *Válečnické znalosti*. Ani jedno není obecný hod na „Inteligenci“.
- Odpovídat můžou i pokročilá povolání, když se hodí některá jejich dovednost: *Mechanismy* (Lupič) u zámku s pastí, *Vzdušná akrobacie* (Lupič) při pádu.
- Postava bez vhodného povolání hází holé 2k6.

:::example[Hospodská rvačka 3: Návrat krále]{image="/img/rulebook/michal.webp"}
Najednou vypukne rvačka přes celou hospodu. Z ničeho nic letí přímo na Michala láhev vína.

PJ chce zdůraznit, jak chaotická situace je, takže Michalovi ani neřekne, co se děje, a nechá ho hodit záchranný hod. Rozhodl se, že Michalovi dovolí použít bonus Kejklíře, protože uhnout se dá.

Michal tedy hodí :roll[d6 6 5] **+ 2 ≥ 9**.

PJ popíše, jak se Michal před letící lahví skrčí. Michal se pak rozhodne, že je nejvyšší čas z hospody zmizet.
:::

#### Výchozí dovednosti {#default-skills}

Když nikdo nemá lepší nápad, tohle jsou náhradní odpovědi:

| Nástraha | Dovednost | Povolání | Zdroj |
|---|---|---|---|
| Uhnout pasti, padajícím kamenům nebo výbuchu; udržet rovnováhu | Akrobacie | Kejklíř | :body |
| Totéž v divočině: sesuv kamení, hroutící se břeh | Pohyb v divočině | Lovec | :body |
| Udržet se, vyprostit se ze sítě nebo sevření, vyrazit dveře | Síla | Bojovník | :body |
| Jed, nemoc, zima, hlad | Výdrž | Mastičkář | :body |
| Dlouhý pochod, těžká práce, těžký náklad | Síla | Bojovník | :body |
| Strach, okouzlení, magie mysli, pokušení | Síla vůle | Zaříkávač | :soul |
| Zachovat tvář pod výhrůžkami, posměchem nebo tlakem okolí | Sebevědomí a zastrašování | Bojovník | :charisma |
| Všimnout si pasti nebo přepadu v divočině | Přežití v divočině | Lovec | :soul |
| Všimnout si pasti nebo přepadu ve městě | Přežití ve městě | Kejklíř | :soul |
| Vybavit si válku a vojančinu | Válečnické znalosti | Válečník | :soul |
| Vybavit si okultismus a historii | Učenost | Zaříkávač | :soul |
| Vybavit si zranění a nemoci | Léčení lidského těla | Mastičkář | :soul |
| Vybavit si zvířata | Lov | Lovec | :soul |


## Skrytý hod {#hidden-roll}
Ještě jedna věc, kterou je dobré znát: takzvané *skryté hody*. Jsou to obvykle záchranné hody nebo zkoušky, ale hází je PJ za zástěnou, takže hráč neví, jestli je výsledek dílem hodu.

**Proti skrytému hodu se nedá vyčerpat.**

Skryté hody jen chrání hráče před tím, aby věděl, co jeho postava neví. Když by neúspěch bolel (past, jed), hážeš kostkami sám a můžeš vyčerpávat jako obvykle.

:::example[Hledání stop]{image="/img/rulebook/michal.webp"}
Michalova družina dostala za úkol vyšetřit podivný případ mizejících dětí. Michal hledá nějakou stopu a prohledává pokoj dívky, která zmizela.

PJ tajně hodí za zástěnou a vysvětlí, že Michal v pokoji nic nenašel. Michalův hráč tak neví, jestli tam opravdu nic není, nebo jestli Michalovi hraní na detektiva prostě nejde.
:::

Když si skrytý hod vynutí střet, je to obvykle kvůli skryté okolnosti, která brání použít bonus z dovednosti. PJ tajně přičte bonus, který si přičetl hráč, druhé straně, aby ho vyrušil. Skrytý je jen bonus: zbytek střetu funguje jako obvykle a prohru pořád můžeš odvrátit vyčerpáním.

:::example[Démonské dny]{image="/img/rulebook/michal.webp"}
Michal hodí nůž po tom, koho považuje za otravného konkurenčního barda. Bard je ve skutečnosti vyšší démon v lidské podobě.

Michalův bonus Kejklíře platí jen proti lidem a zvířatům, takže technicky by ho Michal použít neměl. Říct to nahlas by ale před hráči prolomilo čtvrtou stěnu, a tak se PJ rozhodne pro skrytý hod.

Michal hodí :roll[d20 7] + 2 = 9 a „bard“ :roll[d20 5] + 3 *+ 2 (na vyrovnání Michalova bonusu)* = 10.
:::$cs$
where slug = 'dice';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$V Dungeons and Dragons: 5E má tvůj hrdina Sílu, Obratnost a Moudrost. A teď hádej co?

::image{src="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/71cfe5db-5f03-400c-b8bc-20f7fe592cb3.webp" alt="" layout="inline" width="300" align="left"}

Tvoje postava má místo toho tři zásoby úsilí a utrácí je pokaždé, když ze sebe něco vymáčkne.

::::cards{cols="3"}
:::card[Tělo]{image="/img/rulebook/body.webp"}
Fyzické limity a reflexy: síla, rychlost, mrštnost, koordinace, ozbrojený boj, šplhání, zručnost rukou
:::
:::card[Duše]{image="/img/rulebook/soul.webp"}
Mysl, soustředění a technická zručnost: znalosti, vnímání, jazyky, páčení zámků, sesílání kouzel, alchymie
:::
:::card[Vliv]{image="/img/rulebook/charisma.webp"}
Komunikace, ovlivňování a čtení druhých: zastrašování, vyjednávání, svádění, krocení zvířat, klam
:::
::::

Nejsou to životy ani dovednost.

Zdroje říkají, jak moc se tvoje postava může *právě teď* bezpečně vydat. Když se chceš vyhnout špatnému výsledku, můžeš se [vyčerpat](exhaustion). Vyčerpání se vždycky rovná tvému [Ohrožení](danger-level).

Když ti dojde :body[Tělo], neznamená to, že se zhroutíš, a když ti dojde :charisma[Vliv], neoněmíš. Znamená to, že každé další úsilí si vybírá daň a stojí [Jizvy](exhaustion#scars).

Nejsou to ani dovednosti. Jak dobrý v něčem jsi, určuje [úroveň povolání](classes); zdroj říká, jak dlouho to vydržíš.

:::example[Dvě dovednosti Kejklíře, dva zdroje]{image="/img/rulebook/michal.webp"}
Michal (Kejklíř 4) má :body 3, :soul 5 a :charisma 7.

Šplhání po laně i flirtování jsou dovednosti Kejklíře, takže oba hody dostanou +4.

Jenže nepovedené šplhání stojí :body[Tělo] a nepovedená romance stojí :charisma[Vliv]. Michal tedy nejspíš proflirtuje celou noc, než pocítí nějaký skutečný trapas, ale jeho chabé tělo moc nepovedené akrobacie nevydrží.
:::

## Řídící zdroj {#the-governing-resource}

Povaha dovednosti rozhoduje, který zdroj činnost řídí a který zaplatí, kdyby ses

:::note[Stejný výstřel, jiný zdroj]
Výstřel z luku v chaotické bitvě používá :body[]: potřebuje sílu, rovnováhu a reflexy. Tentýž výstřel na lukostřelecké soutěži používá :soul[]: soustředění a trpělivost.
:::

## Začátek a růst {#starting-pools-and-growth}

- Každá postava začíná s **15 body**, které volně rozdělí mezi tři zdroje.
- Žádný zdroj nemá **strop ani minimum**.
- **Zdroj pod 2 je riziko.** Zdroj 0 přeteče při první Jizvě, a to znamená [umírání](exhaustion#dying). Editor postavy varuje u každého zdroje pod 2.
- Velký zdroj postavu neochrání: PJ zvyšuje Ohrožení, čím víc si postava dovoluje.
- Později můžeš za [nový level](leveling) koupit +1 ke zdroji místo úrovně povolání. Počáteční levely to neumí.

## Mince a Materiál {#coins-and-material}

Kromě tří zdrojů postavy hlídá každý hráč ještě dva další: :coins a :material.

::::cards{cols="2"}
:::card[Mince]{image="/img/rulebook/coin.webp"}
Kolik máš peněz.
:::
:::card[Materiál]{image="/img/rulebook/material.webp"}
Užitečný materiál blíže neurčené povahy, který můžeš použít na výrobu látek, stavbu pastí a další…
:::
::::

### Mince {#coins}

:::note[]
„Money, money, money… money, money… is a ritchmen weld…“

&mdash;prezident Miloš Zeman na návštěvě Letohradu
:::

:coins představují peněžní majetek tvé postavy. Když se mluví o konkrétních částkách, myslí se :coins stříbrné mince, které jsou základní měnou. Mince můžou po světě vypadat různě, ale jejich hodnota je v kovu.

Jsou i měďáky, které jsou nižší hodnotou (10 měďáků = 1 stříbrný). A jsou zlaťáky, které mají hodnotu velkou (100 stříbrných = 1 zlatý).

:::note[Hodnota]
Zlatý je spousta peněz. Průměrný sedlák vydělá zlatý za tři až čtyři měsíce.
:::

| Mince | Hodnota |
|---|---|
| 1 zlatý | 100 stříbrných |
| 1 stříbrný | 10 měďáků |

:::note[Kolik zaplatím?]
Ceny se můžou a budou kraj od kraje lišit; chudší vesnice si od tebe možná budou muset říct víc.

Ceny ovlivňuje i pár dalších věcí: souvislosti v příběhu, tvoje vztahy s obchodníkem, celková pověst a jak vypadáš…

**A pozor: ne všechno, co PJ hraje, je pravda.** Chamtivý hostinský si může říct o desetinásobek, když usoudí, že jsi důvěřivý.
:::

### Materiál {#material}

:material jsou abstraktní zásoby: byliny, dřevo, nitě, šrot, činidla. **1 Materiál má hodnotu 1 stříbrného.** Nesleduješ, co přesně máš v batohu; řekneš, co to bylo, když to utratíš.

- Spousta vyrobených účinků roste s vloženým Materiálem.
- Materiálem se dá platit za [léčení Jizvy](healing) (1 bod za každý, s požehnáním PJ) a za [opravy](item-scars).
- Některé perky stojí místo vyčerpání zdroje Materiál, ale obvykle jde o výrobu silnějších látek.

Zvláštní a vzácné alchymistické přísady se MUSÍ sehnat a nemůžou se schovávat v zásobě :material[Materiálu].

:::example[Plátno, byliny a med]
Mastičkář družiny má 4 :material. Když se Michal vrátí z hospody krvácející, Mastičkář prohlásí, že 3 z nich bylo čisté plátno, pár čerstvých bylin a hrnek medu, a pustí se do práce.
:::$cs$
where slug = 'resources';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$::image{src="/img/rulebook/danger-level.webp" alt="Dobrodruzi v hroutící se zřícenině" layout="side"}

Ohrožení je jedno číslo, které říká, jak riskantní, chaotická nebo technicky zapeklitá je současná situace.

**Výchozí hodnota je 3.**

Po špatném hodu se hráč může rozhodnout špatný výsledek odvrátit. Aby se mu vyhnula (zranění, nezdaru, ztrátě věci, spuštění pasti, ztrapnění se), utratí postava ze zdroje, který dovednost používá, tolik bodů, kolik je Ohrožení. To je [Vyčerpání](exhaustion).

:::note[Každý to své]
Postavy v téže scéně můžou čelit různému Ohrožení. [NPC](npcs) žádné nemají.
:::


:::example[Zablácená situace]
Válečník, kterého srazili do bláta, čelí dalšímu úderu s Ohrožením 4. Jeho kamarád sesilatel na skále vedle něj sesílá kouzla s Ohrožením 2 a trochu se za to stydí.
:::

### Jak čísla působí {#what-the-numbers-feel-like}

| Úroveň | Pocit | :body | :soul | :charisma |
|---|---|---|---|---|
| 1 | Procházka parkem | Brodění klidné řeky | Vypáčení západky na seníku | Loutkové divadlo pro děti |
| 2 | Jiný den, stejný sračky | Brodění divoké horské bystřiny | Odemčení obyčejného zámku cely | Dobrodružné historky pro vesničany |
| 3 | Radši vyplnit hlášení BOZP | Brodění rozvodněné řeky | Několik zámků na kupecké truhle | Zaujmout znuděné měšťany |
| 4 | Nebezpečí je skutečné | Řeka plná plovoucích klád | Zneškodnění šipkové pasti v ocelovém zámku | Bezchybné vystoupení pro kritické publikum |
| 5+ | „Do prdele, kam jsem to vlezl?“ | Řeka plná klád v bouři | Luštění mechanismů, zatímco padá strop | Zakázané představení pro zhýralé publikum |

### Zvyšování a snižování {#raising-and-lowering-it}

- PJ ho **zvyšuje**, když jde do tuhého, spěchá se nebo je kolem chaos, nebo když je postava ve špatné pozici.
- Hráči ho **snižují** tím, že si polepší: najdou kryt, odvedou pozornost, ukecají nepřítele.

Zkrátka: Ohrožení říká, jak moc jsi v háji, když se něco pokazí, a kolik stojí zůstat v boji.

## Cena za pokus {#cost-to-attempt}

Některé činnosti jsou těžké dřív, než vůbec začnou. U nich postava platí **cenu za pokus**: body vyčerpané **před hodem**, jen za to, že to zkusí.

- Platí se, ať hod uspěje, nebo ne; vždycky dřív, než vůbec hodíš.
- Platí se ze zdroje použité dovednosti, pokud pravidlo neříká jinak.
- Je oddělená od Ohrožení.
- Když na ni zdroj nestačí, může si postava na zaplacení vzít [Jizvu](exhaustion#scars), jako u každého vyčerpání.


| Zdroj | Cena |
|---|---|
| **Zbroj**, která překáží: plížení, akrobacie, plavání, běh | Střední zbroj 1 :body[Tělo], těžká zbroj 2 :body[Těla]. Viz [Zbroj](armour#encumbrance). |
| **Těžké okolnosti**, podle PJ: stopování na udusané zemi, výroba ledu v horkém létě | Obvykle 1, určí PJ |
| **Jednání skrz [obrazec](sigils)** | 1 bod z jeho zásoby za akci |$cs$
where slug = 'danger-level';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$::image{src="/img/rulebook/exhaustion-and-scars.webp" alt="Unavený dobrodruh" layout="header"}

## Vyčerpání {#exhaustion}
Když hod nevyjde a výsledek je špatný, můžeš se z něj vykoupit. Utrať ze zdroje, který dovednost používá, tolik bodů, kolik je [Ohrožení](danger-level), a neúspěch je odvrácen. Ty body jsou **vyčerpané** a označují se jedním šikmým škrtem.

Znamená to přesně to, co název napovídá: postava se zakousne do jazyka a vynaloží úsilí navíc, čímž posouvá své hranice a přitom se unavuje.

:::note[Jak je dostat zpátky]
Vyčerpání se léčí odpočinkem. Kolik, záleží na odpočinku; viz [Léčení](healing).
:::

::::example[Vyčerpat se]{image="/img/rulebook/michal.webp"}
:roll[d6 3 2] **+ 2 = 7**

Michal (Kejklíř 2) neuspěl ve [zkoušce](dice) Kejklíře na :charisma[Vliv], když flirtoval s purkmistrovou dcerou, jako ta zasraná nula, kterou je. Jeho družina ale později ten den potřebuje její přízeň, takže se Michal rozhodne vyčerpat.

Šlo o středně těžkou situaci, takže **[Ohrožení](danger-level) bylo 3**. Na odvrácení neúspěchu tedy musí vyčerpat 3 :charisma[Vlivu].

Michal utratí 3 body :charisma[Vlivu] a neúspěch odvrátí: nepovedené dvoření obrátí ve vtip o městských frajerech, který dívku pobaví. I když flirt nakonec vyšel, Michal ví, že se bolestně přiblížil ostudě, a to vědomí ho pronásleduje celé odpoledne (jeho Vliv je vyčerpaný).

:::stats[]
::stat{r="charisma" base="5" exhausted="3"}
:::
::::

## Jizvy {#scars}

Jizva je na rozdíl od Vyčerpání trvalá újma: rána, strach, zničené jméno. Je polotrvalá; dobrý spánek ji nespraví.

| Zdroj | Příklady |
|---|---|
| :body | Krvácející rána, nemoc, vymknutý kotník, modřiny, třesoucí se ruce, ztráta sluchu |
| :soul | Nespavost, úzkost, vina, noční můry, otřesené sebevědomí, bolest hlavy, deprese |
| :charisma | Posměch, zničená pověst, nedůvěra, vyhnanství, zničená sebeúcta |

:::note[Vážnost Jizvy]
Ne každá Jizva je stejná. Některé jsou vážnější než jiné. Obecně mluvíme o **stupních Jizvy**. Jizva 1. stupně škrtne 1 políčko. Jizva 3. stupně zabere 3 políčka.
:::

Získat ji jde několika způsoby: vezmeš si ji, abys překročil své hranice, PJ ti ji dá jako výsledek v příběhu, uštědříš si ji sám, abys probudil skrytou magii, nebo dostaneš staré dobré zranění.

:::note[Jizvy jsou příběh]
Jizva není jen škrtnuté políčko, je to něco, s čím postava žije, a PJ i hráč by se o ni měli opírat, dokud se nevyřeší.

Válečník se zlomenou rukou bude muset přizpůsobit svůj styl boje a bard se zničenou pověstí se nejspíš bude muset nějakou dobu schovávat, nebo si důvěru lidí získat zpátky…
:::

### Vzít si Jizvu a pokračovat {#taking-a-scar-to-push-on}

Když na Ohrožení zdroj nestačí, můžeš si vzít Jizvu. Dá ti **2 dočasné body**, které musíš hned utratit; co zbude, propadne. Zjizvený bod se škrtne a spánek ho nevrátí.

::::example[Získat Jizvu]{image="/img/rulebook/michal.webp"}
Michal zase neuspěl ve zkoušce Kejklíře na :charisma[Vliv], když flirtoval s purkmistrovou dcerou, protože balit holky mu fakt nejde. Chce se vyčerpat, ale nemá dost bodů :charisma[Vlivu]: zbývají mu jen 2, zatímco **Ohrožení je 3**.

Musí si vzít Jizvu, takže škrtne jedno ze svých políček zdroje. To mu dá 2 body navíc. Ohrožení chtělo jen tři, takže čtvrtý propadne.

Purkmistrovi muži ho ale uvidí příliš blízko u vážené svobodné dámy. Michal teď nese Jizvu na :charisma[Vlivu]: zničenou pověst a městskou stráž, která by si s ním ráda promluvila.

:::stats[Michalův Vliv, před a po]
::stat{r="charisma" base="5" exhausted="3"}
::stat{r="charisma" base="5" exhausted="4" scarred="1"}
:::

Aby Jizvu spravil, bude muset Michal nejspíš zaplatit purkmistrovi pití a vydatně se omlouvat. Bude muset utratit nějaké peníze a :charisma[Vliv], aby se Jizvy zbavil, než si škrtnuté políčko odblokuje.
::::

:::note[Které políčko dostane Jizvu]
Jizva může škrtnout vyčerpané políčko stejně jako čerstvé. Hráči obvykle zjizví nejdřív vyčerpaná políčka, aby jim body, které ještě mají, zůstaly k dispozici. Větší Jizva je pořád jedna Jizva: Jizva 3. stupně škrtne tři políčka, ne tři Jizvy.
:::

### Jizvy od PJ a z boje {#scars-from-the-dm-and-combat}

Když postava špatný výsledek neodvrátí nebo nemůže odvrátit, třeba když spadne do pasti, dá jí PJ Jizvu podle svého výběru.

| Příklad | Zdroj | Stupeň |
|---|---|---|
| Rozseknutá paže | :body | 2 |
| Zlomená noha | :body | 6 |
| Pronásleduje tě, co jsi viděl v kryptě | :soul | 3 |
| Vyhnání z města | :charisma | 5 |

U zásahů v boji určí stupeň hod na zranění:

::formula[stupeň Jizvy = hod na zranění − úroveň zbroje]

Co ubere zbroj, je v [Obraně a zásazích](defending#how-bad-a-hit-is). Když je Jizva větší než zdroj, postava začne umírat.

## Umírání {#dying}
:::note[Poznámka od Michala]
Za svých zhruba 12 let jako PJ jsem nikdy nezabil žádnou postavu. Jednou jsem chtěl, ale ten parchant hodil dobře…

Každopádně umřít není snadné.
:::

Jizva větší než políčka jejího zdroje, která ještě nejsou zjizvená (vyčerpaná se počítají), zablokuje **celý zdroj** a postava začne umírat. Totéž se stane, když si postava vezme Jizvu ve zdroji, který je už celý zablokovaný.

Dobrodružství může ukončit každý ze tří zdrojů, každý po svém:

| Zdroj | Jak vypadá umírání | Fáze umírání |
|---|---|---|
| :body | Fyzické umírání | Bezvědomí |
| :soul | Šílenství, nebo katatonie | Katatonie |
| :charisma | Nenapravitelně zničená pověst a sebeúcta | Ochromující úzkost |

Když tvůj zdroj selže a klesneš na 0, vstoupíš do fáze umírání. Ve fázi umírání se každý tvůj tah skládá z hodu k20 bez bonusů.

- hod **10 nebo víc** je úspěch; po třech úspěších se postava stabilizuje.
- po třech neúspěších je s tvou postavou konec
- hody nemusí jít po sobě
- :roll[d20 20] se počítá jako dva úspěchy; :roll[d20 1] jako dva neúspěchy
- zásah do zasaženého zdroje se počítá jako neúspěch
- jiná postava může svůj tah využít, aby ti se stabilizací pomohla úspěšnou zkouškou Mastičkáře (u :body[Těla]), Zaříkávače (u :soul[Duše]) nebo Zvěda (u :charisma[Vlivu]). Tyhle zkoušky **nejsou jedinečné**.

:::example[Troll dělá bum]{image="/img/rulebook/michal.webp"}
Kamenný troll přezdívaný „The Rock“ zasáhne Michala za Jizvu :body[Těla] 6. stupně, když má Michal už jen 4 :body[Těla]. Celý zdroj zhasne a Michal se skácí k zemi.

V dalších čtyřech tazích hodí :roll[d20 14 (3) 11 17]: tři úspěchy. Přežije, ale nějakou dobu nikam nepůjde.
:::$cs$
where slug = 'exhaustion';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$::image{src="/img/rulebook/healing.webp" alt="Léčitel ošetřuje ránu" layout="header"}

## Léčení vyčerpání {#healing-exhaustion}

Vyčerpané zdroje se obnoví po odpočinku; obvykle po noci spánku. Kolik se jich obnoví, záleží na kvalitě odpočinku.

::::cards{cols="2"}
:::card[Špatný odpočinek]{image="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/bfcedda3-e254-4be1-8d52-27265c707a60.webp"}
Kdykoli postavy odpočívají v méně než ideálních podmínkách, je odpočinek špatný. **Špatný odpočinek obnoví tři vyčerpané body zdrojů**; které to budou, si vybere hráč.
:::
:::card[Kvalitní odpočinek]{image="https://dvlzrygeoygyrtihwbzh.supabase.co/storage/v1/object/public/ruleset/rulebook/admin/f8ace00f-79c2-4ecb-b575-3354f44fc0f3.webp"}
Odpočinek v pohodlném, bezpečném a klidném prostředí je kvalitní. **Kvalitní odpočinek obnoví všechny vyčerpané body zdrojů.**
:::
::::

## Léčení Jizvy {#healing-a-scar}

Na rozdíl od vyčerpání se Jizvy hojí časem, úsilím nebo s cizí pomocí. Odpočinek Jizvu nezahojí. Postava musí problém smysluplně řešit, podle povahy Jizvy: ošetřit ránu, vyhledat terapii, zaplatit odškodné, obnovit důvěru nebo se vyrovnat s vinou.

Zahojení stojí **5 bodů zdrojů za každý stupeň Jizvy** (Jizva 2. stupně stojí 10). Body můžou pocházet z jakékoli kombinace:

- **Vlastních zdrojů nositele**, kteréhokoli ze tří. :body[]: bolí to. :soul[]: bolest ho vyčerpává. :charisma[]: z uzdravování je nespolečenský.
- **Zdrojů léčitele**, obvykle :soul[Duše], když perk dovolí jiné postavě s léčením pomoct.
- **Léčivých látek**, jako jsou masti a elixíry. *Viz [Lektvary](substances#potions).*
- **:material[Materiálu]**, 1 bod za kus, kde to dává smysl a po dohodě s PJ: 5 Materiálu na pořádný obvaz.

:::note[Mince]
Mincemi se dá platit za léčení, jen když to PJ dovolí: runda pití v hospodě, která spláchne Jizvu na :soul[Duši] nebo :charisma[Vlivu], nebo úplatek, který spraví Jizvu na :charisma[Vlivu].
:::


Musíš se taky vypořádat s příčinou v příběhu (ošetřit ránu, terapie, odškodné, obnovit důvěru) a uspět v **jedné zkoušce za každý stupeň Jizvy**.


:::example[Spravit si pověst]{image="/img/rulebook/michal.webp"}
Michalova Jizva 1. stupně na :charisma[Vlivu] potřebuje 5 bodů a jednu úspěšnou zkoušku. Tentokrát PJ Michalovi dovolí použít jako část léčivých zdrojů peníze.

Za to ponížení zaplatí 3 :charisma[Vlivu] a 2 :coins[stříbrné] za pití.

Koupí purkmistrovi štědrý drink a omlouvá se, dokud ho nebolí jazyk: zkouška přesvědčování za Kejklíře, :roll[d6 5 4] + 2 = 11, uspěl.

Jizva je pryč. Purkmistr ho pořád nemá rád jako člověka, ale věří mu, že to myslí dobře.
:::$cs$
where slug = 'healing';

update rulebook_pages set content = split_part(content, E'\n\n|cs|\n\n', 1) || E'\n\n|cs|\n\n' || $cs$Obléhací stroje bourají [hradby a brány](walls-and-gates) a [střechy](roofs). Dostřely jsou převedené z 5E v poměru 5 stop = 1 m.

| Stroj | Zranění (průměr) | Dostřel | Obsluha | Výstřely |
|---|---|---|---|---|
| Balista | 3k10 (16) | 24 / 96 m | 3 | 1 za kolo |
| Mangonel | 5k10 (27) | 40 / 160 m, ne blíž než 12 m | 5 | 1 za 3 kola; 10 za hodinu |
| Trebuchet | 8k10 (44) | 60 / 240 m, ne blíž než 12 m | 8 | 4 za hodinu |
| Beranidlo (zastřešené) | 8k8 (36) | Dotyk | 10 | 1 za kolo |
| Hrnce s ohněm, hořící otepi | Zapálí dřevo a došky | Jako stroj, který je hází | — | — |
| Výbušná nálož | Její síla v k6; upěchovaná o 2 kostky víc. Zapálí všechno, co hoří | Hozená 4 / 12 m, nebo položená | 1 | Jednou |
| Hotový podkop | Úsek nad ním klesne na 0; vedlejší přijde o polovinu | — | — | — |

- **Trefit hradbu** je zkouška: 2k6 + bonus obsluhy, 9 nebo víc. Netrefy jsou schválně časté: trebuchet, který trefí polovinu výstřelů, strhne úsek hradní hradby zhruba za 7 hodin.
- **Balista** je jediný stroj určený i na lidi. Proti NPC nebo jednotce použij její zranění jako u zbraně. Její šipky **ignorují zbroj**.
- **Podkopy** se kopou rychlostmi z [Kopání a těžby](digging). Odpálený postaru, spálením výztuh, se hradba zřítí do rána a kouř ho prozradí. Odpálený upěchovanou náloží, jejíž hod dosáhne pevnosti, se zřítí hned.

## Nálože {#charges}

Nálož je **upěchovaná**, když je natěsnaná ke svému cíli nebo pod něj: zavěšená na bráně, uložená na konci podkopu. Hází o 2 kostky víc. Viz [Nástrahy](hazards).

Upěchované nálože potřebné ke stržení úseku, při průměrných hodech. *Zřídka* znamená, že průměr na pevnost nestačí, takže projde jen šťastná nálož.

| Úsek (Tělo, pevnost) | Síla 3 (5k6 ≈ 17) | Síla 5 (7k6 ≈ 24) | Síla 7 (9k6 ≈ 31) |
|---|---|---|---|
| Železem kované dveře (40, 10) | 3 | 2 | 2 |
| Městská brána (100, 15) | 6 | 5 | 4 |
| Padací mříž (80, 20) | Zřídka | 4 | 3 |
| Městská hradba (400, 20) | Zřídka | 17 | 13 |
| Hradní hradba (600, 25) | Zřídka | Zřídka | 20 |

Alchymista otevírá dveře a brány. Hradby padají stroji a podkopy.

Útok na hrad a jeho vyhladovění jsou v [Obléhání](sieges).

:::note[Návrh]
Čísla ještě čekají na potvrzení.
:::$cs$
where slug = 'siege-engines';
