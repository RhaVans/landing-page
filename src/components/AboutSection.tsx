'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCard = ({ label, value, isNumeric = false, suffix = '' }: { label: string, value: string | number, isNumeric?: boolean, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && isNumeric && typeof value === 'number') {
      let start = 0;
      const end = value;
      const duration = 1500; // ms
      const incrementTime = 30; // ms
      const steps = duration / incrementTime;
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, isNumeric, value]);

  return (
    <div ref={ref} className="bg-panel p-4 border border-orbit flex flex-col justify-between h-full">
      <div className="font-jetbrains text-xs text-muted uppercase mb-2">{label}</div>
      <div className="font-rajdhani text-2xl text-signal font-bold">
        {isNumeric ? count : value}{suffix}
      </div>
    </div>
  );
};

export default function AboutSection() {
  const stages = [
    { name: 'DESIGN', desc: 'Conceptualize robust architecture' },
    { name: 'ARCHITECT', desc: 'Blueprint for multi-generational systems' },
    { name: 'DEPLOY', desc: 'Execute with high precision' },
    { name: 'MAINTAIN', desc: 'Ensure continuous autonomous ops' },
  ];

  return (
    <section id="mission" className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column */}
        <div>
          <h3 className="font-rajdhani text-signal/60 text-xs tracking-[0.2em] mb-4 uppercase">
            TENTANG PROGRAM
          </h3>
          <h2 className="font-rajdhani text-signal tracking-wider text-sm mb-6 uppercase">
            Keteguhan, Kecerdasan, dan Keandalan.
          </h2>
          <div className="space-y-4 font-inter text-stardust/90 leading-relaxed text-base">
            <p>
              RhaVans Orbital Systems adalah laboratorium pengembangan perangkat lunak independen. Setiap sistem yang dideploy dirancang untuk bertahan lintas generasi, tidak terikat oleh hype teknologi jangka pendek.
            </p>
            <p>
              Kami mengoperasikan dengan kapitalisasi mandiri, fokus pada arsitektur yang kokoh, dan portofolio proyek dengan keyakinan tinggi.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <StatCard label="AUTONOMOUS OPS" value={100} isNumeric={true} suffix="%" />
            <StatCard label="SYSTEMS" value={4} isNumeric={true} />
            <StatCard label="NETWORK" value="GLOBAL" />
            <StatCard label="FOCUS" value="GENERATIONAL" />
          </div>
        </div>

        {/* Right column */}
        <div className="relative flex justify-center lg:justify-center items-center">
          <div className="relative w-full max-w-sm">
            {/* Vertical Line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-signal/30 md:-translate-x-1/2" />
            
            <div className="space-y-12 py-8">
              {stages.map((stage, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={stage.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2, duration: 0.5 }}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row-reverse md:pr-[50%]' : 'md:flex-row md:pl-[50%]'
                    } pl-12 md:pl-0`}
                  >
                    {/* Node on the central line */}
                    <div className="absolute left-[9px] md:left-1/2 w-[14px] h-[14px] rounded-full bg-void border-2 border-signal md:-translate-x-1/2 z-10" />
                    
                    {/* Connector line */}
                    <div className={`absolute h-[1px] bg-signal/30 w-8 md:w-12 ${
                      isEven ? 'left-[15px] md:right-1/2 md:left-auto md:-mr-12' : 'left-[15px] md:left-1/2'
                    }`} />
                    
                    {/* Card */}
                    <div className={`bg-panel border border-orbit p-4 min-w-[200px] w-full md:w-auto relative ${
                      isEven ? 'md:mr-16' : 'md:ml-16 ml-4'
                    }`}>
                      <h4 className="font-jetbrains text-signal text-sm mb-1">{stage.name}</h4>
                      <p className="font-inter text-muted text-xs">{stage.desc}</p>
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
