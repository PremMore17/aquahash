"use client";
import { useMap } from 'react-leaflet';
import { Search } from 'lucide-react';

export default function MapControls({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div className="absolute top-4 left-16 z-[1000] flex gap-2">
      <input 
        type="text" 
        placeholder="Search location..." 
        className="bg-slate-900 border border-cyan-500/30 p-2 rounded-lg text-white"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="bg-cyan-500 p-2 rounded-lg text-black font-bold">
        <Search size={20} />
      </button>
    </div>
  );
}