'use client';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import FooterSection from '@/components/sections/FooterSection';
import BookingSection from '@/components/sections/BookingSection';
import FAQSection from '@/components/sections/FAQSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import Magnetic from '@/components/ui/Magnetic';

export default function LocationPageTemplate({ city }) {
  return (
    <ErrorBoundary>
      <main style={{ position: 'relative', zIndex: 1, paddingTop: '15vh' }}>
        <section className="container" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ maxWidth: '800px' }}>
            <span className="text-mono" style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.2em' }}>
              LOCAL MOVING SERVICES
            </span>
            <h1 className="text-display" style={{ marginTop: '1rem', marginBottom: '2rem', fontSize: 'clamp(3rem, 5vw, 5rem)' }}>
              Packers and Movers in <span style={{ color: 'var(--accent)' }}>{city}</span>
            </h1>
            <p className="text-body" style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--fg-muted)', marginBottom: '3rem' }}>
              Basaveshwara Packers & Movers is your trusted partner for relocation in {city}. Whether you're moving your home, office, or need specialized packing and loading services, our experienced team ensures a safe and hassle-free experience. We are the top-rated affordable packers and movers near you.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Magnetic>
                <a href="https://wa.me/918660616322" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1.25rem 3rem' }}>
                  Get a Free Quote
                </a>
              </Magnetic>
              <Magnetic>
                <a href="tel:+918660616322" className="btn-outline" style={{ padding: '1.25rem 3rem' }}>
                  Call Manju
                </a>
              </Magnetic>
              <Magnetic>
                <a href="tel:+918970980231" className="btn-outline" style={{ padding: '1.25rem 3rem' }}>
                  Call Shivu
                </a>
              </Magnetic>
            </div>
          </div>
        </section>

        <ServicesSection />
        <TestimonialsSection />
        <FAQSection />
        <BookingSection />
        <FooterSection />
      </main>
    </ErrorBoundary>
  );
}
