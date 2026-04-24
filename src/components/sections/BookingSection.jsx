'use client';
import Reveal from '@/components/ui/Reveal';
import Magnetic from '@/components/ui/Magnetic';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

export default function BookingSection() {
  const ref = useRef(null);

  useGSAP(() => {
      gsap.utils.toArray('.contact-title-line').forEach((el, i) => {
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

      gsap.fromTo('.contact-content', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, stagger: 0.1, duration: 0.8,
        scrollTrigger: { trigger: ref.current, start: 'top 60%' },
      });

      gsap.fromTo('.contact-bg-text', {
        x: '10%'
      }, {
        x: '-10%',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }, { scope: ref });

  return (
    <section ref={ref} className="section" id="booking" style={{ position: 'relative', overflow: 'hidden' }}>
      
      <div className="contact-bg-text text-stroke" style={{
        position: 'absolute',
        top: '10%',
        left: 0,
        fontSize: 'clamp(8rem, 20vw, 15rem)',
        fontWeight: 900,
        opacity: 0.03,
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        CONTACT BASAVESHWARA CONTACT BASAVESHWARA
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-title">
          <div className="section-title__left">
            <Reveal as="h3" style={{ color: 'var(--fg)' }}>
              <span style={{ display: 'block', overflow: 'hidden' }}>
                <span className="contact-title-line" style={{ display: 'block' }}>get in</span>
              </span>
              <span style={{ display: 'block', overflow: 'hidden' }}>
                <span className="contact-title-line" style={{ display: 'block' }}>touch</span>
              </span>
            </Reveal>
          </div>
          <div className="section-title__right">
            <h4 style={{ color: 'var(--fg-muted)' }}>
              Skip the forms. Just reach out<br />
              directly and we&apos;ll take it from there.
            </h4>
          </div>
        </div>

        <div className="grid-3" style={{
          gap: 'var(--space-md)',
        }}>
          <Magnetic strength={0.08}>
            <a href="https://wa.me/918660616322?text=Hi%2C%20I%20need%20help%20with%20my%20move"
              target="_blank" rel="noopener noreferrer"
              className="contact-content glass-premium"
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-xl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 'clamp(18rem, 25vw, 24rem)',
                transition: 'transform 0.4s var(--ease), box-shadow 0.4s var(--ease)',
                textDecoration: 'none',
                opacity: 0,
                color: 'var(--fg)'
              }}
            >
              <div>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-lg)',
                  color: 'var(--bg)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="text-heading-md" style={{ lineHeight: 0.9, marginBottom: 'var(--space-sm)' }}>WhatsApp</div>
                <p className="text-body" style={{ opacity: 0.7 }}>
                  Get a quote in minutes. Our AI coordinator handles your inventory via chat.
                </p>
              </div>
              <div className="text-mono" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', opacity: 0.5 }}>
                START CHAT →
              </div>
            </a>
          </Magnetic>

          <Magnetic strength={0.08}>
            <a href="tel:+918660616322"
              className="contact-content glass-premium"
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-xl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 'clamp(18rem, 25vw, 24rem)',
                transition: 'transform 0.4s var(--ease)',
                textDecoration: 'none',
                color: 'var(--fg)',
                opacity: 0,
              }}
            >
              <div>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-lg)',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="text-heading-md" style={{ lineHeight: 0.9, marginBottom: 'var(--space-sm)' }}>Call Now</div>
                <p className="text-body" style={{ opacity: 0.7 }}>
                  Speak directly with a move manager for complex relocations.
                </p>
              </div>
              <div>
                <div className="text-heading-sm" style={{ color: 'var(--accent)', marginBottom: '4px' }}>Manju: 86606 16322</div>
                <div className="text-heading-sm" style={{ color: 'var(--accent)', marginBottom: '4px' }}>Shivu: 89709 80231</div>
                <div className="text-mono" style={{ fontSize: '0.65rem', opacity: 0.5 }}>AVAILABLE 24x7</div>
              </div>
            </a>
          </Magnetic>

          <Magnetic strength={0.08}>
            <div className="contact-content glass-premium" style={{
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-xl)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 'clamp(18rem, 25vw, 24rem)',
              opacity: 0,
            }}>
              <div>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--space-lg)',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="text-heading-md" style={{ lineHeight: 0.9, marginBottom: 'var(--space-sm)' }}>Visit Us</div>
                <p className="text-body" style={{ opacity: 0.7 }}>
                  Experience centers across major cities for face-to-face planning.
                </p>
              </div>
              <div className="text-mono" style={{ fontSize: '0.7rem', opacity: 0.5 }}>
                BASHETTIHALLI, DODDABALLAPUR - 561203
              </div>
            </div>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
