"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { site } from "@/lib/site";
import { useTheme } from "./ThemeProvider";
import { useLang } from "./MultiLanguage";
import LanguageSwitcher from "./LanguageSwitcher";
import ResumeDownload from "./ResumeDownload";

const navItems = [
  { label: "Home", href: "#home", mr: "မေ" },
  { label: "About", href: "#about", mr: "အကြောင်း" },
  { label: "Skills", href: "#skills", mr: "နည်းပညာ" },
  { label: "Services", href: "#services", mr: "စနစ်များ" },
  { label: "Projects", href: "#projects", mr: "ပရိုဂျက်" },
  { label: "Apps", href: "#apps", mr: "App" },
  { label: "Contact", href: "#contact", mr: "ဆက်သွယ်" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [glow, setGlow] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang } = useLang();

  useEffect(() => {
    const onScroll = () => setGlow(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        glow
          ? "backdrop-blur bg-[#050816]/70 shadow-[0_0_40px_rgba(0,245,255,0.35)] border-b border-cyan-400/30"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <a href="#home" className="text-xl font-black neon-text">
          {site.displayName}
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="group relative text-white/70 hover:text-cyan-300 transition">
              <span className="absolute -top-3 left-0 right-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              {lang === "en" ? item.label : item.mr}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-cyan-300 hover:bg-cyan-400/20 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <LanguageSwitcher />
          <ResumeDownload />
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-cyan-300">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden backdrop-blur bg-[#050816]/90 border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-cyan-300 py-2">
                {lang === "en" ? item.label : item.mr}
              </a>
            ))}
            <div className="flex items-center gap-3 mt-2">
              <button onClick={toggleTheme} className="p-2 rounded-lg bg-white/10 text-cyan-300">
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <LanguageSwitcher />
              <ResumeDownload />
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
