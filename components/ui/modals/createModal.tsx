"use client";

import { useEffect } from "react";
import DecorativeBorder from "@/components/snippets/decorativeBorder";
import Button from "@/components/ui/button";

type CreateModalProps = {
  open: boolean;
  title: string;
  description?: string;

  confirmLabel?: string;
  cancelLabel?: string;

  canConfirm?: boolean;
  confirmLoading?: boolean;

  onCancel: () => void;
  onConfirm: () => void | Promise<void>;

  children: React.ReactNode;
};

const CreateModal: React.FC<CreateModalProps> = ({
  open,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  canConfirm = true,
  confirmLoading = false,
  onCancel,
  onConfirm,
  children,
}) => {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onCancel();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onCancel]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        onClick={onCancel}
        aria-label="Close modal"
      />

      <div className="relative w-full min-w-lg max-w-3xl border-y-2 border-dnd-ink bg-dnd-bg shadow-lg">
        <DecorativeBorder />
        <div className="book p-6">
          <h2 className="font-serif text-xl text-dnd-red-dark">{title}</h2>
          {description ? <p>{description}</p> : null}

          <div className="mt-4">{children}</div>

          <div className="mt-5 flex items-center justify-end gap-3">
            <Button
              label={cancelLabel}
              type="button"
              onClick={onCancel}
              mode="inverted"
            />
            <Button
              label={confirmLoading ? "Working…" : confirmLabel}
              type="button"
              onClick={onConfirm}
              disabled={!canConfirm || confirmLoading}
              mode="default"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateModal;
