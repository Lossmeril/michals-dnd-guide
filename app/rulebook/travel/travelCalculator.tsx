"use client";

import { useState } from "react";

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

const label = "flex flex-col gap-1 text-sm font-bold";

const TravelCalculator = () => {
  const [travellers, setTravellers] = useState<Traveller[]>([
    { name: "Traveller 1", speed: 6, load: "none", mounted: false, mountSpeed: 12 },
  ]);
  const [pace, setPace] = useState<keyof typeof PACE>("normal");
  const [terrain, setTerrain] = useState<keyof typeof TERRAIN>("road");
  const [weather, setWeather] = useState<keyof typeof WEATHER>("clear");
  const [hours, setHours] = useState(8);
  const [gallop, setGallop] = useState(false);

  const set = (i: number, patch: Partial<Traveller>) =>
    setTravellers(travellers.map((t, j) => (j === i ? { ...t, ...patch } : t)));

  const env = TERRAIN[terrain] * WEATHER[weather];
  const slowest = Math.min(...travellers.map(speedOf));
  const kmh = slowest * KMH_PER_METRE * PACE[pace] * env;
  const allMounted = travellers.every((t) => t.mounted);
  const gallopKm =
    gallop && allMounted
      ? Math.min(...travellers.map((t) => t.mountSpeed)) * KMH_PER_METRE * PACE.fast * env
      : 0;
  const total = kmh * hours + gallopKm;

  return (
    <div className="my-6 p-5 bg-dnd-bg border border-dnd-gold rounded-lg shadow-md flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        {travellers.map((t, i) => (
          <div key={i} className="grid grid-cols-2 md:grid-cols-[1fr_6rem_10rem_auto_6rem_auto] gap-3 items-end pb-3 border-b border-dnd-gold/40">
            <label className={label}>
              Name
              <input value={t.name} onChange={(e) => set(i, { name: e.target.value })} />
            </label>
            <label className={label}>
              Speed (m)
              <input type="number" min={0} value={t.speed} onChange={(e) => set(i, { speed: Number(e.target.value) })} />
            </label>
            <label className={label}>
              Load
              <select value={t.load} onChange={(e) => set(i, { load: e.target.value as Traveller["load"] })}>
                <option value="none">Normal</option>
                <option value="encumbered">Encumbered (−2 m)</option>
                <option value="heavy">Heavily encumbered (−4 m)</option>
              </select>
            </label>
            <label className="flex items-center gap-1.5 text-sm pb-2">
              <input type="checkbox" className="w-auto" checked={t.mounted} onChange={(e) => set(i, { mounted: e.target.checked })} />
              Mounted
            </label>
            <label className={label}>
              Mount (m)
              <input type="number" min={0} disabled={!t.mounted} value={t.mountSpeed} onChange={(e) => set(i, { mountSpeed: Number(e.target.value) })} className="disabled:opacity-40" />
            </label>
            <button
              type="button"
              disabled={travellers.length === 1}
              onClick={() => setTravellers(travellers.filter((_, j) => j !== i))}
              className="button-secondary text-xs py-1 mb-1 disabled:opacity-30"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setTravellers([
              ...travellers,
              { name: `Traveller ${travellers.length + 1}`, speed: 6, load: "none", mounted: false, mountSpeed: 12 },
            ])
          }
          className="button-secondary self-start text-sm py-1"
        >
          Add a traveller
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <label className={label}>
          Pace
          <select value={pace} onChange={(e) => setPace(e.target.value as keyof typeof PACE)}>
            <option value="slow">Slow</option>
            <option value="normal">Normal</option>
            <option value="fast">Fast</option>
          </select>
        </label>
        <label className={label}>
          Terrain
          <select value={terrain} onChange={(e) => setTerrain(e.target.value as keyof typeof TERRAIN)}>
            <option value="road">Road or plains</option>
            <option value="hills">Hills or forest</option>
            <option value="mountains">Mountains or swamp</option>
            <option value="severe">Severe</option>
          </select>
        </label>
        <label className={label}>
          Weather
          <select value={weather} onChange={(e) => setWeather(e.target.value as keyof typeof WEATHER)}>
            <option value="clear">Clear</option>
            <option value="rain">Rain</option>
            <option value="heavy">Heavy rain</option>
            <option value="snowstorm">Snowstorm</option>
          </select>
        </label>
        <label className={label}>
          Hours on the road
          <input type="number" min={0} max={24} value={hours} onChange={(e) => setHours(Number(e.target.value))} />
        </label>
      </div>
      <label className="flex items-center gap-1.5 text-sm">
        <input type="checkbox" className="w-auto" checked={gallop} disabled={!allMounted} onChange={(e) => setGallop(e.target.checked)} />
        Add an hour of gallop {allMounted ? "" : "(everyone must ride)"}
      </label>

      <div className="p-4 rounded-lg bg-dnd-accent-yellow border border-dnd-gold text-center">
        <p className="text-sm">
          {kmh.toFixed(1)} km/h · {hours} h{gallopKm > 0 && ` + gallop ${gallopKm.toFixed(1)} km`}
        </p>
        <p className="libre font-bold text-2xl text-dnd-red-dark">{total.toFixed(1)} km a day</p>
      </div>
    </div>
  );
};

export default TravelCalculator;
