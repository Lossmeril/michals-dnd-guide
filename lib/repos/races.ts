import type { Race, RaceUpdate } from "@/types/races";
import { supabaseBrowser } from "@/lib/supabase/browser";

type ListOptions = {
  limit?: number;
  orderBy?: keyof Race;
  ascending?: boolean;
};

export const racesRepo = {
  async list(opts: ListOptions = {}) {
    const supabase = supabaseBrowser();
    const { limit = 100, orderBy = "id", ascending = true } = opts;

    const { data, error } = await supabase
      .from("races")
      .select("*")
      .order(String(orderBy), { ascending })
      .limit(limit);

    if (error) throw error;
    return data as Race[];
  },

  async update(id: Race["id"], patch: RaceUpdate) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("races")
      .update(patch)
      .eq("id", id)
      .select("*")
      .single();

    if (error) throw error;
    return data as Race;
  },

  async delete(id: Race["id"]) {
    const supabase = supabaseBrowser();

    const { error } = await supabase.from("races").delete().eq("id", id);

    if (error) throw error;
  },
};
