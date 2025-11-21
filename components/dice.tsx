interface dieProps {
  display: number;
  max?: number;
  noLabel?: boolean;
}

export const D4: React.FC<dieProps> = ({ display, max = 4, noLabel }) => {
  return (
    <>
      <div className="d4 mb-2" title={`D4: ${display <= max ? display : max}`}>
        {display <= max ? display : max}
      </div>
      {!noLabel && (
        <p className="text-xs font-bold">
          D4: {display <= max ? display : max}
        </p>
      )}
    </>
  );
};

export const D6: React.FC<dieProps> = ({ display, max = 6, noLabel }) => {
  return (
    <>
      <div className="d6 mb-2" title={`D6: ${display <= max ? display : max}`}>
        {display <= max ? display : max}
      </div>
      {!noLabel && (
        <p className="text-xs font-bold">
          D6: {display <= max ? display : max}
        </p>
      )}
    </>
  );
};

export const D8: React.FC<dieProps> = ({ display, max = 8, noLabel }) => {
  return (
    <>
      <div className="d8 mb-2" title={`D8: ${display <= max ? display : max}`}>
        {display <= max ? display : max}
      </div>
      {!noLabel && (
        <p className="text-xs font-bold">
          D8: {display <= max ? display : max}
        </p>
      )}
    </>
  );
};

export const D10: React.FC<dieProps> = ({ display, max = 10, noLabel }) => {
  return (
    <>
      <div
        className="d10 mb-2"
        title={`D10: ${display <= max ? display : max}`}
      >
        {display <= max ? display : max}
      </div>
      {!noLabel && (
        <p className="text-xs font-bold">
          D10: {display <= max ? display : max}
        </p>
      )}
    </>
  );
};

export const D12: React.FC<dieProps> = ({ display, max = 12, noLabel }) => {
  return (
    <>
      <div
        className="d12 mb-2"
        title={`D12: ${display <= max ? display : max}`}
      >
        {display <= max ? display : max}
      </div>
      {!noLabel && (
        <p className="text-xs font-bold">
          D12: {display <= max ? display : max}
        </p>
      )}
    </>
  );
};

export const D20: React.FC<dieProps> = ({ display, max = 20, noLabel }) => {
  return (
    <>
      <div
        className="d20 mb-2"
        title={`D20: ${display <= max ? display : max}`}
      >
        {display <= max ? display : max}
      </div>
      {!noLabel && (
        <p className="text-xs font-bold">
          D20: {display <= max ? display : max}
        </p>
      )}
    </>
  );
};
