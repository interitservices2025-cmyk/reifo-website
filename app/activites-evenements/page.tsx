"use client";

import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PageHero } from "../../components/PageHero";
import { Container } from "../../components/Container";
import { SectionHeading } from "../../components/SectionHeading";
import { EventCard } from "../../components/EventCard";
import { eventsData } from "../../data/events";

type CategoryFilter = "all" | "sport" | "integration" | "social";

export default function EventsPage() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const breadcrumbs = [
    { label: t("breadcrumbs.events") }
  ];

  // Filtering Logic
  const filteredEvents = eventsData.filter((evt) => {
    // 1. Tab check
    const matchesTab = activeTab === "upcoming" ? evt.isUpcoming : !evt.isUpcoming;
    if (!matchesTab) return false;

    // 2. Category filter check
    if (filter === "all") return true;
    const catLower = evt.category.en.toLowerCase();
    if (filter === "sport") return catLower.includes("sport") || catLower.includes("health");
    if (filter === "integration") return catLower.includes("integration");
    if (filter === "social") return catLower.includes("social");
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <PageHero
          title={t("events.heroTitle")}
          subtitle={t("events.heroSubtitle")}
          breadcrumbs={breadcrumbs}
        />

        {/* Tab & Filter Controls */}
        <section className="py-12 bg-white border-b border-border-custom/50">
          <Container className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Tabs (Upcoming vs Past) */}
            <div className="inline-flex bg-background border border-border-custom p-1 rounded-xl">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-5 py-2 text-sm font-bold rounded-lg transition-smooth focus:outline-none ${
                  activeTab === "upcoming"
                    ? "bg-primary text-white shadow-sm"
                    : "text-primary hover:bg-primary/5"
                }`}
              >
                {t("events.upcomingTitle")}
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`px-5 py-2 text-sm font-bold rounded-lg transition-smooth focus:outline-none ${
                  activeTab === "past"
                    ? "bg-primary text-white shadow-sm"
                    : "text-primary hover:bg-primary/5"
                }`}
              >
                {t("events.pastTitle")}
              </button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: t("events.filterAll"), value: "all" },
                { label: t("events.filterSport"), value: "sport" },
                { label: t("events.filterIntegration"), value: "integration" },
                { label: t("events.filterSocial"), value: "social" }
              ].map((btn) => (
                <button
                  key={btn.value}
                  onClick={() => setFilter(btn.value as CategoryFilter)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full border transition-smooth focus:outline-none ${
                    filter === btn.value
                      ? "bg-secondary border-secondary text-white shadow-sm"
                      : "bg-transparent border-border-custom text-text-muted hover:border-secondary/40 hover:text-primary"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* Events Grid */}
        <section className="py-16 bg-background">
          <Container>
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((evt) => (
                  <div key={evt.id} className="animate-fade-in">
                    <EventCard event={evt} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 max-w-md mx-auto space-y-4">
                <div className="h-16 w-16 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-display text-primary">
                  {t("events.noEvents")}
                </h3>
              </div>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
