import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import { getDict } from "@/lib/i18n/server";
import AuthShell, { GuardStory } from "../(auth)/authShell";
import { ResetForm } from "./resetForm";

// Reached from the reset email: /auth/confirm has already logged the user in
const ResetPasswordPage = async () => {
  const user = await getUser();
  if (!user) redirect("/forgot-password?error=expired");
  const t = (await getDict()).account.reset;

  return (
    <AuthShell
      title={t.title}
      switchText={t.switchText}
      switchLabel={t.switchLabel}
      switchHref="/"
      story={<GuardStory lines={t.story} />}
    >
      <p className="text-sm mb-4">
        {t.loggedInAs} <strong>{user.email}</strong>
      </p>
      <ResetForm />
    </AuthShell>
  );
};

export default ResetPasswordPage;
