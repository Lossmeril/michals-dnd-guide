import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface CardProps {
  title: string;

  imageUrl?: string;
  imageClassName?: string;

  link?: string;
  onClick?: () => void;
  disabled?: boolean;

  children?: React.ReactNode;
}

const CardInside: React.FC<CardProps> = ({
  title,
  imageUrl,
  imageClassName,
  children,
}) => {
  return (
    <div className="border border-dnd-red rounded-lg shadow-md overflow-hidden">
      {imageUrl && (
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
      <div className="p-4">
        <p className="text-xl font-bold mb-2">{title}</p>
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
        <CardInside
          title={title}
          imageUrl={imageUrl}
          imageClassName={imageClassName}
        >
          {children}
        </CardInside>
      </Link>
    );
  } else if (onClick && !disabled) {
    return (
      <div className={twMerge(baseClasses, linkClasses)} onClick={onClick}>
        <CardInside
          title={title}
          imageUrl={imageUrl}
          imageClassName={imageClassName}
        >
          {children}
        </CardInside>
      </div>
    );
  } else {
    return (
      <div className={twMerge(baseClasses, disabled && disabledClasses)}>
        <CardInside
          title={title}
          imageUrl={imageUrl}
          imageClassName={imageClassName}
        >
          {children}
        </CardInside>
      </div>
    );
  }
};

export default Card;
