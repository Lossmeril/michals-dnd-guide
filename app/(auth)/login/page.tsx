import Link from "next/link";
import { LoginForm } from "./login-form";
import { Heading } from "@/components/ui/typography";

const LoginPage = async ({ searchParams }: PageProps<"/login">) => {
  const { error } = await searchParams;

  return (
    <div>
      <Heading level={1}>Login Page</Heading>
      <p>
        Don&apos;t have an account?{" "}
        <Link className="link" href="/signup">
          Sign up
        </Link>
        .
      </p>
      {error === "confirm" && (
        <p role="alert">
          The confirmation link is invalid or has expired. Please try again.
        </p>
      )}

      <div className="mt-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
