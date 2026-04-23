'use client';

import dynamic from 'next/dynamic';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import StorySection from '@/components/sections/StorySection';
import ServicesSection from '@/components/sections/ServicesSection';
import MarqueeSection from '@/components/sections/MarqueeSection';
import ProcessSection from '@/components/sections/ProcessSection';
import StatsSection from '@/components/sections/StatsSection';
import TrackingSection from '@/components/sections/TrackingSection';
import WhyChooseSection from '@/components/sections/WhyChooseSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import GallerySection from '@/components/sections/GallerySection';
import BookingSection from '@/components/sections/BookingSection';
import FooterSection from '@/components/sections/FooterSection';

const ChatBot = dynamic(() => import('@/components/smart/ChatBot'), { ssr: false });
const FluidCanvas = dynamic(() => import('@/components/FluidCanvas'), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <FluidCanvas />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <StorySection />
        <ServicesSection />
        <MarqueeSection />
        <ProcessSection />
        <StatsSection />
        <TrackingSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <GallerySection />
        <BookingSection />
      </main>

      <FooterSection />
      <ChatBot />
    </>
  );
}
