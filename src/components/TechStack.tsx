import React from 'react';
import { Terminal, Database, Code2, Server } from 'lucide-react'; 

const technologies = [
  { name: 'Python', icon: <Code2 size={32} /> },
  { name: 'Next.js', icon: <Code2 size={32} /> },
  { name: 'Ubuntu / Linux', icon: <Terminal size={32} /> },
  { name: 'Cloud Infrastructure', icon: <Server size={32} /> },
  { name: 'Databases', icon: <Database size={32} /> },
];

export default function TechStack() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl font-black mb-16 text-center uppercase tracking-widest text-gray-300">Tech Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center justify-center p-6 bg-[#0a0a0a] rounded-xl border border-gray-800 hover:border-gray-400 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:-translate-y-3 transition-all duration-500 cursor-pointer"
            >
              <div className="mb-4 text-gray-500 group-hover:text-white transition-colors duration-300">
                {tech.icon}
              </div>
              <span className="text-xs uppercase tracking-widest text-gray-400 font-bold group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
