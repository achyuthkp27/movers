'use client';

import { useEffect, useRef } from 'react';

/**
 * Premium Synthesized Sound Engine
 * Uses Web Audio API to create zero-latency UI sound effects
 * (clicks and whooshes) without needing external .mp3 assets.
 */
export function useSoundEffects() {
  const audioCtx = useRef(null);

  useEffect(() => {
    // Initialize audio context only on first user interaction to bypass auto-play policies
    const initAudio = () => {
      if (!audioCtx.current) {
        audioCtx.current = new (window.AudioContext || window.webkitAudioContext)();
      }
    };
    window.addEventListener('click', initAudio, { once: true });
    window.addEventListener('keydown', initAudio, { once: true });
    window.addEventListener('pointerdown', initAudio, { once: true });
    return () => {
      window.removeEventListener('click', initAudio);
      window.removeEventListener('keydown', initAudio);
      window.removeEventListener('pointerdown', initAudio);
    };
  }, []);

  // Soft mechanical "tick" for clicks
  const playClick = () => {
    if (!audioCtx.current) return;
    const ctx = audioCtx.current;
    if (ctx.state === 'suspended') ctx.resume();
    
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);
    
    gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  };

  // Subtle airy "whoosh" for hovering over massive text or buttons
  const playHover = () => {
    if (!audioCtx.current) return;
    const ctx = audioCtx.current;
    if (ctx.state === 'suspended') ctx.resume();

    const bufferSize = ctx.sampleRate * 0.15; // 150ms
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 800; // Muted, low frequency whoosh
    
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.02, ctx.currentTime + 0.05);
    gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.15);
    
    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    noise.start();
  };

  return { playClick, playHover };
}
