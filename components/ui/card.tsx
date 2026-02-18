interface CardProps {
  title: string;
  description?: string;

  imageSrc?: string;
  imageAlt?: string;

  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  children,
  className,
  onClick,
}) => {
  return (
    <div
      className={`border border-dnd-ink/20 rounded-lg p-4 ${className || ""}`}
      onClick={onClick}
    >
      {imageSrc && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      {description && (
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      )}
      {children}
    </div>
  );
};

export default Card;

export const ClickableCard: React.FC<
  CardProps & {
    onClick: () => void;
    selected?: boolean;
    disabled?: boolean;
  }
> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  children,
  onClick,
  selected,
  disabled,
}) => {
  const disabledStyle = "cursor-not-allowed pointer-events-none opacity-20";
  const deselectedStyle = "grayscale ";

  return (
    <Card
      title={title}
      description={description}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      className={`z-10 cursor-pointer hover:scale-[1.02] transition-transform relative ${disabled ? disabledStyle : ""} ${selected ? "" : deselectedStyle} `}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </Card>
  );
};
