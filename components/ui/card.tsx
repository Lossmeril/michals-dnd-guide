import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface CardProps {
  title: string;
  /** Omit, or pass null, for a "No image" placeholder */
  imageUrl?: string | null;
  imageClassName?: string;
  /** Tags above the title, e.g. <Eyebrow />s */
  eyebrows?: React.ReactNode;
  /** Makes the whole card a link */
  link?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

/** An image on top, then the title and a few lines: campaigns, characters */
const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  imageClassName,
  eyebrows,
  link,
  disabled,
  children,
}) => {
  const body = (
    <div className="w-full h-full bg-dnd-bg border border-dnd-red-dark rounded-lg shadow-md overflow-hidden">
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={title}
          className={twMerge(
            "w-full h-48 object-cover border-b border-b-gray-300",
            imageClassName,
          )}
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 border-b border-b-gray-300 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      <div className="p-4">
        {eyebrows && <div className="mb-2 flex flex-row gap-2">{eyebrows}</div>}
        <p className="text-xl font-bold mb-2 text-dnd-red libre">{title}</p>
        {children}
      </div>
    </div>
  );

  if (link && !disabled) {
    return (
      <Link
        href={link}
        className="w-full h-full hover:scale-102 transition-all duration-200 ease-in-out"
      >
        {body}
      </Link>
    );
  }
  return (
    <div
      className={twMerge(
        "w-full h-full",
        disabled && "opacity-50 grayscale cursor-not-allowed",
      )}
    >
      {body}
    </div>
  );
};

export default Card;

export const SkeletonCard = () => {
  return (
    <div className="w-full h-full bg-skeleton/50 border border-skeleton rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-skeleton border-b border-b-skeleton" />
      <div className="p-4">
        <div className="h-6 bg-skeleton rounded-full w-3/4 mb-4" />
        <div className="h-4 bg-skeleton rounded-full w-full mb-2" />
        <div className="h-4 bg-skeleton rounded-full w-full mb-2" />
        <div className="h-4 bg-skeleton rounded-full w-full" />
      </div>
    </div>
  );
};

/**
 * Cards in one to three columns. While loading it shows a skeleton card;
 * with no cards, the `empty` text.
 */
export const CardGrid: React.FC<{
  loading?: boolean;
  empty?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}> = ({ loading, empty = "Nothing here yet.", className, children }) => {
  const hasCards = Array.isArray(children) ? children.length > 0 : !!children;
  return (
    <div
      className={twMerge(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className,
      )}
    >
      {loading ? <SkeletonCard /> : hasCards ? children : <p>{empty}</p>}
    </div>
  );
};
