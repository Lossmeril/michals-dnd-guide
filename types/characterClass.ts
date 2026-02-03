export type CharacterClass = {
  character_id: string;
  class_id: string;
  level: number; // 1..5
};

export type DB_CharacterClass = CharacterClass & {
  updated_at: string;
};

export type CharacterClassInsert = CharacterClass;
export type CharacterClassUpdate = Partial<CharacterClass> & {
  updated_at?: string;
};
