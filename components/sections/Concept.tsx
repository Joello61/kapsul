'use client';

import Section from '@/components/shared/Section';
import BentoCard from '@/components/ui/BentoCard';
import { problems } from '@/lib/data';
import { TrendingUp, ArrowRight, Zap, Heart } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Concept() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Mapping des images pour les cartes problèmes
  const problemImages = [
    '/images/back-pain.jpg',
    '/images/stress.jpg',
    '/images/eye-strain.jpg'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <Section id="concept" background="white">
      
      {/* HEADER DE SECTION */}
      <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-olive-50 border border-olive-200 mb-6"
        >
          <TrendingUp className="w-4 h-4 text-olive-600" />
          <span className="text-xs font-bold text-olive-800 uppercase tracking-wide">Le constat est clair</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight"
        >
          Pourquoi sommes-nous tous <br/>
          <span className="text-terra-600">si fatigués ?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 leading-relaxed"
        >
          La vie urbaine moderne impose un rythme que notre corps n&apos;est pas conçu pour suivre. 
          Kapsul répond à ces trois fléaux majeurs.
        </motion.p>
      </div>

      {/* BENTO GRID */}
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[minmax(280px,auto)]"
      >
        
        {/* === LES PROBLÈMES (Petites cartes) === */}
        {problems.map((problem, idx) => (
          <motion.div key={problem.title} variants={itemVariants} className="lg:col-span-2">
            <BentoCard
              title={problem.title}
              desc={problem.desc}
              image={problemImages[idx]}
              imagePosition="top" // Image en haut pour bien illustrer
              className="h-full border-gray-200"
            />
          </motion.div>
        ))}
        
        {/* === LA SOLUTION (Grande carte majeure) === */}
        <motion.div variants={itemVariants} className="lg:col-span-6 mt-6 md:mt-0">
          <BentoCard
            title="La Réponse Kapsul"
            desc="Une fusion inédite entre technologies immersives et soins manuels ancestraux pour une récupération totale."
            image="/images/kapsul-space.jpg"
            imagePosition="background"
            highlight={true}
            className="min-h-[500px] md:min-h-[600px] shadow-2xl shadow-olive-900/10"
          >
            {/* Contenu interne de la carte Solution */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              
              {/* Feature 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-olive-500 flex items-center justify-center text-white">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-lg">Tech</h4>
                </div>
                <p className="text-sm text-gray-200 leading-relaxed">
                  Réalité virtuelle, luminothérapie et sons binauraux pour pirater votre cerveau vers la détente.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-terra-500 flex items-center justify-center text-white">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-lg">Touch</h4>
                </div>
                <p className="text-sm text-gray-200 leading-relaxed">
                  L&apos;expertise humaine de nos praticiens pour dénouer les tensions physiques réelles.
                </p>
              </div>

            </div>

            <div className="mt-10">
              <button className="bg-white text-charcoal hover:bg-olive-50 font-bold py-4 px-8 rounded-full transition-all flex items-center gap-2 group shadow-lg">
                Découvrir l&apos;expérience
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </BentoCard>
        </motion.div>

      </motion.div>
    </Section>
  );
}