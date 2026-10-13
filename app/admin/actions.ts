"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import type { Enums, TablesInsert } from "@/lib/types/database.types";
import { type ImageTarget, uploadImage } from "@/lib/uploadImage";
import { createClient } from "@/utils/supabase/server";

// Every action checks the admin role here; RLS checks it again in the database

type Result<T = null> = { data: T; error: null } | { data: null; error: string };

const db = async () => createClient(await cookies());

/** Postgres error codes worth a friendlier message */
const explain = (e: { code?: string; message: string }) =>
  e.code === "23503"
    ? "It's still in use (e.g. by a character), so it can't be removed."
    : e.code === "23505"
      ? "Something with that id already exists."
      : e.message;

const run = async <T>(work: () => Promise<T>): Promise<Result<T>> => {
  await requireAdmin();
  try {
    const data = await work();
    revalidatePath("/admin", "layout");
    return { data, error: null };
  } catch (e) {
    return { data: null, error: explain(e as { code?: string; message: string }) };
  }
};

/** Throws the Supabase error, so `run` can turn it into a message */
const check = <T extends { error: unknown }>(res: T) => {
  if (res.error) throw res.error;
  return res;
};

// ----- Images -----

export async function uploadRulebookImage(
  target: Extract<ImageTarget, "classes" | "races" | "perks" | "traits">,
  formData: FormData,
) {
  return run(async () => {
    const file = formData.get("file");
    if (!(file instanceof File)) throw new Error("No file");
    const { publicUrl } = await uploadImage(await db(), target, file, "admin");
    return publicUrl;
  });
}

// ----- Races, backgrounds, languages -----
// A new row is inserted; an existing one is updated by its id, which never changes

export async function saveRace(isNew: boolean, row: TablesInsert<"races">) {
  return run(async () => {
    const t = (await db()).from("races");
    check(isNew ? await t.insert(row) : await t.update(row).eq("id", row.id));
    return row.id;
  });
}

export async function saveBackground(
  isNew: boolean,
  row: TablesInsert<"backgrounds">,
) {
  return run(async () => {
    const t = (await db()).from("backgrounds");
    check(isNew ? await t.insert(row) : await t.update(row).eq("id", row.id));
    return row.id;
  });
}

export async function saveLanguage(
  isNew: boolean,
  row: TablesInsert<"languages">,
) {
  return run(async () => {
    const t = (await db()).from("languages");
    check(isNew ? await t.insert(row) : await t.update(row).eq("id", row.id));
    return row.id;
  });
}

// ----- Classes and skills -----

export async function saveClass(
  isNew: boolean,
  row: TablesInsert<"classes">,
  parentIds: string[],
) {
  return run(async () => {
    const supabase = await db();
    const t = supabase.from("classes");
    check(isNew ? await t.insert(row) : await t.update(row).eq("id", row.id));
    check(await supabase.from("class_parents").delete().eq("class_id", row.id));
    if (parentIds.length) {
      check(
        await supabase
          .from("class_parents")
          .insert(parentIds.map((parent_id) => ({ class_id: row.id, parent_id }))),
      );
    }
    return row.id;
  });
}

export async function saveSkill(row: TablesInsert<"skills">) {
  return run(async () => {
    const t = (await db()).from("skills");
    const { data } = check(
      row.id
        ? await t.update(row).eq("id", row.id).select("id").single()
        : await t.insert(row).select("id").single(),
    );
    return data!.id;
  });
}

export async function deleteSkill(id: number) {
  return run(async () => {
    check(await (await db()).from("skills").delete().eq("id", id));
    return null;
  });
}

// ----- Perks -----

export type RequirementInput = {
  kind: Enums<"requirement_kind">;
  level: number | null;
  class_ids: string[];
  required_perk_id: string | null;
};

export type ClassLinkInput = { class_id: string; is_core: boolean; sort: number };

/** Saves the perk with its class links and requirements, replacing the old ones */
export async function savePerk(
  isNew: boolean,
  row: TablesInsert<"perks">,
  links: ClassLinkInput[],
  requirements: RequirementInput[],
) {
  return run(async () => {
    const supabase = await db();
    const t = supabase.from("perks");
    check(isNew ? await t.insert(row) : await t.update(row).eq("id", row.id));

    check(await supabase.from("class_perks").delete().eq("perk_id", row.id));
    if (links.length) {
      check(
        await supabase
          .from("class_perks")
          .insert(links.map((l) => ({ ...l, perk_id: row.id }))),
      );
    }

    // Requirement classes go with their requirement (on delete cascade)
    check(await supabase.from("perk_requirements").delete().eq("perk_id", row.id));
    for (const { class_ids, ...req } of requirements) {
      const { data } = check(
        await supabase
          .from("perk_requirements")
          .insert({ ...req, perk_id: row.id })
          .select("id")
          .single(),
      );
      if (class_ids.length) {
        check(
          await supabase
            .from("perk_requirement_classes")
            .insert(
              class_ids.map((class_id) => ({ class_id, requirement_id: data!.id })),
            ),
        );
      }
    }
    return row.id;
  });
}

// ----- Traits -----

export async function saveTrait(
  id: number | null,
  row: Pick<
    TablesInsert<"traits">,
    "name" | "flavour" | "description" | "upside" | "downside" | "image_url"
  >,
) {
  return run(async () => {
    const t = (await db()).from("traits");
    const { data } = check(
      id
        ? await t.update(row).eq("id", id).select("id").single()
        : await t.insert({ ...row, is_custom: false }).select("id").single(),
    );
    return data!.id;
  });
}

/** Approving puts a player's custom trait in everyone's list */
export async function setTraitApproved(id: number, approved: boolean) {
  return run(async () => {
    const user = await requireAdmin();
    check(
      await (await db())
        .from("traits")
        .update({ approved_by: approved ? user.id : null })
        .eq("id", id),
    );
    return null;
  });
}

// ----- Deleting -----

const DELETABLE = [
  "races",
  "classes",
  "perks",
  "backgrounds",
  "languages",
] as const;

export async function deleteRow(
  table: (typeof DELETABLE)[number],
  id: string,
) {
  return run(async () => {
    if (!DELETABLE.includes(table)) throw new Error("Unknown table");
    check(await (await db()).from(table).delete().eq("id", id));
    return null;
  });
}

export async function deleteTrait(id: number) {
  return run(async () => {
    check(await (await db()).from("traits").delete().eq("id", id));
    return null;
  });
}
