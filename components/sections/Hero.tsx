'use client';

import { ArrowRight, PlayCircle, Zap, Timer, Star, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { cubicBezier, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

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
      {/* Background Elements - Palette OKLCH stricte */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-olive-100/40 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-terra-100/40 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* === COLONNE GAUCHE : CONTENU === */}
          <motion.div 
            className="lg:col-span-7 space-y-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge premium */}
            <motion.div variants={fadeInUp} className="inline-block">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-olive-200/60 shadow-sm hover:shadow-md hover:border-olive-300/80 transition-all">
                <span className="flex h-4 w-4 relative">
                  <Sparkles className="w-4 h-4 text-olive-600" />
                </span>
                <span className="text-sm font-bold text-olive-800 tracking-wide">
                  Un Corps sain dans un Esprit sain
                </span>
              </div>
            </motion.div>

            {/* Titres Impactants */}
            <div className="space-y-6">
              <motion.h1 
                variants={fadeInUp} 
                className="font-heading text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-terra-600 via-terra-700 to-terra-800">
                  Kapsul.
                </span>
              </motion.h1>

              <motion.h3 
                variants={fadeInUp} 
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[0.95]">
                <span className="text-olive-700">
                  Moins cher qu&apos;une thérapie, plus efficace qu&apos;une sieste.
                </span>
              </motion.h3>
              
              <motion.p 
                variants={fadeInUp} 
                className="text-xl sm:text-2xl text-charcoal/70 leading-relaxed max-w-xl font-medium"
              >
                Le premier espace de récupération urbaine. <br className="hidden sm:block" />
                <span className="text-olive-700 font-bold">20 minutes</span> pour régénérer votre corps et votre esprit.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link href="#pricing" className="w-full sm:w-auto">
                <button className="group relative w-full sm:w-auto bg-charcoal text-white px-8 py-5 rounded-full font-bold text-lg shadow-xl shadow-charcoal/20 hover:bg-olive-700 hover:shadow-2xl hover:shadow-olive-700/30 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 overflow-hidden">
                  <span className="relative z-10">Réserver ma session</span>
                  <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </button>
              </Link>

              <Link href="#concept" className="w-full sm:w-auto">
                <button className="group w-full sm:w-auto px-8 py-5 rounded-full font-bold text-lg text-charcoal bg-white border border-olive-200/60 hover:bg-olive-50 hover:border-olive-300 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 shadow-sm hover:shadow-md">
                  <PlayCircle className="w-5 h-5 text-charcoal/60 group-hover:text-olive-700 transition-colors" strokeWidth={2} />
                  <span>Le concept</span>
                </button>
              </Link>
            </motion.div>

            {/* Social Proof + Stats */}
            <motion.div variants={fadeInUp} className="pt-8 border-t border-olive-200/50 flex flex-wrap gap-8 sm:gap-12 items-center">
              {/* Stats rapides */}
              <div className="flex gap-8">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-charcoal font-heading leading-none">12€</span>
                  <span className="text-xs font-bold text-charcoal/50 uppercase tracking-wider mt-1">La séance</span>
                </div>
                <div className="w-px h-10 bg-olive-200/60" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-charcoal font-heading leading-none">20<span className="text-lg align-top">min</span></span>
                  <span className="text-xs font-bold text-charcoal/50 uppercase tracking-wider mt-1">Durée idéale</span>
                </div>
              </div>

              {/* Satisfaction */}
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-3 rounded-2xl border border-olive-200/50 shadow-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-olive-100 border-2 border-white overflow-hidden relative">
                       <div className="absolute inset-0 bg-linear-to-br from-olive-200 to-olive-300" style={{ opacity: (i * 0.2 + 0.4) }} />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-olive-600 text-xs gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" strokeWidth={0} />)}
                  </div>
                  <span className="text-xs font-bold text-charcoal/70">Recommandé par 500+ clients</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* === COLONNE DROITE : VISUEL HERO === */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main Image Container */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-olive-900/10 bg-olive-100 aspect-4/5 sm:aspect-square lg:aspect-4/5 group">
              
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
              
              {/* Overlay Gradient - Utilise charcoal */}
              <div className="absolute inset-0 bg-linear-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Card: "Live Activity" */}
              <motion.div 
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl shadow-charcoal/10 border border-white/50"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-olive-100 flex items-center justify-center text-olive-700 shrink-0 shadow-sm">
                    <Timer className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-charcoal/50 uppercase tracking-wider mb-1">En ce moment</div>
                    <div className="font-bold text-charcoal flex items-center gap-2">
                      Session K-Sleep
                      <span className="w-2 h-2 rounded-full bg-olive-600 animate-pulse shadow-sm shadow-olive-600/50" />
                    </div>
                  </div>
                  <div className="font-heading font-bold text-2xl text-olive-700">
                    -85%
                    <span className="text-xs text-charcoal/40 font-normal block text-right mt-0.5">Stress</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge: "Tech" */}
              <motion.div
                className="absolute top-6 right-6"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
              >
                <div className="w-16 h-16 rounded-full bg-terra-500 text-white flex flex-col items-center justify-center font-bold text-xs shadow-xl shadow-terra-500/30 border-4 border-white/30 backdrop-blur-sm">
                  <Zap className="w-5 h-5 mb-0.5 fill-white" strokeWidth={0} />
                  Tech
                </div>
              </motion.div>

            </div>

            {/* Background Decorative Blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-olive-200/40 rounded-full blur-[100px] pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}