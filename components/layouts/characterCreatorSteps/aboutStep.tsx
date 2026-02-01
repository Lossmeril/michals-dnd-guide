import { TextArea, TextInput } from "@/components/ui/inputs";
import { uploadCharacterImage } from "@/components/editors/characterImageUpload";
import type { Character } from "@/types/character";
import { supabaseBrowser } from "@/lib/supabase/browser";

type AboutStepProps = {
  characterId: string;
  value: Character;
  onChange: (patch: Partial<Character>) => void;
  setError: (msg: string | null) => void;
};

export const CharacterAboutStep: React.FC<AboutStepProps> = ({
  characterId,
  value,
  onChange,
  setError,
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="">
          <TextInput
            label="Name"
            value={value.name}
            onChange={(e) => onChange({ name: e.target.value })}
            required
            error={null}
          />
        </div>
        <div className="">
          <TextArea
            label="Backstory"
            value={value.backstory ?? ""}
            onChange={(e) =>
              onChange({
                backstory: e.target.value.trim() ? e.target.value : null,
              })
            }
            error={null}
            rows={10}
          />
        </div>
      </div>
      {/* IMAGE */}
      <div>
        <div className="w-full aspect-1/1 overflow-hidden rounded-xl border-2 border-red-900/20 bg-white/50 relative">
          {value.image_url?.trim() ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={value.image_url}
              alt="Character preview"
              className="h-full w-full object-cover"
              onError={() => setError("Could not load image from that URL.")}
            />
          ) : null}

          <div className="absolute bottom-4 left-4 flex transform flex-col items-center gap-2">
            <label
              htmlFor="imgUpload"
              className="bg-dnd-red border-dnd-red text-dnd-bg hover:bg-dnd-red-dark hover:border-dnd-red-dark font-serif h-10 inline-flex items-center justify-center rounded-2xl border-2 px-4 py-2 text-sm shadow-xs transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dnd-ink hover:cursor-pointer"
            >
              {value.image_url ? "Change Image" : "Upload Image"}
            </label>
            <input
              id="imgUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;

                if (file.size > 2 * 1024 * 1024) {
                  setError("Image must be under 2MB.");
                  return;
                }

                try {
                  setError(null);
                  const url = await uploadCharacterImage(
                    supabaseBrowser(),
                    file,
                    characterId,
                  );
                  onChange({ image_url: url });
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
          </div>
        </div>
      </div>
    </div>
  );
};
