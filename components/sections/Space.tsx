'use client';

import { useState, useRef } from 'react';
import Section from '@/components/shared/Section';
import ZoneCard from '@/components/ui/ZoneCard';
import { zones } from '@/lib/data';
import { MapPin, Maximize2, Volume2, Sparkles, Building2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function Space() {
  const [activeZone, setActiveZone] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section id="space" variant="gradient">
      
      {/* EN-TÊTE */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-beige-100 border border-beige-300 mb-6">
          <Building2 className="w-5 h-5 text-beige-500" strokeWidth={2.5} />
          <span className="text-sm font-semibold text-charcoal">100m² optimisés pour vous</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-charcoal">
          L&apos;Espace <span className="text-terra-600">Kapsul</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Une architecture d&apos;intérieur conçue pour <span className="text-olive-700 font-semibold">apaiser le système nerveux</span>.
          <br />Trois zones, trois niveaux d&apos;intensité sensorielle.
        </p>
      </motion.div>

      {/* VISUALISATION INTERACTIVE */}
      <motion.div 
        className="mb-16 bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        
        {/* Pattern subtil */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]">
          <div
            className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(var(--color-olive-600)_1px,transparent_1px),linear-gradient(90deg,var(--color-olive-600)_1px,transparent_1px)] bg-size-[32px_32px]"
          />
        </div>

        {/* Titre section */}
        <div className="relative z-10 text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-olive-700 mb-2">Plan Architectural</h3>
          <p className="text-base text-gray-700">Survolez les zones pour découvrir leurs spécificités</p>
        </div>

        {/* Layout des zones */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {zones.map((zone, idx) => {
            const Icon = zone.icon;
            const isActive = activeZone === idx;

            return (
              <motion.div
                key={zone.title}
                onMouseEnter={() => setActiveZone(idx)}
                onMouseLeave={() => setActiveZone(null)}
                className="relative cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
              >
                {/* Carte Visuelle */}
                <div 
                  className={`
                    relative rounded-2xl p-6 h-80
                    flex flex-col items-center justify-center
                    transition-all duration-300 border-2
                    ${isActive 
                      ? 'bg-olive-50 border-olive-400 shadow-md transform -translate-y-2' 
                      : 'bg-white border-gray-100 hover:border-olive-200'
                    }
                  `}
                >
                  {/* Icône */}
                  <div
                    className="w-20 h-20 rounded-xl flex items-center justify-center mb-6 shadow-sm transition-all duration-300"
                    style={{ 
                      backgroundColor: isActive ? zone.color : 'var(--color-cream)',
                    }}
                  >
                    <Icon 
                      className="w-10 h-10 transition-colors duration-300" 
                      style={{ color: isActive ? '#fff' : zone.color }}
                      strokeWidth={2}
                    />
                  </div>

                  <h3 
                    className="text-xl sm:text-2xl font-bold mb-3 text-center transition-colors duration-300"
                    style={{ color: isActive ? zone.color : 'var(--color-charcoal)' }}
                  >
                    {zone.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed px-2">
                    {zone.desc}
                  </p>

                  {/* Badge superficie */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-white border border-gray-100 rounded-lg text-xs font-bold text-charcoal shadow-sm">
                    {idx === 0 ? '40m²' : idx === 1 ? '35m²' : '25m²'}
                  </div>
                  
                  {/* Indicateur sonore */}
                  <div 
                    className="absolute bottom-4 flex items-center gap-2 px-3 py-1.5 rounded-full border"
                    style={{ 
                      backgroundColor: isActive ? `${zone.color}20` : 'white',
                      borderColor: isActive ? zone.color : 'var(--color-gray-300)'
                    }}
                  >
                    <Volume2 className="w-4 h-4" style={{ color: zone.color }} strokeWidth={2.5} />
                    <span className="text-xs font-semibold" style={{ color: zone.color }}>
                      {idx === 2 ? 'Silence' : idx === 1 ? 'Feutré' : 'Social'}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Légende */}
        <div className="mt-10 flex items-center justify-center gap-8 relative z-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
            <div className="w-3 h-3 rounded-full bg-olive-600" />
            <span className="text-sm font-semibold text-charcoal">Technologie</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
            <div className="w-3 h-3 rounded-full bg-terra-600" />
            <span className="text-sm font-semibold text-charcoal">Humain</span>
          </div>
        </div>
      </motion.div>

      {/* GRILLE DE DÉTAILS DES ZONES */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        {zones.map((zone, idx) => (
          <motion.div
            key={zone.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 + (idx * 0.1) }}
          >
            <ZoneCard 
              zone={zone}
              isActive={activeZone === idx}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* INFORMATIONS PRATIQUES */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        {[
          { icon: MapPin, label: 'Quartier', value: 'Saint-Cyprien', color: 'olive' },
          { icon: Maximize2, label: 'Surface', value: '100m²', color: 'terra' },
          { icon: Volume2, label: 'Acoustique', value: 'Certifiée ISO', color: 'beige' },
          { icon: Sparkles, label: 'Ambiance', value: 'Organique', color: 'olive' }
        ].map((info, index) => (
          <motion.div
            key={info.label}
            className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.3 + (index * 0.1) }}
          >
            <div className={`
              w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4
              ${info.color === 'olive' ? 'bg-olive-100' : ''}
              ${info.color === 'terra' ? 'bg-terra-100' : ''}
              ${info.color === 'beige' ? 'bg-beige-100' : ''}
            `}>
              <info.icon 
                className={`w-7 h-7
                  ${info.color === 'olive' ? 'text-olive-700' : ''}
                  ${info.color === 'terra' ? 'text-terra-700' : ''}
                  ${info.color === 'beige' ? 'text-beige-500' : ''}
                `} 
                strokeWidth={2.5} 
              />
            </div>
            <div className="text-sm font-semibold text-gray-500 mb-2 uppercase">{info.label}</div>
            <div className="text-xl font-bold text-charcoal">{info.value}</div>
          </motion.div>
        ))}
      </motion.div>

    </Section>
  );
}