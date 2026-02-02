"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { supabaseBrowser } from "@/lib/supabase/browser";
import type {
  Character,
  CharacterInsert,
  DB_Character,
} from "@/types/character";

import { AppPageLayout } from "@/components/layouts/base";

import Button from "@/components/ui/button";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import DeleteButton from "@/components/ui/deleteButton";

import { getStoragePathFromPublicUrl } from "@/components/editors/imageUpload";
import CreateModal from "@/components/ui/modals/createModal";

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// MAKE NEW CHARACTER MODAL
// --------------------------------------------------------------------
// --------------------------------------------------------------------

interface MakeNewCharacterModalProps {
  open: boolean;

  name: string;
  setName: (v: string) => void;

  confirmLabel?: string;
  cancelLabel?: string;

  onCancel: () => void;
}

const MakeNewCharacterModal: React.FC<MakeNewCharacterModalProps> = ({
  open,
  name,
  setName,
  confirmLabel = "Create",
  cancelLabel = "Cancel",
  onCancel,
}) => {
  const router = useRouter();

  const [saving, setSaving] = useState(false);

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

  const initialCharacter: Character = {
    name: name,
    backstory: null,
    image_url: null,
  };
  const isNameInputted = name.trim().length > 0;

  const create = async (character: Character) => {
    setSaving(true);

    const supabase = supabaseBrowser();
    const { data: auth } = await supabase.auth.getUser();
    const user = auth.user;

    // Check authentication
    if (!user) {
      setSaving(false);
      router.replace("/login?next=/app/characters/new");
      return;
    }

    const payload: CharacterInsert = {
      owner_user_id: user.id,
      ...character,
      name: character.name.trim(),
    };

    const { data, error: insertError } = await supabase
      .from("characters")
      .insert(payload)
      .select("id")
      .single();

    setSaving(false);

    if (insertError || !data) return;

    onCancel();
    router.push(`/app/characters/${data.id}/edit?step=about`);
  };

  return (
    <CreateModal
      open={open}
      title="Create a new character"
      onConfirm={() => create(initialCharacter)}
      confirmLabel={confirmLabel}
      canConfirm={isNameInputted && !saving}
      confirmLoading={saving}
      cancelLabel={cancelLabel}
      onCancel={onCancel}
    >
      <input
        className="mt-3 w-full rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-dnd-ink outline-none focus:border-red-900"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
      />
    </CreateModal>
  );
};

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// REUSABLE STANDARDIZED CHARACTERS TABLE
// --------------------------------------------------------------------
// --------------------------------------------------------------------

const CharactersTable = ({
  characters,
  title,
  loadCharacters,
}: {
  characters: DB_Character[];
  title?: string;
  loadCharacters: () => Promise<void>;
}) => {
  const router = useRouter();

  return (
    <Table title={title}>
      <TableHead
        titles={[
          { title: "Image", width: "5%" },
          { title: "Name", width: "10%" },
          { title: "Actions", width: "10%" },
        ]}
      ></TableHead>

      <TableBody>
        {characters.map((c) => (
          <TableRow key={c.id}>
            <TableCell>
              <div className="overflow-hidden w-16 h-16 border-r border-dnd-ink/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    c.image_url?.trim()
                      ? c.image_url
                      : "https://placehold.co/80?text=No%20Image%20:("
                  }
                  alt={c.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </TableCell>

            <TableCell className="">
              <div className="font-serif text-dnd-ink">{c.name}</div>
            </TableCell>

            <TableCell className="">
              <div className="w-full h-full flex flex-row items-center gap-2">
                <Button
                  href={`/app/characters/${c.id}`}
                  label="View"
                  mode="inverted"
                />
                <Button
                  href={`/app/characters/${c.id}/edit?step=about`}
                  label="Edit"
                  mode="inverted"
                />
                <DeleteButton
                  entityName={c.name}
                  mode="icon"
                  confirmTitle={`You are about to delete ${c.name}`}
                  confirmPrefix="I want to kill"
                  onDelete={async () => {
                    const supabase = supabaseBrowser();

                    // 1) fetch image_url for this character
                    const { data, error: fetchErr } = await supabase
                      .from("characters")
                      .select("image_url")
                      .eq("id", c.id)
                      .single();

                    if (fetchErr) throw new Error(fetchErr.message);

                    // 2) delete file if present
                    const imageUrl = data?.image_url;
                    if (imageUrl) {
                      const path = getStoragePathFromPublicUrl(imageUrl); // helper below
                      const { error: storageErr } = await supabase.storage
                        .from("characters")
                        .remove([path]);
                      // optional: ignore 404-ish cases
                      if (storageErr) console.warn(storageErr.message);
                    }

                    // 3) delete db row
                    const { error } = await supabase
                      .from("characters")
                      .delete()
                      .eq("id", c.id);
                    if (error) throw new Error(error.message);

                    router.refresh();
                    await loadCharacters();
                  }}
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// CHARACTERS PAGE
// --------------------------------------------------------------------
// --------------------------------------------------------------------

const CharactersPage = () => {
  // Characters data
  const [characters, setCharacters] = useState<DB_Character[]>([]);

  // Characters loading state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // New character modal state and data
  const [showNewCharacterModal, setShowNewCharacterModal] = useState(false);
  const [newCharacterName, setNewCharacterName] = useState("");

  // Character reload function
  const loadCharacters = async () => {
    setLoading(true);
    const supabase = supabaseBrowser();
    const { data, error } = await supabase
      .from("characters")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) setError(error.message);
    else setCharacters(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <AppPageLayout title="Your Characters">
      <div className="my-4">
        <Button
          label="Add Character"
          onClick={() => setShowNewCharacterModal(true)}
          mode="default"
        />
      </div>

      {/* Make New Character Modal */}
      <MakeNewCharacterModal
        open={showNewCharacterModal}
        name={newCharacterName}
        setName={setNewCharacterName}
        onCancel={() => {
          setShowNewCharacterModal(false);
          setNewCharacterName("");
        }}
      />

      {loading && <p className="text-sm opacity-70">Loading characters…</p>}

      {error && (
        <div className="mt-4 rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-sm text-red-900">
          {error}
        </div>
      )}

      {!loading && !error && characters.length === 0 && (
        <p className="mt-4 text-sm opacity-70">
          You don’t have any characters yet.
        </p>
      )}

      <section>
        {!loading && !error && characters.length > 0 && (
          <CharactersTable
            characters={characters}
            loadCharacters={loadCharacters}
          />
        )}
      </section>
    </AppPageLayout>
  );
};

export default CharactersPage;
