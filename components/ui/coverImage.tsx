import { twMerge } from "tailwind-merge";

interface CoverImageProps {
  src: string;
  alt: string;
  imageClassName?: string;
  /** Overlaid in the bottom-right corner, e.g. an edit button */
  children?: React.ReactNode;
}

const CoverImage: React.FC<CoverImageProps> = ({
  src,
  alt,
  imageClassName,
  children,
}) => (
  <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden border border-dnd-red-dark shadow-md">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={src}
      alt={alt}
      className={twMerge("w-full h-full object-cover", imageClassName)}
    />
    {children && <div className="absolute bottom-3 right-3">{children}</div>}
  </div>
);

export default CoverImage;
