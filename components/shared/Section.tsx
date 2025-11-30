interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ 
  children, 
  className = '', 
  id,
}: SectionProps) {

  return (
    <section 
      id={id}
      className={`
        py-16 sm:py-20 lg:py-24
        relative overflow-hidden
        bg-cream
        ${className}
      `}
    >

      {/* Contenu avec conteneur centré */}
      <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
        {children}
      </div>
    </section>
  );
}

export default Section;