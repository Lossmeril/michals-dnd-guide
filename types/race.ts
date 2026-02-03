export type Race = {
  name: string;
  description: string | null;
  image_url: string | null; // include if you added it
};

export type DB_Race = Race & {
  id: string;
};

export type RaceInsert = Race;
export type RaceUpdate = Partial<Race>;
