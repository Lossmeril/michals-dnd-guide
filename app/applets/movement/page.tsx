"use client";

import { useState } from "react";

/* ----------------------------------------------------------
   TYPES & CALCULATION LOGIC
---------------------------------------------------------- */

type Pace = "slow" | "normal" | "fast";
type Terrain = "road" | "plains" | "hills-forest" | "mountains-swamp" | "awful";
type Weather = "clear" | "rain" | "heavy-rain" | "snow-storm";
type Encumbrance = "none" | "encumbered" | "heavily-encumbered";

interface Traveler {
  baseSpeedFt: number;
  encumbrance: Encumbrance;
  mounted: boolean;
  mountSpeedFt?: number;
}

function encumbranceAdjustedSpeedFt(
  baseSpeedFt: number,
  encumbrance: Encumbrance
) {
  if (encumbrance === "encumbered") return Math.max(0, baseSpeedFt - 10);
  if (encumbrance === "heavily-encumbered")
    return Math.max(0, baseSpeedFt - 20);
  return baseSpeedFt;
}

function paceFactor(pace: Pace): number {
  if (pace === "slow") return 2 / 3;
  if (pace === "fast") return 4 / 3;
  return 1;
}

function terrainFactor(t: Terrain) {
  return {
    road: 1,
    plains: 1,
    "hills-forest": 0.75,
    "mountains-swamp": 0.5,
    awful: 0.25,
  }[t];
}

function weatherFactor(w: Weather) {
  return {
    clear: 1,
    rain: 0.9,
    "heavy-rain": 0.75,
    "snow-storm": 0.5,
  }[w];
}

function travelerPaceMph(trav: Traveler, pace: Pace) {
  const speedFt = trav.mounted
    ? trav.mountSpeedFt ?? 0
    : encumbranceAdjustedSpeedFt(trav.baseSpeedFt, trav.encumbrance);

  return (speedFt / 10) * paceFactor(pace);
}

function calculateTravel(
  travelers: Traveler[],
  pace: Pace,
  terrain: Terrain,
  weather: Weather,
  hours: number,
  gallop: boolean
) {
  if (!travelers.length)
    return { mph: 0, miles: 0, baseMiles: 0, gallopMiles: 0 };

  const basePace = Math.min(...travelers.map((t) => travelerPaceMph(t, pace)));
  const env = terrainFactor(terrain) * weatherFactor(weather);
  const mph = basePace * env;

  const baseMiles = mph * hours;

  // Gallop logic
  let gallopMiles = 0;
  const allMounted = travelers.every((t) => t.mounted && t.mountSpeedFt);
  if (gallop && allMounted) {
    const fastMounted = Math.min(
      ...travelers.map((t) => travelerPaceMph({ ...t, mounted: true }, "fast"))
    );
    gallopMiles = fastMounted * env; // 1 hour of extra fast pace
  }

  return {
    mph,
    miles: baseMiles + gallopMiles,
    baseMiles,
    gallopMiles,
  };
}

/* ----------------------------------------------------------
   PAGE COMPONENT
---------------------------------------------------------- */

