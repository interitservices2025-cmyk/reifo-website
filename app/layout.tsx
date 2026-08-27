import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "REIFO — Réseau d'Entraide des Immigrants Francophones de l'Ontario",
  description: "L'accueil, l'insertion et l'épanouissement des nouveaux arrivants francophones en Ontario (Halton, Milton). Promouvoir la diversité multiculturelle à travers le sport et la culture.",
  keywords: "organisme francophone Halton, aide aux nouveaux arrivants francophones Ontario, communauté francophone Milton, intégration immigrants francophones, activités francophones Halton, sport jeunesse francophone",
  authors: [{ name: "REIFO" }],
  openGraph: {
    title: "REIFO — Réseau d'Entraide des Immigrants Francophones de l'Ontario",
    description: "Accompagnement, intégration et épanouissement des nouveaux arrivants francophones en Ontario (Halton, Milton).",
    url: "https://reifo.ca",
    siteName: "REIFO",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
