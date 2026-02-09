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
    info: "font-serif text-dnd-ink bg-dnd-accent-green border-dnd-ink",
    warning: "font-serif text-dnd-ink bg-dnd-accent-yellow border-dnd-ink",
    danger: "font-serif text-dnd-ink bg-dnd-accent-red/50 border-dnd-ink",
  };

  return (
    <div
      className={[
        "rounded-lg border-l-4 p-4 text-sm",
        typeStyles[type] || typeStyles.info,
        className || "",
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default Alert;
