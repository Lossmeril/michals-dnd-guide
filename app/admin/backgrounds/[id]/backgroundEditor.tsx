"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { formatCoins } from "@/lib/rules/format";
import type { Tables } from "@/lib/types/database.types";
import { saveBackground } from "../../actions";
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

const BackgroundEditor: React.FC<{
  background: Tables<"backgrounds"> | null;
  nextSort: number;
}> = ({ background, nextSort }) => {
  const router = useRouter();
  const isNew = !background;
  const [row, setRow] = useState<Tables<"backgrounds">>(
    background ?? {
      id: "",
      name: "",
      description: null,
      equipment: null,
      coins_copper: 0,
      material: 0,
      extra_languages: 0,
      known_settings: null,
      sort: nextSort,
    },
  );
  const set = (patch: Partial<Tables<"backgrounds">>) =>
    setRow({ ...row, ...patch });
  const { pending, runAction } = useAdminAction();
  const { deleting, remove } = useDelete("backgrounds", row.id, "/admin/backgrounds");
  const id = isNew ? slugify(row.name) : row.id;

  return (
    <>
      <AdminHeader
        title={isNew ? "New background" : row.name}
        crumbs={[{ href: "/admin/backgrounds", label: "Backgrounds" }]}
      />
      <section className={`${panel} ${formGrid}`}>
        <TextField label="Name" id="name" value={row.name} onChange={(name) => set({ name })} />
        <TextField label="Id" id="id" value={id} onChange={() => {}} disabled hint="Made from the name; can't change later." />
        <TextField
          label="Description"
          id="description"
          value={row.description}
          onChange={(v) => set({ description: v || null })}
          multiline
          className="md:col-span-2"
        />
        <TextField
          label="Starting equipment"
          id="equipment"
          value={row.equipment}
          onChange={(v) => set({ equipment: v || null })}
          className="md:col-span-2"
        />
        <NumberField
          label="Coins (in copper)"
          id="coins"
          min={0}
          value={row.coins_copper}
          onChange={(v) => set({ coins_copper: v ?? 0 })}
          hint={`${formatCoins(row.coins_copper)}. 1 gold = 100 silver = 1000 copper.`}
        />
        <NumberField label="Material" id="material" min={0} value={row.material} onChange={(v) => set({ material: v ?? 0 })} />
        <NumberField
          label="Extra languages"
          id="languages"
          min={0}
          value={row.extra_languages}
          onChange={(v) => set({ extra_languages: v ?? 0 })}
        />
        <NumberField label="Sort order" id="sort" value={row.sort} onChange={(v) => set({ sort: v ?? 0 })} />
        <TextField
          label="Known settings"
          id="known"
          value={row.known_settings}
          onChange={(v) => set({ known_settings: v || null })}
          hint="Rolls inside these get +1, e.g. the criminal underbelly, fences and hideouts."
          className="md:col-span-2"
        />
      </section>
      <SaveBar
        onSave={() =>
          runAction(() => saveBackground(isNew, { ...row, id }), {
            then: (savedId) =>
              isNew ? router.push(`/admin/backgrounds/${savedId}`) : router.refresh(),
          })
        }
        pending={pending || deleting}
        disabled={!row.name.trim() || !id}
        onDelete={isNew ? undefined : remove}
      />
    </>
  );
};

export default BackgroundEditor;
