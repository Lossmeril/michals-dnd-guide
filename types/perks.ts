import { Database } from "@/lib/supabase/database.types";

export type Perk = Database["public"]["Tables"]["perks"]["Row"];
export type PerkInsert = Database["public"]["Tables"]["perks"]["Insert"];
export type PerkUpdate = Database["public"]["Tables"]["perks"]["Update"];

export type SpellDetails = Database["public"]["Tables"]["spell_details"]["Row"];
export type SpellDetailsInsert = Database["public"]["Tables"]["spell_details"]["Insert"];
export type SpellDetailsUpdate = Database["public"]["Tables"]["spell_details"]["Update"];

export type PerkClass = Database["public"]["Tables"]["perk_classes"]["Row"];

export type RacialPerkDetails = Database["public"]["Tables"]["racial_perk_details"]["Row"];
export type RacialPerkDetailsInsert = Database["public"]["Tables"]["racial_perk_details"]["Insert"];
export type RacialPerkDetailsUpdate = Database["public"]["Tables"]["racial_perk_details"]["Update"];

export type AspectPerk = Database["public"]["Tables"]["aspect_perks"]["Row"];
export type AspectPerkInsert = Database["public"]["Tables"]["aspect_perks"]["Insert"];

export type PerkPrerequisite = Database["public"]["Tables"]["perk_prerequisites"]["Row"];
export type PerkPrerequisiteInsert = Database["public"]["Tables"]["perk_prerequisites"]["Insert"];
export type PerkPrerequisiteUpdate = Database["public"]["Tables"]["perk_prerequisites"]["Update"];

export type CharacterPerk = Database["public"]["Tables"]["character_perks"]["Row"];
export type CharacterPerkInsert = Database["public"]["Tables"]["character_perks"]["Insert"];

export type PerkWithDetails = Perk & {
  perk_classes: PerkClass[];
  spell_details: SpellDetails | null;
  racial_perk_details: RacialPerkDetails | null;
  perk_prerequisites: PerkPrerequisite[];
};
