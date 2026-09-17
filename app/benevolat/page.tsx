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

export default function VolunteerPage() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interests: [] as string[],
    availability: "",
    message: "",
    consent: false
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const breadcrumbs = [
    { label: t("breadcrumbs.volunteer") }
  ];

  const interestOptions = [
    { label: t("volunteerPage.options.sport"), value: "sport" },
    { label: t("volunteerPage.options.school"), value: "school" },
    { label: t("volunteerPage.options.social"), value: "social" },
    { label: t("volunteerPage.options.integration"), value: "integration" },
    { label: t("volunteerPage.options.francophonie"), value: "francophonie" }
  ];

  const availabilityOptions = [
    { label: t("volunteerPage.options.weekends"), value: "weekends" },
    { label: t("volunteerPage.options.weekdays"), value: "weekdays" },
    { label: t("volunteerPage.options.flexible"), value: "flexible" }
  ];

  const handleCheckboxChange = (value: string) => {
    const updated = formData.interests.includes(value)
      ? formData.interests.filter((i) => i !== value)
      : [...formData.interests, value];
    setFormData({ ...formData, interests: updated });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.availability || !formData.consent) {
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
          type: "volunteer",
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          interests: formData.interests,
          availability: formData.availability,
          message: formData.message,
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
          interests: [],
          availability: "",
          message: "",
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
          title={t("volunteerPage.heroTitle")}
          subtitle={t("volunteerPage.heroSubtitle")}
          breadcrumbs={breadcrumbs}
        />

        {/* Content Section */}
        <section className="py-20 bg-background">
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Info */}
            <div className="lg:col-span-5 space-y-8">
              <SectionHeading
                title={t("volunteerPage.howTitle")}
                badge={t("breadcrumbs.volunteer")}
                badgeColor="secondary"
                className="mb-0"
              />

              <div className="space-y-4">
                {interestOptions.map((opt) => (
                  <div key={opt.value} className="flex items-start space-x-3 bg-white p-5 rounded-2xl border border-border-custom shadow-sm hover:border-secondary/20 transition-smooth">
                    <div className="text-secondary shrink-0 mt-0.5">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-primary leading-relaxed">
                      {opt.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <Card className="bg-white border border-border-custom rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl lg:text-2xl font-bold font-display text-primary mb-6 border-b border-border-custom/50 pb-4">
                  {t("volunteerPage.formTitle")}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-primary mb-2">
                        {t("memberPage.form.firstName")} <span className="text-accent">*</span>
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
                        {t("memberPage.form.lastName")} <span className="text-accent">*</span>
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

                  {/* Interets checkboxes */}
                  <div>
                    <span className="block text-sm font-semibold text-primary mb-3">
                      {t("volunteerPage.interestLabel")}
                    </span>
                    <div className="space-y-3">
                      {interestOptions.map((opt) => (
                        <div key={opt.value} className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id={`interest-${opt.value}`}
                            checked={formData.interests.includes(opt.value)}
                            onChange={() => handleCheckboxChange(opt.value)}
                            className="h-5 w-5 rounded border-border-custom text-primary focus:ring-2 focus:ring-primary focus:outline-none"
                          />
                          <label htmlFor={`interest-${opt.value}`} className="text-sm text-text-muted select-none">
                            {opt.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Disponibilites Select */}
                  <div>
                    <label htmlFor="availability" className="block text-sm font-semibold text-primary mb-2">
                      {t("volunteerPage.availLabel")} <span className="text-accent">*</span>
                    </label>
                    <select
                      id="availability"
                      required
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth text-sm text-text-muted"
                    >
                      <option value="">-- Sélectionnez une option --</option>
                      {availabilityOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                    {status === "sending" ? "Envoi..." : t("volunteerPage.form.submit")}
                  </Button>

                  {status === "success" && (
                    <div className="p-4 bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold rounded-lg animate-fade-in">
                      {t("volunteerPage.form.success")}
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
