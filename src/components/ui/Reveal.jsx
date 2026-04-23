'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

/**
 * Premium TRIONN-style scroll reveal for headings and text blocks.
 * Uses a smooth clip-path wipe mixed with a vertical translation.
 */
export default function Reveal({ children, className = '', as: Component = 'div', delay = 0 }) {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.fromTo(ref.current, {
      clipPath: 'inset(0 0 100% 0)',
      y: 60,
    }, {
      clipPath: 'inset(0 0 0% 0)',
      y: 0,
      duration: 1.2,
      delay: delay,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }, { scope: ref });

  return (
    <Component ref={ref} className={className} style={{ clipPath: 'inset(0 0 100% 0)' }}>
      {children}
    </Component>
  );
}
