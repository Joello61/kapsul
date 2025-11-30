'use client';

import { useState } from 'react';
import { Zone } from '@/lib/data';
import { ChevronRight, Sparkles } from 'lucide-react';

interface ZoneCardProps {
  zone: Zone;
  isActive?: boolean;
}

export default function ZoneCard({ zone, isActive }: ZoneCardProps) {
  const Icon = zone.icon;
  const [isHovered, setIsHovered] = useState(false);

  const isActiveState = isHovered || isActive;

  // Tags par zone
  const zoneTags: Record<string, string[]> = {
    'Zone Sociale': ['Fuel Bar', 'WiFi', 'Prises'],
    'Zone Active': ['Tapis yoga', 'Miroirs', 'Massage'],
    'Zone Silence': ['VR Pods', 'Sleep Pods', 'Silence']
  };

  const tags = zoneTags[zone.title] || [];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <div
        className={`
          bg-white border border-gray-100 rounded-2xl p-8 sm:p-10
          shadow-sm
          transition-all duration-350 ease-out
          cursor-pointer
          relative overflow-hidden
          ${isActiveState ? 'transform -translate-y-3 shadow-xl border-gray-200' : ''}
        `}
      >
        {/* Pattern décoratif optimisé */}
        <div 
          className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[radial-gradient(circle_at_2px_2px,currentColor_1.5px,transparent_0)] bg-size-[28px_28px] transition-opacity duration-500"
          style={{ 
            color: zone.color,
            opacity: isActiveState ? 0.04 : 0.025
          }}
        />

        {/* Badge "Active" optimisé */}
        {isActive && (
          <div 
            className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full border-2 z-20 shadow-md"
            style={{
              backgroundColor: `${zone.color}20`,
              borderColor: `${zone.color}50`,
              color: zone.color
            }}
          >
            <Sparkles className="w-4 h-4" strokeWidth={2.5} />
            <span className="text-sm font-bold">Active</span>
          </div>
        )}

        <div className="relative z-10 flex items-start gap-6">
          {/* Icône optimisée */}
          <div className="relative shrink-0">
            <div 
              className={`
                w-18 h-18 rounded-2xl 
                flex items-center justify-center
                transition-all duration-350 ease-out
                ${isActiveState ? 'shadow-lg scale-110 rotate-3' : 'shadow-sm'}
              `}
              style={{ 
                backgroundColor: isActiveState ? zone.color : 'var(--color-cream)',
              }}
            >
              <Icon 
                className="w-9 h-9 transition-all duration-350" 
                style={{ 
                  color: isActiveState ? '#FFFFFF' : zone.color,
                }} 
                strokeWidth={isActiveState ? 2 : 1.5}
              />
            </div>
          </div>
          
          {/* Contenu principal */}
          <div className="flex-1 min-w-0">
            <h4 
              className="text-2xl sm:text-3xl font-bold mb-4 transition-colors duration-350"
              style={{ 
                color: isActiveState ? zone.color : 'var(--color-charcoal)'
              }}
            >
              {zone.title}
            </h4>
            
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              {zone.desc}
            </p>

            {/* Equipements (Tags) optimisés */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, idx) => (
                <span
                  key={tag}
                  className="text-sm px-4 py-2 rounded-full font-bold border-2 transition-all duration-300"
                  style={{
                    backgroundColor: `${zone.color}${isActiveState ? '20' : '10'}`,
                    borderColor: `${zone.color}${isActiveState ? '50' : '30'}`,
                    color: zone.color,
                    transform: isActiveState ? `translateY(-${idx * 2}px)` : 'translateY(0)',
                    transitionDelay: `${idx * 50}ms`
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Flèche indicatrice optimisée */}
          <div
            className={`
              shrink-0 transition-all duration-350 ease-out
              ${isActiveState ? 'opacity-100 translate-x-2 scale-110' : 'opacity-40'}
            `}
            style={{ 
              color: isActiveState ? zone.color : 'var(--color-gray-500)' 
            }}
          >
            <ChevronRight className="w-7 h-7" strokeWidth={2.5} />
          </div>
        </div>

        {/* Barre de progression optimisée */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-sand overflow-hidden">
          <div
            className="h-full transition-all duration-700 ease-out"
            style={{ 
              backgroundColor: zone.color,
              width: isActiveState ? '100%' : '0%'
            }}
          />
        </div>

        {/* Border highlight optimisé */}
        <div
          className={`
            absolute inset-0 rounded-2xl pointer-events-none
            transition-all duration-350 ease-out
            ${isActiveState ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            boxShadow: `0 0 0 2px ${zone.color}30 inset`,
          }}
        />
      </div>
    </div>
  );
}