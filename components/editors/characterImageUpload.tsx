import { SupabaseClient } from "@supabase/supabase-js";

export async function uploadCharacterImage(
  supabase: SupabaseClient,
  file: File,
  characterId: string,
): Promise<string> {
  const ext = file.name.split(".").pop();
  const path = `${characterId}.${ext}`;

  const { error } = await supabase.storage
    .from("characters")
    .upload(path, file, {
      upsert: true,
      contentType: file.type,
    });

  if (error) throw error;

  const { data } = supabase.storage.from("characters").getPublicUrl(path);

  return data.publicUrl;
}

export function getStoragePathFromPublicUrl(publicUrl: string) {
  // publicUrl contains ".../storage/v1/object/public/<bucket>/<path>"
  const marker = "/storage/v1/object/public/characters/";
  const idx = publicUrl.indexOf(marker);
  if (idx === -1) throw new Error("Unexpected image URL format.");
  return publicUrl.slice(idx + marker.length);
}
