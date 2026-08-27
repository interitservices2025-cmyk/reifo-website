"use client";

import { SectorPageTemplate } from "../../components/SectorPageTemplate";
import { sectorsData } from "../../data/sectors";

export default function VoletSocialPage() {
  const sector = sectorsData.find((s) => s.id === "volet-social")!;
  return <SectorPageTemplate sector={sector} />;
}
