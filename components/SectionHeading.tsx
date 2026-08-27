import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  badgeColor?: "primary" | "secondary" | "accent";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  centered = false,
  className = "",
  badgeColor = "secondary",
}) => {
  const alignClass = centered ? "text-center mx-auto" : "text-left";
  
  const badgeColors = {
    primary: "text-primary bg-primary/10",
    secondary: "text-secondary bg-secondary/10",
    accent: "text-accent bg-accent/10",
  };

  return (
    <div className={`max-w-3xl ${alignClass} ${className} mb-12`}>
      {badge && (
        <span
          className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-3 ${badgeColors[badgeColor]}`}
        >
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-primary tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
