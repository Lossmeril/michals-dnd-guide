"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminGuard from "@/components/auth/adminGuard";
import { AppPageLayout } from "@/components/layouts/base";
import { supabaseBrowser } from "@/lib/supabase/browser";
import {
  CLASS_RANKS,
  isOneOf,
  MAGIC_KINDS,
  type Class,
  type ClassUpdate,
  type DB_Class,
} from "@/types/class";
import { TextArea, TextInput } from "@/components/ui/inputs";
import Button from "@/components/ui/button";

type PageProps = { params: Promise<{ id: string }> };

const AdminEditClassPage = ({ params }: PageProps) => {
  const router = useRouter();
  const { id } = use(params);

  const [form, setForm] = useState<Class>({
    rank: "basic",
    title: "",
    short_desc: null,
    description: null,
    image_url: null,
    is_magic: "false",
    color_scheme: null,
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);

      const supabase = supabaseBrowser();
      const { data, error } = await supabase
        .from("classes")
        .select("*")
        .eq("id", id)
        .single<DB_Class>();

      if (error || !data) {
        setError("Class not found (or you don’t have access).");
        setLoading(false);
        return;
      }

      setForm({
        rank: data.rank,
        title: data.title,
        short_desc: data.short_desc,
        description: data.description,
        image_url: data.image_url,
        is_magic: data.is_magic,
        color_scheme: data.color_scheme,
      });

      setLoading(false);
    };

    load();
  }, [id]);

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.title.trim()) {
      setError("Title is required.");
      return;
    }

    setSaving(true);

    const supabase = supabaseBrowser();

    const payload: ClassUpdate = {
      ...form,
      title: form.title.trim(),
      short_desc: form.short_desc?.trim() ? form.short_desc : null,
      description: form.description?.trim() ? form.description : null,
      image_url: form.image_url?.trim() ? form.image_url : null,
      color_scheme: form.color_scheme?.trim() ? form.color_scheme : null,
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase
      .from("classes")
      .update(payload)
      .eq("id", id);

    setSaving(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/app/admin/classes");
    router.refresh();
  };

  if (loading) {
    return (
      <AdminGuard>
        <AppPageLayout title="Admin: Edit Class">
          <p className="text-sm opacity-70">Loading…</p>
        </AppPageLayout>
      </AdminGuard>
    );
  }

  return (
    <AdminGuard>
      <AppPageLayout title="Admin: Edit Class">
        <form onSubmit={save} className="mt-6 space-y-4 max-w-2xl">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-dnd-ink/80">Rank</label>
              <select
                value={form.rank}
                onChange={(e) => {
                  const value = e.target.value;
                  if (isOneOf(value, CLASS_RANKS)) {
                    setForm((f) => ({ ...f, rank: value }));
                  }
                }}
              >
                {CLASS_RANKS.map((rank) => (
                  <option key={rank} value={rank}>
                    {rank}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-dnd-ink/80">Magic</label>
              <select
                value={form.is_magic}
                onChange={(e) => {
                  const value = e.target.value;
                  if (isOneOf(value, MAGIC_KINDS)) {
                    setForm((f) => ({ ...f, is_magic: value }));
                  }
                }}
              >
                {MAGIC_KINDS.map((kind) => (
                  <option key={kind} value={kind}>
                    {kind}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <TextInput
            label="Title"
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            required
            error={null}
          />

          <TextInput
            label="Short description"
            value={form.short_desc ?? ""}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                short_desc: e.target.value.trim() ? e.target.value : null,
              }))
            }
            error={null}
          />

          <TextArea
            label="Description"
            value={form.description ?? ""}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                description: e.target.value.trim() ? e.target.value : null,
              }))
            }
            error={null}
          />

          <TextInput
            label="Image URL"
            value={form.image_url ?? ""}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                image_url: e.target.value.trim() ? e.target.value : null,
              }))
            }
            error={null}
          />

          <TextInput
            label="Color scheme (optional)"
            value={form.color_scheme ?? ""}
            onChange={(e) =>
              setForm((f) => ({
                ...f,
                color_scheme: e.target.value.trim() ? e.target.value : null,
              }))
            }
            error={null}
          />

          {error && (
            <div className="rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-sm text-red-900">
              {error}
            </div>
          )}

          <div className="flex items-center gap-3">
            <Button
              label={saving ? "Saving…" : "Save"}
              type="submit"
              disabled={saving}
            />
            <Button
              label="Back"
              mode="inverted"
              onClick={() => router.push("/app/admin/classes")}
            />
          </div>
        </form>
      </AppPageLayout>
    </AdminGuard>
  );
};

export default AdminEditClassPage;
