'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Mail, Phone, Instagram, Linkedin, Twitter, Heart, Zap, Send, Sparkles } from 'lucide-react';
import { footerLinks } from '@/lib/data';
import Link from 'next/link';

export default function Footer() {
  const footerRef = useRef(null);
  const inView = useInView(footerRef, { once: true, amount: 0.2 });
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simuler l'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <footer ref={footerRef} className="relative bg-linear-to-b from-cream to-pearl overflow-hidden">
      
      {/* Background Effects Premium */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blurs colorés animés */}
        <motion.div
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.15, 1],
            rotate: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-[30%] -left-[15%] w-[700px] h-[700px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, var(--color-emerald-300) 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.2, 1],
            rotate: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-[30%] -right-[15%] w-[700px] h-[700px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, var(--color-coral-300) 0%, transparent 70%)',
          }}
        />

        {/* Pattern décoratif */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-emerald-500) 1px, transparent 0)',
            backgroundSize: '64px 64px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* CTA SECTION Premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="py-20 sm:py-28 text-center border-b border-emerald-200"
        >
          {/* Badge animé */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-emerald mb-8 border-2 border-emerald-300"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
            </motion.div>
            <span className="text-sm font-bold gradient-emerald">Prêt à transformer vos pauses ?</span>
          </motion.div>

          {/* Titre avec gradient */}
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="gradient-emerald">Réservez</span> votre première
            <br className="hidden sm:block" />
            <span className="gradient-sunset">expérience KAPSUL</span>
          </motion.h2>

          <motion.p 
            className="text-xl sm:text-2xl text-charcoal max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-coral-600 font-bold">12€</span> pour 20 minutes qui vont changer votre rapport au bien-être.
          </motion.p>

          {/* CTA Buttons Premium */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link href="#pricing">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-lg px-10 py-5 flex items-center gap-3"
              >
                <Zap className="w-5 h-5 fill-white" />
                Je réserve maintenant
              </motion.button>
            </Link>
            
            <Link href="#concept">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary text-lg px-10 py-5"
              >
                En savoir plus
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* MAIN FOOTER CONTENT */}
        <div className="py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* BRAND COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              {/* Logo avec animation */}
              <div className="flex items-center gap-2 mb-6">
                <h3 className="text-3xl font-bold tracking-tight text-ink">
                  Kapsul
                </h3>
                <motion.div
                  className="w-3 h-3 rounded-full bg-linear-to-br from-emerald-500 to-coral-500"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              
              <p className="text-lg text-charcoal mb-8 leading-relaxed max-w-md">
                La déconnexion instantanée pour les esprits hyperconnectés. 
                <span className="font-semibold text-emerald-700"> Récupération physique et mentale</span> en 20 minutes.
              </p>

              {/* Newsletter Premium */}
              <div className="mb-10">
                <p className="text-base font-bold text-ink mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  Restez informé de l'ouverture
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-3 max-w-md">
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-5 py-3 rounded-2xl glass border-2 border-emerald-200 text-ink text-base focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all placeholder:text-slate"
                  />
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-linear-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl font-bold text-base hover:shadow-emerald transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </motion.button>
                </form>
              </div>

              {/* Social Links Premium */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-charcoal">Suivez-nous :</span>
                {[
                  { icon: Instagram, href: '#', color: 'var(--color-coral-500)' },
                  { icon: Linkedin, href: '#', color: 'var(--color-emerald-500)' },
                  { icon: Twitter, href: '#', color: 'var(--color-lavender-500)' }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-2xl glass border-2 border-transparent hover:border-emerald-300 flex items-center justify-center text-charcoal transition-all"
                    style={{
                      '--hover-color': social.color
                    } as React.CSSProperties}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = social.color;
                      e.currentTarget.style.backgroundColor = `${social.color}15`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--color-charcoal)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <social.icon className="w-6 h-6" strokeWidth={2} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* SERVICES COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-bold text-lg mb-6 text-ink flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-600" />
                Services
              </h4>
              <ul className="space-y-4 text-base text-charcoal">
                {footerLinks.services.map((service, idx) => (
                  <motion.li 
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                  >
                    <a 
                      href="#services" 
                      className="hover:text-emerald-600 hover:translate-x-2 inline-flex items-center gap-2 transition-all font-medium group"
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100"
                        whileHover={{ scale: 1.5 }}
                      />
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* INFOS COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-bold text-lg mb-6 text-ink flex items-center gap-2">
                <Heart className="w-5 h-5 text-coral-600" />
                Informations
              </h4>
              <ul className="space-y-4 text-base text-charcoal">
                {footerLinks.infos.map((info, idx) => (
                  <motion.li 
                    key={info}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + idx * 0.05 }}
                  >
                    <a 
                      href="#" 
                      className="hover:text-coral-600 hover:translate-x-2 inline-flex items-center gap-2 transition-all font-medium group"
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-coral-400 opacity-0 group-hover:opacity-100"
                        whileHover={{ scale: 1.5 }}
                      />
                      {info}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CONTACT COLUMN */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-bold text-lg mb-6 text-ink">Contact</h4>
              <ul className="space-y-5 text-base text-charcoal">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-100 to-emerald-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-700" strokeWidth={2.5} />
                  </div>
                  <span className="leading-relaxed font-medium">
                    {footerLinks.location.name}<br />
                    <span className="text-slate">{footerLinks.location.city}</span>
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-coral-100 to-coral-200 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-coral-700" strokeWidth={2.5} />
                  </div>
                  <a 
                    href="mailto:hello@kapsul.fr" 
                    className="hover:text-coral-600 transition-colors font-medium hover:underline"
                  >
                    hello@kapsul.fr
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-lavender-100 to-lavender-200 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-lavender-700" strokeWidth={2.5} />
                  </div>
                  <a 
                    href="tel:+33612345678" 
                    className="hover:text-emerald-600 transition-colors font-medium hover:underline"
                  >
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t-2 border-emerald-200 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-base text-slate"
        >
          <p className="font-medium">
            © 2025 Kapsul. Fait avec <motion.span 
              className="inline-block text-coral-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >❤️</motion.span> à Toulouse.
          </p>
          
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-ink transition-colors font-medium hover:underline">
              Mentions légales
            </a>
            <a href="#" className="hover:text-ink transition-colors font-medium hover:underline">
              Confidentialité
            </a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}