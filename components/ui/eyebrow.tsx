interface EyebrowProps {
  text: string;
  className?: string;
}

const Eyebrow: React.FC<EyebrowProps> = ({ text, className }) => {
  return (
    <p
      className={`text-sm font-semibold text-dnd-red rounded ${className || ""}`}
    >
      {text}
    </p>
  );
};

export default Eyebrow;