const MovementCalculatorPage = () => {
  /* -----------------------
     Calculator State
  ------------------------ */
  const [travelers, setTravelers] = useState<Traveler[]>([
    { baseSpeedFt: 30, encumbrance: "none", mounted: false },
  ]);

  const [pace, setPace] = useState<Pace>("normal");
  const [terrain, setTerrain] = useState<Terrain>("plains");
  const [weather, setWeather] = useState<Weather>("clear");
  const [hours, setHours] = useState(8);
  const [gallop, setGallop] = useState(false);

  const result = calculateTravel(
    travelers,
    pace,
    terrain,
    weather,
    hours,
    gallop
  );

  /* -----------------------
     Render UI
  ------------------------ */

  return (
    <div>
      {/* ----------------------------------------------------
          RULES SECTION
      ----------------------------------------------------- */}

      <h2 className="font-bold text-3xl mb-5">Travel & Movement Calculator</h2>

      <p className="mb-3">
        This page explains the rules used by the{" "}
        <strong>DnD 5e Travel & Movement Calculator</strong>. The calculator at
        the bottom lets you simulate travel distance based on mounts, weather,
        terrain, pace, and encumbrance.
      </p>

      {/* --- (INSERT RULES BLOCK FROM PREVIOUS ANSWER HERE IF YOU WANT) --- */}
      {/* For brevity, I'm not repeating the whole rules text again.
          You can paste it above the calculator. */}

      {/* ----------------------------------------------------
           CALCULATOR UI
      ----------------------------------------------------- */}
      <h3 className="font-bold text-2xl mt-10 mb-4">Movement Calculator</h3>

      <div className="space-y-8 p-5 rounded-xl bg-slate-800 border border-slate-700">
        {/* --------------------------------------
            Travelers List
        -------------------------------------- */}
        <div>
          <h4 className="font-bold text-xl mb-3">Travelers</h4>

          <div className="grid grid-cols-3 gap-4">
            {travelers.map((t, i) => (
              <div
                key={i}
                className="mb-4 p-4 rounded-lg bg-slate-700 border border-slate-600"
              >
                <div className="flex items-center gap-4 mb-3">
                  <label className="w-40">Base Speed (ft):</label>
                  <input
                    type="number"
                    value={t.baseSpeedFt}
                    onChange={(e) =>
                      setTravelers((prev) =>
                        prev.map((x, idx) =>
                          idx === i
                            ? { ...x, baseSpeedFt: Number(e.target.value) }
                            : x
                        )
                      )
                    }
                    className="input w-28 bg-slate-900 px-2 py-1 rounded"
                  />
                </div>

                {/* Encumbrance */}
                <div className="flex items-center gap-4 mb-3">
                  <label className="w-40">Encumbrance:</label>
                  <select
                    value={t.encumbrance}
                    onChange={(e) =>
                      setTravelers((prev) =>
                        prev.map((x, idx) =>
                          idx === i
                            ? {
                                ...x,
                                encumbrance: e.target.value as Encumbrance,
                              }
                            : x
                        )
                      )
                    }
                    className="input bg-slate-900 px-2 py-1 rounded"
                  >
                    <option value="none">None</option>
                    <option value="encumbered">Encumbered</option>
                    <option value="heavily-encumbered">
                      Heavily Encumbered
                    </option>
                  </select>
                </div>

                {/* Mounted */}
                <div className="flex items-center gap-4 mb-3">
                  <label className="w-40">Mounted?</label>
                  <input
                    type="checkbox"
                    checked={t.mounted}
                    onChange={(e) =>
                      setTravelers((prev) =>
                        prev.map((x, idx) =>
                          idx === i ? { ...x, mounted: e.target.checked } : x
                        )
                      )
                    }
                  />
                </div>

                {/* Mount Speed */}
                {t.mounted && (
                  <div className="flex items-center gap-4 mb-3">
                    <label className="w-40">Mount Speed (ft):</label>
                    <input
                      type="number"
                      value={t.mountSpeedFt ?? 60}
                      onChange={(e) =>
                        setTravelers((prev) =>
                          prev.map((x, idx) =>
                            idx === i
                              ? { ...x, mountSpeedFt: Number(e.target.value) }
                              : x
                          )
                        )
                      }
                      className="input w-28 bg-slate-900 px-2 py-1 rounded"
                    />
                  </div>
                )}

                {/* Remove Button */}
                {travelers.length > 1 && (
                  <button
                    onClick={() =>
                      setTravelers((prev) => prev.filter((_, idx) => idx !== i))
                    }
                    className="px-3 py-1 bg-red-600 rounded text-sm"
                  >
                    Remove Traveler
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              setTravelers((prev) => [
                ...prev,
                { baseSpeedFt: 30, encumbrance: "none", mounted: false },
              ])
            }
            className="px-4 py-2 bg-slate-700 rounded mt-2"
          >
            + Add Traveler
          </button>
        </div>

        {/* --------------------------------------
            Conditions Inputs
        -------------------------------------- */}
        <div>
          <h4 className="font-bold text-xl mb-3">Conditions</h4>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <label className="w-40">Pace:</label>
              <select
                value={pace}
                onChange={(e) => setPace(e.target.value as Pace)}
                className="input bg-slate-900 px-2 py-1 rounded"
              >
                <option value="slow">Slow</option>
                <option value="normal">Normal</option>
                <option value="fast">Fast</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <label className="w-40">Terrain:</label>
              <select
                value={terrain}
                onChange={(e) => setTerrain(e.target.value as Terrain)}
                className="input bg-slate-900 px-2 py-1 rounded"
              >
                <option value="road">Road</option>
                <option value="plains">Plains</option>
                <option value="hills-forest">Hills / Light Forest</option>
                <option value="mountains-swamp">Mountains / Swamp</option>
                <option value="awful">Severe Terrain</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <label className="w-40">Weather:</label>
              <select
                value={weather}
                onChange={(e) => setWeather(e.target.value as Weather)}
                className="input bg-slate-900 px-2 py-1 rounded"
              >
                <option value="clear">Clear</option>
                <option value="rain">Rain</option>
                <option value="heavy-rain">Heavy Rain</option>
                <option value="snow-storm">Snowstorm</option>
              </select>
            </div>

            <div className="flex items-center gap-4">
              <label className="w-40">Hours Traveling:</label>
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="input w-20 bg-slate-900 px-2 py-1 rounded"
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-40">Gallop Burst?</label>
              <input
                type="checkbox"
                checked={gallop}
                onChange={(e) => setGallop(e.target.checked)}
              />
            </div>
          </div>
        </div>

        {/* --------------------------------------
            Results
        -------------------------------------- */}
        <div className="mt-6 p-4 bg-slate-700 rounded border border-slate-600">
          <h4 className="font-bold text-xl mb-3">Results</h4>

          <p className="mb-2">
            <strong>Effective MPH:</strong> {result.mph.toFixed(2)}
          </p>

          <p className="mb-2">
            <strong>Base Miles:</strong> {result.baseMiles.toFixed(2)}
          </p>

          <p className="mb-2">
            <strong>Gallop Bonus:</strong> {result.gallopMiles.toFixed(2)}
          </p>

          <p className="mb-2">
            <strong>Total Miles:</strong> {result.miles.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovementCalculatorPage;
