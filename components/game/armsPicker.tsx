"use client";

// Picking arms and armour within the character's arms fortune: weapons and a
// shield in hand, and armour pieces, one per slot.

import { FaXmark } from "react-icons/fa6";
import ItemIcon from "@/components/game/itemIcon";
import { itemLabel } from "@/components/game/equipmentPicker";
import { Select } from "@/components/ui/formControls";
import IconButton from "@/components/ui/iconButton";
import Panel from "@/components/ui/panel";
import IssueList from "@/components/ui/issueList";
import { useDict } from "@/lib/i18n/client";
import { armourTotals } from "@/lib/rules/armour";
import type { Item } from "@/lib/rules/equipment";
import { affordable, armsErrors, type Fortune } from "@/lib/rules/fortune";

const ArmsPicker: React.FC<{
  items: Item[];
  fortune: Fortune | undefined;
  picks: string[];
  onChange: (picks: string[]) => void;
}> = ({ items, fortune, picks, onChange }) => {
  const t = useDict();
  const a = t.fortune.arms;
  if (!fortune) return <p className="text-sm">{a.pickFortune}</p>;

  const byId = (id: string) => items.find((i) => i.id === id);
  const taken = picks.map(byId).filter((i): i is Item => !!i);
  const tiers = t.sheet.armour.tiers as Record<string, string>;
  const totals = armourTotals(taken);
  const errors = armsErrors(items, picks, fortune, t.lang);

  const list = (kinds: Item["kind"][]) => {
    const rows = picks
      .map((id, index) => ({ item: byId(id), index }))
      .filter((r): r is { item: Item; index: number } => !!r.item && kinds.includes(r.item.kind));
    const options = items
      .filter((i) => kinds.includes(i.kind) && affordable(i, fortune))
      .map((i) => ({ value: i.id, label: itemLabel(i, t.lang) }));
    return (
      <div className="flex flex-col gap-2 text-sm">
        {rows.length === 0 && <p className="text-dnd-ink/60">{a.none}</p>}
        {rows.map(({ item, index }) => (
          <div key={index} className="flex items-center gap-2">
            <ItemIcon item={item} className="w-7 h-7" />
            <span className="flex-1">{itemLabel(item, t.lang)}</span>
            <IconButton
              label={t.ui.remove}
              onClick={() => onChange(picks.filter((_, j) => j !== index))}
            >
              <FaXmark />
            </IconButton>
          </div>
        ))}
        <Select
          aria-label={a.add}
          value={null}
          none={a.add}
          onChange={(id) => id && onChange([...picks, id])}
          options={options}
          className="w-full max-w-sm"
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        <strong>{t.fortune.names[fortune]}:</strong> {a.rules[fortune]} {a.ammo}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Panel tight>
          <p className="text-xs font-bold uppercase tracking-wider text-dnd-ink/60 mb-2">{a.inHand}</p>
          {list(["weapon", "shield"])}
        </Panel>
        <Panel tight>
          <p className="text-xs font-bold uppercase tracking-wider text-dnd-ink/60 mb-2">{a.armour}</p>
          {list(["armour"])}
          {totals.protection > 0 && (
            <p className="text-xs mt-3">
              {t.sheet.armour.label}{" "}
              {t.sheet.armour.line({
                ...totals,
                protectionTier: tiers[totals.protectionTier],
                burdenTier: tiers[totals.burdenTier],
                harness: totals.fullHarness,
              })}
            </p>
          )}
        </Panel>
      </div>
      <IssueList errors={errors} warnings={[]} />
    </div>
  );
};

export default ArmsPicker;
