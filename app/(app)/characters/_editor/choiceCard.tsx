import { twMerge } from "tailwind-merge";

interface ChoiceCardProps {
  title: string;
  description?: string | null;
  /** Small line under the title, e.g. a cost or why it's locked */
  note?: React.ReactNode;
  checked: boolean;
  disabled?: boolean;
  /** radio picks one of a group, checkbox toggles */
  type?: "radio" | "checkbox";
  /** Picture shown left of the text, e.g. a perk image or a <Thumb /> */
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
    <div className="flex gap-3">
      {image}
      <div className="min-w-0">
        <p className="font-bold text-dnd-red libre">{title}</p>
        {note && <p className="text-xs text-dnd-ink/60 mb-1">{note}</p>}
        {description && (
          <p className="text-xs text-dnd-ink/75">{description}</p>
        )}
      </div>
    </div>
  </label>
);

/** Small rounded picture for rows and choice cards */
export const Thumb: React.FC<{ src: string | null; className?: string }> = ({
  src,
  className,
}) =>
  src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      className={twMerge("w-16 h-16 rounded object-cover shrink-0", className)}
    />
  ) : null;
