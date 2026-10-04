import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface CardProps {
  title: string;

  imageUrl?: string | "empty";
  imageClassName?: string;

  link?: string;
  onClick?: () => void;
  disabled?: boolean;

  children?: React.ReactNode;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  imageUrl,
  imageClassName,
  children,
}) => {
  return (
    <div className="w-full h-full bg-dnd-bg border border-dnd-red-dark rounded-lg shadow-md overflow-hidden">
      {imageUrl && imageUrl !== "empty" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={title}
          className={twMerge(
            `w-full h-48 object-cover border-b border-b-gray-300`,
            imageClassName,
          )}
        />
      )}
      {!imageUrl ||
        (imageUrl === "empty" && (
          <div className="w-full h-48 bg-gray-200 border-b border-b-gray-300 flex items-center justify-center">
            <span className="text-gray-500">No Image</span>
          </div>
        ))}
      <div className="p-4">
        <p className="text-xl font-bold mb-2 text-dnd-red libre">{title}</p>
        {children}
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  imageClassName,
  link,
  onClick,
  disabled,
  children,
}) => {
  const baseClasses = "w-full h-full";
  const linkClasses = "hover:scale-102 transition-all duration-200 ease-in-out";
  const disabledClasses = "opacity-50 grayscale cursor-not-allowed";

  if (link && !disabled) {
    return (
      <Link href={link} className={twMerge(baseClasses, linkClasses)}>
        <CardComponent
          title={title}
          imageUrl={imageUrl}
          imageClassName={imageClassName}
        >
          {children}
        </CardComponent>
      </Link>
    );
  } else if (onClick && !disabled) {
    return (
      <div className={twMerge(baseClasses, linkClasses)} onClick={onClick}>
        <CardComponent
          title={title}
          imageUrl={imageUrl}
          imageClassName={imageClassName}
        >
          {children}
        </CardComponent>
      </div>
    );
  } else {
    return (
      <div className={twMerge(baseClasses, disabled && disabledClasses)}>
        <CardComponent
          title={title}
          imageUrl={imageUrl}
          imageClassName={imageClassName}
        >
          {children}
        </CardComponent>
      </div>
    );
  }
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
