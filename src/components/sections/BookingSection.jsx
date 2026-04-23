'use client';
import Reveal from '@/components/ui/Reveal';
import Magnetic from '@/components/ui/Magnetic';


import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

/**
 * Contact Section — WhatsApp/Call focused
 * TRIONN editorial layout, no form — just direct contact actions
 */
export default function BookingSection() {
  const ref = useRef(null);

  useGSAP(() => {
      // Title reveal
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
    }, { scope: ref });

  return (
    <section ref={ref} className="section" id="booking">
      <div className="container">
        {/* Section Title */}
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

        {/* Contact Cards Grid */}
        <div className="grid-3" style={{
          gap: 'var(--space-sm)',
        }}>
          {/* WhatsApp — Primary */}
          <Magnetic strength={0.08}>
            <a href="https://wa.me/911800123456?text=Hi%2C%20I%20need%20help%20with%20my%20move"
              target="_blank" rel="noopener noreferrer"
              className="contact-content"
              style={{
                background: 'linear-gradient(145deg, #075e54 0%, #128c7e 50%, #25d366 100%)',
                borderRadius: 'var(--radius-xs) var(--radius-xs) var(--radius-lg) var(--radius-xs)',
                padding: 'var(--space-lg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 'clamp(16rem, 25vw, 22rem)',
                color: '#fff',
                transition: 'transform var(--duration) var(--ease)',
                textDecoration: 'none',
                opacity: 0,
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(0.98)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style={{ marginBottom: 'var(--space-md)' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div className="text-heading-md" style={{
                  lineHeight: 0.9,
                  marginBottom: 'var(--space-sm)',
                }}>WhatsApp</div>
                <p style={{ fontSize: '0.85rem', opacity: 0.85, lineHeight: 1.4 }}>
                  Fastest way to get a quote. Send us your details and we&apos;ll respond within minutes.
                </p>
              </div>
              <div style={{
                fontSize: '0.7rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', opacity: 0.7,
                marginTop: 'var(--space-md)',
              }}>
                Tap to chat →
              </div>
            </a>
          </Magnetic>

          {/* Phone Call */}
          <Magnetic strength={0.08}>
            <a href="tel:+911800123456"
              className="contact-content"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xs)',
                padding: 'var(--space-lg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 'clamp(16rem, 25vw, 22rem)',
                transition: 'transform var(--duration) var(--ease), border-color var(--duration-fast)',
                textDecoration: 'none',
                color: 'var(--fg)',
                opacity: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(0.98)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              <div>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"
                  style={{ marginBottom: 'var(--space-md)' }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className="text-heading-md" style={{
                  lineHeight: 0.9,
                  marginBottom: 'var(--space-sm)',
                }}>Call Us</div>
                <p className="text-body" style={{ maxWidth: '20rem' }}>
                  Speak directly with a move coordinator. No IVR, no waiting — a real person picks up.
                </p>
              </div>
              <div>
                <div className="text-heading-sm" style={{
                  color: 'var(--accent)',
                  marginBottom: '4px',
                }}>+91 1800 123 456</div>
                <div className="text-small">Toll-free • Available 24/7</div>
              </div>
            </a>
          </Magnetic>

          {/* Visit / Office */}
          <Magnetic strength={0.08}>
            <div className="contact-content" style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xs) var(--radius-xs) var(--radius-xs) var(--radius-lg)',
              padding: 'var(--space-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 'clamp(16rem, 25vw, 22rem)',
              opacity: 0,
            }}>
              <div>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5"
                  style={{ marginBottom: 'var(--space-md)' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="text-heading-md" style={{
                  lineHeight: 0.9,
                  marginBottom: 'var(--space-sm)',
                }}>Visit Us</div>
                <p className="text-body" style={{ maxWidth: '20rem' }}>
                  Walk into any of our experience centers for a face-to-face consultation.
                </p>
              </div>
              <div>
                <div style={{
                  fontSize: 'clamp(0.85rem, 0.75rem + 0.2vw, 0.95rem)',
                  color: 'var(--fg-muted)',
                  lineHeight: 1.5,
                }}>
                  HSR Layout, Bangalore<br />
                  Mon – Sat, 9 AM – 7 PM
                </div>
              </div>
            </div>
          </Magnetic>
        </div>

        {/* Quick message strip */}
        <div className="contact-content" style={{
          marginTop: 'var(--space-lg)',
          padding: 'var(--space-md) var(--space-lg)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-md)',
          opacity: 0,
        }}>
          <div>
            <div className="text-heading-sm">Ready to move?</div>
            <div className="text-small" style={{ marginTop: '4px' }}>
              Average response time: under 5 minutes
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="https://wa.me/911800123456?text=Hi%2C%20I%20need%20a%20quote%20for%20my%20move"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: '0.8rem' }}
            >
              💬 WhatsApp Quote
            </a>
            <a href="tel:+911800123456" className="btn-outline" style={{ fontSize: '0.8rem' }}>
              📞 Call Now
            </a>
            <a href="mailto:hello@swiftmove.in" className="btn-outline" style={{ fontSize: '0.8rem' }}>
              ✉️ Email
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
