import { useRef, type ComponentPropsWithRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../utils/cn';

interface AnimatedTextProps extends ComponentPropsWithRef<'p'> {
  text: string;
}

export function AnimatedText({ text, className, ref, ...props }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const characters = text.split('');

  return (
    <p
      ref={(node) => {
        // Handle both refs
        (containerRef as any).current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) (ref as any).current = node;
      }}
      className={cn("relative inline-block", className)}
      {...props}
    >
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = start + (1 / characters.length);

        return (
          <span key={i} className="relative inline-block">
            {/* Invisible placeholder to maintain layout */}
            <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
            {/* Absolute animated character */}
            <motion.span
              className="absolute left-0 top-0"
              style={{
                opacity: useTransform(scrollYProgress, [start, end], [0.2, 1])
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
