"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { ProgressBar } from "./ProgressBar";

const skills = [
  { label: "Kotlin · Jetpack Compose", level: 95 },
  { label: "Flutter · Dart", level: 92 },
  { label: "Next.js · React", level: 90 },
  { label: "Vue.js", level: 85 },
  { label: "Firebase · REST APIs", level: 88 },
  { label: "Python · AI/ML", level: 82 },
  { label: "Cybersecurity · Ethical Hacking", level: 78 },
  { label: "Clean Arch · MVVM", level: 93 }
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="px-6 md:px-10 py-24">
      <SectionHeading label="Tech Stack" title="Skills &amp; Technologies" />

      <div className="mx-auto max-w-4xl mt-12 grid gap-5">
        {skills.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <ProgressBar label={s.label} level={s.level} />
          </motion.div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl mt-12">
        <div className="skills-cloud flex flex-wrap gap-3">
          {["Python","Java","JavaScript","TypeScript","Ruby","Rust","Go","Dart","React","Next.js","Angular","Vue.js","Node.js","Flutter","Kotlin","PostgreSQL","MongoDB","Redis","Docker","AWS","Blockchain","ML","Cyber Security"].map((tag) => (
            <span key={tag} className="skill-chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
