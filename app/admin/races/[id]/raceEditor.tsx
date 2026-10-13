"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PortraitCard from "@/components/ui/portraitCard";
import { Heading } from "@/components/ui/typography";
import { racialPerks, type Rulebook } from "@/lib/rules/character";
import type { Tables } from "@/lib/types/database.types";
import { saveRace } from "../../actions";
import {
  AdminHeader,
  AdminTable,
  formGrid,
  ImageField,
  NumberField,
  panel,
  SaveBar,
  SelectField,
  slugify,
  TextField,
  useAdminAction,
  useDelete,
} from "../../_components";
import { perkColumns } from "../../perks/perksTable";

const blank: Tables<"races"> = {
  id: "",
  name: "",
  plural: null,
  blurb: null,
  description: null,
  image_url: null,
  language_id: null,
  sort: 0,
};

const RaceEditor: React.FC<{ rb: Rulebook; race: Tables<"races"> | null }> = ({
  rb,
  race,
}) => {
  const router = useRouter();
  const isNew = !race;
  const [row, setRow] = useState(race ?? { ...blank, sort: rb.races.length });
  const set = (patch: Partial<Tables<"races">>) => setRow({ ...row, ...patch });
  const { pending, runAction } = useAdminAction();
  const { deleting, remove } = useDelete("races", row.id, "/admin/races");
  const id = isNew ? slugify(row.name) : row.id;

  const save = () =>
    runAction(() => saveRace(isNew, { ...row, id }), {
      then: (savedId) =>
        isNew ? router.push(`/admin/races/${savedId}`) : router.refresh(),
    });

  return (
    <>
      <AdminHeader
        title={isNew ? "New race" : row.name}
        crumbs={[{ href: "/admin/races", label: "Races" }]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_14rem] gap-8 items-start">
        <section className={`${panel} ${formGrid}`}>
          <TextField label="Name" id="name" value={row.name} onChange={(name) => set({ name })} />
          <TextField
            label="Id"
            id="id"
            value={id}
            onChange={() => {}}
            disabled
            hint={isNew ? "Made from the name; can't change later." : "Can't change."}
          />
          <TextField label="Plural" id="plural" value={row.plural} onChange={(plural) => set({ plural: plural || null })} />
          <SelectField
            label="Racial language"
            id="language"
            value={row.language_id}
            onChange={(language_id) => set({ language_id })}
            none="None (picks an extra language instead)"
            options={rb.languages.map((l) => ({ value: l.id, label: l.name }))}
          />
          <TextField
            label="Blurb"
            id="blurb"
            value={row.blurb}
            onChange={(blurb) => set({ blurb: blurb || null })}
            hint="One line, shown on the race card."
            className="md:col-span-2"
          />
          <TextField
            label="Description"
            id="description"
            value={row.description}
            onChange={(description) => set({ description: description || null })}
            multiline
            className="md:col-span-2"
          />
          <div className="md:col-span-2">
            <ImageField target="races" value={row.image_url} onChange={(image_url) => set({ image_url })} />
          </div>
          <NumberField label="Sort order" id="sort" value={row.sort} onChange={(sort) => set({ sort: sort ?? 0 })} />
        </section>

        <aside className="lg:sticky lg:top-8">
          <p className="text-xs font-bold uppercase tracking-wider text-dnd-ink/60 mb-2">Preview</p>
          <PortraitCard title={row.name || "Unnamed"} imageUrl={row.image_url} subtitle={row.blurb} />
        </aside>
      </div>

      {!isNew && (
        <section className="mt-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <Heading level={3} className="mb-0 border-b-0">Racial perks</Heading>
            <Link href={`/admin/perks/new?kind=racial&race=${row.id}`} className="button button-secondary text-sm">
              New racial perk
            </Link>
          </div>
          <AdminTable
            rows={racialPerks(rb, row.id)}
            rowKey={(p) => p.id}
            href={(p) => `/admin/perks/${p.id}`}
            columns={perkColumns(rb)}
            empty="No racial perks yet."
          />
        </section>
      )}

      <SaveBar
        onSave={save}
        pending={pending || deleting}
        disabled={!row.name.trim() || !id}
        onDelete={isNew ? undefined : remove}
      />
    </>
  );
};

export default RaceEditor;
