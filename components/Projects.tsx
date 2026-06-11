"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { ExternalLink, Github } from "lucide-react";
import { featuredProjects } from "@/lib/data";
import { GlowOrb } from "./GlowOrb";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="px-6 md:px-10 py-24 relative overflow-hidden">
      <GlowOrb className="w-80 h-80 top-20 right-20 bg-yellow-300" />
      <GlowOrb className="w-96 h-96 bottom-20 left-20 bg-cyan-400" />

      <SectionHeading label="Projects" title="Featured Work &amp; GitHub Repos" />

      <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {featuredProjects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group relative border border-white/10 bg-white/5 p-5 rounded-xl cyber-frame hover:border-cyan-400/50 transition-colors"
          >
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 rounded bg-cyan-400/20 text-cyan-300 text-xs border border-cyan-400/30">
                {p.tag}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 mt-2">{p.title}</h3>
            <p className="text-white/65 leading-6 mb-4">{p.desc}</p>

            <div className="flex items-center gap-3">
              <a
                href={p.demo}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-sm hover:scale-105 transition-transform"
              >
                <ExternalLink size={16} />
                Demo
              </a>
              <a
                href={p.source}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-colors"
              >
                <Github size={16} />
                Source
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto max-w-4xl text-center mt-10">
        <a
          href="https://github.com/Dev-moe-kyawaung/"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-400 via-pink-500 to-yellow-300 text-black font-bold hover:scale-105 transition-transform"
        >
          <Github />
          View All GitHub Repos
        </a>
      </div>
    </section>
  );
}
