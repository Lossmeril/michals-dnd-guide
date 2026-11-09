"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "@/components/ui/typography";

// Keys of T whose value is a string (optionally nullable), e.g. "name" on a Character
type StringKeys<T> = {
  [K in keyof T]-?: T[K] extends string | null | undefined ? K : never;
}[keyof T];

interface EditableTextProps<T, K extends StringKeys<T>> {
  /** The object being edited, e.g. a character or campaign row */
  value: T;
  /** Which field of `value` this component edits */
  field: K;
  /** Called with a partial containing only the edited field */
  onSave: (patch: Partial<T>) => void | Promise<void>;
  /** Render as a heading of this level instead of plain text */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  placeholder?: string;
  className?: string;
  /** Show the text without the edit button */
  readOnly?: boolean;
  /** Edit in a textarea; Shift+Enter adds a new line */
  multiline?: boolean;
}

const PencilIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="size-4">
    <path d="M13.586 3.586a2 2 0 1 1 2.828 2.828l-.793.793-2.828-2.828.793-.793ZM11.379 5.793 3 14.172V17h2.828l8.38-8.379-2.83-2.828Z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="size-4">
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
      clipRule="evenodd"
    />
  </svg>
);

const EditableText = <T, K extends StringKeys<T>>({
  value,
  field,
  onSave,
  headingLevel,
  placeholder = "Empty",
  className = "",
  readOnly = false,
  multiline = false,
}: EditableTextProps<T, K>) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState("");
  const [saving, setSaving] = useState(false);

  const current = (value[field] as string | null | undefined) ?? "";

  const startEditing = () => {
    setDraft(current);
    setEditing(true);
  };

  const save = async () => {
    if (draft === current) {
      setEditing(false);
      return;
    }
    setSaving(true);
    try {
      await onSave({ [field]: draft } as Partial<T>);
      setEditing(false);
    } catch (error) {
      console.error("Error saving field:", error);
    } finally {
      setSaving(false);
    }
  };

  const iconButtonClasses =
    "shrink-0 p-1 rounded text-dnd-ink/50 hover:text-dnd-red hover:bg-dnd-gold/20 transition-colors";

  const fieldProps = {
    autoFocus: true,
    value: draft,
    placeholder,
    disabled: saving,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setDraft(e.target.value),
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !(multiline && e.shiftKey)) {
        e.preventDefault();
        save();
      } else if (e.key === "Escape") {
        setEditing(false);
      }
    },
    // Inherit font so heading styles carry over into the input
    className:
      "flex-1 min-w-0 bg-transparent border-b border-dnd-gold outline-none [font:inherit] [color:inherit] [letter-spacing:inherit] [text-transform:inherit]",
  };

  const content = editing ? (
    // Not a <form>, so this can live inside other forms without submitting them
    <span className="flex items-center gap-2 w-full">
      {multiline ? (
        <textarea rows={4} {...fieldProps} />
      ) : (
        <input {...fieldProps} />
      )}
      <button
        type="button"
        onClick={save}
        disabled={saving}
        aria-label="Save"
        className={iconButtonClasses}
      >
        <CheckIcon />
      </button>
    </span>
  ) : (
    <span className="flex items-center gap-2">
      <span
        className={twMerge(
          "whitespace-pre-line",
          !current && "opacity-50 italic",
        )}
      >
        {current || placeholder}
      </span>
      {!readOnly && (
        <button
          type="button"
          onClick={startEditing}
          aria-label="Edit"
          className={iconButtonClasses}
        >
          <PencilIcon />
        </button>
      )}
    </span>
  );

  if (headingLevel) {
    return (
      <Heading level={headingLevel} className={className}>
        {content}
      </Heading>
    );
  }

  return <div className={twMerge("text-dnd-ink", className)}>{content}</div>;
};

export default EditableText;
