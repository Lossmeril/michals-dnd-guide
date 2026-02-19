import type { Player, PlayerInsert, PlayerUpdate } from "@/types/players";
import { supabaseBrowser } from "@/lib/supabase/browser";

type ListOptions = {
  limit?: number;
  orderBy?: keyof Player;
  ascending?: boolean;
};

export const playersRepo = {
  async list(opts: ListOptions = {}) {
    const supabase = supabaseBrowser();
    const { limit = 100, orderBy = "id", ascending = true } = opts;

    const { data, error } = await supabase
      .from("players")
      .select("*")
      .order(String(orderBy), { ascending })
      .limit(limit);

    if (error) throw error;
    return data as Player[];
  },

  async update(id: Player["id"], patch: PlayerUpdate) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("players")
      .update(patch)
      .eq("id", id)
      .select("*")
      .single();

    if (error) throw error;
    return data as Player;
  },

  async delete(id: Player["id"]) {
    const supabase = supabaseBrowser();

    const { error } = await supabase.from("players").delete().eq("id", id);

    if (error) throw error;
  },

  async insert(payload: PlayerInsert) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("players")
      .insert(payload)
      .select("*")
      .single();

    if (error) throw error;
    return data as Player;
  },
};
