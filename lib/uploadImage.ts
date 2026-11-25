import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/types/database.types";
import { getDict } from "@/lib/i18n/server";

// Bucket names can't contain "/", so ruleset images share one bucket
// and are separated by folder.
export const imageTargets = {
  profiles: { bucket: "profiles", folder: "" },
  characters: { bucket: "characters", folder: "" },
  campaigns: { bucket: "campaigns", folder: "" },
  // Not pictures: files attached to campaign updates, for removeFolder
  campaignFiles: { bucket: "campaign-files", folder: "" },

  classes: { bucket: "ruleset", folder: "classes" },
  races: { bucket: "ruleset", folder: "races" },
  perks: { bucket: "ruleset", folder: "perks" },
  traits: { bucket: "ruleset", folder: "traits" },
  items: { bucket: "ruleset", folder: "items" },
  rulebook: { bucket: "ruleset", folder: "rulebook" },
  bestiary: { bucket: "ruleset", folder: "bestiary" },
} as const;

export type ImageTarget = keyof typeof imageTargets;

const MAX_SIZE = 5 * 1024 * 1024; // 5MB

export const uploadImage = async (
  supabase: SupabaseClient<Database>,
  target: ImageTarget,
  file: File,
  // Subfolder inside the target, e.g. the user id or character id.
  // Lets storage RLS policies match on the first path segment.
  ownerId: string,
) => {
  const t = (await getDict()).upload;
  if (!file.type.startsWith("image/")) {
    throw new Error(t.notImage);
  }
  if (file.size > MAX_SIZE) {
    throw new Error(t.tooBig(MAX_SIZE / 1024 / 1024));
  }

  const { bucket, folder } = imageTargets[target];
  const ext = file.name.split(".").pop() ?? "png";
  const path = [folder, ownerId, `${crypto.randomUUID()}.${ext}`]
    .filter(Boolean)
    .join("/");

  const { error } = await supabase.storage.from(bucket).upload(path, file, {
    contentType: file.type,
    cacheControl: "3600",
  });

  if (error) {
    throw new Error(t.failed(error.message));
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(path);

  return { path, publicUrl };
};

/**
 * Removes everything under a folder of a bucket, subfolders too: a campaign's
 * cover and update pictures, a character's portraits. Run it before deleting
 * the row, since storage policies check the row is still there.
 */
export const removeFolder = async (
  supabase: SupabaseClient<Database>,
  target: ImageTarget,
  ownerId: string,
) => {
  const { bucket, folder } = imageTargets[target];
  const root = folder ? `${folder}/${ownerId}` : ownerId;
  const files: string[] = [];
  const walk = async (prefix: string) => {
    const { data, error } = await supabase.storage.from(bucket).list(prefix, { limit: 1000 });
    if (error) throw new Error(error.message);
    for (const entry of data) {
      const path = `${prefix}/${entry.name}`;
      // Folders come back without an id
      if (entry.id === null) await walk(path);
      else files.push(path);
    }
  };
  await walk(root);
  if (files.length) {
    const { error } = await supabase.storage.from(bucket).remove(files);
    if (error) throw new Error(error.message);
  }
};
