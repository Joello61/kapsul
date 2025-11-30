'use client';

import { ArrowRight, PlayCircle, Zap, Timer, DollarSign, ThumbsUp, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-32 sm:pt-40 lg:pt-44 pb-24 overflow-hidden bg-cream"
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* === COLONNE GAUCHE : CONTENU === */}
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            
            {/* Badge premium */}
            <motion.div 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-olive-100 border-2 border-olive-400 shadow-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Zap className="w-5 h-5 text-olive-700" strokeWidth={2.5} />
              <span className="text-sm font-bold text-olive-800">
                Un Esprit Sain dans un Corps Sain
              </span>
            </motion.div>

            {/* Titres */}
            <div className="space-y-6">
              <motion.h1 
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-bold tracking-tight leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-olive-700">KAPSUL</span>
                <span className="text-terra-600">.</span>
              </motion.h1>
              
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-charcoal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                Moins cher qu&apos;un psy,<br />
                <span className="text-terra-600">plus efficace qu&apos;une sieste.</span>
              </motion.h2>
            </div>

            {/* Sous-titre */}
            <motion.p 
              className="text-xl sm:text-2xl text-gray-700 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              10h/jour devant un écran ?{' '}
              <span className="text-olive-700 font-bold">Récupérez</span> en 20 minutes avec nos{' '}
              <span className="text-olive-700 font-bold">pods immersifs</span> et{' '}
              <span className="text-terra-600 font-bold">soins experts</span>.
            </motion.p>

            {/* Stats Cards optimisées */}
            <motion.div 
              className="flex flex-wrap gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {[
                { 
                  icon: DollarSign, 
                  val: '12€', 
                  label: 'la séance',
                  bgColor: 'bg-olive-100',
                  iconColor: 'text-olive-700'
                },
                { 
                  icon: Timer, 
                  val: '20min', 
                  label: 'de détente',
                  bgColor: 'bg-terra-100',
                  iconColor: 'text-terra-700'
                },
                { 
                  icon: ThumbsUp, 
                  val: '100%', 
                  label: 'satisfaction',
                  bgColor: 'bg-beige-100',
                  iconColor: 'text-beige-500'
                }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + (i * 0.1) }}
                >
                  <div className={`w-14 h-14 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                    <stat.icon className={`w-7 h-7 ${stat.iconColor}`} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-charcoal">
                      {stat.val}
                    </div>
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs premium */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <Link href="#pricing" className="flex-1 sm:flex-initial">
                <button className="bg-olive-600 text-white w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 shadow-md hover:bg-olive-700 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out active:scale-95">
                  <span>Réserver maintenant</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </button>
              </Link>

              <Link href="#concept" className="flex-1 sm:flex-initial">
                <button className="bg-white border-2 border-olive-400 text-olive-700 w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 shadow-sm hover:bg-olive-50 hover:border-olive-600 hover:shadow-md transition-all duration-300 active:scale-95">
                  <PlayCircle className="w-5 h-5" strokeWidth={2.5} />
                  <span>Le concept</span>
                </button>
              </Link>
            </motion.div>

            {/* Social Proof optimisé */}
            <motion.div 
              className="flex items-center gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              <div className="flex -space-x-4">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-12 h-12 rounded-full bg-linear-to-br from-olive-200 to-terra-200 border-3 border-white flex items-center justify-center text-sm font-bold text-charcoal shadow-md"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-base text-gray-700 font-medium">
                Rejoignez <span className="text-olive-700 font-bold">500+ pros</span> de la tech
              </div>
            </motion.div>

          </motion.div>

          {/* === COLONNE DROITE : MÉDIA === */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            
            {/* Container principal */}
            <div className="relative w-full rounded-3xl overflow-hidden bg-sand shadow-2xl" style={{ aspectRatio: '4/5' }}>

              <Image
                src="/images/hero-image.jpg"
                alt="Espace Kapsul - Bien-être urbain"
                fill
                className={`object-cover transition-all duration-1000 ease-out ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority
                onLoad={() => setImageLoaded(true)}
              />

              {/* Overlay gradient premium */}
              <div className="absolute inset-0 bg-linear-to-t from-charcoal/90 via-charcoal/30 to-transparent pointer-events-none" />

              {/* Card flottante "En ce moment" */}
              {imageLoaded && (
                <motion.div 
                  className="absolute bottom-8 left-6 right-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-gray-100 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-bold text-charcoal">En ce moment</span>
                      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500 shadow-sm">
                        <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                        <span className="text-white text-xs font-bold uppercase">Live</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-olive-600 flex items-center justify-center text-white shadow-md">
                        <Zap className="w-8 h-8" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <div className="text-lg font-bold text-charcoal">K-ESCAPE VR</div>
                        <div className="text-sm text-gray-700 font-medium">Session immersive active</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Badge "Nouveau" premium */}
              {imageLoaded && (
                <motion.div 
                  className="absolute top-8 right-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <div className="px-5 py-2.5 rounded-full bg-terra-600 text-white font-bold text-sm flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" strokeWidth={0} />
                    <span>Nouveau</span>
                  </div>
                </motion.div>
              )}

              {/* Loading skeleton premium */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-linear-to-br from-sand via-cream to-beige-100 animate-pulse" />
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}