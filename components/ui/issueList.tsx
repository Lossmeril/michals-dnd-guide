/** What still blocks saving (in red), and softer warnings under it */
const IssueList: React.FC<{ errors: string[]; warnings?: string[] }> = ({
  errors,
  warnings = [],
}) => (
  <>
    {errors.length > 0 && (
      <ul role="alert" className="text-sm text-dnd-red list-disc pl-5">
        {errors.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    )}
    {warnings.length > 0 && (
      <ul className="text-sm text-dnd-ink/60 list-disc pl-5 mt-2">
        {warnings.map((w) => (
          <li key={w}>{w}</li>
        ))}
      </ul>
    )}
  </>
);

export default IssueList;
