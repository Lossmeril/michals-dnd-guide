-- One more premade trait: Weak of body.

insert into traits (name, flavour, description, upside, downside, is_custom, created_by)
select t.name, t.flavour, t.description, t.upside, t.downside, false,
  (select created_by from traits where name like 'Insomniac%' limit 1)
from (values
(
  'Weak of body |cs| Slabý tělem',
  $f$Too small to fight, too small to notice. |cs| Moc malý na boj, moc malý, aby si ho někdo všiml.$f$,
  $d$You were always the smallest, and you never caught up. A full bucket is a struggle, a mail shirt drags you to your knees and a proper sword is more than you can lift. But you fit where nobody else does, branches that would snap under anyone else hold you, and in a brawl nobody bothers with you.

|cs|

Vždycky jsi byl nejmenší a nikdy jsi to nedohnal. Plné vědro je dřina, kroužková košile tě srazí na kolena a pořádný meč skoro neuzvedneš. Jenže se vejdeš tam, kam nikdo jiný, unesou tě větve, které by pod kýmkoli jiným praskly, a ve rvačce se s tebou nikdo nezdržuje.$d$,
  $u$Your size lets you try what others can't: squeezing through gaps, vents and bars too narrow for an adult, hiding where only a child would fit, and climbing or balancing on things that wouldn't hold an adult's weight. Where your size helps you hide or sneak, the roll gets a free Precise. In a fight, enemies don't target you until you attack or draw attention to yourself. |cs| Díky své velikosti zkusíš, co ostatní nemůžou: protáhnout se škvírou, průduchem nebo mřížemi, kudy dospělý neprojde, schovat se tam, kam by se vešlo jen dítě, a lézt nebo balancovat po něčem, co by dospělého neuneslo. Když ti velikost pomáhá se schovat nebo plížit, máš na hod Přesně zdarma. V boji si tě nepřátelé nevyberou za cíl, dokud nezaútočíš nebo na sebe neupozorníš.$u$,
  $w$Anything that relies on raw strength (lifting, forcing a door, grappling, carrying someone) has a cost to attempt of 2 Body. Any armour you wear, even light, adds 2 Body to its cost to attempt. You attack with Heavy weapons Feeble. |cs| Cokoli, co stojí na hrubé síle (zvedání, vyrážení dveří, chvaty, nesení člověka), má cenu za pokus 2 Těla. Jakákoli zbroj, i lehká, ti zvyšuje cenu za pokus o 2 Těla. S Těžkými zbraněmi útočíš Chabě.$w$
)
) as t(name, flavour, description, upside, downside);
