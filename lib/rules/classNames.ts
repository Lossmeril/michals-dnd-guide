// Class ids by their English and Czech names, so rulebook text can name a
// class ("Ranger", "Hraničář") and link to its page

const NAMES: Record<string, string[]> = {
  fighter: ["Fighter", "Bojovník"],
  hunter: ["Hunter", "Lovec"],
  juggler: ["Juggler", "Kejklíř"],
  medic: ["Medic", "Mastičkář"],
  incantor: ["Incantor", "Zaříkávač"],
  warrior: ["Warrior", "Válečník"],
  ranger: ["Ranger", "Hraničář"],
  witcher: ["Witcher", "Vědmák"],
  scout: ["Scout", "Zvěd"],
  shaman: ["Shaman", "Šaman"],
  druid: ["Druid"],
  rogue: ["Rogue", "Lupič"],
  alchemist: ["Alchemist", "Alchymista"],
  warlock: ["Warlock", "Čaroděj"],
  mage: ["Mage", "Mág"],
  warlord: ["Warlord", "Vojevůdce"],
  ravager: ["Ravager", "Ničitel"],
  shadow: ["Shadow", "Stín"],
  inquisitor: ["Inquisitor", "Inkvizitor"],
  zhrets: ["Zhrets", "Žrec"],
  "black-priest": ["Necromancer", "Černokněžník"],
};

const BY_NAME = new Map(
  Object.entries(NAMES).flatMap(([id, names]) =>
    names.map((n) => [n.toLowerCase(), id] as const),
  ),
);

/** "Ranger" or "Ranger (Barbarian)" → "ranger"; unknown names → undefined */
export const classIdOf = (tag: string) =>
  BY_NAME.get(tag.replace(/\s*\(.*\)\s*$/, "").trim().toLowerCase());
