"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { Container } from "./Container";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-secondary">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Info & Logo */}
          <div className="flex flex-col space-y-4">
            <div className="relative w-36 h-12 bg-white rounded-lg p-1.5 self-start">
              <Image
                src="/logo.png"
                alt="Logo REIFO"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold font-display border-b border-white/10 pb-2">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a href="#accueil" className="hover:text-secondary transition-smooth focus:outline-none">
                  {t("nav.home")}
                </a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-secondary transition-smooth focus:outline-none">
                  {t("nav.about")}
                </a>
              </li>
              <li>
                <a href="#evenements" className="hover:text-secondary transition-smooth focus:outline-none">
                  {t("nav.events")}
                </a>
              </li>
              <li>
                <a href="#benevolat" className="hover:text-secondary transition-smooth focus:outline-none">
                  {t("nav.volunteer")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Sectors */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold font-display border-b border-white/10 pb-2">
              {t("footer.sectorsTitle")}
            </h3>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a href="#volets" className="hover:text-secondary transition-smooth focus:outline-none">
                  {t("sectors.items.sport.title")}
                </a>
              </li>
              <li>
                <a href="#volets" className="hover:text-secondary transition-smooth focus:outline-none">
                  {t("sectors.items.integration.title")}
                </a>
              </li>
              <li>
                <a href="#volets" className="hover:text-secondary transition-smooth focus:outline-none">
                  {t("sectors.items.school.title")}
                </a>
              </li>
              <li>
                <a href="#volets" className="hover:text-secondary transition-smooth focus:outline-none">
                  {t("sectors.items.social.title")}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold font-display border-b border-white/10 pb-2">
              {t("nav.contact")}
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-secondary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>335 English Mill Court<br />Milton, ON L9E 0A7</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="h-5 w-5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@reifo.ca" className="hover:text-secondary transition-smooth focus:outline-none">
                  contact@reifo.ca
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="h-5 w-5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+15145605414" className="hover:text-secondary transition-smooth focus:outline-none">
                  +1 (514) 560-5414
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 space-y-4 md:space-y-0">
          <div>
            &copy; {currentYear} reifo.ca. {t("footer.rights")}
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-smooth focus:outline-none">{t("footer.legal.privacy")}</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-white transition-smooth focus:outline-none">{t("footer.legal.terms")}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
