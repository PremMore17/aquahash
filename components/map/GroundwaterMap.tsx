"use client";

import React, {
  useEffect,
  useState,
} from "react";

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

type Zone = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  depth: number;
  risk: string;
  sustainability: number;
};

type Props = {
  onZoneClick?: (zone: Zone) => void;
};

export default function GroundwaterMap({
  onZoneClick,
}: Props) {

  const [zones, setZones] =
    useState<Zone[]>([]);

  useEffect(() => {

    fetch("/groundwater.json")
      .then((res) => res.json())
      .then((data) => setZones(data));

  }, []);

  const getColor = (risk: string) => {

    switch (risk) {

      case "critical":
        return "#ef4444";

      case "moderate":
        return "#facc15";

      case "safe":
        return "#22c55e";

      default:
        return "#3b82f6";
    }
  };

  return (
    <div className="h-screen w-full rounded-2xl overflow-hidden">

      <MapContainer
        center={[12.97, 77.59]}
        zoom={11}
        className="h-full w-full"
      >

        {/* Base Map */}
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Groundwater Zones */}
        {zones.map((zone) => (

          <CircleMarker
            key={zone.id}
            center={[zone.lat, zone.lng]}

            radius={
              zone.risk === "critical"
                ? 28
                : zone.risk === "moderate"
                ? 22
                : 18
            }

            pathOptions={{
              color: getColor(zone.risk),
              fillColor: getColor(zone.risk),
              fillOpacity: 0.45,
              weight: 2,
            }}

            eventHandlers={{
              click: () => {

                if (onZoneClick) {
                  onZoneClick(zone);
                }

              },
            }}
          >

            <Popup>

              <div className="text-black space-y-1">

                <h2 className="font-bold text-lg">
                  {zone.name}
                </h2>

                <p>
                  Depth:
                  {" "}
                  {zone.depth}m
                </p>

                <p>
                  Risk:
                  {" "}
                  {zone.risk}
                </p>

                <p>
                  Sustainability:
                  {" "}
                  {zone.sustainability}
                </p>

              </div>

            </Popup>

          </CircleMarker>

        ))}

      </MapContainer>
      <div className="
  absolute
  bottom-6
  left-6
  z-[1000]
  bg-slate-900/90
  backdrop-blur-xl
  p-4
  rounded-xl
  border
  border-white/10
  text-xs
  text-white
  shadow-2xl
">

  <div className="font-bold text-cyan-400 mb-3">
    Groundwater Stress
  </div>

  <div className="flex items-center gap-2 mb-2">
    <div className="size-3 rounded-full bg-red-500"></div>
    Critical Stress
  </div>

  <div className="flex items-center gap-2 mb-2">
    <div className="size-3 rounded-full bg-yellow-500"></div>
    Moderate Stress
  </div>

  <div className="flex items-center gap-2">
    <div className="size-3 rounded-full bg-green-500"></div>
    Stable Zone
  </div>

</div>
    </div>
  );
}