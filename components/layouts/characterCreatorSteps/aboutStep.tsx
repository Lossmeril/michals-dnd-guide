import { TextArea, TextInput } from "@/components/ui/inputs";
import type { Character } from "@/types/character";

type AboutStepProps = {
  value: Character;
  onChange: (patch: Partial<Character>) => void;
  setError: (msg: string | null) => void;
};

export const CharacterAboutStep: React.FC<AboutStepProps> = ({
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
        <div className="w-full aspect-1/1 overflow-hidden rounded-xl border-2 border-red-900/20 bg-white/50">
          {value.image_url?.trim() ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={value.image_url}
              alt="Character preview"
              className="h-full w-full object-cover"
              onError={() => setError("Could not load image from that URL.")}
            />
          ) : null}
        </div>
        <div className="">
          <TextInput
            label="Image URL"
            value={value.image_url ?? ""}
            onChange={(e) =>
              onChange({
                image_url: e.target.value.trim() ? e.target.value : null,
              })
            }
            placeholder="https://…"
            inputMode="url"
            error={null}
          />
        </div>
      </div>
    </div>
  );
};
