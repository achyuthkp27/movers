'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';
import Reveal from '@/components/ui/Reveal';

export default function ContactFormSection() {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveType: 'residential',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useGSAP(() => {
    gsap.utils.toArray('.form-line').forEach((el, i) => {
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

    gsap.fromTo('.form-content', { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, stagger: 0.1, duration: 0.8,
      scrollTrigger: { trigger: ref.current, start: 'top 60%' },
    });
  }, { scope: ref });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', moveType: 'residential', message: '' });
      
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={ref} className="section" id="contact-form" style={{
      background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-card) 100%)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container">
        <div className="section-title">
          <div className="section-title__left">
            <Reveal as="h3" style={{ color: 'var(--fg)' }}>
              <span style={{ display: 'block', overflow: 'hidden', marginBottom: '0.1em' }}>
                <span className="form-line" style={{ display: 'block' }}>or use the</span>
              </span>
              <span style={{ display: 'block', overflow: 'hidden' }}>
                <span className="form-line" style={{ display: 'block' }}>contact form</span>
              </span>
            </Reveal>
          </div>
          <div className="section-title__right">
            <Reveal as="h4" style={{ color: 'var(--fg-muted)' }}>
              Fill in your details and we&apos;ll get back to you with a personalized quote within 2 hours.
            </Reveal>
          </div>
        </div>

        <div style={{
          maxWidth: '48rem',
          margin: 'var(--space-2xl) auto 0',
        }}>
          {submitted ? (
            <div className="form-content" style={{
              padding: 'var(--space-lg)',
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--border)',
              textAlign: 'center',
              color: 'var(--accent)',
            }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1rem, 0.8rem + 0.5vw, 1.3rem)',
                fontWeight: 600,
                marginBottom: '0.5rem',
              }}>✓ Message sent!</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--fg-muted)' }}>
                We'll review your request and contact you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div className="form-content" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--space-md)',
              }}>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label htmlFor="name" style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--fg-subtle)',
                    marginBottom: '0.5rem',
                  }}>Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-xs)',
                      color: 'var(--fg)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent)';
                      e.target.style.boxShadow = '0 0 0 2px var(--accent-glow)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--fg-subtle)',
                    marginBottom: '0.5rem',
                  }}>Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-xs)',
                      color: 'var(--fg)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent)';
                      e.target.style.boxShadow = '0 0 0 2px var(--accent-glow)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--fg-subtle)',
                    marginBottom: '0.5rem',
                  }}>Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-xs)',
                      color: 'var(--fg)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent)';
                      e.target.style.boxShadow = '0 0 0 2px var(--accent-glow)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <label htmlFor="moveType" style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--fg-subtle)',
                    marginBottom: '0.5rem',
                  }}>Move Type *</label>
                  <select
                    id="moveType"
                    name="moveType"
                    value={formData.moveType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-xs)',
                      color: 'var(--fg)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent)';
                      e.target.style.boxShadow = '0 0 0 2px var(--accent-glow)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="residential">Residential Move</option>
                    <option value="commercial">Commercial Move</option>
                    <option value="international">International Move</option>
                    <option value="local">Local Moving</option>
                  </select>
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <label htmlFor="message" style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--fg-subtle)',
                    marginBottom: '0.5rem',
                  }}>Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your move, any special items, timeline, etc."
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-xs)',
                      color: 'var(--fg)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      resize: 'vertical',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--accent)';
                      e.target.style.boxShadow = '0 0 0 2px var(--accent-glow)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'var(--border)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  alignSelf: 'flex-start',
                  padding: '0.875rem 2rem',
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  border: 'none',
                  borderRadius: 'var(--radius-xs)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.6 : 1,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.target.style.background = 'var(--accent-dim)';
                    e.target.style.transform = 'scale(1.02)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--accent)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                {loading ? 'Sending...' : 'Get Free Quote'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
