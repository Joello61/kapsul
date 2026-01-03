interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'cream' | 'white' | 'sage' | 'terra' | 'stone' | 'none';
  pattern?: boolean;
}

export function Section({ 
  children, 
  className = '', 
  id,
  background = 'cream',
  pattern = false
}: SectionProps) {

  // Palette KAPSUL depuis globals.css
  const backgrounds = {
    cream: 'bg-cream',
    white: 'bg-white',
    sage: 'bg-sage-200/20',
    terra: 'bg-terra-100/30',
    stone: 'bg-stone',
    none: 'bg-transparent'
  };

  return (
    <section 
      id={id}
      className={`
        relative py-16 md:py-24 lg:py-32 overflow-hidden
        ${backgrounds[background]}
        ${className}
      `}
    >
      {/* Pattern dot subtil (optionnel) */}
      {pattern && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.025]" 
          style={{ 
            backgroundImage: `radial-gradient(var(--color-charcoal) 1px, transparent 1px)`, 
            backgroundSize: '32px 32px',
            backgroundPosition: 'center'
          }}
        />
      )}

      {/* Container avec respiration */}
      <div className="mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full container">
        {children}
      </div>
    </section>
  );
}

export default Section;