import Hero from '@/components/sections/Hero';
import Concept from '@/components/sections/Concept';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Space from '@/components/sections/Space';

export default function Home() {
  return (
    <>
      {/* Hero sans padding (plein écran) */}
      <Hero />
      
      {/* Sections avec espacement cohérent */}
      <Concept />
      <Services />
      <Pricing />
      <Space />
    </>
  );
}