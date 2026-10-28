// 5E-style stat blocks for NPCs, companions, units, networks and
// organizations. Each prints on its own (the print button) with boxes to tick
// in play and the rules it needs printed underneath.

import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import PrintButton from "@/components/ui/printButton";
import {
  COMPANION_ROLES,
  NETWORK_TRACK_POINTS,
  REACH_LEVELS,
  STAT_BLOCK_LABELS,
  UNIT_SIZES,
  companionRoleOf,
  fieldOf,
  numberOf,
  unitSizeOf,
  type StatBlockData,
  type UnitSize,
} from "@/lib/rules/statBlocks";
import { RESOURCE_NAMES } from "@/lib/rules/format";
import { type Pool, RESOURCE_STYLES } from "./resources";

/** Renders Markdown with the rulebook's shortcodes; inline drops the <p> */
export type RenderMd = (text: string, inline?: boolean) => React.ReactNode;

// Boxes beyond this get a blank to write the number in instead
const MAX_BOXES = 20;

// -----------------------------------------------------------------------------
// Pieces
// -----------------------------------------------------------------------------

/** The red tapered rule between parts, as in the 5E books */
const Taper = () => (
  <svg
    viewBox="0 0 100 4"
    preserveAspectRatio="none"
    aria-hidden
    className="block w-full h-[5px] my-2 text-dnd-red"
  >
    <polygon points="0,0 100,2 0,4" fill="currentColor" />
  </svg>
);

/** Boxes (or circles) to tick in play */
const Ticks: React.FC<{
  count: number;
  round?: boolean;
  className?: string;
}> = ({ count, round, className }) =>
  count > MAX_BOXES ? (
    <span className="inline-block w-14 border-b border-dnd-ink/60 h-4 align-bottom" />
  ) : (
    <span className="inline-flex flex-wrap gap-[3px] align-middle">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className={twMerge(
            "inline-block w-3 h-3 border border-dnd-ink/60 bg-white/60",
            round && "rounded-full",
            className,
          )}
        />
      ))}
    </span>
  );

/** "Armour Medium (2)": a bold red label, then the value */
const Prop: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <p className="leading-snug">
    <span className="font-bold text-dnd-red-dark">{label}</span> {children}
  </p>
);

const Track: React.FC<{
  pool: Pool;
  value: number | undefined;
  /** Shown under the number, e.g. "muscle" */
  note?: React.ReactNode;
  /** Draw boxes for every point; Body is usually too big */
  boxes?: boolean;
}> = ({ pool, value, note, boxes = pool !== "body" }) => {
  const { text, border, icon } = RESOURCE_STYLES[pool];
  return (
    <div className={twMerge("flex flex-col items-center gap-1 px-2 py-1.5 border-t-4 bg-white/40", border)}>
      <span className={twMerge("flex items-center gap-1 text-xs font-bold uppercase tracking-wider", text)}>
        {icon} {RESOURCE_NAMES[pool]}
      </span>
      <span className="libre text-2xl font-bold leading-none">{value ?? "—"}</span>
      {note && <span className="text-[11px] italic text-dnd-ink/70 text-center leading-tight">{note}</span>}
      {value !== undefined && value > 0 && (boxes ? (
        <Ticks count={value} className={border} />
      ) : (
        <span className="text-[11px] text-dnd-ink/70">
          now <Ticks count={MAX_BOXES + 1} />
        </span>
      ))}
    </div>
  );
};

const Tracks: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="grid grid-cols-3 gap-2 my-1">{children}</div>
);

/** A `## Traits`-style section of abilities */
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="break-inside-avoid mt-3">
    <h4 className="libre text-lg text-dnd-red-dark border-b border-dnd-red-dark mb-2 leading-tight">
      {title}
    </h4>
    <div className="stat-block-text flex flex-col gap-2">{children}</div>
  </section>
);

/** The rules the block needs in play, printed in small type at the bottom */
const Reminders: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <aside className="break-inside-avoid mt-4 px-3 py-2 bg-dnd-accent-yellow/80 border-l-4 border-dnd-gold text-[11px] leading-snug">
    <p className="libre font-bold text-dnd-red-dark mb-1">Running it</p>
    <ul className="list-disc pl-4 flex flex-col gap-0.5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </aside>
);

/**
 * The block's frame: name, the `top` lines, then the rest. The picture is a
 * column down the right side (a strip on top on phones), cropped to the
 * block's height.
 */
