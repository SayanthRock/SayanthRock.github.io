import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  let globalIndex = 0;

  return (
    <p ref={container} className={className} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {words.map((word, i) => {
        const chars = word.split('');
        return (
          <span key={i} style={{ display: 'inline-flex', marginRight: '0.25em' }}>
            {chars.map((char, j) => {
              const currentGlobalIndex = globalIndex++;
              return <Char key={j} char={char} progress={scrollYProgress} index={currentGlobalIndex} total={text.length} />;
            })}
          </span>
        );
      })}
    </p>
  );
};

const Char = ({ char, progress, index, total }: { char: string, progress: any, index: number, total: number }) => {
  const start = index / total;
  const end = start + (1 / total);

  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
        {char}
      </motion.span>
    </span>
  );
};
