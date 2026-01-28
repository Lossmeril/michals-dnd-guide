import Link from "next/link";

type CardVariant = "default" | "example";

type CardProps = {
  title?: string;
  description?: string;

  imageSrc?: string;
  imageAlt?: string;

  href?: string;

  footer?: React.ReactNode;
  children?: React.ReactNode;

  variant?: CardVariant;
  className?: string;
  imagePos?: "top" | "center" | "bottom";
};

const Card = ({
  title,
  description,
  imageSrc,
  imageAlt,
  href,
  footer,
  children,
  variant = "default",
  className,
  imagePos = "top",
}: CardProps) => {
  const base =
    "group overflow-hidden rounded-2xl border-2 shadow-sm transition hover:-translate-y-0.5";

  const variantClass =
    variant === "example"
      ? "border-[#2b1d0e]/40 bg-[#fbf7f0]"
      : "border-red-900 bg-[#f4efe6]";

  const content = (
    <div className={`${base} ${variantClass} ${className ?? ""}`}>
      {imageSrc && (
        <div className="relative h-40 w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt ?? title ?? "Card image"}
            className={`h-full w-full object-cover ${imagePos === "top" ? "object-top" : imagePos === "bottom" ? "object-bottom" : "object-center"}`}
          />
          <div className="absolute inset-0 " />
        </div>
      )}

      {(title || description) && (
        <div className="p-6">
          {title && (
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-serif text-xl text-red-900">{title}</h2>
              {href && (
                <span className="text-red-900/80 transition group-hover:translate-x-0.5">
                  →
                </span>
              )}
            </div>
          )}

          {description && (
            <p className="mt-3 text-sm text-[#2b1d0e]/80">{description}</p>
          )}

          {children && <div className="mt-4">{children}</div>}

          {footer && <div className="mt-6">{footer}</div>}
        </div>
      )}

      {/* If you want cards with ONLY children (no title/desc), still allow content */}
      {!title && !description && (children || footer) && (
        <div className="p-6">
          {children}
          {footer && <div className="mt-6">{footer}</div>}
        </div>
      )}
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="block">
      {content}
    </Link>
  );
};

export default Card;
