'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap, Sparkles, MapPin, DollarSign, Grid3x3, Home } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Accueil', href: '#hero', icon: Home },
  { name: 'Concept', href: '#concept', icon: Sparkles },
  { name: 'Services', href: '#services', icon: Grid3x3 },
  { name: 'Tarifs', href: '#pricing', icon: DollarSign },
  { name: 'Espace', href: '#space', icon: MapPin },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {

      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = '#hero';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 300) {
            currentSection = `#${sectionId}`;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4"
      >
        <div className="w-full max-w-7xl px-5 flex justify-center">
          <nav 
            className="relative flex items-center justify-between backdrop-blur-xl border shadow-xl w-full md:w-auto md:min-w-[1000px] bg-white/85 border-olive-100/50 rounded-2xl md:rounded-full py-1 pl-4 pr-4 shadow-charcoal/8"
          >
            {/* LOGO */}
            <Link 
              href="/" 
              className="group flex items-center gap-3 pr-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-olive-500 focus-visible:ring-offset-2 rounded-full"
              onClick={() => setActiveSection('#hero')}
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-cream text-white overflow-hidden transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-sm shadow-olive-600/20">
                <Image src="/favicon.svg" alt="Kapsul Logo" fill/>
                <div className="absolute inset-0 bg-linear-to-tr from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-charcoal">
                Kapsul<span className="text-olive-600">.</span>
              </span>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden md:flex items-center gap-1.5 bg-olive-50/40 p-2 rounded-full border border-olive-100/50">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveSection(link.href)}
                    className={`
                      relative flex items-center gap-2.5 px-5 py-3 rounded-full text-[15px] font-medium transition-all duration-300
                      group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-500 focus-visible:ring-offset-1
                      ${isActive 
                        ? 'text-olive-800 bg-white shadow-md shadow-olive-600/12' 
                        : 'text-charcoal/70 hover:text-olive-700 hover:bg-white/70'
                      }
                    `}
                  >
                    <Icon 
                      className={`
                        w-4.5 h-4.5 transition-all duration-300
                        ${isActive ? 'text-olive-600' : 'text-charcoal/40 group-hover:text-olive-600 group-hover:scale-110'}
                      `} 
                      strokeWidth={isActive ? 2.5 : 1.5}
                    />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-3 pl-3">
              <Link href="#pricing" className="hidden md:block">
                <button className="group relative overflow-hidden rounded-full bg-charcoal text-white shadow-md transition-all hover:bg-olive-700 hover:shadow-lg hover:shadow-olive-600/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-500 focus-visible:ring-offset-2 px-7 py-3 text-[15px]">
                  <span className="relative z-10 flex items-center gap-2 font-semibold">
                    Réserver
                    <Zap className="w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </button>
              </Link>

              {/* Mobile Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-charcoal hover:bg-olive-50 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-500"
                aria-label="Ouvrir le menu"
              >
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`
          fixed inset-0 z-60 md:hidden transition-all duration-500
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div 
          className={`absolute inset-0 bg-charcoal/30 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={closeMobileMenu}
        />

        <div 
          className={`
            absolute top-2 right-2 bottom-2 w-full max-w-[340px] bg-white rounded-3xl shadow-2xl shadow-charcoal/20 flex flex-col overflow-hidden
            transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-[110%]'}
          `}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-olive-100">
            <span className="font-heading font-bold text-xl text-olive-800">Menu</span>
            <button 
              onClick={closeMobileMenu}
              className="p-2 bg-olive-50 text-charcoal/70 rounded-full hover:bg-terra-100 hover:text-terra-600 transition-all hover:rotate-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-500"
              aria-label="Fermer le menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`
                    group flex items-center gap-4 p-4 rounded-xl transition-all
                    ${isActive ? 'bg-olive-100 shadow-sm' : 'hover:bg-olive-50'}
                  `}
                  style={{ 
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)'
                  }}
                >
                  <div className={`
                    w-11 h-11 rounded-xl flex items-center justify-center transition-all
                    ${isActive 
                      ? 'bg-olive-600 text-white shadow-sm shadow-olive-600/30' 
                      : 'bg-olive-100/50 text-olive-600 group-hover:bg-olive-600 group-hover:text-white group-hover:scale-110'
                    }
                  `}>
                    <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 1.5} />
                  </div>
                  <div>
                    <span className={`block font-semibold ${isActive ? 'text-olive-800' : 'text-charcoal'}`}>
                      {link.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="p-6 bg-olive-50/50 border-t border-olive-100">
            <Link href="#pricing" onClick={closeMobileMenu}>
              <button className="w-full bg-charcoal text-white font-bold py-4 rounded-xl shadow-lg shadow-charcoal/10 hover:bg-olive-700 transition-all hover:scale-[1.02] active:scale-95 flex justify-center items-center gap-2">
                <Zap className="w-4 h-4" />
                Réserver ma session
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}