-- Rulebook: why swords and warhorses are fortunate only; backgrounds are occupations, not classes.

update rulebook_pages set content =
  replace(replace(replace(replace(content,
  $o$extra [languages](languages), and one known setting.

## Fortune$o$,
  $n$extra [languages](languages), and one known setting.

:::note[A background is a job]
A background is much closer to a real occupation than a class is. It's what your character did for a living: a smith, a soldier, a priest. Their classes are what they're good at, and the two don't have to match. A Soldier needn't be a Fighter, and a Fighter can come from any background: a village smith who turned out handy with a hammer is a Craftsman with Fighter levels.
:::

## Fortune$n$),
  $o$| **Fortunate** | Two weapons, or a weapon and a shield; swords allowed | Up to medium: Protection up to 6 |

:::note[Swords don't sell]$o$,
  $n$| **Fortunate** | Two weapons, or a weapon and a shield; swords allowed | Up to medium: Protection up to 6 |

:::note[Why only the fortunate]
Swords and warhorses are expensive. A sword costs about four months of a labourer's wages, and a warhorse more than a town house. A poor farmhand or a common soldier would never own one, so they're kept for the fortunate. You can still win, loot or buy one in play.
:::

:::note[Swords don't sell]$n$),
  $o$[jazyky](languages) navíc a jedno známé prostředí.

## Štěstí {#fortune}$o$,
  $n$[jazyky](languages) navíc a jedno známé prostředí.

:::note[Povolání není zaměstnání]
Povolání se sice říká povolání, ale je to spíš sada dovedností: to, v čem je postava dobrá. Skutečné zaměstnání, tedy čím se postava živila, je její původ: kovář, voják, kněz. Obojí se shodovat nemusí. Voják nemusí být Bojovník a Bojovník může mít jakýkoli původ: vesnický kovář, který se ukázal šikovný s kladivem, je Řemeslník s úrovněmi Bojovníka.
:::

## Štěstí {#fortune}$n$),
  $o$| **Zámožný** | Dvě zbraně, nebo zbraň a štít; meče povoleny | Nejvýš střední: Ochrana nejvýš 6 |

:::note[Meče se neprodávají]$o$,
  $n$| **Zámožný** | Dvě zbraně, nebo zbraň a štít; meče povoleny | Nejvýš střední: Ochrana nejvýš 6 |

:::note[Proč jen zámožní]
Meče a váleční koně jsou drazí. Meč stojí zhruba čtyři měsíce nádeníkovy mzdy a válečný kůň víc než měšťanský dům. Chudý čeledín ani obyčejný voják by takový nikdy neměl, proto zůstávají zámožným. Ve hře ho můžeš vyhrát, ukořistit nebo koupit.
:::

:::note[Meče se neprodávají]$n$)
where slug = 'backgrounds';

update rulebook_pages set content =
  replace(replace(content,
  $o$::weapons

### Properties$o$,
  $n$::weapons

:::note[Swords are for the fortunate]
A sword costs about four months of a labourer's wages, so a new character starts with one only if their arms and armour are fortunate. See [Arms and armour](backgrounds#arms-and-armour).
:::

### Properties$n$),
  $o$::weapons

### Vlastnosti {#properties}$o$,
  $n$::weapons

:::note[Meče jsou pro zámožné]
Meč stojí zhruba čtyři měsíce nádeníkovy mzdy, takže nová postava ho začíná mít, jen když má zámožné zbraně a zbroj. Viz [Zbraně a zbroj](backgrounds#arms-and-armour).
:::

### Vlastnosti {#properties}$n$)
where slug = 'weapons';
