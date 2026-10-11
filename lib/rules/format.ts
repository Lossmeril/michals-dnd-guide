// Display helpers shared by the character editor and the character sheet

import type { Tables } from "@/lib/types/database.types";

export const RESOURCE_NAMES: Record<string, string> = {
  body: "Body",
  soul: "Soul",
  charisma: "Charisma",
  material: "Material",
  coin: "coins",
};

export const costOf = (perk: Tables<"perks">) =>
  perk.cost_amount
    ? `Costs ${perk.cost_amount} ${RESOURCE_NAMES[perk.cost_resource!]}${perk.cost_unit ? ` per ${perk.cost_unit}` : ""}`
    : null;

export const DURATION_NAMES: Record<string, string> = {
  instantaneous: "Instant",
  concentration: "Until concentration breaks",
  combat: "Until the end of combat",
  short: "Until the next sunset or sunrise",
  long: "Until the next solstice or equinox",
  will: "Until dismissed",
};

/** One line of spell details, e.g. "Somatic · 10 metres · 1d6 fire" */
export const spellLine = (perk: Tables<"perks">) =>
  [
    perk.components?.join(", "),
    perk.material_note,
    perk.range,
    perk.area,
    perk.damage &&
      `${perk.damage}${perk.damage_types ? ` ${perk.damage_types.join("/")}` : ""}`,
    perk.duration && DURATION_NAMES[perk.duration],
  ]
    .filter(Boolean)
    .join(" · ");

/** 1 gold = 100 silver = 1000 copper */
export const formatCoins = (copper: number) =>
  [
    [Math.floor(copper / 1000), "gold"],
    [Math.floor((copper % 1000) / 10), "silver"],
    [copper % 10, "copper"],
  ]
    .filter(([n]) => n)
    .map(([n, unit]) => `${n} ${unit}`)
    .join(", ") || "No coins";
