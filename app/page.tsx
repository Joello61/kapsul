import Hero from '@/components/sections/Hero';
import Concept from '@/components/sections/Concept';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Space from '@/components/sections/Space';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-cream">
      
      {/* Sections empilées avec espacement naturel */}
      <div className="relative z-10 flex flex-col">
        <Hero />
        <Concept />
        <Services />
        <Pricing />
        <Space />
      </div>
    </main>
  );
}