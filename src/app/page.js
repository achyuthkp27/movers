'use client';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import HeroSection from '@/components/hero/HeroSection';
import StorySection from '@/components/sections/StorySection';
import ServicesSection from '@/components/sections/ServicesSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import ProcessSection from '@/components/sections/ProcessSection';
import StatsSection from '@/components/sections/StatsSection';
import ShowcaseSection from '@/components/sections/ShowcaseSection';
import FAQSection from '@/components/sections/FAQSection';
import AchievedSection from '@/components/sections/AchievedSection';
import TrackingSection from '@/components/sections/TrackingSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import GallerySection from '@/components/sections/GallerySection';
import BookingSection from '@/components/sections/BookingSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <ErrorBoundary>
      <main style={{ position: 'relative', zIndex: 1 }}>
        <ErrorBoundary>
          <HeroSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <ShowcaseSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <StorySection />
        </ErrorBoundary>
        <ErrorBoundary>
          <ServicesSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <MarqueeSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <TrackingSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <WhyChooseSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <StatsSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <ProcessSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <AchievedSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <TestimonialsSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <GallerySection />
        </ErrorBoundary>
        <ErrorBoundary>
          <FAQSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <BookingSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <FooterSection />
        </ErrorBoundary>
      </main>
    </ErrorBoundary>
  );
}
