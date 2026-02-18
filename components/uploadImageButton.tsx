import { supabaseBrowser } from "@/lib/supabase/browser";
import { SupabaseClient } from "@supabase/supabase-js";

export const SUPABASE_BUCKETS = [
  "characters",
  "rulebook/classes",
  "rulebook/races",
] as const;
export type SupabaseBucket = (typeof SUPABASE_BUCKETS)[number];

export async function uploadImage(
  supabase: SupabaseClient,
  bucket: SupabaseBucket,
  file: File,
  characterId: string,
): Promise<string> {
  const ext = file.name.split(".").pop();
  const path = `${characterId}.${ext}`;

  const { error } = await supabase.storage.from(bucket).upload(path, file, {
    upsert: true,
    contentType: file.type,
  });

  if (error) throw error;

  const { data } = supabase.storage.from(bucket).getPublicUrl(path);

  return data.publicUrl;
}

export function getStoragePathFromPublicUrl(
  publicUrl: string,
  bucket: SupabaseBucket = "characters",
): string {
  const marker = `/storage/v1/object/public/${bucket}/`;
  const idx = publicUrl.indexOf(marker);
  if (idx === -1) throw new Error("Unexpected image URL format.");
  return publicUrl.slice(idx + marker.length);
}

interface UploadImageButtonProps {
  id: string;
  bucket?: SupabaseBucket;
  image: string | null;
  onChange: (patch: { image: string | null }) => void;
  setError: (msg: string | null) => void;
}

export const UploadImageButton: React.FC<UploadImageButtonProps> = ({
  id,
  bucket = "characters",
  image,
  onChange,
  setError,
}) => {
  const inputId = `imgUpload-${bucket}-${id}`;

  return (
    <>
      <label
        htmlFor={inputId}
        className="bg-dnd-red border-dnd-red text-dnd-bg hover:bg-dnd-red-dark hover:border-dnd-red-dark font-serif h-10 inline-flex items-center justify-center rounded-2xl border-2 px-4 py-2 text-sm shadow-xs transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dnd-ink hover:cursor-pointer"
      >
        {image ? "Change Image" : "Upload Image"}
      </label>

      <input
        id={inputId}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={async (e) => {
          const input = e.target as HTMLInputElement;
          const file = e.target.files?.[0];
          if (!file) return;

          if (file.size > 2 * 1024 * 1024) {
            setError("Image must be under 2MB.");
            return;
          }

          try {
            setError(null);

            const baseUrl = await uploadImage(
              supabaseBrowser(),
              bucket,
              file,
              id,
            );

            const bustedUrl = `${baseUrl}?v=${Date.now()}`;

            onChange({ image: bustedUrl });

            input.value = "";
          } catch (err) {
            console.error(err);
            setError(
              err instanceof Error
                ? `Error: ${err.message}`
                : "Image upload failed.",
            );
          }
        }}
      />
    </>
  );
};
