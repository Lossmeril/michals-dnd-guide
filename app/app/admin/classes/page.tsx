"use client";

import { useEffect, useState } from "react";
import AdminGuard from "@/components/auth/adminGuard";
import { AdminAppPageLayout } from "@/components/layouts/base";
import { supabaseBrowser } from "@/lib/supabase/browser";
import type { DB_Class } from "@/types/class";

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

  const basicClasses = classes.filter((c) => c.rank === "basic");
  const advancedClasses = classes.filter((c) => c.rank === "advanced");
  const mightyClasses = classes.filter((c) => c.rank === "mighty");

  return (
    <AdminGuard>
      <AdminAppPageLayout title="Admin: Classes">
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

        <section className="mt-6">
          <h3>Basic Classes</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-red-900 p-2 text-left">
                <th className="w-20">Image</th>
                <th>Name</th>
                <th className="w-44">Rank</th>
                <th className="w-44">Magic</th>
                <th className="w-28">Edit</th>
              </tr>
            </thead>

            <tbody>
              {basicClasses.map((c) => (
                <tr
                  key={c.id}
                  className="w-full even:bg-[#F5EBD1] odd:bg-transparent p-2"
                >
                  <td>
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
                  </td>

                  <td className="align-center">
                    <div className="font-serif text-dnd-ink">{c.title}</div>
                  </td>

                  <td className="align-center text-sm text-dnd-ink/80">
                    {c.rank[0].toUpperCase() + c.rank.slice(1)}
                  </td>
                  <td className="align-center text-sm text-dnd-ink/80">
                    {c.is_magic === "semi"
                      ? "Pseudo"
                      : c.is_magic === "true"
                        ? "Yes"
                        : "No"}
                  </td>

                  <td className="align-center">
                    <Button
                      href={`/app/admin/classes/${c.id}/edit`}
                      label="Edit"
                      mode="inverted"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mt-6">
          <h3>Advanced Classes</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-red-900 p-2 text-left">
                <th className="w-20">Image</th>
                <th>Name</th>
                <th className="w-44">Rank</th>
                <th className="w-44">Magic</th>
                <th className="w-28">Edit</th>
              </tr>
            </thead>

            <tbody>
              {advancedClasses.map((c) => (
                <tr
                  key={c.id}
                  className="w-full even:bg-[#F5EBD1] odd:bg-transparent p-2"
                >
                  <td>
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
                  </td>

                  <td className="align-center">
                    <div className="font-serif text-dnd-ink">{c.title}</div>
                  </td>

                  <td className="align-center text-sm text-dnd-ink/80">
                    {c.rank[0].toUpperCase() + c.rank.slice(1)}
                  </td>
                  <td className="align-center text-sm text-dnd-ink/80">
                    {c.is_magic === "semi"
                      ? "Pseudo"
                      : c.is_magic === "true"
                        ? "Yes"
                        : "No"}
                  </td>

                  <td className="align-center">
                    <Button
                      href={`/app/admin/classes/${c.id}/edit`}
                      label="Edit"
                      mode="inverted"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mt-6">
          <h3>Mighty Classes</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-red-900 p-2 text-left">
                <th className="w-20">Image</th>
                <th>Name</th>
                <th className="w-44">Rank</th>
                <th className="w-44">Magic</th>
                <th className="w-28">Edit</th>
              </tr>
            </thead>

            <tbody>
              {mightyClasses.map((c) => (
                <tr
                  key={c.id}
                  className="w-full even:bg-[#F5EBD1] odd:bg-transparent p-2"
                >
                  <td>
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
                  </td>

                  <td className="align-center">
                    <div className="font-serif text-dnd-ink">{c.title}</div>
                  </td>

                  <td className="align-center text-sm text-dnd-ink/80">
                    {c.rank[0].toUpperCase() + c.rank.slice(1)}
                  </td>
                  <td className="align-center text-sm text-dnd-ink/80">
                    {c.is_magic === "semi"
                      ? "Pseudo"
                      : c.is_magic === "true"
                        ? "Yes"
                        : "No"}
                  </td>

                  <td className="align-center">
                    <Button
                      href={`/app/admin/classes/${c.id}/edit`}
                      label="Edit"
                      mode="inverted"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </AdminAppPageLayout>
    </AdminGuard>
  );
};

export default AdminClassesPage;
