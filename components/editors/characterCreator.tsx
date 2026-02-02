"use client";

import { useEffect, useMemo, useState } from "react";

// ------------ TYPES
import type { Character } from "@/types/character";

// ------------ IMPORT EDITOR SHELL
import { EditorShell } from "@/components/editors/genericCreator";
import { useUrlStep } from "@/lib/editors/useUrlStep";

// ------------ IMPORT STEPS
import { CharacterAboutStep } from "./characterCreatorSteps/1aboutStep";
import {
  CharacterAttributesStep,
  type Attributes,
} from "./characterCreatorSteps/2attributesStep";
import { CharacterRaceStep } from "./characterCreatorSteps/3raceStep";

// steps for this editor
const STEP_IDS = ["about", "attributes", "race"] as const;
type StepId = (typeof STEP_IDS)[number];
const DEFAULT_STEP: StepId = "about";

type Props = {
  characterId: string;
  initialCharacter: Character;
  initialStep?: StepId;

  attributes: Attributes;
  setAttributes: (next: Attributes) => void;

  onSave: (character: Character) => Promise<void> | void;
  onCancel: () => void;
};

export default function CharacterEditorShell({
  characterId,
  initialCharacter,
  initialStep,

  attributes,
  setAttributes,

  onSave,
  onCancel,
}: Props) {
  const [draft, setDraft] = useState<Character>(initialCharacter);
  const [error, setError] = useState<string | null>(null);

  // keep draft in sync if initial changes (load from DB)
  useEffect(() => setDraft(initialCharacter), [initialCharacter]);

  const { activeStep, setStepInUrl } = useUrlStep<StepId>(
    STEP_IDS,
    DEFAULT_STEP,
    initialStep,
  );

  // Step config (this is what you’ll reuse as a pattern everywhere)
  const stepDefs = useMemo(
    () => [
      {
        id: "about" as const,
        title: "About",
        render: () => (
          <CharacterAboutStep
            characterId={characterId}
            value={draft}
            onChange={(patch) => setDraft((c) => ({ ...c, ...patch }))}
            setError={setError}
          />
        ),
      },
      {
        id: "attributes" as const,
        title: "Attributes",
        render: () => (
          <CharacterAttributesStep
            value={attributes}
            onChange={(patch) => setAttributes({ ...attributes, ...patch })}
            setError={setError}
          />
        ),
      },
      {
        id: "race" as const,
        title: "Race",
        render: () => (
          <CharacterRaceStep
            value={draft}
            onChange={(patch) => setDraft((c) => ({ ...c, ...patch }))}
            setError={setError}
          />
        ),
      },
    ],
    [characterId, draft, attributes, setAttributes],
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

    if (!draft.name.trim()) {
      setError("Name is required.");
      return;
    }

    const normalized: Character = {
      ...draft,
      name: draft.name.trim(),
      backstory: draft.backstory?.trim() ? draft.backstory : null,
      image_url: draft.image_url?.trim() ? draft.image_url : null,

      race_id: draft.race_id ?? null,
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
