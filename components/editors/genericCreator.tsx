"use client";

import Button from "@/components/ui/button";

type StepDef<TStep extends string> = {
  id: TStep;
  title: string;
};

export type StepConfig<TStep extends string, TValue> = {
  id: TStep;
  title: string;
  render: (args: {
    value: TValue;
    onChange: (patch: Partial<TValue>) => void;
    setError: (e: string | null) => void;
  }) => React.ReactNode;
};

type EditorShellProps<TStep extends string> = {
  steps: StepDef<TStep>[];
  activeStep: TStep;
  onStepChange: (id: TStep) => void;

  error?: string | null;

  onCancel: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSave: () => void | Promise<void>;

  children: React.ReactNode;
};

export function EditorShell<TStep extends string>({
  steps,
  activeStep,
  onStepChange,
  error,
  onCancel,
  onPrev,
  onNext,
  onSave,
  children,
}: EditorShellProps<TStep>) {
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
                onClick={() => onStepChange(s.id)}
                className={[
                  "px-3 py-2 text-left transition hover:cursor-pointer",
                  isActive ? "menu-banner" : "hover:bg-white/30",
                ].join(" ")}
              >
                <div className="font-medium">{s.title}</div>
              </button>
            );
          })}
        </div>
      </aside>

      <section className="rounded-xl border-2 border-red-900/20 bg-white/40 p-4">
        {children}

        {error && (
          <div className="mt-4 w-fit border-y-2 border-dnd-red-dark bg-dnd-accent-red px-3 py-2 text-sm text-dnd-red-dark">
            {error}
          </div>
        )}

        <div className="mt-6 flex items-center justify-between gap-3">
          <Button label="Back" mode="inverted" onClick={onCancel} />
          <div className="flex gap-3">
            <Button label="Previous" mode="inverted" onClick={onPrev} />
            <Button label="Next" mode="inverted" onClick={onNext} />
            <Button label="Save" mode="default" onClick={onSave} />
          </div>
        </div>
      </section>
    </div>
  );
}
