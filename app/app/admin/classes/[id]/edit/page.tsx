"use client";

import { use, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import AdminGuard from "@/components/auth/adminGuard";
import { AppPageLayout } from "@/components/layouts/base";
import { supabaseBrowser } from "@/lib/supabase/browser";
import {
  CLASS_RANKS,
  isOneOf,
  MAGIC_KINDS,
  type Class,
  type ClassRank,
  type ClassUpdate,
  type DB_Class,
} from "@/types/class";
import { TextArea, TextInput } from "@/components/ui/inputs";
import Button from "@/components/ui/button";

type PageProps = { params: Promise<{ id: string }> };

type PrereqRow = { parent_class_id: string };

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

  // prerequisites UI state
  const [candidateParents, setCandidateParents] = useState<DB_Class[]>([]);
  const [selectedParentIds, setSelectedParentIds] = useState<string[]>([]);
  const [prereqError, setPrereqError] = useState<string | null>(null);
  const [savingPrereqs, setSavingPrereqs] = useState(false);

  const prereqRules = useMemo(() => {
    if (form.rank === "advanced")
      return { min: 2, max: 2, parentRank: "basic" as const };
    if (form.rank === "mighty")
      return { min: 3, max: 5, parentRank: "advanced" as const };
    return { min: 0, max: 0, parentRank: null };
  }, [form.rank]);

  const prettifyRank = (rank: ClassRank) =>
    rank[0].toUpperCase() + rank.slice(1);

  // Load class + prerequisites + candidates
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      setPrereqError(null);

      const supabase = supabaseBrowser();

      // 1) load class
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

      // 2) load existing prereqs
      const { data: prereqs, error: prereqLoadErr } = await supabase
        .from("class_prerequisites")
        .select("parent_class_id")
        .eq("child_class_id", id);

      if (prereqLoadErr) {
        setPrereqError(prereqLoadErr.message);
      }

      const existingParentIds = (prereqs ?? []).map(
        (r: PrereqRow) => r.parent_class_id,
      );
      setSelectedParentIds(existingParentIds);

      // 3) load candidate parents based on rank
      if (data.rank === "advanced") {
        const { data: basics, error: candErr } = await supabase
          .from("classes")
          .select("*")
          .eq("rank", "basic")
          .order("title", { ascending: true });

        if (candErr) setPrereqError(candErr.message);
        setCandidateParents((basics ?? []) as DB_Class[]);
      } else if (data.rank === "mighty") {
        const { data: adv, error: candErr } = await supabase
          .from("classes")
          .select("*")
          .eq("rank", "advanced")
          .order("title", { ascending: true });

        if (candErr) setPrereqError(candErr.message);
        setCandidateParents((adv ?? []) as DB_Class[]);
      } else {
        setCandidateParents([]);
      }

      setLoading(false);
    };

    load();
  }, [id]);

  const loadCandidatesForRank = async (rank: ClassRank) => {
    const supabase = supabaseBrowser();
    setPrereqError(null);
    setCandidateParents([]);
    setSelectedParentIds([]);

    if (rank === "advanced") {
      const { data, error } = await supabase
        .from("classes")
        .select("*")
        .eq("rank", "basic")
        .order("title", { ascending: true });

      if (error) setPrereqError(error.message);
      setCandidateParents((data ?? []) as DB_Class[]);
      return;
    }

    if (rank === "mighty") {
      const { data, error } = await supabase
        .from("classes")
        .select("*")
        .eq("rank", "advanced")
        .order("title", { ascending: true });

      if (error) setPrereqError(error.message);
      setCandidateParents((data ?? []) as DB_Class[]);
      return;
    }

    // basic
    setCandidateParents([]);
  };

  const toggleParent = (parentId: string) => {
    setPrereqError(null);

    const isSelected = selectedParentIds.includes(parentId);
    if (isSelected) {
      setSelectedParentIds(selectedParentIds.filter((x) => x !== parentId));
      return;
    }

    // enforce max
    if (form.rank !== "basic" && selectedParentIds.length >= prereqRules.max) {
      setPrereqError(`You can select at most ${prereqRules.max}.`);
      return;
    }

    setSelectedParentIds([...selectedParentIds, parentId]);
  };

  const savePrereqs = async () => {
    setPrereqError(null);

    const count = selectedParentIds.length;
    if (form.rank === "advanced" && count !== 2) {
      setPrereqError(
        "Advanced classes must have exactly 2 Basic prerequisites.",
      );
      return;
    }
    if (form.rank === "mighty" && (count < 3 || count > 5)) {
      setPrereqError("Mighty classes must have 3–5 Advanced prerequisites.");
      return;
    }
    if (form.rank === "basic") return;

    setSavingPrereqs(true);
    const supabase = supabaseBrowser();

    // Replace strategy
    const { error: delErr } = await supabase
      .from("class_prerequisites")
      .delete()
      .eq("child_class_id", id);

    if (delErr) {
      setSavingPrereqs(false);
      setPrereqError(delErr.message);
      return;
    }

    const rows = selectedParentIds.map((parentId) => ({
      child_class_id: id,
      parent_class_id: parentId,
    }));

    const { error: insErr } = await supabase
      .from("class_prerequisites")
      .insert(rows);

    setSavingPrereqs(false);

    if (insErr) {
      setPrereqError(insErr.message);
      return;
    }
  };

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

  const prereqHeader =
    form.rank === "advanced"
      ? "Prerequisites (pick exactly 2 Basic classes)"
      : form.rank === "mighty"
        ? "Prerequisites (pick 3-5 Advanced classes)"
        : "Prerequisites";

  const prereqSelectedText =
    form.rank === "advanced"
      ? `${selectedParentIds.length} / 2 selected`
      : form.rank === "mighty"
        ? `${selectedParentIds.length} / 3-5 selected`
        : "";

  return (
    <AdminGuard>
      <AppPageLayout title={`Admin: Edit ${form.title}`}>
        <div className="grid grid-cols-2 gap-12">
          <form onSubmit={save} className="mt-6 space-y-4 w-full">
            <TextInput
              label="Title"
              value={form.title}
              onChange={(e) =>
                setForm((f) => ({ ...f, title: e.target.value }))
              }
              required
              error={null}
            />

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-dnd-ink/80">Rank</label>
                <select
                  value={form.rank}
                  onChange={async (e) => {
                    const value = e.target.value;
                    if (!isOneOf(value, CLASS_RANKS)) return;

                    // rank change = reset prereqs and reload candidates
                    setForm((f) => ({ ...f, rank: value }));
                    await loadCandidatesForRank(value);
                  }}
                  className="w-full rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-dnd-ink outline-none focus:border-red-900"
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
                  className="w-full rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-dnd-ink outline-none focus:border-red-900"
                >
                  {MAGIC_KINDS.map((kind) => (
                    <option key={kind} value={kind}>
                      {kind}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <TextInput
                  label="Color scheme (optional)"
                  value={form.color_scheme ?? ""}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      color_scheme: e.target.value.trim()
                        ? e.target.value
                        : null,
                    }))
                  }
                  error={null}
                />
              </div>
            </div>

            <TextArea
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

          {/* ------------------------------ */}
          {/* Prerequisites */}
          {/* ------------------------------ */}
          {form.rank !== "basic" && (
            <section className="mt-10 max-w-2xl space-y-3">
              <div className="flex items-end justify-between">
                <div>
                  <h3>{prereqHeader}</h3>

                  <p className="text-sm text-dnd-ink/70">
                    {prereqSelectedText}
                  </p>
                </div>

                <Button
                  label={savingPrereqs ? "Saving…" : "Save prerequisites"}
                  onClick={savePrereqs}
                  disabled={
                    savingPrereqs ||
                    (form.rank === "advanced" &&
                      selectedParentIds.length !== 2) ||
                    (form.rank === "mighty" &&
                      (selectedParentIds.length < 3 ||
                        selectedParentIds.length > 5))
                  }
                />
              </div>

              {prereqError && (
                <div className="rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-sm text-red-900">
                  {prereqError}
                </div>
              )}

              {candidateParents.length === 0 ? (
                <div className="rounded-xl border-2 border-red-900/20 bg-white/50 p-4 text-sm text-dnd-ink/70">
                  No candidate parent classes found. Create some{" "}
                  {prereqRules.parentRank} classes first.
                </div>
              ) : (
                <div className="grid gap-2 sm:grid-cols-2">
                  {candidateParents.map((c) => {
                    const checked = selectedParentIds.includes(c.id);

                    return (
                      <label
                        key={c.id}
                        className="flex items-center gap-3 rounded-xl border-2 border-red-900/20 bg-white/50 p-3 hover:bg-white/70"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleParent(c.id)}
                          className="h-4 w-4 accent-red-900"
                        />
                        <span className="font-serif text-dnd-ink">
                          {c.title}
                        </span>
                        <span className="ml-auto text-xs text-dnd-ink/60">
                          {prettifyRank(c.rank)}
                        </span>
                      </label>
                    );
                  })}
                </div>
              )}
            </section>
          )}
        </div>
      </AppPageLayout>
    </AdminGuard>
  );
};

export default AdminEditClassPage;
