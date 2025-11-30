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
  const isPopular = plan.popular;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative h-full flex flex-col
        rounded-3xl p-1
        transition-all duration-300 ease-out
        ${isHovered ? '-translate-y-2' : ''}
        ${isPopular ? 'scale-105' : ''}
      `}
    >
      {/* Fond Gradient pour la bordure du plan populaire */}
      {isPopular && (
        <div className="absolute inset-0 bg-linear-to-br from-olive-500 to-olive-700 rounded-3xl opacity-100 shadow-2xl shadow-olive-600/20" />
      )}

      {/* Badge Populaire flottant */}
      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
          <div className="bg-charcoal text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl shadow-charcoal/20 flex items-center gap-2 border border-white/20">
            <Star className="w-3.5 h-3.5 fill-white" strokeWidth={0} />
            Plus Populaire
          </div>
        </div>
      )}

      {/* Contenu de la carte */}
      <div className={`
        relative flex flex-col h-full rounded-[22px] overflow-hidden
        ${isPopular ? 'bg-white m-px' : 'bg-white border border-olive-100/50 shadow-sm'}
      `}>
        
        {/* Header */}
        <div className="p-8 pb-6">
          <h3 className="font-heading text-xl font-bold text-charcoal mb-4">
            {plan.name}
          </h3>
          
          <div className="flex items-baseline gap-1.5">
            <span className={`text-5xl md:text-6xl font-bold tracking-tight ${isPopular ? 'text-olive-700' : 'text-charcoal'}`}>
              {plan.price}
            </span>
            <span className="text-charcoal/50 font-medium text-lg">{plan.period}</span>
          </div>

          <p className="text-sm text-charcoal/40 mt-3 h-6 font-medium">
            {plan.name === 'STUDENT PASS' && 'Carte étudiant requise'}
          </p>
        </div>

        {/* Divider décoratif */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-olive-200 to-transparent my-2" />

        {/* Features */}
        <ul className="px-8 py-6 space-y-4 flex-1">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-charcoal/70 group/item">
              <div className={`
                mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-300
                ${isPopular 
                  ? 'bg-olive-100 text-olive-700 group-hover/item:bg-olive-600 group-hover/item:text-white group-hover/item:scale-110' 
                  : 'bg-olive-50 text-charcoal/50 group-hover/item:bg-terra-100 group-hover/item:text-terra-600 group-hover/item:scale-110'
                }
              `}>
                <Check className="w-3 h-3" strokeWidth={3} />
              </div>
              <span className="text-sm font-medium leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="p-8 pt-4 mt-auto">
          <button
            onClick={onSelect}
            className={`
              w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wide
              transition-all duration-300 transform active:scale-95
              flex items-center justify-center gap-2
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-500 focus-visible:ring-offset-2
              ${isPopular 
                ? 'bg-olive-600 text-white hover:bg-olive-700 shadow-lg shadow-olive-600/20 hover:shadow-xl hover:shadow-olive-600/30' 
                : 'bg-olive-50 text-charcoal hover:bg-charcoal hover:text-white border border-olive-100 hover:border-charcoal hover:shadow-lg hover:shadow-charcoal/10'
              }
            `}
          >
            <span>{plan.cta}</span>
            {isPopular && <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" strokeWidth={2.5} />}
          </button>
        </div>
      </div>
    </div>
  );
}