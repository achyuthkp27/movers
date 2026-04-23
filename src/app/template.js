'use client';

import { motion } from 'framer-motion';

export default function Template({ children }) {
  return (
    <>
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: '-100%' }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#0d0e10',
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      />
      {children}
    </>
  );
}
