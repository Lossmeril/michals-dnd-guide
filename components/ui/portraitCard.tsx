import { FaLock } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

/**
 * selected: the character has it
 * open: can be picked
 * dimmed: another option is picked
 * locked: can't be picked yet
 */
export type PortraitState = "selected" | "open" | "dimmed" | "locked";

const STATE_STYLES: Record<PortraitState, string> = {
  selected: "border-dnd-red ring-2 ring-dnd-red/60",
  open: "border-dnd-gold",
  dimmed: "border-dnd-gold opacity-70 hover:opacity-100",
  locked: "border-dnd-ink/20",
};

interface PortraitCardProps {
  title: string;
  imageUrl: string | null;
  state?: PortraitState;
  /** Badges over the top of the image */
  badges?: React.ReactNode;
  /** Big number in the corner, e.g. the class level */
  counter?: number;
  /** Short line under the title, e.g. a blurb or why it's locked */
  subtitle?: React.ReactNode;
  /** Opens the details; the picture and title are the click target */
  onOpen?: () => void;
  /** Controls under the card, e.g. a level stepper */
  footer?: React.ReactNode;
}

/** A card with a large picture on top, used for classes and races */
const PortraitCard: React.FC<PortraitCardProps> = ({
  title,
  imageUrl,
  state = "open",
  badges,
  counter,
  subtitle,
  onOpen,
  footer,
}) => {
  const locked = state === "locked";

  return (
    <div
      className={twMerge(
        "group relative h-full flex flex-col bg-dnd-bg border rounded-lg shadow-md overflow-hidden transition-all",
        STATE_STYLES[state],
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-skeleton">
        {imageUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt=""
            className={twMerge(
              "absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105",
              locked && "grayscale opacity-50",
            )}
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 to-transparent" />
        {badges && (
          <div className="absolute top-2 left-2 right-12 flex flex-wrap gap-1">
            {badges}
          </div>
        )}
        {counter !== undefined && counter > 0 && (
          <span className="absolute top-2 right-2 w-9 h-9 flex items-center justify-center rounded-full bg-dnd-red text-white font-bold libre text-lg border-2 border-dnd-gold shadow">
            {counter}
          </span>
        )}
        {locked && (
          <FaLock className="absolute top-3 right-3 text-white/90 text-lg drop-shadow" />
        )}
        <div className="absolute inset-x-0 bottom-0 p-3">
          <p className="text-white font-bold libre text-lg leading-tight drop-shadow">
            {title}
          </p>
          {subtitle && (
            <div className="text-white/85 text-xs mt-1 line-clamp-3">
              {subtitle}
            </div>
          )}
        </div>
        {onOpen && (
          <button
            type="button"
            onClick={onOpen}
            aria-label={`${title} details`}
            className="absolute inset-0 p-0 rounded-none bg-transparent hover:bg-transparent"
          />
        )}
      </div>
      {footer && (
        <div className="p-2 flex items-center justify-center gap-2 border-t border-dnd-gold/60 bg-dnd-bg">
          {footer}
        </div>
      )}
    </div>
  );
};

export default PortraitCard;
