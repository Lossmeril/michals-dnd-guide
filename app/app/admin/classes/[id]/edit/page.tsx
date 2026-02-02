"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminGuard from "@/components/auth/adminGuard";
import { AppPageLayout } from "@/components/layouts/base";
import { supabaseBrowser } from "@/lib/supabase/browser";
import type { Class, ClassUpdate, DB_Class } from "@/types/class";

import ClassEditorShell from "@/components/editors/classCreator";

type PageProps = { params: Promise<{ id: string }> };
type PrereqRow = { parent_class_id: string };

export default function AdminEditClassPage({ params }: PageProps) {
  const router = useRouter();
  const { id: classId } = use(params);

  const [initialClass, setInitialClass] = useState<Class>({
    rank: "basic",
    title: "",
    short_desc: null,
    description: null,
    image_url: null,
    is_magic: "false",
    color_scheme: null,
  });

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // prerequisites UI state (page owns this)
  const [candidateParents, setCandidateParents] = useState<DB_Class[]>([]);
  const [selectedParentIds, setSelectedParentIds] = useState<string[]>([]);
  const [prereqError, setPrereqError] = useState<string | null>(null);
  const [savingPrereqs, setSavingPrereqs] = useState(false);

  // initial load: class + prereqs + candidates
  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setNotFound(false);
      setPrereqError(null);

      const supabase = supabaseBrowser();

      // 1) class
      const { data, error } = await supabase
        .from("classes")
        .select("*")
        .eq("id", classId)
        .single<DB_Class>();

      if (error || !data) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      setInitialClass({
        rank: data.rank,
        title: data.title,
        short_desc: data.short_desc,
        description: data.description,
        image_url: data.image_url,
        is_magic: data.is_magic,
        color_scheme: data.color_scheme,
      });

      // 2) existing prereqs
      const { data: prereqs, error: prereqLoadErr } = await supabase
        .from("class_prerequisites")
        .select("parent_class_id")
        .eq("child_class_id", classId);

      if (prereqLoadErr) setPrereqError(prereqLoadErr.message);

      const existingParentIds = (prereqs ?? []).map(
        (r: PrereqRow) => r.parent_class_id,
      );
      setSelectedParentIds(existingParentIds);

      // 3) candidate parents
      const { data: candidates, error: candidatesErr } = await supabase
        .from("classes")
        .select("*")
        .lt("rank", data.rank === "mighty" ? "mighty" : "advanced")
        .order("title", { ascending: true });

      if (candidatesErr) {
        setPrereqError(candidatesErr.message);
      } else {
        setCandidateParents(
          data.rank === "mighty"
            ? candidates.filter((c) => c.rank === "advanced")
            : (candidates ?? []),
        );
      }

      setLoading(false);
    };

    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classId]);

  const savePrereqs = async () => {
    setPrereqError(null);

    // rank-dependent validation
    const count = selectedParentIds.length;
    if (initialClass.rank === "advanced" && count !== 2) {
      setPrereqError(
        "Advanced classes must have exactly 2 Basic prerequisites.",
      );
      return;
    }
    if (initialClass.rank === "mighty" && (count < 3 || count > 5)) {
      setPrereqError("Mighty classes must have 3–5 Advanced prerequisites.");
      return;
    }
    if (initialClass.rank === "basic") return;

    setSavingPrereqs(true);
    const supabase = supabaseBrowser();

    const { error: delErr } = await supabase
      .from("class_prerequisites")
      .delete()
      .eq("child_class_id", classId);

    if (delErr) {
      setSavingPrereqs(false);
      setPrereqError(delErr.message);
      return;
    }

    const rows = selectedParentIds.map((parentId) => ({
      child_class_id: classId,
      parent_class_id: parentId,
    }));

    const { error: insErr } = await supabase
      .from("class_prerequisites")
      .insert(rows);

    setSavingPrereqs(false);
    if (insErr) setPrereqError(insErr.message);
  };

  const saveClass = async (c: Class) => {
    const supabase = supabaseBrowser();

    const payload: ClassUpdate = {
      ...c,
      title: c.title.trim(),
      short_desc: c.short_desc?.trim() ? c.short_desc : null,
      description: c.description?.trim() ? c.description : null,
      image_url: c.image_url?.trim() ? c.image_url : null,
      color_scheme: c.color_scheme?.trim() ? c.color_scheme : null,
      updated_at: new Date().toISOString(),
    };

    const { error } = await supabase
      .from("classes")
      .update(payload)
      .eq("id", classId);
    if (error) throw new Error(error.message);

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

  if (notFound) {
    return (
      <AdminGuard>
        <AppPageLayout title="Admin: Edit Class">
          <div className="text-red-900">
            <strong>Error:</strong> Class not found (or you don&apos;t have
            access).
          </div>
        </AppPageLayout>
      </AdminGuard>
    );
  }

  return (
    <AdminGuard>
      <AppPageLayout title={`Admin: Edit ${initialClass.title || "Class"}`}>
        <ClassEditorShell
          classId={classId}
          initialClass={initialClass}
          onSave={saveClass}
          onCancel={() => router.push("/app/admin/classes")}
          candidateParents={candidateParents}
          selectedParentIds={selectedParentIds}
          setSelectedParentIds={setSelectedParentIds}
          savePrereqs={savePrereqs}
          savingPrereqs={savingPrereqs}
          prereqError={prereqError}
          setPrereqError={setPrereqError}
        />
      </AppPageLayout>
    </AdminGuard>
  );
}
