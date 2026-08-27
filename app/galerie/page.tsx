"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PageHero } from "../../components/PageHero";
import { Container } from "../../components/Container";
import { SectionHeading } from "../../components/SectionHeading";
import { galleryData, GalleryItem } from "../../data/gallery";

type GalleryCategory = "all" | "sport" | "education" | "activities" | "events" | "community";

export default function GalleryPage() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const breadcrumbs = [
    { label: t("breadcrumbs.gallery") }
  ];

  // Filtering Logic
  const filteredImages = galleryData.filter((img) => {
    if (activeCategory === "all") return true;
    return img.category === activeCategory;
  });

  const categories = [
    { label: t("gallery.filterAll"), value: "all" },
    { label: t("gallery.filterSport"), value: "sport" },
    { label: t("gallery.filterEducation"), value: "education" },
    { label: t("gallery.filterActivities"), value: "activities" },
    { label: t("gallery.filterEvents"), value: "events" },
    { label: t("gallery.filterCommunity"), value: "community" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <PageHero
          title={t("gallery.title")}
          subtitle={t("gallery.heroSubtitle")}
          breadcrumbs={breadcrumbs}
        />

        {/* Categories filters */}
        <section className="py-12 bg-white border-b border-border-custom/50">
          <Container className="flex items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value as GalleryCategory)}
                  className={`px-5 py-2 text-xs font-semibold rounded-full border transition-smooth focus:outline-none ${
                    activeCategory === cat.value
                      ? "bg-secondary border-secondary text-white shadow-sm"
                      : "bg-transparent border-border-custom text-text-muted hover:border-secondary/40 hover:text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-background">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((img) => (
                <div
                  key={img.id}
                  onClick={() => setActiveImage(img.src)}
                  className="relative group h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-smooth animate-fade-in"
                >
                  <Image
                    src={img.src}
                    alt={img.alt[language]}
                    fill
                    className="object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
                    <p className="text-white font-semibold font-display text-lg">{img.title[language]}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Lightbox / Zoom visionneuse */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setActiveImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-secondary focus:outline-none p-2"
              onClick={() => setActiveImage(null)}
              aria-label="Fermer la visionneuse d'image"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative max-w-4xl max-h-[85vh] w-full h-[60vh]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={activeImage}
                alt="Zoom image galerie"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
