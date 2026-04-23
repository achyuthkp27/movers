'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import FooterSection from '@/components/sections/FooterSection';

export default function NotFound() {
  const containerRef = useRef(null);

  useEffect(() => {
    // A simple, cinematic entry animation
    gsap.fromTo(
      '.not-found-text',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }
    );
  }, []);

  return (
    <>
      <div 
        ref={containerRef}
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 'var(--space-md)',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'var(--bg)',
          color: 'var(--fg)',
        }}
      >
        {/* Giant background text for aesthetic */}
        <div 
          className="not-found-text"
          style={{
            position: 'absolute',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(10rem, 30vw, 30rem)',
            fontWeight: 800,
            opacity: 0.03,
            lineHeight: 0.8,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          404
        </div>

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
          <h1 
            className="not-found-text"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 'var(--space-md)',
              lineHeight: 1,
            }}
          >
            Lost in transit.
          </h1>
          
          <p 
            className="not-found-text text-body"
            style={{ 
              marginBottom: 'var(--space-xl)',
              color: 'var(--fg-muted)',
            }}
          >
            It looks like the page you are looking for has been relocated, 
            or perhaps it never existed. Let's get you back on the right route.
          </p>

          <div className="not-found-text">
            <Link 
              href="/" 
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
