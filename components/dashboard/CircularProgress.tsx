"use client";
import { motion } from 'framer-motion';

export default function CircularProgress({ score }: { score: number }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative size-32">
      <svg className="size-full rotate-[-90deg]">
        <circle cx="64" cy="64" r={radius} fill="none" stroke="#1e293b" strokeWidth="8" />
        <motion.circle
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          cx="64" cy="64" r={radius} fill="none" stroke="#22d3ee" strokeWidth="8"
          strokeDasharray={circumference}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center font-black text-2xl">{score}</div>
    </div>
  );
}