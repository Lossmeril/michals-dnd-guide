"use client";

import { useEffect, useState } from "react";
import AdminGuard from "@/components/auth/adminGuard";
import { AppPageLayout } from "@/components/layouts/base";
import { supabaseBrowser } from "@/lib/supabase/browser";
import type { DB_Class } from "@/types/class";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

const AdminClassesPage = () => {
  const [classes, setClasses] = useState<DB_Class[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);

      const supabase = supabaseBrowser();
      const { data, error } = await supabase
        .from("classes")
        .select("*")
        .order("rank", { ascending: true })
        .order("title", { ascending: true });

      if (error) setError(error.message);
      setClasses((data ?? []) as DB_Class[]);
      setLoading(false);
    };

    load();
  }, []);

  return (
    <AdminGuard>
      <AppPageLayout title="Admin: Classes">
        <div className="mt-4 flex items-center justify-between">
          <Button label="Back" mode="inverted" href="/app/admin" />
          <Button label="New class" href="/app/admin/classes/new" />
        </div>

        {loading && <p className="mt-6 text-sm opacity-70">Loading…</p>}

        {error && (
          <div className="mt-6 rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-sm text-red-900">
            {error}
          </div>
        )}

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((c) => (
            <Card
              key={c.id}
              title={c.title}
              description={`${c.rank.toUpperCase()} • Magic: ${c.is_magic}`}
              imageSrc={c.image_url ?? undefined}
              href={`/app/admin/classes/${c.id}/edit`}
            >
              {c.short_desc ? (
                <p className="mt-2 text-sm text-dnd-ink/80">{c.short_desc}</p>
              ) : null}
            </Card>
          ))}
        </div>
      </AppPageLayout>
    </AdminGuard>
  );
};

export default AdminClassesPage;
