import type { Class, ClassInsert, ClassUpdate } from "@/types/classes";
import { supabaseBrowser } from "@/lib/supabase/browser";

type ListOptions = {
  limit?: number;
  orderBy?: keyof Class;
  ascending?: boolean;
};

export const classesRepo = {
  async list(opts: ListOptions = {}) {
    const supabase = supabaseBrowser();
    const { limit = 100, orderBy = "id", ascending = true } = opts;

    const { data, error } = await supabase
      .from("classes")
      .select("*")
      .order(String(orderBy), { ascending })
      .limit(limit);

    if (error) throw error;
    return data as Class[];
  },

  async update(id: Class["id"], patch: ClassUpdate) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("classes")
      .update(patch)
      .eq("id", id)
      .select("*")
      .single();

    if (error) throw error;
    return data as Class;
  },

  async delete(id: Class["id"]) {
    const supabase = supabaseBrowser();

    const { error } = await supabase.from("classes").delete().eq("id", id);

    if (error) throw error;
  },

  async insert(payload: ClassInsert) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("classes")
      .insert(payload)
      .select("*")
      .single();

    if (error) throw error;
    return data as Class;
  },
};
