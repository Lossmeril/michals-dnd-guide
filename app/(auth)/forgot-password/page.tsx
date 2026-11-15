import Alert from "@/components/ui/alert";
import { getDict } from "@/lib/i18n/server";
import AuthShell, { GuardStory } from "../authShell";
import { ForgotForm } from "./forgotForm";

const ForgotPasswordPage = async ({
  searchParams,
}: PageProps<"/forgot-password">) => {
  const { error } = await searchParams;
  const t = (await getDict()).account.forgot;

  return (
    <AuthShell
      title={t.title}
      switchText={t.switchText}
      switchLabel={t.switchLabel}
      switchHref="/login"
      story={<GuardStory lines={t.story} />}
    >
      {error === "expired" && (
        <Alert kind="danger">{t.expired}</Alert>
      )}
      <ForgotForm />
    </AuthShell>
  );
};

export default ForgotPasswordPage;
