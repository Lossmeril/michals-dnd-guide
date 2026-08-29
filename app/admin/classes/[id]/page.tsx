"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useClass, useClasses } from "@/lib/hooks/useClasses";
import { useRouter } from "next/navigation";

import {
  Container,
  Grid,
  GridContent,
} from "@/components/layout/layoutPrimitives";

import { toast } from "@/components/ui/toast";
import { TbConfetti } from "react-icons/tb";

import { EditorShell } from "@/components/editors/editorShell";
import EditorStack from "@/components/layout/editors/editorStack";
import EditorSection from "@/components/layout/editors/editorSections";
import Field from "@/components/layout/editors/editorField";
import { IMAGE_PLACEHOLDER } from "@/lib/webGlobals";
import Button from "@/components/ui/button";
import ImageUploader from "@/components/layout/editors/editorImageUploader";
import { Class } from "@/types/classes";

import { useClassPrerequisites } from "@/lib/hooks/useClassPrerequisites";
import { ClassPrerequisite } from "@/types/classPrerequisities";
import ClassPrerequisiteCard from "./classPrerequisiteCard";
import { CLASS_RANKS_NUMBER_OF_PREREQUISITES } from "@/lib/functions/validators/classRequirements";
import { TextInput, SelectInput } from "@/components/ui/inputs";

interface ClassPageProps {
  params: Promise<{ id: string }>;
}

