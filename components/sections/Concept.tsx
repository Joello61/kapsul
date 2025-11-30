'use client';

import Section from '@/components/shared/Section';
import BentoCard from '@/components/ui/BentoCard';
import { problems } from '@/lib/data';
import { TrendingUp, ArrowRight, Zap, Heart } from 'lucide-react';
import { cubicBezier, motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Concept() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const problemImages = [
    '/images/back-pain.jpg',
    '/images/stress.jpg',
    '/images/eye-strain.jpg'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: cubicBezier(0.22, 1, 0.36, 1) } 
    }
  };

  return (
    <Section id="concept" background="white">
      
      {/* HEADER DE SECTION */}
      <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-olive-50 border border-olive-200/60 mb-6 shadow-sm"
        >
          <TrendingUp className="w-4 h-4 text-olive-600" strokeWidth={2.5} />
          <span className="text-xs font-bold text-olive-800 uppercase tracking-wide">Le constat est clair</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight tracking-tight"
        >
          Pourquoi sommes-nous tous 
          <span className="text-terra-600"> si fatigués ?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-charcoal/60 leading-relaxed max-w-2xl mx-auto"
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
        
        {/* === LES PROBLÈMES === */}
        {problems.map((problem, idx) => (
          <motion.div key={problem.title} variants={itemVariants} className="lg:col-span-2">
            <BentoCard
              title={problem.title}
              desc={problem.desc}
              image={problemImages[idx]}
              imagePosition="top"
              className="h-full"
            />
          </motion.div>
        ))}
        
        {/* === LA SOLUTION (Grande carte immersive) === */}
        <motion.div variants={itemVariants} className="lg:col-span-6 mt-6 md:mt-8">
          <BentoCard
            title="La Réponse Kapsul"
            desc="Une fusion inédite entre technologies immersives et soins manuels ancestraux pour une récupération totale."
            image="/images/kapsul-space.jpg"
            imagePosition="background"
            highlight={true}
            className="min-h-[500px] md:min-h-[600px]"
          >
            {/* Features internes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              
              {/* Feature 1: Tech */}
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-olive-500 flex items-center justify-center text-white shadow-lg shadow-olive-500/30 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <h4 className="font-bold text-white text-lg">Tech</h4>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  Réalité virtuelle, luminothérapie et sons binauraux pour pirater votre cerveau vers la détente.
                </p>
              </div>

              {/* Feature 2: Touch */}
              <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-terra-500 flex items-center justify-center text-white shadow-lg shadow-terra-500/30 group-hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6" strokeWidth={2.5} />
                  </div>
                  <h4 className="font-bold text-white text-lg">Touch</h4>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  L&apos;expertise humaine de nos praticiens pour dénouer les tensions physiques réelles.
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-10">
              <button className="group bg-white text-charcoal hover:bg-olive-50 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-3 shadow-xl shadow-white/20 hover:shadow-2xl hover:scale-105 active:scale-95">
                Découvrir l&apos;expérience
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </button>
            </div>
          </BentoCard>
        </motion.div>

      </motion.div>
    </Section>
  );
}