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
  
  // Configuration des styles selon la couleur active - Palette OKLCH stricte
  const styles = {
    olive: {
      active: 'bg-olive-600 text-white shadow-lg shadow-olive-600/25 ring-2 ring-olive-600 ring-offset-2',
      hover: 'hover:bg-olive-50 hover:text-olive-700 hover:border-olive-200',
      icon: 'text-olive-600'
    },
    terra: {
      active: 'bg-terra-500 text-white shadow-lg shadow-terra-500/25 ring-2 ring-terra-500 ring-offset-2',
      hover: 'hover:bg-terra-50 hover:text-terra-700 hover:border-terra-200',
      icon: 'text-terra-500'
    }
  };

  const currentStyle = styles[color];

  return (
    <button
      onClick={onClick}
      className={`
        group relative px-6 py-3.5 rounded-full flex items-center gap-3
        font-heading font-bold text-sm md:text-base tracking-wide
        transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] active:scale-95
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-${color}-500 focus-visible:ring-offset-2
        ${active 
          ? currentStyle.active 
          : `bg-white text-charcoal/70 border border-olive-100 ${currentStyle.hover}`
        }
      `}
    >
      <Icon 
        className={`
          w-5 h-5 transition-all duration-300
          ${active ? 'scale-110' : 'scale-100 group-hover:scale-110 group-hover:rotate-6'}
          ${active ? 'text-white' : 'text-charcoal/40 group-hover:text-current'}
        `} 
        strokeWidth={active ? 2.5 : 2} 
      />
      <span>{children}</span>
      
      {/* Indicateur de chargement / animation subtile au click */}
      {active && (
        <span 
          className="absolute inset-0 rounded-full animate-ping opacity-20 bg-white pointer-events-none" 
          style={{ animationDuration: '1.5s', animationIterationCount: '1' }} 
        />
      )}
    </button>
  );
}