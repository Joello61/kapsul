interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'cream' | 'white' | 'olive' | 'terra' | 'none'; // Ajout de 'none' pour flexibilité
  pattern?: boolean; // Option pour ajouter un motif de fond subtil
}

export function Section({ 
  children, 
  className = '', 
  id,
  background = 'cream',
  pattern = false
}: SectionProps) {

  const backgrounds = {
    cream: 'bg-cream',
    white: 'bg-white',
    olive: 'bg-olive-50',
    terra: 'bg-terra-50',
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
      {/* Pattern décoratif optionnel (Grid Dot) */}
      {pattern && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.4]" 
             style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>
      )}

      {/* Container centré avec padding adaptatif */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
}

export default Section;