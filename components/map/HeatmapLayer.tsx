"use client";
import { useMap } from 'react-leaflet';
import 'leaflet.heat';
import L from 'leaflet';
import { useEffect } from 'react';

export default function HeatmapLayer({ data }: { data: any[] }) {
  const map = useMap();

  useEffect(() => {
    // Transform your JSON zones into [lat, lng, intensity]
    // Intensity is derived from depth: deeper = higher "heat" (stress)
    const points = data.map(zone => [
      zone.lat, 
      zone.lng, 
      zone.depth / 100 // Normalized intensity (0 to 1)
    ]);

    const heat = (L as any).heatLayer(points, {
      radius: 25,
      blur: 15,
      maxZoom: 10,
      gradient: { 0.2: '#22c55e', 0.5: '#eab308', 0.8: '#ef4444' } // Green to Red thermal
    }).addTo(map);

    return () => {
      map.removeLayer(heat);
    };
  }, [map, data]);

  return null;
}