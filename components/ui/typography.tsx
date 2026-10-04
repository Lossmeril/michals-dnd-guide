import { JSX } from "react/jsx-runtime";
import { twMerge } from "tailwind-merge";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  justStyle?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  justStyle = false,
  className = "",
  children,
}) => {
  const baseStyles = "libre text-dnd-red";
  const headingStyles: Record<number, string> = {
    1: "text-3xl text-dnd-red-dark mb-10 caps font-bold border-b-2 border-dnd-gold pb-2",
    2: "text-xl mb-8 caps font-bold",
    3: "text-lg mb-6 caps border-b-2 border-dnd-gold pb-2",
    4: "text-base caps",
    5: "text-sm caps",
    6: "text-sm caps text-dnd-ink",
  };

  const combinedClassName = twMerge(
    baseStyles,
    headingStyles[level],
    className,
  );

  if (justStyle) {
    return <div className={combinedClassName}>{children}</div>;
  }

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  return <HeadingTag className={combinedClassName}>{children}</HeadingTag>;
};

export const SkeletonInlineText: React.FC<{
  width?: string;
  height?: string;
}> = ({ width = "w-20", height = "h-4" }) => {
  return (
    <span
      className={twMerge(
        `skeleton translate-y-1/6 rounded-full inline-block `,
        width,
        height,
      )}
    />
  );
};
