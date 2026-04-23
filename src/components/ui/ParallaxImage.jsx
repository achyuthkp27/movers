'use client';

import { useRef, cloneElement, Children } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsapConfig';

export default function ParallaxImage({ children, className = '', speed = 20 }) {
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(innerRef.current, {
      yPercent: -speed,
    }, {
      yPercent: speed,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className} style={{ overflow: 'hidden', position: 'relative', width: '100%', height: '100%' }}>
      <div ref={innerRef} style={{ position: 'absolute', top: '-15%', left: 0, width: '100%', height: '130%' }}>
        {cloneElement(Children.only(children), {
          style: {
            ...children.props.style,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }
        })}
      </div>
    </div>
  );
}
