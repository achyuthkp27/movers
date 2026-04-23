'use client';
import Reveal from '@/components/ui/Reveal';


import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

/**
 * "Why SwiftMove" — TruckNRoll c-grid-list + TRIONN editorial style
 * Replaces pricing. Showcases competitive advantages.
 */
const advantages = [
  {
    num: '01',
    title: 'Real-Time Visibility',
    desc: 'GPS-tracked fleet with live status dashboard. Know exactly where your belongings are — down to the street level — at every moment of the journey.',
    stat: '100%',
    statLabel: 'Trackable',
  },
  {
    num: '02',
    title: 'Zero Damage Policy',
    desc: 'Military-grade packing. Custom crating for fragile items. Full insurance coverage included. If anything breaks, we replace it — no questions asked.',
    stat: '₹10L',
    statLabel: 'Coverage',
  },
  {
    num: '03',
    title: 'On-Time Guarantee',
    desc: 'We don\'t do "approximately." Every move has a locked delivery window. Miss it, and we refund the difference. That\'s how confident we are.',
    stat: '99.2%',
    statLabel: 'On-Time',
  },
  {
    num: '04',
    title: 'Dedicated Move Manager',
    desc: 'One point of contact from start to finish. No call centers. No ticket queues. Your move manager knows your name, your inventory, and your timeline.',
    stat: '1:1',
    statLabel: 'Support',
  },
];

export default function WhyChooseSection() {
  const ref = useRef(null);

  useGSAP(() => {
      // Animate each advantage item
      gsap.utils.toArray('.advantage-item').forEach((el, i) => {
        // Border reveal
        const border = el.querySelector('.advantage-border');
        if (border) {
          gsap.fromTo(border, { scaleX: 0 }, {
            scaleX: 1, duration: 0.8,
            ease: 'power3.inOut',
            delay: i * 0.06,
            scrollTrigger: { trigger: el, start: 'top 85%' },
          });
        }

        // Content reveal
        gsap.fromTo(el.querySelector('.advantage-content'), {
          opacity: 0, y: 40,
        }, {
          opacity: 1, y: 0,
          duration: 0.7,
          delay: 0.15 + i * 0.06,
          scrollTrigger: { trigger: el, start: 'top 80%' },
        });
      });

      // Section title reveal
      gsap.utils.toArray('.why-title-line').forEach((el, i) => {
        gsap.fromTo(el, {
          clipPath: 'inset(0 0 100% 0)',
          y: '100%',
        }, {
          clipPath: 'inset(0 0 0% 0)',
          y: '0%',
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: { trigger: ref.current, start: 'top 75%' },
        });
      });
    }, { scope: ref });

  return (
    <section ref={ref} className="section" id="why-us">
      <div className="container">
        {/* Section title with text reveal */}
        <div className="section-title">
          <div className="section-title__left">
            <Reveal as="h3" style={{ color: 'var(--fg)' }}>
              <span style={{ display: 'block', overflow: 'hidden' }}>
                <span className="why-title-line" style={{ display: 'block' }}>why</span>
              </span>
              <span style={{ display: 'block', overflow: 'hidden' }}>
                <span className="why-title-line" style={{ display: 'block' }}>swiftmove</span>
              </span>
            </Reveal>
          </div>
          <div className="section-title__right">
            <h4 style={{ color: 'var(--fg-muted)' }}>
              We built the service we wished<br />
              existed when we had to move.<br />
              Here&apos;s what makes us different.
            </h4>
          </div>
        </div>

        {/* Advantage grid */}
        <div className="grid-2" style={{ gap: 0 }}>
          {advantages.map((a, i) => (
            <div key={i} className="advantage-item" style={{ padding: 0 }}>
              {/* Top border */}
              <div className="advantage-border" style={{
                width: '100%', height: '1px',
                background: 'currentColor',
                transformOrigin: '0 0',
                opacity: 0.12,
              }} />

              <div className="advantage-content" style={{
                padding: 'var(--space-lg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 'clamp(14rem, 20vw, 20rem)',
                opacity: 0,
              }}>
                <div>
                  {/* Number + Title */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.25rem',
                    marginBottom: 'var(--space-md)',
                  }}>
                    {/* Number */}
                    <span className="text-small" style={{ 
                      color: 'var(--fg-subtle)', 
                      whiteSpace: 'nowrap',
                      marginTop: '0.45em',
                      lineHeight: 1,
                      flexShrink: 0,
                    }}>
                      ({a.num})
                    </span>

                    <div style={{ flex: 1 }}>
                      {/* Title */}
                      <Reveal as="h3" className="text-heading-sm" style={{
                        lineHeight: 1,
                        marginBottom: 'var(--space-sm)',
                      }}>
                        {a.title}
                      </Reveal>

                      {/* Description */}
                      <p className="text-body" style={{ maxWidth: '22rem' }}>
                        {a.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stat */}
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.5rem',
                  marginTop: 'var(--space-md)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.8rem, 1.2rem + 1.5vw, 3rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    lineHeight: 0.9,
                    color: 'var(--accent)',
                  }}>{a.stat}</span>
                  <span className="text-small">{a.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom border */}
        <div style={{
          width: '100%', height: '1px',
          background: 'currentColor', opacity: 0.12,
        }} />
      </div>

    </section>
  );
}
