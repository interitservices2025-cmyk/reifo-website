"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PageHero } from "../../components/PageHero";
import { Container } from "../../components/Container";
import { SectionHeading } from "../../components/SectionHeading";
import { Card } from "../../components/Card";
import { sectorsData } from "../../data/sectors";

export default function SectorsPage() {
  const { t } = useLanguage();

  const breadcrumbs = [
    { label: t("breadcrumbs.sectors") }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <PageHero
          title={t("sectors.titleGeneral")}
          subtitle={t("sectors.introGeneral")}
          breadcrumbs={breadcrumbs}
        />

        {/* List of Sectors */}
        <section className="py-24 bg-white">
          <Container>
            <SectionHeading
              badge={t("sectors.badge")}
              title={t("sectors.title")}
              description={t("sectors.description")}
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sectorsData.map((sec) => (
                <Card key={sec.id} className="flex flex-col h-full bg-bg-surface group p-0">
                  {/* Banner image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={sec.image}
                      alt={t(sec.titleKey)}
                      className="object-cover w-full h-full group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-smooth" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    {/* Icon */}
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      {sec.iconName === "sport" && (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                      {sec.iconName === "integration" && (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      )}
                      {sec.iconName === "school" && (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      )}
                      {sec.iconName === "francophonie" && (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-5-5-5" />
                        </svg>
                      )}
                      {sec.iconName === "social" && (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                    </div>

                    <h3 className="text-xl font-bold font-display text-primary group-hover:text-secondary transition-smooth">
                      {t(sec.titleKey)}
                    </h3>

                    <p className="text-sm text-text-muted leading-relaxed flex-grow">
                      {t(sec.descKey)}
                    </p>

                    <div className="pt-4 border-t border-border-custom/50">
                      <Link href={`/${sec.slug}`} className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary transition-smooth">
                        {t("sectors.discover")} &rarr;
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
