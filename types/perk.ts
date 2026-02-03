export const PERK_KINDS = ["perk", "spell", "aspect"] as const;
export type PerkKind = (typeof PERK_KINDS)[number];

export type Perk = {
  class_id: string;
  kind: PerkKind;
  title: string;
  blurb: string | null;
  effect_description: string;
  image_url: string | null;
  meta: Record<string, unknown>; // jsonb
};

export type DB_Perk = Perk & {
  id: string;
  created_at: string;
  updated_at: string;
};

export type PerkInsert = Omit<Perk, "meta"> & {
  meta?: Record<string, unknown>;
};
export type PerkUpdate = Partial<Perk> & { updated_at?: string };
