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
  
  // Mapping des couleurs avec le nouveau design system OKLCH
  const colorStyles = {
    olive: {
      active: 'bg-olive-600 text-white shadow-sm',
      activeHover: 'hover:bg-olive-700',
      inactive: 'bg-cream text-charcoal',
      inactiveHover: 'hover:bg-sand',
      focusRing: 'focus-visible:ring-olive-400'
    },
    terra: {
      active: 'bg-terra-500 text-white shadow-sm',
      activeHover: 'hover:bg-terra-600',
      inactive: 'bg-cream text-charcoal',
      inactiveHover: 'hover:bg-sand',
      focusRing: 'focus-visible:ring-terra-400'
    }
  };

  const currentColor = colorStyles[color];

  return (
    <button
      onClick={onClick}
      className={`
        relative px-5 sm:px-7 py-3 sm:py-4 rounded-full 
        flex items-center gap-3
        font-semibold text-sm sm:text-base 
        transition-all duration-250 cursor-pointer
        ${active 
          ? `${currentColor.active} ${currentColor.activeHover}` 
          : `${currentColor.inactive} ${currentColor.inactiveHover}`
        }
        ${active ? 'transform -translate-y-1' : ''}
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        ${currentColor.focusRing}
      `}
    >
      {/* Icône */}
      <Icon 
        className={`
          w-5 h-5 sm:w-6 sm:h-6 
          transition-transform duration-250
          ${active ? 'scale-110' : 'opacity-70'}
        `}
        strokeWidth={active ? 2 : 1.5}
      />

      {/* Texte */}
      <span className="whitespace-nowrap">
        {children}
      </span>

      {/* Indicateur actif subtil */}
      {active && (
        <div 
          className={`
            absolute -bottom-1 left-1/2 -translate-x-1/2
            w-1/2 h-1 rounded-full
            ${color === 'olive' ? 'bg-olive-400' : 'bg-terra-400'}
            transition-all duration-250
          `}
        />
      )}
    </button>
  );
}