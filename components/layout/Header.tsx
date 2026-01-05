'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  Menu,
  X,
  Calendar,
  Home,
  Sparkles,
  Grid3x3,
  DollarSign,
  Users,
  MapPin,
} from 'lucide-react';

const navLinks = [
  { name: 'Accueil', href: '/', icon: Home },
  { name: 'Concept', href: '/concept', icon: Sparkles },
  { name: 'Services', href: '/services', icon: Grid3x3 },
  { name: 'Tarifs', href: '/pricing', icon: DollarSign },
  { name: 'Espace', href: '/space', icon: MapPin },
  { name: 'À Propos', href: '/about', icon: Users },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
        <div className="w-full max-w-7xl px-5 flex justify-center">
          <nav className="relative flex items-center justify-between glass border border-sage-200/30 shadow-lg w-full md:w-auto md:min-w-[1000px] rounded-2xl md:rounded-full py-1 pl-4 pr-4">
            {/* LOGO */}
            <Link
              href="/"
              className="group flex items-center gap-3 pr-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 rounded-full"
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-sage-600 overflow-hidden transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-sm shadow-sage-600/20">
                <span className="text-white font-sans font-bold text-xl">
                  K
                </span>
              </div>
              <span className="font-sans font-semibold text-2xl text-charcoal">
                KAPSUL
              </span>
            </Link>

            {/* NAV DESKTOP */}
            <div className="hidden md:flex items-center gap-1.5 bg-sage-50/40 p-2 rounded-full border border-sage-100/50">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      relative flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300
                      group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-1
                      ${
                        isActive
                          ? 'text-sage-700 bg-white shadow-md'
                          : 'text-gray-700 hover:text-sage-700 hover:bg-white/70'
                      }
                    `}
                  >
                    <Icon
                      className={`w-4 h-4 transition-all duration-300 ${
                        isActive
                          ? 'text-sage-600'
                          : 'text-gray-500 group-hover:text-sage-600 group-hover:scale-110'
                      }`}
                      strokeWidth={isActive ? 2 : 1.5}
                    />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* CTA DESKTOP */}
            <div className="flex items-center gap-3 pl-3">
              <Link href="/reserver" className="hidden md:block">
                <button className="group relative overflow-hidden rounded-full bg-sage-600 text-white shadow-md transition-all hover:bg-sage-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 px-6 py-3 text-sm font-semibold">
                  <span className="relative z-10 flex items-center gap-2">
                    Réserver
                    <Calendar className="w-4 h-4" strokeWidth={2} />
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                </button>
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 text-charcoal hover:bg-sage-50 rounded-full transition-colors"
                aria-label="Ouvrir le menu"
              >
                <Menu className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-60 md:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-charcoal/30 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMobileMenu}
        />

        <div
          className={`absolute top-2 right-2 bottom-2 w-full max-w-[340px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden transform transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-[110%]'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-sage-100">
            <span className="font-sans font-semibold text-xl text-charcoal">
              Menu
            </span>
            <button
              onClick={closeMobileMenu}
              className="p-2 bg-sage-50 text-charcoal rounded-full hover:bg-sage-100 transition-all hover:rotate-90"
              aria-label="Fermer le menu"
            >
              <X className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`group flex items-center gap-4 p-4 rounded-xl transition-all ${
                    isActive ? 'bg-sage-50 shadow-sm' : 'hover:bg-sage-50/50'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${index * 50}ms`
                      : '0ms',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen
                      ? 'translateX(0)'
                      : 'translateX(20px)',
                  }}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-sage-600 text-white shadow-sm'
                        : 'bg-sage-100/50 text-sage-600 group-hover:bg-sage-600 group-hover:text-white group-hover:scale-110'
                    }`}
                  >
                    <Icon
                      className="w-5 h-5"
                      strokeWidth={isActive ? 2.5 : 1.5}
                    />
                  </div>
                  <span
                    className={`font-semibold ${
                      isActive ? 'text-sage-700' : 'text-charcoal'
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="p-6 bg-sage-50/50 border-t border-sage-100">
            <Link href="/reserver" onClick={closeMobileMenu}>
              <button className="w-full bg-sage-600 text-white font-semibold py-4 rounded-xl shadow-md hover:bg-sage-700 transition-all hover:scale-[1.02] active:scale-95 flex justify-center items-center gap-2">
                <Calendar className="w-4 h-4" strokeWidth={2} />
                Réserver ma session
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
