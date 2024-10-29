import React from 'react';
import { Terminal, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#080808] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,0.9))]"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Terminal className="w-16 h-16 mx-auto mb-8 text-cyan-400" />
          
          <div className="mb-8 inline-block">
            <div className="font-mono text-gray-400 mb-2">
              <span className="text-cyan-400">const</span> developer = {'{'}
            </div>
            <div className="font-mono text-4xl md:text-6xl font-bold mb-2 text-white">
              Rajan Gupta
            </div>
            <div className="font-mono text-gray-400">
              {'}'};
            </div>
          </div>

          <p className="text-xl text-gray-300 mb-12 font-mono">
            <span className="text-cyan-400">&gt;</span> Full-Stack Developer | Open Source Enthusiast | Problem Solver
          </p>

          <div className="flex justify-center gap-6">
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-mono rounded-lg transition-colors">
              View Projects
            </button>
            <button className="px-6 py-3 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-950/50 font-mono rounded-lg transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </div>
    </section>
  );
}