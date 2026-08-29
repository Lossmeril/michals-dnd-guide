"use client";

import {
  Container,
  Grid,
  GridContent,
  GridContentFull,
} from "@/components/layout/layoutPrimitives";
import Button from "@/components/ui/button";

const AppHomePage = () => {
  return (
    <main className="min-h-screen py-40">
      <Container>
        <Grid>
          <GridContent>
            <GridContentFull>
              <div className="prose">
                <h1>Welcome to Michal&apos;s D&amp;D Ruleset!</h1>
                <p>
                  This is an unlogged home page. Please log in to access the
                  dashboard.
                </p>
              </div>
              <Button label={"Log in"} mode="default" href="/login" />
            </GridContentFull>
          </GridContent>
        </Grid>
      </Container>
    </main>
  );
};

export default AppHomePage;
