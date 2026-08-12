import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../utils/cn';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

function Character({ char, start, end, progress }: { char: string, start: number, end: number, progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <span className="relative">
      <span className="opacity-20">{char}</span>
      <motion.span
        className="absolute left-0 top-0 text-white"
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p ref={containerRef} className={cn("relative flex flex-wrap", className)}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = start + (1 / characters.length);

        return (
          <Character
            key={i}
            char={char}
            start={start}
            end={end}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
}
