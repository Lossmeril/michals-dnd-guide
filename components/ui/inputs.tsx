"use client";

import React from "react";

// Applied to every control so disabled state is always visible
const disabledCls = "disabled:opacity-50 disabled:cursor-not-allowed";

// -------------------------------------
// TextInput
// Used for single-line text, email, and password fields.
// onChange gives you the string value directly — no event object needed.
// -------------------------------------

type TextInputProps = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "password";
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
};

export const TextInput: React.FC<TextInputProps> = ({
  id,
  value,
  onChange,
  type = "text",
  placeholder,
  disabled = false,
  required = false,
}) => (
  <input
    id={id}
    type={type}
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    required={required}
    className={disabledCls}
    onChange={(e) => onChange(e.target.value)}
  />
);

// -------------------------------------
// NumberInput
// onChange gives you a number directly.
// Falls back to `min` (or 0) when the field is cleared.
// -------------------------------------

type NumberInputProps = {
  id?: string;
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
};

export const NumberInput: React.FC<NumberInputProps> = ({
  id,
  value,
  onChange,
  placeholder,
  disabled = false,
  min,
  max,
}) => (
  <input
    id={id}
    type="number"
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    min={min}
    max={max}
    className={disabledCls}
    onChange={(e) => {
      const parsed = Number.parseInt(e.target.value, 10);
      onChange(Number.isFinite(parsed) ? parsed : (min ?? 0));
    }}
  />
);

// -------------------------------------
// TextArea
// onChange gives you the string value directly.
// -------------------------------------

type TextAreaProps = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
};

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  value,
  onChange,
  placeholder,
  disabled = false,
  rows = 4,
}) => (
  <textarea
    id={id}
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    rows={rows}
    className={disabledCls}
    onChange={(e) => onChange(e.target.value)}
  />
);

// -------------------------------------
// SelectInput
// Pass options as { value, label } pairs.
// onChange gives you the selected value string directly.
// -------------------------------------

export type SelectOption = {
  value: string;
  label: string;
};

type SelectInputProps = {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  disabled?: boolean;
};

export const SelectInput: React.FC<SelectInputProps> = ({
  id,
  value,
  onChange,
  options,
  disabled = false,
}) => (
  <select
    id={id}
    value={value}
    disabled={disabled}
    className={disabledCls}
    onChange={(e) => onChange(e.target.value)}
  >
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);
