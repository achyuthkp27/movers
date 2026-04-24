'use client';
import Reveal from '@/components/ui/Reveal';
import Link from 'next/link';


import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

export default function StorySection() {
  const ref = useRef(null);

  useGSAP(() => {
      gsap.utils.toArray('.story-word').forEach((el) => {
        gsap.fromTo(el, {
          clipPath: 'inset(0 0 100% 0)',
          y: '100%',
        }, {
          clipPath: 'inset(0 0 0% 0)',
          y: '0%',
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      gsap.fromTo('.story-body', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.8,
        scrollTrigger: { trigger: '.story-body', start: 'top 80%' },
      });
    }, { scope: ref });

  return (
    <section ref={ref} className="section" id="story">
      <div className="container">
        <div className="section-title">
          <div className="section-title__left">
            <Reveal as="h3" style={{ color: 'var(--fg)' }}>
              who<br />we are
            </Reveal>
          </div>
        </div>

        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          {['WE', 'MOVE', 'YOUR', 'WORLD'].map((word, i) => (
            <div key={word} className="story-word" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 1rem + 10vw, 14rem)',
              fontWeight: 800,
              lineHeight: 0.85,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: i === 1 ? 'var(--accent)' : 'var(--fg)',
              opacity: i === 1 ? 1 : 0.12,
            }}>
              {word}
            </div>
          ))}
        </div>

        <div className="story-body grid-2" style={{
          gap: 'var(--space-lg)',
          maxWidth: '900px',
          marginLeft: 'auto',
        }}>
          <div>
            <p className="text-body" style={{ marginBottom: '1rem' }}>
              Basaveshwara Packers & Movers is a trusted name for packers and movers in Doddaballapur and nearby areas. We provide reliable house shifting, packing, loading, and unloading services at affordable prices.
            </p>
            <p className="text-body">
              Our experienced team ensures safe and secure transportation of your household goods across Karnataka. Whether you are shifting locally or to another city, we offer complete relocation solutions.
            </p>
          </div>
          <div>
            <p className="text-body" style={{ marginBottom: '1rem' }}>
              Our office is located in Bashettihalli, Doddaballapur, but we provide expert moving services in <Link href="/packers-and-movers-in-bangalore" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Bangalore</Link>, <Link href="/packers-and-movers-in-yelahanka" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Yelahanka</Link>, <Link href="/packers-and-movers-in-devanahalli" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Devanahalli</Link>, and <Link href="/packers-and-movers-in-doddaballapur" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Doddaballapur</Link>. <b>Our services are available all over Karnataka.</b>
            </p>
            <p className="text-body">
              Call us now for fast and hassle-free moving services.
            </p>
            <a href="#services" className="btn-outline" style={{ marginTop: 'var(--space-md)' }}>
              Our services
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
