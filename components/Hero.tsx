"use client";

import { motion } from "framer-motion";
import TypingText from "./TypingText";
import { roles } from "@/lib/data";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 md:px-10">
      <div className="absolute inset-0 grid-bg" />
      <div className="mx-auto max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-300 uppercase tracking-[0.4em] text-sm mb-5">Senior Developer Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            <span className="neon-text">{site.displayName}</span>
          </h1>
          <div className="mt-5 text-xl md:text-2xl text-white/85 h-10">
            <TypingText items={roles} />
          </div>
          <p className="mt-6 max-w-xl text-white/70 leading-8">
            Building premium mobile and web experiences with polished motion, cyber aesthetics, and production-level structure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-3 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-300 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-[#07111f] p-3">
              <img src={site.gravatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
