'use client';

import { ReactLenis } from 'lenis/react';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsapConfig';

export default function LenisProvider({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      autoRaf={false}
      root
      options={{
        lerp: 0.08,
        duration: 1.4,
        smoothWheel: true,
        wheelMultiplier: 0.8,
      }}
    >
      {children}
    </ReactLenis>
  );
}
