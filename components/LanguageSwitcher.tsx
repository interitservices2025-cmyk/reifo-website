"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="inline-flex items-center bg-white/[0.08] border border-white/15 rounded-full p-0.5"
      role="group"
      aria-label="Sélecteur de langue / Language selector"
    >
      <button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F1C40F] ${
          language === "fr"
            ? "bg-white text-[#002D62] shadow-sm"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
        aria-current={language === "fr" ? "true" : "false"}
        aria-label="Passer le site en français"
      >
        FR
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F1C40F] ${
          language === "en"
            ? "bg-white text-[#002D62] shadow-sm"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
        aria-current={language === "en" ? "true" : "false"}
        aria-label="Switch site to English"
      >
        EN
      </button>
    </div>
  );
};
