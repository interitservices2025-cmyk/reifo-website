"use client";

import { SectorPageTemplate } from "../../components/SectorPageTemplate";
import { sectorsData } from "../../data/sectors";

export default function IntegrationImmigrantsPage() {
  const sector = sectorsData.find((s) => s.id === "integration-immigrants")!;
  return <SectorPageTemplate sector={sector} />;
}
