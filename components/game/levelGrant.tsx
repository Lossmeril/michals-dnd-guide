"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "sonner";
import Modal from "@/components/ui/modal";
import Field from "@/components/ui/field";
import {
  grantLevel,
  revokeLevel,
  type LevelGrant,
  type LevelInfo,
} from "@/lib/endpoints/level_grants";
import { useDict, useLang } from "@/lib/i18n/client";

interface GrantLevelButtonProps {
  characterId: number;
  characterName: string;
  level: number;
  info: LevelInfo;
  /** Only offer this campaign (the campaign page) */
  campaignId?: number;
  onChange: () => void;
  className?: string;
}

/**
 * A DM grants a level from one of their campaigns, or undoes one they gave.
 * Works inside a card link: the button and the modal don't follow the link.
 */
export const GrantLevelButton: React.FC<GrantLevelButtonProps> = ({
  characterId,
  characterName,
  level,
  info,
  campaignId,
  onChange,
  className,
}) => {
  const t = useDict().levels;
  const campaigns = info.grantableIn.filter(
    (c) => campaignId === undefined || c.id === campaignId,
  );
  const undoable = info.grants.filter(
    (g) => g.canUndo && (campaignId === undefined || g.campaignId === campaignId),
  );
  const [open, setOpen] = useState(false);
  const [chosen, setChosen] = useState<number | null>(null);
  const [reason, setReason] = useState("");
  const [busy, setBusy] = useState(false);

  if (campaigns.length === 0 && undoable.length === 0) return null;
  const campaign = chosen ?? campaigns[0]?.id;

  const grant = async () => {
    if (!campaign) return;
    setBusy(true);
    const { error } = await grantLevel(characterId, campaign, reason);
    setBusy(false);
    if (error) return toast.error(error);
    toast.success(t.granted(characterName, level + 1));
    setReason("");
    setOpen(false);
    onChange();
  };

  const undo = async (grantId: number) => {
    if (!window.confirm(t.undoConfirm)) return;
    const { error } = await revokeLevel(grantId);
    if (error) return toast.error(error);
    toast.success(t.undone);
    onChange();
  };

  return (
    <>
      <button
        type="button"
        className={className ?? "button-secondary text-xs px-3 py-1"}
        onClick={(e) => {
          // Inside a card link: open the modal, don't follow the link
          e.preventDefault();
          e.stopPropagation();
          setOpen(true);
        }}
      >
        {t.grant}
      </button>
      {open &&
        createPortal(
          // React events bubble through portals; keep them from the card link
          <div onClick={(e) => e.stopPropagation()}>
            <Modal
              isOpen
              onClose={() => setOpen(false)}
              title={t.grantTo(characterName)}
              className="w-[min(32rem,calc(100vw-2rem))]"
            >
              {campaigns.length > 0 && (
                <div className="grid gap-4">
                  {campaigns.length > 1 && (
                    <Field label={t.campaign} htmlFor="grant-campaign">
                      <select
                        id="grant-campaign"
                        value={campaign}
                        onChange={(e) => setChosen(Number(e.target.value))}
                      >
                        {campaigns.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </Field>
                  )}
                  <Field label={t.reason} htmlFor="grant-reason" hint={t.reasonHint}>
                    <input
                      id="grant-reason"
                      value={reason}
                      placeholder={t.reasonPlaceholder}
                      onChange={(e) => setReason(e.target.value)}
                    />
                  </Field>
                  <div>
                    <button type="button" disabled={busy} onClick={grant}>
                      {t.confirm} ({level} → {level + 1})
                    </button>
                  </div>
                </div>
              )}
              {undoable.length > 0 && (
                <div className={campaigns.length > 0 ? "mt-8" : ""}>
                  <p className="font-bold text-sm mb-2">{t.yourGrants}</p>
                  <ul className="grid gap-2">
                    {undoable.map((g) => (
                      <li key={g.id} className="flex items-center justify-between gap-3 text-sm">
                        <GrantLine grant={g} />
                        <button
                          type="button"
                          className="button-secondary text-xs px-3 py-1 shrink-0"
                          onClick={() => undo(g.id)}
                        >
                          {t.undo}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Modal>
          </div>,
          document.body,
        )}
    </>
  );
};

/** "in The Black Forest, granted by Michal · 17. 11. 2026 · Slew the wyvern" */
const GrantLine: React.FC<{ grant: LevelGrant }> = ({ grant }) => {
  const t = useDict().levels;
  const lang = useLang();
  const where = grant.campaignId
    ? t.inCampaign(grant.campaignName ?? "")
    : t.deletedCampaign;
  return (
    <span className="min-w-0">
      {grant.grantedBy ? `${t.by(grant.grantedBy)} ${where}` : where}
      {" · "}
      {new Date(grant.createdAt).toLocaleDateString(lang)}
      {grant.reason && <em> · {grant.reason}</em>}
    </span>
  );
};

/** Every level the character got, newest first, down to the starting level */
export const LevelHistory: React.FC<{
  level: number;
  startLevel: number;
  grants: LevelGrant[];
}> = ({ level, startLevel, grants }) => {
  const t = useDict().levels;
  return (
    <ul className="grid gap-1 text-sm">
      {grants.map((g, i) => (
        <li key={g.id}>
          <span className="font-bold">{t.entry(level - i)}</span>{" "}
          <GrantLine grant={g} />
        </li>
      ))}
      <li className="text-dnd-ink/70">{t.started(startLevel)}</li>
    </ul>
  );
};
