'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap, Sparkles, MapPin, DollarSign, Grid3x3 } from 'lucide-react';

const navLinks = [
  { name: 'Concept', href: '#concept', icon: Sparkles },
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
      setIsScrolled(window.scrollY > 80);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

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

      if (window.scrollY < 150) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* HEADER FLOATING */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6">
          <nav
            className={`
              mx-auto flex items-center justify-between
              pointer-events-auto
              rounded-full
              border
              transition-all duration-500 ease-out
              ${isScrolled 
                ? 'bg-white/95 backdrop-blur-xl shadow-lg border-gray-200 py-3 px-6 sm:px-8 max-w-4xl' 
                : 'bg-white/90 backdrop-blur-lg shadow-md border-gray-100 py-4 px-7 sm:px-10 max-w-5xl'
              }
            `}
          >
            
            {/* LOGO */}
            <Link 
              href="/" 
              onClick={() => setActiveSection('')}
              className="group flex items-center gap-2"
            >
              <span className="text-2xl font-bold tracking-tight text-olive-700 transition-transform duration-300 group-hover:scale-105">
                Kapsul
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-olive-600 transition-all duration-300 group-hover:scale-125 group-hover:bg-terra-500" />
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`
                      relative px-5 py-2.5 rounded-full
                      font-bold text-sm
                      transition-all duration-300 ease-out
                      ${isActive 
                        ? 'bg-olive-600 text-white shadow-md scale-105' 
                        : 'text-charcoal hover:text-olive-700 hover:bg-olive-50'
                      }
                    `}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 rounded-full bg-olive-400 shadow-sm" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA & MOBILE BUTTON */}
            <div className="flex items-center gap-3">
              {/* CTA Desktop */}
              <Link href="#pricing" className="hidden md:block">
                <button className="bg-olive-600 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-md hover:bg-olive-700 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out active:scale-95">
                  <Zap className="w-4 h-4" strokeWidth={2.5} />
                  <span>Réserver</span>
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 text-charcoal hover:bg-olive-100 rounded-xl transition-all duration-250 active:scale-95"
                aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" strokeWidth={2.5} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={2.5} />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-charcoal/40 backdrop-blur-sm md:hidden transition-opacity duration-300"
          />
          
          {/* Menu panel */}
          <div className="fixed right-0 top-0 bottom-0 z-50 w-[85%] max-w-sm bg-white shadow-2xl p-8 md:hidden overflow-y-auto border-l border-gray-100">
            
            {/* Header menu mobile */}
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-olive-700">Kapsul</span>
                <div className="w-2.5 h-2.5 rounded-full bg-olive-600" />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-charcoal hover:text-olive-700 hover:bg-olive-100 rounded-xl transition-all duration-250"
                aria-label="Fermer le menu"
              >
                <X className="w-6 h-6" strokeWidth={2.5} />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col gap-3 mb-8">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href;
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`
                      flex items-center gap-4 text-base font-bold
                      transition-all duration-300 p-5 rounded-2xl
                      ${isActive 
                        ? 'bg-olive-600 text-white shadow-md scale-105' 
                        : 'text-charcoal hover:bg-olive-50 hover:text-olive-700'
                      }
                    `}
                  >
                    <div className={`
                      w-12 h-12 rounded-xl flex items-center justify-center
                      transition-all duration-300
                      ${isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-olive-100 text-olive-700'
                      }
                    `}>
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Divider */}
            <div className="h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent my-8" />

            {/* CTA Mobile */}
            <Link href="#pricing" onClick={() => handleLinkClick('#pricing')}>
              <button className="bg-olive-600 text-white w-full py-5 rounded-2xl font-bold text-base flex items-center justify-center gap-2 shadow-md hover:bg-olive-700 hover:shadow-lg transition-all duration-300 active:scale-95">
                <Zap className="w-5 h-5" strokeWidth={2.5} />
                <span>Réserver une séance</span>
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}