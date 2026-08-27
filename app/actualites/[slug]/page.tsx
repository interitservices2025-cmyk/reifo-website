"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../../context/LanguageContext";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { PageHero } from "../../../components/PageHero";
import { Container } from "../../../components/Container";
import { ArticleCard } from "../../../components/ArticleCard";
import { newsData } from "../../../data/news";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = use(params);
  const { t, language } = useLanguage();

  // Find the current article
  const article = newsData.find((art) => art.slug === slug);

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center py-20 space-y-4">
            <h2 className="text-2xl font-bold font-display text-primary">Article non trouvé</h2>
            <Link href="/actualites" className="text-secondary font-semibold hover:underline">
              &larr; Retour aux actualités
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Breadcrumbs
  const breadcrumbs = [
    { label: t("breadcrumbs.news"), href: "/actualites" },
    { label: article.title[language] }
  ];

  // Fetch similar articles (excluding current article)
  const similarArticles = newsData
    .filter((art) => art.id !== article.id)
    .slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Page Hero */}
        <PageHero
          title={article.title[language]}
          subtitle={article.date[language] + " &bull; " + article.category[language]}
          breadcrumbs={breadcrumbs}
        />

        {/* Article Body */}
        <section className="py-20 bg-white">
          <Container className="max-w-4xl">
            {/* Back Button */}
            <div className="mb-8">
              <Link href="/actualites" className="inline-flex items-center text-sm font-semibold text-secondary hover:text-primary transition-smooth">
                &larr; {t("news.backToNews")}
              </Link>
            </div>

            {/* Main Image */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-10 border border-border-custom">
              <Image
                src={article.image}
                alt={article.title[language]}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Injection */}
            <div
              className="prose prose-lg max-w-none text-text-muted leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content[language] }}
            />
          </Container>
        </section>

        {/* Similar Articles Section */}
        <section className="py-16 bg-background border-t border-border-custom/50">
          <Container className="max-w-4xl">
            <h3 className="text-2xl font-bold font-display text-primary mb-8">
              {t("news.similarArticles")}
            </h3>

            {similarArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {similarArticles.map((similar) => (
                  <ArticleCard key={similar.id} article={similar} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-text-muted">{t("news.noSimilar")}</p>
            )}
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
