'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      setProgress(scrollProgress);
      setIsVisible(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut"
      className={`
        fixed bottom-8 right-8 z-40
        transition-all duration-500 ease-out transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}
        group
      `}
    >
      {/* Container */}
      <div className="relative w-14 h-14 glass rounded-full shadow-lg border border-sage-200/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        
        {/* SVG Progress Circle */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 36 36">
          {/* Background circle */}
          <circle
            className="text-sage-100"
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          {/* Progress circle */}
          <circle
            className="text-sage-600 transition-all duration-100 ease-out"
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="100"
            strokeDashoffset={100 - progress}
          />
        </svg>

        {/* Arrow Icon */}
        <ArrowUp 
          className="w-5 h-5 text-charcoal group-hover:-translate-y-0.5 transition-transform duration-300" 
          strokeWidth={2} 
        />
      </div>
    </button>
  );
}