"use client";

import React, { useEffect, useMemo, useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";
import DecorativeBorder from "../snippets/decorativeBorder";
import Button from "./button";

interface ConfirmDeleteModalProps {
  open: boolean;
  title?: string;
  description?: string;

  confirmPhrase: string;
  inputValue: string;
  setInputValue: (v: string) => void;

  confirmLabel?: string;
  cancelLabel?: string;

  onConfirm: () => void;
  onCancel: () => void;

  confirming?: boolean;
  error?: string | null;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  open,
  title = "Confirm deletion",
  description,
  confirmPhrase,
  inputValue,
  setInputValue,
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  confirming = false,
  error = null,
}) => {
  // ESC to close
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onCancel]);

  if (!open) return null;

  const canConfirm = inputValue === confirmPhrase && !confirming;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        onClick={onCancel}
        aria-label="Close modal"
      />

      {/* Modal */}
      <div className="relative w-full min-w-lg max-w-3xl border-y-2 border-dnd-ink bg-dnd-bg shadow-lg">
        <DecorativeBorder />
        <div className="book p-6">
          <h2 className="font-serif text-xl text-dnd-red-dark">{title}</h2>
          <p>
            <strong>Warning:</strong>This action cannot be undone. To confirm
            deletion, please type the confirmation phrase below.
          </p>
          <p>{description}</p>

          <div className="mt-4 0 bg-dnd-red-dark/10 p-3 text-sm text-dnd-ink mb-3">
            Type{" "}
            <span className="font-semibold text-dnd-red-dark">
              {confirmPhrase}
            </span>{" "}
            to confirm.
          </div>

          <input
            className="mt-3 w-full rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-dnd-ink outline-none focus:border-red-900"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={confirmPhrase}
            autoFocus
          />

          {error && (
            <div className="mt-3 rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-sm text-red-900">
              {error}
            </div>
          )}

          <div className="mt-5 flex items-center justify-end gap-3">
            <Button
              label={cancelLabel}
              type="button"
              onClick={onCancel}
              mode="inverted"
            />

            <Button
              label={confirming ? "Deleting…" : confirmLabel}
              type="button"
              onClick={onConfirm}
              disabled={!canConfirm}
              mode="default"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface DeleteButtonProps {
  // what the user must type (e.g. character name)
  entityName: string;

  // called once confirmed
  onDelete: () => Promise<void> | void;

  // optional customization
  label?: string;
  confirmTitle?: string;
  confirmDescription?: string;

  confirmPrefix?: string; // default "DELETE"

  // styling variants for button itself
  mode?: "icon" | "button";

  // after delete succeeds
  onDeleted?: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  entityName,
  onDelete,

  label = "Delete",
  confirmTitle = "Delete item",
  confirmDescription,

  confirmPrefix = "DELETE",

  mode = "icon",
  onDeleted,
}) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [confirming, setConfirming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const confirmPhrase = useMemo(
    () => `${confirmPrefix} ${entityName}`,
    [confirmPrefix, entityName],
  );

  const close = () => {
    setOpen(false);
    setInputValue("");
    setError(null);
    setConfirming(false);
  };

  const handleConfirm = async () => {
    setError(null);
    setConfirming(true);

    try {
      await onDelete();
      close();
      onDeleted?.();
    } catch (e) {
      setConfirming(false);
      setError(e instanceof Error ? e.message : "Deletion failed.");
    }
  };

  return (
    <>
      <Button
        label={
          <>
            <BsTrash3Fill className="text-base" />
            {mode === "button" ? <span>{label}</span> : null}
          </>
        }
        type="button"
        mode="default"
        onClick={() => setOpen(true)}
      />

      <ConfirmDeleteModal
        open={open}
        title={confirmTitle}
        description={confirmDescription}
        confirmPhrase={confirmPhrase}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onCancel={close}
        onConfirm={handleConfirm}
        confirming={confirming}
        error={error}
        confirmLabel={label}
      />
    </>
  );
};

export default DeleteButton;
