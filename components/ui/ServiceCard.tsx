'use client';

import { useState } from 'react';
import { Service } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <div className={`
        bg-white border border-gray-100 rounded-2xl p-8 
        h-full flex flex-col relative overflow-hidden cursor-pointer
        shadow-sm
        transition-all duration-350 ease-out
        ${isHovered ? 'transform -translate-y-3 shadow-xl border-gray-200' : ''}
      `}>
        
        {/* Pattern décoratif optimisé */}
        <div 
          className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(circle_at_2px_2px,currentColor_1.5px,transparent_0)] bg-size-[28px_28px] transition-opacity duration-500"
          style={{ 
            color: service.color,
            opacity: isHovered ? 0.04 : 0.025
          }}
        />

        {/* En-tête : Icône + Badge */}
        <div className="relative z-10 flex items-start justify-between mb-8">
          {/* Icône optimisée */}
          <div 
            className={`
              w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center
              transition-all duration-350 ease-out
              ${isHovered ? 'shadow-lg scale-110 rotate-3' : 'shadow-sm'}
            `}
            style={{ 
              backgroundColor: isHovered ? service.color : 'var(--color-cream)',
            }}
          >
            <Icon 
              className="w-8 h-8 sm:w-9 sm:h-9 transition-all duration-350" 
              style={{ 
                color: isHovered ? '#FFFFFF' : service.color,
              }} 
              strokeWidth={isHovered ? 2 : 1.5}
            />
          </div>
          
          {/* Badge optimisé */}
          <div 
            className={`
              px-4 py-2 rounded-full text-xs sm:text-sm font-bold
              transition-all duration-350
              ${isHovered 
                ? 'border-2 scale-105' 
                : 'border border-gray-300'
              }
            `}
            style={{ 
              borderColor: isHovered ? service.color : undefined,
              color: isHovered ? service.color : 'var(--color-gray-700)',
              backgroundColor: isHovered ? `${service.color}15` : 'transparent'
            }}
          >
            {service.badge}
          </div>
        </div>
        
        {/* Contenu */}
        <div className="relative z-10 flex-1 mb-8">
          <h3 
            className="text-2xl sm:text-3xl font-bold mb-4 transition-colors duration-350"
            style={{ 
              color: isHovered ? service.color : 'var(--color-charcoal)' 
            }}
          >
            {service.name}
          </h3>
          
          <p className="text-base text-gray-700 leading-relaxed">
            {service.desc}
          </p>
        </div>

        {/* Footer optimisé */}
        <div className="relative z-10 space-y-5">
          {/* Barre de progression améliorée */}
          <div className="relative h-1.5 w-full bg-sand rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700 ease-out"
              style={{ 
                backgroundColor: service.color,
                width: isHovered ? '100%' : '0%',
              }}
            />
          </div>

          {/* CTA Link optimisé */}
          <div
            className={`
              flex items-center gap-2 text-base font-bold
              transition-all duration-350 ease-out
              ${isHovered ? 'opacity-100 translate-x-2' : 'opacity-0 -translate-x-2'}
            `}
            style={{ color: service.color }}
          >
            <span>En savoir plus</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-350 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
          </div>
        </div>

        {/* Border highlight optimisé */}
        <div
          className={`
            absolute inset-0 rounded-2xl pointer-events-none
            transition-all duration-350 ease-out
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            boxShadow: `0 0 0 2px ${service.color}30 inset`,
          }}
        />
      </div>
    </div>
  );
}