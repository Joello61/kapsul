'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from '@/components/shared/Section';
import BentoCard from '@/components/ui/BentoCard';
import { problems, solutions } from '@/lib/data';
import { TrendingUp, ArrowRight } from 'lucide-react';

export default function Concept() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const problemImages = [
    '/images/back-pain.jpg',      // Mal de dos
    '/images/stress.jpg',          // Stress
    '/images/eye-strain.jpg'       // Fatigue visuelle
  ];

  return (
    <Section id="concept">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* EN-TÊTE */}
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
            <TrendingUp className="w-4 h-4 text-tech" />
            <span className="text-sm font-medium text-tech">Innovation Hybride</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight">
            <span className="text-text-primary">Le Concept</span>
            <br />
            <span className="gradient-text-tech">Tech & Touch</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Votre corps et votre esprit méritent mieux qu'un café et une chaise de bureau
          </p>
        </motion.div>

        {/* BENTO GRID AVEC IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 auto-rows-fr">
          
          {/* PROBLÈMES (avec images) */}
          {problems.map((problem, idx) => (
            <BentoCard
              key={problem.title}
              title={problem.title}
              desc={problem.desc}
              image={problemImages[idx]}
              imagePosition="top"
              className="lg:col-span-2 min-h-[300px]"
              delay={0.1 * (idx + 1)}
            />
          ))}
          
          {/* SOLUTION PRINCIPALE (avec image de fond) */}
          <BentoCard
            title="La Solution KAPSUL"
            desc="L'alliance parfaite entre haute technologie et expertise humaine"
            image="/images/kapsul-space.jpg"
            imagePosition="background"
            className="lg:col-span-6 min-h-[400px]"
            highlight={true}
            delay={0.5}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-6 relative z-10">
              {solutions.map((solution, idx) => {
                const Icon = solution.icon;
                return (
                  <motion.div 
                    key={solution.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + (idx * 0.1) }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-4 p-4 sm:p-6 rounded-xl bg-bg-ultra-dark/80 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <motion.div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 relative overflow-hidden"
                      style={{ backgroundColor: `${solution.color}15` }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    >
                      <Icon 
                        className="w-7 h-7 relative z-10" 
                        style={{ color: solution.color }} 
                      />
                      
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ 
                          background: `radial-gradient(circle, ${solution.color}40 0%, transparent 70%)`,
                          filter: 'blur(10px)'
                        }}
                      />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h4 
                        className="font-bold text-lg sm:text-xl mb-2 group-hover:translate-x-1 transition-transform duration-300"
                        style={{ color: solution.color }}
                      >
                        {solution.title}
                      </h4>
                      <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                        {solution.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 pt-6 border-t border-white/10 relative z-10"
            >
              <a 
                href="#services" 
                className="group inline-flex items-center gap-2 text-tech hover:text-human transition-colors duration-300 font-medium"
              >
                Découvrir nos services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </BentoCard>
        </div>

        {/* STATISTIQUES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { value: '12€', label: 'Prix unique', color: 'tech' },
            { value: '20min', label: 'Séance moyenne', color: 'human' },
            { value: '100m²', label: 'Espace modulaire', color: 'tech' },
            { value: '7j/7', label: 'Ouvert', color: 'human' }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              viewport={{ once: true }}
              className="glass rounded-xl p-4 sm:p-6 text-center hover:border-tech/30 transition-all duration-300 group"
            >
              <div 
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: stat.color === 'tech' ? '#00FF94' : '#FFB347' }}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  );
}