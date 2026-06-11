"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import { GlowOrb } from "./GlowOrb";

const services = [
  { title: "Mobile Apps", desc: "Senior Android & Flutter apps with Jetpack Compose, MVVM, and Clean Architecture.", icon: "📱", gradient: "from-cyan-400 to-blue-500" },
  { title: "Web Development", desc: "Next.js, Vue.js premium portfolios with polished motion and cyber aesthetics.", icon: "💻", gradient: "from-fuchsia-400 to-pink-500" },
  { title: "UI/UX Design", desc: "Advanced component reuse, animation effects, custom painting, and visual polish.", icon: "🎨", gradient: "from-yellow-300 to-orange-400" },
  { title: "AI / ML", desc: "Claude API, TFLite, On-Device ML for translation and intelligent apps.", icon: "🤖", gradient: "from-purple-400 to-indigo-500" },
  { title: "Cybersecurity", desc: "Ethical hacking, cybersecurity practices, and secure app development.", icon: "🔐", gradient: "from-green-400 to-emerald-500" },
  { title: "DevOps & CI/CD", desc: "GitHub Actions automation, Firebase Hosting, and deployment pipelines.", icon: "⚡", gradient: "from-red-400 to-rose-500" }
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <section id="services" ref={ref} className="px-6 md:px-10 py-24 relative overflow-hidden">
      <GlowOrb className="w-96 h-96 top-10 left-10 bg-cyan-400" />
      <GlowOrb className="w-80 h-80 bottom-10 right-10 bg-fuchsia-500" />

      <SectionHeading label="Services" title="What I Build &amp; Deliver" />

      <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group relative border border-white/10 bg-white/5 p-6 rounded-xl cyber-frame overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute -inset-full group-hover:animate-[beam_2s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2 h-full" />
            </div>

            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r ${s.gradient} text-2xl mb-4`}>
              {s.icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
            <p className="text-white/65 leading-6">{s.desc}</p>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @keyframes beam {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}
