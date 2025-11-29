'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from '@/components/shared/Section';
import BentoCard from '@/components/ui/BentoCard';
import { problems, solutions } from '@/lib/data';
import { TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

export default function Concept() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  const problemImages = [
    '/images/back-pain.jpg',
    '/images/stress.jpg',
    '/images/eye-strain.jpg'
  ];

  return (
    <Section id="concept" variant="pattern">
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
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-emerald border-2 border-emerald-300 mb-8"
          >
            <TrendingUp className="w-5 h-5 text-emerald-600" strokeWidth={2.5} />
            <span className="text-sm font-bold gradient-emerald">Innovation Hybride</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 tracking-tight">
            Le Concept <span className="gradient-emerald">Tech & Touch</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-charcoal max-w-3xl mx-auto leading-relaxed font-medium">
            Votre corps et votre esprit méritent mieux qu'un café et une chaise de bureau.
          </p>
        </motion.div>

        {/* BENTO GRID Premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 auto-rows-fr">
          
          {/* PROBLÈMES avec images */}
          {problems.map((problem, idx) => (
            <BentoCard
              key={problem.title}
              title={problem.title}
              desc={problem.desc}
              image={problemImages[idx]}
              imagePosition="top"
              className="lg:col-span-2 min-h-[380px]"
              delay={0.1 * (idx + 1)}
            />
          ))}
          
          {/* SOLUTION PRINCIPALE Hero Card */}
          <BentoCard
            title="La Solution KAPSUL"
            desc="L'alliance parfaite entre haute technologie et expertise humaine."
            image="/images/kapsul-space.jpg"
            imagePosition="background"
            className="lg:col-span-6 min-h-[600px]"
            highlight={true}
            delay={0.5}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 relative z-10">
              {solutions.map((solution, idx) => {
                const Icon = solution.icon;
                return (
                  <motion.div 
                    key={solution.title}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    transition={{ duration: 0.5, delay: 0.6 + (idx * 0.1) }}
                    viewport={{ once: true }}
                    className="group p-6 rounded-3xl glass border-2 border-white cursor-pointer"
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 shadow-lg"
                      style={{ 
                        background: `linear-gradient(135deg, ${solution.color}20, ${solution.color}40)`
                      }}
                    >
                      <Icon 
                        className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12" 
                        style={{ color: solution.color }}
                        strokeWidth={2.5}
                      />
                    </div>
                    
                    <h4 
                      className="font-extrabold text-xl sm:text-2xl mb-3"
                      style={{ color: solution.color }}
                    >
                      {solution.title}
                    </h4>
                    <p className="text-base sm:text-lg text-white/90 leading-relaxed font-medium">
                      {solution.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="mt-10 pt-8 border-t-2 border-white/30 relative z-10"
            >
              <a 
                href="#services" 
                className="group inline-flex items-center gap-3 text-white font-bold text-lg hover:gap-5 transition-all duration-300"
              >
                <span>Découvrir nos services</span>
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" strokeWidth={3} />
                </motion.div>
              </a>
            </motion.div>
          </BentoCard>
        </div>

        {/* STATISTIQUES Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { value: '12€', label: 'Prix unique', gradient: 'from-[var(--color-emerald-400)] to-[var(--color-emerald-600)]' },
            { value: '20min', label: 'Séance moyenne', gradient: 'from-[var(--color-coral-400)] to-[var(--color-coral-600)]' },
            { value: '100m²', label: 'Espace modulaire', gradient: 'from-[var(--color-lavender-400)] to-[var(--color-lavender-600)]' },
            { value: '7j/7', label: 'Ouvert', gradient: 'from-[var(--color-emerald-400)] to-[var(--color-coral-500)]' }
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -6 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 text-center border-2 border-white cursor-pointer group"
            >
              <div 
                className={`text-4xl sm:text-5xl font-black mb-3 bg-linear-to-br ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-bold text-charcoal uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </Section>
  );
}