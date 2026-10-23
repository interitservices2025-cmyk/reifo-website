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
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #EEF4FB 0%, #F5F9FF 60%, #FCFAF7 100%)" }}
      aria-label={t("hero.ariaLabel")}
    >
      {/* ── Éléments graphiques de fond ────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#002D62]/[0.04]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 -left-16 w-40 h-40 rounded-full bg-[#32A852]/[0.06]"
      />

      {/* ── Grille principale ────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] lg:gap-12 items-center">

          {/* ── Zone gauche : contenu éditorial ─────────────────────── */}
          <div className="flex flex-col justify-center pt-32 pb-16 lg:pt-36 lg:pb-20 lg:pr-8 space-y-7 hero-content">

            {/* Label */}
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#32A852]" aria-hidden="true" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#32A852]">
                {t("hero.label")}
              </span>
            </div>

            {/* Titre principal */}
            <h1 className="font-display font-bold text-[#002D62] leading-[1.12] tracking-tight text-3xl sm:text-4xl xl:text-[2.85rem]">
              {t("hero.titleLine1")}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#002D62]">
                  {t("hero.titleHighlight1")}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0.5 left-0 right-0 h-[5px] rounded-full bg-[#32A852]/30"
                />
              </span>
              {" "}{t("hero.titleLine2")}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#002D62]">
                  {t("hero.titleHighlight2")}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0.5 left-0 right-0 h-[5px] rounded-full bg-[#32A852]/30"
                />
              </span>
              {" "}{t("hero.titleLine3")}
            </h1>

            {/* Séparateur graphique */}
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="block w-10 h-[3px] rounded-full bg-[#32A852]" />
              <span className="block w-3 h-[3px] rounded-full bg-[#F1C40F]" />
              <span className="block w-2 h-[3px] rounded-full bg-[#E74C3C]" />
            </div>

            {/* Description */}
            <p className="text-[#4B5563] text-base sm:text-lg leading-relaxed max-w-xl font-light">
              {t("hero.description")}
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/devenir-membre"
                id="hero-cta-member"
                className="inline-flex items-center justify-center gap-2 bg-[#002D62] text-white font-semibold px-7 py-4 rounded-xl text-base shadow-lg shadow-[#002D62]/20 hover:bg-[#003d80] hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002D62] focus-visible:ring-offset-2"
              >
                {t("hero.ctaMember")}
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/activites-evenements"
                id="hero-cta-activities"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#002D62] text-[#002D62] font-semibold px-7 py-4 rounded-xl text-base bg-transparent hover:bg-[#002D62] hover:text-white hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002D62] focus-visible:ring-offset-2"
              >
                {t("hero.ctaActivities")}
              </Link>
            </div>

            {/* Stats de confiance */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-[#E5E7EB]">
              <div>
                <p className="text-2xl font-bold font-display text-[#002D62]">5+</p>
                <p className="text-xs text-[#4B5563] mt-0.5">{t("hero.statYears")}</p>
              </div>
              <div className="w-px bg-[#E5E7EB]" aria-hidden="true" />
              <div>
                <p className="text-2xl font-bold font-display text-[#002D62]">500+</p>
                <p className="text-xs text-[#4B5563] mt-0.5">{t("hero.statMembers")}</p>
              </div>
              <div className="w-px bg-[#E5E7EB]" aria-hidden="true" />
              <div>
                <p className="text-2xl font-bold font-display text-[#002D62]">5</p>
                <p className="text-xs text-[#4B5563] mt-0.5">{t("hero.statSectors")}</p>
              </div>
            </div>
          </div>

          {/* ── Zone droite : photographie ───────────────────────────── */}
          <div className="relative flex items-center justify-center pb-16 pt-4 lg:pt-36 lg:pb-20 hero-image">

            {/* Bloc décoratif derrière l'image */}
            <div
              aria-hidden="true"
              className="absolute top-[10%] right-[5%] w-[88%] h-[82%] rounded-3xl bg-[#32A852]/10"
            />
            {/* Accent jaune */}
            <div
              aria-hidden="true"
              className="absolute bottom-[12%] -left-3 w-16 h-16 rounded-2xl bg-[#F1C40F]/30 rotate-12"
            />
            {/* Accent rouge */}
            <div
              aria-hidden="true"
              className="absolute top-[14%] left-[6%] w-10 h-10 rounded-xl bg-[#E74C3C]/20 -rotate-6"
            />

            {/* Conteneur de la photo */}
            <div className="relative z-10 w-full max-w-[540px] mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-[#002D62]/15 border-4 border-white">
              <Image
                src="/images/reifo/hero/activite-sportive-gymnase.jpg"
                alt="Enfants et adultes de la communauté francophone participant à une séance d'activité sportive dans un gymnase communautaire à Halton"
                width={840}
                height={630}
                priority
                className="w-full h-auto object-cover object-top hero-img"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Badge flottant Halton */}
            <div
              className="absolute bottom-[16%] -left-2 sm:left-0 z-20 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-[#002D62]/10 border border-[#E5E7EB] max-w-[220px]"
              aria-label={t("hero.badgeAria")}
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-[#002D62] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-bold text-[#002D62] leading-tight">{t("hero.badgeTitle")}</p>
                <p className="text-[10px] text-[#4B5563] leading-tight mt-0.5">{t("hero.badgeSubtitle")}</p>
              </div>
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
            animation: heroFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
          }
        }
        @keyframes heroSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .hero-img {
          display: block;
          aspect-ratio: 3/2;
          object-fit: cover;
        }
      `}</style>
    </section>
  );
};
