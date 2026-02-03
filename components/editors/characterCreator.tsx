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

type CharacterEditorShellProps = {
  characterId: string;
  initialCharacter: Character;
  initialStep?: StepId;

  attributes: Attributes;
  setAttributes: (next: Attributes) => void;

  onSave: (character: Character) => Promise<void> | void;
  onCancel: () => void;
};
const CharacterEditorShell: React.FC<CharacterEditorShellProps> = ({
  characterId,
  initialCharacter,
  initialStep,

  attributes,
  setAttributes,

  onSave,
  onCancel,
}) => {
  const [draft, setDraft] = useState<Character>(initialCharacter);
  const [error, setError] = useState<string | null>(null);

  const BASE_ATTR_POOL = 15;
  const DEFAULT_LEVEL_CAP = 8;

  type Attr3 = { body: number; soul: number; charisma: number };

  const sum3 = (a: Attr3) => a.body + a.soul + a.charisma;
  const clampInt = (n: number, min: number, max: number) =>
    Math.max(min, Math.min(max, Number.isFinite(n) ? n : min));

  const [levelCap, setLevelCap] = useState(DEFAULT_LEVEL_CAP);

  // base allocation (must sum to 15)
  const [baseAttrs, setBaseAttrs] = useState<Attr3>({
    body: 5,
    soul: 5,
    charisma: 5,
  });

  // extra allocation (spends level points)
  const [extraAttrs, setExtraAttrs] = useState<Attr3>({
    body: 0,
    soul: 0,
    charisma: 0,
  });

  // classes (spends level points)
  const [classLevels, setClassLevels] = useState<Record<string, number>>({});

  // perks later (spends level points)
  const [perkCount, setPerkCount] = useState(0);

  const baseLeft = BASE_ATTR_POOL - sum3(baseAttrs);
  const classSpent = Object.values(classLevels).reduce(
    (s, n) => s + (n ?? 0),
    0,
  );
  const extraSpent = sum3(extraAttrs);
  const levelSpent = classSpent + extraSpent + perkCount;
  const levelLeft = levelCap - levelSpent;

  const finalAttrs = useMemo(
    () => ({
      body: baseAttrs.body + extraAttrs.body,
      soul: baseAttrs.soul + extraAttrs.soul,
      charisma: baseAttrs.charisma + extraAttrs.charisma,
    }),
    [baseAttrs, extraAttrs],
  );

  // when DB-loaded totals arrive, derive editor split (base 5/5/5 + extra = totals-5)
  useEffect(() => {
    // base always 5/5/5 for your UX
    setBaseAttrs({ body: 5, soul: 5, charisma: 5 });

    // extra = totals - base (clamp >= 0)
    setExtraAttrs({
      body: Math.max(0, attributes.body - 5),
      soul: Math.max(0, attributes.soul - 5),
      charisma: Math.max(0, attributes.charisma - 5),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributes.body, attributes.soul, attributes.charisma]);

  // whenever user edits base/extra, update the "final totals" state in the page
  useEffect(() => {
    setAttributes(finalAttrs);
  }, [finalAttrs, setAttributes]);

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
            base={baseAttrs}
            extra={extraAttrs}
            baseLeft={baseLeft}
            levelLeft={levelLeft}
            setBase={setBaseAttrs}
            setExtra={setExtraAttrs}
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
    [characterId, draft, baseAttrs, extraAttrs, baseLeft, levelLeft],
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
};

export default CharacterEditorShell;
