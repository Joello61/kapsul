'use client';

import { useState, useRef } from 'react';
import Section from '@/components/shared/Section';
import { zones } from '@/lib/data';
import {
  MapPin,
  Maximize2,
  Volume2,
  Sparkles,
  ChevronRight,
  ThermometerSun,
  Wind,
  Coffee,
} from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const spaceFeatures = [
  {
    icon: ThermometerSun,
    title: 'Température optimale',
    desc: '21°C constant pour votre confort absolu',
  },
  {
    icon: Wind,
    title: 'Air purifié H13',
    desc: 'Renouvellement toutes les 15 minutes',
  },
  {
    icon: Coffee,
    title: 'Fuel Bar intégré',
    desc: 'Boissons adaptogènes et snacks sains',
  },
];

const zoneImages = [
  '/images/zone-sociale.jpg', // Zone Sociale
  '/images/zone-active.jpg', // Zone Active
  '/images/zone-silence.jpg', // Zone Silence
];

export default function Space() {
  const [selectedZone, setSelectedZone] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [, setImageLoaded] = useState(false);

  return (
    <Section id="space" background="stone">
      {/* HEADER */}
      <div className="text-center mb-16" ref={ref}>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-6"
        >
          L&apos;espace KAPSUL.
          <br />
          <span className="inline-block mt-4 text-sage-600">Conçu pour apaiser.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
        >
          Architecture biophilique au cœur de Toulouse. Chaque détail pensé pour
          baisser votre rythme cardiaque dès l&apos;entrée. Un sas de
          décompression dans la ville qui ne dort jamais.
        </motion.p>
      </div>

      {/* ZONES SHOWCASE - Image qui change */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* IMAGE PRINCIPALE QUI CHANGE */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-charcoal/5 aspect-4/3 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedZone}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={zoneImages[selectedZone]}
                  alt={zones[selectedZone].title}
                  fill
                  className="object-cover"
                  onLoad={() => setImageLoaded(true)}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* Overlay avec nom de la zone active */}
            <div className="absolute inset-0 bg-linear-to-t from-charcoal/60 via-transparent to-transparent pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${selectedZone}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="glass px-5 py-4 rounded-2xl border border-white/40 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {(() => {
                        const Icon = zones[selectedZone].icon;
                        return (
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{
                              backgroundColor: zones[selectedZone].color + '20',
                            }}
                          >
                            <Icon
                              className="w-5 h-5"
                              style={{ color: zones[selectedZone].color }}
                              strokeWidth={2}
                            />
                          </div>
                        );
                      })()}
                      <div>
                        <div className="font-semibold text-white">
                          {zones[selectedZone].title}
                        </div>
                        <div className="text-xs text-white/80">
                          {zones[selectedZone].desc.split('.')[0]}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-white/80 px-3 py-1 rounded-full glass">
                      {selectedZone + 1}/3
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* LISTE DES ZONES */}
          <div className="space-y-4 order-1 lg:order-2">
            <div className="mb-6">
              <h3 className="text-2xl font-sans font-semibold text-charcoal mb-2">
                Trois zones, trois ambiances
              </h3>
              <p className="text-sm text-gray-600">
                Naviguez selon vos besoins du moment. Chaque zone est pensée
                pour un type de récupération spécifique.
              </p>
            </div>

            {zones.map((zone, idx) => {
              const Icon = zone.icon;
              const isSelected = selectedZone === idx;

              return (
                <button
                  key={zone.title}
                  onClick={() => setSelectedZone(idx)}
                  className={`
                    w-full text-left p-6 rounded-2xl cursor-pointer transition-all duration-300
                    ${
                      isSelected
                        ? 'glass shadow-lg border-sage-300 scale-[1.02]'
                        : 'glass border-sage-100 hover:border-sage-200 hover:shadow-md'
                    }
                    border
                  `}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon avec glow si sélectionné */}
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isSelected ? 'scale-110' : 'scale-100'
                      }`}
                      style={{
                        backgroundColor: isSelected
                          ? zone.color + '20'
                          : zone.color + '10',
                        boxShadow: isSelected
                          ? `0 8px 24px -8px ${zone.color}40`
                          : 'none',
                      }}
                    >
                      <Icon
                        className="w-7 h-7 transition-all"
                        style={{ color: zone.color }}
                        strokeWidth={isSelected ? 2 : 1.5}
                      />
                    </div>

                    {/* Contenu */}
                    <div className="flex-1">
                      <h4
                        className={`font-semibold text-lg mb-2 transition-colors ${
                          isSelected ? 'text-charcoal' : 'text-gray-700'
                        }`}
                      >
                        {zone.title}
                      </h4>
                      <p
                        className={`text-sm leading-relaxed transition-all duration-300 ${
                          isSelected
                            ? 'text-gray-700 opacity-100 max-h-20'
                            : 'text-gray-600 opacity-70 max-h-0 overflow-hidden'
                        }`}
                      >
                        {zone.desc}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <ChevronRight
                      className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                        isSelected
                          ? 'text-sage-600 translate-x-0 opacity-100'
                          : 'text-gray-400 -translate-x-2 opacity-0'
                      }`}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Progress bar si sélectionné */}
                  {isSelected && (
                    <motion.div
                      className="mt-4 h-1 rounded-full overflow-hidden bg-sage-100"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                      style={{ transformOrigin: 'left' }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{ backgroundColor: zone.color }}
                      />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* FEATURES DE L'ESPACE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-sans font-semibold text-charcoal text-center mb-8">
          Confort et technologie au service de votre pause
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {spaceFeatures.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-6 rounded-2xl glass border border-sage-100 hover:border-sage-200 hover:shadow-md transition-all text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-sage-600/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon
                  className="w-6 h-6 text-sage-700"
                  strokeWidth={2}
                />
              </div>
              <h4 className="font-semibold text-charcoal mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* SPECS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
        {[
          { icon: Maximize2, label: 'Surface', val: '150m²' },
          { icon: Volume2, label: 'Isolation', val: '-40dB' },
          { icon: Sparkles, label: 'Air purifié', val: 'HEPA H13' },
          { icon: MapPin, label: 'Quartier', val: 'St-Cyprien' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 glass rounded-2xl border border-sage-100/50 hover:border-sage-200/50 hover:-translate-y-1 transition-all"
          >
            <item.icon className="w-6 h-6 text-sage-600 mb-3" strokeWidth={2} />
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              {item.label}
            </div>
            <div className="text-xl font-sans font-semibold text-charcoal">
              {item.val}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
