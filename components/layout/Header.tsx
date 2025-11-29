'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Lightbulb, Grid3x3, DollarSign, MapPin, Home, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'Accueil', href: '#home', icon: Home },
  { name: 'Concept', href: '#concept', icon: Lightbulb },
  { name: 'Services', href: '#services', icon: Grid3x3 },
  { name: 'Tarifs', href: '#pricing', icon: DollarSign },
  { name: 'Espace', href: '#space', icon: MapPin },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Détection de la section active
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* HEADER PREMIUM FLOATING */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="container mx-auto px-6 sm:px-8 pt-6 sm:pt-8">
          <motion.div
            animate={{
              backgroundColor: isScrolled 
                ? 'rgba(255, 255, 255, 0.9)' 
                : 'rgba(255, 255, 255, 0.7)',
              backdropFilter: isScrolled ? 'blur(20px)' : 'blur(12px)',
              boxShadow: isScrolled 
                ? '0 8px 32px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(87, 124, 116, 0.1)' 
                : '0 4px 16px rgba(0, 0, 0, 0.04)',
              borderRadius: '9999px',
              padding: isScrolled ? '12px 28px' : '16px 32px',
              maxWidth: isScrolled ? '920px' : '1120px',
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex items-center justify-between pointer-events-auto border border-white/60"
          >
            
            {/* LOGO ANIMÉ */}
            <Link href="/" onClick={() => setActiveSection('')} className="relative group">
              <motion.div 
                className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="gradient-emerald font-extrabold">
                  Kapsul
                </span>
                <motion.div
                  className="w-2.5 h-2.5 rounded-full bg-linear-to-br from-emerald-500 to-coral-500"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </motion.div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="relative"
                  >
                    <motion.div
                      className={`
                        relative px-5 py-2.5 text-sm font-bold transition-all duration-300 rounded-full
                        ${isActive 
                          ? 'text-white' 
                          : 'text-charcoal hover:text-emerald-700'
                        }
                      `}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">{link.name}</span>
                      
                      {/* Background actif avec gradient */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavBackground"
                          className="absolute inset-0 bg-linear-to-r from-emerald-500 to-emerald-600 rounded-full z-0 shadow-emerald"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}

                      {/* Hover glow pour états inactifs */}
                      {!isActive && (
                        <motion.div
                          className="absolute inset-0 bg-emerald-100 rounded-full opacity-0 hover:opacity-100 transition-opacity"
                          whileHover={{ scale: 1.1 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </nav>

            {/* CTA & MOBILE BUTTON */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* CTA Desktop Premium */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring", bounce: 0.4 }}
                className="hidden md:block"
              >
                <Link href="#pricing">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative px-6 py-3 rounded-full bg-linear-to-r from-emerald-500 to-emerald-600 text-white text-sm font-bold shadow-emerald hover:shadow-xl transition-all duration-300 flex items-center gap-2 overflow-hidden group"
                  >
                    <Zap className="w-4 h-4 fill-white/40 relative z-10" />
                    <span className="relative z-10">Réserver</span>
                    
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                        repeatDelay: 1
                      }}
                    />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 text-ink hover:bg-emerald-100 rounded-full transition-all"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" strokeWidth={2.5} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" strokeWidth={2.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* MOBILE MENU PREMIUM */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-ink/30 backdrop-blur-md md:hidden"
            />
            
            {/* Menu panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[85%] max-w-sm glass-emerald shadow-2xl p-8 md:hidden overflow-y-auto border-l-2 border-emerald-300"
            >
              {/* Header menu mobile */}
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-bold gradient-emerald flex items-center gap-2">
                  Kapsul
                  <motion.div
                    className="w-2 h-2 rounded-full bg-linear-to-br from-emerald-500 to-coral-500"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </span>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-charcoal hover:text-emerald-700 hover:bg-emerald-100 rounded-xl transition-all"
                >
                  <X className="w-7 h-7" strokeWidth={2.5} />
                </motion.button>
              </div>

              {/* Navigation links */}
              <nav className="flex flex-col gap-3 mb-8">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.href;
                  
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, type: "spring", bounce: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className={`
                          flex items-center gap-4 text-lg font-bold transition-all duration-300 p-5 rounded-2xl
                          ${isActive 
                            ? 'bg-linear-to-r from-emerald-500 to-emerald-600 text-white shadow-emerald' 
                            : 'text-ink hover:bg-emerald-100 hover:text-emerald-700'
                          }
                        `}
                      >
                        <div className={`
                          w-12 h-12 rounded-xl flex items-center justify-center transition-colors
                          ${isActive 
                            ? 'bg-white/20 text-white' 
                            : 'bg-linear-to-br from-emerald-100 to-emerald-200 text-emerald-700'
                          }
                        `}>
                          <Icon className="w-6 h-6" strokeWidth={2.5} />
                        </div>
                        <span>{link.name}</span>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto"
                          >
                            <Sparkles className="w-5 h-5" />
                          </motion.div>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="w-full h-px bg-linear-to-r from-transparent via-emerald-300 to-transparent my-8" />

              {/* CTA Mobile */}
              <Link
                href="#pricing"
                onClick={() => handleLinkClick('#pricing')}
              >
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-5 rounded-2xl bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-bold text-lg shadow-emerald flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  <Zap className="w-6 h-6 fill-white/40 relative z-10" />
                  <span className="relative z-10">Réserver une séance</span>
                  
                  {/* Shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}