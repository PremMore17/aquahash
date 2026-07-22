"use client";
import { motion } from 'framer-motion';
import { Award, Leaf, Zap } from 'lucide-react';

export default function CommunityRewardsSection() {
  const points = 750;
  const target = 1000;
  const progress = (points / target) * 100;

  return (
    <div className="glass-card p-6 rounded-2xl border border-emerald-500/20 mt-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold flex items-center gap-2 text-emerald-400">
          <Award size={24} /> Community Impact
        </h3>
        <span className="text-sm text-slate-400">Level: Eco-Warrior</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Progress Tracker */}
        <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl">
          <div className="relative size-32 flex items-center justify-center">
            <svg className="size-full rotate-[-90deg]">
              <circle cx="64" cy="64" r="56" fill="none" stroke="currentColor" strokeWidth="8" className="text-slate-800" />
              <motion.circle 
                initial={{ strokeDashoffset: 350 }}
                animate={{ strokeDashoffset: 350 - (350 * progress / 100) }}
                cx="64" cy="64" r="56" fill="none" stroke="url(#gradient)" strokeWidth="8" strokeDasharray="350" strokeLinecap="round" 
              />
            </svg>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>
            </defs>
            <div className="absolute text-2xl font-black">{points}</div>
          </div>
          <p className="text-slate-400 mt-2">Eco-Points Earned</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full py-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center gap-2 transition-all">
            <Leaf size={18} /> Upload Recharge Proof
          </button>
          <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center gap-2 transition-all">
            <Zap size={18} /> View Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
}