"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";
import { Button } from "../components/Button";

export default function NotFound() {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Page non trouvée",
      desc: "Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
      cta: "Retour à l'accueil"
    },
    en: {
      title: "Page Not Found",
      desc: "Sorry, the page you are looking for does not exist or has been moved.",
      cta: "Back to Home"
    }
  };

  const text = language === "en" ? content.en : content.fr;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20 bg-background relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <Container className="relative z-10 text-center space-y-6 max-w-md mx-auto">
          <div className="text-8xl font-display font-extrabold text-secondary tracking-widest animate-pulse">
            404
          </div>
          
          <h1 className="text-3xl font-display font-bold text-primary">
            {text.title}
          </h1>
          
          <p className="text-base text-text-muted leading-relaxed">
            {text.desc}
          </p>
          
          <div className="pt-4">
            <Link href="/" passHref>
              <Button variant="primary" size="md" className="shadow-lg">
                {text.cta}
              </Button>
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
