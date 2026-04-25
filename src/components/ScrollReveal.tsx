import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  y = 24,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
