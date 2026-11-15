import { getDict } from "@/lib/i18n/server";
import AuthShell, { GuardStory } from "../authShell";
import { SignupForm } from "./signup-form";

const SignUpPage = async () => {
  const t = (await getDict()).account.signup;
  return (
  <AuthShell
    title={t.title}
    switchText={t.switchText}
    switchLabel={t.switchLabel}
    switchHref="/login"
    story={<GuardStory lines={t.story} />}
  >
    <SignupForm />
  </AuthShell>
  );
};

export default SignUpPage;
