"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { socials } from "@/lib/data";

export function SocialLinks() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <div ref={ref} className="mt-8 flex flex-wrap gap-3">
      {socials.map((s, i) => (
        <motion.a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
          transition={{ duration: 0.4, delay: i * 0.03 }}
          className="border border-white/15 bg-white/5 hover:bg-cyan-400/20 hover:text-cyan-300 px-3 py-1.5 rounded-lg text-sm transition"
        >
          {s.label}
        </motion.a>
      ))}
    </div>
  );
}
