"use client";

// Building blocks shared by the admin editors. Generic form controls live in
// components/ui/formControls.tsx.

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import Breadcrumbs, { type Crumb } from "@/components/ui/breadcrumbs";
import FileButton from "@/components/ui/fileButton";
import { TextField } from "@/components/ui/formControls";
import StickyBar from "@/components/ui/stickyBar";
import { Heading, Overline } from "@/components/ui/typography";
import { useImageUpload } from "@/lib/hooks/useImageUpload";
import type { Result } from "@/lib/result";
import { slugify } from "@/lib/slugify";
import { deleteRow, uploadRulebookImage } from "./actions";

export const formGrid = "grid grid-cols-1 md:grid-cols-2 gap-4";

// ----- Page header -----

export const ADMIN_CRUMB: Crumb = { label: "Admin", href: "/admin" };

export const AdminHeader: React.FC<{
  title: string;
  /** Pages between the dashboard and this one, e.g. the list it belongs to */
  crumbs?: Crumb[];
  actions?: React.ReactNode;
  /** A list page's "New race" button */
  newLink?: { href: string; label: string };
}> = ({ title, crumbs = [], actions, newLink }) => (
  <div className="mb-8">
    <Breadcrumbs items={[ADMIN_CRUMB, ...crumbs, { label: title }]} />
    <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-dnd-gold pb-2">
      <Heading level={1} className="mb-0 border-b-0 pb-0">
        {title}
      </Heading>
      {(actions || newLink) && (
        <div className="flex gap-2">
          {actions}
          {newLink && (
            <Link href={newLink.href} className="button">
              {newLink.label}
            </Link>
          )}
        </div>
      )}
    </div>
  </div>
);

/** A heading with buttons on its right, e.g. "Racial perks" + "New racial perk" */
export const SectionHeader: React.FC<{
  title: string;
  actions?: React.ReactNode;
}> = ({ title, actions }) => (
  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
    <Heading level={3} className="mb-0 border-b-0">
      {title}
    </Heading>
    {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
  </div>
);

/** The form on the left, a live preview kept in view on the right */
export const EditorWithPreview: React.FC<{
  preview: React.ReactNode;
  /** A wider preview column, e.g. for a full perk card */
  wide?: boolean;
  children: React.ReactNode;
}> = ({ preview, wide, children }) => (
  <div
    className={twMerge(
      "grid grid-cols-1 gap-8 items-start",
      wide ? "lg:grid-cols-[1fr_20rem]" : "lg:grid-cols-[1fr_14rem]",
    )}
  >
    {children}
    <aside className="lg:sticky lg:top-8 flex flex-col gap-3">
      <Overline className="mb-0">Preview</Overline>
      {preview}
    </aside>
  </div>
);

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

/**
 * Runs an admin action with a toast. After a save, `then` gets the result,
 * e.g. to open the new row's page; otherwise the page refreshes.
 */
export const useAdminAction = () => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const runAction = <T,>(
    action: () => Promise<Result<T>>,
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

/**
 * State for editing one row whose id is a slug of its name: a race, class,
 * perk… Saving a new row opens its page; deleting asks first and goes back
 * to the list.
 */
export const useRowEditor = <R extends { id: string; name: string }>({
  initial,
  isNew,
  table,
  listHref,
  save,
}: {
  initial: R;
  isNew: boolean;
  table: Parameters<typeof deleteRow>[0];
  /** The list page; the row's page is listHref/id */
  listHref: string;
  /** Saves the row (with its final id) and returns the id */
  save: (row: R) => Promise<Result<string>>;
}) => {
  const router = useRouter();
  const [row, setRow] = useState(initial);
  const { pending, runAction } = useAdminAction();
  // Ids are made from the name once and never change
  const id = isNew ? slugify(row.name) : row.id;

  return {
    row,
    id,
    pending,
    set: (patch: Partial<R>) => setRow((r) => ({ ...r, ...patch })),
    save: () =>
      runAction(() => save({ ...row, id }), {
        then: (savedId) =>
          isNew ? router.push(`${listHref}/${savedId}`) : router.refresh(),
      }),
    /** Undefined for a new row, which has nothing to delete */
    remove: isNew
      ? undefined
      : () => {
          // A native confirm is enough for an admin-only screen
          if (!window.confirm("Delete this for good?")) return;
          runAction(() => deleteRow(table, row.id), {
            success: "Deleted",
            then: () => router.push(listHref),
          });
        },
  };
};

/** Save and delete buttons, kept in view at the bottom of long forms */
export const SaveBar: React.FC<{
  onSave: () => void;
  pending: boolean;
  disabled?: boolean;
  /** Deletes the row and returns to the list */
  onDelete?: () => void;
}> = ({ onSave, pending, disabled, onDelete }) => (
  <StickyBar position="bottom">
    <button type="button" onClick={onSave} disabled={pending || disabled}>
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
  </StickyBar>
);

// ----- Form controls -----

/** The row's id, made from the name; read-only */
export const IdField: React.FC<{ id: string; isNew: boolean }> = ({
  id,
  isNew,
}) => (
  <TextField
    label="Id"
    id="id"
    value={id}
    onChange={() => {}}
    disabled
    hint={isNew ? "Made from the name; can't change later." : "Can't change."}
  />
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
  const { uploading, upload } = useImageUpload((fd) =>
    uploadRulebookImage(target, fd),
  );

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
        <FileButton
          secondary
          disabled={uploading}
          className="self-start text-xs py-1"
          onFile={async (file) => {
            const url = await upload(file);
            if (url) onChange(url);
          }}
        >
          {uploading ? "Uploading…" : "Upload image"}
        </FileButton>
      </div>
    </div>
  );
};
