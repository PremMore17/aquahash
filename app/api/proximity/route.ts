import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { lat, lng } = await req.json();
  // Mock logic: Fetch nearby zones from database based on radius
  const nearbyZones = [
    { name: "Zone B", distance: "2.1km", score: 85 },
    { name: "Zone C", distance: "4.8km", score: 92 }
  ];
  return NextResponse.json(nearbyZones);
}