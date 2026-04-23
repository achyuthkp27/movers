'use client';
import Reveal from '@/components/ui/Reveal';


import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

/**
 * TruckNRoll heading-media style: massive stacked words
 * with scroll-triggered line reveals
 */
export default function StorySection() {
  const ref = useRef(null);

  useGSAP(() => {
      // Each word line reveals on scroll
      gsap.utils.toArray('.story-word').forEach((el) => {
        gsap.fromTo(el, {
          clipPath: 'inset(0 0 100% 0)',
          y: '100%',
        }, {
          clipPath: 'inset(0 0 0% 0)',
          y: '0%',
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Body text fade
      gsap.fromTo('.story-body', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: '.story-body', start: 'top 80%' },
      });
    }, { scope: ref });

  return (
    <section ref={ref} className="section" id="story">
      <div className="container">
        {/* TRIONN section title pattern */}
        <div className="section-title">
          <div className="section-title__left">
            <Reveal as="h3" style={{ color: 'var(--fg)' }}>
              who<br />we are
            </Reveal>
          </div>
        </div>

        {/* TruckNRoll massive heading-media words */}
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          {['WE', 'MOVE', 'YOUR', 'WORLD'].map((word, i) => (
            <div key={word} className="story-word" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 1rem + 10vw, 14rem)',
              fontWeight: 800,
              lineHeight: 0.85,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: i === 1 ? 'var(--accent)' : 'var(--fg)',
              opacity: i === 1 ? 1 : 0.12,
            }}>
              {word}
            </div>
          ))}
        </div>

        {/* Split description */}
        <div className="story-body" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-lg)',
          maxWidth: '900px',
          marginLeft: 'auto',
        }}>
          <div>
            <p className="text-body">
              As a next-generation moving company, SwiftMove<sup>®</sup> transcends 
              traditional logistics, crafting your relocation into an experience 
              that&apos;s seamless and stress-free.
            </p>
          </div>
          <div>
            <p className="text-body">
              We move with precision, staying connected with real-time tracking 
              and AI-powered planning to make your transition effortless. Every 
              item handled with care. Every deadline met.
            </p>
            <a href="#services" className="btn-outline" style={{ marginTop: 'var(--space-md)' }}>
              Our services
            </a>
          </div>
        </div>

        <style jsx>{`@media(max-width:768px){.story-body{grid-template-columns:1fr !important;}}`}</style>
      </div>
    </section>
  );
}
