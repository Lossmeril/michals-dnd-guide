"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { useDict } from "@/lib/i18n/client";
import type { Result } from "@/lib/result";

/**
 * Deletes something for good, after the user types its name: a campaign, a
 * character. On success it says so and moves to `then`.
 */
const DeleteButton: React.FC<{
  what: "campaign" | "character";
  name: string;
  /** What else goes with it, for the warning */
  consequences: string;
  onDelete: () => Promise<Result<unknown>>;
  then: string;
  className?: string;
}> = ({ what, name, consequences, onDelete, then, className }) => {
  const router = useRouter();
  const t = useDict().remove;
  const kind = t.kinds[what];
  const [pending, setPending] = useState(false);
  const label = name.trim() ? t.named(name.trim()) : kind.fallback;
  // Something without a name is confirmed by typing "delete"
  const word = name.trim() || t.word;

  const remove = async () => {
    const typed = window.prompt(
      t.prompt(label, consequences, name.trim() ? kind.typeName : t.typeWord),
    );
    if (typed === null) return;
    if (typed.trim() !== word) {
      toast.error(t.mismatch);
      return;
    }
    setPending(true);
    const { error } = await onDelete();
    if (error) {
      setPending(false);
      toast.error(error);
      return;
    }
    toast.success(t.gone(label));
    router.push(then);
    router.refresh();
  };

  return (
    <button type="button" className={className ?? "button-secondary"} disabled={pending} onClick={remove}>
      {pending ? t.deleting : kind.button}
    </button>
  );
};

export default DeleteButton;
