'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap, Sparkles, MapPin, DollarSign, Grid3x3, Home } from 'lucide-react';

const navLinks = [
  {name: 'Accueil', href: '#home', icon: Home },
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
      {/* HEADER FLOATING */}
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-4 sm:pt-6">
          <div
            className={`
              mx-auto flex items-center justify-between
              pointer-events-auto
              rounded-full
              border border-gray-100
              transition-all duration-300 ease-out
              ${isScrolled 
                ? 'bg-white/95 backdrop-blur-lg shadow-md py-2.5 px-5 sm:px-7 max-w-4xl' 
                : 'bg-white/90 backdrop-blur-md shadow-sm py-3 px-6 sm:px-8 max-w-5xl'
              }
            `}
          >
            
            {/* LOGO */}
            <Link 
              href="/" 
              onClick={() => setActiveSection('')}
              className="group"
            >
              <div className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2 transition-transform duration-250 hover:scale-105">
                <span className="text-olive-700">Kapsul</span>
                <div className="w-2 h-2 rounded-full bg-olive-600 transition-transform duration-250 group-hover:scale-125" />
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`
                      relative px-4 py-2 text-sm font-semibold rounded-full
                      transition-all duration-250
                      ${isActive 
                        ? 'bg-olive-600 text-white shadow-sm' 
                        : 'text-charcoal hover:text-olive-700 hover:bg-olive-50'
                      }
                    `}
                  >
                    {link.name}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 rounded-full bg-olive-400" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA & MOBILE BUTTON */}
            <div className="flex items-center gap-3">
              {/* CTA Desktop */}
              <Link href="#pricing" className="hidden md:block">
                <button className="bg-olive-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2 shadow-sm hover:bg-olive-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-250">
                  <Zap className="w-4 h-4" strokeWidth={2} />
                  <span>Réserver</span>
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-charcoal hover:bg-olive-100 rounded-full transition-all duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" strokeWidth={2.5} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-charcoal/30 backdrop-blur-sm md:hidden transition-opacity duration-250"
          />
          
          {/* Menu panel */}
          <div
            className="fixed right-0 top-0 bottom-0 z-50 w-[85%] max-w-sm bg-white shadow-xl p-6 md:hidden overflow-y-auto border-l border-gray-100"
          >
            {/* Header menu mobile */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-olive-700 flex items-center gap-2">
                Kapsul
                <div className="w-2 h-2 rounded-full bg-olive-600" />
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-charcoal hover:text-olive-700 hover:bg-olive-100 rounded-lg transition-all duration-200"
              >
                <X className="w-6 h-6" strokeWidth={2.5} />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col gap-2 mb-6">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href;
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`
                      flex items-center gap-3 text-base font-semibold
                      transition-all duration-250 p-4 rounded-xl
                      ${isActive 
                        ? 'bg-olive-600 text-white shadow-sm' 
                        : 'text-charcoal hover:bg-olive-50 hover:text-olive-700'
                      }
                    `}
                  >
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center
                      ${isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-olive-100 text-olive-700'
                      }
                    `}>
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Divider */}
            <div className="h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent my-6" />

            {/* CTA Mobile */}
            <Link
              href="#pricing"
              onClick={() => handleLinkClick('#pricing')}
            >
              <button className="bg-olive-600 text-white w-full py-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 shadow-sm hover:bg-olive-700 transition-all duration-250">
                <Zap className="w-5 h-5" strokeWidth={2} />
                <span>Réserver une séance</span>
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}