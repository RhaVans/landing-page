'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 100)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (ms: number) => {
    const date = new Date(ms)
    const hours = date.getUTCHours().toString().padStart(2, '0')
    const minutes = date.getUTCMinutes().toString().padStart(2, '0')
    const seconds = date.getUTCSeconds().toString().padStart(2, '0')
    const milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0')
    return `${hours}:${minutes}:${seconds}.${milliseconds}`
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-void">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Orbital Background"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202]/80 to-[#020202]/60 z-10" />
      </div>

      {/* Hexagonal Pattern Overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='103.923' viewBox='0 0 60 103.923' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 17.32v34.64L30 69.28 0 51.96V17.32z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 103.923px'
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-rajdhani uppercase tracking-[0.2em] text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6"
        >
          RHAVANS ORBITAL SYSTEMS
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-jetbrains text-xs md:text-sm text-signal/70 mb-10 tracking-widest bg-panel/50 px-4 py-2 rounded border border-orbit"
        >
          T+ {formatTime(time)} | ALT: 000.0 km | VEL: 0.00 km/s | STATUS: GO FOR LAUNCH
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          onClick={() => {
            const el = document.querySelector('#mission');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-panel border border-signal/30 text-signal px-8 py-3 font-rajdhani uppercase tracking-widest hover:border-signal hover:shadow-[0_0_20px_rgba(79,195,247,0.2)] transition-all duration-300 cursor-pointer"
        >
          INITIATE SEQUENCE
        </motion.button>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-signal/50 flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
