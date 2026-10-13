"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Tables } from "@/lib/types/database.types";
import { saveLanguage } from "../../actions";
import {
  AdminHeader,
  formGrid,
  NumberField,
  panel,
  SaveBar,
  slugify,
  TextField,
  useAdminAction,
  useDelete,
} from "../../_components";

const LanguageEditor: React.FC<{
  language: Tables<"languages"> | null;
  nextSort: number;
}> = ({ language, nextSort }) => {
  const router = useRouter();
  const isNew = !language;
  const [row, setRow] = useState<Tables<"languages">>(
    language ?? { id: "", name: "", description: null, sort: nextSort },
  );
  const set = (patch: Partial<Tables<"languages">>) => setRow({ ...row, ...patch });
  const { pending, runAction } = useAdminAction();
  const { deleting, remove } = useDelete("languages", row.id, "/admin/languages");
  const id = isNew ? slugify(row.name) : row.id;

  return (
    <>
      <AdminHeader
        title={isNew ? "New language" : row.name}
        crumbs={[{ href: "/admin/languages", label: "Languages" }]}
      />
      <section className={`${panel} ${formGrid}`}>
        <TextField label="Name" id="name" value={row.name} onChange={(name) => set({ name })} />
        <TextField label="Id" id="id" value={id} onChange={() => {}} disabled hint="Made from the name; can't change later." />
        <TextField
          label="Spoken by"
          id="description"
          value={row.description}
          onChange={(v) => set({ description: v || null })}
          multiline
          className="md:col-span-2"
        />
        <NumberField label="Sort order" id="sort" value={row.sort} onChange={(v) => set({ sort: v ?? 0 })} />
      </section>
      <SaveBar
        onSave={() =>
          runAction(() => saveLanguage(isNew, { ...row, id }), {
            then: (savedId) =>
              isNew ? router.push(`/admin/languages/${savedId}`) : router.refresh(),
          })
        }
        pending={pending || deleting}
        disabled={!row.name.trim() || !id}
        onDelete={isNew ? undefined : remove}
      />
    </>
  );
};

export default LanguageEditor;
