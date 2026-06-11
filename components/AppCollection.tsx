"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import {
  Smartphone,
  Gamepad2,
  Music,
  Globe,
  Briefcase,
  DollarSign,
  Cloud,
  Wallet,
  ClipboardList,
  Film,
  Star
} from "lucide-react";
import { appCollection } from "@/lib/data";

const appIcons: Record<string, React.ReactNode> = {
  "Social Dashboard": <Smartphone />,
  "PWA App": <Smartphone />,
  "Admin Dashboard": <Briefcase />,
  "Stock Market": <DollarSign />,
  "Game Collection": <Gamepad2 />,
  "Music Player": <Music />,
  "Chat App": <Smartphone />,
  "World Cup": <Globe />,
  "E-commerce": <Briefcase />,
  Portfolio: <Smartphone />,
  "Money Tracker": <DollarSign />,
  Weather: <Cloud />,
  Crypto: <Wallet />,
  Todo: <ClipboardList />,
  "Video Player": <Film />,
  "LEGEND!": <Star />
};

const appColors: Record<string, string> = {
  "Social Dashboard": "from-cyan-400 to-blue-500",
  "PWA App": "from-cyan-400 to-blue-500",
  "Admin Dashboard": "from-fuchsia-400 to-pink-500",
  "Stock Market": "from-yellow-300 to-orange-400",
  "Game Collection": "from-green-400 to-emerald-500",
  "Music Player": "from-purple-400 to-indigo-500",
  "Chat App": "from-cyan-400 to-blue-500",
  "World Cup": "from-yellow-300 to-orange-400",
  "E-commerce": "from-fuchsia-400 to-pink-500",
  Portfolio: "from-cyan-400 to-blue-500",
  "Money Tracker": "from-yellow-300 to-orange-400",
  Weather: "from-cyan-400 to-blue-500",
  Crypto: "from-purple-400 to-indigo-500",
  Todo: "from-green-400 to-emerald-500",
  "Video Player": "from-fuchsia-400 to-pink-500",
  "LEGEND!": "from-yellow-300 to-red-500"
};

export default function AppCollection() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <section id="apps" ref={ref} className="px-6 md:px-10 py-24">
      <SectionHeading label="App Collection" title="📱 16 Senior-Level Apps I Built" />

      <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
        {appCollection.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
            transition={{ duration: 0.5, delay: i * 0.02 }}
            className="group relative border border-white/10 bg-white/5 p-4 rounded-xl cyber-frame hover:border-cyan-400/50 transition-colors"
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${appColors[name] || "from-cyan-400 to-blue-500"} text-black mb-3`}>
              {appIcons[name] || <Smartphone />}
            </div>

            <div className="text-sm text-white/50 mb-1">App #{i + 1}</div>
            <h3 className="text-lg font-bold text-white">{name}</h3>

            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-cyan-400/10 via-fuchsia-500/10 to-yellow-300/10" />
          </motion.div>
        ))}
      </div>

      <div className="mx-auto max-w-4xl text-center mt-10">
        <p className="text-white/65 leading-6 mb-4">
          From social dashboards and POS systems to game collections and AI translation apps — I build production-ready solutions with premium UI polish.
        </p>
        <a
          href="https://github.com/moekyawaung-tech"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-300 text-black font-bold hover:scale-105 transition-transform"
        >
          Explore All Apps on GitHub
        </a>
      </div>
    </section>
  );
}
