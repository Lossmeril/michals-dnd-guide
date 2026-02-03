export type RacialPerk = {
  race_id: string;
  title: string;
  blurb: string | null;
  effect_description: string;
  meta: Record<string, unknown>; // jsonb
};

export type DB_RacialPerk = RacialPerk & {
  id: string;
};

export type RacialPerkInsert = Omit<RacialPerk, "meta"> & {
  meta?: Record<string, unknown>;
};
export type RacialPerkUpdate = Partial<RacialPerk>;
