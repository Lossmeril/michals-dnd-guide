"use client";

import { twMerge } from "tailwind-merge";

export interface Step {
  id: string;
  label: string;
  /** Something on this step needs fixing */
  flagged?: boolean;
}

/**
 * Numbered steps of a multi-page form. The current one is filled red; a step
 * with something to fix gets a red ring and a light red fill. Every step can
 * be jumped to.
 */
const Stepper: React.FC<{
  steps: Step[];
  current: string;
  onSelect: (id: string) => void;
  className?: string;
}> = ({ steps, current, onSelect, className }) => (
  <ol className={twMerge("flex flex-wrap gap-x-1 gap-y-2 text-sm", className)}>
    {steps.map((step, i) => {
      const active = step.id === current;
      return (
        <li key={step.id} className="flex items-center">
          {i > 0 && <span aria-hidden className="w-3 h-px bg-dnd-gold mr-1" />}
          <button
            type="button"
            onClick={() => onSelect(step.id)}
            aria-current={active ? "step" : undefined}
            title={step.label}
            className="flex items-center gap-1.5 p-0 bg-transparent hover:bg-transparent text-dnd-ink rounded-full"
          >
            <span
              className={twMerge(
                "flex items-center justify-center w-7 h-7 rounded-full border-2 text-xs font-bold libre shrink-0 transition-colors",
                active
                  ? "bg-dnd-red border-dnd-red text-white"
                  : "bg-dnd-bg border-dnd-gold text-dnd-ink hover:border-dnd-red",
                step.flagged &&
                  (active
                    ? "ring-2 ring-offset-1 ring-dnd-red"
                    : "bg-dnd-accent-red border-dnd-red text-dnd-red-dark"),
              )}
            >
              {i + 1}
            </span>
            <span
              className={twMerge(
                "hidden lg:inline pr-1",
                active && "font-bold text-dnd-red",
                step.flagged && !active && "text-dnd-red",
              )}
            >
              {step.label}
            </span>
          </button>
        </li>
      );
    })}
  </ol>
);

export default Stepper;
