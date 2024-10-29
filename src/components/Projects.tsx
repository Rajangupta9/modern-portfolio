import React from 'react';
import { Briefcase, Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "CryptoTracker Pro",
      description: "Real-time cryptocurrency tracking with AI-powered predictions",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=640",
      tech: ["React", "Node.js", "TensorFlow"],
    },
    {
      title: "DevFlow",
      description: "Developer productivity suite with integrated AI assistance",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=640",
      tech: ["TypeScript", "Python", "OpenAI"],
    },
    {
      title: "NetGuardian",
      description: "Cybersecurity monitoring dashboard for network analysis",
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80&w=640",
      tech: ["React", "Express", "MongoDB"],
    },
    {
      title: "CodeVault",
      description: "Secure code snippet manager with real-time collaboration",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=640",
      tech: ["Next.js", "GraphQL", "PostgreSQL"],
    }
  ];

  return (
    <section className="py-20 bg-[#080808] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,0.9))]"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold font-mono">projects.map()</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} 
                className="group relative bg-black/50 rounded-lg overflow-hidden border border-cyan-900/30 hover:border-cyan-400/50 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2 font-mono text-cyan-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-cyan-900/30 rounded text-cyan-400 text-sm font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="#" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                      <Github className="w-5 h-5" />
                      <span className="font-mono">View Code</span>
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-mono">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}