import React from "react";
import { DropZone } from "./components/DropZone";
import Files from "./components/Files";
import { Folders } from "./components/Folders";
import { Footer } from "./components/Footer";
import { SideNavBar } from "./components/NavBar";
import RecentFiles from "./components/RecentFiles";

export default function App() {
  return (
    <main
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "space-between",
      }}
    >
      <SideNavBar />
      <section
        className="m-20 mb-0"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Folders />
        <RecentFiles />
        <Files />
      </section>
      <SideNavBar />
    </main>
  );
}
