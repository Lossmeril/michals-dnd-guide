interface TableHeadProps {
  titles: string[] | { title: string; width: string }[];
}

export const TableHead: React.FC<TableHeadProps> = ({ titles }) => {
  return (
    <>
      <thead>
        <tr className="border-b-2 border-red-900 p-2 text-left">
          {titles.map((title, index) => (
            <th
              key={index}
              style={{
                width: typeof title === "string" ? undefined : title.width,
              }}
            >
              {typeof title === "string" ? title : title.title}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

interface TableBodyProps {
  children: React.ReactNode;
}

export const TableBody: React.FC<TableBodyProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

interface TableRowProps {
  children: React.ReactNode;
}

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return (
    <tr className="w-full even:bg-dnd-accent-yellow odd:bg-transparent p-2">
      {children}
    </tr>
  );
};

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

export const TableCell: React.FC<TableCellProps> = ({
  children,
  className,
}) => {
  return <td className={className ? className : ""}>{children}</td>;
};

interface TableProps {
  children: React.ReactNode;
  title?: string;
}

export const Table: React.FC<TableProps> = ({ children, title }) => {
  return (
    <>
      {title && (
        <h3 className="text-xl mb-4 mt-6 font-serif font-bold text-dnd-red-dark">
          {title}
        </h3>
      )}
      <table className="w-full">{children}</table>
    </>
  );
};
