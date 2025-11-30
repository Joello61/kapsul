'use client';

import { useState } from 'react';
import { MapPin, Mail, Phone, Instagram, Linkedin, Facebook, Heart, Zap, Send } from 'lucide-react';
import { footerLinks } from '@/lib/data';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setEmail('');
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <footer className="relative bg-linear-to-b from-cream to-white overflow-hidden">
      
      {/* Pattern décoratif subtil */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.015]">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,var(--color-olive-600)_1px,transparent_0)] bg-size-[48px_48px]"
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* CTA SECTION */}
        <div className="py-16 sm:py-20 text-center border-b border-gray-300">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-olive-100 border border-olive-300 mb-6">
            <Zap className="w-4 h-4 text-olive-700" strokeWidth={2} />
            <span className="text-sm font-semibold text-olive-800">Prêt à transformer vos pauses ?</span>
          </div>

          {/* Titre */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-charcoal leading-tight">
            Réservez votre première<br />
            expérience <span className="text-olive-700">KAPSUL</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 mb-10 mt-10 leading-relaxed">
            <span className="text-terra-600 font-semibold">12€</span> pour 20 minutes qui vont changer votre rapport au bien-être.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#pricing">
              <button className="bg-olive-600 text-white px-8 py-4 rounded-lg font-semibold text-base flex items-center gap-2 shadow-sm hover:bg-olive-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-250">
                <Zap className="w-5 h-5" strokeWidth={2} />
                Je réserve maintenant
              </button>
            </Link>
            
            <Link href="#concept">
              <button className="bg-terra-500 text-white px-8 py-4 rounded-lg font-semibold text-base shadow-sm hover:bg-terra-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-250">
                En savoir plus
              </button>
            </Link>
          </div>
        </div>

        {/* MAIN FOOTER CONTENT */}
        <div className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
            
            {/* BRAND COLUMN */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-5">
                <h3 className="text-2xl font-bold text-charcoal">Kapsul</h3>
                <div className="w-2 h-2 rounded-full bg-olive-600" />
              </div>
              
              <p className="text-base text-gray-700 mb-8 leading-relaxed">
                La déconnexion instantanée pour les esprits hyperconnectés. 
                <span className="font-semibold text-olive-700"> Récupération physique et mentale</span> en 20 minutes.
              </p>

              {/* Newsletter */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-charcoal mb-3 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-olive-600" strokeWidth={2} />
                  Restez informé de l&apos;ouverture
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-md">
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting || isSubmitted}
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 bg-white text-charcoal text-sm focus:outline-none focus:border-olive-500 focus:ring-2 focus:ring-olive-100 transition-all placeholder:text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="px-5 py-3 bg-olive-600 text-white rounded-lg font-semibold text-sm hover:bg-olive-700 transition-all duration-250 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : isSubmitted ? (
                      <Heart className="w-4 h-4" strokeWidth={2} />
                    ) : (
                      <Send className="w-4 h-4" strokeWidth={2} />
                    )}
                  </button>
                </form>
                {isSubmitted && (
                  <p className="text-xs text-olive-700 font-semibold mt-2">Merci ! On vous tient au courant 🎉</p>
                )}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-700">Suivez-nous :</span>
                {[
                  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-cream border border-gray-300 hover:border-olive-500 hover:bg-olive-50 flex items-center justify-center text-charcoal hover:text-olive-700 transition-all duration-200"
                  >
                    <social.icon className="w-5 h-5" strokeWidth={2} />
                  </a>
                ))}
              </div>
            </div>

            {/* SERVICES COLUMN */}
            <div>
              <h4 className="font-bold text-base mb-4 text-charcoal flex items-center gap-2">
                <Zap className="w-4 h-4 text-olive-600" strokeWidth={2} />
                Services
              </h4>
              <ul className="space-y-3 text-sm text-gray-700">
                {footerLinks.services.map((service) => (
                  <li key={service}>
                    <a 
                      href="#services" 
                      className="hover:text-olive-700 transition-colors duration-200 font-medium inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-olive-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* INFOS COLUMN */}
            <div>
              <h4 className="font-bold text-base mb-4 text-charcoal flex items-center gap-2">
                <Heart className="w-4 h-4 text-terra-600" strokeWidth={2} />
                Informations
              </h4>
              <ul className="space-y-3 text-sm text-gray-700">
                {footerLinks.infos.map((info) => (
                  <li key={info}>
                    <a 
                      href="#" 
                      className="hover:text-terra-700 transition-colors duration-200 font-medium inline-flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-terra-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {info}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT COLUMN */}
            <div>
              <h4 className="font-bold text-base mb-4 text-charcoal">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-olive-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-olive-700" strokeWidth={2} />
                  </div>
                  <span className="leading-relaxed font-medium">
                    {footerLinks.location.name}<br />
                    <span className="text-gray-500">{footerLinks.location.city}</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-terra-100 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-terra-700" strokeWidth={2} />
                  </div>
                  <a 
                    href={`mailto:${footerLinks.location.email}`}
                    className="hover:text-terra-700 transition-colors duration-200 font-medium"
                  >
                    {footerLinks.location.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-beige-100 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-beige-500" strokeWidth={2} />
                  </div>
                  <a 
                    href={`tel:${footerLinks.location.phone.replace(/\s/g, '')}`}
                    className="hover:text-olive-700 transition-colors duration-200 font-medium"
                  >
                    {footerLinks.location.phone}
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-300 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p className="font-medium">
            © 2025 Kapsul. Fait avec <span className="text-terra-600">❤️</span> à Toulouse.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-charcoal transition-colors duration-200 font-medium">
              Mentions légales
            </a>
            <a href="#" className="hover:text-charcoal transition-colors duration-200 font-medium">
              Confidentialité
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}