interface TableProps {
  headings: string[];
  children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ headings, children }) => {
  return (
    <table className="min-w-full border-collapse font-serif">
      <TableHeader headings={headings} />
      <tbody>{children}</tbody>
    </table>
  );
};

interface TableHeaderProps {
  headings: string[];
}

export const TableHeader: React.FC<TableHeaderProps> = ({ headings }) => {
  return (
    <thead className="">
      <tr>
        {headings.map((heading) => (
          <th key={heading} className="">
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  );
};

interface TableRowProps {
  children: React.ReactNode;
}

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return <tr className="even:bg-dnd-accent-green">{children}</tr>;
};

interface TableCellProps {
  children: string | React.ReactNode;
}

export const TableCell: React.FC<TableCellProps> = ({ children }) => {
  return <td className="border border-gray-300 px-4 py-2">{children}</td>;
};
