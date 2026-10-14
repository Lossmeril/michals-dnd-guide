// What server actions hand back to the browser: the data, or a message to show

export type Result<T = null> =
  | { data: T; error: null }
  | { data: null; error: string };

/** Runs the work and turns a thrown error into its message */
export const toResult = async <T>(work: () => Promise<T>): Promise<Result<T>> => {
  try {
    return { data: await work(), error: null };
  } catch (e) {
    return { data: null, error: (e as Error).message };
  }
};

/** Throws a Supabase error, so `toResult` can turn it into a message */
export const check = <T extends { error: unknown }>(res: T) => {
  if (res.error) throw res.error;
  return res;
};

/** The file a client upload put in its FormData */
export const fileFrom = (formData: FormData) => {
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) throw new Error("No file");
  return file;
};
