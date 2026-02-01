import Link from "next/link";
import React from "react";

interface ButtonProps {
  label: string | React.ReactNode;
  href?: string;

  mode?: "default" | "transparent" | "inverted" | "monochrome";
  className?: string;

  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  mode = "default",
  className,
  onClick,
  type = "button",
  disabled = false,
}) => {
  const modeStyles: Record<string, string> = {
    default:
      "bg-dnd-red border-dnd-red text-dnd-bg hover:bg-dnd-red-dark hover:border-dnd-red-dark font-serif",
    inverted:
      "bg-transparent border-dnd-red-dark/30 text-dnd-red-dark hover:text-dnd-bg hover:border-dnd-red-dark hover:bg-dnd-red-dark font-serif",
    transparent:
      "bg-transparent border-transparent text-dnd-red-dark hover:bg-dnd-red-dark/10 font-serif",
    monochrome:
      "bg-transparent border-dnd-ink/30 text-dnd-ink hover:bg-dnd-ink/10 font-serif",
  };

  const styles = [
    "h-10 inline-flex items-center justify-center rounded-2xl border-2 px-4 py-2 text-sm shadow-xs transition",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dnd-ink hover:cursor-pointer",
    disabled ? "opacity-60 pointer-events-none" : "",
    modeStyles[mode] || modeStyles.default,
    className || "",
  ].join(" ");

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={styles}>
        {label}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {label}
    </button>
  );
};

export default Button;
