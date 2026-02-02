"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminGuard from "@/components/auth/adminGuard";
import { AppPageLayout } from "@/components/layouts/base";
import { supabaseBrowser } from "@/lib/supabase/browser";

import type { DB_Race, Race, RaceUpdate } from "@/types/race";
import RaceEditorShell from "@/components/editors/raceCreator";

type PageProps = { params: Promise<{ id: string }> };

export default function AdminEditRacePage({ params }: PageProps) {
  const router = useRouter();
  const { id: raceId } = use(params);

  const [initialRace, setInitialRace] = useState<Race>({
    name: "",
    description: null,
    image_url: null,
  });

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setNotFound(false);

      const supabase = supabaseBrowser();
      const { data, error } = await supabase
        .from("races")
        .select("*")
        .eq("id", raceId)
        .single<DB_Race>();

      if (error || !data) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      setInitialRace({
        name: data.name,
        description: data.description,
        image_url: data.image_url,
      });

      setLoading(false);
    };

    load();
  }, [raceId]);

  const saveRace = async (r: Race) => {
    const supabase = supabaseBrowser();

    const payload: RaceUpdate = {
      name: r.name.trim(),
      description: r.description?.trim() ? r.description : null,
      image_url: r.image_url,
    };

    const { error } = await supabase
      .from("races")
      .update(payload)
      .eq("id", raceId);
    if (error) throw new Error(error.message);

    router.push("/app/admin/races");
    router.refresh();
  };

  if (loading) {
    return (
      <AdminGuard>
        <AppPageLayout title="Admin: Edit Race">
          <p className="text-sm opacity-70">Loading…</p>
        </AppPageLayout>
      </AdminGuard>
    );
  }

  if (notFound) {
    return (
      <AdminGuard>
        <AppPageLayout title="Admin: Edit Race">
          <div className="text-red-900">
            <strong>Error:</strong> Race not found (or you don&apos;t have
            access).
          </div>
        </AppPageLayout>
      </AdminGuard>
    );
  }

  return (
    <AdminGuard>
      <AppPageLayout title={`Admin: Edit ${initialRace.name || "Race"}`}>
        <RaceEditorShell
          raceId={raceId}
          initialRace={initialRace}
          onSave={saveRace}
          onCancel={() => router.push("/app/admin/races")}
        />
      </AppPageLayout>
    </AdminGuard>
  );
}
