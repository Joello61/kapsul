'use client';

import { useState, useRef } from 'react';
import {
  Heart,
  Sparkles,
  Zap,
  Clock,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import Section from '@/components/shared/Section';
import TabButton from '@/components/ui/TabButton';
import ServiceCard from '@/components/ui/ServiceCard';
import { servicesTech, servicesHuman } from '@/lib/data';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const tabBenefits = {
  sage: [
    { label: 'Immersion totale', icon: Sparkles },
    { label: 'Résultats immédiats', icon: Zap },
    { label: 'Zéro effort physique', icon: CheckCircle2 },
  ],
  terra: [
    { label: 'Contact humain', icon: Heart },
    { label: 'Tensions ciblées', icon: TrendingUp },
    { label: 'Expertise certifiée', icon: CheckCircle2 },
  ],
};

const testimonials = {
  sage: {
    text: '20 minutes dans le K-ESCAPE et je me sens comme après 3h de sommeil. Magique.',
    author: 'Thomas L.',
    role: 'Dev @Toulouse',
  },
  terra: {
    text: 'Les mains de Clara ont dénoué 3 mois de télétravail en une séance. Incroyable.',
    author: 'Marie B.',
    role: 'Chef de projet',
  },
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<'sage' | 'terra'>('sage');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const currentServices = activeTab === 'sage' ? servicesTech : servicesHuman;
  const currentBenefits = tabBenefits[activeTab];
  const currentTestimonial = testimonials[activeTab];

  return (
    <Section id="services" background="stone">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-10" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-6 leading-tight"
        >
          Tech et Touch.
          <br />
          <span className="inline-block mt-2 text-sage-600">L&apos;alliance parfaite.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed"
        >
          Technologie immersive pour l&apos;esprit, expertise humaine pour le
          corps. Deux approches complémentaires pour une récupération totale en
          20 minutes.
        </motion.p>
      </div>

      {/* TABS */}
      <motion.div
        className="flex justify-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="inline-flex gap-3 p-1.5 glass rounded-full border border-sage-200/30">
          <TabButton
            active={activeTab === 'sage'}
            onClick={() => setActiveTab('sage')}
            icon={Zap}
            color="sage"
          >
            Tech
          </TabButton>

          <TabButton
            active={activeTab === 'terra'}
            onClick={() => setActiveTab('terra')}
            icon={Heart}
            color="terra"
          >
            Touch
          </TabButton>
        </div>
      </motion.div>

      {/* INTRO DU TAB ENRICHIE */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`intro-${activeTab}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mb-12 space-y-6"
        >

          {/* Mini-bénéfices en grille */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {currentBenefits.map((benefit, idx) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-cream border border-sage-100"
              >
                <div
                  className={`p-2 rounded-lg ${
                    activeTab === 'sage' ? 'bg-sage-600/10' : 'bg-terra-500/10'
                  }`}
                >
                  <benefit.icon
                    className={`w-4 h-4 ${
                      activeTab === 'sage' ? 'text-sage-700' : 'text-terra-600'
                    }`}
                    strokeWidth={2}
                  />
                </div>
                <span className="text-sm font-medium text-charcoal">
                  {benefit.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* GRILLE SERVICES */}
      <div className="min-h-[450px] mb-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
          >
            {currentServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={currentServices.length <= 2 ? 'lg:col-span-2' : ''}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* TÉMOIGNAGE CONTEXTUEL */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`testimonial-${activeTab}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div
            className={`p-8 rounded-3xl border-2 ${
              activeTab === 'sage'
                ? 'bg-sage-50/50 border-sage-200'
                : 'bg-terra-50/50 border-terra-200'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div
                  className={`w-12 h-12 rounded-full ${
                    activeTab === 'sage' ? 'bg-sage-200' : 'bg-terra-200'
                  } flex items-center justify-center font-sans text-xl font-semibold ${
                    activeTab === 'sage' ? 'text-sage-700' : 'text-terra-700'
                  }`}
                >
                  {currentTestimonial.author.charAt(0)}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg text-charcoal leading-relaxed mb-3 italic">
                  &quot;{currentTestimonial.text}&quot;
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-charcoal">
                    {currentTestimonial.author}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-sm text-gray-600">
                    {currentTestimonial.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* INFO PRATIQUE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-42">
          {/* Durée */}
          <div className="p-6 rounded-2xl glass border border-sage-100 text-center">
            <div className="w-12 h-12 rounded-xl bg-sage-600/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-sage-700" strokeWidth={2} />
            </div>
            <div className="font-sans text-3xl font-semibold text-charcoal mb-1">
              20min
            </div>
            <div className="text-sm text-gray-600">Durée par session</div>
          </div>

          {/* Prix */}
          <div className="p-6 rounded-2xl glass border border-sage-100 text-center">
            <div className="w-12 h-12 rounded-xl bg-terra-500/10 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-terra-600" strokeWidth={2} />
            </div>
            <div className="font-sans text-3xl font-semibold text-charcoal mb-1">
              12€
            </div>
            <div className="text-sm text-gray-600">
              À partir de (10€ en Happy Hour)
            </div>
          </div>

          {/* Combinable */}
          <div className="p-6 rounded-2xl glass border border-sage-100 text-center">
            <div className="w-12 h-12 rounded-xl bg-sage-600/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-sage-700" strokeWidth={2} />
            </div>
            <div className="font-sans text-3xl font-semibold text-charcoal mb-1">
              Mix
            </div>
            <div className="text-sm text-gray-600">Combinez Tech & Touch</div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
