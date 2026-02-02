"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminGuard from "@/components/auth/adminGuard";
import { AdminAppPageLayout } from "@/components/layouts/base";
import { supabaseBrowser } from "@/lib/supabase/browser";

import type { DB_Race, RaceInsert } from "@/types/race";

import Button from "@/components/ui/button";
import CreateModal from "@/components/ui/modals/createModal";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const MakeNewRaceModal = ({
  open,
  name,
  setName,
  onCancel,
}: {
  open: boolean;
  name: string;
  setName: (v: string) => void;
  onCancel: () => void;
}) => {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onCancel();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onCancel]);

  if (!open) return null;

  const canConfirm = name.trim().length > 0 && !saving;

  const create = async () => {
    setSaving(true);
    const supabase = supabaseBrowser();

    const payload: RaceInsert = {
      name: name.trim(),
      description: null,
      image_url: null,
    };

    const { data, error } = await supabase
      .from("races")
      .insert(payload)
      .select("id")
      .single();

    setSaving(false);
    if (error || !data) {
      console.log(error);
      return;
    }

    onCancel();
    router.push(`/app/admin/races/${data.id}/edit`);
  };

  return (
    <CreateModal
      open={open}
      title="Create a new race"
      onConfirm={create}
      confirmLabel="Create"
      canConfirm={canConfirm}
      confirmLoading={saving}
      cancelLabel="Cancel"
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

export default function AdminRacesPage() {
  const router = useRouter();

  const [races, setRaces] = useState<DB_Race[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showNewRaceModal, setShowNewRaceModal] = useState(false);
  const [newRaceName, setNewRaceName] = useState("");

  const load = async () => {
    setLoading(true);
    setError(null);

    const supabase = supabaseBrowser();
    const { data, error } = await supabase
      .from("races")
      .select("*")
      .order("name", { ascending: true });

    if (error) setError(error.message);
    setRaces((data ?? []) as DB_Race[]);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <AdminGuard>
      <AdminAppPageLayout title="Admin: Races">
        <div className="my-4">
          <Button
            label="Add Race"
            mode="default"
            onClick={() => setShowNewRaceModal(true)}
          />
        </div>

        <MakeNewRaceModal
          open={showNewRaceModal}
          name={newRaceName}
          setName={setNewRaceName}
          onCancel={() => {
            setShowNewRaceModal(false);
            setNewRaceName("");
          }}
        />

        {loading && <p className="mt-6 text-sm opacity-70">Loading…</p>}

        {error && (
          <div className="mt-6 rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-sm text-red-900">
            {error}
          </div>
        )}

        {!loading && !error && races.length === 0 && (
          <p className="mt-4 text-sm opacity-70">No races yet.</p>
        )}

        {!loading && !error && races.length > 0 && (
          <Table title="Races">
            <TableHead
              titles={[
                { title: "Image", width: "30%" },
                { title: "Race", width: "55%" },
                { title: "Actions", width: "15%" },
              ]}
            />
            <TableBody>
              {races.map((r) => (
                <TableRow key={r.id}>
                  <TableCell>
                    {" "}
                    <div className="overflow-hidden w-16 h-16 border-r border-dnd-ink/20">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={
                          r.image_url?.trim()
                            ? r.image_url
                            : "https://placehold.co/80?text=No%20Image%20:("
                        }
                        alt={r.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-serif text-dnd-ink">{r.name}</div>
                  </TableCell>

                  <TableCell>
                    <Button
                      label="Edit"
                      mode="inverted"
                      onClick={() =>
                        router.push(`/app/admin/races/${r.id}/edit`)
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </AdminAppPageLayout>
    </AdminGuard>
  );
}
