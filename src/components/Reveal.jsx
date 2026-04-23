'use client';
import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0, style, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1], delay }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}
