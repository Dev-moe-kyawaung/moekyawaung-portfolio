"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "my";

interface LangContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    services: "Services",
    projects: "Projects",
    apps: "Apps",
    contact: "Contact",
    hero_title: "Senior Android Developer",
    hero_subtitle: "Building premium mobile and web experiences",
    about_title: "Developer by passion, learner by nature",
    skills_title: "Skills & Technologies",
    services_title: "What I Build & Deliver",
    projects_title: "Featured Work & GitHub Repos",
    apps_title: "16 Senior-Level Apps I Built",
    contact_title: "Contact Me",
    contact_name: "Name",
    contact_email: "Email",
    contact_message: "Message",
    send: "Send Message",
    error_name: "Name must be at least 2 characters",
    error_email: "Please enter a valid email",
    error_message: "Message must be at least 10 characters"
  },
  my: {
    home: "မေ",
    about: "အကြောင်း",
    skills: "နည်းပညာ",
    services: "စနစ်များ",
    projects: "ပရိုဂျက်",
    apps: "App",
    contact: "ဆက်သွယ်",
    hero_title: "Senior Android Developer",
    hero_subtitle: "Premium mobile နဲ့ web experiences တည်ဆောက်နေသူ",
    about_title: "Developer by passion, learner by nature",
    skills_title: "Skills & Technologies",
    services_title: "What I Build & Deliver",
    projects_title: "Featured Work & GitHub Repos",
    apps_title: "📱 16 Senior-Level Apps I Built",
    contact_title: "Contact Me",
    contact_name: "အမည်",
    contact_email: "အီးမေးလ်",
    contact_message: "စာတို",
    send: "Send Message",
    error_name: "အမည်ကို အနည်းဆုံး ၂ လုံးရေးပါ",
    error_email: "အီးမေးလ် မှန်ကန်အောင်ရေးပါ",
    error_message: "စာကို အနည်းဆုံး ၁၀ လုံးရေးပါ"
  }
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function MultiLanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language;
    if (saved) setLangState(saved);
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const t = (key: string) => translations[lang][key] || key;

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used within MultiLanguageProvider");
  return context;
}
