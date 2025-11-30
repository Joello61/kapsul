'use client';

import { ArrowRight, PlayCircle, Zap, Timer, Star } from 'lucide-react';
import Link from 'next/link';
import { cubicBezier, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Variantes d'animation pour un orchestrage fluide
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: cubicBezier(0.22, 1, 0.36, 1) } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-cream"
    >
      {/* Background Elements subtils */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-linear-to-b from-olive-100/30 to-transparent blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-linear-to-t from-terra-100/30 to-transparent blur-3xl rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* === COLONNE GAUCHE : CONTENU (7 cols) === */}
          <motion.div 
            className="lg:col-span-7 space-y-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge premium */}
            <motion.div variants={fadeInUp} className="inline-block">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-olive-100 shadow-sm hover:shadow-md transition-shadow">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-olive-500"></span>
                </span>
                <span className="text-sm font-bold text-olive-800 tracking-wide">
                  Nouveau à Toulouse
                </span>
              </div>
            </motion.div>

            {/* Titres Impactants */}
            <div className="space-y-4">
              <motion.h1 variants={fadeInUp} className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-charcoal">
                Recharger.<br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-olive-600 to-olive-800">
                  Performer.
                </span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-xl font-medium">
                Le premier espace de récupération urbaine. <br className="hidden sm:block" />
                <span className="text-olive-700 font-bold">20 minutes</span> pour régénérer votre corps et votre esprit.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link href="#pricing" className="w-full sm:w-auto">
                <button className="group relative w-full sm:w-auto bg-charcoal text-white px-8 py-5 rounded-full font-bold text-lg shadow-xl shadow-charcoal/20 hover:bg-olive-700 hover:shadow-olive-700/30 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 overflow-hidden">
                  <span className="relative z-10">Réserver ma session</span>
                  <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                  {/* Effet shimmer */}
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent z-0" />
                </button>
              </Link>

              <Link href="#concept" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-5 rounded-full font-bold text-lg text-charcoal bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95">
                  <PlayCircle className="w-5 h-5 text-gray-400 group-hover:text-charcoal" strokeWidth={2} />
                  <span>Le concept</span>
                </button>
              </Link>
            </motion.div>

            {/* Social Proof + Stats */}
            <motion.div variants={fadeInUp} className="pt-8 border-t border-gray-200/60 flex flex-wrap gap-8 sm:gap-12 items-center">
              {/* Stats rapides */}
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-charcoal font-heading leading-none">12€</span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">La séance</span>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-charcoal font-heading leading-none">20<span className="text-lg align-top">min</span></span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Durée idéale</span>
                </div>
              </div>

              {/* Satisfaction */}
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-2xl border border-gray-100">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden relative">
                       {/* Placeholder avatar gradient */}
                       <div className={`absolute inset-0 bg-linear-to-br from-gray-300 to-gray-400 opacity-${i*30 + 40}`} />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-400 text-xs">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <span className="text-xs font-bold text-gray-600">Recommandé par 500+ clients</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* === COLONNE DROITE : VISUEL HERO (5 cols) === */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main Image Container */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-100 aspect-4/5 sm:aspect-square lg:aspect-4/5 group">
              
              <Image
                src="/images/hero-image.jpg"
                alt="Espace Kapsul - Détente et VR"
                fill
                className={`
                  object-cover transition-all duration-1000 ease-out
                  ${imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}
                  group-hover:scale-105
                `}
                priority
                onLoad={() => setImageLoaded(true)}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Card: "Live Activity" */}
              <motion.div 
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/40"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-olive-100 flex items-center justify-center text-olive-600 shrink-0">
                    <Timer className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-0.5">En ce moment</div>
                    <div className="font-bold text-charcoal flex items-center gap-2">
                      Session K-Sleep
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                  </div>
                  <div className="ml-auto font-heading font-bold text-xl text-olive-700">
                    -85%
                    <span className="text-xs text-gray-400 font-normal block text-right">Stress</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge: "Tech" */}
              <motion.div
                className="absolute top-6 right-6"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <div className="w-16 h-16 rounded-full bg-terra-500 text-white flex flex-col items-center justify-center font-bold text-xs shadow-lg border-4 border-white/20 backdrop-blur-sm">
                  <Zap className="w-5 h-5 mb-0.5 fill-white" />
                  Tech
                </div>
              </motion.div>

            </div>

            {/* Background Decorative Blob behind image */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-olive-200/30 rounded-full blur-3xl opacity-60 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}