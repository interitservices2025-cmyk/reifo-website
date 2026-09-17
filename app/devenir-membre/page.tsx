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

export default function BecomeMemberPage() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    motivation: "",
    consent: false
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const breadcrumbs = [
    { label: t("breadcrumbs.join") }
  ];

  const benefits = ["benefit1", "benefit2", "benefit3", "benefit4"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.city || !formData.consent) {
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
          type: "membership",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          motivation: formData.motivation,
          consent: formData.consent
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          city: "",
          motivation: "",
          consent: false
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
          title={t("memberPage.heroTitle")}
          subtitle={t("memberPage.heroSubtitle")}
          breadcrumbs={breadcrumbs}
        />

        {/* Benefits & Form Grid */}
        <section className="py-20 bg-background">
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Why join? */}
            <div className="lg:col-span-5 space-y-8">
              <SectionHeading
                title={t("memberPage.whyTitle")}
                badge={t("breadcrumbs.join")}
                badgeColor="secondary"
                className="mb-0"
              />

              <div className="space-y-4">
                {benefits.map((key, idx) => (
                  <div key={key} className="flex items-start space-x-3 bg-white p-5 rounded-2xl border border-border-custom shadow-sm hover:border-secondary/20 transition-smooth">
                    <div className="h-6 w-6 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-sm font-medium text-text-muted leading-relaxed">
                      {t(`memberPage.${key}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Registration Form */}
            <div className="lg:col-span-7">
              <Card className="bg-white border border-border-custom rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl lg:text-2xl font-bold font-display text-primary mb-6 border-b border-border-custom/50 pb-4">
                  {t("memberPage.formTitle")}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-primary mb-2">
                        {t("memberPage.consentText") ? t("memberPage.form.firstName") : "First Name"} <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-primary mb-2">
                        {t("memberPage.consentText") ? t("memberPage.form.lastName") : "Last Name"} <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      />
                    </div>
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
                    <label htmlFor="city" className="block text-sm font-semibold text-primary mb-2">
                      {t("memberPage.form.city")} <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Milton, Halton Hills, Oakville..."
                      className="w-full px-4 py-3 bg-background border border-border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    />
                  </div>

                  <div>
                    <label htmlFor="motivation" className="block text-sm font-semibold text-primary mb-2">
                      {t("memberPage.form.motivation")}
                    </label>
                    <textarea
                      id="motivation"
                      rows={4}
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                    ></textarea>
                  </div>

                  {/* Consent checkbox */}
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="h-5 w-5 shrink-0 rounded border-border-custom text-primary focus:ring-2 focus:ring-primary focus:outline-none mt-0.5"
                    />
                    <label htmlFor="consent" className="text-xs text-text-muted leading-relaxed select-none">
                      {t("memberPage.consentText")} <span className="text-accent">*</span>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Envoi..." : t("memberPage.form.submit")}
                  </Button>

                  {status === "success" && (
                    <div className="p-4 bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold rounded-lg animate-fade-in">
                      {t("memberPage.form.success")}
                    </div>
                  )}

                  {status === "error" && (
                    <div className="p-4 bg-accent/10 border border-accent/20 text-accent text-sm font-semibold rounded-lg animate-fade-in">
                      {errorMessage || t("contact.form.error")}
                    </div>
                  )}
                </form>
              </Card>
            </div>

          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
