"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MagicBadge from "@/components/ui/magicBadge";
import PortraitCard from "@/components/ui/portraitCard";
import { Heading } from "@/components/ui/typography";
import { findPerk, parentsOf, type Rulebook } from "@/lib/rules/character";
import { Constants, type Tables } from "@/lib/types/database.types";
import { deleteSkill, saveClass, saveSkill } from "../../actions";
import {
  AdminHeader,
  AdminTable,
  CheckboxGroup,
  enumOptions,
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
  const router = useRouter();
  const isNew = !cls;
  const [row, setRow] = useState(cls ?? { ...blank, sort: rb.classes.length });
  const [parents, setParents] = useState(cls ? parentsOf(rb, cls.id) : []);
  const set = (patch: Partial<Tables<"classes">>) => setRow({ ...row, ...patch });
  const { pending, runAction } = useAdminAction();
  const { deleting, remove } = useDelete("classes", row.id, "/admin/classes");
  const id = isNew ? slugify(row.name) : row.id;
  const parentRank = PARENT_RANK[row.rank];

  const save = () =>
    runAction(
      // Only parents of the right rank are kept, in case the rank changed
      () =>
        saveClass(
          isNew,
          { ...row, id },
          parents.filter((p) => rb.classes.find((c) => c.id === p)?.rank === parentRank),
        ),
      {
        then: (savedId) =>
          isNew ? router.push(`/admin/classes/${savedId}`) : router.refresh(),
      },
    );

  const links = rb.classPerks
    .filter((cp) => cp.class_id === row.id)
    .sort((a, b) => a.sort - b.sort);
  const perks = links.map((cp) => findPerk(rb, cp.perk_id)!);

  return (
    <>
      <AdminHeader
        title={isNew ? "New class" : row.name}
        crumbs={[{ href: "/admin/classes", label: "Classes" }]}
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
                  .map((c) => ({ value: c.id, label: c.name }))}
                selected={parents}
                onChange={setParents}
              />
              <p className="text-xs text-dnd-ink/60 mt-1">
                The class unlocks once these total 6 levels.
              </p>
            </div>
          )}
          <TextField
            label="Description"
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
        </section>

        <aside className="lg:sticky lg:top-8">
          <p className="text-xs font-bold uppercase tracking-wider text-dnd-ink/60 mb-2">Preview</p>
          <PortraitCard
            title={row.name || "Unnamed"}
            imageUrl={row.image_url}
            badges={
              row.magic !== "none" && (
                <span className="rounded-full bg-dnd-bg/90">
                  <MagicBadge magic={row.magic} />
                </span>
              )
            }
            subtitle={parents
              .map((p) => rb.classes.find((c) => c.id === p)?.name)
              .join(" + ")}
          />
        </aside>
      </div>

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
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <Heading level={3} className="mb-0 border-b-0">
                Perks, core spells and aspects
              </Heading>
              <div className="flex flex-wrap gap-2">
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
              </div>
            </div>
            <p className="text-sm mb-4">
              To add an existing perk to this class, or change a perk&apos;s
              requirements, open the perk.
            </p>
            <AdminTable
              rows={perks}
              rowKey={(p) => p.id}
              href={(p) => `/admin/perks/${p.id}`}
              columns={perkColumns(rb)}
              empty="No perks in this class yet."
            />
          </section>
        </>
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

/** One skill, saved on its own; an id of 0 is a new skill */
const SkillRow: React.FC<{ skill: Tables<"skills"> }> = ({ skill }) => {
  const [row, setRow] = useState(skill);
  const set = (patch: Partial<Tables<"skills">>) => setRow({ ...row, ...patch });
  const { pending, runAction } = useAdminAction();
  const isNew = row.id === 0;
  const changed = JSON.stringify(row) !== JSON.stringify(skill);

  return (
    <div className={`${panel} p-4 grid grid-cols-1 md:grid-cols-[2fr_1fr_auto_5rem] gap-3 items-end`}>
      <TextField
        label={isNew ? "New skill" : "Skill"}
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
      <label className="flex items-center gap-1.5 text-sm pb-2">
        <input
          type="checkbox"
          className="w-auto"
          checked={row.is_unique}
          onChange={(e) => set({ is_unique: e.target.checked })}
        />
        Unique
      </label>
      <NumberField label="Order" id={`skill-sort-${skill.id}`} value={row.sort} onChange={(sort) => set({ sort: sort ?? 0 })} />
      <div className="md:col-span-4">
        <TextField
          label="Description"
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
          className="text-xs py-1 disabled:opacity-40 disabled:cursor-not-allowed"
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
    </div>
  );
};

export default ClassEditor;
