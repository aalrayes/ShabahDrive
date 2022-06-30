import React from "react";
import { Grid, Skeleton, Container } from "@mantine/core";
export default function Folders() {
  const child = <Skeleton height={140} radius="md" animate={false} />;
  return (
    <section style={{ margin: "1rem 10rem" }}>
      <header>
        <h2>Folders</h2>
      </header>
      <Container my="md">
        <Grid>
          <Grid.Col xs={3}>{child}</Grid.Col>
          <Grid.Col xs={3}>{child}</Grid.Col>
          <Grid.Col xs={3}>{child}</Grid.Col>
          <Grid.Col xs={3}>{child}</Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
