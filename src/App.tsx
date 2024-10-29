import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-gray-100">
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      <footer className="py-8 bg-[#080808] border-t border-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-sm text-gray-500">
            <span className="text-cyan-400">while</span>(alive) {'{'} 
            <span className="text-gray-400">keepCoding()</span> {'}'};
          </p>
        </div>
      </footer>
    </div>
  );
}