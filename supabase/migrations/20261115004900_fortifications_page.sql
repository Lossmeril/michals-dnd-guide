-- First chapter renamed to Introduction; Walls and gates and Roofs merged into Fortifications
begin;
update rulebook_chapters set title = 'Introduction |cs| Úvod' where id = 'a2cf7da2-01a3-486d-9715-5b8dbc9eb8b4';
update rulebook_pages set slug = 'fortifications', title = 'Fortifications |cs| Opevnění', content = 'Walls, gates and roofs have a **Body track**, like an NPC, counted **per section**: about 3 m of wall, one gate, or a 3 × 3 m patch of roof. Swords don''t dent a town wall; a trebuchet does.

- **Sturdiness:** a hit dealing **less** than the sturdiness does nothing; one that reaches it deals its full damage. It''s the same for weapons, [siege engines](siege-engines) and [hazards](hazards).
- **Burning:** a burning section loses the listed Body **every round** until the fire is put out. A bucket chain puts out one section a round.
- **Taking it apart:** with time and no one shooting, workers don''t roll. The walls table says how long a **crew of 4** with axes, picks and crowbars needs.

## Walls and gates {#walls-and-gates}

At 0 a wall section is **breached** (a 3 m gap full of rubble) and a gate is **broken**.

| Section | Body | Sturdiness | Burns | Crew of 4 takes it down in |
|---|---|---|---|---|
| Wattle and daub (a cottage) | 15 | 0 | 5 a round | 1 minute |
| Plank wall, plain door | 20 | 5 | 5 a round | 5 minutes |
| Iron-bound door | 40 | 10 | 2 a round | 30 minutes |
| Log wall (a cabin, a blockhouse) | 40 | 10 | 2 a round | 1 hour |
| Wooden palisade | 50 | 10 | 5 a round (once oiled) | 2 hours |
| Brick wall | 60 | 10 | No | 4 hours |
| Stone house wall | 80 | 15 | No | 1 day |
| Town gate (oak, iron-bound) | 100 | 15 | 2 a round | 1 day |
| Portcullis (iron) | 80 | 20 | No | 2 days (or lift it) |
| Earth rampart | 300 | 20 | No | 3 days of digging |
| Town wall (2 m of stone) | 400 | 20 | No | 4 days |
| Castle curtain wall, tower storey (3 m of stone) | 600 | 25 | No | 1 week, or a mine |

- **Earth soaks up stones:** siege engines and loose blasts deal **half** damage to a rampart. Rams, mines and tamped charges deal full.
- **A tower storey at 0** collapses onto the one below. Anyone inside makes an Acrobatics saving throw at Danger Level 4, or takes a Scar from a d8 threat die.
- **Repairs:** a night''s work by a crew of 10 restores a quarter of a damaged section''s Body. A breach needs rebuilding (days and Material), not repair.

## Roofs {#roofs}

At 0 a patch of roof **falls in** on those below.

| Roof | Body | Sturdiness | Burns | Falls on those below as |
|---|---|---|---|---|
| Thatch | 10 | 0 | 10 a round; a fire arrow or torch lights it | d4 |
| Wooden shingles | 15 | 0 | 5 a round | d4 |
| Flat clay roof | 30 | 5 | No | d6 |
| Clay tiles on beams | 20 | 5 | 2 a round (the beams) | d6 |
| Slate on beams | 25 | 5 | 2 a round (the beams) | d6 |
| Stone vault | 100 | 15 | No | d10 |

- **Those below** make an Acrobatics saving throw to dive clear.
  - A player character who fails takes a Scar from the threat die.
  - An NPC takes the roll × 3 off its Body track.

:::note[Draft]
The NPC damage still needs confirming.
:::

## Small things

They have a sturdiness and no Body: a hit that reaches it breaks them, like an [item scar](item-scars).

| Thing | Sturdiness |
|---|---|
| Rope, a leather strap | 0 |
| A wooden bar, a chest | 5 |
| An iron lock, a chain, manacles, a hinge | 10 |
| A steel strongbox | 15 |

:::note[Draft]
Still open: Body per section, or one Body for a whole wall or building.
:::

|cs|

Hradby, brány a střechy mají **hodnotu Těla** jako NPC, počítanou **po úsecích**: zhruba 3 m hradby, jedna brána, nebo kus střechy zhruba 3 × 3 m. Meč městskou hradbu nepromáčkne; trebuchet ano.

- **Pevnost:** zásah, který udělí **méně**, než je pevnost, neudělá nic; zásah, který jí dosáhne, udělí celé své zranění. Platí to stejně pro zbraně, [obléhací stroje](siege-engines) i [nástrahy](hazards).
- **Hoření:** hořící úsek ztrácí uvedené Tělo **každé kolo**, dokud někdo oheň neuhasí. Řetěz s vědry uhasí jeden úsek za kolo.
- **Rozebírání:** když je čas a nikdo nestřílí, dělníci nehází. Tabulka hradeb říká, jak dlouho to trvá **partě 4** se sekerami, krumpáči a páčidly.

