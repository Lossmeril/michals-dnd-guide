import { twMerge } from "tailwind-merge";

/** The parchment panel's look, for elements Panel can't be (a <details>) */
export const panelClass =
  "bg-dnd-bg border border-dnd-gold rounded-lg shadow-md p-6";

interface PanelProps {
  as?: "div" | "section" | "aside" | "li" | "form";
  /** Smaller padding, for cards in a list */
  tight?: boolean;
  id?: string;
  /** Only with as="form" */
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  /** Only with as="form", e.g. from useActionState */
  action?: (formData: FormData) => void | Promise<void>;
  className?: string;
  children?: React.ReactNode;
}

/** A parchment panel with a gold border: forms, lists and side boxes */
const Panel: React.FC<PanelProps> = ({
  as = "div",
  tight,
  className,
  ...props
}) => {
  const Tag = as as React.ElementType;
  return (
    <Tag className={twMerge(panelClass, tight && "p-4", className)} {...props} />
  );
};

export default Panel;
