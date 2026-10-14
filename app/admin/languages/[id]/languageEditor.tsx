"use client";

import { useState } from "react";
import {
  CheckboxGroup,
  NumberField,
  TextField,
} from "@/components/ui/formControls";
import Panel from "@/components/ui/panel";
import type { Tables } from "@/lib/types/database.types";
import { saveLanguage } from "../../actions";
import {
  AdminHeader,
  formGrid,
  IdField,
  SaveBar,
  useRowEditor,
} from "../../_components";

const LanguageEditor: React.FC<{
  language: Tables<"languages"> | null;
  /** Every other language, to pick related ones from */
  others: Tables<"languages">[];
  related: string[];
  nextSort: number;
}> = ({ language, others, related: initialRelated, nextSort }) => {
  const isNew = !language;
  const [related, setRelated] = useState(initialRelated);
  const { row, id, set, save, remove, pending } = useRowEditor<
    Tables<"languages">
  >({
    initial: language ?? { id: "", name: "", description: null, sort: nextSort },
    isNew,
    table: "languages",
    listHref: "/admin/languages",
    save: (r) => saveLanguage(isNew, r, related),
  });

  return (
    <>
      <AdminHeader
        title={isNew ? "New language" : row.name}
        crumbs={[{ href: "/admin/languages", label: "Languages" }]}
      />
      <Panel as="section" className={formGrid}>
        <TextField label="Name" id="name" value={row.name} onChange={(name) => set({ name })} />
        <IdField id={id} isNew={isNew} />
        <TextField
          label="Spoken by"
          id="description"
          value={row.description}
          onChange={(v) => set({ description: v || null })}
          multiline
          className="md:col-span-2"
        />
        <div className="md:col-span-2">
          <CheckboxGroup
            label="Related languages"
            options={others.map((l) => ({ value: l.id, label: l.name }))}
            selected={related}
            onChange={setRelated}
            hint="Dialects, deviations and bastard mixes. The link shows on both languages."
          />
        </div>
        <NumberField label="Sort order" id="sort" value={row.sort} onChange={(v) => set({ sort: v ?? 0 })} />
      </Panel>
      <SaveBar
        onSave={save}
        pending={pending}
        disabled={!row.name.trim() || !id}
        onDelete={remove}
      />
    </>
  );
};

export default LanguageEditor;
