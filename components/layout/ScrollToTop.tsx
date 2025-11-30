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
        fixed bottom-8 right-8 z-40 p-1 rounded-full
        transition-all duration-500 ease-out transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}
        group
      `}
    >
      {/* Container Glassmorphism */}
      <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white/80 backdrop-blur-md rounded-full shadow-lg shadow-black/5 border border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        
        {/* SVG de Progression Circulaire */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5" viewBox="0 0 36 36">
          {/* Cercle de fond */}
          <path
            className="text-gray-100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
          {/* Cercle de progression (Olive) */}
          <path
            className="text-olive-500 transition-all duration-100 ease-out"
            strokeDasharray={`${progress}, 100`}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* Flèche */}
        <ArrowUp className="w-5 h-5 text-charcoal group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={2.5} />
      </div>
    </button>
  );
}