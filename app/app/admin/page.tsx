"use client";

import AdminGuard from "@/components/auth/adminGuard";
import { AdminAppPageLayout } from "@/components/layouts/base";
import Card from "@/components/ui/card";

const AdminHomePage = () => {
  return (
    <AdminGuard>
      <AdminAppPageLayout title="Admin">
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Classes"
            description="Create and edit basic, advanced and mighty classes."
            href="/app/admin/classes"
          />
          <Card
            title="Perks"
            description="Manage perks and requirements. (Soon)"
            href="/app/admin/perks"
            className="opacity-70 pointer-events-none"
          />
          <Card
            title="Skills"
            description="Manage skill groups and items. (Soon)"
            href="/app/admin/skills"
            className="opacity-70 pointer-events-none"
          />
        </div>
      </AdminAppPageLayout>
    </AdminGuard>
  );
};

export default AdminHomePage;
