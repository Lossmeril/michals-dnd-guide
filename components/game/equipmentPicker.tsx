"use client";

import ItemIcon from "@/components/game/itemIcon";
import { Select } from "@/components/ui/formControls";
import Panel from "@/components/ui/panel";
import {
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

/** "Longsword (1d8 slashing)", "Chain shirt (armour 2)" */
export const itemLabel = (item: Item) => {
  const detail = item.damage
    ? [item.damage, item.damage_type].filter(Boolean).join(" ")
    : item.armour_rating !== null
      ? `armour ${item.armour_rating}`
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
  const quantity = entry.quantity > 1 ? `${entry.quantity}× ` : "";
  const icon = (id: string | null) => (
    <ItemIcon item={items.find((i) => i.id === id)} className="w-7 h-7" />
  );
  if (entry.items.length === 1) {
    return (
      <li className="flex items-center gap-2">
        {icon(entry.items[0])}
        {quantity}
        {itemName(items, entry.items[0])}
      </li>
    );
  }
  return (
    <li className="flex items-center gap-2">
      {icon(value)}
      {quantity}
      <Select
        aria-label={describeEntry(items, entry)}
        value={value}
        onChange={onChange}
        none={`${describeEntry(items, { ...entry, quantity: 1 })}…`}
        options={entry.items.map((id) => {
          const item = items.find((i) => i.id === id)!;
          return { value: id, label: itemLabel(item) };
        })}
        className="w-full max-w-sm"
      />
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
  if (groups.length === 0) return <p className="text-sm">No starting gear.</p>;

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
                        onChange={() => onChange(withOption(groups, picks, g, o))}
                      />
                      <span className={pick.option === o ? "font-bold" : ""}>
                        {describeOption(items, option)}
                      </span>
                    </label>
                    {pick.option === o && <div className="mt-2 ml-6">{entries(o)}</div>}
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
