import { useRef, type ComponentPropsWithRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps extends ComponentPropsWithRef<'p'> {
  text: string;
}

export function AnimatedText({ text, className = "", ...props }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(" ");

  return (
    <p ref={ref} className={className} {...props}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);

        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className="relative inline-block mr-[0.25em] mt-[0.1em]">
      {characters.map((char, i) => {
        const start = range[0] + (i * step);
        const end = range[0] + ((i + 1) * step);

        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {char}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({ children, progress, range }: { children: string, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{children}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {children}
      </motion.span>
    </span>
  );
};
