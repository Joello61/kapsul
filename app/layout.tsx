import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "KAPSUL - La Déconnexion Instantanée",
  description: "Espace de bien-être urbain hybride. Pods VR, Massage expert, Yoga. Moins cher qu'une thérapie, plus efficace qu'une sieste.",
  keywords: ["bien-être", "relaxation", "VR", "massage", "yoga", "Toulouse"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-bg-ultra-dark text-text-primary`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}