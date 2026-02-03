export type CharacterPerk = {
  character_id: string;
  perk_id: string;
};

export type DB_CharacterPerk = CharacterPerk & {
  acquired_at: string;
};

export type CharacterPerkInsert = CharacterPerk;
export type CharacterPerkUpdate = Partial<CharacterPerk>;
