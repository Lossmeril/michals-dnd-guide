export const ABILITIES = [
  // fill with your enum literals (from your USER-DEFINED type)
  // e.g. "body","soul","charisma"
] as const;
export type Ability = (typeof ABILITIES)[number];

export type SkillGroup = {
  name: string;
  description: string | null;
  unique_group: boolean;
  ability: Ability;
};

export type DB_SkillGroup = SkillGroup & { id: string };
export type SkillGroupInsert = SkillGroup;
export type SkillGroupUpdate = Partial<SkillGroup>;

export type SkillItem = {
  group_id: string;
  name: string;
  description: string | null;
};

export type DB_SkillItem = SkillItem & { id: string };
export type SkillItemInsert = SkillItem;
export type SkillItemUpdate = Partial<SkillItem>;
