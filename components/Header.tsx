"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "./Button";
import { Container } from "./Container";

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const pathname = usePathname() || "";
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Dropdown states for desktop
  const [voletsOpen, setVoletsOpen] = useState(false);
  const [participerOpen, setParticiperOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const voletsItems = [
    { label: t("nav.sectorsList.sport"), href: "/sport-sante" },
    { label: t("nav.sectorsList.integration"), href: "/integration-immigrants" },
    { label: t("nav.sectorsList.school"), href: "/appui-integration-scolaire" },
    { label: t("nav.sectorsList.francophonie"), href: "/promotion-francophonie" },
    { label: t("nav.sectorsList.social"), href: "/volet-social" },
  ];

  const participerItems = [
    { label: t("nav.participateList.member"), href: "/devenir-membre" },
    { label: t("nav.participateList.volunteer"), href: "/benevolat" },
    { label: t("nav.participateList.activities"), href: "/activites-evenements" },
  ];

  // Active state detection variables
  const isHomeActive = pathname === "/";
  const isAboutActive = pathname === "/a-propos";
  const isSectorsActive =
    voletsItems.some((item) => pathname === item.href) || pathname === "/nos-volets";
  const isParticipateActive = participerItems.some((item) => pathname === item.href);
  const isGalleryActive = pathname === "/galerie";
  const isNewsActive = pathname === "/actualites" || pathname.startsWith("/actualites/");
  const isContactActive = pathname === "/contact";

  return (
    <header
      className={`sticky top-0 z-50 bg-[#081A3B]/95 backdrop-blur-md border-b border-white/10 transition-smooth ${
        isScrolled ? "shadow-lg shadow-black/25 py-3" : "py-3.5"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo officiel REIFO */}
        <Link href="/" className="flex items-center focus:outline-none group">
          <div className="relative w-32 h-11 md:w-40 md:h-12 rounded-xl bg-[#FCFAF7] px-2.5 py-1 shadow-sm border border-white/15 group-hover:border-white/30 transition-smooth">
            <Image
              src="/logo.png"
              alt="Logo REIFO"
              fill
              priority
              className="object-contain p-0.5"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link
            href="/"
            className={`text-sm font-semibold transition-smooth focus:outline-none ${
              isHomeActive ? "text-[#5CE080]" : "text-white/85 hover:text-white"
            }`}
          >
            {t("nav.home")}
          </Link>

          <Link
            href="/a-propos"
            className={`text-sm font-semibold transition-smooth focus:outline-none ${
              isAboutActive ? "text-[#5CE080]" : "text-white/85 hover:text-white"
            }`}
          >
            {t("nav.about")}
          </Link>

          {/* Dropdown Nos Volets */}
          <div
            className="relative"
            onMouseEnter={() => setVoletsOpen(true)}
            onMouseLeave={() => setVoletsOpen(false)}
          >
            <button
              onClick={() => setVoletsOpen(!voletsOpen)}
              className={`inline-flex items-center text-sm font-semibold transition-smooth focus:outline-none py-2 ${
                isSectorsActive ? "text-[#5CE080]" : "text-white/85 hover:text-white"
              }`}
              aria-expanded={voletsOpen}
            >
              <span>{t("nav.sectors")}</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {voletsOpen && (
              <div className="absolute top-full left-0 w-64 bg-[#0B1E3D] border border-white/15 shadow-2xl rounded-xl py-2 mt-0 z-50 animate-fade-in">
                {voletsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2.5 text-sm font-medium transition-smooth ${
                      pathname === item.href
                        ? "text-[#5CE080] bg-white/[0.06]"
                        : "text-white/85 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t border-white/10 my-1"></div>
                <Link
                  href="/nos-volets"
                  className={`block px-4 py-2.5 text-xs font-semibold transition-smooth ${
                    pathname === "/nos-volets"
                      ? "text-[#F1C40F]"
                      : "text-[#5CE080] hover:text-white"
                  }`}
                >
                  {t("nav.sectors")} &rarr;
                </Link>
              </div>
            )}
          </div>

          {/* Dropdown Participer */}
          <div
            className="relative"
            onMouseEnter={() => setParticiperOpen(true)}
            onMouseLeave={() => setParticiperOpen(false)}
          >
            <button
              onClick={() => setParticiperOpen(!participerOpen)}
              className={`inline-flex items-center text-sm font-semibold transition-smooth focus:outline-none py-2 ${
                isParticipateActive ? "text-[#5CE080]" : "text-white/85 hover:text-white"
              }`}
              aria-expanded={participerOpen}
            >
              <span>{t("nav.participate")}</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {participerOpen && (
              <div className="absolute top-full left-0 w-60 bg-[#0B1E3D] border border-white/15 shadow-2xl rounded-xl py-2 mt-0 z-50 animate-fade-in">
                {participerItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2.5 text-sm font-medium transition-smooth ${
                      pathname === item.href
                        ? "text-[#5CE080] bg-white/[0.06]"
                        : "text-white/85 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/galerie"
            className={`text-sm font-semibold transition-smooth focus:outline-none ${
              isGalleryActive ? "text-[#5CE080]" : "text-white/85 hover:text-white"
            }`}
          >
            {t("nav.gallery")}
          </Link>

          <Link
            href="/actualites"
            className={`text-sm font-semibold transition-smooth focus:outline-none ${
              isNewsActive ? "text-[#5CE080]" : "text-white/85 hover:text-white"
            }`}
          >
            {t("breadcrumbs.news")}
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-semibold transition-smooth focus:outline-none ${
              isContactActive ? "text-[#5CE080]" : "text-white/85 hover:text-white"
            }`}
          >
            {t("nav.contact")}
          </Link>
        </nav>

        {/* Right actions (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          <LanguageSwitcher />
          <Link href="/devenir-membre" passHref>
            <Button variant="secondary" size="sm">
              {t("nav.cta")}
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center space-x-3">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-[#5CE080] p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F1C40F] rounded-lg"
            aria-expanded={isOpen}
            aria-label="Menu principal"
          >
            <span className="sr-only">Ouvrir le menu</span>
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden animate-fade-in absolute top-full left-0 w-full bg-[#081A3B] border-b border-white/15 shadow-2xl overflow-y-auto max-h-[80vh]">
          <nav className="flex flex-col px-6 py-4 space-y-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`text-base font-semibold py-2 border-b border-white/10 ${
                isHomeActive ? "text-[#5CE080]" : "text-white"
              }`}
            >
              {t("nav.home")}
            </Link>

            <Link
              href="/a-propos"
              onClick={() => setIsOpen(false)}
              className={`text-base font-semibold py-2 border-b border-white/10 ${
                isAboutActive ? "text-[#5CE080]" : "text-white"
              }`}
            >
              {t("nav.about")}
            </Link>

            {/* Mobile Sectors Section */}
            <div className="py-1">
              <span
                className={`text-xs font-bold uppercase tracking-wider block mb-2 ${
                  isSectorsActive ? "text-[#5CE080]" : "text-white/60"
                }`}
              >
                {t("nav.sectors")}
              </span>
              <div className="pl-4 flex flex-col space-y-2.5 border-l-2 border-[#32A852]/40">
                {voletsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium py-1 ${
                      pathname === item.href
                        ? "text-[#5CE080]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/nos-volets"
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-semibold py-1 ${
                    pathname === "/nos-volets" ? "text-[#F1C40F]" : "text-[#5CE080]"
                  }`}
                >
                  {t("nav.sectors")} &rarr;
                </Link>
              </div>
            </div>

            {/* Mobile Participate Section */}
            <div className="py-1">
              <span
                className={`text-xs font-bold uppercase tracking-wider block mb-2 ${
                  isParticipateActive ? "text-[#5CE080]" : "text-white/60"
                }`}
              >
                {t("nav.participate")}
              </span>
              <div className="pl-4 flex flex-col space-y-2.5 border-l-2 border-[#F1C40F]/40">
                {participerItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium py-1 ${
                      pathname === item.href
                        ? "text-[#5CE080]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/galerie"
              onClick={() => setIsOpen(false)}
              className={`text-base font-semibold py-2 border-b border-white/10 ${
                isGalleryActive ? "text-[#5CE080]" : "text-white"
              }`}
            >
              {t("nav.gallery")}
            </Link>

            <Link
              href="/actualites"
              onClick={() => setIsOpen(false)}
              className={`text-base font-semibold py-2 border-b border-white/10 ${
                isNewsActive ? "text-[#5CE080]" : "text-white"
              }`}
            >
              {t("breadcrumbs.news")}
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`text-base font-semibold py-2 border-b border-white/10 ${
                isContactActive ? "text-[#5CE080]" : "text-white"
              }`}
            >
              {t("nav.contact")}
            </Link>

            <Link
              href="/devenir-membre"
              onClick={() => setIsOpen(false)}
              className="w-full mt-4 block"
            >
              <Button variant="secondary" size="md" className="w-full">
                {t("nav.cta")}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
