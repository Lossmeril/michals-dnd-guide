interface NumberStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  /** Extra condition for the + button, e.g. points left to spend */
  canIncrease?: boolean;
  label?: string;
}

const stepButton =
  "w-8 h-8 p-0 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed";

const NumberStepper: React.FC<NumberStepperProps> = ({
  value,
  onChange,
  min = 0,
  max = Infinity,
  canIncrease = true,
  label,
}) => (
  <div className="flex items-center gap-2">
    <button
      type="button"
      aria-label={`Decrease ${label ?? ""}`}
      disabled={value <= min}
      onClick={() => onChange(value - 1)}
      className={stepButton}
    >
      −
    </button>
    <span className="w-6 text-center font-bold">{value}</span>
    <button
      type="button"
      aria-label={`Increase ${label ?? ""}`}
      disabled={value >= max || !canIncrease}
      onClick={() => onChange(value + 1)}
      className={stepButton}
    >
      +
    </button>
  </div>
);

export default NumberStepper;
