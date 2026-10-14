"use client";

// Controlled inputs wrapped in a Field: label, control, hint

import Field from "./field";

export type Option = { value: string; label: string };

/** Turns enum values into select options, "class_levels_all" -> "Class levels all" */
export const enumOptions = (values: readonly string[]): Option[] =>
  values.map((value) => ({
    value,
    label: (value[0].toUpperCase() + value.slice(1)).replaceAll("_", " "),
  }));

export const TextField: React.FC<{
  label: string;
  id: string;
  value: string | null;
  onChange: (value: string) => void;
  hint?: React.ReactNode;
  placeholder?: string;
  multiline?: boolean;
  disabled?: boolean;
  className?: string;
}> = ({
  label,
  id,
  value,
  onChange,
  hint,
  placeholder,
  multiline,
  disabled,
  className,
}) => (
  <Field label={label} htmlFor={id} hint={hint} className={className}>
    {multiline ? (
      <textarea
        id={id}
        rows={5}
        value={value ?? ""}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
      />
    ) : (
      <input
        id={id}
        value={value ?? ""}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="disabled:opacity-60"
      />
    )}
  </Field>
);

export const NumberField: React.FC<{
  label: string;
  id: string;
  value: number | null;
  /** null when the field is emptied */
  onChange: (value: number | null) => void;
  hint?: React.ReactNode;
  min?: number;
  disabled?: boolean;
  className?: string;
}> = ({ label, id, value, onChange, hint, min, disabled, className }) => (
  <Field label={label} htmlFor={id} hint={hint} className={className}>
    <input
      id={id}
      type="number"
      min={min}
      disabled={disabled}
      className="disabled:opacity-40"
      value={value ?? ""}
      onChange={(e) =>
        onChange(e.target.value === "" ? null : Number(e.target.value))
      }
    />
  </Field>
);

export const SelectField: React.FC<{
  label: string;
  id: string;
  value: string | null;
  onChange: (value: string | null) => void;
  options: readonly Option[];
  /** Label of an empty choice; omit to require a value */
  none?: string;
  hint?: React.ReactNode;
  className?: string;
}> = ({ label, id, value, onChange, options, none, hint, className }) => (
  <Field label={label} htmlFor={id} hint={hint} className={className}>
    <Select value={value} onChange={onChange} options={options} none={none} id={id} />
  </Field>
);

/** A bare select, for filters and toolbars without a label above */
export const Select: React.FC<{
  value: string | null;
  onChange: (value: string | null) => void;
  options: readonly Option[];
  none?: string;
  id?: string;
  "aria-label"?: string;
  className?: string;
}> = ({ value, onChange, options, none, id, className, ...aria }) => (
  <select
    id={id}
    aria-label={aria["aria-label"]}
    value={value ?? ""}
    onChange={(e) => onChange(e.target.value || null)}
    className={className ?? "w-full"}
  >
    {none !== undefined && <option value="">{none}</option>}
    {options.map((o) => (
      <option key={o.value} value={o.value}>
        {o.label}
      </option>
    ))}
  </select>
);

/** One checkbox with its label beside it */
export const Checkbox: React.FC<{
  label: React.ReactNode;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}> = ({ label, checked, onChange, disabled, className }) => (
  <label className={`flex items-center gap-1.5 text-sm ${className ?? ""}`}>
    <input
      type="checkbox"
      className="w-auto"
      checked={checked}
      disabled={disabled}
      onChange={(e) => onChange(e.target.checked)}
    />
    {label}
  </label>
);

/** A row of checkboxes for picking several values */
export const CheckboxGroup: React.FC<{
  label: string;
  options: readonly Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  hint?: React.ReactNode;
}> = ({ label, options, selected, onChange, hint }) => (
  <fieldset>
    <legend className="text-sm font-bold mb-1">{label}</legend>
    <div className="flex flex-wrap gap-x-4 gap-y-1">
      {options.map((o) => (
        <Checkbox
          key={o.value}
          label={o.label}
          checked={selected.includes(o.value)}
          onChange={(on) =>
            onChange(
              on
                ? [...selected, o.value]
                : selected.filter((v) => v !== o.value),
            )
          }
        />
      ))}
    </div>
    {hint && <p className="text-xs text-dnd-ink/60 mt-1">{hint}</p>}
  </fieldset>
);
