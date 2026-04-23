'use client';
import Reveal from '@/components/ui/Reveal';


import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

const services = [
  {
    num: '01',
    title: 'Home\nRelocation',
    desc: 'Every detail is handled. Every deadline met. No stress. No scrambling. Just a team that makes sure everything arrives exactly as planned.',
    gradient: 'linear-gradient(135deg, #0d1117 0%, #1a2332 100%)',
  },
  {
    num: '02',
    title: 'Office\nShifting',
    desc: 'We sync with your timeline, your challenges, and your priorities. Zero downtime guaranteed. Your business never stops moving.',
    gradient: 'linear-gradient(135deg, #0a0e14 0%, #151d2b 100%)',
  },
  {
    num: '03',
    title: 'Vehicle\nTransport',
    desc: 'From the road to your door, safety is at the heart of everything we do. Inspected carriers, strict protocols, experienced crew.',
    gradient: 'linear-gradient(135deg, #080c12 0%, #121a25 100%)',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);

  useGSAP(() => {
      gsap.utils.toArray('.service-item').forEach((el, i) => {
        // Inview border animation
        gsap.fromTo(el.querySelector('.service-border'), {
          scaleX: 0,
        }, {
          scaleX: 1,
          duration: 0.8,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        });

        // Content stagger
        gsap.fromTo(el.querySelector('.service-content'), {
          opacity: 0, y: 30,
        }, {
          opacity: 1, y: 0,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: { trigger: el, start: 'top 75%' },
        });
      });
    }, { scope: ref });

  return (
    <section ref={ref} className="section" id="services">
      <div className="container">
        {/* TRIONN section title */}
        <div className="section-title">
          <div className="section-title__left">
            <Reveal as="h3" style={{ color: 'var(--fg)' }}>our<br />services</Reveal>
          </div>
          <div className="section-title__right">
            <h4 style={{ color: 'var(--fg-muted)' }}>
              We don&apos;t just move your belongings.<br />
              We make sure everything gets where<br />
              it needs to be, when it matters most.
            </h4>
          </div>
        </div>

        {/* TruckNRoll grid-list pattern */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'var(--space-lg)',
        }}>
          {services.map((s, i) => (
            <div key={i} className="service-item" style={{
              paddingTop: 'var(--space-md)',
            }}>
              {/* Inview border */}
              <div className="service-border" style={{
                width: '100%', height: '1px',
                background: 'var(--fg)',
                transformOrigin: '0 0',
                opacity: 0.15,
                marginBottom: 'var(--space-md)',
              }} />

              <div className="service-content">
                {/* Number */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'clamp(1.5rem, 4vw, 3.75rem)',
                  marginBottom: 'var(--space-md)',
                }}>
                  <span className="text-small" style={{ color: 'var(--fg-subtle)', marginTop: '4px' }}>
                    ( {s.num} )
                  </span>
                  <Reveal as="h3" style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 1rem + 1.5vw, 2.5rem)',
                    fontWeight: 700,
                    lineHeight: 0.9,
                    letterSpacing: '-0.02em',
                    whiteSpace: 'pre-line',
                  }}>
                    {s.title}
                  </Reveal>
                </div>

                {/* Description */}
                <p className="text-body" style={{ maxWidth: '25rem' }}>
                  {s.desc}
                </p>

                {/* Visual card */}
                <div style={{
                  marginTop: 'var(--space-md)',
                  aspectRatio: '4.3/3',
                  maxWidth: '21.875rem',
                  borderRadius: 'var(--radius-xs) var(--radius-xs) var(--radius-lg) var(--radius-xs)',
                  background: s.gradient,
                  border: '1px solid var(--border)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="0.5" opacity="0.15">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
