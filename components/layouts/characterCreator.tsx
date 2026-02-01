"use client";

import React, { useEffect, useState } from "react";
import type { Character } from "@/types/character";
import { TextArea, TextInput } from "@/components/ui/inputs";
import {
  CharacterLayout,
  CharacterLayoutBox,
} from "@/components/layouts/character";
import Button from "@/components/ui/button";

interface CharacterEditorSideBarProps {
  sections: { title: string; editor: React.ReactNode }[];

  onSectionChange?: (sectionEditor: React.ReactNode) => void;
}

const CharacterEditorSideBar: React.FC<CharacterEditorSideBarProps> = ({
  sections,
  onSectionChange = () => {},
}) => {
  return (
    <div className="w-full bg-dnd colspan-1 rounded-xl border-2 border-red-900/20 p-4">
      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <div
            key={section.title}
            onClick={() => onSectionChange(section.editor)}
          >
            {section.title}
          </div>
        ))}
      </div>
    </div>
  );
};

type CharacterEditorProps = {
  initialCharacter: Character;

  submitLabel: string;
  submittingLabel?: string;
  isSubmitting?: boolean;
  cancelLabel?: string;

  onSave: (character: Character) => Promise<void> | void;
  onCancel: () => void;

  error?: string | null;
  setError?: (msg: string | null) => void;

  className?: string;
};

const CharacterEditor = ({
  initialCharacter,

  submitLabel,
  submittingLabel = "Saving…",
  isSubmitting = false,

  onSave,
  onCancel,

  error = null,
  setError,

  className,
}: CharacterEditorProps) => {
  const [character, setCharacter] = useState<Character>(initialCharacter);
  const [activeSection, setActiveSection] = useState<React.ReactNode>(<></>);

  // If the initial character changes (e.g. loaded from DB), sync state once.
  useEffect(() => {
    setCharacter(initialCharacter);
  }, [initialCharacter]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (setError) setError(null);

    if (!character.name.trim()) {
      if (setError) setError("Name is required.");
      return;
    }

    // normalize only what must be normalized
    const normalized: Character = {
      ...character,
      name: character.name.trim(),
    };

    await onSave(normalized);
  };

  return (
    <div className={`${className} grid grid-cols-6 gap-20 pt-10`}>
      <CharacterEditorSideBar
        sections={[{ title: "About", editor: <div>I am editor</div> }]}
        onSectionChange={setActiveSection}
      />
      <div className="col-span-5">{activeSection}</div>
      <div className="col-span-5">
        <form onSubmit={handleSubmit} className="mt-2 space-y-5">
          <CharacterLayout>
            <CharacterLayoutBox colspan={2}>
              <TextInput
                label="Name"
                value={character.name}
                onChange={(e) =>
                  setCharacter((c) => ({ ...c, name: e.target.value }))
                }
                required
                error={null}
              />

              <TextArea
                label="Backstory"
                value={character.backstory ?? ""}
                onChange={(e) =>
                  setCharacter((c) => ({
                    ...c,
                    backstory: e.target.value.trim() ? e.target.value : null,
                  }))
                }
                error={null}
              />

              <TextInput
                label="Image URL"
                value={character.image_url ?? ""}
                onChange={(e) =>
                  setCharacter((c) => ({
                    ...c,
                    image_url: e.target.value.trim() ? e.target.value : null,
                  }))
                }
                placeholder="https://…"
                inputMode="url"
                error={null}
              />
            </CharacterLayoutBox>

            <CharacterLayoutBox colspan={1} className="p-0">
              <div className="overflow-hidden rounded-xl border-2 border-red-900/20 bg-white/50 w-full h-full">
                {character.image_url?.trim() ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={character.image_url}
                    alt="Character preview"
                    className="h-full w-full object-cover"
                    onError={() =>
                      setError?.("Could not load image from that URL.")
                    }
                  />
                ) : null}
              </div>
            </CharacterLayoutBox>

            <CharacterLayoutBox
              colspan={6}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <Button
                  label={isSubmitting ? submittingLabel : submitLabel}
                  type="submit"
                  disabled={isSubmitting}
                  mode="default"
                />

                <Button label="Back" mode="inverted" onClick={onCancel} />
              </div>
            </CharacterLayoutBox>
            <CharacterLayoutBox colspan={6}>
              {error && (
                <div className="bg-dnd-accent-red border-y-2 border-dnd-red-dark relative w-fit px-3 py-2 text-sm text-dnd-red-dark">
                  {error}
                </div>
              )}
            </CharacterLayoutBox>
          </CharacterLayout>
        </form>
      </div>
    </div>
  );
};

export default CharacterEditor;
