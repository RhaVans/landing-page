'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'MISSION', href: '#mission' },
  { name: 'SYSTEMS', href: '#systems' },
  { name: 'TELEMETRY', href: '#telemetry' },
  { name: 'FLIGHT DIRECTOR', href: '#flight-director' },
  { name: 'COMMS', href: '#comms' }
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out h-14 md:h-16 ${scrolled ? 'bg-[#020202]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 text-stardust">
          <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" className="text-orbit" />
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-signal/50" />
            <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" stroke="currentColor" strokeWidth="2" />
            <text x="50" y="55" textAnchor="middle" fill="currentColor" className="text-[20px] font-bold font-rajdhani tracking-widest" style={{fontFamily: 'Rajdhani, sans-serif'}}>ROS</text>
          </svg>
          <span className="font-rajdhani uppercase tracking-[0.15em] font-bold text-lg hidden sm:block">RHAVANS</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="group relative font-rajdhani uppercase tracking-[0.15em] text-sm text-stardust hover:text-white transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-signal transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-stardust" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 right-0 w-64 bg-panel shadow-2xl z-50 flex flex-col p-6 border-l border-orbit"
          >
            <div className="flex justify-end mb-8">
              <button className="text-stardust" onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-rajdhani uppercase tracking-[0.15em] text-sm text-stardust hover:text-signal transition-colors border-b border-orbit pb-2"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
