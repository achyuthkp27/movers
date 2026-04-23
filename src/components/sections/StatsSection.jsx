'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

/**
 * TRIONN tr__home__achieved style — horizontal scrolling counter blocks
 */
const stats = [
  { value: 10000, display: '10K', suffix: '+', label: 'moves\ncompleted' },
  { value: 50, display: '50', suffix: '+', label: 'cities\ncovered' },
  { value: 99, display: '99', suffix: '%', label: 'client\nsatisfaction' },
  { value: 24, display: '24', suffix: '/7', label: 'support &\ntracking' },
];

export default function StatsSection() {
  const ref = useRef(null);

  useGSAP(() => {
      gsap.utils.toArray('.stat-block').forEach((el, i) => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        });
      });
    }, { scope: ref });

  return (
    <section ref={ref} style={{
      padding: 'var(--space-2xl) 0',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
        }}>
          {stats.map((s, i) => (
            <div key={i} className="stat-block" style={{
              textAlign: 'center',
              padding: 'var(--space-lg)',
              borderRight: i < 3 ? '1px solid var(--border)' : 'none',
              opacity: 0,
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 2rem + 2vw, 4.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 0.9,
                color: 'var(--accent)',
              }}>
                {s.display}<span style={{ fontSize: '60%' }}>{s.suffix}</span>
              </div>
              <div style={{
                marginTop: 'var(--space-xs)',
                fontSize: 'clamp(0.65rem, 0.55rem + 0.25vw, 0.8rem)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--fg-subtle)',
                whiteSpace: 'pre-line',
                lineHeight: 1.3,
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`@media(max-width:768px){
        .container > div { grid-template-columns: repeat(2, 1fr) !important; }
        .stat-block:nth-child(2) { border-right: none !important; }
        .stat-block:nth-child(1), .stat-block:nth-child(2) { border-bottom: 1px solid var(--border); }
      }`}</style>
    </section>
  );
}
