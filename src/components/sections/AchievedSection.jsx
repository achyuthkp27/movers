'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

/**
 * TRIONN tr__home__achieved style — 2×2 grid achievement blocks
 * with scroll-triggered entrance (rotate + slide in),
 * hover color fill, and staggered character swap animation.
 * Adapted for SwiftMove logistics context.
 */
const achievements = [
  {
    value: '10K',
    suffix: '+',
    label: 'successful\nmoves',
    hoverBg: '#dd3500e6',    // TRIONN red-orange
    hoverFg: '#E0EEEE',
  },
  {
    value: '50',
    suffix: '+',
    label: 'cities\ncovered',
    hoverBg: '#dce5e5e6',    // TRIONN light grey
    hoverFg: '#121315',
  },
  {
    value: '99',
    suffix: '%',
    label: 'client\nsatisfaction',
    hoverBg: '#b0ddcae6',    // TRIONN mint green
    hoverFg: '#121315',
  },
  {
    value: '24',
    suffix: '/7',
    label: 'support &\ntracking',
    hoverBg: '#f4e342e6',    // TRIONN yellow
    hoverFg: '#121315',
  },
];

export default function AchievedSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const blocks = gsap.utils.toArray('.achieved-block');

    // Scroll-triggered entrance: alternate slide from left/right with rotation
    blocks.forEach((block, i) => {
      const fromLeft = i % 2 === 0;
      gsap.timeline({
        scrollTrigger: {
          trigger: block,
          start: 'top bottom',
          end: 'bottom 85%',
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
        .set(block, {
          x: fromLeft ? '-100%' : '100%',
          rotate: fromLeft ? -45 : 45,
          opacity: 0,
        })
        .to(block, {
          x: 0,
          rotate: 0,
          opacity: 1,
        });
    });

    // Hover: staggered character animation (swap number__one ↔ number__two)
    blocks.forEach((block) => {
      const numOne = block.querySelector('.achieved-num-one');
      const numTwo = block.querySelector('.achieved-num-two');
      if (!numOne || !numTwo) return;

      // Wrap each character in a <span> for stagger animation
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
        duration: 0.8,
        ease: 'power3.inOut',
        stagger: 0.08,
      });
      tl.from(
        chars2,
        {
          yPercent: 100,
          duration: 0.8,
          ease: 'power3.inOut',
          stagger: 0.08,
        },
        0.1
      );

      block.addEventListener('mouseenter', () => tl.play());
      block.addEventListener('mouseleave', () => tl.reverse());
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="section"
      id="achieved"
      aria-label="SwiftMove Achievements"
    >
      <div className="container">
        {/* Section header */}
        <div className="section-title">
          <div className="section-title__left">
            <h3
              style={{ color: 'var(--fg)' }}
              className="text-heading-xl"
            >
              our<br />numbers
            </h3>
          </div>
          <div className="section-title__right">
            <h4 style={{ color: 'var(--fg-muted)' }}>
              Thousands of families and businesses
              <br />
              trust SwiftMove to deliver — on time,
              <br />
              every time.
            </h4>
          </div>
        </div>

        {/* 2×2 Grid */}
        <div className="achieved-grid">
          {achievements.map((a, i) => (
            <div
              key={i}
              className={`achieved-block achieved-block-${i + 1}`}
              style={{
                '--hover-bg': a.hoverBg,
                '--hover-fg': a.hoverFg,
              }}
            >
              {/* Background overlay for hover */}
              <div className="achieved-block__overlay" />

              <div className="achieved-block__wrapper">
                {/* Number area */}
                <div className="achieved-number">
                  <div className="achieved-num-one">
                    {a.value}
                    <span className="achieved-sup">{a.suffix}</span>
                  </div>
                  <div className="achieved-num-two">
                    {a.value}
                    <span className="achieved-sup">{a.suffix}</span>
                  </div>
                </div>

                {/* Label */}
                <div className="achieved-category">
                  {a.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .achieved-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 1.25rem;
        }

        @media (min-width: 768px) {
          .achieved-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .achieved-block {
          will-change: transform, color, background;
          z-index: 0;
          background: var(--bg-elevated);
          border-radius: 1.5rem;
          padding: clamp(2rem, 1.5rem + 2vw, 3.5rem);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: color 0.5s ease;
        }

        /* Staggered offset: even blocks shift down on desktop */
        @media (min-width: 768px) {
          .achieved-block:nth-child(2n) {
            margin-top: 10rem;
            margin-bottom: -10rem;
          }
        }

        /* Hover overlay */
        .achieved-block__overlay {
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          z-index: -1;
          background: transparent;
          transition: background 0.5s ease;
        }

        .achieved-block:hover .achieved-block__overlay {
          background: var(--hover-bg);
        }

        .achieved-block:hover {
          color: var(--hover-fg);
        }

        /* Number styling */
        .achieved-number {
          font-family: var(--font-mono);
          font-size: clamp(4rem, 3rem + 4vw, 7rem);
          line-height: 0.8;
          letter-spacing: -5px;
          width: 100%;
          margin-bottom: clamp(2.5rem, 2rem + 2vw, 5rem);
          position: relative;
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .achieved-sup {
          vertical-align: top;
          font-size: 65%;
          margin-top: -0.5rem;
          display: inline-block;
          overflow: hidden;
        }

        .achieved-num-two {
          position: absolute;
          top: 0;
          left: 0;
        }

        /* Category label */
        .achieved-category {
          text-align: right;
          align-self: flex-end;
          width: 100%;
          font-family: var(--font-display);
          font-size: clamp(1.1rem, 0.8rem + 0.8vw, 1.9rem);
          font-weight: 700;
          line-height: 1.6rem;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          white-space: pre-line;
          transition: all 0.5s ease;
        }

        .achieved-block__wrapper {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: clamp(10rem, 8rem + 6vw, 16rem);
        }

        /* Mobile: show hover colors always */
        @media (max-width: 767px) {
          .achieved-block__overlay {
            background: var(--hover-bg);
          }
          .achieved-block {
            color: var(--hover-fg);
          }
          .achieved-block-1 {
            color: #E0EEEE;
          }
        }

        /* Light theme adjustments */
        :global([data-theme='light']) .achieved-block {
          background: rgba(220, 229, 229, 0.7);
        }
      `}</style>
    </section>
  );
}
