'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, TrendingUp } from 'lucide-react';

export default function OperationalParameters() {
  const cards = [
    {
      title: 'OBJEKTIF PRIMER',
      body: 'Mengidentifikasi dan membina sumber nilai yang kokoh dalam jangka panjang melalui perangkat lunak.',
      icon: Target,
    },
    {
      title: 'OBJEKTIF SEKUNDER',
      body: 'Mempertahankan keyakinan tinggi pada arsitektur digital strategis dan pengembangan teknologi tahap awal.',
      icon: Shield,
    },
    {
      title: 'OBJEKTIF TERSIER',
      body: 'Fokus beroperasi menghasilkan profil risiko-imbalan yang asimetris dalam setiap keputusan teknis.',
      icon: TrendingUp,
    }
  ];

  return (
    <section id="systems" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="font-rajdhani uppercase tracking-wider text-2xl text-stardust mb-12 border-b border-orbit pb-4">
        PARAMETER OPERASIONAL
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-panel border border-orbit p-6 group transition-all duration-300 ease-in-out hover:border-signal/40 hover:shadow-[0_0_20px_rgba(79,195,247,0.1)] hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-6">
                <Icon className="text-muted group-hover:text-signal transition-colors duration-300 w-6 h-6" />
                <div className="w-2 h-2 rounded-full bg-signal/20 group-hover:bg-signal animate-pulse" />
              </div>
              
              <h3 className="font-rajdhani uppercase text-signal text-sm tracking-wider mb-4">
                {card.title}
              </h3>
              
              <p className="font-inter text-stardust/80 text-sm leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
