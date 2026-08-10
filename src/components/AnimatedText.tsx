import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { type ComponentPropsWithoutRef } from 'react';
import { cn } from '../utils/cn';

interface AnimatedTextProps extends ComponentPropsWithoutRef<'p'> {
  text: string;
}

function AnimatedChar({ char, progress, range }: { char: string, progress: any, range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative">
      <span className="opacity-0">{char}</span>
      <motion.span
        className="absolute left-0 top-0"
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className, ...props }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={cn("flex flex-wrap gap-x-1 sm:gap-x-1.5 md:gap-x-2", className)} {...props}>
      {words.map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} className="flex relative">
          {word.split("").map((char, charIndex) => {
            const start = (wordIndex * 5 + charIndex) / (text.length);
            const end = start + 1 / text.length;

            return (
              <AnimatedChar
                key={`char-${charIndex}`}
                char={char}
                progress={scrollYProgress}
                range={[Math.max(0, start - 0.1), Math.min(1, end + 0.1)]}
              />
            );
          })}
        </span>
      ))}
    </p>
  );
}
