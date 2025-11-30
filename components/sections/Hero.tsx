'use client';

import { ArrowRight, PlayCircle, Zap, Timer, DollarSign, ThumbsUp, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-32 sm:pt-40 pb-20 overflow-hidden bg-cream"
    >
      <div className="px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* === COLONNE GAUCHE : CONTENU === */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-olive-100 border border-olive-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Zap className="w-4 h-4 text-olive-700" strokeWidth={2} />
              <span className="text-sm font-semibold text-olive-800">
                Un Esprit Sain dans un Corps Sain
              </span>
            </motion.div>

            {/* Titre Principal */}
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-olive-700">KAPSUL</span>
                <span className="text-terra-600">.</span>
              </motion.h1>
              
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-charcoal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Moins cher qu&apos;un psy,<br />
                <span className="text-terra-600">plus efficace qu&apos;une sieste.</span>
              </motion.h2>
            </div>

            {/* Sous-titre */}
            <motion.p 
              className="text-lg sm:text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              10h/jour devant un écran ?{' '}
              <span className="text-olive-700 font-semibold">Récupérez</span> en 20 minutes avec nos{' '}
              <span className="text-olive-700 font-semibold">pods immersifs</span> et{' '}
              <span className="text-terra-600 font-semibold">soins experts</span>.
            </motion.p>

            {/* Stats Cards */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
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
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-gray-100 shadow-sm transition-transform duration-250 hover:-translate-y-1"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                >
                  <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.iconColor}`} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-charcoal">
                      {stat.val}
                    </div>
                    <div className="text-xs text-gray-500 font-semibold uppercase">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Link href="#pricing" className="flex-1 sm:flex-initial">
                <button className="bg-olive-600 text-white w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 shadow-sm hover:bg-olive-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-250">
                  <span>Réserver maintenant</span>
                  <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </Link>

              <Link href="#concept" className="flex-1 sm:flex-initial">
                <button className="bg-transparent border-2 border-olive-400 text-olive-700 w-full sm:w-auto px-8 py-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 hover:bg-olive-50 hover:border-olive-600 transition-all duration-250">
                  <PlayCircle className="w-5 h-5" strokeWidth={2.5} />
                  <span>Le concept</span>
                </button>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-linear-to-br from-olive-200 to-terra-200 border-2 border-white flex items-center justify-center text-sm font-bold text-charcoal shadow-sm"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-700 font-medium">
                Rejoignez <span className="text-olive-700 font-bold">500+ pros</span> de la tech
              </div>
            </motion.div>

          </motion.div>

          {/* === COLONNE DROITE : MÉDIA === */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            
            {/* Container principal */}
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden bg-sand shadow-xl">

              <Image
                src="/images/hero-image.jpg"
                alt="Hero Image"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw"
                priority
                loading='eager'
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

              {/* Card flottante "En ce moment" */}
              <motion.div 
                  className="absolute bottom-6 left-6 right-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-gray-100 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-charcoal">En ce moment</span>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500 border border-green-400">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <span className="text-white text-xs font-bold uppercase">Live</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-olive-600 flex items-center justify-center text-white shadow-sm">
                        <Zap className="w-7 h-7" strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <div className="text-base font-bold text-charcoal">K-ESCAPE VR</div>
                        <div className="text-sm text-gray-700">Session immersive active</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

              {/* Badge "Nouveau" */}

                <motion.div 
                  className="absolute top-6 right-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <div className="px-4 py-2 rounded-full bg-terra-600 text-white font-bold text-sm flex items-center gap-2 shadow-md">
                    <span><Star className='' fill='yellow'/></span>
                    <span>Nouveau</span>
                  </div>
                </motion.div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}