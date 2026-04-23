'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

/**
 * TruckNRoll c-splash style — full-bleed visual section
 * with overlay text and rounded corners
 */
export default function TrackingSection() {
  const ref = useRef(null);

  useGSAP(() => {
      gsap.fromTo('.tracking-text', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, stagger: 0.15, duration: 0.8,
        scrollTrigger: { trigger: ref.current, start: 'top 60%' },
      });
    }, { scope: ref });

  return (
    <section ref={ref} className="section" id="tracking">
      <div className="container">
        {/* Splash visual */}
        <div style={{
          borderRadius: 'var(--radius-xs) var(--radius-xs) var(--radius-lg) var(--radius-lg)',
          overflow: 'hidden',
          position: 'relative',
          minHeight: 'clamp(20rem, 40vw, 37.5rem)',
          background: 'linear-gradient(145deg, #0a1628 0%, #0d1b2a 30%, #1a2a48 70%, #0a1628 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(1rem, 2vw, 2rem)',
        }}>
          {/* Dark overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 0,
          }} />

          {/* Dot pattern */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle, rgba(197,252,252,0.1) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            zIndex: 0,
          }} />

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="tracking-text" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 1rem + 3vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 0.85,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              maxWidth: '50%',
              marginBottom: 'var(--space-2xl)',
              color: '#E0EEEE',
            }}>
              Every move<br />is different.
            </div>
            <div className="tracking-text" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 1rem + 3vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 0.85,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              textAlign: 'right',
              color: '#E0EEEE',
            }}>
              We always<br />stay on track.
            </div>
          </div>

          {/* Animated route line */}
          <svg style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            zIndex: 0, opacity: 0.1,
          }} viewBox="0 0 800 400" preserveAspectRatio="none">
            <path d="M0,200 Q200,50 400,200 T800,200" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="12 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="2s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>
      </div>
    </section>
  );
}
