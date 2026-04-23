'use client';
import Reveal from '@/components/ui/Reveal';


import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

const testimonials = [
  {
    quote: "SwiftMove® handled our entire office relocation without a single day of downtime. The precision was remarkable — every desk, every server rack, perfectly placed.",
    name: 'Ravi Sharma',
    title: 'CTO, TechNova Solutions',
  },
  {
    quote: "I was terrified of moving my grandmother's antique furniture. Their white-glove team wrapped every piece with such care. Not a scratch. Truly premium service.",
    name: 'Priya Menon',
    title: 'Interior Designer',
  },
  {
    quote: "Real-time tracking changed everything. I could see exactly where my belongings were during the intercity move. It's like Uber for moving — but better.",
    name: 'Arjun Patel',
    title: 'Entrepreneur',
  },
  {
    quote: "Three apartments, two cities, one weekend. SwiftMove® made the impossible feel effortless. Their scheduling algorithm is genuinely impressive.",
    name: 'Ananya Iyer',
    title: 'Product Manager, Flipkart',
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const touchStart = useRef(0);

  const paused = useRef(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused.current) {
        setActive(prev => (prev + 1) % testimonials.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
      gsap.fromTo('.testimonial-section', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      });
    }, { scope: ref });

  const t = testimonials[active];

  return (
    <section ref={ref} className="section" id="testimonials"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
      onTouchStart={(e) => { touchStart.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        const diff = touchStart.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) setActive((active + 1) % testimonials.length);
          else setActive((active - 1 + testimonials.length) % testimonials.length);
        }
      }}
    >
      <div className="container testimonial-section">
        <div className="section-title">
          <div className="section-title__left">
            <Reveal as="h3" style={{ color: 'var(--fg)' }}>client<br />stories</Reveal>
          </div>
        </div>

        <div style={{
          maxWidth: '48rem',
          margin: '0 auto',
          textAlign: 'center',
          padding: 'var(--space-2xl) 0',
        }}>
          <div style={{
            fontSize: 'clamp(3rem, 2rem + 3vw, 6rem)',
            lineHeight: 0.5,
            color: 'var(--accent)',
            opacity: 0.2,
            marginBottom: 'var(--space-md)',
            fontFamily: 'Georgia, serif',
          }}>&ldquo;</div>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.1rem, 0.9rem + 0.5vw, 1.5rem)',
            fontWeight: 400,
            lineHeight: 1.5,
            color: 'var(--fg)',
            marginBottom: 'var(--space-lg)',
            minHeight: 'clamp(4rem, 8vw, 6rem)',
          }}>
            {t.quote}
          </p>

          <div style={{ marginBottom: 'var(--space-lg)' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.9rem, 0.8rem + 0.3vw, 1.1rem)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
            }}>{t.name}</div>
            <div className="text-small" style={{ marginTop: '4px' }}>{t.title}</div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
          }}>
            <button
              onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
              className="btn-outline"
              style={{ padding: '0.6rem 1rem', fontSize: '0.8rem' }}
            >←</button>

            <div style={{ display: 'flex', gap: '8px' }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  width: i === active ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === active ? 'var(--accent)' : 'var(--fg-subtle)',
                  transition: 'all var(--duration-fast)',
                }} />
              ))}
            </div>

            <button
              onClick={() => setActive((active + 1) % testimonials.length)}
              className="btn-outline"
              style={{ padding: '0.6rem 1rem', fontSize: '0.8rem' }}
            >→</button>
          </div>

          <div className="text-mono" style={{
            marginTop: 'var(--space-md)',
            fontSize: '0.75rem',
            color: 'var(--fg-subtle)',
          }}>
            {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </section>
  );
}
