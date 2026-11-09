import Alert from "@/components/ui/alert";
import StoryBox from "@/components/ui/storyBox";
import AuthShell from "../authShell";
import { ForgotForm } from "./forgotForm";

const ForgotPasswordPage = async ({
  searchParams,
}: PageProps<"/forgot-password">) => {
  const { error } = await searchParams;

  return (
    <AuthShell
      title="Forgot your password?"
      switchText="Remembered it after all?"
      switchLabel="Log in"
      switchHref="/login"
      story={
        <StoryBox>
          <p>The guard squints at you, then at his list.</p>
          <p>
            &ldquo;Lost your papers? Happens to the best of us. Mostly to the
            drunk ones. Tell me where you live and I&apos;ll send word.&rdquo;
          </p>
        </StoryBox>
      }
    >
      {error === "expired" && (
        <Alert kind="danger">
          That link is invalid or has expired. Ask for a new one below.
        </Alert>
      )}
      <ForgotForm />
    </AuthShell>
  );
};

export default ForgotPasswordPage;
