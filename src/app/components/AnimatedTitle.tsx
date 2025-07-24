// src/app/components/AnimatedTitle.tsx

'use client';

import { motion } from 'framer-motion';

export default function AnimatedTitle() {
  return (
    <motion.h1
      className="text-4xl md:text-5xl font-bold mb-4 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        color: [
          '#ffffff',
          '#00ffff',
          '#38bdf8',
          '#7c3aed',
          '#facc15',
          '#ffffff',
        ],
      }}
      transition={{
        duration: 8,
        ease: 'easeInOut',
        repeat: Infinity,
      }}
    >
      🌍 Welcome to PetroBrain Global
    </motion.h1>
  );
}

