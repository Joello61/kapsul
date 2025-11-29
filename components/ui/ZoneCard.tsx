'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Zone } from '@/lib/data';
import { ChevronRight, Sparkles } from 'lucide-react';

interface ZoneCardProps {
  zone: Zone;
  delay: number;
  isActive?: boolean;
}

export default function ZoneCard({ zone, delay, isActive }: ZoneCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = zone.icon;
  const [isHovered, setIsHovered] = useState(false);

  const isActiveState = isHovered || isActive;

  // Conversion hex vers rgba pour les effets
  const hexToRgba = (hex: string, alpha: number) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return hex;
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30, scale: 0.95 }}
      animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <motion.div
        animate={{
          y: isActiveState ? -8 : 0,
          scale: isActiveState ? 1.02 : 1
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`
          glass rounded-organic p-8 sm:p-10
          transition-all duration-500 ease-out
          cursor-pointer
          relative overflow-hidden
          ${isActiveState ? 'shadow-xl' : 'hover:shadow-lg'}
        `}
        style={{
          boxShadow: isActiveState 
            ? `0 20px 60px -15px ${hexToRgba(zone.color, 0.3)}` 
            : undefined
        }}
      >
        {/* Background gradient animé */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: isActiveState ? 1 : 0
          }}
          transition={{ duration: 0.6 }}
          style={{ 
            background: `radial-gradient(circle at 20% 30%, ${hexToRgba(zone.color, 0.12)} 0%, transparent 60%)` 
          }}
        />

        {/* Pattern décoratif */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${zone.color} 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Badge "Active" pour la zone sélectionnée */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md border-2 z-20"
            style={{
              backgroundColor: hexToRgba(zone.color, 0.15),
              borderColor: hexToRgba(zone.color, 0.3),
              color: zone.color
            }}
          >
            <Sparkles className="w-3 h-3" />
            <span className="text-xs font-bold">Active</span>
          </motion.div>
        )}

        <div className="relative z-10 flex items-start gap-6">
          {/* Icône 3D avec animation */}
          <motion.div 
            className="relative shrink-0"
            animate={{ 
              rotate: isActiveState ? [0, -3, 3, 0] : 0,
              scale: isActiveState ? 1.05 : 1
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg"
              style={{ 
                backgroundColor: isActiveState ? zone.color : 'var(--color-pearl)',
                boxShadow: isActiveState 
                  ? `0 12px 32px -8px ${hexToRgba(zone.color, 0.5)}` 
                  : '0 4px 12px rgba(0,0,0,0.05)'
              }}
              transition={{ duration: 0.4 }}
            >
              <Icon 
                className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-400" 
                style={{ 
                  color: isActiveState ? '#FFFFFF' : zone.color,
                  filter: isActiveState ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' : 'none'
                }} 
                strokeWidth={1.5}
              />

              {/* Cercle pulse */}
              <motion.div
                className="absolute inset-2 rounded-xl border-2"
                style={{ borderColor: 'white' }}
                animate={{
                  opacity: isActiveState ? [0, 0.6, 0] : 0,
                  scale: isActiveState ? [0.8, 1.2] : 0.8
                }}
                transition={{ 
                  duration: 2, 
                  repeat: isActiveState ? Infinity : 0 
                }}
              />
            </motion.div>

            {/* Glow derrière l'icône */}
            <motion.div
              className="absolute inset-0 rounded-2xl blur-xl -z-10"
              style={{ backgroundColor: zone.color }}
              animate={{
                opacity: isActiveState ? [0.3, 0.5, 0.3] : 0,
                scale: isActiveState ? [1, 1.15, 1] : 1
              }}
              transition={{ 
                duration: 2.5, 
                repeat: isActiveState ? Infinity : 0 
              }}
            />
          </motion.div>
          
          {/* Contenu principal */}
          <div className="flex-1 min-w-0">
            <motion.h4 
              className="text-xl sm:text-2xl font-bold mb-3 transition-colors duration-400"
              style={{ 
                color: isActiveState ? zone.color : 'var(--color-ink)'
              }}
              animate={{
                x: isActiveState ? 4 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {zone.title}
            </motion.h4>
            
            <p className="text-sm sm:text-base text-charcoal leading-relaxed mb-6">
              {zone.desc}
            </p>

            {/* Equipements (Tags modernisés) */}
            <div className="flex flex-wrap gap-2.5">
              {zone.title === 'Zone Sociale' && (
                <>
                  {['Fuel Bar', 'WiFi', 'Prises'].map((tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: delay + 0.1 * idx }}
                      className="text-xs sm:text-sm px-3 py-1.5 rounded-full font-semibold border-2 backdrop-blur-sm"
                      style={{
                        backgroundColor: hexToRgba(zone.color, 0.1),
                        borderColor: hexToRgba(zone.color, 0.3),
                        color: zone.color
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </>
              )}
              {zone.title === 'Zone Active' && (
                <>
                  {['Tapis yoga', 'Miroirs', 'Massage'].map((tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: delay + 0.1 * idx }}
                      className="text-xs sm:text-sm px-3 py-1.5 rounded-full font-semibold border-2 backdrop-blur-sm"
                      style={{
                        backgroundColor: hexToRgba(zone.color, 0.1),
                        borderColor: hexToRgba(zone.color, 0.3),
                        color: zone.color
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </>
              )}
              {zone.title === 'Zone Silence' && (
                <>
                  {['VR Pods', 'Sleep Pods', 'Silence'].map((tag, idx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: delay + 0.1 * idx }}
                      className="text-xs sm:text-sm px-3 py-1.5 rounded-full font-semibold border-2 backdrop-blur-sm"
                      style={{
                        backgroundColor: hexToRgba(zone.color, 0.1),
                        borderColor: hexToRgba(zone.color, 0.3),
                        color: zone.color
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </>
              )}
            </div>
          </div>

          {/* Flèche indicatrice animée */}
          <motion.div
            className="shrink-0"
            animate={{
              x: isActiveState ? [0, 6, 0] : 0,
              opacity: isActiveState ? 1 : 0.4
            }}
            transition={{ 
              duration: 1.2,
              repeat: isActiveState ? Infinity : 0,
              ease: "easeInOut"
            }}
            style={{ 
              color: isActiveState ? zone.color : 'var(--color-slate)' 
            }}
          >
            <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
          </motion.div>
        </div>

        {/* Barre de progression bottom avec shimmer */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-mist overflow-hidden">
          <motion.div
            className="h-full relative"
            style={{ backgroundColor: zone.color }}
            animate={{ 
              width: isActiveState ? '100%' : '0%'
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent"
              animate={{
                x: isActiveState ? ['-100%', '100%'] : '-100%'
              }}
              transition={{ 
                duration: 1.5, 
                repeat: isActiveState ? Infinity : 0,
                ease: "linear",
                repeatDelay: 0.5
              }}
            />
          </motion.div>
        </div>

        {/* Border glow au hover */}
        <motion.div
          className="absolute inset-0 rounded-organic pointer-events-none"
          animate={{
            boxShadow: isActiveState 
              ? `0 0 0 2px ${hexToRgba(zone.color, 0.4)}` 
              : '0 0 0 1px transparent'
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
}