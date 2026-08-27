"use client";

import { SectorPageTemplate } from "../../components/SectorPageTemplate";
import { sectorsData } from "../../data/sectors";

export default function AppuiScolairePage() {
  const sector = sectorsData.find((s) => s.id === "appui-integration-scolaire")!;
  return <SectorPageTemplate sector={sector} />;
}
