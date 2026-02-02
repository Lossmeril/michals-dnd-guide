import { UploadImageButton } from "@/components/ui/imageUpload";
import { TextArea, TextInput } from "@/components/ui/inputs";
import type { Race } from "@/types/race";

export const RaceBasicsStep = ({
  raceId,
  value,
  onChange,
  setError,
}: {
  raceId: string;
  value: Race;
  onChange: (patch: Partial<Race>) => void;
  setError: (e: string | null) => void;
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <TextInput
          label="Name"
          value={value.name}
          onChange={(e) => {
            setError(null);
            onChange({ name: e.target.value });
          }}
          required
          error={null}
        />

        <TextArea
          label="Description"
          value={value.description ?? ""}
          onChange={(e) => {
            setError(null);
            onChange({
              description: e.target.value.trim() ? e.target.value : null,
            });
          }}
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
              alt="Race preview"
              className="h-full w-full object-cover"
              onError={() => setError("Could not load race image.")}
            />
          ) : (
            <div className="grid h-full w-full place-items-center text-sm text-[#2b1d0e]/50">
              No Image
            </div>
          )}

          <div className="absolute bottom-4 left-4 flex flex-col items-center gap-2">
            <UploadImageButton
              id={raceId}
              image_url={value.image_url}
              bucket="rulebook/races"
              onChange={onChange}
              setError={setError}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
