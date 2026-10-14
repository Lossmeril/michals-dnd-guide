import { twMerge } from "tailwind-merge";

interface ExampleCardProps {
  /** Bold line under the "Example" eyebrow */
  title?: string;
  /** Small italic line above the title */
  eyebrow?: string;
  /** Portrait on the side (on top on phones) */
  image?: string;
  /** Which side the image sits on */
  imageSide?: "left" | "right";
  children: React.ReactNode;
  className?: string;
}

/**
 * A story example in the rulebook, set apart from the rules as a roomy card.
 * Quieter than StoryBox, which keeps the decorative corners for page intros.
 */
const ExampleCard: React.FC<ExampleCardProps> = ({
  title,
  eyebrow = "Example",
  image,
  imageSide = "left",
  children,
  className,
}) => (
  <aside
    className={twMerge(
      "clear-both my-10 flex flex-col overflow-hidden rounded-lg border border-dnd-gold bg-dnd-accent-green/40 shadow-md",
      image && (imageSide === "right" ? "lg:flex-row-reverse" : "lg:flex-row"),
      className,
    )}
  >
    {image && (
      // The text sets the card's height; the picture fills its side
      <div className="relative h-64 shrink-0 lg:h-auto lg:min-h-56 lg:w-56">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>
    )}
    <div className="min-w-0 flex-1 px-6 py-6 lg:px-8">
      <p className="mb-1 text-xs font-bold italic text-dnd-ink/70">{eyebrow}</p>
      {title && (
        <p className="libre mb-4 text-lg font-bold leading-tight text-dnd-red-dark">
          {title}
        </p>
      )}
      <div className="flex flex-col gap-3 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  </aside>
);

export default ExampleCard;
