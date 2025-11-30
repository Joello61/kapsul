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
      <div 
        className={`
          relative h-full flex flex-col p-8 rounded-3xl
          bg-white border
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden
          ${isHovered ? 'shadow-2xl -translate-y-2' : 'shadow-sm border-olive-100/50'}
        `}
        style={{
          borderColor: isHovered ? `${service.color}40` : 'oklch(0.95 0.025 140)',
          boxShadow: isHovered ? `0 20px 40px -10px ${service.color}15` : ''
        }}
      >
        
        {/* Background Gradient dynamique au survol */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ 
            background: `linear-gradient(135deg, ${service.color}08 0%, transparent 100%)`
          }}
        />

        {/* Header: Badge & Icon */}
        <div className="flex justify-between items-start mb-8 relative z-10">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-sm"
            style={{ 
              backgroundColor: isHovered ? service.color : 'oklch(0.98 0.008 90)',
              color: isHovered ? '#FFFFFF' : service.color,
              boxShadow: isHovered ? `0 10px 25px -5px ${service.color}25` : ''
            }}
          >
            <Icon className="w-8 h-8" strokeWidth={isHovered ? 2 : 1.5} />
          </div>
          
          <span 
            className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300"
            style={{
              borderColor: isHovered ? service.color : 'oklch(0.90 0.045 140)',
              color: isHovered ? service.color : 'oklch(0.55 0.008 270)',
              backgroundColor: isHovered ? '#FFFFFF' : 'transparent'
            }}
          >
            {service.badge}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 relative z-10">
          <h3 className="font-heading text-2xl font-bold text-charcoal mb-3 group-hover:text-olive-800 transition-colors duration-300">
            {service.name}
          </h3>
          <p className="text-charcoal/60 leading-relaxed">
            {service.desc}
          </p>
        </div>

        {/* Footer / Action */}
        <div className="mt-8 flex items-center justify-between border-t border-olive-100 pt-6 group-hover:border-olive-200 transition-colors relative z-10">
          <span 
            className="font-bold text-sm transition-colors duration-300"
            style={{ color: isHovered ? service.color : 'oklch(0.68 0.006 265)' }}
          >
            Découvrir
          </span>
          
          <div 
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm"
            style={{ 
              backgroundColor: isHovered ? service.color : 'oklch(0.96 0.012 85)',
              boxShadow: isHovered ? `0 4px 12px -2px ${service.color}20` : ''
            }}
          >
            <ArrowUpRight 
              className={`w-4 h-4 transition-transform duration-500 ${isHovered ? 'rotate-45 scale-110' : 'rotate-0'}`}
              style={{ color: isHovered ? '#FFFFFF' : 'oklch(0.68 0.006 265)' }} 
              strokeWidth={2.5}
            />
          </div>
        </div>

      </div>
    </div>
  );
}