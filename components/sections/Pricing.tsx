'use client';

import Section from '@/components/shared/Section';
import PricingCard from '@/components/ui/PricingCard';
import { pricingPlans } from '@/lib/data';
import {
  Check,
  Shield,
  Calendar,
  Sparkles,
  CreditCard,
  Gift,
  Users,
} from 'lucide-react';
import { cubicBezier, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Pricing() {
  const ref = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  return (
    <Section id="pricing" background="cream">
      {/* HEADER */}
      <div className="text-center mb-16 md:mb-20" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-6"
        >
          Simple et accessible.
          <br />
          <span className="inline-block mt-4 text-sage-600">Sans engagement.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
        >
          De la séance ponctuelle à l&apos;abonnement mensuel flexible.
          Commencez quand vous voulez, arrêtez quand vous voulez. C&apos;est
          aussi simple que ça.
        </motion.p>
      </div>

      {/* COMPARAISON INTELLIGENTE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 max-w-6xl mx-auto"
      >
        <div className="glass rounded-3xl p-8 md:p-10 shadow-md border border-sage-100">
          <h3 className="text-xl font-bold text-charcoal mb-3 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-sage-600" strokeWidth={2} />
            Pourquoi KAPSUL change tout
          </h3>
          <p className="text-xm font-semibold text-gray-600 mb-8 max-w-2xl">
            Même qualité de récupération, 6x moins cher, 3x plus rapide. Le
            bien-être urbain réinventé.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Spa Classique */}
            <div className="relative p-6 rounded-2xl bg-white/50 border border-sage-100 text-center group hover:bg-white/70 transition-all">
              <div className="text-lg font-semibold uppercase text-gray-500 mb-3">
                Spa Urbain
              </div>
              <div className="text-3xl font-sans font-semibold text-gray-600 mb-2">
                90€
              </div>
              <div className="text-lg text-gray-500 mb-4">60 minutes</div>
              <div className="space-y-2 text-xm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-400" />
                  <span>Détente passive</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-400" />
                  <span>Pas de dimension mentale</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-400" />
                  <span>Longue durée nécessaire</span>
                </div>
              </div>
            </div>

            {/* Massage Classique */}
            <div className="relative p-6 rounded-2xl bg-white/50 border border-sage-100 text-center group hover:bg-white/70 transition-all">
              <div className="text-lg font-semibold uppercase text-gray-500 mb-3">
                Massage Pro
              </div>
              <div className="text-3xl font-sans font-semibold text-gray-600 mb-2">
                75€
              </div>
              <div className="text-lg text-gray-500 mb-4">45 minutes</div>
              <div className="space-y-2 text-xm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-400" />
                  <span>Corps uniquement</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-400" />
                  <span>Réservation compliquée</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-400" />
                  <span>Prix élevé par session</span>
                </div>
              </div>
            </div>

            {/* KAPSUL Winner */}
            <div className="relative p-6 rounded-2xl bg-sage-600 text-white text-center shadow-lg transform scale-[1.03] border-2 border-sage-500">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-terra-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                Notre approche
              </div>
              <div className="text-lg font-semibold uppercase text-sage-200 mb-3">
                KAPSUL
              </div>
              <div className="text-4xl font-sans font-semibold text-white mb-2">
                12€
              </div>
              <div className="text-lg text-sage-200 mb-4">20 minutes</div>
              <div className="space-y-2 text-xm text-sage-100">
                <div className="flex items-center gap-2">
                  <Check className="w-3 h-3" strokeWidth={3} />
                  <span>Corps + Esprit</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3 h-3" strokeWidth={3} />
                  <span>Réservation instantanée</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3 h-3" strokeWidth={3} />
                  <span>Résultats mesurés (-78% cortisol)</span>
                </div>
              </div>
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
        className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full mx-auto mb-16"
      >
        {pricingPlans.map((plan) => (
          <motion.div key={plan.name} variants={itemVariants}>
            <PricingCard plan={plan} />
          </motion.div>
        ))}
      </motion.div>

      {/* MODES DE PAIEMENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass border border-sage-100 text-center">
            <div className="w-12 h-12 rounded-xl bg-sage-600/10 flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-6 h-6 text-sage-700" strokeWidth={2} />
            </div>
            <h4 className="font-semibold text-charcoal mb-2">
              Paiement sécurisé
            </h4>
            <p className="text-sm text-gray-600">
              CB, Apple Pay, Google Pay acceptés
            </p>
          </div>

          <div className="p-6 rounded-2xl glass border border-sage-100 text-center">
            <div className="w-12 h-12 rounded-xl bg-terra-500/10 flex items-center justify-center mx-auto mb-4">
              <Gift className="w-6 h-6 text-terra-600" strokeWidth={2} />
            </div>
            <h4 className="font-semibold text-charcoal mb-2">Carte cadeau</h4>
            <p className="text-sm text-gray-600">
              Offrez du bien-être à vos proches
            </p>
          </div>

          <div className="p-6 rounded-2xl glass border border-sage-100 text-center">
            <div className="w-12 h-12 rounded-xl bg-sage-600/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-sage-700" strokeWidth={2} />
            </div>
            <h4 className="font-semibold text-charcoal mb-2">
              Offre entreprise
            </h4>
            <p className="text-sm text-gray-600">
              Tarifs dégressifs pour vos équipes
            </p>
          </div>
        </div>
      </motion.div>

      {/* REASSURANCE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {[
          { icon: Shield, text: 'Sans engagement' },
          { icon: Calendar, text: 'Annulation flexible' },
          { icon: Check, text: 'Crédits reportables 60j' },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-5 py-2.5 glass rounded-full border border-sage-200/40 text-sm font-medium text-charcoal hover:border-sage-300 transition-all"
          >
            <item.icon className="w-4 h-4 text-sage-600" strokeWidth={2} />
            {item.text}
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
