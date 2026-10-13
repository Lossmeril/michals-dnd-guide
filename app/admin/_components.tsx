"use client";

// Building blocks shared by the admin editors

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import Breadcrumbs, { type Crumb } from "@/components/ui/breadcrumbs";
import Field from "@/components/ui/field";
import { Heading } from "@/components/ui/typography";
import { convertToWebp } from "@/lib/convertToWebp";
import { deleteRow, uploadRulebookImage } from "./actions";

export const panel = "bg-dnd-bg border border-dnd-gold rounded-lg shadow-md p-6";
export const formGrid = "grid grid-cols-1 md:grid-cols-2 gap-4";

/** "Black Priest" -> "black-priest"; ids are slugs and never change */
export const slugify = (name: string) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// ----- Page header -----

export const ADMIN_CRUMB: Crumb = { label: "Admin", href: "/admin" };

export const AdminHeader: React.FC<{
  title: string;
  /** Pages between the dashboard and this one, e.g. the list it belongs to */
  crumbs?: Crumb[];
  actions?: React.ReactNode;
}> = ({ title, crumbs = [], actions }) => (
  <div className="mb-8">
    <Breadcrumbs items={[ADMIN_CRUMB, ...crumbs, { label: title }]} />
    <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-dnd-gold pb-2">
      <Heading level={1} className="mb-0 border-b-0 pb-0">
        {title}
      </Heading>
      {actions && <div className="flex gap-2">{actions}</div>}
    </div>
  </div>
);

// ----- Tables -----

export interface Column<T> {
  label: string;
  render: (row: T) => React.ReactNode;
  className?: string;
}

