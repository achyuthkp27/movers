'use client';

import { useEffect, useRef } from 'react';

export default function FluidCanvas() {
  const innerRef = useRef(null);

  useEffect(() => {
    const container = innerRef.current;
    if (!container) return;

    let fluid = null;
    let canvas = null;
    let initTimeout;

    const initFluid = () => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        initTimeout = setTimeout(initFluid, 100);
        return;
      }

      if (window.innerWidth < 768) {
        return;
      }

      import('webgl-fluid-enhanced').then((mod) => {
        const WebGLFluid = mod.default;

        try {
          fluid = new WebGLFluid(container);

          container.style.position = 'absolute';
          container.style.top = '0';
          container.style.left = '0';
          container.style.width = '100%';
          container.style.height = '100%';

          canvas = container.querySelector('canvas');
          if (canvas) {
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style.position = 'absolute';
            canvas.style.top = '0';
            canvas.style.left = '0';
          }

          fluid.setConfig({
            simResolution: 128,
            dyeResolution: 768,
            densityDissipation: 3.6,
            velocityDissipation: 0.6,
            pressure: 0.5,
            pressureIterations: 20,
            curl: 2,
            splatRadius: 0.16,
            splatForce: 6000,
            shading: false,
            colorUpdateSpeed: 10,
            colorPalette: ['#C5FCFC'],
            hover: true,
            backgroundColor: '#000000',
            transparent: true,
            brightness: 0.7,
            bloom: false,
            sunrays: false,
          });

          fluid.start();

          const forwardEvent = (e) => {
            if (!canvas) return;
            const eventType = e.type === 'pointermove' ? 'mousemove' : 
                              e.type === 'pointerdown' ? 'mousedown' : 'mouseup';
            const newEvent = new MouseEvent(eventType, {
              clientX: e.clientX,
              clientY: e.clientY,
              movementX: e.movementX,
              movementY: e.movementY,
              bubbles: true,
              cancelable: true,
              view: window,
            });
            Object.defineProperty(newEvent, 'offsetX', { get: () => e.clientX });
            Object.defineProperty(newEvent, 'offsetY', { get: () => e.clientY });
            canvas.dispatchEvent(newEvent);
          };

          window.addEventListener('pointermove', forwardEvent);
          window.addEventListener('pointerdown', forwardEvent);
          window.addEventListener('pointerup', forwardEvent);

          container._cleanup = () => {
            window.removeEventListener('pointermove', forwardEvent);
            window.removeEventListener('pointerdown', forwardEvent);
            window.removeEventListener('pointerup', forwardEvent);
          };
        } catch (err) {
          console.warn('WebGL Fluid init error:', err);
        }
      });
    };

    initTimeout = setTimeout(initFluid, 100);

    return () => {
      clearTimeout(initTimeout);
      if (container && container._cleanup) container._cleanup();
      if (fluid && typeof fluid.stop === 'function') {
        try { fluid.stop(); } catch (e) {}
      }
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none',
      mixBlendMode: 'normal',
      opacity: 0.85,
      overflow: 'hidden',
    }}>
      <div
        ref={innerRef}
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
