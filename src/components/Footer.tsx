'use client';

import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-void border-t border-orbit py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/RhaVans" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted hover:text-signal transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
        </div>
        
        <div className="text-center">
          <p className="font-rajdhani uppercase text-xs text-muted tracking-wider">
            &copy; 2026 RHAVANS ORBITAL SYSTEMS. ALL RIGHTS RESERVED.
          </p>
        </div>
        
        <div className="flex items-center">
          <p className="font-mono text-xs text-signal/40 tracking-wider">
            SIGNAL STRENGTH: <span className="text-signal/60">████████░░</span> 82%
          </p>
        </div>
      </div>
    </footer>
  );
}
