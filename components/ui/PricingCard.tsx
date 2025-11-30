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
      {/* Badge Populaire */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-olive-600 text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-md">
            <Star className="w-4 h-4 fill-current" strokeWidth={2} />
            <span>Plus populaire</span>
          </div>
        </div>
      )}

      <div
        className={`
          rounded-xl p-6 sm:p-8 lg:p-10
          h-full flex flex-col
          relative overflow-hidden
          transition-all duration-300
          ${plan.popular 
            ? 'bg-olive-50 border-2 border-olive-400' 
            : 'bg-white border border-gray-100 shadow-sm'
          }
          ${isSelected ? 'ring-4 ring-olive-400 ring-offset-4' : ''}
          ${isHovered ? 'transform -translate-y-2 shadow-lg' : ''}
        `}
      >
        {/* Pattern décoratif subtil pour la carte populaire */}
        {plan.popular && (
          <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
            <div 
              className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,currentColor_1px,transparent_0)] bg-size-[24px_24px]"
              style={{ color: 'var(--color-olive-700)' }}
            />
          </div>
        )}

        {/* En-tête du plan */}
        <div className="mb-8 relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-charcoal mb-1">
                {plan.name}
              </h3>
              {plan.popular && (
                <div className="flex items-center gap-2 text-olive-700 text-sm font-medium mt-2">
                  <Zap className="w-4 h-4" strokeWidth={2} />
                  <span>Meilleur rapport qualité/prix</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Prix */}
          <div className="flex items-baseline gap-2">
            <span className={`
              text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight 
              ${plan.popular ? 'text-olive-700' : 'text-charcoal'}
            `}>
              {plan.price}
            </span>
            <span className="text-lg text-gray-700 font-medium">
              {plan.period}
            </span>
          </div>

          {/* Prix par crédit */}
          {plan.period === '/mois' && (
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terra-100 border border-terra-300">
              <span className="text-xs sm:text-sm font-semibold text-terra-700">
                {plan.name === 'STUDENT PASS' && '≈ 7.47€/crédit'}
                {plan.name === 'STANDARD PASS' && '≈ 6.24€/crédit'}
              </span>
            </div>
          )}
        </div>
        
        {/* Features */}
        <ul className="space-y-4 mb-8 flex-1 relative z-10">
          {plan.features.map((feature, idx) => (
            <li 
              key={idx}
              className="flex items-start gap-3 text-sm sm:text-base"
            >
              {/* Icône check */}
              <div className={`
                mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0
                transition-colors duration-200
                ${plan.popular 
                  ? 'bg-olive-600' 
                  : 'bg-olive-100'
                }
              `}>
                <Check 
                  className={`w-3 h-3 ${
                    plan.popular 
                      ? 'text-white' 
                      : 'text-olive-700'
                  }`} 
                  strokeWidth={3}
                />
              </div>
              <span className="leading-relaxed text-gray-700">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        
        {/* CTA Button */}
        <button
          onClick={onSelect}
          className={`
            w-full py-4 rounded-lg font-semibold text-base
            transition-all duration-250
            flex items-center justify-center gap-2
            ${plan.popular 
              ? 'bg-olive-600 text-white hover:bg-olive-700 shadow-sm hover:shadow-md hover:-translate-y-0.5' 
              : 'bg-terra-500 text-white hover:bg-terra-600 shadow-sm hover:shadow-md hover:-translate-y-0.5'
            }
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive-400
          `}
        >
          <span>{plan.cta}</span>
          {plan.popular && <Zap className="w-4 h-4" strokeWidth={2} />}
        </button>
      </div>
    </div>
  );
}