import { Buffer } from "buffer";

const FileUpload = ({ setFile }) => {
  async function handleFileUpload(event) {
    const fileUpload = await event.target.files[0].arrayBuffer();
    const file = {
      type: event.target.files[0].type,
      file: Buffer.from(fileUpload).toString("base64"),
    };
    setFile(file);
  }

  return (
    <section>
      <h2>Get Started</h2>
      <input
        type="file"
        accept=".pdf, .jpg, .jpeg, .png"
        onChange={handleFileUpload}
      />
    </section>
  );
};

export default FileUpload;
