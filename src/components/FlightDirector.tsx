'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FlightDirector() {
  return (
    <section id="flight-director" className="w-full bg-space py-24 relative overflow-hidden border-t border-orbit">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-rajdhani text-3xl text-stardust uppercase tracking-wider">
            TIM DIBALIK VISI
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-orbit to-transparent mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center relative"
          >
            <div className="relative flex items-center justify-center">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 -m-6 rounded-full border border-dashed border-signal/20 animate-rotate-slow" />
              <div className="absolute inset-0 -m-8 rounded-full border border-dashed border-orbit animate-rotate-slow-reverse" />
              
              {/* Technical markings */}
              <div className="absolute inset-0 -m-6">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-3 bg-signal/50" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-3 bg-signal/50" />
                <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-1 bg-signal/50" />
                <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-1 bg-signal/50" />
              </div>

              <div className="rounded-full overflow-hidden w-72 h-72 md:w-80 md:h-80 border-[3px] border-signal/30 relative bg-void">
                <div className="absolute inset-0 bg-signal/5 z-10 pointer-events-none mix-blend-overlay" />
                <Image
                  src="/images/flight-director.jpg"
                  alt="Flight Director RhaVans"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full relative z-0"
                />
              </div>
            </div>
            <div className="mt-12 font-jetbrains text-xs text-signal/60 tracking-wider text-center uppercase">
              FLIGHT DIRECTOR
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h3 className="font-rajdhani text-4xl md:text-5xl font-bold text-stardust uppercase tracking-wider">
              RhaVans
            </h3>
            <p className="font-jetbrains text-xs text-signal tracking-wider uppercase mt-2">
              Founder, Flight Director & Chief Architect
            </p>
            
            <p className="font-inter text-stardust/80 leading-relaxed mt-6 max-w-lg">
              Flight Director yang mengoperasikan laboratorium pengembangan independen dengan fokus pada arsitektur perangkat lunak yang abadi dan sistem yang mampu bertahan lintas generasi.
            </p>

            <div className="mt-8 bg-panel p-4 border border-orbit inline-block">
              <p className="font-jetbrains text-xs text-signal/70 tracking-wider">
                SYSTEMS DEPLOYED: 4 <span className="mx-2 text-orbit">|</span> NETWORK: GLOBAL <span className="mx-2 text-orbit">|</span> AUTONOMY: 100%
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
