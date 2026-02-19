// =============================================================================
// REUSABLE COMPONENTS FOR ALL EDITORS
// =============================================================================

"use client";

import React from "react";

type EditorSectionProps = {
  title?: string;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
};

function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

// -------------------------------------
// Section card with internal 12-col grid
// -------------------------------------

const EditorSection: React.FC<EditorSectionProps> = ({
  title,
  description,
  children,
  className,
  headerClassName,
  bodyClassName,
}) => {
  return (
    <section
      className={cx(
        "rounded-lg border-1 border-dnd-ink/20 p-5 w-full",
        className,
      )}
    >
      {(title || description) && (
        <header className={cx("mb-4", headerClassName)}>
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          {description && (
            <div className="mt-1 text-sm opacity-80">{description}</div>
          )}
        </header>
      )}

      <div className={cx("grid grid-cols-12 gap-4", bodyClassName)}>
        {children}
      </div>
    </section>
  );
};

export default EditorSection;
