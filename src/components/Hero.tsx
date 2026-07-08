"use client";
import React from 'react';
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      
      {/* Floating Social Icons (Left Side) */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-20"
      >
        <a href="https://www.instagram.com/rohanjha.01/" className="p-3 bg-gray-900/50 rounded-full border border-gray-800 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 backdrop-blur-md text-white">
          <FaInstagram size={22} />
        </a>
        <a href="https://github.com/Mockeryof" target="_blank" rel="noreferrer" className="p-3 bg-gray-900/50 rounded-full border border-gray-800 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 backdrop-blur-md text-white">
          <FaGithub size={22} />
        </a>
        <a href="https://www.linkedin.com/in/rohan-jha-a90807384/" className="p-3 bg-gray-900/50 rounded-full border border-gray-800 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 backdrop-blur-md text-white">
          <FaLinkedin size={22} />
        </a>
      </motion.div>

      {/* Top Navbar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.2, duration: 0.5 }}
        className="absolute top-0 w-full p-6 flex justify-between items-center text-sm tracking-widest uppercase opacity-80 z-50 bg-black/50 backdrop-blur-sm"
      >
        <span className="font-bold">Rohan Kumar Jha</span>
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-gray-400 transition-colors cursor-pointer">Home</a>
          <a href="#about" className="hover:text-gray-400 transition-colors cursor-pointer">About</a>
          <a href="#tech" className="hover:text-gray-400 transition-colors cursor-pointer">Showcase</a>
          <a href="#contact" className="hover:text-gray-400 transition-colors cursor-pointer">Contact</a>
        </div>
        <span>{new Date().toLocaleTimeString()}</span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-24 w-full flex flex-col md:flex-row items-center justify-between z-10">
        
        {/* Popping Text Animation */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6, type: "spring", bounce: 0.4 }}
          className="text-[15vw] md:text-[12vw] font-black tracking-tighter leading-none uppercase bg-clip-text text-transparent bg-linear-to-br from-white via-gray-300 to-gray-800 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        >
          Rohan
        </motion.h1>
        
        {/* Right side text */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
          className="text-center md:text-right md:w-1/3 mt-8 md:mt-0"
        >
          <h2 className="text-3xl md:text-5xl font-serif italic mb-4">
            Building intelligent systems that scale.
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Transforming complex ideas into seamless full-stack applications and AI-driven solutions.
          </p>
        </motion.div>
      </div>

      {/* Marquee Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="mt-auto border-y border-gray-900 py-4 overflow-hidden bg-black/40 backdrop-blur-sm"
      >
        <Marquee speed={50} gradient={false} className="text-xl md:text-2xl uppercase tracking-widest font-semibold text-gray-500">
          <span className="mx-8">• Full-Stack Developer</span>
          <span className="mx-8">• AI & Cloud Computing</span>
          <span className="mx-8">• Information Security</span>
          <span className="mx-8">• Linux Enthusiast</span>
          <span className="mx-8">• Startup Founder (UZENCHAT)</span>
        </Marquee>
      </motion.div>
    </section>
  );
}