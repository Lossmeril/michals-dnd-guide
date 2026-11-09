"use client";

import RuleMarkdown from "@/components/rulebook/ruleMarkdown";
import Field from "@/components/ui/field";
import {
  NumberField,
  SelectField,
  TextField,
} from "@/components/ui/formControls";
import Panel from "@/components/ui/panel";
import { useL, useLang } from "@/lib/i18n/client";
import {
  type Bestiary,
  type Creature,
  categoriesInOrder,
  categoryPath,
  creatureStatBlock,
} from "@/lib/rules/bestiary";
import { saveCreature } from "../../../actions";
import {
  AdminHeader,
  formGrid,
  IdField,
  ImageField,
  SaveBar,
  useRowEditor,
} from "../../../_components";

const STAT_BLOCK_HINT = `subtitle: Large monster, important
armour: Medium (2)
speed: 8 m
threat: d8
fate: 1
body: 59
soul: 6
charisma: 4
skills: Ranger skills +4
manoeuvres: Mighty (claws)

## Actions
***Claws.*** Close combat, reach 2 m. Hit: 2d6 + 4 slashing. Free **Mighty**.`;

const CreatureEditor: React.FC<{
  bestiary: Bestiary;
  creature: Creature | null;
  /** A new creature's category, from ?category= */
  categoryId: string | null;
}> = ({ bestiary: b, creature, categoryId }) => {
  const isNew = !creature;
  const l = useL();
  const lang = useLang();
  const { row, id, set, save, remove, pending } = useRowEditor<Creature>({
    initial: creature ?? {
      id: "",
      category_id: categoryId ?? "",
      name: "",
      description: null,
      stat_block: null,
      image_url: null,
      sort: b.creatures.length,
    },
    isNew,
    table: "creatures",
    listHref: "/admin/bestiary/creatures",
    save: (r) => saveCreature(isNew, r),
  });
  const shown = l(b);

  return (
    <>
      <AdminHeader
        title={isNew ? "New creature" : l(row.name)}
        crumbs={[{ href: "/admin/bestiary", label: "Bestiary" }]}
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
        <Panel as="section" className={formGrid}>
          <TextField label="Name" localized id="name" value={row.name} onChange={(name) => set({ name })} className="md:col-span-2" />
          <IdField id={id} isNew={isNew} />
          <SelectField
            label="Category"
            id="category"
            value={row.category_id || null}
            onChange={(category_id) => set({ category_id: category_id ?? "" })}
            none="Pick one"
            options={categoriesInOrder(shown).map((c) => ({
              value: c.id,
              label: categoryPath(shown, c.id),
            }))}
          />
          <TextField
            label="Description" localized
            id="description"
            value={row.description}
            onChange={(description) => set({ description: description || null })}
            multiline
            hint="What it is, where it lives, what the folk tales say. Markdown."
            className="md:col-span-2"
          />
          <Field
            label="Stat block"
            htmlFor="stat-block"
            hint={
              <>
                The same lines as a rulebook stat block (see the page editor&apos;s
                cheat sheet). The name and picture come from this form; the
                category stands in for a missing subtitle. Translate a line
                with <code>English |cs| Czech</code>.
              </>
            }
            className="md:col-span-2"
          >
            <textarea
              id="stat-block"
              rows={18}
              value={row.stat_block ?? ""}
              placeholder={STAT_BLOCK_HINT}
              onChange={(e) => set({ stat_block: e.target.value || null })}
              className="w-full font-mono text-xs"
            />
          </Field>
          <div className="md:col-span-2">
            <ImageField target="bestiary" value={row.image_url} onChange={(image_url) => set({ image_url })} />
          </div>
          <NumberField label="Sort order" id="sort" value={row.sort} onChange={(sort) => set({ sort: sort ?? 0 })} />
        </Panel>

        <aside className="xl:sticky xl:top-8">
          <RuleMarkdown
            content={creatureStatBlock(b, { ...row, name: row.name || "Unnamed" })}
            lang={lang}
          />
          {row.description && (
            <RuleMarkdown content={l(row.description)} lang={lang} />
          )}
        </aside>
      </div>

      <SaveBar
        onSave={save}
        pending={pending}
        disabled={!row.name.trim() || !id || !row.category_id}
        onDelete={remove}
      />
    </>
  );
};

export default CreatureEditor;
