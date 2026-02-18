"use client";

import DeleteButton from "@/components/deleteModal";
import {
  Container,
  Grid,
  GridContent,
} from "@/components/layout/layoutPrimitives";
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
  CreateClassButton,
  CreateRaceButton,
} from "@/components/createModal";
import { BsPencilSquare } from "react-icons/bs";

const AppHomePage = () => {
  // -------------------------------------
  // Database hooks
  // -------------------------------------
  const { characters, remove, create } = useCharacters();
  const { races, remove: removeRace, create: createRace } = useRaces();
  const { classes, remove: removeClass, create: createClass } = useClasses();
  const { relCharacterClasses } = useRelCharacterClasses();

  return (
    <main className="min-h-screen py-40">
      <Container>
        <Grid>
          <GridContent>
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
              {characters?.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.image ?? IMAGE_PLACEHOLDER}
                      alt={`${c.name} portrait`}
                      className="h-16 w-16 object-cover"
                    />
                  </TableCell>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>{c.level}</TableCell>
                  <TableCell>
                    {getRaceById(races, c.race || "")?.name || "Unknown Race"}
                  </TableCell>
                  <TableCell>
                    {getCharactersClasses(classes, relCharacterClasses, c.id)
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
          </GridContent>

          {/* ------- RACE TABLE ---------- */}
          <GridContent>
            <h3>Races</h3>
            <CreateRaceButton onCreate={createRace} />
            <Table headings={["Image", "Race", "Actions"]}>
              {races.map((r) => (
                <TableRow key={r.id}>
                  <TableCell>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.image ?? IMAGE_PLACEHOLDER}
                      alt={`${r.name} image`}
                      className="h-16 w-16 object-cover"
                    />
                  </TableCell>
                  <TableCell>{r.name}</TableCell>
                  <TableCell>
                    <Button
                      label={<BsPencilSquare className="text-base" />}
                      type="button"
                      href={`/admin/races/${r.id}`}
                      mode="inverted"
                    />
                    <DeleteButton
                      entityName={r.name ?? "Unknown Race"}
                      onDelete={() => removeRace(r.id)}
                      entityType="race"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          </GridContent>

          {/* ------- CLASSES TABLE ---------- */}
          <GridContent>
            <h3>Classes</h3>
            <CreateClassButton onCreate={createClass} />
            <Table headings={["Class", "Rank", "Actions"]}>
              {classes
                .sort((a, b) => a.class_rank.localeCompare(b.class_rank))
                .map((c) => (
                  <TableRow key={c.id}>
                    <TableCell>{c.name}</TableCell>
                    <TableCell>{c.class_rank}</TableCell>
                    <TableCell>
                      <Button
                        label={<BsPencilSquare className="text-base" />}
                        type="button"
                        href={`/admin/classes/${c.id}`}
                        mode="inverted"
                      />
                      <DeleteButton
                        entityName={c.name ?? "Unknown Class"}
                        onDelete={() => removeClass(c.id)}
                        entityType="class"
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </Table>
          </GridContent>
        </Grid>
      </Container>
    </main>
  );
};

export default AppHomePage;
