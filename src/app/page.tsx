import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/home/hero/HeroSection';
import { StorySection } from '@/components/home/StorySection';
import { CocktailsSection } from '@/components/home/CocktailsSection';
import { AwardsSection } from '@/components/home/AwardsSection';
import { SustainabilitySection } from '@/components/home/SustainabilitySection';

export default function Home() {
  return (
    <main className="min-h-screen bg-beggin-paper text-beggin-ink">
      <Header />
      <HeroSection />
      <StorySection />
      <CocktailsSection />
      <AwardsSection />
      <SustainabilitySection />
    </main>
  );
}
