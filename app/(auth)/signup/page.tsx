import Link from "next/link";

import { SignupForm } from "./signup-form";

const SignUpPage = () => {
  return (
    <div>
      <h1>Sign Up Page</h1>
      <p>
        Already have an account? <Link href="/login">Log in</Link>
      </p>

      <SignupForm />
    </div>
  );
};

export default SignUpPage;
