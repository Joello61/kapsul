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
        bg-white border border-gray-100 rounded-xl p-6 sm:p-8 
        h-full flex flex-col relative overflow-hidden cursor-pointer
        shadow-sm
        transition-all duration-300
        ${isHovered ? 'transform -translate-y-2 shadow-md' : ''}
      `}>
        
        {/* Pattern décoratif subtil */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(circle_at_2px_2px,currentColor_1px,transparent_0)] bg-size-[24px_24px]"
          style={{ color: service.color }}
        />

        {/* En-tête : Icône + Badge */}
        <div className="relative z-10 flex items-start justify-between mb-6">
          {/* Icône */}
          <div 
            className={`
              w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center
              transition-all duration-300
              ${isHovered ? 'shadow-md scale-105' : 'shadow-sm'}
            `}
            style={{ 
              backgroundColor: isHovered ? service.color : 'var(--color-cream)',
            }}
          >
            <Icon 
              className="w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300" 
              style={{ 
                color: isHovered ? '#FFFFFF' : service.color,
              }} 
              strokeWidth={1.5}
            />
          </div>
          
          {/* Badge */}
          <div 
            className={`
              px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold
              transition-all duration-300
              ${isHovered 
                ? 'border-2' 
                : 'border border-gray-300'
              }
            `}
            style={{ 
              borderColor: isHovered ? service.color : undefined,
              color: isHovered ? service.color : 'var(--color-gray-700)',
              backgroundColor: isHovered ? `${service.color}10` : 'transparent'
            }}
          >
            {service.badge}
          </div>
        </div>
        
        {/* Contenu textuel */}
        <div className="relative z-10 grow mb-6">
          <h3 
            className={`
              text-xl sm:text-2xl font-bold mb-3
              transition-colors duration-300
            `}
            style={{ 
              color: isHovered ? service.color : 'var(--color-charcoal)' 
            }}
          >
            {service.name}
          </h3>
          
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {service.desc}
          </p>
        </div>

        {/* Footer : Barre de progression + CTA */}
        <div className="relative z-10 space-y-4">
          {/* Barre de progression */}
          <div className="relative h-1 w-full bg-sand rounded-full overflow-hidden">
            <div
              className={`
                h-full rounded-full
                transition-all duration-500 ease-out
              `}
              style={{ 
                backgroundColor: service.color,
                width: isHovered ? '100%' : '0%',
              }}
            />
          </div>

          {/* CTA Link */}
          <div
            className={`
              flex items-center gap-2 text-sm sm:text-base font-semibold
              transition-all duration-300
              ${isHovered ? 'opacity-100 translate-x-1' : 'opacity-0'}
            `}
            style={{ color: service.color }}
          >
            <span>En savoir plus</span>
            <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
          </div>
        </div>

        {/* Border highlight au hover */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-xl pointer-events-none transition-all duration-300"
            style={{
              outline: `2px solid ${service.color}40`,
              outlineOffset: '2px'
            }}
          />
        )}
      </div>
    </div>
  );
}