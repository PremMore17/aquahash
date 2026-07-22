"use client";
export default function SustainabilityTimeline({ events }: { events: any[] }) {
  return (
    <div className="space-y-4">
      {events.map((event, i) => (
        <div key={i} className="flex gap-4 p-4 glass-card rounded-lg">
          <div className="text-cyan-400 font-bold">{event.year}</div>
          <div>
            <div className="font-bold">{event.title}</div>
            <div className="text-sm text-slate-400">{event.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}