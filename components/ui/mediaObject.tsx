import { twMerge } from "tailwind-merge";

/** A 3:4 portrait cropped from the top, framed in gold */
export const Portrait: React.FC<{ src: string; className?: string }> = ({
  src,
  className,
}) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={src}
    alt=""
    className={twMerge(
      "w-full aspect-[3/4] object-cover object-top rounded-lg border border-dnd-gold shrink-0",
      className,
    )}
  />
);

/**
 * A portrait beside its text (above it on phones): a class or race's
 * details. Without an image the text takes the whole width.
 */
const MediaObject: React.FC<{
  image: string | null | undefined;
  /** Portrait width from sm up, e.g. "sm:w-56" */
  imageClassName?: string;
  className?: string;
  children: React.ReactNode;
}> = ({ image, imageClassName = "sm:w-56", className, children }) => (
  <div className={twMerge("flex flex-col sm:flex-row gap-6", className)}>
    {image && <Portrait src={image} className={imageClassName} />}
    <div className="flex-1 min-w-0">{children}</div>
  </div>
);

export default MediaObject;
