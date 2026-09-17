"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { SectionHeading } from "../components/SectionHeading";
import { eventsData } from "../data/events";
import { EventCard } from "../components/EventCard";

export default function Home() {
  const { t, language } = useLanguage();

  // Contact Form State
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Gallery Lightbox State
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Gallery Images List
  const galleryImages = [
    {
      src: "/images/reifo/gallery/pique-nique-1.jpg",
      alt: "Pique-nique de la communauté REIFO en Ontario",
      title: "Pique-nique communautaire"
    },
    {
      src: "/images/reifo/gallery/seance-sport-gymnase.png",
      alt: "Séance d'échauffement et de sport collectif en gymnase",
      title: "Échauffement et sport collectif"
    },
    {
      src: "/images/reifo/gallery/hockey-indoor.jpg",
      alt: "Jeunes jouant au hockey en salle",
      title: "Hockey en salle et sport"
    },
    {
      src: "/images/reifo/gallery/pique-nique-2.jpg",
      alt: "Repas partagé lors du pique-nique",
      title: "Repas et partage convivial"
    },
    {
      src: "/images/reifo/gallery/pique-nique-3.jpg",
      alt: "Familles sous les arbres",
      title: "Échanges sous les arbres"
    },
    {
      src: "/images/reifo/gallery/soccer-match.jpg",
      alt: "Match de soccer communautaire",
      title: "Match de soccer de la diversité"
    }
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error");
      setErrorMessage(t("contact.form.error"));
      return;
    }
    setFormStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setFormStatus("error");
        setErrorMessage(data.error || t("contact.form.error"));
      }
    } catch {
      setFormStatus("error");
      setErrorMessage(t("contact.form.error"));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section id="accueil" className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden pt-10">
          {/* Background image overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/reifo/hero/pique-nique-1.jpg"
              alt="Communauté multiculturelle dynamique"
              fill
              priority
              className="object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/75 to-transparent" />
          </div>

          <Container className="relative z-10 py-20 text-white">
            <div className="max-w-3xl space-y-6 animate-slide-up">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-secondary text-white">
                REIFO Canada
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
                {t("hero.title")}
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed">
                {t("hero.subtitle")}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link href="/devenir-membre" passHref>
                  <Button variant="accent" size="lg">
                    {t("hero.ctaMember")}
                  </Button>
                </Link>
                <Link href="/activites-evenements" passHref>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                    {t("hero.ctaActivities")}
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* 2. Qui Sommes-Nous Section */}
        <section id="a-propos" className="py-24 bg-background">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <SectionHeading
                  badge={t("about.badge")}
                  title={t("about.title")}
                  description={t("about.description")}
                  badgeColor="secondary"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div key={num} className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-border-custom shadow-sm hover:border-secondary/20 transition-smooth">
                      <div className="text-secondary shrink-0 mt-0.5">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-primary">{t(`about.point${num}`)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/reifo/hero/pique-nique-1.jpg"
                  alt="Accompagnement et solidarité humaine"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* 3. Nos 5 Volets d'Action Section */}
        <section id="volets" className="py-24 bg-white border-y border-border-custom">
          <Container>
            <SectionHeading
              badge={t("sectors.badge")}
              title={t("sectors.title")}
              description={t("sectors.description")}
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {/* Volet 1: Sport & Santé */}
              <Card className="flex flex-col h-full">
                <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-display text-primary mb-3">
                  {t("sectors.items.sport.title")}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-grow">
                  {t("sectors.items.sport.desc")}
                </p>
                <Link href="/sport-sante" className="mt-6 inline-flex items-center text-sm font-semibold text-secondary hover:text-primary transition-smooth focus:outline-none">
                  {t("sectors.discover")} &rarr;
                </Link>
              </Card>

              {/* Volet 2: Intégration */}
              <Card className="flex flex-col h-full">
                <div className="h-12 w-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-6">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-display text-primary mb-3">
                  {t("sectors.items.integration.title")}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-grow">
                  {t("sectors.items.integration.desc")}
                </p>
                <Link href="/integration-immigrants" className="mt-6 inline-flex items-center text-sm font-semibold text-accent-blue hover:text-primary transition-smooth focus:outline-none">
                  {t("sectors.discover")} &rarr;
                </Link>
              </Card>

              {/* Volet 3: Appui Scolaire */}
              <Card className="flex flex-col h-full">
                <div className="h-12 w-12 rounded-xl bg-accent-warm/10 flex items-center justify-center text-accent-warm mb-6">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-display text-primary mb-3">
                  {t("sectors.items.school.title")}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-grow">
                  {t("sectors.items.school.desc")}
                </p>
                <Link href="/appui-integration-scolaire" className="mt-6 inline-flex items-center text-sm font-semibold text-accent-warm hover:text-primary transition-smooth focus:outline-none">
                  {t("sectors.discover")} &rarr;
                </Link>
              </Card>

              {/* Volet 4: Promotion de la Francophonie */}
              <Card className="flex flex-col h-full">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-5-5-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-display text-primary mb-3">
                  {t("sectors.items.francophonie.title")}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-grow">
                  {t("sectors.items.francophonie.desc")}
                </p>
                <Link href="/promotion-francophonie" className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:text-secondary transition-smooth focus:outline-none">
                  {t("sectors.discover")} &rarr;
                </Link>
              </Card>

              {/* Volet 5: Volet Social */}
              <Card className="flex flex-col h-full">
                <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-display text-primary mb-3">
                  {t("sectors.items.social.title")}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-grow">
                  {t("sectors.items.social.desc")}
                </p>
                <Link href="/volet-social" className="mt-6 inline-flex items-center text-sm font-semibold text-accent hover:text-primary transition-smooth focus:outline-none">
                  {t("sectors.discover")} &rarr;
                </Link>
              </Card>
            </div>
          </Container>
        </section>

        {/* 4. Prochains Événements Section */}
        <section id="evenements" className="py-24 bg-background">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <SectionHeading
                badge={t("events.badge")}
                title={t("events.title")}
                description={t("events.description")}
                className="mb-0 max-w-2xl"
              />
              <Link href="/activites-evenements" passHref>
                <Button variant="outline" className="mt-6 md:mt-0 shrink-0">
                  {t("events.allEvents")}
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {eventsData
                .filter((evt) => evt.isUpcoming)
                .slice(0, 3)
                .map((evt) => (
                  <EventCard key={evt.id} event={evt} />
                ))}
            </div>
          </Container>
        </section>

        {/* 5. Rejoindre la Communauté CTA Section */}
        <section id="benevolat" className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/30 z-0" />
          <Container className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                {t("community.title")}
              </h2>
              <p className="text-white/80 max-w-xl mx-auto leading-relaxed">
                {t("community.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Devenir Membre Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between text-center group hover:bg-white/15 transition-smooth">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-display">{t("community.items.member.title")}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{t("community.items.member.desc")}</p>
                </div>
                <Link href="/devenir-membre" passHref className="mt-8 w-full block">
                  <Button variant="accent" className="w-full">
                    {t("community.items.member.cta")}
                  </Button>
                </Link>
              </div>

              {/* Devenir Bénévole Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between text-center group hover:bg-white/15 transition-smooth">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-display">{t("community.items.volunteer.title")}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{t("community.items.volunteer.desc")}</p>
                </div>
                <Link href="/benevolat" passHref className="mt-8 w-full block">
                  <Button variant="secondary" className="w-full">
                    {t("community.items.volunteer.cta")}
                  </Button>
                </Link>
              </div>

              {/* Participer aux Activités Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between text-center group hover:bg-white/15 transition-smooth">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-display">{t("community.items.activities.title")}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{t("community.items.activities.desc")}</p>
                </div>
                <Link href="/activites-evenements" passHref className="mt-8 w-full block">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full">
                    {t("community.items.activities.cta")}
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* 6. Galerie Section */}
        <section id="galerie" className="py-24 bg-background">
          <Container>
            <SectionHeading
              badge={t("gallery.badge")}
              title={t("gallery.title")}
              description={t("gallery.description")}
              centered
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setActiveImage(img.src)}
                  className="relative group h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-smooth"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
                    <p className="text-white font-semibold font-display text-lg">{img.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Lightbox / Modal simple pour la galerie */}
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-primary/90 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setActiveImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-secondary focus:outline-none p-2"
              onClick={() => setActiveImage(null)}
              aria-label="Fermer la visionneuse d'image"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative max-w-4xl max-h-[85vh] w-full h-[60vh]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={activeImage}
                alt="Image galerie REIFO agrandie"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* 7. Partenaires Section */}
        <section className="py-16 bg-white border-y border-border-custom">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-secondary/10 text-secondary mb-2">
                {t("partners.badge")}
              </span>
              <h2 className="text-2xl font-bold font-display text-primary">{t("partners.title")}</h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 opacity-80">
              {/* Partenaire 1: Ville de Milton */}
              <div className="flex flex-col items-center space-y-2">
                <div className="relative w-44 h-16 bg-bg-surface border border-border-custom rounded-xl p-3 flex items-center justify-center hover:border-primary/20 transition-smooth">
                  <span className="text-primary font-bold font-display text-center leading-tight">Town of Milton</span>
                </div>
                <span className="text-[10px] text-text-muted font-medium">{t("partners.milton")}</span>
              </div>

              {/* Placeholder 2 */}
              <div className="flex flex-col items-center space-y-2">
                <div className="relative w-44 h-16 bg-bg-surface border border-border-custom border-dashed rounded-xl p-3 flex items-center justify-center text-text-muted">
                  <span className="text-xs font-semibold">Partenaire local</span>
                </div>
                <span className="text-[10px] text-text-muted font-medium">Halton Region</span>
              </div>

              {/* Placeholder 3 */}
              <div className="flex flex-col items-center space-y-2">
                <div className="relative w-44 h-16 bg-bg-surface border border-border-custom border-dashed rounded-xl p-3 flex items-center justify-center text-text-muted">
                  <span className="text-xs font-semibold">Partenaire éducatif</span>
                </div>
                <span className="text-[10px] text-text-muted font-medium">Conseil scolaire</span>
              </div>
            </div>
          </Container>
        </section>

        {/* 8. Contact Section */}
        <section id="contact" className="py-24 bg-background">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Coordonnées */}
              <div className="lg:col-span-5 space-y-8">
                <SectionHeading
                  badge={t("contact.badge")}
                  title={t("contact.title")}
                  description={t("contact.description")}
                  className="mb-0"
                />

                <div className="space-y-6">
                  {/* Adresse */}
                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wider">{t("contact.addressTitle")}</h4>
                      <p className="text-base text-text-muted mt-1">REIFO<br />335 English Mill Court<br />Milton, ON L9E 0A7</p>
                    </div>
                  </div>

                  {/* Courriel */}
                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wider">{t("contact.emailTitle")}</h4>
                      <a href="mailto:contact@reifo.ca" className="text-base text-secondary hover:text-primary transition-smooth mt-1 block">
                        contact@reifo.ca
                      </a>
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div className="flex items-start space-x-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary uppercase tracking-wider">{t("contact.phoneTitle")}</h4>
                      <a href="tel:+15145605414" className="text-base text-accent hover:text-primary transition-smooth mt-1 block">
                        +1 (514) 560-5414
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire */}
              <div className="lg:col-span-7 bg-white border border-border-custom rounded-2xl p-8 shadow-xl">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                      {t("contact.form.name")} <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                        {t("contact.form.email")} <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                        {t("contact.form.phone")}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                      {t("contact.form.message")} <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={formStatus === "sending"}
                  >
                    {formStatus === "sending" ? (
                      <span className="flex items-center space-x-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Envoi en cours...</span>
                      </span>
                    ) : (
                      t("contact.form.send")
                    )}
                  </Button>

                  {formStatus === "success" && (
                    <div className="p-4 bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold rounded-lg animate-fade-in">
                      {t("contact.form.success")}
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="p-4 bg-accent/10 border border-accent/20 text-accent text-sm font-semibold rounded-lg animate-fade-in">
                      {errorMessage || t("contact.form.error")}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
