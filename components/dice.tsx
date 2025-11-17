interface dieProps {
  display: number;
  max?: number;
}

export const D4: React.FC<dieProps> = ({ display, max = 4 }) => {
  return (
    <>
      <div className="d4 mb-2" title={`D4: ${display <= max ? display : max}`}>
        {display <= max ? display : max}
      </div>
      <p className="text-xs font-bold">D4: {display <= max ? display : max}</p>
    </>
  );
};

export const D6: React.FC<dieProps> = ({ display, max = 6 }) => {
  return (
    <>
      <div className="d6 mb-2" title={`D6: ${display <= max ? display : max}`}>
        {display <= max ? display : max}
      </div>
      <p className="text-xs font-bold">D6: {display <= max ? display : max}</p>
    </>
  );
};

export const D8: React.FC<dieProps> = ({ display, max = 8 }) => {
  return (
    <>
      <div className="d8 mb-2" title={`D8: ${display <= max ? display : max}`}>
        {display <= max ? display : max}
      </div>
      <p className="text-xs font-bold">D8: {display <= max ? display : max}</p>
    </>
  );
};

export const D10: React.FC<dieProps> = ({ display, max = 10 }) => {
  return (
    <>
      <div
        className="d10 mb-2"
        title={`D10: ${display <= max ? display : max}`}
      >
        {display <= max ? display : max}
      </div>
      <p className="text-xs font-bold">D10: {display <= max ? display : max}</p>
    </>
  );
};

export const D12: React.FC<dieProps> = ({ display, max = 12 }) => {
  return (
    <>
      <div
        className="d12 mb-2"
        title={`D12: ${display <= max ? display : max}`}
      >
        {display <= max ? display : max}
      </div>
      <p className="text-xs font-bold">D12: {display <= max ? display : max}</p>
    </>
  );
};

export const D20: React.FC<dieProps> = ({ display, max = 20 }) => {
  return (
    <>
      <div
        className="d20 mb-2"
        title={`D20: ${display <= max ? display : max}`}
      >
        {display <= max ? display : max}
      </div>
      <p className="text-xs font-bold">D20: {display <= max ? display : max}</p>
    </>
  );
};
