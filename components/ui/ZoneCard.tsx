'use client';

import { useState } from 'react';
import { Zone } from '@/lib/data';

interface ZoneCardProps {
  zone: Zone;
  isActive?: boolean;
}

export default function ZoneCard({ zone, isActive }: ZoneCardProps) {
  const Icon = zone.icon;
  const [isHovered, setIsHovered] = useState(false);

  const showActiveState = isHovered || isActive;

  // Features par zone
  const features = zone.title.includes('Sociale')
    ? ['Fuel Bar', 'Networking', 'Coworking']
    : zone.title.includes('Active')
    ? ['Studio Yoga', 'Massage', 'Douches']
    : ['K-Pods', 'Silence Absolu', 'Lumière Tamisée'];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full cursor-pointer"
    >
      <div
        className={`
          relative h-full overflow-hidden rounded-3xl p-8 sm:p-10
          bg-white border transition-all duration-500 ease-out
          flex flex-col
          ${
            showActiveState
              ? 'shadow-lg -translate-y-1 border-sage-200'
              : 'shadow-sm border-sage-100/50'
          }
        `}
      >
        {/* Glow doux de la couleur de zone */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 30% 20%, ${zone.color}12, transparent 60%)`,
            opacity: showActiveState ? 1 : 0,
          }}
        />

        {/* Badge "Zone Active" */}
        {isActive && (
          <div className="absolute top-6 right-6 flex items-center gap-2">
            <div className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: zone.color }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: zone.color }}
              />
            </div>
            <span className="text-xs font-medium tracking-wide text-gray-500">
              En direct
            </span>
          </div>
        )}

        {/* Icon */}
        <div className="relative z-10 mb-6">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-105"
            style={{
              backgroundColor: showActiveState
                ? `${zone.color}15`
                : 'var(--color-sage-50)',
              boxShadow: showActiveState
                ? `0 8px 24px -8px ${zone.color}40`
                : 'none',
            }}
          >
            <Icon
              className="w-8 h-8 transition-all duration-500"
              style={{ color: zone.color }}
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Contenu */}
        <div className="relative z-10 mb-6 flex-1">
          <h3
            className="font-sans text-2xl md:text-3xl font-semibold mb-3 transition-colors duration-300"
            style={{
              color: showActiveState ? zone.color : 'var(--color-charcoal)',
            }}
          >
            {zone.title}
          </h3>
          <p className="text-gray-700 leading-relaxed text-[15px]">
            {zone.desc}
          </p>
        </div>

        {/* Tags Features */}
        <div className="relative z-10 flex flex-wrap gap-2 mb-6">
          {features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 rounded-full text-xs font-medium bg-sage-50 text-sage-700 border border-sage-100 transition-colors hover:bg-sage-100"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Footer CTA */}
        <div
          className="relative z-10 mt-auto inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
          style={{ color: zone.color }}
        >
          Explorer la zone
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
