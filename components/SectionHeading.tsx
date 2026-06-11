"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SectionHeading({ label, title }: { label: string; title: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        className="text-cyan-300 uppercase tracking-[0.4em] text-sm"
      >
        {label}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl font-black mt-4 neon-text"
      >
        {title}
      </motion.h2>
    </div>
  );
}
