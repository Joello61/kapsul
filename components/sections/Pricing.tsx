'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Section from '@/components/shared/Section';
import PricingCard from '@/components/ui/PricingCard';
import { pricingPlans } from '@/lib/data';
import { TrendingDown, Sparkles, Calculator, ShieldCheck, Calendar, Zap } from 'lucide-react';

export default function Pricing() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <Section id="pricing" variant="gradient">
      <div ref={sectionRef} className="max-w-7xl mx-auto">
        
        {/* EN-TÊTE Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-coral border-2 border-coral-300 mb-8"
          >
            <TrendingDown className="w-5 h-5 text-coral-600" strokeWidth={2.5} />
            <span className="text-sm font-bold gradient-coral">Prix cassés, Qualité Premium</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 tracking-tight">
            Tarifs <span className="gradient-emerald">Transparents</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-charcoal max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
            Accessible à tous, sans engagement caché.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full border-2 border-emerald-200"
          >
            <Calculator className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-bold text-ink">1 Crédit = 20 min de Pod, Massage ou Yoga</span>
          </motion.div>
        </motion.div>

        {/* COMPARAISON Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20 glass-emerald rounded-[3rem] p-10 sm:p-12 border-2 border-emerald-300"
        >
          <div className="flex items-center gap-4 mb-10">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-7 h-7 text-emerald-600" />
            </motion.div>
            <h3 className="text-2xl sm:text-3xl font-extrabold gradient-emerald">
              Pourquoi c'est plus doux pour votre budget ?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { label: 'Spa classique', price: '80-120€', time: '60 min', emoji: '🧖‍♀️', gradient: 'from-gray-400 to-gray-500' },
              { label: 'Massage indépendant', price: '60-90€', time: '45 min', emoji: '💆‍♂️', gradient: 'from-gray-400 to-gray-500' },
              { label: 'KAPSUL', price: '12€', time: '20 min', highlight: true, emoji: '✨', gradient: 'from-[var(--color-emerald-500)] to-[var(--color-emerald-700)]' }
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                whileHover={{ scale: item.highlight ? 1.05 : 1.02, y: -4 }}
                transition={{ duration: 0.4, delay: 0.4 + (idx * 0.1) }}
                className={`
                  p-8 rounded-3xl border-2 transition-all duration-300 flex flex-col items-center text-center cursor-pointer
                  ${item.highlight 
                    ? 'glass-coral border-coral-300 shadow-coral scale-105 z-10' 
                    : 'glass border-white'
                  }
                `}
              >
                <div className="text-4xl mb-5">{item.emoji}</div>
                <div className="text-sm text-slate mb-2 font-bold uppercase tracking-wide">{item.label}</div>
                <div className={`text-4xl sm:text-5xl font-black mb-2 bg-linear-to-br ${item.gradient} bg-clip-text text-transparent`}>
                  {item.price}
                </div>
                <div className="text-xs text-slate font-bold uppercase">{item.time}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GRILLE DE PRICING */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, idx) => (
            <PricingCard 
              key={plan.name} 
              plan={plan} 
              delay={0.1 * idx}
              isSelected={selectedPlan === plan.name}
              onSelect={() => setSelectedPlan(plan.name)}
            />
          ))}
        </div>

        {/* CALCULATEUR Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-coral rounded-[3rem] p-10 sm:p-12 border-2 border-coral-300 relative overflow-hidden mb-20"
        >
          {/* Blob décoratif */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-coral-400/20 rounded-full blur-[80px]" />
          
          <h3 className="text-2xl sm:text-3xl font-extrabold gradient-coral mb-10 flex items-center gap-4 relative z-10">
            <Calculator className="w-8 h-8 text-coral-600" />
            Calculez votre économie réelle
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center relative z-10">
            <div className="p-6 rounded-3xl glass border-2 border-white">
              <div className="text-sm text-slate mb-3 font-bold uppercase">À la carte</div>
              <div className="text-3xl sm:text-4xl font-black text-ink">12€<span className="text-lg font-normal text-slate">/crédit</span></div>
            </div>
            <div className="p-6 rounded-3xl glass-emerald border-2 border-emerald-300">
              <div className="text-sm text-emerald-700 mb-3 font-bold uppercase">Student Pass</div>
              <div className="text-3xl sm:text-4xl font-black gradient-emerald">7.47€<span className="text-lg font-normal text-emerald-600">/crédit</span></div>
              <div className="text-xs font-black text-white mt-3 px-3 py-2 bg-linear-to-r from-coral-500 to-coral-600 rounded-full inline-block shadow-coral">-38% 🔥</div>
            </div>
            <div className="p-6 rounded-3xl glass-emerald border-2 border-emerald-300">
              <div className="text-sm text-emerald-700 mb-3 font-bold uppercase">Standard Pass</div>
              <div className="text-3xl sm:text-4xl font-black gradient-emerald">6.24€<span className="text-lg font-normal text-emerald-600">/crédit</span></div>
              <div className="text-xs font-black text-white mt-3 px-3 py-2 bg-linear-to-r from-coral-500 to-coral-600 rounded-full inline-block shadow-coral">-48% 🔥</div>
            </div>
          </div>
        </motion.div>

        {/* BADGES CONFIANCE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-10 glass px-10 py-6 rounded-full border-2 border-emerald-200">
            {[
              { icon: ShieldCheck, text: 'Sans engagement', color: 'var(--color-emerald-600)' },
              { icon: Sparkles, text: 'Réservation instantanée', color: 'var(--color-coral-600)' },
              { icon: Calendar, text: 'Annulation flexible', color: 'var(--color-lavender-600)' }
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-3">
                {idx > 0 && <div className="w-2 h-2 rounded-full bg-slate hidden sm:block" />}
                <badge.icon className="w-5 h-5" style={{ color: badge.color }} strokeWidth={2.5} />
                <span className="text-sm font-bold text-ink">{badge.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </Section>
  );
}