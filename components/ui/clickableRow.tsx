"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

/** A table row that opens a page when clicked anywhere */
const ClickableRow: React.FC<{
  href: string;
  className?: string;
  children: React.ReactNode;
}> = ({ href, className, children }) => {
  const router = useRouter();
  return (
    <tr
      onClick={(e) => {
        // The first cell's own link handles its clicks
        if ((e.target as HTMLElement).closest("a")) return;
        router.push(href);
      }}
      className={twMerge("cursor-pointer hover:bg-dnd-accent-yellow", className)}
    >
      {children}
    </tr>
  );
};

export default ClickableRow;
