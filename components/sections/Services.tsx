'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Zap, Heart, Sparkles } from 'lucide-react';
import Section from '@/components/shared/Section';
import TabButton from '@/components/ui/TabButton';
import ServiceCard from '@/components/ui/ServiceCard';
import { servicesTech, servicesHuman } from '@/lib/data';

export default function Services() {
  const [activeTab, setActiveTab] = useState<'tech' | 'human'>('tech');
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const currentServices = activeTab === 'tech' ? servicesTech : servicesHuman;

  return (
    <Section id="services">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-human/20 bg-human/5 mb-6"
          >
            <Sparkles className="w-4 h-4 text-human" />
            <span className="text-sm font-medium text-human">6 Expériences Uniques</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="text-text-primary">Nos</span>{' '}
            <span className="gradient-text-human">Services</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Choisissez votre mode de récupération : technologie immersive ou expertise humaine
          </p>
        </motion.div>

        {/* --- TABS SYSTÈME --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-12"
        >
          <TabButton
            active={activeTab === 'tech'}
            onClick={() => setActiveTab('tech')}
            icon={Zap}
            color="tech"
          >
            <span className="hidden sm:inline">K-PODS</span>
            <span className="sm:hidden">TECH</span>
          </TabButton>
          
          <TabButton
            active={activeTab === 'human'}
            onClick={() => setActiveTab('human')}
            icon={Heart}
            color="human"
          >
            <span className="hidden sm:inline">K-MOVE</span>
            <span className="sm:hidden">HUMAIN</span>
          </TabButton>
        </motion.div>

        {/* --- DESCRIPTION DU TAB ACTIF --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-10 sm:mb-12"
          >
            <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto px-4">
              {activeTab === 'tech' 
                ? '🎧 Immersion totale dans nos pods de dernière génération. Technologie sans contact, récupération instantanée.'
                : '🧘 Nos experts diplômés vous accompagnent personnellement. Massage thérapeutique et yoga sur-mesure.'
              }
            </p>
          </motion.div>
        </AnimatePresence>

        {/* --- GRILLE DE SERVICES --- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {currentServices.map((service, idx) => (
              <ServiceCard 
                key={service.name} 
                service={service} 
                delay={idx * 0.1}
                activeColor={activeTab === 'tech' ? '#00FF94' : '#FFB347'}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* --- CTA VERS TARIFS --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <a href="#pricing">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 rounded-full bg-linear-to-r from-tech/20 to-human/20 border border-white/10 hover:border-white/20 text-white font-semibold transition-all duration-300 inline-flex items-center gap-2"
            >
              Voir les tarifs
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.button>
          </a>
        </motion.div>

      </div>
    </Section>
  );
}