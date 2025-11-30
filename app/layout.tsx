import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

export const metadata: Metadata = {
  metadataBase: new URL('https://kapsul.co'),
  title: {
    default: 'KAPSUL - La Déconnexion Instantanée | Bien-être Urbain Toulouse',
    template: '%s | KAPSUL'
  },
  description: 'Espace de bien-être urbain hybride à Toulouse. Pods VR immersifs, Massage expert, Yoga & Méditation. 20 minutes pour régénérer corps et esprit. Réservez dès maintenant.',
  keywords: [
    'bien-être Toulouse',
    'relaxation urbaine',
    'pods VR',
    'massage Toulouse',
    'yoga Toulouse',
    'méditation',
    'déconnexion',
    'récupération mentale',
    'KAPSUL',
    'wellness',
    'micro-sieste',
    'espace bien-être',
    'Saint-Cyprien'
  ],
  authors: [{ name: 'KAPSUL Team', url: 'https://kapsul.co' }],
  creator: 'KAPSUL',
  publisher: 'KAPSUL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://kapsul.co',
    siteName: 'KAPSUL',
    title: 'KAPSUL - La Déconnexion Instantanée',
    description: '20 minutes pour régénérer corps et esprit. Espace bien-être nouvelle génération à Toulouse.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KAPSUL - Espace de bien-être urbain à Toulouse',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAPSUL - La Déconnexion Instantanée',
    description: 'Bien-être urbain nouvelle génération à Toulouse',
    images: ['/twitter-image.jpg'],
    creator: '@kapsul',
    site: '@kapsul',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://kapsul.co',
  },
  category: 'wellness',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F7F5' },
    { media: '(prefers-color-scheme: dark)', color: '#F8F7F5' }
  ],
};

export default function RootLayout({ 
  children 
}: Readonly<{ 
  children: React.ReactNode 
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      
      <body className="antialiased min-h-screen flex flex-col">
        
        {/* Skip to main content - Accessibilité A++ */}
        <a 
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-6 focus:z-100 focus:px-8 focus:py-4 focus:rounded-2xl focus:bg-olive-600 focus:text-white focus:font-bold focus:text-base focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-olive-400 focus:ring-offset-4 transition-all duration-300"
        >
          Aller au contenu principal
        </a>

        {/* Layout structure optimisé */}
        <Header />
        
        <main id="main-content" className="flex-1">
          {children}
        </main>
        
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}