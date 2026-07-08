"use client";
import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";

const contentData = {
  about: {
    title: "About Me",
    desc: "I am a B.Tech CSE student specializing in Cloud Computing & Information Security at Jain University, Bangalore. Beyond academics, I am building my startup, UZENCHAT, and actively diving into full-stack development in the AI era. Whether I am troubleshooting intricate hardware, writing automated scripts, or spinning up servers on Ubuntu, I love transforming complex problems into scalable digital solutions."
  },
  nextjs: {
    title: "Next.js",
    desc: "My go-to React framework for the web. I leverage Next.js to build fast, SEO-friendly, and highly scalable server-rendered applications. Its powerful routing and seamless API integration help me build production-ready platforms."
  },
  python: {
    title: "Python",
    desc: "The backbone of my AI logic and backend processes. From writing automated news-tracking scripts to analyzing hardware requirements for training Large Language Models (LLMs), Python allows me to turn complex logic into execution."
  },
  ubuntu: {
    title: "Ubuntu / Linux",
    desc: "My preferred daily driver and development environment. I thrive in the terminal, whether it's managing OS partitions, configuring cloud infrastructures, or setting up dedicated AI servers on Linux systems."
  },
  tailwind: {
    title: "Tailwind CSS",
    desc: "Utility-first styling at its finest. I use Tailwind to rapidly build custom, responsive, and highly polished user interfaces without ever leaving my JSX/HTML code, ensuring a premium look and feel."
  }
};

type ContentKey = keyof typeof contentData;

export default function IdCard() {
  const [activeModal, setActiveModal] = useState<ContentKey | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
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
    <>
      <section id="about" className="py-32 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row justify-between items-center relative perspective-distant overflow-hidden select-none max-w-7xl mx-auto w-full gap-16 lg:gap-8">
        
        {/* LEFT SIDE: MASSIVE TEXT SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center z-10">
          
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">
              + Available for work
            </span>
          </div>

          <h2 className="text-6xl sm:text-7xl lg:text-[6.5rem] font-black leading-[0.9] tracking-tighter text-white mb-8 uppercase">
            Full-Stack<br />
            <span className="text-gray-500">Developer</span>
          </h2>

          <p className="text-gray-400 max-w-md text-sm sm:text-base leading-relaxed mb-10">
            Building intelligent architectures with clean, responsive, and elegant interfaces. Turning complex ideas into seamless cloud and web experiences.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <button onClick={() => setActiveModal('nextjs')} className="px-4 py-2 rounded-full border border-gray-800 text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-widest bg-[#0a0a0a] hover:border-gray-400 hover:text-white transition-colors cursor-pointer">
              Next.js
            </button>
            <button onClick={() => setActiveModal('python')} className="px-4 py-2 rounded-full border border-gray-800 text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-widest bg-[#0a0a0a] hover:border-gray-400 hover:text-white transition-colors cursor-pointer">
              Python
            </button>
            <button onClick={() => setActiveModal('ubuntu')} className="px-4 py-2 rounded-full border border-gray-800 text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-widest bg-[#0a0a0a] hover:border-gray-400 hover:text-white transition-colors cursor-pointer">
              Ubuntu / Linux
            </button>
            <button onClick={() => setActiveModal('tailwind')} className="px-4 py-2 rounded-full border border-gray-800 text-[10px] sm:text-xs font-bold text-gray-300 uppercase tracking-widest bg-[#0a0a0a] hover:border-gray-400 hover:text-white transition-colors cursor-pointer">
              Tailwind CSS
            </button>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#about" className="px-8 py-3 rounded-full border border-red-500/50 text-red-500 text-xs font-bold uppercase tracking-widest hover:bg-red-500/10 transition-colors cursor-pointer inline-block">
              Show Card
            </a>
            <button onClick={() => setActiveModal('about')} className="px-8 py-3 rounded-full border border-gray-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer inline-block">
              About Me
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: HANGING ID CARD */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-20 lg:mt-0">
          
          {/* THE MASTER WRAPPER: Keeps Strip and Card 100% Aligned Always */}
          <div className="relative flex flex-col items-center justify-center w-75 lg:mr-16">
            
            {/* THICK LANYARD (Locked perfectly to the center of this 300px wrapper) */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-14 h-48 bg-[#111] z-0 flex justify-center items-center overflow-hidden border-x border-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
              <span className="text-gray-600 font-black text-xl tracking-[0.4em] uppercase opacity-70" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                JAIN • 2026
              </span>
            </div>

            {/* DRAGGABLE CARD */}
            <motion.div
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={0.2}
              whileDrag={{ scale: 1.05, cursor: "grabbing" }}
              animate={{ rotateZ: [-1, 1, -1] }}
              transition={{ rotateZ: { repeat: Infinity, duration: 4, ease: "easeInOut" } }}
              className="origin-top relative z-10 cursor-grab w-full"
            >
              <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative w-full h-120 bg-linear-to-b from-[#111] to-black rounded-2xl border border-gray-700 shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col items-center p-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent rounded-2xl pointer-events-none"></div>

                <div className="absolute -top-2 w-20 h-6 bg-linear-to-b from-gray-300 to-gray-500 rounded-md border border-gray-400 flex justify-center items-center z-20 drop-shadow-md">
                  <div className="w-10 h-1.5 bg-black/80 rounded-full"></div>
                </div>

                <h1 className="text-2xl font-black text-white uppercase tracking-[0.3em] mt-8 opacity-80 pointer-events-none" style={{ transform: "translateZ(40px)" }}>
                  ROHAN
                </h1>
                <p className="text-[10px] text-emerald-500 uppercase tracking-widest mt-1 mb-6 font-bold pointer-events-none text-center" style={{ transform: "translateZ(30px)" }}>
                  B.Tech CSE<br/>Cloud & InfoSec
                </p>

                <div 
                  className="w-36 h-36 rounded-lg overflow-hidden border border-gray-600 shadow-2xl mb-6 relative transition-all duration-700 ease-out pointer-events-none"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <img src="/Rohan.png" alt="Rohan Profile" className="w-full h-full object-cover scale-110 transition-transform duration-700" />
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

                <div className="mt-auto w-full flex flex-col items-center gap-4 pointer-events-none" style={{ transform: "translateZ(40px)" }}>
                  <div className="font-serif italic text-2xl text-gray-400 opacity-80 -rotate-3">
                    Rohan Jha
                  </div>
                  <div className="w-full h-6 flex justify-center items-center gap-1 opacity-40">
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
        </div>
      </section>

      {/* THE MODAL OVERLAY (Pop-up) */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl max-w-lg w-full shadow-[0_0_50px_rgba(0,0,0,0.8)] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveModal(null)} 
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                ✕
              </button>
              <h3 className="text-3xl font-black mb-4 uppercase tracking-widest text-white">
                {contentData[activeModal].title}
              </h3>
              <div className="w-12 h-1 bg-gray-700 mb-6 rounded-full"></div>
              <p className="text-gray-300 leading-relaxed font-medium">
                {contentData[activeModal].desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}