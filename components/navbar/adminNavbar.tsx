"use client";

import { supabaseBrowser } from "@/lib/supabase/browser";
import Link from "next/link";
import { useEffect } from "react";

const AdminNavbar: React.FC = () => {
  useEffect(() => {
    const check = async () => {
      const supabase = supabaseBrowser();

      const { data: auth } = await supabase.auth.getUser();
      const user = auth.user;

      if (!user) {
        return;
      }

      // fetch role from profiles
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single<{ role: string }>();

      if (error || profile?.role !== "admin") {
        return;
      }
    };

    check();
  }, []);

  return (
    <nav className="absolute h-8 z-10 top-0 left-0 w-full px-6 flex items-center bg-dnd-underline border-b-2 border-b-dnd-ink/30 text-dnd-ink/80 text-sm font-serif">
      <strong className="mr-6">Congrats! You are admin!</strong>
      <Link href="/app/admin" className="mr-6 hover:underline">
        Admin menu
      </Link>
    </nav>
  );
};
export default AdminNavbar;
