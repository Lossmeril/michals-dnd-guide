// Display helpers shared by the character editor, the character sheet and
// the rulebook. Each takes the reader's language; English is the default.

import type { Lang } from "@/lib/i18n/localize";
import type { Enums, Tables } from "@/lib/types/database.types";

type Resource = Enums<"cost_resource">;

const RESOURCES: Record<Lang, Record<Resource, string>> = {
  en: { body: "Body", soul: "Soul", charisma: "Charisma", material: "Material", coin: "coins" },
  cs: { body: "Tělo", soul: "Duše", charisma: "Vliv", material: "Materiál", coin: "mince" },
};

/** The resource's name, e.g. "Soul" or "Duše" */
export const resourceName = (r: string, lang: Lang = "en") =>
  RESOURCES[lang][r as Resource] ?? r;

/** English names, for places that don't follow the reader's language yet */
export const RESOURCE_NAMES: Record<string, string> = RESOURCES.en;

// Pools are exhausted, Material is used up, coins are paid
const COST_VERBS: Record<Lang, Record<Resource, string>> = {
  en: { body: "Exhaust", soul: "Exhaust", charisma: "Exhaust", material: "Spend", coin: "Pay" },
  cs: { body: "Vyčerpej", soul: "Vyčerpej", charisma: "Vyčerpej", material: "Spotřebuj", coin: "Zaplať" },
};

// Czech counts: "1 Duši", "2 Duše", "5 stříbrných"; a variable amount takes the genitive
const CS_COUNTED: Record<Resource, [one: string, few: string, many: string, variable: string]> = {
  body: ["Tělo", "Těla", "Těla", "Těla"],
  soul: ["Duši", "Duše", "Duše", "Duše"],
  charisma: ["Vliv", "Vlivu", "Vlivu", "Vlivu"],
  material: ["Materiál", "Materiálu", "Materiálu", "Materiálu"],
  coin: ["stříbrný", "stříbrné", "stříbrných", "stříbra"],
};

const csCount = (n: number, forms: readonly string[]) =>
  n === 1 ? forms[0] : n >= 2 && n <= 4 ? forms[1] : forms[2];

/** e.g. "Exhaust 1 Soul per group member"; null for passive perks */
export const costOf = (perk: Tables<"perks">, lang: Lang = "en") => {
  const r = perk.cost_resource;
  if (!r) return null;
  const unit = perk.cost_unit?.trim();
  const n = perk.cost_amount;

  if (lang === "cs") {
    const forms = CS_COUNTED[r];
    return [
      COST_VERBS.cs[r],
      n == null ? `proměnlivé množství ${forms[3]}` : `${n} ${csCount(n, forms)}`,
      unit && (unit.startsWith("za ") || unit.startsWith("na ") ? unit : `za ${unit}`),
    ]
      .filter(Boolean)
      .join(" ");
  }

  return [
    COST_VERBS.en[r],
    n ?? "a variable amount of",
    // Coin prices are in silver, the everyday currency
    r === "coin" ? "silver" : RESOURCES.en[r],
    unit && (unit.startsWith("per ") ? unit : `per ${unit}`),
  ]
    .filter(Boolean)
    .join(" ");
};

const DURATIONS: Record<Lang, Record<Enums<"spell_duration">, string>> = {
  en: {
    instantaneous: "Instant",
    concentration: "Until concentration breaks",
    combat: "Until the end of combat",
    short: "Until the next sunset or sunrise",
    long: "Until the next solstice or equinox",
    will: "Until dismissed",
  },
  cs: {
    instantaneous: "Okamžité",
    concentration: "Dokud nepoleví soustředění",
    combat: "Do konce boje",
    short: "Do nejbližšího soumraku či úsvitu",
    long: "Do nejbližšího slunovratu či rovnodennosti",
    will: "Dokud ho sesilatel neukončí",
  },
};

export const durationName = (d: string, lang: Lang = "en") =>
  DURATIONS[lang][d as Enums<"spell_duration">] ?? d;

export const DURATION_NAMES: Record<string, string> = DURATIONS.en;

const COMPONENTS: Record<Lang, Record<Enums<"spell_component_type">, string>> = {
  en: { verbal: "Verbal", somatic: "Somatic", material: "Material" },
  cs: { verbal: "Slovní", somatic: "Pohybová", material: "Materiálová" },
};

export const componentName = (c: string, lang: Lang = "en") =>
  COMPONENTS[lang][c as Enums<"spell_component_type">] ?? c;

const DAMAGE_TYPES: Record<Enums<"damage_type">, string> = {
  fire: "ohnivé",
  ice: "ledové",
  lightning: "bleskové",
  poison: "jedové",
  psychic: "psychické",
  necrotic: "nekrotické",
  radiant: "zářivé",
  force: "silové",
  thunder: "hromové",
  acid: "kyselinové",
  piercing: "bodné",
  slashing: "sečné",
  bludgeoning: "drtivé",
};

export const damageTypeName = (d: string, lang: Lang = "en") =>
  lang === "cs" ? (DAMAGE_TYPES[d as Enums<"damage_type">] ?? d) : d;

// Weapon properties are stored as English text: "Finesse, Light, Thrown (4/12 m)"
const PROPERTIES: Record<string, string> = {
  Ammunition: "Střelivo",
  Finesse: "Finesa",
  Heavy: "Těžká",
  Light: "Lehká",
  Loading: "Nabíjení",
  Reach: "Dosah",
  Thrown: "Vrhací",
  "Two-Handed": "Obouruční",
  Versatile: "Univerzální",
};

export const propertiesText = (text: string, lang: Lang = "en") =>
  lang === "cs"
    ? text.replace(/[A-Z][a-z]+(?:-[A-Z][a-z]+)?/g, (w) => PROPERTIES[w] ?? w).replace(/(\d)d(\d)/g, "$1k$2")
    : text;

const COIN_UNITS: Record<Lang, readonly (readonly string[])[]> = {
  en: [["gold"], ["silver"], ["copper"]],
  cs: [
    ["zlatý", "zlaté", "zlatých"],
    ["stříbrný", "stříbrné", "stříbrných"],
    ["měďák", "měďáky", "měďáků"],
  ],
};

/** 1 gold = 100 silver = 1000 copper */
export const formatCoins = (copper: number, lang: Lang = "en") =>
  [Math.floor(copper / 1000), Math.floor((copper % 1000) / 10), copper % 10]
    .map((n, i) => [n, COIN_UNITS[lang][i]] as const)
    .filter(([n]) => n)
    .map(([n, forms]) => `${n} ${lang === "cs" ? csCount(n, forms) : forms[0]}`)
    .join(", ") || (lang === "cs" ? "Žádné mince" : "No coins");
