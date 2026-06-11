"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { SectionHeading } from "./SectionHeading";
import { SocialLinks } from "./SocialLinks";
import { site } from "@/lib/site";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  const [counts, setCounts] = useState({ certs: 0, years: 0, projects: 0 });

  useEffect(() => {
    if (!inView) return;
    const end = { certs: 82, years: 3, projects: 43 };
    const interval = window.setInterval(() => {
      setCounts((prev) => {
        const next = {
          certs: Math.min(prev.certs + 1, end.certs),
          years: Math.min(prev.years + 1, end.years),
          projects: Math.min(prev.projects + 1, end.projects)
        };
        if (next.certs >= end.certs && next.years >= end.years && next.projects >= end.projects) {
          window.clearInterval(interval);
        }
        return next;
      });
    }, 12);

    return () => window.clearInterval(interval);
  }, [inView]);

  return (
    <section id="about" ref={ref} className="px-6 md:px-10 py-24">
      <SectionHeading label="About" title="Developer by passion,<br/>learner by nature." />

      <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-white/75 leading-8">
            I am a passionate and self-motivated developer who believes in continuous learning and growth. From web development to mobile apps, databases to AI — I consistently expand my skill set across the full technology spectrum.
          </p>
          <p className="text-white/75 leading-8 mt-4">
            My certification portfolio demonstrates practical, structured learning across 9 major domains and over 82 technical subjects — from programming languages and web frameworks to machine learning, blockchain, and cybersecurity.
          </p>
          <p className="text-white/75 leading-8 mt-4">
            I build with intention: clean code, modern practices, and a genuine love for problem-solving.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="border border-cyan-400/30 bg-white/5 p-4 rounded-xl cyber-frame">
              <div className="text-3xl font-black neon-text">{counts.certs}+</div>
              <div className="text-white/60">Certificates</div>
            </div>
            <div className="border border-fuchsia-400/30 bg-white/5 p-4 rounded-xl cyber-frame">
              <div className="text-3xl font-black neon-text">{counts.years}+</div>
              <div className="text-white/60">Years</div>
            </div>
            <div className="border border-yellow-400/30 bg-white/5 p-4 rounded-xl cyber-frame">
              <div className="text-3xl font-black neon-text">{counts.projects}+</div>
              <div className="text-white/60">Projects</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-3 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-300 animate-spin-slow mx-auto">
            <div className="w-full h-full rounded-full bg-[#07111f] p-3">
              <img src={site.gravatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>

          <div className="mt-8 border border-white/10 bg-white/5 p-6 rounded-xl">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-white/50">Name</span><div className="text-white">{site.displayName}</div></div>
              <div><span className="text-white/50">Title</span><div className="text-cyan-300">{site.title}</div></div>
              <div><span className="text-white/50">Location</span><div className="text-white">{site.location}</div></div>
              <div><span className="text-white/50">Current</span><div className="text-fuchsia-300">{site.currentProject}</div></div>
            </div>
          </div>

          <SocialLinks />
        </motion.div>
      </div>
    </section>
  );
}
