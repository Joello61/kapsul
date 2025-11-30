interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'cream' | 'white' | 'olive' | 'terra' | 'sand' | 'none';
  pattern?: boolean;
}

export function Section({ 
  children, 
  className = '', 
  id,
  background = 'cream',
  pattern = false
}: SectionProps) {

  // Utilisation stricte de la palette OKLCH depuis globals.css
  const backgrounds = {
    cream: 'bg-cream',
    white: 'bg-white',
    olive: 'bg-olive-50',
    terra: 'bg-terra-50',
    sand: 'bg-sand',
    none: 'bg-transparent'
  };

  return (
    <section 
      id={id}
      className={`
        relative py-20 md:py-32 overflow-hidden
        ${backgrounds[background]}
        ${className}
      `}
    >
      {/* Pattern décoratif optionnel - Dot Grid subtil */}
      {pattern && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.035]" 
          style={{ 
            backgroundImage: `radial-gradient(oklch(0.30 0.012 280) 1px, transparent 1px)`, 
            backgroundSize: '32px 32px',
            backgroundPosition: 'center center'
          }}
        />
      )}

      {/* Container centré avec padding adaptatif */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {children}
      </div>
    </section>
  );
}

export default Section;