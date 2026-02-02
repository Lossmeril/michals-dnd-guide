"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useUrlStep<TStep extends string>(
  stepIds: readonly TStep[],
  defaultStep: TStep,
  initialStep?: TStep,
) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const parse = (input: string | null | undefined): TStep => {
    if (!input) return (initialStep ?? defaultStep) as TStep;
    return (stepIds as readonly string[]).includes(input)
      ? (input as TStep)
      : ((initialStep ?? defaultStep) as TStep);
  };

  const stepFromUrl = parse(searchParams.get("step"));
  const [activeStep, setActiveStep] = useState<TStep>(stepFromUrl);

  useEffect(() => setActiveStep(stepFromUrl), [stepFromUrl]);

  useEffect(() => {
    if (!searchParams.get("step")) {
      const sp = new URLSearchParams(searchParams.toString());
      sp.set("step", (initialStep ?? defaultStep) as string);
      router.replace(`${pathname}?${sp.toString()}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setStepInUrl = (next: TStep, mode: "push" | "replace" = "push") => {
    const sp = new URLSearchParams(searchParams.toString());
    sp.set("step", next);
    const url = `${pathname}?${sp.toString()}`;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    mode === "replace" ? router.replace(url) : router.push(url);
  };

  const steps = useMemo(() => stepIds.map((id) => ({ id })), [stepIds]);

  return { activeStep, setStepInUrl, steps };
}
