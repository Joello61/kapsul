'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Section from '@/components/shared/Section';
import PricingCard from '@/components/ui/PricingCard';
import { pricingPlans } from '@/lib/data';
import { TrendingDown, Sparkles, Calculator } from 'lucide-react';

export default function Pricing() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <Section id="pricing">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* --- EN-TÊTE SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-tech/20 bg-tech/5 mb-6"
          >
            <TrendingDown className="w-4 h-4 text-tech" />
            <span className="text-sm font-medium text-tech">Prix cassés</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="text-text-primary">Tarifs</span>{' '}
            <span className="gradient-text-tech">Transparents</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-3">
            Accessible à tous, sans compromis sur la qualité
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 text-sm text-text-secondary/70"
          >
            <Calculator className="w-4 h-4" />
            <span>1 Crédit = 20 min de Pod, Massage ou Yoga</span>
          </motion.div>
        </motion.div>

        {/* --- COMPARAISON AVEC CONCURRENTS (Nouveau) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 sm:mb-16 glass rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-5 h-5 text-tech" />
            <h3 className="text-lg sm:text-xl font-bold text-text-primary">
              Pourquoi c'est moins cher qu'ailleurs ?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Spa classique', price: '80-120€', time: '60 min' },
              { label: 'Massage indépendant', price: '60-90€', time: '45 min' },
              { label: 'KAPSUL', price: '12€', time: '20 min', highlight: true }
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + (idx * 0.1) }}
                className={`
                  p-4 rounded-xl border transition-all duration-300
                  ${item.highlight 
                    ? 'bg-tech/10 border-tech/50 shadow-[0_0_25px_rgba(0,255,148,0.2)]' 
                    : 'bg-white/5 border-white/10'
                  }
                `}
              >
                <div className="text-xs sm:text-sm text-text-secondary mb-2">{item.label}</div>
                <div className={`text-2xl sm:text-3xl font-bold mb-1 ${item.highlight ? 'text-tech' : 'text-text-primary'}`}>
                  {item.price}
                </div>
                <div className="text-xs text-text-secondary/70">{item.time}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* --- GRILLE DE PRICING --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
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

        {/* --- CALCULATEUR DE PRIX AU CRÉDIT (Nouveau) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 sm:p-8 border-human/20"
        >
          <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-human" />
            Calculez votre économie
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-sm text-text-secondary mb-2">À la carte</div>
              <div className="text-xl sm:text-2xl font-bold text-tech">12€/crédit</div>
            </div>
            <div>
              <div className="text-sm text-text-secondary mb-2">Student Pass</div>
              <div className="text-xl sm:text-2xl font-bold text-human">7.47€/crédit</div>
              <div className="text-xs text-tech mt-1">-38% 🔥</div>
            </div>
            <div>
              <div className="text-sm text-text-secondary mb-2">Standard Pass</div>
              <div className="text-xl sm:text-2xl font-bold text-human">6.24€/crédit</div>
              <div className="text-xs text-tech mt-1">-48% 🔥</div>
            </div>
          </div>
        </motion.div>

        {/* --- FAQ RAPIDE (Nouveau) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm text-text-secondary">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-tech"></div>
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-human"></div>
              <span>Résa en ligne</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-tech"></div>
              <span>Annulation gratuite</span>
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}