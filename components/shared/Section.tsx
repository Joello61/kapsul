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
    default: '',
    gradient: 'bg-gradient-to-b from-[var(--color-pearl)] via-[var(--color-cream)] to-[var(--color-pearl)]',
    pattern: 'relative'
  };

  return (
    <section 
      id={id}
      className={`
        py-20 sm:py-28 md:py-32 lg:py-36
        px-6 sm:px-8 md:px-12
        relative overflow-hidden
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {/* Pattern décoratif pour variant="pattern" */}
      {variant === 'pattern' && (
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-emerald-500) 1px, transparent 0)',
            backgroundSize: '48px 48px'
          }}
        />
      )}

      {/* Blurs décoratifs pour toutes les sections */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-300/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-coral-300/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Contenu */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}

export default Section;