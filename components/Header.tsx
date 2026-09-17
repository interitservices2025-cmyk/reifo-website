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
  const isSectorsActive = voletsItems.some(item => pathname === item.href) || pathname === "/nos-volets";
  const isParticipateActive = participerItems.some(item => pathname === item.href);
  const isGalleryActive = pathname === "/galerie";
  const isNewsActive = pathname === "/actualites" || pathname.startsWith("/actualites/");
  const isContactActive = pathname === "/contact";

  return (
    <header
      className={`sticky top-0 z-50 bg-white border-b border-border-custom transition-smooth ${
        isScrolled
          ? "shadow-md py-3.5"
          : "shadow-sm py-4"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 focus:outline-none">
          <div className="relative w-36 h-12 md:w-44 md:h-14">
            <Image
              src="/logo.png"
              alt="Logo REIFO"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link 
            href="/" 
            className={`text-sm font-semibold transition-smooth focus:outline-none ${
              isHomeActive 
                ? "text-accent" 
                : "text-primary/80 hover:text-primary"
            }`}
          >
            {t("nav.home")}
          </Link>
          
          <Link 
            href="/a-propos" 
            className={`text-sm font-semibold transition-smooth focus:outline-none ${
              isAboutActive 
                ? "text-accent" 
                : "text-primary/80 hover:text-primary"
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
                isSectorsActive 
                  ? "text-accent" 
                  : "text-primary/80 hover:text-primary"
              }`}
              aria-expanded={voletsOpen}
            >
              <span>{t("nav.sectors")}</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {voletsOpen && (
              <div className="absolute top-full left-0 w-64 bg-bg-surface border border-border-custom shadow-xl rounded-xl py-2 mt-0 z-50 animate-fade-in">
                {voletsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2.5 text-sm font-medium transition-smooth ${
                      pathname === item.href 
                        ? "text-accent bg-primary/5" 
                        : "text-primary/80 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t border-border-custom/50 my-1"></div>
                <Link
                  href="/nos-volets"
                  className={`block px-4 py-2.5 text-xs font-semibold transition-smooth ${
                    pathname === "/nos-volets" 
                      ? "text-accent" 
                      : "text-secondary hover:text-primary"
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
                isParticipateActive 
                  ? "text-accent" 
                  : "text-primary/80 hover:text-primary"
              }`}
              aria-expanded={participerOpen}
            >
              <span>{t("nav.participate")}</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {participerOpen && (
              <div className="absolute top-full left-0 w-60 bg-bg-surface border border-border-custom shadow-xl rounded-xl py-2 mt-0 z-50 animate-fade-in">
                {participerItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2.5 text-sm font-medium transition-smooth ${
                      pathname === item.href 
                        ? "text-accent bg-primary/5" 
                        : "text-primary/80 hover:text-primary hover:bg-primary/5"
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
              isGalleryActive 
                ? "text-accent" 
                : "text-primary/80 hover:text-primary"
            }`}
          >
            {t("nav.gallery")}
          </Link>
          
          <Link 
            href="/actualites" 
            className={`text-sm font-semibold transition-smooth focus:outline-none ${
              isNewsActive 
                ? "text-accent" 
                : "text-primary/80 hover:text-primary"
            }`}
          >
            {t("breadcrumbs.news")}
          </Link>

          <Link 
            href="/contact" 
            className={`text-sm font-semibold transition-smooth focus:outline-none ${
              isContactActive 
                ? "text-accent" 
                : "text-primary/80 hover:text-primary"
            }`}
          >
            {t("nav.contact")}
          </Link>
        </nav>

        {/* Right actions (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          <LanguageSwitcher />
          <Link href="/devenir-membre" passHref>
            <Button variant="accent" size="sm">
              {t("nav.cta")}
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center space-x-3">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary hover:text-secondary p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            aria-expanded={isOpen}
            aria-label="Menu principal"
          >
            <span className="sr-only">Ouvrir le menu</span>
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden animate-fade-in absolute top-full left-0 w-full bg-bg-surface border-b border-border-custom shadow-lg overflow-y-auto max-h-[80vh]">
          <nav className="flex flex-col px-6 py-4 space-y-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`text-base font-semibold py-2 border-b border-border-custom/30 ${
                isHomeActive ? "text-accent" : "text-primary"
              }`}
            >
              {t("nav.home")}
            </Link>
            
            <Link
              href="/a-propos"
              onClick={() => setIsOpen(false)}
              className={`text-base font-semibold py-2 border-b border-border-custom/30 ${
                isAboutActive ? "text-accent" : "text-primary"
              }`}
            >
              {t("nav.about")}
            </Link>

            {/* Mobile Sectors Section */}
            <div className="py-1">
              <span className={`text-xs font-bold uppercase tracking-wider block mb-2 ${
                isSectorsActive ? "text-accent" : "text-text-muted"
              }`}>
                {t("nav.sectors")}
              </span>
              <div className="pl-4 flex flex-col space-y-2.5 border-l-2 border-secondary/20">
                {voletsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium py-1 ${
                      pathname === item.href ? "text-accent" : "text-primary/80 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/nos-volets"
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-semibold py-1 ${
                    pathname === "/nos-volets" ? "text-accent" : "text-secondary"
                  }`}
                >
                  {t("nav.sectors")} &rarr;
                </Link>
              </div>
            </div>

            {/* Mobile Participate Section */}
            <div className="py-1">
              <span className={`text-xs font-bold uppercase tracking-wider block mb-2 ${
                isParticipateActive ? "text-accent" : "text-text-muted"
              }`}>
                {t("nav.participate")}
              </span>
              <div className="pl-4 flex flex-col space-y-2.5 border-l-2 border-accent/20">
                {participerItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium py-1 ${
                      pathname === item.href ? "text-accent" : "text-primary/80 hover:text-primary"
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
              className={`text-base font-semibold py-2 border-b border-border-custom/30 ${
                isGalleryActive ? "text-accent" : "text-primary"
              }`}
            >
              {t("nav.gallery")}
            </Link>
            
            <Link
              href="/actualites"
              onClick={() => setIsOpen(false)}
              className={`text-base font-semibold py-2 border-b border-border-custom/30 ${
                isNewsActive ? "text-accent" : "text-primary"
              }`}
            >
              {t("breadcrumbs.news")}
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`text-base font-semibold py-2 border-b border-border-custom/30 ${
                isContactActive ? "text-accent" : "text-primary"
              }`}
            >
              {t("nav.contact")}
            </Link>

            <Link href="/devenir-membre" onClick={() => setIsOpen(false)} className="w-full mt-4 block">
              <Button
                variant="accent"
                size="md"
                className="w-full"
              >
                {t("nav.cta")}
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
