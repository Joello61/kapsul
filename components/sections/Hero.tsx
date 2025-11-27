'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, PlayCircle, Zap, Timer, DollarSign, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 30]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-bg-ultra-dark">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(237,237,237,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(237,237,237,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,255,148,0.2) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />
      </div>

      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6"
      >
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* === COLONNE GAUCHE : CONTENU === */}
          <div className="space-y-6 sm:space-y-8">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/3 backdrop-blur-md hover:bg-white/6 hover:border-white/20 transition-all duration-300 group">
                <Sparkles className="w-4 h-4 text-tech animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-text-secondary">
                  Le 1er espace hybride Tech & Touch
                </span>
                <Zap className="w-3 h-3 text-human opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>

            {/* Titre Principal */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05]">
                <span className="inline-block gradient-text-tech">
                  Esprit Tech.
                </span>
                <br />
                <span className="inline-block gradient-text-human mt-2">
                  Corps Sain.
                </span>
              </h1>
            </motion.div>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl"
            >
              10h/jour devant un écran ?{' '}
              <span className="text-white font-medium">Récupérez</span> en 20 minutes avec nos{' '}
              <span className="text-tech font-semibold">pods VR immersifs</span> et{' '}
              <span className="text-human font-semibold">massages experts</span>.
            </motion.p>

            {/* Stats rapides */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-tech/20 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-tech" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-tech">12€</div>
                  <div className="text-xs text-text-secondary">la séance</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-human/20 flex items-center justify-center">
                  <Timer className="w-5 h-5 text-human" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-human">20min</div>
                  <div className="text-xs text-text-secondary">de détente</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-tech/20 flex items-center justify-center">
                  <ThumbsUp className="w-5 h-5 text-tech" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-tech">100%</div>
                  <div className="text-xs text-text-secondary">de satisfaction</div>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#pricing" className="flex-1 sm:flex-initial">
                <button className="group relative w-full px-8 py-4 bg-white text-bg-ultra-dark rounded-full font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-[0.98]">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Réserver maintenant
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-black/10 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                  />
                </button>
              </Link>

              <Link href="#concept" className="flex-1 sm:flex-initial">
                <button className="group w-full px-8 py-4 rounded-full border border-white/10 bg-white/3 hover:bg-white/8 backdrop-blur-md text-white font-medium text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 hover:border-white/20">
                  <PlayCircle className="w-5 h-5 text-text-secondary group-hover:text-tech transition-colors duration-300" />
                  Le concept
                </button>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 text-sm text-text-secondary"
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-linear-to-br from-tech/30 to-human/30 border-2 border-bg-ultra-dark flex items-center justify-center text-xs font-bold"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span>Rejoignez <span className="text-white font-semibold">500+ pros</span> de la tech</span>
            </motion.div>

          </div>

          {/* === COLONNE DROITE : MÉDIA === */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            
            {/* Container principal */}
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden glass border-2 border-white/10 shadow-2xl">
              
              {/*cOPTION 1 : VIDÉO (décommente si tu as une vidéo) */}
              <video
                autoPlay
                loop
                muted
                playsInline
                onLoadedData={() => setImageLoaded(true)}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/hero-kapsul.mp4" type="video/mp4" />
              </video>

              {/* OPTION 2 : IMAGE (utilise celle-ci par défaut) */}
              {/*<img
                src="/images/hero-main.jpg"
                alt="Espace KAPSUL - Pods VR et zone de relaxation"
                onLoad={() => setImageLoaded(true)}
                className="absolute inset-0 w-full h-full object-cover"
              />*/}

              {/* Overlay gradient pour lisibilité */}
              <div className="absolute inset-0 bg-linear-to-t from-bg-ultra-dark/60 via-transparent to-transparent" />

              {/* Éléments flottants (UI Cards) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: imageLoaded ? 1 : 0, y: imageLoaded ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="glass-strong rounded-2xl p-4 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-white">En ce moment</span>
                    <span className="px-3 py-1 rounded-full bg-tech/20 text-tech text-xs font-bold">Live</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-tech to-human flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-base font-bold text-white">K-ESCAPE VR</div>
                      <div className="text-xs text-text-secondary">Session immersive active</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Badge "Featured" en haut */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.8 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute top-6 right-6"
              >
                <div className="px-4 py-2 rounded-full bg-human/20 backdrop-blur-md border border-human/30 text-human text-xs font-bold">
                  ⭐ Nouveau
                </div>
              </motion.div>

            </div>

            {/* Éléments décoratifs autour */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-tech/10 blur-2xl"
            />
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
                scale: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }
              }}
              className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-human/10 blur-2xl"
            />

          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}