## Hradby a brány {#walls-and-gates}

Na 0 je úsek hradby **prolomený** (3 m mezera plná suti) a brána **rozbitá**.

| Úsek | Tělo | Pevnost | Hoří | Parta 4 ho strhne za |
|---|---|---|---|---|
| Proutí a mazanice (chalupa) | 15 | 0 | 5 za kolo | 1 minutu |
| Prkenná stěna, obyčejné dveře | 20 | 5 | 5 za kolo | 5 minut |
| Železem kované dveře | 40 | 10 | 2 za kolo | 30 minut |
| Roubená stěna (srub, blokhauz) | 40 | 10 | 2 za kolo | 1 hodinu |
| Dřevěná palisáda | 50 | 10 | 5 za kolo (když je polita olejem) | 2 hodiny |
| Cihlová zeď | 60 | 10 | Ne | 4 hodiny |
| Kamenná zeď domu | 80 | 15 | Ne | 1 den |
| Městská brána (dub, kovaná) | 100 | 15 | 2 za kolo | 1 den |
| Padací mříž (železná) | 80 | 20 | Ne | 2 dny (nebo ji zvednout) |
| Zemní val | 300 | 20 | Ne | 3 dny kopání |
| Městská hradba (2 m kamene) | 400 | 20 | Ne | 4 dny |
| Hradní hradba, patro věže (3 m kamene) | 600 | 25 | Ne | 1 týden, nebo podkop |

- **Zemina pohltí kameny:** obléhací stroje a volně položené nálože dávají valu **poloviční** zranění. Berany, podkopy a upěchované nálože plné.
- **Patro věže na 0** se zřítí na patro pod ním. Každý uvnitř hází záchranný hod na Akrobacii při Ohrožení 4, jinak dostane Jizvu z kostky pro hrozbu k8.
- **Opravy:** noční práce party 10 lidí vrátí čtvrtinu Těla poškozeného úseku. Průlom je potřeba znovu postavit (dny a Materiál), ne opravit.

## Střechy {#roofs}

Na 0 se kus střechy **propadne** na ty pod ním.

| Střecha | Tělo | Pevnost | Hoří | Na ty pod ní padá jako |
|---|---|---|---|---|
| Došky | 10 | 0 | 10 za kolo; zapálí ji zápalný šíp nebo pochodeň | k4 |
| Dřevěný šindel | 15 | 0 | 5 za kolo | k4 |
| Plochá hliněná střecha | 30 | 5 | Ne | k6 |
| Pálené tašky na trámech | 20 | 5 | 2 za kolo (trámy) | k6 |
| Břidlice na trámech | 25 | 5 | 2 za kolo (trámy) | k6 |
| Kamenná klenba | 100 | 15 | Ne | k10 |

- **Ti pod ní** házejí záchranný hod na Akrobacii, aby uskočili.
  - Hráčská postava, která neuspěje, dostane Jizvu z kostky pro hrozbu.
  - NPC si odečte hod × 3 ze své hodnoty Těla.

:::note[Návrh]
Zranění NPC ještě čeká na potvrzení.
:::

## Drobnosti {#small-things}

Mají pevnost a žádné Tělo: zásah, který jí dosáhne, je rozbije, jako [Jizva na věci](item-scars).

| Věc | Pevnost |
|---|---|
| Provaz, kožený řemen | 0 |
| Dřevěná závora, truhla | 5 |
| Železný zámek, řetěz, okovy, pant | 10 |
| Ocelová pokladnice | 15 |

:::note[Návrh]
Zbývá rozhodnout: Tělo po úsecích, nebo jedno Tělo pro celou hradbu či budovu.
:::', updated_at = now() where slug = 'walls-and-gates';
delete from rulebook_pages where slug = 'roofs';
update rulebook_pages set position = position - 1 where chapter_id = 'a6132c0c-903c-4a38-86c2-58f027a638f9' and slug = 'siege-engines';
update rulebook_pages set content = replace(replace(replace(replace(replace(replace(content,
  '[Walls and gates](walls-and-gates) and [Siege engines]', '[Fortifications](fortifications) and [Siege engines]'),
  'v [Hradbách a branách](walls-and-gates) a v', 'v [Opevnění](fortifications) a v'),
  'break [walls and gates](walls-and-gates) and [roofs](roofs).', 'break walls, gates and roofs: see [Fortifications](fortifications).'),
  'bourají [hradby a brány](walls-and-gates) a [střechy](roofs).', 'bourají hradby, brány a střechy: viz [Opevnění](fortifications).'),
  '(see [Walls and gates](walls-and-gates))', '(see [Fortifications](fortifications))'),
  '(viz [Zdi a brány](walls-and-gates))', '(viz [Opevnění](fortifications))')
 where slug in ('sieges','siege-engines','hazards');
commit;