const ClassPage = ({ params }: ClassPageProps) => {
  const router = useRouter();
  const { id } = React.use(params);

  // The edited class, fetched by id (cached). `classes` (whole list) is still
  // needed below to build the list of candidate prerequisite classes.
  const { class_: fetchedClass, loading: classLoading } = useClass(id);
  const { classes, update } = useClasses();
  const {
    classPrerequisites,
    create: createClassPrerequisites,
    remove: removeClassPrerequisite,
  } = useClassPrerequisites();

  // Local, editable copy of the class; edits live here until "Save changes".
  const [classData, setClassData] = useState<Class | undefined>(undefined);
  useEffect(() => {
    if (fetchedClass) setClassData(fetchedClass);
  }, [fetchedClass]);

  // Prerequisite rows already stored for this class — a pure derivation of the
  // cached collection, no local state needed.
  const assignedPrerequisites = useMemo<ClassPrerequisite[]>(
    () => classPrerequisites.filter((cp) => cp.for_class === id),
    [classPrerequisites, id],
  );

  // Local selection of prerequisite class ids, seeded once from the stored
  // rows. After that it's driven purely by the UI (and reset on rank change).
  const [newClassPrerequisites, setNewClassPrerequisites] = useState<string[]>(
    [],
  );
  const didSeedPrerequisites = React.useRef(false);
  useEffect(() => {
    if (didSeedPrerequisites.current || assignedPrerequisites.length === 0) {
      return;
    }
    setNewClassPrerequisites(
      assignedPrerequisites.map((cp) => cp.class_required),
    );
    didSeedPrerequisites.current = true;
  }, [assignedPrerequisites]);

  // Derived from local classData.class_rank so it updates immediately when the rank dropdown changes
  const potentialPrerequisites = useMemo(() => {
    if (!classData) return [];
    const prerequisiteRank =
      classData.class_rank === "mighty"
        ? "advanced"
        : classData.class_rank === "advanced"
          ? "basic"
          : null;
    if (!prerequisiteRank) return [];
    return classes.filter((c) => c.class_rank === prerequisiteRank);
  }, [classData, classes]);

  // -------------------------------------
  // Loading / not found
  // -------------------------------------

  if (classLoading) {
    return (
      <Container>
        <Grid className="pt-10">
          <GridContent>Loading...</GridContent>
        </Grid>
      </Container>
    );
  }

  if (!fetchedClass) {
    return (
      <Container>
        <Grid className="pt-10">
          <GridContent>
            <p>Class not found.</p>
          </GridContent>
        </Grid>
      </Container>
    );
  }

  // Fetched row is here but the hydrate effect hasn't run yet (one frame).
  if (!classData) {
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
    // 1) check and save prerequisites

    const ops: Promise<unknown>[] = [];

    if (
      newClassPrerequisites.length >
      CLASS_RANKS_NUMBER_OF_PREREQUISITES[classData.class_rank]
    ) {
      toast({
        description: `The ${classData.class_rank} class can only have up to ${CLASS_RANKS_NUMBER_OF_PREREQUISITES[classData.class_rank]} prerequisites.`,
        title: "Too many prerequisites",
        mode: "error",
      });
      return;
    }

    // Deletions: every stored prerequisite that is no longer selected in the
    // UI. We iterate the stored rows themselves (not `potentialPrerequisites`,
    // which is filtered to the current rank's candidate classes) so that
    // prerequisites left behind by an earlier rank — e.g. after demoting
    // mighty → advanced, or anything → basic — also get cleaned up.
    for (const existing of assignedPrerequisites) {
      if (!newClassPrerequisites.includes(existing.class_required)) {
        ops.push(removeClassPrerequisite(existing.id));
      }
    }

    // Insertions: every UI-selected class that isn't stored yet.
    const storedRequiredIds = new Set(
      assignedPrerequisites.map((cp) => cp.class_required),
    );
    for (const classId of newClassPrerequisites) {
      if (!storedRequiredIds.has(classId)) {
        ops.push(
          createClassPrerequisites({
            for_class: id,
            class_required: classId,
          }),
        );
      }
    }

    // 2) save class
    await update(id, classData);

    await Promise.all(ops);

    toast({
      description: "Changes to the class have been saved successfully!",
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
          <h1 className="">Editing Class {classData.name}</h1>
          <div className="w-full aspect-square bg-dnd-ink/10 rounded-md mt-4 mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={classData.image || IMAGE_PLACEHOLDER}
              alt={classData.name || ""}
              className="w-full aspect-square object-cover rounded-md mt-4 mb-6"
            />
          </div>
          <Button
            label="Save changes"
            onClick={() => onSaveChanges()}
            mode="default"
            className="w-full mb-4"
          />
          <Button
            label="Go back"
            onClick={() => router.push("/app")}
            mode="inverted"
            className="w-full"
          />
        </EditorShell.Sidebar>

        <EditorShell.Main>
          <EditorStack>
            <EditorSection title="Basics">
              <Field label="Class" htmlFor="class-name" span="half">
                <TextInput
                  id="class-name"
                  value={classData.name || ""}
                  onChange={(v) => setClassData({ ...classData, name: v })}
                />
              </Field>
              <Field label="Rank" htmlFor="class-rank" span="half">
                <SelectInput
                  id="class-rank"
                  value={classData.class_rank}
                  options={[
                    { value: "basic", label: "Basic" },
                    { value: "advanced", label: "Advanced" },
                    { value: "mighty", label: "Mighty" },
                  ]}
                  onChange={(v) => {
                    setClassData({ ...classData, class_rank: v as Class["class_rank"] });
                    setNewClassPrerequisites([]);
                  }}
                />
              </Field>
            </EditorSection>

            <EditorSection title="Image">
              <ImageUploader
                entityId={classData.id}
                image={classData.image}
                onChange={(patch) =>
                  setClassData({ ...classData, image: patch.image })
                }
                bucket="rulebook/classes"
              />
            </EditorSection>

            <EditorSection title="Prerequisites">
              <Field span="full">
                {potentialPrerequisites.length === 0 ? (
                  <p>No available classes to assign as prerequisites.</p>
                ) : (
                  <div className="grid grid-cols-5 w-full gap-2">
                    {potentialPrerequisites.map((c) => (
                      <ClassPrerequisiteCard
                        key={c.id}
                        c={c}
                        selected={newClassPrerequisites.includes(c.id)}
                        onChangeClass={(classId) => {
                          if (newClassPrerequisites.includes(classId)) {
                            // If already selected, unselect it
                            setNewClassPrerequisites((prev) =>
                              prev.filter((id) => id !== classId),
                            );
                          } else {
                            // If not selected, select it
                            setNewClassPrerequisites((prev) => [
                              ...prev,
                              classId,
                            ]);
                          }
                        }}
                      />
                    ))}
                  </div>
                )}
              </Field>
            </EditorSection>
          </EditorStack>
        </EditorShell.Main>
      </EditorShell.Grid>
    </EditorShell>
  );
};

export default ClassPage;
