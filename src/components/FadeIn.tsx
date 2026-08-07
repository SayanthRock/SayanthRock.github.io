import { motion } from 'framer-motion';
import { type ReactNode, type ElementType } from 'react';
import { cn } from '../utils/cn';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  y?: number;
  x?: number;
  as?: ElementType;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  className,
  y = 30,
  x = 0,
  as = 'div',
}: FadeInProps) {
  const MotionComponent = (motion as any)[as as string] || motion.div;

  return (
    <MotionComponent
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
}
