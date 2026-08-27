"use client";

import { SectorPageTemplate } from "../../components/SectorPageTemplate";
import { sectorsData } from "../../data/sectors";

export default function PromotionFrancophoniePage() {
  const sector = sectorsData.find((s) => s.id === "promotion-francophonie")!;
  return <SectorPageTemplate sector={sector} />;
}
