-- Scout perk Inside job (Spymaster): pay ahead for an infiltration opportunity at a planned destination.

insert into perks (id, name, kind, flavour, description, cost_amount, cost_resource) values
('inside-job', 'Inside job |cs| Práce zevnitř', 'perk',
 'The back gate was locked. Then it wasn''t. |cs| Zadní branka byla zamčená. A pak nebyla.',
 'When the party plans a job at a **specific destination** (a manor, a camp, a warehouse, a monastery), you can pay to have an **infiltration opportunity** waiting there. The DM decides what it is and tells you when you pay, so you can plan around it:

- a corrupt servant who leaves a door unlocked or a dog unfed;
- blackmail on a guard, who brings you a uniform or lets you through;
- a saboteur who brings down a stretch of fence or puts out the lamps in one wing;
- a forged invitation, a changed watch roster, a cart that will be waiting.

**One opportunity per destination,** arranged **at least a day ahead** through the local underworld: your network, or a fence who takes the money.

**It opens a way in, it doesn''t win the job.** Once the alarm goes up, the opportunity is spent: the servant runs and the gap in the fence gets watched.

**No destination, no deal:** "somewhere in the city" or "wherever we end up" doesn''t count. |cs| Když družina plánuje akci na **konkrétním místě** (panské sídlo, tábor, sklad, klášter), můžeš zaplatit, aby tam na vás čekala **příležitost k proniknutí**. Jaká to bude, určí PJ a řekne ti to, když platíš, abys s ní mohl počítat:

- podplacený sluha, který nechá odemčené dveře nebo nenakrmeného psa;
- kompromitující materiál na strážného, který ti přinese uniformu nebo tě pustí dál;
- sabotér, který strhne kus plotu nebo zhasne lampy v jednom křídle;
- padělaná pozvánka, změněný rozpis hlídek, vůz, který bude čekat.

**Jedna příležitost na místo,** domluvená **aspoň den předem** přes místní podsvětí: tvou síť, nebo překupníka, který si vezme peníze.

**Otevře cestu dovnitř, akci za tebe nevyhraje.** Jakmile se spustí poplach, příležitost je pryč: sluha uteče a díru v plotě začnou hlídat.

**Bez cíle žádná dohoda:** „někde ve městě“ nebo „kam nás to zavede“ se nepočítá.',
 25, 'coin');

insert into class_perks (class_id, perk_id, sort) values ('scout', 'inside-job', 65);

insert into perk_requirements (perk_id, kind, required_perk_id) values ('inside-job', 'has_aspect', 'spymaster');
