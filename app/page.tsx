"use client";

import DeleteButton from "@/components/deleteModal";
import { Container, Grid } from "@/components/layout/gridLayout";
import Button from "@/components/ui/button";
import { Table, TableCell, TableRow } from "@/components/ui/table";
import { useCharacters } from "@/lib/hooks/useCharacters";
import { useRaces } from "@/lib/hooks/useRaces";

const AppHomePage = () => {
  const { characters, remove } = useCharacters();
  const { races } = useRaces();

  return (
    <main className="w-screen h-screen py-40">
      <Container>
        <Grid>
          <div className="col-span-10 col-start-2 w-full">
            <Table headings={["Image", "Name", "Level", "Race", "Actions"]}>
              {characters!.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>{c.image}</TableCell>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>{c.level}</TableCell>
                  <TableCell>
                    {races.find((r) => r.id === c.race)?.name}
                  </TableCell>
                  <TableCell>
                    <Button
                      label="Edit"
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

          <div className="col-span-10 col-start-2 w-full">
            <Table headings={["Race", "Actions"]}>
              {races.map((r) => (
                <TableRow key={r.id}>
                  <TableCell>{r.name}</TableCell>

                  <TableCell>
                    <DeleteButton
                      entityName={r.name ?? "Unknown Race"}
                      onDelete={() => remove(r.id)}
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
