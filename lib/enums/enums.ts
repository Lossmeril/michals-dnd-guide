export const ROLES = ["admin", "dm", "player"] as const;
export type Roles = (typeof ROLES)[number];

export const CLASS_RANKS = ["basic", "advanced", "mighty"] as const;
export type ClassRanks = (typeof CLASS_RANKS)[number];

export const USER_ROLE = ["player", "dm", "admin"] as const;
export type UserRole = (typeof USER_ROLE)[number];

export const CLASS_RANK = ["basic", "advanced", "mighty"] as const;
export type ClassRank = (typeof CLASS_RANK)[number];

export const CLASS_MAGIC = ["none", "full", "pseudo"] as const;
export type ClassMagic = (typeof CLASS_MAGIC)[number];

export const RESOURCE_POOL = ["body", "soul", "charisma"] as const;
export type ResourcePool = (typeof RESOURCE_POOL)[number];

export const COST_RESOURCE = [
  "body",
  "soul",
  "charisma",
  "material",
  "coin",
] as const;
export type CostResource = (typeof COST_RESOURCE)[number];

export const REQUIREMENT_KIND = [
  "class_level",
  "class_levels_all",
  "class_levels_sum",
  "has_perk",
  "has_aspect",
] as const;
export type RequirementKind = (typeof REQUIREMENT_KIND)[number];

export const SPELL_COMPONENT_TYPE = ["verbal", "somatic", "material"] as const;
export type SpellComponentType = (typeof SPELL_COMPONENT_TYPE)[number];

export const SPELL_DURATION = [
  "instantaneous",
  "short",
  "long",
  "concentration",
  "combat",
  "will",
] as const;
export type SpellDuration = (typeof SPELL_DURATION)[number];

export const CHARACTER_START_TYPE = ["rags", "normal", "stronger"] as const;
export type CharacterStartType = (typeof CHARACTER_START_TYPE)[number];
