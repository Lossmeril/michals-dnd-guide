"use client";

import DeleteButton from "@/components/deleteModal";
import { Container, Grid } from "@/components/layout/gridLayout";
import Button from "@/components/ui/button";
import { Table, TableCell, TableRow } from "@/components/ui/table";
import { useCharacters } from "@/lib/hooks/useCharacters";
import { useRaces } from "@/lib/hooks/useRaces";
import {
  getCharactersClasses,
  getRaceById,
} from "@/lib/helpers/relationGetters";
import { useClasses } from "@/lib/hooks/useClasses";
import { useRelCharacterClasses } from "@/lib/hooks/useRelCharacterClasses";
import { IMAGE_PLACEHOLDER } from "@/lib/webGlobals";
import {
  CreateCharacterButton,
  CreateRaceButton,
} from "@/components/createModal";
import { BsPencilSquare } from "react-icons/bs";

const AppHomePage = () => {
  const { characters, remove, create } = useCharacters();
  const { races, remove: removeRace, create: createRace } = useRaces();
  const { classes } = useClasses();
  const { relCharacterClasses } = useRelCharacterClasses();

  return (
    <main className="w-screen h-screen py-40">
      <Container>
        <Grid>
          <div className="col-span-4 md:col-span-6 lg:col-span-8 xl:col-span-10 xl:col-start-2 w-full">
            <h3>Characters</h3>
            <CreateCharacterButton onCreate={create} />

            <Table
              headings={[
                "Image",
                "Name",
                "Level",
                "Race",
                "Classes",
                "Actions",
              ]}
            >
              {characters!.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.image ?? IMAGE_PLACEHOLDER}
                      alt={`${c.name} portrait`}
                      className="w-16 h-16 object-cover"
                    />
                  </TableCell>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>{c.level}</TableCell>
                  <TableCell>
                    {getRaceById(races!, c.race || "")?.name || "Unknown Race"}
                  </TableCell>
                  <TableCell>
                    {getCharactersClasses(classes!, relCharacterClasses!, c.id)
                      .map((cls) => cls.name)
                      .join(", ")}
                  </TableCell>
                  <TableCell>
                    <Button
                      label={<BsPencilSquare className="text-base" />}
                      type="button"
                      href={`/characters/${c.id}`}
                      mode="inverted"
                    />
                    <DeleteButton
                      entityName={c.name}
                      onDelete={() => remove(c.id)}
                      confirmPrefix="I want to kill"
                      entityType="character"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          </div>

          <div className="col-span-4 md:col-span-6 lg:col-span-8 xl:col-span-10 xl:col-start-2 w-full">
            <h3>Races</h3>
            <CreateRaceButton onCreate={createRace} />
            <Table headings={["Race", "Actions"]}>
              {races.map((r) => (
                <TableRow key={r.id}>
                  <TableCell>{r.name}</TableCell>

                  <TableCell>
                    <DeleteButton
                      entityName={r.name ?? "Unknown Race"}
                      onDelete={() => removeRace(r.id)}
                      entityType="race"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          </div>
        </Grid>
      </Container>
    </main>
  );
};

export default AppHomePage;
