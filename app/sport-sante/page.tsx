"use client";

import { SectorPageTemplate } from "../../components/SectorPageTemplate";
import { sectorsData } from "../../data/sectors";

export default function SportSantePage() {
  const sector = sectorsData.find((s) => s.id === "sport-sante")!;
  return <SectorPageTemplate sector={sector} />;
}
