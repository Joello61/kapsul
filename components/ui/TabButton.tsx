'use client';

import { motion } from 'framer-motion';

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
  color: 'tech' | 'human';
  children: React.ReactNode;
}

export default function TabButton({ 
  active, 
  onClick, 
  icon: Icon, 
  color, 
  children 
}: TabButtonProps) {
  
  // Utilisation des nouvelles couleurs CSS variables
  const colorMap = {
    tech: {
      main: 'var(--color-emerald-500)',
      light: 'var(--color-emerald-100)',
      dark: 'var(--color-emerald-700)',
      glow: 'var(--glow-emerald)'
    },
    human: {
      main: 'var(--color-coral-500)',
      light: 'var(--color-coral-100)',
      dark: 'var(--color-coral-700)',
      glow: 'var(--glow-coral)'
    }
  };

  const currentColor = colorMap[color];

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="relative"
    >
      <motion.div
        className={`
          relative px-6 sm:px-8 py-3 sm:py-4 rounded-full 
          flex items-center gap-3
          font-bold text-sm sm:text-base 
          transition-all duration-400 ease-out
          overflow-hidden
        `}
        animate={{
          backgroundColor: active 
            ? currentColor.main 
            : 'var(--color-pearl)',
          color: active ? 'white' : 'var(--color-charcoal)',
        }}
        style={{
          boxShadow: active 
            ? currentColor.glow 
            : '0 2px 8px rgba(0,0,0,0.04)'
        }}
      >
        {/* Background shimmer pour l'état actif */}
        {active && (
          <motion.div
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1
            }}
          />
        )}

        {/* Icône avec animation de rotation */}
        <motion.div
          className="relative z-10"
          animate={{
            scale: active ? 1.15 : 1,
            rotate: active ? [0, -5, 5, 0] : 0
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          <Icon 
            className={`w-5 h-5 sm:w-6 sm:h-6 ${!active && 'opacity-70'}`}
          />
        </motion.div>

        {/* Texte avec animation de tracking */}
        <motion.span 
          className="relative z-10 whitespace-nowrap"
          animate={{
            letterSpacing: active ? '0.02em' : '0em'
          }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.span>

        {/* Cercle de sélection animé derrière */}
        {active && (
          <motion.div
            layoutId={`tab-highlight-${color}`}
            className="absolute inset-0 rounded-full -z-10"
            style={{ 
              backgroundColor: currentColor.main,
              filter: 'blur(12px)',
              opacity: 0.4
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.4 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ 
              type: "spring", 
              bounce: 0.3, 
              duration: 0.6 
            }}
          />
        )}

        {/* Border glow pour état inactif au hover */}
        {!active && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 opacity-0"
            style={{ borderColor: currentColor.main }}
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>

      {/* Glow pulse pour l'état actif */}
      {active && (
        <motion.div
          className="absolute inset-0 rounded-full -z-20"
          style={{ backgroundColor: currentColor.main }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.button>
  );
}