"use client";

import { useState } from "react";
import Eyebrow from "@/components/ui/eyebrow";
import { SquareImage } from "@/components/ui/perkCard";
import TraitText from "@/components/ui/traitText";
import { Heading } from "@/components/ui/typography";
import type { Tables } from "@/lib/types/database.types";
import { deleteTrait, saveTrait, setTraitApproved } from "../actions";
import { ImageField, panel, TextField, useAdminAction } from "../_components";

type Draft = {
  name: string;
  flavour: string;
  description: string;
  upside: string;
  downside: string;
  image_url: string | null;
};

const EMPTY: Draft = {
  name: "",
  flavour: "",
  description: "",
  upside: "",
  downside: "",
  image_url: null,
};

/** Optional texts are saved as null when left empty */
const toRow = (d: Draft) => ({
  ...d,
  flavour: d.flavour.trim() || null,
  description: d.description.trim() || null,
});

const TraitForm: React.FC<{
  initial: Draft;
  submitLabel: string;
  onSubmit: (draft: Draft) => void;
  onCancel?: () => void;
  pending: boolean;
  idPrefix: string;
}> = ({ initial, submitLabel, onSubmit, onCancel, pending, idPrefix }) => {
  const [draft, setDraft] = useState(initial);
  const ready = draft.name.trim() && draft.upside.trim() && draft.downside.trim();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
      <TextField label="Name" id={`${idPrefix}-name`} value={draft.name} onChange={(name) => setDraft({ ...draft, name })} />
      <TextField
        label="Flavour"
        id={`${idPrefix}-flavour`}
        value={draft.flavour}
        onChange={(flavour) => setDraft({ ...draft, flavour })}
        hint="One line, bold italics."
        className="md:col-span-2"
      />
      <TextField
        label="What it does"
        id={`${idPrefix}-desc`}
        value={draft.description}
        onChange={(description) => setDraft({ ...draft, description })}
        className="md:col-span-3"
      />
      <div className="md:col-span-3">
        <ImageField
          target="traits"
          id={`${idPrefix}-image`}
          square
          value={draft.image_url}
          onChange={(image_url) => setDraft({ ...draft, image_url })}
        />
      </div>
      <TextField label="Upside" id={`${idPrefix}-up`} value={draft.upside} onChange={(upside) => setDraft({ ...draft, upside })} />
      <TextField label="Downside" id={`${idPrefix}-down`} value={draft.downside} onChange={(downside) => setDraft({ ...draft, downside })} />
      <div className="md:col-span-3 flex gap-2">
        <button
          type="button"
          disabled={pending || !ready}
          onClick={() => onSubmit(draft)}
          className="text-sm py-1 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {submitLabel}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="button-secondary text-sm py-1">
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

const TraitsManager: React.FC<{
  traits: Tables<"traits">[];
  authors: Record<string, string>;
}> = ({ traits, authors }) => {
  const { pending, runAction } = useAdminAction();
  const [editing, setEditing] = useState<number | null>(null);
  // Bumped after adding, so the "new trait" form starts empty again
  const [formKey, setFormKey] = useState(0);

  return (
    <>
      <section className={`${panel} mb-10`}>
        <Heading level={3}>New premade trait</Heading>
        <TraitForm
          key={formKey}
          idPrefix="new"
          initial={EMPTY}
          submitLabel="Add trait"
          pending={pending}
          onSubmit={(draft) =>
            runAction(() => saveTrait(null, toRow(draft)), {
              success: "Trait added",
              then: () => setFormKey(formKey + 1),
            })
          }
        />
      </section>

      <ul className="flex flex-col gap-3">
        {traits.map((t) => {
          const waiting = t.is_custom && !t.approved_by;
          return (
            <li key={t.id} className={`${panel} p-4 ${waiting ? "border-dnd-red" : ""}`}>
              {editing === t.id ? (
                <TraitForm
                  idPrefix={`t${t.id}`}
                  initial={{
                    name: t.name,
                    flavour: t.flavour ?? "",
                    description: t.description ?? "",
                    upside: t.upside,
                    downside: t.downside,
                    image_url: t.image_url,
                  }}
                  submitLabel="Save"
                  pending={pending}
                  onCancel={() => setEditing(null)}
                  onSubmit={(draft) =>
                    runAction(() => saveTrait(t.id, toRow(draft)), {
                      then: () => setEditing(null),
                    })
                  }
                />
              ) : (
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <SquareImage src={t.image_url} className="w-16" />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-bold libre text-dnd-red">{t.name}</span>
                      {t.is_custom ? (
                        <Eyebrow
                          text={waiting ? "awaiting approval" : "custom, approved"}
                          color={waiting ? "red" : "green"}
                        />
                      ) : (
                        <Eyebrow text="premade" />
                      )}
                      {t.created_by && (
                        <span className="text-xs text-dnd-ink/60">
                          by {authors[t.created_by] ?? "unknown"}
                        </span>
                      )}
                    </div>
                    <TraitText trait={t} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t.is_custom && (
                      <button
                        type="button"
                        disabled={pending}
                        onClick={() =>
                          runAction(() => setTraitApproved(t.id, waiting), {
                            success: waiting ? "Approved" : "Approval withdrawn",
                          })
                        }
                        className={`text-xs py-1 ${waiting ? "" : "button-secondary"}`}
                      >
                        {waiting ? "Approve" : "Withdraw approval"}
                      </button>
                    )}
                    <button type="button" onClick={() => setEditing(t.id)} className="button-secondary text-xs py-1">
                      Edit
                    </button>
                    <button
                      type="button"
                      disabled={pending}
                      onClick={() =>
                        window.confirm(`Delete ${t.name}? Characters lose it too.`) &&
                        runAction(() => deleteTrait(t.id), { success: "Deleted" })
                      }
                      className="button-secondary text-xs py-1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TraitsManager;
