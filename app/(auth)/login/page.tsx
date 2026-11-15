import Alert from "@/components/ui/alert";
import { getDict } from "@/lib/i18n/server";
import AuthShell, { GuardStory } from "../authShell";
import { LoginForm } from "./login-form";

const LoginPage = async ({ searchParams }: PageProps<"/login">) => {
  const { error } = await searchParams;
  const t = (await getDict()).account.login;

  return (
    <AuthShell
      title={t.title}
      switchText={t.switchText}
      switchLabel={t.switchLabel}
      switchHref="/signup"
      story={<GuardStory lines={t.story} />}
    >
      {error === "confirm" && (
        <Alert kind="danger">{t.expired}</Alert>
      )}
      <LoginForm />
    </AuthShell>
  );
};

export default LoginPage;
