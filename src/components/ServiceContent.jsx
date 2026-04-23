'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';
import FooterSection from '@/components/sections/FooterSection';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import Magnetic from '@/components/ui/Magnetic';

export default function ServiceContent({ data }) {
  const router = useRouter();
  const containerRef = useRef(null);

  useGSAP(() => {
    if (!data) return;

    // Split text reveal for title
    gsap.fromTo('.detail-title-line', {
      y: '100%',
      clipPath: 'inset(0 0 100% 0)'
    }, {
      y: 0,
      clipPath: 'inset(0 0 0% 0)',
      duration: 1,
      stagger: 0.1,
      ease: 'power4.out',
      delay: 0.2
    });

    // Fade up for content
    gsap.fromTo('.detail-fade', {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.6
    });

    // Image reveal
    gsap.fromTo('.detail-image-wrap', {
      scale: 1.1,
      clipPath: 'inset(10% 10% 10% 10% round var(--radius-lg))'
    }, {
      scale: 1,
      clipPath: 'inset(0% 0% 0% 0% round var(--radius-lg))',
      duration: 1.2,
      ease: 'power4.inOut',
      delay: 0.4
    });

  }, { scope: containerRef, dependencies: [data] });

  return (
    <>
      <main ref={containerRef} style={{ minHeight: '100vh', paddingTop: 'clamp(8rem, 15vh, 12rem)' }}>
        <div className="container">
          
          {/* Back Navigation */}
          <div className="detail-fade" style={{ marginBottom: 'var(--space-lg)' }}>
            <Magnetic strength={0.2}>
              <button 
                onClick={() => router.back()}
                className="text-small"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--fg-muted)',
                  cursor: 'pointer',
                  padding: '0.5rem 0'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to services
              </button>
            </Magnetic>
          </div>

          {/* Header Section */}
          <div style={{ marginBottom: 'var(--space-2xl)' }}>
            <h1 className="text-display" style={{ marginBottom: 'var(--space-md)' }}>
              <span style={{ display: 'block', overflow: 'hidden' }}>
                <span className="detail-title-line" style={{ display: 'block' }}>{data.title.split(' ')[0]}</span>
              </span>
              <span style={{ display: 'block', overflow: 'hidden' }}>
                <span className="detail-title-line" style={{ display: 'block', color: 'var(--accent)' }}>{data.title.split(' ').slice(1).join(' ')}</span>
              </span>
            </h1>
            
            <div className="detail-fade" style={{ maxWidth: '600px' }}>
              <p className="text-body" style={{ fontSize: 'clamp(1.1rem, 1.2vw, 1.4rem)', lineHeight: 1.5 }}>
                {data.desc}
              </p>
            </div>
          </div>

          {/* Hero Image with Cinematic Reveal */}
          <div className="detail-image-wrap" style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '21/9',
            backgroundColor: 'var(--bg-card)',
            marginBottom: 'var(--space-3xl)'
          }}>
            <Image 
              src={data.src} 
              alt={data.title}
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Process Grid */}
          <div style={{ marginBottom: 'var(--space-4xl)' }}>
            <div className="detail-fade" style={{ marginBottom: 'var(--space-2xl)', textAlign: 'center' }}>
              <h2 className="text-heading-xl">The Process</h2>
              <p className="text-small" style={{ marginTop: '0.5rem' }}>Precision in every phase</p>
            </div>

            <div className="grid-2" style={{ gap: 'var(--space-xl)' }}>
              {data.process.map((step, idx) => (
                <div key={idx} className="detail-fade" style={{
                  padding: 'var(--space-lg)',
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  gap: 'var(--space-md)'
                }}>
                  <div className="text-mono" style={{ color: 'var(--accent)', fontSize: '1.5rem', fontWeight: 700, opacity: 0.5 }}>
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-heading-sm" style={{ marginBottom: '0.5rem' }}>{step.title}</h3>
                    <p className="text-body" style={{ fontSize: '0.95rem' }}>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Prop Banner */}
          <div className="detail-fade" style={{ 
            marginBottom: 'var(--space-4xl)',
            padding: 'var(--space-3xl) var(--space-xl)',
            background: 'var(--fg)',
            color: 'var(--bg)',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center'
          }}>
            <h2 className="text-heading-lg" style={{ marginBottom: 'var(--space-xl)' }}>White-Glove Standards</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-lg)' }}>
              {data.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '10px', height: '10px', background: 'var(--accent)', borderRadius: '50%' }} />
                  <span className="text-small" style={{ color: 'inherit', fontWeight: 700 }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="detail-fade" style={{ textAlign: 'center', paddingBottom: 'var(--space-4xl)' }}>
            <h2 className="text-heading-xl" style={{ marginBottom: 'var(--space-xl)' }}>Ready to move?</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              <Magnetic>
                <a href="https://wa.me/911800123456" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '1.25rem 3rem' }}>
                  WhatsApp Quote
                </a>
              </Magnetic>
              <Magnetic>
                <a href="tel:+911800123456" className="btn-outline" style={{ padding: '1.25rem 3rem' }}>
                  Call Coordinator
                </a>
              </Magnetic>
            </div>
          </div>

        </div>
      </main>

      <FooterSection />
    </>
  );
}
