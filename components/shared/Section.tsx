interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'gradient' | 'pattern';
}

export function Section({ 
  children, 
  className = '', 
  id,
  variant = 'default' 
}: SectionProps) {
  
  const variantStyles = {
    default: 'bg-cream',
    gradient: 'bg-gradient-to-b from-white via-cream to-white',
    pattern: 'relative bg-sand'
  };

  return (
    <section 
      id={id}
      className={`
        py-16 sm:py-20 lg:py-24
        relative overflow-hidden
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {/* Pattern décoratif subtil pour variant="pattern" */}
      {variant === 'pattern' && (
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(circle_at_2px_2px,var(--color-olive-600)_1px,transparent_0)] bg-size-[32px_32px]"
        />
      )}

      {/* Contenu avec conteneur centré */}
      <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
        {children}
      </div>
    </section>
  );
}

export default Section;