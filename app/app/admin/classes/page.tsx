"use client";

import { useEffect, useState } from "react";

import { supabaseBrowser } from "@/lib/supabase/browser";
import {
  Class,
  CLASS_RANKS,
  ClassInsert,
  ClassRankEnum,
  isOneOf,
  MagicKindEnum,
  type ClassRank,
  type DB_Class,
} from "@/types/class";

import AdminGuard from "@/components/auth/adminGuard";

import { AdminAppPageLayout } from "@/components/layouts/base";

import Button from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import CreateModal from "@/components/ui/modals/createModal";
import { ClassPrerequisiteRow } from "@/types/classPrereq";
import fetchPrerequisities from "@/lib/prerequisitiesFetch";

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// MAKE NEW CLASS MODAL
// --------------------------------------------------------------------
// --------------------------------------------------------------------
interface MakeNewClassModalProps {
  open: boolean;

  name: string;
  rank: ClassRank;
  setName: (v: string) => void;
  setRank: (v: ClassRank) => void;

  confirmLabel?: string;
  cancelLabel?: string;

  onCancel: () => void;
}

const MakeNewClassModal: React.FC<MakeNewClassModalProps> = ({
  open,
  name,
  rank,
  setName,
  setRank,
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

  const initialClass: Class = {
    title: name,
    rank: rank,
    is_magic: "false",
    description: "",
    short_desc: "",
    color_scheme: null,
    image_url: null,
  };
  const isNameInputted = name.trim().length > 0;

  const create = async (newClass: Class) => {
    setSaving(true);

    const supabase = supabaseBrowser();
    const { data: auth } = await supabase.auth.getUser();
    const user = auth.user;

    // Check authentication
    if (!user) {
      setSaving(false);
      router.replace("/login?next=/app/admin/classes/new");
      return;
    }

    const payload: ClassInsert = {
      ...newClass,
      title: newClass.title.trim(),
    };

    const { data, error: insertError } = await supabase
      .from("classes")
      .insert(payload)
      .select("id")
      .single();

    setSaving(false);

    if (insertError || !data) return;

    onCancel();
    router.push(`/app/admin/classes/${data.id}/edit`);
  };

  return (
    <CreateModal
      open={open}
      title="Create a new class"
      onConfirm={() => create(initialClass)}
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

      <div className="space-y-2">
        <label className="text-sm text-dnd-ink/80">Rank</label>
        <select
          value={rank}
          onChange={async (e) => {
            const value = e.target.value;
            if (!isOneOf(value, CLASS_RANKS)) return;

            // rank change = reset prereqs and reload candidates
            setRank(value);
          }}
          className="w-full rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-dnd-ink outline-none focus:border-red-900"
        >
          {CLASS_RANKS.map((rank) => (
            <option key={rank} value={rank}>
              {ClassRankEnum[rank]}
            </option>
          ))}
        </select>
      </div>
    </CreateModal>
  );
};

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// REUSABLE STANDARDIZED CLASS TABLE
// --------------------------------------------------------------------
// --------------------------------------------------------------------
const ClassTable = ({
  classes,
  rank,
  title,
  prerequisities,
}: {
  classes: DB_Class[];
  rank?: ClassRank;
  title?: string;
  prerequisities?: ClassPrerequisiteRow[];
}) => {
  const displayClasses = rank
    ? classes.filter((c) => c.rank === rank)
    : classes;

  return (
    <Table title={title}>
      <TableHead
        titles={[
          { title: "Image", width: "5%" },
          { title: "Name", width: "10%" },
          { title: "Rank", width: "25%" },
          { title: "Magic", width: "50%" },
          { title: "Edit", width: "10%" },
        ]}
      ></TableHead>

      <TableBody>
        {displayClasses.map((displayClasses) => (
          <TableRow key={displayClasses.id}>
            <TableCell>
              <div className="overflow-hidden w-16 h-16 border-r border-dnd-ink/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    displayClasses.image_url?.trim()
                      ? displayClasses.image_url
                      : "https://placehold.co/80?text=No%20Image%20:("
                  }
                  alt={displayClasses.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </TableCell>

            <TableCell className="align-center">
              <div className="font-serif text-dnd-ink">
                {displayClasses.title}
              </div>
              <p className="text-[10px] text-dnd-ink/30">
                {fetchPrerequisities({
                  classes,
                  prerequisities: prerequisities || [],
                  child_class_id: displayClasses.id,
                })
                  .map((prereq) => `${prereq.title}`)
                  .join(" + ")}
              </p>
            </TableCell>
            <TableCell className="align-center text-sm text-dnd-ink/80">
              {ClassRankEnum[displayClasses.rank]}
            </TableCell>
            <TableCell className="align-center text-sm text-dnd-ink/80">
              {MagicKindEnum[displayClasses.is_magic]}
            </TableCell>

            <TableCell className="align-center">
              <Button
                href={`/app/admin/classes/${displayClasses.id}/edit`}
                label="Edit"
                mode="inverted"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// ADMIN-ACCESSIBLE CLASSES PAGE
// --------------------------------------------------------------------
// --------------------------------------------------------------------
const AdminClassesPage = () => {
  const [classes, setClasses] = useState<DB_Class[]>([]);
  const [prerequisities, setPrerequisities] = useState<ClassPrerequisiteRow[]>(
    [],
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // New class modal state and data
  const [showNewClassModal, setShowNewClassModal] = useState(false);
  const [newClassName, setNewClassName] = useState("");
  const [newClassRank, setNewClassRank] = useState<ClassRank>("basic");

  const loadClasses = async () => {
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

  const loadPrerequisities = async () => {
    const supabase = supabaseBrowser();
    const { data, error } = await supabase
      .from("class_prerequisites")
      .select("*");

    if (error) {
      console.error("Error loading class prerequisites:", error.message);
    } else {
      setPrerequisities(data ?? []);
    }
  };

  useEffect(() => {
    loadPrerequisities();
    loadClasses();
  }, []);

  return (
    <AdminGuard>
      <AdminAppPageLayout title="Admin: Classes">
        <div className="my-4">
          <Button
            label="Add Class"
            onClick={() => setShowNewClassModal(true)}
            mode="default"
          />
        </div>

        {/* Make New Class Modal */}
        <MakeNewClassModal
          open={showNewClassModal}
          name={newClassName}
          setName={setNewClassName}
          onCancel={() => {
            setShowNewClassModal(false);
            setNewClassName("");
          }}
          rank={newClassRank}
          setRank={setNewClassRank}
        />

        {loading && <p className="mt-6 text-sm opacity-70">Loading…</p>}

        {error && (
          <div className="mt-6 rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-sm text-red-900">
            {error}
          </div>
        )}

        <section className="mt-6">
          <ClassTable classes={classes} title="Basic Classes" rank="basic" />
        </section>

        <section className="mt-6">
          <ClassTable
            classes={classes}
            title="Advanced Classes"
            rank="advanced"
            prerequisities={prerequisities}
          />
        </section>

        <section className="mt-6">
          <ClassTable
            classes={classes}
            title="Mighty Classes"
            rank="mighty"
            prerequisities={prerequisities}
          />
        </section>
      </AdminAppPageLayout>
    </AdminGuard>
  );
};

export default AdminClassesPage;
