'use client';

import { useState } from 'react';
import { Service } from '@/lib/data';

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
      <div 
        className={`
          relative h-full flex flex-col p-8 rounded-3xl
          bg-white border border-sage-100/50
          transition-all duration-500 ease-out overflow-hidden
          ${isHovered ? 'shadow-lg -translate-y-1' : 'shadow-sm'}
        `}
      >
        
        {/* Glow subtil au survol - couleur du service */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl"
          style={{ 
            background: `radial-gradient(circle at 50% 0%, text-${service.color}15, transparent 70%)`
          }}
        />

        {/* Badge catégorie */}
        <div className="flex justify-between items-start mb-6 relative z-10">
          <span 
            className="px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300"
            style={{
              backgroundColor: isHovered ? `bg-${service.color}15` : 'var(--color-sage-200)',
              color: isHovered ? service.color : 'var(--color-charcoal)',
            }}
          >
            {service.badge}
          </span>
        </div>

        {/* Icon flottante avec glow */}
        <div className="mb-6 relative z-10">
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105"
            style={{ 
              backgroundColor: `bg-${service.color}10`,
              boxShadow: isHovered ? `0 8px 24px -8px ${service.color}40` : 'none'
            }}
          >
            <Icon 
              className="w-7 h-7 transition-all duration-500" 
              style={{ color: service.color }}
              strokeWidth={1.5} 
            />
          </div>
        </div>

        {/* Contenu */}
        <div className="flex-1 relative z-10">
          <h3 className="font-serif text-2xl font-semibold text-charcoal mb-3 transition-colors duration-300 group-hover:text-sage-700">
            {service.name}
          </h3>
          <p className="text-gray-700 leading-relaxed text-[15px]">
            {service.desc}
          </p>
        </div>

        {/* Footer action subtile */}
        <div className="mt-6 pt-6 border-t border-sage-100 relative z-10">
          <div 
            className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
            style={{ color: isHovered ? service.color : 'var(--color-gray-500)' }}
          >
            <span>En savoir plus</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}