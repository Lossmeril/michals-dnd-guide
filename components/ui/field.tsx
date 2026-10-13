import { twMerge } from "tailwind-merge";

interface FieldProps {
  label: string;
  htmlFor: string;
  /** Grey help text under the control */
  hint?: React.ReactNode;
  /** Replaces the hint and outlines the control in red */
  error?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

/** A form control with its label, hint and error message */
const Field: React.FC<FieldProps> = ({
  label,
  htmlFor,
  hint,
  error,
  className,
  children,
}) => (
  <div className={twMerge("flex flex-col gap-1", className)}>
    <label htmlFor={htmlFor} className="text-sm font-bold">
      {label}
    </label>
    <div
      className={twMerge(
        "[&>input]:w-full [&>textarea]:w-full",
        error && "[&>input]:border-dnd-red [&>input]:bg-dnd-accent-red/20",
      )}
    >
      {children}
    </div>
    {error ? (
      <p className="text-xs text-dnd-red" role="alert">
        {error}
      </p>
    ) : (
      hint && <p className="text-xs text-dnd-ink/60">{hint}</p>
    )}
  </div>
);

export default Field;
