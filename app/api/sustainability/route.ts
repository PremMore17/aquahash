import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { zones } = await req.json();
  // Batch processing logic for heatmap aggregation
  const processed = zones.map((z: any) => ({
    id: z.id,
    intensity: z.depth > 50 ? 1 : 0.4
  }));
  return NextResponse.json(processed);
}