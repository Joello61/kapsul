'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
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
  imagePosition = 'top'
}: BentoCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`
        group relative overflow-hidden h-full flex flex-col
        bg-white rounded-xl
        border border-gray-100
        shadow-sm
        transition-all duration-300 ease-out
        hover:shadow-lg hover:-translate-y-1
        ${highlight ? 'ring-2 ring-olive-500 ring-offset-4' : ''}
        ${className}
      `}
    >
      {/* === CAS 1 : IMAGE EN BACKGROUND === */}
      {image && imagePosition === 'background' && (
        <>
          {/* Image de fond */}
          <div className="absolute inset-0 z-0">
            <Image 
              src={image} 
              alt={title} 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onLoad={() => setImageLoaded(true)}
              className={`
                object-cover
                transition-all duration-700 ease-out
                ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
              `}
              priority
            />
            {/* Overlay gradient optimisé */}
            <div className="absolute inset-0 bg-linear-to-t from-charcoal/95 via-charcoal/60 to-transparent" />
          </div>

          {/* Contenu */}
          <div className="relative z-10 p-8 sm:p-10 lg:p-12 mt-auto">
            {highlight && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-olive-100/95 backdrop-blur-sm border border-olive-400 mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 text-olive-700" strokeWidth={2} />
                <span className="text-sm font-semibold text-olive-800">Recommandé</span>
              </div>
            )}

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
              {title}
            </h3>
            
            <p className="text-base sm:text-lg lg:text-xl text-white/95 mb-8 leading-relaxed max-w-2xl">
              {desc}
            </p>

            {children}
          </div>

          {/* Loading skeleton amélioré */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-linear-to-br from-sand to-cream animate-pulse" />
          )}
        </>
      )}

      {/* === CAS 2 : IMAGE TOP === */}
      {image && imagePosition === 'top' && (
        <>
          <div className="relative h-56 sm:h-64 overflow-hidden shrink-0">
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
            
            {/* Badge highlight optimisé */}
            {highlight && (
              <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-olive-400 shadow-md">
                <Sparkles className="w-4 h-4 text-olive-600" strokeWidth={2} />
                <span className="text-sm font-semibold text-olive-700">Top choix</span>
              </div>
            )}

            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-linear-to-br from-sand to-cream animate-pulse" />
            )}
          </div>

          <div className="p-6 sm:p-8 flex flex-col grow">
            <h3 className={`
              text-xl sm:text-2xl lg:text-3xl font-bold mb-3 leading-tight
              transition-colors duration-300
              ${highlight ? 'text-olive-700' : 'text-charcoal group-hover:text-olive-700'}
            `}>
              {title}
            </h3>
            
            <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed grow">
              {desc}
            </p>

            {children}
          </div>
        </>
      )}

      {/* === CAS 3 : IMAGE SIDE === */}
      {image && imagePosition === 'side' && (
        <div className="flex flex-col sm:flex-row h-full">
          <div className="w-full sm:w-2/5 h-56 sm:h-full relative overflow-hidden shrink-0">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, 40vw"
              onLoad={() => setImageLoaded(true)}
              className={`
                object-cover
                transition-all duration-700 ease-out
                group-hover:scale-105
                ${imageLoaded ? 'opacity-100' : 'opacity-0'}
              `}
              priority
            />
            
            {/* Loading skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-linear-to-br from-sand to-cream animate-pulse" />
            )}
          </div>

          <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-charcoal leading-tight transition-colors duration-300 group-hover:text-olive-700">
              {title}
            </h3>
            
            <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
              {desc}
            </p>

            {children}
          </div>
        </div>
      )}

      {/* === CAS 4 : SANS IMAGE === */}
      {!image && (
        <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col h-full">
          {highlight && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-olive-100 border border-olive-400 mb-6 w-fit shadow-sm">
              <Sparkles className="w-4 h-4 text-olive-700" strokeWidth={2} />
              <span className="text-sm font-semibold text-olive-800">Premium</span>
            </div>
          )}

          <h3 className={`
            text-xl sm:text-2xl lg:text-3xl font-bold mb-4 leading-tight
            transition-colors duration-300
            ${highlight ? 'text-olive-700' : 'text-charcoal group-hover:text-olive-700'}
          `}>
            {title}
          </h3>
          
          <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed flex-1">
            {desc}
          </p>

          {children}
        </div>
      )}
    </div>
  );
}