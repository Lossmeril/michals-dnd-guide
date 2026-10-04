import { twMerge } from "tailwind-merge";

const avatarCommonClasses =
  "relative flex items-center justify-center w-10 h-10 rounded-full border-3 border-dnd-light select-none";

interface AvatarProps {
  imgSrc?: string;
  name: string;

  indicatorColor?: "green" | "red" | "yellow" | "blue" | "gray";
}

export const Avatar: React.FC<AvatarProps> = ({
  imgSrc,
  name,
  indicatorColor,
}) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const indicatorColorClass = {
    green: "bg-green-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    blue: "bg-blue-500",
    gray: "bg-gray-500",
  };

  return (
    <div
      className={twMerge(
        "bg-dnd-red text-white font-bold",
        avatarCommonClasses,
      )}
    >
      {imgSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <span>{initials}</span>
      )}

      {indicatorColor && (
        <div
          className={`absolute -bottom-0.5 -left-0.5 w-3 h-3 rounded-full ${indicatorColorClass} border-2 border-dnd-light`}
        ></div>
      )}
    </div>
  );
};

interface AvatarGroupProps {
  avatars: AvatarProps[];
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ avatars }) => {
  return (
    <div className="flex -space-x-3">
      {avatars.map((avatar, index) => (
        <Avatar key={index} {...avatar} />
      ))}
    </div>
  );
};

export const SkeletonAvatar: React.FC = () => {
  return <div className={twMerge("skeleton", avatarCommonClasses)}></div>;
};

export const SkeletonAvatarGroup: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className="flex -space-x-3">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonAvatar key={index} />
      ))}
    </div>
  );
};
