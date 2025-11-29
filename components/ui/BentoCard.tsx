'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface BentoCardProps {
  title: string;
  desc: string;
  className?: string;
  highlight?: boolean;
  delay?: number;
  children?: React.ReactNode;
  image?: string;
  imagePosition?: 'top' | 'background' | 'side';
}

export default function BentoCard({ 
  title, 
  desc, 
  className = '', 
  highlight = false, 
  delay = 0, 
  children,
  image,
  imagePosition = 'top'
}: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative overflow-hidden
        h-full flex flex-col
        rounded-organic
        transition-all duration-500 ease-out
        ${highlight ? 'glass-emerald' : 'glass glass-hover'}
        ${className}
      `}
    >
      {/* === CAS 1 : IMAGE EN BACKGROUND === */}
      {image && imagePosition === 'background' && (
        <>
          {/* Image de fond avec parallax */}
          <div className="absolute inset-0 z-0">
            <motion.img
              src={image}
              alt={title}
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              animate={{ 
                scale: isHovered ? 1.08 : 1,
                filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            {/* Gradient overlay moderne */}
            <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/50 to-transparent" />
          </div>

          {/* Contenu */}
          <div className="relative z-10 p-8 sm:p-10 mt-auto">
            {highlight && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 mb-4"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-white">Recommandé</span>
              </motion.div>
            )}

            <motion.h3 
              className="text-2xl sm:text-3xl font-bold mb-4 text-white"
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            
            <p className="text-base sm:text-lg text-white/90 mb-6 leading-relaxed">
              {desc}
            </p>

            {children}
          </div>
        </>
      )}

      {/* === CAS 2 : IMAGE TOP (Moderne) === */}
      {image && imagePosition === 'top' && (
        <>
          <div className="relative h-56 sm:h-64 overflow-hidden shrink-0 rounded-t-organic">
            <motion.img
              src={image}
              alt={title}
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              animate={{ 
                scale: isHovered ? 1.06 : 1,
                filter: isHovered ? 'brightness(1.05) saturate(1.1)' : 'brightness(1) saturate(1)'
              }}
              transition={{ duration: 0.7 }}
            />
            
            {/* Gradient subtil pour transition */}
            <div className="absolute inset-0 bg-linear-to-t from-white/40 via-transparent to-transparent" />
            
            {/* Badge highlight avec animation */}
            {highlight && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-emerald-300 shadow-emerald"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-xs font-semibold gradient-emerald">Top choix</span>
              </motion.div>
            )}

            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 loading-shimmer" />
            )}
          </div>

          <div className="p-6 sm:p-8 flex flex-col grow">
            <h3 className={`
              text-xl sm:text-2xl font-bold mb-3 
              ${highlight ? 'gradient-emerald' : 'text-ink'}
            `}>
              {title}
            </h3>
            
            <p className="text-sm sm:text-base text-charcoal mb-6 leading-relaxed grow">
              {desc}
            </p>

            {children}
          </div>
        </>
      )}

      {/* === CAS 3 : IMAGE SIDE (Split Layout) === */}
      {image && imagePosition === 'side' && (
        <div className="flex flex-col sm:flex-row h-full">
          <div className="w-full sm:w-2/5 h-56 sm:h-full relative overflow-hidden shrink-0">
            <motion.img
              src={image}
              alt={title}
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              animate={{ 
                scale: isHovered ? 1.08 : 1 
              }}
              transition={{ duration: 0.7 }}
            />
            
            {/* Gradient latéral */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent to-white/20" />
          </div>

          <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-ink">
              {title}
            </h3>
            
            <p className="text-sm sm:text-base text-charcoal mb-4 leading-relaxed">
              {desc}
            </p>

            {children}
          </div>
        </div>
      )}

      {/* === CAS 4 : SANS IMAGE (Pure Design) === */}
      {!image && (
        <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full justify-between">
          <div>
            {highlight && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 mb-4"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-xs font-semibold text-emerald-700">Premium</span>
              </motion.div>
            )}

            <h3 className={`
              text-xl sm:text-2xl font-bold mb-4
              ${highlight ? 'gradient-emerald' : 'text-ink'}
            `}>
              {title}
            </h3>
            
            <p className="text-sm sm:text-base text-charcoal mb-6 leading-relaxed">
              {desc}
            </p>
          </div>

          {children}
          
          {/* Décoration moderne avec blur */}
          <div className={`
            absolute -bottom-12 -right-12 w-48 h-48 rounded-full blur-[60px] pointer-events-none opacity-30
            ${highlight 
              ? 'bg-emerald-400' 
              : 'bg-coral-300'
            }
          `} />
        </div>
      )}

      {/* Effet de brillance au hover (Shimmer) */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20"
        animate={{
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.4 }}
      >
        <div 
          className="absolute inset-0"
          style={{
            background: highlight 
              ? 'radial-gradient(circle at 50% 0%, var(--color-emerald-500)/8, transparent 60%)' 
              : 'radial-gradient(circle at 50% 0%, var(--color-coral-500)/5, transparent 60%)'
          }}
        />
      </motion.div>

      {/* Bordure animée pour les cartes highlight */}
      {highlight && (
        <motion.div
          className="absolute inset-0 rounded-organic pointer-events-none"
          animate={{
            boxShadow: isHovered 
              ? '0 0 0 2px var(--color-emerald-400)' 
              : '0 0 0 1px var(--color-emerald-300)'
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}