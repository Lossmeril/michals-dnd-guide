"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePerk, usePerks } from "@/lib/hooks/usePerks";
import { useClasses } from "@/lib/hooks/useClasses";
import { useRaces } from "@/lib/hooks/useRaces";
import { useRouter } from "next/navigation";

import {
  Container,
  Grid,
  GridContent,
} from "@/components/layout/layoutPrimitives";
import { toast } from "@/components/ui/toast";
import { TbConfetti } from "react-icons/tb";
import { BsTrash } from "react-icons/bs";

import { EditorShell } from "@/components/editors/editorShell";
import EditorStack from "@/components/layout/editors/editorStack";
import EditorSection from "@/components/layout/editors/editorSections";
import Field from "@/components/layout/editors/editorField";
import Button from "@/components/ui/button";
import {
  TextInput,
  TextArea,
  NumberInput,
  SelectInput,
} from "@/components/ui/inputs";

import type { Perk, PerkWithDetails, SpellDetailsInsert } from "@/types/perks";
import { perkClassesRepo } from "@/lib/repos/perkClasses";
import { spellDetailsRepo } from "@/lib/repos/spellDetails";
import { racialPerkDetailsRepo } from "@/lib/repos/racialPerkDetails";
import { perkPrerequisitesRepo } from "@/lib/repos/perkPrerequisites";
import { IMAGE_PLACEHOLDER } from "@/lib/webGlobals";
import { UploadImageButton } from "@/components/uploadImageButton";

// -------------------------------------
// Constants
// -------------------------------------

const PERK_TYPE_OPTIONS: { value: Perk["perk_type"]; label: string }[] = [
  { value: "class_perk", label: "Class Perk" },
  { value: "racial_perk", label: "Racial Perk" },
  { value: "spell", label: "Spell" },
  { value: "aspect", label: "Aspect" },
];

const RESOURCE_OPTIONS: { value: string; label: string }[] = [
  { value: "", label: "None" },
  { value: "body", label: "Body" },
  { value: "soul", label: "Soul" },
  { value: "charisma", label: "Charisma" },
  { value: "material", label: "Material" },
];

// -------------------------------------
// Page
// -------------------------------------

interface PerkPageProps {
  params: Promise<{ id: string }>;
}

