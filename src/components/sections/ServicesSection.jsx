'use client';
import Reveal from '@/components/ui/Reveal';
import ParallaxImage from '@/components/ui/ParallaxImage';
import Image from 'next/image';
import Link from 'next/link';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

const services = [
  {
    num: '01',
    title: 'Home Relocation',
    desc: 'Every detail is handled. Every deadline met. No stress. No scrambling. Just a team that makes sure everything arrives exactly as planned.',
    src: '/services/home.webp',
    slug: 'home-relocation',
  },
  {
    num: '02',
    title: 'Office Shifting',
    desc: 'We sync with your timeline, your challenges, and your priorities. Zero downtime guaranteed. Your business never stops moving.',
    src: '/services/office.webp',
    slug: 'office-shifting',
  },
  {
    num: '03',
    title: 'Vehicle Transport',
    desc: 'From the road to your door, safety is at the heart of everything we do. Inspected carriers, strict protocols, experienced crew.',
    src: '/services/vehicle.webp',
    slug: 'vehicle-transport',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);

  useGSAP(() => {
      gsap.utils.toArray('.service-item').forEach((el, i) => {
        // Inview border animation
        gsap.fromTo(el.querySelector('.service-border'), {
          scaleX: 0,
        }, {
          scaleX: 1,
          duration: 1,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        });

        // Content reveal
        gsap.fromTo(el.querySelector('.service-content'), {
          opacity: 0, y: 30,
        }, {
          opacity: 1, y: 0,
          duration: 0.8,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%' },
        });

        // Image Mask Reveal
        gsap.fromTo(el.querySelector('.service-image-mask'), {
          clipPath: 'inset(100% 0% 0% 0%)'
        }, {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.4,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 70%',
          }
        });
      });
    }, { scope: ref });

  return (
    <section ref={ref} className="section" id="services" style={{ paddingBottom: 'var(--space-3xl)' }}>
      <div className="container">
        {/* TRIONN section title */}
        <div className="section-title">
          <div className="section-title__left">
            <Reveal as="h3" style={{ color: 'var(--fg)' }}>our<br />services</Reveal>
          </div>
          <div className="section-title__right">
            <h4 style={{ color: 'var(--fg-muted)' }}>
              We don&apos;t just move your belongings.<br />
              We make sure everything gets where<br />
              it needs to be, when it matters most.
            </h4>
          </div>
        </div>

        {/* TruckNRoll grid-list pattern */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'var(--space-2xl)',
        }}>
          {services.map((s, i) => (
            <div key={i} className="service-item" style={{
              paddingTop: 'var(--space-md)',
            }}>
              {/* Inview border */}
              <div className="service-border" style={{
                width: '100%', height: '1px',
                background: 'var(--fg)',
                transformOrigin: '0 0',
                opacity: 0.15,
                marginBottom: 'var(--space-lg)',
              }} />

              <div className="service-content" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  {/* Number */}
                  <span className="text-small" style={{ 
                    color: 'var(--fg-subtle)', 
                    whiteSpace: 'nowrap',
                    marginTop: '0.45em',
                    lineHeight: 1,
                    flexShrink: 0,
                  }}>
                    ({s.num})
                  </span>

                  <div style={{ flex: 1 }}>
                    {/* Title */}
                    <Reveal as="h3" className="text-heading-md" style={{
                      lineHeight: 1,
                      marginBottom: 'var(--space-sm)',
                    }}>
                      {s.title}
                    </Reveal>

                    {/* Description */}
                    <p className="text-body" style={{ maxWidth: '25rem', marginBottom: 'var(--space-md)', color: 'var(--fg-subtle)' }}>
                      {s.desc}
                    </p>
                  </div>
                </div>

                {/* Visual card with Mask */}
                <Link href={`/services/${s.slug}`} style={{ display: 'block' }}>
                  <div className="service-image-mask" data-cursor="view" style={{
                    aspectRatio: '16/10',
                    width: '100%',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <ParallaxImage speed={15}>
                      <Image 
                        src={s.src} 
                        alt={s.title} 
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </ParallaxImage>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
