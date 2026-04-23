'use client';

import { useEffect, useRef, useState } from 'react';
import { useLenis } from 'lenis/react';
import { usePathname, useRouter } from 'next/navigation';
import Magnetic from '@/components/ui/Magnetic';
import Link from 'next/link';

/**
 * TRIONN-style header — mix-blend-mode: difference
 * Features: hide on scroll down, magnetic links, theme toggle, mobile drawer
 */
export default function Navbar() {
  const lenis = useLenis();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#booking' },
  ];

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
  };

  const handleAnchorClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      
      if (pathname === '/') {
        const target = document.querySelector(href);
        if (target) {
          if (lenis) {
            lenis.scrollTo(target);
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        router.push('/' + href);
      }
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`glass-nav ${scrolled ? 'is-scrolled' : ''}`} style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%',
        zIndex: 50,
        color: 'var(--fg)',
        padding: 'clamp(1rem, 1.5vw, 1.5rem) 0',
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <Link href="/" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(0.85rem, 0.7rem + 0.4vw, 1.1rem)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            lineHeight: 1,
          }}>
            SwiftMove<sup style={{ fontSize: '50%', top: '-0.65em' }}>®</sup>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-desktop">
            <ul style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Magnetic>
                    <a href={link.href} className="text-small tr__magnetic tr__cursor__hoverable" style={{
                      display: 'inline-block',
                      padding: '0.5rem',
                    }}
                    onClick={(e) => handleAnchorClick(e, link.href)}>
                      {link.label}
                    </a>
                  </Magnetic>
                </li>
              ))}
              <li>
                <button
                  onClick={toggleTheme}
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

          {/* Mobile hamburger button */}
          <button
            className="nav-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none', /* shown via CSS on mobile */
              flexDirection: 'column',
              gap: '5px',
              padding: '0.5rem',
              zIndex: 60,
            }}
          >
            <span style={{
              display: 'block', width: '24px', height: '2px',
              background: 'currentColor',
              transition: 'all 0.3s cubic-bezier(0.3,0.4,0,1)',
              transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }} />
            <span style={{
              display: 'block', width: '24px', height: '2px',
              background: 'currentColor',
              transition: 'all 0.3s cubic-bezier(0.3,0.4,0,1)',
              opacity: menuOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block', width: '24px', height: '2px',
              background: 'currentColor',
              transition: 'all 0.3s cubic-bezier(0.3,0.4,0,1)',
              transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }} />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen drawer */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 49,
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'var(--space-lg)',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'auto' : 'none',
        transition: 'opacity 0.4s cubic-bezier(0.3,0.4,0,1)',
      }}>
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleAnchorClick(e, link.href)}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 1.5rem + 2vw, 3.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--fg)',
              transform: menuOpen ? 'translateY(0)' : 'translateY(30px)',
              opacity: menuOpen ? 1 : 0,
              transition: `all 0.5s cubic-bezier(0.3,0.4,0,1) ${i * 0.06}s`,
            }}
          >
            {link.label}
          </a>
        ))}

        <div style={{ display: 'flex', gap: '1rem', marginTop: 'var(--space-md)' }}>
          <a href="https://wa.me/911800123456" target="_blank" rel="noopener noreferrer"
            className="btn-primary" onClick={() => setMenuOpen(false)}
            style={{ fontSize: '0.85rem' }}>
            WhatsApp Us
          </a>
          <button onClick={() => { toggleTheme(); }} className="btn-outline" style={{ fontSize: '0.85rem' }}>
            ◑ Theme
          </button>
        </div>
      </div>

      <style>{`
        .glass-nav {
          background: rgba(18, 19, 21, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid transparent;
          transition: border-bottom 0.3s ease;
        }
        .glass-nav.is-scrolled {
          border-bottom: 1px solid var(--border);
        }
        [data-theme='light'] .glass-nav {
          background: rgba(250, 250, 250, 0.7);
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-burger { display: none !important; }
        }
      `}</style>
    </>
  );
}
