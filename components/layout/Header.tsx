'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Zap } from 'lucide-react';

const navLinks = [
  { name: 'Concept', href: '#concept' },
  { name: 'Services', href: '#services' },
  { name: 'Tarifs', href: '#pricing' },
  { name: 'Espace', href: '#space' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                ? '0 4px 30px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                : '0 0 0 1px rgba(255, 255, 255, 0.05)',
              borderRadius: isScrolled ? '16px' : '20px',
              padding: isScrolled ? '12px 24px' : '16px 28px'
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            
            {/* LOGO */}
            <Link href="/" className="relative group">
              <motion.div 
                className="text-lg sm:text-xl font-bold tracking-tighter flex items-center gap-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative">
                  KAPSUL
                  <span className="absolute inset-0 blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 text-tech">
                    KAPSUL
                  </span>
                </span>
                <motion.span 
                  className="text-tech"
                  animate={{ 
                    color: ['#00FF94', '#FFB347', '#00FF94']
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

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5 relative group"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
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
                    className="group relative px-5 py-2 rounded-full bg-tech/10 hover:bg-tech/20 border border-tech/30 hover:border-tech/50 text-sm font-semibold text-tech transition-all overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      Réserver
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-tech/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-text-primary hover:text-tech transition-colors rounded-lg hover:bg-white/5"
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

      {/* MOBILE MENU */}
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
              className="fixed right-0 top-0 bottom-0 z-50 w-[80%] max-w-sm bg-bg-dark/98 backdrop-blur-xl border-l border-white/10 p-6 md:hidden overflow-y-auto"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-2xl font-bold tracking-tighter mb-12 pt-4">
                KAPSUL<span className="text-tech">.</span>
              </div>

              <nav className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-xl font-medium text-text-primary hover:text-tech transition-colors p-3 rounded-lg hover:bg-white/5"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="w-full h-px bg-white/10 my-8" />

              <Link
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <button className="w-full py-4 text-center rounded-xl bg-tech text-bg-ultra-dark font-bold text-lg hover:bg-tech/90 transition-all shadow-[0_0_20px_rgba(0,255,148,0.3)]">
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