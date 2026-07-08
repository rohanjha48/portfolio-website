"use client";
import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function IdCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring Physics - Ye mouse tilt ko ekdum smooth aur realistic banayega
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-100, 100], [15, -15]);
  const rotateY = useTransform(mouseXSpring, [-100, 100], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // select-none lagane se ab text highlight/blue nahi hoga khinchne par
    <section id="about" className="py-32 flex flex-col md:flex-row justify-center items-center relative perspective-distant overflow-hidden select-none">
      
      <div className="text-center md:text-left md:mr-32 mb-16 md:mb-0 z-10">
        <h2 className="text-6xl font-black uppercase mb-6 text-white tracking-tighter">
          About <span className="text-gray-500">Me</span>
        </h2>
        <p className="text-gray-400 max-w-md text-lg leading-relaxed">
          Engineering student by day, full-stack developer by night. Obsessed with clean code, Linux systems, and building intelligent architectures.
        </p>
      </div>

      <div className="relative flex justify-center w-full md:w-auto">
        
        {/* THICK LANYARD (Mota Strap) with College Name */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-14 h-44 bg-[#111] z-0 flex justify-center items-center overflow-hidden border-x border-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          <span 
            className="text-gray-600 font-black text-xl tracking-[0.4em] uppercase opacity-70"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            {/* YAHAN APNE COLLEGE KA SHORT FORM LIKHO */}
              JAIN •2026
          </span>
        </div>

        {/* DRAGGABLE & BOUNCY CARD (Jump Effect) */}
        <motion.div
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          dragElastic={0.2}
          whileDrag={{ scale: 1.05, cursor: "grabbing" }}
          animate={{ rotateZ: [-1, 1, -1] }}
          transition={{ rotateZ: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
          className="origin-top relative z-10 cursor-grab"
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-[320px] h-125 bg-linear-to-b from-[#111] to-black rounded-2xl border border-gray-700 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col items-center p-6 overflow-hidden"
          >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/10 to-transparent rounded-2xl pointer-events-none"></div>

            <h1 className="text-2xl font-black text-white uppercase tracking-[0.3em] mt-8 opacity-80 pointer-events-none" style={{ transform: "translateZ(40px)" }}>
              ROHAN
            </h1>
            <p className="text-[10px] text-emerald-500 uppercase tracking-widest mt-1 mb-6 font-bold pointer-events-none" style={{ transform: "translateZ(30px)" }}>
              B.Tech CSE • Cloud & InfoSec
            </p>

            {/* PROFILE PHOTO SECTION */}
            <div 
              className="w-40 h-40 rounded-lg overflow-hidden border border-gray-600 shadow-2xl mb-6 relative transition-all duration-700 ease-out pointer-events-none"
              style={{ transform: "translateZ(50px)" }}
            >
              {/* PHOTO LINK YAHAN HAI */}
              <img src="/rohan.png" alt="Rohan Profile" className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700" />
              <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
            </div>

            <div className="w-full px-2 pointer-events-none" style={{ transform: "translateZ(30px)" }}>
              <div className="flex justify-between border-b border-gray-800 pb-2 mb-3">
                <span className="text-[10px] text-gray-500 uppercase font-semibold">ID No.</span>
                <span className="text-xs text-gray-300 font-mono tracking-widest">UZEN-2026</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2 mb-2">
                <span className="text-[10px] text-gray-500 uppercase font-semibold">Status</span>
                <span className="text-xs text-white bg-green-500/20 px-2 py-0.5 rounded border border-green-500/30">ACTIVE</span>
              </div>
            </div>

            {/* Signature & Barcode */}
            <div className="mt-auto w-full flex flex-col items-center gap-4 pointer-events-none" style={{ transform: "translateZ(40px)" }}>
              <div className="font-serif italic text-2xl text-gray-400 opacity-80 -rotate-3">
                Rohan Jha
              </div>
              <div className="w-full h-8 flex justify-center items-center gap-1 opacity-40">
                <div className="w-1 h-full bg-white"></div>
                <div className="w-3 h-full bg-white"></div>
                <div className="w-1 h-full bg-white"></div>
                <div className="w-4 h-full bg-white"></div>
                <div className="w-1 h-full bg-white"></div>
                <div className="w-2 h-full bg-white"></div>
                <div className="w-5 h-full bg-white"></div>
                <div className="w-1 h-full bg-white"></div>
                <div className="w-3 h-full bg-white"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
