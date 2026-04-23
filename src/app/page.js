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
import FooterSection from '@/components/sections/FooterSection';

const sections = [
  HeroSection,
  ShowcaseSection,
  StorySection,
  ServicesSection,
  MarqueeSection,
  TrackingSection,
  WhyChooseSection,
  StatsSection,
  ProcessSection,
  AchievedSection,
  TestimonialsSection,
  GallerySection,
  FAQSection,
  BookingSection,
  FooterSection
];

export default function Home() {
  return (
    <ErrorBoundary>
      <main style={{ position: 'relative', zIndex: 1 }}>
        {sections.map((Section, idx) => (
          <ErrorBoundary key={idx}>
            <Section />
          </ErrorBoundary>
        ))}
      </main>
    </ErrorBoundary>
  );
}
