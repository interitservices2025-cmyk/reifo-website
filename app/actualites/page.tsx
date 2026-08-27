"use client";

import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PageHero } from "../../components/PageHero";
import { Container } from "../../components/Container";
import { SectionHeading } from "../../components/SectionHeading";
import { ArticleCard } from "../../components/ArticleCard";
import { newsData } from "../../data/news";

export default function NewsPage() {
  const { t } = useLanguage();

  const breadcrumbs = [
    { label: t("breadcrumbs.news") }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <PageHero
          title={t("news.title")}
          subtitle={t("news.heroSubtitle")}
          breadcrumbs={breadcrumbs}
        />

        {/* Article Grid */}
        <section className="py-20 bg-background">
          <Container>
            {/* Disclaimer for demo */}
            <div className="mb-10 p-4 bg-primary/5 border border-primary/10 text-primary text-xs rounded-xl flex items-center space-x-2">
              <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t("news.demoNotice")}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData.map((art) => (
                <div key={art.id} className="animate-fade-in">
                  <ArticleCard article={art} />
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
