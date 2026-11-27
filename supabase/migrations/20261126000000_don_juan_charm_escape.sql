-- Don Juan (Juggler): in a fight, instead of the movement, a Juggler skill check to break free of Charmed.
update perks set description =
  $en$You gain advantage in flirting, seducing and extracting information from targets that would be attracted to you. In a fight, while **Charmed**, you can give up your movement to make a skill check with your Juggler level; on a success, the charm ends.$en$
  || ' |cs| ' ||
  $cs$Máš výhodu při flirtování, svádění a vytahování informací z těch, které bys mohl přitahovat. V boji, když jsi **Okouzlený**, se můžeš vzdát pohybu a hodit si zkoušku s úrovní Kejklíře; při úspěchu okouzlení skončí.$cs$
where id = 'don-juan';
