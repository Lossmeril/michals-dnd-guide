import { twMerge } from "tailwind-merge";

/**
 * A bar that stays in view while the page scrolls: the editor's section
 * links on top, save buttons at the bottom
 */
const StickyBar: React.FC<{
  position: "top" | "bottom";
  className?: string;
  children: React.ReactNode;
}> = ({ position, className, children }) => (
  <div
    className={twMerge(
      "sticky -mx-4 px-4 py-3 bg-dnd-bg/95 backdrop-blur border-dnd-gold flex flex-wrap items-center justify-between gap-x-6 gap-y-3",
      position === "top" ? "top-0 z-30 mb-8 border-b" : "bottom-0 z-20 mt-8 border-t",
      className,
    )}
  >
    {children}
  </div>
);

export default StickyBar;
