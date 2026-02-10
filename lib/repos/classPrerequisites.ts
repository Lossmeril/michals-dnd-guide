import type {
  ClassPrerequisite,
  ClassPrerequisiteInsert,
  ClassPrerequisiteUpdate,
} from "@/types/classPrerequisities";
import { supabaseBrowser } from "@/lib/supabase/browser";

type ListOptions = {
  limit?: number;
  orderBy?: keyof ClassPrerequisite;
  ascending?: boolean;
};

export const classPrerequisitesRepo = {
  async list(opts: ListOptions = {}) {
    const supabase = supabaseBrowser();
    const { limit = 100, orderBy = "id", ascending = true } = opts;

    const { data, error } = await supabase
      .from("class_prerequisites")
      .select("*")
      .order(String(orderBy), { ascending })
      .limit(limit);

    if (error) throw error;
    return data as ClassPrerequisite[];
  },

  async update(id: ClassPrerequisite["id"], patch: ClassPrerequisiteUpdate) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("class_prerequisites")
      .update(patch)
      .eq("id", id)
      .select("*")
      .single();

    if (error) throw error;
    return data as ClassPrerequisite;
  },

  async delete(id: ClassPrerequisite["id"]) {
    const supabase = supabaseBrowser();

    const { error } = await supabase
      .from("class_prerequisites")
      .delete()
      .eq("id", id);

    if (error) throw error;
  },

  async insert(payload: ClassPrerequisiteInsert) {
    const supabase = supabaseBrowser();

    const { data, error } = await supabase
      .from("class_prerequisites")
      .insert(payload)
      .select("*")
      .single();

    if (error) throw error;
    return data as ClassPrerequisite;
  },
};
