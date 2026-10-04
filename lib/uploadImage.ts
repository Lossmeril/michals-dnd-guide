import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/types/database.types";

// Bucket names can't contain "/", so ruleset images share one bucket
// and are separated by folder.
export const imageTargets = {
  profiles: { bucket: "profiles", folder: "" },
  characters: { bucket: "characters", folder: "" },
  campaigns: { bucket: "campaigns", folder: "" },

  classes: { bucket: "ruleset", folder: "classes" },
  races: { bucket: "ruleset", folder: "races" },
  perks: { bucket: "ruleset", folder: "perks" },
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
  if (!file.type.startsWith("image/")) {
    throw new Error("File must be an image.");
  }
  if (file.size > MAX_SIZE) {
    throw new Error("Image must be smaller than 5MB.");
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
    throw new Error(`Error uploading image: ${error.message}`);
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(path);

  return { path, publicUrl };
};
