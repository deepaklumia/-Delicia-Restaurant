'use client';

import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { SignatureDishes } from '@/components/home/SignatureDishes';
import { ChefTastingMenu } from '@/components/home/ChefTastingMenu';
import { DigitalMenu } from '@/components/home/DigitalMenu';
import { CateringSection } from '@/components/home/CateringSection';
import { WineCellarSection } from '@/components/home/WineCellarSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { LocationsSection } from '@/components/home/LocationsSection';
import { InstagramFeed } from '@/components/home/InstagramFeed';
import { VipGiftCardSection } from '@/components/home/VipGiftCardSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian-950 text-cream-100 flex flex-col relative selection:bg-gold-500 selection:text-obsidian-950">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SignatureDishes />
      <ChefTastingMenu />
      <DigitalMenu />
      <CateringSection />
      <WineCellarSection />
      <TestimonialsSection />
      <LocationsSection />
      <InstagramFeed />
      <VipGiftCardSection />
      <Footer />
    </main>
  );
}
