// The app's own text in each language. Content from the database is
// translated in place instead (see localize.ts). Czech must have every key
// English has; TypeScript checks it.

import type { Lang } from "./localize";

const en = {
  site: {
    name: "Michal's D&D Guide",
    rulebook: "Rulebook",
    credits: "Credits",
    logIn: "Log in",
    logOut: "Log out",
    home: "Home",
    language: "Language",
  },
  rulebook: {
    edit: "Edit",
    pages: "Rulebook pages",
    example: "Example",
    coins: "Coins",
    material: "Material",
    placeholder: (name: string) => `::${name} is filled in on the real page.`,
    unknownShortcode: (name: string) => `Unknown shortcode ::${name}`,
    unknownCreature: (id: string) => `No creature "${id}" in the bestiary`,
  },
  resources: { body: "Body", soul: "Soul", charisma: "Charisma" },
  manoeuvres: {
    precise: "Precise",
    mighty: "Mighty",
    cunning: "Cunning",
    quick: "Quick",
    defense: "Defense",
    widespread: "Widespread",
  },
  classPage: {
    rankPages: {
      basic: "Basic classes",
      advanced: "Advanced classes",
      mighty: "Mighty classes",
    },
    ranks: { basic: "basic", advanced: "advanced", mighty: "mighty" },
    unlocksWhen: "Unlocks when",
    total: (n: number) => `total ${n} levels.`,
    leadsTo: "Leads to",
    skills: "Skills",
    perks: "Perks",
    skillHead: ["Skill", "Resource", ""],
    unique: "unique",
  },
  blocks: {
    noneYet: "None written yet.",
    speed: "Speed",
    language: "Language",
    raceLanguage: (name: string) => `Common tongue and ${name}`,
    chooseLanguage: "Common tongue, plus one of your choice",
    racialPerks: "Racial perks (pick one)",
    backgroundHead: ["Background", "Gear", "Purse", "Languages", "+1 in"],
    material: (n: number) => `${n} Material`,
    languageHead: ["Language", "Spoken by", "Racial language of", "Related to"],
    weaponHead: ["Weapon", "Damage", "Type", "Properties", "Free manoeuvre"],
  },
  travel: {
    pace: "Pace",
    paces: { slow: "Slow", normal: "Normal", fast: "Fast" },
    terrain: "Terrain",
    terrains: {
      road: "Road or plains",
      hills: "Hills or forest",
      mountains: "Mountains or swamp",
      severe: "Severe",
    },
    weather: "Weather",
    weathers: {
      clear: "Clear",
      rain: "Rain",
      heavy: "Heavy rain",
      snowstorm: "Snowstorm",
    },
    load: "Load",
    loads: {
      none: "Normal",
      encumbered: "Encumbered (−2 m)",
      heavy: "Heavily encumbered (−4 m)",
    },
    name: "Name",
    traveller: (n: number) => `Traveller ${n}`,
    speed: "Speed (m)",
    mounted: "Mounted",
    mount: "Mount (m)",
    remove: "Remove",
    add: "Add a traveller",
    hours: "Hours on the road",
    gallop: "Add an hour of gallop",
    everyoneRides: "(everyone must ride)",
    gallopKm: (km: string) => `+ gallop ${km} km`,
    perDay: (km: string) => `${km} km a day`,
  },
  statBlock: {
    kinds: {
      npc: "NPC",
      companion: "Companion",
      unit: "Unit",
      network: "Network",
      organization: "Organization",
    },
    print: (name: string) => `Print ${name}`,
    now: "now",
    runningIt: "Running it",
    labels: {
      kind: "Kind",
      turn: "Turn",
      master: "Master",
      armour: "Armour",
      speed: "Speed",
      threat: "Threat die",
      fate: "Fate",
      bond: "Bond",
      payment: "Payment",
      size: "Size",
      members: "Members",
      bonus: "Bonus",
      specialisation: "Specialisation",
      upkeep: "Upkeep",
      reach: "Reach",
      seat: "Seat",
      leader: "Leader",
      structure: "Structure",
      standing: "Standing",
      companions: "Companions",
      network: "Network",
      allies: "Allies",
      rivals: "Rivals",
      skills: "Skills",
      manoeuvres: "Free manoeuvres",
      resistances: "Resistances",
      weaknesses: "Weaknesses",
      immunities: "Immunities",
      senses: "Senses",
      languages: "Languages",
    },
    notes: {
      fate: "(back at sunrise)",
      bond: "(never above the master's Charisma)",
      unitBond: "(companion unit; never above the master's Charisma)",
      networkBond: "(+1 per 5 payments, up to the master's Charisma)",
      upkeep: "(one tick a week)",
      bodyTimes: (n: number) => `(Body ×${n})`,
      average: "the average member's",
      muscle: "muscle: theft, ambushes, kidnapping",
      information: "information, finding things",
      influence: "influence, bribery",
      sizeAt: (size: string, body: number) => `${size} at ${body}`,
      tracksOff: (total: number, want: number) =>
        `The tracks add up to ${total}, not ${want}.`,
      unitPayment: (bonus: number, times: number) =>
        `${bonus} silver × ${times} = ${bonus * times} silver`,
      silver: (n: number) => `${n} silver`,
    },
    roles: {
      familiar: "Familiar",
      summon: "Summon",
      animal: "Animal companion",
      hireling: "Hireling",
    },
    turns: {
      afterMaster: "Right after its master, on the master's initiative",
      own: "Its own initiative",
    },
    sizes: {
      handful: { label: "Handful", harmedBy: "more than one person" },
      band: { label: "Band", harmedBy: "more than a handful" },
      horde: { label: "Horde", harmedBy: "more than a band" },
    },
    reach: {
      1: "A few people and some say in one community",
      2: "Influences a small region",
      3: "Decides a small region's key questions, or advises on bigger ones",
      4: "Shapes decisions across the land, or decisive in a large region",
      5: "Decisive across the land",
    } as Record<number, string>,
    rules: {
      rolls: "Rolls: challenge d20 + bonus; undefended attack 2d6 + bonus ≥ 9.",
      hit: (threat: string | undefined) =>
        `Hitting a player character: ${threat ? `${threat} ` : "the threat die "}− their armour rating = the Scar's level.`,
      companionManoeuvres: "Manoeuvres cost 1 Bond, unless granted above.",
      npcManoeuvres:
        "Manoeuvres granted above are free; any other costs 1 Soul or Charisma.",
      companionBond:
        "Averting a failure costs Bond equal to the master's Danger Level. Scarring the Bond gives 2 temporary points. Below 0 Bond, the DM takes it over.",
      fate: "Spending 1 Fate turns a lost roll into a win.",
      noFate: "No Fate: its failures land.",
      bondHealing:
        "1 payment refills 1 Bond. Healing a Bond scar: a roll and 5 payments per level.",
      socialDamage:
        "A won Soul or Charisma roll against it takes the Danger Level it faces right now + the winner's class level off that track.",
      zeroTracks:
        "At 0 in a track it's overpowered: Body, down or dead; Soul, breaks, panics or is controlled; Charisma, surrenders, flees or gives in.",
      unitAction:
        "One initiative, one action a round. Free Widespread on every action, plus one other manoeuvre.",
      unitHarm: (who: string) =>
        `Only a widespread action reaching ${who} harms its tracks. Smaller ones only matter in the story.`,
      enoughMembers: "enough members",
      unitDamage:
        "Damage is rolled once against the Body track. It drops a size when Body falls to the next size's mark; at 0 it's dead, scattered or surrendered.",
      unitDefense:
        "Any number of free Defenses against smaller units; it can react to anything within reach with the Defense manoeuvre.",
      unitCounter:
        "A smaller unit's counter doesn't cancel its effect on other targets.",
      unitDouble:
        "A player character exhausting against it pays double the Danger Level.",
      unitBond:
        "Companion unit: averts with Bond at its master's Danger Level; lost members are Bond scars.",
      unitNoFate:
        "No Fate: it averts nothing unless an important commander is named above.",
      networkElsewhere:
        "Acts while its master is elsewhere. The DM sets the task's Danger Level.",
      networkRolls:
        "Rolls 2d6 or d20 + its bonus within its specialisation; outside it, with no bonus.",
      networkAvert:
        "Averting a failure costs Bond equal to the Danger Level. A failure not averted is a Bond scar: a member caught, a contact gone quiet.",
      networkUpkeep:
        "Upkeep, once a week: one payment's worth of attention (silver, a favour, a visit, protection). Kept: one tip from its specialisation. Skipped: a level-1 Bond scar.",
      networkRefill:
        "1 payment refills 1 spent Bond. Healing a Bond scar: a roll and 5 payments per level.",
      networkCap: "Its bonus is at most the master's Standing + 2.",
      orgNoActions: "It takes no actions and rolls nothing; its members act.",
      orgPossibilities:
        "Standing gives possibilities, not bonuses: the member still rolls with their class skills.",
      orgNetwork:
        "Standing 0 can only ask favours. Standing 1 or more commands its part of the organization as a network, with a bonus up to Standing + 2.",
      orgCompanions:
        "Any Standing can find and bind companions within its reach.",
      orgMighty:
        "Anyone can join at a low rank, and build and lead an organization of Reach 1–2. Standing 3–5 comes only from mighty class perks.",
    },
  },
};

