'use client';

import { useState } from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { PricingPlan } from '@/lib/data';

interface PricingCardProps {
  plan: PricingPlan;
  isSelected?: boolean;
  onSelect?: () => void;
}

export default function PricingCard({ plan, isSelected, onSelect }: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative h-full"
    >
      {/* Badge Populaire optimisé */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-olive-600 text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
            <Star className="w-4 h-4 fill-current" strokeWidth={2} />
            <span>Plus populaire</span>
          </div>
        </div>
      )}

      <div
        className={`
          rounded-2xl p-8 sm:p-10
          h-full flex flex-col
          relative overflow-hidden
          transition-all duration-350 ease-out
          ${plan.popular 
            ? 'bg-olive-50 border-2 border-olive-500 shadow-md' 
            : 'bg-white border border-gray-100 shadow-sm'
          }
          ${isSelected ? 'ring-4 ring-olive-400 ring-offset-4 scale-[1.02]' : ''}
          ${isHovered && !isSelected ? 'transform -translate-y-2 shadow-xl' : ''}
        `}
      >
        {/* Pattern décoratif optimisé */}
        {plan.popular && (
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div 
              className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,currentColor_1.5px,transparent_0)] bg-size-[28px_28px]"
              style={{ color: 'var(--color-olive-700)' }}
            />
          </div>
        )}

        {/* En-tête */}
        <div className="mb-10 relative z-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
            {plan.name}
          </h3>
          
          {plan.popular && (
            <div className="flex items-center gap-2 text-olive-700 text-sm font-semibold mt-3">
              <Zap className="w-4 h-4" strokeWidth={2.5} />
              <span>Meilleur rapport qualité/prix</span>
            </div>
          )}
          
          {/* Prix */}
          <div className="flex items-baseline gap-2 mt-6">
            <span className={`
              text-5xl sm:text-6xl font-bold tracking-tight 
              ${plan.popular ? 'text-olive-700' : 'text-charcoal'}
            `}>
              {plan.price}
            </span>
            <span className="text-xl text-gray-700 font-medium">
              {plan.period}
            </span>
          </div>

          {/* Prix par crédit optimisé */}
          {plan.period === '/mois' && (
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terra-100 border-2 border-terra-400 shadow-sm">
              <span className="text-sm font-bold text-terra-700">
                {plan.name === 'STUDENT PASS' && '≈ 7.47€/crédit'}
                {plan.name === 'STANDARD PASS' && '≈ 6.24€/crédit'}
              </span>
            </div>
          )}
        </div>
        
        {/* Features avec espacement optimisé */}
        <ul className="space-y-5 mb-10 flex-1 relative z-10">
          {plan.features.map((feature, idx) => (
            <li 
              key={idx}
              className="flex items-start gap-3 text-sm sm:text-base"
            >
              <div className={`
                mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0
                transition-all duration-250
                ${plan.popular 
                  ? 'bg-olive-600 shadow-sm' 
                  : 'bg-olive-100'
                }
              `}>
                <Check 
                  className={`w-3.5 h-3.5 ${
                    plan.popular 
                      ? 'text-white' 
                      : 'text-olive-700'
                  }`} 
                  strokeWidth={3}
                />
              </div>
              <span className="leading-relaxed text-gray-700 font-medium">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        
        {/* CTA Button optimisé */}
        <button
          onClick={onSelect}
          className={`
            w-full py-4 rounded-xl font-bold text-base
            transition-all duration-300 ease-out
            flex items-center justify-center gap-2
            ${plan.popular 
              ? 'bg-olive-600 text-white hover:bg-olive-700 shadow-md hover:shadow-xl hover:scale-[1.02]' 
              : 'bg-terra-500 text-white hover:bg-terra-600 shadow-md hover:shadow-xl hover:scale-[1.02]'
            }
            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-olive-400 focus-visible:ring-offset-2
            active:scale-[0.98]
          `}
        >
          <span>{plan.cta}</span>
          {plan.popular && <Zap className="w-5 h-5" strokeWidth={2.5} />}
        </button>
      </div>
    </div>
  );
}