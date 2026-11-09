import { twMerge } from "tailwind-merge";
import DecorativeBorder from "./decorativeBorder";

interface StoryBoxProps {
  /** Small caps line on top, e.g. "Example" or who's speaking */
  title?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * The DM's voice: story beats, examples and flavour text. Keeps the fiction
 * visually apart from the rules around it, which stay plain.
 */
const StoryBox: React.FC<StoryBoxProps> = ({ title, children, className }) => (
  <aside
    className={twMerge(
      "relative my-8 px-6 py-5 bg-dnd-accent-green border-y-2 border-dnd-ink shadow-[0_0_10px_rgba(0,0,0,0.35)]",
      className,
    )}
  >
    <DecorativeBorder />
    {title && (
      <p className="libre caps font-bold text-dnd-ink tracking-wide mb-2">
        {title}
      </p>
    )}
    <div className="libre italic text-dnd-ink text-xs flex flex-col gap-3">
      {children}
    </div>
  </aside>
);

export default StoryBox;
