-- Rulebook pages: whole suits of armour become pieces. Replaces only the
-- armour paragraphs, so other edits to these pages survive. A replace that
-- no longer matches (the text was edited since) simply changes nothing.

begin;

-- Damage and armour: the example, in both languages
update rulebook_pages set content = replace(content,
$$A bandit (d6) rolls :roll[d6 5] against Michal's chain shirt (rating 2). Michal takes a level-3 :body Scar: a deep cut along the ribs.$$,
$$A bandit (d6) rolls :roll[d6 5] against Michal's gambeson, mail shirt and kettle hat (rating 2). Michal takes a level-3 :body Scar: a deep cut along the ribs.$$)
where slug = 'armour';

update rulebook_pages set content = replace(content,
$$Bandita (d6) hodí :roll[d6 5] proti Michalově kroužkové košili (hodnota 2).$$,
$$Bandita (d6) hodí :roll[d6 5] proti Michalově prošívanici, kroužkové košili a železnému klobouku (hodnota 2).$$)
where slug = 'armour';

-- Damage and armour: the armour table becomes pieces and tiers
update rulebook_pages set content = replace(content,
$$## Armour

| Armour | Rating | Encumbrance |
|---|---|---|
| None | 0 | — |
| Light | 1 | — |
| Medium | 2 | 1 :body |
| Heavy | 3 | 2 :body |
$$,
$$## Armour

Armour is put together from **pieces**: something under, something on the body, a helmet, arms and legs. **One piece per slot.** Every piece adds to two totals:

- **Protection** sets the armour rating.
- **Burden** sets the encumbrance.

| Total | Tier | Rating (from Protection) | Encumbrance (from Burden) |
|---|---|---|---|
| 0 | None | 0 | — |
| 1–3 | Light | 1 | — |
| 4–6 | Medium | 2 | 1 :body |
| 7+ | Heavy | 3 | 2 :body |

::armour

**Fitted plate harness:** plate on the body, a bascinet, plate arms and plate legs, fitted by an armourer, lower Burden by **3**. That's how a knight gets heavy protection at medium burden. Second-hand plate gets nothing off until it's refitted.
$$)
where slug = 'armour';

update rulebook_pages set content = replace(content,
$$## Zbroj {#armour}

| Zbroj | Hodnota | Omezení |
|---|---|---|
| Žádná | 0 | — |
| Lehká | 1 | — |
| Střední | 2 | 1 :body |
| Těžká | 3 | 2 :body |
$$,
$$## Zbroj {#armour}

Zbroj se skládá z **kusů**: něco pod, něco na trup, přilba, paže a nohy. **Na každé místo jeden kus.** Každý kus přidá ke dvěma součtům:

- **Ochrana** určuje hodnotu zbroje.
- **Zátěž** určuje omezení.

| Součet | Stupeň | Hodnota (z Ochrany) | Omezení (ze Zátěže) |
|---|---|---|---|
| 0 | Žádná | 0 | — |
| 1–3 | Lehká | 1 | — |
| 4–6 | Střední | 2 | 1 :body |
| 7+ | Těžká | 3 | 2 :body |

::armour

**Plátová zbroj na míru:** pláty na trupu, bacinet, plátové paže a plátové nohy, upravené zbrojířem, sníží Zátěž o **3**. Tak rytíř dostane těžkou ochranu se střední zátěží. Zbroj z druhé ruky nic neubere, dokud ji zbrojíř nepředělá.
$$)
where slug = 'armour';

-- Scarred armour: a piece breaks (draft, to confirm)
update rulebook_pages set content = replace(content,
$$When armour takes a Scar, its rating drops by 1. Light armour breaks. See [Item scars](item-scars).$$,
$$When armour takes a Scar, **one piece breaks** (the DM picks which) and stops counting until it's repaired. That can drop the armour a tier. See [Item scars](item-scars).$$)
where slug = 'armour';

update rulebook_pages set content = replace(content,
$$Když zbroj dostane Jizvu, její hodnota klesne o 1. Lehká zbroj se rozbije. Viz [Jizvy předmětů](item-scars).$$,
$$Když zbroj dostane Jizvu, **jeden kus se rozbije** (který, určí PJ) a nepočítá se, dokud ho někdo neopraví. Zbroj tím může klesnout o stupeň. Viz [Jizvy předmětů](item-scars).$$)
where slug = 'armour';

update rulebook_pages set content = replace(content,
$$When the DM scars armour, its rating drops by 1. Light armour (rating 1) breaks instead. See [Damage and armour](armour).$$,
$$When the DM scars armour, one piece of it breaks and stops counting towards Protection and Burden until it's repaired. See [Damage and armour](armour).$$)
where slug = 'item-scars';

update rulebook_pages set content = replace(content,
$$Když PJ zjizví zbroj, její hodnota klesne o 1. Lehká zbroj (hodnota 1) se místo toho rozbije. Viz [Zranění a zbroj](armour).$$,
$$Když PJ zjizví zbroj, jeden její kus se rozbije a nepočítá se do Ochrany ani Zátěže, dokud ho někdo neopraví. Viz [Zranění a zbroj](armour).$$)
where slug = 'item-scars';

commit;
