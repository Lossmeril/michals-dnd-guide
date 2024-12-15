import { highlightText } from "@/utils/highlightText";

interface TextProps {
  children: string;
}

const Text: React.FC<TextProps> = ({ children }) => {
  return <p className="mb-3">{highlightText(children)}</p>;
};

export default Text;
