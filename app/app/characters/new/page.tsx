"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";

import type { Character, CharacterInsert } from "@/types/character";

const NewCharacterPage = () => {
  const router = useRouter();

  const [character, setCharacter] = useState<Character>({
    name: "",
    backstory: null,
    image_url: null,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!character.name.trim()) {
      setError("Name is required.");
      return;
    }

    setLoading(true);

    const supabase = supabaseBrowser();
    const { data: auth } = await supabase.auth.getUser();
    const user = auth.user;

    // ----------------------------------------------------------------
    // CHECK AUTHENTICATION
    // ----------------------------------------------------------------

    if (!user) {
      setLoading(false);
      router.replace("/login?next=/app/characters/new");
      return;
    }

    // ----------------------------------------------------------------
    // CREATE PAYLOAD TO INSERT IN DB
    // ----------------------------------------------------------------

    const payload: CharacterInsert = {
      owner_user_id: user.id,
      ...character,
      name: character.name.trim(),
    };

    const { error: insertError } = await supabase
      .from("characters")
      .insert(payload);

    setLoading(false);

    // ----------------------------------------------------------------
    // ERROR HANDLING
    // ----------------------------------------------------------------

    if (insertError) {
      setError(insertError.message);
      return;
    }

    router.push("/app/characters");
    router.refresh();
  };

  return (
    <main className="mx-auto w-full px-6 py-10">
      <form onSubmit={handleCreate} className="mt-2 space-y-5">
        <div className="space-y-2">
          <label className="text-sm text-[#2b1d0e]/80">Name</label>
          <input
            value={character.name}
            onChange={(e) =>
              setCharacter((c) => ({ ...c, name: e.target.value }))
            }
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#2b1d0e]/80">Backstory</label>
          <textarea
            value={character.backstory ?? ""}
            onChange={(e) =>
              setCharacter((c) => ({
                ...c,
                backstory: e.target.value.trim() ? e.target.value : null,
              }))
            }
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-[#2b1d0e]/80">
            Image URL (optional)
          </label>
          <input
            className="w-full rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-[#2b1d0e] outline-none focus:border-red-900"
            value={character.image_url ?? ""}
            onChange={(e) =>
              setCharacter((c) => ({
                ...c,
                image_url: e.target.value.trim() ? e.target.value : null,
              }))
            }
            placeholder="https://…"
            inputMode="url"
          />

          {character.image_url?.trim() ? (
            <div className="mt-3 overflow-hidden rounded-xl border-2 border-red-900/20 bg-white/50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={character.image_url ?? ""}
                alt="Character preview"
                className="h-56 w-full object-cover"
                onError={() => setError("Could not load image from that URL.")}
              />
            </div>
          ) : null}
        </div>

        {error && (
          <div className="rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-sm text-red-900">
            {error}
          </div>
        )}

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl border-2 border-red-900 bg-red-900 px-4 py-2 font-serif text-sm text-[#f4efe6] transition hover:opacity-95 disabled:opacity-60"
          >
            {loading ? "Creating…" : "Create Character"}
          </button>

          <button
            type="button"
            onClick={() => router.back()}
            className="rounded-xl border-2 border-red-900/30 bg-transparent px-4 py-2 font-serif text-sm text-red-900 transition hover:bg-red-900/5"
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
};

export default NewCharacterPage;
