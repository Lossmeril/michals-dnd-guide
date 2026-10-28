// The cheat sheet under the page editor

const ROWS: [string, string][] = [
  ["## Heading", "A section heading; ### for a smaller one"],
  ["## Nadpis {#heading}", "Sets the heading's anchor; translated headings keep the English one so links still work"],
  ["**bold**, *italic*", "Emphasis"],
  ["[Scars](scars)", "A link to another rulebook page, by its slug; [Initiative](dice#initiative) links to a heading"],
  ["- item / 1. item", "Lists"],
  ["| a | b |", "Tables (header row, then |---|---|)"],
  ["2d6, d20, 1d8", "Dice get their icon automatically; write `d6` in backticks to skip it"],
  [":roll[d6 4 2]", "Rolled dice faces. dN switches the die (:roll[d6 4 d4 3]); (1) is a dropped die"],
  [":body :soul :charisma :coins :material", "A resource's name in its colour. Before a colon write :body[]: ; :body[2 Body] changes the text"],
  [':::example[Title]{image="…" side="right"}', "An example card; the picture is optional. Close with :::"],
  [":::note[Title]", "A yellow side note. Close with :::"],
  ["::formula[2d6 + class level ≥ 9]", "A formula set apart"],
  ['::image{src="…" alt="…" layout="side"}', "A picture: header, side, left or inline; add caption=\"…\" for a caption"],
  [':::stats[Caption] + ::stat{r="body" base="5" exhausted="2" scarred="1"}', "Resource bars, e.g. before and after"],
  ['::::cards + :::card[Title]{#id image="…" subtitle="…"}', "Cards in a column, e.g. conditions; {#id} lets links jump to one"],
  ["```npc (or companion, unit, network, organization)", "A stat block: `key: value` lines (name, subtitle, image, body, soul, charisma, …), then ## sections. ```npc wide spans the page; rules: no drops the reminders"],
  [":::en / :::cs", "Text for one language only, e.g. an example that only makes sense in Czech. Close with :::"],
  ['::creature{id="wyvern"}', "A creature's stat block from the bestiary, by its id (shown on the real page, not in the preview)"],
  ["Town guard |cs| Městský strážný", "A translated line inside a stat block (any field or section)"],
  ['::races ::backgrounds ::languages ::traits ::weapons ::classes{rank="basic"} ::chapters ::travel-calculator', "Filled from the database on the real page"],
];

const ShortcodeHelp = () => (
  <details className="text-xs">
    <summary className="cursor-pointer font-bold text-dnd-red">
      Shortcodes and Markdown
    </summary>
    <p className="mt-2 mb-2 text-dnd-ink/70">
      A container that holds another (e.g. resource bars inside an example)
      needs more colons on the outside: <code>::::example</code> …{" "}
      <code>::::</code>.
    </p>
    <table className="w-full">
      <tbody>
        {ROWS.map(([code, text]) => (
          <tr key={code} className="border-t border-dnd-gold/40 align-top">
            <td className="py-1.5 pr-3 font-mono whitespace-pre-wrap break-all w-1/2">
              {code}
            </td>
            <td className="py-1.5">{text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </details>
);

export default ShortcodeHelp;
