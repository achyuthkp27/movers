'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

export default function MarqueeSection() {
  const ref = useRef(null);

  useGSAP(() => {
      gsap.fromTo(ref.current, { opacity: 0 }, {
        opacity: 1, duration: 1,
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      });
    }, { scope: ref });

  const Row = ({ text, reverse }) => (
    <div style={{ overflow: 'hidden', padding: 'clamp(0.5rem, 1vw, 1rem) 0' }}>
      <div style={{
        display: 'flex',
        whiteSpace: 'nowrap',
        animation: `${reverse ? 'marquee-reverse' : 'marquee'} 20s linear infinite`,
      }}>
        {[...Array(4)].map((_, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <span className="text-marquee" style={{
              color: 'var(--fg)',
              opacity: 0.08,
              paddingRight: 'clamp(1rem, 3vw, 3rem)',
            }}>
              {text}
            </span>
            <span style={{
              fontSize: 'clamp(2rem, 4vw, 6rem)',
              color: 'var(--accent)',
              opacity: 0.15,
              paddingRight: 'clamp(1rem, 3vw, 3rem)',
            }}>—</span>
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section ref={ref} style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: 'clamp(1rem, 3vw, 2rem) 0',
      overflow: 'hidden',
    }}>
      <Row text="MOVE WITH PRECISION" />
      <Row text="CARE IN EVERY DETAIL" reverse />
    </section>
  );
}