const Frame: React.FC<{
  data: StatBlockData;
  md: RenderMd;
  wide?: boolean;
  top: React.ReactNode;
  children: React.ReactNode;
}> = ({ data, md, wide, top, children }) => {
  const image = fieldOf(data, "image");
  return (
    <article
      data-printable
      className={twMerge(
        "stat-block clear-both relative my-8 flex flex-col sm:flex-row bg-dnd-bg text-dnd-ink",
        "border-y-[6px] border-dnd-gold shadow-[0_0_10px_rgba(0,0,0,0.25)]",
        wide ? "w-full" : image ? "max-w-3xl" : "max-w-2xl",
      )}
    >
      <div className="flex-1 min-w-0 px-4 pt-3 pb-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-dnd-ink/60">
              {STAT_BLOCK_LABELS[data.kind]}
            </p>
            <h3 className="libre text-2xl font-bold text-dnd-red-dark leading-tight [font-variant:small-caps]">
              {data.name}
            </h3>
            {data.subtitle && (
              <p className="italic text-sm">{md(data.subtitle, true)}</p>
            )}
          </div>
          <PrintButton label={`Print ${data.name}`} className="shrink-0 print:hidden" />
        </div>
        <Taper />
        {top}
        {children}
      </div>
      {image && (
        <div
          className={twMerge(
            "relative order-first sm:order-last shrink-0 aspect-[4/3] sm:aspect-auto",
            "border-b-2 sm:border-b-0 sm:border-l-2 border-dnd-gold bg-white/40",
            wide ? "sm:w-56" : "sm:w-44",
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={data.name}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      )}
    </article>
  );
};

// -----------------------------------------------------------------------------
// Shared parts of the kinds
// -----------------------------------------------------------------------------

/** Fields every kind shows the same way, in this order, after the tracks */
const COMMON_AFTER: [string, string][] = [
  ["skills", "Skills"],
  ["manoeuvres", "Free manoeuvres"],
  ["resistances", "Resistances"],
  ["weaknesses", "Weaknesses"],
  ["immunities", "Immunities"],
  ["senses", "Senses"],
  ["languages", "Languages"],
];

/** Fields the frame itself uses */
const FRAME_KEYS = ["image", "rules"];

const titleOf = (key: string) => key.charAt(0).toUpperCase() + key.slice(1);

/**
 * The fields in `keys` that are set, plus every field nobody else shows
 * (e.g. "habitat: forest"), as property lines
 */
const Props: React.FC<{
  data: StatBlockData;
  md: RenderMd;
  keys: [string, string][];
  /** Fields shown elsewhere in the block, left out of "the rest" */
  used?: string[];
  rest?: boolean;
}> = ({ data, md, keys, used = [], rest }) => {
  const shown = new Set([...keys.map(([k]) => k), ...used, ...FRAME_KEYS]);
  const lines: [string, string][] = keys
    .map(([k, label]): [string, string] => [label, fieldOf(data, k) ?? ""])
    .filter(([, v]) => v);
  if (rest) {
    for (const [k, v] of data.fields) {
      if (!shown.has(k) && v) lines.push([titleOf(k), v]);
    }
  }
  if (!lines.length) return null;
  return (
    <div className="flex flex-col gap-0.5">
      {lines.map(([label, value]) => (
        <Prop key={label} label={label}>
          {md(value, true)}
        </Prop>
      ))}
    </div>
  );
};

const Sections: React.FC<{ data: StatBlockData; md: RenderMd; wide?: boolean }> = ({
  data,
  md,
  wide,
}) =>
  data.sections.length ? (
    <div className={wide ? "md:columns-2 md:gap-6" : undefined}>
      {data.sections.map((s) => (
        <Section key={s.title} title={s.title}>
          {md(s.text)}
        </Section>
      ))}
    </div>
  ) : null;

/** "Fate ○○ (refills at sunrise)", Bond boxes and the like */
const Counter: React.FC<{
  label: string;
  value: number | undefined;
  note?: string;
  round?: boolean;
}> = ({ label, value, note, round }) =>
  value ? (
    <Prop label={label}>
      <span className="font-bold">{value}</span> <Ticks count={value} round={round} />
      {note && <span className="text-xs italic text-dnd-ink/70"> {note}</span>}
    </Prop>
  ) : null;

const ZERO_TRACKS =
  "At 0 in a track it's overpowered: Body, down or dead; Soul, breaks, panics or is controlled; Charisma, surrenders, flees or gives in.";
const SOCIAL_DAMAGE =
  "A won Soul or Charisma roll against it takes the Danger Level it faces right now + the winner's class level off that track.";
const ROLLS = "Rolls: challenge d20 + bonus; undefended attack 2d6 + bonus ≥ 9.";

// -----------------------------------------------------------------------------
// The kinds
// -----------------------------------------------------------------------------

type KindProps = { data: StatBlockData; md: RenderMd; wide?: boolean; rules: boolean };

const NpcBlock: React.FC<KindProps & { companion?: boolean }> = ({
  data,
  md,
  wide,
  rules,
  companion,
}) => {
  const fate = numberOf(fieldOf(data, "fate"));
  const bond = numberOf(fieldOf(data, "bond"));
  const roleKey = companionRoleOf(fieldOf(data, "role"));
  const role = roleKey && COMPANION_ROLES[roleKey];
  const threat = fieldOf(data, "threat");

  return (
    <Frame data={data} md={md} wide={wide}
      top={
        <div className="flex flex-col gap-0.5">
          {role && <Prop label="Kind">{role.label}</Prop>}
          {role && <Prop label="Turn">{role.turn}</Prop>}
          <Props data={data} md={md} keys={[["master", "Master"], ["armour", "Armour"], ["speed", "Speed"], ["threat", "Threat die"]]} />
          {companion ? (
            <>
              <Counter label="Bond" value={bond} note="(never above the master's Charisma)" />
              <Props data={data} md={md} keys={[["payment", "Payment"]]} />
            </>
          ) : (
            <Counter label="Fate" value={fate} note="(back at sunrise)" round />
          )}
        </div>
      }
    >
      <Taper />
      <Tracks>
        <Track pool="body" value={numberOf(fieldOf(data, "body"))} />
        <Track pool="soul" value={numberOf(fieldOf(data, "soul"))} />
        <Track pool="charisma" value={numberOf(fieldOf(data, "charisma"))} />
      </Tracks>
      <Taper />
      <Props
        data={data}
        md={md}
        keys={COMMON_AFTER}
        used={["role", "master", "armour", "speed", "threat", "fate", "bond", "payment", "body", "soul", "charisma", "rules"]}
        rest
      />
      <Sections data={data} md={md} wide={wide} />
      {rules && (
        <Reminders
          items={[
            md(ROLLS, true),
            md(
              `Hitting a player character: ${threat ? `${threat} ` : "the threat die "}− their armour rating = the Scar's level.`,
              true,
            ),
            companion
              ? "Manoeuvres cost 1 Bond, unless granted above."
              : "Manoeuvres granted above are free; any other costs 1 Soul or Charisma.",
            companion
              ? "Averting a failure costs Bond equal to the master's Danger Level. Scarring the Bond gives 2 temporary points. Below 0 Bond, the DM takes it over."
              : fate
                ? "Spending 1 Fate turns a lost roll into a win."
                : "No Fate: its failures land.",
            ...(companion
              ? ["1 payment refills 1 Bond. Healing a Bond scar: a roll and 5 payments per level."]
              : []),
            SOCIAL_DAMAGE,
            ZERO_TRACKS,
          ]}
        />
      )}
    </Frame>
  );
};

const UnitBlock: React.FC<KindProps> = ({ data, md, wide, rules }) => {
  const sizeKey = unitSizeOf(fieldOf(data, "size"));
  const size = sizeKey && UNIT_SIZES[sizeKey];
  const member = numberOf(fieldOf(data, "body"));
  const body = size && member !== undefined ? member * size.body : member;
  const bond = numberOf(fieldOf(data, "bond"));
  const bonus = numberOf(fieldOf(data, "skills"));
  const smaller = (Object.keys(UNIT_SIZES) as UnitSize[]).filter(
    (k) => size && UNIT_SIZES[k].body < size.body,
  );
  const payment = fieldOf(data, "payment");

  return (
    <Frame data={data} md={md} wide={wide}
      top={
        <div className="flex flex-col gap-0.5">
          {size && (
            <Prop label="Size">
              {size.label} <span className="text-xs italic text-dnd-ink/70">(Body ×{size.body})</span>
            </Prop>
          )}
          <Props data={data} md={md} keys={[["members", "Members"], ["master", "Master"], ["armour", "Armour"], ["speed", "Speed"], ["threat", "Threat die"]]} />
          <Counter label="Bond" value={bond} note="(companion unit; never above the master's Charisma)" />
          {(payment || (bond && size && bonus)) && (
            <Prop label="Payment">
              {payment ? md(payment, true) : `${bonus} silver × ${size!.payment} = ${bonus! * size!.payment} silver`}
            </Prop>
          )}
        </div>
      }
    >
      <Taper />
      <Tracks>
        <Track
          pool="body"
          value={body}
          note={
            size && member !== undefined ? (
              <>
                {member} × {size.body}
                {smaller.map((k) => (
                  <Fragment key={k}>
                    <br />
                    {UNIT_SIZES[k].label} at {member * UNIT_SIZES[k].body}
                  </Fragment>
                ))}
              </>
            ) : undefined
          }
        />
        <Track pool="soul" value={numberOf(fieldOf(data, "soul"))} note="the average member's" />
        <Track pool="charisma" value={numberOf(fieldOf(data, "charisma"))} note="the average member's" />
      </Tracks>
      <Taper />
      <Props
        data={data}
        md={md}
        keys={COMMON_AFTER}
        used={["size", "members", "master", "armour", "speed", "threat", "bond", "payment", "body", "soul", "charisma", "rules"]}
        rest
      />
      <Sections data={data} md={md} wide={wide} />
      {rules && (
        <Reminders
          items={[
            "One initiative, one action a round. Free Widespread on every action, plus one other manoeuvre.",
            `Only a widespread action reaching ${size ? size.harmedBy : "enough members"} harms its tracks. Smaller ones only matter in the story.`,
            "Damage is rolled once against the Body track. It drops a size when Body falls to the next size's mark; at 0 it's dead, scattered or surrendered.",
            "Any number of free Defenses against smaller units; it can react to anything within reach with the Defense manoeuvre.",
            "A smaller unit's counter doesn't cancel its effect on other targets.",
            "A player character exhausting against it pays double the Danger Level.",
            bond
              ? "Companion unit: averts with Bond at its master's Danger Level; lost members are Bond scars."
              : "No Fate: it averts nothing unless an important commander is named above.",
            SOCIAL_DAMAGE,
          ]}
        />
      )}
    </Frame>
  );
};

const NetworkBlock: React.FC<KindProps> = ({ data, md, wide, rules }) => {
  const bond = numberOf(fieldOf(data, "bond"));
  const bonus = numberOf(fieldOf(data, "bonus"));
  const tracks = (["body", "soul", "charisma"] as const).map((p) => numberOf(fieldOf(data, p)));
  const total = tracks.reduce<number>((sum, v) => sum + (v ?? 0), 0);
  const payment = fieldOf(data, "payment") ?? (bonus ? `${Math.max(1, bonus)} silver` : undefined);

  return (
    <Frame data={data} md={md} wide={wide}
      top={
        <div className="flex flex-col gap-0.5">
          <Props data={data} md={md} keys={[["master", "Master"], ["bonus", "Bonus"], ["specialisation", "Specialisation"]]} />
          {payment && <Prop label="Payment">{md(payment, true)}</Prop>}
          <Prop label="Bond">
            <span className="font-bold">{bond ?? 0}</span> <Ticks count={bond ?? 0} />{" "}
            <span className="text-xs italic text-dnd-ink/70">(+1 per 5 payments, up to the master&apos;s Charisma)</span>
          </Prop>
          <Prop label="Upkeep">
            <Ticks count={8} /> <span className="text-xs italic text-dnd-ink/70">(one tick a week)</span>
          </Prop>
        </div>
      }
    >
      <Taper />
      <Tracks>
        <Track pool="body" value={tracks[0]} note="muscle: theft, ambushes, kidnapping" boxes />
        <Track pool="soul" value={tracks[1]} note="information, finding things" />
        <Track pool="charisma" value={tracks[2]} note="influence, bribery" />
      </Tracks>
      {total !== NETWORK_TRACK_POINTS && (
        <p className="text-xs text-dnd-red print:hidden">
          The tracks add up to {total}, not {NETWORK_TRACK_POINTS}.
        </p>
      )}
      <Taper />
      <Props
        data={data}
        md={md}
        keys={[]}
        used={["master", "bonus", "specialisation", "payment", "bond", "body", "soul", "charisma", "rules"]}
        rest
      />
      <Sections data={data} md={md} wide={wide} />
      {rules && (
        <Reminders
          items={[
            "Acts while its master is elsewhere. The DM sets the task's Danger Level.",
            md(`Rolls 2d6 or d20 + its bonus within its specialisation; outside it, with no bonus.`, true),
            "Averting a failure costs Bond equal to the Danger Level. A failure not averted is a Bond scar: a member caught, a contact gone quiet.",
            "Upkeep, once a week: one payment's worth of attention (silver, a favour, a visit, protection). Kept: one tip from its specialisation. Skipped: a level-1 Bond scar.",
            "1 payment refills 1 spent Bond. Healing a Bond scar: a roll and 5 payments per level.",
            "Its bonus is at most the master's Standing + 2.",
            ZERO_TRACKS,
          ]}
        />
      )}
    </Frame>
  );
};

const OrganizationBlock: React.FC<KindProps> = ({ data, md, wide, rules }) => {
  const reach = numberOf(fieldOf(data, "reach"));
  const ranks = data.fields
    .map(([k, v]) => [k.match(/^rank (\d)$/)?.[1], v] as const)
    .filter((r): r is [string, string] => r[0] !== undefined)
    .sort((a, b) => Number(b[0]) - Number(a[0]));

  return (
    <Frame data={data} md={md} wide={wide}
      top={
        <div className="flex flex-col gap-0.5">
          {reach !== undefined && (
            <Prop label="Reach">
              <span className="font-bold">{reach}</span>{" "}
              <span className="italic">{REACH_LEVELS[reach] ?? ""}</span>
            </Prop>
          )}
          <Props data={data} md={md} keys={[["seat", "Seat"], ["leader", "Leader"], ["structure", "Structure"]]} />
        </div>
      }
    >
      {ranks.length > 0 && (
        <>
          <Taper />
          <p className="libre font-bold text-dnd-red-dark mb-1">Standing</p>
          <ol className="flex flex-col">
            {ranks.map(([n, text]) => {
              const [title, ...rest] = text.split(":");
              return (
                <li key={n} className="flex gap-3 items-baseline py-1 border-b border-dnd-gold/60 last:border-0">
                  <span className="libre font-bold text-lg w-6 text-center text-dnd-red-dark shrink-0">{n}</span>
                  <span className="min-w-0">
                    <span className="font-bold">{title.trim()}</span>
                    {rest.length > 0 && <>: {md(rest.join(":").trim(), true)}</>}
                  </span>
                </li>
              );
            })}
          </ol>
        </>
      )}
      <Taper />
      <Props
        data={data}
        md={md}
        keys={[["companions", "Companions"], ["network", "Network"], ["allies", "Allies"], ["rivals", "Rivals"]]}
        used={["reach", "seat", "leader", "structure", "rules", ...ranks.map(([n]) => `rank ${n}`)]}
        rest
      />
      <Sections data={data} md={md} wide={wide} />
      {rules && (
        <Reminders
          items={[
            "It takes no actions and rolls nothing; its members act.",
            "Standing gives possibilities, not bonuses: the member still rolls with their class skills.",
            "Standing 0 can only ask favours. Standing 1 or more commands its part of the organization as a network, with a bonus up to Standing + 2.",
            "Any Standing can find and bind companions within its reach.",
            "Anyone can join at a low rank, and build and lead an organization of Reach 1–2. Standing 3–5 comes only from mighty class perks.",
          ]}
        />
      )}
    </Frame>
  );
};

/** One stat block of any kind */
const StatBlockCard: React.FC<{
  data: StatBlockData;
  md: RenderMd;
  /** Full width, with the abilities in two columns */
  wide?: boolean;
}> = ({ data, md, wide }) => {
  // "rules: no" leaves out the reminders
  const rules = !/^(no|off|false)$/i.test(fieldOf(data, "rules") ?? "");
  const props = { data, md, wide, rules };
  switch (data.kind) {
    case "npc":
      return <NpcBlock {...props} />;
    case "companion":
      return <NpcBlock {...props} companion />;
    case "unit":
      return <UnitBlock {...props} />;
    case "network":
      return <NetworkBlock {...props} />;
    case "organization":
      return <OrganizationBlock {...props} />;
  }
};

export default StatBlockCard;
