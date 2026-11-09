"use client";

import { useL } from "@/lib/i18n/client";
import Link from "next/link";
import { useState } from "react";
import ClassPortraitCard from "@/components/game/classPortraitCard";
import { DataTable } from "@/components/ui/dataTable";
import {
  Checkbox,
  CheckboxGroup,
  enumOptions,
  NumberField,
  SelectField,
  TextField,
} from "@/components/ui/formControls";
import Panel from "@/components/ui/panel";
import { useTableSort } from "@/components/ui/sortLink";
import { Heading } from "@/components/ui/typography";
import { findPerk, parentsOf, type Rulebook } from "@/lib/rules/character";
import { Constants, type Tables } from "@/lib/types/database.types";
import { deleteSkill, saveClass, saveSkill } from "../../actions";
import {
  AdminHeader,
  EditorWithPreview,
  formGrid,
  IdField,
  ImageField,
  SaveBar,
  SectionHeader,
  useAdminAction,
  useRowEditor,
} from "../../_components";
import { perkColumns } from "../../perks/perksTable";

const ENUMS = Constants.public.Enums;

// Advanced classes grow from basic ones, mighty from advanced
const PARENT_RANK = { basic: null, advanced: "basic", mighty: "advanced" } as const;

const blank: Tables<"classes"> = {
  id: "",
  name: "",
  rank: "basic",
  magic: "none",
  description: null,
  image_url: null,
  color: null,
  sort: 0,
};

