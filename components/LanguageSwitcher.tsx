"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div 
      className="inline-flex items-center bg-primary/5 border border-primary/10 rounded-full p-0.5" 
      role="group" 
      aria-label="Sélecteur de langue / Language selector"
    >
      <button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
          language === "fr"
            ? "bg-primary text-white shadow-sm"
            : "text-primary hover:bg-primary/10"
        }`}
        aria-current={language === "fr" ? "true" : "false"}
        aria-label="Passer le site en français"
      >
        FR
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
          language === "en"
            ? "bg-primary text-white shadow-sm"
            : "text-primary hover:bg-primary/10"
        }`}
        aria-current={language === "en" ? "true" : "false"}
        aria-label="Switch site to English"
      >
        EN
      </button>
    </div>
  );
};
