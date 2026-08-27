"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { Card } from "./Card";
import { Button } from "./Button";
import { Article } from "../data/news";

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { language, t } = useLanguage();

  return (
    <Card className="flex flex-col h-full bg-white group p-0">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title[language]}
          fill
          className="object-cover group-hover:scale-105 transition-smooth"
        />
        <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-semibold px-2.5 py-1 rounded-md z-10">
          {article.category[language]}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow space-y-3">
        <div className="flex items-center justify-between text-xs text-text-muted">
          <span>{article.date[language]}</span>
          <span>{article.readTime[language]}</span>
        </div>
        
        <h3 className="text-lg font-bold font-display text-primary line-clamp-2 group-hover:text-secondary transition-smooth">
          {article.title[language]}
        </h3>
        
        <p className="text-sm text-text-muted leading-relaxed line-clamp-3 flex-grow">
          {article.excerpt[language]}
        </p>

        <div className="pt-4 border-t border-border-custom/50">
          <Link href={`/actualites/${article.slug}`} passHref>
            <span className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary transition-smooth cursor-pointer">
              {t("news.readArticle")} &rarr;
            </span>
          </Link>
        </div>
      </div>
    </Card>
  );
};
