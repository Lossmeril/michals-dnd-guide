"use client";

import { useEffect, useState } from "react";

import { supabaseBrowser } from "@/lib/supabase/browser";
import type { DB_Class } from "@/types/class";

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

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// MAKE NEW CLASS MODAL
// --------------------------------------------------------------------
// --------------------------------------------------------------------

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// REUSABLE STANDARDIZED CLASS TABLE
// --------------------------------------------------------------------
// --------------------------------------------------------------------
const ClassTable = ({
  classes,
  title,
}: {
  classes: DB_Class[];
  title?: string;
}) => {
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
        {classes.map((c) => (
          <TableRow key={c.id}>
            <TableCell>
              <div className="overflow-hidden bg-white/50 w-16 h-16">
                {c.image_url?.trim() ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={c.image_url}
                    alt={c.title}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-sm text-[#2b1d0e]/50">
                    No Image
                  </div>
                )}
              </div>
            </TableCell>

            <TableCell className="align-center">
              <div className="font-serif text-dnd-ink">{c.title}</div>
            </TableCell>
            <TableCell className="align-center text-sm text-dnd-ink/80">
              {c.rank[0].toUpperCase() + c.rank.slice(1)}
            </TableCell>
            <TableCell className="align-center text-sm text-dnd-ink/80">
              {c.is_magic === "semi"
                ? "Pseudo"
                : c.is_magic === "true"
                  ? "Yes"
                  : "No"}
            </TableCell>

            <TableCell className="align-center">
              <Button
                href={`/app/admin/classes/${c.id}/edit`}
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

  const basicClasses = classes.filter((c) => c.rank === "basic");
  const advancedClasses = classes.filter((c) => c.rank === "advanced");
  const mightyClasses = classes.filter((c) => c.rank === "mighty");

  return (
    <AdminGuard>
      <AdminAppPageLayout title="Admin: Classes">
        <div className="mt-4 flex items-center justify-start gap-4">
          <Button label="New class" href="/app/admin/classes/new" />
          <Button label="Back" mode="inverted" href="/app/admin" />
        </div>

        {loading && <p className="mt-6 text-sm opacity-70">Loading…</p>}

        {error && (
          <div className="mt-6 rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-sm text-red-900">
            {error}
          </div>
        )}

        <section className="mt-6">
          <ClassTable classes={basicClasses} title="Basic Classes" />
        </section>

        <section className="mt-6">
          <ClassTable classes={advancedClasses} title="Advanced Classes" />
        </section>

        <section className="mt-6">
          <ClassTable classes={mightyClasses} title="Mighty Classes" />
        </section>
      </AdminAppPageLayout>
    </AdminGuard>
  );
};

export default AdminClassesPage;
