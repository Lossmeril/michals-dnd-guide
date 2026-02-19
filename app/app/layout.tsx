"use client";

import React from "react";

import { AuthGuard } from "@/components/guards/authGuard";

const GuardedAppLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthGuard>{children}</AuthGuard>;
};

export default GuardedAppLayout;
