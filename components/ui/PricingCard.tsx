'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
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
        transition-all duration-300 ease-out
        ${isHovered ? '-translate-y-1' : ''}
        ${isPopular ? 'scale-[1.02]' : ''}
      `}
    >
      {/* Badge Populaire */}
      {isPopular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
          <div className="glass px-5 py-2 rounded-full text-xs font-semibold tracking-wide flex items-center gap-2 border border-sage-200">
            <div className="w-2 h-2 rounded-full bg-sage-500 animate-pulse" />
            <span className="text-sage-700">Plus populaire</span>
          </div>
        </div>
      )}

      {/* Carte */}
      <div className={`
        relative flex flex-col h-full rounded-3xl overflow-hidden
        bg-white border transition-all duration-300
        ${isPopular 
          ? 'border-sage-300 shadow-lg' 
          : 'border-sage-100/50 shadow-sm'
        }
      `}>
        
        {/* Glow pour plan populaire */}
        {isPopular && (
          <div className="absolute inset-0 bg-linear-to-br from-sage-200/20 to-transparent opacity-50" />
        )}

        {/* Header */}
        <div className="p-8 pb-6 relative">
          <h3 className="font-serif text-xl font-semibold text-charcoal mb-4">
            {plan.name}
          </h3>
          
          <div className="flex items-baseline gap-1">
            <span className={`text-5xl font-bold tracking-tight ${isPopular ? 'text-sage-700' : 'text-charcoal'}`}>
              {plan.price}
            </span>
            <span className="text-gray-500 font-medium">{plan.period}</span>
          </div>

          {plan.name === 'STUDENT PASS' && (
            <p className="text-sm text-gray-500 mt-3">
              Carte étudiant requise
            </p>
          )}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-sage-200 to-transparent" />

        {/* Features */}
        <ul className="px-8 py-6 space-y-3 flex-1 relative">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-700 group/item">
              <div className={`
                mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-300
                ${isPopular 
                  ? 'bg-sage-100 text-sage-700 group-hover/item:bg-sage-600 group-hover/item:text-white' 
                  : 'bg-sage-50 text-sage-600 group-hover/item:bg-terra-100 group-hover/item:text-terra-600'
                }
              `}>
                <Check className="w-3 h-3" strokeWidth={3} />
              </div>
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="p-8 pt-4 mt-auto relative">
          <button
            onClick={onSelect}
            className={`
              w-full py-4 rounded-2xl font-semibold text-sm tracking-wide
              transition-all duration-300 transform active:scale-95
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2
              ${isPopular 
                ? 'bg-sage-600 text-white hover:bg-sage-700 shadow-md hover:shadow-lg' 
                : 'bg-sage-50 text-charcoal hover:bg-charcoal hover:text-white border border-sage-100 hover:border-charcoal'
              }
            `}
          >
            {plan.cta}
          </button>
        </div>
      </div>
    </div>
  );
}