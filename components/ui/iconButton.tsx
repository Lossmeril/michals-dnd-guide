import { twMerge } from "tailwind-merge";

/** A small square button with only an icon; `label` is its tooltip and name */
const IconButton: React.FC<
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
    label: string;
  }
> = ({ label, className, children, ...props }) => (
  <button
    type="button"
    title={label}
    aria-label={label}
    className={twMerge(
      "w-8 h-8 p-0 inline-flex items-center justify-center text-xs bg-transparent text-dnd-red border border-dnd-gold hover:bg-dnd-red/10",
      className,
    )}
    {...props}
  >
    {children}
  </button>
);

export default IconButton;
