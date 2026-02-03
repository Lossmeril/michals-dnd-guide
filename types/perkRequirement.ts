export type PerkRequirement = {
  perk_id: string;
  requires_perk_id: string | null;
  requires_class_id: string | null;
  min_level: number | null; // 1..5
  min_character_level: number | null; // >=1
};

export type DB_PerkRequirement = PerkRequirement & {
  id: string;
};

export type PerkRequirementInsert = PerkRequirement;
export type PerkRequirementUpdate = Partial<PerkRequirement>;
