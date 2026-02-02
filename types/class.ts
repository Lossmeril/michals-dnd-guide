export const CLASS_RANKS = ["basic", "advanced", "mighty"] as const;
export type ClassRank = (typeof CLASS_RANKS)[number];
export enum ClassRankEnum {
  basic = "Basic Class",
  advanced = "Advanced Class",
  mighty = "Mighty Class",
}

export const MAGIC_KINDS = ["false", "semi", "true"] as const;
export type MagicKind = (typeof MAGIC_KINDS)[number];
export enum MagicKindEnum {
  false = "Non-Magic Class",
  semi = "Pseudo-Magic Class",
  true = "Magic Class",
}

export type Class = {
  rank: ClassRank;
  title: string;
  short_desc: string | null;
  description: string | null;
  image_url: string | null;
  is_magic: MagicKind;
  color_scheme: string | null;
};

export type DB_Class = Class & {
  id: string;
  created_at: string;
  updated_at: string;
};

export type ClassInsert = Class;
export type ClassUpdate = Partial<Class> & { updated_at?: string };

export function isOneOf<T extends readonly string[]>(
  value: string,
  options: T,
): value is T[number] {
  return options.includes(value);
}
