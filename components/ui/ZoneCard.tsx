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
          bg-white border border-gray-100 rounded-xl p-6 sm:p-8 lg:p-10
          shadow-sm
          transition-all duration-300
          cursor-pointer
          relative overflow-hidden
          ${isActiveState ? 'transform -translate-y-2 shadow-lg' : ''}
        `}
      >
        {/* Pattern décoratif subtil */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(circle_at_2px_2px,currentColor_1px,transparent_0)] bg-size-[24px_24px]"
          style={{ color: zone.color }}
        />

        {/* Badge "Active" */}
        {isActive && (
          <div 
            className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 z-20"
            style={{
              backgroundColor: `${zone.color}15`,
              borderColor: `${zone.color}30`,
              color: zone.color
            }}
          >
            <Sparkles className="w-3 h-3" strokeWidth={2} />
            <span className="text-xs font-bold">Active</span>
          </div>
        )}

        <div className="relative z-10 flex items-start gap-5">
          {/* Icône */}
          <div className="relative shrink-0">
            <div 
              className={`
                w-14 h-14 sm:w-16 sm:h-16 rounded-xl 
                flex items-center justify-center
                transition-all duration-300
                ${isActiveState ? 'shadow-md scale-105' : 'shadow-sm'}
              `}
              style={{ 
                backgroundColor: isActiveState ? zone.color : 'var(--color-cream)',
              }}
            >
              <Icon 
                className="w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-300" 
                style={{ 
                  color: isActiveState ? '#FFFFFF' : zone.color,
                }} 
                strokeWidth={1.5}
              />
            </div>
          </div>
          
          {/* Contenu principal */}
          <div className="flex-1 min-w-0">
            <h4 
              className={`
                text-xl sm:text-2xl font-bold mb-3
                transition-colors duration-300
              `}
              style={{ 
                color: isActiveState ? zone.color : 'var(--color-charcoal)'
              }}
            >
              {zone.title}
            </h4>
            
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
              {zone.desc}
            </p>

            {/* Equipements (Tags) */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs sm:text-sm px-3 py-1.5 rounded-full font-semibold border-2"
                  style={{
                    backgroundColor: `${zone.color}10`,
                    borderColor: `${zone.color}30`,
                    color: zone.color
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Flèche indicatrice */}
          <div
            className={`
              shrink-0 transition-all duration-300
              ${isActiveState ? 'opacity-100 translate-x-1' : 'opacity-40'}
            `}
            style={{ 
              color: isActiveState ? zone.color : 'var(--color-gray-500)' 
            }}
          >
            <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
          </div>
        </div>

        {/* Barre de progression bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-sand overflow-hidden rounded-b-xl">
          <div
            className={`
              h-full transition-all duration-500 ease-out
            `}
            style={{ 
              backgroundColor: zone.color,
              width: isActiveState ? '100%' : '0%'
            }}
          />
        </div>

        {/* Border highlight */}
        {isActiveState && (
          <div
            className="absolute inset-0 rounded-xl pointer-events-none transition-all duration-300"
            style={{
              outline: `2px solid ${zone.color}40`,
              outlineOffset: '2px'
            }}
          />
        )}
      </div>
    </div>
  );
}