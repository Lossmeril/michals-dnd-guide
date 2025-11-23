interface DieImageProps {
  type: string;
  number: string;

  noLabel?: boolean;
}

const DieImage: React.FC<DieImageProps> = ({ type, number, noLabel }) => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/dice/${type}_${number}.svg`}
        title={`${type}: ${number}`}
        alt={`${type}: ${number}`}
        className="w-10"
      />
      {!noLabel && <p className="text-xs font-bold">{`${type}: ${number}`}</p>}
    </>
  );
};

interface DieProps {
  display: string;
  noLabel?: boolean;
}

interface D4Props extends Omit<DieProps, "display"> {
  display: "1" | "2" | "3" | "4";
}

export const D4: React.FC<D4Props> = ({ display = "1", noLabel }) => {
  return <DieImage type="D4" number={display} noLabel={noLabel} />;
};

interface D6Props extends Omit<DieProps, "display"> {
  display: "1" | "2" | "3" | "4" | "5" | "6";
}

export const D6: React.FC<D6Props> = ({ display, noLabel }) => {
  return <DieImage type="D6" number={display} noLabel={noLabel} />;
};
interface D8Props extends Omit<DieProps, "display"> {
  display: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
}

export const D8: React.FC<D8Props> = ({ display = "1", noLabel }) => {
  return <DieImage type="D8" number={display} noLabel={noLabel} />;
};

interface D10Props extends Omit<DieProps, "display"> {
  display: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0";
}

export const D10: React.FC<D10Props> = ({ display = "1", noLabel }) => {
  return <DieImage type="D10" number={display} noLabel={noLabel} />;
};

interface D100Props extends Omit<DieProps, "display"> {
  display: "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "00";
}

export const D100: React.FC<D100Props> = ({ display = "1", noLabel }) => {
  return <DieImage type="D10" number={display} noLabel={noLabel} />;
};

interface D12Props extends Omit<DieProps, "display"> {
  display:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
}

export const D12: React.FC<D12Props> = ({ display = "1", noLabel }) => {
  return <DieImage type="D12" number={display} noLabel={noLabel} />;
};

interface D20Props extends Omit<DieProps, "display"> {
  display:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20";
}

export const D20: React.FC<D20Props> = ({ display = "1", noLabel }) => {
  return <DieImage type="D20" number={display} noLabel={noLabel} />;
};
