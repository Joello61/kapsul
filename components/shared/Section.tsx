interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'cream' | 'white' | 'gradient';
}

export function Section({ 
  children, 
  className = '', 
  id,
  background = 'cream'
}: SectionProps) {

  const backgroundStyles = {
    cream: 'bg-cream',
    white: 'bg-white',
    gradient: 'bg-gradient-to-b from-white via-cream to-white'
  };

  return (
    <section 
      id={id}
      className={`
        py-20 sm:py-24 lg:py-32
        relative overflow-hidden
        ${backgroundStyles[background]}
        ${className}
      `}
    >
      {/* Contenu avec max-width optimisé */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {children}
      </div>
    </section>
  );
}

export default Section;