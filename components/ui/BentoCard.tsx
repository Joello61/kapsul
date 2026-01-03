'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BentoCardProps {
  title: string;
  desc: string;
  className?: string;
  highlight?: boolean;
  children?: React.ReactNode;
  image?: string;
  imagePosition?: 'top' | 'background' | 'side';
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
        border border-sage-100/50
        shadow-sm hover:shadow-md
        transition-all duration-500 ease-out
        ${highlight ? 'ring-2 ring-sage-400/20 ring-offset-4' : ''}
        ${className}
      `}
    >
      {/* === IMAGE EN BACKGROUND === */}
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
                transition-all duration-700 ease-out
                group-hover:scale-105
                ${imageLoaded ? 'opacity-100' : 'opacity-0'}
              `}
              priority
            />
            {/* Overlay doux avec couleur charcoal de la palette */}
            <div className="absolute inset-0 bg-linear-to-t from-charcoal/90 via-charcoal/50 to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-10 flex flex-col justify-end h-full mt-auto">
            {highlight && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 self-start">
                <div className="w-2 h-2 rounded-full bg-sage-400 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide">Recommandé</span>
              </div>
            )}

            <h3 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
              {title}
            </h3>
            
            <p className="text-white/90 text-base leading-relaxed max-w-xl mb-8">
              {desc}
            </p>

            <div className="relative">
               {children}
            </div>
          </div>
        </>
      )}

      {/* === IMAGE TOP === */}
      {image && imagePosition === 'top' && (
        <>
          <div className="relative h-56 overflow-hidden shrink-0 rounded-t-3xl">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoad={() => setImageLoaded(true)}
              className={`
                object-cover
                transition-all duration-700 ease-out
                group-hover:scale-110
                ${imageLoaded ? 'opacity-100' : 'opacity-0'}
              `}
            />
            {highlight && (
              <div className="absolute top-4 right-4 glass px-4 py-1.5 rounded-full text-xs font-semibold text-sage-800">
                Top Choix
              </div>
            )}
          </div>

          <div className="p-8 flex flex-col grow">
            <h3 className="font-serif text-2xl font-semibold text-charcoal mb-3 group-hover:text-sage-700 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 grow text-[15px]">
              {desc}
            </p>
            {children}
          </div>
        </>
      )}

      {/* === SANS IMAGE === */}
      {!image && (
        <div className="relative p-8 h-full flex flex-col">
          {/* Glow subtil en arrière-plan */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-sage-200/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
           
          {highlight && (
            <div className="mb-6">
               <span className="inline-block px-4 py-1.5 rounded-full bg-terra-100 text-terra-600 text-xs font-semibold tracking-wide">
                 Premium
               </span>
            </div>
          )}

          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-charcoal mb-4 group-hover:text-sage-700 transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-700 leading-relaxed grow text-[15px]">
            {desc}
          </p>

          <div className="mt-6 pt-6 border-t border-sage-100">
             {children}
          </div>
        </div>
      )}
    </div>
  );
}