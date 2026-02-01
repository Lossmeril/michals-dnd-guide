// app/app/layout.tsx
import AuthGuard from "@/components/auth/authGuard";
import AdminNavbar from "@/components/navbar/adminNavbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <main className="w-full min-h-screen relative">
        <AdminNavbar />
        {children}
      </main>
    </AuthGuard>
  );
}
