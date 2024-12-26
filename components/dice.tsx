interface dieProps {
  display: number;
  max?: number;
}

export const D6: React.FC<dieProps> = ({ display, max = 6 }) => {
  return <div className="d6">{display <= max ? display : max}</div>;
};
