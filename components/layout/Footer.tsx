'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone, Instagram, Linkedin, Facebook, ArrowRight, Check, Loader2, ExternalLink } from 'lucide-react';
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
    <footer className="relative bg-white overflow-hidden border-t border-sage-100">
      
      {/* FOOTER PRINCIPAL */}
      <div className="bg-cream py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 w-full relative">
          
          {/* Watermark subtil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden opacity-[0.02] pointer-events-none select-none">
            <span className="text-[8vw] font-serif font-bold leading-none text-charcoal text-center block whitespace-nowrap">
              KAPSUL
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
            
            {/* BRAND & NEWSLETTER */}
            <div className="lg:col-span-4 space-y-6">
              <Link href="/" className="inline-block group">
                <span className="font-serif font-semibold text-3xl text-charcoal flex items-center gap-2">
                  KAPSUL
                  <span className="w-2 h-2 rounded-full bg-sage-600 group-hover:scale-125 transition-transform" />
                </span>
              </Link>
              
              <p className="text-gray-700 text-sm max-w-xs leading-relaxed">
                Le sanctuaire urbain de récupération. Tech et Touch pour votre équilibre corps-esprit.
              </p>

              {/* Stats discrets */}
              <div className="flex items-center gap-6 pt-2">
                <div>
                  <div className="font-serif text-2xl font-semibold text-charcoal">500+</div>
                  <div className="text-xs text-gray-600">Clients actifs</div>
                </div>
                <div className="w-px h-10 bg-sage-200/50" />
                <div>
                  <div className="font-serif text-2xl font-semibold text-sage-600">4.9/5</div>
                  <div className="text-xs text-gray-600">Satisfaction</div>
                </div>
              </div>

              {/* Newsletter compact */}
              <div className="pt-4">
                <p className="text-sm font-semibold text-charcoal mb-3">Newsletter</p>
                <div className="relative max-w-xs">
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status !== 'idle'}
                    className="w-full bg-white border border-sage-200/50 text-charcoal rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-sage-400 transition-all placeholder:text-gray-500 disabled:opacity-70"
                  />
                  <button
                    type="button"
                    onClick={handleSubscribe}
                    disabled={status !== 'idle' || !email}
                    className={`absolute right-1 top-1 bottom-1 aspect-square rounded-full flex items-center justify-center transition-all ${status === 'success' ? 'bg-sage-600 text-white' : 'bg-sage-600 text-white hover:bg-sage-700'} disabled:opacity-50`}
                    aria-label="S'inscrire"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="w-4 h-4 animate-spin" strokeWidth={2} />
                    ) : status === 'success' ? (
                      <Check className="w-4 h-4" strokeWidth={2} />
                    ) : (
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    )}
                  </button>
                </div>
                {status === 'success' && (
                  <p className="text-sage-700 text-xs mt-2 font-medium">✓ Merci !</p>
                )}
              </div>
            </div>

            {/* LINKS */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              
              {/* Services */}
              <div>
                <h4 className="font-semibold text-charcoal text-sm mb-4">Services</h4>
                <ul className="space-y-2.5">
                  {footerLinks.services.map((link) => (
                    <li key={link}>
                      <Link 
                        href="#services" 
                        className="text-gray-600 hover:text-sage-600 transition-colors text-sm block"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Infos */}
              <div>
                <h4 className="font-semibold text-charcoal text-sm mb-4">Informations</h4>
                <ul className="space-y-2.5">
                  {footerLinks.infos.map((link) => (
                    <li key={link}>
                      <Link 
                        href={link === 'À Propos' ? '/about' : '#'} 
                        className="text-gray-600 hover:text-sage-600 transition-colors text-sm block"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold text-charcoal text-sm mb-4">Contact</h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a 
                      href={`mailto:${footerLinks.location.email}`} 
                      className="text-gray-600 hover:text-sage-600 transition-colors flex items-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5" strokeWidth={2} />
                      Email
                    </a>
                  </li>
                  <li>
                    <a 
                      href={`tel:${footerLinks.location.phone}`} 
                      className="text-gray-600 hover:text-sage-600 transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5" strokeWidth={2} />
                      {footerLinks.location.phone}
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-sage-600 transition-colors flex items-center gap-2"
                    >
                      <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
                      St-Cyprien
                    </a>
                  </li>
                </ul>
              </div>

              {/* Horaires & Accès */}
              <div>
                <h4 className="font-semibold text-charcoal text-sm mb-4">Horaires</h4>
                <ul className="space-y-2.5 text-sm text-gray-600">
                  <li className="leading-relaxed">
                    <strong className="text-charcoal block text-xs mb-1">Lun - Ven</strong>
                    9h - 20h
                  </li>
                  <li className="leading-relaxed">
                    <strong className="text-charcoal block text-xs mb-1">Sam - Dim</strong>
                    10h - 18h
                  </li>
                  <li className="pt-2">
                    <a 
                      href="#" 
                      className="text-sage-600 hover:text-sage-700 font-medium inline-flex items-center gap-1 text-xs"
                    >
                      Voir plan d&apos;accès
                      <ExternalLink className="w-3 h-3" strokeWidth={2} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="relative z-10 pt-8 border-t border-sage-200/50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-600">
              <p>© {new Date().getFullYear()} KAPSUL</p>
              <div className="hidden md:block w-px h-4 bg-sage-200/50" />
              <div className="flex items-center gap-4">
                <Link href="#" className="hover:text-sage-600 transition-colors">Mentions légales</Link>
                <span className="text-sage-200">•</span>
                <Link href="#" className="hover:text-sage-600 transition-colors">Confidentialité</Link>
                <span className="text-sage-200">•</span>
                <Link href="#" className="hover:text-sage-600 transition-colors">CGV</Link>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, label: 'Instagram', url: '#' },
                { Icon: Linkedin, label: 'LinkedIn', url: '#' },
                { Icon: Facebook, label: 'Facebook', url: '#' }
              ].map(({ Icon, label, url }, i) => (
                <a 
                  key={i} 
                  href={url} 
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white border border-sage-200/50 flex items-center justify-center text-gray-600 hover:bg-sage-600 hover:text-white hover:border-sage-600 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}