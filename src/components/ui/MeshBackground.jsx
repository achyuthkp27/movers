'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsapConfig';

export default function MeshBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const blobs = containerRef.current.querySelectorAll('.mesh-blob');
    
    blobs.forEach((blob, i) => {
      gsap.to(blob, {
        x: 'random(-100, 100)%',
        y: 'random(-100, 100)%',
        duration: 'random(15, 25)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * -2
      });
    });
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none',
        opacity: 0.6,
        filter: 'blur(100px)',
      }}
    >
      {/* Dynamic Liquid Blobs */}
      <div className="mesh-blob" style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '40vw',
        height: '40vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
        opacity: 0.4
      }} />
      <div className="mesh-blob" style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '50vw',
        height: '50vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-dim) 0%, transparent 70%)',
        opacity: 0.3
      }} />
      <div className="mesh-blob" style={{
        position: 'absolute',
        top: '40%',
        right: '20%',
        width: '35vw',
        height: '35vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, #7000FF 0%, transparent 70%)',
        opacity: 0.15
      }} />
    </div>
  );
}
