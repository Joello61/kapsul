'use client';

import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface BentoCardProps {
  title: string;
  desc: string;
  className?: string;
  highlight?: boolean;
  children?: React.ReactNode;
  image?: string;
  imagePosition?: 'top' | 'background' | 'side';
  href?: string;
}

export default function BentoCard({ 
  title, 
  desc, 
  className = '', 
  highlight = false, 
  children,
  image,
  imagePosition = 'top',
}: BentoCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`
        group relative overflow-hidden h-full flex flex-col
        bg-white rounded-3xl
        border border-gray-100
        shadow-sm hover:shadow-2xl hover:shadow-olive-900/5
        transition-all duration-500 cubic-bezier(0.22, 1, 0.36, 1)
        ${highlight ? 'ring-1 ring-olive-500/30' : ''}
        ${className}
      `}
    >
      {/* === CAS 1 : IMAGE EN BACKGROUND (Style Immersif) === */}
      {image && imagePosition === 'background' && (
        <>
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image 
              src={image} 
              alt={title} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoad={() => setImageLoaded(true)}
              className={`
                object-cover
                transition-transform duration-700 ease-out
                group-hover:scale-105
                ${imageLoaded ? 'opacity-100' : 'opacity-0'}
              `}
              priority
            />
            {/* Gradient Overlay plus prononcé pour la lisibilité du texte blanc */}
            <div className="absolute inset-0 bg-linear-to-t from-charcoal/95 via-charcoal/60 to-transparent opacity-90 transition-opacity duration-500" />
            
            {/* Noise texture subtile */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
          </div>

          <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-end h-full mt-auto">
            {highlight && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-olive-500/20 backdrop-blur-md border border-olive-500/30 mb-6 self-start">
                <Sparkles className="w-3.5 h-3.5 text-olive-100" />
                <span className="text-xs font-bold text-white tracking-wide uppercase">Recommandé</span>
              </div>
            )}

            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3 leading-tight tracking-tight drop-shadow-sm">
              {title}
            </h3>
            
            <p className="text-gray-200 text-lg leading-relaxed max-w-xl text-balance transition-colors duration-300">
              {desc}
            </p>

            {/* CORRECTION : Contenu toujours visible (plus d'opacité 0) */}
            <div className="mt-8 relative">
               {children}
            </div>
          </div>
        </>
      )}

      {/* === CAS 2 : IMAGE TOP (Style Classique) === */}
      {image && imagePosition === 'top' && (
        <>
          <div className="relative h-64 overflow-hidden shrink-0 m-2 rounded-2xl">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoad={() => setImageLoaded(true)}
              className={`
                object-cover
                transition-transform duration-700 ease-out
                group-hover:scale-110
                ${imageLoaded ? 'opacity-100' : 'opacity-0'}
              `}
            />
            {/* Badge flottant */}
            {highlight && (
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-olive-800 shadow-sm border border-olive-100">
                Top Choix
              </div>
            )}
          </div>

          <div className="p-8 flex flex-col grow">
            <h3 className="font-heading text-2xl font-bold text-charcoal mb-3 group-hover:text-olive-700 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6 grow">
              {desc}
            </p>
            <div className="flex items-center text-olive-600 font-bold text-sm gap-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
              Découvrir <ArrowRight className="w-4 h-4" />
            </div>
            {children}
          </div>
        </>
      )}

      {/* === CAS 3 : SANS IMAGE (Style Minimaliste) === */}
      {!image && (
        <div className="relative p-8 h-full flex flex-col bg-linear-to-br from-white to-gray-50/50">
           {/* Décoration d'arrière-plan */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-olive-100/50 rounded-bl-full -mr-8 -mt-8 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
           
          {highlight && (
            <div className="mb-6">
               <span className="inline-block px-3 py-1 rounded-full bg-olive-100 text-olive-800 text-xs font-bold uppercase tracking-wider">
                 Premium
               </span>
            </div>
          )}

          <h3 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-4 group-hover:text-olive-700 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed grow">
            {desc}
          </p>

          <div className="mt-6 pt-6 border-t border-gray-100">
             {children}
          </div>
        </div>
      )}
    </div>
  );
}