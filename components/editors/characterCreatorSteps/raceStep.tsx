"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";
import Card from "@/components/ui/card";
import type { Character } from "@/types/character";

type DB_Race = {
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
};

type RaceStepProps = {
  value: Character;
  onChange: (patch: Partial<Character>) => void;
  setError: (msg: string | null) => void;
};

export const CharacterRaceStep: React.FC<RaceStepProps> = ({
  value,
  onChange,
  setError,
}) => {
  const [races, setRaces] = useState<DB_Race[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);

      const supabase = supabaseBrowser();
      const { data, error } = await supabase
        .from("races")
        .select("id,name,description,image_url")
        .order("name", { ascending: true })
        .limit(5);

      if (error) setError(error.message);
      setRaces((data ?? []) as DB_Race[]);
      setLoading(false);
    };

    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectRace = (raceId: string) => {
    setError(null);
    onChange({
      race_id: raceId,
      racial_perk_id: null, // reset (we'll handle perks after)
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-serif text-xl text-dnd-ink">
          Select your character&apos;s race
        </h2>
        <p className="text-sm text-dnd-ink/70">
          Pick one. You can change it later.
        </p>
      </div>

      {loading && <p className="text-sm opacity-70">Loading races…</p>}

      {!loading && races.length === 0 && (
        <p className="text-sm opacity-70">No races available.</p>
      )}

      {!loading && races.length > 0 && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {races.map((r) => {
            const selected = value.race_id === r.id;

            return (
              <button
                key={r.id}
                type="button"
                onClick={() => selectRace(r.id)}
                className="text-left"
              >
                <Card
                  title={r.name}
                  description={r.description ?? ""}
                  imageSrc={
                    r.image_url?.trim()
                      ? r.image_url
                      : "https://placehold.co/640x360?text=No%20Image"
                  }
                  imageAlt={r.name}
                  className={[
                    "cursor-pointer select-none transition",
                    selected
                      ? "grayscale-0 ring-2 ring-red-900/70"
                      : "grayscale opacity-80 hover:opacity-100 hover:grayscale-0",
                  ].join(" ")}
                  imagePos="top"
                ></Card>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
