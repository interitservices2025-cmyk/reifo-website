"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { fr } from "../locales/fr";
import { en } from "../locales/en";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    const savedLang = localStorage.getItem("reifo-lang") as Language;
    if (savedLang === "fr" || savedLang === "en") {
      setLanguageState(savedLang);
      document.documentElement.lang = savedLang;
    } else {
      document.documentElement.lang = "fr";
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("reifo-lang", lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string) => {
    const keys = key.split(".");
    const dict = language === "fr" ? fr : en;
    let value: any = dict;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Fallback to key if not found
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
