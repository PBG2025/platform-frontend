// src/app/components/Hero.jsx

import Image from 'next/image';
import logo from './logo_pbg.png'; // same directory

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      {/* Logo above the title */}
      <Image
        src={logo}
        alt="PetroBrain Global Logo"
        width={160}
        height={160}
        className="mb-6"
      />

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-center">
        🌍 Welcome to PetroBrain Global!
      </h1>

      {/* Description */}
      <p className="max-w-xl text-center mb-6 text-lg">
        PetroBrain Global (PBG) is a global, open-source AI platform for the entire oil and gas value chain —
        from exploration, geology, reservoir simulation, and drilling to production optimization, refining,
        and downstream intelligence. Join engineers, researchers, and developers worldwide in reshaping the
        future of energy through transparent, intelligent collaboration.
      </p>

      {/* GitHub Button */}
      <a
        href="https://github.com/PBG2025?tab=repositories"
        className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contribute on GitHub
      </a>
    </section>
  );
}

