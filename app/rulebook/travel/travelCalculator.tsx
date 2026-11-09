"use client";

import { useState } from "react";
import {
  Checkbox,
  NumberField,
  SelectField,
  TextField,
} from "@/components/ui/formControls";
import Panel from "@/components/ui/panel";
import { useDict } from "@/lib/i18n/client";

type Traveller = {
  name: string;
  speed: number;
  load: "none" | "encumbered" | "heavy";
  mounted: boolean;
  mountSpeed: number;
};

const PACE = { slow: 2 / 3, normal: 1, fast: 4 / 3 };
const TERRAIN = { road: 1, hills: 0.75, mountains: 0.5, severe: 0.25 };
const WEATHER = { clear: 1, rain: 0.9, heavy: 0.75, snowstorm: 0.5 };
const LOAD_PENALTY = { none: 0, encumbered: 2, heavy: 4 };
// Speed in metres per round to km/h: 6 m ≈ 5 km/h
const KMH_PER_METRE = 0.8;

const speedOf = (t: Traveller) =>
  t.mounted ? t.mountSpeed : Math.max(0, t.speed - LOAD_PENALTY[t.load]);

const options = <K extends string>(labels: Record<K, string>) =>
  (Object.keys(labels) as K[]).map((value) => ({ value, label: labels[value] }));

const TravelCalculator = () => {
  const t = useDict().travel;
  const [travellers, setTravellers] = useState<Traveller[]>([
    { name: t.traveller(1), speed: 6, load: "none", mounted: false, mountSpeed: 12 },
  ]);
  const [pace, setPace] = useState<keyof typeof PACE>("normal");
  const [terrain, setTerrain] = useState<keyof typeof TERRAIN>("road");
  const [weather, setWeather] = useState<keyof typeof WEATHER>("clear");
  const [hours, setHours] = useState(8);
  const [gallop, setGallop] = useState(false);

  const set = (i: number, patch: Partial<Traveller>) =>
    setTravellers(travellers.map((tr, j) => (j === i ? { ...tr, ...patch } : tr)));

  const env = TERRAIN[terrain] * WEATHER[weather];
  const slowest = Math.min(...travellers.map(speedOf));
  const kmh = slowest * KMH_PER_METRE * PACE[pace] * env;
  const allMounted = travellers.every((tr) => tr.mounted);
  const gallopKm =
    gallop && allMounted
      ? Math.min(...travellers.map((tr) => tr.mountSpeed)) * KMH_PER_METRE * PACE.fast * env
      : 0;
  const total = kmh * hours + gallopKm;

  return (
    <Panel className="my-6 p-5 flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        {travellers.map((tr, i) => (
          <div key={i} className="grid grid-cols-2 md:grid-cols-[1fr_6rem_10rem_auto_6rem_auto] gap-3 items-end pb-3 border-b border-dnd-gold/40">
            <TextField label={t.name} id={`traveller-${i}`} value={tr.name} onChange={(name) => set(i, { name })} />
            <NumberField label={t.speed} id={`speed-${i}`} min={0} value={tr.speed} onChange={(v) => set(i, { speed: v ?? 0 })} />
            <SelectField
              label={t.load}
              id={`load-${i}`}
              value={tr.load}
              onChange={(v) => set(i, { load: (v ?? "none") as Traveller["load"] })}
              options={options(t.loads)}
            />
            <Checkbox label={t.mounted} className="pb-2" checked={tr.mounted} onChange={(mounted) => set(i, { mounted })} />
            <NumberField
              label={t.mount}
              id={`mount-${i}`}
              min={0}
              disabled={!tr.mounted}
              value={tr.mountSpeed}
              onChange={(v) => set(i, { mountSpeed: v ?? 0 })}
            />
            <button
              type="button"
              disabled={travellers.length === 1}
              onClick={() => setTravellers(travellers.filter((_, j) => j !== i))}
              className="button-secondary text-xs py-1 mb-1"
            >
              {t.remove}
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setTravellers([
              ...travellers,
              { name: t.traveller(travellers.length + 1), speed: 6, load: "none", mounted: false, mountSpeed: 12 },
            ])
          }
          className="button-secondary self-start text-sm py-1"
        >
          {t.add}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <SelectField label={t.pace} id="pace" value={pace} onChange={(v) => setPace((v ?? "normal") as keyof typeof PACE)} options={options(t.paces)} />
        <SelectField label={t.terrain} id="terrain" value={terrain} onChange={(v) => setTerrain((v ?? "road") as keyof typeof TERRAIN)} options={options(t.terrains)} />
        <SelectField label={t.weather} id="weather" value={weather} onChange={(v) => setWeather((v ?? "clear") as keyof typeof WEATHER)} options={options(t.weathers)} />
        <NumberField label={t.hours} id="hours" min={0} value={hours} onChange={(v) => setHours(v ?? 0)} />
      </div>
      <Checkbox
        label={allMounted ? t.gallop : `${t.gallop} ${t.everyoneRides}`}
        checked={gallop}
        disabled={!allMounted}
        onChange={setGallop}
      />

      <div className="p-4 rounded-lg bg-dnd-accent-yellow border border-dnd-gold text-center">
        <p className="text-sm">
          {kmh.toFixed(1)} km/h · {hours} h{gallopKm > 0 && ` ${t.gallopKm(gallopKm.toFixed(1))}`}
        </p>
        <p className="libre font-bold text-2xl text-dnd-red-dark">{t.perDay(total.toFixed(1))}</p>
      </div>
    </Panel>
  );
};

export default TravelCalculator;
