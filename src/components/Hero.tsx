import React from 'react';
import Marquee from "react-fast-marquee";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Top Navbar area placeholder */}
      <div className="absolute top-0 w-full p-6 flex justify-between items-center text-sm tracking-widest uppercase opacity-70">
        <span>Rohan Kumar Jha</span>
        <span>{new Date().toLocaleTimeString()}</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between z-10">
        {/* Massive Name Typography */}
        <h1 className="text-[12vw] font-black tracking-tighter leading-none uppercase bg-clip-text text-transparent bg-linear-to-br from-white via-gray-400 to-gray-800 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        Rohan
        </h1>
        
        {/* Right side text */}
        <div className="text-right md:w-1/3 mt-8 md:mt-0">
          <h2 className="text-3xl md:text-5xl font-serif italic mb-4">
            Building intelligent systems that scale.
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Transforming complex ideas into seamless full-stack applications and AI-driven solutions.
          </p>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="mt-auto border-y border-gray-800 py-4 overflow-hidden">
        <Marquee speed={50} gradient={false} className="text-xl md:text-2xl uppercase tracking-widest font-semibold text-gray-500">
          <span className="mx-8">• Full-Stack Developer</span>
          <span className="mx-8">• AI & Cloud Computing</span>
          <span className="mx-8">• Information Security</span>
          <span className="mx-8">• Linux Enthusiast</span>
          <span className="mx-8">• Startup Founder (UZENCHAT)</span>
        </Marquee>
      </div>
      <div className="absolute top-0 w-full p-6 flex justify-between items-center text-sm tracking-widest uppercase opacity-70 z-50">
        <span>Rohan Kumar Jha</span>
        <div className="flex gap-6">
          <a href="#home" className="hover:text-white transition-colors cursor-pointer">Home</a>
          <a href="#about" className="hover:text-white transition-colors cursor-pointer">About</a>
          <a href="#tech" className="hover:text-white transition-colors cursor-pointer">Showcase</a>
          <a href="#contact" className="hover:text-white transition-colors cursor-pointer">Contact</a>
        </div>
        <span>{new Date().toLocaleTimeString()}</span>
      </div>
    </section>
  );
}
