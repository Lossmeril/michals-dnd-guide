interface CharacterLayoutBoxProps {
  colspan?: number;
  rowspan?: number;

  className?: string;

  children: React.ReactNode;
}

export const CharacterLayoutBox: React.FC<CharacterLayoutBoxProps> = ({
  colspan = 1,
  rowspan = 1,
  className = "",
  children,
}) => {
  return (
    <div
      className={`${className}`}
      style={{
        gridColumn: `span ${colspan} / span ${colspan}`,
        gridRow: `span ${rowspan} / span ${rowspan}`,
      }}
    >
      {children}
    </div>
  );
};

interface CharacterLayoutProps {
  className?: string;
  children: React.ReactNode;
}

export const CharacterLayout: React.FC<CharacterLayoutProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={`grid grid-cols-6 gap-10 ${className}`}>{children}</div>
  );
};
