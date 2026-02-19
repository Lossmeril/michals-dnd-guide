// =============================================================================
// A FIELD COMPONENT TO WRAP EACH CONTROL IN THE EDITORS WITH A LABEL, HINT, ERROR MESSAGE, AND CONSISTENT SPACING
// =============================================================================

"use client";

import React from "react";

type FieldSpan = "full" | "half" | "third" | "twoThirds" | "quarter";

type FieldProps = {
  label?: string;
  htmlFor?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;

  span?: FieldSpan;
  className?: string;

  children: React.ReactNode;
};

function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

const spanClass: Record<FieldSpan, string> = {
  full: "col-span-12",
  half: "col-span-12 md:col-span-6",
  third: "col-span-12 md:col-span-4",
  twoThirds: "col-span-12 md:col-span-8",
  quarter: "col-span-12 md:col-span-3",
};

// -------------------------------------
// Field wrapper: label + control + hint/error
// -------------------------------------

const Field: React.FC<FieldProps> = ({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  span = "full",
  className,
  children,
}) => {
  const hasError = Boolean(error);

  return (
    <div className={cx(spanClass[span], className)}>
      {label && (
        <label htmlFor={htmlFor} className="block text-sm font-medium">
          {label}
          {required ? <span className="opacity-70"> *</span> : null}
        </label>
      )}

      <div
        className={cx(
          "mt-1",
          hasError && "outline outline-2 outline-dnd-red/40 rounded-md",
        )}
      >
        {children}
      </div>

      {hasError ? (
        <div className="mt-1 text-sm text-dnd-red">{error}</div>
      ) : hint ? (
        <div className="mt-1 text-sm opacity-70">{hint}</div>
      ) : null}
    </div>
  );
};

export default Field;
