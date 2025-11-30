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
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

const fontSans = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600'],
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kapsul.co'),
  title: {
    default: 'KAPSUL | Espace de Déconnexion Urbaine & Récupération',
    template: '%s | KAPSUL'
  },
  description: 'Sanctuaire urbain à Toulouse. Pods de sieste, Réalité Virtuelle, Massage et Yoga. 20 minutes pour régénérer votre potentiel mental et physique.',
  keywords: ['wellness', 'tech', 'déconnexion', 'sieste', 'vr', 'toulouse', 'bien-être', 'recovery', 'kapsul'],
  authors: [{ name: 'KAPSUL Team' }],
  creator: 'KAPSUL',
  publisher: 'KAPSUL',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://kapsul.co',
    siteName: 'KAPSUL',
    title: 'KAPSUL - Récupération & Performance Mentale',
    description: 'Sanctuaire urbain à Toulouse. 20 minutes pour régénérer votre potentiel mental et physique.',
    images: [
      { 
        url: '/og-kapsul.jpg', 
        width: 1200, 
        height: 630, 
        alt: 'KAPSUL - Espace de Récupération Urbaine' 
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAPSUL - Récupération & Performance Mentale',
    description: 'Sanctuaire urbain à Toulouse. 20 minutes pour régénérer votre potentiel.',
    images: ['/og-kapsul.jpg'],
  },
  robots: { 
    index: true, 
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAF9' },
    { media: '(prefers-color-scheme: dark)', color: '#FAFAF9' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className={`
          ${fontSans.variable} ${fontHeading.variable} 
          antialiased min-h-screen flex flex-col
          bg-cream text-charcoal 
          selection:bg-olive-200 selection:text-olive-900
        `}
      >
        {/* Skip Link - Accessibilité WCAG 2.1 */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-6 focus:py-3 focus:bg-olive-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-olive-700 focus:ring-offset-2"
        >
          Aller au contenu principal
        </a>

        <Header />
        
        <main id="main-content" className="flex-1 w-full relative z-0" role="main">
          {children}
        </main>
        
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}