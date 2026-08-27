"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PageHero } from "../../components/PageHero";
import { Container } from "../../components/Container";
import { SectionHeading } from "../../components/SectionHeading";
import { Card } from "../../components/Card";

export default function AboutPage() {
  const { t } = useLanguage();

  const breadcrumbs = [
    { label: t("breadcrumbs.about") }
  ];

  const impactKeys = ["youth", "families", "newcomers", "education", "sport", "community"];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <PageHero
          title={t("about.heroTitle")}
          subtitle={t("about.heroSubtitle")}
          breadcrumbs={breadcrumbs}
        />

        {/* Mission & Vision Section */}
        <section className="py-20 bg-white">
          <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Mission Box */}
            <Card className="flex flex-col justify-between border-2 border-secondary/15 bg-bg-surface p-8 lg:p-10 shadow-lg">
              <div className="space-y-6">
                <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11.5V6l-3-3H4a2 2 0 00-2 2v11a2 2 0 002 2h2a2 2 0 001.6-.8z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-primary">
                  {t("about.missionTitle")}
                </h2>
                <p className="text-base md:text-lg text-text-muted leading-relaxed">
                  {t("about.missionText")}
                </p>
              </div>
              <div className="border-t border-border-custom/50 pt-6 mt-8 flex items-center text-xs font-semibold text-secondary">
                REIFO Canada &bull; Halton Region
              </div>
            </Card>

            {/* Vision Box */}
            <Card className="flex flex-col justify-between border-2 border-primary/10 bg-primary text-white p-8 lg:p-10 shadow-lg hover:shadow-primary/10">
              <div className="space-y-6">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center text-accent-warm">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl lg:text-3xl font-display font-bold">
                  {t("about.visionTitle")}
                </h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">
                  {t("about.visionText")}
                </p>
              </div>
              <div className="border-t border-white/10 pt-6 mt-8 flex items-center text-xs font-semibold text-accent-warm">
                Ontario &bull; Milton &bull; Oakville
              </div>
            </Card>
          </Container>
        </section>

        {/* Notre Impact Section */}
        <section className="py-20 bg-background border-t border-border-custom/50">
          <Container>
            <SectionHeading
              badge={t("about.badge")}
              title={t("about.impactTitle")}
              description={t("about.impactIntro")}
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {impactKeys.map((key, index) => (
                <Card key={key} className="bg-white border border-border-custom/80 hover:border-secondary/35 transition-smooth flex items-start space-x-4 p-6 shadow-sm">
                  <div className="shrink-0 h-10 w-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center font-bold">
                    0{index + 1}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold font-display text-primary">
                      {key === "sport" ? t("sectors.items.sport.title") : key === "education" ? t("sectors.items.school.title") : key === "integration" ? t("sectors.items.integration.title") : key === "community" ? t("gallery.filterCommunity") : t(`about.impact.${key}`).split(" (")[0]}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {t(`about.impact.${key}`)}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Visual Callout */}
            <div className="mt-16 relative w-full h-[350px] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/images/reifo/hero/pique-nique-1.jpg"
                alt="Notre communauté multiculturelle active"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-white font-display font-semibold text-lg md:text-xl max-w-2xl">
                  "Une communauté francophone accueillante, solidaire et épanouie en Ontario."
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
