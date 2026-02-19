"use client";

import Button from "@/components/ui/button";

const AppHomePage = () => {
  return (
    <main className="min-h-screen py-40">
      <Button label={"To Dashboard"} mode="default" href="/app" />
    </main>
  );
};

export default AppHomePage;
