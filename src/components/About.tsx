import React from 'react';
import { User, Cpu, Code, Database } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: <Code className="w-6 h-6" />, name: "Frontend", items: ["React", "TypeScript", "Tailwind"] },
    { icon: <Database className="w-6 h-6" />, name: "Backend", items: ["Node.js", "Python", "MongoDB"] },
    { icon: <Cpu className="w-6 h-6" />, name: "Tools", items: ["Git", "Docker", "AWS"] }
  ];

  return (
    <section className="py-20 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,0.9))]"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <User className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold font-mono text-white">whoami</h2>
          </div>
          <div className="space-y-8 text-gray-300">
            <div className="bg-black/50 p-6 rounded-lg border border-cyan-900/50 backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              <p className="leading-relaxed font-mono">
                <span className="text-cyan-400">$</span> I'm a self-taught developer with a passion for building innovative solutions. 
                By day, I craft clean code and elegant architectures. By night, I explore the frontiers of technology, 
                pushing the boundaries of what's possible.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-black/50 p-6 rounded-lg border border-cyan-900/50 hover:border-cyan-400/50 transition-colors backdrop-blur-sm shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                  <div className="flex items-center gap-3 mb-4 text-cyan-400">
                    {skill.icon}
                    <h3 className="font-mono font-bold">{skill.name}</h3>
                  </div>
                  <ul className="space-y-2 font-mono">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-cyan-400">→</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}