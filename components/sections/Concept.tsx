'use client';

import Section from '@/components/shared/Section';
import BentoCard from '@/components/ui/BentoCard';
import { problems, solutions } from '@/lib/data';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { cubicBezier, motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Concept() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const problemImages = [
    '/images/back-pain.jpg',
    '/images/stress.jpg',
    '/images/eye-strain.jpg'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: cubicBezier(0, 0, 0.58, 1)
      }
    }
  };

  return (
    <Section id="concept">
      
      {/* EN-TÊTE */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-olive-100 border border-olive-300 mb-6">
          <TrendingUp className="w-5 h-5 text-olive-700" strokeWidth={2.5} />
          <span className="text-sm font-semibold text-olive-800">Innovation Hybride</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-charcoal">
          Le Concept <span className="text-olive-700">Tech & Touch</span>
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Votre corps et votre esprit méritent mieux qu&apos;un café et une chaise de bureau.
        </p>
      </motion.div>

      {/* BENTO GRID */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-fr mb-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        
        {/* PROBLÈMES avec images */}
        {problems.map((problem, idx) => (
          <motion.div
            key={problem.title}
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <BentoCard
              title={problem.title}
              desc={problem.desc}
              image={problemImages[idx]}
              imagePosition="top"
              className="h-full"
            />
          </motion.div>
        ))}
        
        {/* SOLUTION PRINCIPALE Hero Card */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-6"
        >
          <BentoCard
            title="La Solution KAPSUL"
            desc="L'alliance parfaite entre haute technologie et expertise humaine."
            image="/images/kapsul-space.jpg"
            imagePosition="background"
            className="min-h-[600px]"
            highlight={true}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <div 
                    key={solution.title}
                    className="group p-6 rounded-2xl bg-white/95 backdrop-blur-sm border border-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                      style={{ 
                        backgroundColor: `${solution.color}20`
                      }}
                    >
                      <Icon 
                        className="w-7 h-7" 
                        style={{ color: solution.color }}
                        strokeWidth={2.5}
                      />
                    </div>
                    
                    <h4 
                      className="font-bold text-lg sm:text-xl mb-2"
                      style={{ color: solution.color }}
                    >
                      {solution.title}
                    </h4>
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                      {solution.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-white/30">
              <a 
                href="#services" 
                className="group inline-flex items-center gap-2 text-white font-semibold text-base hover:gap-3 transition-all duration-300"
              >
                <span>Découvrir nos services</span>
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </a>
            </div>
          </BentoCard>
        </motion.div>
      </motion.div>

      {/* STATISTIQUES */}
      <motion.div 
        className="grid grid-cols-2 lg:grid-cols-4 gap-5"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {[
          { value: '12€', label: 'Prix unique', color: 'olive' },
          { value: '20min', label: 'Séance moyenne', color: 'terra' },
          { value: '100m²', label: 'Espace modulaire', color: 'beige' },
          { value: '7j/7', label: 'Ouvert', color: 'olive' }
        ].map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-md cursor-pointer"
          >
            <div 
              className={`
                text-3xl sm:text-4xl font-bold mb-2
                ${stat.color === 'olive' ? 'text-olive-700' : ''}
                ${stat.color === 'terra' ? 'text-terra-600' : ''}
                ${stat.color === 'beige' ? 'text-beige-500' : ''}
              `}
            >
              {stat.value}
            </div>
            <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

    </Section>
  );
}