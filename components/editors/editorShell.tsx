// =============================================================================
// AN EMPTY SHELL COMPONENT TO PROVIDE A CONSISTENT LAYOUT AND FUNCTIONALITY FOR ALL EDITORS
// =============================================================================

"use client";

import React from "react";
import {
  Container,
  Grid,
  GridContent,
} from "@/components/layout/layoutPrimitives";

interface EditorShellProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

interface RegionProps {
  children: React.ReactNode;
  className?: string;
}

interface EditorSidebarProps extends RegionProps {
  imageUrl?: string;
}

function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

// -------------------------------------
// Shell
// -------------------------------------

const EditorShellRoot: React.FC<EditorShellProps> = ({
  children,
  className,
  contentClassName,
}) => {
  return (
    <Container>
      <Grid className={cx("pt-10", className)}>
        <GridContent className={contentClassName}>{children}</GridContent>
      </Grid>
    </Container>
  );
};

// -------------------------------------
// Regions
// -------------------------------------

const EditorShellGrid: React.FC<RegionProps> = ({ children, className }) => {
  return (
    <div className={cx("grid grid-cols-12 gap-4 items-start", className)}>
      {children}
    </div>
  );
};

const EditorShellSidebar: React.FC<EditorSidebarProps> = ({
  children,
  className,
  imageUrl,
}) => {
  return (
    <aside
      className={cx(
        "col-span-12 xl:col-span-3 rounded-lg overflow-hidden border-1 border-dnd-ink/20 w-full",
        className,
      )}
    >
      {imageUrl && (
        <div
          className="w-full h-48 bg-cover bg-center mb-4"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}
      <div className="p-4">{children}</div>
    </aside>
  );
};

const EditorShellMain: React.FC<RegionProps> = ({ children, className }) => {
  return (
    <section className={cx("col-span-12 xl:col-span-9 w-full", className)}>
      {children}
    </section>
  );
};

// Optional: a consistent place for page-level actions inside sidebar/main.
// (You can later make this sticky if you want.)
const EditorShellActions: React.FC<RegionProps> = ({ children, className }) => {
  return (
    <div className={cx("mt-4 flex flex-row flex-wrap gap-2", className)}>
      {children}
    </div>
  );
};

// -------------------------------------
// Export as a compound component
// -------------------------------------

export const EditorShell = Object.assign(EditorShellRoot, {
  Grid: EditorShellGrid,
  Sidebar: EditorShellSidebar,
  Main: EditorShellMain,
  Actions: EditorShellActions,
});
