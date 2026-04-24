'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';
import Magnetic from '@/components/ui/Magnetic';
import Reveal from '@/components/ui/Reveal';

export default function HeroSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo('.hero-line', {
      y: 100,
      opacity: 0,
      skewY: 7
    }, {
      y: 0,
      opacity: 1,
      skewY: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',
      delay: 0.5
    });

    tl.fromTo('.hero-fadeup', {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out'
    }, "-=0.6");

    tl.fromTo('.hero-side-accent', {
      x: -50,
      opacity: 0
    }, {
      x: 0,
      opacity: 0.3,
      duration: 1,
      ease: 'power3.out'
    }, "-=1");

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: 'var(--space-2xl) var(--space-xl)',
        textAlign: 'center',
        overflow: 'hidden'
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .hero-side-accent { display: none !important; }
        }
      `}</style>

      <div className="hero-side-accent text-mono" style={{
        position: 'absolute',
        left: 'var(--space-xl)',
        top: '50%',
        transform: 'translateY(-50%) rotate(-90deg)',
        transformOrigin: 'left center',
        fontSize: '0.75rem',
        letterSpacing: '0.4em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        pointerEvents: 'none'
      }}>
        Premium Relocation — Est. 2024
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1100px' }}>
        
        <div style={{ marginBottom: 'var(--space-md)' }}>
          <span className="hero-fadeup text-mono" style={{ 
            color: 'var(--accent)', 
            fontSize: '0.875rem', 
            fontWeight: 700, 
            letterSpacing: '0.2em',
            display: 'inline-block'
          }}>
            PACKERS AND MOVERS IN KARNATAKA
          </span>
        </div>

        <h1 className="text-display" style={{ marginBottom: 'var(--space-xl)' }}>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span className="hero-line" style={{ display: 'block' }}>Best Packers and</span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span className="hero-line text-stroke" style={{ display: 'block' }}>Movers in Karnataka</span>
          </span>
        </h1>

        <div className="hero-fadeup" style={{ 
          maxWidth: '650px', 
          margin: '0 auto var(--space-2xl)',
        }}>
          <p className="text-body" style={{ 
            fontSize: 'clamp(1.1rem, 1.3vw, 1.5rem)', 
            lineHeight: 1.4,
            color: 'var(--fg-muted)'
          }}>
            Top-rated packers and movers near you. Safe, secure, and affordable house shifting services in Doddaballapur, Bashettihalli, and Bangalore Rural.
          </p>
        </div>

        <div className="hero-fadeup" style={{
          display: 'flex',
          gap: 'var(--space-md)',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 'var(--space-lg)',
        }}>
          <Magnetic>
            <a href="https://wa.me/918660616322"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '1.25rem 3rem' }}
            >
              Get a Quote
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#services" className="btn-outline"
              style={{ padding: '1.25rem 3rem' }}
            >
              Explore Services
            </a>
          </Magnetic>
        </div>

        {/* Premium Dual-Contact Pill */}
        <div className="hero-fadeup glass-premium" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'clamp(0.75rem, 2vw, 1.5rem)',
          padding: '0.75rem clamp(1rem, 3vw, 2rem)',
          borderRadius: '99px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          border: '1px solid var(--border)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="glow-dot" />
            <span className="text-small" style={{ color: 'var(--fg-muted)' }}>24/7 Support</span>
          </div>
          
          <div style={{ width: '1px', height: '1.5rem', background: 'var(--border)', opacity: 0.5 }} />
          
          <a href="tel:+918660616322" style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color var(--duration-fast)' 
          }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'inherit'}>
            <span className="text-small" style={{ color: 'var(--fg-muted)' }}>Manju</span>
            <span className="text-mono" style={{ fontWeight: 700 }}>86606 16322</span>
          </a>

          <div style={{ width: '1px', height: '1.5rem', background: 'var(--border)', opacity: 0.5 }} />
          
          <a href="tel:+918970980231" style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color var(--duration-fast)' 
          }} onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={e => e.currentTarget.style.color = 'inherit'}>
            <span className="text-small" style={{ color: 'var(--fg-muted)' }}>Shivu</span>
            <span className="text-mono" style={{ fontWeight: 700 }}>89709 80231</span>
          </a>
        </div>
      </div>

      <div className="hero-fadeup" style={{
        position: 'absolute',
        bottom: 'var(--space-xl)',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        opacity: 0.5,
        pointerEvents: 'none'
      }}>
        <div style={{
          width: '1px',
          height: '60px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          marginBottom: '1rem'
        }} />
        <span className="text-mono" style={{ 
          fontSize: '0.65rem', 
          letterSpacing: '0.3em', 
          textIndent: '0.3em', // Balances the trailing letter-spacing
          textTransform: 'uppercase'
        }}>
          SCROLL
        </span>
      </div>
    </section>
  );
}
