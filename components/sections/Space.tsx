'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Section from '@/components/shared/Section';
import ZoneCard from '@/components/ui/ZoneCard';
import { zones } from '@/lib/data';
import { MapPin, Maximize2, Volume2, Sparkles, Building2 } from 'lucide-react';

export default function Space() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeZone, setActiveZone] = useState<number | null>(null);

  return (
    <Section id="space" variant="gradient">
      <div ref={sectionRef} className="max-w-7xl mx-auto">
        
        {/* EN-TÊTE Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-lavender border-2 border-lavender-300 mb-8"
          >
            <Building2 className="w-5 h-5 text-lavender-600" strokeWidth={2.5} />
            <span className="text-sm font-bold" style={{ color: 'var(--color-lavender-700)' }}>100m² optimisés pour vous</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 tracking-tight">
            L'Espace <span className="gradient-sunset">Kapsul</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-charcoal max-w-3xl mx-auto leading-relaxed font-medium">
            Une architecture d'intérieur conçue pour <span className="gradient-emerald font-bold">apaiser le système nerveux</span>.
            <br/>Trois zones, trois niveaux d'intensité sensorielle.
          </p>
        </motion.div>

        {/* VISUALISATION INTERACTIVE Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20 glass rounded-[3rem] p-10 sm:p-12 relative overflow-hidden border-2 border-white"
        >
          {/* Pattern animé */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(var(--color-emerald-500) 1px, transparent 1px),
                  linear-gradient(90deg, var(--color-emerald-500) 1px, transparent 1px)
                `,
                backgroundSize: '48px 48px'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '48px 48px']
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          </div>

          {/* Titre section */}
          <div className="relative z-10 text-center mb-12">
            <h3 className="text-3xl font-extrabold gradient-emerald mb-3">Plan Architectural</h3>
            <p className="text-base text-charcoal font-medium">Survolez les zones pour découvrir leurs spécificités</p>
          </div>

          {/* Layout des zones Premium */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {zones.map((zone, idx) => {
              const Icon = zone.icon;
              const isActive = activeZone === idx;

              return (
                <motion.div
                  key={zone.title}
                  onHoverStart={() => setActiveZone(idx)}
                  onHoverEnd={() => setActiveZone(null)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="relative cursor-pointer"
                >
                  {/* Carte Visuelle Premium */}
                  <div 
                    className={`
                      relative rounded-3xl p-8 h-80 sm:h-96
                      flex flex-col items-center justify-center
                      transition-all duration-500 border-2
                      ${isActive 
                        ? 'glass-emerald border-emerald-300 shadow-emerald' 
                        : 'glass border-white hover:border-emerald-200'
                      }
                    `}
                  >
                    {/* Icône 3D */}
                    <motion.div
                      animate={{
                        scale: isActive ? 1.15 : 1,
                        rotate: isActive ? [0, -5, 5, 0] : 0
                      }}
                      transition={{ duration: 0.6 }}
                      className="w-24 h-24 rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-all duration-500"
                      style={{ 
                        background: isActive 
                          ? `linear-gradient(135deg, ${zone.color}, ${zone.color}dd)` 
                          : 'var(--color-pearl)',
                        color: isActive ? '#fff' : zone.color
                      }}
                    >
                      <Icon className="w-12 h-12" strokeWidth={2} />
                    </motion.div>

                    <h3 
                      className="text-2xl sm:text-3xl font-extrabold mb-4 text-center transition-colors duration-300"
                      style={{ color: isActive ? zone.color : 'var(--color-ink)' }}
                    >
                      {zone.title}
                    </h3>

                    <p className="text-base sm:text-lg text-charcoal text-center leading-relaxed font-medium px-4">
                      {zone.desc}
                    </p>

                    {/* Badge superficie */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-5 right-5 px-4 py-2 glass border-2 border-white rounded-xl text-sm font-black text-ink shadow-lg"
                    >
                      {idx === 0 ? '40m²' : idx === 1 ? '35m²' : '25m²'}
                    </motion.div>
                    
                    {/* Indicateur sonore */}
                    <motion.div 
                      className="absolute bottom-6 flex items-center gap-3 px-4 py-2 rounded-full glass-emerald border border-white"
                      style={{ 
                        opacity: isActive ? 1 : 0.7,
                        background: isActive ? `${zone.color}20` : undefined
                      }}
                    >
                      <Volume2 className="w-4 h-4" style={{ color: zone.color }} strokeWidth={2.5} />
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: zone.color }}>
                        {idx === 2 ? 'Silence Absolu' : idx === 1 ? 'Ambiance Feutrée' : 'Social Soft'}
                      </span>
                    </motion.div>

                    {/* Glow au hover */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-3xl blur-xl -z-10"
                        style={{ backgroundColor: zone.color }}
                        animate={{
                          opacity: [0.2, 0.4, 0.2],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Légende Premium */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex items-center justify-center gap-10 relative z-10"
          >
            <div className="flex items-center gap-3 px-5 py-3 rounded-full glass border-2 border-white">
              <div className="w-4 h-4 rounded-full bg-linear-to-br from-emerald-400 to-emerald-600" />
              <span className="text-sm font-bold text-ink">Technologie</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-full glass border-2 border-white">
              <div className="w-4 h-4 rounded-full bg-linear-to-br from-coral-400 to-coral-600" />
              <span className="text-sm font-bold text-ink">Humain</span>
            </div>
          </motion.div>
        </motion.div>

        {/* GRILLE DE DÉTAILS DES ZONES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {zones.map((zone, idx) => (
            <ZoneCard 
              key={zone.title} 
              zone={zone} 
              delay={idx * 0.1}
              isActive={activeZone === idx}
            />
          ))}
        </div>

        {/* INFORMATIONS PRATIQUES Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { icon: MapPin, label: 'Quartier', value: 'Saint-Cyprien', gradient: 'from-[var(--color-emerald-400)] to-[var(--color-emerald-600)]' },
            { icon: Maximize2, label: 'Surface', value: '100m²', gradient: 'from-[var(--color-coral-400)] to-[var(--color-coral-600)]' },
            { icon: Volume2, label: 'Acoustique', value: 'Certifiée ISO', gradient: 'from-[var(--color-lavender-400)] to-[var(--color-lavender-600)]' },
            { icon: Sparkles, label: 'Ambiance', value: 'Organique', gradient: 'from-[var(--color-emerald-400)] to-[var(--color-coral-500)]' }
          ].map((info, idx) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 text-center border-2 border-white cursor-pointer"
            >
              <div className={`w-16 h-16 mx-auto bg-linear-to-br ${info.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                <info.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-sm font-bold text-slate mb-2 uppercase tracking-wider">{info.label}</div>
              <div className="text-2xl font-extrabold text-ink">{info.value}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  );
}