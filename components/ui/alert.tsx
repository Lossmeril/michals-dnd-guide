import { twMerge } from "tailwind-merge";

const KINDS = {
  info: "bg-dnd-accent-green/60 border-dnd-ink",
  warning: "bg-dnd-accent-yellow border-dnd-ink",
  danger: "bg-dnd-accent-red/40 border-dnd-red",
};

/** A notice above a form or page: a bad link, a warning, a hint */
const Alert: React.FC<{
  kind?: keyof typeof KINDS;
  className?: string;
  children: React.ReactNode;
}> = ({ kind = "info", className, children }) => (
  <div
    role={kind === "danger" ? "alert" : "status"}
    className={twMerge("mb-6 p-3 text-sm border-l-4", KINDS[kind], className)}
  >
    {children}
  </div>
);

export default Alert;
