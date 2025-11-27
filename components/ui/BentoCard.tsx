'use client';

import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

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
  const inView = useInView(ref, { once: true, amount: 0.3 });
  
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`
        glass
        rounded-2xl
        transition-all duration-500
        relative overflow-hidden
        ${highlight ? 'border-tech/30' : 'hover:border-tech/20'}
        ${className}
      `}
    >
      {/* IMAGE EN BACKGROUND */}
      {image && imagePosition === 'background' && (
        <>
          <div className="absolute inset-0 z-0">
            <img
              src={image}
              alt={title}
              onLoad={() => setImageLoaded(true)}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient plus fort pour lisibilité */}
            <div className="absolute inset-0 bg-linear-to-t from-bg-ultra-dark/95 via-bg-ultra-dark/85 to-bg-ultra-dark/70" />
          </div>

          {/* Contenu avec z-index élevé */}
          <div className="relative z-10 p-6 sm:p-8">
            <motion.h3 
              className={`
                text-xl sm:text-2xl font-bold mb-3 sm:mb-4
                ${highlight ? 'gradient-text-tech' : 'text-text-primary'}
              `}
              animate={{
                scale: isHovered ? 1.02 : 1
              }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            
            <p className="text-sm sm:text-base text-text-secondary mb-6 leading-relaxed">
              {desc}
            </p>

            {children}
          </div>
        </>
      )}

      {/* Effet gradient au hover */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none z-5"
        animate={{
          opacity: isHovered ? 0.1 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: highlight 
            ? 'radial-gradient(circle at 50% 50%, rgba(0,255,148,0.2), transparent 70%)'
            : 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent 70%)'
        }}
      />

      {/* LAYOUT : IMAGE TOP */}
      {image && imagePosition === 'top' && (
        <div className="relative z-10">
          <motion.div 
            className="relative h-48 sm:h-56 rounded-t-xl overflow-hidden"
            animate={{
              scale: isHovered ? 1.03 : 1
            }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={image}
              alt={title}
              onLoad={() => setImageLoaded(true)}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg-ultra-dark/60 to-transparent" />
            
            {highlight && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.8 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-tech/90 backdrop-blur-sm border border-tech/50 text-bg-ultra-dark text-xs font-bold"
              >
                ⚡ Innovant
              </motion.div>
            )}
          </motion.div>

          <div className="p-6 sm:p-8">
            <motion.h3 
              className={`
                text-xl sm:text-2xl font-bold mb-3 sm:mb-4
                ${highlight ? 'gradient-text-tech' : 'text-text-primary'}
              `}
              animate={{
                scale: isHovered ? 1.02 : 1
              }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            
            <p className="text-sm sm:text-base text-text-secondary mb-6 leading-relaxed">
              {desc}
            </p>

            {children}
          </div>
        </div>
      )}

      {/* LAYOUT : IMAGE SIDE */}
      {image && imagePosition === 'side' && (
        <div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 relative z-10">
          <motion.div 
            className="w-full sm:w-40 h-40 sm:h-full rounded-xl overflow-hidden shrink-0"
            animate={{
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={image}
              alt={title}
              onLoad={() => setImageLoaded(true)}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex-1">
            <motion.h3 
              className={`
                text-xl sm:text-2xl font-bold mb-3 sm:mb-4
                ${highlight ? 'gradient-text-tech' : 'text-text-primary'}
              `}
              animate={{
                scale: isHovered ? 1.02 : 1
              }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            
            <p className="text-sm sm:text-base text-text-secondary mb-6 leading-relaxed">
              {desc}
            </p>

            {children}
          </div>
        </div>
      )}

      {/* LAYOUT : SANS IMAGE */}
      {!image && (
        <div className="relative z-10 p-6 sm:p-8" style={{ transform: 'translateZ(20px)' }}>
          <motion.h3 
            className={`
              text-xl sm:text-2xl font-bold mb-3 sm:mb-4
              ${highlight ? 'gradient-text-tech' : 'text-text-primary'}
            `}
            animate={{
              scale: isHovered ? 1.02 : 1
            }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
          
          <p className="text-sm sm:text-base text-text-secondary mb-6 leading-relaxed">
            {desc}
          </p>

          {children}
        </div>
      )}

      {/* Effet de bordure lumineuse au hover */}
      {highlight && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-20"
          animate={{
            boxShadow: isHovered 
              ? '0 0 30px rgba(0,255,148,0.3), inset 0 0 30px rgba(0,255,148,0.1)'
              : '0 0 0px rgba(0,255,148,0)'
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}