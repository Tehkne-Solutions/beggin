import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/home/hero/HeroSection';
import { StorySection } from '@/components/home/StorySection';
import { CocktailsSection } from '@/components/home/CocktailsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-beggin-paper text-beggin-ink">
      <Header />
      <HeroSection />
      <StorySection />
      <CocktailsSection />
    </main>
  );
}
