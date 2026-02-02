"use client";

import { useEffect, useMemo, useState } from "react";
import type { Class, DB_Class } from "@/types/class";

import { useUrlStep } from "@/lib/editors/useUrlStep";
import { EditorShell } from "./genericCreator";

import { ClassBasicsStep } from "./classCreatorSteps/basicsStep";
import PrerequisitesStep from "./classCreatorSteps/prerequisitiesStep";

const STEP_IDS = ["basics", "prerequisites"] as const;
type StepId = (typeof STEP_IDS)[number];
const DEFAULT_STEP: StepId = "basics";

type Props = {
  classId: string;
  initialClass: Class;
  initialStep?: StepId;

  // prerequisites data + handlers come from the page (recommended)
  candidateParents: DB_Class[];
  selectedParentIds: string[];
  setSelectedParentIds: (ids: string[]) => void;
  savePrereqs: () => Promise<void>;
  savingPrereqs: boolean;
  prereqError: string | null;
  setPrereqError: (e: string | null) => void;

  onSave: (c: Class) => Promise<void> | void;
  onCancel: () => void;
};

export default function ClassEditorShell({
  classId,
  initialClass,
  initialStep,
  candidateParents,
  selectedParentIds,
  setSelectedParentIds,
  savePrereqs,
  savingPrereqs,
  prereqError,
  setPrereqError,
  onSave,
  onCancel,
}: Props) {
  const [draft, setDraft] = useState<Class>(initialClass);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setDraft(initialClass), [initialClass]);

  const { activeStep, setStepInUrl } = useUrlStep<StepId>(
    STEP_IDS,
    DEFAULT_STEP,
    initialStep,
  );

  // sidebar + render config
  const stepDefs = useMemo(
    () => [
      {
        id: "basics" as const,
        title: "Basics",
        render: () => (
          <ClassBasicsStep
            classId={classId}
            value={draft}
            onChange={(patch) => setDraft((c) => ({ ...c, ...patch }))}
            setError={setError}
            // Optional: if changing rank should reset prereqs, pass a callback:
            onRankChanged={() => {
              // when rank changes, prerequisites selections often should reset
              setPrereqError(null);
              setSelectedParentIds([]);
            }}
          />
        ),
      },
      {
        id: "prerequisites" as const,
        title: "Prerequisites",
        render: () => (
          <PrerequisitesStep
            rank={draft.rank}
            allCandidates={candidateParents}
            selectedParentIds={selectedParentIds}
            setSelectedParentIds={setSelectedParentIds}
            error={prereqError}
            setError={setPrereqError}
            onSave={savePrereqs}
            saving={savingPrereqs}
          />
        ),
      },
    ],
    [
      classId,
      draft,
      candidateParents,
      prereqError,
      savePrereqs,
      savingPrereqs,
      selectedParentIds,
      setPrereqError,
      setSelectedParentIds,
    ],
  );

  const stepsForSidebar = useMemo(
    () => stepDefs.map(({ id, title }) => ({ id, title })),
    [stepDefs],
  );

  const activeDef = stepDefs.find((s) => s.id === activeStep) ?? stepDefs[0];

  const nextStep = () => {
    const idx = stepsForSidebar.findIndex((s) => s.id === activeStep);
    if (idx < stepsForSidebar.length - 1)
      setStepInUrl(stepsForSidebar[idx + 1].id);
  };

  const prevStep = () => {
    const idx = stepsForSidebar.findIndex((s) => s.id === activeStep);
    if (idx > 0) setStepInUrl(stepsForSidebar[idx - 1].id);
  };

  const handleSave = async () => {
    setError(null);

    if (!draft.title.trim()) {
      setError("Class title is required.");
      return;
    }

    const normalized: Class = {
      ...draft,
      title: draft.title.trim(),
      short_desc: draft.short_desc?.trim() ? draft.short_desc : null,
      description: draft.description?.trim() ? draft.description : null,
      image_url: draft.image_url?.trim() ? draft.image_url : null,
      color_scheme: draft.color_scheme?.trim() ? draft.color_scheme : null,
    };

    await onSave(normalized);
  };

  return (
    <EditorShell
      steps={stepsForSidebar}
      activeStep={activeStep}
      onStepChange={(id) => setStepInUrl(id)}
      error={error}
      onCancel={onCancel}
      onPrev={prevStep}
      onNext={nextStep}
      onSave={handleSave}
    >
      {activeDef.render()}
    </EditorShell>
  );
}
