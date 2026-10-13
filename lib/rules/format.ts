// Display helpers shared by the character editor and the character sheet

import type { Tables } from "@/lib/types/database.types";

export const RESOURCE_NAMES: Record<string, string> = {
  body: "Body",
  soul: "Soul",
  charisma: "Charisma",
  material: "Material",
  coin: "coins",
};

// Pools are exhausted, Material is used up, coins are paid
const COST_VERBS: Record<string, string> = {
  body: "Exhaust",
  soul: "Exhaust",
  charisma: "Exhaust",
  material: "Spend",
  coin: "Pay",
};

/** e.g. "Exhaust 1 Soul per group member"; null for passive perks */
export const costOf = (perk: Tables<"perks">) => {
  if (!perk.cost_resource) return null;
  const unit = perk.cost_unit?.trim();
  return [
    COST_VERBS[perk.cost_resource],
    perk.cost_amount ?? "a variable amount of",
    RESOURCE_NAMES[perk.cost_resource],
    unit && (unit.startsWith("per ") ? unit : `per ${unit}`),
  ]
    .filter(Boolean)
    .join(" ");
};

export const DURATION_NAMES: Record<string, string> = {
  instantaneous: "Instant",
  concentration: "Until concentration breaks",
  combat: "Until the end of combat",
  short: "Until the next sunset or sunrise",
  long: "Until the next solstice or equinox",
  will: "Until dismissed",
};

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
