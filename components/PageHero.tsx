"use client";

import React from "react";
import { Container } from "./Container";
import { Breadcrumbs } from "./Breadcrumbs";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
}

export const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, breadcrumbs }) => {
  return (
    <section className="relative bg-primary text-white py-16 md:py-20 overflow-hidden border-b border-border-custom/10">
      {/* Decorative grid background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Container className="relative z-10 flex flex-col space-y-4">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        <div className="max-w-3xl space-y-3 animate-slide-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};
