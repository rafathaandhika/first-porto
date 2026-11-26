"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "id" | "en";

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "id",
  setLang: () => {},
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("id");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio_lang");
      if (saved === "en" || saved === "id") {
        setLangState(saved);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const setLang = (next: Language) => {
    setLangState(next);
    try {
      localStorage.setItem("portfolio_lang", next);
    } catch {
      // ignore storage errors
    }
  };

  const toggleLang = () => {
    setLang(lang === "id" ? "en" : "id");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
