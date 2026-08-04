import React, { useMemo, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../utils/cn';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Character = ({ char, progress, start, end }: { char: string, progress: any, start: number, end: number }) => {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span
        className="absolute left-0 top-0"
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const wordsData = useMemo(() => {
    const splitWords = text.split(" ");
    return splitWords.map(word => word.split(""));
  }, [text]);

  return (
    <p ref={containerRef} className={cn("flex flex-wrap justify-center", className)}>
      {wordsData.map((chars, i) => (
        <span key={i} className="mr-[0.25em] mb-[0.1em] relative inline-block">
          {chars.map((char, j) => {
            const start = (i * 10 + j) / (wordsData.length * 10);
            const end = start + (1 / (wordsData.length * 10));

            return (
              <Character
                key={j}
                char={char}
                progress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </span>
      ))}
    </p>
  );
};
