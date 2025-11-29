'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Service } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  delay: number;
}

export default function ServiceCard({ service, delay }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = service.icon;
  const [isHovered, setIsHovered] = useState(false);

  // Conversion hex vers RGB pour les effets
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgb = hexToRgb(service.color);
  const colorWithOpacity = rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)` : service.color;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <motion.div 
        className="glass rounded-organic p-8 sm:p-10 h-full flex flex-col relative overflow-hidden cursor-pointer"
        animate={{
          y: isHovered ? -8 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        
        {/* Background glow animé */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ 
            background: `radial-gradient(circle at 30% 20%, ${colorWithOpacity} 0%, transparent 60%)` 
          }}
        />

        {/* Pattern décoratif subtil */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${service.color} 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* En-tête : Icône + Badge */}
        <div className="relative z-10 flex items-start justify-between mb-8">
          {/* Icône avec transformation 3D */}
          <motion.div 
            className="relative"
            animate={{ 
              rotate: isHovered ? [0, -5, 5, 0] : 0,
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-lg"
              style={{ 
                backgroundColor: isHovered ? service.color : 'var(--color-pearl)',
                boxShadow: isHovered ? `0 12px 32px -8px ${service.color}60` : '0 4px 12px rgba(0,0,0,0.05)'
              }}
              transition={{ duration: 0.4 }}
            >
              <Icon 
                className="w-8 h-8 sm:w-10 sm:h-10 transition-all duration-400" 
                style={{ 
                  color: isHovered ? '#FFFFFF' : service.color,
                  filter: isHovered ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' : 'none'
                }} 
                strokeWidth={1.5}
              />

              {/* Cercle décoratif intérieur */}
              <motion.div
                className="absolute inset-2 rounded-xl border-2 opacity-0"
                style={{ borderColor: 'white' }}
                animate={{
                  opacity: isHovered ? [0, 0.6, 0] : 0,
                  scale: isHovered ? [0.8, 1.2] : 0.8
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>

            {/* Glow pulse derrière l'icône */}
            <motion.div
              className="absolute inset-0 rounded-2xl blur-xl -z-10"
              style={{ backgroundColor: service.color }}
              animate={{
                opacity: isHovered ? [0.2, 0.4, 0.2] : 0,
                scale: isHovered ? [1, 1.1, 1] : 1
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          {/* Badge avec animation */}
          <motion.div 
            className="px-4 py-2 rounded-full text-xs sm:text-sm font-bold border-2 transition-all duration-400 backdrop-blur-sm"
            style={{ 
              borderColor: isHovered ? service.color : 'var(--color-fog)',
              color: isHovered ? service.color : 'var(--color-slate)',
              backgroundColor: isHovered ? colorWithOpacity : 'transparent'
            }}
            animate={{
              scale: isHovered ? 1.05 : 1
            }}
          >
            {service.badge}
          </motion.div>
        </div>
        
        {/* Contenu textuel */}
        <div className="relative z-10 grow mb-6">
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold mb-4 transition-colors duration-400"
            style={{ 
              color: isHovered ? service.color : 'var(--color-ink)' 
            }}
            animate={{
              x: isHovered ? 4 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {service.name}
          </motion.h3>
          
          <p className="text-base sm:text-lg text-charcoal leading-relaxed">
            {service.desc}
          </p>
        </div>

        {/* Footer : Barre de progression + CTA */}
        <div className="relative z-10 space-y-4">
          {/* Barre de progression moderne */}
          <div className="relative h-1.5 w-full bg-mist rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full relative"
              style={{ 
                backgroundColor: service.color,
                boxShadow: `0 0 12px ${service.color}80`
              }}
              initial={{ width: '0%' }}
              animate={{ 
                width: isHovered ? '100%' : '0%',
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Shimmer effect sur la barre */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent"
                animate={{
                  x: isHovered ? ['-100%', '100%'] : '-100%'
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: isHovered ? Infinity : 0,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>

          {/* CTA Link */}
          <motion.div
            className="flex items-center gap-2 text-sm sm:text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ color: service.color }}
            animate={{
              x: isHovered ? 4 : 0
            }}
          >
            <span>En savoir plus</span>
            <motion.div
              animate={{
                x: isHovered ? [0, 4, 0] : 0
              }}
              transition={{ 
                duration: 1,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
            </motion.div>
          </motion.div>
        </div>

        {/* Décoration bottom-right */}
        <div 
          className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full blur-[60px] pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-700"
          style={{ backgroundColor: service.color }}
        />

        {/* Border glow au hover */}
        <motion.div
          className="absolute inset-0 rounded-organic pointer-events-none"
          animate={{
            boxShadow: isHovered 
              ? `0 0 0 2px ${service.color}40, 0 8px 32px -8px ${service.color}60` 
              : '0 0 0 1px transparent'
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
}