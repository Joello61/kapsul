'use client';

import { useState, useRef } from 'react';
import Section from '@/components/shared/Section';
import { zones } from '@/lib/data';
import { MapPin, Maximize2, Volume2, Sparkles, Building2, MousePointer2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function Space() {
  const [activeZone, setActiveZone] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section id="space" background="cream">
      
      {/* HEADER */}
      <div className="text-center mb-16" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-olive-200/60 mb-6 shadow-sm"
        >
          <Building2 className="w-4 h-4 text-olive-600" strokeWidth={2} />
          <span className="text-xs font-bold text-olive-800 uppercase tracking-wide">Design Biophilique</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 tracking-tight"
        >
          L&apos;Espace <span className="text-terra-600">Kapsul</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-charcoal/60 max-w-2xl mx-auto leading-relaxed"
        >
          100m² optimisés pour le calme au cœur de l&apos;agitation toulousaine.
          Une architecture conçue pour abaisser votre fréquence cardiaque dès l&apos;entrée.
        </motion.p>
      </div>

      {/* PLAN INTERACTIF STYLISÉ */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-olive-900/5 mb-20 overflow-hidden border border-olive-100/50"
      >
         {/* Background Grid */}
         <div 
           className="absolute inset-0 opacity-[0.025]" 
           style={{ 
             backgroundImage: 'linear-gradient(oklch(0.30 0.012 280) 1px, transparent 1px), linear-gradient(90deg, oklch(0.30 0.012 280) 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
         />
         
         <div className="relative z-10 flex flex-col md:flex-row items-stretch gap-6 h-[500px] md:h-[400px]">
           
           {/* Zone Items - Interactive Map */}
           {zones.map((zone, idx) => {
             const isActive = activeZone === idx;
             const Icon = zone.icon;
             
             return (
               <div 
                  key={zone.title}
                  onMouseEnter={() => setActiveZone(idx)}
                  onMouseLeave={() => setActiveZone(null)}
                  className={`
                    relative flex-1 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group overflow-hidden border
                    ${isActive ? 'flex-2 bg-olive-50/50 border-olive-200 shadow-inner' : 'bg-white border-olive-100/50 hover:border-olive-200'}
                  `}
               >
                 {/* Zone Background Color Fade */}
                 <div 
                    className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: zone.color, opacity: isActive ? 0.08 : 0 }} 
                 />

                 <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center">
                    <div 
                      className={`
                        w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 shadow-sm
                        ${isActive ? 'scale-110 shadow-lg' : 'opacity-60 group-hover:opacity-100 group-hover:scale-105'}
                      `}
                      style={{ 
                        backgroundColor: isActive ? zone.color : 'oklch(0.96 0.012 85)',
                        color: isActive ? '#fff' : zone.color,
                        boxShadow: isActive ? `0 10px 30px -5px ${zone.color}30` : ''
                      }}
                    >
                      <Icon className="w-8 h-8" strokeWidth={isActive ? 2 : 1.5} />
                    </div>

                    <h3 className={`font-heading font-bold text-lg mb-2 transition-colors ${isActive ? 'text-charcoal' : 'text-charcoal/40 group-hover:text-charcoal'}`}>
                      {zone.title}
                    </h3>

                    {/* Contenu visible seulement si actif */}
                    <div className={`
                      transition-all duration-500 overflow-hidden
                      ${isActive ? 'opacity-100 max-h-24 mt-2' : 'opacity-0 max-h-0'}
                    `}>
                       <p className="text-sm text-charcoal/60 leading-tight px-4">{zone.desc}</p>
                    </div>

                    {/* Indicateur "Survolez-moi" si inactif */}
                    {!isActive && activeZone === null && (
                      <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-charcoal/40 flex items-center gap-1.5">
                        <MousePointer2 className="w-3.5 h-3.5" strokeWidth={2} />
                        Explorer
                      </div>
                    )}
                 </div>
               </div>
             );
           })}
         </div>

         {/* Légende bas de plan */}
         <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
            <span className="inline-block px-5 py-2 bg-white/90 backdrop-blur-sm text-xs font-bold text-charcoal/40 rounded-full border border-olive-100/50 shadow-sm">
               Plan interactif de l&apos;espace — Survolez les zones
            </span>
         </div>
      </motion.div>

      {/* INFO GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
        {[
          { icon: Maximize2, label: "Surface", val: "100m²" },
          { icon: Volume2, label: "Acoustique", val: "-40dB" },
          { icon: Sparkles, label: "Air", val: "Purifié HEPA" },
          { icon: MapPin, label: "Quartier", val: "St-Cyprien" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (i * 0.1), duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-olive-100/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
          >
            <item.icon className="w-6 h-6 text-olive-600 mb-3" strokeWidth={2} />
            <div className="text-xs font-bold text-charcoal/40 uppercase tracking-wide mb-1">{item.label}</div>
            <div className="text-xl font-bold text-charcoal">{item.val}</div>
          </motion.div>
        ))}
      </div>

    </Section>
  );
}