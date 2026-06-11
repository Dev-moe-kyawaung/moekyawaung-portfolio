"use client";

import { motion } from "framer-motion";

export function GlowOrb({ className }: { className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 ${className || ""}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.25, 0.4, 0.25]
      }}
      transition={{ duration: 4, repeat: Infinity }}
    />
  );
}
