import Hero from '@/components/sections/Hero';
import Concept from '@/components/sections/Concept';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Space from '@/components/sections/Space';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Concept />
      <Services />
      <Pricing />
      <Space />
    </div>
  );
}