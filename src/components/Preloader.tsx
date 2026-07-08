"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code2, User, Globe } from "lucide-react";

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 0, y: "-100%" }}
      transition={{ delay: 2.5, duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-black text-white overflow-hidden pointer-events-none"
    >
      {/* Top 3 Icons Pill */}
      <div className="flex gap-6 mb-8 bg-[#111] px-8 py-3 rounded-full border border-gray-800 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
        <Code2 size={20} className="text-gray-400" />
        <User size={20} className="text-gray-400" />
        <Globe size={20} className="text-gray-400" />
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-300">Welcome to my</h1>
      <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Portfolio Website</h2>
      <p className="text-gray-500 text-sm md:text-base mb-10 tracking-widest uppercase">Creating Websites That Feel Alive.</p>

      {/* Progress Bar Animation */}
      <div className="w-64 h-0.5 bg-gray-900 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute left-0 top-0 h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        />
      </div>
    </motion.div>
  );
}