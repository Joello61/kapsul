import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

const fontHeading = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

const fontSans = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kapsul.co'),
  title: {
    default: 'KAPSUL | Espace de Déconnexion Urbaine & Récupération',
    template: '%s | KAPSUL'
  },
  description: 'Sanctuaire urbain à Toulouse. Pods de sieste, Réalité Virtuelle, Massage et Yoga. 20 minutes pour régénérer votre potentiel mental et physique.',
  keywords: ['wellness', 'tech', 'déconnexion', 'sieste', 'vr', 'toulouse', 'bien-être', 'recovery'],
  authors: [{ name: 'KAPSUL Team' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'KAPSUL',
    title: 'KAPSUL - Récupération & Performance Mentale',
    images: [{ url: '/og-kapsul.jpg', width: 1200, height: 630, alt: 'Kapsul Space' }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#FAFAF9',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body 
        className={`
          ${fontSans.variable} ${fontHeading.variable} 
          antialiased min-h-screen flex flex-col
          bg-cream text-charcoal selection:bg-olive-200 selection:text-olive-900
        `}
      >
        {/* Skip Link pour l'accessibilité */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-olive-600 focus:text-white focus:rounded-lg">
          Aller au contenu
        </a>

        <Header />
        
        <main id="main-content" className="flex-1 w-full relative z-0">
          {children}
        </main>
        
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}