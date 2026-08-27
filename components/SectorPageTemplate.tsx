"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageHero } from "./PageHero";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { Card } from "./Card";
import { Button } from "./Button";
import { Sector } from "../data/sectors";

interface SectorPageTemplateProps {
  sector: Sector;
}

export const SectorPageTemplate: React.FC<SectorPageTemplateProps> = ({ sector }) => {
  const { t } = useLanguage();

  const breadcrumbs = [
    { label: t("breadcrumbs.sectors"), href: "/nos-volets" },
    { label: t(sector.titleKey) }
  ];

  // Retrieve activities array translating it dynamically
  const activities = t(sector.activitiesKey) as any[];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <PageHero
          title={t(sector.titleKey)}
          subtitle={t(sector.descKey)}
          breadcrumbs={breadcrumbs}
        />

        {/* Content Section */}
        <section className="py-20 bg-white">
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Details & Activities */}
            <div className="lg:col-span-8 space-y-10">
              {/* Proposed Activities */}
              <div className="space-y-6">
                <SectionHeading
                  title={t("sectors.detail.proposedTitle")}
                  badge={t("sectors.badge")}
                  badgeColor="secondary"
                  className="mb-0"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Array.isArray(activities) && activities.map((act, index) => (
                    <Card key={index} className="flex items-start space-x-3 bg-background border border-border-custom p-5">
                      <div className="text-secondary shrink-0 mt-1">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-sm font-semibold text-primary leading-relaxed">{act}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Target Public */}
              <Card className="bg-primary/5 border border-primary/10 p-6 lg:p-8">
                <h3 className="text-lg font-bold font-display text-primary mb-3">
                  {t("sectors.detail.publicTitle")}
                </h3>
                <p className="text-base text-text-muted leading-relaxed">
                  {t(sector.targetKey)}
                </p>
              </Card>
            </div>

            {/* Right Column: Sidebar CTA */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
              <Card className="bg-primary text-white border-none p-8 flex flex-col justify-between text-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-display">{t("sectors.detail.howToTitle")}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {t("sectors.detail.howToText")}
                  </p>
                </div>
                <div className="mt-8 space-y-3">
                  <Link href="/contact" passHref className="w-full block">
                    <Button variant="accent" className="w-full">
                      {t("sectors.detail.ctaContact")}
                    </Button>
                  </Link>
                  <Link href="/devenir-membre" passHref className="w-full block">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full">
                      {t("sectors.detail.ctaCommunity")}
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>

          </Container>
        </section>

        {/* Gallery / Images Section */}
        {sector.galleryImages && sector.galleryImages.length > 0 && (
          <section className="py-20 bg-background border-t border-border-custom/50">
            <Container>
              <SectionHeading
                title={t("gallery.title")}
                badge={t("gallery.badge")}
                badgeColor="primary"
                centered
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {sector.galleryImages.map((img, idx) => (
                  <div key={idx} className="relative h-64 rounded-2xl overflow-hidden shadow-md border-4 border-white group hover:shadow-lg transition-smooth">
                    <Image
                      src={img}
                      alt={`${t(sector.titleKey)} — Illustration ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-smooth"
                    />
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};
