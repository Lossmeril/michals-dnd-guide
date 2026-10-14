import Alert from "@/components/ui/alert";
import StoryBox from "@/components/ui/storyBox";
import AuthShell from "../authShell";
import { LoginForm } from "./login-form";

const LoginPage = async ({ searchParams }: PageProps<"/login">) => {
  const { error } = await searchParams;

  return (
    <AuthShell
      title="Log in"
      switchText="New around here?"
      switchLabel="Create an account"
      switchHref="/signup"
      story={
        <StoryBox>
          <p>
            A guard steps out of the gatehouse and plants a spear in the dirt
            in front of you.
          </p>
          <p>
            &ldquo;Halt. Nobody gets in without papers. Seen you before, have
            I? Let&apos;s have them, then.&rdquo;
          </p>
        </StoryBox>
      }
    >
      {error === "confirm" && (
        <Alert kind="danger">
          That link is invalid or has expired. Log in to get a new one sent.
        </Alert>
      )}
      <LoginForm />
    </AuthShell>
  );
};

export default LoginPage;
