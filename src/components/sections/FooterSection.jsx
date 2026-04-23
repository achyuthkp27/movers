'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

/**
 * TRIONN + TruckNRoll footer fusion — contact-driven
 */
export default function FooterSection() {
  const ref = useRef(null);

  useGSAP(() => {
      // Title line reveal
      gsap.utils.toArray('.footer-line').forEach((el, i) => {
        gsap.fromTo(el, {
          clipPath: 'inset(0 0 100% 0)',
          y: '100%',
        }, {
          clipPath: 'inset(0 0 0% 0)',
          y: '0%',
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: { trigger: ref.current, start: 'top 70%' },
        });
      });

      gsap.fromTo('.footer-reveal', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, stagger: 0.08, duration: 0.7,
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      });
    }, { scope: ref });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={ref} style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}>
      {/* Massive CTA */}
      <div className="container" style={{ paddingTop: 'var(--space-3xl)' }}>
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 1.5rem + 5vw, 8rem)',
            fontWeight: 800,
            lineHeight: 0.85,
            letterSpacing: '-0.03em',
            textTransform: 'lowercase',
          }}>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span className="footer-line" style={{ display: 'block' }}>time to</span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <span className="footer-line" style={{ display: 'block', color: 'var(--accent)' }}>move</span>
            </span>
          </div>

          {/* Contact CTAs under the title */}
          <div className="footer-reveal" style={{
            display: 'flex',
            gap: '1rem',
            marginTop: 'var(--space-lg)',
            flexWrap: 'wrap',
          }}>
            <a href="https://wa.me/911800123456?text=Hi%2C%20I%20want%20to%20book%20a%20move"
              target="_blank" rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <a href="tel:+911800123456" className="btn-outline">
              📞 +91 1800 123 456
            </a>
          </div>
        </div>
      </div>

      {/* TruckNRoll accent rail */}
      <div style={{
        background: 'var(--accent)',
        color: '#121315',
        overflow: 'hidden',
        padding: 'clamp(0.3rem, 0.5vw, 0.5rem) 0',
      }}>
        <div style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'marquee 15s linear infinite',
        }}>
          {[...Array(8)].map((_, i) => (
            <span key={i} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(0.6rem, 0.5rem + 0.3vw, 0.8rem)',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              paddingRight: 'clamp(2rem, 4vw, 4rem)',
            }}>
              SwiftMove® — Premium Relocation — WhatsApp: +91 1800 123 456
            </span>
          ))}
        </div>
      </div>

      {/* Footer grid */}
      <div className="container" style={{
        paddingTop: 'var(--space-2xl)',
        paddingBottom: 'var(--space-lg)',
      }}>
        <div className="footer-reveal grid-3" style={{
          gap: 'var(--space-lg)',
          paddingBottom: 'var(--space-2xl)',
          borderBottom: '1px solid var(--border)',
        }}>
          <div>
            <div className="text-small" style={{ marginBottom: 'var(--space-sm)' }}>Navigate</div>
            {['Home', 'Services', 'Process', 'Why Us', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`} style={{
                display: 'block',
                fontSize: 'clamp(0.85rem, 0.75rem + 0.3vw, 1.1rem)',
                color: 'var(--fg-muted)',
                padding: '4px 0',
                transition: 'color var(--duration-fast)',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--fg-muted)'}
              >{l}</a>
            ))}
          </div>

          <div>
            <div className="text-small" style={{ marginBottom: 'var(--space-sm)' }}>Contact</div>
            <a href="https://wa.me/911800123456" target="_blank" rel="noopener noreferrer" style={{
              display: 'block', fontSize: 'clamp(0.85rem, 0.75rem + 0.3vw, 1.1rem)',
              color: 'var(--fg-muted)', padding: '4px 0',
            }}>WhatsApp</a>
            <a href="tel:+911800123456" style={{
              display: 'block', fontSize: 'clamp(0.85rem, 0.75rem + 0.3vw, 1.1rem)',
              color: 'var(--fg-muted)', padding: '4px 0',
            }}>+91 1800 123 456</a>
            <a href="mailto:hello@swiftmove.in" style={{
              display: 'block', fontSize: 'clamp(0.85rem, 0.75rem + 0.3vw, 1.1rem)',
              color: 'var(--fg-muted)', padding: '4px 0',
            }}>hello@swiftmove.in</a>
          </div>

          <div>
            <div className="text-small" style={{ marginBottom: 'var(--space-sm)' }}>Social</div>
            {['Instagram', 'Twitter', 'LinkedIn'].map(s => (
              <a key={s} href="#" style={{
                display: 'block', fontSize: 'clamp(0.85rem, 0.75rem + 0.3vw, 1.1rem)',
                color: 'var(--fg-muted)', padding: '4px 0',
                transition: 'color var(--duration-fast)',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                onMouseLeave={e => e.target.style.color = 'var(--fg-muted)'}
              >{s}</a>
            ))}
          </div>
        </div>

        <div className="footer-reveal" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 'var(--space-lg)',
          paddingBottom: 'var(--space-md)',
        }}>
          <div className="text-small" style={{ color: 'var(--fg-subtle)' }}>
            © {new Date().getFullYear()} SwiftMove®. All rights reserved.
          </div>
          <button onClick={scrollTop} className="btn-outline" style={{ padding: '0.5rem 1.25rem', fontSize: '0.7rem' }}>
            Back to top ↑
          </button>
        </div>
      </div>

    </footer>
  );
}
