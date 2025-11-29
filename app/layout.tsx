import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

// Font principale : Plus Jakarta Sans (moderne et géométrique)
const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ['400', '500', '600', '700', '800']
});

// Font secondaire : Inter (fallback)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAPSUL - La Déconnexion Instantanée | Bien-être Urbain Toulouse",
  description: "Espace de bien-être urbain hybride à Toulouse. Pods VR immersifs, Massage expert, Yoga & Méditation. 20 minutes pour régénérer corps et esprit. Réservez dès maintenant.",
  keywords: [
    "bien-être Toulouse",
    "relaxation urbaine",
    "pods VR",
    "massage Toulouse",
    "yoga Toulouse",
    "méditation",
    "déconnexion",
    "récupération mentale",
    "KAPSUL"
  ],
  authors: [{ name: "KAPSUL Team" }],
  openGraph: {
    title: "KAPSUL - La Déconnexion Instantanée",
    description: "20 minutes pour régénérer corps et esprit. Espace bien-être nouvelle génération à Toulouse.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAPSUL - La Déconnexion Instantanée",
    description: "Bien-être urbain nouvelle génération à Toulouse",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const themeColor = [
  { media: "(prefers-color-scheme: light)", color: "#577C74" },
  { media: "(prefers-color-scheme: dark)", color: "#3D5A53" }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body 
        className={` 
          ${plusJakarta.variable} ${inter.variable} 
          font-sans antialiased 
          bg-linear-to-br from-pearl via-cream to-mist
          text-ink
        `}
        style={{
          fontFamily: 'var(--font-plus-jakarta), var(--font-inter), system-ui, sans-serif'
        }}
      >
        <a 
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-200 focus:px-6 focus:py-3 focus:rounded-full focus:bg-emerald-500 focus:text-white focus:font-bold focus:shadow-emerald"
        >
          Aller au contenu principal
        </a>

        <Header />
        <main id="main-content" className="relative flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />

        <div 
          className="fixed inset-0 pointer-events-none z-90 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }}
        />
      </body>
    </html>
  );
}
