"use client";

import React, { useEffect, useState } from "react";
import { useRaces } from "@/lib/hooks/useRaces";
import { useRouter } from "next/navigation";

import {
  Container,
  Grid,
  GridContent,
} from "@/components/layout/layoutPrimitives";
import { Race } from "@/types/races";
import { toast } from "@/components/ui/toast";
import { TbConfetti } from "react-icons/tb";
import Button from "@/components/ui/button";
import { IMAGE_PLACEHOLDER } from "@/lib/webGlobals";
import { UploadImageButton } from "@/components/uploadImageButton";

interface RacePageProps {
  params: Promise<{ id: string }>;
}

const RacePage = ({ params }: RacePageProps) => {
  const router = useRouter();
  const { id } = React.use(params);

  const { races, update } = useRaces();

  const [race, setRace] = useState<Race | undefined>(undefined);

  const [loading, setLoading] = useState(true);
  const [hasImageError, setImageError] = useState<boolean>(false);

  // -------------------------------------
  // Fetch race data from DB
  // -------------------------------------

  useEffect(() => {
    const found = races.find((r) => r.id === id);
    setRace(found);
    setLoading(false);
  }, [races, id]);

  // -------------------------------------
  // Error handling
  // -------------------------------------

  if (loading) {
    return (
      <Container>
        <Grid className="pt-10">
          <GridContent>Loading...</GridContent>
        </Grid>
      </Container>
    );
  }

  if (!race) {
    return (
      <Container>
        <Grid className="pt-10">
          <GridContent>
            <p>Race not found.</p>
          </GridContent>
        </Grid>
      </Container>
    );
  }

  // -------------------------------------
  // Actions
  // -------------------------------------

  const onSaveChanges = async () => {
    // 1) save race
    await update(id, race);

    toast({
      description: "Changes to the race have been saved successfully!",
      title: "ADMIN: Saved!",
      mode: "success",
      icon: <TbConfetti />,
    });
    router.push("/");
  };

  // -------------------------------------
  // Render
  // -------------------------------------

  return (
    <Container>
      <Grid className="pt-10">
        <GridContent>
          <label htmlFor="race-name">Race:</label>
          <input
            id="race-name"
            type="text"
            value={race?.name ?? ""}
            onChange={(event) => {
              const next = event.target.value;
              setRace((prev) => ({
                ...prev!,
                name: next,
              }));
            }}
          />

          <label htmlFor="race-blurb">Short description:</label>
          <textarea
            id="race-blurb"
            value={race?.blurb ?? ""}
            onChange={(event) => {
              const next = event.target.value;
              setRace((prev) => ({
                ...prev!,
                blurb: next,
              }));
            }}
          />

          <div
            className={`border-1 border-dnd-ink/20 rounded-lg aspect-square overflow-hidden mb-2 ${hasImageError ? "border-dnd-red border-2" : ""}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}{" "}
            <img
              src={race.image ?? IMAGE_PLACEHOLDER}
              alt={`${race.name} image`}
              className="w-full h-full object-cover"
            />
          </div>
          <UploadImageButton
            id={race.id.toString()}
            image={race.image}
            onChange={(patch) =>
              setRace((prev) => ({
                ...prev!,
                ...patch,
              }))
            }
            setIsError={setImageError}
            bucket="rulebook/races"
          />

          <Button label="Save Changes" type="button" onClick={onSaveChanges} />
        </GridContent>
      </Grid>
    </Container>
  );
};

export default RacePage;
