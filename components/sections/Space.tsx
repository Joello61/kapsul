'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Section from '@/components/shared/Section';
import ZoneCard from '@/components/ui/ZoneCard';
import { zones } from '@/lib/data';
import { MapPin, Maximize2, Volume2 } from 'lucide-react';

export default function Space() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeZone, setActiveZone] = useState<number | null>(null);

  return (
    <Section id="space">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* --- EN-TÊTE SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-human/20 bg-human/5 mb-6"
          >
            <MapPin className="w-4 h-4 text-human" />
            <span className="text-sm font-medium text-human">100m² optimisés</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="text-text-primary">L'Espace</span>{' '}
            <span className="gradient-text-human">KAPSUL</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            3 zones acoustiques pensées pour votre bien-être
          </p>
        </motion.div>

        {/* --- VISUALISATION INTERACTIVE (Nouveau) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 sm:mb-16 glass rounded-2xl p-6 sm:p-10 relative overflow-hidden"
        >
          {/* Fond animé */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-0 left-0 w-full h-full opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,255,148,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,255,148,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }}
              animate={{
                backgroundPosition: ['0px 0px', '40px 40px']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          </div>

          {/* Layout simplifié des zones */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {zones.map((zone, idx) => {
              const Icon = zone.icon;
              const isActive = activeZone === idx;

              return (
                <motion.div
                  key={zone.title}
                  onHoverStart={() => setActiveZone(idx)}
                  onHoverEnd={() => setActiveZone(null)}
                  whileHover={{ scale: 1.05 }}
                  className="relative cursor-pointer"
                >
                  {/* Zone Card Visuelle */}
                  <div 
                    className={`
                      glass rounded-xl p-6 sm:p-8 h-48 sm:h-56
                      flex flex-col items-center justify-center
                      transition-all duration-300
                      ${isActive ? 'border-human/50 shadow-[0_0_30px_rgba(255,179,71,0.2)]' : 'border-white/10'}
                    `}
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.2 : 1,
                        rotate: isActive ? 360 : 0
                      }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${zone.color}20` }}
                    >
                      <Icon 
                        className="w-8 h-8 sm:w-10 sm:h-10" 
                        style={{ color: zone.color }} 
                      />
                    </motion.div>

                    <h3 
                      className="text-base sm:text-lg font-bold mb-2 text-center"
                      style={{ color: isActive ? zone.color : '#EDEDED' }}
                    >
                      {zone.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-text-secondary text-center">
                      {zone.desc}
                    </p>

                    {/* Indicateurs */}
                    <div className="mt-4 flex items-center gap-3">
                      <motion.div
                        animate={{ scale: isActive ? [1, 1.2, 1] : 1 }}
                        transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
                        className="flex items-center gap-1 text-xs text-text-secondary"
                      >
                        <Volume2 className="w-3 h-3" />
                        {idx === 2 ? 'Silence' : idx === 1 ? 'Modéré' : 'Social'}
                      </motion.div>
                    </div>
                  </div>

                  {/* Badge de capacité */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: isActive ? 1 : 0.7, scale: isActive ? 1.1 : 1 }}
                    className="absolute -top-3 -right-3 bg-bg-dark border border-human/30 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                  >
                    <span className="text-xs sm:text-sm font-bold text-human">
                      {idx === 0 ? '40m²' : idx === 1 ? '35m²' : '25m²'}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Légende */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-6 text-xs sm:text-sm text-text-secondary"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-tech"></div>
              <span>Technologie</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-human"></div>
              <span>Expertise humaine</span>
            </div>
          </motion.div>
        </motion.div>

        {/* --- GRILLE DE DÉTAILS DES ZONES --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {zones.map((zone, idx) => (
            <ZoneCard 
              key={zone.title} 
              zone={zone} 
              delay={idx * 0.1}
              isActive={activeZone === idx}
            />
          ))}
        </div>

        {/* --- INFORMATIONS PRATIQUES (Nouveau) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { icon: MapPin, label: 'Quartier Tech', value: 'Toulouse' },
            { icon: Maximize2, label: 'Surface', value: '100m²' },
            { icon: Volume2, label: 'Insonorisation', value: 'Premium' },
            { icon: '🌿', label: 'Ambiance', value: 'Zen & Tech' }
          ].map((info, idx) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-4 text-center hover:border-human/30 transition-all duration-300 group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {typeof info.icon === 'string' ? info.icon : <info.icon className="w-6 h-6 text-human mx-auto" />}
              </div>
              <div className="text-sm text-text-secondary mb-1">{info.label}</div>
              <div className="text-base sm:text-lg font-bold text-text-primary">{info.value}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  );
}