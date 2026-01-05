import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
  display: 'swap',
});
export const metadata: Metadata = {
  metadataBase: new URL('https://kapsul.co'),
  title: {
    default: 'KAPSUL — Sanctuaire Urbain de Récupération',
    template: '%s | KAPSUL'
  },
  description: 'Réparer le corps. Apaiser l\'esprit. Votre pause régénération à Toulouse : Pods immersifs, massages experts, yoga doux. 20 minutes pour tout changer.',
  keywords: ['sanctuaire urbain', 'déconnexion', 'récupération', 'pods', 'massage', 'yoga', 'toulouse', 'bien-être', 'burnout', 'stress'],
  authors: [{ name: 'KAPSUL' }],
  creator: 'KAPSUL',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://kapsul.co',
    siteName: 'KAPSUL',
    title: 'KAPSUL — Sanctuaire Urbain de Récupération',
    description: 'Réparer le corps. Apaiser l\'esprit. Votre cocon de décompression au cœur de Toulouse.',
    images: [{ 
      url: '/og-kapsul.jpg', 
      width: 1200, 
      height: 630, 
      alt: 'KAPSUL - Sanctuaire Urbain' 
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAPSUL — Sanctuaire Urbain',
    description: 'Réparer le corps. Apaiser l\'esprit.',
    images: ['/og-kapsul.jpg'],
  },
  robots: { 
    index: true, 
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#F5F3F0',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <a 
          href="#main" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-sage-600 focus:text-white focus:rounded-2xl"
        >
          Aller au contenu
        </a>

        <Header />
        
        <main id="main">
          {children}
        </main>
        
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}