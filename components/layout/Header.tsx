'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Lightbulb, Grid3x3, DollarSign, MapPin, Home } from 'lucide-react';

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
      {/* HEADER FLOTTANT */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
      >
        <div className="container mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
          <motion.div
            animate={{
              backgroundColor: isScrolled 
                ? 'rgba(10, 10, 10, 0.95)' 
                : 'rgba(10, 10, 10, 0.3)',
              backdropFilter: isScrolled ? 'blur(20px)' : 'blur(10px)',
              boxShadow: isScrolled 
                ? '0 4px 30px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(237, 237, 237, 0.1)'
                : '0 0 0 1px rgba(237, 237, 237, 0.05)',
              borderRadius: isScrolled ? '16px' : '20px',
              padding: isScrolled ? '12px 24px' : '16px 28px'
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto border border-[rgba(237,237,237,0.1)]"
          >
            
            {/* LOGO */}
            <Link href="/" onClick={() => setActiveSection('')} className="relative group">
              <motion.div 
                className="text-lg sm:text-xl font-bold tracking-tighter flex items-center gap-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative text-text-primary">
                  KAPSUL
                  <span className="absolute inset-0 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 text-tech">
                    KAPSUL
                  </span>
                </span>
                <motion.span 
                  className="text-tech"
                  animate={{ 
                    color: ['var(--color-tech)', 'var(--color-human)', 'var(--color-tech)']
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  .
                </motion.span>
              </motion.div>
            </Link>

            {/* DESKTOP NAV AVEC ACTIVE STATE */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href;
                
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={`
                        group px-4 py-2.5 text-base font-medium transition-all duration-300 rounded-xl relative flex items-center gap-2
                        ${isActive 
                          ? 'text-tech bg-[rgba(0,255,148,0.1)] border border-[rgba(0,255,148,0.3)]' 
                          : 'text-text-secondary hover:text-text-primary hover:bg-[rgba(237,237,237,0.05)]'
                        }
                      `}
                    >
                      <Icon 
                        className={`
                          w-4 h-4 transition-all duration-300
                          ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                        `} 
                      />
                      <span>{link.name}</span>
                      
                      {/* Indicateur actif */}
                      {isActive ? (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-tech rounded-full"
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      ) : (
                        <motion.div
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-tech group-hover:w-8 transition-all duration-300 rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* CTA & MOBILE BUTTON */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* CTA Desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="hidden md:block"
              >
                <Link href="#pricing">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-6 py-2.5 rounded-full bg-[rgba(0,255,148,0.1)] hover:bg-[rgba(0,255,148,0.2)] border border-[rgba(0,255,148,0.3)] hover:border-[rgba(0,255,148,0.5)] text-base font-semibold text-tech transition-all overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Réserver
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-[rgba(0,255,148,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-text-primary hover:text-tech transition-colors rounded-lg hover:bg-[rgba(237,237,237,0.05)]"
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
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* MOBILE MENU AVEC ACTIVE STATE */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-bg-ultra-dark/90 backdrop-blur-md md:hidden"
            />
            
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[80%] max-w-sm bg-bg-dark/98 backdrop-blur-xl border-l border-[rgba(237,237,237,0.1)] p-6 md:hidden overflow-y-auto"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-[rgba(237,237,237,0.05)]"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-2xl font-bold tracking-tighter mb-12 pt-4 text-text-primary">
                KAPSUL<span className="text-tech">.</span>
              </div>

              <nav className="flex flex-col gap-3">
                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.href;
                  
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className={`
                          group flex items-center gap-3 text-xl font-medium transition-all duration-300 p-4 rounded-xl relative
                          ${isActive 
                            ? 'text-tech bg-[rgba(0,255,148,0.1)] border border-[rgba(0,255,148,0.3)]' 
                            : 'text-text-primary hover:text-tech hover:bg-[rgba(237,237,237,0.05)]'
                          }
                        `}
                      >
                        <div 
                          className={`
                            w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300
                            ${isActive 
                              ? 'bg-[rgba(0,255,148,0.3)] glow-tech' 
                              : 'bg-[rgba(237,237,237,0.05)] group-hover:bg-[rgba(0,255,148,0.2)]'
                            }
                          `}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span>{link.name}</span>

                        {/* Badge "Actif" */}
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="absolute right-4 w-2 h-2 rounded-full bg-tech glow-tech"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="w-full h-px bg-[rgba(237,237,237,0.1)] my-8" />

              <Link
                href="#pricing"
                onClick={() => handleLinkClick('#pricing')}
              >
                <button className="w-full py-4 text-center rounded-xl bg-tech text-bg-ultra-dark font-bold text-lg hover:bg-tech/90 transition-all glow-tech flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Réserver une séance
                </button>
              </Link>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-sm text-text-secondary text-center"
              >
                Rejoignez 500+ pros de la tech
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}