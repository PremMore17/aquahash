"use client";

import { motion } from "framer-motion";

type Props = {
  data: any;
  onClose: () => void;
};

export default function FloatingAnalyticsPanel({
  data,
  onClose,
}: Props) {

  if (!data) return null;

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}

      className="
        fixed
        right-6
        top-24
        w-96
        glass-card
        rounded-2xl
        p-6
        z-50
      "
    >

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-cyan-400">
          AI Analysis
        </h2>

        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white"
        >
          ✕
        </button>

      </div>

      <div className="space-y-6">

        <div className="bg-white/5 rounded-2xl p-6 text-center">

          <div className="text-5xl font-black text-white">

            {data.sustainability_score}

          </div>

          <div className="text-cyan-400 mt-2">
            Sustainability Score
          </div>

        </div>

        <div>

          <h3 className="text-red-400 font-bold mb-2">
            Risk Level
          </h3>

          <p className="capitalize text-white">
            {data.risk_level}
          </p>

        </div>

        <div>

          <h3 className="text-cyan-400 font-bold mb-2">
            Mineral Insight
          </h3>

          <p className="text-slate-300">
            {data.mineral_insight}
          </p>

        </div>

        <div>

          <h3 className="text-emerald-400 font-bold mb-3">
            Recommendations
          </h3>

          <ul className="space-y-2">

            {data.recommendations?.map(
              (rec: string, i: number) => (

                <li
                  key={i}
                  className="
                    bg-white/5
                    rounded-xl
                    p-3
                    text-sm
                  "
                >
                  {rec}
                </li>
              )
            )}

          </ul>

        </div>

      </div>
    </motion.div>
  );
}