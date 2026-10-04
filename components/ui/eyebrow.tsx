import { twMerge } from "tailwind-merge";

interface EyebrowProps {
  text: string;
  color?: "red" | "blue" | "green" | "yellow" | "purple";
}

const Eyebrow: React.FC<EyebrowProps> = ({ text, color: backgroundColor }) => {
  const styleOptions = {
    red: "bg-accent-red/20 ",
    blue: "bg-accent-blue/20",
    green: "bg-accent-green/20",
    yellow: "bg-accent-yellow/20",
    purple: "bg-accent-purple/20",
  };

  return (
    <p
      className={twMerge(
        backgroundColor ? styleOptions[backgroundColor] : "",
        "text-xs font-semibold rounded-full w-fit px-2 py-0.2 text-dnd-ink/45 border border-dnd-ink/25",
      )}
    >
      {text}
    </p>
  );
};

export default Eyebrow;
