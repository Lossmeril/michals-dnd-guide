// 5E-style stat blocks for NPCs, companions, units, networks and
// organizations. Each prints on its own (the print button) with boxes to tick
// in play and the rules it needs printed underneath.

import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import PrintButton from "@/components/ui/printButton";
import { DICTS, type Dict } from "@/lib/i18n/dictionaries";
import type { Lang } from "@/lib/i18n/localize";
import {
  COMPANION_ROLES,
  NETWORK_TRACK_POINTS,
  UNIT_SIZES,
  companionRoleOf,
  fieldOf,
  numberOf,
  unitSizeOf,
  type StatBlockData,
  type UnitSize,
} from "@/lib/rules/statBlocks";
import { type Pool, RESOURCE_STYLES } from "./resources";

/** Renders Markdown with the rulebook's shortcodes; inline drops the <p> */
export type RenderMd = (text: string, inline?: boolean) => React.ReactNode;

// Boxes beyond this get a blank to write the number in instead
const MAX_BOXES = 20;

/** The block's own words in the reader's language */
type T = Dict["statBlock"] & { resources: Dict["resources"] };

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
  t: T;
  pool: Pool;
  value: number | undefined;
  /** Shown under the number, e.g. "muscle" */
  note?: React.ReactNode;
  /** Draw boxes for every point; Body is usually too big */
  boxes?: boolean;
}> = ({ t, pool, value, note, boxes = pool !== "body" }) => {
  const { text, border, icon } = RESOURCE_STYLES[pool];
  return (
    <div className={twMerge("flex flex-col items-center gap-1 px-2 py-1.5 border-t-4 bg-white/40", border)}>
      <span className={twMerge("flex items-center gap-1 text-xs font-bold uppercase tracking-wider", text)}>
        {icon} {t.resources[pool]}
      </span>
      <span className="libre text-2xl font-bold leading-none">{value ?? "—"}</span>
      {note && <span className="text-[11px] italic text-dnd-ink/70 text-center leading-tight">{note}</span>}
      {value !== undefined && value > 0 && (boxes ? (
        <Ticks count={value} className={border} />
      ) : (
        <span className="text-[11px] text-dnd-ink/70">
          {t.now} <Ticks count={MAX_BOXES + 1} />
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
const Reminders: React.FC<{ t: T; items: React.ReactNode[] }> = ({ t, items }) => (
  <aside className="break-inside-avoid mt-4 px-3 py-2 bg-dnd-accent-yellow/80 border-l-4 border-dnd-gold text-[11px] leading-snug">
    <p className="libre font-bold text-dnd-red-dark mb-1">{t.runningIt}</p>
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
  t: T;
  data: StatBlockData;
  md: RenderMd;
  wide?: boolean;
  top: React.ReactNode;
  children: React.ReactNode;
}> = ({ t, data, md, wide, top, children }) => {
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
              {t.kinds[data.kind]}
            </p>
            <h3 className="libre text-2xl font-bold text-dnd-red-dark leading-tight [font-variant:small-caps]">
              {data.name}
            </h3>
            {data.subtitle && (
              <p className="italic text-sm">{md(data.subtitle, true)}</p>
            )}
          </div>
          <PrintButton label={t.print(data.name)} className="shrink-0 print:hidden" />
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
const COMMON_AFTER = [
  "skills",
  "manoeuvres",
  "resistances",
  "weaknesses",
  "immunities",
  "senses",
  "languages",
] as const;

type LabelKey = keyof T["labels"];

/** Field keys with their labels: keys(t, "seat", "leader") */
const keysOf = (t: T, ...keys: readonly LabelKey[]): [string, string][] =>
  keys.map((k) => [k, t.labels[k]]);

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

// -----------------------------------------------------------------------------
// The kinds
// -----------------------------------------------------------------------------

type KindProps = { t: T; data: StatBlockData; md: RenderMd; wide?: boolean; rules: boolean };

const NpcBlock: React.FC<KindProps & { companion?: boolean }> = ({
  t,
  data,
  md,
  wide,
  rules,
  companion,
}) => {
  const fate = numberOf(fieldOf(data, "fate"));
  const bond = numberOf(fieldOf(data, "bond"));
  const roleKey = companionRoleOf(fieldOf(data, "role"));
  const threat = fieldOf(data, "threat");
  const r = t.rules;

  return (
    <Frame t={t} data={data} md={md} wide={wide}
      top={
        <div className="flex flex-col gap-0.5">
          {roleKey && <Prop label={t.labels.kind}>{t.roles[roleKey]}</Prop>}
          {roleKey && (
            <Prop label={t.labels.turn}>
              {COMPANION_ROLES[roleKey].afterMaster ? t.turns.afterMaster : t.turns.own}
            </Prop>
          )}
          <Props data={data} md={md} keys={keysOf(t, "master", "armour", "speed", "threat")} />
          {companion ? (
            <>
              <Counter label={t.labels.bond} value={bond} note={t.notes.bond} />
              <Props data={data} md={md} keys={keysOf(t, "payment")} />
            </>
          ) : (
            <Counter label={t.labels.fate} value={fate} note={t.notes.fate} round />
          )}
        </div>
      }
    >
      <Taper />
      <Tracks>
        <Track t={t} pool="body" value={numberOf(fieldOf(data, "body"))} />
        <Track t={t} pool="soul" value={numberOf(fieldOf(data, "soul"))} />
        <Track t={t} pool="charisma" value={numberOf(fieldOf(data, "charisma"))} />
      </Tracks>
      <Taper />
      <Props
        data={data}
        md={md}
        keys={keysOf(t, ...COMMON_AFTER)}
        used={["role", "master", "armour", "speed", "threat", "fate", "bond", "payment", "body", "soul", "charisma", "rules"]}
        rest
      />
      <Sections data={data} md={md} wide={wide} />
      {rules && (
        <Reminders
          t={t}
          items={[
            md(r.rolls, true),
            md(r.hit(threat), true),
            companion ? r.companionManoeuvres : r.npcManoeuvres,
            companion ? r.companionBond : fate ? r.fate : r.noFate,
            ...(companion ? [r.bondHealing] : []),
            r.socialDamage,
            r.zeroTracks,
          ]}
        />
      )}
    </Frame>
  );
};

const UnitBlock: React.FC<KindProps> = ({ t, data, md, wide, rules }) => {
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
  const r = t.rules;

  return (
    <Frame t={t} data={data} md={md} wide={wide}
      top={
        <div className="flex flex-col gap-0.5">
          {sizeKey && size && (
            <Prop label={t.labels.size}>
              {t.sizes[sizeKey].label}{" "}
              <span className="text-xs italic text-dnd-ink/70">{t.notes.bodyTimes(size.body)}</span>
            </Prop>
          )}
          <Props data={data} md={md} keys={keysOf(t, "members", "master", "armour", "speed", "threat")} />
          <Counter label={t.labels.bond} value={bond} note={t.notes.unitBond} />
          {(payment || (bond && size && bonus)) && (
            <Prop label={t.labels.payment}>
              {payment ? md(payment, true) : t.notes.unitPayment(bonus!, size!.payment)}
            </Prop>
          )}
        </div>
      }
    >
      <Taper />
      <Tracks>
        <Track
          t={t}
          pool="body"
          value={body}
          note={
            size && member !== undefined ? (
              <>
                {member} × {size.body}
                {smaller.map((k) => (
                  <Fragment key={k}>
                    <br />
                    {t.notes.sizeAt(t.sizes[k].label, member * UNIT_SIZES[k].body)}
                  </Fragment>
                ))}
              </>
            ) : undefined
          }
        />
        <Track t={t} pool="soul" value={numberOf(fieldOf(data, "soul"))} note={t.notes.average} />
        <Track t={t} pool="charisma" value={numberOf(fieldOf(data, "charisma"))} note={t.notes.average} />
      </Tracks>
      <Taper />
      <Props
        data={data}
        md={md}
        keys={keysOf(t, ...COMMON_AFTER)}
        used={["size", "members", "master", "armour", "speed", "threat", "bond", "payment", "body", "soul", "charisma", "rules"]}
        rest
      />
      <Sections data={data} md={md} wide={wide} />
      {rules && (
        <Reminders
          t={t}
          items={[
            r.unitAction,
            r.unitHarm(sizeKey ? t.sizes[sizeKey].harmedBy : r.enoughMembers),
            r.unitDamage,
            r.unitDefense,
            r.unitCounter,
            r.unitDouble,
            bond ? r.unitBond : r.unitNoFate,
            r.socialDamage,
          ]}
        />
      )}
    </Frame>
  );
};

const NetworkBlock: React.FC<KindProps> = ({ t, data, md, wide, rules }) => {
  const bond = numberOf(fieldOf(data, "bond"));
  const bonus = numberOf(fieldOf(data, "bonus"));
  const tracks = (["body", "soul", "charisma"] as const).map((p) => numberOf(fieldOf(data, p)));
  const total = tracks.reduce<number>((sum, v) => sum + (v ?? 0), 0);
  const payment =
    fieldOf(data, "payment") ?? (bonus ? t.notes.silver(Math.max(1, bonus)) : undefined);
  const r = t.rules;

  return (
    <Frame t={t} data={data} md={md} wide={wide}
      top={
        <div className="flex flex-col gap-0.5">
          <Props data={data} md={md} keys={keysOf(t, "master", "bonus", "specialisation")} />
          {payment && <Prop label={t.labels.payment}>{md(payment, true)}</Prop>}
          <Prop label={t.labels.bond}>
            <span className="font-bold">{bond ?? 0}</span> <Ticks count={bond ?? 0} />{" "}
            <span className="text-xs italic text-dnd-ink/70">{t.notes.networkBond}</span>
          </Prop>
          <Prop label={t.labels.upkeep}>
            <Ticks count={8} /> <span className="text-xs italic text-dnd-ink/70">{t.notes.upkeep}</span>
          </Prop>
        </div>
      }
    >
      <Taper />
      <Tracks>
        <Track t={t} pool="body" value={tracks[0]} note={t.notes.muscle} boxes />
        <Track t={t} pool="soul" value={tracks[1]} note={t.notes.information} />
        <Track t={t} pool="charisma" value={tracks[2]} note={t.notes.influence} />
      </Tracks>
      {total !== NETWORK_TRACK_POINTS && (
        <p className="text-xs text-dnd-red print:hidden">
          {t.notes.tracksOff(total, NETWORK_TRACK_POINTS)}
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
          t={t}
          items={[
            r.networkElsewhere,
            md(r.networkRolls, true),
            r.networkAvert,
            r.networkUpkeep,
            r.networkRefill,
            r.networkCap,
            r.zeroTracks,
          ]}
        />
      )}
    </Frame>
  );
};

const OrganizationBlock: React.FC<KindProps> = ({ t, data, md, wide, rules }) => {
  const reach = numberOf(fieldOf(data, "reach"));
  const ranks = data.fields
    .map(([k, v]) => [k.match(/^rank (\d)$/)?.[1], v] as const)
    .filter((r): r is [string, string] => r[0] !== undefined)
    .sort((a, b) => Number(b[0]) - Number(a[0]));
  const r = t.rules;

  return (
    <Frame t={t} data={data} md={md} wide={wide}
      top={
        <div className="flex flex-col gap-0.5">
          {reach !== undefined && (
            <Prop label={t.labels.reach}>
              <span className="font-bold">{reach}</span>{" "}
              <span className="italic">{t.reach[reach] ?? ""}</span>
            </Prop>
          )}
          <Props data={data} md={md} keys={keysOf(t, "seat", "leader", "structure")} />
        </div>
      }
    >
      {ranks.length > 0 && (
        <>
          <Taper />
          <p className="libre font-bold text-dnd-red-dark mb-1">{t.labels.standing}</p>
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
        keys={keysOf(t, "companions", "network", "allies", "rivals")}
        used={["reach", "seat", "leader", "structure", "rules", ...ranks.map(([n]) => `rank ${n}`)]}
        rest
      />
      <Sections data={data} md={md} wide={wide} />
      {rules && (
        <Reminders
          t={t}
          items={[r.orgNoActions, r.orgPossibilities, r.orgNetwork, r.orgCompanions, r.orgMighty]}
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
  lang: Lang;
}> = ({ data, md, wide, lang }) => {
  // "rules: no" leaves out the reminders
  const rules = !/^(no|off|false)$/i.test(fieldOf(data, "rules") ?? "");
  const t = { ...DICTS[lang].statBlock, resources: DICTS[lang].resources };
  const props = { t, data, md, wide, rules };
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
