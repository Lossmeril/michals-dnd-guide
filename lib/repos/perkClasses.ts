import type { PerkClass, PerkClassInsert } from "@/types/perks";
import { supabaseBrowser } from "@/lib/supabase/browser";

// -----------------------------------------------------------------------------
// Not a `createCrudRepo` client: `perk_classes` is a pure join table keyed by
// (perk_id, class_id) with no `id` column, so the factory's id-based
// getById/update/delete don't apply. Hand-written, but only three small methods.
// -----------------------------------------------------------------------------

export const perkClassesRepo = {
  async list(perkId: string): Promise<PerkClass[]> {
    const { data, error } = await supabaseBrowser()
      .from("perk_classes")
      .select("*")
      .eq("perk_id", perkId);

    if (error) throw error;
    return data as PerkClass[];
  },

  // Was typed as `PerkClass` (the Row type) before — `PerkClassInsert` is the
  // correct payload type for an insert.
  async insert(payload: PerkClassInsert): Promise<PerkClass> {
    const { data, error } = await supabaseBrowser()
      .from("perk_classes")
      .insert(payload)
      .select("*")
      .single();

    if (error) throw error;
    return data as PerkClass;
  },

  // Composite key, so delete needs both parts.
  async delete(perkId: string, classId: string): Promise<void> {
    const { error } = await supabaseBrowser()
      .from("perk_classes")
      .delete()
      .eq("perk_id", perkId)
      .eq("class_id", classId);

    if (error) throw error;
  },
};
