'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail } from 'lucide-react';

export default function MissionComms() {
  const [formData, setFormData] = useState({
    callsign: '',
    frequency: '',
    transmission: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('transmitting');
    
    // Simulate network delay
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ callsign: '', frequency: '', transmission: '' });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="comms" className="w-full bg-void py-24 border-t border-orbit relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(79,195,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,195,247,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-rajdhani text-3xl text-stardust uppercase tracking-wider">
            KOMUNIKASI MISI
          </h2>
          <div className="h-px w-full max-w-xs mx-auto bg-gradient-to-r from-transparent via-orbit to-transparent mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="callsign" className="block font-rajdhani uppercase text-xs tracking-wider text-muted mb-2">
                CALLSIGN (Name)
              </label>
              <input
                type="text"
                id="callsign"
                name="callsign"
                value={formData.callsign}
                onChange={handleChange}
                required
                className="w-full bg-void border border-orbit text-stardust px-4 py-3 focus:border-signal focus:outline-none focus:shadow-[0_0_10px_rgba(79,195,247,0.1)] transition-all font-mono text-sm placeholder:text-muted/50"
                placeholder="Enter identifier..."
              />
            </div>

            <div>
              <label htmlFor="frequency" className="block font-rajdhani uppercase text-xs tracking-wider text-muted mb-2">
                FREQUENCY (Email)
              </label>
              <input
                type="email"
                id="frequency"
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                required
                className="w-full bg-void border border-orbit text-stardust px-4 py-3 focus:border-signal focus:outline-none focus:shadow-[0_0_10px_rgba(79,195,247,0.1)] transition-all font-mono text-sm placeholder:text-muted/50"
                placeholder="Enter comms channel..."
              />
            </div>

            <div>
              <label htmlFor="transmission" className="block font-rajdhani uppercase text-xs tracking-wider text-muted mb-2">
                TRANSMISSION (Message)
              </label>
              <textarea
                id="transmission"
                name="transmission"
                value={formData.transmission}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-void border border-orbit text-stardust px-4 py-3 focus:border-signal focus:outline-none focus:shadow-[0_0_10px_rgba(79,195,247,0.1)] transition-all font-mono text-sm placeholder:text-muted/50 resize-none"
                placeholder="Compose data packet..."
              />
            </div>

            <button
              type="submit"
              disabled={status !== 'idle'}
              className="w-full bg-panel border border-signal/30 text-signal font-rajdhani uppercase tracking-widest py-3 hover:bg-signal/10 hover:border-signal hover:shadow-[0_0_20px_rgba(79,195,247,0.2)] active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'idle' ? 'TRANSMIT' : status === 'transmitting' ? 'UPLOADING...' : 'TRANSMISSION COMPLETE'}
            </button>
          </form>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://github.com/RhaVans" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs text-muted hover:text-signal transition-colors"
            >
              <Github size={16} />
              <span>github.com/RhaVans</span>
            </a>
            <a 
              href="mailto:rhavans@orbital.systems" 
              className="flex items-center gap-2 font-mono text-xs text-muted hover:text-signal transition-colors"
            >
              <Mail size={16} />
              <span>rhavans@orbital.systems</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
