'use client';

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  color: 'olive' | 'terra';
  children: React.ReactNode;
}

export default function TabButton({ 
  active, 
  onClick, 
  icon: Icon, 
  color, 
  children 
}: TabButtonProps) {
  
  const colorStyles = {
    olive: {
      active: 'bg-olive-600 text-white shadow-md',
      activeHover: 'hover:bg-olive-700 hover:shadow-lg',
      inactive: 'bg-white text-charcoal border-2 border-gray-200',
      inactiveHover: 'hover:bg-cream hover:border-olive-300',
      focusRing: 'focus-visible:ring-olive-400'
    },
    terra: {
      active: 'bg-terra-500 text-white shadow-md',
      activeHover: 'hover:bg-terra-600 hover:shadow-lg',
      inactive: 'bg-white text-charcoal border-2 border-gray-200',
      inactiveHover: 'hover:bg-cream hover:border-terra-300',
      focusRing: 'focus-visible:ring-terra-400'
    }
  };

  const currentColor = colorStyles[color];

  return (
    <button
      onClick={onClick}
      className={`
        relative px-6 sm:px-8 py-3.5 sm:py-4 rounded-full 
        flex items-center gap-3
        font-bold text-sm sm:text-base 
        transition-all duration-300 ease-out cursor-pointer
        ${active 
          ? `${currentColor.active} ${currentColor.activeHover} scale-105` 
          : `${currentColor.inactive} ${currentColor.inactiveHover}`
        }
        focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2
        ${currentColor.focusRing}
        active:scale-95
      `}
    >
      {/* Icône optimisée */}
      <Icon 
        className={`
          w-5 h-5 sm:w-6 sm:h-6 
          transition-all duration-300 ease-out
          ${active ? 'scale-110 rotate-12' : ''}
        `}
        strokeWidth={active ? 2.5 : 2}
      />

      {/* Texte */}
      <span className="whitespace-nowrap font-bold">
        {children}
      </span>

      {/* Indicateur actif optimisé */}
      {active && (
        <div 
          className={`
            absolute -bottom-1.5 left-1/2 -translate-x-1/2
            w-2/3 h-1 rounded-full
            ${color === 'olive' ? 'bg-olive-400' : 'bg-terra-400'}
            shadow-sm
          `}
        />
      )}
    </button>
  );
}