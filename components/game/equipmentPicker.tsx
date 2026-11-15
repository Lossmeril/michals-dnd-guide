"use client";

import ItemIcon from "@/components/game/itemIcon";
import { useDict } from "@/lib/i18n/client";
import { DICTS } from "@/lib/i18n/dictionaries";
import type { Lang } from "@/lib/i18n/localize";
import { damageTypeName, propertiesText } from "@/lib/rules/format";
import { Select } from "@/components/ui/formControls";
import Panel from "@/components/ui/panel";
import {
  bundleContents,
  describeContents,
  describeEntry,
  describeOption,
  type EquipmentEntry,
  type EquipmentGroup,
  type EquipmentPick,
  type Item,
  itemName,
  pickFor,
  withItem,
  withOption,
} from "@/lib/rules/equipment";

/** "Longsword (1d8 slashing)", "Mail shirt (body, protection 2, burden 2)" */
export const itemLabel = (item: Item, lang: Lang = "en") => {
  const dict = DICTS[lang];
  const slots = dict.blocks.armourSlots as Record<string, string>;
  const detail = item.damage
    ? [propertiesText(item.damage, lang), item.damage_type && damageTypeName(item.damage_type, lang)]
        .filter(Boolean)
        .join(" ")
    : item.slots
      ? lang === "cs"
        ? `${item.slots.map((s) => slots[s] ?? s).join(" + ")}, ochrana ${item.protection ?? 0}, zátěž ${item.burden ?? 0}`
        : `${item.slots.join(" + ")}, protection ${item.protection ?? 0}, burden ${item.burden ?? 0}`
      : null;
  return detail ? `${item.name} (${detail})` : item.name;
};

/** One entry of the taken option: a fixed item, or a choice list */
const EntryPick: React.FC<{
  items: Item[];
  entry: EquipmentEntry;
  value: string | null;
  onChange: (id: string | null) => void;
}> = ({ items, entry, value, onChange }) => {
  const { lang } = useDict();
  const quantity = entry.quantity > 1 ? `${entry.quantity}× ` : "";
  const icon = (id: string | null) => (
    <ItemIcon item={items.find((i) => i.id === id)} className="w-7 h-7" />
  );
  // What's inside the bundle shown (or picked), e.g. thieves' tools
  const contentsOf = (id: string | null) => {
    const pieces = bundleContents(items.find((i) => i.id === id));
    return pieces.length > 0 ? (
      <p className="ml-9 text-xs text-dnd-ink/70">
        {describeContents(items, pieces)}
      </p>
    ) : null;
  };
  if (entry.items.length === 1) {
    return (
      <li>
        <div className="flex items-center gap-2">
          {icon(entry.items[0])}
          {quantity}
          {itemName(items, entry.items[0])}
          {entry.note && (
            <span className="text-dnd-ink/60">
              ({entry.note.toLowerCase()})
            </span>
          )}
        </div>
        {contentsOf(entry.items[0])}
      </li>
    );
  }
  return (
    <li>
      <div className="flex items-center gap-2">
        {icon(value)}
        {quantity}
        <Select
          aria-label={describeEntry(items, entry, lang)}
          value={value}
          onChange={onChange}
          none={`${describeEntry(items, { ...entry, quantity: 1 }, lang)}…`}
          options={entry.items.map((id) => {
            const item = items.find((i) => i.id === id)!;
            return { value: id, label: itemLabel(item, lang) };
          })}
          className="w-full max-w-sm"
        />
        {entry.note && (
          <span className="text-dnd-ink/60">({entry.note.toLowerCase()})</span>
        )}
      </div>
      {contentsOf(value)}
    </li>
  );
};

/**
 * Picking a background's starting gear: one option per group, then an item
 * from each choice list
 */
const EquipmentPicker: React.FC<{
  items: Item[];
  groups: EquipmentGroup[];
  picks: EquipmentPick[];
  onChange: (picks: EquipmentPick[]) => void;
}> = ({ items, groups, picks, onChange }) => {
  const dict = useDict();
  if (groups.length === 0) return <p className="text-sm">{dict.ui.noStartingGear}</p>;

  return (
    <div className="flex flex-col gap-4">
      {groups.map((group, g) => {
        const pick = pickFor(groups, picks, g);
        const entries = (o: number) => (
          <ul className="flex flex-col gap-2 text-sm">
            {group.options[o].entries.map((entry, e) => (
              <EntryPick
                key={e}
                items={items}
                entry={entry}
                value={pick.items[e] ?? null}
                onChange={(id) => onChange(withItem(groups, picks, g, e, id))}
              />
            ))}
          </ul>
        );

        return (
          <Panel key={g} tight>
            {group.options.length === 1 ? (
              entries(0)
            ) : (
              <fieldset className="flex flex-col gap-3">
                <legend className="text-xs font-bold uppercase tracking-wider text-dnd-ink/60 mb-2">
                  Pick one
                </legend>
                {group.options.map((option, o) => (
                  <div key={o}>
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="radio"
                        name={`equipment-${g}`}
                        checked={pick.option === o}
                        onChange={() =>
                          onChange(withOption(groups, picks, g, o))
                        }
                      />
                      <span className={pick.option === o ? "font-bold" : ""}>
                        {describeOption(items, option, dict.lang)}
                      </span>
                    </label>
                    {pick.option === o && (
                      <div className="mt-2 ml-6">{entries(o)}</div>
                    )}
                  </div>
                ))}
              </fieldset>
            )}
          </Panel>
        );
      })}
    </div>
  );
};

export default EquipmentPicker;
