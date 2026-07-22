"use client";
import { motion } from 'framer-motion';

export default function RechargeTrendChart({ data }: { data: number[] }) {
  return (
    <div className="h-40 flex items-end gap-2 p-4 glass-card rounded-xl">
      {data.map((val, i) => (
        <motion.div 
          key={i} 
          initial={{ height: 0 }} 
          animate={{ height: `${val}%` }}
          className="w-full bg-cyan-500/50 rounded-t"
        />
      ))}
    </div>
  );
}