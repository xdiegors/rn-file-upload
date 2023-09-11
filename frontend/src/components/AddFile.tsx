import { ChangeEvent, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default function AddFile() {
  const [file, setFile] = useState<File | null>(null);

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
    } else {
      setFile(null);
    }
  };

  const handleFileUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      await axios
        .post("/file", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          alert("File uploaded successfully.");
        })
        .catch((error) => console.error("Error uploading file:", error));
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleSelectFile} name="file" multiple />
      <button onClick={handleFileUpload}>Enviar</button>
    </div>
  );
}
