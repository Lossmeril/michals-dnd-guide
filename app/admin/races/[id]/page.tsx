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

import { EditorShell } from "@/components/editors/editorShell";
import EditorStack from "@/components/layout/editors/editorStack";
import EditorSection from "@/components/layout/editors/editorSections";
import Field from "@/components/layout/editors/editorField";
import { IMAGE_PLACEHOLDER } from "@/lib/webGlobals";
import Button from "@/components/ui/button";
import ImageUploader from "@/components/layout/editors/editorImageUploader";

interface RacePageProps {
  params: Promise<{ id: string }>;
}

const RacePage = ({ params }: RacePageProps) => {
  const router = useRouter();
  const { id } = React.use(params);

  const { races, update } = useRaces();

  const [race, setRace] = useState<Race | undefined>(undefined);

  const [loading, setLoading] = useState(true);

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
    <EditorShell>
      <EditorShell.Grid>
        <EditorShell.Sidebar>
          <h1 className="">Editing Race {race.name}</h1>
          <div className="w-full aspect-square bg-dnd-ink/10 rounded-md mt-4 mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={race.image || IMAGE_PLACEHOLDER}
              alt={race.name || ""}
              className="w-full aspect-square object-cover rounded-md mt-4 mb-6"
            />
          </div>
          <Button label="Save changes" onClick={onSaveChanges} mode="default" />
        </EditorShell.Sidebar>

        <EditorShell.Main>
          <EditorStack>
            <EditorSection title="Basics">
              <Field label="Race" htmlFor="race-name" span="half">
                <input
                  id="race-name"
                  type="text"
                  value={race.name || ""}
                  onChange={(e) => setRace({ ...race, name: e.target.value })}
                />
              </Field>

              <Field label="Short description" htmlFor="race-blurb" span="full">
                <textarea
                  id="race-blurb"
                  value={race.blurb || ""}
                  onChange={(e) => setRace({ ...race, blurb: e.target.value })}
                />
              </Field>
            </EditorSection>

            <EditorSection title="Image">
              <ImageUploader
                image={race.image}
                onChange={(patch) => setRace({ ...race, image: patch.image })}
              />
            </EditorSection>
          </EditorStack>
        </EditorShell.Main>
      </EditorShell.Grid>
    </EditorShell>
  );
};

export default RacePage;
