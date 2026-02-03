export type Character = {
  name: string;
  backstory: string | null;
  image_url: string | null;

  race_id: string | null;
  racial_perk_id: string | null;

  class_level_cap: number;
};

export type DB_Character = Character & {
  id: string;
  owner_user_id: string;
  created_at: string;
  updated_at: string;
};

export type CharacterInsert = Character & { owner_user_id: string };
export type CharacterUpdate = Partial<Character> & { updated_at?: string };
