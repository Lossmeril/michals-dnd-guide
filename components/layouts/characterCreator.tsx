"use client";

import { useEffect, useMemo, useState } from "react";
import type { Character } from "@/types/character";
import Button from "@/components/ui/button";
import {
  BasicsStep,
  BackstoryStep,
  ImageStep,
} from "./characterCreatorSteps/simple";

type StepId = "basics" | "backstory" | "image";

type Step = {
  id: StepId;
  title: string;
};

function validateStep(step: StepId, c: Character): string | null {
  if (step === "basics") {
    if (!c.name.trim()) return "Name is required.";
  }

  return null;
}

const CharacterEditorShell = ({
  initialCharacter,
  onSave,
  onCancel,
  isSubmitting = false,
  submitLabel = "Save",
  submittingLabel = "Saving…",
}: {
  initialCharacter: Character;
  onSave: (character: Character) => Promise<void> | void;
  onCancel: () => void;
  isSubmitting?: boolean;
  submitLabel?: string;
  submittingLabel?: string;
}) => {
  const steps: Step[] = useMemo(
    () => [
      { id: "basics", title: "Basics" },
      { id: "backstory", title: "Backstory" },
      { id: "image", title: "Portrait" },
    ],
    [],
  );

  const [activeStep, setActiveStep] = useState<StepId>("basics");
  const [draft, setDraft] = useState<Character>(initialCharacter);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setDraft(initialCharacter), [initialCharacter]);

  const currentError = validateStep(activeStep, draft);

  const goTo = (next: StepId) => {
    // optional: block navigation if current step invalid
    const err = validateStep(activeStep, draft);
    if (err) {
      setError(err);
      return;
    }
    setError(null);
    setActiveStep(next);
  };

  const nextStep = () => {
    const idx = steps.findIndex((s) => s.id === activeStep);
    if (idx < steps.length - 1) goTo(steps[idx + 1].id);
  };

  const prevStep = () => {
    const idx = steps.findIndex((s) => s.id === activeStep);
    if (idx > 0) setActiveStep(steps[idx - 1].id);
  };

  const handleSave = async () => {
    const err = validateStep(activeStep, draft);
    if (err) {
      setError(err);
      return;
    }
    setError(null);

    const normalized: Character = {
      ...draft,
      name: draft.name.trim(),
      backstory: draft.backstory?.trim() ? draft.backstory : null,
      image_url: draft.image_url?.trim() ? draft.image_url : null,
    };

    await onSave(normalized);
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
      <aside className="w-full rounded-xl border-2 border-red-900/20 bg-dnd p-4">
        <div className="flex flex-col gap-2">
          {steps.map((s) => {
            const isActive = s.id === activeStep;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => goTo(s.id)}
                className={[
                  "rounded-lg px-3 py-2 text-left transition",
                  isActive
                    ? "bg-white/60 border border-red-900/20"
                    : "hover:bg-white/30",
                ].join(" ")}
              >
                <div className="font-medium">{s.title}</div>
              </button>
            );
          })}
        </div>
      </aside>

      <section className="rounded-xl border-2 border-red-900/20 bg-white/40 p-4">
        {activeStep === "basics" && (
          <BasicsStep
            value={draft}
            onChange={(patch) => setDraft((c) => ({ ...c, ...patch }))}
          />
        )}
        {activeStep === "backstory" && (
          <BackstoryStep
            value={draft}
            onChange={(patch) => setDraft((c) => ({ ...c, ...patch }))}
          />
        )}
        {activeStep === "image" && (
          <ImageStep
            value={draft}
            onChange={(patch) => setDraft((c) => ({ ...c, ...patch }))}
            setError={setError}
          />
        )}

        {error && (
          <div className="mt-4 w-fit border-y-2 border-dnd-red-dark bg-dnd-accent-red px-3 py-2 text-sm text-dnd-red-dark">
            {error}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between gap-3">
          <div className="flex gap-3">
            <Button label="Back" mode="inverted" onClick={onCancel} />
          </div>

          <div className="flex gap-3">
            <Button label="Previous" mode="inverted" onClick={prevStep} />
            <Button label="Next" mode="inverted" onClick={nextStep} />
            <Button
              label={isSubmitting ? submittingLabel : submitLabel}
              mode="default"
              onClick={handleSave}
              disabled={isSubmitting || !!currentError}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CharacterEditorShell;
