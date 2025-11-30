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
  
  // Configuration des styles selon la couleur active
  const styles = {
    olive: {
      active: 'bg-olive-600 text-white shadow-lg shadow-olive-600/20 ring-2 ring-olive-600 ring-offset-2',
      hover: 'hover:bg-olive-50 hover:text-olive-700',
      icon: 'text-olive-600'
    },
    terra: {
      active: 'bg-terra-500 text-white shadow-lg shadow-terra-500/20 ring-2 ring-terra-500 ring-offset-2',
      hover: 'hover:bg-terra-50 hover:text-terra-700',
      icon: 'text-terra-500'
    }
  };

  const currentStyle = styles[color];

  return (
    <button
      onClick={onClick}
      className={`
        group relative px-6 py-3 rounded-full flex items-center gap-3
        font-heading font-bold text-sm md:text-base tracking-wide
        transition-all duration-300 ease-out active:scale-95
        ${active 
          ? currentStyle.active 
          : `bg-white text-gray-500 border border-gray-200 ${currentStyle.hover}`
        }
      `}
    >
      <Icon 
        className={`
          w-5 h-5 transition-transform duration-300
          ${active ? 'scale-110' : 'scale-100 group-hover:scale-110'}
          ${active ? 'text-white' : 'text-gray-400 group-hover:text-current'}
        `} 
        strokeWidth={2.5} 
      />
      <span>{children}</span>
      
      {/* Indicateur de chargement / animation subtile au click */}
      {active && (
        <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-white" style={{ animationDuration: '1s' }} />
      )}
    </button>
  );
}