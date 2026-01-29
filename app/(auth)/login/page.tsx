import { Suspense } from "react";
import LoginClient from "./loginClient";

const LoginPage = () => {
  return (
    <Suspense fallback={<div className="p-6">Loading…</div>}>
      <LoginClient />
    </Suspense>
  );
};

export default LoginPage;
