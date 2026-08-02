'use client'

import { motion } from 'framer-motion'

export default function MissionBriefing() {
  return (
    <section className="bg-space py-6 border-y border-orbit w-full overflow-hidden">
      <style>{`
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blinkCursor 1s step-end infinite;
        }
      `}</style>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 text-center"
      >
        <p className="font-jetbrains uppercase text-signal/80 text-xs md:text-sm tracking-[0.15em] flex items-center justify-center flex-wrap">
          MISSION OBJECTIVE: DEPLOY SUSTAINABLE SOFTWARE SYSTEMS WITH PERMANENT ARCHITECTURE.
          <span className="inline-block w-2 h-4 bg-signal/80 ml-2 animate-blink"></span>
        </p>
      </motion.div>
    </section>
  )
}
