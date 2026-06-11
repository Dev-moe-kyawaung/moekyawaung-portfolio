"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ProgressBar({ label, level }: { label: string; level: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-50px" });

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between text-sm">
        <span className="text-white/85">{label}</span>
        <span className="text-cyan-300">{level}%</span>
      </div>
      <div className="h-2 mt-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : "0%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-300 rounded-full"
        />
      </div>
    </div>
  );
}
