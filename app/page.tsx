"use client";

import { useCharacters } from "@/lib/hooks/useCharacters";

const AppHomePage = () => {
  const { characters, update, remove } = useCharacters();

  return (
    <main className="w-screen h-screen grid place-content-center">
      <div>
        {characters!.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </div>
    </main>
  );
};

export default AppHomePage;
