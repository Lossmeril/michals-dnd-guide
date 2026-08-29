"use client";

import DeleteButton from "@/components/deleteModal";
import {
  Container,
  Grid,
  GridContent,
} from "@/components/layout/layoutPrimitives";
import Button from "@/components/ui/button";
import {
  ImageTableCell,
  Table,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { useCharacters } from "@/lib/hooks/useCharacters";
import { useRaces } from "@/lib/hooks/useRaces";
import {
  getCharactersClasses,
  getClassPrerequisiteClasses,
  getRaceById,
} from "@/lib/functions/fetchers";
import { useClasses } from "@/lib/hooks/useClasses";
import { useRelCharacterClasses } from "@/lib/hooks/useRelCharacterClasses";

import {
  CreateCharacterButton,
  CreateClassButton,
  CreateRaceButton,
} from "@/components/createModal";
import { BsPencilSquare } from "react-icons/bs";
import { useClassPrerequisites } from "@/lib/hooks/useClassPrerequisites";

const AppHomePage = () => {
  // -------------------------------------
  // Database hooks
  // -------------------------------------
  const { characters, remove, create } = useCharacters();
  const { races, remove: removeRace, create: createRace } = useRaces();
  const { classes, remove: removeClass, create: createClass } = useClasses();
  const { classPrerequisites, reload: reloadClassPrerequisites } =
    useClassPrerequisites();
  const { relCharacterClasses, reload: reloadRelCharacterClasses } =
    useRelCharacterClasses();

  const handleDeleteClass = async (classId: string) => {
    await removeClass(classId);
    // Deleted by a cascade; reload prereqs and relCharacterClasses to reflect changes
    await Promise.all([
      reloadClassPrerequisites(),
      reloadRelCharacterClasses(),
    ]);
  };

  return (
    <main className="min-h-screen py-40">
      <Container>
        <Grid>
          <GridContent>
            <div className="prose">
              <h2>Characters</h2>
            </div>
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
                  <ImageTableCell imgSrc={c.image} imgAlt={`${c.name}`} />
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
                      href={`/app/characters/${c.id}`}
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
            <div className="prose">
              <h2>Races</h2>
            </div>
            <CreateRaceButton onCreate={createRace} />
            <Table headings={["Image", "Race", "Actions"]}>
              {races.map((r) => (
                <TableRow key={r.id}>
                  <ImageTableCell imgSrc={r.image} imgAlt={`${r.name}`} />
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
            <div className="prose">
              <h2>Classes</h2>
            </div>
            <CreateClassButton onCreate={createClass} />
            <Table
              headings={["Image", "Class", "Parent classes", "Rank", "Actions"]}
            >
              {classes
                .sort((a, b) => a.class_rank.localeCompare(b.class_rank))
                .map((c) => (
                  <TableRow key={c.id}>
                    <ImageTableCell imgSrc={c.image} imgAlt={`${c.name}`} />
                    <TableCell>{c.name}</TableCell>
                    <TableCell>
                      {getClassPrerequisiteClasses(
                        classes,
                        classPrerequisites,
                        c.id,
                      )
                        .map((cls) => cls.name)
                        .join(", ") || "No classes"}{" "}
                    </TableCell>
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
                        onDelete={() => handleDeleteClass(c.id)}
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
