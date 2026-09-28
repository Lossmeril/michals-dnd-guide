import Link from "next/link";
import { LoginForm } from "./login-form";

const LoginPage = async ({ searchParams }: PageProps<"/login">) => {
  const { error } = await searchParams;

  return (
    <div>
      <h1>Login Page</h1>
      <p>
        Don&apos;t have an account? <Link href="/signup">Sign up</Link>
      </p>
      {error === "confirm" && (
        <p role="alert">
          The confirmation link is invalid or has expired. Please try again.
        </p>
      )}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
