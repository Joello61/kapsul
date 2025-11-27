'use client';

import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Service } from '@/lib/data';

interface ServiceCardProps {
  service: Service;
  delay: number;
  activeColor?: string;
}

export default function ServiceCard({ service, delay, activeColor = '#00FF94' }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = service.icon;

  // État hover pour effet 3D
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values pour tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

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
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.5, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="glass rounded-2xl p-6 sm:p-8 transition-all duration-500 group relative overflow-hidden cursor-pointer"
    >
      {/* Effet gradient dynamique au hover */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        animate={{
          opacity: isHovered ? 0.15 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(circle at center, ${service.color}40, transparent 70%)`,
          filter: 'blur(40px)'
        }}
      />

      {/* Contenu */}
      <div className="relative" style={{ transform: 'translateZ(30px)' }}>
        
        {/* Icône + Badge */}
        <div className="relative mb-6 flex items-start justify-between">
          <motion.div 
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
            style={{ backgroundColor: `${service.color}15` }}
            animate={{
              scale: isHovered ? 1.1 : 1,
              backgroundColor: isHovered ? `${service.color}25` : `${service.color}15`
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon 
              className="w-7 h-7 sm:w-8 sm:h-8 relative z-10" 
              style={{ color: service.color }} 
            />
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0"
              animate={{
                opacity: isHovered ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: `radial-gradient(circle, ${service.color}60 0%, transparent 70%)`,
                filter: 'blur(15px)'
              }}
            />
          </motion.div>
          
          {/* Badge */}
          <motion.div 
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={{ 
              backgroundColor: `${service.color}20`,
              color: service.color
            }}
            animate={{
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ duration: 0.2 }}
          >
            {service.badge}
          </motion.div>
        </div>
        
        {/* Titre */}
        <motion.h3 
          className="text-lg sm:text-xl font-bold mb-3 transition-all duration-300"
          style={{ 
            color: isHovered ? service.color : '#EDEDED'
          }}
        >
          {service.name}
        </motion.h3>
        
        {/* Description */}
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
          {service.desc}
        </p>
      </div>

      {/* Bordure lumineuse au hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: isHovered 
            ? `0 0 25px ${service.color}40, inset 0 0 25px ${service.color}10`
            : '0 0 0px transparent'
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Ligne décorative en bas */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 rounded-full"
        style={{ backgroundColor: service.color }}
        animate={{
          width: isHovered ? '100%' : '0%'
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}