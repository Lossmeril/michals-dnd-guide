-- Dying comes from overflowing a pool, not from running it dry; paying for your own action with a full-blocked pool dies after the action.
update rulebook_pages set content = replace(replace(replace(replace(replace(replace(replace(replace(content,
$a$A Scar bigger than the boxes of its pool that aren't scarred yet (exhausted ones count) blocks the **whole pool**, and the character starts dying. The same happens when a character takes a Scar in a pool that's already fully blocked.$a$,
$b$Dying comes from **overflowing** a pool, not from running it dry. A Scar whose level is bigger than the pool's boxes that aren't scarred yet (exhausted ones count) blocks the **whole pool**, and the character starts dying. A Scar that exactly fills them doesn't: the pool is fully blocked, but the character is still standing.

| A pool of 3, nothing scarred | Result |
|---|---|
| Level-3 Scar | All three boxes blocked; still standing |
| Level-4 Scar | Overflow: dying |

Running out of points isn't dying either. A character whose boxes are all exhausted, but one of them isn't scarred yet, can still push on: a level-1 Scar on that box gives 2 points (3 with a perk such as *Fury*) and fits.

Once every box is scarred, any Scar overflows. If the character still exhausts or spends that pool to pay for their own action, they pay with a Scar and the action happens; they start dying right after it.$b$),
$a$When your resource bar fails and you drop to 0, you enter a dying phase. In a dying phase$a$, $b$In a dying phase$b$),
$a$If the Scar is bigger than the pool, the character starts dying.$a$,
$b$If the Scar is bigger than the boxes the pool has left unscarred, the character starts [dying](#dying).$b$),
$a$with only 4 :body left.$a$, $b$with only 4 :body boxes not yet scarred.$b$),
$a$Jizva větší než políčka jejího zdroje, která ještě nejsou zjizvená (vyčerpaná se počítají), zablokuje **celý zdroj** a postava začne umírat. Totéž se stane, když si postava vezme Jizvu ve zdroji, který je už celý zablokovaný.$a$,
$b$Umírání nepřichází z vyčerpaného zdroje, ale z jeho **přetečení**. Jizva, jejíž stupeň je větší než políčka zdroje, která ještě nejsou zjizvená (vyčerpaná se počítají), zablokuje **celý zdroj** a postava začne umírat. Jizva, která je přesně zaplní, ne: zdroj je celý zablokovaný, ale postava pořád stojí.

| Zdroj 3, nic zjizveného | Výsledek |
|---|---|
| Jizva 3. stupně | Zablokovaná všechna tři políčka; postava stojí |
| Jizva 4. stupně | Přetečení: umírání |

Ani když dojdou body, se neumírá. Postava, která má všechna políčka vyčerpaná, ale jedno z nich ještě není zjizvené, může pořád pokračovat: Jizva 1. stupně na tom políčku dá 2 body (3 s perkem jako *Zběsilost*) a vejde se.

Jakmile jsou zjizvená všechna políčka, přeteče každá Jizva. Když postava ze zdroje přesto vyčerpává nebo platí za vlastní akci, zaplatí Jizvou a akce proběhne; umírat začne hned po ní.$b$),
$a$Když tvůj zdroj selže a klesneš na 0, vstoupíš do fáze umírání. Ve fázi umírání$a$, $b$Ve fázi umírání$b$),
$a$Když je Jizva větší než zdroj, postava začne umírat.$a$,
$b$Když je Jizva větší než políčka, která zdroj ještě nemá zjizvená, postava začne [umírat](#dying).$b$),
$a$když má Michal už jen 4 :body[Těla].$a$, $b$když má Michal už jen 4 nezjizvená políčka :body[Těla].$b$)
where slug = 'exhaustion';
