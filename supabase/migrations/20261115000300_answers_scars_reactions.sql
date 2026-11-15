-- Michal's answers of 2026-11-14: reactions, Scars on exhausted boxes, coins for healing, the healing check, Ravager awakened.

update classes set magic = 'awakened' where id = 'ravager';

update rulebook_pages set content = replace(content,
 $o$By default there is only one kind: to defend, but class perks may grant you more.$o$,
 $n$By default there is only one kind you choose to take part in: to defend. The free attack is different, because a trigger grants it to you. Class perks may grant you more.$n$)
where slug = 'combat';

update rulebook_pages set content = replace(replace(content,
 $o$### Scars from the DM and combat$o$,
 $n$:::note[Which box gets the Scar]
A Scar can cross out an exhausted box as well as a fresh one. Players usually scar their exhausted boxes first, so the points they still have stay available. A bigger Scar is still one Scar: a level-3 Scar crosses out three boxes, not three Scars.
:::

### Scars from the DM and combat$n$),
 $o$A Scar bigger than what's left of its pool blocks the **whole pool**$o$,
 $n$A Scar bigger than the boxes of its pool that aren't scarred yet (exhausted ones count) blocks the **whole pool**$n$)
where slug = 'exhaustion';

update rulebook_pages set content = replace(replace(content,
 $o$- **:material**, 1 point each, where it makes sense and after asking the DM: 5 Material for a proper bandage.
$o$,
 $n$- **:material**, 1 point each, where it makes sense and after asking the DM: 5 Material for a proper bandage.

:::note[Coins]
Coins pay for healing only when the DM allows it: a round of drinks in a tavern to wash away a :soul or :charisma Scar, or a bribe to mend a :charisma one.
:::
$n$),
 $o$You must also deal with the cause in the story: treating the wound, therapy, paying reparations, rebuilding trust.$o$,
 $n$You must also deal with the cause in the story (treating the wound, therapy, paying reparations, rebuilding trust) and succeed in **one skill check per Scar level**.$n$)
where slug = 'healing';

update rulebook_pages set content = replace(replace(content,
 $o$the Druid, Alchemist, Warlock and Mage, and every mighty class except the Warlord.$o$,
 $n$the Druid, Alchemist, Warlock and Mage, and every mighty class except the Warlord and the Ravager.$n$),
 $o$**Awakened.** The Witcher and the Shaman come from the Medic, not the Incantor.$o$,
 $n$**Awakened.** The Witcher and the Shaman come from the Medic, not the Incantor, and the Ravager is built on the Witcher.$n$)
where slug = 'magic';

-- Halving rounds in the character's favour: down, minimum 1.
update perks set description = replace(replace(description,
 'rounded up. |cs|', 'rounded down (minimum 1). |cs|'),
 'zaokrouhleno nahoru.', 'zaokrouhleno dolů (nejméně 1).')
where id = 'evasion';
