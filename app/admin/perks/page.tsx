"use client";

import { CreatePerkButton } from "@/components/createModal";
import DeleteButton from "@/components/deleteModal";
import PerkCard from "@/components/editors/character/PerkCard";
import {
  Container,
  Grid,
  GridContent,
} from "@/components/layout/layoutPrimitives";
import Button from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { usePerks } from "@/lib/hooks/usePerks";
import { BsPencilSquare } from "react-icons/bs";

const PerksPage = () => {
  const { perks, create, remove, loading, error } = usePerks();

  const racialPerks = perks.filter((perk) => perk.perk_type === "racial_perk");
  const classPerks = perks.filter((perk) => perk.perk_type === "class_perk");
  const aspectPerks = perks.filter((perk) => perk.perk_type === "aspect");
  const spellPerks = perks.filter((perk) => perk.perk_type === "spell");

  const sortedPerks = [
    ...racialPerks.sort((a, b) => a.name.localeCompare(b.name)),
    ...classPerks.sort((a, b) => a.name.localeCompare(b.name)),
    ...spellPerks.sort((a, b) => a.name.localeCompare(b.name)),
    ...aspectPerks.sort((a, b) => a.name.localeCompare(b.name)),
  ];

  return (
    <main className="min-h-screen py-40">
      <Container>
        <Grid>
          <GridContent>
            <div className="prose">
              <h2>Perks</h2>
              <CreatePerkButton onCreate={create} />
            </div>

            {loading && <p className="text-sm text-gray-500">Loading…</p>}

            {error &&
              toast({
                description:
                  error.message || "An error occurred while fetching perks.",
                title: "Error!",
                mode: "error",
                icon: <p>X</p>,
              })}

            {!loading && !error && perks.length === 0 && (
              <p className="text-sm text-gray-500">No perks found.</p>
            )}

            <div className="grid grid-cols-4 gap-4 mt-4">
              {sortedPerks.map((perk) => (
                <div key={perk.id} className="relative h-full">
                  <PerkCard perk={perk} />
                  <div className="absolute top-2 right-2 flex flex-col gap-2 flex-nowrap">
                    <Button
                      label={<BsPencilSquare className="text-base" />}
                      type="button"
                      mode="inverted"
                      href={`/admin/perks/${perk.id}`}
                    />
                    <DeleteButton
                      entityName={"perk"}
                      onDelete={() => {
                        remove(perk.id);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GridContent>
        </Grid>
      </Container>
    </main>
  );
};

export default PerksPage;
