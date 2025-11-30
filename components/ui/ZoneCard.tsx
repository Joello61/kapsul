'use client';

import { useState } from 'react';
import { Zone } from '@/lib/data';
import { ChevronRight } from 'lucide-react';

interface ZoneCardProps {
  zone: Zone;
  isActive?: boolean;
}

export default function ZoneCard({ zone, isActive }: ZoneCardProps) {
  const Icon = zone.icon;
  const [isHovered, setIsHovered] = useState(false);

  const showActiveState = isHovered || isActive;

  // Features par zone
  const features = zone.title.includes('Sociale') ? ['Fuel Bar', 'Networking', 'Coworking'] :
                   zone.title.includes('Active') ? ['Studio Yoga', 'Massage', 'Douches'] :
                   ['K-Pods', 'Silence Absolu', 'Lumière Tamisée'];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full cursor-pointer"
    >
      <div
        className={`
          relative h-full overflow-hidden rounded-3xl p-8 sm:p-10
          bg-white border transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          flex flex-col
          ${showActiveState 
            ? 'shadow-2xl -translate-y-2 border-transparent' 
            : 'shadow-sm border-olive-100/50 hover:border-olive-200'
          }
        `}
        style={{
          boxShadow: showActiveState ? `0 20px 40px -12px ${zone.color}20` : ''
        }}
      >
        {/* Background Gradient dynamique */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
          style={{ 
            background: `linear-gradient(135deg, ${zone.color}10 0%, transparent 60%)`,
            opacity: showActiveState ? 1 : 0
          }}
        />

        {/* Badge "En direct" */}
        {isActive && (
          <div className="absolute top-6 right-6 flex items-center gap-2 animate-pulse">
            <span className="relative flex h-3 w-3">
              <span 
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: zone.color }}
              />
              <span 
                className="relative inline-flex rounded-full h-3 w-3"
                style={{ backgroundColor: zone.color }}
              />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-charcoal/40">Zone Active</span>
          </div>
        )}

        {/* Header avec Icône */}
        <div className="relative z-10 flex items-start justify-between mb-6">
          <div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 shadow-sm"
            style={{ 
              backgroundColor: showActiveState ? zone.color : 'oklch(0.98 0.008 90)',
              color: showActiveState ? '#FFFFFF' : zone.color,
              boxShadow: showActiveState ? `0 10px 30px -5px ${zone.color}30` : ''
            }}
          >
            <Icon className="w-10 h-10" strokeWidth={showActiveState ? 2 : 1.5} />
          </div>
        </div>

        {/* Contenu */}
        <div className="relative z-10 mb-8 flex-1">
          <h3 
            className="font-heading text-3xl font-bold mb-4 transition-colors duration-300 tracking-tight"
            style={{ color: showActiveState ? zone.color : 'oklch(0.30 0.012 280)' }}
          >
            {zone.title}
          </h3>
          <p className="text-charcoal/60 leading-relaxed text-lg">
            {zone.desc}
          </p>
        </div>

        {/* Tags / Features */}
        <div className="relative z-10 flex flex-wrap gap-2 mb-8">
          {features.map((feature) => (
            <span 
              key={feature}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white border border-olive-100 text-charcoal/60 shadow-sm transition-all hover:border-olive-300 hover:text-olive-700"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Footer / CTA */}
        <div 
          className="relative z-10 mt-auto flex items-center gap-2 font-bold text-sm uppercase tracking-wide transition-all duration-300 group-hover:gap-4"
          style={{ color: zone.color }}
        >
          Explorer la zone
          <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
        </div>

        {/* Border Active Highlight */}
        <div 
          className="absolute inset-0 rounded-3xl border-2 pointer-events-none transition-opacity duration-500"
          style={{ 
            borderColor: zone.color,
            opacity: showActiveState ? 0.15 : 0
          }}
        />
      </div>
    </div>
  );
}