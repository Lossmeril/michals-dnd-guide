"use client";

import { useEffect, useMemo, useState } from "react";
import { useUrlStep } from "@/lib/editors/useUrlStep";
import { EditorShell } from "@/components/editors/genericCreator";
import type { Race } from "@/types/race";
import { RaceBasicsStep } from "./raceCreatorSteps/basicsStep";

const STEP_IDS = ["basics"] as const;
type StepId = (typeof STEP_IDS)[number];
const DEFAULT_STEP: StepId = "basics";

export default function RaceEditorShell({
  raceId,
  initialRace,
  initialStep,
  onSave,
  onCancel,
}: {
  raceId: string;
  initialRace: Race;
  initialStep?: StepId;
  onSave: (r: Race) => Promise<void> | void;
  onCancel: () => void;
}) {
  const [draft, setDraft] = useState<Race>(initialRace);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setDraft(initialRace), [initialRace]);

  const { activeStep, setStepInUrl } = useUrlStep<StepId>(
    STEP_IDS,
    DEFAULT_STEP,
    initialStep,
  );

  const stepDefs = useMemo(
    () => [
      {
        id: "basics" as const,
        title: "Basics",
        render: () => (
          <RaceBasicsStep
            raceId={raceId}
            value={draft}
            onChange={(patch) => setDraft((r) => ({ ...r, ...patch }))}
            setError={setError}
          />
        ),
      },
    ],
    [draft, raceId],
  );

  const stepsForSidebar = useMemo(
    () => stepDefs.map(({ id, title }) => ({ id, title })),
    [stepDefs],
  );

  const activeDef = stepDefs.find((s) => s.id === activeStep) ?? stepDefs[0];

  const handleSave = async () => {
    setError(null);
    if (!draft.name.trim()) {
      setError("Race name is required.");
      return;
    }

    const normalized: Race = {
      name: draft.name.trim(),
      description: draft.description?.trim() ? draft.description : null,
      image_url: draft.image_url,
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
      onPrev={() => {}}
      onNext={() => {}}
      onSave={handleSave}
    >
      {activeDef.render()}
    </EditorShell>
  );
}
