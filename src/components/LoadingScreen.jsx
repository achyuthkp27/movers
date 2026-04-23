'use client';

import { useEffect, useState, useRef } from 'react';

/**
 * TRIONN-style cinematic loader
 * - Counter in bottom-right (DM Mono)
 * - Simple fade exit — no GSAP dependency to avoid load failures
 */
export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let frame;
    let current = 0;
    const run = () => {
      const increment = current < 80 ? 2.5 : current < 95 ? 0.8 : 0.3;
      current = Math.min(current + increment, 100);
      setProgress(Math.round(current));
      if (current < 100) {
        frame = requestAnimationFrame(run);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => setVisible(false), 600);
        }, 200);
      }
    };
    frame = requestAnimationFrame(run);
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 10000,
      background: '#121315',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      opacity: exiting ? 0 : 1,
      transition: 'opacity 0.6s ease',
      pointerEvents: exiting ? 'none' : 'auto',
    }}>
      {/* Logo / Brand */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <div style={{
          width: '80px', height: '80px', margin: '0 auto 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C5FCFC" strokeWidth="1.5">
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
            <path d="M15 18H9" />
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
            <circle cx="17" cy="18" r="2" /><circle cx="7" cy="18" r="2" />
          </svg>
        </div>
        <p style={{
          fontFamily: "'Syne', system-ui, sans-serif",
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#a8b5b5',
          lineHeight: 1.2,
        }}>
          <span style={{ display: 'block' }}>SwiftMove®</span>
          <span style={{ display: 'block', marginTop: '4px', opacity: 0.5 }}>Loading Experience</span>
        </p>
      </div>

      {/* Counter — bottom right (TRIONN style) */}
      <div style={{
        position: 'absolute',
        bottom: 'clamp(1rem, 3vw, 3rem)',
        right: 'clamp(1.5rem, 5vw, 5rem)',
        fontFamily: "'DM Mono', monospace",
        fontSize: '1.75rem',
        letterSpacing: '-2px',
        lineHeight: 1,
        color: '#C5FCFC',
      }}>
        {String(progress).padStart(3, '0')}
      </div>

      {/* Progress bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, height: '2px',
        background: '#C5FCFC', width: `${progress}%`,
        transition: 'width 0.1s linear',
      }} />
    </div>
  );
}
