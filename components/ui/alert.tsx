interface AlertProps {
  type?: "info" | "warning" | "danger";
  children: React.ReactNode;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  type = "info",
  children,
  className,
}) => {
  const typeStyles: Record<string, string> = {
    info: "bg-dnd-accent-green",
    warning: "bg-dnd-accent-yellow",
    danger: "bg-dnd-accent-red/50",
  };

  return (
    <div
      className={[
        "rounded-lg border-l-4 p-4 text-sm font-serif text-dnd-ink border-dnd-ink",
        typeStyles[type] || typeStyles.info,
        className || "",
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default Alert;
