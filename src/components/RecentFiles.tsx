import React from "react";
import { IconPhoto } from "@tabler/icons";
import {
  GrDocumentPdf,
  GrDocumentCsv,
  GrDocumentTxt,
  GrDocumentWord,
  GrDocumentPpt,
} from "react-icons/gr";
import { Grid } from "@mantine/core";
export default function RecentFiles() {
  return (
    <section className="mt-10 text-black">
      <h2 className="font-semibold">Quick Access</h2>
      <Grid className="mt-5 rounded">
        <Grid.Col span={4}>
          <div className="w-full bg-white flex justify-start p-5 font-semibold">
            <GrDocumentCsv className="my-auto" />
            <span className="ml-2"> Sales.csv</span>
          </div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div className="w-full bg-white flex justify-start p-5 font-semibold">
            <GrDocumentPdf className="my-auto" />
            <span className="ml-2"> Resume.pdf</span>
          </div>
        </Grid.Col>
        <Grid.Col span={4}>
          <div className="w-full bg-white flex justify-start p-5 font-semibold">
            <GrDocumentTxt className="my-auto" />
            <span className="ml-2"> Notes.txt</span>
          </div>
        </Grid.Col>
      </Grid>
    </section>
  );
}
