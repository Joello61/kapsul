'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, PlayCircle, Zap, Timer, DollarSign, ThumbsUp, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.96]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 40]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-32 sm:pt-40 pb-24 overflow-hidden"
    >
      
      {/* BACKGROUND EFFECTS Premium */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grille moderne ultra-subtile */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, var(--color-emerald-500) 1px, transparent 0),
              radial-gradient(circle at 2px 2px, var(--color-coral-500) 1px, transparent 0)
            `,
            backgroundSize: '80px 80px, 120px 120px',
            backgroundPosition: '0 0, 40px 60px'
          }}
        />
        
        {/* Blurs colorés animés */}
        <motion.div 
          animate={{ 
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.15, 1],
            rotate: [0, 45, 0],
            x: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, var(--color-emerald-300) 0%, transparent 70%)',
          }}
        />

        <motion.div 
          animate={{ 
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            rotate: [0, -45, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 -right-48 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, var(--color-coral-300) 0%, transparent 70%)',
          }}
        />
      </div>

      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8"
      >
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* === COLONNE GAUCHE : CONTENU === */}
          <div className="space-y-10">
            
            {/* Badge Premium avec animation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full glass-emerald border-2 border-emerald-300 group cursor-pointer">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                </motion.div>
                <span className="text-sm font-bold gradient-emerald">
                  Un Esprit Sain dans un Corps Sain
                </span>
                <TrendingUp className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>

            {/* Titre Principal MEGA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[0.95]">
                <span className="gradient-emerald">KAPSUL</span>
                <motion.span 
                  className="inline-block text-coral-500"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  .
                </motion.span>
              </h1>
              
              <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight'>
                Moins cher qu'un psy,
                <br/>
                <span className='gradient-sunset'>plus efficace qu'une sieste.</span>
              </h2>
            </motion.div>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl sm:text-2xl text-charcoal leading-relaxed max-w-xl font-medium"
            >
              10h/jour devant un écran ?{' '}
              <span className="text-emerald-600 font-bold">Récupérez</span> en 20 minutes avec nos{' '}
              <span className="gradient-emerald font-bold">pods immersifs</span> et{' '}
              <span className="gradient-coral font-bold">soins experts</span>.
            </motion.p>

            {/* Stats Premium Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4"
            >
              {[
                { 
                  icon: DollarSign, 
                  gradient: 'from-[var(--color-emerald-400)] to-[var(--color-emerald-600)]',
                  val: '12€', 
                  label: 'la séance',
                  shadowColor: 'var(--glow-emerald)'
                },
                { 
                  icon: Timer, 
                  gradient: 'from-[var(--color-coral-400)] to-[var(--color-coral-600)]',
                  val: '20min', 
                  label: 'de détente',
                  shadowColor: 'var(--glow-coral)'
                },
                { 
                  icon: ThumbsUp, 
                  gradient: 'from-[var(--color-lavender-400)] to-[var(--color-lavender-600)]',
                  val: '100%', 
                  label: 'satisfaction',
                  shadowColor: 'var(--glow-lavender)'
                }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="flex items-center gap-4 px-6 py-4 rounded-2xl glass border-2 border-white cursor-pointer transition-all duration-300"
                  style={{ boxShadow: stat.shadowColor }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${stat.gradient} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-ink">
                      {stat.val}
                    </div>
                    <div className="text-xs sm:text-sm text-slate font-bold uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs Premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link href="#pricing" className="flex-1 sm:flex-initial">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary w-full sm:w-auto text-lg px-10 py-5 flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  <span className="relative z-10 font-bold">Réserver maintenant</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" strokeWidth={3} />
                  </motion.div>
                </motion.button>
              </Link>

              <Link href="#concept" className="flex-1 sm:flex-initial">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group w-full sm:w-auto px-10 py-5 rounded-2xl glass border-2 border-emerald-200 text-ink font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:border-emerald-400 hover:bg-emerald-50"
                >
                  <PlayCircle className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                  Le concept
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Proof Premium */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-5"
            >
              <div className="flex -space-x-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div 
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, type: "spring", bounce: 0.5 }}
                    className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-200 to-coral-200 border-4 border-white flex items-center justify-center text-base font-black text-ink shadow-lg"
                  >
                    {String.fromCharCode(65 + i)}
                  </motion.div>
                ))}
              </div>
              <div className="text-base text-charcoal font-medium">
                Rejoignez <span className="gradient-emerald font-extrabold text-lg">500+ pros</span> de la tech
              </div>
            </motion.div>

          </div>

          {/* === COLONNE DROITE : MÉDIA Premium === */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            
            {/* Container principal avec effects */}
            <div className="relative aspect-4/5 rounded-[3rem] overflow-hidden glass border-4 border-white shadow-2xl">
              
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

              {/* Overlay gradient premium */}
              <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent" />

              {/* Card flottante "En ce moment" */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: imageLoaded ? 1 : 0, y: imageLoaded ? 0 : 30, scale: imageLoaded ? 1 : 0.9 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-8 left-8 right-8"
              >
                <div className="glass-emerald rounded-3xl p-6 border-2 border-emerald-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-ink">En ce moment</span>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-linear-to-r from-green-400 to-green-500 border-2 border-white shadow-lg">
                      <motion.span 
                        className="w-2 h-2 rounded-full bg-white"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-white text-xs font-black uppercase tracking-wider">Live</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-emerald">
                      <Zap className="w-8 h-8" fill="currentColor" />
                    </div>
                    <div className="flex-1">
                      <div className="text-lg font-extrabold text-ink">K-ESCAPE VR</div>
                      <div className="text-sm text-charcoal font-medium">Session immersive active</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Badge "Nouveau" */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.7, rotate: imageLoaded ? 0 : -10 }}
                transition={{ duration: 0.6, delay: 1.2, type: "spring", bounce: 0.6 }}
                className="absolute top-8 right-8"
              >
                <div className="px-5 py-2.5 rounded-full glass-coral border-2 border-coral-400 font-extrabold text-sm flex items-center gap-2 shadow-coral">
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ⭐
                  </motion.span>
                  <span className="gradient-coral">Nouveau</span>
                </div>
              </motion.div>

            </div>

            {/* Blobs décoratifs autour */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.15, 1]
              }}
              transition={{ 
                rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
                scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="absolute -top-12 -right-12 w-56 h-56 rounded-full blur-[80px]"
              style={{
                background: 'radial-gradient(circle, var(--color-emerald-400) 0%, transparent 70%)',
              }}
            />
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
                scale: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }
              }}
              className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full blur-[80px]"
              style={{
                background: 'radial-gradient(circle, var(--color-coral-400) 0%, transparent 70%)',
              }}
            />

          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}