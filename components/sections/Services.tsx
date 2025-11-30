'use client';

import { useState, useRef } from 'react';
import { Heart, Sparkles, ArrowRight, Brain, Battery } from 'lucide-react';
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
    <Section id="services" background="white">
      
      {/* EN-TÊTE */}
      <div className="max-w-4xl mx-auto text-center mb-16" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terra-50 border border-terra-200 mb-6"
        >
          <Sparkles className="w-4 h-4 text-terra-600" />
          <span className="text-xs font-bold text-terra-800 uppercase tracking-wide">Menu à la carte</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6"
        >
          Choisissez votre mode de <br/>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-terra-500 to-terra-700">Récupération</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Deux approches complémentaires pour une régénération totale. 
          Alternez entre la technologie pour l&apos;esprit et le soin manuel pour le corps.
        </motion.p>
      </div>

      {/* TABS CONTROLS */}
      <motion.div 
        className="flex justify-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="p-1.5 bg-gray-100/80 backdrop-blur-sm rounded-full flex gap-2 border border-gray-200 shadow-inner">
          <TabButton
            active={activeTab === 'olive'}
            onClick={() => setActiveTab('olive')}
            icon={Brain}
            color="olive"
          >
            Technologie (Mental)
          </TabButton>
          
          <TabButton
            active={activeTab === 'terra'}
            onClick={() => setActiveTab('terra')}
            icon={Heart}
            color="terra"
          >
            Humain (Physique)
          </TabButton>
        </div>
      </motion.div>

      {/* INTRO DU TAB ACTIF */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm max-w-2xl mx-auto">
             <div className={`p-2 rounded-lg ${activeTab === 'olive' ? 'bg-olive-100 text-olive-700' : 'bg-terra-100 text-terra-700'}`}>
                {activeTab === 'olive' ? <Battery className="w-5 h-5"/> : <Heart className="w-5 h-5"/>}
             </div>
             <p className="text-sm font-medium text-gray-600 text-left">
               {activeTab === 'olive' 
                 ? "Des pods privatifs équipés des dernières technologies de neuro-relaxation. Zéro effort, résultat immédiat."
                 : "Des mains expertes pour dénouer les tensions accumulées par la posture de travail. Intensité adaptative."}
             </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* GRILLE DE SERVICES */}
      <div className="min-h-[400px]"> {/* Container avec hauteur min pour éviter le saut */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" // Ajusté pour 4 items max si besoin ou 2x2
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
                transition={{ delay: index * 0.1 }}
                className={currentServices.length <= 2 ? "lg:col-span-2" : "lg:col-span-1 md:col-span-2"} // Layout adaptatif
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FOOTER CTA */}
      <div className="mt-20 text-center">
        <p className="text-gray-400 text-sm mb-4 font-medium uppercase tracking-widest">
          Vous hésitez ?
        </p>
        <a href="#pricing" className="inline-block">
          <button className="group flex items-center gap-3 px-8 py-4 bg-charcoal text-white rounded-full font-bold hover:bg-olive-600 transition-all duration-300 shadow-xl hover:shadow-olive-600/30 hover:-translate-y-1">
            Voir nos formules découverte
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </a>
      </div>

    </Section>
  );
}