const PerkPage = ({ params }: PerkPageProps) => {
  const router = useRouter();
  const { id } = React.use(params);

  // The edited perk, fetched by id with its joined detail rows (cached).
  // `perks` (whole list) is still read below to resolve prerequisite perk
  // names; `update` comes from the collection hook so a save refreshes it.
  const { perk: fetchedPerk, loading: perkLoading } = usePerk(id);
  const { perks, update } = usePerks();
  const { classes } = useClasses();
  const { races } = useRaces();

  // Local, editable copy of the perk; edits live here until "Save changes".
  const [perkData, setPerkData] = useState<PerkWithDetails | undefined>(
    undefined,
  );
  const [selectedClassIds, setSelectedClassIds] = useState<string[]>([]);
  const [spellData, setSpellData] = useState<Partial<SpellDetailsInsert>>({});
  const [racialRaceId, setRacialRaceId] = useState("");
  const [deletedPrereqIds, setDeletedPrereqIds] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);

  const [hasImageError, setImageError] = useState<boolean>(false);

  // Track the fetched row into the editable copy; seed the related sub-state
  // (class picker, spell fields, racial race) exactly once.
  const didInit = useRef(false);
  useEffect(() => {
    if (!fetchedPerk) return;
    setPerkData(fetchedPerk);

    if (!didInit.current) {
      setSelectedClassIds(fetchedPerk.perk_classes.map((pc) => pc.class_id));
      if (fetchedPerk.spell_details) setSpellData(fetchedPerk.spell_details);
      if (fetchedPerk.racial_perk_details)
        setRacialRaceId(fetchedPerk.racial_perk_details.race_id);
      didInit.current = true;
    }
  }, [fetchedPerk]);

  // -------------------------------------
  // Loading / not found guards
  // -------------------------------------

  if (perkLoading) {
    return (
      <Container>
        <Grid className="pt-10">
          <GridContent>Loading...</GridContent>
        </Grid>
      </Container>
    );
  }

  if (!fetchedPerk) {
    return (
      <Container>
        <Grid className="pt-10">
          <GridContent>
            <p>Perk not found.</p>
          </GridContent>
        </Grid>
      </Container>
    );
  }

  // Fetched row is here but the hydrate effect hasn't run yet (one frame).
  if (!perkData) {
    return (
      <Container>
        <Grid className="pt-10">
          <GridContent>Loading...</GridContent>
        </Grid>
      </Container>
    );
  }

  // -------------------------------------
  // Derived
  // -------------------------------------

  const visiblePrerequisites = perkData.perk_prerequisites.filter(
    (pp) => !deletedPrereqIds.includes(pp.id),
  );

  // -------------------------------------
  // Handlers
  // -------------------------------------

  const toggleClass = (classId: string) => {
    setSelectedClassIds((prev) =>
      prev.includes(classId)
        ? prev.filter((c) => c !== classId)
        : [...prev, classId],
    );
  };

  const onSaveChanges = async () => {
    setSaving(true);
    try {
      // 1) Perk basics
      await update(id, {
        name: perkData.name,
        perk_type: perkData.perk_type,
        blurb: perkData.blurb,
        description: perkData.description,
        cost_resource: perkData.cost_resource,
        cost_amount: perkData.cost_amount,
        cost_unit: perkData.cost_unit,
        icon: perkData.icon,
      });

      // 2) Sync perk_classes
      const currentClassIds = perkData.perk_classes.map((pc) => pc.class_id);
      await Promise.all([
        ...currentClassIds
          .filter((cid) => !selectedClassIds.includes(cid))
          .map((cid) => perkClassesRepo.delete(id, cid)),
        ...selectedClassIds
          .filter((cid) => !currentClassIds.includes(cid))
          .map((cid) => perkClassesRepo.insert({ perk_id: id, class_id: cid })),
      ]);

      // 3) Spell details — upsert when spell, delete if type changed away from spell
      if (perkData.perk_type === "spell") {
        await spellDetailsRepo.upsert({
          ...spellData,
          perk_id: id,
          school: spellData.school ?? "",
        });
      } else if (perkData.spell_details) {
        await spellDetailsRepo.delete(id);
      }

      // 4) Racial details — perk_id is PK so change = delete + insert
      if (perkData.perk_type === "racial_perk" && racialRaceId) {
        if (perkData.racial_perk_details)
          await racialPerkDetailsRepo.delete(id);
        await racialPerkDetailsRepo.insert({
          perk_id: id,
          race_id: racialRaceId,
        });
      } else if (
        perkData.racial_perk_details &&
        perkData.perk_type !== "racial_perk"
      ) {
        await racialPerkDetailsRepo.delete(id);
      }

      // 5) Delete removed prerequisites
      if (deletedPrereqIds.length > 0) {
        await Promise.all(
          deletedPrereqIds.map((pid) => perkPrerequisitesRepo.delete(pid)),
        );
      }

      toast({
        title: "ADMIN: Saved!",
        description: "Perk saved successfully!",
        mode: "success",
        icon: <TbConfetti />,
      });
      router.push("/admin/perks");
    } catch (e) {
      toast({
        title: "Save failed",
        description: e instanceof Error ? e.message : "An error occurred.",
        mode: "error",
      });
    } finally {
      setSaving(false);
    }
  };

  // -------------------------------------
  // Render
  // -------------------------------------

  return (
    <EditorShell>
      <EditorShell.Grid>
        <EditorShell.Sidebar>
          <p className="text-xs font-medium uppercase tracking-wide opacity-50">
            Editing Perk
          </p>
          <h1 className="mt-1 text-lg font-semibold">{perkData.name}</h1>
          <p className="text-sm opacity-60 capitalize mt-0.5">
            {perkData.perk_type.replace("_", " ")}
          </p>

          <div
            className={`border-1 border-dnd-ink/20 rounded-lg aspect-square overflow-hidden mb-2 ${hasImageError ? "border-dnd-red border-2" : ""}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}{" "}
            <img
              src={perkData.icon || IMAGE_PLACEHOLDER}
              alt={`${perkData.name} icon`}
              className="w-full h-full object-cover"
            />
          </div>

          <UploadImageButton
            id={perkData.id.toString()}
            image={perkData.icon}
            mode="vertical"
            bucket="rulebook/perks"
            setIsError={setImageError}
            onChange={(patch) =>
              setPerkData((prev) => ({ ...prev!, icon: patch.image }))
            }
          />

          <div className="mt-6 flex flex-col gap-2">
            <Button
              label={saving ? "Saving…" : "Save changes"}
              onClick={onSaveChanges}
              mode="default"
              disabled={saving}
              className="w-full"
            />
            <Button
              label="Go back"
              onClick={() => router.push("/admin/perks")}
              mode="inverted"
              className="w-full"
            />
          </div>
        </EditorShell.Sidebar>

        <EditorShell.Main>
          <EditorStack>
            {/* ---- BASICS ---- */}
            <EditorSection title="Basics">
              <Field label="Name" htmlFor="perk-name" span="half">
                <TextInput
                  id="perk-name"
                  value={perkData.name}
                  onChange={(v) => setPerkData({ ...perkData, name: v })}
                />
              </Field>

              <Field label="Type" htmlFor="perk-type" span="half">
                <SelectInput
                  id="perk-type"
                  value={perkData.perk_type}
                  options={PERK_TYPE_OPTIONS}
                  onChange={(v) =>
                    setPerkData({
                      ...perkData,
                      perk_type: v as Perk["perk_type"],
                    })
                  }
                />
              </Field>

              <Field label="Short description" htmlFor="perk-blurb" span="full">
                <TextArea
                  id="perk-blurb"
                  value={perkData.blurb ?? ""}
                  rows={3}
                  onChange={(v) =>
                    setPerkData({ ...perkData, blurb: v || null })
                  }
                />
              </Field>

              <Field
                label="Full description"
                htmlFor="perk-description"
                span="full"
              >
                <TextArea
                  id="perk-description"
                  value={perkData.description ?? ""}
                  rows={6}
                  onChange={(v) =>
                    setPerkData({ ...perkData, description: v || null })
                  }
                />
              </Field>
            </EditorSection>

            {/* ---- COST ---- */}
            <EditorSection title="Cost">
              <Field label="Resource" htmlFor="perk-cost-resource" span="third">
                <SelectInput
                  id="perk-cost-resource"
                  value={perkData.cost_resource ?? ""}
                  options={RESOURCE_OPTIONS}
                  onChange={(v) =>
                    setPerkData({
                      ...perkData,
                      cost_resource: v ? (v as Perk["cost_resource"]) : null,
                    })
                  }
                />
              </Field>

              <Field label="Amount" htmlFor="perk-cost-amount" span="third">
                <NumberInput
                  id="perk-cost-amount"
                  value={perkData.cost_amount ?? 0}
                  min={0}
                  onChange={(v) =>
                    setPerkData({ ...perkData, cost_amount: v || null })
                  }
                />
              </Field>

              <Field label="Unit" htmlFor="perk-cost-unit" span="third">
                <TextInput
                  id="perk-cost-unit"
                  value={perkData.cost_unit ?? ""}
                  placeholder="e.g. per turn"
                  onChange={(v) =>
                    setPerkData({ ...perkData, cost_unit: v || null })
                  }
                />
              </Field>
            </EditorSection>

            {/* ---- CLASSES ---- */}
            {perkData.perk_type !== "racial_perk" && (
              <EditorSection
                title="Classes"
                description="Which classes can learn this perk."
              >
                <Field span="full">
                  {classes.length === 0 ? (
                    <p className="text-sm opacity-60">No classes available.</p>
                  ) : (
                    <div className="grid grid-cols-3 gap-2 w-full">
                      {classes.map((c) => {
                        const selected = selectedClassIds.includes(c.id);
                        return (
                          <button
                            key={c.id}
                            type="button"
                            onClick={() => toggleClass(c.id)}
                            className={`rounded border px-3 py-2 text-sm text-left transition-colors ${
                              selected
                                ? "border-dnd-ink bg-dnd-ink text-white"
                                : "border-dnd-ink/20 hover:border-dnd-ink/50"
                            }`}
                          >
                            <span className="font-medium">{c.name}</span>
                            <span className="block text-xs opacity-60 capitalize">
                              {c.class_rank}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </Field>
              </EditorSection>
            )}

            {/* ---- SPELL DETAILS ---- */}
            {perkData.perk_type === "spell" && (
              <EditorSection title="Spell Details">
                <Field label="School" htmlFor="spell-school" span="half">
                  <TextInput
                    id="spell-school"
                    value={spellData.school ?? ""}
                    onChange={(v) => setSpellData({ ...spellData, school: v })}
                  />
                </Field>

                <Field label="Range" htmlFor="spell-range" span="half">
                  <TextInput
                    id="spell-range"
                    value={spellData.range ?? ""}
                    onChange={(v) =>
                      setSpellData({ ...spellData, range: v || null })
                    }
                  />
                </Field>

                <Field label="Duration" htmlFor="spell-duration" span="half">
                  <TextInput
                    id="spell-duration"
                    value={spellData.duration ?? ""}
                    onChange={(v) =>
                      setSpellData({ ...spellData, duration: v || null })
                    }
                  />
                </Field>

                <Field
                  label="Components"
                  htmlFor="spell-components"
                  span="half"
                >
                  <TextInput
                    id="spell-components"
                    value={spellData.components ?? ""}
                    placeholder="e.g. V, S, M"
                    onChange={(v) =>
                      setSpellData({ ...spellData, components: v || null })
                    }
                  />
                </Field>

                <Field label="Damage" htmlFor="spell-damage" span="half">
                  <TextInput
                    id="spell-damage"
                    value={spellData.damage ?? ""}
                    placeholder="e.g. 2d6"
                    onChange={(v) =>
                      setSpellData({ ...spellData, damage: v || null })
                    }
                  />
                </Field>

                <Field
                  label="Damage type"
                  htmlFor="spell-damage-type"
                  span="half"
                >
                  <TextInput
                    id="spell-damage-type"
                    value={spellData.damage_type ?? ""}
                    placeholder="e.g. fire"
                    onChange={(v) =>
                      setSpellData({ ...spellData, damage_type: v || null })
                    }
                  />
                </Field>
              </EditorSection>
            )}

            {/* ---- RACIAL DETAILS ---- */}
            {perkData.perk_type === "racial_perk" && (
              <EditorSection
                title="Racial Details"
                description="The race this perk belongs to."
              >
                <Field label="Race" htmlFor="racial-race" span="half">
                  <SelectInput
                    id="racial-race"
                    value={racialRaceId}
                    options={[
                      { value: "", label: "Select a race…" },
                      ...races.map((r) => ({
                        value: r.id,
                        label: r.name ?? r.id,
                      })),
                    ]}
                    onChange={(v) => setRacialRaceId(v)}
                  />
                </Field>
              </EditorSection>
            )}

            {/* ---- PREREQUISITES ---- */}
            {perkData.perk_prerequisites.length > 0 && (
              <EditorSection
                title="Prerequisites"
                description="Requirements a character must meet to use this perk."
              >
                <Field span="full">
                  <div className="flex flex-col gap-2">
                    {visiblePrerequisites.length === 0 ? (
                      <p className="text-sm opacity-60">
                        All prerequisites removed. Save to apply.
                      </p>
                    ) : (
                      visiblePrerequisites.map((pp) => {
                        const reqPerk = pp.req_perk_id
                          ? perks.find((p) => p.id === pp.req_perk_id)
                          : null;
                        const reqClass = pp.req_class_id
                          ? classes.find((c) => c.id === pp.req_class_id)
                          : null;

                        return (
                          <div
                            key={pp.id}
                            className="flex items-center justify-between rounded border border-dnd-ink/20 px-3 py-2 text-sm"
                          >
                            <span>
                              {reqPerk && (
                                <span>
                                  Requires perk: <strong>{reqPerk.name}</strong>
                                </span>
                              )}
                              {reqClass && (
                                <span>
                                  Requires class:{" "}
                                  <strong>{reqClass.name}</strong>
                                  {pp.req_class_level
                                    ? ` at level ${pp.req_class_level}`
                                    : ""}
                                </span>
                              )}
                              {!reqPerk && !reqClass && (
                                <span className="opacity-50">
                                  Unknown prerequisite
                                </span>
                              )}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                setDeletedPrereqIds((prev) => [...prev, pp.id])
                              }
                              className="ml-3 opacity-50 hover:opacity-100 hover:text-red-700 transition-opacity"
                            >
                              <BsTrash />
                            </button>
                          </div>
                        );
                      })
                    )}
                  </div>
                </Field>
              </EditorSection>
            )}
          </EditorStack>
        </EditorShell.Main>
      </EditorShell.Grid>
    </EditorShell>
  );
};

export default PerkPage;
