import { TextArea, TextInput } from "@/components/ui/inputs";
import type { Class } from "@/types/class";
import {
  CLASS_RANKS,
  ClassRankEnum,
  MAGIC_KINDS,
  MagicKindEnum,
  isOneOf,
} from "@/types/class";
import { UploadImageButton } from "@/components/ui/imageUpload";

type BasicsStepProps = {
  classId: string;
  value: Class;
  onChange: (patch: Partial<Class>) => void;
  setError: (msg: string | null) => void;
  onRankChanged?: () => void;
};

export const ClassBasicsStep: React.FC<BasicsStepProps> = ({
  classId,
  value,
  onChange,
  setError,
  onRankChanged,
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* LEFT: form */}
      <div className="lg:col-span-2 space-y-6">
        <TextInput
          label="Title"
          value={value.title}
          onChange={(e) => onChange({ title: e.target.value })}
          required
          error={null}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Rank */}
          <div className="space-y-2">
            <label className="text-sm text-dnd-ink/80">Rank</label>
            <select
              value={value.rank}
              onChange={(e) => {
                const v = e.target.value;
                if (!isOneOf(v, CLASS_RANKS)) return;
                onChange({ rank: v });
                onRankChanged?.();
              }}
              className="w-full rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-dnd-ink outline-none focus:border-red-900"
            >
              {CLASS_RANKS.map((rank) => (
                <option key={rank} value={rank}>
                  {ClassRankEnum[rank]}
                </option>
              ))}
            </select>
          </div>

          {/* Magic */}
          <div className="space-y-2">
            <label className="text-sm text-dnd-ink/80">Magic</label>
            <select
              value={value.is_magic}
              onChange={(e) => {
                const v = e.target.value;
                if (!isOneOf(v, MAGIC_KINDS)) return;
                onChange({ is_magic: v });
              }}
              className="w-full rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-dnd-ink outline-none focus:border-red-900"
            >
              {MAGIC_KINDS.map((kind) => (
                <option key={kind} value={kind}>
                  {MagicKindEnum[kind]}
                </option>
              ))}
            </select>
          </div>

          {/* Color scheme */}
          <div>
            <TextInput
              label="Color scheme (optional)"
              value={value.color_scheme ?? ""}
              onChange={(e) =>
                onChange({
                  color_scheme: e.target.value.trim() ? e.target.value : null,
                })
              }
              error={null}
            />
          </div>
        </div>

        <TextArea
          label="Short description"
          value={value.short_desc ?? ""}
          onChange={(e) =>
            onChange({
              short_desc: e.target.value.trim() ? e.target.value : null,
            })
          }
          error={null}
        />

        <TextArea
          label="Description"
          value={value.description ?? ""}
          onChange={(e) =>
            onChange({
              description: e.target.value.trim() ? e.target.value : null,
            })
          }
          error={null}
          rows={10}
        />
      </div>

      {/* RIGHT: image */}
      <div>
        <div className="relative w-full aspect-1/1 overflow-hidden rounded-xl border-2 border-red-900/20 bg-white/50">
          {value.image_url?.trim() ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={value.image_url}
              alt="Class preview"
              className="h-full w-full object-cover"
              onError={() => setError("Could not load class image.")}
            />
          ) : (
            <div className="grid h-full w-full place-items-center text-sm text-[#2b1d0e]/50">
              No Image
            </div>
          )}

          <div className="absolute bottom-4 left-4 flex flex-col items-center gap-2">
            <UploadImageButton
              id={classId}
              image_url={value.image_url}
              onChange={onChange}
              setError={setError}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
