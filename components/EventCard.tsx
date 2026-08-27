"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { Card } from "./Card";
import { Button } from "./Button";
import { Event } from "../data/events";

interface EventCardProps {
  event: Event;
  onSelect?: (event: Event) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelect }) => {
  const { language, t } = useLanguage();
  const router = useRouter();

  return (
    <Card className="flex flex-col h-full bg-white group p-0">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title[language]}
          fill
          className="object-cover group-hover:scale-105 transition-smooth"
        />
        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-md z-10">
          {event.category[language]}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow space-y-4">
        <h3 className="text-xl font-bold font-display text-primary line-clamp-2">
          {event.title[language]}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed flex-grow">
          {event.description[language]}
        </p>

        <div className="border-t border-border-custom/80 pt-4 space-y-2 text-xs text-text-muted">
          <div className="flex items-center space-x-2">
            <svg className="h-4 w-4 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{event.date[language]}</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="h-4 w-4 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{event.time}</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="h-4 w-4 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span className="line-clamp-1">{event.location[language]}</span>
          </div>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="w-full mt-4"
          onClick={() => onSelect ? onSelect(event) : router.push("/contact")}
        >
          {t("events.moreInfo")}
        </Button>
      </div>
    </Card>
  );
};
