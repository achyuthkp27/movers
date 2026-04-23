'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from '@/lib/gsapConfig';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const overlayRef = useRef(null);
  const containerRef = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setDisplayChildren(children);
        gsap.to(overlayRef.current, {
          y: '-100%',
          duration: 0.8,
          ease: 'power4.inOut',
        });
        gsap.fromTo(containerRef.current, {
          opacity: 0,
          y: 20
        }, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: 0.4
        });
      }
    });

    tl.to(overlayRef.current, {
      y: '0%',
      duration: 0.6,
      ease: 'power4.inOut'
    });

  }, [pathname, children]);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <div 
        ref={overlayRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--accent)',
          zIndex: 9999,
          transform: 'translateY(100%)',
          pointerEvents: 'none'
        }}
      />

      <div ref={containerRef}>
        {displayChildren}
      </div>
    </div>
  );
}