/** A list of rows; each row links to its editor */
export function AdminTable<T>({
  rows,
  columns,
  href,
  rowKey,
  empty = "Nothing here yet.",
}: {
  rows: T[];
  columns: Column<T>[];
  href?: (row: T) => string;
  rowKey: (row: T) => string | number;
  empty?: string;
}) {
  const router = useRouter();
  if (rows.length === 0) return <p className="text-sm">{empty}</p>;

  return (
    <div className="overflow-x-auto bg-dnd-bg border border-dnd-gold rounded-lg shadow-md">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b-2 border-dnd-gold">
            {columns.map((c) => (
              <th
                key={c.label}
                className={twMerge(
                  "px-3 py-2 libre font-bold text-dnd-red-dark",
                  c.className,
                )}
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={rowKey(row)}
              onClick={href ? () => router.push(href(row)) : undefined}
              className={twMerge(
                "border-b border-dnd-gold/40 last:border-b-0 align-top",
                href && "cursor-pointer hover:bg-dnd-accent-yellow",
              )}
            >
              {columns.map((c, i) => (
                <td key={c.label} className={twMerge("px-3 py-2", c.className)}>
                  {/* The first cell is a real link, for keyboards and new tabs */}
                  {i === 0 && href ? (
                    <Link
                      href={href(row)}
                      onClick={(e) => e.stopPropagation()}
                      className="font-bold text-dnd-red libre"
                    >
                      {c.render(row)}
                    </Link>
                  ) : (
                    c.render(row)
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const Thumb: React.FC<{ src: string | null; round?: boolean }> = ({
  src,
  round,
}) =>
  src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      className={twMerge(
        "w-10 h-10 object-cover object-top border border-dnd-gold",
        round ? "rounded-full" : "rounded",
      )}
    />
  ) : (
    <div className="w-10 h-10 rounded bg-skeleton" />
  );

// ----- Saving -----

type ActionResult<T> = { data: T; error: null } | { data: null; error: string };

/**
 * Runs an admin action with a toast. After a save, `then` gets the result,
 * e.g. to open the new row's page; otherwise the page refreshes.
 */
export const useAdminAction = () => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const runAction = <T,>(
    action: () => Promise<ActionResult<T>>,
    { success = "Saved", then }: { success?: string; then?: (data: T) => void } = {},
  ) =>
    startTransition(async () => {
      const { data, error } = await action();
      if (error !== null) {
        toast.error(error);
        return;
      }
      toast.success(success);
      if (then) then(data as T);
      else router.refresh();
    });

  return { pending, runAction };
};

/** Save and delete buttons, kept in view at the bottom of long forms */
export const SaveBar: React.FC<{
  onSave: () => void;
  pending: boolean;
  disabled?: boolean;
  /** Deletes the row and returns to the list */
  onDelete?: () => void;
}> = ({ onSave, pending, disabled, onDelete }) => (
  <div className="sticky bottom-0 z-20 -mx-4 mt-8 px-4 py-3 bg-dnd-bg/95 backdrop-blur border-t border-dnd-gold flex justify-between gap-4">
    <button
      type="button"
      onClick={onSave}
      disabled={pending || disabled}
      className="disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Saving…" : "Save"}
    </button>
    {onDelete && (
      <button
        type="button"
        onClick={onDelete}
        disabled={pending}
        className="button-secondary"
      >
        Delete
      </button>
    )}
  </div>
);

/** Asks first, then deletes and goes back to the list */
export const useDelete = (
  table: Parameters<typeof deleteRow>[0],
  id: string,
  listHref: string,
) => {
  const router = useRouter();
  const { pending, runAction } = useAdminAction();
  const remove = () => {
    // A native confirm is enough for an admin-only screen
    if (!window.confirm("Delete this for good?")) return;
    runAction(() => deleteRow(table, id), {
      success: "Deleted",
      then: () => router.push(listHref),
    });
  };
  return { deleting: pending, remove };
};

// ----- Form controls -----

export const TextField: React.FC<{
  label: string;
  id: string;
  value: string | null;
  onChange: (value: string) => void;
  hint?: React.ReactNode;
  multiline?: boolean;
  disabled?: boolean;
  className?: string;
}> = ({ label, id, value, onChange, hint, multiline, disabled, className }) => (
  <Field label={label} htmlFor={id} hint={hint} className={className}>
    {multiline ? (
      <textarea
        id={id}
        rows={5}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full"
      />
    ) : (
      <input
        id={id}
        value={value ?? ""}
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
}> = ({ label, id, value, onChange, hint, min }) => (
  <Field label={label} htmlFor={id} hint={hint}>
    <input
      id={id}
      type="number"
      min={min}
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
  options: readonly { value: string; label: string }[];
  /** Label of an empty choice; omit to require a value */
  none?: string;
  hint?: React.ReactNode;
}> = ({ label, id, value, onChange, options, none, hint }) => (
  <Field label={label} htmlFor={id} hint={hint}>
    <select
      id={id}
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value || null)}
      className="w-full"
    >
      {none !== undefined && <option value="">{none}</option>}
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  </Field>
);

/** Turns enum values into select options, "class_levels_all" -> "Class levels all" */
export const enumOptions = (values: readonly string[]) =>
  values.map((value) => ({
    value,
    label: (value[0].toUpperCase() + value.slice(1)).replaceAll("_", " "),
  }));

/** A row of checkboxes for picking several values */
export const CheckboxGroup: React.FC<{
  label: string;
  options: readonly { value: string; label: string }[];
  selected: string[];
  onChange: (selected: string[]) => void;
}> = ({ label, options, selected, onChange }) => (
  <fieldset>
    <legend className="text-sm font-bold mb-1">{label}</legend>
    <div className="flex flex-wrap gap-x-4 gap-y-1">
      {options.map((o) => (
        <label key={o.value} className="flex items-center gap-1.5 text-sm">
          <input
            type="checkbox"
            className="w-auto"
            checked={selected.includes(o.value)}
            onChange={(e) =>
              onChange(
                e.target.checked
                  ? [...selected, o.value]
                  : selected.filter((v) => v !== o.value),
              )
            }
          />
          {o.label}
        </label>
      ))}
    </div>
  </fieldset>
);

/** An image path or URL, with an upload button that fills it in */
export const ImageField: React.FC<{
  target: Parameters<typeof uploadRulebookImage>[0];
  value: string | null;
  onChange: (url: string | null) => void;
  /** Square for perks, portrait for classes and races */
  square?: boolean;
  /** Needed when several image fields share a page */
  id?: string;
}> = ({ target, value, onChange, square, id = `${target}-image` }) => {
  const [uploading, setUploading] = useState(false);

  const upload = async (original: File) => {
    setUploading(true);
    try {
      const file = await convertToWebp(original, { maxDimension: 1600 });
      const fd = new FormData();
      fd.append("file", file);
      const { data, error } = await uploadRulebookImage(target, fd);
      if (error !== null) toast.error(error);
      else onChange(data);
    } catch {
      toast.error("Couldn't read that image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex gap-4 items-start">
      <div
        className={twMerge(
          "w-28 shrink-0 bg-skeleton rounded border border-dnd-gold overflow-hidden",
          square ? "aspect-square" : "aspect-[3/4]",
        )}
      >
        {value && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={value} alt="" className="w-full h-full object-cover object-top" />
        )}
      </div>
      <div className="flex-1 flex flex-col gap-2 min-w-0">
        <TextField
          label="Image"
          id={id}
          value={value}
          onChange={(v) => onChange(v || null)}
          hint="A path like /img/classes/fighter.webp, or upload one."
        />
        <label className="button button-secondary self-start text-xs py-1 cursor-pointer">
          {uploading ? "Uploading…" : "Upload image"}
          <input
            type="file"
            accept="image/*"
            hidden
            disabled={uploading}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) upload(file);
            }}
          />
        </label>
      </div>
    </div>
  );
};
