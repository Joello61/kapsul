'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / windowHeight) * 100;
      
      setIsVisible(scrollY > 400);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 no-print">
      <button
        onClick={handleScrollToTop}
        aria-label="Retour en haut de la page"
        className="
          relative w-12 h-12 sm:w-14 sm:h-14 rounded-full
          bg-white border border-gray-100
          flex items-center justify-center
          shadow-md hover:shadow-lg
          transition-all duration-250
          hover:-translate-y-1
          group
          focus-visible:ring-2 focus-visible:ring-olive-400 focus-visible:ring-offset-2
        "
      >
        {/* Progress circle SVG */}
        <svg 
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 100 100"
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="var(--color-olive-200)"
            strokeWidth="3"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="var(--color-olive-600)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="289.03"
            strokeDashoffset={289.03 - (289.03 * scrollProgress) / 100}
            className="transition-all duration-200 ease-out"
          />
        </svg>

        {/* Icône centrale */}
        <ArrowUp 
          className="w-5 h-5 sm:w-6 sm:h-6 text-olive-600 group-hover:text-olive-700 transition-colors duration-200 relative z-10" 
          strokeWidth={2.5}
        />
      </button>

      {/* Tooltip */}
      <div 
        className="
          absolute right-full mr-3 top-1/2 -translate-y-1/2
          px-3 py-2 rounded-lg
          bg-charcoal text-white text-xs font-semibold
          whitespace-nowrap
          opacity-0 group-hover:opacity-100
          transition-opacity duration-250
          pointer-events-none
          shadow-md
        "
      >
        Retour en haut
        <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 rotate-45 bg-charcoal" />
      </div>
    </div>
  );
}

export default ScrollToTop;