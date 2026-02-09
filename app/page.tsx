"use client";

import DeleteButton from "@/components/deleteModal";
import { Container, Grid } from "@/components/layout/gridLayout";
import { Table, TableCell, TableRow } from "@/components/ui/table";
import { useCharacters } from "@/lib/hooks/useCharacters";

const AppHomePage = () => {
  const { characters, remove } = useCharacters();

  return (
    <main className="w-screen h-screen">
      <Container>
        <Grid>
          <div className="col-span-8 col-start-3 bg-red w-full">
            <Table headings={["ID", "Name", "Actions"]}>
              {characters!.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>{c.id}</TableCell>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>
                    Edit |{" "}
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
        </Grid>
      </Container>
    </main>
  );
};

export default AppHomePage;
