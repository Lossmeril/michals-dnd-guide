"use client";

import React, { useEffect, useMemo, useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";
import Button from "./ui/button";
import Alert from "./ui/alert";
import Modal from "./ui/modal";

interface ConfirmDeleteModalProps {
  // -------------------------------------
  // Modal control
  // -------------------------------------
  open: boolean;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirming?: boolean;
  error?: string | null;

  // -------------------------------------
  // Modal content
  // -------------------------------------
  title?: string;
  description?: string;

  // -------------------------------------
  // Deletion confirmation
  // -------------------------------------
  confirmPhrase: string;
  inputValue: string;
  setInputValue: (v: string) => void;
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
  // -------------------------------------
  // Handle Escape key to close modal
  // -------------------------------------

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCancel();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onCancel]);

  if (!open) return null;

  // -------------------------------------
  // Confirmation phrase matches
  // -------------------------------------
  const canConfirm = inputValue === confirmPhrase && !confirming;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      {/* ------------------------------------- */}
      {/* Backdrop */}
      {/* ------------------------------------- */}
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        onClick={onCancel}
        aria-label="Close modal"
      />

      {/* ------------------------------------- */}
      {/* Modal */}
      {/* ------------------------------------- */}
      <Modal open={open} onClose={onCancel} title={title}>
        <p className="mt-4">
          <strong>Warning:</strong> This action cannot be undone. To confirm
          deletion, please type the confirmation phrase below.
        </p>
        <p>{description}</p>

        <Alert type="danger" className="mb-3">
          Type{" "}
          <span className="font-semibold text-dnd-red-dark">
            {confirmPhrase}
          </span>{" "}
          to confirm.
        </Alert>

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
      </Modal>
    </div>
  );
};

interface DeleteButtonProps {
  // -------------------------------------
  // Deleted entity info
  // -------------------------------------
  entityName: string;

  // -------------------------------------
  // UI customization
  // -------------------------------------
  label?: string;
  confirmTitle?: string;
  confirmDescription?: string;
  entityType?: string; // for future use, e.g. "character", "spell", etc.

  confirmPrefix?: string; // default "DELETE"

  // -------------------------------------
  // Styles
  // -------------------------------------
  mode?: "icon" | "button";

  // -------------------------------------
  // Functions
  // -------------------------------------
  onDelete: () => Promise<void> | void;
  onDeleted?: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({
  entityName,
  entityType,
  onDelete,

  label = "Delete",
  confirmTitle,
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
        title={
          confirmTitle
            ? confirmTitle
            : `Delete ${entityType ? entityType : ""} ${entityName}?`
        }
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
