"use client";

import Link from "next/link";
import { DataTable } from "@/components/ui/dataTable";
import {
  NumberField,
  SelectField,
  TextField,
} from "@/components/ui/formControls";
import Panel from "@/components/ui/panel";
import { useTableSort } from "@/components/ui/sortLink";
import PortraitCard from "@/components/ui/portraitCard";
import { racialPerks, type Rulebook } from "@/lib/rules/character";
import type { Tables } from "@/lib/types/database.types";
import { saveRace } from "../../actions";
import {
  AdminHeader,
  EditorWithPreview,
  formGrid,
  IdField,
  ImageField,
  SaveBar,
  SectionHeader,
  useRowEditor,
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
  speed: 6,
};

const RaceEditor: React.FC<{ rb: Rulebook; race: Tables<"races"> | null }> = ({
  rb,
  race,
}) => {
  const sort = useTableSort();
  const isNew = !race;
  const { row, id, set, save, remove, pending } = useRowEditor({
    initial: race ?? { ...blank, sort: rb.races.length },
    isNew,
    table: "races",
    listHref: "/admin/races",
    save: (r) => saveRace(isNew, r),
  });

  return (
    <>
      <AdminHeader
        title={isNew ? "New race" : row.name}
        crumbs={[{ href: "/admin/races", label: "Races" }]}
      />

      <EditorWithPreview
        preview={
          <PortraitCard
            title={row.name || "Unnamed"}
            imageUrl={row.image_url}
            subtitle={row.blurb}
          />
        }
      >
        <Panel as="section" className={formGrid}>
          <TextField label="Name" id="name" value={row.name} onChange={(name) => set({ name })} />
          <IdField id={id} isNew={isNew} />
          <TextField label="Plural" id="plural" value={row.plural} onChange={(plural) => set({ plural: plural || null })} />
          <SelectField
            label="Racial language"
            id="language"
            value={row.language_id}
            onChange={(language_id) => set({ language_id })}
            none="None (picks an extra language instead)"
            options={rb.languages.map((l) => ({ value: l.id, label: l.name }))}
          />
          <NumberField
            label="Speed (m)"
            id="speed"
            value={row.speed}
            onChange={(speed) => set({ speed: speed ?? 6 })}
            min={1}
            hint="How far one movement goes. Human 6, dwarf 5."
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
        </Panel>
      </EditorWithPreview>

      {!isNew && (
        <section className="mt-12">
          <SectionHeader
            title="Racial perks"
            actions={
              <Link href={`/admin/perks/new?kind=racial&race=${row.id}`} className="button button-secondary text-sm">
                New racial perk
              </Link>
            }
          />
          <DataTable
            rows={racialPerks(rb, row.id)}
            rowKey={(p) => p.id}
            href={(p) => `/admin/perks/${p.id}`}
            columns={perkColumns(rb)}
            sort={sort}
            empty="No racial perks yet."
          />
        </section>
      )}

      <SaveBar
        onSave={save}
        pending={pending}
        disabled={!row.name.trim() || !id}
        onDelete={remove}
      />
    </>
  );
};

export default RaceEditor;
