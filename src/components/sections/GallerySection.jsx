'use client';
import Reveal from '@/components/ui/Reveal';


import ParallaxImage from '@/components/ui/ParallaxImage';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

/**
 * TruckNRoll c-splash gallery — minimal visual grid
 */
export default function GallerySection() {
  const ref = useRef(null);

  useGSAP(() => {
      gsap.utils.toArray('.gallery-item').forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 40, scale: 0.96 }, {
          opacity: 1, y: 0, scale: 1,
          duration: 0.7, delay: i * 0.08,
          scrollTrigger: { trigger: el, start: 'top 80%' }, // Trigger on the item itself for staggered load
        });
      });
    }, { scope: ref });

  const items = [
    { h: '16rem', span: 'span 2', src: '/gallery/move-1.png', label: 'Premium Packing' },
    { h: '20rem', span: 'span 1', src: '/gallery/move-2.png', label: 'Residential Move' },
    { h: '20rem', span: 'span 1', src: '/gallery/move-3.png', label: 'Office Setup' },
    { h: '16rem', span: 'span 2', src: '/gallery/move-4.png', label: 'Vehicle Transport' },
  ];

  return (
    <section ref={ref} className="section" id="gallery">
      <div className="container">
        <div className="section-title">
          <div className="section-title__left">
            <Reveal as="h3" style={{ color: 'var(--fg)' }}>our<br />work</Reveal>
          </div>
          <div className="section-title__right">
            <Reveal as="h4" style={{ color: 'var(--fg-muted)' }}>
              Every move tells a story.<br />
              Here are some of ours.
            </Reveal>
          </div>
        </div>

        <div className="grid-2">
          {items.map((item, i) => (
            <div key={i} className="gallery-item" data-cursor="view" style={{
              height: item.h,
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-end',
              padding: 'var(--space-sm)',
            }}>
              <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <ParallaxImage speed={20}>
                  <img src={item.src} alt={item.label} />
                </ParallaxImage>
              </div>
              
              {/* Gradient overlay so text is readable */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 50%)', zIndex: 1, pointerEvents: 'none' }} />
              {/* Numbered overlay */}
              <div style={{
                position: 'absolute',
                top: 'var(--space-sm)',
                left: 'var(--space-sm)',
                display: 'flex',
                gap: 'var(--space-sm)',
                alignItems: 'center',
              }}>
                <span className="text-mono" style={{
                  fontSize: '0.75rem',
                  color: 'var(--fg-subtle)',
                }}>
                  ({String(i + 1).padStart(2, '0')})
                </span>
              </div>

              {/* Label */}
              <span className="text-small" style={{ color: 'var(--fg-muted)' }}>
                {['Residential Move', 'Office Setup', 'Vehicle Transport', 'Premium Packing'][i]}
              </span>

              {/* Subtle icon */}
              <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.04 }}
                width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="0.5">
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                <circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
