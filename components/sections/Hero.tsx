'use client';

import {
  ArrowRight,
  PlayCircle,
  Star,
  Sparkles,
  Clock,
  Shield,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import { cubicBezier, motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useRef } from 'react';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const microBenefits = [
    { icon: Clock, text: 'Résultats immédiats', color: 'text-sage-600' },
    { icon: Shield, text: 'Sans engagement', color: 'text-terra-600' },
    { icon: Zap, text: 'Réservation instantanée', color: 'text-sage-600' },
  ];

  const trustIndicators = [
    'Scientifiquement prouvé',
    'Équipe certifiée',
    'Hygiène irréprochable',
  ];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-stone"
    >
      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* === COLONNE GAUCHE : CONTENU === */}
          <motion.div
            className="space-y-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge épuré */}
            <motion.div variants={fadeInUp} className="inline-block">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border border-sage-200/30">
                <Sparkles className="w-4 h-4 text-sage-600" strokeWidth={2} />
                <span className="text-sm font-semibold text-charcoal tracking-wide">
                  Votre sanctuaire urbain à Toulouse
                </span>
              </div>
            </motion.div>

            {/* Titres - Plus épurés et élégants */}
            <div className="space-y-6">
              <motion.h1
                variants={fadeInUp}
                className="font-sans text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-charcoal"
              >
                Réparer le corps.
                <br />
                <span className="text-sage-600">Apaiser l&apos;esprit.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-lg"
              >
                Dans un monde qui ne s&apos;arrête jamais, offrez-vous une pause
                qui compte.
                <strong className="font-semibold text-charcoal">
                  {' '}
                  20 minutes
                </strong>{' '}
                suffisent pour transformer votre journée.
              </motion.p>

              {/* Nouveau : Micro-bénéfices */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 pt-2"
              >
                {microBenefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream border border-sage-100"
                  >
                    <benefit.icon
                      className={`w-4 h-4 ${benefit.color}`}
                      strokeWidth={2}
                    />
                    <span className="text-sm font-medium text-charcoal">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* CTAs - Plus raffinés */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group relative w-full sm:w-auto bg-sage-600 text-white px-8 py-4 rounded-full font-semibold text-base shadow-md hover:shadow-lg hover:bg-sage-700 transition-all duration-300 active:scale-[0.98] flex items-center justify-center gap-2.5 overflow-hidden">
                <span className="relative z-10">
                  Réserver ma première pause
                </span>
                <ArrowRight
                  className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1"
                  strokeWidth={2}
                />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/10 to-transparent" />
              </button>

              <button className="group w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-base text-charcoal glass border border-sage-100 hover:border-sage-200 transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.98]">
                <PlayCircle
                  className="w-5 h-5 text-sage-600 transition-colors"
                  strokeWidth={2}
                />
                <span>Visite virtuelle 360°</span>
              </button>
            </motion.div>

            {/* Nouveau : Réassurance légère */}
            <motion.div variants={fadeInUp} className="pt-4 space-y-3">
              <div className="flex items-center gap-6 text-sm text-gray-600">
                {trustIndicators.map((indicator, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2
                      className="w-4 h-4 text-sage-600"
                      strokeWidth={2}
                    />
                    <span>{indicator}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats - Design minimaliste et élégant */}
            <motion.div
              variants={fadeInUp}
              className="pt-6 flex flex-wrap gap-8 items-center border-t border-sage-200/50"
            >
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="font-sans text-4xl font-semibold text-charcoal leading-none mb-1">
                    30<span className="text-2xl">min</span>
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                    Par séance
                  </div>
                </div>

                <div className="w-px h-12 bg-sage-200/50" />

                <div className="text-center">
                  <div className="font-sans text-4xl font-semibold text-sage-600 leading-none mb-1">
                    6
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                    Protocoles
                  </div>
                </div>

                <div className="w-px h-12 bg-sage-200/50" />

                <div className="text-center">
                  <div className="font-sans text-4xl font-semibold text-terra-600 leading-none mb-1">
                    12€
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                    Dès 10h
                  </div>
                </div>
              </div>

              {/* Social proof discret */}
              <div className="flex items-center gap-2.5 pl-6 border-l border-sage-200/50">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-linear-to-br from-sage-200 to-sage-300 border-2 border-stone flex items-center justify-center text-xs font-semibold text-sage-700"
                    >
                      {i === 4 ? '+' : ''}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-sage-500 gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-current"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600 font-medium">
                    +500 toulousains conquis
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* === COLONNE DROITE : VISUEL === */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Container principal avec coins très arrondis */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-charcoal/5 bg-sage-100 aspect-4/5 group">
              <Image
                src="/images/hero-image.jpg"
                alt="Espace KAPSUL - Cocon de décompression"
                fill
                className={`
                  object-cover transition-all duration-1000 ease-out
                  ${
                    imageLoaded
                      ? 'scale-100 opacity-100'
                      : 'scale-105 opacity-0'
                  }
                  group-hover:scale-[1.02]
                `}
                priority
                onLoad={() => setImageLoaded(true)}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Overlay doux */}
              <div className="absolute inset-0 bg-linear-to-t from-charcoal/30 via-transparent to-transparent pointer-events-none" />

              {/* Floating Card - Session en cours */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5 shadow-lg border border-white/40"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sage-600/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-sage-700" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-charcoal/60 uppercase tracking-wider mb-0.5">
                      Session en cours
                    </div>
                    <div className="font-semibold text-charcoal flex items-center gap-2">
                      K-ESCAPE Immersif
                      <span className="w-1.5 h-1.5 rounded-full bg-sage-600 animate-pulse" />
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-sans font-semibold text-2xl text-sage-700">
                      -78%
                    </div>
                    <div className="text-xs text-charcoal/50">Cortisol</div>
                  </div>
                </div>
              </motion.div>

              {/* Badge flottant - Tech+Touch */}
              <motion.div
                className="absolute top-6 right-6"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, type: 'spring', stiffness: 180 }}
              >
                <div className="glass px-4 py-2 rounded-full backdrop-blur-md border border-white/30">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-terra-500 animate-pulse" />
                    <span className="text-sm font-semibold text-charcoal">
                      Tech+Touch
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Nouveau : Badge disponibilité */}
              <motion.div
                className="absolute top-6 left-6"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.4, type: 'spring', stiffness: 180 }}
              >
                <div className="glass px-4 py-2 rounded-full backdrop-blur-md border border-white/30">
                  <div className="flex items-center gap-2">
                    <CheckCircle2
                      className="w-4 h-4 text-sage-600"
                      strokeWidth={2}
                    />
                    <span className="text-sm font-semibold text-charcoal">
                      Dispo aujourd&apos;hui
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
