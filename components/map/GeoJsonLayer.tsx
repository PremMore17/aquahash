"use client";
import { GeoJSON } from 'react-leaflet';
import { getGroundwaterColor } from '@/lib/map-utils';
import zonesData from '@/data/geojson/groundwater-zones.json';

export default function GeoJsonLayer({ onZoneClick }: { onZoneClick: (data: any) => void }) {
  return (
    <GeoJSON 
      data={zonesData as any} 
      style={(feature) => ({
        fillColor: getGroundwaterColor(feature.properties.depth),
        weight: 1,
        fillOpacity: 0.7,
        color: '#fff'
      })}
      onEachFeature={(feature, layer) => {
        layer.on('click', () => onZoneClick(feature.properties));
      }}
    />
  );
}