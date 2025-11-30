'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap, Sparkles, MapPin, DollarSign, Grid3x3, Home } from 'lucide-react';

const navLinks = [
  { name: 'Accueil', href: '#hero', icon: Home },
  { name: 'Concept', href: '#concept', icon: Sparkles },
  { name: 'Services', href: '#services', icon: Grid3x3 },
  { name: 'Tarifs', href: '#pricing', icon: DollarSign },
  { name: 'Espace', href: '#space', icon: MapPin },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = '#hero';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Détection plus souple : si la section occupe une bonne partie de l'écran
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
        className={`
          fixed top-0 left-0 right-0 z-50 flex justify-center
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isScrolled ? 'pt-3' : 'pt-6'} 
        `}
      >
        <div className="w-full max-w-7xl px-4 flex justify-center">
          <nav 
            className={`
              relative flex items-center justify-between
              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
              backdrop-blur-xl border shadow-lg shadow-black/5
              ${isScrolled 
                ? 'w-auto min-w-[320px] bg-white/90 border-white/60 rounded-full py-2 pl-4 pr-2 scale-95' 
                : 'w-full md:w-auto md:min-w-[800px] bg-white/70 border-white/40 rounded-2xl md:rounded-full py-3 pl-6 pr-3'
              }
            `}
          >
            {/* LOGO */}
            <Link 
              href="/" 
              className="group flex items-center gap-2 pr-6 focus:outline-none"
              onClick={() => setActiveSection('#hero')}
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-full bg-olive-600 text-white overflow-hidden transition-transform duration-500 group-hover:rotate-12">
                <span className="font-bold text-lg leading-none mb-0.5">K</span>
                <div className="absolute inset-0 bg-linear-to-tr from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className={`
                font-heading font-bold text-xl tracking-tight text-charcoal
                transition-all duration-500 origin-left
                ${isScrolled ? 'w-0 opacity-0 overflow-hidden scale-0 md:w-auto md:opacity-100 md:scale-100' : 'w-auto opacity-100 scale-100'}
              `}>
                Kapsul<span className="text-olive-600">.</span>
              </span>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className={`
              hidden md:flex items-center gap-1
              transition-all duration-500
              ${isScrolled ? 'bg-transparent' : 'bg-gray-100/50 p-1.5 rounded-full border border-white/50'}
            `}>
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveSection(link.href)}
                    className={`
                      relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      group
                      ${isActive 
                        ? 'text-olive-800 bg-white shadow-sm' 
                        : 'text-gray-600 hover:text-olive-700 hover:bg-white/60'
                      }
                    `}
                  >
                    {/* Icône toujours visible maintenant */}
                    <Icon 
                      className={`
                        w-4 h-4 transition-colors duration-300
                        ${isActive ? 'text-olive-600 fill-olive-600/20' : 'text-gray-400 group-hover:text-olive-600'}
                      `} 
                      strokeWidth={isActive ? 2 : 1.5}
                    />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-3 pl-2">
              <Link href="#pricing" className="hidden md:block">
                <button className={`
                  group relative overflow-hidden rounded-full bg-charcoal text-white shadow-md transition-all 
                  hover:bg-olive-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0
                  ${isScrolled ? 'px-4 py-2 text-xs' : 'px-6 py-2.5 text-sm'}
                `}>
                  <span className="relative z-10 flex items-center gap-2 font-semibold">
                    Réserver
                    <Zap className={`${isScrolled ? 'w-3 h-3' : 'w-3.5 h-3.5'} transition-transform group-hover:fill-current`} />
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/20 to-transparent z-0" />
                </button>
              </Link>

              {/* Mobile Toggle */}
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-charcoal hover:bg-olive-50 rounded-full transition-colors"
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
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none delay-200'}
        `}
      >
        <div 
          className={`absolute inset-0 bg-charcoal/20 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={closeMobileMenu}
        />

        <div 
          className={`
            absolute top-2 right-2 bottom-2 w-full max-w-[320px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden
            transform transition-transform duration-500 cubic-bezier(0.22, 1, 0.36, 1)
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-[110%]'}
          `}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <span className="font-heading font-bold text-xl text-olive-800">Menu</span>
            <button 
              onClick={closeMobileMenu}
              className="p-2 bg-gray-50 text-gray-500 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-olive-50 transition-colors"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-olive-100/50 flex items-center justify-center text-olive-600 group-hover:bg-olive-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block font-semibold text-charcoal">{link.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <Link href="#pricing" onClick={closeMobileMenu}>
              <button className="w-full bg-charcoal text-white font-bold py-4 rounded-xl shadow-lg hover:bg-olive-700 transition-colors flex justify-center items-center gap-2">
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