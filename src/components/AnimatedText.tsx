import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { cn } from '../utils/cn';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

function Character({
  char,
  scrollYProgress,
  start,
  end
}: {
  char: string;
  scrollYProgress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-20">{char}</span>
      <motion.span
        className="absolute left-0 top-0"
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  return (
    <p ref={container} className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.25em] relative">
          {word.split('').map((char, j) => {
            const start = (i * 10 + j) / (words.length * 10);
            const end = start + 0.1;
            return (
              <Character
                key={j}
                char={char}
                scrollYProgress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </span>
      ))}
    </p>
  );
}
