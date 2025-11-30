'use client';

import { useState, useRef } from 'react';
import Section from '@/components/shared/Section';
import PricingCard from '@/components/ui/PricingCard';
import { pricingPlans } from '@/lib/data';
import { TrendingDown, Calculator, ShieldCheck, Sparkles, Calendar } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section id="pricing" variant="gradient">
      
      {/* EN-TÊTE */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terra-100 border border-terra-300 mb-6">
          <TrendingDown className="w-5 h-5 text-terra-700" strokeWidth={2.5} />
          <span className="text-sm font-semibold text-terra-800">Prix cassés, Qualité Premium</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-charcoal">
          Tarifs <span className="text-olive-700">Transparents</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
          Accessible à tous, sans engagement caché.
        </p>
        
        <div className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-olive-300 shadow-sm">
          <Calculator className="w-5 h-5 text-olive-600" strokeWidth={2} />
          <span className="text-sm font-semibold text-charcoal">1 Crédit = 20 min de Pod, Massage ou Yoga</span>
        </div>
      </motion.div>

      {/* COMPARAISON */}
      <motion.div 
        className="mb-16 bg-olive-50 rounded-2xl p-8 sm:p-10 border border-olive-200"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="w-6 h-6 text-olive-700" strokeWidth={2} />
          <h3 className="text-xl sm:text-2xl font-bold text-olive-800">
            Pourquoi c&apos;est plus doux pour votre budget ?
          </h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: 'Spa classique', price: '80-120€', time: '60 min', emoji: '🧖‍♀️' },
            { label: 'Massage indépendant', price: '60-90€', time: '45 min', emoji: '💆‍♂️' },
            { label: 'KAPSUL', price: '12€', time: '20 min', highlight: true, emoji: '✨' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className={`
                p-6 rounded-xl flex flex-col items-center text-center
                transition-all duration-300 hover:-translate-y-1
                ${item.highlight 
                  ? 'bg-terra-600 text-white shadow-md scale-105' 
                  : 'bg-white border border-gray-100'
                }
              `}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: item.highlight ? 1.05 : 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
            >
              <div className="text-3xl mb-4">{item.emoji}</div>
              <div className={`text-xs mb-2 font-semibold uppercase tracking-wide ${item.highlight ? 'text-white/90' : 'text-gray-500'}`}>
                {item.label}
              </div>
              <div className={`text-3xl sm:text-4xl font-bold mb-1 ${item.highlight ? 'text-white' : 'text-charcoal'}`}>
                {item.price}
              </div>
              <div className={`text-xs font-semibold uppercase ${item.highlight ? 'text-white/80' : 'text-gray-500'}`}>
                {item.time}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* GRILLE DE PRICING */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
          >
            <PricingCard 
              plan={plan} 
              isSelected={selectedPlan === plan.name}
              onSelect={() => setSelectedPlan(plan.name)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CALCULATEUR */}
      <motion.div 
        className="bg-terra-50 rounded-2xl p-8 sm:p-10 border border-terra-200 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <h3 className="text-xl sm:text-2xl font-bold text-terra-800 mb-8 flex items-center gap-3">
          <Calculator className="w-7 h-7 text-terra-700" strokeWidth={2} />
          Calculez votre économie réelle
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { label: 'À la carte', price: '12€', credit: '/crédit', highlight: false },
            { label: 'Student Pass', price: '7.47€', credit: '/crédit', discount: '-38% 🔥', highlight: true },
            { label: 'Standard Pass', price: '6.24€', credit: '/crédit', discount: '-48% 🔥', highlight: true }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className={`p-5 rounded-xl ${item.highlight ? 'bg-olive-600 text-white' : 'bg-white border border-gray-100'}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1.1 + (index * 0.1) }}
            >
              <div className={`text-sm mb-2 font-semibold uppercase ${item.highlight ? 'text-white/90' : 'text-gray-500'}`}>
                {item.label}
              </div>
              <div className="text-3xl font-bold">
                {item.price}<span className={`text-base font-normal ${item.highlight ? 'text-white/80' : 'text-gray-500'}`}>{item.credit}</span>
              </div>
              {item.discount && (
                <div className="text-xs font-bold bg-terra-600 text-white px-3 py-1 rounded-full inline-block mt-2">
                  {item.discount}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* BADGES CONFIANCE */}
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-8 bg-white px-8 py-5 rounded-full border border-olive-300 shadow-sm">
          {[
            { icon: ShieldCheck, text: 'Sans engagement', color: 'text-olive-700' },
            { icon: Sparkles, text: 'Réservation instantanée', color: 'text-terra-700' },
            { icon: Calendar, text: 'Annulation flexible', color: 'text-beige-500' }
          ].map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {idx > 0 && <div className="w-1.5 h-1.5 rounded-full bg-gray-300 hidden sm:block" />}
              <badge.icon className={`w-5 h-5 ${badge.color}`} strokeWidth={2.5} />
              <span className="text-sm font-semibold text-charcoal">{badge.text}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </Section>
  );
}