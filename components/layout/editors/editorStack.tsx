// =============================================================================
// A SIMPLE VERTICAL STACK COMPONENT TO ORGANIZE SECTIONS IN THE EDITORS
// =============================================================================

"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

// -------------------------------------
// A simple vertical stack for sections
// -------------------------------------

function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

const EditorStack: React.FC<Props> = ({ children, className }) => {
  return <div className={cx("flex flex-col gap-4", className)}>{children}</div>;
};

export default EditorStack;
