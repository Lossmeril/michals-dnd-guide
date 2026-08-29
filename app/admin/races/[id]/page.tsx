"use client";

import React, { useEffect, useState } from "react";
import { useRace, useRaces } from "@/lib/hooks/useRaces";
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
import { TextInput, TextArea } from "@/components/ui/inputs";

interface RacePageProps {
  params: Promise<{ id: string }>;
}

const RacePage = ({ params }: RacePageProps) => {
  const router = useRouter();
  const { id } = React.use(params);

  // Fetch just this race (cached by id); `update` still comes from the
  // collection hook so a save also refreshes the list.
  const { race: fetchedRace, loading } = useRace(id);
  const { update } = useRaces();

  // Local, editable copy. Hydrated once the fetched row arrives; edits live
  // here until "Save changes".
  const [race, setRace] = useState<Race | undefined>(undefined);
  useEffect(() => {
    if (fetchedRace) setRace(fetchedRace);
  }, [fetchedRace]);

  // -------------------------------------
  // Loading / not found
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

  if (!fetchedRace) {
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

  // Fetched row is here but the hydrate effect hasn't run yet (one frame).
  if (!race) {
    return (
      <Container>
        <Grid className="pt-10">
          <GridContent>Loading...</GridContent>
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
    router.push("/app");
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
          <Button
            label="Go back"
            onClick={() => router.push("/app")}
            mode="inverted"
          />
        </EditorShell.Sidebar>

        <EditorShell.Main>
          <EditorStack>
            <EditorSection title="Basics">
              <Field label="Race" htmlFor="race-name" span="half">
                <TextInput
                  id="race-name"
                  value={race.name || ""}
                  onChange={(v) => setRace({ ...race, name: v })}
                />
              </Field>

              <Field label="Short description" htmlFor="race-blurb" span="full">
                <TextArea
                  id="race-blurb"
                  value={race.blurb || ""}
                  rows={6}
                  onChange={(v) => setRace({ ...race, blurb: v })}
                />
              </Field>
            </EditorSection>

            <EditorSection title="Image">
              <ImageUploader
                entityId={race.id}
                image={race.image}
                onChange={(patch) => setRace({ ...race, image: patch.image })}
                bucket="rulebook/races"
              />
            </EditorSection>
          </EditorStack>
        </EditorShell.Main>
      </EditorShell.Grid>
    </EditorShell>
  );
};

export default RacePage;
