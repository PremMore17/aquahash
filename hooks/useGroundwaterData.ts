"use client";
import { useState } from 'react';

export function useGroundwaterAnalysis() {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeZone = async (zoneData: any) => {
    setLoading(true);
    const res = await fetch('/api/groq', {
      method: 'POST',
      body: JSON.stringify({ zoneData }),
    });
    const data = await res.json();
    setAnalysis(data);
    setLoading(false);
  };

  return { analysis, loading, analyzeZone };
}