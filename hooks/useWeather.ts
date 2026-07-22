"use client";
import { useState, useEffect } from 'react';

export function useWeather(lat: number, lng: number) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (lat && lng) {
      fetch(`/api/weather?lat=${lat}&lon=${lng}`)
        .then(res => res.json())
        .then(data => setWeather(data));
    }
  }, [lat, lng]);

  return weather;
}