'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import Concept from '@/components/sections/Concept';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Space from '@/components/sections/Space';

export default function Home() {
  // Progress bar au scroll avec animation fluide
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* SCROLL PROGRESS BAR Premium */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-linear-to-r from-emerald-400 via-coral-400 to-lavender-400 z-100 origin-left shadow-lg"
        style={{ scaleX }}
      >
        {/* Shimmer effect sur la progress bar */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent"
          animate={{
            x: ['-100%', '100%']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0.5
          }}
        />
      </motion.div>

      <main className="min-h-screen relative overflow-hidden">
        
        {/* Background Effects Globaux */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Pattern décoratif subtil */}
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 2px 2px, var(--color-emerald-500) 1px, transparent 0),
                radial-gradient(circle at 2px 2px, var(--color-coral-500) 1px, transparent 0)
              `,
              backgroundSize: '80px 80px, 120px 120px',
              backgroundPosition: '0 0, 40px 60px'
            }}
          />

          {/* Blurs décoratifs animés */}
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-[120px]"
            style={{
              background: 'radial-gradient(circle, var(--color-emerald-300) 0%, transparent 70%)'
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-[120px]"
            style={{
              background: 'radial-gradient(circle, var(--color-coral-300) 0%, transparent 70%)'
            }}
            animate={{
              x: [0, -50, 0],
              y: [0, -30, 0],
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px]"
            style={{
              background: 'radial-gradient(circle, var(--color-lavender-300) 0%, transparent 70%)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>

        {/* Sections avec animations d'entrée automatiques (useInView) */}
        <div className="relative z-10 flex flex-col">
          <Hero />
          
          {/* Séparateur décoratif entre Hero et Concept */}
          <motion.div 
            className="relative h-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-1 h-16 rounded-full bg-linear-to-b from-transparent via-emerald-400 to-transparent"
                animate={{
                  height: ['40px', '64px', '40px'],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          <Concept />
          <Services />
          <Pricing />
          <Space />
        </div>
      </main>
    </>
  );
}