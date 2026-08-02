'use client';

import { motion } from 'framer-motion';
import { Cpu, Satellite, Radar, Globe } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    name: 'SYNTHESIS',
    class: 'CBT SIMULATION PLATFORM',
    payload: '5000+ HOTS QUESTIONS',
    status: 'OPERATIONAL',
    stack: 'JAVASCRIPT',
    description: 'Platform simulasi ujian CBT interaktif dengan lebih dari 5000 soal HOTS. Dirancang untuk membantu persiapan ujian dengan pendekatan analitis dan adaptif.',
    repo: 'https://github.com/RhaVans/SYNTHESIS',
    icon: Cpu
  },
  {
    name: 'GOLD',
    subtitle: 'Global Operator Link Developer',
    class: 'REMOTE MOBILE INTERFACE',
    payload: 'CHROME DEVTOOLS PROTOCOL',
    status: 'OPERATIONAL',
    stack: 'JAVASCRIPT',
    description: 'Antarmuka mobile remote untuk Antigravity IDE via Chrome DevTools Protocol. Solusi pengembangan lintas perangkat yang inovatif dan efisien.',
    repo: 'https://github.com/RhaVans/(Global-Operator-Link-Developer)',
    icon: Satellite
  },
  {
    name: 'ARIA',
    subtitle: 'Admission Risk & Intelligence Analyzer',
    class: 'ANALYTICAL PLATFORM',
    payload: 'JALUR MANDIRI ADMISSIONS',
    status: 'OPERATIONAL',
    stack: 'JAVASCRIPT',
    description: 'Platform analitis untuk jalur masuk universitas Indonesia. Pipeline scraping, peringkat ease score, dan Arsip Data transparan.',
    repo: 'https://github.com/RhaVans/ARIA',
    icon: Radar
  },
  {
    name: 'LANDING PAGE',
    class: 'FRONTEND DEPLOYMENT',
    payload: 'TYPESCRIPT',
    status: 'OPERATIONAL',
    stack: 'TYPESCRIPT',
    description: 'Proyek landing page modern yang dibangun dengan TypeScript, menunjukkan kemampuan frontend development dan desain antarmuka yang elegan.',
    repo: 'https://github.com/RhaVans/landing-page',
    icon: Globe
  }
];

export default function VehicleManifest() {
  return (
    <section className="bg-void py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-rajdhani text-3xl tracking-wider text-stardust uppercase">
            MENGGERAKKAN MASA DEPAN
          </h2>
          <div className="font-jetbrains text-xs text-signal/60 tracking-wider uppercase mt-2">
            Active Orbital Systems
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-panel border border-orbit p-6 group transition-all duration-300 ease-out hover:border-signal/40 hover:shadow-[0_0_20px_rgba(79,195,247,0.15)] hover:-translate-y-1 relative flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3 items-start">
                    <Icon className="w-5 h-5 text-signal/40 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-rajdhani text-xl font-bold text-stardust uppercase">
                        {project.name}
                      </h3>
                      {project.subtitle && (
                        <div className="text-muted text-xs font-inter mt-1">
                          {project.subtitle}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 font-jetbrains text-xs text-signal">
                    <div className="w-2 h-2 rounded-full bg-signal animate-pulse" />
                    STATUS: {project.status}
                  </div>
                </div>

                <div className="space-y-1 mb-4 border-l-2 border-orbit pl-3">
                  <div className="font-jetbrains text-xs text-muted">
                    CLASS: {project.class}
                  </div>
                  <div className="font-jetbrains text-xs text-muted">
                    PAYLOAD: {project.payload}
                  </div>
                  <div className="font-jetbrains text-xs text-muted">
                    TECH STACK: {project.stack}
                  </div>
                </div>

                <p className="font-inter text-sm text-stardust/80 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <Link 
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-signal/30 text-signal text-xs px-4 py-2 font-rajdhani uppercase tracking-wider hover:border-signal hover:bg-signal/5 transition-colors"
                  >
                    VIEW TELEMETRY
                  </Link>
                  <Link
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-void border border-stardust/10 text-stardust/70 text-xs px-4 py-2 font-rajdhani uppercase tracking-wider hover:border-stardust/30 transition-colors"
                  >
                    GITHUB
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
