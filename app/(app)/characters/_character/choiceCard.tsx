import { twMerge } from "tailwind-merge";

interface ChoiceCardProps {
  title: string;
  description?: React.ReactNode;
  /** Small line under the title, e.g. a cost or why it's locked */
  note?: React.ReactNode;
  checked: boolean;
  disabled?: boolean;
  /** radio picks one of a group, checkbox toggles */
  type?: "radio" | "checkbox";
  /** Picture shown above the text */
  image?: React.ReactNode;
  onSelect: () => void;
}

export const ChoiceCard: React.FC<ChoiceCardProps> = ({
  title,
  description,
  note,
  checked,
  disabled = false,
  type = "radio",
  image,
  onSelect,
}) => (
  <label
    className={twMerge(
      "block p-4 rounded-lg border bg-dnd-bg cursor-pointer transition-colors",
      checked
        ? "border-dnd-red ring-2 ring-dnd-red"
        : "border-dnd-gold hover:border-dnd-red",
      disabled && "opacity-50 cursor-not-allowed hover:border-dnd-gold",
    )}
  >
    <input
      type={type}
      checked={checked}
      disabled={disabled}
      onChange={onSelect}
      className="sr-only"
    />
    <div className="flex flex-col gap-2">
      {image}
      <div className="min-w-0">
        <p className="font-bold text-dnd-red libre">{title}</p>
        {note && <p className="text-xs text-dnd-ink/60 mb-1">{note}</p>}
        {description && (
          <div className="text-xs text-dnd-ink/75">{description}</div>
        )}
      </div>
    </div>
  </label>
);
