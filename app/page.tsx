import Card from "@/components/card";

const AppHomePage = () => {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <header className="mb-8">
        <h1 className="font-serif text-3xl text-[#2b1d0e]">
          Michal&apos;s D&amp;D Guide
        </h1>
        <p className="mt-2 text-sm text-[#2b1d0e]/80">
          Choose what you want to do.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <Card
          title="Read Rules"
          description="Browse your custom ruleset, rulings, and reference pages."
          href="/app/rules"
          imageSrc="https://www.dndbeyond.com/avatars/thumbnails/43940/759/420/618/638607457242601819.png"
          imagePos="top"
        />

        <Card
          title="Make a Character"
          description="Start a new character and choose race, perks, and classes."
          href="/app/characters/new"
          imageSrc="https://www.dndbeyond.com/avatars/thumbnails/43940/869/420/618/638607459717652437.png"
          imagePos="top"
        />

        <Card
          title="Browse Characters"
          description="View and manage your characters; print character sheets."
          href="/app/characters"
          imageSrc="https://www.dndbeyond.com/avatars/thumbnails/43940/614/420/618/638607453019977939.png"
          imagePos="top"
        />
      </section>
    </main>
  );
};

export default AppHomePage;
