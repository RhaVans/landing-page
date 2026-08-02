'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Counter component for animated numbers
function Counter({ value, suffix = '', duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.min(Math.floor(value * progress), value));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) cancelAnimationFrame(animationFrame);
      };
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function TelemetryDashboard() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="telemetry" className="w-full bg-space py-24 border-t border-orbit relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-rajdhani text-3xl text-stardust uppercase tracking-wider">
            LIVE TELEMETRY
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-orbit to-transparent mt-4" />
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {/* Card 1 */}
          <motion.div variants={item} className="bg-panel border border-orbit p-5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none" />
            <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            <p className="font-mono text-[10px] text-muted uppercase tracking-wider mb-2">TOTAL COMMITS</p>
            <p className="font-rajdhani text-2xl md:text-3xl text-signal font-bold"><Counter value={847} /></p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={item} className="bg-panel border border-orbit p-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none" />
            <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            <p className="font-mono text-[10px] text-muted uppercase tracking-wider mb-2">REPOSITORIES</p>
            <p className="font-rajdhani text-2xl md:text-3xl text-signal font-bold"><Counter value={12} /></p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={item} className="bg-panel border border-orbit p-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none" />
            <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            <p className="font-mono text-[10px] text-muted uppercase tracking-wider mb-2">CURRENT STREAK</p>
            <p className="font-rajdhani text-2xl md:text-3xl text-signal font-bold"><Counter value={23} /> DAYS</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={item} className="bg-panel border border-orbit p-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none" />
            <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            <p className="font-mono text-[10px] text-muted uppercase tracking-wider mb-2">TOP LANGUAGE</p>
            <p className="font-rajdhani text-2xl md:text-3xl text-signal font-bold">JAVASCRIPT</p>
          </motion.div>

          {/* Card 5 */}
          <motion.div variants={item} className="bg-panel border border-orbit p-5 relative overflow-hidden col-span-2 md:col-span-1 lg:col-span-1">
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-10 pointer-events-none" />
            <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            <p className="font-mono text-[10px] text-muted uppercase tracking-wider mb-2">TOP REPOSITORY</p>
            <p className="font-rajdhani text-2xl md:text-3xl text-signal font-bold truncate">SYNTHESIS</p>
          </motion.div>
        </motion.div>

        {/* Language Breakdown */}
        <div className="mt-12 bg-panel border border-orbit p-6">
          <p className="font-mono text-[10px] text-muted uppercase tracking-wider mb-6">LANGUAGE DISTRIBUTION</p>
          <div className="space-y-4">
            {/* JavaScript */}
            <div>
              <div className="flex justify-between font-mono text-xs mb-1">
                <span className="text-stardust">JavaScript</span>
                <span className="text-signal">65%</span>
              </div>
              <div className="w-full h-1.5 bg-void rounded overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '65%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-signal/90 rounded"
                />
              </div>
            </div>
            
            {/* TypeScript */}
            <div>
              <div className="flex justify-between font-mono text-xs mb-1">
                <span className="text-stardust">TypeScript</span>
                <span className="text-signal/80">25%</span>
              </div>
              <div className="w-full h-1.5 bg-void rounded overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '25%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-signal/70 rounded"
                />
              </div>
            </div>

            {/* CSS */}
            <div>
              <div className="flex justify-between font-mono text-xs mb-1">
                <span className="text-stardust">CSS</span>
                <span className="text-signal/60">7%</span>
              </div>
              <div className="w-full h-1.5 bg-void rounded overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '7%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="h-full bg-signal/50 rounded"
                />
              </div>
            </div>

            {/* Other */}
            <div>
              <div className="flex justify-between font-mono text-xs mb-1">
                <span className="text-stardust">Other</span>
                <span className="text-signal/40">3%</span>
              </div>
              <div className="w-full h-1.5 bg-void rounded overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '3%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-signal/30 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
