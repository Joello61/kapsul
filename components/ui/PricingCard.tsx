'use client';

import { useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { PricingPlan } from '@/lib/data';

interface PricingCardProps {
  plan: PricingPlan;
  onSelect?: () => void;
}

export default function PricingCard({ plan, onSelect }: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Le plan populaire est mis en avant visuellement
  const isPopular = plan.popular;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative h-full flex flex-col
        rounded-3xl p-1
        transition-transform duration-300 ease-out
        ${isHovered ? '-translate-y-2' : ''}
      `}
    >
      {/* Fond Gradient pour la bordure du plan populaire */}
      {isPopular && (
        <div className="absolute inset-0 bg-linear-to-b from-olive-400 to-olive-600 rounded-3xl opacity-100 shadow-xl shadow-olive-900/10" />
      )}

      {/* Badge Populaire flottant */}
      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
          <div className="bg-charcoal text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-2 border border-white/20">
            <Star className="w-3 h-3 fill-white" />
            Most Popular
          </div>
        </div>
      )}

      {/* Contenu de la carte */}
      <div className={`
        relative flex flex-col h-full rounded-[20px] overflow-hidden
        ${isPopular ? 'bg-white m-px' : 'bg-white border border-gray-200 shadow-sm'}
      `}>
        
        {/* Header */}
        <div className="p-8 pb-0">
          <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
            {plan.name}
          </h3>
          
          <div className="flex items-baseline gap-1 mt-4">
            <span className={`text-4xl md:text-5xl font-bold tracking-tight ${isPopular ? 'text-olive-700' : 'text-charcoal'}`}>
              {plan.price}
            </span>
            <span className="text-gray-500 font-medium">{plan.period}</span>
          </div>

          <p className="text-sm text-gray-400 mt-2 h-6">
            {/* Espace réservé pour sous-titre si besoin */}
            {plan.name === 'STUDENT PASS' && 'Carte étudiant requise'}
          </p>
        </div>

        {/* Divider décoratif */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent my-6" />

        {/* Features */}
        <ul className="px-8 space-y-4 flex-1">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-600 group">
              <div className={`
                mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors
                ${isPopular ? 'bg-olive-100 text-olive-700 group-hover:bg-olive-600 group-hover:text-white' : 'bg-gray-100 text-gray-500 group-hover:bg-terra-100 group-hover:text-terra-600'}
              `}>
                <Check className="w-3 h-3" strokeWidth={3} />
              </div>
              <span className="text-sm font-medium leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="p-8 mt-auto">
          <button
            onClick={onSelect}
            className={`
              w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wide
              transition-all duration-300 transform active:scale-95
              flex items-center justify-center gap-2
              ${isPopular 
                ? 'bg-olive-600 text-white hover:bg-olive-700 shadow-lg hover:shadow-olive-600/30' 
                : 'bg-gray-50 text-charcoal hover:bg-charcoal hover:text-white border border-gray-200 hover:border-charcoal'
              }
            `}
          >
            <span>{plan.cta}</span>
            {isPopular && <Zap className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}