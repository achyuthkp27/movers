'use client';

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';
import Reveal from '@/components/ui/Reveal';

const achievements = [
  {
    value: '10K',
    suffix: '+',
    label: 'Successful Moves',
    subLabel: 'Across 28 States',
    accent: 'var(--accent)',
  },
  {
    value: '50',
    suffix: '+',
    label: 'Cities Covered',
    subLabel: 'Global Network',
    accent: '#7000FF',
  },
  {
    value: '99',
    suffix: '%',
    label: 'Client Satisfaction',
    subLabel: 'Certified Excellence',
    accent: '#00D1FF',
  },
  {
    value: '24',
    suffix: '/7',
    label: 'Support & Tracking',
    subLabel: 'Always Connected',
    accent: '#FF00E5',
  },
];

export default function AchievedSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Parallax background text
    gsap.fromTo('.achieved-bg-text', {
      x: '-20%'
    }, {
      x: '20%',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    // TRIONN Scroll-triggered entrance: alternate slide from left/right with rotation
    const cards = gsap.utils.toArray('.achieved-card');
    cards.forEach((card, i) => {
      const fromLeft = i % 2 === 0;
      gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top bottom',
          end: 'bottom 85%',
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
        .fromTo(card, {
          x: fromLeft ? '-100%' : '100%',
          rotate: fromLeft ? -45 : 45,
          opacity: 0,
        }, {
          x: 0,
          rotate: 0,
          opacity: 1,
        });
    });

    // Character Swap Animation
    cards.forEach((card) => {
      const numOne = card.querySelector('.achieved-num-one');
      const numTwo = card.querySelector('.achieved-num-two');
      if (!numOne || !numTwo) return;

      const wrapChars = (el) => {
        const text = el.textContent;
        el.textContent = '';
        return [...text].map((ch) => {
          const span = document.createElement('span');
          span.textContent = ch;
          span.style.display = 'inline-block';
          el.appendChild(span);
          return span;
        });
      };

      const chars1 = wrapChars(numOne);
      const chars2 = wrapChars(numTwo);

      const tl = gsap.timeline({ paused: true });
      tl.to(chars1, {
        yPercent: -100,
        duration: 0.6,
        ease: 'power3.inOut',
        stagger: 0.05,
      });
      tl.fromTo(chars2, {
        yPercent: 100,
      }, {
        yPercent: 0,
        duration: 0.6,
        ease: 'power3.inOut',
        stagger: 0.05,
      }, 0.05);

      card.addEventListener('mouseenter', () => tl.play());
      card.addEventListener('mouseleave', () => tl.reverse());
    });

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      className="section" 
      id="achieved" 
      style={{ position: 'relative', overflow: 'hidden', paddingBottom: 'clamp(8rem, 20vw, 15rem)' }}
    >
      {/* Background Stroke */}
      <div className="achieved-bg-text text-stroke" style={{
        position: 'absolute',
        bottom: '10%',
        left: 0,
        fontSize: 'clamp(8rem, 20vw, 18rem)',
        fontWeight: 900,
        opacity: 0.03,
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        EXCELLENCE IN MOTION EXCELLENCE IN MOTION
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-title">
          <div className="section-title__left">
            <Reveal as="h3" style={{ color: 'var(--fg)' }}>
              our<br />numbers
            </Reveal>
          </div>
          <div className="section-title__right">
            <h4 style={{ color: 'var(--fg-muted)' }}>
              Trust is earned through precision.<br />
              Here is how we deliver value<br />
              at a global scale.
            </h4>
          </div>
        </div>

        {/* 2x2 Staggered Grid with fixed logic */}
        <div className="achieved-grid">
          {achievements.map((a, i) => (
            <div key={i} className="achieved-card-wrapper">
              <div className="achieved-card glass-premium" style={{
                padding: 'var(--space-2xl)',
                borderRadius: 'var(--radius-xl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: 'clamp(18rem, 25vw, 24rem)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}>
                {/* Corner Accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: `radial-gradient(circle at top right, ${a.accent}20, transparent 70%)`,
                  pointerEvents: 'none'
                }} />

                {/* Character Swap Number Area */}
                <div style={{ 
                  position: 'relative',
                  height: 'clamp(4rem, 6vw, 6rem)',
                  overflow: 'hidden',
                  marginBottom: 'var(--space-md)',
                  display: 'flex',
                  alignItems: 'baseline'
                }}>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'baseline' }}>
                     <div className="achieved-num-one text-display" style={{ 
                       fontSize: 'clamp(4rem, 6vw, 6rem)', 
                       lineHeight: 1,
                       color: 'var(--fg)'
                     }}>
                       {a.value}
                     </div>
                     <div className="achieved-num-two text-display" style={{ 
                       position: 'absolute',
                       top: 0,
                       left: 0,
                       fontSize: 'clamp(4rem, 6vw, 6rem)', 
                       lineHeight: 1,
                       color: 'var(--accent)'
                     }}>
                       {a.value}
                     </div>
                     <span className="text-display" style={{ 
                       fontSize: 'clamp(2rem, 3vw, 3rem)', 
                       color: 'var(--accent)',
                       marginLeft: '0.25rem',
                       zIndex: 10
                     }}>
                       {a.suffix}
                     </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-heading-sm" style={{ marginBottom: '0.5rem', lineHeight: 1 }}>{a.label}</h3>
                  <p className="text-mono" style={{ 
                    fontSize: '0.75rem', 
                    letterSpacing: '0.2em', 
                    color: 'var(--fg-subtle)',
                    textTransform: 'uppercase'
                  }}>
                    {a.subLabel}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .achieved-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--space-lg);
        }

        @media (min-width: 768px) {
          .achieved-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .achieved-card-wrapper:nth-child(2n) {
            margin-top: 8rem;
          }
          /* This ensures the section height accounts for the offset cards */
          .achieved-grid {
            padding-bottom: 8rem;
          }
        }
      `}</style>
    </section>
  );
}
