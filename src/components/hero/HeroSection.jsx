'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

/**
 * TRIONN-style Hero — contact-driven CTAs (WhatsApp + Call)
 */
export default function HeroSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
      gsap.fromTo('.hero-line', {
        clipPath: 'inset(0 0 100% 0)',
        y: '100%',
      }, {
        clipPath: 'inset(0 0 0% 0)',
        y: '0%',
        opacity: 1,
        stagger: 0.12,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5,
      });

      gsap.fromTo('.hero-fadeup', {
        y: 20, opacity: 0,
      }, {
        y: 0, opacity: 1,
        stagger: 0.1, duration: 0.8,
        ease: 'power2.out',
        delay: 1.2,
      });

      gsap.to('.hero-arrow', {
        y: 8, repeat: -1, yoyo: true,
        duration: 1.2, ease: 'power1.inOut', delay: 2,
      });
    }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="hero" style={{
      minHeight: '106vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    }}>
      <div className="container" style={{
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        marginBottom: '2.5rem',
      }}>
        {/* Main heading */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.5rem, 2rem + 7vw, 9rem)',
          fontWeight: 800,
          lineHeight: 0.85,
          letterSpacing: '-0.03em',
          marginBottom: 'clamp(1.5rem, 2vw, 2.5rem)',
        }}>
          <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.1em' }}>
            <span className="hero-line" style={{ display: 'block' }}>moving,</span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.1em' }}>
            <span className="hero-line" style={{ display: 'block' }}>reinvented.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <div className="hero-fadeup" style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
        }}>
          <p style={{
            fontSize: 'clamp(0.7rem, 0.6rem + 0.3vw, 0.875rem)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            lineHeight: 1.4,
            color: 'var(--fg-muted)',
          }}>
            <span style={{ display: 'block' }}>Premium packers & movers.</span>
            <span style={{ display: 'block' }}>Call us or WhatsApp — we&apos;ll handle the rest.</span>
          </p>
        </div>

        {/* CTA buttons — WhatsApp + Call */}
        <div className="hero-fadeup" style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a href="https://wa.me/911800123456?text=Hi%2C%20I%20need%20help%20with%20my%20move"
            target="_blank" rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
          <a href="tel:+911800123456" className="btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Now
          </a>
        </div>

        {/* Arrow down */}
        <div className="hero-fadeup" style={{
          marginTop: 'clamp(3rem, 5vw, 5rem)',
          display: 'flex', justifyContent: 'center',
        }}>
          <a href="#story" className="hero-arrow" style={{ opacity: 0.4 }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom stats */}
      <div style={{
        position: 'absolute',
        bottom: 'clamp(1.5rem, 3vw, 3rem)',
        left: 0, right: 0, zIndex: 1,
      }}>
        <div className="container">
          <div className="hero-fadeup" style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border)',
          }}>
            {[
              { val: '10K+', label: 'Moves' },
              { val: '50+', label: 'Cities' },
              { val: '99%', label: 'Satisfaction' },
              { val: '24/7', label: 'Support' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center', flex: '1 1 auto' }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.2rem, 1rem + 0.5vw, 1.5rem)',
                  fontWeight: 700, letterSpacing: '-0.02em',
                  color: 'var(--accent)',
                }}>{s.val}</div>
                <div style={{
                  fontSize: '0.7rem', letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'var(--fg-subtle)',
                  marginTop: '2px',
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
