"use client";

import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { PageHero } from "../../components/PageHero";
import { Container } from "../../components/Container";
import { SectionHeading } from "../../components/SectionHeading";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";

export default function ContactPage() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const breadcrumbs = [
    { label: t("breadcrumbs.contact") }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error");
      setErrorMessage(t("contact.form.error"));
      return;
    }
    setStatus("sending");
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
          subject: formData.subject,
          message: formData.message
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || t("contact.form.error"));
      }
    } catch {
      setStatus("error");
      setErrorMessage(t("contact.form.error"));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <PageHero
          title={t("contact.title")}
          subtitle={t("contact.heroSubtitle")}
          breadcrumbs={breadcrumbs}
        />

        {/* Coordonnees & Form Section */}
        <section className="py-20 bg-white">
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Coordonnees */}
            <div className="lg:col-span-5 space-y-8">
              <SectionHeading
                title={t("contact.title")}
                badge={t("breadcrumbs.contact")}
                badgeColor="secondary"
                className="mb-0"
              />

              <div className="space-y-6">
                {/* Adresse */}
                <div className="flex items-start space-x-4 bg-background border border-border-custom p-6 rounded-2xl">
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

                {/* Email */}
                <div className="flex items-start space-x-4 bg-background border border-border-custom p-6 rounded-2xl">
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

                {/* Telephone */}
                <div className="flex items-start space-x-4 bg-background border border-border-custom p-6 rounded-2xl">
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

            {/* Right Column: Formulaire */}
            <div className="lg:col-span-7 bg-white border border-border-custom rounded-2xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-2">
                    {t("contact.form.subject")} <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  />
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
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Envoi..." : t("contact.form.send")}
                </Button>

                {status === "success" && (
                  <div className="p-4 bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold rounded-lg animate-fade-in">
                    {t("contact.form.success")}
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-accent/10 border border-accent/20 text-accent text-sm font-semibold rounded-lg animate-fade-in">
                    {errorMessage || t("contact.form.error")}
                  </div>
                )}
              </form>
            </div>

          </Container>
        </section>

        {/* Map Placeholder */}
        <section className="py-12 bg-background border-t border-border-custom/50">
          <Container>
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-primary/5 border-2 border-border-custom/80 flex flex-col items-center justify-center text-center p-6 space-y-4 shadow-inner">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <svg className="h-8 w-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold font-display text-primary">Intégration Google Maps</h4>
                <p className="text-sm text-text-muted max-w-sm mx-auto leading-relaxed">
                  L'emplacement du REIFO (335 English Mill Court, Milton, ON) sera cartographié de manière interactive dès validation des clés API Google Cloud.
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
