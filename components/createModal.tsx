"use client";

import React, { useEffect, useMemo, useState } from "react";
import { BsPlusSquareFill } from "react-icons/bs";

import Button from "./ui/button";
import Modal from "./ui/modal";
import type { CharacterInsert } from "@/types/character";
import { RaceInsert } from "@/types/races";

interface CreateModalProps {
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

  children: React.ReactNode;
}

const CreateModal: React.FC<CreateModalProps> = ({
  open,
  title = "Confirm creation",
  description,

  confirmLabel = "Create",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  confirming = false,
  error = null,

  children,
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
        {description ? <p>{description}</p> : null}

        {error && (
          <div className="mt-3 rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-sm text-red-900">
            {error}
          </div>
        )}

        {children}

        <div className="mt-5 flex items-center justify-end gap-3">
          <Button
            label={cancelLabel}
            type="button"
            onClick={onCancel}
            mode="inverted"
          />

          <Button
            label={confirming ? "Creating…" : confirmLabel}
            type="button"
            onClick={onConfirm}
            disabled={confirming}
            mode="default"
          />
        </div>
      </Modal>
    </div>
  );
};

interface CreateButtonProps<TPayload, TResult = unknown> {
  entityName: string;
  entityType?: string;

  label?: string;
  confirmTitle?: string;
  confirmDescription?: string;

  mode?: "icon" | "button";

  onCreate: (payload: TPayload) => Promise<TResult> | TResult;
  onCreated?: (result: TResult) => void;

  children: (
    payload: TPayload,
    setPayload: React.Dispatch<React.SetStateAction<TPayload>>,
  ) => React.ReactNode;

  initialPayload: TPayload;
}

function CreateButton<TPayload, TResult = unknown>(
  props: CreateButtonProps<TPayload, TResult>,
) {
  const {
    entityName,
    entityType,
    label = "Create",
    confirmTitle,
    confirmDescription,
    mode = "button",
    onCreate,
    onCreated,
    children,
    initialPayload,
  } = props;

  // -------------------------------------
  // Modal open state
  // -------------------------------------
  const [open, setOpen] = useState(false);

  // -------------------------------------
  // Controls
  // -------------------------------------
  const [confirming, setConfirming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // -------------------------------------
  // Payload state
  // -------------------------------------
  const [payload, setPayload] = useState<TPayload>(initialPayload);

  // -------------------------------------
  // UI strings
  // -------------------------------------
  const modalTitle = useMemo(() => {
    if (confirmTitle) return confirmTitle;
    const type = entityType ? `${entityType} ` : "";
    return `Create New ${type}${entityName}`;
  }, [confirmTitle, entityType, entityName]);

  // -------------------------------------
  // Close modal and reset state
  // -------------------------------------
  const close = () => {
    setOpen(false);
    setError(null);
    setConfirming(false);
    setPayload(initialPayload);
  };

  // -------------------------------------
  // Handle the confirm action
  // -------------------------------------
  const handleConfirm = async () => {
    setError(null);
    setConfirming(true);

    try {
      const result = await onCreate(payload);
      close();
      onCreated?.(result);
    } catch (e) {
      setConfirming(false);
      setError(e instanceof Error ? e.message : "Creating new entity failed.");
    }
  };

  return (
    <>
      <Button
        label={
          <>
            <BsPlusSquareFill
              className={mode !== "button" ? "text-base" : "text-xs"}
            />
            {mode === "button" ? <span className="ml-2">{label}</span> : null}
          </>
        }
        type="button"
        mode="default"
        onClick={() => setOpen(true)}
      />

      <CreateModal
        open={open}
        onCancel={close}
        onConfirm={handleConfirm}
        title={modalTitle}
        description={confirmDescription}
        confirming={confirming}
        error={error}
        confirmLabel={label}
      >
        {children(payload, setPayload)}
      </CreateModal>
    </>
  );
}

export default CreateButton;

// -------------------------------------
// -------------------------------------
// -- CREATE NEW CHARACTER BUTTON --
// -------------------------------------
// -------------------------------------

interface CreateCharacterButtonProps {
  onCreate: (
    payload: CharacterInsert,
  ) => Promise<CharacterInsert> | CharacterInsert;
}

export const CreateCharacterButton: React.FC<CreateCharacterButtonProps> = ({
  onCreate,
}) => {
  // -------------------------------------
  // Initial form state
  // -------------------------------------
  const initialPayload: CharacterInsert = {
    name: "",
    level: 7,
  };

  return (
    <CreateButton<CharacterInsert, CharacterInsert>
      entityType="character"
      onCreate={onCreate}
      label="Create Character"
      confirmTitle="Create new character"
      confirmDescription="Please, enter your character's name to create it."
      entityName="character"
      initialPayload={initialPayload}
    >
      {(payload, setPayload) => (
        <div className="mt-4 flex flex-col gap-3">
          <input
            placeholder="Character Name"
            value={payload.name ?? ""}
            onChange={(e) =>
              setPayload((p) => ({ ...p, name: e.target.value }))
            }
          />

          <input
            type="number"
            placeholder="Level"
            value={payload.level ?? 7}
            onChange={(e) =>
              setPayload((p) => ({ ...p, level: Number(e.target.value) }))
            }
          />
        </div>
      )}
    </CreateButton>
  );
};

// -------------------------------------
// -------------------------------------
// -- CREATE NEW RACE BUTTON --
// -------------------------------------
// -------------------------------------

interface CreateRaceButtonProps {
  onCreate: (payload: RaceInsert) => Promise<RaceInsert> | RaceInsert;
}

export const CreateRaceButton: React.FC<CreateRaceButtonProps> = ({
  onCreate,
}) => {
  // -------------------------------------
  // Initial form state
  // -------------------------------------
  const initialPayload: RaceInsert = {
    id: "",
    name: "",
  };

  return (
    <CreateButton<RaceInsert, RaceInsert>
      entityType="race"
      onCreate={onCreate}
      label="Create Race"
      confirmTitle="Create new race"
      confirmDescription="Please, enter your race's name to create it."
      entityName="race"
      initialPayload={initialPayload}
    >
      {(payload, setPayload) => (
        <div className="mt-4 flex flex-col gap-3">
          <input
            placeholder="Race Name"
            value={payload.name ?? ""}
            onChange={(e) =>
              setPayload((p) => ({
                ...p,
                name: e.target.value,
                id: e.target.value.toLowerCase().replace(/\s+/g, "-"),
              }))
            }
          />
        </div>
      )}
    </CreateButton>
  );
};
