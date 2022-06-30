import React from "react";
import { DropZone } from "./components/DropZone";
import { Files } from "./components/Files";
import Folders from "./components/Folders";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

export default function App() {
  return (
    <main
      style={{
        display: "flex",
      }}
    >
      <NavBar />
      <section style={{ display: "flex", flexDirection: "column" }}>
        <Folders />
        <DropZone />
        <Files data={[{ name: "resume", type: "pdf", size: "20" }]} />
        <Footer />
      </section>
    </main>
  );
}
