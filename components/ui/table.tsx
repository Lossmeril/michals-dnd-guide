import { IMAGE_PLACEHOLDER } from "@/lib/webGlobals";

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
          <th
            key={heading}
            className={`px-3 py-1 text-sm border-b-2 border-dnd-ink text-left ${heading === "Image" ? "w-16" : ""}`}
          >
            {heading === "Image" ? "" : heading}
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
  return <td className="px-3 py-1 text-sm space-x-2">{children}</td>;
};

interface ImageTableCellProps {
  imgSrc?: string | null;
  imgAlt?: string;
}

export const ImageTableCell: React.FC<ImageTableCellProps> = ({
  imgSrc,
  imgAlt,
}) => {
  return (
    <td className="">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgSrc || IMAGE_PLACEHOLDER}
        alt={imgAlt || "Character image"}
        className="w-16 h-16 object-cover border-r border-dnd-ink/20"
      />
    </td>
  );
};
