import StoryBox from "@/components/ui/storyBox";
import AuthShell from "../authShell";
import { SignupForm } from "./signup-form";

const SignUpPage = () => (
  <AuthShell
    title="Create an account"
    switchText="Been here before?"
    switchLabel="Log in instead"
    switchHref="/login"
    story={
      <StoryBox>
        <p>
          &ldquo;Never seen you before.&rdquo; The guard pulls a ledger from
          under the bench and licks a pencil.
        </p>
        <p>
          &ldquo;Name. Where to send word. And a password you won&apos;t forget
          after three ales. Twice, so I know you mean it.&rdquo;
        </p>
      </StoryBox>
    }
  >
    <SignupForm />
  </AuthShell>
);

export default SignUpPage;