export type Dict = typeof en;

const cs: Dict = {
  site: {
    name: "Michalova D&D Pravidla",
    rulebook: "Pravidla",
    credits: "Poděkování",
    logIn: "Přihlásit se",
    logOut: "Odhlásit se",
    home: "Domů",
    language: "Jazyk",
  },
  rulebook: {
    edit: "Upravit",
    pages: "Stránky pravidel",
    example: "Příklad",
    coins: "Mince",
    material: "Materiál",
    placeholder: (name) => `::${name} se doplní na skutečné stránce.`,
    unknownShortcode: (name) => `Neznámý zkrácený kód ::${name}`,
    unknownCreature: (id) => `Bestiář nemá tvora „${id}“`,
  },
  resources: { body: "Tělo", soul: "Duše", charisma: "Vliv" },
  manoeuvres: {
    precise: "Přesně",
    mighty: "Mocně",
    cunning: "Lstivě",
    quick: "Rychle",
    defense: "Obrana",
    widespread: "Rozsáhle",
  },
  classPage: {
    rankPages: {
      basic: "Základní povolání",
      advanced: "Pokročilá povolání",
      mighty: "Mocná povolání",
    },
    ranks: { basic: "základní", advanced: "pokročilé", mighty: "mocné" },
    unlocksWhen: "Odemkne se, když",
    total: (n) => `mají dohromady ${n} úrovní.`,
    leadsTo: "Vede k",
    skills: "Dovednosti",
    perks: "Perky",
    skillHead: ["Dovednost", "Zdroj", ""],
    unique: "jedinečná",
  },
  blocks: {
    noneYet: "Zatím nic.",
    speed: "Rychlost",
    language: "Jazyk",
    raceLanguage: (name) => `Obecná řeč a ${name}`,
    chooseLanguage: "Obecná řeč a jeden jazyk podle výběru",
    racialPerks: "Rasové perky (vyber jeden)",
    backgroundHead: ["Původ", "Výbava", "Měšec", "Jazyky", "+1 v"],
    material: (n) => `${n} Materiálu`,
    languageHead: ["Jazyk", "Mluví jím", "Rasový jazyk", "Příbuzné"],
    weaponHead: ["Zbraň", "Zranění", "Typ", "Vlastnosti", "Manévr zdarma"],
  },
  travel: {
    pace: "Tempo",
    paces: { slow: "Pomalé", normal: "Normální", fast: "Rychlé" },
    terrain: "Terén",
    terrains: {
      road: "Cesta nebo pláně",
      hills: "Kopce nebo les",
      mountains: "Hory nebo bažina",
      severe: "Krutý",
    },
    weather: "Počasí",
    weathers: {
      clear: "Jasno",
      rain: "Déšť",
      heavy: "Liják",
      snowstorm: "Sněhová bouře",
    },
    load: "Náklad",
    loads: {
      none: "Normální",
      encumbered: "Zatížený (−2 m)",
      heavy: "Silně zatížený (−4 m)",
    },
    name: "Jméno",
    traveller: (n: number) => `Cestovatel ${n}`,
    speed: "Rychlost (m)",
    mounted: "Na koni",
    mount: "Kůň (m)",
    remove: "Odebrat",
    add: "Přidat cestovatele",
    hours: "Hodin na cestě",
    gallop: "Přidat hodinu cvalu",
    everyoneRides: "(všichni musí jet na koni)",
    gallopKm: (km: string) => `+ cval ${km} km`,
    perDay: (km: string) => `${km} km za den`,
  },
  statBlock: {
    kinds: {
      npc: "NPC",
      companion: "Pomocník",
      unit: "Jednotka",
      network: "Síť kontaktů",
      organization: "Organizace",
    },
    print: (name) => `Vytisknout: ${name}`,
    now: "teď",
    runningIt: "Jak s tím hrát",
    labels: {
      kind: "Druh",
      turn: "Tah",
      master: "Pán",
      armour: "Zbroj",
      speed: "Rychlost",
      threat: "Kostka hrozby",
      fate: "Sudba",
      bond: "Pouto",
      payment: "Platba",
      size: "Velikost",
      members: "Členové",
      bonus: "Bonus",
      specialisation: "Specializace",
      upkeep: "Údržba",
      reach: "Dosah",
      seat: "Sídlo",
      leader: "Vůdce",
      structure: "Uspořádání",
      standing: "Postavení",
      companions: "Pomocníci",
      network: "Síť kontaktů",
      allies: "Spojenci",
      rivals: "Soupeři",
      skills: "Dovednosti",
      manoeuvres: "Manévry zdarma",
      resistances: "Odolnosti",
      weaknesses: "Slabiny",
      immunities: "Imunity",
      senses: "Smysly",
      languages: "Jazyky",
    },
    notes: {
      fate: "(obnoví se s východem slunce)",
      bond: "(nikdy víc než Vliv pána)",
      unitBond: "(jednotka pomocníků; nikdy víc než Vliv pána)",
      networkBond: "(+1 za 5 plateb, nejvýš do Vlivu pána)",
      upkeep: "(jedno zaškrtnutí za týden)",
      bodyTimes: (n) => `(Tělo ×${n})`,
      average: "průměrného člena",
      muscle: "svaly: krádeže, přepadení, únosy",
      information: "informace, hledání věcí",
      influence: "vliv, úplatky",
      sizeAt: (size, body) => `${size} při ${body}`,
      tracksOff: (total, want) =>
        `Hodnoty dávají dohromady ${total}, ne ${want}.`,
      unitPayment: (bonus, times) =>
        `${bonus} stříbrných × ${times} = ${bonus * times} stříbrných`,
      silver: (n) => `${n} stříbrných`,
    },
    roles: {
      familiar: "Familiár",
      summon: "Vyvolaná bytost",
      animal: "Zvířecí pomocník",
      hireling: "Najatý pomocník",
    },
    turns: {
      afterMaster: "Hned po svém pánovi, na jeho iniciativu",
      own: "Vlastní iniciativa",
    },
    sizes: {
      handful: { label: "Hrstka", harmedBy: "víc než jednoho člověka" },
      band: { label: "Tlupa", harmedBy: "víc než hrstku" },
      horde: { label: "Horda", harmedBy: "víc než tlupu" },
    },
    reach: {
      1: "Pár lidí a slovo v jedné obci",
      2: "Ovlivňuje malý kraj",
      3: "Rozhoduje klíčové otázky malého kraje, nebo radí u větších",
      4: "Utváří rozhodnutí v celé zemi, nebo rozhoduje ve velkém kraji",
      5: "Rozhoduje v celé zemi",
    },
    rules: {
      rolls: "Hody: střet d20 + bonus; útok bez obrany 2d6 + bonus ≥ 9.",
      hit: (threat) =>
        `Zásah postavy hráče: ${threat ? `${threat} ` : "kostka hrozby "}− hodnota její zbroje = stupeň Jizvy.`,
      companionManoeuvres: "Manévry stojí 1 Pouto, pokud nejsou uvedené výše.",
      npcManoeuvres:
        "Manévry uvedené výše jsou zdarma; jakýkoli jiný stojí 1 Duši nebo Vliv.",
      companionBond:
        "Odvrácení neúspěchu stojí tolik Pouta, kolik je Ohrožení pána. Zjizvení Pouta dá 2 dočasné body. Pod 0 Pouta ho převezme PJ.",
      fate: "Utracená 1 Sudba promění prohraný hod ve výhru.",
      noFate: "Bez Sudby: jeho neúspěchy platí.",
      bondHealing:
        "1 platba doplní 1 Pouto. Léčení jizvy na Poutu: hod a 5 plateb za stupeň.",
      socialDamage:
        "Vyhraný hod na Duši nebo Vliv proti němu mu z dané hodnoty ubere jeho současné Ohrožení + úroveň povolání vítěze.",
      zeroTracks:
        "Na 0 v kterékoli hodnotě je přemožen: Tělo, padne nebo zemře; Duše, zlomí se, zpanikaří nebo je ovládnut; Vliv, vzdá se, uteče nebo ustoupí.",
      unitAction:
        "Jedna iniciativa, jedna akce za kolo. Manévr Rozsáhle zdarma u každé akce, k tomu jeden další manévr.",
      unitHarm: (who) =>
        `Její hodnoty zraní jen rozsáhlá akce, která zasáhne ${who}. Menší akce mají význam jen v příběhu.`,
      enoughMembers: "dost členů",
      unitDamage:
        "Zranění se hází jednou proti Tělu. Když Tělo klesne na hranici menší velikosti, jednotka se zmenší; na 0 je mrtvá, rozprášená nebo se vzdala.",
      unitDefense:
        "Libovolně mnoho obran zdarma proti menším jednotkám; na cokoli v dosahu může reagovat manévrem obrana.",
      unitCounter:
        "Úspěšná odpověď menší jednotky neruší její účinek na ostatní cíle.",
      unitDouble:
        "Postava hráče, která proti ní vyčerpává, platí dvojnásobek Ohrožení.",
      unitBond:
        "Jednotka pomocníků: odvrací Poutem při Ohrožení svého pána; ztracení členové jsou jizvy na Poutu.",
      unitNoFate:
        "Bez Sudby: nic neodvrací, pokud výše není uvedený důležitý velitel.",
      networkElsewhere:
        "Jedná, zatímco je její pán jinde. Ohrožení úkolu určí PJ.",
      networkRolls:
        "Hází 2d6 nebo d20 + bonus ve své specializaci; mimo ni bez bonusu.",
      networkAvert:
        "Odvrácení neúspěchu stojí tolik Pouta, kolik je Ohrožení. Neodvrácený neúspěch je jizva na Poutu: chycený člen, kontakt, který zmlkl.",
      networkUpkeep:
        "Údržba jednou za týden: pozornost v hodnotě jedné platby (stříbro, laskavost, návštěva, ochrana). Splněno: jeden tip ze specializace. Vynecháno: jizva 1. stupně na Poutu.",
      networkRefill:
        "1 platba doplní 1 utracené Pouto. Léčení jizvy na Poutu: hod a 5 plateb za stupeň.",
      networkCap: "Její bonus je nejvýš Postavení pána + 2.",
      orgNoActions: "Sama nejedná a nehází; jednají její členové.",
      orgPossibilities:
        "Postavení dává možnosti, ne bonusy: člen dál hází s dovednostmi svých povolání.",
      orgNetwork:
        "Postavení 0 může jen prosit o laskavost. Postavení 1 a víc velí své části organizace jako síti kontaktů, s bonusem nejvýš Postavení + 2.",
      orgCompanions:
        "Každé Postavení může najít a získat pomocníky ve svém dosahu.",
      orgMighty:
        "Kdokoli se může přidat na nízké pozici a založit a vést organizaci s Dosahem 1–2. Postavení 3–5 dávají jen perky mocných povolání.",
    },
  },
};

export const DICTS: Record<Lang, Dict> = { en, cs };
