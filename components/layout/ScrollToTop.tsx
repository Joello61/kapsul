'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / windowHeight) * 100;
      
      setIsVisible(scrollY > 300);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          className="fixed bottom-8 right-8 sm:bottom-10 sm:right-10 z-50"
        >
          <motion.button
            onClick={handleScrollToTop}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full glass flex items-center justify-center group overflow-hidden"
            style={{
              boxShadow: 'var(--glow-emerald)'
            }}
          >
            {/* Progress circle */}
            <svg 
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="var(--color-emerald-200)"
                strokeWidth="3"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="var(--color-emerald-500)"
                strokeWidth="3"
                strokeLinecap="round"
                style={{
                  pathLength: scrollProgress / 100
                }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: scrollProgress / 100 }}
                transition={{ duration: 0.2 }}
                strokeDasharray="289.03"
              />
            </svg>

            {/* Icône centrale avec animations */}
            <motion.div
              className="relative z-10"
              animate={{
                y: [0, -3, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ArrowUp 
                className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" 
                strokeWidth={2.5}
              />
            </motion.div>

            {/* Background gradient au hover */}
            <motion.div
              className="absolute inset-0 bg-linear-to-br from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ borderRadius: 'inherit' }}
            />

            {/* Sparkles decoration */}
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Sparkles className="w-4 h-4 text-emerald-400" fill="var(--color-emerald-400)" />
            </motion.div>

            {/* Glow pulse */}
            <motion.div
              className="absolute inset-0 rounded-full bg-emerald-500 blur-xl -z-10 opacity-0 group-hover:opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded-full glass-emerald whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          >
            <span className="text-sm font-semibold text-emerald-700">
              Retour en haut
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;