'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FlightObjectives() {
  const nodes = [
    { label: 'INCEPTION', status: 'past', time: 'T-3' },
    { label: 'FIRST DEPLOY', status: 'past', time: 'T-2' },
    { label: 'SYSTEM INTEGRATION', status: 'past', time: 'T-1' },
    { label: 'OPERATIONAL', status: 'present', time: 'T+0' },
    { label: 'EXPANSION', status: 'future', time: 'T+1' },
    { label: 'GLOBAL SCALE', status: 'future', time: 'T+2' },
    { label: 'LEGACY', status: 'future', time: 'T+3' },
  ];

  return (
    <section className="py-24 bg-space overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="font-rajdhani text-3xl md:text-4xl font-bold text-stardust uppercase tracking-wider mb-6">
          Nothing is Impossible.
        </h2>
        <p className="font-inter text-lg text-stardust/80 max-w-3xl mx-auto">
          Menjaga dan melipatgandakan dampak teknologi yang diwariskan selamanya melintasi batas siklus inovasi.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="overflow-x-auto pb-12 hide-scrollbar">
          <div className="min-w-[900px] relative flex items-center h-[200px]">
            {/* Main horizontal line */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-muted/50 via-signal to-stardust/20 origin-left"
            />

            <div className="relative w-full flex justify-between items-center z-10 px-4">
              {nodes.map((node, index) => {
                const isTop = index % 2 === 0;
                const isPast = node.status === 'past';
                const isPresent = node.status === 'present';
                const isFuture = node.status === 'future';

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: isTop ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                    className="relative flex flex-col items-center justify-center w-32"
                  >
                    {/* Time Label */}
                    <div className={`absolute font-jetbrains text-xs ${isTop ? 'bottom-[48px]' : 'top-[48px]'} ${isPast ? 'text-muted' : isPresent ? 'text-signal' : 'text-stardust/50'}`}>
                      {node.time}
                    </div>

                    {/* Connector & Label Wrapper */}
                    <div className={`absolute flex flex-col items-center ${isTop ? 'bottom-[12px] flex-col' : 'top-[12px] flex-col-reverse'}`}>
                      {isTop && (
                        <div className={`whitespace-nowrap font-rajdhani uppercase text-sm mb-3 ${isPast ? 'text-muted' : isPresent ? 'text-signal font-bold' : 'text-stardust/50'}`}>
                          {node.label}
                        </div>
                      )}
                      
                      <div className={`w-[2px] h-[24px] ${isFuture ? 'border-l-2 border-dashed border-stardust/20 bg-transparent' : isPresent ? 'bg-signal' : 'bg-muted'}`} />
                      
                      {!isTop && (
                        <div className={`whitespace-nowrap font-rajdhani uppercase text-sm mt-3 ${isPast ? 'text-muted' : isPresent ? 'text-signal font-bold' : 'text-stardust/50'}`}>
                          {node.label}
                        </div>
                      )}
                    </div>

                    {/* Node Circle */}
                    <div className={`w-[12px] h-[12px] rounded-full bg-void border-2 relative z-20 ${isPast ? 'border-muted' : isPresent ? 'border-signal shadow-[0_0_12px_rgba(79,195,247,0.8)]' : 'border-stardust/20'}`}>
                      {isPresent && (
                        <div className="absolute inset-0 rounded-full animate-ping bg-signal opacity-40" />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
