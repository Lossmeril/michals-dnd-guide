import type { Dict } from "@/lib/i18n/dictionaries";
import { accessedDate, type Credit, imprint } from "@/lib/credits";

/**
 * A Harvard reference that's pleasant to read: the author in bold red, the
 * title in italics, and the bibliographic small print quieter.
 * Authors (Year) *Title* [Medium]. Place: Publisher. Available at: URL (Accessed: date).
 */
const Citation: React.FC<{ credit: Credit; dict: Dict }> = ({ credit: c, dict }) => {
  const t = dict.credits;
  const where = imprint(c);
  return (
    <p className="leading-relaxed">
      {c.authors && <strong className="text-dnd-red libre">{c.authors}</strong>}
      <span className="text-dnd-ink/60"> ({c.year || t.noDate}) </span>
      <cite className="italic font-bold text-dnd-ink">{c.title}</cite>
      {c.medium && <span className="text-dnd-ink/60"> [{c.medium}]</span>}
      <span className="text-dnd-ink/60">.</span>
      {where && <span className="text-dnd-ink/60"> {where}.</span>}
      {c.url && (
        <span className="text-dnd-ink/60">
          {" "}{t.availableAt}{" "}
          <a href={c.url} className="link break-all" target="_blank" rel="noreferrer">
            {c.url}
          </a>
          {c.accessed && <> ({t.accessed} {accessedDate(c.accessed, dict.lang)})</>}.
        </span>
      )}
      {c.license && (
        <span className="text-dnd-ink/60">
          {" "}{t.licence}{" "}
          {c.license_url ? (
            <a href={c.license_url} className="link" target="_blank" rel="noreferrer">
              {c.license}
            </a>
          ) : (
            c.license
          )}
          .
        </span>
      )}
    </p>
  );
};

export default Citation;
