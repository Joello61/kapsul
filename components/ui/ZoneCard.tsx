'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Zone } from '@/lib/data';
import { ChevronRight } from 'lucide-react';

interface ZoneCardProps {
  zone: Zone;
  delay: number;
  isActive?: boolean;
}

export default function ZoneCard({ zone, delay, isActive }: ZoneCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = zone.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <motion.div
        animate={{
          scale: isHovered || isActive ? 1.02 : 1,
          y: isHovered || isActive ? -5 : 0
        }}
        transition={{ duration: 0.3 }}
        className={`
          glass rounded-2xl p-6 sm:p-8
          transition-all duration-500
          cursor-pointer
          ${isActive ? 'border-human/50 shadow-[0_0_25px_rgba(255,179,71,0.2)]' : 'hover:border-human/30'}
        `}
      >
        {/* Effet glow au hover */}
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none rounded-2xl"
          animate={{
            opacity: isHovered || isActive ? 0.1 : 0
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(circle at 50% 0%, ${zone.color}40, transparent 70%)`
          }}
        />

        <div className="relative z-10 flex items-start gap-4">
          {/* Icône */}
          <motion.div 
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 relative overflow-hidden"
            style={{ backgroundColor: `${zone.color}15` }}
            animate={{
              scale: isHovered || isActive ? 1.1 : 1,
              backgroundColor: isHovered || isActive ? `${zone.color}25` : `${zone.color}15`
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon 
              className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" 
              style={{ color: zone.color }} 
            />
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0"
              animate={{
                opacity: isHovered || isActive ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: `radial-gradient(circle, ${zone.color}60 0%, transparent 70%)`,
                filter: 'blur(15px)'
              }}
            />
          </motion.div>
          
          {/* Contenu */}
          <div className="flex-1">
            <motion.h4 
              className="text-lg sm:text-xl font-bold mb-2 transition-colors duration-300"
              style={{ 
                color: isHovered || isActive ? zone.color : '#EDEDED'
              }}
            >
              {zone.title}
            </motion.h4>
            
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-3 group-hover:text-text-primary transition-colors duration-300">
              {zone.desc}
            </p>

            {/* Equipements (basé sur la zone) */}
            <div className="flex flex-wrap gap-2 mt-3">
              {zone.title === 'Zone Sociale' && (
                <>
                  <span className="text-xs px-2 py-1 rounded-full bg-tech/10 text-tech">Fuel Bar</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-tech/10 text-tech">WiFi</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-tech/10 text-tech">Prises</span>
                </>
              )}
              {zone.title === 'Zone Active' && (
                <>
                  <span className="text-xs px-2 py-1 rounded-full bg-human/10 text-human">Tapis yoga</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-human/10 text-human">Miroirs</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-human/10 text-human">Tables massage</span>
                </>
              )}
              {zone.title === 'Zone Silence' && (
                <>
                  <span className="text-xs px-2 py-1 rounded-full bg-tech/10 text-tech">VR Pods</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-tech/10 text-tech">Sleep Pods</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-tech/10 text-tech">Insonorisé</span>
                </>
              )}
            </div>
          </div>

          {/* Flèche indicatrice */}
          <motion.div
            animate={{
              x: isHovered || isActive ? 5 : 0,
              opacity: isHovered || isActive ? 1 : 0.3
            }}
            transition={{ duration: 0.3 }}
            style={{ color: zone.color }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Barre de progression en bas (visuel) */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 rounded-b-2xl"
          style={{ backgroundColor: zone.color }}
          animate={{
            width: isHovered || isActive ? '100%' : '0%'
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </motion.div>
  );
}