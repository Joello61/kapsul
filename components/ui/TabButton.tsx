'use client';

import { motion } from 'framer-motion';

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  children: React.ReactNode;
}

export default function TabButton({ 
  active, 
  onClick, 
  icon: Icon, 
  color, 
  children 
}: TabButtonProps) {
  
  const colors = {
    tech: {
      active: {
        bg: 'rgba(0, 255, 148, 0.15)',
        text: '#00FF94',
        border: 'rgba(0, 255, 148, 0.5)',
        shadow: '0 0 25px rgba(0, 255, 148, 0.3)'
      },
      inactive: {
        text: '#a3a3a3'
      }
    },
    human: {
      active: {
        bg: 'rgba(255, 179, 71, 0.15)',
        text: '#FFB347',
        border: 'rgba(255, 179, 71, 0.5)',
        shadow: '0 0 25px rgba(255, 179, 71, 0.3)'
      },
      inactive: {
        text: '#a3a3a3'
      }
    }
  };

  const currentColor = colors[color as keyof typeof colors] || colors.tech;

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: active ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="glass px-6 py-3 sm:py-4 rounded-xl flex items-center gap-3 transition-all duration-300 font-medium relative overflow-hidden"
      style={{
        backgroundColor: active ? currentColor.active.bg : 'rgba(237, 237, 237, 0.03)',
        color: active ? currentColor.active.text : currentColor.inactive.text,
        borderColor: active ? currentColor.active.border : 'rgba(237, 237, 237, 0.1)',
        boxShadow: active ? currentColor.active.shadow : 'none'
      }}
    >
      {/* Effet de fond animé pour l'état actif */}
      {active && (
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              `radial-gradient(circle at 0% 50%, ${currentColor.active.text}20, transparent 50%)`,
              `radial-gradient(circle at 100% 50%, ${currentColor.active.text}20, transparent 50%)`,
              `radial-gradient(circle at 0% 50%, ${currentColor.active.text}20, transparent 50%)`
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      )}

      {/* Icône */}
      <motion.div
        animate={{
          rotate: active ? 360 : 0,
          scale: active ? 1.1 : 1
        }}
        transition={{ 
          rotate: { duration: 0.5 },
          scale: { duration: 0.2 }
        }}
      >
        <Icon className="w-5 h-5 relative z-10" />
      </motion.div>

      {/* Texte */}
      <span className="relative z-10 text-sm sm:text-base">
        {children}
      </span>

      {/* Indicateur actif (ligne en bas) */}
      {active && (
        <motion.div
          layoutId={`tab-indicator-${color}`}
          className="absolute bottom-0 left-0 right-0 h-1 rounded-full"
          style={{ backgroundColor: currentColor.active.text }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </motion.button>
  );
}