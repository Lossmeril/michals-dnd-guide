interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  error = null,
  ...props
}) => {
  return (
    <>
      <label className="text-sm text-[#2b1d0e]/80">{label}</label>
      {error && <p className="mb-1 text-sm text-red-900">{error}</p>}
      <input
        className="w-full rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-[#2b1d0e] outline-none focus:border-red-900"
        style={{ border: error ? "red" : "" }}
        {...props}
      />
    </>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string | null;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error = null,
  ...props
}) => {
  return (
    <>
      <label className="text-sm text-[#2b1d0e]/80">{label}</label>
      {error && <p className="mb-1 text-sm text-red-900">{error}</p>}
      <textarea
        className="w-full rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-[#2b1d0e] outline-none focus:border-red-900"
        style={{ border: error ? "red" : "" }}
        {...props}
      />
    </>
  );
};
