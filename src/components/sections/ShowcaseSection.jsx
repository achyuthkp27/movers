'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';
import Link from 'next/link';

export default function ShowcaseSection() {
  const containerRef = useRef(null);
  const mediaRef = useRef(null);

  useGSAP(() => {
    // Determine responsive border radius and scale
    const isMobile = window.innerWidth < 768;
    const finalRadius = isMobile ? '1.5rem' : '2.5rem'; // ~24px or 40px radius when expanded

    // We start the media small and round like a pill.
    // Set initial state.
    gsap.set(mediaRef.current, {
      scale: 0.14,
      borderRadius: '100rem',
      transformOrigin: 'top center',
    });

    // Create the scroll animation
    // When the top of the container hits the bottom of the viewport, it starts.
    // It finishes when the container has scrolled up by 85% of the viewport height.
    gsap.to(mediaRef.current, {
      y: 0, // In Trionn they use a calculated Y, but scaling transforms it naturally.
      scale: 1,
      borderRadius: finalRadius,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: `+=${window.innerHeight * 0.85}`,
        scrub: true,
      },
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="showcase-section relative"
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '4rem',
      }}
    >
      {/* Floating Buttons (Trionn banner_bottom style) */}
      <div 
        className="floating-ctas"
        style={{
          position: 'absolute',
          top: '-4rem', // overlaps slightly with the hero section or starts at the top
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 clamp(1.5rem, 5vw, 6rem)',
          zIndex: 10,
          pointerEvents: 'none', // Allow clicks to pass through empty space
        }}
      >
        <Link 
          href="/work" 
          className="btn-outline" 
          style={{ pointerEvents: 'auto', background: 'var(--bg)' }}
        >
          Explore work
        </Link>
        <Link 
          href="/contact" 
          className="btn-outline" 
          style={{ pointerEvents: 'auto', background: 'var(--bg)' }}
        >
          Get in touch
        </Link>
      </div>

      {/* Expanding Media Container */}
      <div 
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0 var(--container-padding)',
        }}
      >
        <div 
          ref={mediaRef}
          style={{
            width: '100%',
            height: '85vh', // High enough to look great when expanded
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* We're using a high-quality gallery image as a placeholder for the video */}
          <img 
            src="/gallery/move-1.png" 
            alt="SwiftMove Showcase" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          {/* Optional Overlay to make it feel premium */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)',
          }}></div>
        </div>
      </div>
    </section>
  );
}
