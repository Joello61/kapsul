import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';

export const metadata: Metadata = {
  metadataBase: new URL('https://kapsul.co'),
  title: 'KAPSUL - La Déconnexion Instantanée | Bien-être Urbain Toulouse',
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
    'micro-sieste'
  ],
  authors: [{ name: 'KAPSUL Team' }],
  creator: 'KAPSUL',
  publisher: 'KAPSUL',
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
        alt: 'KAPSUL - Espace de bien-être urbain'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAPSUL - La Déconnexion Instantanée',
    description: 'Bien-être urbain nouvelle génération à Toulouse',
    images: ['/twitter-image.jpg'],
    creator: '@kapsul'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F7F5' },
    { media: '(prefers-color-scheme: dark)', color: '#F8F7F5' }
  ]
};

export default function RootLayout({ 
  children 
}: Readonly<{ 
  children: React.ReactNode 
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      
      <body className="antialiased">
        
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-6 focus:py-3 focus:rounded-full focus:bg-olive-600 focus:text-white focus:font-bold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-olive-400 focus:ring-offset-2"
        >
          Aller au contenu principal
        </a>

        {/* Layout structure */}
        <Header />
        
        <main id="main-content" className="container mx-auto relative">
          {children}
        </main>
        
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}