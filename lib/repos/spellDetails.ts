import type {
  SpellDetails,
  SpellDetailsInsert,
  SpellDetailsUpdate,
} from "@/types/perks";
import { supabaseBrowser } from "@/lib/supabase/browser";

// -----------------------------------------------------------------------------
// Not a `createCrudRepo` client: `spell_details` is a 1:1 extension of `perks`
// keyed by `perk_id` (no own `id`), and its main operation is an upsert rather
// than insert/update. Hand-written.
// -----------------------------------------------------------------------------

export const spellDetailsRepo = {
  // Upsert = insert the row, or update it if one already exists for this
  // `perk_id`. Used when saving a perk whose type is "spell" without caring
  // whether spell details existed before.
  async upsert(payload: SpellDetailsInsert): Promise<SpellDetails> {
    const { data, error } = await supabaseBrowser()
      .from("spell_details")
      .upsert(payload)
      .select("*")
      .single();

    if (error) throw error;
    return data as SpellDetails;
  },

  async update(
    perkId: string,
    patch: SpellDetailsUpdate,
  ): Promise<SpellDetails> {
    const { data, error } = await supabaseBrowser()
      .from("spell_details")
      .update(patch)
      .eq("perk_id", perkId)
      .select("*")
      .single();

    if (error) throw error;
    return data as SpellDetails;
  },

  async delete(perkId: string): Promise<void> {
    const { error } = await supabaseBrowser()
      .from("spell_details")
      .delete()
      .eq("perk_id", perkId);

    if (error) throw error;
  },
};
