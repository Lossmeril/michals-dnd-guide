import type {
  PerkPrerequisite,
  PerkPrerequisiteInsert,
  PerkPrerequisiteUpdate,
} from "@/types/perks";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { createCrudRepo } from "./createCrudRepo";

// `perk_prerequisites.id` is a uuid string — `insert` and `delete` from the
// factory are exactly what the old file did. `list` is the only custom bit:
// it filters to one perk rather than returning the whole table.
const base = createCrudRepo<
  PerkPrerequisite,
  PerkPrerequisiteInsert,
  PerkPrerequisiteUpdate
>("perk_prerequisites");

export const perkPrerequisitesRepo = {
  insert: base.insert,
  delete: base.delete,

  async list(forPerkId: string): Promise<PerkPrerequisite[]> {
    const { data, error } = await supabaseBrowser()
      .from("perk_prerequisites")
      .select("*")
      .eq("for_perk_id", forPerkId);

    if (error) throw error;
    return data as PerkPrerequisite[];
  },
};
