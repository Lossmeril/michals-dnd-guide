export const STAT_KINDS = [
  // fill from your USER-DEFINED enum
] as const;
export type StatKind = (typeof STAT_KINDS)[number];

export const STAT_TRACKS = [
  // fill from your USER-DEFINED enum
] as const;
export type StatTrack = (typeof STAT_TRACKS)[number];

export type StatDefinition = {
  key: string;
  label: string;
  kind: StatKind;
  track: StatTrack;
  icon_url: string | null;
  sort_order: number;
};

export type DB_StatDefinition = StatDefinition & { id: string };
export type StatDefinitionInsert = StatDefinition;
export type StatDefinitionUpdate = Partial<StatDefinition>;

export type CharacterStat = {
  character_id: string;
  stat_id: string;
  value: number | null;
  healthy: number | null;
  exhausted: number | null;
  scar: number | null;
};

export type DB_CharacterStat = CharacterStat & { updated_at: string };
export type CharacterStatInsert = CharacterStat;
export type CharacterStatUpdate = Partial<CharacterStat> & {
  updated_at?: string;
};
