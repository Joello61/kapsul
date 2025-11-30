'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone, Instagram, Linkedin, Facebook, ArrowRight, Check, Loader2 } from 'lucide-react';
import { footerLinks } from '@/lib/data';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
    setEmail('');
    
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <footer className="relative bg-white pt-24 pb-10 overflow-hidden">
      {/* CTA SECTION */}
      <div className="container mx-auto px-4 mb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-charcoal text-white p-10 md:p-20 text-center shadow-2xl shadow-charcoal/20">
          
          {/* Background Gradients */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-olive-500/25 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-terra-500/25 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight mb-6 leading-tight">
              Prêt à déconnecter pour mieux reconnecter ?
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl">
              Rejoignez le mouvement Kapsul. Votre première session de 20 minutes suffit à changer votre journée.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="#pricing" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-charcoal hover:bg-olive-50 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-white/20 flex items-center justify-center gap-2.5 group">
                  Réserver ma session
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
              <Link href="#contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white/10 text-white hover:bg-white/20 font-semibold py-4 px-8 rounded-full backdrop-blur-md transition-all border border-white/20 hover:border-white/30">
                  Nous contacter
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative">
        {/* GIANT TEXT BACKGROUND - Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden opacity-[0.035] pointer-events-none select-none z-0">
          <span className="text-[9vw] md:text-[11vw] lg:text-[13vw] font-black leading-none text-charcoal tracking-tighter text-center block whitespace-nowrap">
            KAPSUL SPACE
          </span>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-20">
          
          {/* BRAND & NEWSLETTER */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-block group">
              <span className="font-heading font-bold text-3xl text-charcoal tracking-tight flex items-center gap-1.5">
                Kapsul
                <span className="w-2.5 h-2.5 rounded-full bg-olive-600 group-hover:scale-125 transition-transform duration-300" />
              </span>
            </Link>
            
            <p className="text-charcoal/60 text-lg max-w-sm leading-relaxed">
              L&apos;espace de récupération urbaine nouvelle génération. 
              Tech & Humain réunis pour votre équilibre mental.
            </p>

            <div className="max-w-sm pt-4">
              <p className="text-sm font-semibold text-charcoal mb-4">Newsletter exclusive</p>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full bg-olive-50/50 border border-olive-200/50 text-charcoal rounded-2xl py-4 pl-5 pr-14 focus:outline-none focus:ring-2 focus:ring-olive-500/30 focus:border-olive-500 focus:bg-white transition-all placeholder:text-charcoal/40 disabled:opacity-70"
                />
                <button
                  type="submit"
                  disabled={status !== 'idle' || !email}
                  className={`
                    absolute right-2 top-2 bottom-2 aspect-square rounded-xl flex items-center justify-center transition-all
                    ${status === 'success' ? 'bg-olive-600 text-white' : 'bg-charcoal text-white hover:bg-olive-600'}
                    disabled:opacity-50 disabled:cursor-not-allowed
                  `}
                  aria-label={status === 'loading' ? 'Envoi en cours' : status === 'success' ? 'Inscription réussie' : 'S\'inscrire'}
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : status === 'success' ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </form>
              {status === 'success' && (
                <p className="text-olive-700 text-sm mt-3 font-medium animate-in fade-in slide-in-from-top-1">
                  ✓ Merci ! Vous êtes bien inscrit.
                </p>
              )}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* LINKS COLUMNS */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-10">
            
            {/* Services */}
            <div>
              <h4 className="font-heading font-bold text-charcoal mb-6">Services</h4>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link}>
                    <Link 
                      href="#services" 
                      className="text-charcoal/60 hover:text-olive-600 transition-all text-sm font-medium block hover:translate-x-1 duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Infos */}
            <div>
              <h4 className="font-heading font-bold text-charcoal mb-6">Informations</h4>
              <ul className="space-y-4">
                {footerLinks.infos.map((link) => (
                  <li key={link}>
                    <Link 
                      href="#" 
                      className="text-charcoal/60 hover:text-olive-600 transition-all text-sm font-medium block hover:translate-x-1 duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-heading font-bold text-charcoal mb-6">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href={`mailto:${footerLinks.location.email}`} 
                    className="flex items-center gap-3 text-charcoal/60 hover:text-terra-600 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-full bg-olive-50 flex items-center justify-center group-hover:bg-terra-100 group-hover:scale-110 transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">Email</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={`tel:${footerLinks.location.phone}`} 
                    className="flex items-center gap-3 text-charcoal/60 hover:text-olive-600 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-full bg-olive-50 flex items-center justify-center group-hover:bg-olive-100 group-hover:scale-110 transition-all">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">Appeler</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="flex items-center gap-3 text-charcoal/60 hover:text-olive-700 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-full bg-olive-50 flex items-center justify-center group-hover:bg-olive-100 group-hover:scale-110 transition-all">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">Toulouse</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="relative z-10 pt-10 border-t border-olive-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-charcoal/50 text-sm font-medium">
            © {new Date().getFullYear()} Kapsul. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-3">
            {[
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Linkedin, label: 'LinkedIn' },
              { Icon: Facebook, label: 'Facebook' }
            ].map(({ Icon, label }, i) => (
              <a 
                key={i} 
                href="#" 
                aria-label={label}
                className="w-11 h-11 rounded-full bg-olive-50 flex items-center justify-center text-charcoal/70 hover:bg-olive-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-olive-600/20"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}