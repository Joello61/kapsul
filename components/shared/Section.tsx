interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <section 
      id={id}
      className={`
        py-24 px-6
        bg-bg-ultra-dark
        ${className}
      `}
    >
      {children}
    </section>
  );
}