// platform-frontend/src/app/upload/page.tsx
"use client";
import UploadPdf from "../components/UploadPdf";

export default function UploadPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-100 text-black">
      <h1 className="text-3xl font-bold mb-4">Upload PDF</h1>
      <UploadPdf />
    </main>
  );
}

