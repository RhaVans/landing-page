'use client';

import { motion } from 'framer-motion';

const stages = [
  {
    number: 'STAGE 1',
    title: 'PERMANENCE',
    description: 'Arsitektur perpetual abadi. Tidak terpengaruh oleh hype teknologi jangka pendek.',
  },
  {
    number: 'STAGE 2',
    title: 'CONVICTION',
    description: 'Fokus terkonsentrasi pada proyek dengan keyakinan tinggi. Menolak pengembangan setengah hati.',
  },
  {
    number: 'STAGE 3',
    title: 'ASYMMETRY',
    description: 'Mencari profil risiko-imbalan asimetris dalam setiap solusi teknologi.',
  },
  {
    number: 'STAGE 4',
    title: 'LEGACY',
    description: 'Setiap baris kode dinilai berdasarkan dampak generasional.',
  },
];

export default function PropulsionSystems() {
  return (
    <section className="bg-void py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-rajdhani text-3xl tracking-wider text-stardust uppercase mb-16"
        >
          SISTEM PROPULSI
        </motion.h2>

        <div className="relative">
          {/* Connecting Line Desktop */}
          <div className="absolute top-8 left-0 w-full h-[1px] bg-orbit hidden md:block" />
          
          {/* Connecting Line Mobile */}
          <div className="absolute top-0 bottom-0 left-[23px] w-[1px] bg-orbit md:hidden" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 relative">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col md:pt-16 pl-12 md:pl-0 md:px-6"
              >
                {/* Node Circle Desktop */}
                <div className="absolute top-[32px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-signal shadow-[0_0_8px_rgba(79,195,247,0.8)] hidden md:block z-10" />
                
                {/* Node Circle Mobile */}
                <div className="absolute top-8 left-[23px] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-signal shadow-[0_0_8px_rgba(79,195,247,0.8)] md:hidden z-10" />
                
                {/* Vertical connector to card on Desktop */}
                <div className="absolute top-8 left-1/2 w-[1px] h-8 bg-orbit hidden md:block" />
                
                {/* Horizontal connector to card on Mobile */}
                <div className="absolute top-8 left-[23px] w-6 h-[1px] bg-orbit md:hidden" />

                <div className="bg-panel border border-orbit p-6 h-full relative z-20">
                  <div className="font-jetbrains text-signal/60 text-xs mb-3">{stage.number}</div>
                  <h3 className="font-rajdhani uppercase text-lg text-stardust font-bold mb-3">{stage.title}</h3>
                  <p className="font-inter text-sm text-stardust/70 leading-relaxed">{stage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 font-jetbrains text-xs text-signal/60 border-t border-orbit pt-4"
        >
          PROPULSION EFFICIENCY: 100% | STAGES: 4 | EXTERNAL DEPENDENCY: 0% | FOCUS: GENERATIONAL
        </motion.div>
      </div>
    </section>
  );
}
