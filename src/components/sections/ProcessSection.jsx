'use client';
import Reveal from '@/components/ui/Reveal';


import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

const steps = [
  {
    num: '01',
    title: 'Get a Quote',
    subtitle: 'It takes 2 minutes!',
    detail: 'Share your requirements through our smart calculator or quick form. Our AI generates an instant estimate based on distance, inventory size, and service type.',
  },
  {
    num: '02',
    title: 'Schedule & Pack',
    subtitle: 'We handle everything.',
    detail: 'Our trained professionals arrive with premium packing materials. Bubble wrap, custom crates, wardrobe boxes — every item protected with military precision.',
  },
  {
    num: '03',
    title: 'Track & Deliver',
    subtitle: 'Real-time visibility.',
    detail: 'GPS-tracked fleet with live status updates. Know exactly where your belongings are at every moment. Guaranteed on-time delivery or your money back.',
  },
  {
    num: '04',
    title: 'Setup & Settle',
    subtitle: 'White-glove service.',
    detail: 'We don\'t just drop boxes. Our team unpacks, arranges furniture, and ensures everything is exactly where you want it. Your new space, ready to live in.',
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const [active, setActive] = useState(null);

  useGSAP(() => {
      gsap.utils.toArray('.process-item').forEach((el) => {
        gsap.fromTo(el.querySelector('.process-border'), {
          scaleX: 0,
        }, {
          scaleX: 1,
          duration: 0.8,
          ease: 'power3.inOut',
          scrollTrigger: { trigger: el, start: 'top 80%' },
        });
      });
    }, { scope: ref });

  return (
    <section ref={ref} className="section" id="process">
      <div className="container">
        <div className="section-title">
          <div className="section-title__left">
            <Reveal as="h3" style={{ color: 'var(--fg)' }}>how it<br />works</Reveal>
          </div>
          <div className="section-title__right">
            <h4 style={{ color: 'var(--fg-muted)' }}>
              We anticipate the challenges<br />
              in advance. That&apos;s what makes<br />
              the difference for a perfect move.
            </h4>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {steps.map((s, i) => (
            <div key={i} className="process-item">
              <div className="process-border" style={{
                width: '100%', height: '1px',
                background: 'currentColor',
                transformOrigin: '0 0',
                opacity: 0.12,
              }} />

              <button
                onClick={() => setActive(active === i ? null : i)}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  padding: 'var(--space-sm) 0',
                  gap: 'var(--space-lg)',
                  transition: 'opacity var(--duration-fast)',
                  textAlign: 'left',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <span style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.2em',
                  alignItems: 'center',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(1rem, 0.8rem + 0.5vw, 1.25rem)',
                    fontWeight: 500,
                  }}>{s.title}</span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(1rem, 0.8rem + 0.5vw, 1.25rem)',
                    fontWeight: 500,
                    opacity: 0.5,
                  }}>{s.subtitle}</span>
                </span>

                <span style={{
                  flexShrink: 0,
                  width: '1rem', height: '1rem',
                  position: 'relative',
                  transition: 'transform var(--duration)',
                  transform: active === i ? 'rotate(45deg)' : 'none',
                }}>
                  <span style={{
                    position: 'absolute', top: '50%', left: 0,
                    width: '100%', height: '1px',
                    background: 'currentColor',
                    transform: 'translateY(-50%)',
                  }} />
                  <span style={{
                    position: 'absolute', left: '50%', top: 0,
                    width: '1px', height: '100%',
                    background: 'currentColor',
                    transform: 'translateX(-50%)',
                  }} />
                </span>
              </button>

              <div style={{
                maxHeight: active === i ? '200px' : '0',
                overflow: 'hidden',
                transition: 'max-height var(--duration-slow) var(--ease)',
              }}>
                <div className="grid-2" style={{
                  gap: 'var(--space-lg)',
                  paddingBottom: 'var(--space-md)',
                }}>
                  <span className="text-small" style={{ color: 'var(--accent)' }}>
                    Step {s.num}
                  </span>
                  <p className="text-body" style={{ maxWidth: '25rem' }}>
                    {s.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div style={{
            width: '100%', height: '1px',
            background: 'currentColor', opacity: 0.12,
          }} />
        </div>
      </div>
    </section>
  );
}
