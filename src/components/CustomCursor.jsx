'use client';

import { useEffect, useRef, useState } from 'react';
import { useSoundEffects } from '@/hooks/useSoundEffects';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const state = useRef({ type: 'default', text: '' });
  const { playHover, playClick } = useSoundEffects();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      return (
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0)
      );
    };
    const isTouch = checkTouchDevice();
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || isReduced) {
      setHidden(true);
      return;
    }

    // Fallback: If a touch event happens later, unmount immediately
    const onTouchStart = () => {
      setHidden(true);
    };
    window.addEventListener('touchstart', onTouchStart, { passive: true });

    const cursor = cursorRef.current;
    const textEl = textRef.current;
    if (!cursor || !textEl) return;

    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.cursor = 'none';

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;
      
      const s = state.current;
      const scale = s.type === 'text' ? 4 : s.type === 'hover' ? 2.5 : 1;
      
      cursor.style.transform = `translate(${pos.current.x - 10}px, ${pos.current.y - 10}px) scale(${scale})`;
      
      if (s.type === 'text') {
        textEl.innerText = s.text;
        textEl.style.opacity = 1;
        textEl.style.transform = `scale(${1/scale})`;
      } else {
        textEl.style.opacity = 0;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    const onEnterHoverable = (e) => { 
      playHover();
      const dataCursor = e.target.closest('[data-cursor]');
      if (dataCursor) {
        state.current = { type: 'text', text: dataCursor.getAttribute('data-cursor') };
      } else {
        state.current = { type: 'hover', text: '' }; 
      }
    };
    const onLeaveHoverable = () => { state.current = { type: 'default', text: '' }; };
    const onClickHoverable = () => { playClick(); };

    const attachHoverables = () => {
      const hoverables = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .btn-primary, .btn-outline, [data-cursor]'
      );
      hoverables.forEach(el => {
        el.style.cursor = 'none';
        el.addEventListener('mouseenter', onEnterHoverable);
        el.addEventListener('mouseleave', onLeaveHoverable);
        el.addEventListener('click', onClickHoverable);
      });
      return hoverables;
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseenter', onMove);
    rafId.current = requestAnimationFrame(animate);

    let hoverables = attachHoverables();
    const observer = new MutationObserver(() => {
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', onEnterHoverable);
        el.removeEventListener('mouseleave', onLeaveHoverable);
        el.removeEventListener('click', onClickHoverable);
      });
      hoverables = attachHoverables();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseenter', onMove);
      cancelAnimationFrame(rafId.current);
      document.body.style.cursor = '';
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', onEnterHoverable);
        el.removeEventListener('mouseleave', onLeaveHoverable);
        el.removeEventListener('click', onClickHoverable);
      });
      observer.disconnect();
      window.removeEventListener('touchstart', onTouchStart);
    };
  }, []);

  if (hidden) {
    return null;
  }

  return (
    <>
      <style>{`
        @media (pointer: coarse), (max-width: 768px) {
          #custom-cursor { display: none !important; }
        }
      `}</style>
      <div
        id="custom-cursor"
        ref={cursorRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: '-10px',
        left: '-10px',
        width: '20px',
        height: '20px',
        borderRadius: '9999px',
        backgroundColor: 'var(--accent)',
        pointerEvents: 'none',
        zIndex: 99999,
        mixBlendMode: 'normal',
        boxShadow: '0 0 12px var(--accent-dim)',
        transition: 'transform 0.1s linear',
        willChange: 'transform',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid var(--accent)',
      }}
    >
      <span 
        ref={textRef} 
        aria-hidden="true"
        style={{
          color: 'var(--bg)',
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          opacity: 0,
          pointerEvents: 'none',
          transition: 'opacity 0.2s',
          textShadow: '0 0 4px var(--accent-glow)',
        }}
      />
    </div>
    </>
  );
}
