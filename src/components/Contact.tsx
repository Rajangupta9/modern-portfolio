import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-[#080808] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,0.9))]"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-8 text-cyan-400" />
          <h2 className="text-3xl font-bold mb-8 font-mono">connect.init()</h2>
          <div className="flex justify-center gap-6">
            {[
              { icon: <Github className="w-6 h-6" />, label: "GitHub" },
              { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn" },
              { icon: <Twitter className="w-6 h-6" />, label: "Twitter" },
              { icon: <Mail className="w-6 h-6" />, label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="group relative p-4 bg-black/50 rounded-lg border border-cyan-900/50 hover:border-cyan-400/50 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                aria-label={social.label}
              >
                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {social.icon}
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-mono text-cyan-400">{social.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}