'use client';
import Reveal from '@/components/ui/Reveal';


import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

/**
 * TRIONN-style pricing — editorial layout with horizontal line + buttons
 */
const plans = [
  {
    name: 'Essential',
    price: '₹4,999',
    from: true,
    features: ['1 BHK Home', 'Standard Packing', 'Within-City Move', 'Basic Tracking', '3-Day Delivery'],
  },
  {
    name: 'Premium',
    price: '₹12,999',
    from: true,
    popular: true,
    features: ['Up to 3 BHK', 'Premium Packing', 'Intercity Move', 'Real-Time GPS', 'Priority Delivery', 'Insurance Cover'],
  },
  {
    name: 'Corporate',
    price: 'Custom',
    from: false,
    features: ['Full Office Setup', 'Dedicated Manager', 'Multi-City Support', 'Warehousing', 'SLA Guaranteed', '24/7 Support'],
  },
];

export default function PricingSection() {
  const ref = useRef(null);

  useGSAP(() => {
      gsap.utils.toArray('.pricing-card').forEach((el, i) => {
        // Border reveal
        gsap.fromTo(el.querySelector('.pricing-border'), { scaleX: 0 }, {
          scaleX: 1, duration: 0.8, ease: 'power3.inOut',
          delay: i * 0.06,
          scrollTrigger: { trigger: el, start: 'top 80%' },
        });
        // Content fade
        gsap.fromTo(el.querySelector('.pricing-content'), { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, duration: 0.6, delay: 0.2 + i * 0.06,
          scrollTrigger: { trigger: el, start: 'top 80%' },
        });
      });
    }, { scope: ref });

  return (
    <section ref={ref} className="section" id="pricing">
      <div className="container">
        <div className="section-title">
          <div className="section-title__left">
            <Reveal as="h3" style={{ color: 'var(--fg)' }}>pricing<br />plans</Reveal>
          </div>
          <div className="section-title__right">
            <h4 style={{ color: 'var(--fg-muted)' }}>
              Clear, upfront pricing. No hidden<br />
              fees. No surprises on delivery day.
            </h4>
          </div>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 0,
        }}>
          {plans.map((p, i) => (
            <div key={i} className="pricing-card" style={{
              paddingTop: 'var(--space-md)',
            }}>
              <div className="pricing-border" style={{
                width: '100%', height: '1px',
                background: 'currentColor',
                transformOrigin: '0 0',
                opacity: 0.12,
              }} />

              <div className="pricing-content" style={{
                padding: 'var(--space-md) var(--space-sm)',
                opacity: 0,
              }}>
                {/* Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 'var(--space-xl)',
                }}>
                  <div>
                    <div className="text-small" style={{ marginBottom: '0.5rem' }}>
                      ( {String(i + 1).padStart(2, '0')} )
                    </div>
                    <h4 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.3rem, 1rem + 0.8vw, 2rem)',
                      fontWeight: 700,
                      lineHeight: 0.9,
                      letterSpacing: '-0.01em',
                    }}>{p.name}</h4>
                  </div>

                  {p.popular && (
                    <span style={{
                      fontSize: '0.6rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--bg)',
                      background: 'var(--accent)',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      fontWeight: 600,
                    }}>Popular</span>
                  )}
                </div>

                {/* Price */}
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  {p.from && <span className="text-small" style={{ marginBottom: '4px', display: 'block' }}>Starting from</span>}
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 1.5rem + 1.5vw, 3rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    lineHeight: 0.9,
                    color: p.popular ? 'var(--accent)' : 'var(--fg)',
                  }}>{p.price}</div>
                </div>

                {/* Features */}
                <ul style={{
                  display: 'flex', flexDirection: 'column', gap: '0.75rem',
                  marginBottom: 'var(--space-lg)',
                }}>
                  {p.features.map((f, j) => (
                    <li key={j} style={{
                      fontSize: 'clamp(0.8rem, 0.7rem + 0.2vw, 0.95rem)',
                      color: 'var(--fg-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}>
                      <span style={{ color: 'var(--accent)', fontSize: '0.7em' }}>✦</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="#booking" className={p.popular ? 'btn-primary' : 'btn-outline'} style={{ width: '100%', justifyContent: 'center' }}>
                  Get started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
