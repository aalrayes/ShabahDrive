import { IconPhoto, IconFolderMinus, IconBrandYoutube } from "@tabler/icons";
import { Progress } from "@mantine/core";

export function Folders() {
  return (
    <section className="flex w-full justify-center ">
      <article
        className="flex flex-col justify-around p-5  bg-green-800 rounded text-white mr-10"
        style={{ width: "250px", height: "180px" }}
      >
        <div className="h-1/3 flex justify-start w-full">
          <IconPhoto size={40} />
        </div>
        <div className="flex justify-between">
          <span className="font-sans font-semibold">Images</span>
          <span>14 GB</span>
        </div>
        <Progress color="lime" radius="md" size="md" value={50} />
      </article>

      <article
        className="flex flex-col justify-around p-5  bg-green-800 rounded text-white mr-10"
        style={{ width: "220px", height: "180px" }}
      >
        <div className="h-1/3 flex justify-start w-full">
          <IconFolderMinus size={40} />
        </div>

        <div className="flex justify-between">
          <span className="font-sans font-semibold">Documents</span>
          <span>14 GB</span>
        </div>
        <Progress color="lime" radius="md" size="md" value={80} />
      </article>

      <article
        className="flex flex-col justify-around p-5  bg-green-800 rounded text-white "
        style={{ width: "220px", height: "180px" }}
      >
        <div className="h-1/3 flex justify-start w-full">
          <IconBrandYoutube size={40} />
        </div>

        <div className="flex justify-between">
          <span className="font-sans font-semibold">Media</span>
          <span>14 GB</span>
        </div>
        <Progress color="lime" radius="md" size="md" value={65} />
      </article>
    </section>
  );
}
