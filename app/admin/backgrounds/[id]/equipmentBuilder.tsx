"use client";

import { FaTrash, FaXmark } from "react-icons/fa6";
import { itemLabel } from "@/components/game/equipmentPicker";
import { Select } from "@/components/ui/formControls";
import IconButton from "@/components/ui/iconButton";
import Panel from "@/components/ui/panel";
import { Overline } from "@/components/ui/typography";
import {
  describeEquipment,
  equipmentOf,
  type EquipmentEntry,
  type EquipmentGroup,
  type EquipmentOption,
  ITEM_SETS,
  type Item,
  itemsInSet,
} from "@/lib/rules/equipment";
import type { Json } from "@/lib/types/database.types";

const newEntry = (): EquipmentEntry => ({ items: [], quantity: 1 });
const newOption = (): EquipmentOption => ({ entries: [newEntry()] });

/** Copy of `list` with item `i` replaced, or removed when `value` is null */
const replaced = <T,>(list: T[], i: number, value: T | null) =>
  value === null ? list.filter((_, j) => j !== i) : list.map((v, j) => (j === i ? value : v));

/** One line of an option: a quantity and the item, or the items to pick from */
const EntryRow: React.FC<{
  items: Item[];
  entry: EquipmentEntry;
  onChange: (entry: EquipmentEntry | null) => void;
}> = ({ items, entry, onChange }) => {
  const add = (ids: string[]) =>
    onChange({ ...entry, items: [...new Set([...entry.items, ...ids])] });

  return (
    <li className="flex flex-col gap-2 border-l-2 border-dnd-gold pl-3">
      <div className="flex flex-wrap items-center gap-2">
        <input
          type="number"
          min={1}
          aria-label="Quantity"
          value={entry.quantity}
          onChange={(e) =>
            onChange({ ...entry, quantity: Math.max(1, Number(e.target.value) || 1) })
          }
          className="w-16"
        />
        <span className="text-xs">×</span>
        <Select
          aria-label="Add an item"
          value={null}
          none={entry.items.length ? "Add another to pick from…" : "Item…"}
          onChange={(id) => id && add([id])}
          options={items
            .filter((i) => !entry.items.includes(i.id))
            .map((i) => ({ value: i.id, label: itemLabel(i) }))}
          className="flex-1 min-w-40"
        />
        <Select
          aria-label="Add a set of items"
          value={null}
          none="Add a set…"
          onChange={(label) => {
            const set = ITEM_SETS.find((s) => s.label === label);
            if (set) add(itemsInSet(items, set));
          }}
          options={ITEM_SETS.map((s) => ({ value: s.label, label: s.label }))}
          className="w-auto"
        />
        <IconButton label="Remove line" onClick={() => onChange(null)}>
          <FaTrash />
        </IconButton>
      </div>
      {entry.items.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {entry.items.length > 1 && (
            <span className="text-xs text-dnd-ink/60 mr-1 self-center">Player picks one:</span>
          )}
          {entry.items.map((id) => (
            <span
              key={id}
              className="inline-flex items-center gap-1 rounded-full border border-dnd-gold bg-white/50 px-2 py-0.5 text-xs"
            >
              {items.find((i) => i.id === id)?.name ?? id}
              <button
                type="button"
                aria-label="Remove"
                onClick={() => onChange({ ...entry, items: entry.items.filter((x) => x !== id) })}
                className="p-0 bg-transparent text-dnd-red"
              >
                <FaXmark />
              </button>
            </span>
          ))}
        </div>
      )}
    </li>
  );
};

/**
 * Editing a background's starting gear. Each group is given as is, or, with
 * alternatives, the player takes one of them. A line with several items is a
 * choice list.
 */
const EquipmentBuilder: React.FC<{
  items: Item[];
  groups: EquipmentGroup[];
  onChange: (groups: EquipmentGroup[]) => void;
}> = ({ items, groups, onChange }) => {
  const setGroup = (g: number, group: EquipmentGroup | null) =>
    onChange(replaced(groups, g, group));
  // Lines without items yet are left out, as they are when saved
  const preview = describeEquipment(items, equipmentOf(items, groups as unknown as Json));

  return (
    <div className="flex flex-col gap-4">
      {groups.map((group, g) => {
        const setOption = (o: number, option: EquipmentOption | null) =>
          setGroup(g, { options: replaced(group.options, o, option) });
        const choice = group.options.length > 1;
        return (
          <Panel key={g} tight className="flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <Overline className="mb-0">
                {choice ? `The player takes one of ${group.options.length}` : "Given"}
              </Overline>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="button-secondary text-xs"
                  onClick={() => setGroup(g, { options: [...group.options, newOption()] })}
                >
                  Add alternative
                </button>
                <IconButton label="Remove group" onClick={() => setGroup(g, null)}>
                  <FaTrash />
                </IconButton>
              </div>
            </div>
            {group.options.map((option, o) => (
              <div key={o} className={choice ? "rounded border border-dnd-gold/60 p-3" : ""}>
                {choice && (
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-bold">Option {String.fromCharCode(65 + o)}</p>
                    <IconButton label="Remove option" onClick={() => setOption(o, null)}>
                      <FaXmark />
                    </IconButton>
                  </div>
                )}
                <ul className="flex flex-col gap-3">
                  {option.entries.map((entry, e) => (
                    <EntryRow
                      key={e}
                      items={items}
                      entry={entry}
                      onChange={(next) =>
                        setOption(o, { entries: replaced(option.entries, e, next) })
                      }
                    />
                  ))}
                </ul>
                <button
                  type="button"
                  className="button-link text-xs mt-2"
                  onClick={() => setOption(o, { entries: [...option.entries, newEntry()] })}
                >
                  + Line
                </button>
              </div>
            ))}
          </Panel>
        );
      })}

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="button-secondary"
          onClick={() => onChange([...groups, { options: [newOption()] }])}
        >
          Add items
        </button>
        <button
          type="button"
          className="button-secondary"
          onClick={() => onChange([...groups, { options: [newOption(), newOption()] }])}
        >
          Add a choice
        </button>
      </div>

      {preview.length > 0 && (
        <div className="text-sm">
          <Overline>As players see it</Overline>
          <ul className="list-disc pl-4">
            {preview.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EquipmentBuilder;
