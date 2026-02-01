"use client";

import { useEffect, useMemo, useState } from "react";
import type { Character } from "@/types/character";
import Button from "@/components/ui/button";
import { CharacterAboutStep } from "./characterCreatorSteps/aboutStep";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// ---------------------------------------
// Types and helpers
// ---------------------------------------

export const STEP_IDS = ["about"] as const;
export type StepId = (typeof STEP_IDS)[number];

export const DEFAULT_STEP: StepId = "about";

export function parseStepId(input: string | null | undefined): StepId {
  if (!input) return DEFAULT_STEP;
  return (STEP_IDS as readonly string[]).includes(input)
    ? (input as StepId)
    : DEFAULT_STEP;
}

// ---------------------------------------

type CharacterEditorShellProps = {
  initialCharacter: Character;
  initialStep?: StepId;
  onSave: (character: Character) => Promise<void> | void;
  onCancel: () => void;
};

const CharacterEditorShell: React.FC<CharacterEditorShellProps> = ({
  initialCharacter,
  initialStep = DEFAULT_STEP,
  onSave,
  onCancel,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [draft, setDraft] = useState<Character>(initialCharacter);
  const [error, setError] = useState<string | null>(null);

  // Single source of truth from URL:
  const stepFromUrl = parseStepId(searchParams.get("step"));

  // UI state mirrors URL; initialize from server-passed initialStep if URL missing
  const [activeStep, setActiveStep] = useState<StepId>(
    () => stepFromUrl ?? initialStep,
  );

  // If URL changes (back/forward/manual edit), update UI state
  useEffect(() => {
    setActiveStep(stepFromUrl);
  }, [stepFromUrl]);

  // If URL has no step, set it once (so deep-link is always canonical)
  useEffect(() => {
    const current = searchParams.get("step");
    if (!current) {
      const sp = new URLSearchParams(searchParams.toString());
      sp.set("step", initialStep);
      router.replace(`${pathname}?${sp.toString()}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const steps = useMemo(
    () =>
      STEP_IDS.map((id) => ({
        id,
        title: id === "about" ? "About" : "",
      })),
    [],
  );

  const setStepInUrl = (next: StepId, mode: "push" | "replace" = "push") => {
    const sp = new URLSearchParams(searchParams.toString());
    sp.set("step", next);
    const url = `${pathname}?${sp.toString()}`;

    if (mode === "replace") router.replace(url);
    else router.push(url);
  };

  const nextStep = () => {
    const idx = steps.findIndex((s) => s.id === activeStep);
    if (idx < steps.length - 1) setStepInUrl(steps[idx + 1].id);
  };

  const prevStep = () => {
    const idx = steps.findIndex((s) => s.id === activeStep);
    if (idx > 0) setStepInUrl(steps[idx - 1].id);
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
    };

    await onSave(normalized);
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
      {/* ------------------------------------------ */}
      {/* SIDEBAR */}
      {/* ------------------------------------------ */}
      <aside className="w-full rounded-xl border-2 border-red-900/20 bg-dnd p-4">
        <div className="flex flex-col gap-2">
          {steps.map((s) => {
            const isActive = s.id === activeStep;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setStepInUrl(s.id)}
                className={[
                  "px-3 py-2 text-left transition",
                  isActive ? "menu-banner" : "hover:bg-white/30",
                ].join(" ")}
              >
                <div className="font-medium">{s.title}</div>
              </button>
            );
          })}
        </div>
      </aside>

      {/* ------------------------------------------ */}
      {/* MAIN SECTION / EDITING WINDOW */}
      {/* ------------------------------------------ */}
      <section className="rounded-xl border-2 border-red-900/20 bg-white/40 p-4">
        {activeStep === "about" && (
          <CharacterAboutStep
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
          <Button label="Back" mode="inverted" onClick={onCancel} />

          <div className="flex gap-3">
            <Button label="Previous" mode="inverted" onClick={prevStep} />
            <Button label="Next" mode="inverted" onClick={nextStep} />
            <Button label="Save" mode="default" onClick={handleSave} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CharacterEditorShell;
