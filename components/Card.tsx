import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverable = true,
}) => {
  const baseClass = "bg-bg-surface border border-border-custom rounded-2xl overflow-hidden p-6";
  const hoverClass = hoverable
    ? "transition-smooth hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1"
    : "";

  return (
    <div className={`${baseClass} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};
