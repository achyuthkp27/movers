'use client';

import { useEffect, useRef, useState } from 'react';
import Magnetic from '@/components/ui/Magnetic';

/**
 * TRIONN-style header — mix-blend-mode: difference
 * Updated: nav links are contact-oriented (WhatsApp, Call)
 */
export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 100 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#booking' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%',
      zIndex: 50,
      mixBlendMode: 'difference',
      color: '#E0EEEE',
      transition: `transform ${hidden ? '0.4s' : '0.6s'} cubic-bezier(0.3,0.4,0,1), visibility 0s ${hidden ? '0.4s' : '0s'}`,
      transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
      visibility: hidden ? 'hidden' : 'visible',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 0,
        position: 'relative',
        top: 'clamp(1.5rem, 3vw, 2.5rem)',
      }}>
        <a href="#" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(0.85rem, 0.7rem + 0.4vw, 1.1rem)',
          fontWeight: 700,
          letterSpacing: '-0.01em',
          lineHeight: 1,
        }}>
          SwiftMove<sup style={{ fontSize: '50%', top: '-0.65em' }}>®</sup>
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <ul style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Magnetic>
                  <a href={link.href} className="text-small tr__magnetic tr__cursor__hoverable" style={{
                    display: 'inline-block',
                    padding: '0.5rem',
                  }}>
                    {link.label}
                  </a>
                </Magnetic>
              </li>
            ))}
            <li>
              <button 
                onClick={() => {
                  const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
                  document.documentElement.setAttribute('data-theme', newTheme);
                }}
                className="text-small tr__cursor__hoverable"
                style={{
                  display: 'inline-block',
                  padding: '0.5rem',
                  color: 'var(--accent)',
                }}
              >
                ◑ Theme
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}
