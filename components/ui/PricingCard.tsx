'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, Star, Zap, TrendingUp } from 'lucide-react';
import { PricingPlan } from '@/lib/data';

interface PricingCardProps {
  plan: PricingPlan;
  delay: number;
  isSelected?: boolean;
  onSelect?: () => void;
}

export default function PricingCard({ plan, delay, isSelected, onSelect }: PricingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

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
      className="relative h-full"
    >
      {/* Badge Populaire Moderne */}
      {plan.popular && (
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: delay + 0.2,
            type: "spring",
            bounce: 0.4
          }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-30"
        >
          <div className="relative">
            <div className="bg-linear-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-emerald border border-emerald-400/50">
              <Star className="w-4 h-4 fill-current" />
              <span>Plus populaire</span>
            </div>
            {/* Glow pulse */}
            <motion.div
              className="absolute inset-0 bg-emerald-500 rounded-full blur-md -z-10"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      )}

      <motion.div
        animate={{
          y: isHovered ? -8 : 0,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.22, 1, 0.36, 1] 
        }}
        className={`
          rounded-organic p-8 sm:p-10
          h-full flex flex-col
          relative overflow-hidden
          transition-all duration-500
          ${plan.popular 
            ? 'glass-emerald border-2 border-emerald-400' 
            : 'glass glass-hover'
          }
          ${isSelected ? 'ring-4 ring-emerald-500 ring-offset-4 ring-offset-pearl' : ''}
        `}
      >
        {/* Background Pattern pour la carte populaire */}
        {plan.popular && (
          <>
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-emerald-600) 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }} />
            </div>
            {/* Gradient glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-400/20 rounded-full blur-[80px]" />
          </>
        )}

        {/* En-tête du plan */}
        <div className="mb-8 relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-ink mb-2">
                {plan.name}
              </h3>
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-1.5 text-emerald-600 text-sm font-medium"
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>Meilleur rapport qualité/prix</span>
                </motion.div>
              )}
            </div>
            {plan.popular && (
              <motion.div
                animate={{ rotate: isHovered ? 12 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Zap className="w-7 h-7 text-emerald-600 fill-emerald-200" />
              </motion.div>
            )}
          </div>
          
          {/* Prix avec animation */}
          <div className="flex items-baseline gap-3">
            <motion.span 
              className={`text-5xl sm:text-6xl font-bold tracking-tight ${
                plan.popular 
                  ? 'gradient-emerald' 
                  : 'text-ink'
              }`}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              {plan.price}
            </motion.span>
            <span className="text-lg sm:text-xl text-charcoal font-medium">
              {plan.period}
            </span>
          </div>

          {/* Prix par crédit avec badge */}
          {plan.period === '/mois' && (
            <motion.div 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-coral-100 border border-coral-300"
            >
              <span className="text-xs sm:text-sm font-bold gradient-coral">
                {plan.name === 'STUDENT PASS' && '≈ 7.47€/crédit'}
                {plan.name === 'STANDARD PASS' && '≈ 6.24€/crédit'}
              </span>
            </motion.div>
          )}
        </div>
        
        {/* Features avec animations échelonnées */}
        <ul className="space-y-4 sm:space-y-5 mb-8 flex-1 relative z-10">
          {plan.features.map((feature, idx) => (
            <motion.li 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: delay + 0.1 * idx,
                ease: "easeOut"
              }}
              className="flex items-start gap-4 text-base sm:text-lg"
            >
              {/* Icône check modernisée */}
              <motion.div 
                className={`
                  mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0
                  ${plan.popular 
                    ? 'bg-emerald-500 shadow-emerald' 
                    : 'bg-emerald-100'
                  }
                `}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Check 
                  className={`w-4 h-4 ${
                    plan.popular 
                      ? 'text-white' 
                      : 'text-emerald-600'
                  }`} 
                  strokeWidth={3}
                />
              </motion.div>
              <span className="leading-relaxed text-charcoal">
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
        
        {/* CTA Button Premium */}
        <motion.button
          onClick={onSelect}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`
            w-full py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg
            transition-all duration-300 relative overflow-hidden
            ${plan.popular 
              ? 'btn-primary' 
              : 'btn-secondary'
            }
          `}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {plan.cta}
            {plan.popular && <Zap className="w-5 h-5 fill-current" />}
          </span>
        </motion.button>

        {/* Décorations subtiles */}
        {!plan.popular && (
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-lavender-300/20 rounded-full blur-[60px] pointer-events-none" />
        )}
      </motion.div>
    </motion.div>
  );
}