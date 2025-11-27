'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Mail, Phone, Instagram, Linkedin, Twitter, Heart, Zap } from 'lucide-react';
import { footerLinks } from '@/lib/data';
import Link from 'next/link';

export default function Footer() {
  const footerRef = useRef(null);
  const inView = useInView(footerRef, { once: true, amount: 0.2 });
  const [email, setEmail] = useState('');

  return (
    <footer ref={footerRef} className="relative bg-bg-dark border-t border-white/10 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,255,148,0.15) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,179,71,0.15) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* CTA SECTION (Nouveau) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 sm:py-20 text-center border-b border-white/10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-tech/20 bg-tech/5 mb-6"
          >
            <Zap className="w-4 h-4 text-tech" />
            <span className="text-sm font-medium text-tech">Prêt à déconnecter ?</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="gradient-text-tech">Réservez</span>{' '}
            <span className="text-text-primary">votre première</span>
            <br className="hidden sm:block" />
            <span className="gradient-text-human">expérience KAPSUL</span>
          </h2>

          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            12€ pour 20 minutes qui vont changer votre rapport au bien-être
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#pricing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-tech text-bg-ultra-dark rounded-full font-bold text-lg shadow-[0_0_30px_rgba(0,255,148,0.3)] hover:shadow-[0_0_40px_rgba(0,255,148,0.5)] transition-all"
              >
                Je réserve maintenant
              </motion.button>
            </Link>
            
            <Link href="#concept">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-strong text-text-primary rounded-full font-semibold text-lg hover:border-white/30 transition-all"
              >
                En savoir plus
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* MAIN FOOTER CONTENT */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
            
            {/* BRAND COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  KAPSUL<span className="text-tech">.</span>
                </h3>
              </div>
              
              <p className="text-sm sm:text-base text-text-secondary mb-6 leading-relaxed max-w-sm">
                La déconnexion instantanée pour les esprits hyperconnectés. 
                Récupération physique et mentale en 20 minutes.
              </p>

              {/* Newsletter */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-text-primary mb-3">
                  Restez informé de l'ouverture
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-text-primary text-sm focus:outline-none focus:border-tech/50 transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-tech/20 text-tech rounded-lg font-semibold text-sm hover:bg-tech/30 transition-colors"
                  >
                    OK
                  </motion.button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {[
                  { icon: Instagram, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-tech hover:border-tech/30 transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* SERVICES COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-bold mb-4 text-text-primary flex items-center gap-2">
                <Zap className="w-4 h-4 text-tech" />
                Services
              </h4>
              <ul className="space-y-2.5 text-sm text-text-secondary">
                {footerLinks.services.map((service) => (
                  <li key={service}>
                    <a href="#services" className="hover:text-tech transition-colors hover:translate-x-1 inline-block">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* INFOS COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-bold mb-4 text-text-primary flex items-center gap-2">
                <Heart className="w-4 h-4 text-human" />
                Informations
              </h4>
              <ul className="space-y-2.5 text-sm text-text-secondary">
                {footerLinks.infos.map((info) => (
                  <li key={info}>
                    <a href="#" className="hover:text-human transition-colors hover:translate-x-1 inline-block">
                      {info}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CONTACT COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-bold mb-4 text-text-primary">Contact</h4>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-tech" />
                  <span className="leading-relaxed">
                    {footerLinks.location.name}<br />
                    {footerLinks.location.city}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0 text-human" />
                  <a href="mailto:hello@kapsul.fr" className="hover:text-human transition-colors">
                    hello@kapsul.fr
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0 text-tech" />
                  <a href="tel:+33612345678" className="hover:text-tech transition-colors">
                    06 12 34 56 78
                  </a>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-white/10 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-secondary/70"
        >
          <p>
            © 2025 KAPSUL. Fait avec <span className="text-human">❤️</span> à Toulouse.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-text-primary transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-text-primary transition-colors">
              Confidentialité
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}