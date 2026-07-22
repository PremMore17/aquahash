"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

import FloatingAnalyticsPanel from "@/components/dashboard/FloatingAnalyticsPanel";

const Map = dynamic(
  () => import("@/components/map/GroundwaterMap"),
  {
    ssr: false,
  }
);

export default function MapPage() {

  const [analysis, setAnalysis] = useState(null);

  const handleAnalysis = async (zoneData: any) => {

    const res = await fetch("/api/groq", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        zoneData,
      }),
    });

    const result = await res.json();

    setAnalysis(result);
  };

  return (
    <div className="relative h-screen bg-[#020617] p-6">

      <Map onZoneClick={handleAnalysis} />

      <FloatingAnalyticsPanel
        data={analysis}
        onClose={() => setAnalysis(null)}
      />

    </div>
  );
}