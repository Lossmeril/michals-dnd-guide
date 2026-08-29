import type { PerkClass } from "@/types/perks";
import { supabaseBrowser } from "@/lib/supabase/browser";

export const perkClassesRepo = {
  async list(perkId: string) {
    const supabase = supabaseBrowser();
    const { data, error } = await supabase
      .from("perk_classes")
      .select("*")
      .eq("perk_id", perkId);
    if (error) throw error;
    return data as PerkClass[];
  },

  async insert(payload: PerkClass) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("perk_classes")
      .insert(payload)
      .select("*")
      .single();

    if (error) throw error;
    return data as PerkClass;
  },

  async delete(perkId: string, classId: string) {
    const supabase = supabaseBrowser();

    const { error } = await supabase
      .from("perk_classes")
      .delete()
      .eq("perk_id", perkId)
      .eq("class_id", classId);

    if (error) throw error;
  },
};