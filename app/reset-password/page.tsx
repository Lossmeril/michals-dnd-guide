import { redirect } from "next/navigation";
import StoryBox from "@/components/ui/storyBox";
import { getUser } from "@/lib/auth";
import AuthShell from "../(auth)/authShell";
import { ResetForm } from "./resetForm";

// Reached from the reset email: /auth/confirm has already logged the user in
const ResetPasswordPage = async () => {
  const user = await getUser();
  if (!user) redirect("/forgot-password?error=expired");

  return (
    <AuthShell
      title="Set a new password"
      switchText="Changed your mind?"
      switchLabel="Keep the old one"
      switchHref="/"
      story={
        <StoryBox>
          <p>
            The guard hands you a fresh sheet of parchment and a quill that has
            seen better days.
          </p>
          <p>&ldquo;Something you&apos;ll remember this time, eh?&rdquo;</p>
        </StoryBox>
      }
    >
      <p className="text-sm mb-4">
        Logged in as <strong>{user.email}</strong>.
      </p>
      <ResetForm />
    </AuthShell>
  );
};

export default ResetPasswordPage;
