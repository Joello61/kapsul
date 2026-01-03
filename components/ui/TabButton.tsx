'use client';

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  color: 'sage' | 'terra';
  children: React.ReactNode;
}

export default function TabButton({ 
  active, 
  onClick, 
  icon: Icon, 
  color, 
  children 
}: TabButtonProps) {
  
  // Configuration couleurs selon palette KAPSUL
  const styles = {
    sage: {
      active: 'bg-sage-600 text-white shadow-md ring-2 ring-sage-400/30 ring-offset-2',
      hover: 'hover:bg-sage-50 hover:text-sage-700',
    },
    terra: {
      active: 'bg-terra-500 text-white shadow-md ring-2 ring-terra-400/30 ring-offset-2',
      hover: 'hover:bg-terra-50 hover:text-terra-700',
    }
  };

  const currentStyle = styles[color];

  return (
    <button
      onClick={onClick}
      className={`
        group cursor-pointer relative px-6 py-3 rounded-full flex items-center gap-3
        font-sans font-semibold text-sm md:text-base
        transition-all duration-300 ease-out active:scale-95
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2
        ${active 
          ? currentStyle.active 
          : `bg-white text-gray-700 border border-sage-100 ${currentStyle.hover}`
        }
      `}
    >
      <Icon 
        className={`
          w-5 h-5 transition-all duration-300
          ${active ? 'scale-105' : 'scale-100 group-hover:scale-105'}
        `} 
        strokeWidth={active ? 2 : 1.5} 
      />
      <span>{children}</span>
    </button>
  );
}