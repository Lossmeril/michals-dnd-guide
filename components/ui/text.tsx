interface H1Props {
  className?: string;
  children: React.ReactNode;
}

export const H1: React.FC<H1Props> = ({ className = "", children }) => {
  return (
    <h1 className={`font-serif text-3xl text-body mb-6 ${className}`}>
      {children}
    </h1>
  );
};
