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
        <p
          role="alert"
          className="mb-6 p-3 text-sm bg-dnd-accent-red/40 border-l-4 border-dnd-red"
        >
          That link is invalid or has expired. Ask for a new one below.
        </p>
      )}
      <ForgotForm />
    </AuthShell>
  );
};

export default ForgotPasswordPage;
