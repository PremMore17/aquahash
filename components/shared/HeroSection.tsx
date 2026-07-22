"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] text-white flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/20 blur-[120px] rounded-full" />

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            text-5xl
            md:text-7xl
            font-black
            leading-tight
            glow-text
          "
        >

          AI-Powered
          <span className="text-cyan-400"> Groundwater </span>
          Intelligence Platform

        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="
            mt-8
            text-lg
            md:text-2xl
            text-slate-300
            max-w-3xl
            mx-auto
            leading-relaxed
          "
        >

          Analyze groundwater sustainability,
          mineral quality, and smarter water
          accessibility using geospatial AI.

        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="
            mt-12
            flex
            flex-col
            sm:flex-row
            gap-6
            justify-center
          "
        >

          <a
            href="/map"
            className="
              px-8
              py-4
              rounded-2xl
              bg-cyan-500
              text-black
              font-bold
              hover:scale-105
              transition
              shadow-lg
              shadow-cyan-500/30
            "
          >
            Analyze Groundwater
          </a>

          <a
            href="/map"
            className="
              px-8
              py-4
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              hover:bg-white/10
              transition
            "
          >
            Explore Map
          </a>

        </motion.div>

        {/* Floating Stats */}
        <div className="
          mt-24
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
        ">

          <div className="glass-card rounded-2xl p-6">

            <h3 className="text-4xl font-black text-cyan-400">
              148+
            </h3>

            <p className="text-slate-300 mt-2">
              Groundwater Risk Zones
            </p>

          </div>

          <div className="glass-card rounded-2xl p-6">

            <h3 className="text-4xl font-black text-emerald-400">
              82%
            </h3>

            <p className="text-slate-300 mt-2">
              Sustainability Accuracy
            </p>

          </div>

          <div className="glass-card rounded-2xl p-6">

            <h3 className="text-4xl font-black text-cyan-400">
              24/7
            </h3>

            <p className="text-slate-300 mt-2">
              AI Groundwater Monitoring
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}