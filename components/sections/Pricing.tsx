'use client';

import Section from '@/components/shared/Section';
import PricingCard from '@/components/ui/PricingCard';
import { pricingPlans } from '@/lib/data';
import { TrendingDown, Calculator, ShieldCheck, Sparkles, Calendar, Bath, HandHelping } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Pricing() {
  const ref = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Section id="pricing" background="olive">
      
      {/* HEADER */}
      <div className="text-center mb-16 md:mb-24" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-olive-200 mb-6 shadow-sm"
        >
          <TrendingDown className="w-4 h-4 text-olive-600" />
          <span className="text-xs font-bold text-olive-800 uppercase tracking-wide">Le bien-être démocratisé</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6"
        >
          Un tarif unique, <br/>
          <span className="text-olive-700">Zéro engagement</span>
        </motion.h2>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Nous avons supprimé le superflu pour ne garder que l&apos;essentiel : votre détente.
          Payez à la séance ou abonnez-vous pour plus d&apos;avantages.
        </p>
      </div>

      {/* COMPARAISON INTELLIGENTE */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto mb-20"
      >
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-olive-900/5 border border-olive-100">
           <h3 className="text-xl font-bold text-charcoal mb-8 flex items-center gap-3">
             <Calculator className="w-6 h-6 text-olive-500" />
             Comparatif de rentabilité
           </h3>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Classique 1 */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center opacity-60 hover:opacity-100 transition-opacity">
                 <Bath className="w-8 h-8 mx-auto mb-4 text-gray-400" />
                 <div className="text-sm font-bold uppercase text-gray-400 mb-1">Spa Urbain</div>
                 <div className="text-3xl font-bold text-gray-600 mb-2">90€</div>
                 <div className="text-xs text-gray-400">pour 60 minutes</div>
              </div>

              {/* Classique 2 */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center opacity-60 hover:opacity-100 transition-opacity">
                 <HandHelping className="w-8 h-8 mx-auto mb-4 text-gray-400" />
                 <div className="text-sm font-bold uppercase text-gray-400 mb-1">Massage</div>
                 <div className="text-3xl font-bold text-gray-600 mb-2">75€</div>
                 <div className="text-xs text-gray-400">pour 45 minutes</div>
              </div>

              {/* Kapsul Winner */}
              <div className="relative p-6 rounded-2xl bg-charcoal text-white text-center shadow-lg transform scale-105 border-2 border-olive-500">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-olive-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                   Winner
                 </div>
                 <Sparkles className="w-8 h-8 mx-auto mb-4 text-olive-400 animate-pulse" />
                 <div className="text-sm font-bold uppercase text-olive-200 mb-1">Kapsul</div>
                 <div className="text-4xl font-bold text-white mb-2">12€</div>
                 <div className="text-xs text-gray-300">pour 20 minutes</div>
                 <p className="mt-3 text-xs text-olive-200 font-medium">Récupération équivalente en 3x moins de temps</p>
              </div>
           </div>
        </div>
      </motion.div>

      {/* CARDS PRICING */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {pricingPlans.map((plan) => (
          <motion.div key={plan.name} variants={itemVariants}>
            <PricingCard 
              plan={plan} 
            />
          </motion.div>
        ))}
      </motion.div>

      {/* REASSURANCE */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-20 flex flex-wrap justify-center gap-4 md:gap-8"
      >
         {[
           { icon: ShieldCheck, text: "Sans Engagement" },
           { icon: Calendar, text: "Annulation Flexible" },
           { icon: Sparkles, text: "Report de crédits" }
         ].map((item, i) => (
           <div key={i} className="flex items-center gap-2 px-5 py-3 bg-white/50 rounded-full border border-olive-100 text-sm font-semibold text-gray-600 backdrop-blur-sm">
             <item.icon className="w-4 h-4 text-olive-600" />
             {item.text}
           </div>
         ))}
      </motion.div>

    </Section>
  );
}