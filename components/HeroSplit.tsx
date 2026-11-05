"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export const HeroSplit: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="accueil"
      className="relative overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(circle at 15% 20%, #102C5E 0%, #081A3B 48%, #051026 100%)",
      }}
      aria-label={t("hero.ariaLabel")}
    >
      {/* ── Texture discrète (grille géométrique & points subtils) ──────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.16]"
        style={{
          backgroundImage: `
            radial-gradient(rgba(255, 255, 255, 0.22) 1px, transparent 1px),
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px, 48px 48px, 48px 48px",
        }}
      />

      {/* ── Halos lumineux subtils aux couleurs REIFO ───────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 -left-36 w-[520px] h-[520px] rounded-full bg-[#2980B9]/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -right-32 w-[460px] h-[460px] rounded-full bg-[#32A852]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 left-1/3 w-[380px] h-[380px] rounded-full bg-[#F1C40F]/[0.05] blur-3xl"
      />

      {/* ── Conteneur principal ─────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-20 pb-12 sm:pb-16">
        {/* ── Grille 2 colonnes ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ── Partie gauche : contenu éditorial ───────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start space-y-6 sm:space-y-7 hero-content">
            {/* Petite étiquette discrète */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/15 px-4 py-1.5 backdrop-blur-sm shadow-sm">
              <span aria-hidden="true" className="text-xs sm:text-sm leading-none">
                ✨
              </span>
              <span className="text-xs sm:text-[13px] font-medium text-white/90 tracking-wide">
                {t("hero.label")}
              </span>
            </div>

            {/* Titre principal avec mots mis en valeur aux couleurs du logo REIFO */}
            <h1 className="font-display font-extrabold text-white leading-[1.1] tracking-tight text-3xl sm:text-4xl md:text-5xl xl:text-[3.35rem] max-w-2xl">
              {t("hero.titlePrefix1")}
              <span className="text-[#3CCB64]">{t("hero.titleHighlight1")}</span>
              {t("hero.titleMid1")}
              <span className="text-[#F1C40F]">{t("hero.titleHighlight2")}</span>
              {t("hero.titleMid2")}
              <span className="text-[#FF6B57]">{t("hero.titleHighlight3")}</span>{" "}
              <span className="text-white">{t("hero.titleSuffix")}</span>
            </h1>

            {/* Description */}
            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              {t("hero.description")}
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto pt-2">
              <Link
                href="/devenir-membre"
                id="hero-cta-member"
                className="inline-flex items-center justify-center gap-2.5 bg-[#32A852] hover:bg-[#289446] text-white font-bold px-7 py-4 rounded-xl text-base shadow-lg shadow-[#32A852]/25 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F1C40F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#081A3B]"
              >
                <span>{t("hero.ctaMember")}</span>
                <span aria-hidden="true" className="text-lg leading-none">
                  →
                </span>
              </Link>

              <Link
                href="/activites-evenements"
                id="hero-cta-activities"
                className="inline-flex items-center justify-center gap-2.5 bg-white/[0.06] hover:bg-white/[0.12] text-white font-semibold px-7 py-4 rounded-xl text-base border border-white/20 hover:border-white/35 backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#081A3B]"
              >
                <span>{t("hero.ctaActivities")}</span>
                <span aria-hidden="true" className="text-lg leading-none text-white/80">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* ── Partie droite : carte photographique REIFO ──────────────── */}
          <div className="lg:col-span-6 xl:col-span-5 relative hero-image pb-4 sm:pb-6 lg:pb-0">
            <div className="relative rounded-3xl bg-[#0B1E3D]/90 border border-white/[0.12] p-4 sm:p-6 shadow-2xl shadow-black/40 backdrop-blur-md">
              {/* En-tête de la carte */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#32A852]/15 border border-[#32A852]/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#5CE080]">
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-[#5CE080]"
                  />
                  {t("hero.cardTagLeft")}
                </span>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-white/65">
                  {t("hero.cardTagRight")}
                </span>
              </div>

              {/* Photographie d'équipe et communauté du Hero REIFO */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#07152E]">
                <Image
                  src="/images/reifo/hero/equipe-communaute-reifo.jpg"
                  alt={t("hero.imageAlt")}
                  width={1456}
                  height={816}
                  priority
                  className="w-full h-auto block object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              {/* Informations sous la photographie */}
              <div className="mt-4 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-bold text-sm sm:text-base">
                  <svg
                    className="w-4 h-4 text-[#2980B9] shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{t("hero.cardLocation")}</span>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed pl-6">
                  {t("hero.cardDescription")}
                </p>
              </div>

              {/* Barre inférieure de la carte & espace pour le badge flottant (ne masque jamais les personnes) */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-3 min-h-[44px]">
                {/* Espace réservé sur grand écran pour le badge flottant en bas à gauche */}
                <div className="hidden sm:block w-48" aria-hidden="true" />

                {/* Version mobile intégrée ou décalée proprement sans débordement */}
                <div
                  className="sm:absolute sm:-bottom-5 sm:-left-4 z-20 flex items-center gap-3 bg-white text-[#002D62] rounded-2xl px-4 py-2.5 shadow-xl shadow-black/30 border border-white/90"
                  aria-label={t("hero.badgeAria")}
                >
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-[#002D62]/10 flex items-center justify-center text-[#002D62]">
                    <svg
                      className="w-5 h-5 text-[#002D62]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#4B5563] leading-tight">
                      {t("hero.floatingBadgeLabel")}
                    </p>
                    <p className="text-xs sm:text-[13px] font-extrabold text-[#002D62] leading-tight mt-0.5">
                      {t("hero.floatingBadgeText")}
                    </p>
                  </div>
                </div>

                {/* Petits points d'identité REIFO à droite */}
                <div className="flex items-center gap-1.5 ml-auto" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#32A852]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F1C40F]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E74C3C]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2980B9]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Zone de statistiques en bas du Hero ───────────────────────── */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl">
            {/* Stat 1 : 5+ */}
            <div>
              <p className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                5<span className="text-[#3CCB64]">+</span>
              </p>
              <p className="text-xs sm:text-sm text-white/70 mt-1 font-medium">
                {t("hero.statYears")}
              </p>
            </div>

            {/* Stat 2 : 500+ */}
            <div>
              <p className="font-display font-extrabold text-2xl sm:text-4xl text-[#F1C40F] tracking-tight">
                500+
              </p>
              <p className="text-xs sm:text-sm text-white/70 mt-1 font-medium">
                {t("hero.statMembers")}
              </p>
            </div>

            {/* Stat 3 : 5 */}
            <div>
              <p className="font-display font-extrabold text-2xl sm:text-4xl text-[#3CCB64] tracking-tight">
                5
              </p>
              <p className="text-xs sm:text-sm text-white/70 mt-1 font-medium">
                {t("hero.statSectors")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Animations CSS ────────────────────────────────────────────── */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .hero-content {
            animation: heroSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
          }
          .hero-image {
            animation: heroFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
          }
        }
        @keyframes heroSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
