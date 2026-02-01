import { TextArea, TextInput } from "@/components/ui/inputs";
import type { Character } from "@/types/character";

type Props = {
  value: Character;
  onChange: (patch: Partial<Character>) => void;
};

export function BasicsStep({ value, onChange }: Props) {
  return (
    <div className="space-y-5">
      <TextInput
        label="Name"
        value={value.name}
        onChange={(e) => onChange({ name: e.target.value })}
        required
        error={null}
      />
    </div>
  );
}

export function BackstoryStep({ value, onChange }: Props) {
  return (
    <div className="space-y-5">
      <TextArea
        label="Backstory"
        value={value.backstory ?? ""}
        onChange={(e) =>
          onChange({ backstory: e.target.value.trim() ? e.target.value : null })
        }
        error={null}
      />
    </div>
  );
}

export function ImageStep({
  value,
  onChange,
  setError,
}: Props & { setError: (msg: string | null) => void }) {
  return (
    <div className="space-y-5">
      <TextInput
        label="Image URL"
        value={value.image_url ?? ""}
        onChange={(e) =>
          onChange({ image_url: e.target.value.trim() ? e.target.value : null })
        }
        placeholder="https://…"
        inputMode="url"
        error={null}
      />

      <div className="h-full w-full overflow-hidden rounded-xl border-2 border-red-900/20 bg-white/50">
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
    </div>
  );
}
