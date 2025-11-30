'use client';

import { useState, useRef } from 'react';
import { Zap, Heart, Sparkles, ArrowRight } from 'lucide-react';
import Section from '@/components/shared/Section';
import TabButton from '@/components/ui/TabButton';
import ServiceCard from '@/components/ui/ServiceCard';
import { servicesTech, servicesHuman } from '@/lib/data';
import { motion, AnimatePresence, useInView } from 'framer-motion';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'olive' | 'terra'>('olive');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const currentServices = activeTab === 'olive' ? servicesTech : servicesHuman;

  return (
    <Section id="services" variant="pattern">
      
      {/* EN-TÊTE */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terra-100 border border-terra-300 mb-6">
          <Sparkles className="w-5 h-5 text-terra-700" strokeWidth={2} />
          <span className="text-sm font-semibold text-terra-800">6 Expériences Uniques</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-charcoal">
          Nos <span className="text-terra-600">Services</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Choisissez votre mode de récupération : <span className="text-olive-700 font-semibold">technologie immersive</span> ou <span className="text-terra-700 font-semibold">expertise humaine</span>.
        </p>
      </motion.div>

      {/* TABS SYSTÈME */}
      <motion.div 
        className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <TabButton
          active={activeTab === 'olive'}
          onClick={() => setActiveTab('olive')}
          icon={Zap}
          color="olive"
        >
          <span className="hidden sm:inline">K-PODS (Tech)</span>
          <span className="sm:hidden">TECH</span>
        </TabButton>
        
        <TabButton
          active={activeTab === 'terra'}
          onClick={() => setActiveTab('terra')}
          icon={Heart}
          color="terra"
        >
          <span className="hidden sm:inline">K-MOVE (Humain)</span>
          <span className="sm:hidden">HUMAIN</span>
        </TabButton>
      </motion.div>

      {/* DESCRIPTION DU TAB ACTIF */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white border border-gray-100 rounded-2xl px-6 py-5 max-w-2xl mx-auto shadow-sm">
            <div className="flex items-center justify-center gap-3 mb-3">
              {activeTab === 'olive' ? (
                <>
                  <div className="w-10 h-10 rounded-lg bg-olive-600 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-olive-700">K-PODS Technology</h3>
                </>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-lg bg-terra-600 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-terra-700">K-MOVE Human</h3>
                </>
              )}
            </div>
            <p className="text-base text-gray-700">
              {activeTab === 'olive' 
                ? 'Immersion totale dans nos pods de dernière génération. Technologie sans contact, récupération instantanée.'
                : 'Nos experts diplômés vous accompagnent personnellement. Massage thérapeutique et yoga sur-mesure.'
              }
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* GRILLE DE SERVICES */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {currentServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: 'easeOut'
              }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* CTA VERS TARIFS */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <a href="#pricing">
          <button className="group px-8 py-4 rounded-xl bg-white border-2 border-olive-300 text-charcoal font-semibold text-base transition-all duration-300 inline-flex items-center gap-3 hover:bg-olive-50 hover:border-olive-400 shadow-sm hover:shadow-md">
            <span>Voir les tarifs</span>
            <div className="w-8 h-8 rounded-full bg-olive-600 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
          </button>
        </a>
      </motion.div>

    </Section>
  );
}