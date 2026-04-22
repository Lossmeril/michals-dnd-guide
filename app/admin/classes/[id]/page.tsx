"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useClasses } from "@/lib/hooks/useClasses";
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

  const { classes, update } = useClasses();
  const {
    classPrerequisites,
    create: createClassPrerequisites,

    remove: removeClassPrerequisite,
  } = useClassPrerequisites();

  const [classData, setClassData] = useState<Class | undefined>(undefined);

  // Already assigned prerequisite classes for the currently edited class
  const [classPrerequisitesList, setClassPrerequisitesList] = useState<
    ClassPrerequisite[]
  >([]);

  // local-only edits; saved on button press
  const [newClassPrerequisites, setNewClassPrerequisites] = useState<string[]>(
    [],
  );

  // state logic
  const [didHydrate, setDidHydrate] = useState(false);
  useEffect(() => {
    setDidHydrate(true);
  }, []);

  const dataReady = didHydrate && classes.length > 0;

  const didInitPrerequisites = React.useRef(false);

  // -------------------------------------
  // Fetch class data from DB
  // -------------------------------------

  useEffect(() => {
    // 1) find the class we are editing
    const found = classes.find((c) => c.id === id);
    setClassData(found);

    // 2) find assigned prerequisites for the class we are editing
    const assignedPrerequisites = classPrerequisites.filter(
      (cp) => cp.for_class === id,
    );
    setClassPrerequisitesList(assignedPrerequisites);

    // 2.5 Map assigned prerequisites to a select list of IDs to easily manage local state of edits before saving
    if (!didInitPrerequisites.current && assignedPrerequisites.length > 0) {
      const selectedIds = assignedPrerequisites.map((cp) => cp.class_required);

      setNewClassPrerequisites(selectedIds);
      didInitPrerequisites.current = true;
    }
  }, [classes, id, classPrerequisites]);

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
  // Error handling
  // -------------------------------------

  if (!dataReady) {
    return (
      <Container>
        <Grid className="pt-10">
          <GridContent>Loading...</GridContent>
        </Grid>
      </Container>
    );
  }

  if (!classData) {
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

    for (const c of potentialPrerequisites) {
      // Is selected in the database
      const existing = classPrerequisitesList.find(
        (cp) => cp.class_required === c.id,
      );
      // Is selected in the UI
      const newSelected = newClassPrerequisites.includes(c.id);

      if (existing && !newSelected) {
        ops.push(removeClassPrerequisite(existing.id));
      } else if (!existing && newSelected) {
        ops.push(
          createClassPrerequisites({
            for_class: id,
            class_required: c.id,
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
