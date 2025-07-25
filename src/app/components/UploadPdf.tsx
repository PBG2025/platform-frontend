"use client";

import React, { useState } from "react";

export default function UploadPdf() {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("https://pbgbackend-sc3hr.ondigitalocean.app/upload-pdf/", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Upload</h2>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleChange}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        disabled={!file}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded"
      >
        Upload
      </button>
    </div>
  );
}

