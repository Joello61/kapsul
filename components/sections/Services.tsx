'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Zap, Heart, Sparkles, ArrowRight } from 'lucide-react';
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
    <Section id="services" variant="pattern">
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
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-coral-600" />
            </motion.div>
            <span className="text-sm font-bold gradient-coral">6 Expériences Uniques</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 tracking-tight">
            Nos <span className="gradient-sunset">Services</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-charcoal max-w-3xl mx-auto leading-relaxed font-medium">
            Choisissez votre mode de récupération : <span className="gradient-emerald font-bold">technologie immersive</span> ou <span className="gradient-coral font-bold">expertise humaine</span>.
          </p>
        </motion.div>

        {/* TABS SYSTÈME Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mb-16"
        >
          <TabButton
            active={activeTab === 'tech'}
            onClick={() => setActiveTab('tech')}
            icon={Zap}
            color="tech"
          >
            <span className="hidden sm:inline">K-PODS (Tech)</span>
            <span className="sm:hidden">TECH</span>
          </TabButton>
          
          <TabButton
            active={activeTab === 'human'}
            onClick={() => setActiveTab('human')}
            icon={Heart}
            color="human"
          >
            <span className="hidden sm:inline">K-MOVE (Humain)</span>
            <span className="sm:hidden">HUMAIN</span>
          </TabButton>
        </motion.div>

        {/* DESCRIPTION DU TAB ACTIF Premium */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <div className="glass rounded-3xl px-8 py-6 max-w-3xl mx-auto border-2 border-white">
              <div className="flex items-center justify-center gap-4 mb-4">
                {activeTab === 'tech' ? (
                  <>
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", bounce: 0.6 }}
                      className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-emerald"
                    >
                      <Zap className="w-6 h-6 text-white" fill="white" />
                    </motion.div>
                    <h3 className="text-2xl font-extrabold gradient-emerald">K-PODS Technology</h3>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", bounce: 0.6 }}
                      className="w-12 h-12 rounded-xl bg-linear-to-br from-coral-400 to-coral-600 flex items-center justify-center shadow-coral"
                    >
                      <Heart className="w-6 h-6 text-white" fill="white" />
                    </motion.div>
                    <h3 className="text-2xl font-extrabold gradient-coral">K-MOVE Human</h3>
                  </>
                )}
              </div>
              <p className="text-lg text-charcoal font-medium">
                {activeTab === 'tech' 
                  ? 'Immersion totale dans nos pods de dernière génération. Technologie sans contact, récupération instantanée.'
                  : 'Nos experts diplômés vous accompagnent personnellement. Massage thérapeutique et yoga sur-mesure.'
                }
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* GRILLE DE SERVICES Premium */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {currentServices.map((service, idx) => (
              <ServiceCard 
                key={service.name} 
                service={service} 
                delay={idx * 0.1}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA VERS TARIFS Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="#pricing">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group px-10 py-5 rounded-2xl glass border-2 border-emerald-300 text-ink font-bold text-lg transition-all duration-300 inline-flex items-center gap-4 hover:bg-emerald-50"
            >
              <span>Voir les tarifs</span>
              <motion.div
                className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-400 to-emerald-600 flex items-center justify-center"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5 text-white" strokeWidth={3} />
              </motion.div>
            </motion.button>
          </a>
        </motion.div>

      </div>
    </Section>
  );
}

