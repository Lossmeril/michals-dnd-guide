"use client";

type Attr3 = { body: number; soul: number; charisma: number };
const sum3 = (a: Attr3) => a.body + a.soul + a.charisma;

type Props = {
  base: Attr3;
  extra: Attr3;
  baseLeft: number;
  levelLeft: number;

  setBase: (next: Attr3) => void;
  setExtra: (next: Attr3) => void;

  setError: (e: string | null) => void;
};

const inputClass =
  "w-full rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-dnd-ink outline-none focus:border-red-900";

const clamp0 = (n: number) =>
  Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0;

export const CharacterAttributesStep: React.FC<Props> = ({
  base,
  extra,
  baseLeft,
  levelLeft,
  setBase,
  setExtra,
  setError,
}) => {
  const setBaseKey = (k: keyof Attr3, v: number) => {
    setError(null);
    const next = { ...base, [k]: clamp0(v) };
    setBase(next);
  };

  const setExtraKey = (k: keyof Attr3, v: number) => {
    setError(null);
    const nextVal = clamp0(v);
    // block if spending would exceed global level budget
    const next = { ...extra, [k]: nextVal };
    const nextExtraSpent = sum3(next);
    const currentExtraSpent = sum3(extra);
    const delta = nextExtraSpent - currentExtraSpent;

    if (delta > 0 && levelLeft - delta < 0) {
      setError(`Not enough level points left. You have ${levelLeft}.`);
      return;
    }
    setExtra(next);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-dnd-ink">Attributes</h3>
        <p className="text-sm text-dnd-ink/70">
          Base points left: <span className="font-semibold">{baseLeft}</span> •
          Level points left: <span className="font-semibold">{levelLeft}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-xl border-2 border-red-900/20 bg-white/40 p-4 space-y-4">
          <h4 className="font-serif text-dnd-ink">
            Base allocation (must total 15)
          </h4>

          {(["body", "soul", "charisma"] as const).map((k) => (
            <div key={k} className="space-y-2">
              <label className="text-sm text-dnd-ink/80">
                {k[0].toUpperCase() + k.slice(1)}
              </label>
              <input
                type="number"
                min={0}
                step={1}
                value={base[k]}
                onChange={(e) => setBaseKey(k, e.target.valueAsNumber)}
                className={inputClass}
              />
            </div>
          ))}
        </div>

        <div className="rounded-xl border-2 border-red-900/20 bg-white/40 p-4 space-y-4">
          <h4 className="font-serif text-dnd-ink">
            Extra allocation (spends level points)
          </h4>

          {(["body", "soul", "charisma"] as const).map((k) => (
            <div key={k} className="space-y-2">
              <label className="text-sm text-dnd-ink/80">
                {k[0].toUpperCase() + k.slice(1)}
              </label>
              <input
                type="number"
                min={0}
                step={1}
                value={extra[k]}
                onChange={(e) => setExtraKey(k, e.target.valueAsNumber)}
                className={inputClass}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
