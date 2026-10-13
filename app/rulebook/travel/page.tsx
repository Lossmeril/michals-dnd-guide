import { Note, RulePage, RuleTable } from "../_components";
import TravelCalculator from "./travelCalculator";

const TravelPage = () => (
  <RulePage slug="travel">
    <p>
      Overland travel is worked out per day. The <strong>slowest traveller</strong>{" "}
      sets the pace for everyone.
    </p>
    <ul>
      <li>
        A walking speed of 6 m makes about <strong>5 km/h</strong> (speed ×
        0.8).
      </li>
      <li>
        Encumbered travellers lose 2 m of speed; heavily encumbered ones lose 4
        m.
      </li>
      <li>
        A group where everyone rides can add <strong>one hour of gallop</strong>{" "}
        at a fast pace.
      </li>
    </ul>
    <RuleTable
      head={["Factor", "Multiplier"]}
      rows={[
        ["Pace: slow / normal / fast", "×⅔ / ×1 / ×4⁄3"],
        ["Road or plains", "×1"],
        ["Hills or forest", "×0.75"],
        ["Mountains or swamp", "×0.5"],
        ["Severe terrain", "×0.25"],
        ["Rain / heavy rain / snowstorm", "×0.9 / ×0.75 / ×0.5"],
      ]}
    />

    <h2>Calculator</h2>
    <TravelCalculator />
    <Note title="Still open">
      <p>Whether travel encumbrance should follow armour encumbrance isn&apos;t decided yet.</p>
    </Note>
  </RulePage>
);

export default TravelPage;