const ClassEditor: React.FC<{ rb: Rulebook; cls: Tables<"classes"> | null }> = ({
  rb,
  cls,
}) => {
  const sort = useTableSort();
  const isNew = !cls;
  const l = useL();
  const [parents, setParents] = useState(cls ? parentsOf(rb, cls.id) : []);
  const { row, id, set, save, remove, pending } = useRowEditor({
    initial: cls ?? { ...blank, sort: rb.classes.length },
    isNew,
    table: "classes",
    listHref: "/admin/classes",
    // Only parents of the right rank are kept, in case the rank changed
    save: (r) =>
      saveClass(
        isNew,
        r,
        parents.filter(
          (p) => rb.classes.find((c) => c.id === p)?.rank === PARENT_RANK[r.rank],
        ),
      ),
  });
  const parentRank = PARENT_RANK[row.rank];

  const links = rb.classPerks
    .filter((cp) => cp.class_id === row.id)
    .sort((a, b) => a.sort - b.sort);
  const perks = links.map((cp) => findPerk(rb, cp.perk_id)!);

  return (
    <>
      <AdminHeader
        title={isNew ? "New class" : l(row.name)}
        crumbs={[{ href: "/admin/classes", label: "Classes" }]}
      />

      <EditorWithPreview
        preview={
          <ClassPortraitCard
            cls={l(row)}
            subtitle={parents
              .map((p) => l(rb.classes.find((c) => c.id === p)?.name))
              .join(" + ")}
          />
        }
      >
        <Panel as="section" className={formGrid}>
          <TextField label="Name" localized id="name" value={row.name} onChange={(name) => set({ name })} />
          <IdField id={id} isNew={isNew} />
          <SelectField
            label="Rank"
            id="rank"
            value={row.rank}
            onChange={(rank) => set({ rank: rank as Tables<"classes">["rank"] })}
            options={enumOptions(ENUMS.class_rank)}
          />
          <SelectField
            label="Magic"
            id="magic"
            value={row.magic}
            onChange={(magic) => set({ magic: magic as Tables<"classes">["magic"] })}
            options={enumOptions(ENUMS.class_magic)}
            hint="Pseudo-magic casters pay with Scars."
          />
          {parentRank && (
            <div className="md:col-span-2">
              <CheckboxGroup
                label={`Parent classes (${parentRank})`}
                options={rb.classes
                  .filter((c) => c.rank === parentRank)
                  .map((c) => ({ value: c.id, label: l(c.name) }))}
                selected={parents}
                onChange={setParents}
                hint="The class unlocks once these total 6 levels."
              />
            </div>
          )}
          <TextField
            label="Description" localized
            id="description"
            value={row.description}
            onChange={(description) => set({ description: description || null })}
            multiline
            className="md:col-span-2"
          />
          <div className="md:col-span-2">
            <ImageField target="classes" value={row.image_url} onChange={(image_url) => set({ image_url })} />
          </div>
          <NumberField label="Sort order" id="sort" value={row.sort} onChange={(sort) => set({ sort: sort ?? 0 })} />
        </Panel>

      </EditorWithPreview>

      {!isNew && (
        <>
          <section className="mt-12">
            <Heading level={3}>Skills</Heading>
            <div className="flex flex-col gap-3">
              {rb.skills
                .filter((s) => s.class_id === row.id)
                .map((skill) => (
                  <SkillRow key={skill.id} skill={skill} />
                ))}
              <SkillRow
                key={`new-${rb.skills.length}`}
                skill={{
                  id: 0,
                  class_id: row.id,
                  name: "",
                  description: null,
                  resource: "body",
                  is_unique: false,
                  sort: rb.skills.filter((s) => s.class_id === row.id).length,
                }}
              />
            </div>
          </section>

          <section className="mt-12">
            <SectionHeader
              title="Perks, core spells and aspects"
              actions={
                <>
                  <Link href={`/admin/perks/new?class=${row.id}`} className="button button-secondary text-sm">
                    New perk
                  </Link>
                  <Link href={`/admin/perks/new?class=${row.id}&kind=spell&core=1`} className="button button-secondary text-sm">
                    New core spell
                  </Link>
                  {row.rank !== "basic" && (
                    <Link href={`/admin/perks/new?class=${row.id}&kind=aspect`} className="button button-secondary text-sm">
                      New aspect
                    </Link>
                  )}
                </>
              }
            />
            <p className="text-sm mb-4">
              To add an existing perk to this class, or change a perk&apos;s
              requirements, open the perk.
            </p>
            <DataTable
              rows={perks}
              rowKey={(p) => p.id}
              href={(p) => `/admin/perks/${p.id}`}
              columns={perkColumns(rb)}
            sort={sort}
              empty="No perks in this class yet."
            />
          </section>
        </>
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

/** One skill, saved on its own; an id of 0 is a new skill */
const SkillRow: React.FC<{ skill: Tables<"skills"> }> = ({ skill }) => {
  const [row, setRow] = useState(skill);
  const set = (patch: Partial<Tables<"skills">>) => setRow({ ...row, ...patch });
  const { pending, runAction } = useAdminAction();
  const isNew = row.id === 0;
  const changed = JSON.stringify(row) !== JSON.stringify(skill);

  return (
    <Panel tight className="grid grid-cols-1 md:grid-cols-[2fr_1fr_auto_5rem] gap-3 items-end">
      <TextField
        label={isNew ? "New skill" : "Skill"} localized
        id={`skill-${skill.id}`}
        value={row.name}
        onChange={(name) => set({ name })}
      />
      <SelectField
        label="Resource"
        id={`skill-res-${skill.id}`}
        value={row.resource}
        onChange={(resource) => set({ resource: resource as Tables<"skills">["resource"] })}
        options={enumOptions(Constants.public.Enums.resource_pool)}
      />
      <Checkbox
        label="Unique"
        className="pb-2"
        checked={row.is_unique}
        onChange={(is_unique) => set({ is_unique })}
      />
      <NumberField label="Order" id={`skill-sort-${skill.id}`} value={row.sort} onChange={(sort) => set({ sort: sort ?? 0 })} />
      <div className="md:col-span-4">
        <TextField
          label="Description" localized
          id={`skill-desc-${skill.id}`}
          value={row.description}
          onChange={(description) => set({ description: description || null })}
        />
      </div>
      <div className="md:col-span-4 flex gap-2">
        <button
          type="button"
          disabled={pending || !changed || !row.name.trim()}
          onClick={() =>
            runAction(() => {
              const { id, ...rest } = row;
              return saveSkill(isNew ? rest : { id, ...rest });
            })
          }
          className="text-xs py-1"
        >
          {isNew ? "Add skill" : "Save skill"}
        </button>
        {!isNew && (
          <button
            type="button"
            disabled={pending}
            onClick={() =>
              window.confirm(`Delete ${skill.name}?`) &&
              runAction(() => deleteSkill(skill.id), { success: "Deleted" })
            }
            className="button-secondary text-xs py-1"
          >
            Delete
          </button>
        )}
      </div>
    </Panel>
  );
};

export default ClassEditor;
