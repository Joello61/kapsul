'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { PricingPlan } from '@/lib/data';

interface PricingCardProps {
  plan: PricingPlan;
  delay: number;
  isSelected?: boolean;
  onSelect?: () => void;
}

export default function PricingCard({ plan, delay, isSelected, onSelect }: PricingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-full"
    >
      {/* Badge Populaire */}
      {plan.popular && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.2 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="bg-tech text-bg-ultra-dark px-6 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(0,255,148,0.4)]">
            <Star className="w-4 h-4 fill-current" />
            Populaire
          </div>
        </motion.div>
      )}

      <motion.div
        animate={{
          scale: isHovered ? 1.02 : 1,
          y: isHovered ? -5 : 0
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`
          glass
          rounded-2xl p-6 sm:p-8
          h-full flex flex-col
          relative overflow-hidden
          transition-all duration-500
          ${plan.popular 
            ? 'border-tech/50 shadow-[0_0_30px_rgba(0,255,148,0.15)]' 
            : 'hover:border-tech/30'
          }
          ${isSelected ? 'ring-2 ring-tech ring-offset-2 ring-offset-bg-ultra-dark' : ''}
        `}
      >
        {/* Effet glow au hover */}
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          animate={{
            opacity: isHovered ? 0.1 : 0
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: plan.popular
              ? 'radial-gradient(circle at 50% 0%, rgba(0,255,148,0.3), transparent 70%)'
              : 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 70%)'
          }}
        />

        {/* En-tête du plan */}
        <div className="mb-6 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
              {plan.name}
            </h3>
            {plan.popular && <Zap className="w-5 h-5 text-tech" />}
          </div>
          
          <div className="flex items-baseline gap-2">
            <motion.span 
              className="text-4xl sm:text-5xl font-bold gradient-text-tech"
              animate={{
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ duration: 0.2 }}
            >
              {plan.price}
            </motion.span>
            <span className="text-base sm:text-lg text-text-secondary">
              {plan.period}
            </span>
          </div>

          {/* Prix par crédit (si abonnement) */}
          {plan.period === '/mois' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-2 text-xs sm:text-sm text-human font-medium"
            >
              {plan.name === 'STUDENT PASS' && '≈ 7.47€/crédit'}
              {plan.name === 'STANDARD PASS' && '≈ 6.24€/crédit'}
            </motion.div>
          )}
        </div>
        
        {/* Features */}
        <ul className="space-y-3 sm:space-y-4 mb-8 flex-1 relative z-10">
          {plan.features.map((feature, idx) => (
            <motion.li 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: delay + 0.1 * idx }}
              className="flex items-start gap-3 text-sm sm:text-base text-text-secondary"
            >
              <Check className="w-5 h-5 text-tech shrink-0 mt-0.5" />
              <span className="leading-relaxed">{feature}</span>
            </motion.li>
          ))}
        </ul>
        
        {/* CTA Button */}
        <motion.button
          onClick={onSelect}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`
            w-full py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base
            transition-all duration-300 relative overflow-hidden
            ${plan.popular 
              ? 'bg-tech text-bg-ultra-dark hover:bg-tech/90 shadow-[0_0_20px_rgba(0,255,148,0.3)]' 
              : 'glass-strong text-text-primary hover:border-tech/50'
            }
          `}
        >
          <span className="relative z-10">{plan.cta}</span>
          
          {/* Effet shimmer sur le bouton populaire */}
          {plan.popular && (
            <motion.div
              className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent"
              animate={{
                translateX: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
                repeatDelay: 1
              }}
            />
          )}
        </motion.button>

      </motion.div>
    </motion.div>
  );
}