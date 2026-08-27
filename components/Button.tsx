import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-smooth focus:outline-none focus-visible:ring-3 focus-visible:ring-accent active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-primary text-white hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5",
    secondary: "bg-secondary text-white hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-0.5",
    accent: "bg-accent text-white hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5",
    outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white hover:-translate-y-0.5",
    text: "text-primary hover:text-secondary bg-transparent p-0 active:scale-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
