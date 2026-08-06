import { FadeIn } from './FadeIn';
import { cn } from '../utils/cn';

interface SectionTitleProps {
  title: string;
  className?: string;
}

export function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <FadeIn delay={0}>
      <h2 className={cn(
        "font-black uppercase text-center text-[clamp(2.5rem,8vw,120px)] mb-12 sm:mb-20 leading-none tracking-tight",
        className
      )}>
        {title}
      </h2>
    </FadeIn>
  );
}
