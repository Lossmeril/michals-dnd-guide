import type { CharacterPerk, CharacterPerkInsert } from "@/types/perks";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { createCrudRepo } from "./createCrudRepo";

type ListOptions = {
  characterId?: number;
};

// `character_perks.id` is a uuid string, so the factory's `insert` and
// `delete` work as-is. There's no update use case (a row is added or removed),
// so we only re-export those two. `Update` type param is unused → `never`.
const base = createCrudRepo<CharacterPerk, CharacterPerkInsert, never>(
  "character_perks",
);

export const characterPerksRepo = {
  insert: base.insert,
  delete: base.delete,

  // Custom: filter by character instead of listing the whole table.
  async list(opts: ListOptions = {}): Promise<CharacterPerk[]> {
    let query = supabaseBrowser().from("character_perks").select("*");
    if (opts.characterId !== undefined) {
      query = query.eq("character_id", opts.characterId);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data as CharacterPerk[];
  },
};
