'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let frame;
    let current = 0;
    let isLoaded = document.readyState === 'complete';

    const handleLoad = () => {
      isLoaded = true;
    };

    if (!isLoaded) {
      window.addEventListener('load', handleLoad);
    }

    const run = () => {
      if (isLoaded && current >= 80) {
        current += 5;
      } else {
        const increment = current < 60 ? 2.5 : current < 90 ? 0.8 : 0.1;
        current = Math.min(current + increment, isLoaded ? 100 : 95);
      }
      
      current = Math.min(current, 100);
      setProgress(Math.round(current));
      
      if (current < 100) {
        frame = requestAnimationFrame(run);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => setVisible(false), 800);
        }, 300);
      }
    };
    
    frame = requestAnimationFrame(run);
    
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="loader-screen" style={{
      position: 'fixed',
      inset: 0,
      zIndex: 10000,
      background: 'var(--bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      opacity: exiting ? 0 : 1,
      transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0, 1)',
      pointerEvents: exiting ? 'none' : 'auto',
      overflow: 'hidden',
    }}>

      <div className="loader-scene">
        <div className="loader-sky">
          <div className="loader-cloud loader-cloud--1" />
          <div className="loader-cloud loader-cloud--2" />
          <div className="loader-cloud loader-cloud--3" />
        </div>

        <div className="loader-ground">
          <div className="loader-road">
            <div className="loader-road__surface" />
            <div className="loader-road__markings">
              <div className="loader-road__dash-track">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="loader-road__dash" />
                ))}
              </div>
            </div>
            <div className="loader-road__edge loader-road__edge--top" />
            <div className="loader-road__edge loader-road__edge--bottom" />
          </div>

          <div className="loader-truck-wrapper">
            <div className="loader-truck-bounce">
              <div className="loader-dust">
                <span className="loader-dust__particle loader-dust__particle--1" />
                <span className="loader-dust__particle loader-dust__particle--2" />
                <span className="loader-dust__particle loader-dust__particle--3" />
                <span className="loader-dust__particle loader-dust__particle--4" />
                <span className="loader-dust__particle loader-dust__particle--5" />
              </div>

              <svg
                className="loader-truck-svg"
                viewBox="0 0 120 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8" y="10" width="52" height="30" rx="3"
                  fill="var(--bg-elevated)"
                  stroke="var(--accent)"
                  strokeWidth="2"
                />
                <line x1="20" y1="15" x2="20" y2="35" stroke="var(--accent)" strokeWidth="0.8" opacity="0.3" />
                <line x1="34" y1="15" x2="34" y2="35" stroke="var(--accent)" strokeWidth="0.8" opacity="0.3" />
                <line x1="48" y1="15" x2="48" y2="35" stroke="var(--accent)" strokeWidth="0.8" opacity="0.3" />

                <text
                  x="34" y="28"
                  textAnchor="middle"
                  fill="var(--accent)"
                  fontSize="5"
                  fontFamily="'DM Mono', monospace"
                  letterSpacing="0.5"
                  opacity="0.6"
                >
                  SWIFT
                </text>

                <path
                  d="M60 18 L60 40 L85 40 L85 26 L75 18 Z"
                  fill="var(--bg-elevated)"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M66 20 L74 20 L82 27 L82 33 L66 33 Z"
                  fill="var(--accent)"
                  opacity="0.15"
                  stroke="var(--accent)"
                  strokeWidth="1"
                />
                <line x1="74" y1="20" x2="74" y2="33" stroke="var(--accent)" strokeWidth="0.8" opacity="0.4" />

                <rect x="83" y="30" width="4" height="6" rx="1" fill="var(--accent)" opacity="0.7" />
                <circle cx="85" cy="33" r="1.5" fill="var(--accent)" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite" />
                </circle>

                <rect x="5" y="38" width="82" height="3" rx="1.5" fill="var(--bg-card)" stroke="var(--accent)" strokeWidth="1" />

                <g className="loader-wheel loader-wheel--front">
                  <circle cx="75" cy="44" r="7" fill="var(--bg-secondary)" stroke="var(--accent)" strokeWidth="2" />
                  <circle cx="75" cy="44" r="3" fill="var(--bg)" stroke="var(--accent)" strokeWidth="1" />
                  <line x1="75" y1="38" x2="75" y2="50" stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" />
                  <line x1="69" y1="44" x2="81" y2="44" stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" />
                  <line x1="70.8" y1="39.8" x2="79.2" y2="48.2" stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" />
                  <line x1="79.2" y1="39.8" x2="70.8" y2="48.2" stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" />
                </g>

                <g className="loader-wheel loader-wheel--rear">
                  <circle cx="25" cy="44" r="7" fill="var(--bg-secondary)" stroke="var(--accent)" strokeWidth="2" />
                  <circle cx="25" cy="44" r="3" fill="var(--bg)" stroke="var(--accent)" strokeWidth="1" />
                  <line x1="25" y1="38" x2="25" y2="50" stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" />
                  <line x1="19" y1="44" x2="31" y2="44" stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" />
                  <line x1="20.8" y1="39.8" x2="29.2" y2="48.2" stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" />
                  <line x1="29.2" y1="39.8" x2="20.8" y2="48.2" stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" />
                </g>

                <rect x="3" y="36" width="6" height="2" rx="1" fill="var(--fg-subtle)" opacity="0.5" />
              </svg>

              <div className="loader-exhaust">
                <span className="loader-exhaust__puff loader-exhaust__puff--1" />
                <span className="loader-exhaust__puff loader-exhaust__puff--2" />
                <span className="loader-exhaust__puff loader-exhaust__puff--3" />
              </div>
            </div>
          </div>

          <div className="loader-scenery">
            <div className="loader-scenery__track">
              <div className="loader-milestone loader-milestone--1">▸</div>
              <div className="loader-milestone loader-milestone--2">▸</div>
            </div>
          </div>
        </div>

        <div className="loader-brand">
          <span className="loader-brand__name">SwiftMove®</span>
          <span className="loader-brand__tagline">Loading Experience</span>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: 'clamp(1rem, 3vw, 3rem)',
        right: 'clamp(1.5rem, 5vw, 5rem)',
        fontFamily: "'DM Mono', monospace",
        fontSize: '1.75rem',
        letterSpacing: '-2px',
        lineHeight: 1,
        color: 'var(--accent)',
      }}>
        {String(progress).padStart(3, '0')}
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, height: '2px',
        background: 'var(--accent)', width: `${progress}%`,
        transition: 'width 0.1s linear',
        boxShadow: '0 0 12px var(--accent-dim)',
      }} />

      <style jsx>{`
        .loader-scene {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          position: relative;
          width: clamp(280px, 60vw, 500px);
        }

        .loader-sky {
          position: absolute;
          top: -60px;
          left: 0;
          right: 0;
          height: 80px;
          overflow: hidden;
        }

        .loader-cloud {
          position: absolute;
          background: var(--fg-subtle);
          opacity: 0.06;
          border-radius: 50px;
          animation: cloud-drift linear infinite;
        }
        .loader-cloud--1 {
          width: 80px; height: 16px;
          top: 10px; left: -80px;
          animation-duration: 8s;
        }
        .loader-cloud--2 {
          width: 50px; height: 12px;
          top: 30px; left: -50px;
          animation-duration: 12s;
          animation-delay: 2s;
        }
        .loader-cloud--3 {
          width: 65px; height: 14px;
          top: 50px; left: -65px;
          animation-duration: 10s;
          animation-delay: 5s;
        }
        @keyframes cloud-drift {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(500px + 100%)); }
        }

        .loader-ground {
          position: relative;
          width: 100%;
          height: 120px;
        }

        .loader-road {
          position: absolute;
          bottom: 0;
          left: -20%;
          right: -20%;
          height: 40px;
        }
        .loader-road__surface {
          position: absolute;
          inset: 0;
          background: var(--bg-card);
          border-radius: 4px;
        }
        .loader-road__edge--top {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--fg-subtle);
          opacity: 0.3;
        }
        .loader-road__edge--bottom {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--fg-subtle);
          opacity: 0.15;
        }

        .loader-road__markings {
          position: absolute;
          top: 50%;
          left: 0; right: 0;
          height: 3px;
          transform: translateY(-50%);
          overflow: hidden;
        }
        .loader-road__dash-track {
          display: flex;
          gap: 18px;
          animation: road-scroll 1.2s linear infinite;
          width: max-content;
        }
        .loader-road__dash {
          width: 24px;
          height: 3px;
          background: var(--accent);
          opacity: 0.25;
          border-radius: 2px;
          flex-shrink: 0;
        }
        @keyframes road-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-42px); }
        }

        .loader-truck-wrapper {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
        }
        .loader-truck-bounce {
          animation: truck-bounce 0.6s ease-in-out infinite;
          position: relative;
        }
        .loader-truck-svg {
          width: clamp(100px, 22vw, 160px);
          height: auto;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
        }
        @keyframes truck-bounce {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-6px) rotate(-0.8deg);
          }
          50% {
            transform: translateY(-2px) rotate(0.3deg);
          }
          75% {
            transform: translateY(-8px) rotate(-0.5deg);
          }
        }

        .loader-wheel {
          transform-origin: center;
          animation: wheel-spin 0.5s linear infinite;
        }
        .loader-wheel--front {
          transform-origin: 75px 44px;
        }
        .loader-wheel--rear {
          transform-origin: 25px 44px;
        }
        @keyframes wheel-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loader-dust {
          position: absolute;
          left: -8px;
          bottom: 2px;
          z-index: -1;
        }
        .loader-dust__particle {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--fg-subtle);
          opacity: 0;
          animation: dust-fly 1s ease-out infinite;
        }
        .loader-dust__particle--1 {
          animation-delay: 0s;
        }
        .loader-dust__particle--2 {
          animation-delay: 0.2s;
          width: 4px; height: 4px;
        }
        .loader-dust__particle--3 {
          animation-delay: 0.4s;
          width: 5px; height: 5px;
        }
        .loader-dust__particle--4 {
          animation-delay: 0.6s;
          width: 3px; height: 3px;
        }
        .loader-dust__particle--5 {
          animation-delay: 0.8s;
          width: 4px; height: 4px;
        }
        @keyframes dust-fly {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          100% {
            transform: translate(-35px, -18px) scale(0);
            opacity: 0;
          }
        }

        .loader-exhaust {
          position: absolute;
          left: -4px;
          top: 55%;
          z-index: -1;
        }
        .loader-exhaust__puff {
          position: absolute;
          border-radius: 50%;
          background: var(--fg-subtle);
          opacity: 0;
          animation: exhaust-puff 1.5s ease-out infinite;
        }
        .loader-exhaust__puff--1 {
          width: 8px; height: 8px;
          animation-delay: 0s;
        }
        .loader-exhaust__puff--2 {
          width: 12px; height: 12px;
          animation-delay: 0.5s;
        }
        .loader-exhaust__puff--3 {
          width: 10px; height: 10px;
          animation-delay: 1s;
        }
        @keyframes exhaust-puff {
          0% {
            transform: translate(0, 0) scale(0.4);
            opacity: 0.2;
          }
          50% {
            opacity: 0.1;
          }
          100% {
            transform: translate(-50px, -20px) scale(1.5);
            opacity: 0;
          }
        }

        .loader-scenery {
          position: absolute;
          bottom: 42px;
          left: -20%;
          right: -20%;
          height: 20px;
          overflow: hidden;
          z-index: 0;
        }
        .loader-scenery__track {
          display: flex;
          gap: 200px;
          animation: scenery-scroll 4s linear infinite;
          width: max-content;
        }
        .loader-milestone {
          color: var(--fg-subtle);
          opacity: 0.15;
          font-size: 1.2rem;
        }
        @keyframes scenery-scroll {
          0% { transform: translateX(500px); }
          100% { transform: translateX(-200px); }
        }

        .loader-brand {
          text-align: center;
          margin-top: 0.5rem;
        }
        .loader-brand__name {
          display: block;
          font-family: 'Syne', system-ui, sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--fg-muted);
        }
        .loader-brand__tagline {
          display: block;
          margin-top: 4px;
          font-family: 'Syne', system-ui, sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--fg-muted);
          opacity: 0.5;
        }

        @media (prefers-reduced-motion: reduce) {
          .loader-truck-bounce,
          .loader-wheel,
          .loader-dust__particle,
          .loader-exhaust__puff,
          .loader-road__dash-track,
          .loader-scenery__track,
          .loader-cloud {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
