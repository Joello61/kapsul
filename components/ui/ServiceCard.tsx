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
          bg-white border border-gray-100
          transition-all duration-500 ease-out overflow-hidden
          ${isHovered ? 'shadow-2xl -translate-y-1' : 'shadow-sm'}
        `}
        style={{
          borderColor: isHovered ? `${service.color}40` : 'transparent', // 40 = opacity hex
          boxShadow: isHovered ? `0 20px 40px -10px ${service.color}15` : ''
        }}
      >
        
        {/* Background Gradient dynamique au survol */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ 
            background: `linear-gradient(135deg, ${service.color}05 0%, transparent 100%)`
          }}
        />

        {/* Header: Badge & Icon */}
        <div className="flex justify-between items-start mb-8 relative z-10">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-6"
            style={{ 
              backgroundColor: isHovered ? service.color : '#F9FAFB', // gray-50 fallback
              color: isHovered ? '#FFFFFF' : service.color
            }}
          >
            <Icon className="w-8 h-8" strokeWidth={1.5} />
          </div>
          
          <span 
            className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border transition-colors duration-300"
            style={{
              borderColor: isHovered ? service.color : '#E5E7EB',
              color: isHovered ? service.color : '#6B7280',
              backgroundColor: isHovered ? '#FFFFFF' : 'transparent'
            }}
          >
            {service.badge}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 relative z-10">
          <h3 className="font-heading text-2xl font-bold text-charcoal mb-3 group-hover:text-black transition-colors">
            {service.name}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {service.desc}
          </p>
        </div>

        {/* Footer / Action */}
        <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6 group-hover:border-gray-200 transition-colors relative z-10">
          <span 
            className="font-bold text-sm transition-colors duration-300"
            style={{ color: isHovered ? service.color : '#9CA3AF' }}
          >
            Découvrir
          </span>
          
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: isHovered ? service.color : '#F3F4F6' }}
          >
            <ArrowUpRight 
              className={`w-4 h-4 transition-transform duration-500 ${isHovered ? 'rotate-45' : 'rotate-0'}`}
              style={{ color: isHovered ? '#FFFFFF' : '#9CA3AF' }} 
            />
          </div>
        </div>

      </div>
    </div>
  );
}