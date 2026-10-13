"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import PerkCard from "@/components/ui/perkCard";
import { Heading } from "@/components/ui/typography";
import {
  describeRequirement,
  type Requirement,
  type Rulebook,
} from "@/lib/rules/character";
import { Constants, type Tables } from "@/lib/types/database.types";
import {
  type ClassLinkInput,
  type RequirementInput,
  savePerk,
} from "../../actions";
import {
  AdminHeader,
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

const ENUMS = Constants.public.Enums;
const CLASS_KINDS = ["class_level", "class_levels_all", "class_levels_sum"];

const REQUIREMENT_HINTS: Record<string, string> = {
  class_level: "One class at this level or higher, e.g. Fighter 5.",
  class_levels_all: "Every ticked class at this level or higher.",
  class_levels_sum: "The ticked classes' levels add up to this.",
  has_perk: "The character holds this perk.",
  has_aspect: "The character holds this aspect.",
};

const blank: Tables<"perks"> = {
  id: "",
  name: "",
  kind: "perk",
  race_id: null,
  flavour: null,
  description: null,
  image_url: null,
  cost_resource: null,
  cost_amount: null,
  cost_unit: null,
  components: null,
  material_note: null,
  range: null,
  area: null,
  damage: null,
  damage_types: null,
  duration: null,
};

interface PerkEditorProps {
  rb: Rulebook;
  perk: Tables<"perks"> | null;
  preset: {
    kind: string | null;
    classId: string | null;
    raceId: string | null;
    core: boolean;
  };
}

const PerkEditor: React.FC<PerkEditorProps> = ({ rb, perk, preset }) => {
  const router = useRouter();
  const isNew = !perk;
  const [row, setRow] = useState<Tables<"perks">>(
    perk ?? {
      ...blank,
      kind: (ENUMS.perk_kind as readonly string[]).includes(preset.kind ?? "")
        ? (preset.kind as Tables<"perks">["kind"])
        : "perk",
      race_id: preset.raceId,
    },
  );
  const [links, setLinks] = useState<ClassLinkInput[]>(
    perk
      ? rb.classPerks
          .filter((cp) => cp.perk_id === perk.id)
          .map(({ class_id, is_core, sort }) => ({ class_id, is_core, sort }))
      : preset.classId
        ? [{ class_id: preset.classId, is_core: preset.core, sort: 0 }]
        : [],
  );
  const [requirements, setRequirements] = useState<RequirementInput[]>(
    perk
      ? rb.requirements
          .filter((r) => r.perk_id === perk.id)
          .map(({ kind, level, class_ids, required_perk_id }) => ({
            kind,
            level,
            class_ids,
            required_perk_id,
          }))
      : [],
  );

  const set = (patch: Partial<Tables<"perks">>) => setRow({ ...row, ...patch });
  const { pending, runAction } = useAdminAction();
  const { deleting, remove } = useDelete("perks", row.id, "/admin/perks");
  const id = isNew ? slugify(row.name) : row.id;
  const racial = row.kind === "racial";

  const classOptions = rb.classes.map((c) => ({ value: c.id, label: c.name }));
  const setReq = (i: number, patch: Partial<RequirementInput>) =>
    setRequirements(requirements.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  const setLink = (i: number, patch: Partial<ClassLinkInput>) =>
    setLinks(links.map((l, j) => (j === i ? { ...l, ...patch } : l)));

  const describe = (r: RequirementInput) =>
    describeRequirement(rb, { ...r, id: 0, perk_id: id } as Requirement);

  const problems = [
    !row.name.trim() && "Give it a name.",
    racial && !row.race_id && "Pick the race this perk belongs to.",
    requirements.some(
      (r) => CLASS_KINDS.includes(r.kind) && (!r.class_ids.length || !r.level),
    ) && "Class requirements need at least one class and a level.",
    requirements.some((r) => !CLASS_KINDS.includes(r.kind) && !r.required_perk_id) &&
      "Pick the perk or aspect each requirement points to.",
    new Set(links.map((l) => l.class_id)).size !== links.length &&
      "A class is listed twice.",
  ].filter(Boolean) as string[];

  const save = () =>
    runAction(
      () =>
        savePerk(
          isNew,
          { ...row, id, race_id: racial ? row.race_id : null },
          racial ? [] : links,
          requirements.map((r) =>
            CLASS_KINDS.includes(r.kind)
              ? { ...r, required_perk_id: null }
              : { ...r, class_ids: [], level: null },
          ),
        ),
      {
        then: (savedId) =>
          isNew ? router.push(`/admin/perks/${savedId}`) : router.refresh(),
      },
    );

  return (
    <>
      <AdminHeader
        title={isNew ? "New perk" : row.name}
        crumbs={[{ href: "/admin/perks", label: "Perks and spells" }]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_20rem] gap-8 items-start">
        <div className="flex flex-col gap-8 min-w-0">
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
              label="Kind"
              id="kind"
              value={row.kind}
              onChange={(kind) => set({ kind: (kind ?? "perk") as Tables<"perks">["kind"] })}
              options={enumOptions(ENUMS.perk_kind)}
              hint="Aspects are granted automatically and root a class's perk tree."
            />
            {racial && (
              <SelectField
                label="Race"
                id="race"
                value={row.race_id}
                onChange={(race_id) => set({ race_id })}
                none="Pick a race"
                options={rb.races.map((r) => ({ value: r.id, label: r.name }))}
              />
            )}
            <TextField
              label="Flavour"
              id="flavour"
              value={row.flavour}
              onChange={(flavour) => set({ flavour: flavour || null })}
              hint="One line with the gist, shown in bold italics before the description."
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
              <ImageField
                target="perks"
                square
                value={row.image_url}
                onChange={(image_url) => set({ image_url })}
              />
            </div>
          </section>

          {row.kind !== "aspect" && (
            <section className={panel}>
              <Heading level={3}>Activation price</Heading>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SelectField
                  label="Paid with"
                  id="cost-resource"
                  value={row.cost_resource}
                  onChange={(r) =>
                    set({
                      cost_resource: r as Tables<"perks">["cost_resource"],
                      ...(r ? {} : { cost_amount: null, cost_unit: null }),
                    })
                  }
                  none="Nothing (passive)"
                  options={enumOptions(ENUMS.cost_resource)}
                  hint="Pools are exhausted; Material is spent."
                />
                {row.cost_resource && (
                  <>
                    <NumberField
                      label="Amount"
                      id="cost-amount"
                      min={0}
                      value={row.cost_amount}
                      onChange={(cost_amount) => set({ cost_amount })}
                      hint="Empty for a variable price."
                    />
                    <TextField
                      label="Per"
                      id="cost-unit"
                      value={row.cost_unit}
                      onChange={(cost_unit) => set({ cost_unit: cost_unit || null })}
                      hint="e.g. group member, unit of strength"
                    />
                  </>
                )}
              </div>
            </section>
          )}

          <details className={panel} open={row.kind === "spell" || !!row.components?.length}>
            <summary className="cursor-pointer libre caps text-dnd-red text-lg">
              Spell details
            </summary>
            <div className={`${formGrid} mt-4`}>
              <div className="md:col-span-2">
                <CheckboxGroup
                  label="Components"
                  options={enumOptions(ENUMS.spell_component_type)}
                  selected={row.components ?? []}
                  onChange={(c) =>
                    set({ components: c.length ? (c as Tables<"perks">["components"]) : null })
                  }
                />
              </div>
              <TextField label="Material component" id="material-note" value={row.material_note} onChange={(v) => set({ material_note: v || null })} />
              <SelectField
                label="Duration"
                id="duration"
                value={row.duration}
                onChange={(duration) => set({ duration: duration as Tables<"perks">["duration"] })}
                none="—"
                options={enumOptions(ENUMS.spell_duration)}
              />
              <TextField label="Range" id="range" value={row.range} onChange={(v) => set({ range: v || null })} hint="In metres." />
              <TextField label="Area" id="area" value={row.area} onChange={(v) => set({ area: v || null })} />
              <TextField label="Damage" id="damage" value={row.damage} onChange={(v) => set({ damage: v || null })} hint="e.g. 2d6" />
              <div className="md:col-span-2">
                <CheckboxGroup
                  label="Damage types"
                  options={enumOptions(ENUMS.damage_type)}
                  selected={row.damage_types ?? []}
                  onChange={(d) =>
                    set({ damage_types: d.length ? (d as Tables<"perks">["damage_types"]) : null })
                  }
                />
              </div>
            </div>
          </details>

          {!racial && (
            <section className={panel}>
              <Heading level={3}>Classes</Heading>
              <p className="text-sm mb-4">
                Which classes can pick it. A core spell comes free with the class.
                {row.kind === "aspect" && " An aspect belongs to one advanced class."}
              </p>
              <ul className="flex flex-col gap-3 mb-4">
                {links.map((link, i) => (
                  <li key={i} className="flex flex-wrap items-end gap-3 pb-3 border-b border-dnd-gold/40">
                    <div className="flex-1 min-w-40">
                      <SelectField
                        label="Class"
                        id={`link-${i}`}
                        value={link.class_id}
                        onChange={(class_id) => setLink(i, { class_id: class_id! })}
                        options={classOptions}
                      />
                    </div>
                    <label className="flex items-center gap-1.5 text-sm pb-2">
                      <input
                        type="checkbox"
                        className="w-auto"
                        checked={link.is_core}
                        onChange={(e) => setLink(i, { is_core: e.target.checked })}
                      />
                      Core spell
                    </label>
                    <div className="w-24">
                      <NumberField label="Order" id={`link-sort-${i}`} value={link.sort} onChange={(sort) => setLink(i, { sort: sort ?? 0 })} />
                    </div>
                    <button
                      type="button"
                      onClick={() => setLinks(links.filter((_, j) => j !== i))}
                      className="button-secondary text-xs py-1 mb-1"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() =>
                  setLinks([
                    ...links,
                    {
                      class_id: rb.classes.find((c) => !links.some((l) => l.class_id === c.id))!.id,
                      is_core: false,
                      sort: 0,
                    },
                  ])
                }
                className="button-secondary text-sm py-1"
              >
                Add a class
              </button>
            </section>
          )}

          <section className={panel}>
            <Heading level={3}>Requirements</Heading>
            <p className="text-sm mb-4">
              All of them must be met. A perk needing an aspect or another perk of
              the same class hangs under it in the perk tree.
            </p>
            <ul className="flex flex-col gap-4 mb-4">
              {requirements.map((req, i) => {
                const classKind = CLASS_KINDS.includes(req.kind);
                return (
                  <li key={i} className="flex flex-col gap-3 pb-4 border-b border-dnd-gold/40">
                    <div className="flex flex-wrap items-end gap-3">
                      <div className="flex-1 min-w-48">
                        <SelectField
                          label="Kind"
                          id={`req-kind-${i}`}
                          value={req.kind}
                          onChange={(kind) => setReq(i, { kind: kind as RequirementInput["kind"] })}
                          options={enumOptions(ENUMS.requirement_kind)}
                          hint={REQUIREMENT_HINTS[req.kind]}
                        />
                      </div>
                      {classKind ? (
                        <div className="w-28">
                          <NumberField label="Level" id={`req-level-${i}`} min={1} value={req.level} onChange={(level) => setReq(i, { level })} />
                        </div>
                      ) : (
                        <div className="flex-1 min-w-48">
                          <SelectField
                            label={req.kind === "has_aspect" ? "Aspect" : "Perk"}
                            id={`req-perk-${i}`}
                            value={req.required_perk_id}
                            onChange={(required_perk_id) => setReq(i, { required_perk_id })}
                            none="Pick one"
                            options={rb.perks
                              .filter(
                                (p) =>
                                  p.id !== id &&
                                  (req.kind === "has_aspect"
                                    ? p.kind === "aspect"
                                    : p.kind !== "aspect"),
                              )
                              .map((p) => ({ value: p.id, label: p.name }))}
                          />
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={() => setRequirements(requirements.filter((_, j) => j !== i))}
                        className="button-secondary text-xs py-1 mb-6"
                      >
                        Remove
                      </button>
                    </div>
                    {classKind && (
                      <CheckboxGroup
                        label="Classes"
                        options={classOptions}
                        selected={req.class_ids}
                        onChange={(class_ids) =>
                          setReq(i, {
                            // "One class" keeps only the latest tick
                            class_ids: req.kind === "class_level" ? class_ids.slice(-1) : class_ids,
                          })
                        }
                      />
                    )}
                  </li>
                );
              })}
            </ul>
            <button
              type="button"
              onClick={() =>
                setRequirements([
                  ...requirements,
                  {
                    kind: "class_level",
                    level: 1,
                    class_ids: links[0] ? [links[0].class_id] : [],
                    required_perk_id: null,
                  },
                ])
              }
              className="button-secondary text-sm py-1"
            >
              Add a requirement
            </button>
          </section>
        </div>

        <aside className="lg:sticky lg:top-8 flex flex-col gap-3">
          <p className="text-xs font-bold uppercase tracking-wider text-dnd-ink/60">Preview</p>
          <PerkCard
            perk={{ ...row, id, name: row.name || "Unnamed" }}
            core={links.some((l) => l.is_core)}
            requires={requirements.map(describe).join(", ")}
          />
          {problems.length > 0 && (
            <ul className="text-sm text-dnd-red list-disc pl-5">
              {problems.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
        </aside>
      </div>

      <SaveBar
        onSave={save}
        pending={pending || deleting}
        disabled={problems.length > 0 || !id}
        onDelete={isNew ? undefined : remove}
      />
    </>
  );
};

export default PerkEditor;
