'use client';
import Reveal from '@/components/ui/Reveal';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

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
      gsap.utils.toArray('.advantage-item').forEach((el, i) => {
        gsap.fromTo(el, {
          opacity: 0, y: 40,
        }, {
          opacity: 1, y: 0,
          duration: 1,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

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
        <div className="section-title">
          <div className="section-title__left">
            <Reveal as="h3" style={{ color: 'var(--fg)' }}>
              <span style={{ display: 'block', overflow: 'hidden' }}>
                <span className="why-title-line" style={{ display: 'block' }}>why</span>
              </span>
              <span style={{ display: 'block', overflow: 'hidden' }}>
                <span className="why-title-line" style={{ display: 'block' }}>basaveshwara</span>
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

        <div className="grid-2" style={{ gap: 'var(--space-md)' }}>
          {advantages.map((a, i) => (
            <div key={i} className="advantage-item glass-premium" style={{ 
              padding: 'var(--space-xl)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 'clamp(15rem, 20vw, 22rem)',
              opacity: 0,
            }}>
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  marginBottom: 'var(--space-md)',
                }}>
                  <span className="text-mono" style={{ 
                    color: 'var(--accent)', 
                    fontSize: '0.75rem',
                    opacity: 0.6,
                    marginTop: '0.45em',
                  }}>
                    {a.num}
                  </span>

                  <div style={{ flex: 1 }}>
                    <Reveal as="h3" className="text-heading-sm" style={{
                      lineHeight: 1,
                      marginBottom: 'var(--space-sm)',
                    }}>
                      {a.title}
                    </Reveal>

                    <p className="text-body" style={{ maxWidth: '22rem', color: 'var(--fg-subtle)' }}>
                      {a.desc}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '0.5rem',
                marginTop: 'var(--space-md)',
              }}>
                <span className="text-display" style={{
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  color: 'var(--accent)',
                  lineHeight: 1
                }}>{a.stat}</span>
                <span className="text-mono" style={{ fontSize: '0.65rem', opacity: 0.5, letterSpacing: '0.1em' }}>{a.statLabel.toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
