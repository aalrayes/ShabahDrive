export default function Files(props: any) {
  return (
    <div className="overflow-x-auto mt-10">
      <h2 className="my-5 font-semibold">Recent Upload Files</h2>
      <table className="table w-full" style={{ backgroundColor: "white" }}>
        <thead style={{ backgroundColor: "white" }}>
          <tr style={{ backgroundColor: "white" }} className="">
            <th></th>
            <th>Name</th>
            <th>Size</th>
            <th>Last modified</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "#fffff" }}>
          <tr>
            <th>1</th>
            <td>Abdullah-Alrayes-resume.pdf</td>
            <td>1 MB</td>
            <td>Yesterday</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Notes.txt</td>
            <td>100 KB</td>
            <td>Yesterday</td>
          </tr>{" "}
          <tr>
            <th>3</th>
            <td>Selfie</td>
            <td>10 MB</td>
            <td>Yesterday</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
